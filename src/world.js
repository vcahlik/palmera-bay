import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import {
  rng, rr, pick, mulberry32, coastX, coastSlope, COAST_GLSL, bvdX, roads, onOtherRoad, blocks, intersections,
  heightAt, terrainNormal, borderSDF, onPier, BVD_W, BVD_SW, BEACH_W, XS, ZS, BORDER, PIER, MARINA, GX0, GZ0, GS, GN,
} from './layout.js';
import { Props } from './props.js';

export { coastX, bvdX, heightAt, surfaceAt, nearestRoadPoint, PIER, GX0, GZ0, GS } from './layout.js';

// ---------------------------------------------------------------------------
// Palette + shared sky / fog GLSL
// ---------------------------------------------------------------------------
export const C = (h) => new THREE.Color(h);
const v3 = (c) => `vec3(${c.r.toFixed(4)},${c.g.toFixed(4)},${c.b.toFixed(4)})`;

export const SUN_DIR = new THREE.Vector3(-0.96, 0.062, 0.27).normalize();

const PAL = {
  zenith: C('#120e36'), upper: C('#35215f'), mid: C('#b0477c'),
  hazeSun: C('#ffae66'), hazeAway: C('#8a4d80'),
  sunTop: C('#fff6cf'), sunBot: C('#ff6f5e'), glow: C('#ff8a3d'),
  cloudDark: C('#4a2858'), cloudLit: C('#ff8a7e'), cloudRim: C('#ffcf8a'),
};

export const SKY_GLSL = /* glsl */`
const vec3 SK_SUN = vec3(${SUN_DIR.x.toFixed(5)},${SUN_DIR.y.toFixed(5)},${SUN_DIR.z.toFixed(5)});
const vec3 SK_ZENITH = ${v3(PAL.zenith)};
const vec3 SK_UPPER = ${v3(PAL.upper)};
const vec3 SK_MID = ${v3(PAL.mid)};
const vec3 SK_HAZE_SUN = ${v3(PAL.hazeSun)};
const vec3 SK_HAZE_AWAY = ${v3(PAL.hazeAway)};
const vec3 SK_GLOW = ${v3(PAL.glow)};
vec3 fogDirColor(vec3 d) {
  vec2 h = normalize(d.xz + vec2(1e-5));
  float s = max(dot(h, normalize(SK_SUN.xz)), 0.0);
  return mix(SK_HAZE_AWAY, SK_HAZE_SUN, pow(s, 2.5));
}
vec3 skyBase(vec3 d) {
  vec3 hz = fogDirColor(d);
  float y = max(d.y, 0.0);
  float t = sqrt(y);
  vec3 c = mix(hz, SK_MID, smoothstep(0.02, 0.42, t));
  c = mix(c, SK_UPPER, smoothstep(0.3, 0.7, t));
  c = mix(c, SK_ZENITH, smoothstep(0.6, 1.0, t));
  float sd = max(dot(d, SK_SUN), 0.0);
  c += SK_GLOW * (pow(sd, 5.0) * 0.35 + pow(sd, 40.0) * 0.9) * (1.0 - smoothstep(0.0, 0.6, y) * 0.6);
  return c;
}
`;

export const FOG_DENSITY = 0.0021;

// Direction-aware fog: warm orange toward the sun, dusty mauve away from it.
THREE.ShaderChunk.fog_pars_vertex = `#ifdef USE_FOG
  varying float vFogDepth;
  varying vec3 vFogDir;
#endif`;
THREE.ShaderChunk.fog_vertex = `#ifdef USE_FOG
  vFogDepth = -mvPosition.z;
  vFogDir = (vec4(mvPosition.xyz, 0.0) * viewMatrix).xyz;
#endif`;
THREE.ShaderChunk.fog_pars_fragment = `#ifdef USE_FOG
  uniform vec3 fogColor;
  varying float vFogDepth;
  varying vec3 vFogDir;
  #ifdef FOG_EXP2
    uniform float fogDensity;
  #else
    uniform float fogNear;
    uniform float fogFar;
  #endif
  ${SKY_GLSL}
#endif`;
THREE.ShaderChunk.fog_fragment = `#ifdef USE_FOG
  #ifdef FOG_EXP2
    float fogFactor = 1.0 - exp(-fogDensity * fogDensity * vFogDepth * vFogDepth);
  #else
    float fogFactor = smoothstep(fogNear, fogFar, vFogDepth);
  #endif
  gl_FragColor.rgb = mix(gl_FragColor.rgb, fogDirColor(normalize(vFogDir)), fogFactor);
#endif`;

// ---------------------------------------------------------------------------
// Collision grid (AABBs + circles)
// ---------------------------------------------------------------------------
class Colliders {
  constructor(cell = 16) { this.cell = cell; this.map = new Map(); }
  _insert(o, x0, z0, x1, z1) {
    const c = this.cell, m = 3;
    for (let cx = Math.floor((x0 - m) / c); cx <= Math.floor((x1 + m) / c); cx++)
      for (let cz = Math.floor((z0 - m) / c); cz <= Math.floor((z1 + m) / c); cz++) {
        const k = cx * 10007 + cz;
        let a = this.map.get(k); if (!a) this.map.set(k, a = []);
        a.push(o);
      }
  }
  box(x0, z0, x1, z1, tall = false) { this._insert({ t: 0, x0, z0, x1, z1, tall }, x0, z0, x1, z1); }
  circle(x, z, r) { this._insert({ t: 1, x, z, r }, x - r, z - r, x + r, z + r); }
  // is (x,z) within `pad` metres of a building?
  inTall(x, z, pad) {
    const list = this.map.get(Math.floor(x / this.cell) * 10007 + Math.floor(z / this.cell));
    if (!list) return false;
    for (const o of list) if (o.tall && x > o.x0 - pad && x < o.x1 + pad && z > o.z0 - pad && z < o.z1 + pad) return true;
    return false;
  }
  // anything solid within `pad` of (x,z)? used when scattering props
  occupied(x, z, pad) { return !!this.resolve(x, z, pad); }
  // returns push-out {nx,nz,d} or null for a circle at (x,z) radius r
  resolve(x, z, r) {
    const k = Math.floor(x / this.cell) * 10007 + Math.floor(z / this.cell);
    const list = this.map.get(k);
    if (!list) return null;
    let best = null;
    for (const o of list) {
      let dx, dz, d, pen;
      if (o.t === 0) {
        const px = Math.max(o.x0, Math.min(x, o.x1)), pz = Math.max(o.z0, Math.min(z, o.z1));
        dx = x - px; dz = z - pz; d = Math.hypot(dx, dz);
        if (d === 0) { // center inside box: push out through nearest side
          const l = x - o.x0, rgt = o.x1 - x, t = z - o.z0, b = o.z1 - z;
          const m = Math.min(l, rgt, t, b);
          if (m === l) { dx = -1; dz = 0; } else if (m === rgt) { dx = 1; dz = 0; } else if (m === t) { dx = 0; dz = -1; } else { dx = 0; dz = 1; }
          pen = m + r;
          if (!best || pen > best.d) best = { nx: dx, nz: dz, d: pen };
          continue;
        }
        pen = r - d;
      } else {
        dx = x - o.x; dz = z - o.z; d = Math.hypot(dx, dz);
        pen = r + o.r - d;
      }
      if (pen > 0 && (!best || pen > best.d)) best = { nx: dx / d, nz: dz / d, d: pen };
    }
    return best;
  }
}

// ---------------------------------------------------------------------------
// Textures
// ---------------------------------------------------------------------------
export const TILE_W = 3.2, TILE_H = 3.6, TILES = 8;

function makeWindowTextures() {
  const S = 32, N = S * TILES;
  const base = document.createElement('canvas'); base.width = base.height = N;
  const emi = document.createElement('canvas'); emi.width = emi.height = N;
  const b = base.getContext('2d'), e = emi.getContext('2d');
  b.fillStyle = '#ffffff'; b.fillRect(0, 0, N, N);
  e.fillStyle = '#000000'; e.fillRect(0, 0, N, N);
  const lit = ['#ffd28a', '#ffc070', '#ffe2a8', '#ffb36b', '#ffd9b0', '#9fe6ff', '#ff9fd0'];
  for (let ty = 0; ty < TILES; ty++) {
    for (let tx = 0; tx < TILES; tx++) {
      const x = tx * S, y = ty * S;
      const wx = x + 7, wy = y + 8, ww = S - 14, wh = S - 13;
      const on = rng() < 0.42;
      b.fillStyle = '#b8b0a8'; b.fillRect(wx - 1, wy + wh, ww + 2, 2); // sill
      if (on) {
        const col = rng() < 0.85 ? pick(lit.slice(0, 5)) : pick(lit.slice(5));
        b.fillStyle = col; b.fillRect(wx, wy, ww, wh);
        e.fillStyle = col; e.fillRect(wx, wy, ww, wh);
        // blinds / silhouettes
        if (rng() < 0.4) { e.fillStyle = 'rgba(0,0,0,0.5)'; e.fillRect(wx, wy, ww, Math.floor(wh * rr(0.2, 0.6))); }
        if (rng() < 0.3) { e.fillStyle = 'rgba(0,0,0,0.6)'; e.fillRect(wx + ww / 2 - 1, wy, 2, wh); }
      } else {
        b.fillStyle = '#2b2a4a'; b.fillRect(wx, wy, ww, wh);
        b.fillStyle = '#5a4a78'; b.fillRect(wx, wy, ww, 3); // sky reflection
        b.fillStyle = '#3a3558'; b.fillRect(wx + ww / 2 - 1, wy, 2, wh);
      }
    }
  }
  // corner pixel must be plain wall (used for roofs / trims)
  b.fillStyle = '#ffffff'; b.fillRect(0, N - 4, 4, 4);
  e.fillStyle = '#000000'; e.fillRect(0, N - 4, 4, 4);
  const mk = (cv) => {
    const t = new THREE.CanvasTexture(cv);
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.magFilter = THREE.NearestFilter;
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 4;
    return t;
  };
  return { map: mk(base), emissive: mk(emi) };
}

function radialTexture(stops) {
  const cv = document.createElement('canvas'); cv.width = cv.height = 64;
  const g = cv.getContext('2d');
  const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  for (const [p, a] of stops) gr.addColorStop(p, `rgba(255,255,255,${a})`);
  g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(cv);
}

// ---------------------------------------------------------------------------
// Glow points (lamp halos, bulbs, car lights)
// ---------------------------------------------------------------------------
export function makeGlowMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: { uScale: { value: 300 } },
    vertexShader: /* glsl */`
      attribute float gsize; attribute vec3 gcolor; varying vec3 vColor; uniform float uScale;
      void main(){
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vColor = gcolor * smoothstep(1.5, 7.0, -mv.z);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = clamp(gsize * uScale / -mv.z, 1.5, 110.0);
      }`,
    fragmentShader: /* glsl */`
      varying vec3 vColor;
      void main(){
        float d = length(gl_PointCoord - 0.5) * 2.0;
        if (d > 1.0) discard;
        float a = pow(1.0 - d, 2.4) * 0.9 + smoothstep(0.28, 0.0, d) * 1.2;
        gl_FragColor = vec4(vColor * a, 1.0);
      }`,
    blending: THREE.AdditiveBlending, depthWrite: false, transparent: true,
  });
}
export function glowPoints(list, material) {
  const pos = new Float32Array(list.length * 3), col = new Float32Array(list.length * 3), size = new Float32Array(list.length);
  list.forEach((p, i) => {
    pos.set([p.x, p.y, p.z], i * 3); col.set([p.c.r, p.c.g, p.c.b], i * 3); size[i] = p.s;
  });
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('gcolor', new THREE.BufferAttribute(col, 3));
  g.setAttribute('gsize', new THREE.BufferAttribute(size, 1));
  const p = new THREE.Points(g, material);
  p.frustumCulled = false;
  return p;
}

// ---------------------------------------------------------------------------
// Batched axis-aligned boxes: windowed walls (lit windows via emissive map)
// and HDR neon strips. Everything static in the city goes through here.
// ---------------------------------------------------------------------------
export class BoxBatch {
  constructor() { this.geos = []; this.neonGeos = []; }
  box(w, h, d, x, y, z, color, o = {}) {
    const gq = new THREE.BoxGeometry(w, h, d);
    gq.translate(x, y + h / 2, z);
    const uv = gq.attributes.uv, n = gq.attributes.normal;
    const col = new Float32Array(uv.count * 3);
    const c = C(color), rc = o.roof ? C(o.roof) : c.clone().multiplyScalar(0.62);
    for (let i = 0; i < uv.count; i++) {
      const ny = n.getY(i), nx = n.getX(i);
      if (!o.windows || Math.abs(ny) > 0.5) uv.setXY(i, 0.004, 0.004);
      else {
        const span = Math.abs(nx) > 0.5 ? d : w;
        uv.setXY(i, (o.ou || 0) + uv.getX(i) * span / (TILE_W * TILES), (o.ov || 0) + uv.getY(i) * h / (TILE_H * TILES));
      }
      const cc = ny > 0.5 ? rc : c;
      col.set([cc.r, cc.g, cc.b], i * 3);
    }
    gq.setAttribute('color', new THREE.BufferAttribute(col, 3));
    this.geos.push(gq);
  }
  neon(w, h, d, x, y, z, color, k = 3.2) {
    const gq = new THREE.BoxGeometry(w, h, d);
    gq.translate(x, y + h / 2, z);
    const c = C(color).multiplyScalar(k);
    const col = new Float32Array(gq.attributes.position.count * 3);
    for (let i = 0; i < col.length; i += 3) col.set([c.r, c.g, c.b], i);
    gq.setAttribute('color', new THREE.BufferAttribute(col, 3));
    this.neonGeos.push(gq);
  }
  finish(scene) {
    const tex = makeWindowTextures();
    const mat = new THREE.MeshLambertMaterial({
      map: tex.map, vertexColors: true, emissiveMap: tex.emissive, emissive: C('#ffffff'), emissiveIntensity: 1.6,
    });
    const city = new THREE.Mesh(mergeGeometries(this.geos), mat);
    city.castShadow = city.receiveShadow = true;
    scene.add(city);
    scene.add(new THREE.Mesh(mergeGeometries(this.neonGeos), new THREE.MeshBasicMaterial({ vertexColors: true })));
  }
}

export const NEON = ['#ff3fa4', '#35e8ff', '#b45cff', '#ff6a3d', '#63ff9e', '#ffd23f'];
export const PASTEL = ['#f4b6c2', '#9ad7d0', '#ffd8a8', '#f7efe0', '#c7b3e6', '#a8e6cf', '#ffb895', '#f6e08a', '#bcdcff', '#ff9fb2'];
export const BULBS_WARM = ['#ffd58a', '#ffd58a', '#ffcf7a', '#ff7ab8', '#7ae8ff', '#ffe9b8'];
export const BULBS_PARTY = ['#ff4f8b', '#35e8ff', '#ffd166', '#7dff8a', '#b45cff', '#ff8a3d', '#ffe9b8'];

// ---------------------------------------------------------------------------
// World
// ---------------------------------------------------------------------------
export class World {
  constructor(scene) {
    this.scene = scene;
    this.colliders = new Colliders();
    this.glowMat = makeGlowMaterial();
    this.glows = [];
    this.palmSpots = [];
    this.globeLamps = [];
    this.facades = [];   // street-facing ground floors, for shops
    this.roofSpots = []; // roofs that can carry signs / billboards
    this.poleGeos = [];
    this.wires = [];
    this.updaters = [];
    this.batch = new BoxBatch();
    this.time = 0;

    this.buildSky();
    this.buildOcean();
    this.groundCanvas = this.buildGround();
    this.buildCity();
    this.buildLamps();
    this.buildPier();
    this.buildBeach();
    this.buildCliffs();
    this.buildLandscape();
    this.buildBoats();
    this.props = new Props(this);
    this.buildPalms();
    this.buildGlobeLamps(this.globeLamps);
    this.batch.finish(scene);
    this.finishFestoons();

    scene.add(glowPoints(this.glows, this.glowMat));
  }

  // ------------------------------------------------------------------ sky
  static skyMaterial() {
    return new THREE.ShaderMaterial({
      uniforms: { time: { value: 0 } },
      side: THREE.BackSide, depthWrite: false, fog: false,
      vertexShader: /* glsl */`varying vec3 vDir; void main(){ vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position.z = gl_Position.w; }`,
      fragmentShader: /* glsl */`
        uniform float time; varying vec3 vDir;
        ${SKY_GLSL}
        float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
        float noise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
          return mix(mix(hash(i),hash(i+vec2(1,0)),f.x), mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x), f.y); }
        float fbm(vec2 p){ float s=0.0, a=0.5; for(int i=0;i<5;i++){ s+=a*noise(p); p=p*2.03+vec2(1.7,9.2); a*=0.5; } return s; }
        void main(){
          vec3 d = normalize(vDir);
          vec3 c = skyBase(d);
          float sd = max(dot(d, SK_SUN), 0.0);
          // stars
          if (d.y > 0.25) {
            vec3 q = floor(d * 380.0);
            float h = hash(q.xz + q.y * 17.0);
            c += vec3(0.9, 0.85, 1.0) * step(0.9965, h) * smoothstep(0.25, 0.7, d.y) * (0.5 + 0.5 * sin(time * 2.0 + h * 90.0));
          }
          // sun disk with retro stripes
          float sa = acos(clamp(dot(d, SK_SUN), -1.0, 1.0));
          float R = 0.055;
          if (sa < R) {
            float yy = (d.y - SK_SUN.y) / R;
            vec3 sc = mix(${v3(PAL.sunBot)}, ${v3(PAL.sunTop)}, smoothstep(-1.0, 0.8, yy));
            float gap = 0.0;
            if (yy < 0.15) {
              float f = fract((yy + 1.0) * 5.5 - time * 0.15);
              gap = step(f, clamp((0.15 - yy) * 0.55, 0.0, 0.7));
            }
            c = mix(c, sc * 1.25, (1.0 - gap));
          }
          // clouds: long stratus streaks lit from below
          if (d.y > 0.0) {
            vec2 uv = d.xz / (d.y + 0.05);
            float n = fbm(uv * vec2(0.35, 1.3) + vec2(time * 0.006, 0.0));
            float n2 = fbm(uv * vec2(0.9, 3.2) + vec2(-time * 0.004, 3.0));
            float dens = smoothstep(0.52, 0.78, n * 0.75 + n2 * 0.4) * smoothstep(0.012, 0.07, d.y) * (1.0 - smoothstep(0.22, 0.5, d.y));
            vec3 cc = mix(${v3(PAL.cloudDark)}, ${v3(PAL.cloudLit)}, 0.25 + 0.75 * pow(sd, 3.0));
            cc += ${v3(PAL.cloudRim)} * pow(sd, 14.0) * 1.6;
            cc = mix(cc, ${v3(PAL.cloudDark)} * 0.7, smoothstep(0.1, 0.4, d.y) * 0.6);
            c = mix(c, cc, dens * 0.92);
          }
          gl_FragColor = vec4(c, 1.0);
        }`,
    });
  }
  buildSky() {
    this.sky = new THREE.Mesh(new THREE.SphereGeometry(3000, 32, 16), World.skyMaterial());
    this.sky.renderOrder = -10;
    this.sky.frustumCulled = false;
    this.scene.add(this.sky);
  }

  // ---------------------------------------------------------------- ocean
  buildOcean() {
    const mat = new THREE.ShaderMaterial({
      uniforms: { time: { value: 0 }, camPos: { value: new THREE.Vector3() } },
      vertexShader: /* glsl */`varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
      fragmentShader: /* glsl */`
        uniform float time; uniform vec3 camPos; varying vec3 vW;
        ${SKY_GLSL}
        ${COAST_GLSL}
        vec2 wave(vec2 p, vec2 dir, float k, float a, float s){ float ph = dot(p, dir) * k + time * s; return dir * cos(ph) * a * k; }
        void main(){
          vec2 p = vW.xz;
          vec2 g = vec2(0.0);
          g += wave(p, normalize(vec2(1.0, 0.3)), 0.12, 0.35, 1.1);
          g += wave(p, normalize(vec2(0.7, -0.7)), 0.23, 0.18, 1.6);
          g += wave(p, normalize(vec2(0.2, 1.0)), 0.41, 0.09, 2.3);
          g += wave(p, normalize(vec2(-0.6, 0.8)), 0.87, 0.04, 3.1);
          g += wave(p, normalize(vec2(0.9, -0.2)), 1.7, 0.018, 4.3);
          vec3 toCam = camPos - vW; float dist = length(toCam); vec3 v = toCam / dist;
          vec3 n = normalize(vec3(-g.x * 3.5, 1.0, -g.y * 3.5));
          n = normalize(mix(n, vec3(0.0, 1.0, 0.0), clamp(dist / 1400.0, 0.0, 0.6)));
          vec3 r = reflect(-v, n); r.y = abs(r.y);
          float fres = 0.12 + 0.88 * pow(1.0 - max(dot(n, v), 0.0), 4.0);
          vec3 deep = vec3(0.035, 0.03, 0.11);
          float cx = coastX(vW.z); float dc = cx - vW.x;
          vec3 shallow = vec3(0.03, 0.16, 0.2);
          vec3 base = mix(deep, shallow, smoothstep(40.0, 0.0, dc));
          vec3 col = mix(base, skyBase(r) * 0.9, fres);
          float sd = max(dot(r, SK_SUN), 0.0);
          col += vec3(1.0, 0.72, 0.4) * (pow(sd, 350.0) * 14.0 + pow(sd, 40.0) * 0.6 + pow(sd, 8.0) * 0.18);
          // shore foam
          float swash = 2.5 + 1.8 * sin(time * 0.7 + vW.z * 0.05) ;
          float foam = smoothstep(swash, swash - 1.2, dc) * (0.6 + 0.4 * sin(vW.z * 1.3 + time * 2.0 + vW.x));
          foam += smoothstep(0.6, 0.0, abs(dc - swash - 3.5 - sin(time*0.5)*1.5)) * 0.35;
          col = mix(col, vec3(0.95, 0.75, 0.7), clamp(foam, 0.0, 1.0) * 0.8);
          float f = 1.0 - exp(-${FOG_DENSITY} * ${FOG_DENSITY} * dist * dist);
          col = mix(col, fogDirColor(-v), f);
          gl_FragColor = vec4(col, 1.0);
        }`,
    });
    const ocean = new THREE.Mesh(new THREE.PlaneGeometry(7000, 7000), mat);
    ocean.rotation.x = -Math.PI / 2;
    ocean.position.y = -0.6;
    this.oceanMat = mat;
    this.scene.add(ocean);
  }

  // --------------------------------------------------------------- ground
  buildGround() {
    const cv = document.createElement('canvas'); cv.width = cv.height = GN;
    const g = cv.getContext('2d');
    const s = GN / GS;
    g.setTransform(s, 0, 0, s, -GX0 * s, -GZ0 * s);
    const zMin = GZ0, zMax = GZ0 + GS;

    // base grass
    g.fillStyle = '#5f7a3a'; g.fillRect(GX0, GZ0, GS, GS);
    for (let i = 0; i < 9000; i++) {
      g.fillStyle = rng() < 0.5 ? 'rgba(40,70,30,0.35)' : 'rgba(120,140,60,0.25)';
      const x = rr(GX0, GX0 + GS), z = rr(GZ0, GZ0 + GS), r = rr(0.5, 4);
      g.beginPath(); g.arc(x, z, r, 0, Math.PI * 2); g.fill();
    }

    // blocks
    const FILL = { city: '#a0978a', park: '#4f7a34', villa: '#5c7d3c', gas: '#56535c', motel: '#5a5760' };
    for (const b of blocks) {
      g.beginPath();
      if (b.i === 0) {
        for (let z = b.zA; z <= b.zB; z += 2) g.lineTo(bvdX(z), z);
      } else { g.moveTo(b.xA, b.zA); g.lineTo(b.xA, b.zB); }
      g.lineTo(b.xB, b.zB); g.lineTo(b.xB, b.zA); g.closePath();
      g.fillStyle = FILL[b.kind];
      g.fill();
      const W = b.bx1 - b.bx0, D = b.bz1 - b.bz0;
      if (b.kind === 'city') {
        g.fillStyle = 'rgba(80,70,70,0.25)';
        g.fillRect(b.bx0 + 4, b.bz0 + 4, W - 8, D - 8);
      } else if (b.kind === 'park') {
        const cx = (b.bx0 + b.bx1) / 2, cz = (b.bz0 + b.bz1) / 2;
        g.strokeStyle = '#cdb88e'; g.lineWidth = 2.2;
        g.beginPath(); g.moveTo(b.bx0 - 6, b.bz0 - 6); g.lineTo(b.bx1 + 6, b.bz1 + 6); g.stroke();
        g.beginPath(); g.moveTo(b.bx1 + 6, b.bz0 - 6); g.lineTo(b.bx0 - 6, b.bz1 + 6); g.stroke();
        g.beginPath(); g.arc(cx, cz, 9, 0, Math.PI * 2); g.fillStyle = '#d4c09a'; g.fill();
        for (let k = 0; k < 250; k++) {
          g.fillStyle = rng() < 0.5 ? 'rgba(30,60,25,0.4)' : 'rgba(110,150,60,0.3)';
          g.fillRect(rr(b.bx0, b.bx1), rr(b.bz0, b.bz1), rr(0.4, 1.5), rr(0.4, 1.5));
        }
        // flower beds
        for (let k = 0; k < 60; k++) {
          g.fillStyle = pick(['#ff6f91', '#ffd166', '#ff9fd0', '#f7efe0']);
          g.fillRect(rr(b.bx0, b.bx1), rr(b.bz0, b.bz1), 0.5, 0.5);
        }
      } else if (b.kind === 'villa') {
        for (let k = 0; k < 300; k++) {
          g.fillStyle = rng() < 0.5 ? 'rgba(30,60,25,0.35)' : 'rgba(120,160,70,0.3)';
          g.fillRect(rr(b.bx0, b.bx1), rr(b.bz0, b.bz1), rr(0.5, 2), rr(0.5, 2));
        }
      } else {
        // parking lot stripes
        g.fillStyle = 'rgba(230,225,215,0.8)';
        for (let x = b.bx0 + 3; x < b.bx1 - 3; x += 3) { g.fillRect(x, b.bz0 + 2, 0.15, 5); g.fillRect(x, b.bz1 - 7, 0.15, 5); }
      }
    }

    // beach
    g.beginPath();
    for (let z = zMin; z <= zMax; z += 2) g.lineTo(coastX(z) - 4, z);
    for (let z = zMax; z >= zMin; z -= 2) g.lineTo(coastX(z) + BEACH_W + 4, z);
    g.closePath(); g.fillStyle = '#e6c894'; g.fill();
    for (let k = 0; k < 14000; k++) {
      const z = rr(zMin, zMax), x = coastX(z) + rr(0, BEACH_W + 2);
      g.fillStyle = rng() < 0.5 ? 'rgba(170,130,90,0.3)' : 'rgba(255,240,210,0.35)';
      g.fillRect(x, z, 0.35, 0.35);
    }
    g.beginPath();
    for (let z = zMin; z <= zMax; z += 2) g.lineTo(coastX(z) - 4, z);
    for (let z = zMax; z >= zMin; z -= 2) g.lineTo(coastX(z) + 4 + Math.sin(z * 0.2) * 0.6, z);
    g.closePath(); g.fillStyle = '#a88a62'; g.fill();

    // roads: sidewalks, curbs, asphalt
    const poly = (r) => { g.beginPath(); r.pts.forEach(([x, z], i) => (i ? g.lineTo(x, z) : g.moveTo(x, z))); };
    g.lineJoin = 'round'; g.lineCap = 'square';
    for (const r of roads) { poly(r); g.lineWidth = r.w + r.sw * 2; g.strokeStyle = r.bvd ? '#d9a99a' : '#b3aca0'; g.stroke(); }
    for (const r of roads) { poly(r); g.lineWidth = r.w + 0.7; g.strokeStyle = '#e8e2d4'; g.stroke(); }
    const bvd = roads[0];
    poly(bvd); g.lineWidth = bvd.w; g.strokeStyle = '#3b3a42'; g.stroke();
    // strokes a line offset from the boulevard centre, broken where other roads cross
    const bvdRun = (dx, width, style, dashed = false) => {
      g.lineWidth = width; g.strokeStyle = style; g.lineCap = 'butt';
      let open = false;
      g.beginPath();
      for (let z = -420; z <= 420; z += 1) {
        const x = bvdX(z) + dx;
        const skip = onOtherRoad(x, z, bvd, 2.5) || (dashed && ((z % 6) + 6) % 6 >= 3);
        if (skip) { open = false; continue; }
        if (!open) { g.moveTo(x, z); open = true; } else g.lineTo(x, z);
      }
      g.stroke();
    };
    bvdRun(0, 3.4, '#e8e2d4');
    bvdRun(0, 2.8, '#557a36');
    for (const sgn of [-1, 1]) { bvdRun(sgn * 9.3, 0.18, '#e9e6dc'); bvdRun(sgn * 5.6, 0.18, '#e9e6dc', true); }
    g.lineCap = 'square';
    for (const r of roads) if (!r.bvd) { poly(r); g.lineWidth = r.w; g.strokeStyle = '#3b3a42'; g.stroke(); }

    // sidewalk tile seams
    g.fillStyle = 'rgba(90,70,70,0.25)';
    for (let z = -420; z < 420; z += 1.5) for (const sgn of [-1, 1]) {
      const x = bvdX(z) + sgn * (bvd.w / 2 + bvd.sw / 2);
      if (!onOtherRoad(x, z, bvd)) g.fillRect(x - bvd.sw / 2, z, bvd.sw, 0.12);
    }

    // grid road markings
    const dash = (x, z, w, h, col) => { g.fillStyle = col; g.fillRect(x - w / 2, z - h / 2, w, h); };
    for (const r of roads) {
      if (r.bvd) continue;
      const len = r.b - r.a;
      for (let t = 0; t < len; t += 1) {
        const u = r.a + t;
        const [cx, cz] = r.vert ? [r.c, u + 0.5] : [u + 0.5, r.c];
        if (onOtherRoad(cx, cz, r, 2.5)) continue;
        if (Math.floor(t) % 6 < 3) dash(cx, cz, r.vert ? 0.2 : 1, r.vert ? 1 : 0.2, '#e8b64a');
      }
      for (const sgn of [-1, 1]) {
        g.lineWidth = 0.16; g.strokeStyle = '#dcd8cc'; g.lineCap = 'butt';
        g.beginPath(); let open = false;
        for (let t = 0; t <= len; t += 1) {
          const u = r.a + t, off = sgn * (r.w / 2 - 0.6);
          const [x, z] = r.vert ? [r.c + off, u] : [u, r.c + off];
          if (onOtherRoad(x, z, r, 2.5)) { open = false; continue; }
          if (!open) { g.moveTo(x, z); open = true; } else g.lineTo(x, z);
        }
        g.stroke();
      }
    }
    // crosswalks
    const zebra = (x, z, alongX, span) => {
      g.fillStyle = '#e4e0d4';
      for (let o = -span / 2 + 0.6; o < span / 2 - 0.3; o += 1.2) {
        if (alongX) g.fillRect(x + o, z - 1.5, 0.6, 3); else g.fillRect(x - 1.5, z + o, 3, 0.6);
      }
    };
    for (const { v, h } of intersections) {
      for (const sgn of [-1, 1]) {
        const zz = h.c + sgn * (h.w / 2 + 2.2);
        if (zz > v.a && zz < v.b) zebra(v.c, zz, true, v.w);
        const xx = v.c + sgn * (v.w / 2 + 2.2);
        if (xx > h.a && xx < h.b) zebra(xx, h.c, false, h.w);
      }
    }
    for (const h of roads.filter((r) => r.horiz)) zebra(bvdX(h.c) + BVD_W / 2 + 2.2, h.c, false, h.w);

    // grime / noise pass (pixel-level)
    g.setTransform(1, 0, 0, 1, 0, 0);
    const nc = document.createElement('canvas'); nc.width = nc.height = 128;
    const ng = nc.getContext('2d'); const id = ng.createImageData(128, 128);
    for (let i = 0; i < id.data.length; i += 4) {
      const c = rng() < 0.5 ? 0 : 255;
      id.data[i] = id.data[i + 1] = id.data[i + 2] = c; id.data[i + 3] = Math.floor(rng() * 22);
    }
    ng.putImageData(id, 0, 0);
    g.globalCompositeOperation = 'source-atop';
    g.fillStyle = g.createPattern(nc, 'repeat'); g.fillRect(0, 0, GN, GN);
    g.globalCompositeOperation = 'source-over';
    g.setTransform(s, 0, 0, s, -GX0 * s, -GZ0 * s);

    // cut the ocean out
    g.globalCompositeOperation = 'destination-out';
    g.fillStyle = '#000';
    g.beginPath();
    for (let z = zMin - 4; z <= zMax + 4; z += 2) g.lineTo(coastX(z), z);
    g.lineTo(GX0 - 10, zMax + 10); g.lineTo(GX0 - 10, zMin - 10); g.closePath(); g.fill();
    g.globalCompositeOperation = 'source-over';
    g.setTransform(1, 0, 0, 1, 0, 0);

    const tex = new THREE.CanvasTexture(cv);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.magFilter = THREE.NearestFilter;
    tex.anisotropy = 8;
    // heightfield: flat downtown, rolling hills in the outer districts
    const geo = new THREE.PlaneGeometry(GS, GS, 240, 240);
    geo.rotateX(-Math.PI / 2);
    geo.translate(GX0 + GS / 2, 0, GZ0 + GS / 2);
    const p = geo.attributes.position;
    for (let i = 0; i < p.count; i++) p.setY(i, heightAt(p.getX(i), p.getZ(i)));
    geo.computeVertexNormals();
    const ground = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ map: tex, alphaTest: 0.5 }));
    ground.receiveShadow = true;
    this.scene.add(ground);
    return cv;
  }

  // ----------------------------------------------------------- buildings
  buildCity() {
    const B = this.batch;
    const towerCols = ['#8fa6c0', '#c9b8a6', '#e9e1d2', '#a5b8c8', '#d8c2d6', '#9cc9c4'];
    const cream = '#f2eadc';

    const split = (a, b, mn, mx, gap) => {
      const out = []; let p = a;
      while (b - p >= mn) {
        let w = rr(mn, mx);
        if (b - (p + w) < mn + gap) w = b - p;
        out.push([p, p + w]); p += w + gap;
      }
      if (!out.length && b - a > 6) out.push([a, b]);
      return out;
    };
    const groundMin = (x0, z0, x1, z1) => Math.min(heightAt(x0, z0), heightAt(x1, z0), heightAt(x0, z1), heightAt(x1, z1), heightAt((x0 + x1) / 2, (z0 + z1) / 2));

    for (const b of blocks) {
      if (b.kind === 'park') { this.parkDecor(b); continue; }
      if (b.kind === 'villa') { this.villaBlock(b, split); continue; }
      if (b.kind !== 'city') continue; // gas / motel are built by Props
      const xs = split(b.bx0, b.bx1, 13, 24, rr(2, 4));
      const zs = split(b.bz0, b.bz1, 13, 24, rr(2, 4));
      xs.forEach(([x0, x1], ix) => zs.forEach(([z0, z1], iz) => {
        const inner = ix > 0 && ix < xs.length - 1 && iz > 0 && iz < zs.length - 1;
        if (inner) { this.palmSpots.push([(x0 + x1) / 2 + rr(-3, 3), (z0 + z1) / 2 + rr(-3, 3)]); return; }
        const w = x1 - x0, d = z1 - z0, cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
        const beach = b.i === 0;
        const outer = b.j === 0 || b.j === ZS.length - 2;
        const base = groundMin(x0, z0, x1, z1) - 1.5;
        const dd = Math.hypot(cx - 85, cz - 0);
        let h = beach ? rr(10, 30) : 8 + rng() * 18 + 70 * Math.exp(-(dd * dd) / (2 * 120 * 120)) * (0.3 + rng());
        if (!beach && rng() < 0.12 && dd < 170) h += rr(30, 55);
        if (outer) h = Math.min(h, rr(10, 22));
        h = Math.max(2, Math.round(h / TILE_H)) * TILE_H + 0.6;
        const tower = h > 45;
        const color = beach || !tower ? pick(PASTEL) : pick(towerCols);
        const ou = Math.floor(rng() * TILES) / TILES, ov = Math.floor(rng() * TILES) / TILES;
        B.box(w, h + 1.5, d, cx, base, cz, color, { windows: true, ou, ov });
        const top0 = base + 1.5 + h;
        this.colliders.box(x0, z0, x1, z1, true);
        // street-facing sides
        const faces = [];
        if (ix === 0) faces.push([-1, 0]); if (ix === xs.length - 1) faces.push([1, 0]);
        if (iz === 0) faces.push([0, -1]); if (iz === zs.length - 1) faces.push([0, 1]);
        for (const [fx, fz] of faces) {
          this.facades.push({
            x: cx + fx * w / 2, z: cz + fz * d / 2, nx: fx, nz: fz, len: fx ? d : w,
            y: base + 1.5, beach, h,
          });
        }
        const [fx, fz] = faces.length ? pick(faces) : [0, 1];
        // cornice
        B.box(w + 0.8, 0.7, d + 0.8, cx, top0, cz, cream, { roof: '#8a8078' });
        let top = top0 + 0.7;
        if (beach || rng() < 0.35) {
          // art deco eyebrow ledges
          for (let y = TILE_H * 2; y < h - 1; y += TILE_H * (beach ? 1 : 2)) B.box(w + 0.7, 0.22, d + 0.7, cx, base + 1.5 + y - 0.4, cz, cream);
        }
        if (beach) {
          B.neon(0.15, 0.15, d * 0.8, x0 - 0.1, base + 1.5 + TILE_H - 0.5, cz, pick(NEON), 2.4);
          if (h > 16 && d > 12) {
            // hotel: big neon name on the roof, facing the sea
            this.roofSpots.push({ x: x0 + 1.5, z: cz, y: top, len: d, nx: -1, nz: 0, hotel: true });
          } else {
            // central art deco fin on the ocean facade, with neon edge
            const fh = h + rr(3, 7);
            B.box(0.8, fh, 3, x0 - 0.4, base + 1.5, cz, cream);
            B.neon(0.15, fh - 4, 0.15, x0 - 0.85, base + 3.5, cz, pick(NEON));
          }
        }
        if (tower) {
          B.box(w * 0.7, 5, d * 0.7, cx, top, cz, color, { windows: true, ou, ov });
          B.box(w * 0.4, 4, d * 0.4, cx, top + 5, cz, cream);
          B.box(0.4, 10, 0.4, cx, top + 9, cz, '#555060');
          this.glows.push({ x: cx, y: top + 19.3, z: cz, s: 2.2, c: C('#ff2a3a').multiplyScalar(3) });
          const nc = pick(NEON), a = w * 0.7, bb = d * 0.7;
          B.neon(a + 0.2, 0.25, 0.2, cx, top + 4.8, cz - bb / 2, nc);
          B.neon(a + 0.2, 0.25, 0.2, cx, top + 4.8, cz + bb / 2, nc);
          B.neon(0.2, 0.25, bb + 0.2, cx - a / 2, top + 4.8, cz, nc);
          B.neon(0.2, 0.25, bb + 0.2, cx + a / 2, top + 4.8, cz, nc);
          // vertical neon racing stripes up the tower corners
          if (rng() < 0.6) for (const [sx, sz] of [[-1, -1], [1, 1]]) B.neon(0.18, h - 6, 0.18, cx + sx * (w / 2 + 0.05), base + 6, cz + sz * (d / 2 + 0.05), nc, 2.6);
        } else if (!beach && h > 12 && h < 40 && rng() < 0.3 && faces.length) {
          this.roofSpots.push({ x: cx, z: cz, y: top, len: fx ? d : w, nx: fx, nz: fz, hotel: false });
        } else if (rng() < 0.5) {
          B.box(w * rr(0.3, 0.6), rr(2, 4), d * rr(0.3, 0.6), cx + rr(-2, 2), top, cz + rr(-2, 2), cream, { roof: '#6d6560' });
        }
        // rooftop clutter
        for (let k = 0; k < 3; k++) if (rng() < 0.6) B.box(rr(1, 2.5), rr(0.8, 1.6), rr(1, 2.5), cx + rr(-w / 3, w / 3), top, cz + rr(-d / 3, d / 3), '#8c8790');
        // neon roof outline
        if (!tower && rng() < 0.55) {
          const nc = pick(NEON), W = w + 0.9, D = d + 0.9;
          B.neon(W, 0.18, 0.18, cx, top - 0.1, cz - D / 2, nc);
          B.neon(W, 0.18, 0.18, cx, top - 0.1, cz + D / 2, nc);
          B.neon(0.18, 0.18, D, cx - W / 2, top - 0.1, cz, nc);
          B.neon(0.18, 0.18, D, cx + W / 2, top - 0.1, cz, nc);
        }
        // horizontal neon bands between floors
        if (!beach && rng() < 0.2) {
          const nc = pick(NEON);
          for (let y = TILE_H * 3; y < h - 2; y += TILE_H * 3) {
            if (fx) B.neon(0.12, 0.12, d * 0.9, cx + fx * (w / 2 + 0.06), base + 1.5 + y - 0.3, cz, nc, 2.2);
            else B.neon(w * 0.9, 0.12, 0.12, cx, base + 1.5 + y - 0.3, cz + fz * (d / 2 + 0.06), nc, 2.2);
          }
        }
        // vertical neon blade sign
        if (!beach && h < 40 && rng() < 0.5) {
          const nc = pick(NEON), sh = Math.min(h - 6, rr(6, 12));
          const sx = fx ? cx + fx * (w / 2 + 0.7) : cx + rr(-w / 4, w / 4);
          const sz = fz ? cz + fz * (d / 2 + 0.7) : cz + rr(-d / 4, d / 4);
          B.box(fx ? 0.5 : 1.4, sh, fx ? 1.4 : 0.5, sx, base + 6, sz, '#2a2433');
          B.neon(fx ? 0.6 : 1.1, sh - 0.6, fx ? 1.1 : 0.6, sx + fx * 0.05, base + 6.3, sz + fz * 0.05, nc, 2.2);
          for (let y = 1; y < sh - 1; y += 1.4) B.neon(fx ? 0.62 : 0.5, 0.25, fx ? 0.5 : 0.62, sx + fx * 0.06, base + 6.3 + y, sz + fz * 0.06, '#ffffff', 2.4);
        }
      }));
    }
  }

  villaBlock(b, split) {
    const B = this.batch;
    const xs = split(b.bx0, b.bx1, 16, 26, rr(4, 7));
    const zs = split(b.bz0, b.bz1, 16, 26, rr(4, 7));
    xs.forEach(([x0, x1], ix) => zs.forEach(([z0, z1], iz) => {
      if (rng() < 0.12) { this.palmSpots.push([(x0 + x1) / 2, (z0 + z1) / 2]); return; }
      const W = x1 - x0, D = z1 - z0;
      // house hugs the street side of its lot, the yard gets a pool
      const fx = ix === 0 ? -1 : ix === xs.length - 1 ? 1 : 0;
      const fz = iz === 0 ? -1 : iz === zs.length - 1 ? 1 : 0;
      const w = W * rr(0.5, 0.65), d = D * rr(0.5, 0.65);
      const cx = fx ? (fx < 0 ? x0 + w / 2 : x1 - w / 2) : x0 + w / 2 + rr(0, W - w);
      const cz = fz ? (fz < 0 ? z0 + d / 2 : z1 - d / 2) : z0 + d / 2 + rr(0, D - d);
      const hx0 = cx - w / 2, hx1 = cx + w / 2, hz0 = cz - d / 2, hz1 = cz + d / 2;
      const base = Math.min(heightAt(hx0, hz0), heightAt(hx1, hz0), heightAt(hx0, hz1), heightAt(hx1, hz1)) - 1.5;
      const floors = rng() < 0.6 ? 2 : 1;
      const h = floors * TILE_H + 0.8;
      const color = pick(PASTEL);
      const ou = Math.floor(rng() * TILES) / TILES, ov = Math.floor(rng() * TILES) / TILES;
      B.box(w, h + 1.5, d, cx, base, cz, color, { windows: true, ou, ov });
      B.box(w + 0.6, 0.5, d + 0.6, cx, base + 1.5 + h, cz, '#f2eadc', { roof: '#b86b4b' });
      if (floors === 2 && rng() < 0.6) {
        // one-storey wing
        const ww = w * 0.5, wd = d * 0.8, wx = cx + (rng() < 0.5 ? -1 : 1) * (w / 2 + ww / 2 - 0.5);
        if (wx - ww / 2 > x0 && wx + ww / 2 < x1) {
          B.box(ww, TILE_H + 2.3, wd, wx, base, cz, color, { windows: true, ou, ov });
          B.box(ww + 0.5, 0.4, wd + 0.5, wx, base + TILE_H + 2.3, cz, '#f2eadc', { roof: '#b86b4b' });
          this.colliders.box(wx - ww / 2, cz - wd / 2, wx + ww / 2, cz + wd / 2, true);
        }
      }
      if (rng() < 0.35) {
        const nc = pick(NEON);
        B.neon(w + 0.7, 0.14, 0.14, cx, base + 1.5 + h + 0.5, cz - (d + 0.6) / 2, nc, 2.4);
        B.neon(w + 0.7, 0.14, 0.14, cx, base + 1.5 + h + 0.5, cz + (d + 0.6) / 2, nc, 2.4);
      }
      this.colliders.box(hx0, hz0, hx1, hz1, true);
      // pool in the yard
      const px = fx ? cx - fx * (w / 2 + 4) : cx + (cx - x0 > x1 - cx ? -1 : 1) * (w / 2 + 4);
      const pz = fz ? cz - fz * 2 : cz;
      if (px - 3 > x0 && px + 3 < x1 && rng() < 0.7) {
        const py = heightAt(px, pz);
        const pool = new THREE.Mesh(new THREE.BoxGeometry(4, 0.3, 7), this.poolMat || (this.poolMat = new THREE.MeshBasicMaterial({ color: C('#3fd8e6').multiplyScalar(0.9) })));
        pool.position.set(px, py + 0.02, pz);
        this.scene.add(pool);
        this.glows.push({ x: px, y: py + 0.5, z: pz, s: 5, c: C('#2fbfd0').multiplyScalar(0.35) });
      }
      this.facades.push({ villa: true, x: cx + fx * w / 2, z: cz + fz * d / 2, nx: fx, nz: fz, len: fx ? d : w, y: base + 1.5, h });
      for (let k = 0; k < 2; k++) {
        const x = rr(x0 + 1, x1 - 1), z = rr(z0 + 1, z1 - 1);
        if (x < hx0 - 1.5 || x > hx1 + 1.5 || z < hz0 - 1.5 || z > hz1 + 1.5) this.palmSpots.push([x, z]);
      }
    }));
  }

  parkDecor(b) {
    const cx = (b.bx0 + b.bx1) / 2, cz = (b.bz0 + b.bz1) / 2, y = heightAt(cx, cz);
    const stone = new THREE.MeshLambertMaterial({ color: '#e9dcc4' });
    const basin = new THREE.Mesh(new THREE.CylinderGeometry(5, 5.4, 1.4, 16), stone);
    basin.position.set(cx, y + 0.1, cz); basin.castShadow = basin.receiveShadow = true;
    const water = new THREE.Mesh(new THREE.CylinderGeometry(4.6, 4.6, 0.1, 16), new THREE.MeshBasicMaterial({ color: C('#4fd6e0').multiplyScalar(0.8) }));
    water.position.set(cx, y + 0.72, cz);
    const col = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.8, 3, 8), stone);
    col.position.set(cx, y + 1.5, cz); col.castShadow = true;
    this.scene.add(basin, water, col);
    this.glows.push({ x: cx, y: y + 3.3, z: cz, s: 3, c: C('#6ff0ff').multiplyScalar(1.4) });
    this.colliders.circle(cx, cz, 5.4);
    for (let k = 0; k < 16; k++) {
      const a = rng() * Math.PI * 2, r = rr(12, Math.min(b.bx1 - b.bx0, b.bz1 - b.bz0) / 2);
      this.palmSpots.push([cx + Math.cos(a) * r, cz + Math.sin(a) * r]);
    }
    const ring = [];
    for (let k = 0; k < 6; k++) {
      const a = k / 6 * Math.PI * 2 + 0.3;
      this.globeLamps.push([cx + Math.cos(a) * 11, cz + Math.sin(a) * 11]);
      ring.push([cx + Math.cos(a) * 11, cz + Math.sin(a) * 11]);
    }
    // string lights from the lamp ring to the fountain column, like a carousel
    for (const p of ring) this.festoon([p, [cx, cz]], 3.4, 0.7, { palette: BULBS_PARTY, poles: false, topY: [y + 3.4, y + 3.1] });
  }

  // --------------------------------------------------------------- palms
  static palmGeometry(seed) {
    const r = mulberry32(seed);
    const R = (a, b) => a + (b - a) * r();
    const H = R(8, 12), bend = R(1.2, 3.2);
    const pts = [];
    for (let i = 0; i <= 6; i++) { const t = i / 6; pts.push(new THREE.Vector3(bend * t * t, H * t, 0)); }
    const curve = new THREE.CatmullRomCurve3(pts);
    const trunk = new THREE.TubeGeometry(curve, 10, 0.2, 6, false);
    // taper + banded colors
    {
      const p = trunk.attributes.position, cols = new Float32Array(p.count * 3);
      const cA = C('#6e5238'), cB = C('#8a6a48');
      for (let i = 0; i < p.count; i++) {
        const seg = Math.floor(i / 7);
        const t = seg / 10;
        const c = curve.getPoint(t);
        const k = 1.35 - t * 0.55;
        p.setXYZ(i, c.x + (p.getX(i) - c.x) * k, p.getY(i), c.z + (p.getZ(i) - c.z) * k);
        const cc = seg % 2 ? cA : cB;
        cols.set([cc.r, cc.g, cc.b], i * 3);
      }
      trunk.setAttribute('color', new THREE.BufferAttribute(cols, 3));
    }
    const parts = [trunk.toNonIndexed()];
    const top = curve.getPoint(1);
    // fronds
    const pos = [], col = [];
    const nF = 10;
    const cDark = C('#2c4f22'), cLight = C('#5d8a35'), cDry = C('#8a8a3a');
    for (let f = 0; f < nF; f++) {
      const a = f / nF * Math.PI * 2 + R(-0.2, 0.2);
      const L = R(3.6, 5.2), lift = R(0.4, 1.4), droop = R(2.0, 3.2);
      const dir = new THREE.Vector3(Math.cos(a), 0, Math.sin(a));
      const perp = new THREE.Vector3(-dir.z, 0, dir.x);
      const segs = 6;
      const spine = [], left = [], right = [];
      for (let s = 0; s <= segs; s++) {
        const t = s / segs;
        const p = top.clone().addScaledVector(dir, L * t);
        p.y += lift * t * 2 - droop * t * t;
        const w = 0.85 * Math.sin(Math.PI * Math.min(1, t * 1.15)) + 0.05;
        spine.push(p);
        left.push(p.clone().addScaledVector(perp, w).add(new THREE.Vector3(0, -0.35 * w, 0)));
        right.push(p.clone().addScaledVector(perp, -w).add(new THREE.Vector3(0, -0.35 * w, 0)));
      }
      const fc = r() < 0.12 ? cDry : cDark;
      for (let s = 0; s < segs; s++) {
        const t = s / segs;
        const c0 = fc.clone().lerp(cLight, t * 0.8), c1 = fc.clone().lerp(cLight, (t + 1 / segs) * 0.8);
        for (const side of [left, right]) {
          const tri = [spine[s], side[s], spine[s + 1], side[s], side[s + 1], spine[s + 1]];
          const tc = [c0, c0, c1, c0, c1, c1];
          tri.forEach((v, i) => { pos.push(v.x, v.y, v.z); col.push(tc[i].r, tc[i].g, tc[i].b); });
        }
      }
    }
    // coconuts
    const nut = new THREE.IcosahedronGeometry(0.22, 0);
    for (let k = 0; k < 4; k++) {
      const a = k / 4 * Math.PI * 2;
      const gq = nut.clone(); gq.translate(top.x + Math.cos(a) * 0.3, top.y - 0.35, top.z + Math.sin(a) * 0.3);
      const cc = C('#4a3a20'); const cols = new Float32Array(gq.attributes.position.count * 3);
      for (let i = 0; i < cols.length; i += 3) cols.set([cc.r, cc.g, cc.b], i);
      gq.setAttribute('color', new THREE.BufferAttribute(cols, 3));
      gq.deleteAttribute('uv');
      parts.push(gq);
    }
    const fg = new THREE.BufferGeometry();
    fg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    fg.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    fg.computeVertexNormals();
    parts[0].deleteAttribute('uv');
    parts.push(fg);
    for (const p of parts) if (!p.attributes.normal) p.computeVertexNormals();
    return mergeGeometries(parts);
  }

  buildPalms() {
    const spots = this.palmSpots;
    const bvd = roads[0];
    // boulevard median
    for (let z = -392; z <= 392; z += 16) {
      const x = bvdX(z);
      if (!onOtherRoad(x, z, bvd, 4)) spots.push([x, z]);
    }
    // promenade (between festoon posts)
    for (let z = -385; z <= 385; z += 14) {
      const x = bvdX(z) - BVD_W / 2 - BVD_SW - 1.2;
      if (Math.abs(z - PIER.z) > 10) spots.push([x, z]);
    }
    // beach clusters
    for (let k = 0; k < 90; k++) {
      const z = rr(-395, 395), x = coastX(z) + rr(9, 22);
      if (Math.abs(z - PIER.z) > 12 && !this.colliders.occupied(x, z, 1.5)) spots.push([x, z]);
    }
    // city sidewalks
    for (const r of roads) {
      if (!r.horiz) continue;
      for (let x = r.a + 20; x < r.b; x += 22) for (const sgn of [-1, 1]) {
        const z = r.c + sgn * (r.w / 2 + 2.5);
        if (!onOtherRoad(x + 8, z, r, 4) && !this.colliders.occupied(x + 8, z, 1)) spots.push([x + 8, z]);
      }
    }
    // outskirts between the ring roads and the cliffs
    for (let k = 0; k < 700; k++) {
      const x = rr(-150, BORDER.x), z = rr(-BORDER.z, BORDER.z);
      if (borderSDF(x, z).d > -3) continue;
      if (x < XS[XS.length - 1] + 10 && Math.abs(z) < ZS[ZS.length - 1] + 10) continue;
      if (x < coastX(z) + BEACH_W + 20 || onOtherRoad(x, z, null, 3) || this.colliders.occupied(x, z, 2)) continue;
      spots.push([x, z]);
    }
    const variants = [11, 23, 37, 51].map((s) => World.palmGeometry(s));
    const mat = new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide });
    const buckets = variants.map(() => []);
    for (const s of spots) buckets[Math.floor(rng() * variants.length)].push(s);
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), sc = new THREE.Vector3(), p = new THREE.Vector3();
    const up = new THREE.Vector3(0, 1, 0);
    variants.forEach((geo, vi) => {
      const list = buckets[vi];
      const im = new THREE.InstancedMesh(geo, mat, list.length);
      list.forEach(([x, z, y], i) => {
        const k = rr(0.8, 1.2);
        q.setFromAxisAngle(up, rng() * Math.PI * 2);
        m.compose(p.set(x, (y ?? heightAt(x, z)) - 0.1, z), q, sc.set(k, k * rr(0.9, 1.15), k));
        im.setMatrixAt(i, m);
        if (y === undefined) this.colliders.circle(x, z, 0.45);
      });
      im.castShadow = true; im.receiveShadow = true;
      this.scene.add(im);
    });
  }

  // --------------------------------------------------------------- lamps
  buildLamps() {
    const lamps = []; // {x,z,a}
    for (const r of roads) {
      if (r.bvd) {
        for (let z = -380; z <= 380; z += 32) {
          const x = bvdX(z);
          if (onOtherRoad(x, z, r, 6)) continue;
          lamps.push({ x, z, a: -Math.PI / 2 }, { x, z, a: Math.PI / 2 });
        }
        continue;
      }
      let side = 1;
      for (let u = r.a + 12; u < r.b - 6; u += 30) {
        side = -side;
        const off = side * (r.w / 2 + 1.1);
        const x = r.vert ? r.c + off : u, z = r.vert ? u : r.c + off;
        if (onOtherRoad(x, z, r, 6)) continue;
        const a = r.vert ? (side > 0 ? -Math.PI / 2 : Math.PI / 2) : (side > 0 ? Math.PI : 0);
        lamps.push({ x, z, a });
      }
    }
    // lamp geometry: pole + arm reaching toward +z (local)
    const pole = new THREE.CylinderGeometry(0.1, 0.16, 7.5, 6); pole.translate(0, 3.75, 0);
    const arm = new THREE.BoxGeometry(0.1, 0.1, 2.4); arm.translate(0, 7.35, 1.1);
    const hang = new THREE.BoxGeometry(0.06, 0.4, 0.06); hang.translate(0, 7.15, 2.2);
    const baseG = new THREE.CylinderGeometry(0.28, 0.32, 1.2, 6); baseG.translate(0, 0, 0);
    const lampGeo = mergeGeometries([pole, arm, hang, baseG].map((g) => g.toNonIndexed()));
    const head = new THREE.CylinderGeometry(0.18, 0.42, 0.35, 8); head.translate(0, 6.85, 2.2);
    const poleM = new THREE.InstancedMesh(lampGeo, new THREE.MeshLambertMaterial({ color: '#2d2a36' }), lamps.length);
    const headM = new THREE.InstancedMesh(head, new THREE.MeshBasicMaterial({ color: C('#ffd59a').multiplyScalar(4) }), lamps.length);
    const poolTex = radialTexture([[0, 0.9], [0.5, 0.35], [1, 0]]);
    const poolGeo = new THREE.PlaneGeometry(15, 15); poolGeo.rotateX(-Math.PI / 2);
    const poolM = new THREE.InstancedMesh(poolGeo, new THREE.MeshBasicMaterial({
      map: poolTex, color: C('#ff9c4a').multiplyScalar(0.38), blending: THREE.AdditiveBlending, transparent: true, depthWrite: false,
      polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2,
    }), lamps.length);
    const m = new THREE.Matrix4(), e = new THREE.Euler(), q = new THREE.Quaternion(), one = new THREE.Vector3(1, 1, 1);
    const lampC = C('#ffc27a');
    lamps.forEach((l, i) => {
      const y = heightAt(l.x, l.z);
      m.makeRotationFromEuler(e.set(0, l.a, 0)); m.setPosition(l.x, y, l.z);
      poleM.setMatrixAt(i, m); headM.setMatrixAt(i, m);
      const hx = l.x + Math.sin(l.a) * 2.2, hz = l.z + Math.cos(l.a) * 2.2;
      const n = terrainNormal(hx, hz);
      q.setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(n[0], n[1], n[2]));
      m.compose(new THREE.Vector3(hx, heightAt(hx, hz) + 0.05, hz), q, one); poolM.setMatrixAt(i, m);
      this.glows.push({ x: hx, y: y + 6.6, z: hz, s: 4.2, c: lampC.clone().multiplyScalar(1.3) });
      this.colliders.circle(l.x, l.z, 0.35);
    });
    poleM.castShadow = true;
    this.scene.add(poleM, headM, poolM);

    // festoon string lights along the promenade
    const posts = [];
    for (let z = -392; z <= 392; z += 14) {
      if (Math.abs(z + 7 - PIER.z) < 10) { posts.push(null); continue; }
      posts.push([bvdX(z + 7) - BVD_W / 2 - BVD_SW - 1.6, z + 7]);
    }
    this.festoon(posts, 4.6, 1.3);
  }

  // String lights between consecutive posts. A post is [x,z] or {x,z,top,pole}; null breaks the chain.
  festoon(posts, height, sag, opts = {}) {
    const palette = opts.palette || BULBS_WARM, bright = opts.bright ?? 2.2, size = opts.size ?? 0.55;
    const P = posts.map((p, i) => {
      if (!p) return null;
      const x = p.x ?? p[0], z = p.z ?? p[1];
      const gy = heightAt(x, z);
      const top = opts.topY?.[i] ?? p.top ?? gy + height;
      return { x, z, gy, top, pole: p.pole ?? opts.poles !== false };
    });
    for (const p of P) {
      if (!p || !p.pole) continue;
      const g = new THREE.CylinderGeometry(0.07, 0.09, p.top - p.gy + 0.3, 5);
      g.translate(p.x, (p.top + p.gy) / 2 + 0.15, p.z);
      this.poleGeos.push(g);
      this.colliders.circle(p.x, p.z, 0.25);
    }
    for (let i = 0; i < P.length - 1; i++) {
      const a = P[i], b = P[i + 1];
      if (!a || !b) continue;
      const len = Math.hypot(b.x - a.x, b.z - a.z);
      const n = Math.max(2, Math.round(len / (opts.spacing || 0.9)));
      let prev = null;
      for (let k = 0; k <= n; k++) {
        const t = k / n;
        const x = a.x + (b.x - a.x) * t, z = a.z + (b.z - a.z) * t;
        const y = a.top + (b.top - a.top) * t - 0.1 - sag * 4 * t * (1 - t);
        if (k > 0 && k < n) this.glows.push({ x, y: y - 0.12, z, s: size, c: C(pick(palette)).multiplyScalar(bright) });
        if (prev) this.wires.push(prev[0], prev[1], prev[2], x, y, z);
        prev = [x, y, z];
      }
    }
  }
  finishFestoons() {
    if (this.poleGeos.length) {
      const pm = new THREE.Mesh(mergeGeometries(this.poleGeos.map((g) => g.toNonIndexed())), new THREE.MeshLambertMaterial({ color: '#3a3040' }));
      pm.castShadow = true;
      this.scene.add(pm);
    }
    const wg = new THREE.BufferGeometry(); wg.setAttribute('position', new THREE.Float32BufferAttribute(this.wires, 3));
    this.scene.add(new THREE.LineSegments(wg, new THREE.LineBasicMaterial({ color: '#1c1620' })));
  }

  buildGlobeLamps(spots) {
    const pole = new THREE.CylinderGeometry(0.07, 0.1, 3.4, 6); pole.translate(0, 1.7, 0);
    const pm = new THREE.InstancedMesh(pole, new THREE.MeshLambertMaterial({ color: '#23202a' }), spots.length);
    const globe = new THREE.IcosahedronGeometry(0.28, 1); globe.translate(0, 3.6, 0);
    const gm = new THREE.InstancedMesh(globe, new THREE.MeshBasicMaterial({ color: C('#fff0d0').multiplyScalar(3) }), spots.length);
    const m = new THREE.Matrix4();
    spots.forEach(([x, z, yy], i) => {
      const y = yy ?? heightAt(x, z);
      m.makeTranslation(x, y, z); pm.setMatrixAt(i, m); gm.setMatrixAt(i, m);
      this.glows.push({ x, y: y + 3.6, z, s: 1.7, c: C('#ffd9a0').multiplyScalar(1.3) });
      this.colliders.circle(x, z, 0.2);
    });
    this.scene.add(pm, gm);
  }

  // ---------------------------------------------------------------- pier
  buildPier() {
    const { z: pz, w, x0, x1 } = PIER;
    const len = x0 - x1, cx = (x0 + x1) / 2;
    const wood = new THREE.MeshLambertMaterial({ color: '#8a6446' });
    const dark = new THREE.MeshLambertMaterial({ color: '#4a3528' });
    // deck with plank stripes via canvas
    const cv = document.createElement('canvas'); cv.width = 16; cv.height = 256;
    const g = cv.getContext('2d');
    for (let i = 0; i < 256; i += 2) { g.fillStyle = i % 4 ? '#8d6a4a' : '#7a5a3e'; g.fillRect(0, i, 16, 2); }
    const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.magFilter = THREE.NearestFilter;
    const deck = new THREE.Mesh(new THREE.BoxGeometry(len, 0.5, w), [dark, dark, new THREE.MeshLambertMaterial({ map: t }), dark, dark, dark]);
    deck.position.set(cx, -0.2, pz);
    deck.receiveShadow = true;
    this.scene.add(deck);
    const posts = [];
    for (let x = x1 + 1; x < x0; x += 6) for (const s of [-1, 1]) {
      const pg = new THREE.CylinderGeometry(0.25, 0.25, 5, 6); pg.translate(x, -2.6, pz + s * (w / 2 - 0.3));
      posts.push(pg);
    }
    // rails
    const rails = [];
    for (const s of [-1, 1]) {
      const zz = pz + s * (w / 2 - 0.1);
      const rg = new THREE.BoxGeometry(len - 6, 0.12, 0.12); rg.translate(cx - 3, 1.0, zz); rails.push(rg);
      const rg2 = new THREE.BoxGeometry(len - 6, 0.08, 0.08); rg2.translate(cx - 3, 0.55, zz); rails.push(rg2);
      for (let x = x1; x < x0 - 6; x += 2.5) { const b = new THREE.BoxGeometry(0.1, 1.0, 0.1); b.translate(x, 0.5, zz); rails.push(b); }
      this.colliders.box(x1, zz - 0.2, x0 - 6, zz + 0.2);
    }
    const eg = new THREE.BoxGeometry(0.12, 0.12, w); eg.translate(x1 + 0.1, 1.0, pz); rails.push(eg);
    this.colliders.box(x1 - 1, pz - w / 2, x1 + 0.3, pz + w / 2);
    this.scene.add(new THREE.Mesh(mergeGeometries(posts), dark));
    const rm = new THREE.Mesh(mergeGeometries(rails), new THREE.MeshLambertMaterial({ color: '#efe6d6' }));
    rm.castShadow = true;
    this.scene.add(rm);
    // globe lamps + festoon along the pier
    const lampSpots = [];
    const fest = [[], []];
    for (let x = x0 - 8; x > x1; x -= 11) for (const [si, s] of [[0, -1], [1, 1]]) {
      lampSpots.push([x, pz + s * (w / 2 - 0.1)]);
    }
    for (let x = x0 - 8; x > x1 + 2; x -= 11) { fest[0].push([x, pz - w / 2 + 0.1]); fest[1].push([x, pz + w / 2 - 0.1]); }
    this.globeLamps.push(...lampSpots);
    // zig-zag festoon across the pier
    const zig = [];
    fest[0].forEach((p, i) => zig.push(i % 2 ? fest[1][i] : p));
    this.festoon(zig.map((p) => [p[0], p[1]]), 3.6, 0.6);
    // gazebo at pier end
    const roof = new THREE.Mesh(new THREE.ConeGeometry(4.2, 2, 8), new THREE.MeshLambertMaterial({ color: '#e05a6a', flatShading: true }));
    roof.position.set(x1 + 5, 4.6, pz); roof.castShadow = true;
    this.scene.add(roof);
    for (const [dx, dz] of [[-2.5, -2.5], [-2.5, 2.5], [2.5, -2.5], [2.5, 2.5]]) {
      const c = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 3.6, 6), new THREE.MeshLambertMaterial({ color: '#efe6d6' }));
      c.position.set(x1 + 5 + dx, 1.8, pz + dz); c.castShadow = true; this.scene.add(c);
      this.colliders.circle(x1 + 5 + dx, pz + dz, 0.3);
    }
    this.glows.push({ x: x1 + 5, y: 3.4, z: pz, s: 3.2, c: C('#ffcf8a').multiplyScalar(1.6) });
  }

  // --------------------------------------------------------------- beach
  buildBeach() {
    const stripes = [['#e8445a', '#f7efe0'], ['#2fa3a0', '#f7efe0'], ['#f09a3a', '#fff2d0'], ['#6a5acd', '#ffd8a8'], ['#ff7ab8', '#fff']];
    const busy = (z) => Math.abs(z - PIER.z) < 14 || (z > MARINA.z0 - 12 && z < MARINA.z1 + 12);
    for (let k = 0; k < 40; k++) {
      const z = rr(-390, 390); if (busy(z)) continue;
      const x = coastX(z) + rr(7, 18);
      const [a, b] = pick(stripes);
      const cone = new THREE.ConeGeometry(1.7, 0.7, 10, 1, true).toNonIndexed();
      const cols = new Float32Array(cone.attributes.position.count * 3);
      for (let i = 0; i < cone.attributes.position.count; i++) { const c = C(Math.floor(i / 3) % 2 ? a : b); cols.set([c.r, c.g, c.b], i * 3); }
      cone.setAttribute('color', new THREE.BufferAttribute(cols, 3));
      const um = new THREE.Mesh(cone, new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide, flatShading: true }));
      um.position.set(x, 2.35, z); um.rotation.z = rr(-0.15, 0.15); um.castShadow = true;
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 2.4, 4), new THREE.MeshLambertMaterial({ color: '#ddd' }));
      pole.position.set(x, 1.2, z);
      this.scene.add(um, pole);
      this.colliders.circle(x, z, 0.15);
      const towel = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 1.9), new THREE.MeshLambertMaterial({ color: pick(['#ff6f91', '#35c8d8', '#ffd166', '#b45cff']) }));
      towel.rotation.x = -Math.PI / 2; towel.rotation.z = rr(0, 3); towel.position.set(x + rr(-1.5, 1.5), 0.03, z + rr(-1.5, 1.5));
      this.scene.add(towel);
    }
    // lifeguard towers
    const tcols = ['#ff9fb2', '#9ad7d0', '#ffd166', '#c7b3e6'];
    for (const z of [-330, -215, -130, 40, 300]) {
      const x = coastX(z) + 10;
      const grp = new THREE.Group();
      const lm = new THREE.MeshLambertMaterial({ color: '#efe6d6' });
      for (const [dx, dz] of [[-1.3, -1.3], [-1.3, 1.3], [1.3, -1.3], [1.3, 1.3]]) {
        const leg = new THREE.Mesh(new THREE.BoxGeometry(0.2, 2.2, 0.2), lm); leg.position.set(dx, 1.1, dz); grp.add(leg);
      }
      const hut = new THREE.Mesh(new THREE.BoxGeometry(3, 2.2, 3.4), new THREE.MeshLambertMaterial({ color: pick(tcols) }));
      hut.position.y = 3.3; grp.add(hut);
      const win = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.8, 2.6), new THREE.MeshBasicMaterial({ color: C('#ffcf8a').multiplyScalar(1.3) }));
      win.position.set(-1.52, 3.5, 0); grp.add(win);
      const roof = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.25, 4), lm); roof.position.y = 4.5; grp.add(roof);
      const ramp = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.12, 1.2), lm); ramp.position.set(3, 1.1, 0); ramp.rotation.z = 0.7; grp.add(ramp);
      grp.traverse((o) => { o.castShadow = true; });
      grp.position.set(x, 0, z);
      this.scene.add(grp);
      this.colliders.box(x - 1.5, z - 1.7, x + 1.5, z + 1.7);
      // a string of lights from the tower down to the sand
      this.festoon([{ x: x + 1.5, z: z - 1.7, top: 4.6, pole: false }, [x + 5, z - 7], [x + 1, z - 12]], 2.6, 0.5, { palette: BULBS_PARTY });
    }
  }

  // ---------------------------------------------------------------- cliffs
  // A continuous wall of layered sandstone cliffs along the rounded-rectangle border,
  // running out into the sea as headlands. It is also the hard edge of the map.
  buildCliffs() {
    const { x: BX, z: BZ, r: R } = BORDER;
    const W0 = -620, step = 4;
    const path = [];
    const push = (x, z, nx, nz) => path.push({ x, z, nx, nz });
    for (let x = W0; x < BX - R; x += step) push(x, BZ, 0, 1);
    for (let a = Math.PI / 2; a > 0; a -= step / R) push(BX - R + Math.cos(a) * R, BZ - R + Math.sin(a) * R, Math.cos(a), Math.sin(a));
    for (let z = BZ - R; z > -(BZ - R); z -= step) push(BX, z, 1, 0);
    for (let a = 0; a > -Math.PI / 2; a -= step / R) push(BX - R + Math.cos(a) * R, -(BZ - R) + Math.sin(a) * R, Math.cos(a), Math.sin(a));
    for (let x = BX - R; x >= W0; x -= step) push(x, -BZ, 0, -1);

    const PROFILE = [[-5, -5], [0, 0], [2.5, 6], [5, 14], [8, 22], [11, 28], [15, 32], [24, 35], [45, 37], [90, 38], [220, 34]];
    const strata = ['#b9774f', '#d49a68', '#9a5f45', '#c78660', '#e0b080', '#a86a4c'].map(C);
    const grass = [C('#4d6a34'), C('#5a7a3a'), C('#44602f')];
    const rows = path.map((p, i) => {
      const cx = coastX(p.z);
      const wet = p.x < cx + 2;
      const base = wet ? -3 : heightAt(p.x, p.z);
      const taper = 0.12 + 0.88 * (1 - Math.pow(1 - Math.max(0, Math.min(1, (p.x - W0) / (cx + 40 - W0))), 2));
      const s = (0.78 + 0.28 * Math.sin(i * 0.071) + 0.14 * Math.sin(i * 0.23 + 1.7)) * taper;
      return PROFILE.map(([d, h], k) => {
        // buttresses (slow, outward-only bulges) plus jagged ledges
        const buttress = k >= 2 ? Math.max(0, Math.sin(i * 0.16) + 0.6 * Math.sin(i * 0.41 + 1)) * 5 : 0;
        const jit = k >= 2 && k <= 7 ? (Math.sin(i * 0.9 + k * 2.1) + Math.sin(i * 0.37 + k * 1.3) + Math.sin(i * 1.7 + k)) * 1.5 : 0;
        const dd = d + Math.max(-d + 0.5, jit - buttress * 0.8);
        const y = base + h * s + (k >= 7 ? Math.sin(i * 0.19 + k) * 1.5 * taper : 0);
        return { x: p.x + p.nx * dd, y, z: p.z + p.nz * dd, rel: h * s, k };
      });
    });
    const pos = [], col = [];
    const colorOf = (v, i) => {
      if (v.k >= 7) return grass[(i + v.k) % 3];
      if (v.k === 6) return C('#8a7a50');
      if (v.y < 0.8) return C('#4a3a3a');
      const c = strata[Math.floor(v.rel / 4.2) % strata.length].clone();
      return c.multiplyScalar(0.9 + 0.2 * Math.sin(i * 0.5 + v.k));
    };
    for (let i = 0; i < rows.length - 1; i++) {
      const A = rows[i], Bq = rows[i + 1];
      for (let k = 0; k < PROFILE.length - 1; k++) {
        const quad = [A[k], Bq[k], Bq[k + 1], A[k], Bq[k + 1], A[k + 1]];
        const cc = colorOf(A[k + 1], i);
        for (const v of quad) { pos.push(v.x, v.y, v.z); col.push(cc.r, cc.g, cc.b); }
      }
      // palms on the plateau
      if (i % 5 === 0 && rows[i][8].y > 10) {
        const t = rr(0.15, 0.9);
        const a = rows[i][7], b = rows[i][9];
        this.palmSpots.push([a.x + (b.x - a.x) * t, a.z + (b.z - a.z) * t, a.y + (b.y - a.y) * t]);
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    g.computeVertexNormals();
    const cliffs = new THREE.Mesh(g, new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true, side: THREE.DoubleSide }));
    cliffs.castShadow = cliffs.receiveShadow = true;
    this.scene.add(cliffs);
  }

  // -------------------------------------------------------- landscape
  buildLandscape() {
    const hillGeos = [];
    const hill = (x, z, r, h, color) => {
      const g = new THREE.SphereGeometry(1, 12, 6, 0, Math.PI * 2, 0, Math.PI / 2).toNonIndexed();
      const p = g.attributes.position;
      const ph = rng() * 10;
      for (let i = 0; i < p.count; i++) {
        const vx = p.getX(i), vy = p.getY(i), vz = p.getZ(i);
        const a = Math.atan2(vz, vx);
        const k = 1 + Math.sin(a * 3 + ph) * 0.12 + Math.sin(a * 7 + ph * 2) * 0.06;
        const bump = 1 + Math.sin(a * 5 + ph) * 0.1 * vy;
        p.setXYZ(i, vx * r * k, Math.pow(vy, 1.25) * h * bump, vz * r * k * 0.85);
      }
      g.translate(x, -1, z);
      g.computeVertexNormals();
      const c = C(color); const cols = new Float32Array(p.count * 3);
      for (let i = 0; i < p.count; i++) { const t = p.getY(i) / h; const cc = c.clone().lerp(C('#6a5a4a'), Math.max(0, t - 0.75)); cols.set([cc.r, cc.g, cc.b], i * 3); }
      g.setAttribute('color', new THREE.BufferAttribute(cols, 3));
      g.deleteAttribute('uv');
      hillGeos.push(g);
    };
    // mountains behind the cliffs
    for (let k = 0; k < 34; k++) hill(rr(720, 1400), rr(-1300, 1300), rr(140, 280), rr(90, 250), pick(['#3a4a3a', '#43503e', '#3d3f4a']));
    for (const s of [-1, 1]) for (let k = 0; k < 12; k++) hill(rr(-250, 700), s * rr(700, 1200), rr(120, 240), rr(70, 200), pick(['#3a4a3a', '#43503e', '#3d3f4a']));
    const hm = new THREE.Mesh(mergeGeometries(hillGeos), new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true }));
    this.scene.add(hm);
    // plateau behind the cliff tops so nothing looks hollow from the hills
    const plateau = new THREE.Mesh(new THREE.PlaneGeometry(3000, 3000), new THREE.MeshLambertMaterial({ color: '#3f5a30' }));
    plateau.rotation.x = -Math.PI / 2;
    plateau.position.set(BORDER.x + 1500 + 180, 30, 0);
    this.scene.add(plateau);
    for (const s of [-1, 1]) {
      const p2 = plateau.clone(); p2.position.set(0, 30, s * (BORDER.z + 1500 + 180)); this.scene.add(p2);
    }

    // islands on the horizon (unfogged silhouettes)
    const isl = new THREE.MeshBasicMaterial({ color: C('#6b3a6a'), fog: false });
    for (const [x, z, r, h] of [[-1500, -700, 260, 70], [-1650, -520, 180, 110], [-1400, 850, 300, 60], [-1700, 1050, 220, 95]]) {
      const m = new THREE.Mesh(new THREE.SphereGeometry(1, 14, 6, 0, Math.PI * 2, 0, Math.PI / 2), isl);
      m.scale.set(r, h, r * 0.5);
      m.position.set(x, -4, z);
      this.scene.add(m);
    }
  }

  buildBoats() {
    this.boats = [];
    const hullM = new THREE.MeshLambertMaterial({ color: '#f2ece0' });
    const sailM = new THREE.MeshLambertMaterial({ color: '#fff4e6', side: THREE.DoubleSide });
    for (const [x, z, s] of [[-330, 60, 1], [-420, -140, 1.3], [-560, 210, 1.6], [-290, -260, 0.9], [-700, -20, 2]]) {
      const b = new THREE.Group();
      const hull = new THREE.Mesh(new THREE.BoxGeometry(6, 1, 2), hullM); hull.position.y = 0.2; b.add(hull);
      const sg = new THREE.BufferGeometry();
      sg.setAttribute('position', new THREE.Float32BufferAttribute([-2.6, 1, 0, 1.4, 1, 0, 1.2, 9, 0, 1.2, 9, 0, 1.4, 1, 0, 2.8, 1.5, 0], 3));
      sg.computeVertexNormals();
      const sail = new THREE.Mesh(sg, sailM); b.add(sail);
      const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 9, 4), hullM); mast.position.set(1.3, 5, 0); b.add(mast);
      this.glows.push({ x, y: 9.6 * s, z, s: 1.6 * s, c: C('#ff4040').multiplyScalar(2) });
      b.position.set(x, -0.6, z); b.scale.setScalar(s); b.rotation.y = rr(0, Math.PI * 2);
      this.scene.add(b); this.boats.push(b);
    }
  }

  // ------------------------------------------------------------ runtime
  update(dt, camera) {
    this.time += dt;
    this.sky.position.copy(camera.position);
    this.sky.material.uniforms.time.value = this.time;
    this.oceanMat.uniforms.time.value = this.time;
    this.oceanMat.uniforms.camPos.value.copy(camera.position);
    this.boats.forEach((b, i) => {
      b.position.y = -0.6 + Math.sin(this.time * 0.8 + i) * 0.15;
      b.rotation.z = Math.sin(this.time * 0.6 + i * 2) * 0.05;
    });
    for (const u of this.updaters) u(this.time, dt);
  }

  resolveCircle(x, z, r) {
    let res = this.colliders.resolve(x, z, r);
    const consider = (nx, nz, d) => { if (d > 0 && (!res || d > res.d)) res = { nx, nz, d }; };
    // shoreline (unless on the pier)
    if (!onPier(x, z) && !(x < PIER.x0 + 2 && x > PIER.x1 && Math.abs(z - PIER.z) < PIER.w / 2 - 0.2)) {
      const lim = coastX(z) + 1.5;
      if (x - r < lim) {
        const s = coastSlope(z), n = Math.hypot(1, s);
        consider(1 / n, -s / n, (lim - (x - r)) / n);
      }
    }
    // cliffs
    const b = borderSDF(x, z);
    consider(-b.nx, -b.nz, b.d + r);
    return res;
  }
}

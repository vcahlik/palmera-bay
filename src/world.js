import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

// ---------------------------------------------------------------------------
// Deterministic randomness
// ---------------------------------------------------------------------------
function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rng = mulberry32(20260923);
const rr = (a, b) => a + (b - a) * rng();
const pick = (arr) => arr[Math.floor(rng() * arr.length)];

// ---------------------------------------------------------------------------
// Palette + shared sky / fog GLSL
// ---------------------------------------------------------------------------
const C = (h) => new THREE.Color(h);
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
// City layout
// ---------------------------------------------------------------------------
export function coastX(z) { return -165 + 16 * Math.sin(z * 0.0105 + 0.5) + 7 * Math.sin(z * 0.031 + 2.0); }
export function coastSlope(z) { return 16 * 0.0105 * Math.cos(z * 0.0105 + 0.5) + 7 * 0.031 * Math.cos(z * 0.031 + 2.0); }
const COAST_GLSL = `float coastX(float z){ return -165.0 + 16.0*sin(z*0.0105+0.5) + 7.0*sin(z*0.031+2.0); }`;

const BVD_OFF = 40, BVD_W = 20, GRID_W = 11, SW = 4, BVD_SW = 5, BEACH_W = 26;
export function bvdX(z) { return coastX(z) + BVD_OFF; }
const XS = [-50, 40, 130, 215];
const ZS = [-255, -170, -85, 0, 85, 170, 255];
export const PIER = { z: -40, w: 9 };
PIER.x0 = coastX(PIER.z) + 6;
PIER.x1 = coastX(PIER.z) - 115;
export const BOUNDS = { xMax: 300, zMax: 290 };
const GX0 = -320, GZ0 = -320, GS = 640, GN = 3072;

const roads = [];
{
  const pts = [];
  for (let z = -300; z <= 300; z += 5) pts.push([bvdX(z), z]);
  roads.push({ pts, w: BVD_W, bvd: true, sw: BVD_SW });
}
for (const x of XS) roads.push({ pts: [[x, ZS[0]], [x, ZS[ZS.length - 1]]], w: GRID_W, vert: true, c: x, a: ZS[0], b: ZS[ZS.length - 1], sw: SW });
for (const z of ZS) roads.push({ pts: [[bvdX(z), z], [XS[XS.length - 1], z]], w: GRID_W, horiz: true, c: z, a: bvdX(z), b: XS[XS.length - 1], sw: SW });

function roadDist(r, x, z) {
  if (r.bvd) {
    const s = coastSlope(z);
    return Math.abs(x - bvdX(z)) / Math.sqrt(1 + s * s);
  }
  if (r.vert) {
    const dz = z < r.a ? r.a - z : z > r.b ? z - r.b : 0;
    return Math.hypot(x - r.c, dz);
  }
  const dx = x < r.a ? r.a - x : x > r.b ? x - r.b : 0;
  return Math.hypot(z - r.c, dx);
}
function onOtherRoad(x, z, except, margin = 0) {
  for (const r of roads) if (r !== except && roadDist(r, x, z) < r.w / 2 + margin) return true;
  return false;
}
export function onPier(x, z) {
  return x < PIER.x0 && x > PIER.x1 && Math.abs(z - PIER.z) < PIER.w / 2;
}

// Blocks
const PARKS = new Set(['1,2', '2,4', '3,1', '0,4']);
const blocks = [];
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 6; j++) {
    const zA = ZS[j], zB = ZS[j + 1];
    let maxB = -1e9;
    for (let z = zA; z <= zB; z += 2) maxB = Math.max(maxB, bvdX(z));
    const bx0 = i === 0 ? maxB + BVD_W / 2 + BVD_SW + 2 : XS[i - 1] + GRID_W / 2 + SW + 1.5;
    const bx1 = XS[i] - GRID_W / 2 - SW - 1.5;
    const bz0 = zA + GRID_W / 2 + SW + 1.5, bz1 = zB - GRID_W / 2 - SW - 1.5;
    blocks.push({ i, j, zA, zB, xA: i === 0 ? null : XS[i - 1], xB: XS[i], bx0, bx1, bz0, bz1, park: PARKS.has(`${i},${j}`) });
  }
}
function parkAt(x, z) {
  for (const b of blocks) if (b.park && x > b.bx0 - 2 && x < b.bx1 + 2 && z > b.bz0 - 2 && z < b.bz1 + 2) return true;
  return false;
}

export function surfaceAt(x, z) {
  if (onPier(x, z)) return 'pier';
  const cx = coastX(z);
  if (x < cx) return 'water';
  for (const r of roads) if (roadDist(r, x, z) < r.w / 2) return 'road';
  if (x < cx + BEACH_W) return 'sand';
  if (x > XS[3] + 10 || Math.abs(z) > ZS[6] + 10) return 'grass';
  if (parkAt(x, z)) return 'grass';
  return 'paved';
}

export function nearestRoadPoint(x, z) {
  let best = null, bd = 1e9;
  for (const r of roads) {
    let px, pz, h;
    if (r.bvd) { pz = Math.max(-280, Math.min(280, z)); px = bvdX(pz) - 5; h = 0; }
    else if (r.vert) { px = r.c + 2.5; pz = Math.max(r.a, Math.min(r.b, z)); h = 0; }
    else { pz = r.c - 2.5; px = Math.max(r.a, Math.min(r.b, x)); h = Math.PI / 2; }
    const d = Math.hypot(px - x, pz - z);
    if (d < bd) { bd = d; best = { x: px, z: pz, h }; }
  }
  return best;
}

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
      } else { dx = x - o.x; dz = z - o.z; d = Math.hypot(dx, dz); r += o.r; }
      pen = r - d;
      if (o.t === 1) r -= o.r;
      if (pen > 0 && (!best || pen > best.d)) best = { nx: dx / d, nz: dz / d, d: pen };
    }
    return best;
  }
}

// ---------------------------------------------------------------------------
// Textures
// ---------------------------------------------------------------------------
const TILE_W = 3.2, TILE_H = 3.6, TILES = 8;

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
      // window
      const wx = x + 7, wy = y + 8, ww = S - 14, wh = S - 13;
      const on = rng() < 0.38;
      b.fillStyle = '#b8b0a8'; b.fillRect(wx - 1, wy + wh, ww + 2, 2); // sill
      if (on) {
        const col = rng() < 0.9 ? pick(lit.slice(0, 5)) : pick(lit.slice(5));
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
  const t = new THREE.CanvasTexture(cv);
  return t;
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
// World
// ---------------------------------------------------------------------------
export class World {
  constructor(scene) {
    this.scene = scene;
    this.colliders = new Colliders();
    this.glowMat = makeGlowMaterial();
    this.glows = [];
    this.lampHeads = [];
    this.palmSpots = [];
    this.globeLamps = [];
    this.time = 0;

    this.buildSky();
    this.buildOcean();
    this.groundCanvas = this.buildGround();
    this.buildCity();
    this.buildPalms();
    this.buildLamps();
    this.buildPier();
    this.buildBeach();
    this.buildGlobeLamps(this.globeLamps);
    this.buildLandscape();
    this.buildBoats();

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

    // base grass
    g.fillStyle = '#5f7a3a'; g.fillRect(GX0, GZ0, GS, GS);
    for (let i = 0; i < 4000; i++) {
      g.fillStyle = rng() < 0.5 ? 'rgba(40,70,30,0.35)' : 'rgba(120,140,60,0.25)';
      const x = rr(GX0, GX0 + GS), z = rr(GZ0, GZ0 + GS), r = rr(0.5, 4);
      g.beginPath(); g.arc(x, z, r, 0, Math.PI * 2); g.fill();
    }

    // blocks
    for (const b of blocks) {
      g.beginPath();
      if (b.i === 0) {
        for (let z = b.zA; z <= b.zB; z += 2) g.lineTo(bvdX(z), z);
      } else { g.moveTo(b.xA, b.zA); g.lineTo(b.xA, b.zB); }
      g.lineTo(b.xB, b.zB); g.lineTo(b.xB, b.zA); g.closePath();
      g.fillStyle = b.park ? '#4f7a34' : '#a0978a';
      g.fill();
      if (!b.park) {
        // parking-lot / courtyard paving tone variation
        g.fillStyle = 'rgba(80,70,70,0.25)';
        g.fillRect(b.bx0 + 4, b.bz0 + 4, (b.bx1 - b.bx0) - 8, (b.bz1 - b.bz0) - 8);
      } else {
        const cx = (b.bx0 + b.bx1) / 2, cz = (b.bz0 + b.bz1) / 2;
        g.strokeStyle = '#cdb88e'; g.lineWidth = 2.2;
        g.beginPath(); g.moveTo(b.bx0 - 6, b.bz0 - 6); g.lineTo(b.bx1 + 6, b.bz1 + 6); g.stroke();
        g.beginPath(); g.moveTo(b.bx1 + 6, b.bz0 - 6); g.lineTo(b.bx0 - 6, b.bz1 + 6); g.stroke();
        g.beginPath(); g.arc(cx, cz, 9, 0, Math.PI * 2); g.fillStyle = '#d4c09a'; g.fill();
        for (let k = 0; k < 250; k++) {
          g.fillStyle = rng() < 0.5 ? 'rgba(30,60,25,0.4)' : 'rgba(110,150,60,0.3)';
          g.fillRect(rr(b.bx0, b.bx1), rr(b.bz0, b.bz1), rr(0.4, 1.5), rr(0.4, 1.5));
        }
      }
    }

    // beach
    const zMin = GZ0, zMax = GZ0 + GS;
    g.beginPath();
    for (let z = zMin; z <= zMax; z += 2) g.lineTo(coastX(z) - 4, z);
    for (let z = zMax; z >= zMin; z -= 2) g.lineTo(coastX(z) + BEACH_W + 4, z);
    g.closePath(); g.fillStyle = '#e6c894'; g.fill();
    for (let k = 0; k < 9000; k++) {
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
      for (let z = -300; z <= 300; z += 1) {
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
    for (let z = -300; z < 300; z += 1.5) for (const sgn of [-1, 1]) {
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
        const P = (off) => (r.vert ? [r.c + off, u + 0.5] : [u + 0.5, r.c + off]);
        const [cx, cz] = P(0);
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
    for (const v of roads.filter((r) => r.vert)) for (const h of roads.filter((r) => r.horiz)) {
      if (v.c < h.a || v.c > h.b || h.c < v.a || h.c > v.b) continue;
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
      const v = rng();
      const c = v < 0.5 ? 0 : 255;
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
    const mat = new THREE.MeshLambertMaterial({ map: tex, alphaTest: 0.5 });
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(GS, GS), mat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.set(GX0 + GS / 2, 0, GZ0 + GS / 2);
    ground.receiveShadow = true;
    this.scene.add(ground);

    // land beyond the map (under hills)
    const outer = new THREE.Mesh(new THREE.PlaneGeometry(4000, 4000), new THREE.MeshLambertMaterial({ color: '#4d6634' }));
    outer.rotation.x = -Math.PI / 2;
    outer.position.set(GX0 + GS + 2000 - 2, -0.05, 0);
    this.scene.add(outer);
    for (const sgn of [-1, 1]) {
      const o2 = new THREE.Mesh(new THREE.PlaneGeometry(700, 1200), outer.material);
      o2.rotation.x = -Math.PI / 2;
      o2.position.set(-40, -0.05, sgn * (GS / 2 + 600 - 2));
      this.scene.add(o2);
    }
    return cv;
  }

  // ----------------------------------------------------------- buildings
  buildCity() {
    const tex = makeWindowTextures();
    const geos = [], neon = [];
    const pastel = ['#f4b6c2', '#9ad7d0', '#ffd8a8', '#f7efe0', '#c7b3e6', '#a8e6cf', '#ffb895', '#f6e08a', '#bcdcff', '#ff9fb2'];
    const towerCols = ['#8fa6c0', '#c9b8a6', '#e9e1d2', '#a5b8c8', '#d8c2d6', '#9cc9c4'];
    const neonCols = ['#ff3fa4', '#35e8ff', '#b45cff', '#ff6a3d', '#63ff9e'];

    const box = (w, h, d, x, y, z, color, o = {}) => {
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
      geos.push(gq);
    };
    const neonBox = (w, h, d, x, y, z, color, k = 3.2) => {
      const gq = new THREE.BoxGeometry(w, h, d);
      gq.translate(x, y + h / 2, z);
      const c = C(color).multiplyScalar(k);
      const col = new Float32Array(gq.attributes.position.count * 3);
      for (let i = 0; i < col.length; i += 3) col.set([c.r, c.g, c.b], i);
      gq.setAttribute('color', new THREE.BufferAttribute(col, 3));
      neon.push(gq);
    };

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

    for (const b of blocks) {
      if (b.park) { this.parkDecor(b); continue; }
      const xs = split(b.bx0, b.bx1, 13, 24, rr(2, 4));
      const zs = split(b.bz0, b.bz1, 13, 24, rr(2, 4));
      xs.forEach(([x0, x1], ix) => zs.forEach(([z0, z1], iz) => {
        const inner = ix > 0 && ix < xs.length - 1 && iz > 0 && iz < zs.length - 1;
        if (inner) { this.palmSpots.push([(x0 + x1) / 2 + rr(-3, 3), (z0 + z1) / 2 + rr(-3, 3)]); return; }
        const w = x1 - x0, d = z1 - z0, cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
        const beach = b.i === 0;
        const dd = Math.hypot(cx - 85, cz - 0);
        let h = beach ? rr(10, 30) : 8 + rng() * 18 + 70 * Math.exp(-(dd * dd) / (2 * 120 * 120)) * (0.3 + rng());
        if (!beach && rng() < 0.12 && dd < 170) h += rr(30, 55);
        h = Math.max(2, Math.round(h / TILE_H)) * TILE_H + 0.6;
        const tower = h > 45;
        const color = beach || !tower ? pick(pastel) : pick(towerCols);
        const ou = Math.floor(rng() * TILES) / TILES, ov = Math.floor(rng() * TILES) / TILES;
        box(w, h, d, cx, 0, cz, color, { windows: true, ou, ov });
        this.colliders.box(x0, z0, x1, z1, true);
        // street-facing side
        const faces = [];
        if (ix === 0) faces.push([-1, 0]); if (ix === xs.length - 1) faces.push([1, 0]);
        if (iz === 0) faces.push([0, -1]); if (iz === zs.length - 1) faces.push([0, 1]);
        const [fx, fz] = faces.length ? pick(faces) : [0, 1];
        const cream = '#f2eadc';
        // cornice
        box(w + 0.8, 0.7, d + 0.8, cx, h, cz, cream, { roof: '#8a8078' });
        let top = h + 0.7;
        if (beach || rng() < 0.35) {
          // art deco eyebrow ledges
          for (let y = TILE_H * 2; y < h - 1; y += TILE_H * (beach ? 1 : 2)) box(w + 0.7, 0.22, d + 0.7, cx, y - 0.4, cz, cream);
        }
        if (beach) {
          // central fin on the ocean facade, with neon edge
          const fh = h + rr(3, 7);
          box(0.8, fh, 3, x0 - 0.4, 0, cz, cream);
          neonBox(0.15, fh - 4, 0.15, x0 - 0.85, 2, cz, pick(neonCols));
          neonBox(0.15, 0.15, d * 0.8, x0 - 0.1, TILE_H - 0.5, cz, pick(neonCols), 2.4);
        }
        if (tower) {
          box(w * 0.7, 5, d * 0.7, cx, top, cz, color, { windows: true, ou, ov });
          box(w * 0.4, 4, d * 0.4, cx, top + 5, cz, cream);
          box(0.4, 10, 0.4, cx, top + 9, cz, '#555060');
          this.glows.push({ x: cx, y: top + 19.3, z: cz, s: 2.2, c: C('#ff2a3a').multiplyScalar(3) });
          const nc = pick(neonCols);
          for (const [a, bb] of [[w * 0.7, d * 0.7]]) {
            neonBox(a + 0.2, 0.25, 0.2, cx, top + 4.8, cz - bb / 2, nc);
            neonBox(a + 0.2, 0.25, 0.2, cx, top + 4.8, cz + bb / 2, nc);
            neonBox(0.2, 0.25, bb + 0.2, cx - a / 2, top + 4.8, cz, nc);
            neonBox(0.2, 0.25, bb + 0.2, cx + a / 2, top + 4.8, cz, nc);
          }
        } else if (rng() < 0.5) {
          box(w * rr(0.3, 0.6), rr(2, 4), d * rr(0.3, 0.6), cx + rr(-2, 2), top, cz + rr(-2, 2), cream, { roof: '#6d6560' });
        }
        // rooftop clutter
        for (let k = 0; k < 3; k++) if (rng() < 0.6) box(rr(1, 2.5), rr(0.8, 1.6), rr(1, 2.5), cx + rr(-w / 3, w / 3), top, cz + rr(-d / 3, d / 3), '#8c8790');
        // neon roof outline
        if (!tower && rng() < 0.4) {
          const nc = pick(neonCols), W = w + 0.9, D = d + 0.9;
          neonBox(W, 0.18, 0.18, cx, top - 0.1, cz - D / 2, nc);
          neonBox(W, 0.18, 0.18, cx, top - 0.1, cz + D / 2, nc);
          neonBox(0.18, 0.18, D, cx - W / 2, top - 0.1, cz, nc);
          neonBox(0.18, 0.18, D, cx + W / 2, top - 0.1, cz, nc);
        }
        // vertical neon sign
        if (!beach && h < 40 && rng() < 0.35) {
          const nc = pick(neonCols), sh = Math.min(h - 6, rr(6, 12));
          const sx = fx ? cx + fx * (w / 2 + 0.7) : cx + rr(-w / 4, w / 4);
          const sz = fz ? cz + fz * (d / 2 + 0.7) : cz + rr(-d / 4, d / 4);
          box(fx ? 0.5 : 1.4, sh, fx ? 1.4 : 0.5, sx, 4.5, sz, '#2a2433');
          neonBox(fx ? 0.6 : 1.1, sh - 0.6, fx ? 1.1 : 0.6, sx + fx * 0.05, 4.8, sz + fz * 0.05, nc, 2.2);
        }
        // shop awning
        if (h < 30 && rng() < 0.55) {
          const aw = pick(['#e0445a', '#2fa3a0', '#f09a3a', '#6a5acd', '#f2eadc']);
          if (fx) box(1.6, 0.25, d * 0.8, cx + fx * (w / 2 + 0.8), 3.2, cz, aw, { roof: aw });
          else box(w * 0.8, 0.25, 1.6, cx, 3.2, cz + fz * (d / 2 + 0.8), aw, { roof: aw });
        }
      }));
    }

    const mat = new THREE.MeshLambertMaterial({
      map: tex.map, vertexColors: true, emissiveMap: tex.emissive, emissive: C('#ffffff'), emissiveIntensity: 1.6,
    });
    const city = new THREE.Mesh(mergeGeometries(geos), mat);
    city.castShadow = city.receiveShadow = true;
    this.scene.add(city);
    const nm = new THREE.Mesh(mergeGeometries(neon), new THREE.MeshBasicMaterial({ vertexColors: true }));
    this.scene.add(nm);
  }

  parkDecor(b) {
    const cx = (b.bx0 + b.bx1) / 2, cz = (b.bz0 + b.bz1) / 2;
    // fountain
    const stone = new THREE.MeshLambertMaterial({ color: '#e9dcc4' });
    const basin = new THREE.Mesh(new THREE.CylinderGeometry(5, 5.4, 0.8, 16), stone);
    basin.position.set(cx, 0.4, cz); basin.castShadow = basin.receiveShadow = true;
    const water = new THREE.Mesh(new THREE.CylinderGeometry(4.6, 4.6, 0.1, 16), new THREE.MeshBasicMaterial({ color: C('#4fd6e0').multiplyScalar(0.8) }));
    water.position.set(cx, 0.72, cz);
    const col = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.8, 3, 8), stone);
    col.position.set(cx, 1.5, cz); col.castShadow = true;
    this.scene.add(basin, water, col);
    this.glows.push({ x: cx, y: 3.3, z: cz, s: 3, c: C('#6ff0ff').multiplyScalar(1.4) });
    this.colliders.circle(cx, cz, 5.4);
    for (let k = 0; k < 14; k++) {
      const a = rng() * Math.PI * 2, r = rr(12, Math.min(b.bx1 - b.bx0, b.bz1 - b.bz0) / 2);
      this.palmSpots.push([cx + Math.cos(a) * r, cz + Math.sin(a) * r]);
    }
    // benches + low globe lamps around fountain
    for (let k = 0; k < 6; k++) {
      const a = k / 6 * Math.PI * 2 + 0.3;
      this.globeLamps.push([cx + Math.cos(a) * 11, cz + Math.sin(a) * 11]);
    }
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
    // boulevard median
    for (let z = -288; z <= 288; z += 16) {
      const x = bvdX(z);
      if (!onOtherRoad(x, z, roads[0], 4)) spots.push([x, z]);
    }
    // promenade (between festoon posts)
    for (let z = -287; z <= 287; z += 14) {
      const x = bvdX(z) - BVD_W / 2 - BVD_SW - 1.2;
      if (Math.abs(z - PIER.z) > 10) spots.push([x, z]);
    }
    // beach clusters
    for (let k = 0; k < 70; k++) {
      const z = rr(-300, 300), x = coastX(z) + rr(9, 22);
      if (Math.abs(z - PIER.z) > 12) spots.push([x, z]);
    }
    // city sidewalks
    for (const r of roads) {
      if (!r.horiz || Math.abs(r.c) > 250) continue;
      for (let x = r.a + 20; x < r.b; x += 22) for (const sgn of [-1, 1]) {
        const z = r.c + sgn * (r.w / 2 + 2.5);
        if (!onOtherRoad(x, z, r, 4)) spots.push([x + 8, z]);
      }
    }
    // outskirts jungle
    for (let k = 0; k < 260; k++) {
      let x = rr(-150, 320), z = rr(-320, 320);
      if (x < XS[3] + 12 && Math.abs(z) < ZS[6] + 12) continue;
      if (x < coastX(z) + BEACH_W + 20 || onOtherRoad(x, z, null, 3)) continue;
      spots.push([x, z]);
    }
    const variants = [11, 23, 37, 51].map((s) => World.palmGeometry(s));
    const mat = new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide });
    const buckets = variants.map(() => []);
    for (const s of spots) buckets[Math.floor(rng() * variants.length)].push(s);
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), sc = new THREE.Vector3(), p = new THREE.Vector3();
    variants.forEach((geo, vi) => {
      const list = buckets[vi];
      const im = new THREE.InstancedMesh(geo, mat, list.length);
      list.forEach(([x, z], i) => {
        const k = rr(0.8, 1.2);
        q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), rng() * Math.PI * 2);
        m.compose(p.set(x, 0, z), q, sc.set(k, k * rr(0.9, 1.15), k));
        im.setMatrixAt(i, m);
        this.colliders.circle(x, z, 0.45);
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
        for (let z = -280; z <= 280; z += 32) {
          const x = bvdX(z) + 0.0;
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
    const baseG = new THREE.CylinderGeometry(0.28, 0.32, 0.6, 6); baseG.translate(0, 0.3, 0);
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
    const m = new THREE.Matrix4(), e = new THREE.Euler();
    const lampC = C('#ffc27a');
    lamps.forEach((l, i) => {
      m.makeRotationFromEuler(e.set(0, l.a, 0)); m.setPosition(l.x, 0, l.z);
      poleM.setMatrixAt(i, m); headM.setMatrixAt(i, m);
      const hx = l.x + Math.sin(l.a) * 2.2, hz = l.z + Math.cos(l.a) * 2.2;
      m.makeTranslation(hx, 0.04, hz); poolM.setMatrixAt(i, m);
      this.glows.push({ x: hx, y: 6.6, z: hz, s: 4.2, c: lampC.clone().multiplyScalar(1.3) });
      this.lampHeads.push(new THREE.Vector3(hx, 6.6, hz));
      this.colliders.circle(l.x, l.z, 0.35);
    });
    poleM.castShadow = true;
    this.scene.add(poleM, headM, poolM);

    // festoon string lights along the promenade
    const posts = [];
    for (let z = -294; z <= 294; z += 14) {
      if (Math.abs(z + 7 - PIER.z) < 10) { posts.push(null); continue; }
      posts.push([bvdX(z + 7) - BVD_W / 2 - BVD_SW - 1.6, z + 7]);
    }
    this.festoon(posts, 4.6, 1.3);
    this.poolM = poolM;
  }

  festoon(posts, height, sag) {
    const bulbs = ['#ffd58a', '#ffd58a', '#ffcf7a', '#ff7ab8', '#7ae8ff', '#ffe9b8'];
    const wire = [];
    const postGeo = [];
    posts.forEach((p) => {
      if (!p) return;
      const g = new THREE.CylinderGeometry(0.08, 0.1, height, 5); g.translate(p[0], height / 2, p[1]);
      postGeo.push(g);
      this.colliders.circle(p[0], p[1], 0.25);
    });
    for (let i = 0; i < posts.length - 1; i++) {
      const a = posts[i], b = posts[i + 1];
      if (!a || !b) continue;
      const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
      const n = Math.round(len / 0.9);
      let prev = null;
      for (let k = 0; k <= n; k++) {
        const t = k / n;
        const x = a[0] + (b[0] - a[0]) * t, z = a[1] + (b[1] - a[1]) * t;
        const y = height - 0.1 - sag * 4 * t * (1 - t);
        if (k > 0 && k < n) this.glows.push({ x, y: y - 0.12, z, s: 0.55, c: C(pick(bulbs)).multiplyScalar(2.2) });
        if (prev) wire.push(prev[0], prev[1], prev[2], x, y, z);
        prev = [x, y, z];
      }
    }
    if (postGeo.length) {
      const pm = new THREE.Mesh(mergeGeometries(postGeo), new THREE.MeshLambertMaterial({ color: '#5a4332' }));
      pm.castShadow = true;
      this.scene.add(pm);
    }
    const wg = new THREE.BufferGeometry(); wg.setAttribute('position', new THREE.Float32BufferAttribute(wire, 3));
    this.scene.add(new THREE.LineSegments(wg, new THREE.LineBasicMaterial({ color: '#1c1620' })));
  }

  buildGlobeLamps(spots) {
    const pole = new THREE.CylinderGeometry(0.07, 0.1, 3.4, 6); pole.translate(0, 1.7, 0);
    const pm = new THREE.InstancedMesh(pole, new THREE.MeshLambertMaterial({ color: '#23202a' }), spots.length);
    const globe = new THREE.IcosahedronGeometry(0.28, 1); globe.translate(0, 3.6, 0);
    const gm = new THREE.InstancedMesh(globe, new THREE.MeshBasicMaterial({ color: C('#fff0d0').multiplyScalar(3) }), spots.length);
    const m = new THREE.Matrix4();
    spots.forEach(([x, z], i) => {
      m.makeTranslation(x, 0, z); pm.setMatrixAt(i, m); gm.setMatrixAt(i, m);
      this.glows.push({ x, y: 3.6, z, s: 1.7, c: C('#ffd9a0').multiplyScalar(1.3) });
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
    for (let k = 0; k < 26; k++) {
      const z = rr(-280, 280); if (Math.abs(z - PIER.z) < 14) continue;
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
      // towel
      const towel = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 1.9), new THREE.MeshLambertMaterial({ color: pick(['#ff6f91', '#35c8d8', '#ffd166', '#b45cff']) }));
      towel.rotation.x = -Math.PI / 2; towel.rotation.z = rr(0, 3); towel.position.set(x + rr(-1.5, 1.5), 0.03, z + rr(-1.5, 1.5));
      this.scene.add(towel);
    }
    // lifeguard towers
    const tcols = ['#ff9fb2', '#9ad7d0', '#ffd166', '#c7b3e6'];
    for (const z of [-200, -120, 60, 150, 230]) {
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
    }
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
    // headlands framing the bay
    for (const s of [-1, 1]) {
      for (let k = 0; k < 14; k++) {
        const x = rr(-330, 380), z = s * rr(330, 440);
        hill(x, z, rr(60, 120), rr(35, 95), pick(['#3e5a30', '#4a6436', '#35502c']));
      }
      hill(-230, s * 320, 70, 45, '#3e5a30');
      hill(-300, s * 360, 90, 60, '#35502c');
    }
    // distant mountains inland
    for (let k = 0; k < 30; k++) {
      const x = rr(420, 1100), z = rr(-1100, 1100);
      hill(x, z, rr(120, 260), rr(80, 240), pick(['#3a4a3a', '#43503e', '#3d3f4a']));
    }
    const hm = new THREE.Mesh(mergeGeometries(hillGeos), new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true }));
    hm.receiveShadow = true;
    this.scene.add(hm);

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
    if (x + r > BOUNDS.xMax) consider(-1, 0, x + r - BOUNDS.xMax);
    if (z + r > BOUNDS.zMax) consider(0, -1, z + r - BOUNDS.zMax);
    if (z - r < -BOUNDS.zMax) consider(0, 1, -BOUNDS.zMax - (z - r));
    return res;
  }
}

export { GX0, GZ0, GS };

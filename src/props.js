// Street life: neon shop signs, lit storefronts, café patios, billboards, parked cars,
// traffic lights, string lights over streets, a gas station, a motel and the marina.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import {
  rng, rr, pick, heightAt, roads, intersections, blocks, onOtherRoad, coastX, borderSDF, MARINA, INNER,
} from './layout.js';
// NOTE: world.js imports this module, so world exports may only be used inside functions.
import { C, NEON, PASTEL, BULBS_PARTY, BULBS_WARM, TILE_H, glowPoints } from './world.js';

const SIGN_NAMES = [
  'CAFE', 'PIZZA', 'TACOS', 'SURF SHOP', 'DINER', 'BAR', 'RECORDS', 'GELATO',
  'SUSHI', 'DISCO', 'VIDEO', 'ARCADE', 'BOUTIQUE', 'DONUTS', 'LIQUOR', 'TATTOO',
  'JUICE BAR', 'BURGERS', 'CINEMA', 'OPEN 24H', 'COCKTAILS', 'SEAFOOD', 'BAKERY', 'KARAOKE',
  'MARINA', 'BAIT SHOP', 'MOTEL', 'VACANCY', 'GAS', 'FLAMINGO', 'PARADISE', 'STARLITE',
];
const SHOP_SIGNS = SIGN_NAMES.slice(0, 24);
const FOOD = new Set(['CAFE', 'PIZZA', 'TACOS', 'DINER', 'BAR', 'GELATO', 'SUSHI', 'JUICE BAR', 'BURGERS', 'COCKTAILS', 'SEAFOOD', 'BAKERY', 'DONUTS']);
const HOTELS = ['FLAMINGO', 'PARADISE', 'STARLITE'];
const SIGN_COLORS = ['#ff4f8b', '#35e8ff', '#ffd166', '#7dff8a', '#c77dff', '#ff8a3d'];

// All ads are for made-up local businesses.
const BILLBOARDS = [
  { t: 'PALMERA COLA', s: 'TASTE THE SUNSET', bg: ['#ff4f5e', '#ffb35c'], fg: '#fff6d0', art: 'bottle' },
  { t: 'RADIO 88.5', s: 'SYNTHWAVE ALL NIGHT', bg: ['#3a1c6e', '#ff4f8b'], fg: '#7ae8ff', art: 'sun' },
  { t: 'SUNSET MOTEL', s: 'POOL  COLOR TV  VACANCY', bg: ['#0f5a6e', '#1a1e4a'], fg: '#ffd166', art: 'palm' },
  { t: 'SURF CONTEST', s: 'SATURDAY AT DAWN', bg: ['#35c8e8', '#1a3a8a'], fg: '#ffffff', art: 'wave' },
  { t: 'FLY PALMERA', s: 'PARADISE IS CLOSER', bg: ['#ffcf8a', '#ff7a9a'], fg: '#2a1a4a', art: 'plane' },
  { t: 'TACO LOCO', s: '2 TACOS FOR $1', bg: ['#ffd23f', '#ff6a3d'], fg: '#3a1020', art: 'sun' },
  { t: 'NEON NIGHTS', s: 'CLUB  DANCE  21+', bg: ['#120a24', '#5a1a7a'], fg: '#ff3fa4', art: 'stripes' },
  { t: 'ORANGE GROVE', s: 'FRESH SQUEEZED', bg: ['#ff9a3d', '#ffe08a'], fg: '#2a4a1a', art: 'orange' },
];

const FONT = (px) => `${px}px "Press Start 2P", monospace`;

// ---------------------------------------------------------------------------
// Texture atlas: 32 neon signs (256x64) on top, 8 billboards (512x128) below
// ---------------------------------------------------------------------------
function cellRect(x, y, w, h, N = 1024) {
  const e = 0.5;
  return { u0: (x + e) / N, u1: (x + w - e) / N, v0: 1 - (y + h - e) / N, v1: 1 - (y + e) / N };
}
const signRect = (i) => cellRect((i % 4) * 256, Math.floor(i / 4) * 64, 256, 64);
const boardRect = (j) => cellRect((j % 2) * 512, 512 + Math.floor(j / 2) * 128, 512, 128);

function drawSign(g, x, y, w, h, text, color) {
  g.save();
  g.beginPath(); g.rect(x, y, w, h); g.clip();
  g.fillStyle = '#140a1e'; g.fillRect(x, y, w, h);
  g.strokeStyle = color; g.lineWidth = 3; g.globalAlpha = 0.8; g.strokeRect(x + 6, y + 6, w - 12, h - 12); g.globalAlpha = 1;
  let size = 30;
  g.font = FONT(size);
  while (g.measureText(text).width > w - 34 && size > 10) { size -= 2; g.font = FONT(size); }
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.shadowColor = color; g.shadowBlur = 14; g.fillStyle = color;
  g.fillText(text, x + w / 2, y + h / 2 + 2); g.fillText(text, x + w / 2, y + h / 2 + 2);
  g.shadowBlur = 0; g.globalAlpha = 0.6; g.fillStyle = '#ffffff';
  g.fillText(text, x + w / 2, y + h / 2 + 2);
  g.restore();
}

function drawBillboard(g, x, y, w, h, b) {
  g.save();
  g.beginPath(); g.rect(x, y, w, h); g.clip();
  const gr = g.createLinearGradient(0, y, 0, y + h);
  gr.addColorStop(0, b.bg[0]); gr.addColorStop(1, b.bg[1]);
  g.fillStyle = gr; g.fillRect(x, y, w, h);
  const ax = x + w * 0.84, ay = y + h * 0.52, R = h * 0.36;
  g.lineCap = 'round';
  switch (b.art) {
    case 'sun': {
      const sg = g.createLinearGradient(0, ay - R, 0, ay + R);
      sg.addColorStop(0, '#fff3a0'); sg.addColorStop(1, '#ff4f8b');
      g.fillStyle = sg; g.beginPath(); g.arc(ax, ay, R, 0, Math.PI * 2); g.fill();
      g.fillStyle = b.bg[1];
      for (let k = 0; k < 4; k++) g.fillRect(ax - R, ay + k * R * 0.26, 2 * R, 2 + k * 2);
      break;
    }
    case 'palm': {
      g.strokeStyle = '#0a0a18'; g.lineWidth = 7;
      g.beginPath(); g.moveTo(ax + 10, y + h); g.quadraticCurveTo(ax + 16, ay, ax - 4, ay - R * 0.7); g.stroke();
      g.lineWidth = 6;
      for (let k = 0; k < 6; k++) {
        const a = -Math.PI + k * 0.6;
        g.beginPath(); g.moveTo(ax - 4, ay - R * 0.7);
        g.quadraticCurveTo(ax - 4 + Math.cos(a) * 30, ay - R * 0.7 + Math.sin(a) * 18 - 10, ax - 4 + Math.cos(a) * 50, ay - R * 0.7 + Math.sin(a) * 10 + 18);
        g.stroke();
      }
      break;
    }
    case 'wave': {
      g.lineWidth = 6;
      for (let k = 0; k < 4; k++) {
        g.strokeStyle = k % 2 ? '#ffffff' : '#7ae8ff';
        g.beginPath(); g.arc(ax - 10 + k * 8, ay + 30 - k * 4, 30 + k * 10, Math.PI * 1.05, Math.PI * 1.75); g.stroke();
      }
      break;
    }
    case 'plane': {
      g.fillStyle = '#ffffff';
      g.beginPath(); g.moveTo(ax - 60, ay); g.lineTo(ax + 40, ay - 6); g.lineTo(ax + 50, ay); g.lineTo(ax + 40, ay + 6); g.closePath(); g.fill();
      g.beginPath(); g.moveTo(ax, ay - 3); g.lineTo(ax - 20, ay - 36); g.lineTo(ax - 8, ay - 36); g.lineTo(ax + 18, ay - 3); g.fill();
      g.beginPath(); g.moveTo(ax - 50, ay - 2); g.lineTo(ax - 60, ay - 20); g.lineTo(ax - 52, ay - 20); g.lineTo(ax - 40, ay - 2); g.fill();
      break;
    }
    case 'bottle': {
      g.fillStyle = '#7a0a1a';
      g.fillRect(ax - 14, ay - R * 0.4, 28, R * 1.4); g.fillRect(ax - 6, ay - R * 1.0, 12, R * 0.65);
      g.fillStyle = '#fff6d0'; g.fillRect(ax - 14, ay, 28, 14);
      break;
    }
    case 'stripes': {
      g.lineWidth = 8;
      for (let k = 0; k < 6; k++) { g.strokeStyle = SIGN_COLORS[k]; g.beginPath(); g.moveTo(ax - 70 + k * 18, y + h); g.lineTo(ax - 20 + k * 18, y); g.stroke(); }
      break;
    }
    case 'orange': {
      g.fillStyle = '#ff8a1d'; g.beginPath(); g.arc(ax, ay + 6, R * 0.9, 0, Math.PI * 2); g.fill();
      g.fillStyle = '#3a8a2a'; g.beginPath(); g.ellipse(ax + 12, ay - R * 0.85, 16, 7, -0.5, 0, Math.PI * 2); g.fill();
      break;
    }
  }
  g.textAlign = 'left'; g.textBaseline = 'middle';
  let size = 34; g.font = FONT(size);
  while (g.measureText(b.t).width > w * 0.66 && size > 12) { size -= 2; g.font = FONT(size); }
  g.fillStyle = 'rgba(0,0,0,0.45)'; g.fillText(b.t, x + 21, y + h * 0.4 + 3);
  g.fillStyle = b.fg; g.fillText(b.t, x + 18, y + h * 0.4);
  g.font = FONT(13); g.fillStyle = b.fg; g.globalAlpha = 0.9; g.fillText(b.s, x + 20, y + h * 0.76); g.globalAlpha = 1;
  g.strokeStyle = '#1a1024'; g.lineWidth = 8; g.strokeRect(x + 4, y + 4, w - 8, h - 8);
  g.restore();
}

function makeAtlas() {
  const cv = document.createElement('canvas'); cv.width = cv.height = 1024;
  const g = cv.getContext('2d');
  SIGN_NAMES.forEach((t, i) => drawSign(g, (i % 4) * 256, Math.floor(i / 4) * 64, 256, 64, t, SIGN_COLORS[i % SIGN_COLORS.length]));
  BILLBOARDS.forEach((b, j) => drawBillboard(g, (j % 2) * 512, 512 + Math.floor(j / 2) * 128, 512, 128, b));
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  return t;
}

// 4x4 variants of lit shop windows, 64x64 each
function makeShopTexture() {
  const cv = document.createElement('canvas'); cv.width = cv.height = 256;
  const g = cv.getContext('2d');
  const tints = ['#ffd9a0', '#ffc27a', '#ffe8c8', '#a8f0ff', '#ffb0d8', '#c8ffb0', '#ffe07a', '#ffcfa8'];
  for (let i = 0; i < 16; i++) {
    const x = (i % 4) * 64, y = Math.floor(i / 4) * 64;
    const gr = g.createLinearGradient(0, y, 0, y + 64);
    const tint = pick(tints);
    gr.addColorStop(0, tint); gr.addColorStop(1, '#6a3a3a');
    g.fillStyle = gr; g.fillRect(x, y, 64, 64);
    g.fillStyle = 'rgba(40,20,30,0.55)';
    for (let k = 0; k < 3; k++) g.fillRect(x + 4, y + 16 + k * 14, 56, 2); // shelves
    for (let k = 0; k < 3; k++) if (rng() < 0.7) { // people / plants silhouettes
      const px = x + 6 + rng() * 48, ph = 16 + rng() * 16;
      g.fillStyle = 'rgba(30,15,25,0.75)'; g.fillRect(px, y + 64 - ph, 7, ph); g.fillRect(px + 1, y + 64 - ph - 6, 5, 5);
    }
    g.fillStyle = '#231a26';
    g.fillRect(x, y, 64, 3); g.fillRect(x, y + 61, 64, 3); g.fillRect(x, y, 3, 64); g.fillRect(x + 61, y, 3, 64);
    g.fillRect(x + 31, y, 2, 64);
  }
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.SRGBColorSpace; t.magFilter = THREE.NearestFilter;
  return t;
}
const shopRect = (i) => cellRect((i % 4) * 64, Math.floor(i / 4) * 64, 64, 64, 256);

function quad(w, h, rect, x, y, z, rotY) {
  const g = new THREE.PlaneGeometry(w, h);
  const uv = g.attributes.uv;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, rect.u0 + uv.getX(i) * (rect.u1 - rect.u0), rect.v0 + uv.getY(i) * (rect.v1 - rect.v0));
  g.rotateY(rotY); g.translate(x, y, z);
  return g;
}

// vertex-coloured, uv-less, non-indexed geometry (for merging odd shapes)
function tint(geo, color) {
  const g = geo.index ? geo.toNonIndexed() : geo;
  if (g.attributes.uv) g.deleteAttribute('uv');
  const c = C(color), col = new Float32Array(g.attributes.position.count * 3);
  for (let i = 0; i < col.length; i += 3) col.set([c.r, c.g, c.b], i);
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return g;
}

// Adds a gentle bob to boats in the vertex shader. `bob` = (phase, pivot x, pivot z).
function bobbing(mat, uTime) {
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uTime = uTime;
    sh.vertexShader = 'attribute vec3 bob;\nuniform float uTime;\n' + sh.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>
      vec2 rel = position.xz - bob.yz;
      transformed.y += sin(uTime * 0.9 + bob.x) * 0.12 + rel.y * sin(uTime * 0.7 + bob.x * 1.7) * 0.03 + rel.x * sin(uTime * 0.5 + bob.x) * 0.008;`);
  };
  return mat;
}

// ---------------------------------------------------------------------------
export class Props {
  constructor(world) {
    this.w = world;
    this.B = world.batch;
    this.atlas = makeAtlas();
    this.signGeos = [];
    this.boardGeos = [];
    this.shopGeos = [];
    this.misc = [];
    this.parked = []; // {x,z,y,h,pitch}

    this.storefronts();
    this.roofSigns();
    this.roadsideBillboards();
    this.streetFestoons();
    this.trafficLights();
    this.gasStation();
    this.motel();
    this.marina();
    this.parkedCars();
    this.finish();
  }

  sign(name, w, x, y, z, rotY) { this.signGeos.push(quad(w, w / 4, signRect(SIGN_NAMES.indexOf(name)), x, y, z, rotY)); }
  board(j, w, x, y, z, rotY) { this.boardGeos.push(quad(w, w / 4, boardRect(j), x, y, z, rotY)); }
  addMisc(geo, color) { this.misc.push(tint(geo, color)); }

  // ------------------------------------------------------------ storefronts
  storefronts() {
    const { B, w: W } = this;
    for (const f of W.facades) {
      if (f.villa || rng() > 0.85 || f.len < 7) continue;
      const rot = Math.atan2(f.nx, f.nz);
      const tx = -f.nz, tz = f.nx; // along the facade
      let width = Math.min(f.len - 2, rr(5, 10));
      let shift = rr(-1, 1) * (f.len - width) / 2 * 0.8;
      if (f.beach) { width = Math.min(f.len / 2 - 2.5, 6); shift = (rng() < 0.5 ? -1 : 1) * (f.len / 4 + 0.75); }
      if (width < 3) continue;
      const cx = f.x + tx * shift, cz = f.z + tz * shift;
      this.shopGeos.push(quad(width, 2.6, shopRect(Math.floor(rng() * 16)), cx + f.nx * 0.07, f.y + 1.7, cz + f.nz * 0.07, rot));
      const name = f.beach ? pick(['COCKTAILS', 'SEAFOOD', 'SURF SHOP', 'GELATO', 'CAFE', 'BAR']) : pick(SHOP_SIGNS);
      const sw = Math.min(width * 0.9, 6.5);
      this.sign(name, sw, cx + f.nx * 0.12, f.y + 3.75 + sw / 8, cz + f.nz * 0.12, rot);
      if (rng() < 0.65) {
        const aw = pick(['#e0445a', '#2fa3a0', '#f09a3a', '#6a5acd', '#f2eadc', '#ff7ab8']);
        const ax = cx + f.nx * 0.8, az = cz + f.nz * 0.8;
        if (f.nx) B.box(1.6, 0.22, width + 0.6, ax, f.y + 3.0, az, aw, { roof: aw });
        else B.box(width + 0.6, 0.22, 1.6, ax, f.y + 3.0, az, aw, { roof: aw });
        if (rng() < 0.5) {
          const nc = pick(NEON), ex = cx + f.nx * 1.62, ez = cz + f.nz * 1.62;
          if (f.nx) B.neon(0.1, 0.1, width + 0.6, ex, f.y + 2.98, ez, nc, 2.4);
          else B.neon(width + 0.6, 0.1, 0.1, ex, f.y + 2.98, ez, nc, 2.4);
        }
      }
      if (FOOD.has(name) && rng() < 0.6) this.patio(f, cx, cz, width, tx, tz);
    }
  }

  patio(f, cx, cz, width, tx, tz) {
    const y = f.y;
    const n = Math.max(2, Math.floor(width / 2.6));
    for (let k = 0; k < n; k++) {
      const u = -width / 2 + (k + 0.5) * width / n;
      const x = cx + tx * u + f.nx * 2.8, z = cz + tz * u + f.nz * 2.8;
      const top = new THREE.CylinderGeometry(0.45, 0.45, 0.06, 10); top.translate(x, y + 0.75, z); this.addMisc(top, '#f2eadc');
      const leg = new THREE.CylinderGeometry(0.05, 0.05, 0.75, 5); leg.translate(x, y + 0.37, z); this.addMisc(leg, '#3a3040');
      for (const s of [-1, 1]) {
        const ch = new THREE.BoxGeometry(0.4, 0.45, 0.4); ch.translate(x + tx * s * 0.7, y + 0.22, z + tz * s * 0.7); this.addMisc(ch, pick(['#e0445a', '#2fa3a0', '#f2eadc']));
      }
      if (rng() < 0.6) {
        const um = new THREE.ConeGeometry(1.1, 0.45, 8); um.translate(x, y + 2.3, z); this.addMisc(um, pick(['#e8445a', '#2fa3a0', '#f09a3a', '#f7efe0']));
        const pole = new THREE.CylinderGeometry(0.03, 0.03, 2.3, 4); pole.translate(x, y + 1.15, z); this.addMisc(pole, '#dddddd');
      }
      this.w.colliders.circle(x, z, 0.6);
    }
    // zig-zag string lights from the facade out to the curb and back
    const posts = [];
    for (let k = 0; k <= 4; k++) {
      const u = -width / 2 + k * width / 4, out = k % 2 === 1;
      const x = cx + tx * u + f.nx * (out ? 5.0 : 0.25), z = cz + tz * u + f.nz * (out ? 5.0 : 0.25);
      posts.push({ x, z, top: y + (out ? 3.3 : 3.5), pole: out });
    }
    this.w.festoon(posts, 3.3, 0.35, { palette: BULBS_WARM, size: 0.45 });
  }

  // ------------------------------------------------------------ billboards
  roofSigns() {
    const { B } = this;
    let hotel = 0;
    for (const s of this.w.roofSpots) {
      const rot = Math.atan2(s.nx, s.nz);
      if (s.hotel) {
        const w = Math.min(s.len * 0.8, 16);
        this.sign(HOTELS[hotel++ % HOTELS.length], w, s.x, s.y + 1 + w / 8, s.z, rot);
        B.box(0.3, w / 4 + 1, w * 0.9, s.x + 0.35, s.y, s.z, '#2a2433');
      } else {
        const w = Math.min(s.len * 0.9, 13), h = w / 4;
        const bx = s.x + s.nx * 1, bz = s.z + s.nz * 1;
        this.board(Math.floor(rng() * BILLBOARDS.length), w, bx + s.nx * 0.25, s.y + 2 + h / 2, bz + s.nz * 0.25, rot);
        if (s.nx) B.box(0.4, h + 0.4, w + 0.4, bx, s.y + 1.8, bz, '#2a2433');
        else B.box(w + 0.4, h + 0.4, 0.4, bx, s.y + 1.8, bz, '#2a2433');
        for (const t of [-0.3, 0.3]) B.box(0.3, 1.9, 0.3, bx + (-s.nz) * t * w, s.y - 0.1, bz + s.nx * t * w, '#3a3440');
        for (const t of [-0.35, 0, 0.35]) {
          const lx = bx + s.nx * 1 + (-s.nz) * t * w, lz = bz + s.nz * 1 + s.nx * t * w;
          this.w.glows.push({ x: lx, y: s.y + 2.3 + h, z: lz, s: 1.4, c: C('#fff0d0').multiplyScalar(1.3) });
        }
      }
    }
  }

  roadsideBillboards() {
    const { B, w: W } = this;
    let j = 0;
    for (const r of roads) {
      if (r.bvd) continue;
      for (let u = r.a + 40; u < r.b - 20; u += 75) {
        const side = rng() < 0.5 ? -1 : 1;
        const off = side * (r.w / 2 + 4 + 2.5);
        const x = r.vert ? r.c + off : u, z = r.vert ? u : r.c + off;
        const outer = x > INNER.x || Math.abs(z) > INNER.z;
        if (!outer || rng() < 0.35) continue;
        if (borderSDF(x, z).d > -8 || onOtherRoad(x, z, r, 10) || W.colliders.occupied(x, z, 5)) continue;
        const nx = r.vert ? -side : 0, nz = r.vert ? 0 : -side;
        const rot = Math.atan2(nx, nz);
        const y = heightAt(x, z), bw = 13, bh = bw / 4;
        this.board(j++ % BILLBOARDS.length, bw, x + nx * 0.26, y + 6 + bh / 2, z + nz * 0.26, rot);
        if (nx) B.box(0.4, bh + 0.4, bw + 0.4, x, y + 5.8, z, '#2a2433');
        else B.box(bw + 0.4, bh + 0.4, 0.4, x, y + 5.8, z, '#2a2433');
        for (const t of [-0.3, 0.3]) {
          const px = x + (-nz) * t * bw, pz = z + nx * t * bw;
          B.box(0.35, 6.4, 0.35, px, y - 0.5, pz, '#3a3440');
          W.colliders.circle(px, pz, 0.35);
        }
        for (const t of [-0.35, 0, 0.35]) {
          W.glows.push({ x: x + nx * 1.2 + (-nz) * t * bw, y: y + 6.4 + bh, z: z + nz * 1.2 + nx * t * bw, s: 1.4, c: C('#fff0d0').multiplyScalar(1.3) });
        }
      }
    }
  }

  // ------------------------------------------------ string lights over streets
  streetFestoons() {
    const chosen = roads.filter((r) => (r.horiz && [-170, 0, 170, 340].includes(r.c)) || (r.vert && [-50, 40, 300].includes(r.c)));
    for (const r of chosen) {
      const posts = [];
      let side = 1;
      for (let u = r.a + 12; u < r.b - 8; u += 10) {
        side = -side;
        const cx = r.vert ? r.c : u, cz = r.vert ? u : r.c;
        if (onOtherRoad(cx, cz, r, 6)) { posts.push(null); continue; }
        const off = side * (r.w / 2 + 0.7);
        let x = r.vert ? r.c + off : u, z = r.vert ? u : r.c + off;
        if (this.w.colliders.occupied(x, z, 0.6)) { if (r.vert) z += 1.5; else x += 1.5; }
        posts.push([x, z]);
      }
      this.w.festoon(posts, 7.4, 1.5, { palette: BULBS_PARTY, size: 0.6, bright: 2.4 });
    }
  }

  // --------------------------------------------------------- traffic lights
  trafficLights() {
    const list = intersections;
    const n = list.length;
    const dark = new THREE.MeshLambertMaterial({ color: '#26232e' });
    const poleG = new THREE.CylinderGeometry(0.12, 0.15, 6.8, 6); poleG.translate(0, 3.4, 0);
    const armG = new THREE.BoxGeometry(0.12, 0.12, 6.2);
    const housingG = new THREE.BoxGeometry(0.46, 1.3, 0.46);
    const poleM = new THREE.InstancedMesh(poleG, dark, n);
    const armM = new THREE.InstancedMesh(armG, dark, n);
    const housM = new THREE.InstancedMesh(housingG, dark, n * 2);
    const lens = (dy, axisX) => {
      const gs = [];
      for (const s of [-1, 1]) {
        const g = new THREE.BoxGeometry(axisX ? 0.08 : 0.28, 0.28, axisX ? 0.28 : 0.08);
        g.translate(axisX ? s * 0.25 : 0, dy, axisX ? 0 : s * 0.25);
        gs.push(g);
      }
      return mergeGeometries(gs);
    };
    const COLORS = { r: [3.2, 0.12, 0.08], y: [3.0, 1.6, 0.1], g: [0.2, 3.0, 0.9] };
    this.tl = [];
    const lensMeshes = {};
    for (const grp of ['ns', 'ew']) for (const [k, dy] of [['r', 0.4], ['y', 0], ['g', -0.4]]) {
      const mat = new THREE.MeshBasicMaterial({ color: new THREE.Color(...COLORS[k]) });
      const m = new THREE.InstancedMesh(lens(dy, grp === 'ew'), mat, n);
      lensMeshes[grp + k] = m;
      this.tl.push({ grp, k, mat, on: new THREE.Color(...COLORS[k]), off: new THREE.Color(...COLORS[k]).multiplyScalar(0.06) });
      this.w.scene.add(m);
    }
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), one = new THREE.Vector3(1, 1, 1), up = new THREE.Vector3(0, 1, 0);
    const glow = [];
    list.forEach((it, i) => {
      const y = heightAt(it.x + 6.6, it.z + 6.6);
      const px = it.x + 6.6, pz = it.z + 6.6;
      m4.makeTranslation(px, y - 0.3, pz); poleM.setMatrixAt(i, m4);
      q.setFromAxisAngle(up, Math.PI / 4);
      m4.compose(new THREE.Vector3(it.x + 4.4, y + 6.3, it.z + 4.4), q, one); armM.setMatrixAt(i, m4);
      const heads = { ns: [it.x + 2.4, it.z + 2.4], ew: [it.x + 3.3, it.z + 3.3] };
      Object.entries(heads).forEach(([grp, [hx, hz]], hi) => {
        m4.makeTranslation(hx, y + 5.6, hz);
        housM.setMatrixAt(i * 2 + hi, m4);
        for (const k of ['r', 'y', 'g']) lensMeshes[grp + k].setMatrixAt(i, m4);
        for (const [k, dy] of [['r', 0.4], ['y', 0], ['g', -0.4]]) glow.push({ grp, k, x: hx, y: y + 5.6 + dy, z: hz });
      });
      this.w.colliders.circle(px, pz, 0.3);
    });
    poleM.castShadow = true;
    this.w.scene.add(poleM, armM, housM);
    this.tlGlow = glowPoints(glow.map((g) => ({ x: g.x, y: g.y, z: g.z, s: 1.3, c: new THREE.Color(0, 0, 0) })), this.w.glowMat);
    this.tlGlowInfo = glow;
    this.w.scene.add(this.tlGlow);
    let lastPhase = '';
    this.w.updaters.push((t) => {
      // 14 s cycle: NS green, NS yellow, all red, EW green, EW yellow, all red
      const c = t % 14;
      const ns = c < 5.5 ? 'g' : c < 6.5 ? 'y' : 'r';
      const ew = c >= 7 && c < 12.5 ? 'g' : c >= 12.5 && c < 13.5 ? 'y' : 'r';
      const phase = ns + ew;
      if (phase === lastPhase) return;
      lastPhase = phase;
      const active = { ns, ew };
      for (const l of this.tl) l.mat.color.copy(active[l.grp] === l.k ? l.on : l.off);
      const attr = this.tlGlow.geometry.attributes.gcolor;
      this.tlGlowInfo.forEach((g, i) => {
        const on = active[g.grp] === g.k;
        const col = this.tl.find((l) => l.grp === g.grp && l.k === g.k).on;
        attr.setXYZ(i, on ? col.r * 0.5 : 0, on ? col.g * 0.5 : 0, on ? col.b * 0.5 : 0);
      });
      attr.needsUpdate = true;
    });
  }

  // ---------------------------------------------------------- gas station
  gasStation() {
    const b = blocks.find((q) => q.kind === 'gas');
    if (!b) return;
    const { B, w: W } = this;
    const cz = (b.bz0 + b.bz1) / 2;
    const cx = b.bx0 + 16;
    const y = Math.min(heightAt(cx - 10, cz - 8), heightAt(cx + 10, cz + 8), heightAt(cx, cz));
    // canopy
    B.box(20, 0.9, 13, cx, y + 5.2, cz, '#f4f0e6', { roof: '#d0ccc4' });
    B.neon(20.1, 0.25, 0.1, cx, y + 5.45, cz - 6.55, '#ff3a4a', 2.8);
    B.neon(20.1, 0.25, 0.1, cx, y + 5.45, cz + 6.55, '#ff3a4a', 2.8);
    B.neon(0.1, 0.25, 13.1, cx - 10.05, y + 5.45, cz, '#ff3a4a', 2.8);
    const panel = new THREE.Mesh(new THREE.PlaneGeometry(18, 11), new THREE.MeshBasicMaterial({ color: new THREE.Color(2.2, 2.2, 2.1) }));
    panel.rotation.x = Math.PI / 2; panel.position.set(cx, y + 5.18, cz);
    W.scene.add(panel);
    for (const [dx, dz] of [[-7, -4], [-7, 4], [7, -4], [7, 4]]) {
      B.box(0.6, 6, 0.6, cx + dx, y - 1, cz + dz, '#f4f0e6');
      W.colliders.circle(cx + dx, cz + dz, 0.45);
    }
    for (const dz of [-3.5, 3.5]) for (const dx of [-3.5, 3.5]) {
      B.box(0.9, 1.6, 0.6, cx + dx, y, cz + dz, '#e0445a', { roof: '#f4f0e6' });
      B.neon(0.5, 0.35, 0.62, cx + dx, y + 1.1, cz + dz, '#7dff8a', 1.6);
      W.colliders.box(cx + dx - 0.5, cz + dz - 0.35, cx + dx + 0.5, cz + dz + 0.35);
    }
    for (let k = 0; k < 6; k++) W.glows.push({ x: cx + (k % 3 - 1) * 6, y: y + 4.9, z: cz + (k < 3 ? -3 : 3), s: 3.5, c: C('#e8f4ff').multiplyScalar(0.9) });
    // shop
    const sx = b.bx1 - 10, sw = 12, sd = 9;
    const sy = Math.min(heightAt(sx - 6, cz - 5), heightAt(sx + 6, cz + 5)) - 1.5;
    B.box(sd, 6, sw, sx, sy, cz, '#f7efe0', { windows: true });
    B.box(sd + 0.6, 0.6, sw + 0.6, sx, sy + 6, cz, '#e0445a', { roof: '#8a8078' });
    W.colliders.box(sx - sd / 2, cz - sw / 2, sx + sd / 2, cz + sw / 2, true);
    this.shopGeos.push(quad(9, 2.6, shopRect(3), sx - sd / 2 - 0.07, sy + 1.5 + 1.7, cz, -Math.PI / 2));
    this.sign('OPEN 24H', 5, sx - sd / 2 - 0.12, sy + 5.1, cz, -Math.PI / 2);
    // pylon sign by the road
    const px = b.bx0 + 1.5, pz = b.bz0 + 2;
    const py = heightAt(px, pz);
    B.box(0.5, 11, 0.5, px, py - 0.5, pz, '#3a3440');
    B.box(0.5, 2.2, 5.6, px, py + 9, pz, '#2a2433');
    this.sign('GAS', 5.2, px - 0.28, py + 10.1, pz, -Math.PI / 2);
    this.sign('GAS', 5.2, px + 0.28, py + 10.1, pz, Math.PI / 2);
    W.colliders.circle(px, pz, 0.4);
    this.parked.push({ x: cx - 3.5, z: cz - 1.5, h: Math.PI / 2 }, { x: sx - sd / 2 - 4, z: cz + 4, h: 0 });
  }

  // ----------------------------------------------------------------- motel
  motel() {
    const b = blocks.find((q) => q.kind === 'motel');
    if (!b) return;
    const { B, w: W } = this;
    const col = '#ffb895', trim = '#f2eadc';
    const floorH = TILE_H * 2 + 0.6;
    const wing = (x0, z0, x1, z1) => {
      const y = Math.min(heightAt(x0, z0), heightAt(x1, z0), heightAt(x0, z1), heightAt(x1, z1)) - 1.5;
      const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
      B.box(x1 - x0, floorH + 1.5, z1 - z0, cx, y, cz, col, { windows: true });
      B.box(x1 - x0 + 0.8, 0.5, z1 - z0 + 0.8, cx, y + 1.5 + floorH, cz, trim, { roof: '#b86b4b' });
      W.colliders.box(x0, z0, x1, z1, true);
      return y + 1.5;
    };
    // L shape: long back wing + side wing, courtyard with pool facing the road on the west
    const y1 = wing(b.bx1 - 12, b.bz0 + 4, b.bx1, b.bz1 - 4);
    wing(b.bx0 + 20, b.bz1 - 14, b.bx1 - 12, b.bz1 - 4);
    // walkway + neon railing along the upper floor
    B.box(1.6, 0.25, b.bz1 - b.bz0 - 8, b.bx1 - 12.8, y1 + TILE_H, (b.bz0 + b.bz1) / 2, trim);
    B.neon(0.1, 0.1, b.bz1 - b.bz0 - 8, b.bx1 - 13.6, y1 + TILE_H + 1.0, (b.bz0 + b.bz1) / 2, '#35e8ff', 2.6);
    B.neon(0.1, 0.1, b.bz1 - b.bz0 - 8, b.bx1 - 12.05, y1 + 0.2, (b.bz0 + b.bz1) / 2, '#ff3fa4', 2.4);
    // pool
    const px = b.bx1 - 26, pz = (b.bz0 + b.bz1) / 2 - 8, py = heightAt(px, pz);
    const pool = new THREE.Mesh(new THREE.BoxGeometry(8, 0.3, 14), new THREE.MeshBasicMaterial({ color: C('#3fd8e6').multiplyScalar(0.9) }));
    pool.position.set(px, py + 0.05, pz);
    W.scene.add(pool);
    W.glows.push({ x: px, y: py + 0.6, z: pz, s: 9, c: C('#2fbfd0').multiplyScalar(0.4) });
    W.colliders.box(px - 4, pz - 7, px + 4, pz + 7);
    W.palmSpots.push([px - 6, pz - 8], [px + 6, pz + 9], [px - 6, pz + 7]);
    // festoon around the pool
    W.festoon([[px - 5, pz - 8], [px + 5, pz - 8], [px + 5, pz + 8], [px - 5, pz + 8], [px - 5, pz - 8]], 3.6, 0.5, { palette: BULBS_PARTY });
    // road sign
    const sx = b.bx0 + 3, sz = b.bz0 + 4, sy = heightAt(sx, sz);
    B.box(0.6, 13, 0.6, sx, sy - 0.5, sz, '#3a3440');
    B.box(0.6, 2.8, 10.5, sx, sy + 9.8, sz, '#2a2433');
    this.sign('MOTEL', 10, sx - 0.32, sy + 11.2, sz, -Math.PI / 2);
    this.sign('MOTEL', 10, sx + 0.32, sy + 11.2, sz, Math.PI / 2);
    B.box(0.5, 1.3, 5.2, sx, sy + 7.6, sz, '#2a2433');
    this.sign('VACANCY', 5, sx - 0.27, sy + 8.25, sz, -Math.PI / 2);
    this.sign('VACANCY', 5, sx + 0.27, sy + 8.25, sz, Math.PI / 2);
    // neon arrow
    B.neon(0.2, 0.25, 4, sx - 0.4, sy + 13.2, sz + 1, '#ffd23f', 3);
    B.neon(0.2, 1.4, 0.25, sx - 0.4, sy + 12.6, sz + 3, '#ffd23f', 3);
    W.colliders.circle(sx, sz, 0.45);
    for (let k = 0; k < 2; k++) this.parked.push({ x: b.bx1 - 16.5, z: b.bz0 + 8 + k * 4.2, h: Math.PI / 2 * (rng() < 0.5 ? 1 : -1), rot90: true });
  }

  // ---------------------------------------------------------------- marina
  marina() {
    const { B, w: W } = this;
    const uTime = { value: 0 };
    W.updaters.push((t) => { uTime.value = t; });
    const boatGeos = [], boatLit = [];
    const hullGeo = (L, Bm, H, color) => {
      const s = new THREE.Shape();
      s.moveTo(-L / 2, -Bm / 2); s.lineTo(L / 2 - L * 0.28, -Bm / 2); s.quadraticCurveTo(L / 2, -Bm * 0.25, L / 2, 0);
      s.quadraticCurveTo(L / 2, Bm * 0.25, L / 2 - L * 0.28, Bm / 2); s.lineTo(-L / 2, Bm / 2); s.closePath();
      const g = new THREE.ExtrudeGeometry(s, { depth: H, bevelEnabled: false, curveSegments: 4 });
      g.rotateX(-Math.PI / 2); g.translate(0, -0.45, 0);
      const out = tint(g, color);
      // teak deck on top faces
      out.computeVertexNormals();
      const n = out.attributes.normal, c = out.attributes.color, deck = C('#c9a27a');
      for (let i = 0; i < n.count; i++) if (n.getY(i) > 0.5) c.setXYZ(i, deck.r, deck.g, deck.b);
      return out;
    };
    const hulls = ['#f4f0e6', '#f4f0e6', '#1d2a4a', '#2fa3a0', '#d84a4a', '#f6e08a'];
    const makeBoat = (type) => {
      const parts = [], lit = [];
      const hc = pick(hulls);
      const boxP = (w, h, d, x, y, z, color, list = parts) => { const g = new THREE.BoxGeometry(w, h, d); g.translate(x, y, z); list.push(tint(g, color)); };
      let L, Bm;
      if (type === 'sail') {
        L = rr(7, 9); Bm = 2.6;
        parts.push(hullGeo(L, Bm, 1.2, hc));
        boxP(2.6, 0.6, 1.6, -0.6, 1.0, 0, '#f4f0e6');
        boxP(2.2, 0.16, 1.62, -0.6, 1.0, 0, '#ffcf8a', lit);
        const mast = new THREE.CylinderGeometry(0.07, 0.07, 11, 5); mast.translate(0.6, 5.9, 0); parts.push(tint(mast, '#dddddd'));
        const boom = new THREE.CylinderGeometry(0.16, 0.16, 3.6, 6); boom.rotateZ(Math.PI / 2); boom.translate(-1.2, 2.1, 0); parts.push(tint(boom, pick(['#2a4a8a', '#f4f0e6', '#b0304a'])));
      } else if (type === 'yacht') {
        L = rr(10, 13); Bm = 3.6;
        parts.push(hullGeo(L, Bm, 1.6, '#f4f0e6'));
        boxP(L * 0.5, 1.3, 3, -L * 0.08, 1.8, 0, '#f4f0e6');
        boxP(L * 0.3, 1.0, 2.5, -L * 0.14, 2.9, 0, '#f4f0e6');
        boxP(L * 0.46, 0.35, 3.04, -L * 0.08, 1.95, 0, '#ffd9a0', lit);
        boxP(L * 0.26, 0.3, 2.54, -L * 0.14, 2.95, 0, '#ffd9a0', lit);
        boxP(L * 0.9, 0.12, 3.62, 0, 0.85, 0, pick(['#1d2a4a', '#2fa3a0', '#d84a4a']));
      } else {
        L = rr(5.5, 6.5); Bm = 2.2;
        parts.push(hullGeo(L, Bm, 0.9, hc));
        boxP(0.1, 0.5, 1.8, 0.4, 0.8, 0, '#2a3a4a');
        boxP(1.2, 0.4, 1.6, -1.2, 0.6, 0, '#f2eadc');
      }
      return { parts, lit, L, Bm };
    };
    const place = (boat, x, z, rotY, phase) => {
      for (const [list, dest] of [[boat.parts, boatGeos], [boat.lit, boatLit]]) for (const g of list) {
        g.rotateY(rotY); g.translate(x, -0.25, z);
        const bob = new Float32Array(g.attributes.position.count * 3);
        for (let i = 0; i < bob.length; i += 3) bob.set([phase, x, z], i);
        g.setAttribute('bob', new THREE.BufferAttribute(bob, 3));
        dest.push(g);
      }
    };

    const deckGeos = [];
    for (const zd of MARINA.docks) {
      const xa = coastX(zd) + 3, xb = coastX(zd) - 58;
      const len = xa - xb, cx = (xa + xb) / 2;
      const deck = new THREE.BoxGeometry(len, 0.4, 2.6); deck.translate(cx, 0.05, zd); deckGeos.push(tint(deck, '#8a6446'));
      for (let x = xb + 1; x < xa; x += 6) for (const s of [-1, 1]) {
        const p = new THREE.CylinderGeometry(0.18, 0.18, 4, 5); p.translate(x, -1.8, zd + s * 1.2); deckGeos.push(tint(p, '#4a3528'));
      }
      // lamps + lights along the dock
      const fest = [];
      for (let x = xa - 6, k = 0; x > xb + 1; x -= 10, k++) {
        W.globeLamps.push([x, zd + (k % 2 ? 1.2 : -1.2), 0.25]);
        fest.push({ x, z: zd + (k % 2 ? -1.2 : 1.2), top: 3.2, pole: true });
      }
      W.festoon(fest, 3, 0.45, { palette: BULBS_PARTY, size: 0.5 });
      // moored boats on both sides
      for (const s of [-1, 1]) {
        for (let x = xa - 10; x > xb + 4; x -= rr(8.5, 12)) {
          if (rng() < 0.18) continue;
          const type = pick(['sail', 'sail', 'yacht', 'speed']);
          const boat = makeBoat(type);
          place(boat, x - boat.L * 0.1, zd + s * (1.3 + boat.Bm / 2 + 0.5), rng() < 0.5 ? 0 : Math.PI, rng() * 6);
          if (type === 'sail') W.glows.push({ x: x - boat.L * 0.1 + 0.6, y: 11.2, z: zd + s * (1.3 + boat.Bm / 2 + 0.5), s: 0.9, c: C(pick(['#ff3040', '#ffffff', '#40ff80'])).multiplyScalar(2) });
        }
      }
    }
    // breakwater with a lighthouse at the end
    const rocks = [];
    for (let z = MARINA.z0 - 8; z < MARINA.z1 + 16; z += 2.2) {
      const x = coastX(z) - 72 + rr(-1, 1);
      const r = new THREE.IcosahedronGeometry(rr(1.6, 2.6), 0);
      r.scale(1, rr(0.6, 0.9), 1); r.translate(x + rr(-1.5, 1.5), -0.2, z);
      rocks.push(tint(r, pick(['#6a5a58', '#7a6a60', '#5a4c4c'])));
    }
    const lz = MARINA.z1 + 16, lx = coastX(lz) - 72;
    for (let k = 0; k < 6; k++) {
      const seg = new THREE.CylinderGeometry(1.5 - k * 0.12, 1.6 - k * 0.12, 2.4, 10);
      seg.translate(lx, 1.2 + k * 2.4, lz);
      rocks.push(tint(seg, k % 2 ? '#d84a4a' : '#f4f0e6'));
    }
    const cap = new THREE.CylinderGeometry(1.2, 1.2, 0.3, 10); cap.translate(lx, 16.4, lz); rocks.push(tint(cap, '#2a2433'));
    const roofG = new THREE.ConeGeometry(1.3, 1.4, 10); roofG.translate(lx, 18.9, lz); rocks.push(tint(roofG, '#d84a4a'));
    const lantern = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.9, 1.8, 10), new THREE.MeshBasicMaterial({ color: new THREE.Color(4, 3.2, 1.8) }));
    lantern.position.set(lx, 17.4, lz);
    W.scene.add(lantern);
    W.glows.push({ x: lx, y: 17.4, z: lz, s: 9, c: C('#ffe0a0').multiplyScalar(1.6) });
    // beam: apex at the lantern, widening outward, fading with distance
    const beamG = new THREE.ConeGeometry(7, 90, 16, 8, true); beamG.rotateZ(-Math.PI / 2); beamG.translate(-45, 0, 0);
    {
      const bp = beamG.attributes.position, bc = new Float32Array(bp.count * 3);
      for (let i = 0; i < bp.count; i++) {
        const f = Math.pow(1 - Math.min(1, -bp.getX(i) / 90), 1.6);
        bc.set([f, f, f], i * 3);
      }
      beamG.setAttribute('color', new THREE.BufferAttribute(bc, 3));
    }
    const beam = new THREE.Mesh(beamG, new THREE.MeshBasicMaterial({
      color: new THREE.Color(0.7, 0.58, 0.38), vertexColors: true,
      blending: THREE.AdditiveBlending, transparent: true, depthWrite: false, side: THREE.DoubleSide, fog: false,
    }));
    const pivot = new THREE.Group(); pivot.position.set(lx, 17.4, lz); pivot.add(beam);
    W.scene.add(pivot);
    W.updaters.push((t) => { pivot.rotation.y = t * 0.6; });
    const rm = new THREE.Mesh(mergeGeometries(rocks), new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true }));
    rm.castShadow = true;
    W.scene.add(rm);
    W.scene.add(new THREE.Mesh(mergeGeometries(deckGeos), new THREE.MeshLambertMaterial({ vertexColors: true })));

    // boats pulled up on the sand
    for (let k = 0; k < 10; k++) {
      const z = rr(MARINA.z0, MARINA.z1), x = coastX(z) + rr(4, 9);
      if (W.colliders.occupied(x, z, 2)) continue;
      const g = hullGeo(3.6, 1.4, 0.6, pick(['#2fa3a0', '#d84a4a', '#f6e08a', '#f4f0e6', '#6a5acd']));
      g.rotateZ(rr(-0.15, 0.15)); g.rotateY(rr(0, Math.PI)); g.translate(x, 0.45, z);
      this.misc.push(g);
      W.colliders.circle(x, z, 1.2);
    }
    // bait shop + marina sign on the beach
    const zm = (MARINA.z0 + MARINA.z1) / 2, xs = coastX(zm) + 16;
    B.box(5, 3.2, 7, xs, -0.5, zm, '#9ad7d0', { windows: true });
    B.box(5.8, 0.4, 7.8, xs, 2.7, zm, '#f2eadc', { roof: '#b86b4b' });
    W.colliders.box(xs - 2.5, zm - 3.5, xs + 2.5, zm + 3.5, true);
    this.shopGeos.push(quad(4, 1.8, shopRect(5), xs - 2.57, 1.2, zm, -Math.PI / 2));
    this.sign('BAIT SHOP', 5, xs - 2.62, 3.5, zm, -Math.PI / 2);
    const mx = coastX(MARINA.z0 - 6) + 22, mz = MARINA.z0 - 6;
    B.box(0.4, 6, 0.4, mx, -0.5, mz - 3.6, '#f2eadc'); B.box(0.4, 6, 0.4, mx, -0.5, mz + 3.6, '#f2eadc');
    B.box(0.4, 2, 7.8, mx, 4.3, mz, '#2a2433');
    this.sign('MARINA', 7.4, mx - 0.22, 5.3, mz, -Math.PI / 2);
    this.sign('MARINA', 7.4, mx + 0.22, 5.3, mz, Math.PI / 2);
    W.colliders.circle(mx, mz - 3.6, 0.3); W.colliders.circle(mx, mz + 3.6, 0.3);

    const hullMat = bobbing(new THREE.MeshLambertMaterial({ vertexColors: true }), uTime);
    W.scene.add(new THREE.Mesh(mergeGeometries(boatGeos), hullMat));
    const litMat = bobbing(new THREE.MeshBasicMaterial({ vertexColors: true }), uTime);
    const lg = mergeGeometries(boatLit);
    const c = lg.attributes.color;
    for (let i = 0; i < c.count; i++) c.setXYZ(i, c.getX(i) * 2.2, c.getY(i) * 2.2, c.getZ(i) * 2.2);
    W.scene.add(new THREE.Mesh(lg, litMat));
  }

  // ----------------------------------------------------------- parked cars
  static carGeometry() {
    const parts = [];
    const boxP = (w, h, d, x, y, z, color) => { const g = new THREE.BoxGeometry(w, h, d); g.translate(x, y, z); parts.push(tint(g, color)); };
    boxP(1.8, 0.6, 4.3, 0, 0.62, 0, '#ffffff');
    boxP(1.58, 0.5, 2.0, 0, 1.17, -0.25, '#ffffff');
    boxP(1.62, 0.34, 1.9, 0, 1.14, -0.25, '#1e1c2e');
    boxP(1.84, 0.16, 0.14, 0, 0.42, 2.17, '#9a98a0');
    boxP(1.84, 0.16, 0.14, 0, 0.42, -2.17, '#9a98a0');
    boxP(0.34, 0.1, 0.04, 0.6, 0.74, -2.16, '#5a1020'); boxP(0.34, 0.1, 0.04, -0.6, 0.74, -2.16, '#5a1020');
    boxP(0.3, 0.1, 0.04, 0.6, 0.72, 2.16, '#d8d4c4'); boxP(0.3, 0.1, 0.04, -0.6, 0.72, 2.16, '#d8d4c4');
    for (const [x, z] of [[0.8, 1.35], [-0.8, 1.35], [0.8, -1.35], [-0.8, -1.35]]) {
      const w = new THREE.CylinderGeometry(0.32, 0.32, 0.24, 10); w.rotateZ(Math.PI / 2); w.translate(x, 0.32, z); parts.push(tint(w, '#141418'));
    }
    return mergeGeometries(parts);
  }

  parkedCars() {
    const W = this.w;
    for (const r of roads) {
      if (r.bvd) continue;
      for (const side of [-1, 1]) {
        for (let u = r.a + 10; u < r.b - 10; u += 6.5) {
          if (rng() > 0.085) continue;
          const off = side * (r.w / 2 - 1.25);
          const x = r.vert ? r.c + off : u, z = r.vert ? u : r.c + off;
          if (onOtherRoad(x, z, r, 7) || W.colliders.occupied(x, z, 2.4)) continue;
          // parked facing the flow of traffic on that side of the road
          const h = r.vert ? (side < 0 ? 0 : Math.PI) : (side > 0 ? Math.PI / 2 : -Math.PI / 2);
          this.parked.push({ x, z, h });
        }
      }
    }
    const colors = ['#e8e2d4', '#d84a4a', '#3aa6a0', '#f2c14e', '#6b8fd6', '#3a3748', '#e57aa8', '#9ccf6a', '#c9c3b5', '#8a3b52', '#f08a3a'];
    const im = new THREE.InstancedMesh(Props.carGeometry(), new THREE.MeshLambertMaterial({ vertexColors: true }), this.parked.length);
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(0, 0, 0, 'YXZ'), one = new THREE.Vector3(1, 1, 1), p = new THREE.Vector3();
    this.parked.forEach((c, i) => {
      const fx = Math.sin(c.h), fz = Math.cos(c.h);
      const slope = (heightAt(c.x + fx * 2, c.z + fz * 2) - heightAt(c.x - fx * 2, c.z - fz * 2)) / 4;
      e.set(-Math.atan(slope), c.h, 0);
      q.setFromEuler(e);
      m.compose(p.set(c.x, heightAt(c.x, c.z), c.z), q, one);
      im.setMatrixAt(i, m);
      im.setColorAt(i, C(pick(colors)));
      const along = Math.abs(fx) > 0.5;
      W.colliders.box(c.x - (along ? 2.2 : 0.95), c.z - (along ? 0.95 : 2.2), c.x + (along ? 2.2 : 0.95), c.z + (along ? 0.95 : 2.2));
    });
    im.castShadow = true; im.receiveShadow = true;
    W.scene.add(im);
  }

  // ----------------------------------------------------------------- finish
  finish() {
    const W = this.w;
    if (this.signGeos.length) W.scene.add(new THREE.Mesh(mergeGeometries(this.signGeos), new THREE.MeshBasicMaterial({ map: this.atlas, color: new THREE.Color(2.3, 2.3, 2.3) })));
    if (this.boardGeos.length) W.scene.add(new THREE.Mesh(mergeGeometries(this.boardGeos), new THREE.MeshBasicMaterial({ map: this.atlas, color: new THREE.Color(1.25, 1.25, 1.25) })));
    if (this.shopGeos.length) W.scene.add(new THREE.Mesh(mergeGeometries(this.shopGeos), new THREE.MeshBasicMaterial({ map: makeShopTexture(), color: new THREE.Color(1.5, 1.4, 1.3) })));
    if (this.misc.length) {
      const mm = new THREE.Mesh(mergeGeometries(this.misc.map((g) => { if (!g.attributes.normal) g.computeVertexNormals(); return g; })), new THREE.MeshLambertMaterial({ vertexColors: true }));
      mm.castShadow = true;
      W.scene.add(mm);
    }
  }
}

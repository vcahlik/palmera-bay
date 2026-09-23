// City plan, terrain height and drivable-area queries. Pure data + math, no Three.js.

export function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
export const rng = mulberry32(20260923);
export const rr = (a, b) => a + (b - a) * rng();
export const pick = (arr) => arr[Math.floor(rng() * arr.length)];
const clamp01 = (t) => Math.max(0, Math.min(1, t));
const smooth = (t) => { t = clamp01(t); return t * t * (3 - 2 * t); };

// ---------------------------------------------------------------------------
// Coast + streets
// ---------------------------------------------------------------------------
export function coastX(z) { return -165 + 16 * Math.sin(z * 0.0105 + 0.5) + 7 * Math.sin(z * 0.031 + 2.0); }
export function coastSlope(z) { return 16 * 0.0105 * Math.cos(z * 0.0105 + 0.5) + 7 * 0.031 * Math.cos(z * 0.031 + 2.0); }
export const COAST_GLSL = `float coastX(float z){ return -165.0 + 16.0*sin(z*0.0105+0.5) + 7.0*sin(z*0.031+2.0); }`;

export const BVD_OFF = 40, BVD_W = 20, GRID_W = 11, SW = 4, BVD_SW = 5, BEACH_W = 26;
export function bvdX(z) { return coastX(z) + BVD_OFF; }
export const XS = [-50, 40, 130, 215, 300, 380];
export const ZS = [-340, -255, -170, -85, 0, 85, 170, 255, 340];
// inner (flat) downtown, and the rounded-rectangle cliff border around everything
export const INNER = { x: 222, z: 262 };
export const BORDER = { x: 445, z: 405, r: 85 };

export const PIER = { z: -40, w: 9 };
PIER.x0 = coastX(PIER.z) + 6;
PIER.x1 = coastX(PIER.z) - 115;
export const MARINA = { z0: 112, z1: 244, docks: [128, 156, 184, 212, 238] };

export const GX0 = -360, GZ0 = -440, GS = 880, GN = 4096;

export const roads = [];
{
  const pts = [];
  for (let z = -420; z <= 420; z += 5) pts.push([bvdX(z), z]);
  roads.push({ pts, w: BVD_W, bvd: true, sw: BVD_SW });
}
for (const x of XS) roads.push({ pts: [[x, ZS[0]], [x, ZS[ZS.length - 1]]], w: GRID_W, vert: true, c: x, a: ZS[0], b: ZS[ZS.length - 1], sw: SW });
for (const z of ZS) roads.push({ pts: [[bvdX(z), z], [XS[XS.length - 1], z]], w: GRID_W, horiz: true, c: z, a: bvdX(z), b: XS[XS.length - 1], sw: SW });

export function roadDist(r, x, z) {
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
export function onOtherRoad(x, z, except, margin = 0) {
  for (const r of roads) if (r !== except && roadDist(r, x, z) < r.w / 2 + margin) return true;
  return false;
}
export function onPier(x, z) {
  return x < PIER.x0 && x > PIER.x1 && Math.abs(z - PIER.z) < PIER.w / 2;
}

export const intersections = [];
for (const v of roads.filter((r) => r.vert)) for (const h of roads.filter((r) => r.horiz)) {
  if (v.c >= h.a && v.c <= h.b && h.c >= v.a && h.c <= v.b) intersections.push({ x: v.c, z: h.c, v, h });
}

// ---------------------------------------------------------------------------
// Blocks
// ---------------------------------------------------------------------------
const KINDS = {
  '1,3': 'park', '2,5': 'park', '3,2': 'park', '0,5': 'park', '5,2': 'park',
  '4,3': 'gas', '5,5': 'motel',
};
export const blocks = [];
for (let i = 0; i < XS.length; i++) {
  for (let j = 0; j < ZS.length - 1; j++) {
    const zA = ZS[j], zB = ZS[j + 1];
    let maxB = -1e9;
    for (let z = zA; z <= zB; z += 2) maxB = Math.max(maxB, bvdX(z));
    const bx0 = i === 0 ? maxB + BVD_W / 2 + BVD_SW + 2 : XS[i - 1] + GRID_W / 2 + SW + 1.5;
    const bx1 = XS[i] - GRID_W / 2 - SW - 1.5;
    const bz0 = zA + GRID_W / 2 + SW + 1.5, bz1 = zB - GRID_W / 2 - SW - 1.5;
    const inner = i === 0 || (i <= 3 && j >= 1 && j <= 6);
    const kind = KINDS[`${i},${j}`] || (inner ? 'city' : 'villa');
    blocks.push({ i, j, zA, zB, xA: i === 0 ? null : XS[i - 1], xB: XS[i], bx0, bx1, bz0, bz1, kind });
  }
}
export function blockAt(x, z) {
  for (const b of blocks) if (x > b.bx0 - 2 && x < b.bx1 + 2 && z > b.bz0 - 2 && z < b.bz1 + 2) return b;
  return null;
}

// ---------------------------------------------------------------------------
// Terrain: downtown and the beach strip stay flat, outer districts roll gently
// ---------------------------------------------------------------------------
export function heightAt(x, z) {
  const inland = smooth((x - coastX(z) - 75) / 85);
  const o = Math.max((x - INNER.x) / 150, (Math.abs(z) - INNER.z) / 120);
  if (o <= 0 || inland <= 0) return 0;
  const wav = Math.sin(x * 0.021 + 1.3) * Math.sin(z * 0.017 - 0.4) * 3.5 + Math.sin((x + z) * 0.011) * 2;
  return smooth(o) * inland * (15 + wav);
}
export function terrainNormal(x, z) {
  const e = 1;
  const dx = heightAt(x + e, z) - heightAt(x - e, z), dz = heightAt(x, z + e) - heightAt(x, z - e);
  const l = Math.hypot(dx, 2 * e, dz);
  return [-dx / l, (2 * e) / l, -dz / l];
}

// signed distance to the cliff border (negative = inside), with outward normal
export function borderSDF(x, z) {
  const { x: BX, z: BZ, r: R } = BORDER;
  const sz = z < 0 ? -1 : 1;
  const qx = x - (BX - R), qz = Math.abs(z) - (BZ - R);
  if (qx > 0 && qz > 0) { const l = Math.hypot(qx, qz); return { d: l - R, nx: qx / l, nz: (qz / l) * sz }; }
  if (qx > qz) return { d: qx - R, nx: 1, nz: 0 };
  return { d: qz - R, nx: 0, nz: sz };
}

export function surfaceAt(x, z) {
  if (onPier(x, z)) return 'pier';
  const cx = coastX(z);
  if (x < cx) return 'water';
  for (const r of roads) if (roadDist(r, x, z) < r.w / 2) return 'road';
  if (x < cx + BEACH_W) return 'sand';
  const b = blockAt(x, z);
  if (b && (b.kind === 'city' || b.kind === 'gas' || b.kind === 'motel')) return 'paved';
  return 'grass';
}

export function nearestRoadPoint(x, z) {
  let best = null, bd = 1e9;
  for (const r of roads) {
    let px, pz, h;
    if (r.bvd) { pz = Math.max(-380, Math.min(380, z)); px = bvdX(pz) - 5; h = 0; }
    else if (r.vert) { px = r.c + 2.5; pz = Math.max(r.a, Math.min(r.b, z)); h = 0; }
    else { pz = r.c - 2.5; px = Math.max(r.a, Math.min(r.b, x)); h = Math.PI / 2; }
    const d = Math.hypot(px - x, pz - z);
    if (d < bd) { bd = d; best = { x: px, z: pz, h }; }
  }
  return best;
}

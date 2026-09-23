import * as THREE from 'three';
import { glowPoints } from './world.js';
import { surfaceAt, heightAt } from './layout.js';

export const PAINTS = ['#d81e3c', '#1fb5b0', '#f4efe4', '#ffb52e', '#ff5fa2', '#2a2d3a'];

const SURF = {
  road: { grip: 1, accel: 1, vmax: 1 },
  paved: { grip: 0.95, accel: 1, vmax: 1 },
  pier: { grip: 0.9, accel: 0.9, vmax: 0.8 },
  grass: { grip: 0.7, accel: 0.75, vmax: 0.6 },
  sand: { grip: 0.55, accel: 0.6, vmax: 0.45 },
  water: { grip: 0.5, accel: 0.3, vmax: 0.2 },
};

const WHEELBASE = 2.7, WHEEL_R = 0.36, TOP_SPEED = 62; // m/s (~223 km/h)
const BOOST_SPEED = 86; // m/s (~310 km/h) while the nitro burns

function box(w, h, d, mat, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.position.set(x, y, z);
  m.castShadow = true;
  return m;
}

export class Car {
  constructor(scene, glowMat) {
    this.root = new THREE.Group();
    this.body = new THREE.Group();
    this.body.position.y = 0;
    this.root.add(this.body);
    scene.add(this.root);

    this.paintIndex = 0;
    this.paint = new THREE.MeshStandardMaterial({ color: PAINTS[0], metalness: 0.45, roughness: 0.28 });
    const chrome = new THREE.MeshStandardMaterial({ color: '#dedbe6', metalness: 1, roughness: 0.15 });
    const black = new THREE.MeshLambertMaterial({ color: '#17151c' });
    const leather = new THREE.MeshLambertMaterial({ color: '#efe2c6' });
    const interior = new THREE.MeshLambertMaterial({ color: '#5a2c2a' });

    // --- body shell: extruded side profile
    const P = [[-2.2, 0.5], [-2.3, 0.66], [-2.24, 0.86], [-1.6, 0.93], [-1.05, 0.95], [0.35, 0.94], [1.4, 0.86], [2.08, 0.76], [2.27, 0.62], [2.22, 0.5]];
    const shape = new THREE.Shape();
    P.forEach(([z, y], i) => (i ? shape.lineTo(z, y) : shape.moveTo(z, y)));
    shape.closePath();
    const depth = 1.72;
    const eg = new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: true, bevelThickness: 0.1, bevelSize: 0.07, bevelSegments: 2, curveSegments: 4 });
    eg.rotateY(-Math.PI / 2);
    eg.translate(depth / 2, 0, 0);
    const shell = new THREE.Mesh(eg, this.paint);
    shell.castShadow = true;
    this.body.add(shell);

    // chassis / sills (under the body, narrower so the wheels show)
    this.body.add(box(1.5, 0.34, 4.1, black, 0, 0.38, 0));
    // cabin tub (open top)
    this.body.add(box(1.52, 0.06, 1.45, interior, 0, 0.98, -0.33));
    // side stripe
    const stripeM = new THREE.MeshStandardMaterial({ color: '#f4efe4', metalness: 0.3, roughness: 0.4 });
    this.stripe = [box(0.02, 0.07, 3.9, stripeM, 0.94, 0.74, 0.05), box(0.02, 0.07, 3.9, stripeM, -0.94, 0.74, 0.05)];
    this.body.add(...this.stripe);
    // bumpers
    this.body.add(box(1.8, 0.14, 0.16, chrome, 0, 0.52, 2.32), box(1.8, 0.14, 0.16, chrome, 0, 0.55, -2.38));
    // grille
    this.body.add(box(0.9, 0.14, 0.05, black, 0, 0.64, 2.31));
    // exhausts
    for (const s of [-1, 1]) {
      const ex = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.3, 6), chrome);
      ex.rotation.x = Math.PI / 2; ex.position.set(s * 0.45, 0.32, -2.3); this.body.add(ex);
    }

    // seats
    for (const s of [-1, 1]) {
      this.body.add(box(0.56, 0.2, 0.6, leather, s * 0.38, 1.08, -0.45));
      const back = box(0.56, 0.5, 0.14, leather, s * 0.38, 1.2, -0.8);
      back.rotation.x = -0.18; this.body.add(back);
      this.body.add(box(0.28, 0.18, 0.1, leather, s * 0.38, 1.56, -0.86));
    }
    // roll hoops behind seats
    for (const s of [-1, 1]) {
      const hoop = new THREE.Mesh(new THREE.TorusGeometry(0.26, 0.035, 5, 10, Math.PI), chrome);
      hoop.position.set(s * 0.38, 1.0, -1.05); this.body.add(hoop);
    }

    // driver (left seat = +x when facing +z)
    const skin = new THREE.MeshLambertMaterial({ color: '#c88a62' });
    const shirt = new THREE.MeshLambertMaterial({ color: '#ff6f91' });
    const dx = 0.38;
    this.body.add(box(0.46, 0.55, 0.28, shirt, dx, 1.45, -0.55));
    const head = box(0.26, 0.3, 0.28, skin, dx, 1.88, -0.5);
    this.body.add(head);
    this.body.add(box(0.29, 0.1, 0.31, new THREE.MeshLambertMaterial({ color: '#2a1a14' }), dx, 2.05, -0.53));
    this.hair = box(0.28, 0.22, 0.08, new THREE.MeshLambertMaterial({ color: '#2a1a14' }), dx, 1.92, -0.66);
    this.body.add(this.hair);
    this.body.add(box(0.28, 0.07, 0.04, black, dx, 1.92, -0.35));
    for (const s of [-1, 1]) {
      const arm = box(0.11, 0.11, 0.55, shirt, dx + s * 0.2, 1.48, -0.25);
      arm.rotation.x = 0.35; this.body.add(arm);
    }
    // passenger-side palm-print hat? keep it simple: steering wheel
    this.wheelSteer = new THREE.Mesh(new THREE.TorusGeometry(0.19, 0.03, 5, 12), black);
    this.wheelSteer.position.set(dx, 1.34, 0.02);
    this.wheelSteer.rotation.x = -0.45;
    this.body.add(this.wheelSteer);

    // windshield
    const frameGeo = new THREE.BoxGeometry(0.05, 0.5, 0.05);
    for (const s of [-1, 1]) {
      const p = new THREE.Mesh(frameGeo, chrome);
      p.position.set(s * 0.78, 1.17, 0.26); p.rotation.x = -0.6; this.body.add(p);
    }
    const top = box(1.6, 0.05, 0.05, chrome, 0, 1.38, 0.12); this.body.add(top);
    const glass = new THREE.Mesh(new THREE.PlaneGeometry(1.52, 0.48), new THREE.MeshStandardMaterial({
      color: '#b8d0ff', metalness: 0.9, roughness: 0.05, transparent: true, opacity: 0.28, side: THREE.DoubleSide,
    }));
    glass.position.set(0, 1.17, 0.26); glass.rotation.x = -0.6; this.body.add(glass);

    // lights
    this.headMat = new THREE.MeshBasicMaterial({ color: new THREE.Color('#fff4dc').multiplyScalar(5) });
    this.tailMat = new THREE.MeshBasicMaterial({ color: new THREE.Color('#ff1a2a').multiplyScalar(2) });
    for (const s of [-1, 1]) {
      this.body.add(box(0.34, 0.12, 0.06, this.headMat, s * 0.62, 0.68, 2.3));
      this.body.add(box(0.36, 0.1, 0.06, this.tailMat, s * 0.64, 0.74, -2.36));
    }
    // halos are split so each set only shows when seen from its own side
    this.headGlow = glowPoints([-1, 1].map((s) => ({ x: s * 0.62, y: 0.68, z: 2.4, s: 1.1, c: new THREE.Color('#fff0d0').multiplyScalar(1.4) })), glowMat);
    this.tailGlow = glowPoints([-1, 1].map((s) => ({ x: s * 0.64, y: 0.74, z: -2.42, s: 0.8, c: new THREE.Color('#ff2030').multiplyScalar(1.0) })), glowMat);
    this.body.add(this.headGlow, this.tailGlow);

    const spot = new THREE.SpotLight('#ffe8c0', 140, 70, 0.55, 0.6, 1.6);
    spot.position.set(0, 0.8, 2.0);
    spot.target.position.set(0, 0, 18);
    this.body.add(spot, spot.target);
    this.spot = spot;

    // wheels
    this.wheels = [];
    const tireG = new THREE.CylinderGeometry(WHEEL_R, WHEEL_R, 0.28, 14); tireG.rotateZ(Math.PI / 2);
    const rimG = new THREE.CylinderGeometry(0.23, 0.23, 0.3, 10); rimG.rotateZ(Math.PI / 2);
    const spokeG = new THREE.BoxGeometry(0.31, 0.4, 0.07);
    const tireM = new THREE.MeshLambertMaterial({ color: '#1a1a1e' });
    for (const [x, z, front] of [[0.86, 1.4, true], [-0.86, 1.4, true], [0.86, -1.35, false], [-0.86, -1.35, false]]) {
      const pivot = new THREE.Group(); pivot.position.set(x, WHEEL_R, z);
      const spin = new THREE.Group(); pivot.add(spin);
      const t = new THREE.Mesh(tireG, tireM); t.castShadow = true; spin.add(t);
      spin.add(new THREE.Mesh(rimG, chrome));
      const sp1 = new THREE.Mesh(spokeG, black); spin.add(sp1);
      const sp2 = sp1.clone(); sp2.rotation.x = Math.PI / 2; spin.add(sp2);
      this.root.add(pivot);
      this.wheels.push({ pivot, spin, front, x, z });
    }

    // nitro flames: an orange outer cone and a hot blue core per exhaust
    this.flames = [];
    const flameMat = (c) => new THREE.MeshBasicMaterial({ color: c, blending: THREE.AdditiveBlending, transparent: true, depthWrite: false });
    const outerM = flameMat(new THREE.Color(1.6, 0.45, 0.25)), coreM = flameMat(new THREE.Color(0.35, 0.7, 2.6));
    for (const sx of [-0.45, 0.45]) {
      const f = new THREE.Group();
      f.position.set(sx, 0.32, -2.45);
      for (const [r, l, m] of [[0.14, 1.1, outerM], [0.07, 0.6, coreM]]) {
        const g = new THREE.ConeGeometry(r, l, 8); g.rotateX(-Math.PI / 2); g.translate(0, 0, -l / 2);
        f.add(new THREE.Mesh(g, m));
      }
      f.visible = false;
      this.body.add(f);
      this.flames.push(f);
    }
    this.flameGlow = glowPoints([-0.45, 0.45].map((x) => ({ x, y: 0.32, z: -2.7, s: 1.6, c: new THREE.Color(0, 0, 0) })), glowMat);
    this.body.add(this.flameGlow);
    this.nitro = 1;
    this.nitroLock = false;
    this.boosting = false;
    this.boostVis = 0;
    this.backfire = 0;
    this.slopePitch = 0; this.slopeRoll = 0;
    this.root.rotation.order = 'YXZ';

    // physics state
    this.pos = new THREE.Vector2(0, 0);
    this.vel = new THREE.Vector2(0, 0);
    this.h = 0;
    this.yawRate = 0;
    this.steer = 0;
    this.wheelSpin = 0;
    this.roll = 0; this.pitch = 0;
    this.speed = 0; this.vf = 0; this.vl = 0;
    this.skidding = 0;
    this.impact = 0;
    this.surface = 'road';
    this.throttle = 0;
  }

  cyclePaint() {
    this.paintIndex = (this.paintIndex + 1) % PAINTS.length;
    this.paint.color.set(PAINTS[this.paintIndex]);
    const light = this.paintIndex === 2;
    this.stripe.forEach((s) => s.material.color.set(light ? '#d81e3c' : '#f4efe4'));
  }

  place(x, z, h) {
    this.pos.set(x, z); this.vel.set(0, 0); this.h = h; this.yawRate = 0;
  }

  update(dt, inp, world) {
    const fX = Math.sin(this.h), fZ = Math.cos(this.h);
    const sX = Math.cos(this.h), sZ = -Math.sin(this.h);
    let vf = this.vel.x * fX + this.vel.y * fZ;
    let vl = this.vel.x * sX + this.vel.y * sZ;
    const surf = surfaceAt(this.pos.x, this.pos.y);
    this.surface = surf;
    const S = SURF[surf] || SURF.road;

    // steering input smoothing (fast turn-in, faster return to centre)
    const st = inp.steer;
    this.steer += (st - this.steer) * Math.min(1, dt * (Math.abs(st) < Math.abs(this.steer) ? 14 : 10));

    // nitro: Shift burns it (also acts as throttle), refills after a short pause
    if (this.nitro <= 0.01) this.nitroLock = true;
    if (this.nitroLock && this.nitro > 0.25) this.nitroLock = false;
    this.boosting = inp.boost && !this.nitroLock && vf > -1;
    if (this.boosting) { this.nitro = Math.max(0, this.nitro - dt * 0.2); this.boostCool = 1.0; }
    else if ((this.boostCool = (this.boostCool || 0) - dt) <= 0) this.nitro = Math.min(1, this.nitro + dt * 0.09);
    const throttle = this.boosting ? 1 : inp.throttle;

    // terrain: slope along / across the car
    const gh = (x, z) => heightAt(x, z);
    const slopeF = (gh(this.pos.x + fX * 1.4, this.pos.y + fZ * 1.4) - gh(this.pos.x - fX * 1.4, this.pos.y - fZ * 1.4)) / 2.8;
    const slopeS = (gh(this.pos.x + sX * 0.9, this.pos.y + sZ * 0.9) - gh(this.pos.x - sX * 0.9, this.pos.y - sZ * 0.9)) / 1.8;

    const speed = Math.abs(vf);
    const vmax = (this.boosting ? BOOST_SPEED : TOP_SPEED) * S.vmax;
    let acc = 0;
    if (throttle > 0) {
      if (vf < -0.5) acc += 24 * throttle;
      else acc += throttle * S.accel * 13 * Math.pow(Math.max(0, 1 - vf / vmax), 0.7);
    }
    if (this.boosting) acc += 16 * S.accel * Math.pow(Math.max(0, 1 - vf / vmax), 0.4);
    if (inp.brake > 0) {
      if (vf > 0.5) acc -= 17 * inp.brake;
      else if (vf > -16) acc -= 10 * inp.brake;
    }
    if (inp.handbrake) acc -= Math.sign(vf) * Math.min(6, speed / dt);
    // drag + rolling resistance
    acc -= vf * Math.abs(vf) * 0.0011;
    const roll = throttle > 0 || inp.brake > 0 ? 0.25 : 1.6;
    acc -= Math.sign(vf) * Math.min(roll, Math.abs(vf) / dt + 0.0001) * (speed > 0.01 ? 1 : 0);
    // gravity on hills (the car holds still when you're not touching anything)
    if (throttle > 0 || inp.brake > 0 || speed > 0.5) acc -= 9.8 * slopeF * 0.8;
    if (vf > vmax) acc -= (vf - vmax) * (this.boosting ? 2 : 0.8);
    const prevVf = vf;
    vf += acc * dt;
    if (Math.sign(prevVf) !== Math.sign(vf) && throttle === 0 && inp.brake === 0) vf = 0;
    if (!this.boosting && inp.throttle === 0 && prevVf > 25 && this.throttle > 0) this.backfire = 0.18;
    this.backfire = Math.max(0, this.backfire - dt);

    // yaw: kinematic bicycle model, capped by how much lateral grip the tyres have
    const maxSteer = 0.66 / (1 + speed * 0.012);
    const steerAng = this.steer * maxSteer;
    let yawTarget = (vf * Math.tan(steerAng)) / WHEELBASE;
    const drifting = Math.abs(vl) > 3.5;
    let latMax = 32 * S.grip;
    if (inp.handbrake && speed > 6) { latMax = 44; yawTarget *= 1.6; }
    else if (drifting && throttle > 0) latMax = 36;
    const yawCap = latMax / Math.max(speed, 4);
    yawTarget = Math.max(-yawCap, Math.min(yawCap, yawTarget));
    this.yawRate += (yawTarget - this.yawRate) * Math.min(1, dt * (inp.handbrake ? 5 : 10));

    // lateral grip; part of the scrubbed slide is fed back into forward speed
    let grip = 7.5 * S.grip;
    if (inp.handbrake) grip = 1.3;
    else if (Math.abs(vl) > 6 && throttle > 0) grip *= 0.5; // hold a power slide once it's really sliding
    const vlBefore = vl;
    vl *= Math.exp(-grip * dt);
    if (vf > 2) vf += Math.abs(vlBefore - vl) * 0.45;
    this.vf = vf; this.vl = vl;

    this.vel.set(fX * vf + sX * vl, fZ * vf + sZ * vl);
    this.h += this.yawRate * dt;

    // integrate + collide
    this.pos.x += this.vel.x * dt;
    this.pos.y += this.vel.y * dt;
    this.impact = 0;
    for (let iter = 0; iter < 2; iter++) {
      for (const off of [-1.45, 0, 1.45]) {
        const cx = this.pos.x + Math.sin(this.h) * off, cz = this.pos.y + Math.cos(this.h) * off;
        const hit = world.resolveCircle(cx, cz, 0.98);
        if (!hit) continue;
        this.pos.x += hit.nx * hit.d; this.pos.y += hit.nz * hit.d;
        const vn = this.vel.x * hit.nx + this.vel.y * hit.nz;
        if (vn < 0) {
          this.vel.x -= 1.3 * vn * hit.nx; this.vel.y -= 1.3 * vn * hit.nz;
          this.vel.multiplyScalar(0.92);
          this.impact = Math.max(this.impact, -vn);
          // glancing blows twist the car
          this.yawRate += (off === 0 ? 0 : Math.sign(off)) * (hit.nx * Math.cos(this.h) - hit.nz * Math.sin(this.h)) * -vn * 0.05;
        }
      }
    }

    this.speed = this.vel.length();
    this.skidding = Math.max(0, Math.min(1,
      (Math.abs(vl) - 3) / 6 + (inp.handbrake && speed > 5 ? 0.6 : 0) + (inp.brake > 0 && vf > 18 ? 0.35 : 0)));
    if (surf !== 'road' && surf !== 'paved' && surf !== 'pier') this.skidding *= 0.3;
    this.throttle = inp.throttle;

    // boost flames
    this.boostVis += ((this.boosting ? 1 : 0) - this.boostVis) * Math.min(1, dt * (this.boosting ? 12 : 5));
    const fl = Math.max(this.boostVis, this.backfire > 0 ? 0.45 : 0);
    const gc = this.flameGlow.geometry.attributes.gcolor;
    this.flames.forEach((f, i) => {
      f.visible = fl > 0.03;
      const k = fl * (0.75 + Math.random() * 0.5);
      f.scale.set(0.8 + k * 0.4, 0.8 + k * 0.4, k * (this.boosting ? 1.6 : 0.8));
      gc.setXYZ(i, 2.2 * k, 0.9 * k, 0.5 * k);
    });
    gc.needsUpdate = true;

    // visuals
    const latAcc = this.yawRate * vf;
    this.roll += (-latAcc * 0.012 - this.roll) * Math.min(1, dt * 6);
    this.pitch += ((acc * -0.006) - this.pitch) * Math.min(1, dt * 5);
    this.roll = Math.max(-0.12, Math.min(0.12, this.roll));
    this.pitch = Math.max(-0.07, Math.min(0.07, this.pitch));

    this.slopePitch += (-Math.atan(slopeF) - this.slopePitch) * Math.min(1, dt * 12);
    this.slopeRoll += (Math.atan(slopeS) - this.slopeRoll) * Math.min(1, dt * 12);
    this.y = heightAt(this.pos.x, this.pos.y);
    this.root.position.set(this.pos.x, this.y, this.pos.y);
    this.root.rotation.set(this.slopePitch, this.h, this.slopeRoll);
    this.body.rotation.set(this.pitch, 0, this.roll);
    this.body.position.y = surf === 'sand' || surf === 'grass' ? Math.sin(performance.now() * 0.03) * 0.012 * Math.min(1, speed / 10) : 0;

    this.wheelSpin += (vf / WHEEL_R) * dt;
    for (const w of this.wheels) {
      w.spin.rotation.x = this.wheelSpin;
      if (w.front) w.pivot.rotation.y = steerAng * 1.2;
    }
    this.wheelSteer.rotation.z = -this.steer * 1.6;
    this.hair.rotation.x = -0.3 - Math.min(0.9, speed * 0.02) + Math.sin(performance.now() * 0.03) * 0.05 * Math.min(1, speed / 20);

    const braking = inp.brake > 0 && vf > 0.5;
    this.tailMat.color.set('#ff1a2a').multiplyScalar(braking ? 6 : 1.6);
  }

  updateGlowVisibility(camera) {
    const dx = camera.position.x - this.pos.x, dz = camera.position.z - this.pos.y;
    const along = dx * Math.sin(this.h) + dz * Math.cos(this.h);
    this.headGlow.visible = along > 1.8;
    this.tailGlow.visible = along < -1.8;
  }

  // world-space rear wheel contact points for skid marks
  rearWheels() {
    const out = [];
    for (const w of this.wheels) if (!w.front) {
      const x = this.pos.x + Math.cos(this.h) * w.x + Math.sin(this.h) * w.z;
      const z = this.pos.y - Math.sin(this.h) * w.x + Math.cos(this.h) * w.z;
      out.push([x, z]);
    }
    return out;
  }
}

// Ring buffer of skid-mark quads
export class Skids {
  constructor(scene, max = 2400) {
    this.max = max;
    this.pos = new Float32Array(max * 6 * 3);
    this.alpha = new Float32Array(max * 6);
    this.geo = new THREE.BufferGeometry();
    this.geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    this.geo.setAttribute('alpha', new THREE.BufferAttribute(this.alpha, 1));
    const mat = new THREE.ShaderMaterial({
      vertexShader: 'attribute float alpha; varying float vA; void main(){ vA = alpha; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
      fragmentShader: 'varying float vA; void main(){ gl_FragColor = vec4(0.04,0.03,0.05, vA * 0.55); }',
      transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4,
    });
    this.mesh = new THREE.Mesh(this.geo, mat);
    this.mesh.frustumCulled = false;
    scene.add(this.mesh);
    this.i = 0;
    this.last = [null, null];
  }
  add(points, strength) {
    points.forEach((p, k) => {
      const prev = this.last[k];
      if (strength <= 0.05) { this.last[k] = null; return; }
      if (!prev) { this.last[k] = p; return; }
      const dx = p[0] - prev[0], dz = p[1] - prev[1];
      const len = Math.hypot(dx, dz);
      if (len < 0.4) return;
      if (len > 4) { this.last[k] = p; return; }
      const nx = (-dz / len) * 0.13, nz = (dx / len) * 0.13;
      const y0 = heightAt(prev[0], prev[1]) + 0.04, y1 = heightAt(p[0], p[1]) + 0.04;
      const q = [
        prev[0] - nx, y0, prev[1] - nz, prev[0] + nx, y0, prev[1] + nz, p[0] + nx, y1, p[1] + nz,
        prev[0] - nx, y0, prev[1] - nz, p[0] + nx, y1, p[1] + nz, p[0] - nx, y1, p[1] - nz,
      ];
      this.pos.set(q, this.i * 18);
      this.alpha.fill(Math.min(1, strength), this.i * 6, this.i * 6 + 6);
      this.i = (this.i + 1) % this.max;
      this.last[k] = p;
      this.geo.attributes.position.needsUpdate = true;
      this.geo.attributes.alpha.needsUpdate = true;
    });
  }
}

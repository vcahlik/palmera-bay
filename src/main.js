import * as THREE from 'three';
import { World, SUN_DIR, FOG_DENSITY, coastX, bvdX, heightAt, nearestRoadPoint, PIER, GX0, GZ0, GS } from './world.js';
import { Car, Skids } from './car.js';
import { AudioSys } from './audio.js';

// ---------------------------------------------------------------------------
// Input (registered before the scene is built so the title screen always responds)
// ---------------------------------------------------------------------------
const keys = new Set();
const audio = new AudioSys();
const hud = {
  speed: document.getElementById('speed'), gear: document.getElementById('gear'),
  toast: document.getElementById('toast'), overlay: document.getElementById('overlay'),
  hints: document.getElementById('hints'), map: document.getElementById('map'),
  nitro: document.getElementById('nitrofill'), nitroBox: document.getElementById('nitro'),
  hudRoot: document.getElementById('hud'),
};
let started = false, camMode = 0, hudVisible = true;
function toast(msg) {
  hud.toast.textContent = msg; hud.toast.classList.add('show');
  clearTimeout(toast.t); toast.t = setTimeout(() => hud.toast.classList.remove('show'), 1400);
}
function begin() {
  if (started) return;
  started = true;
  hud.overlay.classList.add('hidden');
  try { audio.start(); } catch (err) { console.warn('audio unavailable', err); }
  setTimeout(() => hud.hints.classList.add('fade'), 9000);
}
addEventListener('keydown', (e) => {
  if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) e.preventDefault();
  if (!started) { begin(); return; }
  if (e.repeat) return;
  keys.add(e.code);
  switch (e.code) {
    case 'KeyC': car.cyclePaint(); toast('NEW PAINT'); break;
    case 'KeyV': camMode = (camMode + 1) % 3; toast(['CHASE CAM', 'FAR CAM', 'BUMPER CAM'][camMode]); break;
    case 'KeyM': toast(audio.toggleMusic() ? 'RADIO ON' : 'RADIO OFF'); break;
    case 'KeyP': pixelIdx = (pixelIdx + 1) % PIXEL_SIZES.length; resize(); toast(`PIXEL SIZE ${PIXEL_SIZES[pixelIdx]}`); break;
    case 'KeyH': hudVisible = !hudVisible; hud.hudRoot.style.display = hudVisible ? '' : 'none'; break;
    case 'KeyR': {
      const p = nearestRoadPoint(car.pos.x, car.pos.y);
      car.place(p.x, p.z, p.h); toast('BACK ON THE ROAD'); break;
    }
  }
});
addEventListener('keyup', (e) => keys.delete(e.code));
addEventListener('blur', () => keys.clear());
hud.overlay.addEventListener('click', begin);

// ---------------------------------------------------------------------------
// Renderer + low-res HDR target + retro post pass
// ---------------------------------------------------------------------------
const canvas = document.getElementById('c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
renderer.setPixelRatio(1);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;

const PIXEL_SIZES = [2, 3, 4];
let pixelIdx = Number(new URLSearchParams(location.search).get('px') ?? 1);
const rt = new THREE.WebGLRenderTarget(4, 4, {
  type: THREE.HalfFloatType, minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter, depthBuffer: true,
});

const post = new THREE.ShaderMaterial({
  uniforms: { tDiffuse: { value: rt.texture }, res: { value: new THREE.Vector2() }, time: { value: 0 }, boost: { value: 0 } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }',
  fragmentShader: /* glsl */`
    uniform sampler2D tDiffuse; uniform vec2 res; uniform float time; uniform float boost; varying vec2 vUv;
    float bayer(vec2 p){
      p = mod(p, 4.0);
      int i = int(p.x) + int(p.y) * 4;
      int m[16] = int[16](0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5);
      return float(m[i]) / 16.0;
    }
    vec3 aces(vec3 x){ return clamp((x*(2.51*x+0.03))/(x*(2.43*x+0.59)+0.14), 0.0, 1.0); }
    void main(){
      vec3 c = texture2D(tDiffuse, vUv).rgb;
      if (boost > 0.01) {
        // radial speed blur toward the edges while the nitro burns
        vec2 dir = (vUv - 0.5);
        vec3 acc = c;
        for (int i = 1; i <= 6; i++) acc += texture2D(tDiffuse, vUv - dir * float(i) * 0.012 * boost).rgb;
        c = mix(c, acc / 7.0, smoothstep(0.08, 0.45, length(dir)) * boost);
      }
      // soft glow: sample neighbours of bright pixels (cheap bloom)
      vec2 px = 1.0 / res;
      vec3 b = vec3(0.0);
      for (int i = -2; i <= 2; i++) for (int j = -2; j <= 2; j++) {
        vec3 s = texture2D(tDiffuse, vUv + vec2(float(i), float(j)) * px * 1.5).rgb;
        b += max(s - 1.0, 0.0);
      }
      c += b / 25.0 * 0.9;
      c *= 1.05;
      c = aces(c);
      c = pow(c, vec3(1.0 / 2.2));
      // grade: purple shadows, warm highlights
      float l = dot(c, vec3(0.299, 0.587, 0.114));
      c += vec3(0.035, 0.0, 0.06) * (1.0 - l) * (1.0 - l);
      c = mix(vec3(l), c, 1.12);
      // vignette
      vec2 q = vUv - 0.5;
      c *= 1.0 - dot(q, q) * 0.55;
      // ordered dither + posterize
      float levels = 30.0;
      float d = bayer(floor(vUv * res)) - 0.5;
      c = floor(c * levels + 0.5 + d * 0.9) / levels;
      gl_FragColor = vec4(c, 1.0);
    }`,
  depthTest: false, depthWrite: false,
});
const postScene = new THREE.Scene();
const postQuad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), post);
postQuad.frustumCulled = false;
postScene.add(postQuad);
const postCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

// ---------------------------------------------------------------------------
// Scene
// ---------------------------------------------------------------------------
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2('#ff9a6a', FOG_DENSITY);
const camera = new THREE.PerspectiveCamera(62, 1, 0.1, 6000);

const hemi = new THREE.HemisphereLight('#9a78c8', '#6a3e3a', 1.5);
scene.add(hemi);
const sun = new THREE.DirectionalLight('#ffab6a', 3.4);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
const sc = sun.shadow.camera;
sc.left = -110; sc.right = 110; sc.top = 110; sc.bottom = -110; sc.near = 10; sc.far = 900;
sun.shadow.bias = -0.0006;
sun.shadow.normalBias = 0.06;
scene.add(sun, sun.target);
// light direction is a bit higher than the visible sun so shadows stay readable
const LIGHT_DIR = new THREE.Vector3(SUN_DIR.x, 0.2, SUN_DIR.z).normalize();

await Promise.race([document.fonts.load('30px "Press Start 2P"'), new Promise((r) => setTimeout(r, 3000))]).catch(() => {});
const world = new World(scene);

// environment map for the car paint, captured from the sky shader
{
  const envScene = new THREE.Scene();
  const s = new THREE.Mesh(new THREE.SphereGeometry(100, 32, 16), World.skyMaterial());
  envScene.add(s);
  const ground = new THREE.Mesh(new THREE.CircleGeometry(90, 16), new THREE.MeshBasicMaterial({ color: '#2a1c2e' }));
  ground.rotation.x = -Math.PI / 2; ground.position.y = -2;
  envScene.add(ground);
  const pm = new THREE.PMREMGenerator(renderer);
  scene.environment = pm.fromScene(envScene, 0.02).texture;
  scene.environmentIntensity = 0.9;
}

const car = new Car(scene, world.glowMat);
const skids = new Skids(scene);

const START = { x: bvdX(-120) - 5, z: -120, h: 0 };
car.place(START.x, START.z, START.h);

function readInput() {
  const k = (...c) => c.some((x) => keys.has(x));
  const inp = {
    throttle: k('KeyW', 'ArrowUp') ? 1 : 0,
    brake: k('KeyS', 'ArrowDown') ? 1 : 0,
    steer: (k('KeyA', 'ArrowLeft') ? 1 : 0) - (k('KeyD', 'ArrowRight') ? 1 : 0),
    handbrake: k('Space'),
    boost: k('ShiftLeft', 'ShiftRight'),
  };
  let gp = null;
  try { gp = navigator.getGamepads ? [...navigator.getGamepads()].find((g) => g) : null; } catch { /* insecure context */ }
  if (gp) {
    const ax = gp.axes[0] || 0;
    if (Math.abs(ax) > 0.12) inp.steer = -ax;
    const rtv = gp.buttons[7]?.value || 0, ltv = gp.buttons[6]?.value || 0;
    if (rtv > 0.05) inp.throttle = rtv;
    if (ltv > 0.05) inp.brake = ltv;
    if (gp.buttons[0]?.pressed || gp.buttons[1]?.pressed) inp.handbrake = true;
    if (gp.buttons[2]?.pressed) inp.boost = true;
    if (!started && (rtv > 0.5 || gp.buttons[9]?.pressed)) begin();
  }
  if (!started) { inp.throttle = inp.brake = inp.steer = 0; inp.handbrake = false; }
  return inp;
}

// ---------------------------------------------------------------------------
// Minimap
// ---------------------------------------------------------------------------
const mapCtx = hud.map.getContext('2d');
const mapSrc = document.createElement('canvas');
mapSrc.width = mapSrc.height = 768;
{
  const g = mapSrc.getContext('2d');
  g.drawImage(world.groundCanvas, 0, 0, 768, 768);
  const s = 768 / GS;
  g.fillStyle = '#b08058';
  g.fillRect((PIER.x1 - GX0) * s, (PIER.z - PIER.w / 2 - GZ0) * s, (PIER.x0 - PIER.x1) * s, PIER.w * s);
}
function drawMap() {
  const W = hud.map.width, s = 768 / GS, zoom = 1.3;
  mapCtx.save();
  mapCtx.clearRect(0, 0, W, W);
  mapCtx.beginPath(); mapCtx.arc(W / 2, W / 2, W / 2 - 2, 0, Math.PI * 2); mapCtx.clip();
  mapCtx.fillStyle = '#26203f'; mapCtx.fillRect(0, 0, W, W);
  mapCtx.translate(W / 2, W / 2);
  mapCtx.rotate(car.h + Math.PI);
  mapCtx.scale(zoom, zoom);
  mapCtx.imageSmoothingEnabled = false;
  mapCtx.drawImage(mapSrc, -(car.pos.x - GX0) * s, -(car.pos.y - GZ0) * s);
  mapCtx.restore();
  // car arrow
  mapCtx.fillStyle = '#ff4f8b'; mapCtx.strokeStyle = '#fff'; mapCtx.lineWidth = 1.5;
  mapCtx.beginPath(); mapCtx.moveTo(W / 2, W / 2 - 7); mapCtx.lineTo(W / 2 + 5, W / 2 + 5); mapCtx.lineTo(W / 2 - 5, W / 2 + 5); mapCtx.closePath();
  mapCtx.fill(); mapCtx.stroke();
}

// ---------------------------------------------------------------------------
// Camera
// ---------------------------------------------------------------------------
const camPos = new THREE.Vector3(START.x, 3, START.z - 8);
const camLook = new THREE.Vector3(START.x, 1, START.z);
let camDir = START.h, shake = 0, introT = 0;

function updateCamera(dt, t) {
  const fwd = new THREE.Vector3(Math.sin(car.h), 0, Math.cos(car.h));
  const carY = car.y || 0;
  const carP = new THREE.Vector3(car.pos.x, carY, car.pos.y);
  const spd = car.speed;
  let fov = 62 + Math.min(18, spd * 0.28) + car.boostVis * 12;

  if (!started) {
    // slow orbit on the title screen
    introT += dt;
    const a = introT * 0.12 - 1.2;
    camera.position.set(carP.x + Math.sin(a) * 9, carY + 2.2, carP.z + Math.cos(a) * 9);
    camera.lookAt(carP.x, carY + 1.1, carP.z);
    camera.fov = 55;
  } else if (camMode <= 1) {
    // chase: follow the direction of travel a little when sliding
    let target = car.h;
    if (spd > 3) {
      const velAng = Math.atan2(car.vel.x, car.vel.y);
      let d = velAng - car.h; d = Math.atan2(Math.sin(d), Math.cos(d));
      if (car.vf > 0) target = car.h + d * 0.35;
    }
    let dd = target - camDir; dd = Math.atan2(Math.sin(dd), Math.cos(dd));
    camDir += dd * Math.min(1, dt * 6);
    const dist = camMode === 0 ? 6.8 + spd * 0.03 : 12 + spd * 0.04;
    const hgt = camMode === 0 ? 2.3 : 4.6;
    const want = new THREE.Vector3(carP.x - Math.sin(camDir) * dist, carY + hgt, carP.z - Math.cos(camDir) * dist);
    want.y = Math.max(want.y, heightAt(want.x, want.z) + 1.2);
    // pull the camera in front of any building between it and the car
    for (let k = 1; k <= 12; k++) {
      const t = k / 12;
      const x = carP.x + (want.x - carP.x) * t, z = carP.z + (want.z - carP.z) * t;
      if (world.colliders.inTall(x, z, 0.6)) {
        const tt = Math.max(0.15, (k - 1) / 12);
        want.x = carP.x + (want.x - carP.x) * tt; want.z = carP.z + (want.z - carP.z) * tt;
        want.y += (1 - tt) * 1.5;
        break;
      }
    }
    camPos.lerp(want, 1 - Math.exp(-dt * 10));
    camLook.lerp(carP.clone().addScaledVector(fwd, 3.5).setY(carY + 1.2), 1 - Math.exp(-dt * 14));
    camera.position.copy(camPos);
    camera.lookAt(camLook);
  } else {
    const local = new THREE.Vector3(0, 0.85, 2.45);
    car.body.updateWorldMatrix(true, false);
    camera.position.copy(local.applyMatrix4(car.body.matrixWorld));
    const look = new THREE.Vector3(0, 0.9, 30).applyMatrix4(car.body.matrixWorld);
    camera.lookAt(look);
    camPos.copy(camera.position); camLook.copy(look);
    fov += 6;
  }
  if (shake > 0) {
    camera.position.x += (Math.random() - 0.5) * shake;
    camera.position.y += (Math.random() - 0.5) * shake;
    shake = Math.max(0, shake - dt * 2.5);
  }
  // subtle road vibration at speed
  camera.position.y += Math.sin(t * 40) * 0.004 * Math.min(1, spd / 40);
  if (car.boostVis > 0.05) {
    camera.position.x += (Math.random() - 0.5) * 0.05 * car.boostVis;
    camera.position.y += (Math.random() - 0.5) * 0.05 * car.boostVis;
  }
  camera.position.y = Math.max(camera.position.y, heightAt(camera.position.x, camera.position.z) + 0.4);
  camera.fov += (fov - camera.fov) * Math.min(1, dt * 3);
  camera.updateProjectionMatrix();
}

// ---------------------------------------------------------------------------
// Resize
// ---------------------------------------------------------------------------
function resize() {
  const w = innerWidth, h = innerHeight, ps = PIXEL_SIZES[pixelIdx];
  renderer.setSize(w, h, false);
  canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
  const rw = Math.max(1, Math.floor(w / ps)), rh = Math.max(1, Math.floor(h / ps));
  rt.setSize(rw, rh);
  post.uniforms.res.value.set(rw, rh);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}
addEventListener('resize', resize);
resize();

// ---------------------------------------------------------------------------
// Loop
// ---------------------------------------------------------------------------
const clock = new THREE.Clock();
let fpsAcc = 0, fpsN = 0;
function frame() {
  const dt = Math.min(clock.getDelta(), 1 / 20);
  const t = clock.elapsedTime;
  const inp = readInput();

  // fixed sub-steps for stable handling
  const steps = Math.ceil(dt / (1 / 120));
  for (let i = 0; i < steps; i++) car.update(dt / steps, inp, world);
  if (car.impact > 5) { shake = Math.min(0.5, car.impact * 0.03); audio.thud(car.impact); }
  skids.add(car.rearWheels(), car.skidding);

  world.update(dt, camera);
  updateCamera(dt, t);
  car.updateGlowVisibility(camera);

  sun.position.set(car.pos.x, car.y, car.pos.y).addScaledVector(LIGHT_DIR, 400);
  sun.target.position.set(car.pos.x, car.y, car.pos.y);

  world.glowMat.uniforms.uScale.value = rt.height * 0.5 * camera.projectionMatrix.elements[5];

  audio.update(dt, {
    vf: car.vf, speed: car.speed, throttle: car.boosting ? 1 : inp.throttle, skid: car.skidding, boost: car.boostVis,
    coastDist: Math.max(0, car.pos.x - coastX(car.pos.y)),
  });

  const kmh = Math.round(Math.abs(car.vf) * 3.6);
  hud.speed.textContent = String(kmh).padStart(3, '0');
  hud.gear.textContent = car.vf < -0.5 ? 'R' : kmh < 1 ? 'N' : String(audio.gear || 1);
  hud.nitro.style.width = (car.nitro * 100).toFixed(1) + '%';
  hud.nitroBox.classList.toggle('burn', car.boosting);
  hud.nitroBox.classList.toggle('empty', car.nitroLock);
  post.uniforms.boost.value = car.boostVis;
  drawMap();

  renderer.setRenderTarget(rt);
  renderer.render(scene, camera);
  renderer.setRenderTarget(null);
  post.uniforms.time.value = t;
  renderer.render(postScene, postCam);

  fpsAcc += dt; fpsN++;
  if (fpsAcc > 1) { window.__fps = fpsN / fpsAcc; fpsAcc = 0; fpsN = 0; }
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
window.__ready = true;

// debug hooks for automated screenshots
window.__game = { car, camera, world, begin, keys, setCam: (m) => { camMode = m; } };

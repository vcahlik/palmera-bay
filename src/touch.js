// On-screen controls for phones and tablets. Desktop (mouse/trackpad, even with a touchscreen)
// never activates this; `?touch=1` forces it for testing.

export function isTouchDevice() {
  const q = new URLSearchParams(location.search).get('touch');
  if (q !== null) return q !== '0';
  return matchMedia('(hover: none) and (pointer: coarse)').matches;
}

const arrow = (rot) => `<svg viewBox="0 0 24 24" style="transform:rotate(${rot}deg)"><path d="M8 4 L18 12 L8 20 Z"/></svg>`;

// Buttons emit the same key codes as the keyboard, so the car code doesn't know the difference.
const BUTTONS = [
  { id: 't-left', k: 'KeyA', html: arrow(180) },
  { id: 't-right', k: 'KeyD', html: arrow(0) },
  { id: 't-gas', k: 'KeyW', html: arrow(-90) },
  { id: 't-brake', k: 'KeyS', html: arrow(90) },
  { id: 't-nos', k: 'ShiftLeft', html: '<span>NOS</span>' },
  { id: 't-drift', k: 'Space', html: '<span>DRIFT</span>' },
];

// Menu entries map to keyboard shortcuts; `fullscreen` is handled here.
const MENU = [
  ['KeyV', 'CAMERA'], ['KeyC', 'PAINT'], ['KeyM', 'RADIO'], ['KeyP', 'PIXELS'],
  ['KeyR', 'RESET CAR'], ['KeyH', 'HUD'], ['fullscreen', 'FULLSCREEN'], ['close', 'CLOSE'],
];

export function setupTouch({ touchKeys, action }) {
  document.body.classList.add('touch');
  // iOS ignores user-scalable=no; block pinch zoom explicitly
  document.addEventListener('gesturestart', (e) => e.preventDefault());
  document.getElementById('press').textContent = 'TAP TO DRIVE';

  const pad = document.createElement('div');
  pad.id = 'touchpad';
  pad.innerHTML = BUTTONS.map((b) => `<div class="tbtn" id="${b.id}" data-k="${b.k}">${b.html}</div>`).join('');
  document.body.appendChild(pad);
  const btns = [...pad.querySelectorAll('[data-k]')];

  // Every touch presses whatever button is under it right now, so thumbs can slide
  // from one button to the next without lifting.
  const sync = (touches) => {
    const active = new Set();
    for (const t of touches) {
      const el = document.elementFromPoint(t.clientX, t.clientY);
      const b = el && el.closest && el.closest('[data-k]');
      if (b) active.add(b.dataset.k);
    }
    touchKeys.clear();
    for (const k of active) touchKeys.add(k);
    for (const b of btns) b.classList.toggle('on', active.has(b.dataset.k));
  };
  const onTouch = (e) => { e.preventDefault(); sync(e.touches); };
  for (const type of ['touchstart', 'touchmove', 'touchend', 'touchcancel']) pad.addEventListener(type, onTouch, { passive: false });
  const releaseAll = () => sync([]);
  addEventListener('blur', releaseAll);
  document.addEventListener('visibilitychange', releaseAll);

  // Menu
  const menuBtn = document.createElement('div');
  menuBtn.id = 'menubtn';
  menuBtn.innerHTML = '<i></i><i></i><i></i>';
  document.body.appendChild(menuBtn);
  const menu = document.createElement('div');
  menu.id = 'menu';
  const canFullscreen = !!(document.documentElement.requestFullscreen || document.documentElement.webkitRequestFullscreen);
  menu.innerHTML = `<div class="panel"><div class="mtitle">PALMERA BAY</div><div class="grid">${
    MENU.filter(([a]) => a !== 'fullscreen' || canFullscreen).map(([a, label]) => `<button data-a="${a}">${label}</button>`).join('')
  }</div></div>`;
  document.body.appendChild(menu);
  const open = (on) => { menu.classList.toggle('open', on); releaseAll(); };
  menuBtn.addEventListener('click', () => open(true));
  menu.addEventListener('click', (e) => {
    const a = e.target.closest('button')?.dataset.a;
    if (!a) { if (e.target === menu) open(false); return; }
    if (a === 'close') open(false);
    else if (a === 'fullscreen') toggleFullscreen();
    else action(a);
  });
}

function toggleFullscreen() {
  const d = document, el = d.documentElement;
  if (d.fullscreenElement || d.webkitFullscreenElement) (d.exitFullscreen || d.webkitExitFullscreen).call(d);
  else {
    const p = (el.requestFullscreen || el.webkitRequestFullscreen).call(el);
    // landscape lock only works in fullscreen, and only on some browsers
    Promise.resolve(p).then(() => screen.orientation?.lock?.('landscape')).catch(() => {});
  }
}

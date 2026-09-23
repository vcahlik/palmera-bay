// All sound is synthesized with WebAudio: engine, wind, tires, surf, and a
// small procedural synthwave "radio".

const GEARS = [0, 13, 24, 35, 46, 56, 70]; // m/s upper bounds per gear

export class AudioSys {
  constructor() { this.ctx = null; this.musicOn = true; }

  start() {
    if (this.ctx) { this.ctx.resume(); return; }
    const ctx = (this.ctx = new (window.AudioContext || window.webkitAudioContext)());
    this.master = ctx.createGain(); this.master.gain.value = 0.7;
    const comp = ctx.createDynamicsCompressor();
    this.master.connect(comp).connect(ctx.destination);

    // noise source shared by several voices
    const nb = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const d = nb.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    this.noiseBuf = nb;
    const noise = () => { const s = ctx.createBufferSource(); s.buffer = nb; s.loop = true; s.start(); return s; };

    // engine
    this.eGain = ctx.createGain(); this.eGain.gain.value = 0;
    this.eFilter = ctx.createBiquadFilter(); this.eFilter.type = 'lowpass'; this.eFilter.Q.value = 3;
    const shaper = ctx.createWaveShaper();
    const curve = new Float32Array(1024);
    for (let i = 0; i < 1024; i++) { const x = i / 512 - 1; curve[i] = Math.tanh(x * 2.5); }
    shaper.curve = curve;
    this.eOsc = [];
    for (const [type, mul, g] of [['sawtooth', 1, 0.5], ['square', 0.5, 0.35], ['sawtooth', 2.01, 0.15]]) {
      const o = ctx.createOscillator(); o.type = type;
      const og = ctx.createGain(); og.gain.value = g;
      o.connect(og).connect(this.eFilter); o.start();
      this.eOsc.push({ o, mul });
    }
    this.eFilter.connect(shaper).connect(this.eGain).connect(this.master);

    // wind (it's a convertible!)
    this.wGain = ctx.createGain(); this.wGain.gain.value = 0;
    this.wFilter = ctx.createBiquadFilter(); this.wFilter.type = 'bandpass'; this.wFilter.Q.value = 0.6;
    noise().connect(this.wFilter).connect(this.wGain).connect(this.master);

    // tire screech
    this.sGain = ctx.createGain(); this.sGain.gain.value = 0;
    const sf = ctx.createBiquadFilter(); sf.type = 'bandpass'; sf.frequency.value = 2300; sf.Q.value = 9;
    const sf2 = ctx.createBiquadFilter(); sf2.type = 'bandpass'; sf2.frequency.value = 3400; sf2.Q.value = 12;
    const n1 = noise(); n1.connect(sf).connect(this.sGain); n1.connect(sf2).connect(this.sGain);
    this.sGain.connect(this.master);

    // ocean surf
    this.oGain = ctx.createGain(); this.oGain.gain.value = 0;
    const of = ctx.createBiquadFilter(); of.type = 'lowpass'; of.frequency.value = 600;
    noise().connect(of).connect(this.oGain).connect(this.master);

    // music bus with echo
    this.mGain = ctx.createGain(); this.mGain.gain.value = this.musicOn ? 0.33 : 0;
    this.mGain.connect(this.master);
    this.echo = ctx.createDelay(1); this.echo.delayTime.value = 0.49;
    const fb = ctx.createGain(); fb.gain.value = 0.33;
    const ef = ctx.createBiquadFilter(); ef.type = 'lowpass'; ef.frequency.value = 2200;
    this.echo.connect(ef).connect(fb).connect(this.echo);
    ef.connect(this.mGain);
    this.startMusic();
  }

  toggleMusic() {
    this.musicOn = !this.musicOn;
    if (this.ctx) this.mGain.gain.setTargetAtTime(this.musicOn ? 0.33 : 0, this.ctx.currentTime, 0.3);
    return this.musicOn;
  }

  thud(strength) {
    if (!this.ctx) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const o = ctx.createOscillator(); o.type = 'sine';
    o.frequency.setValueAtTime(120, t); o.frequency.exponentialRampToValueAtTime(40, t + 0.25);
    const g = ctx.createGain(); g.gain.setValueAtTime(Math.min(0.9, strength * 0.06), t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
    o.connect(g).connect(this.master); o.start(t); o.stop(t + 0.4);
    const n = ctx.createBufferSource(); n.buffer = this.noiseBuf;
    const nf = ctx.createBiquadFilter(); nf.type = 'lowpass'; nf.frequency.value = 900;
    const ng = ctx.createGain(); ng.gain.setValueAtTime(Math.min(0.6, strength * 0.04), t); ng.gain.exponentialRampToValueAtTime(0.001, t + 0.2);
    n.connect(nf).connect(ng).connect(this.master); n.start(t); n.stop(t + 0.25);
  }

  update(dt, s) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const v = Math.abs(s.vf);
    let gear = 1;
    while (gear < GEARS.length - 1 && v > GEARS[gear]) gear++;
    const lo = GEARS[gear - 1] * 0.75, hi = GEARS[gear];
    const rpm = Math.min(1.08, 0.22 + 0.78 * Math.max(0, (v - lo) / (hi - lo)));
    this.gear = gear; this.rpm = rpm;
    const f = 42 + rpm * 125 + (s.throttle > 0 && v < 1 ? 15 : 0);
    for (const e of this.eOsc) e.o.frequency.setTargetAtTime(f * e.mul, t, 0.04);
    this.eFilter.frequency.setTargetAtTime(350 + rpm * 900 + s.throttle * 900, t, 0.05);
    this.eGain.gain.setTargetAtTime(0.11 + s.throttle * 0.13 + rpm * 0.05, t, 0.08);
    this.wGain.gain.setTargetAtTime(Math.min(0.35, (s.speed / 60) ** 2 * 0.35), t, 0.2);
    this.wFilter.frequency.setTargetAtTime(400 + s.speed * 18, t, 0.2);
    this.sGain.gain.setTargetAtTime(s.skid * 0.22, t, 0.05);
    const surf = Math.max(0, 1 - s.coastDist / 90) * (0.55 + 0.45 * Math.sin(t * 0.45) * Math.sin(t * 0.27 + 1));
    this.oGain.gain.setTargetAtTime(0.02 + surf * 0.22, t, 0.3);
  }

  // ------------------------------------------------------------ music
  startMusic() {
    const ctx = this.ctx;
    const bpm = 88, step = 60 / bpm / 4;
    const midi = (n) => 440 * Math.pow(2, (n - 69) / 12);
    // Fmaj7 - Em7 - Dm7 - Cmaj7 (two bars each)
    const chords = [[53, 57, 60, 64], [52, 55, 59, 62], [50, 53, 57, 60], [48, 52, 55, 59]];
    const arpPat = [0, 1, 2, 3, 2, 1, 3, 2];
    let next = ctx.currentTime + 0.2, n = 0;

    const voice = (type, freq, t, dur, gain, dest, attack = 0.005, cutoff = 3000) => {
      const o = ctx.createOscillator(); o.type = type; o.frequency.value = freq;
      const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = cutoff;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(gain, t + attack);
      g.gain.exponentialRampToValueAtTime(0.0008, t + dur);
      o.connect(f).connect(g).connect(dest); o.start(t); o.stop(t + dur + 0.05);
      return o;
    };
    const noiseHit = (t, dur, gain, type, freq) => {
      const s = ctx.createBufferSource(); s.buffer = this.noiseBuf;
      const f = ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq;
      const g = ctx.createGain(); g.gain.setValueAtTime(gain, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
      s.connect(f).connect(g).connect(this.mGain); s.start(t, Math.random()); s.stop(t + dur + 0.02);
    };

    const tick = () => {
      while (next < ctx.currentTime + 0.25) {
        const bar = Math.floor(n / 16), s16 = n % 16;
        const chord = chords[Math.floor(bar / 2) % 4];
        const t = next;
        if (this.musicOn) {
          // pad
          if (s16 === 0 && bar % 2 === 0) {
            for (const note of chord) for (const det of [-6, 6]) {
              const o = voice('sawtooth', midi(note), t, step * 32, 0.022, this.mGain, 0.8, 1100);
              o.detune.value = det;
            }
          }
          // bass
          if ([0, 3, 6, 10, 12, 14].includes(s16)) voice('sawtooth', midi(chord[0] - 24 + (s16 === 14 ? 7 : 0)), t, step * 1.8, 0.14, this.mGain, 0.005, 420);
          // arp (8ths) into the echo
          if (s16 % 2 === 0) {
            const k = arpPat[(s16 / 2) % 8];
            const note = chord[k] + 12;
            voice('square', midi(note), t, step * 1.5, 0.028, this.mGain, 0.003, 1900);
            voice('square', midi(note), t, step * 1.5, 0.02, this.echo, 0.003, 1500);
          }
          // drums
          if (s16 === 0 || s16 === 8 || (s16 === 11 && bar % 2)) {
            const o = ctx.createOscillator(); const g = ctx.createGain();
            o.frequency.setValueAtTime(140, t); o.frequency.exponentialRampToValueAtTime(42, t + 0.18);
            g.gain.setValueAtTime(0.5, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
            o.connect(g).connect(this.mGain); o.start(t); o.stop(t + 0.32);
          }
          if (s16 === 4 || s16 === 12) { noiseHit(t, 0.22, 0.2, 'bandpass', 1700); noiseHit(t, 0.5, 0.05, 'highpass', 3000); }
          if (s16 % 2 === 0) noiseHit(t, s16 % 4 === 2 ? 0.09 : 0.04, s16 % 4 === 2 ? 0.05 : 0.025, 'highpass', 7500);
        }
        next += step; n++;
      }
    };
    this.musicTimer = setInterval(tick, 40);
  }
}

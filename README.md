# Palmera Bay: a sunset drive

A small "vibe driving" browser game. Cruise a tropical coastal city at golden hour in a
fast convertible. There are no opponents and no goals, just free roam.

Everything is procedural: the city layout, window and ground textures, palms, sky, ocean,
engine sound and the synthwave radio. Three.js is bundled into `dist/game.js`; only the pixel
font comes from Google Fonts (without internet it falls back to a system font).

## Play

Open `index.html` in a browser, straight from disk. No server is needed. To put it online, copy
`index.html` and the `dist/` folder to any static host (GitHub Pages, Netlify, a bucket...).

## Develop

The source lives in `src/` as ES modules and is bundled with esbuild:

```sh
npm install
npm run build   # one-off build to dist/game.js
npm run watch   # rebuild on every save, then just reload the page
```

`dist/` is committed so the game stays playable without building. Rebuild before committing
source changes.

## Controls

| Key | Action |
| --- | --- |
| W / ↑ | throttle |
| S / ↓ | brake / reverse |
| A D / ← → | steer |
| Space | handbrake: drift |
| Shift | nitro (gauge above the speedometer; refills when you let go) |
| V | cycle cameras (chase, far, bumper) |
| C | change paint |
| M | radio on/off |
| P | pixel size |
| R | put the car back on the nearest road |
| H | hide HUD |

Gamepads work too: left stick steers, RT/LT for throttle/brake, A/B for the handbrake, X for nitro.

On phones and tablets, on-screen controls appear: ◀ ▶ to steer, ▲ ▼ for gas and brake, plus
NOS and DRIFT buttons. The ☰ menu holds camera, paint, radio, pixels, reset, HUD and fullscreen.
You can slide a thumb between buttons without lifting it. Desktop never shows these; add
`?touch=1` to the URL to try them there.

## Layout

- `src/layout.js` holds the city plan: coast, boulevard and street grid, block types, terrain height
  (flat downtown, rolling outer districts) and the cliff border.
- `src/world.js` builds the scene: sky and ocean shaders, ground heightfield, art deco downtown,
  hillside villas, palms, street lamps, string lights, pier, beach, the cliffs and the distant
  landscape. It also handles collision.
- `src/props.js` adds street life: neon shop signs, lit storefronts and café patios, billboards,
  parked cars, traffic lights, string lights over streets, a gas station, a motel and the marina
  with its lighthouse.
- `src/car.js` has the convertible's model, arcade drift physics, nitro flames and skid marks.
- `src/audio.js` synthesizes the engine, nitro, wind, tires, surf and a procedural radio with WebAudio.
- `src/main.js` handles the renderer, the low-res HDR target and retro post pass (tone map, grade,
  Bayer dither, nitro speed blur), camera, HUD, minimap and input.

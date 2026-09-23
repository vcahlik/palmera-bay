# Palmera Bay: a sunset drive

A small "vibe driving" browser game. Cruise a tropical coastal city at golden hour in a
fast convertible. There are no opponents and no goals, just free roam.

Everything is procedural: the city layout, window and ground textures, palms, sky, ocean,
engine sound and the synthwave radio. The only dependency is Three.js r169, vendored in
`vendor/three/`, so it runs offline (only the pixel font comes from Google Fonts).

## Run

ES modules need to be served over HTTP. Double-clicking `index.html` opens it as `file://`,
where the browser blocks the game script (the page shows a message saying so):

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

Add `?px=0|1|2` to pick the starting pixel size (2, 3 or 4 screen pixels per game pixel).

## Controls

| Key | Action |
| --- | --- |
| W / ↑ | throttle |
| S / ↓ | brake / reverse |
| A D / ← → | steer |
| Space | handbrake: drift |
| Shift | boost |
| V | cycle cameras (chase, far, driver, bumper) |
| C | change paint |
| M | radio on/off |
| P | pixel size |
| R | put the car back on the nearest road |
| H | hide HUD |

Gamepads work too: left stick steers, RT/LT for throttle/brake, A/B for the handbrake, X for boost.

## Layout

- `src/world.js` builds the city: coast, boulevard and street grid, art deco buildings with lit
  windows and neon, palms, street lamps, festoon lights, pier, beach, hills, sky and ocean
  shaders, and collision.
- `src/car.js` has the convertible's model, arcade drift physics and skid marks.
- `src/audio.js` synthesizes the engine, wind, tires, surf and a procedural radio with WebAudio.
- `src/main.js` handles the renderer, the low-res HDR target and retro post pass (tone map,
  grade, Bayer dither), camera, HUD, minimap and input.

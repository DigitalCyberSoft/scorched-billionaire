# Scorched Billionaire - Design Document

## Concept

A satirical 3D rebuild of Scorched Earth where billionaires battle rockets on the moon (and Earth, and Mars). A visual and thematic reskin of the byte-verified scorchedearth-multi engine. The game dynamics are unchanged; everything above the deterministic engine is replaced.

## 1. Architecture

### 1.1 Rendering Stack

**Decision: Three.js**

- GLTF/glb pipeline for rocket meshes and environment props.
- Subdivided plane mesh with vertex displacement for destructible terrain.
- Particle systems for explosions, smoke, debris.
- The 3D scene is purely visual. The deterministic engine's pixel grid is the sole collision authority.

### 1.2 Engine Layer

The `scorchedearth-multi` engine is ported **untouched**:
- `rng.ts`: CPython Mersenne Twister, bit-exact
- `physics.ts`: Forward-Euler integrator, gravity/wind/drag
- `terrain.ts`: Pixel framebuffer, terrain generation, carve/deposit/settle
- `weapons.ts` / `weapon_behaviors.ts`: 48-item weapon table
- `damage.ts` / `death.ts` / `hazard.ts`
- `ai.ts` / `guidance.ts`: 7 AI classes + aiming oracle
- `economy.ts` / `scoring.ts`: Free-market shop, interest, rankings
- `game.ts`: Round/turn loop, fire/impact pipeline, win test
- `net/*`: Nostr-relayed WebRTC lockstep multiplayer

The engine runs on a hidden 2D pixel grid. The visual layer reads the grid as a heightmap for 3D terrain rendering. No engine code is modified to produce visual effects; the visual layer is a consumer of engine state.

### 1.3 Decoupling

| Concern | Engine Layer | Visual Layer |
|---|---|---|
| Terrain collision | `terrain.is_dirt(x, y)` on pixel grid | Heightmap displacement on plane mesh |
| Projectile position | `proj.sx, proj.sy` (integer pixels) | 3D arc rendered from same coords |
| Explosion craters | `damage.explode()` carves pixels | Re-upload affected heightmap region to GPU |
| Rocket position | `tank.x, tank.y` | 3D model positioned at (x, y, heightmap_z) |
| Rocket angle | `tank.angle` (0-180 degrees) | Turret child mesh rotated on Z-axis |

### 1.4 Build Toolchain

**Decision: TypeScript + Vite (same as reference)**

```
scorched-billionaire/
  src/
    engine/          # Ported from scorchedearth-multi (untouched)
    render/          # Three.js scene, camera, renderer
    assets/          # Asset loaders, texture managers
    ui/              # Weapon shop HUD, taunt bubbles, overlays
    audio/           # ElevenLabs TTS, Web Audio SFX
    main.ts          # Entry point
  public/
    models/          # GLTF rocket meshes
    textures/        # Generated textures
    audio/           # Voice line clips
  scripts/
    generate_rockets.py   # Blender bpy rocket mesh generator
    generate_textures.py  # gpt-image-2 batch texture generator
    generate_voices.py    # ElevenLabs voice line generator
```

## 2. Camera

**Decision: Classic locked 2D side-view in a 3D scene.**

- Camera is orthographic or low-FOV perspective, locked to the side.
- Per turn: camera centers on active shooter's rocket.
- During flight: camera tracks the projectile.
- Between rounds: camera pulls back for standings overlay.
- The player never controls the camera.

Rationale: Scorched Earth aiming is angle+power. The player reads the arc. A free camera breaks this.

## 3. Terrain System

### 3.1 Deformation

**Decision: Engine pixel grid → heightmap displacement.**

- The engine's `terrain.ts` pixel grid is the authority for collision and crater shapes.
- A subdivided `PlaneGeometry` mesh covers the battlefield area.
- Vertex Y displacement is read from the engine pixel grid each frame (or on damage events).
- Explosions, diggers, rollers, dirt settling all deform the 3D surface automatically because the engine already computes them.
- No overhangs or caves (matches original Scorched Earth; the Cavern mode adds a ceiling plane above).

### 3.2 Environment Textures

**Decision: Generated terrain tiles per environment.**

- Earth: green/brown patchwork, blue sky skybox
- Moon: grey cratered regolith, black starfield skybox with large Earth
- Mars: red-orange rocky, dusty brown-orange skybox

Generated via gpt-image-2 with "seamless tileable" prompts.

## 4. Environments and Progression

### 4.1 Round Progression

| Rounds | Location | Gravity | Wind | Viscosity | Hazards |
|---|---|---|---|---|---|
| 1-2 | Earth | 0.2 (normal) | 200 (normal) | cfg default | Lightning, falling sky debris |
| 3-4 | Moon | 0.033 (1/6 g) | 0 (no atmosphere) | 1.0 (no drag) | Meteoroid strikes, solar flares |
| 5+ | Mars | 0.075 (3/8 g) | 50 (thin atmo) | 0.7 (thin drag) | Dust storms, radiation bursts |

### 4.2 Per-Environment Config

Each environment is a `cfg` preset swap at round transition:
- `cfg.GRAVITY`, `cfg.wind`, `cfg.MAX_WIND`, `cfg.viscosity_mult` change.
- Terrain generator palette swaps to environment colors.
- Skybox swaps.
- Hazard table swaps (lightning → meteoroids → dust storms).
- The weapon shop carries over; inventories persist across environment transitions.

## 5. Rockets

### 5.1 Visual Style

**Decision: Stubby cartoon chibi rockets. Not proportional.**

- Every rocket is roughly 3-4x taller than a Scorched Earth tank.
- Recognizable by silhouette and livery, not by scale.
- Each team has a unique mesh (different enough profiles).
- Style reference: Worms 3D / Kerbal Space Program but meaner and satirical.

### 5.2 Mesh Hierarchy

Each rocket exports from Blender as a 6-part GLTF hierarchy:

1. **Body/hull** (static): stubby fuselage with team livery texture
2. **Turret/weapon pod** (rotates on aim): comically undersized cannon on a side pod or pop-out bay
3. **Nose cone** (detachable): pops off on death like a champagne cork
4. **Fins/landing legs** (static): oversized for cartoon readability (grid fins, landing struts, stub wings)
5. **Engine nozzle** (static): emissive material toggles during firing
6. **Escape pod** (detachable): tiny capsule that fires out the top on death, parachute deploys

### 5.3 Mesh Generation

**Decision: Blender Python scripts (bpy).**

- Procedural generation from primitives (cylinders, cones, extrusions, bevels).
- Per-team parameter variants (fat/skinny, tall/short, fin count, nose shape).
- Auto UV unwrap for texture application.
- Export to GLTF/glb.
- Scripts are version-controlled, deterministic, tweakable.

### 5.4 Textures

**Decision: gpt-image-2 generated, UV-mapped onto meshes.**

- Side-view texture of each rocket with livery, generated via gpt-image-2.
- Applied as `map` on a `MeshStandardMaterial`.
- Team-specific: Falcon 9 gets black-and-white with X logo; Starship gets stainless steel; New Shepard gets blue feather; Delta gets white/red; Terran R gets dark metallic with orange.

### 5.5 Team Rocket Assignments

| Team | Rocket(s) | Distinguishing Features |
|---|---|---|
| Elon Musk / SpaceX | Falcon 9, Starship | Black interstage, X logo, grid fins, stainless Starship |
| Jeff Bezos / Blue Origin | New Shepard, New Glenn | Blue feather logo, big crew windows, stubby suborbital shape |
| Richard Branson / Virgin Galactic | Delta-class spaceplane | White/red, stubby wings, carrier-aircraft motif |
| Eric Schmidt / Relativity Space | Terran R | Dark metallic, orange trim, visible 3D-printed layer lines |
| Donald Trump | "Trump Rocket" (Tosser NPC) | Gold-plated, oversized, "TRUMP" in giant letters, questionable aerodynamics |

## 6. Characters

### 6.1 Playable Billionaires

1. **Elon Musk** (SpaceX) - exaggerated angular jaw, narrow eyes, smirking, black SpaceX tee
2. **Jeff Bezos** (Blue Origin) - shiny bald head, intense grin, blue flight suit
3. **Richard Branson** (Virgin Galactic) - wild blonde hair, big toothy grin, white spacesuit
4. **Eric Schmidt** (Relativity Space) - round glasses, stern, boardroom suit with rocket pin

### 6.2 AI / NPC Characters

| Character | AI Class | Role |
|---|---|---|
| Donald Trump | Tosser (AI_TOSSER = 4) | Orange skin, yellow hair, MAGA hat with rocket pin |
| Sam Altman | New AI class | Black turtleneck, sinister smile, OpenAI pin, hands rubbing together |
| Dario Amodei | New AI class | Worried brow, academic glasses, Anthropic hoodie, holding rocket confusedly |

### 6.3 Wives / Ex-Wives (AI Opponents)

| Character | Concept |
|---|---|
| MacKenzie Scott | Warm smile, giant checkbook labeled BILLIONS |
| Justine Musk | Elon's first wife, holding a signed first-edition novel |
| Melania Trump | Stone-cold, designer spacesuit-dress, "I Don't Care Do U" collar |
| Talulah Riley | Bright smile, half-ripped wedding veil, "MARRIED ELON TWICE" sign |
| Grimes | Cyberpunk elf aesthetic, holding a baby named X Æ A-Xii |

### 6.4 Portrait Generation

**Decision: gpt-image-2, flat vector cartoon style, clean bold outlines, Wes Anderson color palette, no background.**

All portraits are 2D caricature busts in a consistent style. Generated via gpt-image-2, used as UI sprites in the weapon shop, standings screen, and taunt bubbles.

## 7. Weapon Shop / Economy

### 7.1 Theming

**Decision: "Burn Rate" - the VC-funded weapons exchange.**

The economy engine (`economy.ts`) is **unchanged**. Every label and UI string is rewritten.

| Original | Moon Version |
|---|---|
| Cash | Runway (months) |
| Interest Rate | Series Premium (A/B/C/D...) |
| Buy Price | Valuation |
| Sell Price | Fire Sale |
| Out of Stock | Regulatory Halt |
| Weapon | Acquisition Target |
| Shop | Cap Table |
| Economy Mode | VC Model (Traditional / Accelerator) |
| Interest Payout | Liquidity Event |
| Starting Cash | Seed Round |
| Sell-back | Down Round / Divestiture |

### 7.2 Weapon Renames

All 48 weapons keep their slot numbers and behaviors. Only display names change.

Selected examples:

| Original | Moon Name |
|---|---|
| Baby Missile | Baby Missile (kept, already funny) |
| Missile | Series A Round |
| MIRV | Portfolio Diversification |
| Death's Head | Hostile Takeover |
| Napalm | Thermal Runway Extension |
| Digger | Market Disruption Drill |
| Roller | Regulatory Rollback |
| Laser | Quantum Arbitrage Beam |
| Plasma | Liquidity Event |
| Nuke | Chapter 11 Restructuring |
| Sandhog | Regulatory Sandbag |
| Dirt Ball | Dilution Event |
| Riot Blast | Shareholder Revolt |
| Hot Napalm | Accelerated Vesting |
| Liquid Dirt | Seed Extension Bridge |

The full 48-weapon rename table is in `WEAPONS_RENAME.md`.

### 7.3 AI Opponent Names in Shop

AI opponents get themed names:
- Angel Investor
- Seed Round
- Series B Bridge
- Down Round
- Toxic Convertible
- Proxy Fight
- Poison Pill
- White Knight

## 8. AI System

### 8.1 Original AI Classes (Preserved)

| Class | ID | Moon Character |
|---|---|---|
| Human | 0 | Local player |
| Moron | 1 | "Seed Round" (randomly picks terrible shots) |
| Shooter | 2 | "Aggressive Growth" (direct-fire specialist) |
| Poolshark | 3 | "Technical Founder" (bank shots, geometry) |
| Tosser | 4 | Donald Trump (forced-target bracket) |
| Chooser | 5 | Sam Altman (weapon optimizer) |
| Spoiler | 6 | Dario Amodei (terrain denial, safety-obsessed) |
| Cyborg | 7 | "Quant Fund" (perfect-aim oracle) |
| Unknown | 8 | "Stealth Mode Startup" (randomly assigned class) |

### 8.2 AI Behavior

AI behavior code (`ai.ts`, `guidance.ts`) is **unchanged**. Only:
- AI class display names change.
- AI tank icons (rocket models) change per character.
- AI taunt pools are rewritten for each character.

## 9. Multiplayer

### 9.1 Protocol

**Decision: Keep the existing lockstep engine. No changes.**

- Host-authoritative lockstep (host fixes seed, config, turn order).
- WebRTC data channels for peer-to-peer.
- Nostr relays for signaling (SDP offer/answer + ICE).
- Deterministic engine: every client re-runs the same simulation, converges on world hash.
- Turn input broadcast: only the active player's input is sent.
- Post-turn world hash exchange for divergence detection.
- Shop: host-authoritative (each player submits cart, host broadcasts inventory snapshot).

### 9.2 Netcode Safety

All existing safeguards preserved:
- Turn input bounds-checked (angle/power/weapon clamped, NaN rejected).
- Chat sanitized (control characters stripped, length-capped, per-peer rate-limited).
- Match-control messages accepted only from host's authenticated data channel.
- Turn timeout = skip turn (lose turn, stay alive).
- Disconnect = retreat (tank removed from round, no kill bonus).

## 10. Audio

### 10.1 Voice Lines

**Decision: ElevenLabs TTS.**

- Generate taunt lines per character using ElevenLabs voice synthesis.
- Each character gets a voice profile matched to their public speaking voice.
- Taunt pools (`talk.ts`) rewritten with billionaire-specific insults.
- Example lines:
  - Musk: "My rocket lands itself. Yours is about to become a crater."
  - Bezos: "I same-day deliver explosions. Prime membership not required."
  - Branson: "I've survived balloon crashes. Your missile is a gentle breeze."
  - Trump: "Nobody fires missiles better than me. My missiles are the best missiles."
  - Altman: "I've already predicted your trajectory. It's not aligned."
  - Amodei: "This seems unsafe. I'm going to write a paper about this."

### 10.2 Sound Effects

Keep the reference engine's Web Audio SFX system (`sound.ts`):
- Fire, explosion, bounce, shield hit, fizzle, battery, turn tone.
- Fly tone (continuous pitch based on projectile height).

### 10.3 Music

TBD. Options:
- Generated via API (Suno, Udio, etc.) or licensed.
- Satirical royalty-free space-themed tracks.
- Muted by default with toggle.

## 11. UI / HUD

### 11.1 In-Game HUD

Overlaid on the 3D scene (HTML/CSS or Three.js sprites):
- Angle and power meters (the classic Scorched Earth control panel).
- Weapon selector (cycling through 48 renamed weapons).
- Wind indicator (arrow + numeric, hidden on Moon when wind=0).
- Active tank info (name, portrait, health, shield status).
- Turn countdown timer.
- Chat overlay (backquote key, as in reference).

### 11.2 Weapon Shop Screen

Full-screen overlay with:
- Each player's portrait and runway (cash).
- Acquisition targets (weapons) in a grid with valuations (prices).
- Cap table (shopping cart).
- Series premium (interest rate) display.
- Liquidity event countdown (time until auto-submit).
- Divestiture (sell-back) controls.

### 11.3 Standings Screen

Between rounds:
- Rankings with portraits, scores, runway remaining.
- Environment transition announcement (e.g., "LAUNCHING TO MOON - NEXT ROUND").
- Rocket animations launching from Earth to Moon to Mars.

## 12. Visual Effects

### 12.1 Explosions

- 2D sprite sheets (generated or hand-authored) on billboard quads.
- Three.js particle system for debris, dirt chunks, smoke.
- Screen shake on large detonations.
- Palette flash (engine-driven, rendered as post-process).

### 12.2 Rocket Death Sequence

1. Nose cone detaches, arcs upward.
2. Engine nozzle sputters flame.
3. Body crumples and tips over.
4. Escape pod fires out the top.
5. Parachute deploys on escape pod.
6. Billionaire portrait appears with satirical death taunt.

### 12.3 Environmental Hazards

| Environment | Hazard | Visual |
|---|---|---|
| Earth | Lightning strikes | Jagged bolt, screen flash |
| Moon | Meteoroid impacts | Small crater bursts, no sound (vacuum) |
| Mars | Dust storms | Orange particle system, reduced visibility |

## 13. Asset Generation Pipeline

### 13.1 Textures and 2D Art

**Tool: OpenAI gpt-image-2**

- Billionaire character portraits (caricature busts)
- Rocket side-view textures for UV mapping
- Terrain tile textures (Earth, Moon, Mars)
- Skybox faces (6 per environment)
- UI elements (weapon cards, shop backgrounds, taunt bubble frames)

### 13.2 3D Models

**Tool: Blender with blender-mcp**

- Procedural rocket meshes via bpy Python scripts
- Per-team mesh variants from parameterized generator
- Export to GLTF/glb for Three.js loading

### 13.3 Audio

**Tool: MagicHour AI Voice Generator (`api.magichour.ai`)**

- 494 voice catalog including Elon Musk, Donald Trump, Jeff Bezos, Sam Altman, Bill Gates, Steve Jobs, Gordon Ramsay, Werner Herzog, Mark Zuckerberg, Joe Rogan, Neil deGrasse Tyson.
- Voice cloning of real people for authentic taunt delivery.
- Categories per character: taunt (firing), kill (celebration), death (scream), shop (purchase), revenge (kill-back), nearmiss (enemy shot missed).
- Text bubbles display alongside voice (both, not voice-only).
- Audio output: WAV, ~300-600KB per line.
- Richard Branson substituted with Gordon Ramsay (British, loud, adventurous). Dario Amodei substituted with Werner Herzog (philosophical, calm). Eric Schmidt substituted with Bill Gates (tech CEO).
- Wives voiced via Taylor Swift (Grimes), Kim Kardashian (Melania), and others from catalog.

### 13.4 Music

**Decision: Title screen and victory screen only. No in-game music.**

- Bombastic satirical orchestral theme (think "Also sprach Zarathustra" on kazoos).
- Generated via Suno/Udio AI music service.
- Launch cutscene sting.
- Muted by default with toggle.

## 14. Resolved Design Decisions

### 14.1 Explosion Effects
- 2D sprite sheets on billboard quads for main fireballs.
- Procedural particle systems for debris, dirt chunks, smoke.
- Screen shake on large detonations.
- Palette flash via post-processing.
- Moon: silent explosions (vacuum). Earth: full sound. Mars: muffled.

### 14.2 Weapon Shop UI
- HTML/CSS overlay on Three.js canvas.
- CSS Grid for weapon grid, flexbox for cart panel.
- Mouse-driven (native buttons, inputs, tooltips).
- Keyboard shortcuts for power users.

### 14.3 Rocket Mesh Detail
- Low-poly flat-shaded cartoon style.
- 200-400 vertices per rocket.
- 8-sided cylinder body, 8-sided cone nose, flat box fins.
- Texture carries detail (logos, panel lines, livery).

### 14.4 Round Count
- 5 rounds total: 2 Earth, 2 Moon, 1 Mars.
- Environment config swap between rounds.
- Shop after each round.
- Mars round = grand finale.

### 14.5 Environment Transition
- 3-5 second rocket-launch cutscene between environments.
- Cartoon rocket arcs from current planet to next.
- Satirical mission patch text overlay.
- Held at ROUND_END phase during cutscene.

### 14.6 Multiplayer
- Keep existing lockstep engine, Nostr-signaled WebRTC.
- Add Metered TURN credentials to netconfig.ts (free tier, 50 GB/month).
- Not required for same-NAT or non-symmetric pairs. Config-only safety net.

### 14.7 Taunt System
- Voice clips (MagicHour) + text bubbles (both, not voice-only).
- Text bubble displays the line, audio plays simultaneously.
- Per-character taunt pools: taunt, kill, death, shop, revenge, nearmiss.

### 14.8 "Scam Altman" Naming
- Applies everywhere: AI name, portrait label, voice line metadata, taunt attribution.

### 14.9 Wives / Ex-Wives
- Playable AI opponents with their own rocket teams.
- Characters: MacKenzie Scott, Melania Trump, Talulah Riley, Grimes, Justine Musk.
- Each has voice lines, portraits (happy/angry), and a rocket.

## 15. Tone and Satire Targets

### 14.1 Rules

- Satirical, not mean-spirited. The humor is in absurdity, not cruelty.
- Cartoon violence (rockets blowing up, escape pods, parachutes). No gore.
- The billionaires are ridiculous, not evil. The game punches up at vanity projects.
- The wives/ex-wives are characters in their own right, not punchlines about being wives.
- Self-aware: the game knows it's a Scorched Earth reskin about the exact thing it satirizes.

### 14.2 Tone References

- Worms series (cartoon artillery, funny death animations)
- Kerbal Space Program (rockets failing spectacularly is funny)
- The Onion / Clickhole (satirical news style for taunt lines)
- Silicon Valley (HBO) for VC/tech industry satire

## 16. What Is NOT Changing

For absolute clarity, these components from scorchedearth-multi are **preserved byte-identical**:

- RNG (MT19937, seed → stream position)
- Physics integrator (forward Euler order, constants, wall bounce, speed clamp)
- Weapon behaviors (all 48 handlers, detonation, digging, rolling, MIRV split)
- Damage system (radial falloff, shield chip, fall damage, direct hit, death throes)
- Terrain (generation, carve, deposit, settle, level_under_tank)
- Economy (demand decay, price step, sell-back multipliers, interest)
- AI (take_turn, guidance oracle, all 7 classes)
- Game loop (round/turn/fire/settle phases)
- Multiplayer protocol (lockstep, host-auth, world hash, shop barrier, turn guard)
- Scoring and rankings

These components are **rewritten**:

- Rendering (Canvas2D → Three.js)
- UI (pygame-like widgets → HTML/CSS or Three.js sprites)
- Audio (SFX preserved, voice lines added)
- Talk/taunts (text pools rewritten)
- Display names (weapons, items, economy terms)
- Character roster (tank sprites → 3D rockets + 2D portraits)

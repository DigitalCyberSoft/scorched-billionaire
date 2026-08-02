/**
 * Taunt bubbles for Scorched Billionaire — speech bubbles over the 3D rockets,
 * styled as a financial-news chyron with the speaker's billionaire portrait.
 *
 * Text originates from the engine's taunt system (src/engine/talk.ts:
 * maybe_attack_taunt / die_taunt / set_speech). The engine parks a bubble on
 * its state as { tank, text, until_frame } — the `sync()` bridge below accepts
 * exactly that shape STRUCTURALLY, so the engine's parked bubbles flow straight
 * into this overlay without importing the engine (which keeps this module's
 * compile footprint small and standalone-testable). Display lifetime is 3 s
 * per the brief (the engine's own TALK_DELAY is a separate clock).
 *
 * Positioning: a projector maps the rocket's world position to screen space
 * each frame; the bubble hangs bottom-center above that point.
 */

/* -------------------------------------------------------------------------- */
/* Structural shapes mirroring src/engine/talk.ts's SpeechBubble/SpeechState  */
/* (kept local so this overlay never imports the engine module graph).        */
/* -------------------------------------------------------------------------- */

export interface TauntSpeechBubble {
  tank: unknown;
  text: string;
  until_frame: number;
}

export interface TauntSpeechState {
  speech?: TauntSpeechBubble | null;
}

export interface TauntWorldPoint {
  x: number;
  y: number;
  z: number;
}

/** Maps a 3D world point to screen pixels; null when behind the camera. */
export type TauntProjector = (p: TauntWorldPoint) => { x: number; y: number } | null;

export interface TauntShowOptions {
  /** rocket's world position; bubble tracks it each frame via the projector */
  world?: TauntWorldPoint;
  /** 2D billionaire portrait URL; defaults to portraitFor(speaker) */
  portraitUrl?: string;
  /** speaker nameplate (tank name) */
  speaker?: string;
  /** overrides the default 3 s lifetime */
  durationMs?: number;
}

/* -------------------------------------------------------------------------- */
/* Portraits — assets/portraits/*.png (CHARACTERS.md roster).                 */
/* -------------------------------------------------------------------------- */

const PORTRAIT_DIR = "/assets/portraits/";

/** File base name per recognizable roster name (CHARACTERS.md). */
const PORTRAIT_ROSTER: ReadonlyArray<readonly [string, string]> = [
  ["darioamodei", "dario_amodei.png"],
  ["dariomodei", "dario_amodei.png"],
  ["donaldtrump", "donald_trump_tosser.png"],
  ["donaldtrumptosser", "donald_trump_tosser.png"],
  ["trump", "donald_trump_tosser.png"],
  ["ericschmidt", "eric_schmidt.png"],
  ["grimes", "grimes.png"],
  ["jeffbezos", "jeff_bezos.png"],
  ["mackenziescott", "mackenzie_scott.png"],
  ["melaniatrump", "melania_trump.png"],
  ["richardbranson", "richard_branson.png"],
  ["samaltman", "sam_altman.png"],
  ["scamaltman", "sam_altman.png"],
  ["altman", "sam_altman.png"],
  ["talulahriley", "talulah_riley.png"],
];

/** All available portrait files, for the deterministic fallback pick. */
const PORTRAIT_POOL: readonly string[] = [
  "dario_amodei.png",
  "donald_trump_tosser.png",
  "eric_schmidt.png",
  "grimes.png",
  "jeff_bezos.png",
  "mackenzie_scott.png",
  "melania_trump.png",
  "richard_branson.png",
  "sam_altman.png",
  "talulah_riley.png",
];

function normalizeName(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]/g, "");
}

/**
 * Resolve a speaker name to a portrait URL. Recognized roster names map to
 * their shipped portrait; anyone else gets a stable, deterministic pick from
 * the pool (same name always yields the same face).
 */
export function portraitFor(name?: string | null): string {
  const norm = normalizeName(name ?? "");
  if (norm) {
    for (const pair of PORTRAIT_ROSTER) {
      if (pair[0] === norm) return PORTRAIT_DIR + pair[1];
    }
    // Deterministic hash -> stable fallback face.
    let h = 0;
    for (let i = 0; i < norm.length; i++) {
      h = (h * 31 + norm.charCodeAt(i)) >>> 0;
    }
    return PORTRAIT_DIR + PORTRAIT_POOL[h % PORTRAIT_POOL.length];
  }
  return PORTRAIT_DIR + PORTRAIT_POOL[0];
}

/* -------------------------------------------------------------------------- */
/* Styling — chyron bubble: LIVE bug, nameplate, quote, portrait, tail.       */
/* -------------------------------------------------------------------------- */

const CSS = `
.sm-taunt {
  position: fixed; inset: 0; z-index: 50;
  pointer-events: none;
  font-family: var(--sm-mono, "Consolas", "Courier New", monospace);
}
.sm-taunt[hidden] { display: none; }
.sm-taunt-anchor {
  position: absolute; left: 0; top: 0;
  transform: translate(-50%, -100%);
  will-change: transform;
}
.sm-taunt-bubble {
  position: relative;
  display: flex; gap: 8px; align-items: center;
  max-width: 320px;
  background: rgba(11, 11, 26, 0.94);
  border: 1px solid rgba(233, 69, 96, 0.55);
  border-left: 3px solid var(--sm-accent, #e94560);
  border-radius: 10px;
  padding: 8px 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.55);
  animation: sm-taunt-in 0.18s ease-out;
}
@keyframes sm-taunt-in { from { opacity: 0; transform: translateY(6px); } }
.sm-taunt-tail {
  position: absolute; left: 50%; bottom: -6px;
  width: 10px; height: 10px;
  transform: translateX(-50%) rotate(45deg);
  background: rgba(11, 11, 26, 0.94);
  border-right: 1px solid rgba(233, 69, 96, 0.55);
  border-bottom: 1px solid rgba(233, 69, 96, 0.55);
  border-radius: 0 0 2px 0;
}
.sm-taunt-portrait {
  width: 40px; height: 40px; flex: none;
  border-radius: 7px;
  border: 1px solid var(--sm-line, rgba(234,234,246,0.2));
  object-fit: cover;
  background: var(--sm-panel, #13132b);
}
.sm-taunt-body { display: flex; flex-direction: column; gap: 3px; min-width: 0; }
.sm-taunt-nameplate {
  display: flex; align-items: center; gap: 6px;
  font-size: 9px; letter-spacing: 1.5px; color: var(--sm-muted, #8d91b5);
  text-transform: uppercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.sm-taunt-live {
  display: inline-flex; align-items: center; gap: 4px;
  color: var(--sm-accent, #e94560); font-weight: 700; letter-spacing: 1px;
  flex: none;
}
.sm-taunt-live i {
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--sm-accent, #e94560);
  animation: sm-taunt-pulse 1s ease-in-out infinite;
}
@keyframes sm-taunt-pulse { 50% { opacity: 0.2; } }
.sm-taunt-text {
  font-size: 12px; line-height: 1.35; color: var(--sm-ink, #eaeaf6);
  word-break: break-word;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
`;

let cssInjected = false;
function ensureCss(): void {
  if (cssInjected) return;
  const style = document.createElement("style");
  style.textContent = CSS;
  document.head.appendChild(style);
  cssInjected = true;
}

function uiLayer(): HTMLElement {
  let layer = document.getElementById("ui-layer");
  if (!layer) {
    layer = document.createElement("div");
    layer.id = "ui-layer";
    document.body.appendChild(layer);
  }
  return layer;
}

const DEFAULT_DURATION_MS = 3000; // spec: auto-dismiss after 3 seconds

export class TauntOverlay {
  private root: HTMLDivElement;
  private anchor: HTMLDivElement;
  private portraitImg: HTMLImageElement;
  private speakerEl: HTMLElement;
  private textEl: HTMLElement;

  private projector: TauntProjector | null;
  private defaultDuration: number;

  private visible = false;
  private _shownAt = 0;
  private _durationMs = DEFAULT_DURATION_MS;
  private _world: TauntWorldPoint | null = null;
  private _raf = 0;

  // Last bubble identity shown via sync() — avoids restarting the 3 s clock
  // every frame while the engine's bubble is parked.
  private _lastTank: unknown = undefined;
  private _lastText = "";
  private _lastUntil = -1;

  constructor(projector?: TauntProjector | null, opts: { durationMs?: number; container?: HTMLElement } = {}) {
    this.projector = projector ?? null;
    this.defaultDuration = opts.durationMs ?? DEFAULT_DURATION_MS;

    ensureCss();
    const host = opts.container ?? uiLayer();
    this.root = document.createElement("div");
    this.root.className = "sm-taunt";
    this.root.hidden = true;
    this.root.innerHTML = `
      <div class="sm-taunt-anchor">
        <div class="sm-taunt-bubble">
          <img class="sm-taunt-portrait" alt="speaker portrait" />
          <div class="sm-taunt-body">
            <div class="sm-taunt-nameplate">
              <span class="sm-taunt-live"><i></i>LIVE</span>
              <span class="sm-taunt-speaker">—</span>
            </div>
            <div class="sm-taunt-text"></div>
          </div>
          <div class="sm-taunt-tail"></div>
        </div>
      </div>`;

    this.anchor = this.root.querySelector(".sm-taunt-anchor") as HTMLDivElement;
    this.portraitImg = this.root.querySelector(
      ".sm-taunt-portrait",
    ) as HTMLImageElement;
    this.speakerEl = this.root.querySelector(
      ".sm-taunt-speaker",
    ) as HTMLElement;
    this.textEl = this.root.querySelector(".sm-taunt-text") as HTMLElement;

    // Never show a broken image placeholder; drop the portrait instead.
    this.portraitImg.addEventListener("error", () => {
      this.portraitImg.style.display = "none";
    });

    host.appendChild(this.root);
  }

  /* ---- public API ---- */
  setProjector(p: TauntProjector | null): void {
    this.projector = p;
  }

  /** Show a bubble for `text`, anchored above `world` (if a projector is set). */
  show(text: string, opts: TauntShowOptions = {}): void {
    const trimmed = (text ?? "").trim();
    if (!trimmed) {
      this.hide();
      return;
    }
    this.textEl.textContent = trimmed;
    this.speakerEl.textContent = opts.speaker ?? "MARKET PARTICIPANT";
    this.portraitImg.style.display = "";
    this.portraitImg.src = opts.portraitUrl ?? portraitFor(opts.speaker);

    this._world = opts.world ?? null;
    this._durationMs = opts.durationMs ?? this.defaultDuration;
    this._shownAt = performance.now();

    if (!this.visible) {
      this.visible = true;
      this.root.hidden = false;
      this._startLoop();
    } else {
      // Re-anchor immediately so a new bubble doesn't hang at the old spot.
      this._position(performance.now());
    }
  }

  /** Bridge from the engine's parked speech bubble (talk.ts shape). */
  sync(
    state: TauntSpeechState,
    worldFor?: (tank: unknown) => TauntWorldPoint | null,
  ): void {
    const sp = state && state.speech ? state.speech : null;
    if (!sp || !sp.text) {
      this._lastTank = undefined;
      this._lastText = "";
      this._lastUntil = -1;
      this.hide();
      return;
    }
    const same =
      sp.tank === this._lastTank &&
      sp.text === this._lastText &&
      sp.until_frame === this._lastUntil;
    if (same) return;
    this._lastTank = sp.tank;
    this._lastText = sp.text;
    this._lastUntil = sp.until_frame;
    this.show(sp.text, {
      world: worldFor ? worldFor(sp.tank) ?? undefined : undefined,
      speaker: speakerName(sp.tank),
    });
  }

  hide(): void {
    if (!this.visible) return;
    this.visible = false;
    this.root.hidden = true;
    this._world = null;
    this._stopLoop();
  }

  setVisible(v: boolean): void {
    if (v) {
      if (!this.visible && this.textEl.textContent) {
        // Re-show the last bubble with a fresh 3 s clock.
        this._shownAt = performance.now();
        this.visible = true;
        this.root.hidden = false;
        this._startLoop();
      }
    } else {
      this.hide();
    }
  }

  get isVisible(): boolean {
    return this.visible;
  }

  destroy(): void {
    this._stopLoop();
    this.root.remove();
  }

  /* ---- internal: animation loop ---- */
  private _startLoop(): void {
    if (this._raf) return;
    this._raf = requestAnimationFrame(this._tick);
  }

  private _stopLoop(): void {
    if (this._raf) {
      cancelAnimationFrame(this._raf);
      this._raf = 0;
    }
  }

  private readonly _tick = (now: number): void => {
    if (!this.visible) {
      this._raf = 0;
      return;
    }
    if (now - this._shownAt >= this._durationMs) {
      this.hide();
      this._raf = 0;
      return;
    }
    this._position(now);
    this._raf = requestAnimationFrame(this._tick);
  };

  /** Reposition the bubble bottom-center above the projected world point. */
  private _position(_now: number): void {
    if (!this._world || !this.projector) return;
    const pos = this.projector(this._world);
    if (!pos) {
      this.hide();
      return;
    }
    const pad = 14;
    const x = clamp(pos.x, pad, window.innerWidth - pad);
    const y = clamp(pos.y, pad, window.innerHeight - pad);
    this.anchor.style.transform = "translate(" + x + "px," + y + "px) translate(-50%, -100%)";
  }
}

function clamp(n: number, lo: number, hi: number): number {
  return n < lo ? lo : n > hi ? hi : n;
}

/** Pull a display name off a duck-typed tank object, if it has one. */
function speakerName(tank: unknown): string | undefined {
  if (tank && typeof tank === "object") {
    const name = (tank as { name?: unknown }).name;
    if (typeof name === "string" && name) return name;
  }
  return undefined;
}

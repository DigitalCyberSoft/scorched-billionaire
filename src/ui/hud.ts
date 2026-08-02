/**
 * In-game HUD overlay for Scorched Billionaire — mounts into #ui-layer.
 *
 * The engine is NOT imported here: the caller (main.ts) maps the engine state
 * into a HudState snapshot each frame (see the interface below). This keeps the
 * overlay decoupled from the round/turn loop and testable in isolation.
 *
 * Panels:
 *   top-left    — active tank nameplate, segmented health bar, shield chip
 *   top-right   — turn countdown timer + selected acquisition target
 *   bottom-left — angle meter (0-180), power gauge (0-1000), wind arrow
 */

import { moonName } from "./shop";

export interface HudTankInfo {
  name: string;
  /** current health, e.g. 72 (max = maxHealth ?? 100) */
  health: number;
  maxHealth?: number;
  alive?: boolean;
  /** current shield HP; 0/absent = no shield */
  shieldHp?: number;
  /** slot index of the equipped shield item (for the moon name) */
  shieldItem?: number;
}

export interface HudState {
  /** barrel angle in degrees, 0..180 */
  angle?: number;
  /** power, 0..1000 */
  power?: number;
  /** signed wind; positive blows toward the right */
  wind?: number;
  /** the tank currently aiming / firing */
  tank?: HudTankInfo | null;
  /** selected weapon slot (0..47) — display name comes from the moon table */
  weaponSlot?: number;
  /** optional explicit display name for the selected weapon */
  weaponName?: string;
  /** seconds left on the turn clock; undefined = no clock */
  timeLeft?: number;
  /** e.g. "YOUR TURN", "AI TURN", phase label */
  turnLabel?: string;
}

const CSS = `
.sm-hud {
  position: fixed; inset: 0; z-index: 30;
  pointer-events: none;
  font-family: var(--sm-mono, "Consolas", "Courier New", monospace);
  color: var(--sm-ink, #eaeaf6);
  user-select: none;
}
.sm-hud[hidden] { display: none; }

/* ---- tank card (top-left) ---- */
.sm-hud-tank {
  position: absolute; top: 14px; left: 14px;
  min-width: 200px;
  background: rgba(11, 11, 26, 0.82);
  border: 1px solid var(--sm-line, rgba(234,234,246,0.1));
  border-radius: 10px;
  padding: 8px 12px 10px;
  backdrop-filter: blur(2px);
}
.sm-hud-tank-name {
  font-size: 14px; font-weight: 700; letter-spacing: 1px;
  color: var(--sm-accent, #e94560);
  text-transform: uppercase;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.sm-hud-hpbar {
  display: flex; gap: 2px; margin-top: 6px; height: 8px;
}
.sm-hud-hpseg {
  flex: 1; border-radius: 1px;
  background: rgba(255, 255, 255, 0.12);
}
.sm-hud-hpseg.sm-hud-hp-on { background: var(--sm-good, #41d9a0); }
.sm-hud-hpseg.sm-hud-hp-mid { background: var(--sm-warn, #ffb454); }
.sm-hud-hpseg.sm-hud-hp-low { background: var(--sm-accent, #e94560); }
.sm-hud-hprow { display: flex; justify-content: space-between; margin-top: 4px; font-size: 10px; color: var(--sm-muted, #8d91b5); letter-spacing: 1px; }
.sm-hud-shield {
  display: none; margin-top: 6px;
  font-size: 10px; letter-spacing: 1px; color: var(--sm-shield, #5aa7ff);
  border: 1px solid rgba(90, 167, 255, 0.4); border-radius: 6px;
  padding: 2px 8px; text-transform: uppercase; width: fit-content;
}
.sm-hud-shield.sm-hud-shield-on { display: inline-block; }
.sm-hud-destroyed {
  display: none; margin-top: 6px;
  font-size: 10px; font-weight: 700; letter-spacing: 2px;
  color: var(--sm-accent, #e94560);
}

/* ---- turn / weapon (top-right) ---- */
.sm-hud-turn {
  position: absolute; top: 14px; right: 14px;
  text-align: right;
  background: rgba(11, 11, 26, 0.82);
  border: 1px solid var(--sm-line, rgba(234,234,246,0.1));
  border-radius: 10px;
  padding: 8px 12px 10px;
  backdrop-filter: blur(2px);
}
.sm-hud-timer {
  font-size: 26px; font-weight: 700; letter-spacing: 1px;
  color: var(--sm-ink, #eaeaf6); line-height: 1.1;
}
.sm-hud-timer.sm-hud-urgent { color: var(--sm-accent, #e94560); animation: sm-hud-blink 0.6s step-end infinite; }
@keyframes sm-hud-blink { 50% { opacity: 0.25; } }
.sm-hud-turnlabel { font-size: 10px; letter-spacing: 2px; color: var(--sm-muted, #8d91b5); text-transform: uppercase; margin-top: 2px; }
.sm-hud-weapon {
  margin-top: 8px; font-size: 11px; letter-spacing: 1px;
  color: var(--sm-warn, #ffb454); text-transform: uppercase;
  border-top: 1px dashed var(--sm-line, rgba(234,234,246,0.14));
  padding-top: 6px; max-width: 260px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}

/* ---- instruments (bottom-left) ---- */
.sm-hud-meters {
  position: absolute; left: 14px; bottom: 14px;
  display: flex; align-items: flex-end; gap: 14px;
  background: rgba(11, 11, 26, 0.82);
  border: 1px solid var(--sm-line, rgba(234,234,246,0.1));
  border-radius: 10px;
  padding: 10px 12px;
  backdrop-filter: blur(2px);
}
.sm-hud-meter { display: flex; flex-direction: column; gap: 4px; }
.sm-hud-meter-label {
  font-size: 9px; letter-spacing: 2px; color: var(--sm-muted, #8d91b5);
  text-transform: uppercase;
}
.sm-hud-meter-track {
  position: relative; height: 10px; width: 190px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid var(--sm-line, rgba(234,234,246,0.14));
  border-radius: 5px; overflow: hidden;
}
.sm-hud-meter-fill {
  position: absolute; inset: 0 auto 0 0; width: 0%;
  background: linear-gradient(90deg, var(--sm-accent, #e94560), var(--sm-warn, #ffb454));
  border-radius: 4px;
  transition: width 0.08s linear;
}
.sm-hud-meter-notch {
  position: absolute; top: 0; bottom: 0; width: 1px;
  background: rgba(255, 255, 255, 0.35);
}
.sm-hud-meter-marker {
  position: absolute; top: -2px; bottom: -2px; width: 2px;
  background: #fff; box-shadow: 0 0 4px rgba(255, 255, 255, 0.8);
  transition: left 0.08s linear;
}
.sm-hud-meter-ticks {
  display: flex; justify-content: space-between;
  font-size: 8px; color: var(--sm-muted, #8d91b5); letter-spacing: 0.5px;
}
.sm-hud-meter-read {
  font-size: 16px; font-weight: 700; text-align: right;
  color: var(--sm-ink, #eaeaf6); line-height: 1;
}

/* ---- power gauge (vertical) ---- */
.sm-hud-gauge { display: flex; flex-direction: column; gap: 4px; align-items: center; }
.sm-hud-gauge-track {
  position: relative; width: 12px; height: 118px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid var(--sm-line, rgba(234,234,246,0.14));
  border-radius: 6px; overflow: hidden;
  background-image: repeating-linear-gradient(
    to top, transparent 0, transparent 27px, rgba(255,255,255,0.16) 27px, rgba(255,255,255,0.16) 28px
  );
}
.sm-hud-gauge-fill {
  position: absolute; left: 0; right: 0; bottom: 0; height: 0%;
  background: linear-gradient(to top, var(--sm-accent, #e94560), var(--sm-warn, #ffb454));
  border-radius: 5px;
  transition: height 0.08s linear;
}
.sm-hud-gauge-read {
  font-size: 13px; font-weight: 700;
  color: var(--sm-ink, #eaeaf6); line-height: 1;
}

/* ---- wind ---- */
.sm-hud-wind { display: flex; flex-direction: column; align-items: center; gap: 2px; }
.sm-hud-wind-arrow { width: 34px; height: 20px; transition: transform 0.25s ease; }
.sm-hud-wind-arrow svg { width: 100%; height: 100%; }
.sm-hud-wind-val { font-size: 16px; font-weight: 700; line-height: 1; }
.sm-hud-wind-unit { font-size: 8px; letter-spacing: 2px; color: var(--sm-muted, #8d91b5); text-transform: uppercase; }
.sm-hud-wind.sm-hud-calm .sm-hud-wind-arrow { opacity: 0.25; }
.sm-hud-wind.sm-hud-calm .sm-hud-wind-val { color: var(--sm-muted, #8d91b5); }

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

function clamp(n: number, lo: number, hi: number): number {
  return n < lo ? lo : n > hi ? hi : n;
}

const WIND_SVG =
  '<svg viewBox="0 0 34 20" aria-hidden="true"><path d="M3 10h24M19 3l8 7-8 7" fill="none" stroke="#e94560" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>';

export class Hud {
  private root: HTMLDivElement;

  private tankNameEl: HTMLElement;
  private tankHpRowEl: HTMLElement;
  private tankHpEl: HTMLElement;
  private tankShieldEl: HTMLElement;
  private tankDeadEl: HTMLElement;
  private hpSegs: HTMLElement[] = [];

  private timerEl: HTMLElement;
  private turnLabelEl: HTMLElement;
  private weaponEl: HTMLElement;

  private angleFillEl: HTMLElement;
  private angleMarkerEl: HTMLElement;
  private angleReadEl: HTMLElement;
  private powerFillEl: HTMLElement;
  private powerReadEl: HTMLElement;
  private windEl: HTMLElement;
  private windArrowEl: HTMLElement;
  private windValEl: HTMLElement;

  private visible = true;

  constructor(container?: HTMLElement) {
    ensureCss();
    const host = container ?? uiLayer();
    this.root = document.createElement("div");
    this.root.className = "sm-hud";
    this.root.innerHTML = `
      <div class="sm-hud-tank">
        <div class="sm-hud-tank-name">—</div>
        <div class="sm-hud-hpbar"></div>
        <div class="sm-hud-hprow"><span>INTEGRITY</span><span class="sm-hud-hp-read">—</span></div>
        <div class="sm-hud-shield"></div>
        <div class="sm-hud-destroyed">DESTROYED — SHARES HALTED</div>
      </div>
      <div class="sm-hud-turn">
        <div class="sm-hud-timer">—</div>
        <div class="sm-hud-turnlabel">TURN</div>
        <div class="sm-hud-weapon">SEL —</div>
      </div>
      <div class="sm-hud-meters">
        <div class="sm-hud-meter sm-hud-angle">
          <div class="sm-hud-meter-label">ANGLE</div>
          <div class="sm-hud-meter-track">
            <div class="sm-hud-meter-fill"></div>
            <div class="sm-hud-meter-notch" style="left:50%"></div>
            <div class="sm-hud-meter-marker"></div>
          </div>
          <div class="sm-hud-meter-ticks"><span>0</span><span>45</span><span>90</span><span>135</span><span>180</span></div>
          <div class="sm-hud-meter-read">—</div>
        </div>
        <div class="sm-hud-gauge sm-hud-power">
          <div class="sm-hud-gauge-track"><div class="sm-hud-gauge-fill"></div></div>
          <div class="sm-hud-gauge-read">—</div>
          <div class="sm-hud-meter-label">POWER</div>
        </div>
        <div class="sm-hud-wind">
          <div class="sm-hud-meter-label">WIND</div>
          <div class="sm-hud-wind-arrow">${WIND_SVG}</div>
          <div class="sm-hud-wind-val">—</div>
          <div class="sm-hud-wind-unit">KNOTS</div>
        </div>
      </div>`;

    this.tankNameEl = this.root.querySelector(".sm-hud-tank-name") as HTMLElement;
    this.tankHpRowEl = this.root.querySelector(".sm-hud-hprow") as HTMLElement;
    this.tankHpEl = this.root.querySelector(".sm-hud-hp-read") as HTMLElement;
    this.tankShieldEl = this.root.querySelector(".sm-hud-shield") as HTMLElement;
    this.tankDeadEl = this.root.querySelector(".sm-hud-destroyed") as HTMLElement;
    this.timerEl = this.root.querySelector(".sm-hud-timer") as HTMLElement;
    this.turnLabelEl = this.root.querySelector(".sm-hud-turnlabel") as HTMLElement;
    this.weaponEl = this.root.querySelector(".sm-hud-weapon") as HTMLElement;
    this.angleFillEl = this.root.querySelector(
      ".sm-hud-angle .sm-hud-meter-fill",
    ) as HTMLElement;
    this.angleMarkerEl = this.root.querySelector(
      ".sm-hud-angle .sm-hud-meter-marker",
    ) as HTMLElement;
    this.angleReadEl = this.root.querySelector(
      ".sm-hud-angle .sm-hud-meter-read",
    ) as HTMLElement;
    this.powerFillEl = this.root.querySelector(
      ".sm-hud-power .sm-hud-gauge-fill",
    ) as HTMLElement;
    this.powerReadEl = this.root.querySelector(
      ".sm-hud-power .sm-hud-gauge-read",
    ) as HTMLElement;
    this.windEl = this.root.querySelector(".sm-hud-wind") as HTMLElement;
    this.windArrowEl = this.root.querySelector(
      ".sm-hud-wind-arrow",
    ) as HTMLElement;
    this.windValEl = this.root.querySelector(
      ".sm-hud-wind-val",
    ) as HTMLElement;

    // Health bar: 10 segments (10 hp each at the 100 default).
    const bar = this.root.querySelector(".sm-hud-hpbar") as HTMLElement;
    for (let i = 0; i < 10; i++) {
      const seg = document.createElement("div");
      seg.className = "sm-hud-hpseg";
      bar.appendChild(seg);
      this.hpSegs.push(seg);
    }

    host.appendChild(this.root);
  }

  /* ---- lifecycle ---- */
  setVisible(v: boolean): void {
    this.visible = v;
    this.root.hidden = !v;
  }

  destroy(): void {
    this.root.remove();
  }

  /* ---- per-frame update ---- */
  update(state: HudState): void {
    this._updateTank(state.tank ?? null);

    // Angle 0..180 -> horizontal fill + marker. The marker is clamped to
    // 99% so it stays visible inside the overflow-hidden track at 180 deg.
    const angle = clamp(state.angle ?? 0, 0, 180);
    const pct = (angle / 180) * 100;
    this.angleFillEl.style.width = pct + "%";
    this.angleMarkerEl.style.left = Math.min(99, pct) + "%";
    this.angleReadEl.textContent =
      state.angle === undefined ? "—" : this._pad3(Math.round(angle)) + " DEG";

    // Power 0..1000 -> vertical fill.
    const power = clamp(state.power ?? 0, 0, 1000);
    this.powerFillEl.style.height = (power / 1000) * 100 + "%";
    this.powerReadEl.textContent =
      state.power === undefined ? "—" : String(Math.round(power));

    // Wind: signed arrow + magnitude.
    const wind = state.wind ?? 0;
    this.windArrowEl.style.transform =
      wind < 0 ? "rotate(180deg)" : wind > 0 ? "rotate(0deg)" : "";
    this.windValEl.textContent =
      state.wind === undefined || wind === 0 ? "CALM" : String(Math.round(Math.abs(wind)));
    this.windEl.classList.toggle("sm-hud-calm", wind === 0);

    // Turn timer + label.
    const t = state.timeLeft;
    if (t === undefined || t === null) {
      this.timerEl.textContent = "—";
      this.timerEl.classList.remove("sm-hud-urgent");
    } else {
      const v = Math.max(0, t);
      this.timerEl.textContent = "T-" + (v < 10 ? "0" : "") + v.toFixed(1) + "s";
      this.timerEl.classList.toggle("sm-hud-urgent", v < 5);
    }
    this.turnLabelEl.textContent = state.turnLabel ?? "TURN";

    // Weapon selector.
    let sel = "—";
    if (state.weaponName) {
      sel = state.weaponName;
    } else if (state.weaponSlot !== undefined && state.weaponSlot !== null) {
      sel = "#" + this._pad2(state.weaponSlot) + " " + moonName(state.weaponSlot);
    }
    this.weaponEl.textContent = "SEL " + sel;
  }

  private _updateTank(tank: HudTankInfo | null): void {
    if (!tank) {
      this.tankNameEl.textContent = "—";
      this.tankHpEl.textContent = "—";
      this.tankShieldEl.classList.remove("sm-hud-shield-on");
      this.tankDeadEl.style.display = "none";
      for (const seg of this.hpSegs) {
        seg.className = "sm-hud-hpseg";
      }
      return;
    }

    this.tankNameEl.textContent = tank.name || "UNKNOWN PARTY";

    const maxHp = tank.maxHealth && tank.maxHealth > 0 ? tank.maxHealth : 100;
    const hp = Math.max(0, Math.min(maxHp, tank.health || 0));
    const pct = hp / maxHp;
    this.tankHpEl.textContent = Math.round(hp) + " / " + Math.round(maxHp);

    // Segment coloring: good above 50%, warn above 25%, low below.
    for (let i = 0; i < this.hpSegs.length; i++) {
      const segFrac = (i + 1) / this.hpSegs.length;
      let cls = "sm-hud-hpseg";
      if (segFrac <= pct) {
        cls += pct > 0.5 ? " sm-hud-hp-on" : pct > 0.25 ? " sm-hud-hp-mid" : " sm-hud-hp-low";
      }
      this.hpSegs[i].className = cls;
    }

    // Shield chip.
    const shieldHp = tank.shieldHp ?? 0;
    if (shieldHp > 0) {
      const shieldName =
        tank.shieldItem !== undefined && tank.shieldItem !== null
          ? moonName(tank.shieldItem)
          : "SHIELD";
      this.tankShieldEl.textContent = "SHLD " + Math.round(shieldHp) + " — " + shieldName;
      this.tankShieldEl.classList.add("sm-hud-shield-on");
    } else {
      this.tankShieldEl.classList.remove("sm-hud-shield-on");
    }

    // Destroyed badge.
    this.tankDeadEl.style.display =
      tank.alive === false ? "block" : "none";
  }

  private _pad3(n: number): string {
    const s = String(n);
    return s.length >= 3 ? s : ("00" + s).slice(-3);
  }

  private _pad2(n: number): string {
    const s = String(n);
    return s.length >= 2 ? s : ("0" + s).slice(-2);
  }
}

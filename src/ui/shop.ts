/**
 * Cap Table — the weapon-shop overlay for Scorched Billionaire.
 *
 * The economy engine (src/engine/economy.ts) is UNCHANGED; every label is
 * rewritten in VC vocabulary per DESIGN.md section 7.1:
 *
 *   cash         -> RUNWAY (months)
 *   buy price    -> VALUATION
 *   sell price   -> FIRE SALE
 *   shop         -> CAP TABLE
 *   weapon       -> ACQUISITION TARGET
 *   interest     -> SERIES PREMIUM (A/B/C/D…)
 *   out of stock -> REGULATORY HALT
 *   economy mode -> VC MODEL (Traditional / Accelerator)
 *
 * Mounts into the #ui-layer div from index.html. Rendering reads live data off
 * the Economy instance and the tank's inventory; the BUY / SELL buttons drive
 * economy.buy() / economy.sell() directly. No engine module is modified.
 */

import { ITEMS, NUM_ITEMS } from "../engine/weapons";
import { Economy, type EconomyTank } from "../engine/economy";
import {
  INVENTORY_CAP,
  SELLBACK_MULT_FREEMARKET,
  SELLBACK_MULT_NORMAL,
} from "../engine/constants";

/* -------------------------------------------------------------------------- */
/* Weapon rename table — verbatim from WEAPONS.md (slot order = ITEMS order).  */
/* Original names stay available as the ALT line on each card.                */
/* -------------------------------------------------------------------------- */

/** Moon-market display names for all 48 slots (source: WEAPONS.md). */
export const MOON_NAMES: readonly string[] = [
  "Baby Missile",                      // 0
  "Series A Round",                    // 1
  "Bridge Round",                      // 2
  "Chapter 11 Restructuring",          // 3
  "Growth Hack",                       // 4
  "Pivot",                             // 5
  "Portfolio Diversification",         // 6
  "Hostile Takeover",                  // 7
  "Thermal Runway Extension",          // 8
  "Accelerated Vesting",               // 9
  "Due Diligence",                     // 10
  "Redacted Filing",                   // 11
  "Regulatory Rollback",               // 12
  "Deregulation Wave",                 // 13
  "Antitrust Repeal",                  // 14
  "Shareholder Revolt",                // 15
  "Proxy Fight",                       // 16
  "Activist Investor",                 // 17
  "Hostile Activist Investor",         // 18
  "Market Disruption (Seed)",          // 19
  "Market Disruption (Series A)",      // 20
  "Market Disruption (Unicorn)",       // 21
  "Regulatory Sandbag (Minor)",        // 22
  "Regulatory Sandbag",                // 23
  "Regulatory Capture",                // 24
  "Dilution Event",                    // 25
  "Down Round",                        // 26
  "Wipeout Round",                     // 27
  "Liquidity Crisis",                  // 28
  "Margin Call",                       // 29
  "Market Correction",                 // 30
  "Liquidity Event",                   // 31
  "Quant Hedge",                       // 32
  "Thermal Runway Detection",          // 33
  "Technical Analysis",                // 34
  "Market Timing",                     // 35
  "Valuation Adjustment",              // 36
  "Passive Index Fund",                // 37
  "Golden Parachute",                  // 38
  "Top-Up Round",                      // 39
  "Magnetic Regulatory Shield",        // 40
  "Standard Insurance Policy",         // 41
  "Force Majeure Clause",              // 42
  "Premium Insurance Policy",          // 43
  "Super PAC",                         // 44
  "Automatic Vesting Schedule",        // 45
  "Expansion Capital",                 // 46
  "Breakup Fee",                       // 47
];

/** Moon-market display name for a slot; falls back to the original name. */
export function moonName(slot: number): string {
  const moon = MOON_NAMES[slot];
  const original = ITEMS[slot] ? ITEMS[slot].name : "";
  return moon !== undefined && moon !== "" ? moon : original;
}

/* -------------------------------------------------------------------------- */
/* Styling — space/VC theme per the brief: dark #0b0b1a, accent #e94560,      */
/* monospace numerals, rounded borders. Signature: a term-sheet header with a */
/* live RUNWAY ticker + burn-rate bar above a grid of acquisition targets.    */
/* -------------------------------------------------------------------------- */

const CSS = `
:root {
  --sm-bg: #0b0b1a;
  --sm-panel: #13132b;
  --sm-panel2: #1a1a38;
  --sm-accent: #e94560;
  --sm-ink: #eaeaf6;
  --sm-muted: #8d91b5;
  --sm-line: rgba(234, 234, 246, 0.1);
  --sm-good: #41d9a0;
  --sm-shield: #5aa7ff;
  --sm-warn: #ffb454;
  --sm-mono: "Consolas", "Courier New", monospace;
}
*:focus-visible { outline: 2px solid var(--sm-accent); outline-offset: 2px; }

.sm-shop {
  position: fixed; inset: 0; z-index: 60;
  display: flex; align-items: center; justify-content: center;
  background: rgba(5, 5, 14, 0.72);
  backdrop-filter: blur(3px);
  font-family: var(--sm-mono);
  color: var(--sm-ink);
}
.sm-shop[hidden] { display: none; }
.sm-shop-panel {
  position: relative;
  width: min(1120px, 94vw); max-height: 88vh;
  display: flex; flex-direction: column;
  background: var(--sm-bg);
  border: 1px solid var(--sm-line);
  border-radius: 14px;
  box-shadow: 0 0 0 1px rgba(233, 69, 96, 0.12), 0 24px 80px rgba(0, 0, 0, 0.6);
  overflow: hidden;
}

/* ---- header: term sheet ---- */
.sm-shop-header {
  display: grid; grid-template-columns: 1fr auto auto;
  gap: 18px; align-items: center;
  padding: 16px 20px 14px;
  border-bottom: 1px solid var(--sm-line);
  background: linear-gradient(180deg, var(--sm-panel2), var(--sm-panel));
}
.sm-shop-eyebrow {
  font-size: 10px; letter-spacing: 3px; color: var(--sm-muted);
  text-transform: uppercase; margin-bottom: 4px;
}
.sm-shop-title {
  font-size: 26px; font-weight: 700; letter-spacing: 2px;
  display: flex; align-items: baseline; gap: 12px;
}
.sm-shop-title .sm-shop-series {
  font-size: 12px; letter-spacing: 3px; color: var(--sm-accent);
  border: 1px solid rgba(233, 69, 96, 0.5); border-radius: 6px;
  padding: 2px 8px; font-weight: 700;
}
.sm-shop-runway { text-align: right; }
.sm-shop-label {
  font-size: 10px; letter-spacing: 3px; color: var(--sm-muted);
  text-transform: uppercase;
}
.sm-shop-cash {
  font-size: 30px; font-weight: 700; color: var(--sm-good);
  text-shadow: 0 0 18px rgba(65, 217, 160, 0.35);
  line-height: 1.1;
}
.sm-shop-burn {
  width: 210px; height: 6px; margin-top: 6px; margin-left: auto;
  border-radius: 3px; background: rgba(255, 255, 255, 0.07);
  overflow: hidden;
}
.sm-shop-burn i {
  display: block; height: 100%; border-radius: 3px;
  background: linear-gradient(90deg, var(--sm-accent), var(--sm-warn));
  transition: width 0.35s ease-out;
}
.sm-shop-terms {
  display: flex; flex-direction: column; gap: 4px; text-align: right;
  font-size: 11px; color: var(--sm-muted); letter-spacing: 1px;
}
.sm-shop-terms b { color: var(--sm-ink); font-weight: 700; }
.sm-shop-close {
  position: absolute; top: 12px; right: 12px;
  background: transparent; color: var(--sm-muted);
  border: 1px solid var(--sm-line); border-radius: 8px;
  font-family: var(--sm-mono); font-size: 11px; letter-spacing: 1px;
  padding: 4px 10px; cursor: pointer; z-index: 2;
}
.sm-shop-close:hover { color: var(--sm-accent); border-color: var(--sm-accent); }

/* ---- cart summary strip ---- */
.sm-shop-cart {
  display: flex; gap: 22px; align-items: center;
  padding: 8px 20px;
  font-size: 11px; letter-spacing: 1px; color: var(--sm-muted);
  background: rgba(233, 69, 96, 0.05);
  border-bottom: 1px solid var(--sm-line);
  text-transform: uppercase;
}
.sm-shop-cart b { color: var(--sm-ink); font-weight: 700; }
.sm-shop-cart .sm-shop-cart-mark { color: var(--sm-accent); }
.sm-shop-cart .sm-shop-cart-divest { color: var(--sm-good); }

/* ---- deal-flow status line ---- */
.sm-shop-status {
  min-height: 22px; padding: 5px 20px 0;
  font-size: 11px; letter-spacing: 1px;
  color: var(--sm-muted); text-transform: uppercase;
}
.sm-shop-status.sm-shop-ok { color: var(--sm-good); }
.sm-shop-status.sm-shop-bad { color: var(--sm-accent); }

/* ---- acquisition grid ---- */
.sm-shop-grid {
  flex: 1; overflow-y: auto; padding: 14px 20px 18px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(232px, 1fr));
  gap: 10px;
  scrollbar-width: thin;
  scrollbar-color: rgba(233, 69, 96, 0.4) transparent;
}
.sm-shop-card {
  display: flex; flex-direction: column; gap: 8px;
  background: var(--sm-panel);
  border: 1px solid var(--sm-line);
  border-radius: 10px;
  padding: 10px 12px;
  transition: border-color 0.15s ease, transform 0.15s ease;
}
.sm-shop-card:hover { border-color: rgba(233, 69, 96, 0.45); transform: translateY(-1px); }
.sm-shop-card.sm-shop-halted { opacity: 0.55; }
.sm-shop-card-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 6px; }
.sm-shop-card-name {
  font-size: 13px; font-weight: 700; letter-spacing: 0.5px; line-height: 1.25;
}
.sm-shop-card-alt {
  font-size: 9px; color: var(--sm-muted); letter-spacing: 0.5px;
  margin-top: 2px; text-transform: uppercase;
}
.sm-shop-card-cat {
  flex: none; font-size: 8px; letter-spacing: 1.5px; color: var(--sm-muted);
  border: 1px solid var(--sm-line); border-radius: 4px;
  padding: 2px 5px; text-transform: uppercase; margin-top: 1px;
}
.sm-shop-card-metrics {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 3px 10px;
}
.sm-shop-card-metrics .m { display: flex; justify-content: space-between; font-size: 10px; }
.sm-shop-card-metrics i {
  font-style: normal; color: var(--sm-muted);
  letter-spacing: 1px; text-transform: uppercase;
}
.sm-shop-card-metrics b { font-weight: 700; color: var(--sm-ink); }
.sm-shop-card-actions { display: flex; gap: 6px; margin-top: auto; }
.sm-shop-btn {
  flex: 1; font-family: var(--sm-mono);
  font-size: 10px; font-weight: 700; letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 6px 0; border-radius: 7px; cursor: pointer;
  border: 1px solid transparent;
  transition: filter 0.15s ease, background 0.15s ease;
}
.sm-shop-btn:disabled { opacity: 0.35; cursor: not-allowed; }
.sm-shop-btn-buy { background: var(--sm-accent); color: #fff; }
.sm-shop-btn-buy:not(:disabled):hover { filter: brightness(1.15); }
.sm-shop-btn-sell {
  background: transparent; color: var(--sm-good);
  border-color: rgba(65, 217, 160, 0.45);
}
.sm-shop-btn-sell:not(:disabled):hover { background: rgba(65, 217, 160, 0.12); }

.sm-shop-foot {
  padding: 8px 20px 12px;
  font-size: 9px; letter-spacing: 1.5px; color: var(--sm-muted);
  text-transform: uppercase; text-align: center;
  border-top: 1px solid var(--sm-line);
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

/** The #ui-layer div (created on demand if absent, e.g. in unit tests). */
export function uiLayer(): HTMLElement {
  let layer = document.getElementById("ui-layer");
  if (!layer) {
    layer = document.createElement("div");
    layer.id = "ui-layer";
    document.body.appendChild(layer);
  }
  return layer;
}

function fmt(n: number): string {
  return "$" + Math.round(n).toLocaleString("en-US");
}

function clamp(n: number, lo: number, hi: number): number {
  return n < lo ? lo : n > hi ? hi : n;
}

/* -------------------------------------------------------------------------- */
/* ShopOverlay                                                                */
/* -------------------------------------------------------------------------- */

export class ShopOverlay {
  readonly economy: Economy;
  readonly tank: EconomyTank;

  private root: HTMLDivElement;
  private cashEl: HTMLElement;
  private burnEl: HTMLElement;
  private seriesEl: HTMLElement;
  private termSeriesEl: HTMLElement;
  private modelEl: HTMLElement;
  private armsEl: HTMLElement;
  private statusEl: HTMLElement;
  private gridEl: HTMLElement;

  private visible = false;
  private _statusTimer = 0;

  private readonly _onKey = (e: KeyboardEvent): void => {
    if (e.key === "Escape" && this.visible) {
      this.close();
    }
  };

  constructor(economy: Economy, tank: EconomyTank, container?: HTMLElement) {
    this.economy = economy;
    this.tank = tank;

    ensureCss();
    const host = container ?? uiLayer();
    this.root = document.createElement("div");
    this.root.className = "sm-shop";
    this.root.hidden = true;
    this.root.setAttribute("role", "dialog");
    this.root.setAttribute("aria-label", "Cap Table weapon shop");
    this.root.innerHTML = `
      <div class="sm-shop-panel">
        <button type="button" class="sm-shop-close" aria-label="Close the Cap Table">ESC &times;</button>
        <div class="sm-shop-header">
          <div>
            <div class="sm-shop-eyebrow">The Mother of All VC Rounds</div>
            <div class="sm-shop-title">CAP TABLE <span class="sm-shop-series"></span></div>
          </div>
          <div class="sm-shop-runway">
            <div class="sm-shop-label">Runway</div>
            <div class="sm-shop-cash">$0</div>
            <div class="sm-shop-burn"><i></i></div>
          </div>
          <div class="sm-shop-terms">
            <div>PREMIUM <b class="sm-shop-term-series">—</b></div>
            <div>VC MODEL <b class="sm-shop-term-model">—</b></div>
            <div>ARMS <b class="sm-shop-term-arms">—</b></div>
          </div>
        </div>
        <div class="sm-shop-cart">CART — <b class="sm-shop-cart-skus">0</b> SKUs &middot; <b class="sm-shop-cart-units">0</b> UNITS &middot; <b class="sm-shop-cart-mark">$0 MARK</b> &middot; <b class="sm-shop-cart-divest">$0 DIVEST</b></div>
        <div class="sm-shop-status" aria-live="polite"></div>
        <div class="sm-shop-grid"></div>
        <div class="sm-shop-foot">48 acquisition targets &middot; valuations marked at series premium &middot; no due diligence &middot; all sales final</div>
      </div>`;

    this.cashEl = this.root.querySelector(".sm-shop-cash") as HTMLElement;
    this.burnEl = this.root.querySelector(".sm-shop-burn i") as HTMLElement;
    this.seriesEl = this.root.querySelector(".sm-shop-series") as HTMLElement;
    this.termSeriesEl = this.root.querySelector(
      ".sm-shop-term-series",
    ) as HTMLElement;
    this.modelEl = this.root.querySelector(".sm-shop-term-model") as HTMLElement;
    this.armsEl = this.root.querySelector(".sm-shop-term-arms") as HTMLElement;
    this.statusEl = this.root.querySelector(".sm-shop-status") as HTMLElement;
    this.gridEl = this.root.querySelector(".sm-shop-grid") as HTMLElement;

    this.root
      .querySelector(".sm-shop-close")!
      .addEventListener("click", () => this.close());
    window.addEventListener("keydown", this._onKey);
    host.appendChild(this.root);
  }

  /* ---- lifecycle ---- */
  toggle(): void {
    if (this.visible) this.close();
    else this.open();
  }

  open(): void {
    if (this.visible) return;
    this.visible = true;
    this.root.hidden = false;
    this.render();
  }

  close(): void {
    if (!this.visible) return;
    this.visible = false;
    this.root.hidden = true;
  }

  get isOpen(): boolean {
    return this.visible;
  }

  destroy(): void {
    window.removeEventListener("keydown", this._onKey);
    this.root.remove();
  }

  /* ---- rendering ---- */
  render(): void {
    const eco = this.economy;
    const tank = this.tank;

    // Runway (cash) + burn-rate bar (relative to the initial round's ceiling).
    const cash = tank.cash || 0;
    this.cashEl.textContent = fmt(cash);
    const ceiling = (tank as { cash_ceiling?: number }).cash_ceiling ?? 0;
    const ref = ceiling > 0 ? ceiling : Math.max(cash * 2, 10000);
    this.burnEl.style.width = clamp((cash / ref) * 100, 0, 100) + "%";

    // Series premium (interest rate) -> lettered series + monthly percent.
    const rate = eco.cfg.INTEREST_RATE || 0;
    this.seriesEl.textContent = this._seriesName(rate);
    this.termSeriesEl.textContent =
      rate > 0 ? (rate * 100).toFixed(1) + "%/MO" : "NONE";

    // VC model + ARMS tier.
    this.modelEl.textContent = eco.cfg.is_on("FREE_MARKET")
      ? "ACCELERATOR"
      : "TRADITIONAL";
    this.armsEl.textContent = "TIER " + eco.cfg.ARMS;

    this._renderCart();
    this._renderGrid();
  }

  /** Map an interest rate to a lettered series: 0.05 -> A, 0.10 -> B, … */
  private _seriesName(rate: number): string {
    if (rate <= 0) return "UNSERIESED";
    const idx = clamp(Math.round(rate / 0.05) - 1, 0, 25);
    return "SERIES " + String.fromCharCode(65 + idx);
  }

  private _renderCart(): void {
    const tank = this.tank;
    let skus = 0;
    let units = 0;
    let mark = 0;
    for (let i = 0; i < NUM_ITEMS; i++) {
      const owned = tank.inventory[i] ?? 0;
      if (owned <= 0) continue;
      skus += 1;
      units += owned;
      mark += this.economy.unit_price(i) * owned;
    }
    const skuEl = this.root.querySelector(".sm-shop-cart-skus") as HTMLElement;
    const unitEl = this.root.querySelector(".sm-shop-cart-units") as HTMLElement;
    const markEl = this.root.querySelector(".sm-shop-cart-mark") as HTMLElement;
    const divestEl = this.root.querySelector(
      ".sm-shop-cart-divest",
    ) as HTMLElement;
    skuEl.textContent = String(skus);
    unitEl.textContent = String(units);
    markEl.textContent = fmt(mark) + " MARK";
    divestEl.textContent = fmt(this._divestValue(mark)) + " DIVEST";
  }

  /** Fire-sale (sell-back) multiple per the active VC model. */
  private _sellbackMult(): number {
    return this.economy.cfg.is_on("FREE_MARKET")
      ? SELLBACK_MULT_FREEMARKET
      : SELLBACK_MULT_NORMAL;
  }

  private _divestValue(mark: number): number {
    return Math.round(mark * this._sellbackMult());
  }

  private _renderGrid(): void {
    const frag = document.createDocumentFragment();
    for (let slot = 0; slot < NUM_ITEMS; slot++) {
      frag.appendChild(this._renderCard(slot));
    }
    this.gridEl.textContent = "";
    this.gridEl.appendChild(frag);
  }

  private _renderCard(slot: number): HTMLElement {
    const item = ITEMS[slot];
    const eco = this.economy;
    const tank = this.tank;
    const owned = tank.inventory[slot] ?? 0;
    const price = eco.price[slot] ?? item.cost;
    const unitPrice = eco.unit_price(slot);
    const bundle = item.bundle || 1;
    const available = eco.available[slot] ?? true;
    const atCap = owned >= INVENTORY_CAP;
    const short = tank.cash < price;

    const card = document.createElement("div");
    card.className = "sm-shop-card" + (available ? "" : " sm-shop-halted");
    card.dataset.slot = String(slot);

    const top = document.createElement("div");
    top.className = "sm-shop-card-top";
    const nameWrap = document.createElement("div");
    const name = document.createElement("div");
    name.className = "sm-shop-card-name";
    name.textContent = moonName(slot);
    name.title = item.name + " — " + item.category;
    const alt = document.createElement("div");
    alt.className = "sm-shop-card-alt";
    alt.textContent = "alt: " + item.name;
    nameWrap.appendChild(name);
    nameWrap.appendChild(alt);
    const cat = document.createElement("div");
    cat.className = "sm-shop-card-cat";
    cat.textContent = item.category;
    top.appendChild(nameWrap);
    top.appendChild(cat);

    const metrics = document.createElement("div");
    metrics.className = "sm-shop-card-metrics";
    metrics.appendChild(this._metric("Valuation", fmt(price), "b"));
    metrics.appendChild(this._metric("Per unit", fmt(unitPrice), "b"));
    metrics.appendChild(this._metric("Bundle", "x" + bundle, "b"));
    metrics.appendChild(this._metric("Position", String(owned), "b"));

    const actions = document.createElement("div");
    actions.className = "sm-shop-card-actions";

    const buy = document.createElement("button");
    buy.type = "button";
    buy.className = "sm-shop-btn sm-shop-btn-buy";
    buy.textContent = available ? "BUY" : "HALTED";
    if (available) {
      buy.title = "Acquire bundle for " + fmt(price);
      buy.addEventListener("click", () => this._buy(slot));
      if (atCap) {
        buy.disabled = true;
        buy.title = "Vault at capacity (" + INVENTORY_CAP + " units)";
      } else if (short) {
        buy.disabled = true;
        buy.title = "Runway short — need " + fmt(price);
      }
    } else {
      buy.disabled = true;
      buy.title =
        "Regulatory Halt — requires ARMS " +
        item.arms +
        " (you hold " +
        eco.cfg.ARMS +
        ")";
    }

    const sell = document.createElement("button");
    sell.type = "button";
    sell.className = "sm-shop-btn sm-shop-btn-sell";
    sell.textContent = "SELL";
    const fireSale = Math.round(unitPrice * this._sellbackMult());
    sell.title = "Divest 1 unit at fire sale approx. " + fmt(fireSale);
    if (owned <= 0) {
      sell.disabled = true;
      sell.title = "No position to divest";
    } else {
      sell.addEventListener("click", () => this._sell(slot));
    }

    actions.appendChild(buy);
    actions.appendChild(sell);
    card.appendChild(top);
    card.appendChild(metrics);
    card.appendChild(actions);
    return card;
  }

  private _metric(label: string, value: string, cls: string): HTMLElement {
    const span = document.createElement("span");
    span.className = "m";
    const i = document.createElement("i");
    i.textContent = label;
    const b = document.createElement("b");
    b.className = cls;
    b.textContent = value;
    span.appendChild(i);
    span.appendChild(b);
    return span;
  }

  /* ---- deal flow ---- */
  private _buy(slot: number): void {
    const item = ITEMS[slot];
    const ok = this.economy.buy(this.tank, slot);
    if (ok) {
      this._status(
        "ACQUIRED x" +
          item.bundle +
          " " +
          moonName(slot) +
          " — runway " +
          fmt(this.economy.price[slot]) +
          " deployed",
        "ok",
      );
    } else {
      const owned = this.tank.inventory[slot] ?? 0;
      let why = "DEAL BLOCKED";
      if (!(this.economy.available[slot] ?? true)) {
        why = "REGULATORY HALT — ARMS " + item.arms + " REQUIRED";
      } else if (owned >= INVENTORY_CAP) {
        why = "VAULT AT CAPACITY (" + INVENTORY_CAP + " UNITS)";
      } else if (this.tank.cash < this.economy.price[slot]) {
        why =
          "RUNWAY SHORT — NEED " +
          fmt(this.economy.price[slot]) +
          ", HOLD " +
          fmt(this.tank.cash);
      }
      this._status(why, "bad");
    }
    this.render();
  }

  private _sell(slot: number): void {
    const offer = this.economy.sell(this.tank, slot, 1);
    if (offer > 0) {
      this._status(
        "DIVESTED 1x " + moonName(slot) + " — +" + fmt(offer) + " runway",
        "ok",
      );
    } else {
      this._status("NOTHING TO DIVEST", "bad");
    }
    this.render();
  }

  private _status(msg: string, tone: "ok" | "bad" | ""): void {
    window.clearTimeout(this._statusTimer);
    this.statusEl.textContent = "> " + msg;
    this.statusEl.className =
      "sm-shop-status" + (tone ? " sm-shop-" + tone : "");
    this._statusTimer = window.setTimeout(() => {
      this.statusEl.textContent = "";
      this.statusEl.className = "sm-shop-status";
    }, 4000);
  }
}

/**
 * Menu screens: title, tank setup, standings, game over.
 * Mount into #ui-layer. Avoid direct engine imports — use plain data.
 */

const uiLayer = document.getElementById("ui-layer")!;

export interface SetupChoice {
  playerName: string;
  tankIcon: number;
}

export interface StandingRow {
  name: string;
  score: number;
  alive: boolean;
  rank: number;
}

// ── Title ────────────────────────────────────────────────────

export function showTitleScreen(onStart: () => void): HTMLElement {
  const el = document.createElement("div");
  el.id = "menu-title";
  el.innerHTML = `
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;
      height:100vh;background:radial-gradient(ellipse at center,#0a0a2e 0%,#000 70%);
      font-family:system-ui,sans-serif;">
      <h1 style="font-size:64px;color:#e94560;letter-spacing:8px;text-shadow:3px 3px 0 #000;margin:0;">
        SCORCHED MOON
      </h1>
      <p style="color:#e08bb0;font-size:22px;margin:8px 0 40px;">
        The Mother of All VC Rounds
      </p>
      <button id="btn-play" style="padding:16px 64px;font-size:24px;background:#e94560;color:#fff;
        border:none;border-radius:8px;cursor:pointer;font-weight:700;letter-spacing:2px;">
        PLAY
      </button>
      <p style="color:#666;margin-top:40px;font-size:13px;">
        A satirical artillery game. No rockets were harmed.
      </p>
    </div>`;
  uiLayer.appendChild(el);
  el.querySelector("#btn-play")!.addEventListener("click", () => { el.remove(); onStart(); });
  return el;
}

// ── Setup ────────────────────────────────────────────────────

export function showTankSetup(onReady: (c: SetupChoice[]) => void): HTMLElement {
  const el = document.createElement("div");
  el.id = "menu-setup";
  const choices: SetupChoice[] = [
    { playerName: "Elon Musk", tankIcon: 0 },
    { playerName: "Jeff Bezos", tankIcon: 1 },
    { playerName: "Richard Branson", tankIcon: 2 },
    { playerName: "Eric Schmidt", tankIcon: 3 },
  ];

  let selected: SetupChoice | null = null;
  const cards = choices.map(c => {
    const card = document.createElement("div");
    card.style.cssText = "padding:20px;background:#12122a;border:2px solid #333;border-radius:10px;cursor:pointer;text-align:center;min-width:150px;transition:border-color .2s";
    card.innerHTML = `<div style="font-size:18px;font-weight:600;">${c.playerName}</div>`;
    card.addEventListener("click", () => {
      document.querySelectorAll("#menu-setup .card").forEach(d => (d as HTMLElement).style.borderColor = "#333");
      card.style.borderColor = "#e94560";
      card.classList.add("card");
      selected = c;
    });
    card.classList.add("card");
    return card;
  });

  el.innerHTML = `
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;
      height:100vh;background:#0b0b1a;color:#eee;font-family:system-ui,sans-serif;">
      <h2 style="color:#e94560;font-size:28px;margin-bottom:24px;">Select Your Billionaire</h2>
      <div id="cards-row" style="display:flex;gap:20px;flex-wrap:wrap;justify-content:center;max-width:800px;"></div>
      <button id="btn-ready" style="margin-top:30px;padding:14px 48px;font-size:20px;background:#2e7d32;color:#fff;
        border:none;border-radius:8px;cursor:pointer;font-weight:700;">READY</button>
    </div>`;

  uiLayer.appendChild(el);
  const row = el.querySelector("#cards-row")!;
  cards.forEach(c => row.appendChild(c));

  el.querySelector("#btn-ready")!.addEventListener("click", () => {
    if (selected) { el.remove(); onReady([selected]); }
  });
  return el;
}

// ── Standings ────────────────────────────────────────────────

export function showStandings(rows: StandingRow[], roundIndex: number, onContinue: () => void): HTMLElement {
  const el = document.createElement("div");
  el.id = "menu-standings";
  const tbody = rows.map((r, i) =>
    `<tr style="${i === 0 ? "color:#ffd700;font-weight:700;" : ""}">
      <td style="padding:8px 16px;">#${r.rank}</td>
      <td style="padding:8px 16px;">${r.name}</td>
      <td style="padding:8px 16px;">${r.score}</td>
      <td style="padding:8px 16px;">${r.alive ? "✓" : "☠"}</td>
    </tr>`
  ).join("");

  el.innerHTML = `
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;
      height:100vh;background:#0b0b1aee;color:#eee;font-family:system-ui,sans-serif;">
      <h2 style="color:#e94560;font-size:28px;margin-bottom:8px;">Round ${roundIndex + 1} Rankings</h2>
      <table style="border-collapse:collapse;font-size:18px;margin:20px 0;">${tbody}</table>
      <button id="btn-continue" style="margin-top:20px;padding:14px 48px;font-size:20px;background:#e94560;color:#fff;
        border:none;border-radius:8px;cursor:pointer;font-weight:700;">CONTINUE</button>
    </div>`;
  uiLayer.appendChild(el);
  el.querySelector("#btn-continue")!.addEventListener("click", () => { el.remove(); onContinue(); });
  return el;
}

// ── Game Over ────────────────────────────────────────────────

export function showGameOver(winnerName: string, score: number, envName: string, onRestart: () => void): HTMLElement {
  const el = document.createElement("div");
  el.id = "menu-gameover";
  el.innerHTML = `
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;
      height:100vh;background:radial-gradient(ellipse at center,#1a0a0a 0%,#000 80%);
      font-family:system-ui,sans-serif;color:#fff;">
      <h1 style="font-size:56px;color:#ffd700;letter-spacing:6px;margin:0;">
        ${envName === "Mars" ? "TOTAL MARTIAN DOMINATION" : "GAME OVER"}
      </h1>
      <h2 style="font-size:32px;color:#e94560;margin:16px 0;">${winnerName} Wins!</h2>
      <p style="color:#aaa;font-size:18px;">Final Score: ${score}</p>
      <p style="color:#888;">Conquered: ${envName}</p>
      <button id="btn-restart" style="margin-top:40px;padding:16px 64px;font-size:22px;background:#e94560;color:#fff;
        border:none;border-radius:8px;cursor:pointer;font-weight:700;">PLAY AGAIN</button>
    </div>`;
  uiLayer.appendChild(el);
  el.querySelector("#btn-restart")!.addEventListener("click", () => { el.remove(); onRestart(); });
  return el;
}

export function clearUI(): void { uiLayer.innerHTML = ""; }

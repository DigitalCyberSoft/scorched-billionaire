/**
 * Dealroom Feed — the chat overlay for Scorched Billionaire.
 *
 * Toggles with the backquote key (`). Messages fade out 4 seconds after they
 * arrive and are then removed from the DOM; the list stays scrollable and
 * capped at a history limit. Incoming messages arrive via push(); outgoing
 * text is handed to the onSend callback (wired to the network layer by the
 * caller) and echoed locally as "YOU".
 *
 * Mounts into #ui-layer. No engine imports — fully self-contained.
 */

export type ChatTone = "system" | "you" | "them" | "warn";

export interface ChatMessage {
  sender: string;
  text: string;
  tone: ChatTone;
  /** ms timestamp of arrival */
  ts: number;
}

export interface ChatOptions {
  /** called when the user submits text; the network layer replies via push() */
  onSend?: (text: string) => void;
  placeholder?: string;
  /** max rows kept in the scrollable history */
  historyLimit?: number;
  /** fade-out delay in ms (spec: 4s) */
  fadeDelay?: number;
}

const CSS = `
.sm-chat-root {
  position: fixed; right: 14px; bottom: 14px; z-index: 40;
  width: 340px; max-height: 300px;
  display: flex; flex-direction: column;
  background: rgba(11, 11, 26, 0.9);
  border: 1px solid var(--sm-line, rgba(234,234,246,0.12));
  border-radius: 10px;
  overflow: hidden;
  font-family: var(--sm-mono, "Consolas", "Courier New", monospace);
  color: var(--sm-ink, #eaeaf6);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
}
.sm-chat-root[hidden] { display: none; }

.sm-chat-head {
  display: flex; align-items: center; justify-content: space-between;
  padding: 6px 10px;
  font-size: 10px; letter-spacing: 2px; color: var(--sm-muted, #8d91b5);
  text-transform: uppercase;
  border-bottom: 1px solid var(--sm-line, rgba(234,234,246,0.1));
  background: rgba(233, 69, 96, 0.06);
}
.sm-chat-head b { color: var(--sm-accent, #e94560); font-weight: 700; letter-spacing: 1px; }

.sm-chat-list {
  flex: 1; overflow-y: auto; padding: 8px 10px;
  font-size: 12px; line-height: 1.45;
  scrollbar-width: thin;
  scrollbar-color: rgba(233, 69, 96, 0.4) transparent;
}
.sm-chat-msg {
  display: flex; gap: 8px; padding: 2px 0;
  opacity: 1;
  animation: sm-chat-out 0.45s ease 4s forwards;
  word-break: break-word;
}
.sm-chat-who {
  flex: none; font-weight: 700; letter-spacing: 0.5px;
  text-transform: uppercase;
}
.sm-chat-tone-system .sm-chat-who { color: var(--sm-accent, #e94560); }
.sm-chat-tone-you .sm-chat-who { color: var(--sm-good, #41d9a0); }
.sm-chat-tone-them .sm-chat-who { color: var(--sm-shield, #5aa7ff); }
.sm-chat-tone-warn .sm-chat-who { color: var(--sm-warn, #ffb454); }
.sm-chat-tone-system .sm-chat-txt { color: var(--sm-muted, #8d91b5); font-style: italic; }
.sm-chat-txt { color: var(--sm-ink, #eaeaf6); }
@keyframes sm-chat-out { to { opacity: 0; } }

.sm-chat-inputrow {
  display: flex; gap: 6px; padding: 6px 8px;
  border-top: 1px solid var(--sm-line, rgba(234,234,246,0.1));
}
.sm-chat-input {
  flex: 1; min-width: 0;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--sm-line, rgba(234,234,246,0.16));
  border-radius: 6px;
  padding: 5px 8px;
  font-family: var(--sm-mono, "Consolas", "Courier New", monospace);
  font-size: 12px; color: var(--sm-ink, #eaeaf6);
}
.sm-chat-input:focus { outline: 1px solid var(--sm-accent, #e94560); }
.sm-chat-send {
  background: var(--sm-accent, #e94560); color: #fff;
  border: none; border-radius: 6px; cursor: pointer;
  font-family: var(--sm-mono, "Consolas", "Courier New", monospace);
  font-size: 10px; font-weight: 700; letter-spacing: 1px; padding: 0 10px;
}
.sm-chat-send:hover { filter: brightness(1.15); }

/* collapsed tab while hidden */
.sm-chat-tab {
  position: fixed; right: 14px; bottom: 14px; z-index: 40;
  background: rgba(11, 11, 26, 0.85);
  border: 1px solid var(--sm-line, rgba(234,234,246,0.14));
  border-radius: 8px;
  padding: 6px 12px;
  font-family: var(--sm-mono, "Consolas", "Courier New", monospace);
  font-size: 10px; letter-spacing: 2px; color: var(--sm-muted, #8d91b5);
  cursor: pointer; text-transform: uppercase;
}
.sm-chat-tab:hover { color: var(--sm-accent, #e94560); border-color: var(--sm-accent, #e94560); }
.sm-chat-tab[hidden] { display: none; }

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

export class ChatOverlay {
  private root: HTMLDivElement;
  private tab: HTMLButtonElement;
  private list: HTMLElement;
  private input: HTMLInputElement;
  private sendBtn: HTMLButtonElement;

  private readonly onSend?: (text: string) => void;
  private readonly historyLimit: number;
  private readonly fadeDelay: number;

  private visible = false;
  private rows = 0;

  private readonly _onKey = (e: KeyboardEvent): void => {
    const key = e.key;
    const isBackquote = key === "`" || e.code === "Backquote";
    if (isBackquote) {
      e.preventDefault();
      this.toggle();
      return;
    }
    if (key === "Escape" && this.visible) {
      this.close();
    }
  };

  constructor(opts: ChatOptions = {}, container?: HTMLElement) {
    this.onSend = opts.onSend;
    this.historyLimit = opts.historyLimit ?? 200;
    this.fadeDelay = opts.fadeDelay ?? 4000;

    ensureCss();
    const host = container ?? uiLayer();

    this.root = document.createElement("div");
    this.root.className = "sm-chat-root";
    this.root.hidden = true;
    this.root.setAttribute("role", "log");
    this.root.setAttribute("aria-label", "Dealroom chat");
    this.root.innerHTML = `
      <div class="sm-chat-head"><b>DEALROOM FEED</b><span>press \` to toggle</span></div>
      <div class="sm-chat-list"></div>
      <div class="sm-chat-inputrow">
        <input class="sm-chat-input" type="text" maxlength="200"
               placeholder="${opts.placeholder ?? "Type a term sheet... (Enter to send)"}" />
        <button type="button" class="sm-chat-send">SEND</button>
      </div>`;

    this.list = this.root.querySelector(".sm-chat-list") as HTMLElement;
    this.input = this.root.querySelector(".sm-chat-input") as HTMLInputElement;
    this.sendBtn = this.root.querySelector(".sm-chat-send") as HTMLButtonElement;

    this.tab = document.createElement("button");
    this.tab.type = "button";
    this.tab.className = "sm-chat-tab";
    this.tab.textContent = "COMMS — press `";
    this.tab.addEventListener("click", () => this.open());

    const submit = (): void => {
      const text = this.input.value.trim();
      if (!text) return;
      this.input.value = "";
      this.push("You", text, "you");
      if (this.onSend) this.onSend(text);
      else this.push("Feed", "no uplink — message dropped", "warn");
    };
    this.input.addEventListener("keydown", (e) => {
      e.stopPropagation();
      if (e.key === "Enter") submit();
    });
    this.sendBtn.addEventListener("click", submit);

    window.addEventListener("keydown", this._onKey);
    host.appendChild(this.tab);
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
    this.tab.hidden = true;
    this.input.focus();
  }

  close(): void {
    if (!this.visible) return;
    this.visible = false;
    this.root.hidden = true;
    this.tab.hidden = false;
    this.input.blur();
  }

  get isOpen(): boolean {
    return this.visible;
  }

  /** Convenience: an accent-colored server line. */
  system(text: string): void {
    this.push("Feed", text, "system");
  }

  /** Append a message; it fades out after fadeDelay ms and is removed. */
  push(sender: string, text: string, tone: ChatTone = "them"): void {
    const row = document.createElement("div");
    row.className = "sm-chat-msg sm-chat-tone-" + tone;
    const who = document.createElement("span");
    who.className = "sm-chat-who";
    who.textContent = sender + ":";
    const txt = document.createElement("span");
    txt.className = "sm-chat-txt";
    txt.textContent = text;
    row.appendChild(who);
    row.appendChild(txt);
    this.list.appendChild(row);
    this.rows += 1;

    // Auto-scroll when near the bottom.
    const nearBottom =
      this.list.scrollHeight - this.list.scrollTop - this.list.clientHeight <
      40;
    if (nearBottom) {
      this.list.scrollTop = this.list.scrollHeight;
    }

    // Fade + remove (spec: fade after 4 s). Removal happens after the fade.
    const delay = this.fadeDelay;
    window.setTimeout(() => {
      row.style.opacity = "0";
      row.style.transition = "opacity 0.45s ease";
    }, delay);
    window.setTimeout(() => {
      row.remove();
      this.rows -= 1;
    }, delay + 500);

    // History cap: hard-drop oldest rows once the cap is exceeded.
    while (this.rows > this.historyLimit && this.list.firstChild) {
      this.list.firstChild.remove();
      this.rows -= 1;
    }
  }

  /** All currently rendered messages (for tests / external views). */
  history(): ChatMessage[] {
    const out: ChatMessage[] = [];
    const nodes = this.list.children;
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i] as HTMLElement;
      const who = node.querySelector(".sm-chat-who");
      const txt = node.querySelector(".sm-chat-txt");
      out.push({
        sender: who ? who.textContent ?? "" : "",
        text: txt ? txt.textContent ?? "" : "",
        tone: node.classList.contains("sm-chat-tone-system")
          ? "system"
          : node.classList.contains("sm-chat-tone-you")
            ? "you"
            : node.classList.contains("sm-chat-tone-warn")
              ? "warn"
              : "them",
        ts: 0,
      });
    }
    return out;
  }

  clear(): void {
    this.list.textContent = "";
    this.rows = 0;
  }

  destroy(): void {
    window.removeEventListener("keydown", this._onKey);
    this.tab.remove();
    this.root.remove();
  }
}

import puppeteer from "puppeteer";
const bA = await puppeteer.launch({ headless: true, args: ["--no-sandbox"], protocolTimeout: 90000 });
const bB = await puppeteer.launch({ headless: true, args: ["--no-sandbox"], protocolTimeout: 90000 });
const host = await bA.newPage();
const guest = await bB.newPage();
const URL = "http://localhost:4173/?relays=ws://127.0.0.1:4748";

await host.goto(URL, { waitUntil: "networkidle2", timeout: 60000 });
await host.click("#btn-online"); await host.waitForSelector("#lobby", { timeout: 10000 });
await host.type("#lobby-name", "Host"); await host.click("#btn-host");
await host.waitForFunction(() => (document.querySelector("#lobby-invite")?.textContent || "").includes("Invite code"), { timeout: 30000 });
const code = (await host.$eval("#lobby-invite", el => el.textContent)).match(/Invite code:\s*(\S+)/)[1];

await guest.goto(URL, { waitUntil: "networkidle2", timeout: 60000 });
await guest.click("#btn-online"); await guest.waitForSelector("#lobby", { timeout: 10000 });
await guest.type("#lobby-name", "Guest"); await guest.type("#lobby-code", code); await guest.click("#btn-join");
await guest.waitForFunction(() => (document.querySelector("#lobby-status")?.textContent || "").includes("Joined"), { timeout: 30000 });

const rosterOk = await host.waitForFunction(() => {
  const t = document.querySelector("#lobby-roster")?.textContent || "";
  return t.includes("Guest") && (t.match(/CONNECTED/g) || []).length >= 2;
}, { timeout: 60000 }).then(() => true).catch(() => false);
console.log("ROSTER CONVERGED: " + rosterOk + " -> " + (await host.$eval("#lobby-roster", el => el.textContent)).replace(/\s+/g, " "));

await host.click("#btn-start");
const hStarted = await host.waitForSelector(".sm-hud-tank-name", { timeout: 30000 }).then(() => true).catch(() => false);
const gStarted = await guest.waitForSelector(".sm-hud-tank-name", { timeout: 60000 }).then(() => true).catch(() => false);
console.log("STARTED: host=" + hStarted + " guest=" + gStarted);

const fire = async (pg) => { for (let i = 0; i < 120; i++) { try { if (await pg.evaluate(() => /your turn/i.test(document.querySelector(".sm-hud-turnlabel")?.textContent || ""))) { await pg.keyboard.press("Space"); await new Promise(r => setTimeout(r, 700)); } } catch (e) {} await new Promise(r => setTimeout(r, 400)); } };
const fh = fire(host); const fg = fire(guest);
await new Promise(r => setTimeout(r, 55000));
const hash = async (pg) => pg.evaluate(() => { const s = window.__mpSession; return s && s.adapter && s.adapter.worldHash ? s.adapter.worldHash() : null; });
const hh = await hash(host), gh = await hash(guest);
console.log("host hash: " + hh);
console.log("guest hash: " + gh);
console.log("CONVERGED: " + (hh !== null && hh === gh));
await bA.close(); await bB.close();
process.exit(0);

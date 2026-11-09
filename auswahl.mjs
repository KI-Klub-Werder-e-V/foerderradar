// Förderradar: Programme nach Region und kommender Frist vorfiltern.
// Wird vom Claude-Plugin (als Kommandozeile) und von foerderradar-web (als Modul) genutzt.
import { readFileSync } from "node:fs";

export const daten = JSON.parse(readFileSync(new URL("./data/programme.json", import.meta.url), "utf8"));
export const programme = daten.programme;

const OST = new Set(["BB", "BE", "MV", "SN", "ST", "TH"]);
export const BUNDESLAENDER = ["BW", "BY", "BE", "BB", "HB", "HH", "HE", "MV", "NI", "NW", "RP", "SL", "SN", "ST", "SH", "TH"];

/** Nächste Frist ab heute (ISO-Datum), "laufend" oder null, wenn keine kommende Frist bekannt ist. */
export function naechsteFrist(p, heute = new Date().toISOString().slice(0, 10)) {
  const kommend = p.fristen.find((f) => f >= heute);
  return kommend ?? (p.laufend ? "laufend" : null);
}

/** Gilt das Programm für eine Organisation in diesem Bundesland und Kreis? */
export function passtRegion(p, land, kreis = "") {
  if (p.region === "DE") return true;
  if (p.region === "OST") return OST.has(land);
  if (p.region === "BB") return land === "BB";
  // shortcut: BB-PM heißt Werder (Havel), Potsdam und Umgebung; feinere Kreise erst, wenn Daten anderer Kreise dazukommen.
  if (p.region === "BB-PM") return land === "BB" && /potsdam|werder|mittelmark/i.test(kreis);
  return false;
}

/** Programme mit kommender Frist (oder laufend) in der Region, früheste Frist zuerst, laufende am Ende. */
export function kandidaten({ land, kreis = "", heute } = {}, liste = programme) {
  return liste
    .filter((p) => passtRegion(p, land, kreis))
    .map((p) => ({ ...p, naechste_frist: naechsteFrist(p, heute) }))
    .filter((p) => p.naechste_frist)
    .sort((a, b) => (a.naechste_frist === "laufend") - (b.naechste_frist === "laufend") || a.naechste_frist.localeCompare(b.naechste_frist));
}

// Kommandozeile: node auswahl.mjs --land BB [--kreis "Potsdam-Mittelmark"] [--json]
if (import.meta.url === `file://${process.argv[1]}`) {
  const arg = (n) => { const i = process.argv.indexOf(`--${n}`); return i > 0 ? process.argv[i + 1] : undefined; };
  const land = arg("land")?.toUpperCase();
  if (!BUNDESLAENDER.includes(land)) {
    console.error(`Aufruf: node auswahl.mjs --land <${BUNDESLAENDER.join("|")}> [--kreis <Name>] [--json]`);
    process.exit(2);
  }
  const k = kandidaten({ land, kreis: arg("kreis") });
  if (process.argv.includes("--json")) console.log(JSON.stringify(k, null, 1));
  else {
    console.log(`Datenstand ${daten.stand} · ${k.length} Programme mit kommender oder laufender Frist\n`);
    for (const p of k) console.log(`${p.naechste_frist.padEnd(10)}  ${p.id}  |  ${p.programm}  |  ${p.themen}`);
  }
}

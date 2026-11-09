import { test } from "node:test";
import assert from "node:assert/strict";
import { programme, naechsteFrist, passtRegion, kandidaten } from "./auswahl.mjs";

test("Datensatz: Pflichtfelder, eindeutige IDs, gültige Daten", () => {
  const ids = new Set();
  for (const p of programme) {
    assert.match(p.id, /^[a-z0-9-]+$/, p.id);
    assert.ok(!ids.has(p.id), `doppelte id ${p.id}`);
    ids.add(p.id);
    for (const k of ["programm", "geldgeber", "ebene", "themen", "url", "stand"]) assert.ok(p[k], `${p.id}: ${k} fehlt`);
    assert.ok(["DE", "OST", "BB", "BB-PM"].includes(p.region), `${p.id}: region ${p.region}`);
    assert.match(p.url, /^https?:\/\//, p.id);
    for (const f of p.fristen) assert.ok(!Number.isNaN(Date.parse(f)) && /^\d{4}-\d{2}-\d{2}$/.test(f), `${p.id}: frist ${f}`);
    assert.deepEqual(p.fristen, [...p.fristen].sort(), `${p.id}: fristen unsortiert`);
    // Der Datensatz beschreibt Programme, nicht die Lage eines bestimmten Vereins oder den Stand einer Recherche.
    const text = JSON.stringify({ ...p, programm: "", geldgeber: "", url: "" });
    assert.doesNotMatch(text, /KI.Klub|Vereinskasse|\bKasse\b|\bwir\b|\buns\b|\bunser|Vorstandsmitglied|Vereinssitz|Meetup|gegründet 20\d\d|darstellbar|KKW|Recherche/i, `${p.id}: vereinsspezifischer Text`);
    assert.doesNotMatch(text, /\b(?:un)?(?:bestätigt|verifiziert)\b|KORRIGIERT|wörtlich/i, `${p.id}: Recherche-Notiz`);
    if (p.region !== "BB-PM") assert.doesNotMatch(text, /Werder|14542/, `${p.id}: Ortsbezug außerhalb der Region`);
  }
});

test("naechsteFrist: erste kommende, sonst laufend, sonst null", () => {
  const p = { fristen: ["2026-01-01", "2026-12-01"], laufend: false };
  assert.equal(naechsteFrist(p, "2026-06-01"), "2026-12-01");
  assert.equal(naechsteFrist(p, "2026-12-01"), "2026-12-01");
  assert.equal(naechsteFrist(p, "2027-01-01"), null);
  assert.equal(naechsteFrist({ ...p, laufend: true }, "2027-01-01"), "laufend");
});

test("passtRegion", () => {
  assert.ok(passtRegion({ region: "DE" }, "BY"));
  assert.ok(passtRegion({ region: "OST" }, "SN"));
  assert.ok(!passtRegion({ region: "OST" }, "BY"));
  assert.ok(!passtRegion({ region: "BB" }, "BE"));
  assert.ok(passtRegion({ region: "BB-PM" }, "BB", "Landkreis Potsdam-Mittelmark"));
  assert.ok(!passtRegion({ region: "BB-PM" }, "BB", "Uckermark"));
});

test("kandidaten: sortiert, laufende zuletzt, keine Brandenburger Programme in Bayern", () => {
  const k = kandidaten({ land: "BY", heute: "2026-11-09" });
  assert.ok(k.length > 0);
  assert.ok(k.every((p) => p.region === "DE"));
  const termine = k.filter((p) => p.naechste_frist !== "laufend").map((p) => p.naechste_frist);
  assert.deepEqual(termine, [...termine].sort());
  assert.equal(k.findIndex((p) => p.naechste_frist === "laufend"), termine.length);
});

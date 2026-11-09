# Schritt 2: Passende Programme finden

Voraussetzung: `foerderung/profil.md`. Fehlt es, mach zuerst Schritt 1.

## 1. Vorfiltern aus dem Datensatz

```bash
node "${CLAUDE_PLUGIN_ROOT}/auswahl.mjs" --land <Kürzel> --kreis "<Kreis>" --json
```

Das liefert alle Programme der Region mit kommender oder laufender Frist. Bewerte jedes gegen das Profil:

| Passung | Bedeutung |
|---|---|
| 5 | Thema, Zielgruppe und Antragsberechtigung passen, keine Hürde |
| 4 | passt, eine lösbare Hürde (z. B. Eigenanteil, Kooperationspartner) |
| 3 | passt teilweise, Vorhaben müsste angepasst werden |
| 1–2 | weglassen |

Hürden aus `eigenanteil`, `vorfinanzierung`, `mindest_bestandsdauer` und `voraussetzungen` gegen das Profil halten.

## 2. Live ergänzen

Der Datensatz kommt aus einer Recherche in Brandenburg und ist nicht vollständig. Suche zusätzlich im Web, je 2–3 Anfragen:

- Landesprogramme: „Förderung Vereine <Bundesland> <Thema> <Jahr>“, Lottomittel des Landes, Landesehrenamtsportal
- Kreis und Kommune: „<Kreis> Förderrichtlinie Vereine“, „<Stadt> Vereinsförderung“
- Regionale Sparkasse, Volksbank, Bürgerstiftung, Stadtwerke
- Bundesweit zum Thema: „<Thema> Förderprogramm Ausschreibung <Jahr>“; ergänzend die Förderdatenbank des Bundes (foerderdatenbank.de)

Nimm nur Funde auf, deren Seite du geöffnet hast, und markiere sie als „neu, nicht im Datensatz“.

## 3. Fristen prüfen

Für jedes Programm mit Passung ≥ 4: offizielle Seite öffnen, Frist und Summe abgleichen. Abweichungen notieren.

## Vorlage `foerderung/shortlist.md`

```markdown
# Förder-Shortlist: <Name>
Stand: <Datum> · Datensatz vom <stand> · Region <Kürzel>, <Kreis>

| Frist | Programm | Summe | Passung | Warum | Hürde | Link | geprüft |
|---|---|---|---|---|---|---|---|
| 2026-12-31 | … | bis 5.000 € | 5 | … | Eigenanteil 10 % | [Ausschreibung](…) | ✓ 09.11.2026 |

## Empfehlung
Die 1–3 Programme, mit denen du anfangen würdest, und warum. Frist nah und Aufwand niedrig zuerst.

## Laufend (ohne Stichtag)
## Neu gefunden, nicht im Datensatz
```

Biete danach an: „Soll ich <Programm> genauer prüfen?“ (Schritt 3). Bitte darum, neue Funde als Issue an das Repo zu melden.

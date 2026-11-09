# foerderradar

Claude-Plugin plus offener Datensatz. Die Website `foerderradar-web` installiert dieses Repo als npm-Abhängigkeit (`auswahl.mjs`, `data/programme.json`). Eine Änderung an Feldnamen oder an `kandidaten()` bricht die Website: dort Abhängigkeit aktualisieren und testen.

- Tests: `npm test` (Node ≥ 20, keine Abhängigkeiten).
- Datensatz-Regeln: `data/README.md`. Keine vereinsspezifischen Bewertungen in die Daten, der Test prüft das.
- Texte für Nutzer: Deutsch, Du-Form, Alltagssprache. README zuerst auf Deutsch, `README.en.md` kurz halten.
- Plugin-Inhalt: `skills/foerderradar/` (Ablauf) und `commands/` (dünne Einstiege). Version in `.claude-plugin/plugin.json` und `package.json` gemeinsam erhöhen.

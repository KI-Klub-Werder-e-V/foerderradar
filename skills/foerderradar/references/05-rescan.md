# Datensatz pflegen (für Mitwirkende)

Nur im Klon dieses Repos ausführen, nicht im Ordner eines Vereins.

1. Einträge mit dem ältesten `stand` zuerst. Pro Eintrag die `url` öffnen.
2. Abgleichen: läuft das Programm noch, stimmen `fristen`, `laufend`, `summe`, `eigenanteil`, `voraussetzungen`? Fristen als ISO-Datum, sortiert. Vergangene Fristen dürfen stehen bleiben, `auswahl.mjs` blendet sie aus.
3. Programm eingestellt: Eintrag löschen. Link umgezogen: `url` ändern.
4. `stand` auf das heutige Datum setzen, nur bei geprüften Einträgen.
5. Neue Programme: alle Pflichtfelder (siehe `data/README.md`), `id` klein mit Bindestrichen, `region` nach den Regeln dort. Keine vereinsspezifischen Bewertungen: der Datensatz beschreibt das Programm, nicht die Passung.
6. `npm test` muss grün sein.
7. Branch, Commit „daten: <was>“, Pull Request mit Liste der geänderten Einträge und Quellen.

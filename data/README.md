# Datensatz Förderprogramme

`programme.json`: Förderprogramme für gemeinnützige Organisationen in Deutschland. Lizenz [CC BY 4.0](LICENSE), Namensnennung „KI Klub Werder e.V., Förderradar“.

## Herkunft und Grenzen

- Aus der Fördermittel-Recherche des KI Klub Werder e.V. (Erstrecherche August 2026, 210 Programme geprüft). Übernommen wurden nur Einträge, deren Angaben an der Quelle bestätigt oder korrigiert wurden. Eingestellte, nicht belegte und nur für den KI Klub unpassende Programme fehlen.
- Die Recherche kam aus einem Bildungs- und Digitalverein in Brandenburg. Themen wie Bildung, Digitales, Engagement und Jugend sind deshalb stärker vertreten als Sport, Pflege oder Umwelt. Landesprogramme gibt es bisher nur für Brandenburg.
- Die Region wurde beim Import aus Programm- und Geldgebernamen abgeleitet. Fehler bitte melden.

## Felder

| Feld | Typ | Bedeutung |
|---|---|---|
| `id` | string | eindeutig, klein, mit Bindestrichen |
| `programm` | string | Name des Programms |
| `geldgeber` | string | Wer fördert |
| `ebene` | string | Bund, Land, EU, Kommune, Kreis, Stiftung, Lotterie, Unternehmen, Preis, Crowdfunding, NonCash |
| `region` | string | `DE` bundesweit · `OST` ostdeutsche Länder und Berlin · `BB` Brandenburg · `BB-PM` Potsdam, Potsdam-Mittelmark, Werder (Havel) |
| `foerderart` | string | Zuschuss, Preis, Sachleistung … |
| `themen` | string | Förderthemen |
| `voraussetzungen` | string \| null | Wer antragsberechtigt ist |
| `summe` | string \| null | Höhe, Spanne, Quote |
| `eigenanteil` | string \| null | |
| `vorfinanzierung` | string \| null | Vorschuss oder Erstattung |
| `mindest_bestandsdauer` | string \| null | Mindestalter der Organisation |
| `aufwand` | string | niedrig, mittel, hoch |
| `frist` | string | Fristangabe als Text, wie an der Quelle |
| `fristen` | string[] | alle Daten aus `frist` als ISO-Datum, sortiert; vergangene bleiben stehen |
| `laufend` | boolean | Antrag jederzeit möglich |
| `hinweise` | string[] | Warnungen, z. B. „Frist < 90 Tage“ |
| `url` | string | offizielle Programmseite |
| `stand` | ISO-Datum | wann der Eintrag zuletzt an der Quelle geprüft wurde |

Prüfung: `npm test` (Pflichtfelder, eindeutige IDs, gültige Daten, kein vereinsspezifischer Text).

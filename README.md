# Förderradar: Fördermittel für Vereine finden und Anträge vorbereiten

Deutsch · [English](README.en.md)

**Förderradar ist ein kostenloses Open-Source-Werkzeug, mit dem gemeinnützige Vereine und Initiativen in Deutschland passende Förderprogramme mit kommender Frist finden und ihren Förderantrag bis zur Lückenanalyse der Unterlagen vorbereiten.** Es besteht aus einem Plugin für Claude (Claude Code und Cowork) und einem offenen Datensatz von 155 geprüften Förderprogrammen von Bund, Ländern, EU, Stiftungen, Lotterien und Unternehmen. Entwickelt wird es ehrenamtlich vom [KI Klub Werder e.V.](https://ki-klub-werder.de), einem gemeinnützigen Verein in Werder (Havel), Brandenburg.

> **Nur suchen, ohne Installation:** [ki-klub-werder.de/foerderradar](https://ki-klub-werder.de/foerderradar). Website-Adresse eingeben, passende Programme mit Frist und Antragslink bekommen. Für Prüfung, Unterlagen und Lückenanalyse ist dieses Plugin da.

## Auf einen Blick

| | |
|---|---|
| **Für wen** | Eingetragene Vereine, gGmbHs, Stiftungen, Initiativen und Fördervereine in Deutschland |
| **Was es macht** | Vereinsprofil anlegen → Förderprogramme finden → Förderfähigkeit prüfen → Unterlagen sammeln → Lückenanalyse |
| **Datensatz** | 155 Programme, Stand 18.08.2026, Schwerpunkt bundesweit und Brandenburg |
| **Läuft in** | Claude Code, Claude Cowork (Plugin); Node.js ≥ 20 optional für den Vorfilter |
| **Kosten** | Kostenlos. Es fällt nur die eigene Claude-Nutzung an. |
| **Daten** | Bleiben im eigenen Ordner. Nichts wird an den KI Klub übertragen. |
| **Lizenz** | Code Apache-2.0, Datensatz CC BY 4.0 |
| **Status** | Version 0.1, erste Erprobung (November 2026) |

## Schnellstart

In Claude Code:

```
/plugin marketplace add KI-Klub-Werder-e-V/foerderradar
/plugin install foerderradar@foerderradar
```

Dann einen Ordner öffnen, in dem eure Vereinsunterlagen liegen (Satzung, Freistellungsbescheid, Projektskizzen), und sagen:

> Finde Fördermittel für unseren Verein und bereite den besten Antrag vor. Unsere Website ist www.beispielverein.de.

Claude führt euch durch die vier Schritte und hält nach jedem an. Einzeln aufrufbar:

| Befehl | Schritt | Ergebnis |
|---|---|---|
| `/foerderradar:profil` | Organisation analysieren | `foerderung/profil.md` |
| `/foerderradar:suche` | Passende Programme mit Frist finden | `foerderung/shortlist.md` |
| `/foerderradar:pruefen <Programm>` | Förderfähigkeit an der Richtlinie prüfen | `foerderung/<programm>/pruefung.md` |
| `/foerderradar:unterlagen <Programm>` | Unterlagen suchen, Entwürfe schreiben, Lückenanalyse | `foerderung/<programm>/antragspaket.md` |

## So sieht die Lückenanalyse aus

| Unterlage | Status | Was zu tun ist |
|---|---|---|
| Satzung | ✅ vorhanden | – |
| Freistellungsbescheid | ⚠️ veraltet (2021) | neuen Bescheid beim Finanzamt anfragen |
| Projektbeschreibung | ✏️ Entwurf erstellt | prüfen, Teilnehmerzahlen ergänzen |
| Kosten- und Finanzierungsplan | ✏️ Entwurf erstellt | Honorarsätze bestätigen |
| Kooperationsvereinbarung | ❌ fehlt | Partnerschule anfragen |

Dazu: welche Frist realistisch ist, nächste Schritte rückwärts von der Frist geplant und offene Fragen an die Förderstelle, fertig formuliert.

## Was Förderradar nicht macht

- **Es reicht nichts ein und unterschreibt nichts.** Menschen entscheiden und senden.
- **Es ersetzt keine Beratung.** Bei Unklarheit formuliert es die Frage an die Förderstelle.
- **Es erfindet keine Fristen.** Jede Frist wird vor der Empfehlung auf der offiziellen Programmseite nachgeprüft, jede Angabe hat einen Link.

## Der Datensatz

[`data/programme.json`](data/programme.json) enthält Förderprogramme mit Geldgeber, Ebene, Region, Themen, Voraussetzungen, Fördersumme, Eigenanteil, Vorfinanzierung, Mindest-Bestandsdauer, Fristen und Link. Er stammt aus einer geprüften Recherche des KI Klub Werder (210 Programme untersucht, eingestellte und unbelegte aussortiert). Feldbeschreibung: [`data/README.md`](data/README.md).

| Ebene | Beispiele |
|---|---|
| Bund | DSEE-Mikroförderprogramm, Deutscher Engagementpreis, 100xDigital |
| Land Brandenburg | Lottomittel der Ministerien, Landeszentrale für politische Bildung |
| EU | Erasmus+, ESF Plus, LEADER |
| Stiftungen, Lotterien | Aktion Mensch, Deutsche Postcode Lotterie, Deutsches Hilfswerk |
| Sachleistungen | GitHub, Google, Microsoft, Slack und Claude für gemeinnützige Organisationen |

Als Modul nutzbar (so verwendet ihn die Website):

```bash
npm install github:KI-Klub-Werder-e-V/foerderradar
node node_modules/foerderradar/auswahl.mjs --land BY
```

```js
import { kandidaten } from "foerderradar";
kandidaten({ land: "BB", kreis: "Potsdam-Mittelmark" }); // kommende Fristen zuerst
```

## Häufige Fragen

### Wie finde ich Fördermittel für meinen Verein?

Mit Förderradar in vier Schritten: Profil des Vereins anlegen (Zweck, Sitz, Gemeinnützigkeit, Vorhaben), Programme nach Region und kommender Frist filtern, die Richtlinie des besten Treffers prüfen, Unterlagen sammeln. Ohne Installation geht die Suche auf [ki-klub-werder.de/foerderradar](https://ki-klub-werder.de/foerderradar).

### Ist Förderradar kostenlos?

Ja. Code und Datensatz sind frei. Für das Plugin braucht ihr einen Zugang zu Claude, die Website ist ohne Anmeldung nutzbar.

### Welche Förderprogramme sind enthalten?

155 Programme, die meisten bundesweit (95), dazu Brandenburg (56) und Ostdeutschland (4). Landesprogramme anderer Bundesländer fehlen noch. Das Plugin sucht sie deshalb zusätzlich live im Web.

### Wie aktuell sind die Fristen?

Jeder Eintrag hat ein Prüfdatum (`stand`). Das Plugin prüft jede Frist vor einer Empfehlung auf der offiziellen Seite nach. Veraltete Einträge bitte als Issue melden.

### Werden unsere Vereinsdaten gespeichert?

Beim Plugin nicht beim KI Klub: Alles bleibt im eigenen Ordner, verarbeitet wird es von Claude unter euren eigenen Bedingungen. Die Website speichert keine Eingaben.

### Was ist der Unterschied zwischen Website und Plugin?

Die Website findet Programme mit Frist und Link. Das Plugin geht weiter: Es liest die Förderrichtlinie, prüft die Antragsberechtigung, sucht eure Unterlagen, schreibt Entwürfe für Projektbeschreibung und Finanzplan und zeigt, was fehlt.

### Wie unterscheidet sich Förderradar von der Förderdatenbank des Bundes?

Die [Förderdatenbank](https://www.foerderdatenbank.de) listet Programme von Bund, Ländern und EU, vor allem für Unternehmen. Förderradar ist auf gemeinnützige Organisationen zugeschnitten, bezieht Stiftungen, Lotterien und Sachleistungen ein und führt bis zum Antragspaket.

## Mitmachen

- **Programm fehlt oder Frist veraltet:** [Issue anlegen](https://github.com/KI-Klub-Werder-e-V/foerderradar/issues) mit Link zur Quelle.
- **Daten pflegen:** Anleitung in [`skills/foerderradar/references/05-rescan.md`](skills/foerderradar/references/05-rescan.md), Tests mit `npm test`.
- **Andere Bundesländer:** Programme eurer Region sind besonders willkommen.

## Weitere Werkzeuge

Förderradar gehört zum [Digitalen Werkzeugkasten](https://ki-klub-werder.de/werkzeugkasten) des KI Klub Werder, neben [OpenVerein](https://github.com/KI-Klub-Werder-e-V/openverein) (Vereinsverwaltung), [kommentarwache](https://github.com/KI-Klub-Werder-e-V/kommentarwache), [MarieKondoForAgents](https://github.com/KI-Klub-Werder-e-V/MarieKondoForAgents) und [Werdi](https://github.com/KI-Klub-Werder-e-V/werdi).

Ehrenamtlich gebaut, ohne Gewähr, kein Anspruch auf Betreuung.

## Lizenz

Code: [Apache-2.0](LICENSE). Datensatz: [CC BY 4.0](data/LICENSE), Namensnennung „KI Klub Werder e.V., Förderradar“.

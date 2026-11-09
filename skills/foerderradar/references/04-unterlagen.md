# Schritt 4: Unterlagen sammeln und Lückenanalyse

Voraussetzung: `foerderung/<programm-id>/pruefung.md` mit Ergebnis „passt“ oder „passt mit Auflagen“.

## 1. Liste der geforderten Unterlagen

Aus Antragsformular, Richtlinie und Checkliste der Förderstelle. Steht dort nichts Genaues, nimm die übliche Liste und kennzeichne sie als „üblich, nicht ausdrücklich gefordert“:

| Unterlage | Hinweis |
|---|---|
| Satzung, aktuelle Fassung | mit Datum der letzten Änderung |
| Vereinsregisterauszug | oft nicht älter als 3–6 Monate |
| Freistellungsbescheid / Feststellungsbescheid § 60a AO | Bescheid nicht älter als 3 bzw. 5 Jahre |
| Projektbeschreibung | Ausgangslage, Ziele, Zielgruppe, Maßnahmen, Wirkung |
| Kosten- und Finanzierungsplan | Ausgaben nach Arten, Einnahmen, Eigenanteil, beantragte Summe |
| Zeitplan | Meilensteine, Projektbeginn nach Bewilligung |
| Nachweis Vertretungsberechtigung | Vorstand laut Registerauszug |
| Bankverbindung des Vereinskontos | nur Hinweis „liegt vor“, keine IBAN in Entwürfe |
| Jahresabschluss / Kassenbericht | letztes abgeschlossenes Jahr |
| Kooperationsvereinbarung, LOI | wenn Partner vorgesehen |
| Angebote / Kostenvoranschläge | bei Anschaffungen, oft ab bestimmten Beträgen mehrere |
| De-minimis-Erklärung | nur bei wirtschaftlicher Tätigkeit |

## 2. Im Arbeitsordner suchen

Für jede Unterlage mit Glob und Grep suchen (Dateiname und Inhalt). Gefundene Dateien öffnen und prüfen: richtiges Dokument? aktuell? vollständig unterschrieben? Datum notieren.

## 3. Entwerfen, was sich entwerfen lässt

In `foerderung/<programm-id>/entwuerfe/`, nur aus Profil, Prüfung und vorhandenen Dokumenten:

- `projektbeschreibung.md`, gegliedert wie das Antragsformular, mit Zeichenbegrenzungen des Formulars
- `kosten-finanzierungsplan.md`, Tabelle; Beträge, die du nicht belegen kannst, als `<?> €` markieren, nie schätzen ohne Kennzeichnung
- `zeitplan.md`
- `fragen-an-foerderstelle.md`, wenn Prüfung offene Fragen hat

## 4. Vorlage `foerderung/<programm-id>/antragspaket.md`

```markdown
# Antragspaket: <Programm>
Frist: <Datum> (geprüft am <Datum>) · Einreichung: <Portal/Post/Mail> · Summe beantragt: <Betrag>

## Lückenanalyse
| Unterlage | Status | Datei | Was zu tun ist | Wer | Bis |
|---|---|---|---|---|---|
| Satzung | ✅ vorhanden | satzung-2024.pdf | – | | |
| Freistellungsbescheid | ⚠️ veraltet (2021) | bescheid-2021.pdf | neuen Bescheid beim Finanzamt anfragen | Kasse | |
| Projektbeschreibung | ✏️ Entwurf | entwuerfe/projektbeschreibung.md | prüfen, Zahlen ergänzen | Vorstand | |
| Kooperationsvereinbarung | ❌ fehlt | – | Partner anfragen | | |

**Stand: X von Y Unterlagen fertig.** Ein Satz, ob die Frist realistisch ist.

## Nächste Schritte
Nummeriert, kleinste zuerst, mit Zeitbedarf. Rückwärts von der Frist geplant, mit Puffer für Unterschriften und Vorstandsbeschluss.

## Vor dem Absenden
- [ ] Vorstand hat beschlossen / zeichnet
- [ ] Beträge in Formular und Finanzplan identisch
- [ ] Projektbeginn erst nach Bewilligung
- [ ] Kopie aller Unterlagen abgelegt
```

Status: ✅ vorhanden · ⚠️ veraltet oder unvollständig · ✏️ Entwurf erstellt · ❌ fehlt.

Zum Schluss: Lückenanalyse im Chat als Tabelle zeigen und die drei wichtigsten Lücken nennen. Nichts einreichen.

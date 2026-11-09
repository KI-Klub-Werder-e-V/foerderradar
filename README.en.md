# Förderradar: find grants for German non-profits and prepare the application

[Deutsch](README.md) · English

**Förderradar is a free, open-source tool that helps non-profit associations (Vereine) in Germany find funding programmes with upcoming deadlines and prepare their application up to a gap analysis of the required documents.** It consists of a Claude plugin (Claude Code and Cowork) and an open dataset of 155 verified German funding programmes from federal, state, EU, foundation, lottery and corporate funders. It is built by volunteers at [KI Klub Werder e.V.](https://ki-klub-werder.de), a non-profit AI club in Werder (Havel), Brandenburg.

The tool, its prompts and its output are in German, because German funding programmes and applications are.

- **Search only, no install:** [ki-klub-werder.de/foerderradar](https://ki-klub-werder.de/foerderradar)
- **Full workflow:** this plugin. It analyses the organisation, shortlists programmes, checks eligibility against the official guidelines, finds and drafts documents, and produces a gap analysis.

```
/plugin marketplace add KI-Klub-Werder-e-V/foerderradar
/plugin install foerderradar@foerderradar
```

| | |
|---|---|
| **Dataset** | 155 programmes as of 2026-08-18; nationwide, Brandenburg and East Germany |
| **Privacy** | Everything stays in your working folder |
| **Licence** | Code Apache-2.0, data CC BY 4.0 |
| **Status** | v0.1, first trials (November 2026) |

Förderradar never submits or signs anything, and it checks every deadline on the funder's official page before recommending a programme.

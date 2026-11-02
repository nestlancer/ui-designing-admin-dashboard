# F20 · Analytics Hub — GATE R · Report study

Sources read: `reports/NESTLANCER_ADMIN_CONSOLE_UI_RESEARCH_REPORT.md` (full) · `reports/Nestlancer_Admin_Console_UI_Research_Report.xlsx` — all 10 sheets opened (Findings, Page inventory, Benchmarks, CHANGE, ADD, KEEP, Roadmap, Checklist, Sources, Tokens).

```
## GATE R (F20) · MD: YES · XLSX: 10/10 · C: 6/6 · A: 2/2 (A7 context + A-ops framing) · KEEP: 3/3 · Gate: PASS
```

## 1. Findings that touch the numbers room (quoted)

- **Finding #1 (outage):** `/api/v1/admin/projects*` is down in production. Analytics' **Projects tab reads the same family of endpoints** (`/api/dashboard/projects`, `/api/dashboard/analytics/projects`) → this tab is the one that silently degrades. Analytics must therefore own an *unavailable series* state, not a spinner.
- **Finding #10 (charts):** "six '↑ new' cards" and unlabelled charts — the dashboard's KPI grammar leaks straight into Analytics. Report §5.2 row *Explain every number*: "❌ ('↑ new' ×6) → **Add** deltas + plain-English why".
- **Page inventory row (Analytics):** `15 states · ✅ OK · shots 003–006 · "4 hubs + 4 ranges, Download CSV · **Projects tab likely hollow (API); CSV is the only export**"`.
- **§5.2 pattern library (F20-relevant rows):** *Explain every number* (Whatagraph) ❌ · *One dominant metric* (Mercury, AdminLTE#13) ❌ · *Empty/loading/error states* ⚠️ "design skeletons + sparse-chart + degraded banners" · *Matching dark mode* 🔴 "unreachable + thin" · *Status ≠ colour alone* ⚠️.
- **§5.3 benchmark shortlist:** **Tremor (Apache 2.0)** is named as the chart reference for Analytics — we take its *grammar* (label, unit, value, honest axis) but hand-draw SVG (no library allowed).
- **§4.2 weighted verdict:** Analytics is a *supporting* room: "🟡 decisions are only as good as the charts — every axis labelled, every gap admitted."

## 2. C-items scoped to F20 (all required in 5/5)

| # | Change | F20 specifics from the report | How each variant proves it |
|---|---|---|---|
| **C10** | Label charts + sparse-data states | "Dashboard, Analytics — axis labels, 'no data in range' + 'only N points' states instead of spike-of-doom" | every chart: y-axis ticks + unit label + x tick labels, point count, missing-bucket count, sparse banner, honest legend |
| **C3** | AA badge/status text | success/info text darkened; status = icon + colour + text | series colours are chart-ramp with ≥3:1 non-text contrast; state chips carry icon + word |
| **C5** | Teal-only incl. charts | kill `--article-accent` blue, `--brand-violet`, blue donut slice | chart-1..5 are a **teal-first ramp**; the captured blue COMPLETED slice becomes brand-500 |
| **C9** | Mono + full IDs; tabular figures | "ops readability; full value on hover, click-to-copy keeps working" | all money/counts `tabular-nums`; timestamps, refs, endpoint strings in mono; long values get `title` + copy affordance |
| **C12** | Display money type | "add 32–40px display for ₹ amounts + queue counts" | each tab has exactly one hero figure 32–40px; strip values 20–24px |
| **C18** | Dark parity | "repair dark mode or remove the toggle" | every variant ships a designed dark state, chart surfaces included (not inverted grey) |
| **C20** | Logo alt | shell image `alt` missing | shared logo pair with `alt`, favicon present |

## 3. A-items — honest F20 coverage

The family prompt states: *"No F20-targeted ADDs; C10 + CSV honesty ship as the family craft — 5/5."* Report cross-check:

| # | Add | F20 relevance | Decision |
|---|---|---|---|
| **A7** | Statement/ledger export (PDF + CSV) | Report says "Analytics already exports CSV" | F20 keeps **CSV only** (captured). No PDF invented. CSV may advertise its manifest (rows, range, generated-at) — honesty, not a new feature. |
| **A9** | Operator activity / handover digest | Dashboard-targeted | **Not claimed** — no analytics endpoint for it |
| **A11** | Degraded banner | Report lists it "Global" | **Adopted per-tab as a series-health state** (documented as master-wide global item, not an F20-specific ADD): the Projects tab needs it because its API family is down. Recorded in manifest as `A11 (global)`. |
| — | Bulk/keyboard triage (A1/A2) | Not applicable | Analytics has **no rows to triage** — do not fake queues |

## 4. KEEP (3/3, every variant)

1. **Download CSV per view** — present, labelled with the active view, never decorative.
2. **Range discipline 7d/30d/90d/1y** — the same four, never "custom".
3. **Microcopy honesty + teal identity** — the captured lede sentence stays; teal-only incl. charts.

## 5. Acceptance checklist (report §7.1) as F20 QA list

| # | Checklist item | F20 test |
|---|---|---|
| 1 | Hierarchy < 2s | tab → hero number → verdict sentence visible without scrolling at 1440 |
| 2 | Triage speed | range switch re-paints series + tables + CSV label in one pass |
| 3 | Queues | n/a (no queue) — instead: **no chart without a table equivalent** |
| 4 | Tables | real `<table>` + `<caption>`, scoped headers, mono numerals, totals row |
| 5 | Nav | shell intact, active nav = Analytics, breadcrumb Home › Operations › Analytics |
| 6 | Colour AA | 4.5:1 text, 3:1 non-text; teal ramp only; no blue anywhere |
| 7 | Type | hero 32–40, strip 20–24, body 13–15, meta ≥12, nothing <11 |
| 8 | Dark parity | sidebar, charts, tables, states all designed in dark |
| 9 | Keyboard | tabs = arrows/Home/End, ranges = radios with arrows, chart↔table toggle reachable, Esc closes overlays |
| 10 | Empty / loading / error | skeleton shaped like the chart, empty = what/why/next, error = what/why/retry + support |
| 11 | Safety | no destructive action in F20; no fake "live" claim |
| 12 | Mobile | 360/390: no page-level horizontal scroll, charts reflow, tables card-fallback |
| 13 | Performance | ≤70 KB/variant, zero external requests, hand-drawn SVG only |
| 14 | Legal/ops | "© 2026 Nestlancer Admin" footer; CSV labelled *demo download* (static lab) |

## 6. Roadmap position

Phase 1 (hierarchy + charts) covers F20's C10/C12 work; Phase 3 covers dark parity (C18). F20 is a **Phase-1 → Phase-2 bridge** page: it must look right while the Projects API is still broken, which is why the degraded series state ships on day one.

## 7. Differences vs `.md` (recorded)

- The `.xlsx` Page-inventory sheet lists Analytics with "13 states"; the HTML harvest contains **16** F20 files (8 unique states × 2 dupe sets). The `.md`/harvest count (16) wins; both are documented here.
- No conflict on C10 wording, C-item IDs, or KEEP.

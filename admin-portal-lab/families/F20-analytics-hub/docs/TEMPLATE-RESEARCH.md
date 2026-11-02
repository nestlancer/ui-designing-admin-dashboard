# F20 · Analytics Hub — GATE T · Online template / pattern research

**Order respected:** Gates S → R → A completed first; the full UI requirement set (4 tabs × 4 ranges × CSV × C10 honesty) was written down before any search. Templates inform **composition only** — no feature enters F20 without Gate-A backing.

```
## GATE T (F20) · Queries: 8 · Refs opened: 14/≥8 · TEMPLATE-RESEARCH.md written: YES
Patterns mapped to V1–V5: YES · No invented API features: YES · Order S→R→A→T respected: YES · Gate: PASS
```

Queries used: *enterprise analytics dashboard design best practices labelled axes sparse data* · *Datadog dashboard timeseries widget legend query value small multiples* · *Grafana no-data / last-updated panel guidance* · *Mixpanel / Amplitude metric definition "how is this calculated" provenance* · *Stripe / Mercury finance dashboard table-first KPI hero CSV* · *accessible charts text alternative + data table WCAG* · *PostHog / Linear / Vercel data-dense UI typography tabular numbers* · *analytics dashboard 375px responsive table card fallback*.

## 1. Reference table

| # | Reference | Page-job match | Adopted pattern (composition only) | Rejected / why |
|---|---|---|---|---|
| 1 | **5of10 — Dashboard Design Best Practices 2026** <https://5of10.com/articles/dashboard-design-best-practices/> | analytics hub anatomy | analytical layout: filters/range on top, summary metrics, 4–6 detailed charts, tables + export at bottom; "stale data with *updating…* indicator rather than blank charts"; never >7 primary metrics; "last updated visible" | its "no more than 3-4 series" chart rule is already satisfied; no feature import |
| 2 | **WolfPixel — Dashboard Design Best Practices 2026** <https://www.wolfpixel.agency/blogs/dashboard-design-best-practices> | honesty + state design | bars start at zero; no 3D/dual axis; **write the takeaway in a sentence above the chart**; annotate notable changes; design empty/loading as onboarding surfaces; save/share filter configs | "save & share filter configurations" needs a filter contract → **not adopted** (Gate A has none) |
| 3 | **Datadog — dashboard best-practice guidelines** <https://datadoghq.dev/integrations-core/guidelines/dashboards/> + <https://docs.datadoghq.com/extend/integrations/create-an-integration-dashboard/> | ops-grade metric surfaces | group titles title-case / widget titles sentence case; **always show a legend with readable aliases**; **query-value tiles carry a timeseries background instead of being blank**; **adjacent graphs share aligned x-axes**; symmetric halves in dense mode; stream widgets ≥6 cols | colourful group headers / vivid palettes → rejected (teal-only); widget JSON tooling irrelevant |
| 4 | **Grafana — status panel & state timeline** <https://grafana.com/grafana/plugins/vonage-status-panel/> · <https://www.w3tutorials.net/blog/grafana-state-timeline-panel-with-values-states-supplied-by-label/> | "no data" ≠ zero | explicit **no-data state shown as its own visual (grey/"disabled")**, never rendered as a zero-length bar; `keep_last_value` thinking = label staleness instead of pretending freshness | Grafana's grey-grey palette rejected (must stay in teal ramp) |
| 5 | **Mixpanel — computation tab / metric units changelog** <https://docs.mixpanel.com/changelogs/2024-10-09-metric-units> | provenance at point of use | a **"how is this calculated" hover card that shows the computation step by step**; saved metric definitions; unit + precision + abbreviation set per metric; units also applied to tooltips and the table under the chart | saved-metric library = new API surface → inspiration only |
| 6 | **Amplitude — aggregated metric calculations** <https://amplitude.com/docs/data/warehouse-metric-calculations> | denominators | every aggregate documents its aggregation (sum / per-user average / min / max) — F20 uses this to expose **numerator ÷ denominator** under rates (18 ÷ 41 = 43.9%) | no warehouse layer exists → not a feature |
| 7 | **AdminLTE — Admin Dashboard Design: Principles & Layouts 2026** <https://adminlte.io/blog/admin-dashboard-design/> | layout archetypes | **table-first** (Stripe): dense impeccably-set table, charts summarise above, right-aligned tabular numerals, muted gridlines, status chips; "one verdict per screen" in the top-left slot; hierarchy from type + space, few borders; **density is a user setting** | density toggle rejected for F20 (would need persisted shell state beyond the family scope) |
| 8 | **UI Bakery — Stripe dashboard template** <https://uibakery.io/templates/stripe-dashboard> | money analytics | KPI strip (revenue, transactions, AOV, pending) → dedicated analytics report area → searchable/sortable transaction table → **CSV export per report**; side-panel detail | side-panel record detail needs a record contract → not adopted |
| 9 | **Art of Styleframe — typography in data-dense UI** <https://artofstyleframe.com/blog/typography-in-dashboards-data-dense-ui/> | numerals | `font-variant-numeric: tabular-nums` (+ slashed zero) everywhere numbers align; override chart fonts to match UI font so a metric reads identically in card / table / axis | webfont import → forbidden (offline) |
| 10 | **A11Y Collective — accessible data visualisations checklist** <https://www.a11y-collective.com/blog/accessible-charts/> | chart a11y | alt/`role=img` + text summary near chart + **proper data table alternative**; **"Show table / Show chart" toggle above the chart**; keyboard-triggerable tooltips; patterns/shapes not just colour | decorative illustrations → skip |
| 11 | **AIOPS Group — accessible data visualization (WCAG 2.2 table)** <https://aiopsgroup.com/accessible-data-visualization/> | chart + table craft | donut/pie rated **poor** for screen readers → pair with a sorted bar/table and label percentages; `<caption>`, `scope="col"/"row"`, `aria-sort`, scrollable region `tabindex=0`; empty cells never blank ("—"/"No data") | heatmaps/scatter → not in capture |
| 12 | **AccessScan — accessible dashboards build guide** <https://accessscan.app/guides/accessible-dashboards-and-data-viz> | announcements | one-sentence takeaway in visible text; **status messages announce a short summary ("Data refreshed, 12 rows") — never a whole table**; decorative sparklines `aria-hidden`; SVG as `role="img"` with a name rather than a soup of paths | — |
| 13 | **PostHog design notes (data-dense)** <https://designmd.me/discover/posthog> · <https://github.com/rohitg00/awesome-claude-design/blob/main/design-md/data-dense/posthog.md> | data-dense dark UI | tight 32px rows, hairline separators, sticky headers, tabular numerals globally; **legend order = declared palette order**; charts compress the legend to the top under 768px; tables become stacked KV pairs under 640px | cobalt/yellow brand palette → rejected (teal only) |
| 14 | **MeteoEdge responsive issue #816** <https://github.com/P0K5/MeteoEdge/issues/816> · **Untitled UI dashboard examples** <https://www.untitledui.com/components/dashboards> | 375px behaviour | **one consistent narrow-viewport treatment dashboard-wide**: comparison tables keep column alignment and scroll inside their own container; action-row tables become stacked cards; no page-level horizontal scroll at 375/768; KPIs stack 2-col | per-tab ad-hoc fixes → rejected (we pick: *chart = reflow*, *data table = own scroll region + card fallback*) |

## 2. Pattern → variant mapping (V1–V5)

| Pattern (ref) | V1 Calibrated ledger | V2 Signal spine | V3 Readout stack | V4 Dense board | V5 Choreograph |
|---|---|---|---|---|---|
| Range/summary/charts/tables order (1) | ✔ canonical | — | reversed (tables first) | compressed into rows | — |
| Takeaway sentence above chart (2) | ✔ verdict line | ✔ per spine card | ✔ table caption | ✔ strip note | ✔ animated verdict |
| Query value w/ timeseries background (3) | — | ✔ hero tile | — | ✔ each KPI | — |
| Aligned x-axes across cards (3) | — | ✔ shared axis | — | — | ✔ |
| Legend w/ readable aliases (3) | ✔ | ✔ | — | ✔ | ✔ |
| Explicit no-data visual (4) | ✔ | ✔ | ✔ (row "—") | ✔ | ✔ |
| "How is this calculated" disclosure (5) | ✔ provenance popover | ✔ under hero | ✔ column note | ✔ tooltip row | ✔ receipt strip |
| Numerator ÷ denominator under rates (6) | ✔ | ✔ | ✔ | ✔ | ✔ |
| Table-first (7) | — | — | ✔ | — | — |
| One verdict top-left (7) | ✔ hero | ✔ | — | ✔ single sentence | ✔ |
| CSV per view (8) | ✔ | ✔ | ✔ | ✔ | ✔ |
| Tabular numerals (9) | ✔ | ✔ | ✔ | ✔ | ✔ |
| Show chart / show table toggle (10) | ✔ | ✔ | ✔ (default table) | ✔ | ✔ |
| Donut paired w/ sorted table (11) | ✔ | ✔ | ✔ | ✔ | ✔ |
| Short announced summary (12) | ✔ | ✔ | ✔ | ✔ | ✔ |
| Legend to top under 768 (13) | ✔ | ✔ | — | ✔ | ✔ |
| One narrow-viewport rule (14) | ✔ | ✔ | ✔ | ✔ | ✔ |

## 3. Explicit statement

**No features were invented from templates.** Every control in every variant maps to the captured UI (Gate S: 4 tabs, 4 ranges, Download CSV, tables) or to a documented endpoint (Gate A). The only additions are *presentational honesty devices* required by C10/C9 (point counts, missing-bucket counts, provenance disclosures, chart↔table toggles) and the **global** degraded-state pattern A11 that the report lists for all pages. The "advanced filters" control named in the family prompt's component list is **excluded** because no filter contract exists in Swagger.

## 4. Design conclusions drawn (before concepts)

1. Sparse data is the *normal* case here (1 of 30 buckets populated). The design must make sparsity legible, not hide it — so every chart carries the three facts: **points rendered / buckets in range / buckets with value**.
2. Analytics is the room where operators ask "is this number real?". Therefore provenance is a first-class surface: endpoint, period mapping, computation basis, capture date, and unverified flags.
3. Two chart types max per tab (time series + one breakdown) — the capture already respects this; keep it.
4. Charts must never be the only copy of a number: chart↔table toggle in every variant.
5. The captured blue donut slice is the family's most visible C5 failure — fixing it is the single most telling "this was redesigned" signal.

---

## GATE T.2 (rework) · Queries: 2 · Refs opened: 18 · rework order from the owner

The owner's second pass asked for three things in this order: re-read the origin screenshots,
read the **complete** Swagger set, then research **how enterprise operations teams organise
analytics dashboards**, and only then rebuild the pages.

### 5. What the second research round changed

| Source | Load-bearing claim | Change made to F20 |
| --- | --- | --- |
| `basedash.com/blog/how-to-build-an-executive-dashboard-…` | *One* north-star metric top-left with value, target, variance, trend; a headline metric per function; 8–12 numbers max; every metric needs a written definition and a target | North-star card is now the first object on every variant: value, read-out sentence, coverage, window, freshness, and an explicit **“no target is set in the capture”** line instead of an invented benchmark |
| `fanruan.com/en/blog/executive-summary-dashboard` | Governance: who owns a metric, where it is defined, when it is validated | Persistent **Metric dictionary** block per tab (metric · definition · source · owner · refresh); owner/cadence are marked “not captured” rather than fabricated |
| `boardinfinity.com/blog/operations-dashboard-leadership-reads/` | Structure is objective → KPI → target → actual → variance → drill → owner; a bare KPI list is the classic failure | Variant compositions are ordered north star → drivers → diagnostic chart → detail table → dictionary; the target slot is present but truthfully empty |
| `skopx.com/…/what-does-data-freshness-mean-in-analytics`, `motherduck.com/glossary/data-freshness` | Stale data looks fine; freshness incidents are 30–40% of data downtime; show a “last updated” label to end users | **Data health rail** on every tab: each endpoint with reachable / failing / not-captured state, the capture timestamp, the `additionalProperties: true` schema caveat, and the range→period mapping |
| `docs.datadoghq.com/monitors/types/data_observability/` | Freshness is judged per source, and “no data” is a distinct state from zero | Health rail is per endpoint (3 sources per tab, `dot-ok/dot-down/dot-unknown`); chart gaps stay gaps, never zeroes |
| `vson.ai/blog/operations-dashboard-examples` | Put actionable leading indicators first, diagnostic detail behind interaction; prune metrics nobody acts on | V4 collapses the dictionary into `<details>`; V3 puts computation behind per-row disclosures; V5 gates everything behind a three-beat reading order |
| `umbrex.com/…/north-star-metric-framework` | Drivers + guardrails, and published operational definitions, prevent “numbers nobody trusts” | Driver row is explicit about derivation (`18 ÷ 41`, `11 + 2`, `14 of 18`) and carries an unverified badge where the capture conflicts |
| `tryhamster.com/skills/building-north-star-metric-dashboards` | Show expectations **as** expectations; keep definitions next to charts | All caveats sit above the numbers (“Read this before the numbers”) instead of only in the lab note |

### 6. Swagger sweep (all 17 specs, not just `admin` + `health`)

88 operations matched analytics-ish terms. The ones that mattered to the redesign:

- `GET /api/v1/admin/payments/revenue/report` — `from`, `to`, **`groupBy`** → names the revenue-by-category table as a documented contract instead of an assumption.
- `GET /api/v1/admin/payments/revenue/export` — `from`, `to`, **`format`** → the export control now states a real, documented CSV route for revenue.
- `GET /api/reports` + `POST /api/reports` + `GET /api/reports/{id}/download` (presigned) → recorded as the async-report path F20 does **not** claim.
- `GET /api/v1/admin/requests/capacity/dashboard` → capacity exists as a documented surface but was never captured; the health rail says “not captured” rather than implying zero load.
- `GET /api/v1/admin/quotes/stats`, `/projects/stats`, `/users/logs/security-stats`, `/media/admin/…/analytics`, `/messaging/admin/…/stats`, `/notifications/admin/…/stats`, `/blog/…/analytics`, `/portfolio/…/analytics`, `/webhooks/{id}/stats`, `/audit/stats` → each tab’s health rail lists only the endpoints that tab actually uses; the rest are named in `API-MAP.md` as out of scope.

### 7. Explicit statement

No number, target, owner, refresh cadence or timestamp on these pages was invented. Where the
research calls for an artefact the capture does not contain (benchmarks, metric owners,
comparison windows), the page renders the slot and labels it “not captured”.

# F20 · Analytics Hub — GATE S · Baseline map

Run: 2026-11-02 · Operator console lab · Evidence: captures only (`Nestlancer-admin-screenshots/admin/003–006`, `nestlancer-admin-pages-html/92–100` + `13–19` dupes, `audit-metadata.json`).

```
## GATE S (F20) · Shots: 4/4 · HTML: 16/16 · Series frozen: 18 · Content frozen: YES · Gate: PASS
```

## 1. Screenshot ↔ HTML ↔ route map

| Screenshot | HTML snapshot(s) | Route / state | Notes |
|---|---|---|---|
| `003-analytics.webp` | `92-analytics-index.html`, `13-dashboard-sub-analytics.html` (harvest dupe) | `/analytics` — hub, Revenue tab default | 1440×1200. Spike chart, no y-axis |
| — (no shot) | `93-analytics-index-tab-revenue.html`, `14-…-tab-revenue.html` | Revenue tab | DOM differs from shot on trend cell (see §4 C1) |
| `006-analytics-users.webp` | `94-analytics-index-tab-users.html`, `15-…-tab-users.html` | Users tab | Single bar, 34 everywhere |
| `004-analytics-projects.webp` | `95-analytics-index-tab-projects.html`, `16-…-tab-projects.html` | Projects tab | Donut uses teal **and blue** |
| `005-analytics-requests.webp` | `96-analytics-index-tab-requests.html`, `17-…-tab-requests.html` | Requests tab | Two-bar histogram, 2 tables, quote card |
| — | `97/98/99/100-analytics-index-tab-7d/30d/90d/1y.html`, `18/19` dupes | Range states | **All four render identical Requests content** — range control has no visible data effect |

`url` in metadata = `https://admin.nestlancer.com/analytics`, captured `2026-10-30T13:38Z`. `--content-max-width:none` confirmed in the live token dump (full-width canvas is already the production behaviour — F20 inherits master §9.2a).

**Captured shell (frozen):** sidebar OPERATOR CONSOLE (Operations: Dashboard, Pipelines, Inquiries, Notifications, Requests, Quotes, Projects, Payments, Users, Messages, Moderation, Analytics · Content: Blog, Portfolio, Media Library · System: System Config, Webhooks, Audit Logs) · header 52px (breadcrumb Home › Operations › Analytics, ⌘K "Search pages…", bell 99+, chat 21, shield, "RK Riya Kapoor", theme) · footer "© 2026 Nestlancer Admin" · operator `admin@nestlancer.com · Administrator` · titles: `Analytics · Admin`, H1 "Analytics hub", lede "Revenue, users, projects, and requests — KPI strips, charts, and breakdowns."

## 2. Frozen control set (every variant carries all of it)

- 4 area tabs, `role=tablist`: **Revenue · Users · Projects · Requests** (captured as two tablists in the DOM — 4 area + 4 range; variants use one labelled area tablist + one labelled range group).
- 4 ranges: **7d · 30d · 90d · 1y** (default captured = 30d).
- **Download CSV** (single control, top-right, download icon).
- Page has **no search / filter / export-per-card** in capture → variants may not invent filters (Gate A/C).

## 3. Frozen content per tab (verbatim labels; ₹ and counts as captured)

### Revenue (`/analytics`, default)
| Element | Captured text |
|---|---|
| Section head | "Revenue" / "Completed payments for the selected period" |
| KPI 1 | "Completed payments (total)" — `₹7,08,160.00` — "INR" |
| KPI 2 | "Period trend" — `₹7,08,160.00 · +100 · up` (shot `003`) **vs** `₹0.00 · -100 · down` (DOM `92`) |
| Chart | "Revenue over time" / "Completed payments for the selected period"; x-ticks `09-11 · 09-18 · 09-26 · 10-03 · 10-10` (shot) / `10-01 · 10-08 · 10-16 · 10-23 · 10-30` (DOM); footnote "30 points · latest ₹0.00"; **no y-axis, no unit, no gridlines** |
| Chart shape | Flat ₹0 line + one spike (single completed payment) |
| Table | "Revenue by category" — CATEGORY / AMOUNT — webDevelopment `₹6,66,100.00` · custom `₹30,060.00` · marketing `₹12,000.00` |

### Users
| Element | Captured text |
|---|---|
| Section head | "Users" / "Acquisition and role mix" |
| KPIs | Total users `34` · Active `34` · New this month `34` · By role `User: 33 · Admin: 1` |
| Chart | "User activity" / "New users over time (or role mix when time series is empty)"; one bar `34` at `2026-10-04`; x-ticks `09-27 · 10-04 · 10-11 · 10-18 · 10-25` |
| Table | "Role breakdown" — METRIC / VALUE — Total users 34 · Active 34 · New this month 34 · By role `User: 33 · Admin: 1` |
| Caption note | Chart tooltip text `2026-10-04: 34` |

### Projects
| Element | Captured text |
|---|---|
| Section head | "Projects" / "Lifecycle distribution and delivery health" |
| KPIs | Total projects `18` · ACTIVE `4` · COMPLETED `10` · ON HOLD `0` |
| Chart | "Project statuses" / "Distribution across lifecycle states"; donut centre `14`; legend "ACTIVE: 4" (teal) · "COMPLETED: 10" (**blue**) |
| Table | "Status breakdown" — ACTIVE 4 · COMPLETED 10 · ON HOLD 0 · CANCELLED 0 · Avg. completion (days) 0 · On-time rate `100%` |

### Requests
| Element | Captured text |
|---|---|
| Section head | "Requests" / "Inbound demand and quote conversion" |
| KPIs | Total requests `46` · Conversion rate `43.9%` · Avg. response time `0 minutes` · Open pipeline `13` |
| Chart | "Request volume" / "New requests over the last 30 days"; bars `36` @ `2026-10-05` and `10` @ `2026-10-06`; x-ticks only `10-05 · 10-06`; **no y-axis** |
| Table A | "By status" — STATUS / COUNT — Draft 5 · Submitted 11 · Converted To Project 18 · Rejected 3 · Expired Quote 7 · Under Review 2 |
| Table B | "By category" — CATEGORY / COUNT — webDevelopment 37 · custom 4 · mobileApp 2 · design 1 · consulting 1 · marketing 1 |
| Card C | "Quote conversion" — TOTAL QUOTES 36 · ACCEPTED VALUE `₹9,68,950.00` · ACCEPTANCE RATE 50% · REQUEST CONVERSION 43.9% |

## 4. Gate S tie-out audit (new requirement, master §16 provenance)

Every captured total checked against its own parts. Mismatches are **frozen facts to surface**, never silently repaired:

| # | Check | Result | Decision |
|---|---|---|---|
| T1 | Revenue by category sum = KPI total | 6,66,100 + 30,060 + 12,000 = **₹7,08,160** ✔ | Tie-out holds — show it in the table footer |
| T2 | Requests "By status" sum = 46 | 5+11+18+3+7+2 = **46** ✔ | holds |
| T3 | Requests "By category" sum = 46 | 37+4+2+1+1+1 = **46** ✔ | holds |
| T4 | Open pipeline 13 = Submitted 11 + Under Review 2 | **13** ✔ | holds (label it "derived") |
| T5 | Conversion rate 43.9% | 18 / 46 = 39.1% ✗ · 18 / 41 = **43.9%** ✔ (41 = 46 − 5 drafts) | Show `18 ÷ 41` as the displayed basis, marked *derived, unverified* |
| T6 | Acceptance rate 50% of 36 quotes | 18 accepted (36 × 50%) — consistent with 18 converted | Show `18 ÷ 36` |
| T7 | Projects total 18 vs donut/legend 14 | 4+10 = **14** ≠ 18 → **4 projects have no counted status** | Surface as a reconciliation gap ("4 of 18 not in a counted state") |
| T8 | Users 34 / 34 / 34 (total, active, new this month) | Identical triple = report C16 suspects counting bug | Flag *unverified*, do not "fix" the number |
| T9 | Avg. response time "0 minutes" | No response log documented → 0 is an absence, not a measurement | Render as "0 minutes" + *no responses recorded* note, not as a green success metric |
| T10 | "30 points · latest ₹0.00" vs chart | 30 buckets exist, 1 carries value | Show point count + missing-bucket count explicitly |
| T11 | Range control 7d/30d/90d/1y | All four captured states render identical data | Range changes bucket label + point count only; totals stay frozen |

## 5. Audit-metadata facts worth designing for

`92-analytics-index.html`: `h1` 1 · `h2` 2 · buttons 21 · inputs 0 · tables 1 (4 rows) · `linkCount` 21 · `imgMissingAlt` **1** (C20) · roles include `region`, two `tablist`s · `focusVisible` 2 · `dialogs` 0 · `cssVarCount` 116.
Token dump confirms the C5 leaks the lab purges: `--brand-violet: 168 82% 26%` (teal wearing a violet name) · `--article-accent: 211 79% 51%` (blue) · status info/success as raw HSL with no AA-safe text token · `--status-purple` present. Chart series in the Projects donut render blue (`#2ea3d8`-class), i.e. a **second brand hue inside a chart** — the single most important C5 failure in this family.

## 6. States observed

- Hub default (Revenue), 4 area tabs, 4 range states. **No** loading, empty, error, or sparse-with-explanation state captured anywhere — that absence *is* the C10 brief.
- No dialogs, no filters, no row actions, no drill-down targets in the capture (every KPI strip is static text, not a link).

## 7. Content-freeze rules for the build

1. Tab names, range names, section titles, KPI labels, table headers and CSV control wording are **verbatim**.
2. All captured numbers/₹ figures are **verbatim and unrepaired**; mismatches get honesty notes (§4), never new numbers.
3. Charts may not be "beautified": the spike stays a spike; sparsity is labelled, not smoothed into a fake trend.
4. No invented metrics, filters, cohorts, comparison periods, or export formats beyond the captured single CSV control.
5. Every derived value must display its numerator/denominator or be marked *derived*.

## 8. Confidence

| Item | Confidence |
|---|---|
| Tabs / ranges / CSV / labels / numbers | **High** — 4 shots + 16 HTML snapshots agree |
| Revenue trend cell (+100 up vs −100 down) | **Conflict** — shot vs DOM; show both states via a documented "captured conflict" note, default = shot |
| Computation basis of 43.9% / 50% / 100% | **Derived** — arithmetic fits, API does not document it |
| Request-volume / revenue time series values per bucket | **Not verified** — only two bars and one spike are visible; no series endpoint documented |
| Loading / empty / error behaviour | **Not captured** — designed, labelled as lab states |

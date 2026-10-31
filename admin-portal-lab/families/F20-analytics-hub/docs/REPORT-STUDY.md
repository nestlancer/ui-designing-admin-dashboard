# F20 Report Study — Analytics Hub

## Evidence
- Markdown report: `reports/NESTLANCER_ADMIN_CONSOLE_UI_RESEARCH_REPORT.md` — **read** (authoritative).
- Workbook: `reports/Nestlancer_Admin_Console_UI_Research_Report.xlsx` — **10/10 sheets** reconciled for F20 rows.
- Baseline HTML: `nestlancer-admin-pages-html/92–100` analytics captures + 4 screenshots (`003`, `004`, `005`, `006`).

## GATE R (F20)
```
## GATE R (F20) · MD: YES · XLSX: 10/10 · C: 7/7 · A: 0/0 · KEEP: YES · Gate: PASS
```

## Executive findings (F20-relevant)

| Finding | Report quote (paraphrase) | F20 response |
|---|---|---|
| 13 · Sparse charts | Revenue + request charts collapse to a single spike with “30 points · latest ₹0.00” | **C10** everywhere: labelled axes (INR / count / day), point counts in caption, explicit sparse notes — never a connected spike-of-doom. |
| 7 · KPI trust | Operators need to trust every number on analytics | Tabular figures beside charts; CSV per view; no invented trend smoothing. |
| 10 · Tabular money | Money and IDs need mono/tabular treatment | **C9** mono for amounts, dates, category keys. |
| 9 · Users 34/34/34 | “Verify counting — smells like test data” (**C16**) | Optional honesty callout on Users tab; values frozen as captured. |
| 4 · Teal only | Admin console is teal + Inter | **C5** chart series use teal-first `--chart-1..5`. |
| 5 · AA text | Badge/contrast failures | **C3** AA-safe foreground on cards and chart labels. |
| 12 · Display metrics | Hero KPI typography for operational numbers | **C12** large KPI strips per tab. |

## CHANGE items — F20 scope (7/7 in all variants)

| ID | Contract |
|---|---|
| C3 | AA-safe text on KPIs, tables, chart labels (light + dark). |
| C5 | Teal-only palette; no blue chart CDN or foreign hues. |
| C9 | Mono refs; `font-variant-numeric: tabular-nums` on metrics. |
| C10 | **Mandatory:** every chart has axis labels + units + point count; sparse/empty honest. |
| C12 | Display metric heroes on each tab strip. |
| C18 | Dark parity via `?theme=` + toggle + `prefers-color-scheme`. |
| C20 | Logo / mark with explicit alt text. |

## ADD items
No F20-targeted ADDs — C10 + CSV honesty ship as family craft (**5/5**).

## KEEP items
- **Download CSV** per view.
- **Range discipline** 7d / 30d / 90d / 1y.
- **Microcopy honesty** for sparse series and zero trends.
- **Teal + Inter** ops identity via shared tokens.

## Operator question
*Can I trust every number?* — Axes labelled, gaps admitted, CSV matches on-screen tables.

# Nestlancer Admin Portal Lab — F20 · Analytics Hub — AI Agent Prompt
### Study screenshots + HTML + report + Swagger → understand full UI requirements → search similar great design templates → hand-craft 5 upgraded designs · one shared colour scheme

> Paste this whole file into an agent (Arena Agent Mode, Cursor, Blade Code) with the **`ui-designing-admin-dashboard`** repo open as the working directory.
>
> **Scope: ONE page family — F20 · Analytics Hub.** One of **25 independent family prompts** (F01–F25): 25 × 5 = **125 templates**, ONE locked teal scheme (master `admin-portal-prompt.md` §5). This prompt builds **`admin-portal-lab/families/F20-analytics-hub/V1…V5/`** — and nothing else. Never touch other families.
>
> **Style parent:** `example-demo-prompt/*` (gates + hand-crafted discipline). Shared rules in `admin-portal-prompt.md` — read it end-to-end first; **this file is the task**. **Do not push, commit, create or switch a branch.**

---

## 1. YOUR ROLE

1. **Product archaeologist** — reconstruct the analytics hub exactly (tabs, ranges, charts, tables, CSV) first. 2. **Research analyst** — quote every F20 Finding/C/A/KEEP. 3. **API analyst** — map series to `admin` analytics + `health` specs. 4. **Design-template researcher** — ≥8 analytics dashboards **after** S/R/A. 5. **Designer + art director** — 5 ideas, same teal. 6. **Craftsperson** — self-contained, offline, no CDN (hand-drawn SVG charts). 7. **Harsh critic** — reject unlabeled axes, spike-of-doom charts, CSV-less analytics.

## 2. THE MISSION

| Stage | Input | Output |
|---|---|---|
| 0 · Baseline | F20 shots + HTML + metadata | Tabs + ranges + series frozen |
| 1 · Reports | `.md` + `.xlsx` 10 sheets | `families/F20-analytics-hub/docs/REPORT-STUDY.md` |
| 2 · API | §3 specs | `docs/API-MAP.md` |
| 3 · Templates | **AFTER** §4 + Gate A | `docs/TEMPLATE-RESEARCH.md` — ≥8 refs |
| 4 · Concepts | 0–3 | `docs/CONCEPTS.md` — **5 cards before code** |
| 5 · Build (MANUAL) | concepts | `V1…V5/index.html` — **5 hand-built** |
| 6 · Verify | all 5 @ 1440 + 390, light + dark | `docs/DELIVERY-REPORT.md` + gallery + manifest |

**Rule 1 — SAME teal scheme, DIFFERENT designs** (master §8.2). **Rule 2 — HAND-CRAFTED ONLY** (master §1.3). Features only from Gate S + Gate R ADDs + Gate A. **Operator question:** trust every number — labelled axes, honest sparsity, CSV for everything.

## 1.3 Manual craft rule — summary

Hand-write each `families/F20-analytics-hub/V#/index.html` (+CSS/JS). One own-variant skeleton copy allowed, then manual redesign. No variant-generating scripts — charts are hand-drawn SVG. Full rule: master §1.3.

## 3. READ FIRST — in this order

1. This prompt + master + the two `example-demo-prompt/` files. 2. **F20 screenshots (4):** `003-analytics.webp` (hub) · `004-analytics-projects.webp` · `005-analytics-requests.webp` · `006-analytics-users.webp`. 3. `nestlancer-admin-pages-html/README.md`, F20 HTML (§4) + `audit-metadata.json` (`/analytics` filter — 16 states). 4. Report `.md` full + `.xlsx` 10 sheets (`.md` wins — C10 is the brief). 5. `backend-api-swagger/README.md` + specs: `admin.openapi.json` (`/analytics/*` series) · `health` (uptime/perf panels). 6. **Gate T only after Swagger + §4.** 7. **Touch only** F20 folder + shared merges (master §9.1).

## 4. THIS FAMILY — F20 · Analytics Hub

The numbers room: **Revenue · Users · Projects · Requests** tabs, **7d/30d/90d/1y** ranges, charts + tables, **Download CSV**. Captured at full breadth (15 states, 4 shots) — and at full sparsity: live series render near-empty (the spike-of-doom problem C10 exists to kill). Your variants implement C10 completely: labelled axes + units on every chart, sparse/empty states with point counts, tabular figures, and CSV kept honest per view.

> **Business weight:** 🟡 decisions are only as good as the charts — every axis labelled, every gap admitted.

| | |
|---|---|
| Routes | `/analytics` (+ 4 area tabs; ranges in-page) |
| Shell | F02's shell language |
| Variants | **V1–V5** — each covers **all 4 tabs + all ranges + CSV** (in-page) |

**States in scope (every variant covers all):**

| HTML snapshot | Route / state | Screenshot |
|---|---|---|
| `92-analytics-index.html` · `13-dashboard-sub-analytics.html` (harvest dupe) | `/analytics` — hub | `003-analytics.webp` |
| `93-analytics-index-tab-revenue.html` · `14-dashboard-sub-analytics-tab-revenue.html` (dupe) | Revenue tab | — (no revenue shot — freeze from DOM) |
| `94-analytics-index-tab-users.html` · `15-…-tab-users.html` (dupe) | Users tab | `006-analytics-users.webp` |
| `95-analytics-index-tab-projects.html` · `16-…-tab-projects.html` (dupe) | Projects tab | `004-analytics-projects.webp` |
| `96-analytics-index-tab-requests.html` · `17-…-tab-requests.html` (dupe) | Requests tab | `005-analytics-requests.webp` |
| `97/98/99/100-analytics-index-tab-7d/30d/90d/1y.html` + `18/19` dupes | Range states (reconcile) | — (range states) |

**Must include (every variant):** 4 area tabs (frozen metrics) · 4 ranges (frozen) · every chart with **labelled axes + units + point counts** (C10) · sparse/empty states (never a lonely spike) · data tables per view (frozen columns) · Download CSV per view (kept, honest) · dark + 375px (charts reflow, tables card-fallback).
**Content lock:** freeze tab/range labels, metric names, table columns, CSV copy at Gate S. Series values stay captured (incl. sparse) — never beautified.
**Cross-cutting:** light + dark · 375px · empty + skeleton + error states · tabs/ranges keyboard-clean · charts have text/data-table equivalents.

## 5. BRAND SYSTEM — locked

`shared/tokens.css` = **EXACTLY** master §5.2 CSS (create-if-missing; else import as-is). Teal only; chart series use chart-1..5 (teal-first). Content lock: master §5.3.

## 6. WHAT TO CHANGE / ADD / KEEP — F20 scope

### CHANGE — every item in **all 5 variants**
- **C10** — Labelled axes + units + sparse/empty states on every chart (kill the spike-of-doom). *(§6.1)*
- **C3** — AA-safe text. *(§6.1)* · **C5** — Teal-only incl. chart palette. *(§6.1)* · **C9** — Mono refs; tabular figures. *(§6.1)* · **C12** — Display metric heroes. *(§6.1)* · **C18** — Dark parity. *(§6.1)* · **C20** — Logo alt. *(§6.1)*

### ADD — with priority + coverage
- No F20-targeted ADDs; C10 + CSV honesty ship as the family craft — 5/5.
**Coverage:** manifest records.

### KEEP — present in every variant
- **Download CSV per view.** · Range discipline (7/30/90/1y). · Microcopy + teal identity. *(§6.3)*

## 7. GATES — in order, print blocks, stop on FAIL

Procedures: master §6. F20 scope: Gate S freezes tabs + ranges + series + tables + CSV; Gate R quotes F20 rows + C10; Gate A maps analytics series; Gate T ≥8 analytics dashboards **after** S/R/A.

```
## GATE S (F20) · Shots: 4/4 · HTML: <n>/16 · Series frozen: <n> · Content frozen: YES · Gate: PASS/FAIL
## GATE R (F20) · MD: YES · XLSX: 10/10 · C: <n>/<n> · A: <n>/<n> · KEEP: YES · Gate: PASS/FAIL
## GATE A (F20) · Specs: 2/2 · Endpoints: <n> · Demo-only: <n> · Gate: PASS/FAIL
## GATE T (F20) · Queries: <n> · Refs: <n>/≥8 · Mapped: YES · No invented: YES · Order: YES · Gate: PASS/FAIL
```

No concepts until S+R+A+T PASS.

## 8. CONCEPTS — 5 cards BEFORE code

Master §8.1–§8.2 (≥3/5 axes incl. A or C). Coverage: ≥1 minimal · ≥1 dense · ≥1 chart-led · ≥1 table-led · ≥1 motion-led.

### 8.3 Roster guidance (adapt freely — keep 5)
| Variant | Suggested aspect (same tokens) |
|---|---|
| V1 | Ground-truth fix: captured hub, C10 throughout, calm |
| V2 | Chart-spine: labelled visualisations own the screen, tables docked |
| V3 | Table-first: the data tables lead, charts summarise |
| V4 | Dense console: compact multi-metric board for growth ops |
| V5 | Motion-signature: range-transition choreography + count-ups |

## 9. BUILD (manual, one by one)

Master §9; family paths below. Charts MUST be hand-drawn SVG + data-table equivalents in every variant.

```
admin-portal-lab/families/F20-analytics-hub/{V1…V5/index.html,docs/{BASELINE-MAP,REPORT-STUDY,API-MAP,TEMPLATE-RESEARCH,CONCEPTS,DELIVERY-REPORT}.md}
```

≤70 KB/variant; 360–1440; `?theme=` boot; V1 pilot first. Preview `:8131`.

## 10. COMPONENT INVENTORY (restyle allowed, dropping states forbidden)

**F20 primaries:** area tabs, range control, charts (labelled + sparse), data tables, CSV control, advanced filters.
States: tab/range active · chart full/sparse/empty/error · filter applied/clear · dark + 375px. Lab-wide: master §10.

## 11–14. PERF · GATE 1/3 · CONSTRAINTS · CHECKLIST

Perf: master §11. Gates: master §12–§13 (tables 1–3; 1 winner).

```
## GATE 1 (F20) · Cards: 5/5 · Sketches: 5/5 · Difference: PASS/FAIL · C 5/5: YES/NO · P1 5/5: YES/NO · P2-P3 ≥3/5: YES/NO · Gate: PASS/FAIL
## GATE 3 (F20) · Hand-built: 5/5 · Generators: 0 · Widths×themes: <…> · Checklist: <…>/5 · Blockers: 0 · Gate: PASS/FAIL
```

Constraints: master §14. Scope = F20 folder + shared merges only.

- [ ] S/R/A/T PASS — `docs/` ×4 · Gate 1 PASS · Gate 2a/2b — 5 hand-authored; gallery + manifest + DECISIONS; 0 generators
- [ ] Same teal tokens; C10/C3/C5/C9/C12/C18/C20 in 5/5; CSV kept 5/5 (manifest)
- [ ] Empty+skeleton+error; light+dark; 360–1440; keyboard-complete; reduced-motion; no-JS readable
- [ ] Gate 3 PASS — §7.1 ×5, 0 blockers, `DELIVERY-REPORT.md` + 1 winner · Reported paths + `:8131` + limits

### Operator shortcuts
- "Restore §5 teal." · "V# fails Difference vs V1 — axis A/C." · "Unlabelled axis — FAIL, that's the brief." · "Beautified sparse data — FAIL." · "F20-V1 approved — never regenerate it."

---

*End of prompt F20. Start at §3 Step 1. Print every gate block. Hand-craft all 5.*

# Nestlancer Admin Portal Lab — F20 · Analytics Hub — AI Agent Prompt
### Study screenshots + HTML + report + Swagger → understand full UI requirements → search similar great design templates → hand-craft 5 upgraded designs · one shared colour scheme

> Paste this whole file into an agent (Arena Agent Mode, Cursor, Blade Code) with the **`ui-designing-admin-dashboard`** repo open as the working directory.
>
> **Scope: ONE page family — F20 · Analytics Hub.** One of **25 independent family prompts** (F01–F25): 25 × 5 = **125 templates**, ONE locked teal scheme (master `admin-portal-prompt.md` §5). This prompt builds **`admin-portal-lab/families/F20-analytics-hub/V1…V5/`** — and nothing else. Never touch other families.
>
> **Style parent:** `example-demo-prompt/*` (gates + hand-crafted discipline). Shared rules in `admin-portal-prompt.md` — read it end-to-end first; **this file is the task**. **Do not push, commit, create or switch a branch.**

---

> **Owner review — full-width, collapsible shell:** Authenticated console pages F02–F25 must use the full viewport width available beside the sidebar, with responsive gutters and no centered page-level max-width. Provide an obvious keyboard-accessible desktop Collapse/Expand control, a named icon rail, and persistent state across reloads/families; use a mobile drawer instead on small screens. Check 1920/2560 as well as 360–1440 in both themes. Keep shared tokens unchanged (`--content` must not cap console pages). Individual reading columns and dialogs may remain appropriately sized. F01 sign-in remains standalone, without an added sidebar. See master §9.2a.

## Run revision — 2 November 2026 (owner-directed: analyse captures → research → update prompt → then run)

This revision supersedes the orientation-only gaps below. It was produced by re-reading all 4 screenshots individually, all 16 F20 HTML snapshots + `audit-metadata.json`, the report (§4 inventory row, §5.2/§5.3, C10) and the Swagger analytics/health/stats ops, then studying 14 public analytics/ops dashboards **before** any concept was drawn. Evidence lives in `admin-portal-lab/families/F20-analytics-hub/docs/` (BASELINE-MAP, REPORT-STUDY, API-MAP, TEMPLATE-RESEARCH, CONCEPTS).

**R1 · The numbers must tie out, and where they don't, say so.** Gate S now includes a mandatory **tie-out audit** (every captured total vs the sum of its own parts). Recorded for F20: revenue categories sum to the hero exactly ✔ · request statuses sum to 46 ✔ · categories sum to 46 ✔ · open pipeline 13 = Submitted 11 + Under Review 2 ✔ · conversion 43.9% = **18 ÷ 41** (not 18 ÷ 46) ⚠ · acceptance 50% = 18 ÷ 36 ⚠ · **projects: 4 + 10 = 14 of 18 → 4 uncounted** ✗ · users 34/34/34 unverified ✗ · "Avg. response time 0 minutes" = absence, not a measurement ⚠. Every variant must surface these as **honesty devices** (numerator ÷ denominator under rates, an "uncounted" badge with the delta, an *unverified* chip, an absence note). Never repair a captured number; never present a product figure that the capture does not contain.

**R2 · Provenance at the point of use (Gate T refs 5, 6).** Each tab discloses, in the UI: the documented endpoint (mono, prefixed `DEMO` where a real request is not made), the period mapping, the computation basis, the capture date, and — when Swagger has no field schema (`additionalProperties:true`) — the explicit line "field names not documented in Swagger". A "how is this calculated" popover/drawer is required somewhere in every variant.

**R3 · Two documented traps must be visible, not hidden.** (a) Range values `7d/30d/90d/1y` are **not** the API enum `TODAY/WEEK/MONTH/QUARTER/YEAR`, and all four captured range states render identical data — so each variant shows the mapping and states that the range changes bucket/count, not totals. (b) The requests/quotes stats endpoints take **no `period`** — their KPI strips therefore carry a **lifetime** chip.

**R4 · Charts must never be the only copy of a number.** Chart↔table toggle in every variant (Gate T refs 10, 11), legend with readable aliases always visible, adjacent charts share aligned x-axes when stacked, and every chart prints **points rendered / buckets in range / buckets with value**. The captured spike stays a spike (never smoothed or beautified) and the captured blue donut slice becomes brand-500 (C5).

**R5 · No filters.** The family prompt's component list mentioned "advanced filters"; there is no filter contract in Swagger and none in the capture. **Excluded.** Do not invent saved views, cohorts, comparisons, PDF exports or date pickers.

**R6 · Enterprise-ops state rules carried from the 2026-11-01/02 reviews.** Skeleton = shaped like the coming chart (never a spinner); empty = what/why/next; error = what/why/retry + support with `role="alert"` focus; **degraded series (A11)** for the Projects tab because `/api/dashboard/projects*` is down in production (report Finding #1); dark parity designed not inverted; 360–2560 with no page-level horizontal scroll; table = own scroll region + card fallback under `sm`; 44px coarse targets; tabular numerals globally; reduced-motion kills all animation; no-JS keeps every number readable.

**R7 · Cross-family consistency (all families, next runs).** Desktop operator surfaces now assume: full-available-width canvas beside a collapsible sidebar (master §9.2a) · one hero verdict + a compact strip (C1/C12) · mono numerals and refs (C9) · status = icon + colour + text (C3) · provenance chips for demo/captured data · a CSV/export affordance per data view where one is captured. Mobile (360–430px) is a **read-only review** surface for analytics: hero → verdict → chart (reflowed, legend to top) → tables as stacked KV cards — never a horizontally squeezed console.

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

**Must include (every variant):** 4 area tabs (frozen metrics) · 4 ranges (frozen) · every chart with **labelled axes + units + point counts** (C10) · sparse/empty states (never a lonely spike) · data tables per view (frozen columns) · Download CSV per view (kept, honest) · dark + 375px (charts reflow, tables card-fallback) · **tie-out honesty chips (R1)** · **provenance disclosure (R2)** · **range-mapping + lifetime chips (R3)** · **chart↔table toggle (R4)** · **degraded Projects series (A11)**.
**Not in scope:** filters, saved views, cohorts, comparisons, PDF/Excel export, date pickers, drill-down pages (no contract in Swagger, none in capture — revision R5).
**Content lock:** freeze tab/range labels, metric names, table columns, CSV copy at Gate S. Series values stay captured (incl. sparse) — never beautified.
**Cross-cutting:** light + dark · 375px · empty + skeleton + error states · tabs/ranges keyboard-clean · charts have text/data-table equivalents.

## 5. BRAND SYSTEM — locked

`shared/tokens.css` = **EXACTLY** master §5.2 CSS (create-if-missing; else import as-is). Teal only; chart series use chart-1..5 (teal-first). Content lock: master §5.3.

## 6. WHAT TO CHANGE / ADD / KEEP — F20 scope

### CHANGE — every item in **all 5 variants**
- **C10** — Labelled axes + units + sparse/empty states on every chart (kill the spike-of-doom). *(§6.1)* Now also: point counts, missing-bucket counts, chart↔table toggle (revision R4).
- **C3** — AA-safe text. *(§6.1)* · **C5** — Teal-only incl. chart palette (the captured Projects donut's **blue COMPLETED slice** must become brand-500). *(§6.1)* · **C9** — Mono refs; tabular figures. *(§6.1)* · **C12** — Display metric heroes. *(§6.1)* · **C18** — Dark parity. *(§6.1)* · **C20** — Logo alt. *(§6.1)*
- **Tie-out honesty (R1)** — numerator ÷ denominator under every rate, "uncounted"/"unverified"/"absence" chips where the capture disagrees with itself; never repair a captured figure.

### ADD — with priority + coverage
- No F20-targeted ADDs; C10 + CSV honesty ship as the family craft — 5/5.
- **A11 (global item, adopted here) — degraded-series state** for the Projects tab, because `/api/dashboard/projects*` 500s in production (report Finding #1). Must appear in 5/5; record it as `A11 (global)` in the manifest.
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
| V1 | **Calibrated ledger** — captured hub, C10 throughout, calibration gutter under every chart, calm single column |
| V2 | **Signal spine** — chart-spine with one shared, aligned time axis + docked table rail |
| V3 | **Readout stack** — table-first; rate rows expand into their own computation + endpoint |
| V4 | **Dense board** — bento board with an attention strip that hoists unverified/degraded facts above the metrics |
| V5 | **Choreograph** — range-transition choreography (crossfade + stroke-draw + count-up) with an exportable receipt rail |

(As built for this run. See `docs/CONCEPTS.md` for the printed cards, sketches and difference tables.)

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

## Enterprise-standards addendum (2026-11-01 review)

Added after studying **12 live enterprise/operator login pages** (AWS Console, Google Cloud, Azure/M365, Salesforce, Cloudflare, Datadog, Stripe Dashboard, Vercel, GitHub, Atlassian, DigitalOcean, Heroku) and rebuilding F01 to enterprise standard — full extraction in master `admin-portal-prompt.md` **§5.4** and `admin-portal-lab/families/F01-auth-login/docs/TEMPLATE-RESEARCH.md` (Gate T-2). From now on, EVERY variant of EVERY family follows:

- **Errors:** a top-of-surface `role="alert"` region that receives focus on failure; per-field `aria-invalid` + `aria-describedby`. Status/notice = icon + colour + text, never colour alone (C3).
- **Notices** (expired session, undo windows, receipts, degraded banner) are **dismissible** and announced via a polite live region.
- **Password fields** (auth door, set-password dialogs) get Show/Hide (`aria-pressed` + label swap) + a **Caps Lock hint**; any keep-me-signed-in/remember control gets a shared-device honesty hint.
- **Forms** carry the consent/legal line where the product has one ("By continuing, you agree to our Terms and Privacy Policy.") and pages carry a footer with **© 2026 Nestlancer** · Terms · Privacy · host in mono · "Secured · HTTPS" chip.
- **Progressive disclosure** (one field → Next) is allowed for auth/creation flows when it speeds the operator; single-page forms are equally valid — choose per page job, keep frozen labels.
- **Autofocus** the first field on standalone surfaces; skip link everywhere; **44px targets on coarse pointers**; `?theme=` boot + real dark parity (C18).
- **Trust signals stay honest:** host in mono, AA status badges, no invented SSO/passkey/region/language pickers — Gate-A endpoints or demo-labelled in DECISIONS.md only.
- **Creative bar (master §5.5, 2026-11-01):** every variant is art-directed with one strong idea (canvas / split+motion / console metaphor / editorial spread / choreographed center) — background art inside the teal ramp only, motion = transform/opacity + at most one stroke-dashoffset element, display type with tight tracking, 8px rhythm. If it could be any SaaS page, rebuild axis A/C, never the colour. Also (2026-11-01): brand canvases/panels must be theme-aware via CSS vars (light AND dark both work — no hardcoded green), and every page uses the shared client-lab logo pair from `admin-portal-lab/assets/` (`logo-mark-light/dark.svg` swapped by `.dark`, `alt` required, `favicon.svg` as icon) — see master §5.5 items 8–9. Pass 3 (2026-11-01): auth-style pages follow the production-mindset rules — editorial split with product proof, live signals (ping/PASS/PENDING), mono eyebrows, kinetic display type, aurora/scanline ambience, theme-aware canvases (master §5.5 item 10). Pass 4 (2026-11-01 owner review #4): pages must read hand-crafted (scribbles, stickers, offset layers, annotations), never clone a live production layout, form boxes get real presence (offset shadow + top bar + focus-within), and owner-approved ambient variants may use the green-on-dark-blue scheme (#e9f0f8/#081426) via local vars only — master §5.5 item 11. Pass 5 (2026-11-01 owner review #5): auth forms are SINGLE combined email+password panels (one submit, no step-wise disclosure) — master §5.5 item 12.


---

*End of prompt F20. Start at §3 Step 1. Print every gate block. Hand-craft all 5.*


---

## Owner review — source-complete data and differentiated design (2026-11-02)

When a reviewer says demo data is incomplete or designs resemble the production screenshot, re-inspect the applicable captures individually, reconcile every identity and visible record with the related Swagger contracts, and document missing or conflicting data. Do not substitute one account’s data for another, invent unseen pages, claim a simulated action was executed, or claim a server permission/audit result. Search and inspect relevant public design examples, then change information architecture and visual hierarchy as appropriate — not just colours or small spacing changes. Preserve approved work unless the user asks for revisions; this review explicitly requests changes to both F15 and F16. Test the revised pages and report actual coverage and unresolved gaps. Follow the shared master and relevant family scope; do not mark gates passed merely because an initial mock exists.

---

## Run record — 2 November 2026 (F20 executed after the revision above)

Executed scope: **F20 only**, as authorised. Evidence: `admin-portal-lab/families/F20-analytics-hub/docs/` (`BASELINE-MAP.md` incl. the tie-out audit, `REPORT-STUDY.md`, `API-MAP.md`, `TEMPLATE-RESEARCH.md` with 14 refs, `CONCEPTS.md`, `DELIVERY-REPORT.md`). Built: `V1…V5/index.html` hand-authored (shared `analytics.css`/`analytics.js` + per-variant `design.css`), no generator scripts.

Gate results and limitations are recorded in `DELIVERY-REPORT.md`; browser verification was re-run for this revision (Chromium/Playwright, 375/768/1024/1440/1920/2560 × light/dark, interaction + a11y + resource checks). Production integration, real API responses, deployed-route behaviour and owner approval remain **unclaimed**.

Open questions handed back to the owner for the review pass: (1) should the Projects tab's 4 uncounted projects be treated as a data bug to flag (current) or removed from the total; (2) is a lifetime-scoped KPI strip acceptable for Requests/Quotes, or should those KPIs move to the Requests/Quotes pages; (3) should CSV be per-card (one manifest each) or per-view (current); (4) the revenue trend capture conflict (`+100 up` in the screenshot vs `-100 down` in the DOM) — which is the product truth.

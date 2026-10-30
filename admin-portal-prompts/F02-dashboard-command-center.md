# Nestlancer Admin Portal Lab — F02 · Dashboard · Command Center — AI Agent Prompt
### Study screenshots + HTML + report + Swagger → understand full UI requirements → search similar great design templates → hand-craft 5 upgraded designs · one shared colour scheme

> Paste this whole file into an agent (Arena Agent Mode, Cursor, Claude Code) with the **`ui-designing-admin-dashboard`** repo open as the working directory.
>
> **Scope: ONE page family — F02 · Dashboard · Command Center.** One of **25 independent family prompts** (F01–F25): 25 × 5 = **125 templates**, ONE locked teal scheme (master `admin-portal-prompt.md` §5). This prompt builds **`admin-portal-lab/families/F02-dashboard-command-center/V1…V5/`** — and nothing else. Never touch other families.
>
> **This family owns the lab's shell** (sidebar + 52px header + breadcrumb + ⌘K + theme + bells + operator menu + mobile drawer), its **dark-mode proof** and its **375px mobile proof** — the other 24 families inherit from here. Suggested **first** build.
>
> **Style parent:** `example-demo-prompt/*` (gates + hand-crafted discipline). Shared rules live in `admin-portal-prompt.md` — read it end-to-end first; **this file is the task**. **Do not push, commit, create or switch a branch.**

---

## 1. YOUR ROLE

1. **Product archaeologist** — reconstruct the Command center exactly (strip, KPIs, charts, tables, moderation card, ⌘K) before changing a pixel. 2. **Research analyst** — quote every F02 Finding/C/A/KEEP. 3. **API analyst** — map surfaces to admin/health specs. 4. **Design-template researcher** — ≥8 ops-dashboards **after** S/R/A. 5. **Designer + art director** — 5 different ideas, same teal. 6. **Craftsperson** — self-contained, offline, no CDN. 7. **Harsh critic** — reject KPI wallpaper, dead strip cells, colour-only status, mouse-only drill-downs.

## 2. THE MISSION

| Stage | Input | Output |
|---|---|---|
| 0 · Baseline | F02 shots + HTML + metadata | Content frozen (incl. **measured shell**) |
| 1 · Reports | `.md` + `.xlsx` 10 sheets | `families/F02-dashboard-command-center/docs/REPORT-STUDY.md` |
| 2 · API | admin + health specs | `docs/API-MAP.md` |
| 3 · Templates | **AFTER** §4 + Gate A | `docs/TEMPLATE-RESEARCH.md` — ≥8 refs |
| 4 · Concepts | 0–3 | `docs/CONCEPTS.md` — **5 cards before code** |
| 5 · Build (MANUAL) | concepts | `V1…V5/index.html` — **5 hand-built** |
| 6 · Verify | all 5 @ 1440 + 390, light + dark | `docs/DELIVERY-REPORT.md` + gallery + manifest |

**Rule 1 — SAME teal scheme, DIFFERENT designs** (master §8.2). **Rule 2 — HAND-CRAFTED ONLY** (master §1.3, attested in `DECISIONS.md`). Features only from Gate S + Gate R ADDs + Gate A. **Operator question:** the first 30 seconds of every shift must direct the shift.

## 1.3 Manual craft rule — summary

Hand-write each `families/F02-dashboard-command-center/V#/index.html` (+CSS/JS). One own-variant skeleton copy allowed, then manual redesign. No variant-generating scripts. Full rule: master §1.3.

## 3. READ FIRST — in this order

1. This prompt + master + the two `example-demo-prompt/` files. 2. **F02 screenshots (3):** `015-dashboard.webp` (Command center) · `051-profile.webp` (operator profile — linked from the operator menu) · `072-global-search-admin-dialog.webp` (⌘K open state — the trigger lives here; the palette's deep design is F03). 3. `nestlancer-admin-pages-html/README.md`, F02 HTML (§4) + `audit-metadata.json` (`/dashboard` filter). 4. Report `.md` full + `.xlsx` 10 sheets (`.md` wins). 5. `backend-api-swagger/README.md` + specs: `admin.openapi.json` (`/dashboard/overview`, `/revenue`, `/users`, `/analytics/*`, `/projects`, `/performance`, `/activity`, `/alerts`) · `health.openapi.json` (System healthy) · `notifications` + `messaging` (bell counts). 6. **Gate T only after Swagger + §4.** 7. **Touch only** F02 folder + shared merges (master §9.1).

## 4. THIS FAMILY — F02 · Dashboard · Command Center

The shift's front door. Captured: the **Needs-attention strip** (Pending requests 11 · Open quotes 7 · Pending pay 16 · Flagged msgs 0 · Contact new 17 · Alert
s 0 + *System healthy*), **6 KPI cards** (Revenue (month) ₹7,08,160.00 + *INR · ₹2,60,790.00 awaiting* · Total users 34 · New users 34 · Active projects 4 · Completed projects 10 · Pending requests 11 — every card ending in an identical *↑ new*), **Revenue trajectory** + **Request volume** charts (7/30/90/1y tabs; captured sparse: *30 points · latest ₹0.00*), **Recent requests** (5-col) + **Recent payments** tables, **Project mix** (In Progress 4·24% · Pending Payment 3·18% · Completed 10·59%), **Moderation queues** card (Flagged 0 · New contact mail 17 · Pending settlements 16 · Message center →). Reconcile report vs captures at Gate S — captures win. **You define the shell all families inherit** (measure it, don't guess it).

> **Business weight (report §4.2):** 🟠 first 30 seconds — strip is great, KPIs are noise. Needs 1 hero + drill-downs + labelled charts.

| | |
|---|---|
| Routes | `/dashboard` |
| Shell | **DEFINITIVE:** sidebar (measure width/bg/active at Gate S) + 52px header + breadcrumb + ⌘K trigger + theme toggle + bells (freeze captured counts) + shield + operator menu (→ `051` profile) + mobile drawer. C6 badges + C15 banner removal decided here. |
| Variants | **V1–V5** — each covers **all** states (range tabs switch in-page) |

**States in scope (every variant covers all):**

| HTML snapshot | Route / state | Screenshot |
|---|---|---|
| `02-dashboard-index.html` | `/dashboard` — Command center | `015-dashboard.webp` |
| `03-dashboard-global-search-dialog.html` | `/dashboard` — ⌘K open (trigger context) | `072-global-search-admin-dialog.webp` |
| `04`–`11-dashboard-index-tab-*.html` (8 files: 7d/30d/90d/1y × 2 chart groups) | Range-tab states | — (tab states) |
| `132-dashboard-dark-mode.html` + `191-…-via-menu.html` | Dark attempt (captured = light; toggle dead) | — (dark gap evidence) |
| `133-dashboard-mobile-viewport.html` | `/dashboard` @375×812 | — (mobile proof) |

**Must include (every variant):** verdict-led strip with **drill-down cells** (C2: click count → filtered queue + oldest-age badge) · **1 hero + compact strip** (C1: hero = blocked items + ₹ at risk, from frozen figures) · **labelled charts + sparse states** (C10: axes + *only N points / no data in range*) · recent-requests/payments tables w/ deep links · project-mix + moderation cards · operator digest (A9: my actions today, queue delta) · degraded banner slot (A11) · ops-health mini-grid (A13, Signal-style) · ⌘K trigger (F03 owns palette depth) · **dark + 375px proof for the whole lab**.
**Content lock:** freeze every strip count, KPI value + *awaiting* line, chart captions, table rows/cols, mix %, moderation rows, *System healthy*, bell counts, operator identity (`Riya Kapoor`), footer. Flag the suspect 34/34/34 user counts (report finding S5/C16) — freeze, don't fix the data.
**Cross-cutting:** light + dark (you prove dark works — C18) · 375px + card-fallbacks · empty + skeleton + error + degraded states · keyboard-clean strip/tabs.

## 5. BRAND SYSTEM — locked

Create `shared/tokens.css` with **EXACTLY** master §5.2 CSS (you are likely first — if present, import as-is). Teal only. Content lock: master §5.3.

## 6. WHAT TO CHANGE / ADD / KEEP — F02 scope

### CHANGE — every item in **all 5 variants**
- **C1** — 1 hero + compact strip (hero = blocked items + ₹ at risk). *(§6.1)*
- **C2** — Every strip cell drills to its filtered queue + oldest-age badge. *(§6.1)*
- **C6** — Nav badges (Requests 11 · Verification 16 · Contact 14…) + hub-grouped nav; decided in your shell. *(§6.1)*
- **C10** — Labelled axes + sparse-data states on both charts (kill the spike-of-doom). *(§6.1)*
- **C3** — AA-safe badge text everywhere (success/info darkened). *(§6.1)*
- **C5** — Teal-only tokens; blue strays deleted. *(§6.1)*
- **C9** — Mono IDs/refs/timestamps; full value on hover. *(§6.1)*
- **C12** — 32–40px display for ₹ hero + queue counts. *(§6.1)*
- **C15** — No cookie banner in any variant. *(§6.1)*
- **C18** — Dark parity proven here (or toggle removed lab-wide — your call, documented). *(§6.1)*
- **C20** — Logo alt text. *(§6.1)*

### ADD — with priority + coverage
- **A9** (P2 → ≥3/5) — Operator digest + handover (my actions today, queue delta). 
- **A11** (P2 → ≥3/5) — Degraded banner slot (System healthy ↔ outage states).
- **A13** (P3 → ≥3/5) — Ops-health mini-grid.
**Coverage:** P1 in 5/5 · P2–P3 in ≥3/5 (manifest).

### KEEP — present in every variant
- The **Needs-attention strip** idea (extended, never replaced). · **⌘K trigger + hints**. · **Graceful honest microcopy**. · **Teal + Inter + 6px identity**. · **Settlement transparency figures**. *(report §6.3)*

## 7. GATES — in order, print blocks, stop on FAIL

Procedures: master §6. F02 scope: Gate S maps 2 shots + 9 HTML + shell measurements (sidebar px, header 52, breakpoints) + bell counts; Gate R quotes F02 findings/C/A/KEEP; Gate A maps admin+health (+bell specs); Gate T ≥8 ops-dashboards **after** S/R/A.

```
## GATE S (F02) · Shots: <n>/3 · HTML: <n>/13 · Shell measured: YES · Content frozen: YES · Gate: PASS/FAIL
## GATE R (F02) · MD: YES · XLSX: 10/10 · C: <n>/<n> · A: <n>/<n> · KEEP: YES · Gate: PASS/FAIL
## GATE A (F02) · Specs: <n>/<n> · Endpoints: <n> · Demo-only: <n> · Gate: PASS/FAIL
## GATE T (F02) · Queries: <n> · Refs: <n>/≥8 · Mapped: YES · No invented: YES · Order: YES · Gate: PASS/FAIL
```

No concepts until S+R+A+T PASS.

## 8. CONCEPTS — 5 cards BEFORE code

Card template + axes: master §8.1–§8.2 (≥3/5 axes incl. A or C). Coverage: ≥1 minimal · ≥1 dense · ≥1 queue-led · ≥1 narrative-led · ≥1 motion-led.

### 8.3 Roster guidance (adapt freely — keep 5)
| Variant | Suggested aspect (same tokens) |
|---|---|
| V1 | Ground-truth fix: current IA, hero + drill-downs + labelled charts, calm restraint (+ definitive shell) |
| V2 | Verdict-hero: the sentence + the one action own the first screen |
| V3 | Queue-spine: Needs-attention becomes the page's backbone with inline triage |
| V4 | Health-grid (Signal-style): ops-health grid + labelled pipeline + digest |
| V5 | Dense console: compact multi-metric command surface for power operators |

## 9. BUILD (manual, one by one)

Master §9 applies; family paths below. Your shell/dark/mobile decisions are inherited — document them in `DECISIONS.md` F02 section + `docs/DELIVERY-REPORT.md`.

```
admin-portal-lab/families/F02-dashboard-command-center/{V1…V5/index.html,docs/{BASELINE-MAP,REPORT-STUDY,API-MAP,TEMPLATE-RESEARCH,CONCEPTS,DELIVERY-REPORT}.md}
```

≤70 KB/variant; 360–1440; `?theme=` boot; V1 pilot first; empty+loading+error+degraded day one. Preview `:8131`.

## 10. COMPONENT INVENTORY (restyle allowed, dropping states forbidden)

**F02 primaries:** shell (definitive), attention strip + hero KPI, KPI strip, charts (labelled + sparse), recent tables, project-mix, moderation card, digest, degraded banner, health grid, ⌘K trigger, theme toggle, mobile drawer.
States: drill-down/zero per strip cell · hero with/without blocked items · charts full/sparse/empty/error · tables + deep links · banner healthy/degraded · drawer open/closed · dark + 375px. Lab-wide contract: master §10.

## 11–14. PERF · GATE 1/3 · CONSTRAINTS · CHECKLIST

Perf: master §11. Gates 1/2a/2b/3: master §12–§13 (tables 1–3; 1 winner).

```
## GATE 1 (F02) · Cards: 5/5 · Sketches: 5/5 · Difference: PASS/FAIL · C 5/5: YES/NO · P1 5/5: YES/NO · P2-P3 ≥3/5: YES/NO · Gate: PASS/FAIL
## GATE 3 (F02) · Hand-built: 5/5 · Generators: 0 · Widths×themes: <…> · Checklist: <…>/5 · Blockers: 0 · Gate: PASS/FAIL
```

Constraints: master §14. Scope = F02 folder + shared merges only.

- [ ] S/R/A/T PASS — `docs/` ×4 (shell measured in BASELINE-MAP) · Gate 1 PASS — `CONCEPTS.md` · Gate 2a/2b — 5 hand-authored; gallery + manifest + DECISIONS; 0 generators
- [ ] Same teal tokens; C1/C2/C6/C10/C3/C5/C9/C12/C15/C18/C20 in 5/5; A9/A11/A13 ≥3/5 (manifest)
- [ ] Empty+skeleton+error+degraded; light+dark proof; 360–1440; keyboard-clean; reduced-motion; no-JS reachable
- [ ] Gate 3 PASS — §7.1 ×5, 0 blockers, `DELIVERY-REPORT.md` + 1 winner · Reported paths + `:8131` + limits

### Operator shortcuts
- "Restore §5 teal — no blue." · "V# fails Difference vs V1 — axis A/C." · "Gate 2 FAIL — generator exists." · "Dead strip cell — drill-down or demo-labelled." · "Slow first-30s — verdict + hero first." · "F02-V1 approved — never regenerate it."

---

*End of prompt F02. Start at §3 Step 1. Print every gate block. Hand-craft all 5. You set the shell — measure twice.*

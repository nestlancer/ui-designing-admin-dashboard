# Nestlancer Admin Portal Lab — F22 · Portfolio Studio — AI Agent Prompt
### Study screenshots + HTML + report + Swagger → understand full UI requirements → search similar great design templates → hand-craft 5 upgraded designs · one shared colour scheme

> Paste this whole file into an agent (Arena Agent Mode, Cursor, Claude Code) with the **`ui-designing-admin-dashboard`** repo open as the working directory.
>
> **Scope: ONE page family — F22 · Portfolio Studio.** One of **25 independent family prompts** (F01–F25): 25 × 5 = **125 templates**, ONE locked teal scheme (master `admin-portal-prompt.md` §5). This prompt builds **`admin-portal-lab/families/F22-portfolio-studio/V1…V5/`** — and nothing else. Never touch other families.
>
> **Style parent:** `example-demo-prompt/*` (gates + hand-crafted discipline). Shared rules in `admin-portal-prompt.md` — read it end-to-end first; **this file is the task**. **Do not push, commit, create or switch a branch.**

---

## 1. YOUR ROLE

1. **Product archaeologist** — reconstruct the portfolio studio exactly (items, categories, ordering, publish, analytics) first. 2. **Research analyst** — quote every F22 Finding/C/A/KEEP. 3. **API analyst** — map surfaces to `portfolio` spec. 4. **Design-template researcher** — ≥8 portfolio/showcase admins **after** S/R/A. 5. **Designer + art director** — 5 ideas, same teal. 6. **Craftsperson** — self-contained, offline, no CDN. 7. **Harsh critic** — reject order-losing lists, one-click deletes, preview-less publishing.

## 2. THE MISSION

| Stage | Input | Output |
|---|---|---|
| 0 · Baseline | F22 shots + HTML + metadata | Items + categories + controls frozen |
| 1 · Reports | `.md` + `.xlsx` 10 sheets | `families/F22-portfolio-studio/docs/REPORT-STUDY.md` |
| 2 · API | `portfolio` spec | `docs/API-MAP.md` |
| 3 · Templates | **AFTER** §4 + Gate A | `docs/TEMPLATE-RESEARCH.md` — ≥8 refs |
| 4 · Concepts | 0–3 | `docs/CONCEPTS.md` — **5 cards before code** |
| 5 · Build (MANUAL) | concepts | `V1…V5/index.html` — **5 hand-built** |
| 6 · Verify | all 5 @ 1440 + 390, light + dark | `docs/DELIVERY-REPORT.md` + gallery + manifest |

**Rule 1 — SAME teal scheme, DIFFERENT designs** (master §8.2). **Rule 2 — HAND-CRAFTED ONLY** (master §1.3). Features only from Gate S + Gate R ADDs + Gate A. **Operator question:** curate the public showcase — order, publish, feature — with preview before every public change.

## 1.3 Manual craft rule — summary

Hand-write each `families/F22-portfolio-studio/V#/index.html` (+CSS/JS). One own-variant skeleton copy allowed, then manual redesign. No variant-generating scripts. Full rule: master §1.3.

## 3. READ FIRST — in this order

1. This prompt + master + the two `example-demo-prompt/` files. 2. **F22 screenshots (4):** `048-portfolio-listing.webp` · `049-portfolio-details-edit.webp` · `050-portfolio-new.webp` · `082-portfolio-item-analytics-panel.webp`. 3. `nestlancer-admin-pages-html/README.md`, F22 HTML (§4) + `audit-metadata.json` (`/portfolio` filter — 57 buttons; Remove×4/Add category/↑↓/Analytics/Unpublish/Delete). 4. Report `.md` full + `.xlsx` 10 sheets (`.md` wins). 5. `backend-api-swagger/README.md` + spec: `portfolio.openapi.json` (30 paths — items, categories, ordering, publish, analytics). 6. **Gate T only after Swagger + §4.** 7. **Touch only** F22 folder + shared merges (master §9.1).

## 4. THIS FAMILY — F22 · Portfolio Studio

The showcase curator: portfolio **items** (add/edit, publish/unpublish, feature, delete), **categories** (add/remove), **ordering** (↑↓ controls — keyboard-first), **analytics** (views/engagement per item), and item **preview** before public changes. Captured dense (57 buttons, 7 states) — your C8-adjacent craft tames the control density (overflow menus, roving lists) while keeping every control reachable.

> **Business weight:** 🟡 the public proof of work — curation quality is brand quality.

| | |
|---|---|
| Routes | `/portfolio` (+ items/categories/analytics in-page) |
| Shell | F02's shell language |
| Variants | **V1–V5** — each covers **items + categories + ordering + publish + analytics** (in-page) |

**States in scope (every variant covers all):**

| HTML snapshot | Route / state | Screenshot |
|---|---|---|
| `113-portfolio-index.html` | `/portfolio` — studio | `048-portfolio-listing.webp` |
| `114…118-portfolio-sub-portfolio-*-edi*.html` (5 edits) | Item edits (reconcile) | `049-portfolio-details-edit.webp` |
| `186-portfolio-new-item.html` | New item | `050-portfolio-new.webp` |
| `176-portfolio-index-state-analytics.html` | Analytics state | `082-portfolio-item-analytics-panel.webp` |

**Must include (every variant):** item grid/list (frozen fields) + add/edit · categories (add/remove) · ordering (↑↓ + keyboard + position honesty) · publish/unpublish/feature/delete (confirm-gated, preview before public) · analytics per item (frozen metrics) · control-density craft (overflow + roving) · dark + 375px.
**Content lock:** freeze item fields, category labels, control labels, analytics metrics, confirm copy at Gate S. Never invent items or metrics.
**Cross-cutting:** light + dark · 375px · empty + skeleton + error + publish-receipt states · lists keyboard-complete (roving + reorder keys).

## 5. BRAND SYSTEM — locked

`shared/tokens.css` = **EXACTLY** master §5.2 CSS (create-if-missing; else import as-is). Teal only. Content lock: master §5.3.

## 6. WHAT TO CHANGE / ADD / KEEP — F22 scope

### CHANGE — every item in **all 5 variants**
- **C9** — Mono refs/slugs. *(§6.1)* · **C17** — Guarded curation: preview + confirm on publish/feature/delete. *(§6.1)*
- **C3** — AA-safe text. *(§6.1)* · **C5** — Teal-only. *(§6.1)* · **C12** — Display counts. *(§6.1)* · **C18** — Dark parity. *(§6.1)* · **C20** — Logo alt. *(§6.1)*

### ADD — with priority + coverage
- No F22-targeted P1 ADDs; ordering + preview craft ships as family work — 5/5.
**Coverage:** manifest records.

### KEEP — present in every variant
- Showcase structure (items + categories + analytics). · Microcopy + teal identity. *(§6.3)*

## 7. GATES — in order, print blocks, stop on FAIL

Procedures: master §6. F22 scope: Gate S freezes items + categories + ordering + analytics; Gate R quotes F22 rows; Gate A maps `portfolio` 20 paths; Gate T ≥8 portfolio/showcase admins **after** S/R/A.

```
## GATE S (F22) · Shots: 4/4 · HTML: <n>/8 · Controls tamed: YES · Content frozen: YES · Gate: PASS/FAIL
## GATE R (F22) · MD: YES · XLSX: 10/10 · C: <n>/<n> · A: <n>/<n> · KEEP: YES · Gate: PASS/FAIL
## GATE A (F22) · Specs: 1/1 · Endpoints: <n> · Demo-only: <n> · Gate: PASS/FAIL
## GATE T (F22) · Queries: <n> · Refs: <n>/≥8 · Mapped: YES · No invented: YES · Order: YES · Gate: PASS/FAIL
```

No concepts until S+R+A+T PASS.

## 8. CONCEPTS — 5 cards BEFORE code

Master §8.1–§8.2 (≥3/5 axes incl. A or C). Coverage: ≥1 minimal · ≥1 dense · ≥1 gallery-led · ≥1 ledger-led · ≥1 motion-led.

### 8.3 Roster guidance (adapt freely — keep 5)
| Variant | Suggested aspect (same tokens) |
|---|---|
| V1 | Ground-truth fix: captured studio, tamed controls, guarded publishes |
| V2 | Gallery-spine: the showcase owns the screen, curation docks |
| V3 | Ledger-first: items as a sortable ledger with preview drawer |
| V4 | Dense console: compact curator + analytics rail |
| V5 | Motion-signature: reorder/publish choreography + transitions |

## 9. BUILD (manual, one by one)

Master §9; family paths below. Publish/feature/delete MUST be preview + confirm-gated in every variant (lab static — confirm + receipt copy only).

```
admin-portal-lab/families/F22-portfolio-studio/{V1…V5/index.html,docs/{BASELINE-MAP,REPORT-STUDY,API-MAP,TEMPLATE-RESEARCH,CONCEPTS,DELIVERY-REPORT}.md}
```

≤70 KB/variant; 360–1440; `?theme=` boot; V1 pilot first. Preview `:8131`.

## 10. COMPONENT INVENTORY (restyle allowed, dropping states forbidden)

**F22 primaries:** item grid/list + add/edit, categories manager, ordering controls, publish controls + preview, analytics panels.
States: item draft/published/featured · reorder positions · publish confirm/receipt · dark + 375px. Lab-wide: master §10.

## 11–14. PERF · GATE 1/3 · CONSTRAINTS · CHECKLIST

Perf: master §11. Gates: master §12–§13 (tables 1–3; 1 winner).

```
## GATE 1 (F22) · Cards: 5/5 · Sketches: 5/5 · Difference: PASS/FAIL · C 5/5: YES/NO · P1 5/5: YES/NO · P2-P3 ≥3/5: YES/NO · Gate: PASS/FAIL
## GATE 3 (F22) · Hand-built: 5/5 · Generators: 0 · Widths×themes: <…> · Checklist: <…>/5 · Blockers: 0 · Gate: PASS/FAIL
```

Constraints: master §14. Scope = F22 folder + shared merges only.

- [ ] S/R/A/T PASS — `docs/` ×4 · Gate 1 PASS · Gate 2a/2b — 5 hand-authored; gallery + manifest + DECISIONS; 0 generators
- [ ] Same teal tokens; C9/C17/C3/C5/C12/C18/C20 in 5/5 (manifest)
- [ ] Empty+skeleton+error; light+dark; 360–1440; keyboard-complete (roving + reorder); reduced-motion; no-JS reachable
- [ ] Gate 3 PASS — §7.1 ×5, 0 blockers, `DELIVERY-REPORT.md` + 1 winner · Reported paths + `:8131` + limits

### Operator shortcuts
- "Restore §5 teal." · "V# fails Difference vs V1 — axis A/C." · "Preview-less publish — FAIL." · "Mouse-only reorder — FAIL." · "F22-V1 approved — never regenerate it."

---

*End of prompt F22. Start at §3 Step 1. Print every gate block. Hand-craft all 5.*

# Nestlancer Admin Portal Lab — F09 · Quotes List — AI Agent Prompt
### Study screenshots + HTML + report + Swagger → understand full UI requirements → search similar great design templates → hand-craft 5 upgraded designs · one shared colour scheme

> Paste this whole file into an agent (Arena Agent Mode, Cursor, Claude Code) with the **`ui-designing-admin-dashboard`** repo open as the working directory.
>
> **Scope: ONE page family — F09 · Quotes List.** One of **25 independent family prompts** (F01–F25): 25 × 5 = **125 templates**, ONE locked teal scheme (master `admin-portal-prompt.md` §5). This prompt builds **`admin-portal-lab/families/F09-quotes-list/V1…V5/`** — the list only (F10 owns details + builder). Never touch other families.
>
> **Style parent:** `example-demo-prompt/*` (gates + hand-crafted discipline). Shared rules in `admin-portal-prompt.md` — read it end-to-end first; **this file is the task**. **Do not push, commit, create or switch a branch.**

---

## 1. YOUR ROLE

1. **Product archaeologist** — reconstruct the quotes list exactly (table, filters, pagination) first. 2. **Research analyst** — quote every F09 Finding/C/A/KEEP. 3. **API analyst** — map list/filter/paginate to `quotes` spec. 4. **Design-template researcher** — ≥8 quote/proposal queues **after** S/R/A. 5. **Designer + art director** — 5 ideas, same teal. 6. **Craftsperson** — self-contained, offline, no CDN. 7. **Harsh critic** — reject bulk-less lists, mouse-only queues, truncated-ID soup.

## 2. THE MISSION

| Stage | Input | Output |
|---|---|---|
| 0 · Baseline | F09 shot + HTML + metadata | Table + filters frozen |
| 1 · Reports | `.md` + `.xlsx` 10 sheets | `families/F09-quotes-list/docs/REPORT-STUDY.md` |
| 2 · API | `quotes` spec (list slice) | `docs/API-MAP.md` |
| 3 · Templates | **AFTER** §4 + Gate A | `docs/TEMPLATE-RESEARCH.md` — ≥8 refs |
| 4 · Concepts | 0–3 | `docs/CONCEPTS.md` — **5 cards before code** |
| 5 · Build (MANUAL) | concepts | `V1…V5/index.html` — **5 hand-built** |
| 6 · Verify | all 5 @ 1440 + 390, light + dark | `docs/DELIVERY-REPORT.md` + gallery + manifest |

**Rule 1 — SAME teal scheme, DIFFERENT designs** (master §8.2). **Rule 2 — HAND-CRAFTED ONLY** (master §1.3). Features only from Gate S + Gate R ADDs + Gate A. **Operator question:** which quotes need me, oldest first, cleared fast.

## 1.3 Manual craft rule — summary

Hand-write each `families/F09-quotes-list/V#/index.html` (+CSS/JS). One own-variant skeleton copy allowed, then manual redesign. No variant-generating scripts. Full rule: master §1.3.

## 3. READ FIRST — in this order

1. This prompt + master + the two `example-demo-prompt/` files. 2. **F09 screenshot (1):** `054-quotes.webp`. 3. `nestlancer-admin-pages-html/README.md`, F09 HTML (§4) + `audit-metadata.json` (`/quotes` index filter — note 11-row table, Clear/Prev/Next). 4. Report `.md` full + `.xlsx` 10 sheets (`.md` wins). 5. `backend-api-swagger/README.md` + spec: `quotes.openapi.json` (27 paths — list/filter/paginate slice for F09; builder slice belongs to F10). 6. **Gate T only after Swagger + §4.** 7. **Touch only** F09 folder + shared merges (master §9.1).

## 4. THIS FAMILY — F09 · Quotes List

The revenue watchtower: quote table (11 rows captured: freeze columns + row anatomy + status vocabulary at Gate S), filters + Clear, Prev/Next pagination. Thin capture, clear job — your variants turn it into a triage queue (bulk + keyboard + saved views + age) while keeping the table's honesty, and link each row to its F10 detail.

> **Business weight:** 🔴 stalled quotes are stalled revenue — age visibility is the feature.

| | |
|---|---|
| Routes | `/quotes` (rows → F10 `/quotes/[id]`) |
| Shell | F02's shell language |
| Variants | **V1–V5** — each covers **list + filter + paginate** (in-page; detail linked) |

**States in scope (every variant covers all):**

| HTML snapshot | Route / state | Screenshot |
|---|---|---|
| `67-quotes-index.html` | `/quotes` — list + filters + pagination | `054-quotes.webp` |

**Must include (every variant):** frozen columns/filters + Clear · mono IDs (C9) · bulk bar (A1) + keyboard (A2) + saved views (A3: Stale-7d/Unassigned/Expiring) + age badges (A4) + open→next loop (A5) · pagination info (C19) · row → F10 deep links · dark + 375px card-fallback.
**Content lock:** freeze columns, filter labels, status vocabulary, pagination copy at Gate S. Expiry/countdown language only if captured or spec-backed.
**Cross-cutting:** light + dark · 375px · empty + skeleton + error states · keyboard-complete queue.

## 5. BRAND SYSTEM — locked

`shared/tokens.css` = **EXACTLY** master §5.2 CSS (create-if-missing; else import as-is). Teal only. Content lock: master §5.3.

## 6. WHAT TO CHANGE / ADD / KEEP — F09 scope

### CHANGE — every item in **all 5 variants**
- **C9** — Mono IDs/refs. *(§6.1)* · **C19** — Pagination info. *(§6.1)* · **C3** — AA-safe status text. *(§6.1)* · **C5** — Teal-only. *(§6.1)* · **C12** — Display money/counts. *(§6.1)* · **C18** — Dark parity. *(§6.1)* · **C20** — Logo alt. *(§6.1)*

### ADD — with priority + coverage (all P1 → **5/5**)
- **A1** — Bulk bar. · **A2** — Keyboard triage. · **A3** — Saved views. · **A5** — Open→next loop. (A4 age badges ship with the rows — 5/5.)

### KEEP — present in every variant
- Table honesty (frozen columns/statuses). · Microcopy + teal identity. *(§6.3)*

## 7. GATES — in order, print blocks, stop on FAIL

Procedures: master §6. F09 scope: Gate S freezes table + filters + pagination; Gate R quotes F09 rows; Gate A maps list/filter/paginate slice; Gate T ≥8 quote/proposal queues **after** S/R/A.

```
## GATE S (F09) · Shots: 1/1 · HTML: 1/1 · Content frozen: YES · Gate: PASS/FAIL
## GATE R (F09) · MD: YES · XLSX: 10/10 · C: <n>/<n> · A: <n>/<n> · KEEP: YES · Gate: PASS/FAIL
## GATE A (F09) · Specs: 1/1 · Endpoints: <n> · Demo-only: <n> · Gate: PASS/FAIL
## GATE T (F09) · Queries: <n> · Refs: <n>/≥8 · Mapped: YES · No invented: YES · Order: YES · Gate: PASS/FAIL
```

No concepts until S+R+A+T PASS.

## 8. CONCEPTS — 5 cards BEFORE code

Master §8.1–§8.2 (≥3/5 axes incl. A or C). Coverage: ≥1 minimal · ≥1 dense · ≥1 queue-led · ≥1 card-led · ≥1 motion-led.

### 8.3 Roster guidance (adapt freely — keep 5)
| Variant | Suggested aspect (same tokens) |
|---|---|
| V1 | Ground-truth fix: captured table, P1 kit, calm |
| V2 | Queue-first: age-ordered triage with bulk sweep |
| V3 | Card-queue: quotes as revenue cards with expiry/age |
| V4 | Dense console: compact ledger + saved views rail |
| V5 | Motion-signature: advance-choreography + transitions |

## 9. BUILD (manual, one by one)

Master §9; family paths below.

```
admin-portal-lab/families/F09-quotes-list/{V1…V5/index.html,docs/{BASELINE-MAP,REPORT-STUDY,API-MAP,TEMPLATE-RESEARCH,CONCEPTS,DELIVERY-REPORT}.md}
```

≤70 KB/variant; 360–1440; `?theme=` boot; V1 pilot first. Preview `:8131`.

## 10. COMPONENT INVENTORY (restyle allowed, dropping states forbidden)

**F09 primaries:** filters + Clear, quote table + bulk bar, saved views, pagination, row deep-links.
States: filter active/clear · bulk none/partial/all · pagination edges · dark + 375px cards. Lab-wide: master §10.

## 11–14. PERF · GATE 1/3 · CONSTRAINTS · CHECKLIST

Perf: master §11. Gates: master §12–§13 (tables 1–3; 1 winner).

```
## GATE 1 (F09) · Cards: 5/5 · Sketches: 5/5 · Difference: PASS/FAIL · C 5/5: YES/NO · P1 5/5: YES/NO · P2-P3 ≥3/5: YES/NO · Gate: PASS/FAIL
## GATE 3 (F09) · Hand-built: 5/5 · Generators: 0 · Widths×themes: <…> · Checklist: <…>/5 · Blockers: 0 · Gate: PASS/FAIL
```

Constraints: master §14. Scope = F09 folder + shared merges only.

- [ ] S/R/A/T PASS — `docs/` ×4 · Gate 1 PASS · Gate 2a/2b — 5 hand-authored; gallery + manifest + DECISIONS; 0 generators
- [ ] Same teal tokens; C9/C19/C3/C5/C12/C18/C20 in 5/5; A1/A2/A3/A4/A5 in 5/5 (manifest)
- [ ] Empty+skeleton+error; light+dark; 360–1440; keyboard-complete; reduced-motion; no-JS reachable
- [ ] Gate 3 PASS — §7.1 ×5, 0 blockers, `DELIVERY-REPORT.md` + 1 winner · Reported paths + `:8131` + limits

### Operator shortcuts
- "Restore §5 teal." · "V# fails Difference vs V1 — axis A/C." · "Slow queue — bulk + keyboard + loop or FAIL." · "F09-V1 approved — never regenerate it."

---

*End of prompt F09. Start at §3 Step 1. Print every gate block. Hand-craft all 5.*

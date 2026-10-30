# Nestlancer Admin Portal Lab — F15 · Users Directory — AI Agent Prompt
### Study screenshots + HTML + report + Swagger → understand full UI requirements → search similar great design templates → hand-craft 5 upgraded designs · one shared colour scheme

> Paste this whole file into an agent (Arena Agent Mode, Cursor, Claude Code) with the **`ui-designing-admin-dashboard`** repo open as the working directory.
>
> **Scope: ONE page family — F15 · Users Directory.** One of **25 independent family prompts** (F01–F25): 25 × 5 = **125 templates**, ONE locked teal scheme (master `admin-portal-prompt.md` §5). This prompt builds **`admin-portal-lab/families/F15-users-directory/V1…V5/`** — directory only (F16 owns user details + safety). Never touch other families.
>
> **Style parent:** `example-demo-prompt/*` (gates + hand-crafted discipline). Shared rules in `admin-portal-prompt.md` — read it end-to-end first; **this file is the task**. **Do not push, commit, create or switch a branch.**

---

## 1. YOUR ROLE

1. **Product archaeologist** — reconstruct the directory exactly (KPIs, filters, 21-row table, add-user) first. 2. **Research analyst** — quote every F15 Finding/C/A/KEEP (incl. the suspect-34s). 3. **API analyst** — map directory to `users` spec (+`admin` aggregates). 4. **Design-template researcher** — ≥8 user directories **after** S/R/A. 5. **Designer + art director** — 5 ideas, same teal. 6. **Craftsperson** — self-contained, offline, no CDN. 7. **Harsh critic** — reject bulk-less directories, mouse-only admin, unverified add-user flows.

## 2. THE MISSION

| Stage | Input | Output |
|---|---|---|
| 0 · Baseline | F15 shot + HTML + metadata | KPIs + table + add-user frozen |
| 1 · Reports | `.md` + `.xlsx` 10 sheets | `families/F15-users-directory/docs/REPORT-STUDY.md` |
| 2 · API | §3 specs | `docs/API-MAP.md` |
| 3 · Templates | **AFTER** §4 + Gate A | `docs/TEMPLATE-RESEARCH.md` — ≥8 refs |
| 4 · Concepts | 0–3 | `docs/CONCEPTS.md` — **5 cards before code** |
| 5 · Build (MANUAL) | concepts | `V1…V5/index.html` — **5 hand-built** |
| 6 · Verify | all 5 @ 1440 + 390, light + dark | `docs/DELIVERY-REPORT.md` + gallery + manifest |

**Rule 1 — SAME teal scheme, DIFFERENT designs** (master §8.2). **Rule 2 — HAND-CRAFTED ONLY** (master §1.3). Features only from Gate S + Gate R ADDs + Gate A. **Operator question:** find any user in seconds, verify their state honestly, act without fear.

## 1.3 Manual craft rule — summary

Hand-write each `families/F15-users-directory/V#/index.html` (+CSS/JS). One own-variant skeleton copy allowed, then manual redesign. No variant-generating scripts. Full rule: master §1.3.

## 3. READ FIRST — in this order

1. This prompt + master + the two `example-demo-prompt/` files. 2. **F15 screenshot (1):** `064-users.webp`. 3. `nestlancer-admin-pages-html/README.md`, F15 HTML (§4) + `audit-metadata.json` (`/users` index filter — 24 inputs, 21-row table, Add/Search/Clear/Prev/Next). 4. Report `.md` full + `.xlsx` 10 sheets (`.md` wins — note finding S5/C16 suspect-34s). 5. `backend-api-swagger/README.md` + specs: `users.openapi.json` (40 paths — directory slice: list/search/filter/paginate/create) · `admin` (aggregates). 6. **Gate T only after Swagger + §4.** 7. **Touch only** F15 folder + shared merges (master §9.1).

## 4. THIS FAMILY — F15 · Users Directory

The people index: KPI cards (**Total 34 · New 34 · Active 34 · Suspended 0** — freeze at Gate S AND flag per C16: identical New/Active/Total smells stale; design must surface data-freshness, not fabricate new figures), filters + search, the 21-row table (*Showing 1–20 of 34*, Prev/Next), and Add-new-user. Your variants make it a triage surface (bulk + keyboard) with honest counts and a verified add flow.

> **Business weight:** 🟠 identity is access — stale counts erode trust in every user action downstream.

| | |
|---|---|
| Routes | `/users` (rows → F16 `/users/[id]`; add-user in-page) |
| Shell | F02's shell language |
| Variants | **V1–V5** — each covers **directory + filters + add** (in-page; detail linked) |

**States in scope (every variant covers all):**

| HTML snapshot | Route / state | Screenshot |
|---|---|---|
| `79-users-index.html` | `/users` — directory (Add new user · Search · Clear · Prev/Next) | `064-users.webp` |

**Must include (every variant):** KPI cards with **freshness honesty** (C16: as-of timestamps / stale flags, freeze-or-flag) · filters + search + Clear · 21-col table anatomy frozen (C9 mono) + bulk bar (A1) + keyboard (A2) · pagination info (C19) · Add-new-user flow (spec fields, validated) · row → F16 deep links · dark + 375px card-fallback.
**Content lock:** freeze KPI labels/figures, filter labels, table columns + row anatomy, add-user fields, pagination copy at Gate S. New/Active/Total stay 34/34/34 — with honesty chrome, not invented data.
**Cross-cutting:** light + dark · 375px · empty + skeleton + error states · keyboard-complete.

## 5. BRAND SYSTEM — locked

`shared/tokens.css` = **EXACTLY** master §5.2 CSS (create-if-missing; else import as-is). Teal only. Content lock: master §5.3.

## 6. WHAT TO CHANGE / ADD / KEEP — F15 scope

### CHANGE — every item in **all 5 variants**
- **C16** — Surface data-freshness on the user KPIs (as-of/stale flags; freeze the 34s, never fabricate). *(§6.1)*
- **C9** — Mono IDs/emails/timestamps. *(§6.1)* · **C19** — Pagination info. *(§6.1)*
- **C3** — AA-safe text. *(§6.1)* · **C5** — Teal-only. *(§6.1)* · **C12** — Display counts. *(§6.1)* · **C18** — Dark parity. *(§6.1)* · **C20** — Logo alt. *(§6.1)*

### ADD — with priority + coverage (all P1 → **5/5**)
- **A1** — Bulk bar (tag/verify/export/suspend-gated). · **A2** — Keyboard triage.

### KEEP — present in every variant
- Directory honesty (frozen anatomy). · Microcopy + teal identity. *(§6.3)*

## 7. GATES — in order, print blocks, stop on FAIL

Procedures: master §6. F15 scope: Gate S freezes KPIs + table + add-user + freshness flags; Gate R quotes F15 rows + S5/C16; Gate A maps directory slice; Gate T ≥8 user directories **after** S/R/A.

```
## GATE S (F15) · Shots: 1/1 · HTML: <n>/1 · Freshness flags: YES · Content frozen: YES · Gate: PASS/FAIL
## GATE R (F15) · MD: YES · XLSX: 10/10 · C: <n>/<n> · A: <n>/<n> · KEEP: YES · Gate: PASS/FAIL
## GATE A (F15) · Specs: 2/2 · Endpoints: <n> · Demo-only: <n> · Gate: PASS/FAIL
## GATE T (F15) · Queries: <n> · Refs: <n>/≥8 · Mapped: YES · No invented: YES · Order: YES · Gate: PASS/FAIL
```

No concepts until S+R+A+T PASS.

## 8. CONCEPTS — 5 cards BEFORE code

Master §8.1–§8.2 (≥3/5 axes incl. A or C). Coverage: ≥1 minimal · ≥1 dense · ≥1 queue-led · ≥1 card-led · ≥1 motion-led.

### 8.3 Roster guidance (adapt freely — keep 5)
| Variant | Suggested aspect (same tokens) |
|---|---|
| V1 | Ground-truth fix: captured directory, honest KPIs, P1 kit, calm |
| V2 | Queue-first: verification-ordered triage with bulk sweep |
| V3 | Card-directory: users as trust cards with state + freshness |
| V4 | Dense console: compact ledger + filter rail for large bases |
| V5 | Motion-signature: search/filter choreography + transitions |

## 9. BUILD (manual, one by one)

Master §9; family paths below.

```
admin-portal-lab/families/F15-users-directory/{V1…V5/index.html,docs/{BASELINE-MAP,REPORT-STUDY,API-MAP,TEMPLATE-RESEARCH,CONCEPTS,DELIVERY-REPORT}.md}
```

≤70 KB/variant; 360–1440; `?theme=` boot; V1 pilot first. Preview `:8131`.

## 10. COMPONENT INVENTORY (restyle allowed, dropping states forbidden)

**F15 primaries:** KPI cards + freshness flags, filters + search, user table + bulk bar, add-user flow, pagination.
States: filter/search active · bulk none/partial/all · add-user valid/invalid/saving/saved · dark + 375px cards. Lab-wide: master §10.

## 11–14. PERF · GATE 1/3 · CONSTRAINTS · CHECKLIST

Perf: master §11. Gates: master §12–§13 (tables 1–3; 1 winner).

```
## GATE 1 (F15) · Cards: 5/5 · Sketches: 5/5 · Difference: PASS/FAIL · C 5/5: YES/NO · P1 5/5: YES/NO · P2-P3 ≥3/5: YES/NO · Gate: PASS/FAIL
## GATE 3 (F15) · Hand-built: 5/5 · Generators: 0 · Widths×themes: <…> · Checklist: <…>/5 · Blockers: 0 · Gate: PASS/FAIL
```

Constraints: master §14. Scope = F15 folder + shared merges only.

- [ ] S/R/A/T PASS — `docs/` ×4 · Gate 1 PASS · Gate 2a/2b — 5 hand-authored; gallery + manifest + DECISIONS; 0 generators
- [ ] Same teal tokens; C16/C9/C19/C3/C5/C12/C18/C20 in 5/5; A1/A2 in 5/5 (manifest)
- [ ] Empty+skeleton+error; light+dark; 360–1440; keyboard-complete; reduced-motion; no-JS reachable
- [ ] Gate 3 PASS — §7.1 ×5, 0 blockers, `DELIVERY-REPORT.md` + 1 winner · Reported paths + `:8131` + limits

### Operator shortcuts
- "Restore §5 teal." · "V# fails Difference vs V1 — axis A/C." · "Invented user counts — FAIL, freeze + flag." · "F15-V1 approved — never regenerate it."

---

*End of prompt F15. Start at §3 Step 1. Print every gate block. Hand-craft all 5.*

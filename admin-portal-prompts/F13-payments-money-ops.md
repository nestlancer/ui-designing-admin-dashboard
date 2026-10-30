# Nestlancer Admin Portal Lab — F13 · Payments Money-Ops — AI Agent Prompt
### Study screenshots + HTML + report + Swagger → understand full UI requirements → search similar great design templates → hand-craft 5 upgraded designs · one shared colour scheme

> Paste this whole file into an agent (Arena Agent Mode, Cursor, Claude Code) with the **`ui-designing-admin-dashboard`** repo open as the working directory.
>
> **Scope: ONE page family — F13 · Payments Money-Ops.** One of **25 independent family prompts** (F01–F25): 25 × 5 = **125 templates**, ONE locked teal scheme (master `admin-portal-prompt.md` §5). This prompt builds **`admin-portal-lab/families/F13-payments-money-ops/V1…V5/`** — index + overview/pending/settlements/transactions tabs + details (F14 owns settlement accounts + company legal). Never touch other families.
>
> **Style parent:** `example-demo-prompt/*` (gates + hand-crafted discipline). Shared rules in `admin-portal-prompt.md` — read it end-to-end first; **this file is the task**. **Do not push, commit, create or switch a branch.**

---

## 1. YOUR ROLE

1. **Product archaeologist** — reconstruct money-ops exactly (KPIs, tabs, tables, receipts) first. 2. **Research analyst** — quote every F13 Finding/C/A/KEEP. 3. **API analyst** — map KPIs/tabs/receipts to the `payments` spec. 4. **Design-template researcher** — ≥8 finance-ops dashboards **after** S/R/A. 5. **Designer + art director** — 5 ideas, same teal. 6. **Craftsperson** — self-contained, offline, no CDN. 7. **Harsh critic** — reject tabular-figure violations, one-click verifications, dropped receipts.

## 2. THE MISSION

| Stage | Input | Output |
|---|---|---|
| 0 · Baseline | F13 shots + HTML + metadata | KPIs + tabs + tables frozen |
| 1 · Reports | `.md` + `.xlsx` 10 sheets | `families/F13-payments-money-ops/docs/REPORT-STUDY.md` |
| 2 · API | §3 specs | `docs/API-MAP.md` |
| 3 · Templates | **AFTER** §4 + Gate A | `docs/TEMPLATE-RESEARCH.md` — ≥8 refs |
| 4 · Concepts | 0–3 | `docs/CONCEPTS.md` — **5 cards before code** |
| 5 · Build (MANUAL) | concepts | `V1…V5/index.html` — **5 hand-built** |
| 6 · Verify | all 5 @ 1440 + 390, light + dark | `docs/DELIVERY-REPORT.md` + gallery + manifest |

**Rule 1 — SAME teal scheme, DIFFERENT designs** (master §8.2). **Rule 2 — HAND-CRAFTED ONLY** (master §1.3). Features only from Gate S + Gate R ADDs + Gate A. **Operator question:** every rupee accounted, every verification guarded, every receipt one click away.

## 1.3 Manual craft rule — summary

Hand-write each `families/F13-payments-money-ops/V#/index.html` (+CSS/JS). One own-variant skeleton copy allowed, then manual redesign. No variant-generating scripts. Full rule: master §1.3.

## 3. READ FIRST — in this order

1. This prompt + master + the two `example-demo-prompt/` files. 2. **F13 screenshots (8):** `035-payments.webp` (KPI strip) · `036-payments-all-transactions.webp` · `037-payments-awaiting-verification.webp` · `038-payments-disputes.webp` · `039-payments-reconciliation.webp` · `040-payments-details.webp` · `043-payments-projects-details.webp` · `081-payment-details-awaiting-payment.webp`. 3. `nestlancer-admin-pages-html/README.md`, F13 HTML (§4) + `audit-metadata.json` (`/payments*` filter — 5 tabs, Transactions/Download/Prev/Next). 4. Report `.md` full + `.xlsx` 10 sheets (`.md` wins). 5. `backend-api-swagger/README.md` + specs: `payments.openapi.json` (62 paths — KPIs, transactions, pending, settlements, receipts) · `projects` (milestone links) · `users` (payees). 6. **Gate T only after Swagger + §4.** 7. **Touch only** F13 folder + shared merges (master §9.1).

## 4. THIS FAMILY — F13 · Payments Money-Ops

The money room: **KPI strip** (*Total collected ₹7,08,160 · Outstanding ₹2,60,790 · Pending milestones 16 · 18 Projects* — freeze at Gate S) over **4 tabs** (By project · All transactions · Awaiting verification · Disputes), verification/dispute actions, transaction tables, payment details with receipt strings, and reconciliation (`039`, shot-backed). Peak F-pattern density (finding #12: 6 dead-end buttons/headings per capture — your C3/C12 work fixes their legibility, A1/A4/A5 fix their operability).

> **Business weight:** 🔴 real money moves here — approvals guarded, receipts kept, figures tabular.

| | |
|---|---|
| Routes | `/payments` (+ 5 tabs; details in-page; settlement **accounts** + company legal = F14) |
| Shell | F02's shell language |
| Variants | **V1–V5** — each covers **all 5 tabs + detail** (in-page) |

**States in scope (every variant covers all):**

| HTML snapshot | Route / state | Screenshot |
|---|---|---|
| `74-payments-index.html` + `21/26-dashboard-sub-payments.html` (harvest dupes) | `/payments` — index + KPI strip | `035-payments.webp` |
| `75-payments-index-tab-by-project.html` + `22/27` dupes | By-project tab | `043-payments-projects-details.webp` |
| `76-payments-index-tab-all-transactions.html` + `23/28` dupes + `184-payments-transactions.html` | All-transactions tab | `036-payments-all-transactions.webp` |
| `77-payments-index-tab-awaiting-verification.html` + `24/29` dupes | Awaiting-verification tab | `037-payments-awaiting-verification.webp` |
| `78-payments-index-tab-disputes.html` + `25/30` dupes + `181-payments-index-go-disputes.html` | Disputes tab | `038-payments-disputes.webp` |
| *(shot+spec baseline)* | Payment details (incl. awaiting-payment) | `040-payments-details.webp` + `081-payment-details-awaiting-payment.webp` |
| *(shot+spec baseline)* | Reconciliation view | `039-payments-reconciliation.webp` |

**Must include (every variant):** KPI strip (tabular ₹, display scale C12) · awaiting-verification queue with guarded verify/reject (confirm + reason — spec-backed) · bulk bar (A1) + age/priority badges (A4) + approve→next loop (A5) · by-project + transactions tables (mono refs C9, pagination info C19) · payment detail + receipt strings · dark + 375px card-fallbacks.
**Content lock:** freeze KPI labels/figures, tab labels, table columns, approval copy, receipt anatomy, status vocabulary at Gate S. Never invent amounts or statuses.
**Cross-cutting:** light + dark · 375px · empty + skeleton + error + approval-receipt states · keyboard-complete approvals (confirm trap, Esc, live regions).

## 5. BRAND SYSTEM — locked

`shared/tokens.css` = **EXACTLY** master §5.2 CSS (create-if-missing; else import as-is). Teal only; money stays tabular; approvals guarded inside status tokens. Content lock: master §5.3.

## 6. WHAT TO CHANGE / ADD / KEEP — F13 scope

### CHANGE — every item in **all 5 variants**
- **C9** — Mono refs/IDs/timestamps; tabular money everywhere. *(§6.1)*
- **C12** — Display-scale ₹ hero + KPI strip (legibility at F-pattern density). *(§6.1)*
- **C19** — Pagination info on all tables. *(§6.1)*
- **C3** — AA-safe status text. *(§6.1)* · **C5** — Teal-only. *(§6.1)* · **C18** — Dark parity. *(§6.1)* · **C20** — Logo alt. *(§6.1)*

### ADD — with priority + coverage (all P1 → **5/5**)
- **A1** — Bulk bar (verify/reject/export). · **A4** — Age/priority badges + escalation. · **A5** — Verify→next loop.

### KEEP — present in every variant
- **Payout/setttlement transparency** (Per-quoted breakdowns, receipt strings). · KPI-strip honesty. · Microcopy + teal identity. *(§6.3)*

## 7. GATES — in order, print blocks, stop on FAIL

Procedures: master §6. F13 scope: Gate S freezes strip + 5 tabs + details + debug-reconcile; Gate R quotes F13 rows + finding #12; Gate A maps `payments` 38 paths (+links); Gate T ≥8 finance-ops dashboards (Stripe/Razorpay-style ops) **after** S/R/A.

```
## GATE S (F13) · Shots: 8/8 · HTML: <n>/17 · Dupes reconciled: YES · Content frozen: YES · Gate: PASS/FAIL
## GATE R (F13) · MD: YES · XLSX: 10/10 · C: <n>/<n> · A: <n>/<n> · KEEP: YES · Gate: PASS/FAIL
## GATE A (F13) · Specs: 3/3 · Endpoints: <n> · Demo-only: <n> · Gate: PASS/FAIL
## GATE T (F13) · Queries: <n> · Refs: <n>/≥8 · Mapped: YES · No invented: YES · Order: YES · Gate: PASS/FAIL
```

No concepts until S+R+A+T PASS.

## 8. CONCEPTS — 5 cards BEFORE code

Master §8.1–§8.2 (≥3/5 axes incl. A or C). Coverage: ≥1 minimal · ≥1 dense · ≥1 approval-led · ≥1 ledger-led · ≥1 motion-led.

### 8.3 Roster guidance (adapt freely — keep 5)
| Variant | Suggested aspect (same tokens) |
|---|---|
| V1 | Ground-truth fix: captured strip + tabs, guarded approvals, calm |
| V2 | Approval-spine: pending queue owns the screen, ledger docked |
| V3 | Ledger-first: the money tables lead, approvals float |
| V4 | Dense console: compact ops board for settlement day |
| V5 | Motion-signature: verify-choreography + balance count-ups |

## 9. BUILD (manual, one by one)

Master §9; family paths below. Approvals MUST be confirm-gated + keyboard-safe in every variant (lab static — confirm + receipt copy only).

```
admin-portal-lab/families/F13-payments-money-ops/{V1…V5/index.html,docs/{BASELINE-MAP,REPORT-STUDY,API-MAP,TEMPLATE-RESEARCH,CONCEPTS,DELIVERY-REPORT}.md}
```

≤70 KB/variant; 360–1440; `?theme=` boot; V1 pilot first. Preview `:8131`.

## 10. COMPONENT INVENTORY (restyle allowed, dropping states forbidden)

**F13 primaries:** KPI strip, ops tabs, verification queue (guarded), bulk bar, settlements + transactions tables, payment detail + receipts, pagination.
States: verification pending/verified/rejected · bulk none/partial/all · receipt shown · dark + 375px. Lab-wide: master §10.

## 11–14. PERF · GATE 1/3 · CONSTRAINTS · CHECKLIST

Perf: master §11. Gates: master §12–§13 (tables 1–3; 1 winner).

```
## GATE 1 (F13) · Cards: 5/5 · Sketches: 5/5 · Difference: PASS/FAIL · C 5/5: YES/NO · P1 5/5: YES/NO · P2-P3 ≥3/5: YES/NO · Gate: PASS/FAIL
## GATE 3 (F13) · Hand-built: 5/5 · Generators: 0 · Widths×themes: <…> · Checklist: <…>/5 · Blockers: 0 · Gate: PASS/FAIL
```

Constraints: master §14. Scope = F13 folder + shared merges only.

- [ ] S/R/A/T PASS — `docs/` ×4 · Gate 1 PASS · Gate 2a/2b — 5 hand-authored; gallery + manifest + DECISIONS; 0 generators
- [ ] Same teal tokens; C9/C12/C19/C3/C5/C18/C20 in 5/5; A1/A4/A5 in 5/5 (manifest)
- [ ] Empty+skeleton+error; light+dark; 360–1440; keyboard-complete; reduced-motion; no-JS reachable
- [ ] Gate 3 PASS — §7.1 ×5, 0 blockers, `DELIVERY-REPORT.md` + 1 winner · Reported paths + `:8131` + limits

### Operator shortcuts
- "Restore §5 teal." · "V# fails Difference vs V1 — axis A/C." · "One-click verify — FAIL, add confirm." · "Non-tabular money — FAIL." · "F13-V1 approved — never regenerate it."

---

*End of prompt F13. Start at §3 Step 1. Print every gate block. Hand-craft all 5.*

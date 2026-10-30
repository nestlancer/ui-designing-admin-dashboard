# Nestlancer Admin Portal Lab — F08 · Requests Triage + Details — AI Agent Prompt
### Study screenshots + HTML + report + Swagger → understand full UI requirements → search similar great design templates → hand-craft 5 upgraded designs · one shared colour scheme

> Paste this whole file into an agent (Arena Agent Mode, Cursor, Claude Code) with the **`ui-designing-admin-dashboard`** repo open as the working directory.
>
> **Scope: ONE page family — F08 · Requests Triage + Details.** One of **25 independent family prompts** (F01–F25): 25 × 5 = **125 templates**, ONE locked teal scheme (master `admin-portal-prompt.md` §5). This prompt builds **`admin-portal-lab/families/F08-requests-triage/V1…V5/`** — and nothing else. Never touch other families.
>
> **Style parent:** `example-demo-prompt/*` (gates + hand-crafted discipline). Shared rules in `admin-portal-prompt.md` — read it end-to-end first; **this file is the task**. **Do not push, commit, create or switch a branch.**

---

## 1. YOUR ROLE

1. **Product archaeologist** — reconstruct the requests queue + detail + edit exactly first. 2. **Research analyst** — quote every F08 Finding/C/A/KEEP. 3. **API analyst** — map queue/detail/edit/assign/quote-entry to `requests` (+`users`, `quotes`) specs. 4. **Design-template researcher** — ≥8 triage queues **after** S/R/A. 5. **Designer + art director** — 5 ideas, same teal. 6. **Craftsperson** — self-contained, offline, no CDN. 7. **Harsh critic** — reject bulk-less queues, mouse-only triage, capacity inputs that fat-finger.

## 2. THE MISSION

| Stage | Input | Output |
|---|---|---|
| 0 · Baseline | F08 shots + HTML + metadata | Queue + detail + edit frozen |
| 1 · Reports | `.md` + `.xlsx` 10 sheets | `families/F08-requests-triage/docs/REPORT-STUDY.md` |
| 2 · API | §3 specs | `docs/API-MAP.md` |
| 3 · Templates | **AFTER** §4 + Gate A | `docs/TEMPLATE-RESEARCH.md` — ≥8 refs |
| 4 · Concepts | 0–3 | `docs/CONCEPTS.md` — **5 cards before code** |
| 5 · Build (MANUAL) | concepts | `V1…V5/index.html` — **5 hand-built** |
| 6 · Verify | all 5 @ 1440 + 390, light + dark | `docs/DELIVERY-REPORT.md` + gallery + manifest |

**Rule 1 — SAME teal scheme, DIFFERENT designs** (master §8.2). **Rule 2 — HAND-CRAFTED ONLY** (master §1.3). Features only from Gate S + Gate R ADDs + Gate A. **Operator question:** every rupee starts here — triage must fly (bulk, keyboard, loop).

## 1.3 Manual craft rule — summary

Hand-write each `families/F08-requests-triage/V#/index.html` (+CSS/JS). One own-variant skeleton copy allowed, then manual redesign. No variant-generating scripts. Full rule: master §1.3.

## 3. READ FIRST — in this order

1. This prompt + master + the two `example-demo-prompt/` files. 2. **F08 screenshots (5):** `001-request-details-ready-to-quote.webp` (ready-to-quote) · `056-requests.webp` (queue + capacity) · `057-requests-details.webp` · `058-requests-details-quote-new.webp` (quote-new entry) · `102-request-details-edit-form.webp`. 3. `nestlancer-admin-pages-html/README.md`, F08 HTML (§4) + `audit-metadata.json` (`/requests*` filter). 4. Report `.md` full + `.xlsx` 10 sheets (`.md` wins). 5. `backend-api-swagger/README.md` + specs: `requests.openapi.json` (25 paths — list/detail/status/assign/quote-entry) · `users` (assignees) · `quotes` (quote-new entry). 6. **Gate T only after Swagger + §4.** 7. **Touch only** F08 folder + shared merges (master §9.1).

## 4. THIS FAMILY — F08 · Requests Triage + Details

Where pipeline becomes work: the **capacity card** (Active projects 7 · Queued requests 16 · Capacity used 28% · Max active 25 + Max-active/Warning-threshold inputs + *Update capacity settings* + helper text — freeze at Gate S), the **queue strip** (Total 46 · By Category 6 · Average Response Time 0 minutes · Conversion Rate 43.9%), filters + search, the request table (ID-truncated + COPY · TITLE · STATUS · CATEGORY · CLIENT · CREATED · Review →; *Showing 1–13 of 13*), and **request details** (ready-to-quote state, requirements, attachments, status history, linked quote, actions) with **inline edit** (*Cancel edit / Delete / Save changes / Update* — captured in `144`). Ready-to-quote (`001`) + quote-new entry (`058`) are shot-backed but live-unverified (report §2.2) — baseline = shots + spec.

> **Business weight (report §4.2):** 🔴 every rupee starts here. Good bones — needs bulk + keyboard + SLA badges. The #1 redesign target.

| | |
|---|---|
| Routes | `/requests` + `/requests/[id]` (+ edit in-page; quote-new entry) |
| Shell | F02's shell language (nav badge: Requests 11 per C6) |
| Variants | **V1–V5** — each covers **queue + detail + edit** (linked in-page) |

**States in scope (every variant covers all):**

| HTML snapshot | Route / state | Screenshot |
|---|---|---|
| `194-requests-index-list.html` | `/requests` — queue + capacity | `056-requests.webp` |
| `62…66-requests-sub-requests-*.html` | 5 request details (reconcile) | `057-requests-details.webp` |
| `143-requests-details.html` | Request detail (Patel Digital Agency…) | `057-requests-details.webp` |
| `144-requests-details-state-edit.html` | Inline edit mode | `102-request-details-edit-form.webp` |
| *(shot+spec baseline)* | Ready-to-quote state | `001-request-details-ready-to-quote.webp` |
| *(shot+spec baseline)* | Quote-new entry | `058-requests-details-quote-new.webp` |

**Must include (every variant):** capacity card (kept, fat-finger-proofed) · queue strip + filters + search · table with mono IDs (C9) + bulk bar (A1) + keyboard (A2) + saved views (A3) + SLA/age badges (A4) + next-item loop (A5) + pagination info (C19) · detail (ready-to-quote, requirements, attachments, history, linked quote) · inline edit (all 144 controls, guarded) · quote-new entry per spec · dark + 375px (card-fallback table).
**Content lock:** freeze capacity figures/labels/helper text, strip metrics, table columns + row anatomy, detail sections, edit controls, status vocabulary at Gate S. *0 minutes / 43.9%* are captured data — freeze, flag if suspect.
**Cross-cutting:** light + dark · 375px · empty + skeleton + error states · queue fully keyboard-operable (roving + bulk + loop + live counts).

## 5. BRAND SYSTEM — locked

`shared/tokens.css` = **EXACTLY** master §5.2 CSS (create-if-missing; else import as-is). Teal only. Content lock: master §5.3.

## 6. WHAT TO CHANGE / ADD / KEEP — F08 scope

### CHANGE — every item in **all 5 variants**
- **C9** — Mono IDs/refs/timestamps; full value on hover; keep COPY. *(§6.1)*
- **C19** — Pagination info everywhere (Showing x–y of N + size + total). *(§6.1)*
- **C3** — AA-safe status text. *(§6.1)* · **C5** — Teal-only. *(§6.1)* · **C12** — Display money/counts. *(§6.1)* · **C18** — Dark parity. *(§6.1)* · **C20** — Logo alt. *(§6.1)*

### ADD — with priority + coverage (all P1 → **5/5**)
- **A1** — Bulk-action bar (assign / advance / tag / export). · **A2** — Keyboard triage. · **A3** — Saved views. · **A4** — SLA/age badges + escalation. · **A5** — Queue→detail→advance loop.

### KEEP — present in every variant
- **Capacity card** (Active/Queued/%/Max + thresholds + clear disabled copy). · Status-history depth. · Honest microcopy + teal identity. *(§6.3)*

## 7. GATES — in order, print blocks, stop on FAIL

Procedures: master §6. F08 scope: Gate S freezes queue + detail + edit + gap-noted quote-entry; Gate R quotes F08 rows; Gate A maps `requests` 25 paths (+assignees/quote-entry); Gate T ≥8 triage queues **after** S/R/A.

```
## GATE S (F08) · Shots: 5/5 · HTML: <n>/8 · Shot-only states noted: YES · Content frozen: YES · Gate: PASS/FAIL
## GATE R (F08) · MD: YES · XLSX: 10/10 · C: <n>/<n> · A: 5/5 P1 · KEEP: YES · Gate: PASS/FAIL
## GATE A (F08) · Specs: 3/3 · Endpoints: <n> · Demo-only: <n> · Gate: PASS/FAIL
## GATE T (F08) · Queries: <n> · Refs: <n>/≥8 · Mapped: YES · No invented: YES · Order: YES · Gate: PASS/FAIL
```

No concepts until S+R+A+T PASS.

## 8. CONCEPTS — 5 cards BEFORE code

Master §8.1–§8.2 (≥3/5 axes incl. A or C). Coverage: ≥1 minimal · ≥1 dense · ≥1 queue-led · ≥1 detail-led · ≥1 motion-led.

### 8.3 Roster guidance (adapt freely — keep 5)
| Variant | Suggested aspect (same tokens) |
|---|---|
| V1 | Ground-truth fix: captured queue + detail, full P1 kit, calm |
| V2 | Split triage: queue rail + detail pane, keyboard-first, auto-advance |
| V3 | Card-queue: requests as triage cards with SLA + bulk sweep |
| V4 | Dense console: compact table-queue + capacity strip for 100+ items |
| V5 | Motion-signature: advance-choreography + loop transitions |

## 9. BUILD (manual, one by one)

Master §9; family paths below. Triage kit MUST be operable in every variant (Gate 3 audits the loop).

```
admin-portal-lab/families/F08-requests-triage/{V1…V5/index.html,docs/{BASELINE-MAP,REPORT-STUDY,API-MAP,TEMPLATE-RESEARCH,CONCEPTS,DELIVERY-REPORT}.md}
```

≤70 KB/variant; 360–1440; `?theme=` boot; V1 pilot first. Preview `:8131`.

## 10. COMPONENT INVENTORY (restyle allowed, dropping states forbidden)

**F08 primaries:** capacity card, queue strip, filters + search, request table + bulk bar, request detail, inline edit, quote-new entry, saved views, pagination.
States: capacity normal/warning/limit · bulk none/partial/all · detail view/edit · edit dirty/invalid/saving · dark + 375px. Lab-wide: master §10.

## 11–14. PERF · GATE 1/3 · CONSTRAINTS · CHECKLIST

Perf: master §11. Gates: master §12–§13 (tables 1–3; 1 winner).

```
## GATE 1 (F08) · Cards: 5/5 · Sketches: 5/5 · Difference: PASS/FAIL · C 5/5: YES/NO · P1 5/5: YES/NO · P2-P3 ≥3/5: YES/NO · Gate: PASS/FAIL
## GATE 3 (F08) · Hand-built: 5/5 · Generators: 0 · Widths×themes: <…> · Checklist: <…>/5 · Blockers: 0 · Gate: PASS/FAIL
```

Constraints: master §14. Scope = F08 folder + shared merges only.

- [ ] S/R/A/T PASS — `docs/` ×4 · Gate 1 PASS · Gate 2a/2b — 5 hand-authored; gallery + manifest + DECISIONS; 0 generators
- [ ] Same teal tokens; C9/C19/C3/C5/C12/C18/C20 in 5/5; A1–A5 in 5/5 (manifest)
- [ ] Empty+skeleton+error; light+dark; 360–1440; keyboard triage complete; reduced-motion; no-JS reachable
- [ ] Gate 3 PASS — §7.1 ×5, 0 blockers, `DELIVERY-REPORT.md` + 1 winner · Reported paths + `:8131` + limits

### Operator shortcuts
- "Restore §5 teal." · "V# fails Difference vs V1 — axis A/C." · "Slow queue — bulk + keyboard + loop or FAIL." · "Dropped capacity card — FAIL, it's KEEP." · "F08-V1 approved — never regenerate it."

---

*End of prompt F08. Start at §3 Step 1. Print every gate block. Hand-craft all 5.*

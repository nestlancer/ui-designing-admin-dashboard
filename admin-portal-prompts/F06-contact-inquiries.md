# Nestlancer Admin Portal Lab — F06 · Contact · Inquiries Triage — AI Agent Prompt
### Study screenshots + HTML + report + Swagger → understand full UI requirements → search similar great design templates → hand-craft 5 upgraded designs · one shared colour scheme

> Paste this whole file into an agent (Arena Agent Mode, Cursor, Claude Code) with the **`ui-designing-admin-dashboard`** repo open as the working directory.
>
> **Scope: ONE page family — F06 · Contact · Inquiries Triage.** One of **25 independent family prompts** (F01–F25): 25 × 5 = **125 templates**, ONE locked teal scheme (master `admin-portal-prompt.md` §5). This prompt builds **`admin-portal-lab/families/F06-contact-inquiries/V1…V5/`** — and nothing else. Never touch other families.
>
> **Style parent:** `example-demo-prompt/*` (gates + hand-crafted discipline). Shared rules in `admin-portal-prompt.md` — read it end-to-end first; **this file is the task**. **Do not push, commit, create or switch a branch.**

---

## 1. YOUR ROLE

1. **Product archaeologist** — reconstruct the inquiries queue exactly (chips, row-buttons, refresh) first. 2. **Research analyst** — quote every F06 Finding/C/A/KEEP. 3. **API analyst** — map queue + reply to `contact` spec. 4. **Design-template researcher** — ≥8 triage inboxes **after** S/R/A. 5. **Designer + art director** — 5 ideas, same teal. 6. **Craftsperson** — self-contained, offline, no CDN. 7. **Harsh critic** — reject click-dead rows, mouse-only triage, un-bulkable queues.

## 2. THE MISSION

| Stage | Input | Output |
|---|---|---|
| 0 · Baseline | F06 shots + HTML + metadata | Chips + rows + reply-gap frozen |
| 1 · Reports | `.md` + `.xlsx` 10 sheets | `families/F06-contact-inquiries/docs/REPORT-STUDY.md` |
| 2 · API | `contact` spec | `docs/API-MAP.md` |
| 3 · Templates | **AFTER** §4 + Gate A | `docs/TEMPLATE-RESEARCH.md` — ≥8 refs |
| 4 · Concepts | 0–3 | `docs/CONCEPTS.md` — **5 cards before code** |
| 5 · Build (MANUAL) | concepts | `V1…V5/index.html` — **5 hand-built** |
| 6 · Verify | all 5 @ 1440 + 390, light + dark | `docs/DELIVERY-REPORT.md` + gallery + manifest |

**Rule 1 — SAME teal scheme, DIFFERENT designs** (master §8.2). **Rule 2 — HAND-CRAFTED ONLY** (master §1.3). Features only from Gate S + Gate R ADDs + Gate A. **Operator question:** 20 inquiries, one operator, cleared before lunch — bulk, keyboard, loop.

## 1.3 Manual craft rule — summary

Hand-write each `families/F06-contact-inquiries/V#/index.html` (+CSS/JS). One own-variant skeleton copy allowed, then manual redesign. No variant-generating scripts. Full rule: master §1.3.

## 3. READ FIRST — in this order

1. This prompt + master + the two `example-demo-prompt/` files. 2. **F06 screenshots (2):** `007-contact.webp` (queue) · `008-contact-reply.webp` (reply view — live-unverified gap; baseline = screenshot + spec). 3. `nestlancer-admin-pages-html/README.md`, F06 HTML (§4) + `audit-metadata.json` (`/contact` filter; note 46 buttons, rows-as-buttons, 0 tables). 4. Report `.md` full + `.xlsx` 10 sheets (`.md` wins). 5. `backend-api-swagger/README.md` + spec: `contact.openapi.json` (7 paths — list, read, reply, spam, archive). 6. **Gate T only after Swagger + §4.** 7. **Touch only** F06 folder + shared merges (master §9.1).

## 4. THIS FAMILY — F06 · Contact · Inquiries Triage

The front-door queue: filter chips with live counts (**All 20 · New 14 · Read 5 · Responded 1 · Spam 0 · Archived 0** — freeze at Gate S), Refresh, and inquiry rows rendered as full-width buttons (avatar · name · timestamp · email · tag · subject snippet). Two live gaps shape this family: row clicks produced no capturable state (C14), and test-spam rows (`u2@spam.test` *hello world*) pollute New 14 — design the queue that survives both: rows that open the reply view (screenshot 008 + spec), spam handling with undo, and the full P1 triage kit.

> **Business weight:** 🔴 first contact with every future rupee — slow triage leaks pipeline.

| | |
|---|---|
| Routes | `/contact` (+ row → reply view) |
| Shell | F02's shell language (nav badge: Contact 14 per C6) |
| Variants | **V1–V5** — each covers **all** states (chips + reply in-page) |

**States in scope (every variant covers all):**

| HTML snapshot | Route / state | Screenshot |
|---|---|---|
| `51-contact-index.html` | `/contact` — queue | `007-contact.webp` |
| `136…141-contact-index-state-*.html` | Chip states All/New/Read/Responded/Spam/Archived | `007-contact.webp` |
| *(gap — screenshot baseline)* | Reply view | `008-contact-reply.webp` |

**Must include (every variant):** chips with counts + keyboard (`aria-pressed`) · rows that OPEN the reply view (C14: thread + composer + spam/archive + undo) · **bulk bar** (A1: select → read/spam/archive/assign) · **keyboard triage** (A2: j/k/x/e///?) · **saved views** (A3: Needs-me/Unanswered-48h/VIP) · **age badges** (A4) · **next-item loop** (A5: reply → auto-advance) · pagination info (C19) · dark + 375px.
**Content lock:** freeze chip labels/counts, Refresh, row anatomy (avatar/name/time/email/tag/subject), reply-view copy from screenshot 008 at Gate S. Spam rows are captured reality — design for them, don't delete them.
**Cross-cutting:** light + dark · 375px · empty (queue-zero) + skeleton + error states · rows as real triage controls (roving tabindex + live count region).

## 5. BRAND SYSTEM — locked

`shared/tokens.css` = **EXACTLY** master §5.2 CSS (create-if-missing; else import as-is). Teal only. Content lock: master §5.3.

## 6. WHAT TO CHANGE / ADD / KEEP — F06 scope

### CHANGE — every item in **all 5 variants**
- **C14** — Contact rows open the reply view (thread + composer + spam/archive + undo). *(§6.1)*
- **C19** — Pagination info (Showing x–y of N + size + total). *(§6.1)*
- **C3** — AA-safe tag/status text. *(§6.1)* · **C5** — Teal-only. *(§6.1)* · **C9** — Mono emails/refs/timestamps. *(§6.1)* · **C12** — Display queue counts. *(§6.1)* · **C18** — Dark parity. *(§6.1)* · **C20** — Logo alt. *(§6.1)*

### ADD — with priority + coverage (all P1 → **5/5**)
- **A1** — Bulk-action bar. · **A2** — Keyboard triage. · **A3** — Saved views. · **A4** — SLA/age badges + escalation. · **A5** — Next-item loop.

### KEEP — present in every variant
- Count-bearing chips (the queue's honesty). · Microcopy + teal identity. *(§6.3)*

## 7. GATES — in order, print blocks, stop on FAIL

Procedures: master §6. F06 scope: Gate S freezes chips/rows + reply-view screenshot baseline (mark live-gap); Gate R quotes queue rows; Gate A maps `contact` 7 paths (list/read/reply/spam/archive); Gate T ≥8 triage inboxes (Intercom/Linear/Gmail-style) **after** S/R/A.

```
## GATE S (F06) · Shots: 2/2 · HTML: <n>/7 · Reply live-gap noted: YES · Content frozen: YES · Gate: PASS/FAIL
## GATE R (F06) · MD: YES · XLSX: 10/10 · C: <n>/<n> · A: 5/5 P1 · KEEP: YES · Gate: PASS/FAIL
## GATE A (F06) · Specs: 1/1 · Endpoints: <n> · Demo-only: <n> · Gate: PASS/FAIL
## GATE T (F06) · Queries: <n> · Refs: <n>/≥8 · Mapped: YES · No invented: YES · Order: YES · Gate: PASS/FAIL
```

No concepts until S+R+A+T PASS.

## 8. CONCEPTS — 5 cards BEFORE code

Master §8.1–§8.2 (≥3/5 axes incl. A or C). Coverage: ≥1 minimal · ≥1 dense · ≥1 queue-led · ≥1 thread-led · ≥1 motion-led.

### 8.3 Roster guidance (adapt freely — keep 5)
| Variant | Suggested aspect (same tokens) |
|---|---|
| V1 | Ground-truth fix: captured queue, rows open reply, full P1 kit, calm |
| V2 | Split triage: queue rail + reply pane, keyboard-first, auto-advance |
| V3 | Card-queue: inquiries as triage cards with age + bulk sweep |
| V4 | Dense console: compact table-queue for 100+ items, saved views up front |
| V5 | Motion-signature: sweep-to-resolve choreography + loop transitions |

## 9. BUILD (manual, one by one)

Master §9; family paths below. Bulk + keyboard + loop MUST be operable in every variant (Gate 3 audits items/hour plausibility).

```
admin-portal-lab/families/F06-contact-inquiries/{V1…V5/index.html,docs/{BASELINE-MAP,REPORT-STUDY,API-MAP,TEMPLATE-RESEARCH,CONCEPTS,DELIVERY-REPORT}.md}
```

≤70 KB/variant; 360–1440; `?theme=` boot; V1 pilot first. Preview `:8131`.

## 10. COMPONENT INVENTORY (restyle allowed, dropping states forbidden)

**F06 primaries:** filter chips, inquiry rows, bulk bar, reply view (thread + composer), spam/archive + undo, saved-views control, pagination.
States: chip selected · row unread/read/selected · bulk none/partial/all · composer editing/sending/sent · undo window · dark + 375px. Lab-wide: master §10.

## 11–14. PERF · GATE 1/3 · CONSTRAINTS · CHECKLIST

Perf: master §11. Gates: master §12–§13 (tables 1–3; 1 winner).

```
## GATE 1 (F06) · Cards: 5/5 · Sketches: 5/5 · Difference: PASS/FAIL · C 5/5: YES/NO · P1 5/5: YES/NO · P2-P3 ≥3/5: YES/NO · Gate: PASS/FAIL
## GATE 3 (F06) · Hand-built: 5/5 · Generators: 0 · Widths×themes: <…> · Checklist: <…>/5 · Blockers: 0 · Gate: PASS/FAIL
```

Constraints: master §14. Scope = F06 folder + shared merges only.

- [ ] S/R/A/T PASS — `docs/` ×4 · Gate 1 PASS · Gate 2a/2b — 5 hand-authored; gallery + manifest + DECISIONS; 0 generators
- [ ] Same teal tokens; C14/C19/C3/C5/C9/C12/C18/C20 in 5/5; A1–A5 in 5/5 (manifest)
- [ ] Empty+skeleton+error; light+dark; 360–1440; keyboard triage complete; reduced-motion; no-JS reachable
- [ ] Gate 3 PASS — §7.1 ×5, 0 blockers, `DELIVERY-REPORT.md` + 1 winner · Reported paths + `:8131` + limits

### Operator shortcuts
- "Restore §5 teal." · "V# fails Difference vs V1 — axis A/C." · "Dead row — opens reply or demo-labelled." · "Slow queue — bulk + keyboard + loop or FAIL." · "F06-V1 approved — never regenerate it."

---

*End of prompt F06. Start at §3 Step 1. Print every gate block. Hand-craft all 5.*

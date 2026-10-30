# Nestlancer Admin Portal Lab — F18 · Messages Thread — AI Agent Prompt
### Study screenshots + HTML + report + Swagger → understand full UI requirements → search similar great design templates → hand-craft 5 upgraded designs · one shared colour scheme

> Paste this whole file into an agent (Arena Agent Mode, Cursor, Claude Code) with the **`ui-designing-admin-dashboard`** repo open as the working directory.
>
> **Scope: ONE page family — F18 · Messages Thread.** One of **25 independent family prompts** (F01–F25): 25 × 5 = **125 templates**, ONE locked teal scheme (master `admin-portal-prompt.md` §5). This prompt builds **`admin-portal-lab/families/F18-messages-thread/V1…V5/`** — the thread only (F17 owns home/inbox/new). Never touch other families.
>
> **Style parent:** `example-demo-prompt/*` (gates + hand-crafted discipline). Shared rules in `admin-portal-prompt.md` — read it end-to-end first; **this file is the task**. **Do not push, commit, create or switch a branch.**

---

## 1. YOUR ROLE

1. **Product archaeologist** — reconstruct the thread exactly (header, messages, composer, members, attachments) first. 2. **Research analyst** — quote every F18 Finding/C/A/KEEP. 3. **API analyst** — map thread to `messaging` spec (thread slice). 4. **Design-template researcher** — ≥8 thread/chat UIs **after** S/R/A. 5. **Designer + art director** — 5 ideas, same teal. 6. **Craftsperson** — self-contained, offline, no CDN. 7. **Harsh critic** — reject member-less threads, attachment-blind composers, unread-losing scroll.

## 2. THE MISSION

| Stage | Input | Output |
|---|---|---|
| 0 · Baseline | F18 shots + HTML + metadata | Thread anatomy frozen |
| 1 · Reports | `.md` + `.xlsx` 10 sheets | `families/F18-messages-thread/docs/REPORT-STUDY.md` |
| 2 · API | `messaging` spec (thread slice) | `docs/API-MAP.md` |
| 3 · Templates | **AFTER** §4 + Gate A | `docs/TEMPLATE-RESEARCH.md` — ≥8 refs |
| 4 · Concepts | 0–3 | `docs/CONCEPTS.md` — **5 cards before code** |
| 5 · Build (MANUAL) | concepts | `V1…V5/index.html` — **5 hand-built** |
| 6 · Verify | all 5 @ 1440 + 390, light + dark | `docs/DELIVERY-REPORT.md` + gallery + manifest |

**Rule 1 — SAME teal scheme, DIFFERENT designs** (master §8.2). **Rule 2 — HAND-CRAFTED ONLY** (master §1.3). Features only from Gate S + Gate R ADDs + Gate A. **Operator question:** read the whole story, know everyone in the room, reply without losing place.

## 1.3 Manual craft rule — summary

Hand-write each `families/F18-messages-thread/V#/index.html` (+CSS/JS). One own-variant skeleton copy allowed, then manual redesign. No variant-generating scripts. Full rule: master §1.3.

## 3. READ FIRST — in this order

1. This prompt + master + the two `example-demo-prompt/` files. 2. **F18 screenshots (4):** `026-messages-thread-details.webp` · `078-messages-edit-message-form.webp` · `079-messages-group-members-panel.webp` · `080-messages-reply-composer.webp`. 3. `nestlancer-admin-pages-html/README.md`, F18 HTML (§4) + `audit-metadata.json` (`/messages/*` thread filter — 9 states). 4. Report `.md` full + `.xlsx` 10 sheets (`.md` wins). 5. `backend-api-swagger/README.md` + spec: `messaging.openapi.json` (47 paths — thread/messages/members/attachments/flag slice for F18). 6. **Gate T only after Swagger + §4.** 7. **Touch only** F18 folder + shared merges (master §9.1).

## 4. THIS FAMILY — F18 · Messages Thread

The conversation room: thread **header** (parties, subject/project link, state), **message stream** (bubbles, timestamps, attachments, system events, flagged markers), **composer** (reply, attachments, internal-note? — spec-verified only), and **members/participants** (the closure item: every thread must show who's in the room). Nine captured states give you the anatomy — freeze message anatomy, composer controls, member rows, and flagged-treatment at Gate S.

> **Business weight:** 🟠 disputes and delivery context live in threads — completeness is the feature.

| | |
|---|---|
| Routes | `/messages/[id]` (entries from F17 inbox) |
| Shell | F02's shell language |
| Variants | **V1–V5** — each covers **thread + composer + members** (in-page) |

**States in scope (every variant covers all):**

| HTML snapshot | Route / state | Screenshot |
|---|---|---|
| `86…90-messages-sub-messages-thread-*.html` (5 threads) | Thread captures (reconcile) | `026-messages-thread-details.webp` |
| `162-messages-thread.html` | Thread (canonical) | `026-messages-thread-details.webp` |
| `163-messages-thread-state-mark-read.html` | Mark-read state | — (thread state) |
| `164-messages-thread-state-reply.html` | Reply state | `080-messages-reply-composer.webp` |
| `165-messages-thread-state-edit.html` | Edit-message state | `078-messages-edit-message-form.webp` |
| *(shot+spec baseline)* | Group-members panel | `079-messages-group-members-panel.webp` |

**Must include (every variant):** header (parties/subject/links/state) · stream (bubbles + timestamps + attachments + system events + flagged markers) · composer (reply + attachments + spec-verified extras) · **members panel** (every participant, role, state) · flagged→F19 entry · dark + 375px (members collapse cleanly).
**Content lock:** freeze message anatomy, composer controls, member rows, system-event copy, flagged treatment at Gate S. Internal-note and reactions ONLY if spec-backed.
**Cross-cutting:** light + dark · 375px · empty (no-messages) + skeleton + error + send-receipt states · stream keyboard-navigable + composer labelled + live sends.

## 5. BRAND SYSTEM — locked

`shared/tokens.css` = **EXACTLY** master §5.2 CSS (create-if-missing; else import as-is). Teal only. Content lock: master §5.3.

## 6. WHAT TO CHANGE / ADD / KEEP — F18 scope

### CHANGE — every item in **all 5 variants**
- **C9** — Mono refs/timestamps. *(§6.1)*
- **C3** — AA-safe text. *(§6.1)* · **C5** — Teal-only. *(§6.1)* · **C12** — Readable hierarchy. *(§6.1)* · **C18** — Dark parity. *(§6.1)* · **C20** — Logo alt. *(§6.1)*

### ADD — with priority + coverage
- Members closure (every thread shows the room) — 5/5 (family craft).
**Coverage:** P1 in 5/5 · P2–P3 in ≥3/5 (manifest).

### KEEP — present in every variant
- Stream honesty (frozen anatomy/events). · Microcopy + teal identity. *(§6.3)*

## 7. GATES — in order, print blocks, stop on FAIL

Procedures: master §6. F18 scope: Gate S reconciles 9 thread states + 3 shots; Gate R quotes F18 rows; Gate A maps thread slice; Gate T ≥8 thread/chat UIs **after** S/R/A.

```
## GATE S (F18) · Shots: 4/4 · HTML: 9/9 · Thread reconciled: YES · Content frozen: YES · Gate: PASS/FAIL
## GATE R (F18) · MD: YES · XLSX: 10/10 · C: <n>/<n> · A: <n>/<n> · KEEP: YES · Gate: PASS/FAIL
## GATE A (F18) · Specs: 1/1 · Endpoints: <n> · Demo-only: <n> · Gate: PASS/FAIL
## GATE T (F18) · Queries: <n> · Refs: <n>/≥8 · Mapped: YES · No invented: YES · Order: YES · Gate: PASS/FAIL
```

No concepts until S+R+A+T PASS.

## 8. CONCEPTS — 5 cards BEFORE code

Master §8.1–§8.2 (≥3/5 axes incl. A or C). Coverage: ≥1 minimal · ≥1 dense · ≥1 stream-led · ≥1 room-led · ≥1 motion-led.

### 8.3 Roster guidance (adapt freely — keep 5)
| Variant | Suggested aspect (same tokens) |
|---|---|
| V1 | Ground-truth fix: captured thread, members closed, calm |
| V2 | Stream-spine: the conversation owns the screen, room docks |
| V3 | Room-first: members + context lead, stream below |
| V4 | Dense console: compact thread + composer for support triage |
| V5 | Motion-signature: send/scroll choreography + transitions |

## 9. BUILD (manual, one by one)

Master §9; family paths below.

```
admin-portal-lab/families/F18-messages-thread/{V1…V5/index.html,docs/{BASELINE-MAP,REPORT-STUDY,API-MAP,TEMPLATE-RESEARCH,CONCEPTS,DELIVERY-REPORT}.md}
```

≤70 KB/variant; 360–1440; `?theme=` boot; V1 pilot first. Preview `:8131`.

## 10. COMPONENT INVENTORY (restyle allowed, dropping states forbidden)

**F18 primaries:** thread header, message stream, composer, members panel, flagged entry.
States: message sent/delivered/read/flagged · composer editing/sending/sent · attachment states · dark + 375px. Lab-wide: master §10.

## 11–14. PERF · GATE 1/3 · CONSTRAINTS · CHECKLIST

Perf: master §11. Gates: master §12–§13 (tables 1–3; 1 winner).

```
## GATE 1 (F18) · Cards: 5/5 · Sketches: 5/5 · Difference: PASS/FAIL · C 5/5: YES/NO · P1 5/5: YES/NO · P2-P3 ≥3/5: YES/NO · Gate: PASS/FAIL
## GATE 3 (F18) · Hand-built: 5/5 · Generators: 0 · Widths×themes: <…> · Checklist: <…>/5 · Blockers: 0 · Gate: PASS/FAIL
```

Constraints: master §14. Scope = F18 folder + shared merges only.

- [ ] S/R/A/T PASS — `docs/` ×4 · Gate 1 PASS · Gate 2a/2b — 5 hand-authored; gallery + manifest + DECISIONS; 0 generators
- [ ] Same teal tokens; C9/C3/C5/C12/C18/C20 in 5/5 (manifest)
- [ ] Empty+skeleton+error; light+dark; 360–1440; keyboard-complete; reduced-motion; no-JS reachable
- [ ] Gate 3 PASS — §7.1 ×5, 0 blockers, `DELIVERY-REPORT.md` + 1 winner · Reported paths + `:8131` + limits

### Operator shortcuts
- "Restore §5 teal." · "V# fails Difference vs V1 — axis A/C." · "Member-less thread — FAIL." · "F18-V1 approved — never regenerate it."

---

*End of prompt F18. Start at §3 Step 1. Print every gate block. Hand-craft all 5.*

# Nestlancer Admin Portal Lab — F19 · Moderation Queue — AI Agent Prompt
### Study screenshots + HTML + report + Swagger → understand full UI requirements → search similar great design templates → hand-craft 5 upgraded designs · one shared colour scheme

> Paste this whole file into an agent (Arena Agent Mode, Cursor, Claude Code) with the **`ui-designing-admin-dashboard`** repo open as the working directory.
>
> **Scope: ONE page family — F19 · Moderation Queue.** One of **25 independent family prompts** (F01–F25): 25 × 5 = **125 templates**, ONE locked teal scheme (master `admin-portal-prompt.md` §5). This prompt builds **`admin-portal-lab/families/F19-moderation-queue/V1…V5/`** — active queue + history (media quarantine ships in F23). Never touch other families.
>
> **Style parent:** `example-demo-prompt/*` (gates + hand-crafted discipline). Shared rules in `admin-portal-prompt.md` — read it end-to-end first; **this file is the task**. **Do not push, commit, create or switch a branch.**

---

> **Owner review — full-width, collapsible shell:** Authenticated console pages F02–F25 must use the full viewport width available beside the sidebar, with responsive gutters and no centered page-level max-width. Provide an obvious keyboard-accessible desktop Collapse/Expand control, a named icon rail, and persistent state across reloads/families; use a mobile drawer instead on small screens. Check 1920/2560 as well as 360–1440 in both themes. Keep shared tokens unchanged (`--content` must not cap console pages). Individual reading columns and dialogs may remain appropriately sized. F01 sign-in remains standalone, without an added sidebar. See master §9.2a.

## 1. YOUR ROLE

1. **Product archaeologist** — reconstruct the moderation queue exactly (tabs, items, actions, history) first. 2. **Research analyst** — quote every F19 Finding/C/A/KEEP. 3. **API analyst** — map queue/actions to `messaging` + `blog` + `media` specs. 4. **Design-template researcher** — ≥8 moderation consoles **after** S/R/A. 5. **Designer + art director** — 5 ideas, same teal. 6. **Craftsperson** — self-contained, offline, no CDN. 7. **Harsh critic** — reject one-click judgments, unlogged power, context-blind queues.

## 2. THE MISSION

| Stage | Input | Output |
|---|---|---|
| 0 · Baseline | F19 shots + HTML + metadata | Queue + history frozen |
| 1 · Reports | `.md` + `.xlsx` 10 sheets | `families/F19-moderation-queue/docs/REPORT-STUDY.md` |
| 2 · API | `messaging` + `blog` + `media` specs | `docs/API-MAP.md` |
| 3 · Templates | **AFTER** §4 + Gate A | `docs/TEMPLATE-RESEARCH.md` — ≥8 refs |
| 4 · Concepts | 0–3 | `docs/CONCEPTS.md` — **5 cards before code** |
| 5 · Build (MANUAL) | concepts | `V1…V5/index.html` — **5 hand-built** |
| 6 · Verify | all 5 @ 1440 + 390, light + dark | `docs/DELIVERY-REPORT.md` + gallery + manifest |

**Rule 1 — SAME teal scheme, DIFFERENT designs** (master §8.2). **Rule 2 — HAND-CRAFTED ONLY** (master §1.3). Features only from Gate S + Gate R ADDs + Gate A. **Operator question:** judge fast, judge fairly — context first, action guarded, history kept.

## 1.3 Manual craft rule — summary

Hand-write each `families/F19-moderation-queue/V#/index.html` (+CSS/JS). One own-variant skeleton copy allowed, then manual redesign. No variant-generating scripts. Full rule: master §1.3.

## 3. READ FIRST — in this order

1. This prompt + master + the two `example-demo-prompt/` files. 2. **F19 screenshots (2):** `027-moderation.webp` (queue) · `028-moderation-history.webp` (history). 3. `nestlancer-admin-pages-html/README.md`, F19 HTML (§4) + `audit-metadata.json` (`/moderation` filter — Active queue/History/Clear). 4. Report `.md` full + `.xlsx` 10 sheets (`.md` wins). 5. `backend-api-swagger/README.md` + specs: `messaging.openapi.json` (47 paths — flagged queue + moderation-history) · `blog.openapi.json` (reported comments) · `media.openapi.json` (quarantine links). 6. **Gate T only after Swagger + §4.** 7. **Touch only** F19 folder + shared merges (master §9.1).

## 4. THIS FAMILY — F19 · Moderation Queue

The judgment queue: **Active queue** + **History** + Clear. The captured moderation pages are empty: three zero summary cards, exact filter vocabulary and empty states. Swagger documents flag/dismiss/remove/escalate/restore paths but no flagged-message or history DTO. Freeze the captured shell, labels and zero state; keep populated anatomy explicitly unknown. Do not invent reporter, reason, age, rationale, SLA, assignee, saved views or history columns as product facts. Guard each local action with a consequence preview and explicit acknowledgement; keep optional reviewer notes local and non-sent. Add only source-compatible triage ergonomics: selection, safe bulk-dismiss preparation, keyboard navigation and review→next.

> **Business weight:** 🔴 judgments affect real people — context first, power guarded, history immutable.

| | |
|---|---|
| Routes | `/moderation` (+ flagged entries from messages/media) |
| Shell | F02's shell language |
| Variants | **V1–V5** — each covers **active queue + review + history** (in-page) |

**States in scope (every variant covers all):**

| HTML snapshot | Route / state | Screenshot |
|---|---|---|
| `91-moderation-index.html` · `12-dashboard-sub-moderation.html` (harvest dupe) | `/moderation` — Active queue | `027-moderation.webp` |
| `169-moderation-index-state-active-queue.html` | Active-queue state | `027-moderation.webp` |
| `170-moderation-index-state-history.html` | History state | `028-moderation-history.webp` |

**Must include (every variant):** default exact captured empty queue/history · captured shell chrome · exact summary cards and filter labels · source/demo disclosure · optional workflow demo using captured Nestlancer message text with synthetic flags · documented action vocabulary only · guarded two-step local review · selection + safe bulk-dismiss preparation · review→next loop · session-only history · dark + 375px.
**Content lock:** freeze captured labels, empty copy, filter options, shell identity and API action semantics. Populated row/history anatomy remains unknown; any demo fields must be labelled synthetic and must not claim reporter/reason/age/rationale contracts.
**Cross-cutting:** light + dark · 375px · empty + skeleton + error + local receipt states · keyboard-complete (guarded confirms trapped) · no fabricated permissions/audit/production execution.

## 5. BRAND SYSTEM — locked

`shared/tokens.css` = **EXACTLY** master §5.2 CSS (create-if-missing; else import as-is). Teal only; destructive inside status tokens. Content lock: master §5.3.

## 6. WHAT TO CHANGE / ADD / KEEP — F19 scope

### CHANGE — every item in **all 5 variants**
- **C17** — Review craft: every action needs context + consequence preview + explicit acknowledgement + confirm. Optional notes stay local; no mandatory reason/rationale field is invented. *(§6.1)*
- **C3** — AA-safe text. *(§6.1)* · **C5** — Teal-only. *(§6.1)* · **C9** — Mono refs/timestamps. *(§6.1)* · **C12** — Display counts. *(§6.1)* · **C18** — Dark parity. *(§6.1)* · **C20** — Logo alt. *(§6.1)*

### ADD — with priority + coverage (all P1 → **5/5**)
- **A1** — Bulk bar (safe actions only; local preparation, not a batch endpoint). · **A5** — Review→next loop. **A4 is not claimed:** age/SLA fields are undocumented.

### KEEP — present in every variant
- History separation and honest local-session receipts (actor/time/effect only for actions actually taken in the preview). · Microcopy + teal identity. *(§6.3)*

## 7. GATES — in order, print blocks, stop on FAIL

Procedures: master §6. F19 scope: Gate S freezes queue + actions + history; Gate R quotes F19 rows; Gate A maps flagged/reported/quarantine slices; Gate T ≥8 moderation consoles **after** S/R/A.

```
## GATE S (F19) · Shots: 2/2 · HTML: <n>/4 · Actions spec-mapped: YES · Content frozen: YES · Gate: PASS/FAIL
## GATE R (F19) · MD: YES · XLSX: 10/10 · C: <n>/<n> · A: <n>/<n> · KEEP: YES · Gate: PASS/FAIL
## GATE A (F19) · Specs: 3/3 · Endpoints: <n> · Demo-only: <n> · Gate: PASS/FAIL
## GATE T (F19) · Queries: <n> · Refs: <n>/≥8 · Mapped: YES · No invented: YES · Order: YES · Gate: PASS/FAIL
```

No concepts until S+R+A+T PASS.

## 8. CONCEPTS — 5 cards BEFORE code

Master §8.1–§8.2 (≥3/5 axes incl. A or C). Coverage: ≥1 minimal · ≥1 dense · ≥1 queue-led · ≥1 review-led · ≥1 motion-led.

### 8.3 Roster guidance (adapt freely — keep 5)
| Variant | Suggested aspect (same tokens) |
|---|---|
| V1 | Queue workspace: captured empty default, split table + review pane |
| V2 | Context review: case rail + message/context + guidance |
| V3 | Chat-type triage: Project / Direct / Group lanes from captured filters |
| V4 | Decision register: dense table with in-place expanded review |
| V5 | Focused reader: case strip + evidence folio + next-case continuity |

## 9. BUILD (manual, one by one)

Master §9; family paths below. Review actions MUST be guarded + consequence-previewed + session-history-visible in every variant (lab static — confirm + receipt copy only). Do not claim a reason code, audit log or server permission check.

```
admin-portal-lab/families/F19-moderation-queue/{V1…V5/index.html,docs/{BASELINE-MAP,REPORT-STUDY,API-MAP,TEMPLATE-RESEARCH,CONCEPTS,DELIVERY-REPORT}.md}
```

≤70 KB/variant; 360–1440; `?theme=` boot; V1 pilot first. Preview `:8131`.

## 10. COMPONENT INVENTORY (restyle allowed, dropping states forbidden)

**F19 primaries:** queue tabs, summary cards, captured filters, empty states, optional demo flagged messages, guarded review, selection bar, session history.
States: Flagged/Escalated in demo · Dismissed/Removed/Restored as local session events · confirm/receipt · dark + 375px. No “Approved” or invented pending state. Lab-wide: master §10.

## 11–14. PERF · GATE 1/3 · CONSTRAINTS · CHECKLIST

Perf: master §11. Gates: master §12–§13 (tables 1–3; 1 winner).

```
## GATE 1 (F19) · Cards: 5/5 · Sketches: 5/5 · Difference: PASS/FAIL · C 5/5: YES/NO · P1 5/5: YES/NO · P2-P3 ≥3/5: YES/NO · Gate: PASS/FAIL
## GATE 3 (F19) · Hand-built: 5/5 · Generators: 0 · Widths×themes: <…> · Checklist: <…>/5 · Blockers: 0 · Gate: PASS/FAIL
```

Constraints: master §14. Scope = F19 folder + shared merges only.

- [ ] S/R/A/T PASS — `docs/` ×4 · Gate 1 PASS · Gate 2a/2b — 5 hand-authored; gallery + manifest + DECISIONS; 0 generators
- [ ] Same teal tokens; C17/C3/C5/C9/C12/C18/C20 in 5/5; A1/A5 in 5/5 (manifest); A4 explicitly not claimed
- [ ] Empty+skeleton+error; light+dark; 360–1440; keyboard-complete; reduced-motion; no-JS reachable
- [ ] Gate 3 PASS — §7.1 ×5, 0 blockers, `DELIVERY-REPORT.md` + 1 winner · Reported paths + `:8131` + limits

### Operator shortcuts
- "Restore §5 teal." · "V# fails Difference vs V1 — axis A/C." · "One-click judgment — FAIL, guard + consequence + session history." · "Do not invent reporter/reason/age fields." · "F19-V1 approved — never regenerate it."

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

*End of prompt F19. Start at §3 Step 1. Print every gate block. Hand-craft all 5.*


---

## Owner review — source-complete data and differentiated design (2026-11-02)

When a reviewer says demo data is incomplete or designs resemble the production screenshot, re-inspect the applicable captures individually, reconcile every identity and visible record with the related Swagger contracts, and document missing or conflicting data. Do not substitute one account’s data for another, invent unseen pages, claim a simulated action was executed, or claim a server permission/audit result. Search and inspect relevant public design examples, then change information architecture and visual hierarchy as appropriate — not just colours or small spacing changes. Preserve approved work unless the user asks for revisions; this review explicitly requests changes to both F15 and F16. Test the revised pages and report actual coverage and unresolved gaps. Follow the shared master and relevant family scope; do not mark gates passed merely because an initial mock exists.

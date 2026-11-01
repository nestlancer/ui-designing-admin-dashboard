# Nestlancer Admin Portal Lab — F17 · Messages Home + Inbox + New — AI Agent Prompt
### Study screenshots + HTML + report + Swagger → understand full UI requirements → search similar great design templates → hand-craft 5 upgraded designs · one shared colour scheme

> Paste this whole file into an agent (Arena Agent Mode, Cursor, Claude Code) with the **`ui-designing-admin-dashboard`** repo open as the working directory.
>
> **Scope: ONE page family — F17 · Messages Home + Inbox + New.** One of **25 independent family prompts** (F01–F25): 25 × 5 = **125 templates**, ONE locked teal scheme (master `admin-portal-prompt.md` §5). This prompt builds **`admin-portal-lab/families/F17-messages-home/V1…V5/`** — home + inbox + new/group (F18 owns the thread). Never touch other families.
>
> **Style parent:** `example-demo-prompt/*` (gates + hand-crafted discipline). Shared rules in `admin-portal-prompt.md` — read it end-to-end first; **this file is the task**. **Do not push, commit, create or switch a branch.**

---

## 1. YOUR ROLE

1. **Product archaeologist** — reconstruct messages home + inbox + new/group exactly first. 2. **Research analyst** — quote every F17 Finding/C/A/KEEP. 3. **API analyst** — map inbox/compose to `messaging` spec. 4. **Design-template researcher** — ≥8 team inboxes **after** S/R/A. 5. **Designer + art director** — 5 ideas, same teal. 6. **Craftsperson** — self-contained, offline, no CDN. 7. **Harsh critic** — reject dead compose paths, mouse-only queues, dropped moderation entry.

## 2. THE MISSION

| Stage | Input | Output |
|---|---|---|
| 0 · Baseline | F17 shots + HTML + metadata | Home + inbox + new frozen |
| 1 · Reports | `.md` + `.xlsx` 10 sheets | `families/F17-messages-home/docs/REPORT-STUDY.md` |
| 2 · API | `messaging` spec (home slice) | `docs/API-MAP.md` |
| 3 · Templates | **AFTER** §4 + Gate A | `docs/TEMPLATE-RESEARCH.md` — ≥8 refs |
| 4 · Concepts | 0–3 | `docs/CONCEPTS.md` — **5 cards before code** |
| 5 · Build (MANUAL) | concepts | `V1…V5/index.html` — **5 hand-built** |
| 6 · Verify | all 5 @ 1440 + 390, light + dark | `docs/DELIVERY-REPORT.md` + gallery + manifest |

**Rule 1 — SAME teal scheme, DIFFERENT designs** (master §8.2). **Rule 2 — HAND-CRAFTED ONLY** (master §1.3). Features only from Gate S + Gate R ADDs + Gate A. **Operator question:** every conversation findable in seconds; starting one never a dead end.

## 1.3 Manual craft rule — summary

Hand-write each `families/F17-messages-home/V#/index.html` (+CSS/JS). One own-variant skeleton copy allowed, then manual redesign. No variant-generating scripts. Full rule: master §1.3.

## 3. READ FIRST — in this order

1. This prompt + master + the two `example-demo-prompt/` files. 2. **F17 screenshots (4):** `022-messages.webp` (home) · `023-messages-inbox.webp` (inbox) · `024-messages-new-direct.webp` (new-direct — live-verified in `166`) · `025-messages-new-group.webp` (new-group — live route 404s, see `167`). 3. `nestlancer-admin-pages-html/README.md`, F17 HTML (§4) + `audit-metadata.json` (`/messages` home filter). 4. Report `.md` full + `.xlsx` 10 sheets (`.md` wins). 5. `backend-api-swagger/README.md` + spec: `messaging.openapi.json` (47 paths — home/inbox/compose slice for F17; thread slice = F18). 6. **Gate T only after Swagger + §4.** 7. **Touch only** F17 folder + shared merges (master §9.1).

## 4. THIS FAMILY — F17 · Messages Home + Inbox + New

The conversation front door: messages **home** (entry points), the **inbox** (conversation list with unread/flagged states), and **new-direct** (`166` ✓) plus **new-group** creation — whose live route returns **Page not found** (`167` captured the 404; shot `025` shows the intended flow). Thread depth belongs to F18, flagged review to F19 — but the entries must be live-feeling and correctly routed (C11), with unread/flagged counts honest (F02's *Flagged msgs 0* and the bell context reconciled at Gate S).

> **Business weight:** 🟡 every escalation and every flagged message passes through here — routing is the feature.

| | |
|---|---|
| Routes | `/messages` + inbox + `/messages/new-direct` + `/messages/new/group` (live 404 — see `167`; thread route = F18, link it) |
| Shell | F02's shell language |
| Variants | **V1–V5** — each covers **home + inbox + new** (in-page; thread linked) |

**States in scope (every variant covers all):**

| HTML snapshot | Route / state | Screenshot |
|---|---|---|
| `85-messages-index.html` · `20-dashboard-sub-messages.html` (harvest dupe) | `/messages` — home | `022-messages.webp` |
| `168-messages-inbox.html` | Inbox | `023-messages-inbox.webp` |
| `166-messages-new-direct.html` | New-direct flow | `024-messages-new-direct.webp` |
| `167-messages-new-group.html` | New-group route — live **Page not found** (404 evidence) | `025-messages-new-group.webp` (intended flow) |

**Must include (every variant):** home entry points (frozen) · inbox list (unread/flagged/muted states, mono refs C9) · new-direct + new-group flows (spec fields, validated, C11-routed; new-group 404 fixed per shot `025`) · thread deep-links (F18) + flagged entry (F19) · filter/search where captured · dark + 375px.
**Content lock:** freeze home copy, inbox row anatomy, compose fields, counts at Gate S. Unread/flagged figures stay captured — reconcile with F02/F07 counts, never invent.
**Cross-cutting:** light + dark · 375px · empty + skeleton + error states · keyboard-complete list + compose.

## 5. BRAND SYSTEM — locked

`shared/tokens.css` = **EXACTLY** master §5.2 CSS (create-if-missing; else import as-is). Teal only. Content lock: master §5.3.

## 6. WHAT TO CHANGE / ADD / KEEP — F17 scope

### CHANGE — every item in **all 5 variants**
- **C9** — Mono refs/timestamps. *(§6.1)* · **C11** — Unified routing grammar (home/inbox/new/thread/flagged links). *(§6.1)*
- **C3** — AA-safe text. *(§6.1)* · **C5** — Teal-only. *(§6.1)* · **C12** — Display counts. *(§6.1)* · **C18** — Dark parity. *(§6.1)* · **C20** — Logo alt. *(§6.1)*

### ADD — with priority + coverage
- No F17-targeted P1 ADDs; route-entries + unread honesty ship as the family craft — 5/5.
**Coverage:** P1 in 5/5 (n/a) · manifest records.

### KEEP — present in every variant
- Inbox honesty (frozen states/counts). · Microcopy + teal identity. *(§6.3)*

## 7. GATES — in order, print blocks, stop on FAIL

Procedures: master §6. F17 scope: Gate S freezes home + inbox + new-group + count reconciliation; Gate R quotes F17 rows; Gate A maps home slice; Gate T ≥8 team inboxes **after** S/R/A.

```
## GATE S (F17) · Shots: 4/4 · HTML: <n>/5 · Counts reconciled: YES · Content frozen: YES · Gate: PASS/FAIL
## GATE R (F17) · MD: YES · XLSX: 10/10 · C: <n>/<n> · A: <n>/<n> · KEEP: YES · Gate: PASS/FAIL
## GATE A (F17) · Specs: 1/1 · Endpoints: <n> · Demo-only: <n> · Gate: PASS/FAIL
## GATE T (F17) · Queries: <n> · Refs: <n>/≥8 · Mapped: YES · No invented: YES · Order: YES · Gate: PASS/FAIL
```

No concepts until S+R+A+T PASS.

## 8. CONCEPTS — 5 cards BEFORE code

Master §8.1–§8.2 (≥3/5 axes incl. A or C). Coverage: ≥1 minimal · ≥1 dense · ≥1 inbox-led · ≥1 home-led · ≥1 motion-led.

### 8.3 Roster guidance (adapt freely — keep 5)
| Variant | Suggested aspect (same tokens) |
|---|---|
| V1 | Ground-truth fix: captured home + inbox + new, routed clean |
| V2 | Inbox-spine: the list owns the screen, home docks as header |
| V3 | Home-first: entry cards + smart sections lead, inbox below |
| V4 | Dense console: compact list + compose drawer for support ops |
| V5 | Motion-signature: list/compose choreography + transitions |

## 9. BUILD (manual, one by one)

Master §9; family paths below.

```
admin-portal-lab/families/F17-messages-home/{V1…V5/index.html,docs/{BASELINE-MAP,REPORT-STUDY,API-MAP,TEMPLATE-RESEARCH,CONCEPTS,DELIVERY-REPORT}.md}
```

≤70 KB/variant; 360–1440; `?theme=` boot; V1 pilot first. Preview `:8131`.

## 10. COMPONENT INVENTORY (restyle allowed, dropping states forbidden)

**F17 primaries:** home entries, inbox list, new/new-group compose, deep-links (thread/flagged).
States: conversation unread/read/flagged/muted · compose valid/invalid/sending/sent · dark + 375px. Lab-wide: master §10.

## 11–14. PERF · GATE 1/3 · CONSTRAINTS · CHECKLIST

Perf: master §11. Gates: master §12–§13 (tables 1–3; 1 winner).

```
## GATE 1 (F17) · Cards: 5/5 · Sketches: 5/5 · Difference: PASS/FAIL · C 5/5: YES/NO · P1 5/5: YES/NO · P2-P3 ≥3/5: YES/NO · Gate: PASS/FAIL
## GATE 3 (F17) · Hand-built: 5/5 · Generators: 0 · Widths×themes: <…> · Checklist: <…>/5 · Blockers: 0 · Gate: PASS/FAIL
```

Constraints: master §14. Scope = F17 folder + shared merges only.

- [ ] S/R/A/T PASS — `docs/` ×4 · Gate 1 PASS · Gate 2a/2b — 5 hand-authored; gallery + manifest + DECISIONS; 0 generators
- [ ] Same teal tokens; C9/C11/C3/C5/C12/C18/C20 in 5/5 (manifest)
- [ ] Empty+skeleton+error; light+dark; 360–1440; keyboard-complete; reduced-motion; no-JS reachable
- [ ] Gate 3 PASS — §7.1 ×5, 0 blockers, `DELIVERY-REPORT.md` + 1 winner · Reported paths + `:8131` + limits

### Operator shortcuts
- "Restore §5 teal." · "V# fails Difference vs V1 — axis A/C." · "Dead compose path — FAIL." · "F17-V1 approved — never regenerate it."

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

*End of prompt F17. Start at §3 Step 1. Print every gate block. Hand-craft all 5.*

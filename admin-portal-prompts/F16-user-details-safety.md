# Nestlancer Admin Portal Lab — F16 · User Details + Safety Dialogs — AI Agent Prompt
### Study screenshots + HTML + report + Swagger → understand full UI requirements → search similar great design templates → hand-craft 5 upgraded designs · one shared colour scheme

> Paste this whole file into an agent (Arena Agent Mode, Cursor, Claude Code) with the **`ui-designing-admin-dashboard`** repo open as the working directory.
>
> **Scope: ONE page family — F16 · User Details + Safety Dialogs.** One of **25 independent family prompts** (F01–F25): 25 × 5 = **125 templates**, ONE locked teal scheme (master `admin-portal-prompt.md` §5). This prompt builds **`admin-portal-lab/families/F16-user-details-safety/V1…V5/`** — profile + pipeline links + verify/suspend/ban/delete dialogs (F15 owns the directory). Never touch other families.
>
> **Style parent:** `example-demo-prompt/*` (gates + hand-crafted discipline). Shared rules in `admin-portal-prompt.md` — read it end-to-end first; **this file is the task**. **Do not push, commit, create or switch a branch.**

---

## 1. YOUR ROLE

1. **Product archaeologist** — reconstruct the user detail + every safety dialog exactly first. 2. **Research analyst** — quote every F16 Finding/C/A/KEEP. 3. **API analyst** — map profile + verify/suspend/ban/delete to `users` spec (+audit). 4. **Design-template researcher** — ≥8 trust-&-safety consoles **after** S/R/A. 5. **Designer + art director** — 5 ideas, same teal. 6. **Craftsperson** — self-contained, offline, no CDN. 7. **Harsh critic** — reject one-click deactivations, unlogged power, softened safety copy.

## 2. THE MISSION

| Stage | Input | Output |
|---|---|---|
| 0 · Baseline | F16 shots + HTML + metadata | Profile + dialogs frozen |
| 1 · Reports | `.md` + `.xlsx` 10 sheets | `families/F16-user-details-safety/docs/REPORT-STUDY.md` |
| 2 · API | §3 specs | `docs/API-MAP.md` |
| 3 · Templates | **AFTER** §4 + Gate A | `docs/TEMPLATE-RESEARCH.md` — ≥8 refs |
| 4 · Concepts | 0–3 | `docs/CONCEPTS.md` — **5 cards before code** |
| 5 · Build (MANUAL) | concepts | `V1…V5/index.html` — **5 hand-built** |
| 6 · Verify | all 5 @ 1440 + 390, light + dark | `docs/DELIVERY-REPORT.md` + gallery + manifest |

**Rule 1 — SAME teal scheme, DIFFERENT designs** (master §8.2). **Rule 2 — HAND-CRAFTED ONLY** (master §1.3). Features only from Gate S + Gate R ADDs + Gate A. **Operator question:** act on a user with total confidence — every power guarded, every action logged.

## 1.3 Manual craft rule — summary

Hand-write each `families/F16-user-details-safety/V#/index.html` (+CSS/JS). One own-variant skeleton copy allowed, then manual redesign. No variant-generating scripts. Full rule: master §1.3.

## 3. READ FIRST — in this order

1. This prompt + master + the two `example-demo-prompt/` files. 2. **F16 screenshots (13):** `002-user-details-sole-administrator-safeguards.webp` · `108-user-details-deactivation-confirmation.webp` · `109-user-details-edit-profile-dialog.webp` · `110-user-details-impersonation-reason-dialog.webp` · `111-user-details-populated-client-account.webp` · `112-user-details-revoke-session-confirmation.webp` · `113-user-details-set-password-dialog.webp` · `114-user-pipeline-messages.webp` · `115-user-pipeline-payments.webp` · `116-user-pipeline-projects.webp` · `117-user-pipeline-quotes.webp` · `118-user-pipeline-requests.webp` · `119-user-pipeline-trust-account.webp`. 3. `nestlancer-admin-pages-html/README.md`, F16 HTML (§4) + `audit-metadata.json` (`/users/*` filter — profile + dialog captures). 4. Report `.md` full + `.xlsx` 10 sheets (`.md` wins). 5. `backend-api-swagger/README.md` + specs: `users.openapi.json` (40 paths — profile, pipeline, verify, suspend, ban, delete, audit fields) · `admin` (audit-log links). 6. **Gate T only after Swagger + §4.** 7. **Touch only** F16 folder + shared merges (master §9.1).

## 4. THIS FAMILY — F16 · User Details + Safety Dialogs

The trust console: client **profile** (`111`: identity, contact, stats, linked pipeline), **pipeline tabs ×6** (`114`–`119`: messages/payments/projects/quotes/requests/trust-account — shot-backed, live-unverified per report §2.2; actions spec-verified), and the **safety dialogs** — Edit profile (`158`/`109`) · Set password (`159`/`113`) · Impersonate (`160`/`110`) · Deactivate (`161`/`108`) · End all sessions (`157`/`112`) — each with reason codes, confirm copy, and reversibility honesty, plus sole-administrator safeguards (`002`). Dialog copy is safety text: freeze it verbatim, never soften, and keep the audit trail visible (who acted, when, why — A15).

> **Business weight:** 🔴 bans and deletes are irreversible-adjacent — this family is safety-critical.

| | |
|---|---|
| Routes | `/users/[id]` (+ pipeline contexts; dialogs in-page) |
| Shell | F02's shell language |
| Variants | **V1–V5** — each covers **profile + pipeline tabs + all dialogs + safeguards** (in-page) |

**States in scope (every variant covers all):**

| HTML snapshot | Route / state | Screenshot |
|---|---|---|
| `156-users-details.html` · `80…84-users-sub-users-*.html` (5 captures) · `59/60-notifications-sub-users-*.html` · `142-notifications-details.html` | User detail (reconcile ×9 into canonical profile; `59/60/142` arrived via other routes) | `111-user-details-populated-client-account.webp` |
| `157-users-details-state-end-all-sessions.html` | End-all-sessions state | `112-user-details-revoke-session-confirmation.webp` |
| `158-users-details-dlg-edit-profile.html` | Edit-profile dialog | `109-user-details-edit-profile-dialog.webp` |
| `159-users-details-dlg-set-password.html` | Set-password dialog | `113-user-details-set-password-dialog.webp` |
| `160-users-details-dlg-impersonate.html` | Impersonate dialog | `110-user-details-impersonation-reason-dialog.webp` |
| `161-users-details-dlg-deactivate-user.html` | Deactivate-user dialog | `108-user-details-deactivation-confirmation.webp` |
| *(shot+spec baseline)* | Sole-administrator safeguards | `002-user-details-sole-administrator-safeguards.webp` |
| *(shot+spec baseline)* | Pipeline tabs ×6 (messages/payments/projects/quotes/requests/trust-account) | `114`–`119-user-pipeline-*.webp` |

**Must include (every variant):** populated profile (frozen sections/fields) · pipeline tabs ×6 (shot-backed content, spec-verified actions) · all 5 safety dialogs with reason codes + confirm copy + reversibility notes + sole-admin safeguards · action audit strip (A15: who/when/why per action) · dark + 375px (dialogs become sheets).
**Content lock:** freeze profile sections, dialog titles/copy/reasons, audit fields at Gate S. Safety copy verbatim-or-stronger — never softer.
**Cross-cutting:** light + dark · 375px · empty + skeleton + error + action-receipt states · dialogs trapped + Esc + restore + announced · reduced-motion.

## 5. BRAND SYSTEM — locked

`shared/tokens.css` = **EXACTLY** master §5.2 CSS (create-if-missing; else import as-is). Teal only; destructive stays inside status tokens. Content lock: master §5.3.

## 6. WHAT TO CHANGE / ADD / KEEP — F16 scope

### CHANGE — every item in **all 5 variants**
- **C3** — AA-safe text. *(§6.1)* · **C5** — Teal-only. *(§6.1)* · **C9** — Mono IDs/emails/timestamps. *(§6.1)* · **C12** — Display counts. *(§6.1)* · **C18** — Dark parity. *(§6.1)* · **C20** — Logo alt. *(§6.1)*

### ADD — with priority + coverage
- **A15** (P3 → ≥3/5) — Action audit strip (who/when/why on every safety action).

### KEEP — present in every variant
- **Safety-dialog structure + verbatim safety copy.** · Pipeline linkage. · Microcopy + teal identity. *(§6.3)*

## 7. GATES — in order, print blocks, stop on FAIL

Procedures: master §6. F16 scope: Gate S freezes profiles + dialogs (verbatim copy) + audit; Gate R quotes F16 rows; Gate A maps `users` 56 paths (verify/suspend/ban/delete + audit); Gate T ≥8 trust-&-safety consoles **after** S/R/A.

```
## GATE S (F16) · Shots: 13/13 · HTML: <n>/14 · Dialog copy verbatim: YES · Content frozen: YES · Gate: PASS/FAIL
## GATE R (F16) · MD: YES · XLSX: 10/10 · C: <n>/<n> · A: <n>/<n> · KEEP: YES · Gate: PASS/FAIL
## GATE A (F16) · Specs: 2/2 · Endpoints: <n> · Demo-only: <n> · Gate: PASS/FAIL
## GATE T (F16) · Queries: <n> · Refs: <n>/≥8 · Mapped: YES · No invented: YES · Order: YES · Gate: PASS/FAIL
```

No concepts until S+R+A+T PASS.

## 8. CONCEPTS — 5 cards BEFORE code

Master §8.1–§8.2 (≥3/5 axes incl. A or C). Coverage: ≥1 minimal · ≥1 dense · ≥1 profile-led · ≥1 trust-led · ≥1 motion-led.

### 8.3 Roster guidance (adapt freely — keep 5)
| Variant | Suggested aspect (same tokens) |
|---|---|
| V1 | Ground-truth fix: captured profiles + dialogs, audit strip, calm |
| V2 | Trust-spine: verification/safety state owns the header, profile docked |
| V3 | Timeline-profile: identity + history as the spine with action rail |
| V4 | Dense console: compact 360° with dialog drawer for safety ops |
| V5 | Motion-signature: guarded-action choreography + transitions |

## 9. BUILD (manual, one by one)

Master §9; family paths below. Safety actions MUST be confirm-gated + reason-coded + audit-visible in every variant (lab static — confirm + receipt copy only).

```
admin-portal-lab/families/F16-user-details-safety/{V1…V5/index.html,docs/{BASELINE-MAP,REPORT-STUDY,API-MAP,TEMPLATE-RESEARCH,CONCEPTS,DELIVERY-REPORT}.md}
```

≤70 KB/variant; 360–1440; `?theme=` boot; V1 pilot first. Preview `:8131`.

## 10. COMPONENT INVENTORY (restyle allowed, dropping states forbidden)

**F16 primaries:** profile header + sections, pipeline tabs ×6, 5 safety dialogs (edit-profile/set-password/impersonate/deactivate/end-sessions) + sole-admin safeguards, audit strip.
States: profile + pipeline tabs · dialog confirm/receipt · action logged · dark + 375px sheets. Lab-wide: master §10.

## 11–14. PERF · GATE 1/3 · CONSTRAINTS · CHECKLIST

Perf: master §11. Gates: master §12–§13 (tables 1–3; 1 winner).

```
## GATE 1 (F16) · Cards: 5/5 · Sketches: 5/5 · Difference: PASS/FAIL · C 5/5: YES/NO · P1 5/5: YES/NO · P2-P3 ≥3/5: YES/NO · Gate: PASS/FAIL
## GATE 3 (F16) · Hand-built: 5/5 · Generators: 0 · Widths×themes: <…> · Checklist: <…>/5 · Blockers: 0 · Gate: PASS/FAIL
```

Constraints: master §14. Scope = F16 folder + shared merges only.

- [ ] S/R/A/T PASS — `docs/` ×4 · Gate 1 PASS · Gate 2a/2b — 5 hand-authored; gallery + manifest + DECISIONS; 0 generators
- [ ] Same teal tokens; C3/C5/C9/C12/C18/C20 in 5/5; A15 ≥3/5 (manifest)
- [ ] Empty+skeleton+error; light+dark; 360–1440; keyboard-complete (traps); reduced-motion; no-JS reachable
- [ ] Gate 3 PASS — §7.1 ×5, 0 blockers, `DELIVERY-REPORT.md` + 1 winner · Reported paths + `:8131` + limits

### Operator shortcuts
- "Restore §5 teal." · "V# fails Difference vs V1 — axis A/C." · "One-click deactivate — FAIL, guard + reason + audit." · "Softened safety copy — FAIL." · "F16-V1 approved — never regenerate it."

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

*End of prompt F16. Start at §3 Step 1. Print every gate block. Hand-craft all 5.*

# F01 Delivery Report — Operator Sign-in

**Family:** F01 · Auth · Operator Sign-in  
**Delivery date:** 2026-10-30  
**Result:** PASS — five hand-authored variants delivered and verified  
**Gallery:** `admin-portal-lab/index.html` · section `#f01`

## 1. Delivered templates

| Variant | Name | Structural idea | Signature interaction | Bytes |
|---|---|---|---|---:|
| V1 | Ground Truth | Two-column access-policy/form shell | Credentials → TOTP focus handoff | 22,134 |
| V2 | Split Console Door | Full-height split policy/form chapters | Split transition + native mobile policy disclosure | 21,552 |
| V3 | Security Minimal | Narrow security ledger with progressive disclosures | Validation-summary field-focus links | 19,693 |
| V4 | On-call Access Ledger | Dense three-region ops register | Explicitly simulated auth-health retry | 21,809 |
| V5 | Focus Sequence | Asymmetric chapter rail and staged form | Reduced-motion-aware chapter crossfade and stepper updates | 22,986 |

All five are single-file HTML deliverables with inline CSS/JS and only the two relative shared stylesheets as runtime dependencies. Every file is below the 70KB ceiling. No generator scripts exist anywhere under `admin-portal-lab/`.

## 2. Baseline and design-contract fidelity

- Source DOM: `nestlancer-admin-pages-html/01-auth-login.html`, confirmed equivalent to capture 61's rendered auth DOM.
- Source title/H1: `Operator sign-in · Admin` / `Nestlancer Admin`.
- Frozen controls and names preserved: Work email, Password, Show, Keep me signed in, Enter console; `email`, `password`, `rememberMe`.
- Access facts, operator-only boundary, client-account rule, pre-auth posture, host, policy, Terms/Privacy, and return navigation are retained across the set. V2/V3/V5 use native disclosures or chapter grouping for some policy content; no policy is silently discarded.
- Cookie banner removed under C15 in 5/5 variants.
- No empty `href="#"`, placeholder image, fake online state, fabricated identity, session, attempt counter, lockout timer, or unsupported authentication method was introduced.
- `shared/tokens.css` is an exact byte-for-byte match to the master prompt's §5.2 token block (after trimming surrounding newlines). All five variants import it and `shared/base.css`.

## 3. C/A coverage

| Variant | C3 | C5 | C9 | C12 | C15 | C18 | C20 | A11 | P1 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| V1 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — |
| V2 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — |
| V3 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — |
| V4 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — |
| V5 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — |

**Coverage:** all seven CHANGE items in 5/5; A11 in 5/5 (minimum 3/5); no P1 ADD applies to F01. Coverage is also recorded per variant in `admin-portal-lab/manifest.json`.

## 4. Functional-state verification

Every variant was exercised through:

1. Required-field submit with focus on the first invalid field.
2. Invalid email with a specific inline message and `aria-invalid`.
3. Show password (`type=text`, `aria-pressed=true`, updated accessible name).
4. Valid demo credential submit; immediate disabled/loading state prevents duplicate submission.
5. Credentials → 2FA challenge with a visible heading and focus handoff.
6. Invalid short TOTP with inline error.
7. `backupCode` selection and an 8-character demo backup code.
8. Demo verification completion, explicitly stating that no session was created.
9. Back to credentials.
10. Preview states: invalid credentials, expired session, service unavailable, loading completion, and direct 2FA.
11. Expired-session Retry returning focus to Work email.
12. Theme toggle changing the root theme and control state.

Variant-specific checks also passed:

- **V2:** final mobile-header regression retains one visible H1 at 28px on 360/390px.
- **V3:** validation summary is visible and its Work email button focuses `#admin-email`.
- **V4:** health preview reaches `Preview only · simulated available` without a network request.
- **V5:** stepper moves to `verification`, focuses `#verification-title`, returns to `credentials`, and reveals content immediately under reduced motion.

## 5. Responsive, theme, and runtime matrix

- **50/50 combinations passed:** 5 variants × 5 widths (360, 390, 768, 1024, 1440px) × light/dark.
- At every combination: `scrollWidth === viewport width`, one visible H1, no duplicate IDs, correct dark root class, and expected body background.
- H1 sizes remained at least 28px on mobile and at least 28px at tablet/desktop; all are at least 30px at 1024px and 34px at 1440px except the intentionally minimal 30px V2 treatment at 1024px.
- **Zero JavaScript page errors** and **zero remote runtime requests** across the matrix and interaction runs.
- All long-text wrapping is handled with `overflow-wrap`; fixed panels, form controls, ledger cells, and navigation wrap or reorder without horizontal scrolling.
- V5's IntersectionObserver reveals are non-blocking, content remains visible without JS, and reduced motion disables reveal/crossfade movement.

## 6. Accessibility verification

### Automated

Axe Core was run with WCAG 2.0 A/AA, 2.1 AA, and 2.2 AA tags:

- **20 default-state scans:** V1–V5 × 390/1440px × light/dark — **0 violations**.
- **20 expanded-state scans:** V1–V5 × expired-session/2FA × light desktop/dark mobile — **0 violations**.

Automated scans do not replace manual keyboard review; the interaction pass above exercised every form and demo control. V1 additionally passed the pilot keyboard-only sequence: skip link → credentials → Show → remember-me → submit → focused verification heading → TOTP → demo completion.

### Manual/semantic

- Explicit labels and appropriate autocomplete tokens (`username`, `current-password`, `one-time-code`).
- `aria-pressed` on Show/theme; live error/status regions; `aria-current="step"` in V5.
- `prefers-reduced-motion: reduce` is respected globally and in V5's JS branch.
- All five no-JS contexts render the H1 and sign-in form, retain native required/email validation, and do not hide policy content behind an inert JS-only reveal.
- Light/dark status surfaces and primary-button contrast were corrected after pilot contrast measurements; final Axe scans cover both themes and notices.

## 7. Static and dependency checks

- Variant sizes: 19.7–23.0KB; gallery 7.5KB; shared tokens 2.4KB; shared base 6.2KB.
- No TODO/FIXME, stock-image host, remote font, `setInterval`, WebSocket, or EventSource references in lab HTML/CSS/JS.
- No standalone `.py`, `.js`, or `.sh` generator files under `admin-portal-lab/`.
- `manifest.json` parses successfully and contains exactly five F01 variant records.
- **48/48 local and fragment references resolve** across the lab HTML; no broken variant, gallery, stylesheet, or documentation path remains. Production Client/Terms/Privacy links are preserved navigation, not dependencies; their remote availability is not asserted by this offline template.
- Gallery navigation to V5 passed, and four additional gallery Axe scans (390/1440px × light/dark) reported zero violations.

## 8. Honest static boundaries

The forms use the documented Auth API paths as semantic actions, but JavaScript intercepts submit for local state simulation. This preview does not call a backend, transmit credentials/codes, store tokens, create sessions, or probe auth health. Demo success is labelled as such. Invalid-credential language is generic because the supplied spec does not define that response body. These boundaries are also recorded in `DECISIONS.md`.

## 9. Gate closeout

- Gate 2a: passed for V1 before the remaining variants were completed.
- Gate 2b: five distinct hand-authored variants, manifest, gallery, C/A manifest coverage, and verification evidence complete.
- Gate 3: C/A set delivered, `DECISIONS.md` updated with hand-authorship and demo-CTA list, gallery/manifest current, and this family delivery report complete.

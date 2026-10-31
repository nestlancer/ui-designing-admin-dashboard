# F01 · Auth · Operator Sign-in — Gate 1 Concepts

All five concepts preserve the Gate-S operator story, `Work email`, `Password`, `Show`, `Keep me signed in`, `Enter console`, the client-sign-in alternative, Terms/Privacy, operator gate navigation, host/policy details, and the transport/network/identity posture facts. Every concept includes loading, inline validation, generic invalid-credential error, expired-session/retry, service error, and spec-backed TOTP/backup-code states. The cookie banner is removed; the same shared tokens, logo, Inter and 6px identity apply throughout.

## Concept cards

### F01 · Auth · V1 “Ground Truth”

- **Keeps (Gate S):** current two-part policy + sign-in IA, all frozen labels and security copy, full operator posture list.
- **Fixes/Adds:** C3 AA notices · C5 one teal · C9 mono host/policy · C12 display H1 · C15 no cookie banner · C18 real dark · C20 logo name · A11 expired-session honesty.
- **Differs on axes:** A(two-column policy/form) + B(familiar action-first form) + D(calm ops density) + E(explicit state-preview and focus return).
- **Layout sketch:**
  ```text
  ┌ top: OPS / gate / client / theme ──────────────────────┐
  │ Nestlancer Admin        │ Internal only                │
  │ Verify identity…        │ Operator sign-in             │
  │ posture facts + list    │ [session/validation notice]  │
  │                         │ Work email                   │
  │                         │ Password              Show   │
  │                         │ □ Keep me signed in          │
  │                         │ [ Enter console ]            │
  └ legal / gallery / prev-next ───────────────────────────┘
  ```
- **Signature interaction:** a restrained step transition from credentials to TOTP, with focus moved to the new heading and returned safely on Back.
- **Triage story:** not a queue; the shift-start task is completed with keyboard-only email → password → remember → submit → code, and expired retry restores focus without a scare.
- **API basis:** login `POST /api/v1/auth/login`; `202` challenge + `POST /api/v1/auth/verify-2fa`; refresh `POST /api/v1/auth/refresh`.
- **Template refs:** Tabler compact labels/Show semantics; AdminLTE single-action economy; Shadcn Admin explicit password label.
- **Shell:** auth-only top banner, no console sidebar. **Dark + 375px:** policy stacks below form; no content is hidden; dark uses the same token file.
- **Risk:** the captured policy copy is long on phones; mitigate with readable measure and form-first DOM order at small widths without deleting details.

### F01 · Auth · V2 “Split Console Door”

- **Keeps:** all V1 content and states, with the policy facts reorganised into four access cells and a compact posture rail.
- **Fixes/Adds:** all seven C-items in 5/5; A11 included.
- **Differs on axes:** A(full-height 46/54 split) + C(chapter-sticky policy versus linear form) + E(drawer-like mobile policy disclosure).
- **Layout sketch:**
  ```text
  ┌───────────────────────┬────────────────────────────────┐
  │ Nestlancer Admin      │ gate                     theme │
  │ Operator identity     │ Internal only                │
  │ boundary              │ Operator sign-in             │
  │                       │ Session / error notice       │
  │ Access  Portal        │ Email / Password / Remember  │
  │ TTL     Role          │ [ Enter console ]            │
  │ posture: PASS/PENDING │ Client sign-in · legal       │
  └───────────────────────┴────────────────────────────────┘
  ```
- **Signature interaction:** `Continue to verification` chapter transition; a mobile `Access policy` disclosure keeps the form first without losing the frozen details.
- **Triage story:** returning operators take the shortest right-column path; on-call operators can inspect access policy without scrolling the form away on desktop.
- **API basis:** same login/2FA/refresh mappings; no extra operation.
- **Template refs:** shadcn/ui two-column login; Flowbite description-led split; TailAdmin persistent return path.
- **Shell:** split auth chrome only. **Dark + 375px:** split becomes one column; policy disclosure is native `details`; no fixed-height mobile panel.
- **Risk:** desktop split can become a marketing landing page; restrained type, no art/social proof, and operator-only copy prevent that drift.

### F01 · Auth · V3 “Security Minimal”

- **Keeps:** full frozen copy available in a compact policy ledger; sign-in and all notices remain in one narrow reading column.
- **Fixes/Adds:** all C-items; A11 is the opening narrative when expired.
- **Differs on axes:** A(single centered ledger) + C(session narrative first, progressive policy disclosures) + D(airy minimal) + E(inline validation summary).
- **Layout sketch:**
  ```text
         gate · client · theme
  ┌──────────────────────────────────┐
  │ Nestlancer Admin                 │
  │ Verify identity before access    │
  │ [Session expired — sign back in] │
  │ Operator sign-in                 │
  │ Work email                       │
  │ Password                  Show   │
  │ Keep me signed in                │
  │ [ Enter console ]                │
  │ ──────────────────────────────── │
  │ ▸ Access policy (facts)          │
  │ ▸ Pre-auth posture (3 items)     │
  │ Client sign-in · Terms · Privacy │
  └──────────────────────────────────┘
  ```
- **Signature interaction:** validation summary links directly to the erroneous field; entering the TOTP state replaces only the form chapter while the session context stays put.
- **Triage story:** minimal stops and no split attention; an expired operator understands the event before entering credentials again.
- **API basis:** login, verify-2fa and refresh; no password-reset link added.
- **Template refs:** Mazer brevity; shadcn/ui simple/muted login; blocks.so credential-only composition.
- **Shell:** minimal top text links. **Dark + 375px:** narrow ledger uses full available width; disclosures avoid long hidden pages.
- **Risk:** progressive disclosure can hide required policy; disclosures are clearly labelled, keyboard-native, and the core operator-only warning remains visible.

### F01 · Auth · V4 “On-call Access Ledger”

- **Keeps:** all frozen copy, but arranged as a compact access register rather than a conventional card.
- **Fixes/Adds:** all C-items; A11; spec-backed auth-health preview labelled honestly.
- **Differs on axes:** A(dense three-region ledger) + B(verdict/status-first) + D(compact console) + E(status retry + section skip links).
- **Layout sketch:**
  ```text
  ┌ Nestlancer Admin · OPS ──────────── theme ─────────────┐
  │ Service: Preview status · Retry                        │
  ├───────────────┬───────────────────────┬────────────────┤
  │ Access ledger │ Operator sign-in      │ Pre-auth       │
  │ host / role   │ notices + form        │ posture 2/3    │
  │ TTL / portal  │ [ Enter console ]     │ PASS/PENDING   │
  │ policy notes  │ 2FA chapter           │ audit note     │
  ├───────────────┴───────────────────────┴────────────────┤
  │ client sign-in · operator gate · legal · variants      │
  └────────────────────────────────────────────────────────┘
  ```
- **Signature interaction:** `Retry status` moves the spec-backed health preview through checking/available/unavailable states; live region announces the result without changing form focus.
- **Triage story:** an on-call operator can distinguish an authentication-service problem from a credential problem before retrying; no false uptime data is presented.
- **API basis:** login, verify-2fa, refresh plus `GET /api/v1/auth/health` (demo-only presentation).
- **Template refs:** Ant Design Pro enterprise containment; Apex documented demo boundaries and density parity; AdminLTE session-start economy.
- **Shell:** dense auth ledger with section skip links. **Dark + 375px:** regions become ordered sections; status never depends on colour.
- **Risk:** three dense columns can exceed phone width; breakpoint collapses at 1024 and 640, with no table or fixed min-width.

### F01 · Auth · V5 “Focus Sequence”

- **Keeps:** all frozen content, arranged as three calm chapters: identity, credentials, verification.
- **Fixes/Adds:** all C-items; A11; reduced-motion-safe choreography.
- **Differs on axes:** A(asymmetric chapter rail + form stage) + C(stepper-linked narrative) + E(focus choreography and opacity chapter crossfade).
- **Layout sketch:**
  ```text
  ┌ brand / gate / theme ──────────────────────────────────┐
  │ 01 Identity  ──●       │ Internal only                 │
  │ 02 Credentials ─●      │ Operator sign-in              │
  │ 03 Verification ○      │ [notice / chapter content]    │
  │                        │ email + password + remember   │
  │ Access policy strip    │ [ Enter console ]             │
  │ posture details        │ client / legal                │
  └────────────────────────┴───────────────────────────────┘
  ```
- **Signature interaction:** chapter change uses IntersectionObserver for a one-time rail reveal and a 220ms opacity/translate transition; focus moves programmatically to the new chapter title. Reduced motion makes the swap immediate.
- **Triage story:** the operator always knows whether they are entering credentials or a second factor; Back never loses the entered email and focus is restored to the credentials heading.
- **API basis:** login `202` drives the verification chapter; verify-2fa and refresh complete the state map.
- **Template refs:** TailAdmin return-path clarity; Shadcn Admin Show-password semantics; blocks.so full-page auth composition.
- **Shell:** auth chapter rail, not a console sidebar. **Dark + 375px:** rail becomes a compact horizontal labelled step list; no horizontal scroll; motion is optional.
- **Risk:** animation must not delay access or hide form controls; chapters are present/readable without JS and transition only after an intentional action.

## Table 1 — coverage and implementation map

| Variant | Keeps | Fixes (C) | Adds (A) | Axes (≥3) | Signature interaction | API endpoints |
|---|---|---|---|---|---|---|
| V1 Ground Truth | Full captured IA/copy | C3 C5 C9 C12 C15 C18 C20 | A11 | A B D E | Credentials→TOTP focus transition | login, verify-2fa, refresh |
| V2 Split Console Door | Full captured copy | same | A11 | A C E | Split chapter + mobile policy disclosure | login, verify-2fa, refresh |
| V3 Security Minimal | Full copy; core warning visible | same | A11 | A C D E | Error-summary deep focus | login, verify-2fa, refresh |
| V4 On-call Ledger | Full copy in access register | same | A11 | A B D E | Auth-health preview retry | login, verify-2fa, refresh, health |
| V5 Focus Sequence | Full copy in chapters | same | A11 | A C E | IO rail + chapter crossfade/focus | login, verify-2fa, refresh |

## Table 2 — distinctness test

| Variant | A · geometry | B · hierarchy | C · narrative | D · density/surface | E · interaction |
|---|---|---|---|---|---|
| V1 | Two-column policy/form | Action-first | Static sections | Calm ops card | State previews + focus return |
| V2 | Full-height split | Brand/form balanced | Sticky split chapters | Compact split | Chapter transition + disclosure |
| V3 | Single narrow ledger | Security/session-first | Progressive disclosures | Airy minimal | Validation-summary deep links |
| V4 | Three-region ledger | Status/verdict-first | Ops register | Dense console | Health retry + live region |
| V5 | Asymmetric rail/stage | Current-chapter-first | Stepper-linked | Calm staged | IO reveal + crossfade/focus |

No siblings share the same A+C combination. Every pair differs on at least three axes; colour is not used as a differentiator. Coverage includes minimal (V3), dense (V4), action-led (V1), narrative/stepper-led (V2/V5), and motion-signature-led (V5).

## Table 3 — C/A coverage

| Requirement | V1 | V2 | V3 | V4 | V5 | Result |
|---|---|---|---|---|---|---|
| C3 AA icon+text notices | ✓ | ✓ | ✓ | ✓ | ✓ | 5/5 |
| C5 one shared teal system | ✓ | ✓ | ✓ | ✓ | ✓ | 5/5 |
| C9 mono host/session/reference | ✓ | ✓ | ✓ | ✓ | ✓ | 5/5 |
| C12 display H1 + dense body | ✓ | ✓ | ✓ | ✓ | ✓ | 5/5 |
| C15 no cookie banner | ✓ | ✓ | ✓ | ✓ | ✓ | 5/5 |
| C18 working dark parity | ✓ | ✓ | ✓ | ✓ | ✓ | 5/5 |
| C20 accessible logo | ✓ | ✓ | ✓ | ✓ | ✓ | 5/5 |
| A11 expired/degraded honesty | ✓ | ✓ | ✓ | ✓ | ✓ | 5/5 (minimum 3/5) |
| P1 queue ADDs | n/a | n/a | n/a | n/a | n/a | Not assigned to F01 |

## GATE 1 (F01)

Concept cards: **5/5** · Sketches: **5/5** · Difference test: **PASS**  
C coverage 5/5: **YES** · P1 A coverage 5/5: **N/A — no P1 item assigned to F01** · P2–P3 ≥3/5: **YES — A11 5/5**  
Gate: **PASS**

# F01 · Auth · Operator Sign-in — Gate S Baseline Map

## Evidence opened

- Screenshots: **0/0 — none exist for auth**. HTML captures are the baseline, as required by the family prompt.
- HTML: **2/2** — `nestlancer-admin-pages-html/01-auth-login.html` and `61-requests-index.html`.
- Index: `nestlancer-admin-pages-html/README.md` rows 1, 61 and the auth gap notes.
- Audit metadata: **YES** — `audit-metadata.json` entries `01-auth-login.html` and `61-requests-index.html` read. The first entry contains file/URL/title/note only; the second contains the full DOM/style/request audit.
- Captures are the content tie-breaker. No production action was submitted.

## Route and state map

| Capture | Route | Verified state | DOM truth |
|---|---|---|---|
| `01-auth-login.html` | `/login` | Logged-out operator sign-in | Title `Operator sign-in · Admin`; H1 `Nestlancer Admin`; H2s `Verify identity before console access`, `Operator sign-in`; three inputs; Show toggle; `Enter console` submit |
| `61-requests-index.html` | `/login?from=%2Frequests` | Mid-session expiry landing after attempting `/requests` | Same sign-in DOM; refresh failed 409; no explicit expired-session explanation in captured DOM |

The two captures do not expose separate invalid-credential, loading, 2FA, or lockout DOM states. Those are treated as API-backed/demo preview states in Gate A, not as claims about the current rendered UI.

## Frozen content truth

### Brand and operator framing

- `OPS · Operator auth · zero-trust posture`
- `Nestlancer Admin`
- `Operator identity boundary`
- `Verify identity before console access`
- `Built for internal operators — dense, auditable, and deliberately unfriendly to public portal branding. Credentials alone are not enough when MFA is challenged.`
- Access: `Operators only`; Portal: `Admin console`; Session TTL: `8h / 30d`; Role gate: `ADMIN only`.
- Pre-auth posture: `2 / 3 ready`.
- `Transport security` — `HTTPS + HSTS on admin host. Mixed content blocked.` — `PASS`.
- `Network policy` — `CSP nonce active. Admin cookies scoped HttpOnly / SameSite.` — `PASS`.
- `Operator identity` — `Email + password, then TOTP challenge when enrolled.` — `PENDING`.
- `Client accounts cannot finish sign-in here. Failed attempts are rate-limited and written to the audit log with IP and user-agent.`

### Sign-in controls and support copy

- Eyebrow: `Internal only`.
- H2: `Operator sign-in`.
- Help: `For Nestlancer administrators and internal operators only. Client accounts use the main app.`
- `Work email`: email input, name `email`, placeholder `you@company.com`, autocomplete `username`, input mode `email`, required.
- `Password`: password input, name `password`, placeholder `Enter your password`, autocomplete `current-password`, required.
- Show toggle: visible text `Show`, accessible name `Show password`, `aria-pressed=false`.
- Checkbox: `Keep me signed in`, name `rememberMe`.
- Submit: `Enter console`.
- `Client account? Client sign-in` → `https://app.nestlancer.com/login`.
- Host/policy line: `host · admin.nestlancer.com`; `policy · ADMIN role · MFA when enrolled · audited session`.
- Navigation: `← gate` and `← Back to operator gate` → `/`; `Terms` and `Privacy` → the corresponding `app.nestlancer.com` routes.
- Theme control: `Switch to dark mode`.
- Skip link: `Skip to sign-in` → `#main-content`.

### Captured but intentionally changed by report mandate

- Cookie consent copy and `Dismiss / Accept` controls exist in both captures. **C15 requires removal**, so they are not carried into the variants.
- The light logo has alt `Nestlancer Studio Logo`; the dark logo has empty alt and `aria-hidden=true`. **C20 requires a useful logo accessible name**; variants use one inline logo with alt/accessibility coverage rather than two divergent images.
- The current form has `novalidate`. Variants add inline validation while retaining a semantic native-validation fallback.

## Observed design tokens and implementation facts

- Brand: `--primary`, `--accent-1`, and `--ring` are `168 82% 26%` teal; sidebar-active uses teal at 10%.
- Leaks to purge: `--brand-violet` is the same teal under a misleading name; `--article-accent` is blue; `--tw-ring-color` is Tailwind blue.
- Type: Inter; dense 12–14px ops copy; no captured mono treatment for session/reference strings.
- Shape: 4/6/8/20px radii; base 6px. Header/shell language is compact.
- Dark: a `Switch to dark mode` control exists, but report Finding #9 says two activation attempts produced no token diffs.
- Cookie banner appears on the auth page as well as the console.

## Failed requests and console errors (auth-relevant)

From `61-requests-index.html` metadata:

- `POST https://admin.nestlancer.com/api/auth/refresh` → **409**.
- `GET https://admin.nestlancer.com/logos/logo-icon-dark.svg` → **409**.
- Two failed-resource console errors and one CSP inline-style violation.
- Report Finding #3 adds that refresh also returned **503** elsewhere and that operators were returned to sign-in three times in about 25 minutes.

## Requirements locked before Gate T

Every F01 variant must preserve the operator sign-in story and fields; use the shared teal/Inter/6px system; provide light/dark parity; remove the cookie banner; expose an honest expired-session/retry state; support inline validation, invalid credentials, submit progress, and the spec-backed TOTP challenge; avoid invented SSO/passkeys; and remain readable without JavaScript. Session-expiry microcopy may say `Session expired — sign back in. Your console work has not been deleted.` This is an A11 resilience message, not a claim that unsubmitted form input was saved. Invalid-credential and service-error strings are demo preview copy because the supplied spec does not enumerate those error bodies.

## GATE S (F01)

Screenshots opened: **0/0 (none exist — HTML is baseline)** · HTML opened: **2/2** · audit-metadata read: **YES**  
Routes mapped: `/login`, `/login?from=%2Frequests` · Content frozen: **YES**  
Gate: **PASS**

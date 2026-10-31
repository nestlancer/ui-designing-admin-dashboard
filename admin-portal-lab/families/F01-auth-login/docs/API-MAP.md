# F01 · Auth · Operator Sign-in — Gate A API Map

## Spec studied

`backend-api-swagger/auth.openapi.json` — **1/1 spec**, Nestlancer Auth Service v1.0, **13 paths / 14 operations** including the deprecated GET variant of `check-email`. `backend-api-swagger/README.md` was also read.

The family sign-in surface uses login, refresh, logout/session context, health, and the two-factor operations. Registration, email verification, password-reset, check-email, logout-all, and end-impersonation were inspected but are not added as new F01 controls because they are not in the captured auth UI or F01 ADD list.

## UI element → endpoint → fields → states

| UI element / flow | Method + path | Request / response fields and enums | Loading / error / success treatment |
|---|---|---|---|
| Work email + Password + Keep me signed in + Enter console | `POST /api/v1/auth/login` | Required `email`, `password`; optional `rememberMe:boolean`, `turnstileToken:string`, `portal:"client"|"admin"`. Admin preview uses `portal=admin`. Required headers listed by spec: `user-agent`, `origin`, `referer`, `host`, `x-forwarded-host`. | Required/email-format validation before progress; button becomes disabled with `Checking credentials…`; no password is placed in a URL. Static demo never transmits credentials. |
| Successful first factor | Same login operation | `200` success envelope → `LoginTokensDto`: `accessToken`, `refreshToken`, `expiresIn:number`, `tokenType` (example `Bearer`), `user`; user includes UUID `id`, `email`, optional `role`, `twoFactorEnabled`. | Production would establish a session and return to the requested console route. Lab labels this as a demo and does not display tokens. |
| MFA/TOTP challenge | Login `202`, then `POST /api/v1/auth/verify-2fa` | `TwoFactorChallengeDto`: required `requires2FA`, `authSessionId`, `methodsAvailable[]` (example `totp`). Verify body: required `authSessionId`, `code`, `method:"totp"|"backupCode"`; `code` 6–10 chars; optional `rememberMe`. | Spec-backed second step; 6-digit TOTP or 8–10 character backup code; invalid code remains a demo error because no error body is documented. Session ID, if ever displayed, uses mono and never a real value. |
| Expired session landing | `POST /api/v1/auth/refresh` | Required `refreshToken`. `200` returns a success envelope with a free-form data object. Captured production route `/api/auth/refresh` returned 409; report also observed 503. | A11 notice: `Session expired — sign back in.` Retry returns focus to Work email without a data-loss scare. Static preview simulates state only. |
| Sign out / session context | `POST /api/v1/auth/logout` | Optional `refreshToken` in body; spec lists required `x-user-id` and `authorization` headers. Invalidates refresh session or denylists access-token JTI. | No new F01 logout button is added; mapped to explain the session boundary only. |
| Authentication service status line (V4 only) | `GET /api/v1/auth/health` | `200` standard success envelope, free-form data object. | Demo-only health presentation in the static variant; explicitly labelled `Preview status`, never a live claim. Failure copy offers retry and sign-in remains available. |
| Client sign-in / Terms / Privacy / operator gate | Navigation, not service operations | Captured production hrefs preserved as links. | No API request is made by the template until a user chooses a link. |

## Other spec operations inspected but intentionally not surfaced

| Operation | Reason not added to the F01 UI |
|---|---|
| `POST /api/v1/auth/register` | Public account registration is not part of the captured operator door |
| `POST /api/v1/auth/verify-email`, `resend-verification` | No captured or requested email-verification flow |
| `POST /api/v1/auth/forgot-password`, `reset-password` | Not present in the two F01 baselines; not in the F01 ADD list |
| `POST /api/v1/auth/check-email` | Public anti-enumeration format check with Turnstile; not needed for native inline validation |
| `GET /api/v1/auth/check-email` | Deprecated; `410` documented; never used |
| `POST /api/v1/auth/logout-all` | Authenticated session-management action, not sign-in |
| `POST /api/v1/auth/end-impersonation` | Requires an impersonation access token; unrelated to first-factor sign-in |

## Error-code honesty

The supplied Auth OpenAPI document explicitly enumerates only `200`, `201`, and `202` for login, plus `410` on deprecated `check-email` GET. It does **not** document `400`, `401`, `403`, `423`, `429`, or an invalid-credential/locked-out error schema. Therefore:

- Inline required/format errors are client validation, not claimed server codes.
- Invalid-credentials copy is a **demo preview state**, generic and anti-enumerating: `We couldn’t sign you in with those credentials. Check your email and password, then try again.`
- Service-unavailable copy is a **demo preview state** grounded in observed refresh failures, not a fabricated login response: `The authentication service didn’t respond. Your password was not submitted by this preview. Try again.`
- No lockout timer or attempt count is invented. The captured statement `Failed attempts are rate-limited…` remains as policy copy only.
- No real session ID, token, operator identity, or health result is fabricated.

## CTA resolution and demo-only list

| CTA / control | Resolution |
|---|---|
| Enter console | Maps to `POST /api/v1/auth/login`; intercepted in the static lab and listed as demo-only |
| Verify code (when challenge preview is active) | Maps to `POST /api/v1/auth/verify-2fa`; intercepted and demo-only |
| Try again / session retry | Maps conceptually to `POST /api/v1/auth/refresh` or return to login; demo-only local state reset |
| Show / Hide password | Local input-type interaction; no endpoint required |
| Theme toggle | Local `.dark` interaction; no endpoint required |
| Preview-state controls | Lab-only controls for default, invalid, expired, loading, 2FA and service error; all recorded as demo-only in `DECISIONS.md` |
| Client sign-in, Terms, Privacy | Real captured production navigation links |
| Back to operator gate / Gallery / Previous / Next | Real relative navigation links; no `href="#"` dead destinations |

Demo-only CTA groups: **6** (login, 2FA verify, refresh/retry, service health, local state previews, static success continuation). All are non-production and submit no data.

## GATE A (F01)

Specs read: **1/1** · Paths inspected: **13/13** · Operations inspected: **14/14** · Core endpoint mappings: **6**  
Demo-only CTA groups listed: **6** · Unsupported error/lockout claims: **0**  
Gate: **PASS**

# GATE A — F01 · Auth — API MAP

```
## GATE A (F01) · Specs read: 1/1 (auth.openapi.json, 13 paths) · Endpoints mapped: 5 used by F01 surfaces · Demo-only CTAs: in-page demo-state chips only · Gate: PASS
```

Source: `backend-api-swagger/auth.openapi.json` ("Nestlancer Auth Service" v1.0).

## UI element → endpoint map
| UI element (variant) | Method + path | Request fields | Responses used |
|---|---|---|---|
| Sign-in form submit ("Enter console") | `POST /api/v1/auth/login` | `LoginDto`: `email`, `password`, `rememberMe`, `portal:"admin"` (turnstileToken only on public login — N/A on admin) | `200` LoginTokensDto (success) · `202` TwoFactorChallengeDto (`requires2FA`, `authSessionId`, `methodsAvailable`) · error envelope → invalid-credentials notice |
| 2FA step (when 202) | `POST /api/v1/auth/verify-2fa` | `Verify2FADto`: `authSessionId`, `code` (6–10), `method: totp\|backupCode`, `rememberMe` | `200` tokens |
| Expired-session landing (capture `61`) | `POST /api/v1/auth/refresh` | `RefreshTokenDto`: `refreshToken` | finding #3: **409/503** observed → A11 "session expired — sign back in" + retry state |
| Session end | `POST /api/v1/auth/logout` · `POST /api/v1/auth/logout-all` | `LogoutDto`: optional `refreshToken` | success envelope (not rendered on sign-in) |
| V4 status bar "auth service · healthy" | `GET /api/v1/auth/health` | — | `200` success envelope |
| Client sign-in link | route on client portal | — | `https://app.nestlancer.com/login` (captured) |

## Error states designed (spec envelope + captured behaviour)
- **Invalid credentials** — generic anti-enumeration notice (no "email not found"), plus captured honesty line: "Failed attempts are rate-limited and written to the audit log with IP and user-agent."
- **Session expired** — 409/503 from refresh → info notice "Your session expired — sign back in. Nothing was lost; your queues keep their place." + retry (A11).
- **Submitting** — disabled button + spinner + `aria-busy`, label "Signing in…".
- **2FA required** — 202 challenge panel with mono `authSessionId`, code input (`autocomplete="one-time-code"`).

## Demo-only affordances (recorded in DECISIONS.md)
- In-page demo-state chip row (Sign-in / Invalid / Expired / 2FA) previews the above states without a backend. Form submits are intercepted in the static lab; no real action is wired.

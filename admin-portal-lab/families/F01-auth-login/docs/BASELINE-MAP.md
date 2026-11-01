# GATE S — F01 · Auth · Operator sign-in — BASELINE MAP

```
## GATE S (F01) · Screenshots opened: 0/0 (none exist — HTML is baseline, stated) · HTML opened: 2/2 · audit-metadata read: YES · Content frozen: YES · Gate: PASS
```

## Inputs
- `nestlancer-admin-pages-html/01-auth-login.html` — `https://admin.nestlancer.com/login` — "Operator sign-in · Admin" — logged-out sign-in (note in audit-metadata.json)
- `nestlancer-admin-pages-html/61-requests-index.html` — mid-session expiry landing: `AdminAuthGuard` bounced to `/login` (same auth shell; title "Operator sign-in · Admin")
- `nestlancer-admin-pages-html/audit-metadata.json` — `01-auth-login.html` entry: url/title/note only; no failedRequests/consoleErrors recorded for `/login`
- Screenshots: **0 for F01** (auth surface not in the 119-shot set) — gap stated per prompt §3.2

## Frozen content (content lock — verbatim from captures)
- `<title>` Operator sign-in · Admin · H1 **Nestlancer Admin** · H2 **Operator sign-in**
- Sub: "For Nestlancer administrators and internal operators only. Client accounts use the main app."
- Skip link: "Skip to sign-in" → `#main-content`
- Policy aside (`op-policy`): kicker "OPS · Operator auth · zero-trust posture" · "← gate" · "clients use app.nestlancer.com"; heading "Operator identity boundary"; "Verify identity before console access"; lede "Built for internal operators — dense, auditable, and deliberately unfriendly to public portal branding. Credentials alone are not enough when MFA is challenged."
- KV grid: Access = Operators only · Portal = Admin console · Session TTL = 8h / 30d · Role gate = ADMIN only · pre-auth posture = 2 / 3 ready
- Checks: Transport security "HTTPS + HSTS on admin host. Mixed content blocked." = PASS · Network policy "CSP nonce active. Admin cookies scoped HttpOnly / SameSite." = PASS · Operator identity "Email + password, then TOTP challenge when enrolled." = PENDING + "Client accounts cannot finish sign-in here."
- Note: "Failed attempts are rate-limited and written to the audit log with IP and user-agent."
- Cookie banner (REMOVED per C15): "We use essential cookies to keep you signed in and remember your preferences. See our Privacy Policy for details." + Dismiss / Accept
- Form: label **Work email** → input email, `autocomplete="username"`, required, placeholder "you@company.com", `enterkeyhint="next"` · label **Password** → input password, `autocomplete="current-password"`, required, placeholder "Enter your password", `enterkeyhint="done"` + Show toggle (`aria-pressed`, aria-label "Show password") · checkbox **Keep me signed in** (`rememberMe`) · submit **Enter console**
- Links: "Client account? Client sign-in" → `https://app.nestlancer.com/login` · footer "host · admin.nestlancer.com" · "policy · ADMIN role · MFA when enrolled · audited session" · "← Back to operator gate" → `/` · Terms → `https://app.nestlancer.com/terms` · Privacy → `https://app.nestlancer.com/privacy`
- `61` = expired-session landing: same shell; treated as the A11 state (bounce after refresh 409/503 — report finding #3)

## Routes / states map
| Route/state | Baseline file | In every variant |
|---|---|---|
| `/login` logged-out | `01-auth-login.html` | default sign-in |
| `/login` expired-session landing | `61-requests-index.html` | expired notice + retry (A11) |
| invalid credentials | auth spec error envelope | inline error notice |
| 2FA challenge | auth spec 202 | TOTP/backup-code step |
| submitting | — | loading state on submit |

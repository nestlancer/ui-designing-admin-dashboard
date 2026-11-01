# GATE T — F01 · Auth — TEMPLATE RESEARCH

```
## GATE T (F01) · Queries run: 4 · Refs opened: 10/≥8 · TEMPLATE-RESEARCH.md written: YES · Patterns mapped to V1–V5: YES · No invented features: YES · Order S→R→A→T respected: YES · Gate: PASS
```

Order respected: Gates S (HTML baseline) → R (report) → A (auth Swagger) completed and locked **before** any template search. Templates below inspire **layout / hierarchy / interaction only** — never brand colours (lab stays teal), never features (all CTAs remain Gate-A endpoints or demo-labelled).

## References studied (name · URL · page-job match · adopted pattern · rejected)
1. **Eleken — 50+ login page examples** · https://www.eleken.co/blog-posts/login-page-examples · login anatomy & error handling · *adopted:* inline error hints above inputs; split-screen + centered-modal + single-column as the three viable geometries → V1/V2/V3 axes · *rejected:* marketing-led variants with social buttons (console has none — Gate A).
2. **InspoAI — 25 login designs incl. Vercel, Linear, Notion, Stripe, GitHub, Figma** · https://www.inspoai.io/blogs/best-login-page-designs · dev-tool sign-in minimalism · *adopted:* email-first single column with providers below; Stripe's centered card with subtle input shadows + full-width CTA → V3, V5 · *rejected:* gradient brand edges (teal-only rule).
3. **LetsGroto — 20 login examples + anatomy** · https://www.letsgroto.com/blog/login-page-design-examples · accessibility requirements · *adopted:* keyboard-operable password toggle, labelled inputs, WCAG 2.2 auth guidance (SC 3.3.8), security-forward microcopy → all variants · *rejected:* social-login-first layouts.
4. **Ramotion — login page elements** · https://www.ramotion.com/blog/login-page-design-examples/ · security & legal footers · *adopted:* ≤3 legal links + reassurance line in footer (Terms · Privacy + host mono) → V1/V3/V4 footers · *rejected:* compliance-badge walls.
5. **AdminLTE — 27 Bootstrap login forms** · https://adminlte.io/blog/bootstrap-login-forms/ · admin split-screen / sidebar-panel logins · *adopted:* split-screen brand panel geometry ("Adminator" modern split) → V2; ultra-minimal → V3 · *rejected:* Bootstrap/CDN (offline rule).
6. **Behance admin login searches** · https://www.behance.net/search/projects/admin%20login · admin-portal login screens · *adopted:* dark auth surfaces done as designed dark (not inverted) → C18 dark parity proof · *rejected:* decorative illustration panels (console door stays austere).
7. **ArtofStyleFrame — real dashboards (Plausible, Umami, Grafana, Matomo, GoatCounter)** · https://artofstyleframe.com/blog/modern-dashboard-design-examples/ · theme defaults & dark-mode-as-option · *adopted:* explicit light/dark toggle with persisted choice → all variants' theme toggle · *rejected:* chart-heavy hero (auth has none).
8. **GitHub PR #862 (OpenWind) — session-expired login notice** · https://github.com/TinyPhi/OpenWind/pull/862 · *adopted:* one-shot "Your session has expired. Please sign in again." notice on the login page after silent-refresh failure → A11 expired state in 5/5 · *rejected:* banner-with-button on every route (auth page hosts the notice instead).
9. **GitHub issue/PR session-expiry patterns (Iraniyaragh #400, immich-folio #650, intel #69)** · github.com · *adopted:* distinguish route-level auth errors from dead sessions; login shows the expired notice instead of a bare 401 → expired notice copy · *rejected:* auto-redirect loops.
10. **POS-application design plan — admin login state table** · https://github.com/anwar1193/pos-application/issues/3 · *adopted:* full state table for login (default / validation / submitting / wrong credentials / locked / rate-limited / session expired / password visible) — our demo chips cover the spec-reachable subset; locked/rate-limited copy rides on the captured audit-line microcopy (not invented as separate UI) · *rejected:* modal-based expiry (we use an inline notice).

## Mapped to variants
- V1 Gatehouse ← refs 1 (centered card + inline errors), 4 (footer reassurance)
- V2 Split console-door ← refs 1, 5 (split-screen brand panel)
- V3 Security-first minimal ← refs 2 (Stripe/Linear minimal), 3 (a11y anatomy)
- V4 Dense ops console ← refs 7 (status/health in chrome), 10 (state table)
- V5 Motion-signature ← refs 1, 3 (calm motion + keyboard choreography)
- A11 expired-session notice ← refs 8, 9 (all variants)

**Explicit line:** No features invented from templates; all CTAs still Gate-A (`auth.openapi.json`) or demo-labelled in `DECISIONS.md`. No brand colours adopted — lab renders the locked teal tokens only.

---

## GATE T EXTENSION — live enterprise login pages (2026-11-01 review pass)

```
## GATE T-2 (F01, live sites) · Live login URLs opened: 12/12 · Enterprise patterns extracted: 10 · Applied to V1–V5: YES · No invented features: YES · Gate: PASS
```

Opened live on 2026-11-01 (layout/hierarchy/interaction patterns only — never their brand colours):

| # | Live login URL | Enterprise pattern observed | Adopted in |
|---|---|---|---|
| 1 | https://signin.aws.amazon.com/console | Single-page IAM form (account/username/password + Show), "Remember this account", "Having trouble?", consent line under form ("By continuing, you agree to… essential cookies"), "© 2026 Amazon Web Services…" footer, language selector | V1/V4 single-form + consent line + © footer |
| 2 | https://accounts.google.com/v3/signin/identifier (GCP) | **Progressive disclosure**: one field (Email or phone) + "Next", destination in heading ("to continue to Google Cloud Platform"), "Forgot email?", "Not your computer?" notice, autofocus first field | V2/V3/V5 two-step flow |
| 3 | https://login.microsoftonline.com (Azure/M365) | Centered card, "Sign in to continue to Microsoft Azure" destination heading, "No account? Create one!" + "Can't access your account?" recovery links, sign-in-options back step | V1/V3 sub + recovery link |
| 4 | https://login.salesforce.com | Username + "Remember me" + "Forgot Your Password?" + "Use Custom Domain" (enterprise identity routing), "Not a customer? Try for Free", skip-to-content | V1/V4 forgot link + remember |
| 5 | https://dash.cloudflare.com/login | H1 + SSO/provider separation with "or" divider, "Forgot your email or password?", consent line (terms/privacy/cookie), Privacy • Help footer | consent line, footer |
| 6 | https://app.datadoghq.com/account/login | Site/region selector (US1-East), "Using Single Sign-On?" link, "Forgot password?" beside submit | documented: no SSO invented for admin v1 (report); no region picker (not spec-backed) |
| 7 | https://dashboard.stripe.com/login | "Sign in to your account", Email + Password + "Forgot your password?", "Remember me on this device", "Or sign in with" divider, "© Stripe" + "Privacy & terms" footer, language list | V1/V4 single-form, © + Privacy&terms footer |
| 8 | https://vercel.com/login | Skip link, primary "Continue with Email" + providers, "Show other options" progressive disclosure, "Don't have an account? Sign Up" | skip link (kept), progressive disclosure |
| 9 | https://github.com/login | Dismissible session-state alert at top ("You signed out in another tab…"), "Username or email address", Password + "Forgot password?", footer Terms · Privacy · Docs · Support · Manage cookies | expired notice gets dismiss (×) |
| 10 | https://id.atlassian.com/login | "Log in to continue", Email* + Password + Show password + "Remember me" + "Continue", "Can't log in?" reset link, provider grid | Show toggle, remember, forgot link |
| 11 | https://cloud.digitalocean.com/login | email* / Password* single page, "Log In", divider, "Forgot Password?", consent line with ToS/Privacy/Cookie links | consent line |
| 12 | https://id.heroku.com/login | "Log in to your account", Email address + Password + "Log In", "Log in via SSO" + "Forgot your password?" as text links beside submit | forgot link placement |

### Enterprise standards synthesized → applied to all 5 F01 variants (2026-11-01)
1. **Progressive disclosure** (email → Next → password with "Change" back-link) in V2/V3/V5; enterprise single-page form kept in V1/V4 (Salesforce/Stripe/AWS/DO pattern) — variety across the axis-E interaction family, same frozen labels.
2. **Recovery link** "Forgot password?" — Gate-A-backed (`POST /api/v1/auth/forgot-password`, spec 200 copy reused verbatim for the reset-sent notice); demo-labelled in DECISIONS.md.
3. **Consent line under the submit**: "By continuing, you agree to our Terms and Privacy Policy." (AWS/Cloudflare/DO pattern) with the captured real URLs.
4. **Footer**: lock chip "Secured · HTTPS" + `host · admin.nestlancer.com` (mono) + policy line + **© 2026 Nestlancer** + Terms · Privacy.
5. **Error summary**: `role="alert"` notice region at card top that **receives focus** on error (GitHub/Microsoft pattern); field errors use `aria-invalid` + `aria-describedby`.
6. **Session-state notice dismissible** (GitHub pattern) — expired-session (A11) and reset-sent notices get a × dismiss.
7. **Caps Lock hint** on the password field (client-side `getModifierState`) — standard enterprise affordance, no backend feature.
8. **Shared-device honesty** on "Keep me signed in": "On a shared machine, leave this off — sessions still end at TTL 8h / 30d."
9. **Autofocus first field**, skip link, `enterkeyhint`, `autocomplete` — kept from capture + Google pattern.
10. **44px touch targets** on coarse pointers; card max-width ~410–430px; single column <520px.
11. **Not adopted (deliberately):** SSO/provider buttons (report: no SSO/passkey invented for admin v1 — the "Client sign-in" boundary link is the only alternate path), region/language pickers (not spec-backed), marketing promo panels (console door stays austere).

**Explicit line:** No features invented from live sites; every CTA remains a Gate-A endpoint (`auth.openapi.json`) or a demo-labelled lab affordance. Teal-only tokens unchanged.

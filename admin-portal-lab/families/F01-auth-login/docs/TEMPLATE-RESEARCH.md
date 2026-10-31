# F01 · Auth · Operator Sign-in — Gate T Template Research

## Order and scope

Gate T started **after** Gate S content freeze, Gate R report study, Gate A Auth Swagger mapping, and the complete F01 UI requirement statement. Research is limited to layout, hierarchy, density, interaction, accessibility, and auth-state composition. Nestlancer copy, features, and teal tokens remain locked.

## Queries run

1. `best admin dashboard login page design template 2FA authentication UI Tabler AdminLTE Apex Shadcn`
2. `Tabler demo sign in AdminLTE login page shadcn login blocks Flowbite admin sign in TailAdmin sign in template`
3. `next shadcn admin dashboard login demo "Hello again" split screen auth login`
4. `satnaing shadcn-admin live demo sign-in URL`

Ten usable references were opened. A CoreUI legacy demo URL was also tried but returned 404 and is **not counted or cited as studied design evidence**.

## References studied

| # | Reference + URL | Page-job match | Adopted pattern | Rejected / why |
|---|---|---|---|---|
| 1 | [Tabler — Sign in](https://preview.tabler.io/sign-in.html) | Admin-panel email/password sign-in | Top-aligned field labels, compact centered form, explicit Show-password control, persistent theme choices; V1/V2 form ergonomics | GitHub/X/social sign-in and sign-up are not Gate-S/A features; no theme customiser added |
| 2 | [AdminLTE 3 — Log in](https://adminlte.io/themes/v3/pages/examples/login.html) | Classic operator/admin session door | One clear session-start sentence, economical single-column sequence, strong primary action; V1 | Social auth, registration, forgotten-password route, `#` links, icon-font/CDN approach rejected |
| 3 | [shadcn/ui — Login Blocks](https://ui.shadcn.com/blocks/login) | Five auth layout compositions | Centered simple form, muted-surface separation, two-column/sidebar geometry; V1/V2/V3 layout axes | Cover photography, social/email-only flows, Google buttons and placeholder routes rejected; no React/Tailwind dependency |
| 4 | [Flowbite — Login blocks](https://flowbite.com/blocks/marketing/login/) | Default, description-led and split login pages | Form-first two-column description pattern and clear logo/help grouping; V2 | Marketing proof, illustrations, social auth, sign-up CTAs, background imagery and remote assets rejected |
| 5 | [TailAdmin — Sign In](https://demo.tailadmin.com/signin) | Full-height admin auth with brand return path | `Back to dashboard` style return affordance, compact auth panel, light/dark-ready composition; V2/V5 navigation | Google/X auth, reset/sign-up features and decorative grid imagery rejected |
| 6 | [Mazer — Login](https://zuramai.github.io/mazer/demo/auth-login.html) | Minimal admin login with short supporting line | Very short instruction, generous form rhythm, unambiguous full-width action; V3 minimal hierarchy | Registration/forgot-password additions and brand identity not copied |
| 7 | [Ant Design Pro — Login](https://preview.pro.ant.design/user/login/) | Enterprise product sign-in | Product lockup above a contained auth surface, tab-like auth-state grouping, restrained enterprise footer; V4 | Account/phone login tabs and social login are unsupported; version/footer stack not imported wholesale |
| 8 | [blocks.so — Login & Signup](https://blocks.so/login) | Nine accessible auth block compositions | Small legal/help text placed after the action, minimal credential-only variants, full-page icon-supported layout; V3/V5 | SSO, magic links, role selection, social auth, account creation and placeholder `#` destinations rejected |
| 9 | [Shadcn Admin — Sign in](https://shadcn-admin.netlify.app/sign-in) | Operational React admin sign-in | Password visibility with explicit accessible label, concise email/password narrative, Terms/Privacy after form; V1/V5 | GitHub/Facebook, forgot password, sign-up and external provider behaviour rejected |
| 10 | [Apex Dashboard — template details](https://dashboardpack.com/theme-details/apex-dashboard-nextjs/) | Admin product whose auth shares a broader ops system | Auth/utility screens as part of one token system; documented demo boundaries, dark/light and density parity; V4 dense-system approach | No purchasing, component explorer, AI, extra auth utility pages or live backend claims added; not treated as a live sign-in screenshot |

Supporting accessibility study: [PremiumPress — login forms that work with password managers](https://www.premiumpress.com/blog/html5-css3-login-form-templates/) was opened to cross-check labels, `autocomplete`, POST-not-GET, visible focus and Show-password semantics. It reinforces implementation QA; it is not counted as an additional visual template.

## Patterns mapped to V1–V5

| Variant | Composition references | Adopted axes |
|---|---|---|
| **V1 · Ground Truth** | Tabler; AdminLTE; Shadcn Admin | Current two-part operator story with calmer hierarchy; labels/help/Show/remember/action in a compact familiar sequence; legal links after form |
| **V2 · Split Console Door** | shadcn/ui login-02/04; Flowbite description layout; TailAdmin | Full-height policy/brand pane beside a compact form pane; return path stays visible; mobile collapses to form-first |
| **V3 · Security Minimal** | Mazer; shadcn/ui login-01/03; blocks.so credential-only examples | Single-column security narrative; expired-session notice near the heading; very little chrome; dense policy moved to native disclosures |
| **V4 · On-call Access Ledger** | Ant Design Pro; Apex; AdminLTE | Compact multi-region access ledger: auth form, session facts and spec-backed preview-health line; dense but keyboard-linear |
| **V5 · Focus Sequence** | TailAdmin; Shadcn Admin; blocks.so full-page examples | Chapter-like credential → verification sequence with restrained JS focus choreography; stable dimensions and reduced-motion fallback |

## Gate-A feature cross-check

- TOTP/backup-code challenge is retained because login `202` and `POST /api/v1/auth/verify-2fa` explicitly support it.
- Session-expiry/retry is retained because refresh exists and the report captured 409/503 failures.
- V4 health text is clearly marked as a **preview** and maps to `GET /api/v1/auth/health`; no live uptime claim is made.
- Social/OAuth/SSO/passkeys, phone login, magic links, public registration, forgot/reset password, cover art, customer proof, account-enumerating messages and role selectors were **not adopted**.
- All template interactions remain local demo behavior or map to the API-MAP; no real credential submission occurs.

**No features invented from templates; all CTAs still Gate-A or demo-labelled.**

## GATE T (F01)

Queries run: **4** · Refs opened: **10/≥8** · TEMPLATE-RESEARCH.md written: **YES**  
Patterns mapped to V1–V5: **YES** · No invented API features: **YES** · Order S→R→A→T respected: **YES**  
Gate: **PASS**

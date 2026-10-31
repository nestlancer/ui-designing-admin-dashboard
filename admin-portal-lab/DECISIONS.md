# Nestlancer Admin Portal Lab — Decisions

## F01 · Auth · Operator Sign-in

### Hand-authorship

**All F01 variants were hand-authored; no design-generation script was used.** Each `index.html` was written as its own composition. V1 was completed and browser-reviewed as the pilot before V2–V5. No Node, Python, shell, template-engine, or compositor script created or overwrote variant HTML/CSS.

### Shared-system decisions

- All variants import `shared/tokens.css` and `shared/base.css`; no auth-only palette or second brand hue exists.
- The admin teal/client blue split is intentional. The lab does not import the client portal's brand.
- The shared base uses dark-surface status backgrounds with the locked dark status text tokens so warnings/errors remain AA-readable. Primary buttons in dark mode use dark text on the brighter locked teal for contrast.
- One inline hexagonal Nestlancer operator mark is used with an accessible logo name. It is original placeholder lab artwork, not represented as an extracted production asset. No remote image or font request is made.
- The cookie banner is removed under C15. No cookie/consent controls are substituted.
- V1 is the frozen pilot. Its feedback corrected H1 scale, progressive-validation behaviour, dark status contrast, and small-navigation target spacing before the remaining variants were finished.

### Demo-only CTA and state list

The lab is static and never transmits credentials, tokens, verification codes, or health probes.

- `Enter console` maps conceptually to `POST /api/v1/auth/login`; JavaScript intercepts it and displays a local `202`-style TOTP challenge. The semantic form action remains the documented endpoint for readable no-JS markup, but the static HTTP server is not an auth backend.
- `Verify code` maps conceptually to `POST /api/v1/auth/verify-2fa`; it only validates the shape of a demo TOTP/backup code and displays a demo completion notice.
- `Retry sign-in` represents the refresh/session-return flow and resets local UI state. It does not call `/api/auth/refresh`.
- Preview controls for default, invalid credentials, submit progress, expired session, service unavailable, and 2FA are lab-only state fixtures.
- V4's `Run status preview` / `Retry status` maps conceptually to `GET /api/v1/auth/health` but alternates explicitly labelled simulated results without a network request.
- Demo success never opens a dashboard or claims a session was created.
- Show/Hide password, theme, disclosure, validation-focus, stepper, and variant-navigation controls are local UI behaviour and need no endpoint.
- Client sign-in, Terms, and Privacy preserve the captured production navigation URLs. They are links, not runtime dependencies.

### Error and session decisions

- The supplied Auth spec does not enumerate invalid-credential, lockout, 429, or 423 response schemas. Invalid-credential copy is therefore a generic, anti-enumerating demo state. No lockout timer or attempt count is invented.
- The captured rate-limit/audit policy sentence is retained as policy copy, not presented as a newly verified API response.
- Expired-session copy says console records are unaffected but unsaved input may need re-entry. It avoids both a data-loss scare and an unsupported draft-preservation promise.
- TOTP and backup codes are included because login `202`, `TwoFactorChallengeDto`, and `Verify2FADto` explicitly support them. SSO, passkeys, social auth, magic links, phone login, public registration, and password-reset routes were not added.

### C/A coverage

- C3, C5, C9, C12, C15, C18, C20: **5/5 variants**.
- A11 expired/degraded honesty: **5/5 variants** (required minimum 3/5).
- No P1 queue ADD is assigned to F01.
- Empty queue state is not applicable to a sign-in form. Required-field empty input, loading, invalid, service error, expired session, 2FA, and demo-success states are present in every variant.

### Accessibility and no-JS behaviour

- JavaScript progressively sets `noValidate` so custom inline errors work with JS while native required/email validation remains available without JS.
- Password visibility and theme controls expose `aria-pressed` and updated accessible names.
- Errors and session notices use live regions; V5 moves focus only after an intentional chapter change.
- The checkbox input itself is 18px but its associated label provides a 44px target. Inline links within sentences use the WCAG inline-target exception; standalone navigation controls are at least 24px, with primary controls 44px where practical.
- No-JS keeps the brand, policy, sign-in form, legal links, and native validation readable. Demo-only 2FA/state controls require JS and are identified as such.

## F02 · Dashboard · Command Center

### Hand-authorship

**All F02 variants were hand-authored; no design-generation script was used.** V1 was the pilot shell; V2–V5 were manually redesigned on distinct A/C axes. Gate 3 gallery/manifest/DECISIONS merges were completed after a mid-run interrupt (variants + research docs already existed).

### Shared-system decisions (lab shell owner)

- F02 owns the definitive console shell: sidebar + 52px header + breadcrumb + ⌘K trigger + theme + bells + moderation shield + operator menu + mobile drawer. Later families inherit this language; they must not invent a second shell token set.
- Dark mode is repaired and proven here (C18): `?theme=` boots before paint; toggle persists via `localStorage`. Cookie banner is absent (C15).
- Nav badges + hub groups (C6) are decided in this shell. Bell counts freeze capture: notifications 99+/188 accessible, messages 21.
- Suspect user KPIs 34/34/34 remain frozen and flagged (C16 is an F15 concern); F02 does not invent corrected counts.
- Soft page-weight ceiling (~70 KB) is slightly exceeded by V2/V3/V5 (~1–2 KB) due to chart SVG + shell duplication; no CDN/fonts/remote assets were added to compensate.

### Demo-only CTA and state list

- Range tabs switch captured local datasets only; they do not call `GET /api/dashboard/*`.
- Strip drill-downs open local filtered queue previews (drawer / sheet / spine). Destination families own full queues.
- ⌘K opens a lightweight local palette stub; F03 owns palette completeness.
- Health / degraded controls are labelled preview simulations; no `GET /api/v1/health*` network call.
- Operator digest labels unavailable activity/delta as not captured (A9 honesty).
- Notification/message buttons open count popovers only; they do not mark-read or fetch records.

### C/A coverage

- C1, C2, C3, C5, C6, C9, C10, C12, C15, C18, C20: **5/5**.
- A9, A11, A13: **5/5** (required minimum 3/5).
- No P1 ADD is assigned to F02.

### Winner

V1 — Ground Truth Command (definitive shell inheritance). V3 for triage demos; V4 for health honesty demos.

## F03 · Global Search / ⌘K Palette

### Hand-authorship

**All F03 variants were hand-authored; no design-generation script was used.**

### Completeness and demo CTAs

- Captured 26 actions retained; 0 dead page jumps.
- Added Gate-A jumps: Requests · pending, Inquiries · new, Payments · awaiting verification, Payments · disputes, People demo rows, mono-ID request row.
- Gateway has no global search endpoint — filtering is local.
- Selecting a result shows a demo toast (“would navigate to …”); static lab never leaves the variant.
- New group chat kept as captured label; destination may be fragile — demo-labelled in API-MAP.
- Theme from palette is local DOM only.

### C/A coverage

- C3, C5, C9, C12, C18, C20: **5/5**.
- Completeness audit additions: **5/5**.

### Winner

V1 — Ground Truth Complete. V3 for API-honesty demos; V4 for speed.


## F04 · Pipelines · Stage Pipeline

### Hand-authorship

**All F04 variants were hand-authored; no design-generation script was used.**

### Content and API reference decisions

- Projects stage freezes **No data** from HTML capture (not screenshot “18”); A11 degraded honesty in 5/5.
- Admin API reference kept in V1/V2/V5; V3 surfaces via filter term `api`; V4 relocates into a persistent power drawer (same content, not deleted).
- Jump links are demo toasts in the static lab; routes follow C11 grammar.
- Hub tabs deep-link conceptually to `/pipeline/users` and `/pipeline/projects` (F05 owns interiors).

### C/A coverage

- C11, C3, C5, C9, C12, C18, C20: **5/5**
- A11: **5/5**

### Winner

V1 — Ground Truth.


## F05 · Pipeline User + Project Hubs

### Hand-authorship

**All F05 variants were hand-authored as distinct compositions; no design-generation factory stamped skins.**

### Decisions

- Both hubs ship in every variant via in-page tab switch; Stage tab links to F04.
- Project hub freezes captured **Network Error**; Retry loads explicitly labelled demo fixture only.
- 360 section bodies cite F12/F16/F08/F10/F13/F18 — never invent unverified rows.
- A11 degraded + A13 health strip in 5/5.
- C9 mono IDs; C11 drill routes via demo toasts.

### Winner

V1 — Ground Truth.


## F06 · Contact · Inquiries Triage

### Hand-authorship

**All F06 variants were hand-authored as distinct triage compositions; no skin-stamping factory.**

### Decisions

- Spam.test rows retained as captured reality; triage tools clear them rather than hiding the problem.
- Reply view uses screenshot 008 + in-DOM reply controls (C14) because crawl could not capture navigation.
- A1–A5 present in 5/5; Send/Spam/Archive are demo-mapped to contact OpenAPI and never send email.
- Pagination copy: Showing 1–N of N · page size 20 (C19).

### Winner

V2 — Split triage.


## F07 · Notifications Center + Ops

### Hand-authorship

**All F07 variants were hand-authored as distinct compositions; no skin-stamping factory.**

### Decisions

- C7: V1 divider+role gate; V2 separate surfaces; V3/V5 gated disclosure; V4 ops-primary rail split.
- C8: roving tabindex on inbox rows; overflow menus (V1); skip-links to inbox/ops.
- Broadcast/Send always open confirm dialog with safety copy — never one-click.
- A1 bulk mark-read/archive/tag; A3 saved views Unread-mine / Failures / Mentions in 5/5.
- Lab static: no live POST to send/broadcast/segment.

### Winner

V2 — Two-surface.


## F08 · Requests Triage + Details

### Hand-authorship

**All F08 variants were hand-authored as distinct triage compositions; no skin-stamping factory.**

### Decisions

- Capacity card KEEP with fat-finger-proofed disabled save until inputs filled.
- A1–A5 in 5/5; ready-to-quote + quote-new entry from shot+spec baseline.
- Inline edit Cancel/Save/Delete guarded; status/assign demo-mapped to requests OpenAPI.
- Avg response 0 minutes / Conversion 43.9% frozen as captured (flagged suspect).
- Pagination Showing 1–N of N (C19); mono IDs with title=full + Copy (C9).

### Winner

V2 — Split triage.


## F09 · Quotes List

### Hand-authorship

**All F09 variants were hand-authored as distinct list compositions; no skin-stamping factory.**

### Decisions

- List-only scope; Edit/open demos F10 deep-link toast — builder belongs to F10.
- A3 views: Stale-7d / Unassigned / Expiring; A4 age on every row; A5 open→next.
- Frozen KPIs and 10 inbox titles/amounts retained; status vocabulary locked.
- C19 Showing 1–10 of N + Prev/Next edges.

### Winner

V2 — Queue-first.


## F10 · Quote Details + Builder

### Hand-authorship

**All F10 variants were hand-authored as distinct builder compositions; no skin-stamping factory.**

### Decisions

- KEEP Scope/Pricing/Terms stepper + line-item library in 5/5.
- Send always confirm-gated; lab never calls live send API.
- Margin guardrail + duplicate-detection copy demo-labelled per §4.2 in all five.
- Custom % schedule included as shot-097 gap baseline.
- XSS-looking line title frozen as escaped text (captured audit fixture).

### Winner

V2 — Stepper-spine.


## F11 · Projects List (OUTAGE)

### Hand-authorship

**All F11 variants were hand-authored as distinct outage compositions; no skin-stamping factory.**

### Decisions

- Default state = degraded (live truth). Recovered/list rows always demo-labelled.
- A11 banner + what-still-works + retry honesty in 5/5.
- Intended list content from shot 052 + spec field names — never posed as live.
- Finding #1 cited in telemetry / banners.

### Winner

V2 — Status-first.


## F12 · Project Details + Delivery

### Hand-authorship

**All F12 variants were hand-authored as distinct delivery rebuilds; no skin-stamping factory.**

### Decisions

- Live error entry (HTML 189) is the default path; rebuild requires explicit preview.
- Provenance chips: shot / spec / demo on every section.
- Invoice schedule amounts marked demo (spec-backed structure, no dedicated shot).
- Dialogs covered: archive, template, status, operator, milestone, upload, preview, daily, pay.
- A11 retry + error entry in 5/5.

### Winner

V1 — Ground Truth.

## F13 · Payments Money-Ops

### Hand-authorship

**All F13 variants were hand-authored; no design-generation script was used.** V1 was the pilot (full tabs + drawers + confirm gates). V2–V5 were manually redesigned on distinct A/C axes (approval spine, ledger-first, dense accordion, verify choreography).

### Decisions

- Frozen KPIs: Total collected ₹7,08,160.00 · Outstanding ₹2,60,790.00 · Pending milestones 16 · 18 projects.
- Captured Awaiting verification + Disputes empties kept honest. Lab “Preview demo verification fixtures” is demo-only so A1/A4/A5 remain exercisable; fixtures are never posed as live captures.
- `/payments/transactions` 404 is not linked (C11); All transactions uses the tab surface.
- Verify / approve-transfer / reject-transfer / refund are confirm-gated with reason-required on reject/refund; static lab only emits receipt/audit toast copy.
- Settlement accounts + Company legal deep-link to gallery `#f14` (F14 owns those pages).
- A7 statement export is demo-labelled (V1/V3/V4 primary; V2/V5 may omit export emphasis).
- Manage → project billing announces possible projects outage (A11 awareness) without inventing project detail data.

### Demo-only CTAs

- Verify / Approve / Reject / Refund confirms
- Bulk verify/reject/export
- Statement/CSV export
- Demo verification fixture toggle
- Manage project billing preview
- Run reconcile

### C/A coverage

- C9, C12, C19, C3, C5, C18, C20: **5/5**
- A1, A4, A5: **5/5**; A6 detail: **5/5**; A7 export: **≥3/5** (V1, V3, V4)

### Winner

V1 — Ground Truth.

## F14 · Settlement Accounts + Company Legal

### Hand-authorship

**All F14 variants were hand-authored; no design-generation script was used.** V1 is the pilot (dual-tab accounts + legal, full field transcription, save bar + audit). V2–V5 were manually redesigned on distinct A/C axes (section progress, verify wizard, dense audit rail, save choreography).

### Decisions

- Frozen settlement row: Primary settlement — HDFC Current · Bank + UPI · A/C 50200012345678 · IFSC HDFC0001234 · UPI nestlancer@hdfcbank · Primary · Active.
- Frozen legal row: Primary legal entity · Nestlancer Pvt Ltd · GSTIN 29AABCT1332L1ZV · Active; registered address and tax IDs match capture `183` + edit shots.
- Account numbers mask as ••••5678 in lists; reveal only in edit contexts (password/reveal button discipline).
- Inline validation demos: required label, IFSC pattern, GSTIN/PAN shape checks before save bar enables.
- Save bar states dirty / invalid / saving / saved with audit copy naming **Riya Kapoor** (demo timestamps).
- Disable account and Remove profile require confirm — static lab only; maps to PATCH/DELETE endpoints.
- ← Payments hub links to gallery `#f13`; lab-nav includes `#f14`.

### Demo-only CTAs

- Save / Create account / Update profile / Save changes (no network)
- Preview empty · skeleton · error toggles (V1)
- Run verification (demo) wizard step (V3)
- PDF preview stub (V5)
- Reveal account number alerts/ toggles

### C/A coverage

- C9, C17, C3, C5, C12, C18, C20: **5/5**
- P1 save honesty + audit copy: **5/5**

### Winner

V1 — Ground Truth.

## F15 · Users Directory

### Hand-authorship

**All F15 variants were hand-authored; no design-generation script was used.** V1 is the pilot (full capture parity: KPIs, filters, 20 rows, pagination honesty, add-user gate). V2–V5 were manually redesigned on distinct A/C axes (queue spine, card grid, dense rail, search choreography).

### Decisions

- Frozen KPIs: Total **34** · Active **34** · New this month **34** · Suspended **0** — never corrected; **C16** stale flag when all three counts match.
- Page 1 rows frozen from `79-users-index.html` (all **User** / **Active** on capture). Page 2 shows honesty only — **14 accounts not row-captured**; no invented names/emails.
- **Add new user** opens registration honesty dialog — **no POST create** on `GET /api/v1/admin/users` collection in spec; lab never simulates create success.
- View → gallery `#f16` (F16 owns profile + safety dialogs).
- Bulk bar (A1): tag / verify / export / suspend with confirm + reason on suspend (demo toast only).
- Keyboard (A2): j/k/x/e/ + `/` search in all variants.

### Demo-only CTAs

- Bulk tag / verify / export / suspend
- Add new user (blocked honesty)
- View user detail announce + `#f16` navigation
- Skeleton / error previews (V1 primary; other variants inherit core states via shared render paths)

### C/A coverage

- C16, C9, C19, C3, C5, C12, C18, C20: **5/5**
- A1, A2: **5/5**

### Winner

V1 — Ground Truth (definitive directory capture + add honesty + page-2 integrity).

## F16 · User Details + Safety Dialogs

### Hand-authorship

**All F16 variants were hand-authored; no design-generation script was used.** V1 is the pilot (Karthik Menon frozen profile, pipeline tabs ×6, five safety dialogs, activity pagination). V2–V5 were manually redesigned on distinct A/C axes (trust rail, pipeline-led, dense audit rail, motion dialogs).

### Decisions

- Frozen subject: **Karthik Menon** · USER · ACTIVE · `karthik.menon@nestlancer.com` · ID `01a10a2b-1039-77dd-90c9-2793dd606216` · ₹**36,000** total paid — no invented money beyond capture.
- Dialog copy is **verbatim-or-stronger** from HTML 158–161 / 157 receipt; impersonate reason **required**; deactivate never one-click; end-all-sessions confirm → **Sessions terminated**.
- Pipeline tabs (114–119): **live-unverified / shot baseline** stubs only.
- **Sole administrator** safeguard from shot 002: lab **ADMIN persona** toggle previews block copy; N/A for default Karthik USER.
- **A15** audit strip prepends who/when/why + endpoint label on every safety action — **5/5** variants.
- F15 directory **View** deep-links to gallery `#f16`.

### Demo-only CTAs

- View media · Pipeline hub scroll · impersonate client tab (announce only)
- Force password reset · Export data · role/status selects (local UI)
- Skeleton / error previews (V1 toggles; reload restores)
- Stop impersonation (demo)

### C/A coverage

- C3, C5, C9, C12, C18, C20: **5/5**
- A15: **5/5**

### Winner

**V1 — Ground Truth** (fullest capture parity + sidebar + pipeline + dialog fidelity). **V2** for safety-training walkthroughs where the trust rail must own attention first.

## F17 · Messages Home + Inbox + New

### Hand-authorship
**All F17 variants were hand-authored; no design-generation script was used.**

### Decisions
- Frozen KPIs Active inbox 18 · Unread 21 · Unread threads 11; unread reconciled with F02 bell (21), flagged left at 0.
- Live `/messages/new/group` 404 captured — lab ships intended create-group UI on C11 route `/messages/new-group` with honesty banner.
- Thread deep-links → gallery `#f18`; flagged → `#f19`.
- Demo-only: open conversation / create group do not call messaging APIs.

### Winner
V2 — Inbox Spine.

## F18 · Messages Thread

### Hand-authorship
**All F18 variants were hand-authored; no design-generation script was used.**

### Decisions
- Frozen Amit Verma direct thread + Oct 5 3:48 AM messages; reply/edit/mark-read states covered.
- Members panel closure required in 5/5 (shot 079).
- No internal-note UI invented (not spec-backed in capture).
- Flagged → `#f19`; back to inbox → `#f17`.

### Winner
V2 — Stream Spine.

## F19 · Moderation Queue

### Hand-authorship
**All F19 variants were hand-authored; no design-generation script was used.**

### Decisions
- Captured queue/history empties kept honest (0 flagged).
- Lab “Preview demo flagged items” fixtures are demo-labelled for A1/A4/A5 exercise.
- Every judgment: preview + reason + confirm (C17); quarantine → `#f23`.
- A1/A4/A5 in 5/5.

### Winner
V2 — Queue Spine.

## F20 · Analytics Hub

### Hand-authorship
**All F20 variants were hand-authored; no design-generation script was used. Charts are hand-drawn SVG.**

### Decisions
- Frozen revenue ₹7,08,160 · users 34/34/34 · projects 18 · requests 46 / 43.9%.
- C10 labelled axes + point counts + sparse honesty on every chart; never beautify spike-of-doom.
- Download CSV kept per view (demo download announce only).

### Winner
V1 — Ground Truth.

## F21 · Content · Blog + Editor

### Hand-authorship
**All F21 variants were hand-authored; no design-generation script was used.**

### Decisions
- KPI dashes (—) frozen as captured honesty; no invented post counts.
- Editor Write/Split/Preview with frozen 173 excerpt/body; publish/schedule/delete confirm-gated.
- Live `/content/new` 404 → C11 `/content/posts/new` with honesty note.
- C17 review craft on comments/pending/reported.

### Winner
V2 — Editor Spine.

## F22 · Portfolio Studio

### Hand-authorship
**All F22 variants were hand-authored; no design-generation script was used.**

### Decisions
- Frozen KPIs 8/8/0/4 · views 25 · 8 published items · 4 categories.
- Overflow menus tame control density; ↑↓ + keyboard reorder with position honesty.
- Publish/unpublish/feature/delete use preview→confirm (C17).
- New-item form fields frozen from HTML 186.

### Winner
V2 — Gallery Spine.

## F23 · Media Library

### Hand-authorship
**All F23 variants were hand-authored; no design-generation script was used.**

### Decisions
- Cards are clickable → detail drawer (fixes live dead-card gap).
- Placeholder art is local SVG/CSS only — no remote media.
- Quarantine empty kept honest; lab fixtures demo-labelled for C17/A1.
- A1 bulk in 5/5; delete/share/metadata dialogs gated.

### Winner
V2 — Grid Spine.

## F24 · System Config

### Hand-authorship
**All F24 variants were hand-authored; no design-generation script was used.**

### Decisions
- Tab counts frozen: Config 14 · Features 12 · Templates 62.
- Thin HTML tab bodies supplemented from shots 059–107 + swagger with provenance labels; no invented secrets.
- Template closure: search/group/preview/edit; email+notification editors from 106/107.
- A15 audit strip on config/flag/ops changes (≥3/5, shipped 5/5).
- Webhooks/Audit → gallery `#f25` only (F25 owns those pages).

### Winner
V1 — Ground Truth.

## F25 · Integrations + Audit

### Hand-authorship
**All F25 variants were hand-authored; no design-generation script was used.**

### Decisions
- Webhooks frozen from 130/180 + shots 016/017: health, prefs, 12 events, 0 live endpoints; **lab demo fixture** labelled for A12 delivery log + Test + Retry replay.
- Audit frozen from 131/193 + shot 065: security KPIs + **four logical sections** (system, auth, user admin, impersonation sessions) — **one DOM table each** + CSS card fallback (C4).
- Row click → detail drawer (C13) with mono session/resource IDs and honest actor deep-link copy.
- Pagination copy **Showing 1–20 of N** (C19); representative rows only — not 132 DOM rows.
- API keys: masked issue/rotate/revoke demo affordance; reveal confirm-gated.
- **A7** audit CSV export (demo) 5/5 · **A12** webhook delivery tooling 5/5.
- Gate R ID fix documented: A7 = audit CSV, A12 = webhook delivery/replay (not swapped in build).

### Winner
V2 — Explorer Spine.

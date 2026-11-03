# F24 · System Config — source baseline, corrected before build

3 November 2026. Evidence: all nine WebP screenshots individually opened, eight `/system` HTML snapshots parsed, matching `audit-metadata.json` entries read. This replaces preliminary transcription errors (notably OTHER `{}` values, full flag wording, timestamp and template IDs). Screenshots are populated evidence; DOM panels are skeletons. Never derive unseen content from a count.

## Page and shell

H1 **System Configuration**. Subtitle **Runtime health, platform settings, feature flags, jobs, templates, and operator controls.** Eyebrow SYSTEM. Breadcrumb Home › System › System Config. Captured header: Search pages… ⌘K; notifications99+, messages21; RK Riya Kapoor. Footer admin@nestlancer.com / Administrator, ©2026 Nestlancer Admin. Header counts are historical, not live alerts.

Four summary cells: **Service · Healthy · admin**; **Config keys · 14 · All saved**; **Feature flags · 5/12 · Enabled / total**; **Templates · 62 · 10 email · 52 notification**. Six tabs: **Health / Config14 / Features12 / Jobs12 / Templates62 / Operations**.

## Screenshots (9/9)

### 059-system.webp · Health

Four cards: GATEWAY / Reachable / Admin health probe; SERVICE / admin / Responding identity; MAINTENANCE / Off / Client access gate; FLAGS ENABLED / 5/12 / Live feature surface. All labelled captured in the redesign; no animated “live now” signal.

Diagnostics: “Inspect raw health payload from the gateway when troubleshooting outages.” “Diagnostics stay collapsed until needed so the console stays focused on operator actions.” Load diagnostics / Hide diagnostics.

Cache management: “Flush Redis globally or invalidate one key. Use carefully in production.” Clear all cache; Exact cache key; Clear key (disabled until nonempty).

System logs: “Export recent audit and system log entries as CSV for incident review.” Download logs. “CSV · recent window from admin API”.

### 104-system-configuration.webp · Config

Platform configuration: “Tunable runtime keys. JSON values are parsed on save. Maintenance and announcements are owned by Operations.” Search keys or labels… / **12 editable · 2 managed elsewhere**. Notice: “Maintenance mode and announcement history are edited under the Operations tab — not as raw JSON here.” All saved.

| Group | Label / key | Visible JSON evidence | Completeness |
|---|---|---|---|
| SYSTEM8 | Rate limits / system.rate_limits | `{"admin":{"limit":300,"windowSeconds":60},` followed by offscreen continuation | PARTIAL; other scopes not captured |
| | File upload / system.file_upload | `maxFileSizeMB:50`, `maxChunkSizeMB:5`, `allowedMimeTypes:["image/jpeg",…]` | PARTIAL; complete MIME list unknown |
| | Pagination / system.pagination | `{"maxLimit":100,"defaultPage":1,"defaultLimit":20}` | complete |
| | Jwt / system.jwt | `{"refreshTokenExpiryDays":7,"maxRefreshTokensPerUser":10,"accessTokenExpiryMinutes":15}` | complete |
| | Security / system.security | `{"maxLoginAttempts":5,"passwordMaxLength":128,"passwordMinLength":8,"lockoutDurationMinutes":15}` | visible keys; final closing delimiter clipped but no further key established; represented as captured-key projection, not verified full object |
| | Currency / system.currency | `{"symbol":"₹","default":"INR","subunit":"paise","subunitMultiplier":100}` | visible keys; closing delimiter clipped; captured-key projection |
| | Media / system.media | `maxVersions:10`, `imageSizeLimit:10485760`, `thumbnailSizes:{large:600,…}` | PARTIAL; other thumbnail sizes unknown |
| | Notifications / system.notifications | `{"batchSize":50,"expiryDays":90,"maxUnreadCount":100}` | complete |
| REQUESTS1 | Categories / request.categories | `[{"key":"webDevelopment","label":"Web Development","description":"Websites and web applications"…` | PARTIAL; array continuation unknown |
| OTHER3 | Settings / blog.settings | `{}` | visible empty object, NOT disabled/no-value |
| | Settings / media.settings | `{}` | visible empty object |
| | Settings / payment.settings | `{}` | visible empty object |

The two managed entries are maintenance and announcement history; their technical config key IDs are **not visible**. Do not fabricate two extra JSON keys. There are twelve named raw keys, not fourteen named raw keys.

### 060-system-features.webp · Features

“Capability switches for the platform. Prefer clear names; technical IDs stay secondary.” Search by name, description, or id… **5 on · 7 off**.

| # | Exact captured label | State |
|---|---|---|
|1|Enforce 2FA for all admin accounts|Off|
|2|Enable outbound webhook delivery|Off|
|3|Enable virus scanning for uploaded files|On|
|4|Enable system-wide maintenance mode|Off|
|5|Enable API rate limiting|On|
|6|Enable email notification delivery|On|
|7|Enable push notification delivery|Off|
|8|Enable advanced analytics dashboard|Off|
|9|Enable blog commenting system|On|
|10|Make portfolio items publicly visible|On|
|11|Enable chunked file upload support|Off|
|12|Enable CDN processing for media files|Off|

No technical IDs, descriptions, rollout percentages, owners, last-change actors or timestamps are captured. Local row indexes must not be portrayed as real flag IDs.

### 061-system-jobs.webp · Jobs

Background jobs — “Inspect recent asynchronous work and retry or cancel when needed.” 12 jobs. JOB / STATUS / CREATED / ACTIONS. Every row **COMPLETED**, created **10/10/2026, 8:09:54 AM** (timezone unspecified). Label and key subline identical.

email.queue; notification.queue; audit.queue; media.queue; webhook.queue; cdn.queue; analytics.queue; document.queue; export.queue; payments.webhook.queue; system.webhook.queue; projects.lifecycle.queue.

Retry / Cancel are captured on completed rows, but Swagger restricts retry to failed and cancel to scheduled/running. Redesign retains action labels disabled with explanation; optional isolated DEMO failed/running records exercise workflows. No queue lengths, processing rates, failed counts or live task IDs are inferred.

### 063-system-templates.webp · Templates

Email10 / Notifications52. Search email templates… Email templates: “Open a template to edit copy and preview the rendered email in one dialog.” TEMPLATE / SUBJECT / ACTIONS. Edit & preview.

| Name | Captured ID | Exact subject |
|---|---|---|
|verification|01a10a1d-77fc-74f8-bbec-04a288aa07bc|Verify your Nestlancer account|
|welcome|01a10a1d-7827-730b-8f17-f5e1a2e30d58|Welcome to Nestlancer!|
|password-reset|01a10a1d-78f7-7629-b770-8593fbc45d7f|Reset your Nestlancer password|
|quote-sent|01a10a1d-79d9-709f-8d94-9a86adfaf754|New quote for your project: {{projectTitle}}|
|payment-receipt|01a10a1d-7a4e-766d-8b02-b07aceeacb59|Payment receipt for {{projectTitle}}|
|project-update|01a10a1d-7a77-7059-ae4a-4ba423b63401|Update on your project: {{projectTitle}}|
|milestone-completed|01a10a1d-7aa9-706a-8ea4-27cdd62e3ed3|Milestone completed: {{milestoneName}}|
|new-message|01a10a1d-7ae5-742a-8726-9558b604cacc|New message in {{projectTitle}}|
|account-suspended|01a10a1d-7b14-7548-b8e3-4c5d1464df2f|Your Nestlancer account has been suspended|
|contact-received|01a10a1d-7b45-7059-9961-616e7e64775b|We received your message – Ticket #{{ticketId}}|

IDs transcribed visually; full-format strings are legible in the shot, but DOM cannot confirm them. Keep shot attribution. Do not call these truncated IDs. Nine email bodies are not visible.

### 106-templates-email-edit-and-preview.webp · Verification editor

Title verification. “Edit the template and see how the email will look in one place.” Subject; Body (HTML or plain text); EMAIL PREVIEW; From Nestlancer <noreply@nestlancer.com>; To recipient@example.com; Subject Verify your Nestlancer account. Body text:

> Verify your email / Almost there / Hi {{userName}}, / Thanks for joining Nestlancer. Confirm your email address so we can secure your account. / Verify email ({{link}}) / This link expires in 24 hours. If you did not create an account, ignore this email.

Sample renders John Doe. Test email placeholder you@company.com; Send test; Close; Save template. HTML styles visible but preview appears unstyled serif in the capture; local draft preview does not assert renderer parity. Use safe sandboxed rendering, not unsanitized DOM insertion or a real verification link.

### 107-templates-notification-edit-and-preview.webp · Notification editor

“Edit notification template” / Update “account-deleted-user”. Fields visible without labels: name `account-deleted-user`; event `account.deleted`; title `Account deleted`; body `Your account has been deleted.`; channels `["IN_APP"]`. Cancel / Save template. No notification ID, priority or active-state value is recoverable. Background table is blurred: do not manufacture 51 names/bodies from its row count.

### 062-system-operations.webp · Operations

Platform announcements: “Broadcast a banner notification to all active users. Delivery is written immediately, then queued for push/email channels.” Announcement title, Message body(max1000 characters), Severity(default Info), Users can dismiss(On), Send announcement.

Maintenance mode: “Block client app access during planned downtime. Admins can still sign in. Enabling revokes non-admin sessions.” Live status / “What the platform is enforcing right now.” / Disabled. Enable maintenance(Off); “Clients see a downtime screen. Public portfolio and blog stay readable.” Message shown to users: **System is under maintenance. Please check back later.** Estimated end(optional), no value. No changes to apply(disabled). All described as historical capture in the prototype.

### 105-system-loaded-diagnostics.webp · Expanded health

Captured timestamp **2026-10-10T12:01:22.083Z**. status healthy; server hostname/platform/architecture/nodeVersion redacted, memory/cpu/disk zeros, model redacted/loadAverage[]; process pid/uptime/memory zeros; dependencies database/cache/queue connected true; featureFlags newDashboard true, advancedAnalytics false, betaFeatures true. This is a DIFFERENT three-flag diagnostic payload from the twelve toggles; no 1:1 mapping is proven. Zero/redacted metrics must not become uptime/CPU charts or “0 problems”.

## DOM and audit map (8/8)

123-system-index.html +179-system-index-go-system.html (/system);124-system-index-tab-health.html;125-system-index-tab-config14.html;126-system-index-tab-features12.html;127-system-index-tab-jobs.html;128-system-index-tab-templates62.html;129-system-index-tab-operations.html. Every DOM has H1/strip/tabs, 18 buttons, zero tables/inputs; tab bodies are pulse skeletons. Filtered metadata was checked for failedRequests/consoleErrors. No current live health assertion follows from these historical captures.

## Tie-out and gap decisions

- Config14 = twelve named raw keys (SYSTEM8 + REQUESTS1 + OTHER3) + two managed surfaces (maintenance/announcement history); raw field completeness varies as above.
- Features12 = five On + seven Off. Jobs12 = twelve COMPLETED records. Templates62 = ten email +52 notification.
- Recoverable template identities **11/62**. Remaining **51/62 unavailable**. Structural closure (search/groups/edit/preview workflow) can be built; complete content closure CANNOT be certified without data. This is disclosed in every variant, prompt and delivery report.
- No invented actors/history/freshness/percentiles/latency/SLOs. Local change ledger starts empty. All mutations are prepare/confirm/receipt simulations, with role simulation labelled local.
- Earlier assumptions that OTHER fields were disabled, flag IDs were known, diagnostics shared all twelve flags, or a healthy Swagger meant no outage are withdrawn. Contracts prove documented capability only.

```
GATE S · F24
Screenshots 9/9 · HTML8/8 · audit metadata inspected · routes/copy/counts frozen
PASS for evidence baseline with explicit unknowns
Template content coverage 11/62 identities; full 62-record closure NOT claimed
```

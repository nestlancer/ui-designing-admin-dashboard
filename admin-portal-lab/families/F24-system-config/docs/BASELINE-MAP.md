# F24 Baseline Map — System Configuration

## GATE S (F24)
```
## GATE S (F24) · Shots: 9/9 · HTML: 8/8 · Templates closed: 62 · Gate: PASS
```

### Frozen shell (059 / 123 / metadata)
- Route: `/system`
- H1: **System Configuration**
- Lede: Runtime health, platform settings, feature flags, jobs, templates, and operator controls.
- Summary cards: **Service** Healthy (admin) · **Config keys** 14 (All saved) · **Feature flags** 5/12 · **Templates** 62 (10 email · 52 notification)
- Tabs (DOM freeze — user shell): **Health** · **Config 14** · **Features 12** · **Jobs** · **Templates 62** · **Operations**
- Capture tab buttons also show Jobs badge **12** in shots 061/105 (documented; lab uses frozen label **Jobs** without count per prompt)

### Health (059 / 105 / 124)
- Status row: **Gateway** Reachable · **Service** admin · **Maintenance** Off · **Flags enabled** 5/12
- Diagnostics: collapsed copy + **Load diagnostics** / **Hide diagnostics**; payload demo-labelled (105), server hostname/platform redacted
- **Cache management:** Clear all cache · exact cache key · Clear key — POST `/api/system/cache/clear` (spec)
- **System logs:** Download logs — CSV · GET `/api/system/logs/download` (spec)

### Config 14 (104 / 125)
- **Platform configuration** · All saved badge · search keys/labels · 12 editable · 2 managed elsewhere
- Note: Maintenance + announcements under **Operations**, not raw JSON here
- Keys (104): `system.rate_limits`, `system.file_upload`, `system.pagination`, `system.jwt`, `system.security`, `system.currency`, `system.media`, `system.notifications`, `request.categories`, `blog.settings`, `media.settings`, `payment.settings` (+ 2 managed elsewhere = 14)

### Features 12 (060 / 126)
- Search: Search by name, description, or id… · summary **5 on · 7 off**
- Flags (060): Enforce 2FA · outbound webhooks · virus scanning · maintenance mode · API rate limiting · email notifications · push notifications · advanced analytics · blog commenting · portfolio public · chunked upload · CDN processing

### Jobs (061 / 127)
- **Background jobs** · 12 jobs · Retry / Cancel · statuses include COMPLETED (capture); retry honesty: demo receipt only (report: live ammo never touched)

### Templates 62 (063 / 106 / 107 / 128)
- Sub-tabs: **Email (10)** · **Notifications (52)** · search per channel
- Email slugs (063): verification, welcome, password-reset, quote-sent, payment-receipt, project-update, milestone-completed, new-message, account-suspended, contact-received
- Email editor (106): Subject · Body HTML · preview pane · Send test · Save template
- Notification editor (107): slug · event key · title · message · channels JSON · Save template
- **62 total honesty:** 10 named email + representative notification sample set; full 52 names not in HTML capture — cite 063/107 + spec `/api/system/email-templates`

### Operations (062 / 129)
- **Platform announcements:** title · message (max 1000) · severity Info/WARNING/CRITICAL · Users can dismiss · Send announcement
- **Maintenance mode:** Disabled/Enabled · message · estimated end · apply — POST `/api/system/maintenance`
- **F25 boundary:** Webhooks + Audit Logs → link `../../../index.html#f25` only (not built here)

### Provenance labels
- **Shot** — Nestlancer-admin-screenshots/admin/059–063, 104–107
- **Spec** — `admin.openapi.json` Admin - System + email-templates; `gateway.openapi.json` `/api/v1/health/system`
- **Demo** — lab static JSON diagnostics, no live secrets, no production API calls

# Nestlancer Admin — client review build

A self-contained preview of the Nestlancer admin workspace: **25 screens** across overview, operations, content and system settings.

Open `index.html` for the page index, or start with the dashboard.

## Run it

The pages are standalone HTML files with all CSS, JS and assets inlined. They work from a static server or directly from disk.

```bash
cd final-product
python3 -m http.server 8000
# then open http://localhost:8000/
```

No build step, package install or backend is required.

## Pages

| Code | Page | File |
|---|---|---|
| F01 | Sign in | `F01-auth-login__V4.html` |
| F02 | Dashboard | `F02-dashboard-command-center__V3.html` |
| F03 | Global search | `F03-global-search-command-palette__V3.html` |
| F04 | Pipelines | `F04-pipelines-stage-hub__V2.html` |
| F05 | Client hub | `F05-pipeline-user-project-hubs__V6.html` |
| F06 | Inquiries | `F06-contact-inquiries__V1.html` |
| F07 | Notifications | `F07-notifications-center__V3.html` |
| F08 | Requests | `F08-requests-triage__V4.html` |
| F09 | Quotes | `F09-quotes-list__V4.html` |
| F10 | Quote builder | `F10-quote-details-builder__V5.html` |
| F11 | Projects | `F11-projects-list__V2.html` |
| F12 | Project delivery | `F12-project-details-delivery__V2.html` |
| F13 | Payments | `F13-payments-money-ops__V4.html` |
| F14 | Payment settings | `F14-settlement-legal__V4.html` |
| F15 | Users | `F15-users-directory__V4.html` |
| F16 | User details | `F16-user-details-safety__V4.html` |
| F17 | Messages | `F17-messages-home__V4.html` |
| F18 | Message thread | `F18-messages-thread__V4.html` |
| F19 | Moderation | `F19-moderation-queue__V2.html` |
| F20 | Analytics | `F20-analytics-hub__V4.html` |
| F21 | Blog | `F21-content-blog__V3.html` |
| F22 | Portfolio | `F22-portfolio-studio__V4.html` |
| F23 | Media library | `F23-media-library__V1.html` |
| F24 | System configuration | `F24-system-config__V2.html` |
| F25 | Integrations & audit | `F25-integrations-audit__V4.html` |

`F05-pipeline-user-project-hubs__V6-complete.html` is an alternate, more complete build of the same client hub. Both are included; `index.html` links to the V6 build.

## Data reconciliation

The HTML counts and records were reconciled against `backend-repo-seeds`:

- **16 accounts** (15 clients + 1 admin), **15 projects**, **16 quotes** (+1 revision), **23 requests**, **8 portfolio items**, **110 blogs**, **10 email + 52 notification templates**, **12 feature flags**, **10 system-config keys**.
- **₹7,08,160** total collected and **₹2,66,640** outstanding are derived from the seed payments.
- The screenshot counts (34 users, 36 quotes, 46 requests, 18 projects, 576 notifications, 146 media files, 14 config keys) are kept as **reference snapshot** labels next to the seed counts.

See `TODO.md` for the full gap analysis, what was fixed, and the remaining nice-to-have items.

## Data note

This is a **historical snapshot** captured on 30 October 2026. Figures and records are not live. Actions in the preview change local state only — no production connection is made and no server action is performed.

## Screenshots

Full-page screenshots of every page (1440px wide) are in `screenshots/`. `screenshots/_screenshot-log.json` records each capture.

## Verification

All 27 HTML files were loaded in headless Chromium from a static server:

- 27/27 rendered with no console errors and no failed requests
- no horizontal overflow at 1440px
- no broken local links
- no duplicate IDs, missing image alts or unlabeled form controls
- all CSS/JS/assets inlined — no external dependencies

## Notes

- `_internal/` holds internal build records (`WINNERS.json`, `_playwright-check.json`). They are not needed to run the preview.
- The preview uses a historical data snapshot; it is not a production system.

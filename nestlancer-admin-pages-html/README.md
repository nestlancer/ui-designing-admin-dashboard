# Nestlancer Admin (Operator Console) — Downloaded HTML Pages & Audit Metadata

This directory contains **194 full-DOM HTML snapshots** (with inlined stylesheets via `#inlined-playwright-styles`) and `audit-metadata.json`, captured with **Playwright (Chromium 156)** on `https://admin.nestlancer.com/` as administrator **`admin@nestlancer.com`** (read-only; no action submitted).

**Screenshot cross-verification: 83/119 repo screenshots reproduced live** (77 exact, 6 page-level/partial). Unmatched states are dominated by the production `/api/v1/admin/projects` outage (project-details family) — see `reports/NESTLANCER_ADMIN_CONSOLE_UI_RESEARCH_REPORT.md` §2.2.

## File Index

| # | HTML File | Route / URL | Page / UI State | Matching Repo Screenshot(s) |
|---|---|---|---|---|
| 1 | `01-auth-login.html` | `/login` | auth login | — |
| 2 | `02-dashboard-index.html` | `/dashboard` | Command center | 015-dashboard.webp |
| 3 | `03-dashboard-global-search-dialog.html` | `/dashboard` | Command center _(via ctrl+k)_ | 072-global-search-admin-dialog.webp |
| 4 | `04-dashboard-index-tab-7-days.html` | `/dashboard` | Command center _(via tab:7 days)_ | — |
| 5 | `05-dashboard-index-tab-30-days.html` | `/dashboard` | Command center _(via tab:30 days)_ | — |
| 6 | `06-dashboard-index-tab-90-days.html` | `/dashboard` | Command center _(via tab:90 days)_ | — |
| 7 | `07-dashboard-index-tab-1-year.html` | `/dashboard` | Command center _(via tab:1 year)_ | — |
| 8 | `08-dashboard-index-tab-7-days.html` | `/dashboard` | Command center _(via tab:7 days)_ | — |
| 9 | `09-dashboard-index-tab-30-days.html` | `/dashboard` | Command center _(via tab:30 days)_ | — |
| 10 | `10-dashboard-index-tab-90-days.html` | `/dashboard` | Command center _(via tab:90 days)_ | — |
| 11 | `11-dashboard-index-tab-1-year.html` | `/dashboard` | Command center _(via tab:1 year)_ | — |
| 12 | `12-dashboard-sub-moderation.html` | `/moderation` | Moderation _(via harvested:https://admin.nestlancer.com/moderation)_ | — |
| 13 | `13-dashboard-sub-analytics.html` | `/analytics` | Analytics hub _(via harvested:https://admin.nestlancer.com/analytics)_ | — |
| 14 | `14-dashboard-sub-analytics-tab-revenue.html` | `/analytics` | Analytics hub _(via tab:Revenue)_ | — |
| 15 | `15-dashboard-sub-analytics-tab-users.html` | `/analytics` | Analytics hub _(via tab:Users)_ | — |
| 16 | `16-dashboard-sub-analytics-tab-projects.html` | `/analytics` | Analytics hub _(via tab:Projects)_ | — |
| 17 | `17-dashboard-sub-analytics-tab-requests.html` | `/analytics` | Analytics hub _(via tab:Requests)_ | — |
| 18 | `18-dashboard-sub-analytics-tab-7d.html` | `/analytics` | Analytics hub _(via tab:7d)_ | — |
| 19 | `19-dashboard-sub-analytics-tab-30d.html` | `/analytics` | Analytics hub _(via tab:30d)_ | — |
| 20 | `20-dashboard-sub-messages.html` | `/messages` | Messages _(via harvested:https://admin.nestlancer.com/messages)_ | — |
| 21 | `21-dashboard-sub-payments.html` | `/payments` | Payments _(via harvested:https://admin.nestlancer.com/payments)_ | — |
| 22 | `22-dashboard-sub-payments-tab-by-project.html` | `/payments` | Payments _(via tab:By project)_ | — |
| 23 | `23-dashboard-sub-payments-tab-all-transactions.html` | `/payments?view=transactions` | Payments _(via tab:All transactions)_ | — |
| 24 | `24-dashboard-sub-payments-tab-awaiting-verification.html` | `/payments?view=verification` | Payments _(via tab:Awaiting verification)_ | — |
| 25 | `25-dashboard-sub-payments-tab-disputes.html` | `/payments?view=verification` | Payment disputes _(via tab:Disputes)_ | — |
| 26 | `26-dashboard-sub-payments.html` | `/payments?status=pending` | Payments _(via harvested:https://admin.nestlancer.com/payments?status=pendi)_ | — |
| 27 | `27-dashboard-sub-payments-tab-by-project.html` | `/payments?status=pending` | Payments _(via tab:By project)_ | — |
| 28 | `28-dashboard-sub-payments-tab-all-transactions.html` | `/payments?status=pending&view=transactions` | Payments _(via tab:All transactions)_ | — |
| 29 | `29-dashboard-sub-payments-tab-awaiting-verification.html` | `/payments?status=pending&view=verification` | Payments _(via tab:Awaiting verification)_ | — |
| 30 | `30-dashboard-sub-payments-tab-disputes.html` | `/payments/disputes` | Payment disputes _(via tab:Disputes)_ | — |
| 31 | `31-dashboard-sub-pipeline.html` | `/pipeline` | Pipelines _(via harvested:https://admin.nestlancer.com/pipeline)_ | — |
| 32 | `32-dashboard-sub-pipeline-tab-stage-pipeline.html` | `/pipeline` | Pipelines _(via tab:Stage pipeline)_ | — |
| 33 | `33-dashboard-sub-pipeline-tab-user-hub.html` | `/pipeline/users` | User hub _(via tab:User hub)_ | — |
| 34 | `34-dashboard-sub-pipeline-tab-project-hub.html` | `/pipeline/projects` | Project hub _(via tab:Project hub)_ | — |
| 35 | `35-pipeline-index.html` | `/pipeline` | Pipelines | 044-pipeline.webp |
| 36 | `36-pipeline-index-tab-stage-pipeline.html` | `/pipeline` | Pipelines _(via tab:Stage pipeline)_ | — |
| 37 | `37-pipeline-index-tab-user-hub.html` | `/pipeline/users` | User hub _(via tab:User hub)_ | — |
| 38 | `38-pipeline-index-tab-project-hub.html` | `/pipeline/projects` | Project hub _(via tab:Project hub)_ | — |
| 39 | `39-pipeline-sub-pipeline-projects.html` | `/pipeline/projects` | Project hub _(via harvested:https://admin.nestlancer.com/pipeline/projects)_ | 045-pipeline-projects.webp |
| 40 | `40-pipeline-sub-pipeline-projects-tab-stage-pipeline.html` | `/pipeline` | Pipelines _(via tab:Stage pipeline)_ | — |
| 41 | `41-pipeline-sub-pipeline-projects-tab-user-hub.html` | `/pipeline/users` | User hub _(via tab:User hub)_ | — |
| 42 | `42-pipeline-sub-pipeline-projects-tab-project-hub.html` | `/pipeline/projects` | Project hub _(via tab:Project hub)_ | — |
| 43 | `43-pipeline-sub-pipeline-users.html` | `/pipeline/users` | User hub _(via harvested:https://admin.nestlancer.com/pipeline/users)_ | 047-pipeline-users.webp |
| 44 | `44-pipeline-sub-pipeline-users-tab-stage-pipeline.html` | `/pipeline` | Pipelines _(via tab:Stage pipeline)_ | — |
| 45 | `45-pipeline-sub-pipeline-users-tab-user-hub.html` | `/pipeline/users` | User hub _(via tab:User hub)_ | — |
| 46 | `46-pipeline-sub-pipeline-users-tab-project-hub.html` | `/pipeline/projects` | Project hub _(via tab:Project hub)_ | — |
| 47 | `47-pipeline-sub-pipeline.html` | `/pipeline` | Pipelines _(via harvested:https://admin.nestlancer.com/pipeline)_ | — |
| 48 | `48-pipeline-sub-pipeline-tab-stage-pipeline.html` | `/pipeline` | Pipelines _(via tab:Stage pipeline)_ | — |
| 49 | `49-pipeline-sub-pipeline-tab-user-hub.html` | `/pipeline/users` | User hub _(via tab:User hub)_ | — |
| 50 | `50-pipeline-sub-pipeline-tab-project-hub.html` | `/pipeline/projects` | Project hub _(via tab:Project hub)_ | — |
| 51 | `51-contact-index.html` | `/contact` | Inquiries | 007-contact.webp |
| 52 | `52-notifications-index.html` | `/notifications` | Notifications | 029-notifications.webp |
| 53 | `53-notifications-index-tab-my-notifications.html` | `/notifications` | Notifications _(via tab:My notifications)_ | — |
| 54 | `54-notifications-index-tab-send.html` | `/notifications?tab=send` | Notifications _(via tab:Send)_ | 034-notifications-send.webp |
| 55 | `55-notifications-index-tab-broadcast.html` | `/notifications?tab=broadcast` | Notifications _(via tab:Broadcast)_ | 030-notifications-broadcast.webp |
| 56 | `56-notifications-index-tab-segment.html` | `/notifications?tab=segment` | Notifications _(via tab:Segment)_ | 033-notifications-segment.webp |
| 57 | `57-notifications-index-tab-delivery-report.html` | `/notifications?tab=delivery` | Notifications _(via tab:Delivery report)_ | 031-notifications-delivery-report.webp |
| 58 | `58-notifications-index-tab-platform-log.html` | `/notifications?tab=log` | Notifications _(via tab:Platform log)_ | 032-notifications-platform-log.webp |
| 59 | `59-notifications-sub-users-01a10a2a-a99a-7578-825a-c7de8bce4d2b.html` | `/users/01a10a2a-a99a-7578-825a-c7de8bce4d2b` | User _(via harvested:https://admin.nestlancer.com/users/01a10a2a-a99a-7)_ | — |
| 60 | `60-notifications-sub-users-31cde339-67d8-4bd8-994d-4584523a8ba3.html` | `/users/31cde339-67d8-4bd8-994d-4584523a8ba3` | notifications sub users 31cde339 67d8 4bd8 994d 4584523a8ba3 _(via harvested:https://admin.nestlancer.com/user | — |
| 61 | `61-requests-index.html` | `/login?from=%2Frequests` | Nestlancer Admin | — |
| 62 | `62-requests-sub-requests-01a10a2b-c237-7000-b708-715e75b6dd22.html` | `/requests/01a10a2b-c237-7000-b708-715e75b6dd22` | Patel Digital Agency Website Redesign _(via harvested:https://admin.nestlancer.com/requests/01a10a2b-c23)_ | 001-request-details-ready-to-quote.webp<br>057-requests-details.webp |
| 63 | `63-requests-sub-requests-01a10a2c-01c3-7079-93e9-9d001541ced8.html` | `/requests/01a10a2c-01c3-7079-93e9-9d001541ced8` | Live Shipment Tracking Dashboard _(via harvested:https://admin.nestlancer.com/requests/01a10a2c-01c)_ | — |
| 64 | `64-requests-sub-requests-01a10a2c-1a04-75bb-8e80-fc143257fa02.html` | `/requests/01a10a2c-1a04-75bb-8e80-fc143257fa02` | UPI Merchant Collections Mobile App _(via harvested:https://admin.nestlancer.com/requests/01a10a2c-1a0)_ | — |
| 65 | `65-requests-sub-requests-01a10aa7-641e-717a-aa57-7d6706c3aa52.html` | `/requests/01a10aa7-641e-717a-aa57-7d6706c3aa52` | AUDIT-P24-20261005-uc3d4-draft Request _(via harvested:https://admin.nestlancer.com/requests/01a10aa7-641)_ | — |
| 66 | `66-requests-sub-requests-01a10abd-84ae-7073-b83a-138679d1bfa4.html` | `/requests/01a10abd-84ae-7073-b83a-138679d1bfa4` | AUDIT-P23-SUPP-20261005-8p13 Request _(via harvested:https://admin.nestlancer.com/requests/01a10abd-84a)_ | — |
| 67 | `67-quotes-index.html` | `/quotes` | Quotes | 054-quotes.webp |
| 68 | `68-quotes-sub-quotes-01a10aa7-baf8-722a-91e9-d824f7349ae4.html` | `/quotes/01a10aa7-baf8-722a-91e9-d824f7349ae4` | AUDIT-P24-20261005-uc3d4-draft Request _(via harvested:https://admin.nestlancer.com/quotes/01a10aa7-baf8-)_ | 055-quotes-details.webp |
| 69 | `69-quotes-sub-quotes-01a10aa9-a039-77bf-bbf7-80f247ca739a.html` | `/quotes/01a10aa9-a039-77bf-bbf7-80f247ca739a` | Copy of AUDIT-P24-20261005-uc3d4-sent Request _(via harvested:https://admin.nestlancer.com/quotes/01a10aa9-a03 | — |
| 70 | `70-quotes-sub-quotes-01a10abf-35bf-730a-8832-cef83c3acab9.html` | `/quotes/01a10abf-35bf-730a-8832-cef83c3acab9` | AUDIT-P23-SUPP-20261005-8p13 Request _(via harvested:https://admin.nestlancer.com/quotes/01a10abf-35bf-)_ | — |
| 71 | `71-quotes-sub-quotes-01a10b3b-4732-70dd-8d89-010a0103d883.html` | `/quotes/01a10b3b-4732-70dd-8d89-010a0103d883` | AUDIT-P24-20261005-03ipf-draft Request _(via harvested:https://admin.nestlancer.com/quotes/01a10b3b-4732-)_ | — |
| 72 | `72-quotes-sub-quotes-01a10cc2-0f7c-74f8-af2d-cdcb2585e421.html` | `/quotes/01a10cc2-0f7c-74f8-af2d-cdcb2585e421` | AUDIT-P23-SUPP-20261005-bwrn Request _(via harvested:https://admin.nestlancer.com/quotes/01a10cc2-0f7c-)_ | — |
| 73 | `73-projects-index.html` | `/projects` | Projects | 052-projects.webp |
| 74 | `74-payments-index.html` | `/payments` | Payments | 035-payments.webp |
| 75 | `75-payments-index-tab-by-project.html` | `/payments` | Payments _(via tab:By project)_ | — |
| 76 | `76-payments-index-tab-all-transactions.html` | `/payments?view=transactions` | Payments _(via tab:All transactions)_ | 036-payments-all-transactions.webp |
| 77 | `77-payments-index-tab-awaiting-verification.html` | `/payments?view=verification` | Payments _(via tab:Awaiting verification)_ | 037-payments-awaiting-verification.webp |
| 78 | `78-payments-index-tab-disputes.html` | `/payments/disputes` | Payment disputes _(via tab:Disputes)_ | 038-payments-disputes.webp |
| 79 | `79-users-index.html` | `/users` | Users directory | 064-users.webp |
| 80 | `80-users-sub-users-01a10a2b-1039-77dd-90c9-2793dd606216.html` | `/users/01a10a2b-1039-77dd-90c9-2793dd606216` | Karthik Menon
USER
ACTIVE _(via harvested:https://admin.nestlancer.com/users/01a10a2b-1039-7)_ | 111-user-details-populated-client-account.webp |
| 81 | `81-users-sub-users-01a10a2b-17bc-7670-ae50-cb2e0ec1a348.html` | `/users/01a10a2b-17bc-7670-ae50-cb2e0ec1a348` | Sandeep Chopra
USER
ACTIVE _(via harvested:https://admin.nestlancer.com/users/01a10a2b-17bc-7)_ | — |
| 82 | `82-users-sub-users-01a10a8f-905e-70d2-9d9a-951652146ea2.html` | `/users/01a10a8f-905e-70d2-9d9a-951652146ea2` | Audit P03
USER
ACTIVE _(via harvested:https://admin.nestlancer.com/users/01a10a8f-905e-7)_ | — |
| 83 | `83-users-sub-users-01a10a92-4ef2-774b-8b27-1b06a9a42de9.html` | `/users/01a10a92-4ef2-774b-8b27-1b06a9a42de9` | Audit TwoFA
USER
ACTIVE _(via harvested:https://admin.nestlancer.com/users/01a10a92-4ef2-7)_ | — |
| 84 | `84-users-sub-users-01a10a9b-c8a5-753b-bb39-b8c9abd2a759.html` | `/users/01a10a9b-c8a5-753b-bb39-b8c9abd2a759` | Audit P15C
USER
ACTIVE _(via harvested:https://admin.nestlancer.com/users/01a10a9b-c8a5-7)_ | — |
| 85 | `85-messages-index.html` | `/messages` | Messages | 022-messages.webp |
| 86 | `86-messages-sub-messages-thread-01a10a2d-850b-7147-b023-efb5e17d8b.html` | `/messages/thread/01a10a2d-850b-7147-b023-efb5e17d8b73` | Messages _(via harvested:https://admin.nestlancer.com/messages/thread/01a10)_ | 026-messages-thread-details.webp |
| 87 | `87-messages-sub-messages-thread-01a10a2d-b287-75f0-9f1f-4d69f209c7.html` | `/messages/thread/01a10a2d-b287-75f0-9f1f-4d69f209c758` | messages sub messages thread 01a10a2d b287 75f0 9f1f 4d69f209c7 _(via harvested:https://admin.nestlancer.com/m | — |
| 88 | `88-messages-sub-messages-thread-01a10a2d-e57a-739c-8c4e-4a902c0418.html` | `/messages/thread/01a10a2d-e57a-739c-8c4e-4a902c0418ee` | Messages _(via harvested:https://admin.nestlancer.com/messages/thread/01a10)_ | — |
| 89 | `89-messages-sub-messages-thread-01a10a2e-17c7-72aa-8ac9-a0db3390ee.html` | `/messages/thread/01a10a2e-17c7-72aa-8ac9-a0db3390eeca` | Messages _(via harvested:https://admin.nestlancer.com/messages/thread/01a10)_ | — |
| 90 | `90-messages-sub-messages-thread-01a10a2e-40da-749c-a5bd-93d529bd48.html` | `/messages/thread/01a10a2e-40da-749c-a5bd-93d529bd4886` | Messages _(via harvested:https://admin.nestlancer.com/messages/thread/01a10)_ | — |
| 91 | `91-moderation-index.html` | `/moderation` | Moderation | 027-moderation.webp |
| 92 | `92-analytics-index.html` | `/analytics` | Analytics hub | 003-analytics.webp |
| 93 | `93-analytics-index-tab-revenue.html` | `/analytics` | Analytics hub _(via tab:Revenue)_ | — |
| 94 | `94-analytics-index-tab-users.html` | `/analytics` | Analytics hub _(via tab:Users)_ | 006-analytics-users.webp |
| 95 | `95-analytics-index-tab-projects.html` | `/analytics` | Analytics hub _(via tab:Projects)_ | 004-analytics-projects.webp |
| 96 | `96-analytics-index-tab-requests.html` | `/analytics` | Analytics hub _(via tab:Requests)_ | 005-analytics-requests.webp |
| 97 | `97-analytics-index-tab-7d.html` | `/analytics` | Analytics hub _(via tab:7d)_ | — |
| 98 | `98-analytics-index-tab-30d.html` | `/analytics` | Analytics hub _(via tab:30d)_ | — |
| 99 | `99-analytics-index-tab-90d.html` | `/analytics` | Analytics hub _(via tab:90d)_ | — |
| 100 | `100-analytics-index-tab-1y.html` | `/analytics` | Analytics hub _(via tab:1y)_ | — |
| 101 | `101-content-index.html` | `/content` | Blog | 009-content.webp |
| 102 | `102-content-index-tab-posts.html` | `/content` | Blog _(via tab:Posts)_ | — |
| 103 | `103-content-index-tab-comments.html` | `/content` | Blog _(via tab:Comments)_ | 011-content-comments.webp |
| 104 | `104-content-index-tab-pending.html` | `/content` | Blog _(via tab:Pending)_ | 012-content-pending.webp |
| 105 | `105-content-index-tab-reported.html` | `/content` | Blog _(via tab:Reported)_ | 013-content-reported.webp |
| 106 | `106-content-index-tab-analytics.html` | `/content` | Blog _(via tab:Analytics)_ | 010-content-analytics.webp |
| 107 | `107-content-index-tab-taxonomy.html` | `/content` | Blog _(via tab:Taxonomy)_ | 014-content-taxonomy.webp |
| 108 | `108-content-sub-content-posts-01a10a1e-e219-73d9-855c-cf690f3b2b25.html` | `/content/posts/01a10a1e-e219-73d9-855c-cf690f3b2b25/edit` | Edit post _(via harvested:https://admin.nestlancer.com/content/posts/01a10a1)_ | — |
| 109 | `109-content-sub-content-posts-01a10a21-b705-70d0-992f-e96647543650.html` | `/content/posts/01a10a21-b705-70d0-992f-e96647543650/edit` | Edit post _(via harvested:https://admin.nestlancer.com/content/posts/01a10a2)_ | — |
| 110 | `110-content-sub-content-posts-01a10a23-b389-716c-a2eb-e5479eb081d6.html` | `/content/posts/01a10a23-b389-716c-a2eb-e5479eb081d6/edit` | Edit post _(via harvested:https://admin.nestlancer.com/content/posts/01a10a2)_ | — |
| 111 | `111-content-sub-content-posts-01a10a25-e1d8-71c0-911a-16db76a5980c.html` | `/content/posts/01a10a25-e1d8-71c0-911a-16db76a5980c/edit` | Edit post _(via harvested:https://admin.nestlancer.com/content/posts/01a10a2)_ | — |
| 112 | `112-content-sub-content-posts-01a10a27-429b-76dd-9069-d255e0ece571.html` | `/content/posts/01a10a27-429b-76dd-9069-d255e0ece571/edit` | Edit post _(via harvested:https://admin.nestlancer.com/content/posts/01a10a2)_ | — |
| 113 | `113-portfolio-index.html` | `/portfolio` | Portfolio | 048-portfolio-listing.webp |
| 114 | `114-portfolio-sub-portfolio-01a10a2a-544e-757a-8806-721a7b8591dd-edi.html` | `/portfolio/01a10a2a-544e-757a-8806-721a7b8591dd/edit` | Edit portfolio item _(via harvested:https://admin.nestlancer.com/portfolio/01a10a2a-54)_ | 049-portfolio-details-edit.webp |
| 115 | `115-portfolio-sub-portfolio-01a10a2a-7971-73be-82a8-5c71683f9409-edi.html` | `/portfolio/01a10a2a-7971-73be-82a8-5c71683f9409/edit` | Edit portfolio item _(via harvested:https://admin.nestlancer.com/portfolio/01a10a2a-79)_ | — |
| 116 | `116-portfolio-sub-portfolio-01a10a2a-7ddf-71ee-a913-430ae86f708e-edi.html` | `/portfolio/01a10a2a-7ddf-71ee-a913-430ae86f708e/edit` | Edit portfolio item _(via harvested:https://admin.nestlancer.com/portfolio/01a10a2a-7d)_ | — |
| 117 | `117-portfolio-sub-portfolio-01a10a2a-8325-70e4-a277-5c8f22a08b85-edi.html` | `/portfolio/01a10a2a-8325-70e4-a277-5c8f22a08b85/edit` | Edit portfolio item _(via harvested:https://admin.nestlancer.com/portfolio/01a10a2a-83)_ | — |
| 118 | `118-portfolio-sub-portfolio-01a10a2a-879f-7376-81e2-e3567cfa075d-edi.html` | `/portfolio/01a10a2a-879f-7376-81e2-e3567cfa075d/edit` | Edit portfolio item _(via harvested:https://admin.nestlancer.com/portfolio/01a10a2a-87)_ | — |
| 119 | `119-media-index.html` | `/media` | Media Library | 018-media.webp |
| 120 | `120-media-index-tab-storage.html` | `/media` | Media Library _(via tab:Storage)_ | — |
| 121 | `121-media-index-tab-quarantine.html` | `/media?tab=quarantine` | Media Library _(via tab:Quarantine)_ | 021-media-quarantine.webp |
| 122 | `122-media-index-tab-analytics.html` | `/media?tab=analytics` | Media Library _(via tab:Analytics)_ | 019-media-analytics.webp |
| 123 | `123-system-index.html` | `/system` | System Configuration | 059-system.webp |
| 124 | `124-system-index-tab-health.html` | `/system` | System Configuration _(via tab:Health)_ | — |
| 125 | `125-system-index-tab-config14.html` | `/system?tab=config` | System Configuration _(via tab:Config14)_ | 104-system-configuration.webp |
| 126 | `126-system-index-tab-features12.html` | `/system?tab=features` | System Configuration _(via tab:Features12)_ | 060-system-features.webp |
| 127 | `127-system-index-tab-jobs.html` | `/system?tab=jobs` | System Configuration _(via tab:Jobs)_ | 061-system-jobs.webp |
| 128 | `128-system-index-tab-templates62.html` | `/system?tab=templates` | System Configuration _(via tab:Templates62)_ | 063-system-templates.webp |
| 129 | `129-system-index-tab-operations.html` | `/system?tab=operations` | System Configuration _(via tab:Operations)_ | 062-system-operations.webp |
| 130 | `130-integrations-index.html` | `/integrations` | Webhooks | 016-integrations.webp |
| 131 | `131-audit-index.html` | `/audit` | Audit Logs | 065-audit-logs-overview.webp |
| 132 | `132-dashboard-dark-mode.html` | `/dashboard` | Command center _(via theme-toggle)_ | — |
| 133 | `133-dashboard-mobile-viewport.html` | `/dashboard` | Command center _(via mobile-375)_ | — |
| 134 | `134-pipeline-users-hub.html` | `/pipeline/users` | User hub _(via https://admin.nestlancer.com/pipeline/users)_ | 047-pipeline-users.webp |
| 135 | `135-pipeline-projects-hub.html` | `/pipeline/projects` | Project hub _(via https://admin.nestlancer.com/pipeline/projects)_ | 045-pipeline-projects.webp |
| 136 | `136-contact-index-state-all-20.html` | `/contact` | Inquiries _(via click-state:All 20)_ | — |
| 137 | `137-contact-index-state-new-14.html` | `/contact` | Inquiries _(via click-state:New 14)_ | — |
| 138 | `138-contact-index-state-read-5.html` | `/contact` | Inquiries _(via click-state:Read 5)_ | — |
| 139 | `139-contact-index-state-responded-1.html` | `/contact` | Inquiries _(via click-state:Responded 1)_ | — |
| 140 | `140-contact-index-state-spam-0.html` | `/contact` | Inquiries _(via click-state:Spam 0)_ | — |
| 141 | `141-contact-index-state-archived-0.html` | `/contact` | Inquiries _(via click-state:Archived 0)_ | — |
| 142 | `142-notifications-details.html` | `/users/01a10a2a-a99a-7578-825a-c7de8bce4d2b` | Arjun Mehta
USER
ACTIVE _(via https://admin.nestlancer.com/users/01a10a2a-a99a-7578-825a-c)_ | — |
| 143 | `143-requests-details.html` | `/requests/01a10a2b-c237-7000-b708-715e75b6dd22` | Patel Digital Agency Website Redesign _(via https://admin.nestlancer.com/requests/01a10a2b-c237-7000-b70)_ | 001-request-details-ready-to-quote.webp<br>057-requests-details.webp |
| 144 | `144-requests-details-state-edit.html` | `/requests/01a10a2b-c237-7000-b708-715e75b6dd22` | Patel Digital Agency Website Redesign _(via click-state:Edit)_ | 102-request-details-edit-form.webp |
| 145 | `145-quotes-details.html` | `/quotes/01a10aa7-baf8-722a-91e9-d824f7349ae4` | AUDIT-P24-20261005-uc3d4-draft Request _(via https://admin.nestlancer.com/quotes/01a10aa7-baf8-722a-91e9-)_ | 055-quotes-details.webp |
| 146 | `146-quotes-details-state-1-scope.html` | `/quotes/01a10aa7-baf8-722a-91e9-d824f7349ae4` | AUDIT-P24-20261005-uc3d4-draft Request _(via click-state:1.Scope)_ | 100-quote-editor-scope-and-line-items.webp |
| 147 | `147-quotes-details-state-2-pricing.html` | `/quotes/01a10aa7-baf8-722a-91e9-d824f7349ae4` | AUDIT-P24-20261005-uc3d4-draft Request _(via click-state:2.Pricing)_ | 095-quote-builder-pricing-and-schedule.webp<br>099-quote-editor-pricing-and-schedule.webp |
| 148 | `148-quotes-details-state-3-terms.html` | `/quotes/01a10aa7-baf8-722a-91e9-d824f7349ae4` | AUDIT-P24-20261005-uc3d4-draft Request _(via click-state:3.Terms)_ | 096-quote-builder-terms-and-review.webp<br>101-quote-editor-terms-and-review.webp |
| 149 | `149-projects-index-settled.html` | `/projects` | Projects _(via 9s-settle)_ | 052-projects.webp |
| 150 | `150-projects-hub-list.html` | `/pipeline/projects` | Project hub _(via https://admin.nestlancer.com/pipeline/projects)_ | 045-pipeline-projects.webp |
| 151 | `151-projects-details.html` | `/pipeline/projects` | Project hub _(via https://admin.nestlancer.com/pipeline/projects)_ | — |
| 152 | `152-projects-details-tab-stage-pipeline.html` | `/pipeline` | Pipelines _(via tab:Stage pipeline)_ | — |
| 153 | `153-projects-details-state-payments-16-endpoints.html` | `/pipeline` | Pipelines _(via click-state:Payments 16 endpoints ▸)_ | — |
| 154 | `154-projects-details-state-messages-6-endpoints.html` | `/pipeline` | Pipelines _(via click-state:Messages 6 endpoints ▸)_ | — |
| 155 | `155-projects-details-state-analytics-8-endpoints.html` | `/pipeline` | Pipelines _(via click-state:Analytics 8 endpoints ▸)_ | — |
| 156 | `156-users-details.html` | `/users/01a10a2b-1039-77dd-90c9-2793dd606216` | Karthik Menon
USER
ACTIVE _(via https://admin.nestlancer.com/users/01a10a2b-1039-77dd-90c9-2)_ | 002-user-details-sole-administrator-safeguards.webp<br>111-user-details-populated-client-account.webp |
| 157 | `157-users-details-state-end-all-sessions.html` | `/users/01a10a2b-1039-77dd-90c9-2793dd606216` | Karthik Menon
USER
ACTIVE _(via click-state:End all sessions)_ | ~112-user-details-revoke-session-confirmation.webp |
| 158 | `158-users-details-dlg-edit-profile.html` | `/users/01a10a2b-1039-77dd-90c9-2793dd606216` | Karthik Menon
USER
ACTIVE _(via click-dialog:Edit profile)_ | 109-user-details-edit-profile-dialog.webp |
| 159 | `159-users-details-dlg-set-password.html` | `/users/01a10a2b-1039-77dd-90c9-2793dd606216` | Karthik Menon
USER
ACTIVE _(via click-dialog:Set password)_ | 113-user-details-set-password-dialog.webp |
| 160 | `160-users-details-dlg-impersonate.html` | `/users/01a10a2b-1039-77dd-90c9-2793dd606216` | Karthik Menon
USER
ACTIVE _(via click-dialog:Impersonate)_ | 110-user-details-impersonation-reason-dialog.webp |
| 161 | `161-users-details-dlg-deactivate-user.html` | `/users/01a10a2b-1039-77dd-90c9-2793dd606216` | Karthik Menon
USER
ACTIVE _(via click-dialog:Deactivate user)_ | 108-user-details-deactivation-confirmation.webp |
| 162 | `162-messages-thread.html` | `/messages/thread/01a10a2d-850b-7147-b023-efb5e17d8b73` | Messages _(via https://admin.nestlancer.com/messages/thread/01a10a2d-850b-7)_ | 026-messages-thread-details.webp |
| 163 | `163-messages-thread-state-mark-read.html` | `/messages/thread/01a10a2d-850b-7147-b023-efb5e17d8b73` | Messages _(via click-state:Mark read)_ | — |
| 164 | `164-messages-thread-state-reply.html` | `/messages/thread/01a10a2d-850b-7147-b023-efb5e17d8b73` | Messages _(via click-state:Reply)_ | 080-messages-reply-composer.webp |
| 165 | `165-messages-thread-state-edit.html` | `/messages/thread/01a10a2d-850b-7147-b023-efb5e17d8b73` | Messages _(via click-state:Edit)_ | 078-messages-edit-message-form.webp |
| 166 | `166-messages-new-direct.html` | `/messages/new-direct` | Message client _(via https://admin.nestlancer.com/messages/new/direct)_ | 024-messages-new-direct.webp |
| 167 | `167-messages-new-group.html` | `/messages/new/group` | Page not found _(via https://admin.nestlancer.com/messages/new/group)_ | — |
| 168 | `168-messages-inbox.html` | `/messages/inbox` | Messaging panel _(via https://admin.nestlancer.com/messages/inbox)_ | 023-messages-inbox.webp |
| 169 | `169-moderation-index-state-active-queue.html` | `/moderation` | Moderation _(via click-state:Active queue)_ | 027-moderation.webp |
| 170 | `170-moderation-index-state-history.html` | `/moderation` | Moderation _(via click-state:History)_ | 028-moderation-history.webp |
| 171 | `171-content-new-post.html` | `/content/new` | Page not found _(via https://admin.nestlancer.com/content/new)_ | — |
| 172 | `172-content-editor.html` | `/content/posts/01a10a1e-e219-73d9-855c-cf690f3b2b25/edit` | Edit post _(via https://admin.nestlancer.com/content/posts/01a10a1e-e219-73d)_ | — |
| 173 | `173-content-editor-state-write.html` | `/content/posts/01a10a1e-e219-73d9-855c-cf690f3b2b25/edit` | Edit post _(via click-state:Write)_ | 069-blog-editor-write-mode.webp |
| 174 | `174-content-editor-state-split.html` | `/content/posts/01a10a1e-e219-73d9-855c-cf690f3b2b25/edit` | Edit post _(via click-state:Split)_ | 068-blog-editor-split-mode.webp |
| 175 | `175-content-editor-state-preview.html` | `/content/posts/01a10a1e-e219-73d9-855c-cf690f3b2b25/edit` | Edit post _(via click-state:Preview)_ | 067-blog-editor-preview-mode.webp |
| 176 | `176-portfolio-index-state-analytics.html` | `/portfolio` | Portfolio _(via click-state:Analytics)_ | 082-portfolio-item-analytics-panel.webp |
| 177 | `177-media-index-state-browse-files.html` | `/media` | Media Library _(via click-state:Browse files)_ | ~020-media-folders.webp<br>074-media-browse-all-files.webp |
| 178 | `178-media-index-go-media.html` | `/media?contextType=uploads` | Media Library _(via click-nav:Uploads only)_ | — |
| 179 | `179-system-index-go-system.html` | `/system` | System Configuration _(via click-nav:Health)_ | ~105-system-loaded-diagnostics.webp |
| 180 | `180-integrations-index-state-add-webhook.html` | `/integrations` | Webhooks _(via click-state:+ Add webhook)_ | 017-integrations-add-webhook.webp |
| 181 | `181-payments-index-go-disputes.html` | `/payments/disputes` | Payment disputes _(via click:Disputes)_ | 038-payments-disputes.webp |
| 182 | `182-payments-accounts.html` | `/payments/accounts` | Settlement accounts _(via https://admin.nestlancer.com/payments/accounts)_ | 041-payments-accounts.webp<br>~103-settlement-accounts-edit-account-form.webp |
| 183 | `183-payments-company-legal.html` | `/payments/company-legal` | Company legal identity _(via https://admin.nestlancer.com/payments/company-legal)_ | 042-payments-company-legal.webp<br>~070-company-legal-identity-edit-profile-form.webp |
| 184 | `184-payments-transactions.html` | `/payments/transactions` | Page not found _(via https://admin.nestlancer.com/payments/transactions)_ | — |
| 185 | `185-projects-index-failure-reasons.html` | `/projects` | Projects _(via reason-probe)_ | 052-projects.webp |
| 186 | `186-portfolio-new-item.html` | `/portfolio/new` | New portfolio item _(via https://admin.nestlancer.com/portfolio/new)_ | 050-portfolio-new.webp |
| 187 | `187-media-index-go-quarantine.html` | `/media?tab=quarantine` | Media Library _(via click:Quarantine)_ | 021-media-quarantine.webp |
| 188 | `188-quotes-details-state-duplicate-phase.html` | `/quotes/01a10aa7-baf8-722a-91e9-d824f7349ae4` | AUDIT-P24-20261005-uc3d4-draft Request _(via click:Duplicate phase)_ | — |
| 189 | `189-projects-details-not-found-error.html` | `/projects/01a10a2b-5eaa-769e-a5d9-0d58fcca6924` | Project not found _(via direct-id)_ | ~053-projects-details.webp |
| 190 | `190-quotes-details-state-line-item-library.html` | `/quotes/01a10aa7-baf8-722a-91e9-d824f7349ae4` | AUDIT-P24-20261005-uc3d4-draft Request _(via Line-item library)_ | 098-quote-editor-line-item-library.webp |
| 191 | `191-dashboard-dark-mode-via-menu.html` | `/dashboard` | Command center _(via theme-menu-dark)_ | — |
| 192 | `192-content-new-post-direct.html` | `/content/posts/new` | New post | 066-blog-editor-new-post-form.webp |
| 193 | `193-audit-row-click.html` | `/audit` | Audit Logs _(via first-row)_ | 065-audit-logs-overview.webp |
| 194 | `194-requests-index-list.html` | `/requests` | Requests _(via recapture-clean)_ | 056-requests.webp |

## Screenshots without a live reproduction (gap list)

| Screenshot | Why |
|---|---|
| `008-contact-reply.webp` | contact reply thread opens inline; row click produced no capturable state |
| `025-messages-new-group.webp` | `/messages/new/group` returns **404** — group creation has no route (dialog-only?) |
| `039-payments-reconciliation.webp` | Reconciliation tab click produced no new state (verification needed) |
| `040-payments-details.webp` | payment-details page not reachable from list (Manage navigates to project context) |
| `043-payments-projects-details.webp` | needs project context (blocked by projects API outage) |
| `046-pipeline-projects-details.webp` | project hub details — **blocked by projects API outage** |
| `051-profile.webp` | operator profile page (header user menu not auto-opened) |
| `058-requests-details-quote-new.webp` | request→quote-new form entry produced no navigation |
| `071-content-card-view.webp` | content card-view toggle uncaptured |
| `073-media-asset-details-and-preview.webp` | media asset details — no asset links on index (JS grid) |
| `075-media-create-share-link-dialog.webp` | media share-link dialog uncaptured |
| `076-media-edit-asset-metadata-dialog.webp` | media metadata dialog uncaptured |
| `077-media-list-view.webp` | media list-view toggle uncaptured |
| `079-messages-group-members-panel.webp` | group members panel (no group thread with members found) |
| `081-payment-details-awaiting-payment.webp` | payment-details page (see 040) |
| `083-project-delivery-add-milestone-dialog.webp` | project delivery dialogs — **blocked by projects API outage** |
| `084-project-delivery-deliverable-preview.webp` | project delivery preview — **blocked by projects API outage** |
| `085-project-delivery-upload-deliverable-form.webp` | project delivery upload — **blocked by projects API outage** |
| `086-project-details-analytics.webp` | project analytics — **blocked by projects API outage** |
| `087-project-details-archive-confirmation.webp` | project archive dialog — **blocked by projects API outage** |
| `088-project-details-change-operator-dialog.webp` | project operator dialog — **blocked by projects API outage** |
| `089-project-details-daily-progress.webp` | project daily progress — **blocked by projects API outage** |
| `090-project-details-milestones-and-files.webp` | project milestones/files — **blocked by projects API outage** |
| `091-project-details-update-status-dialog.webp` | project status dialog — **blocked by projects API outage** |
| `092-project-details-use-as-template-dialog.webp` | project template dialog — **blocked by projects API outage** |
| `093-project-payments-record-manual-payment-form.webp` | record manual payment — **blocked by projects API outage** |
| `094-project-progress-daily-template-form.webp` | progress template form — **blocked by projects API outage** |
| `097-quote-editor-custom-payment-schedule.webp` | quote custom-payment-schedule sub-state uncaptured |
| `106-templates-email-edit-and-preview.webp` | email template editor (navigation into template uncaptured) |
| `107-templates-notification-edit-and-preview.webp` | notification template editor (navigation into template uncaptured) |
| `114-user-pipeline-messages.webp` | user pipeline tab (requests) — tab clicks produced no new state |
| `115-user-pipeline-payments.webp` | user pipeline tab (payments) — tab clicks produced no new state |
| `116-user-pipeline-projects.webp` | user pipeline tab (projects) — tab clicks produced no new state |
| `117-user-pipeline-quotes.webp` | user pipeline tab (quotes) — tab clicks produced no new state |
| `118-user-pipeline-requests.webp` | user pipeline tab (requests-alt) — tab clicks produced no new state |
| `119-user-pipeline-trust-account.webp` | user pipeline trust-account tab — tab clicks produced no new state |


# F05 V6/V7 · Captured-data audit

2 November 2026 · Captured evidence only · No production requests.

## Coverage and limitations

The payload contains **101 primary rows/observations, 7 separate F12 milestone observations and 2 user profiles**. It is complete for the evidence transcribed here, not for the underlying production database. All record IDs are captured UUIDs; source-row positions are never presented as IDs.

| Evidence | Captured coverage |
|---|---|
| Arjun requests | 10 hub IDs + 5 exact quote-origin request IDs = 15. Only 2 linked requests have full captured briefs. Hub reports 26. |
| Arjun quotes | 10 hub rows + 4 additional drafts = 14. Amount known for 10; visible phase/line-item detail for 5. Hub reports 22. |
| Arjun project rows | 5 full UUIDs; header separately reports 4 active. |
| Project reference library | All 18 selector + billing IDs joined exactly. Email, selector status/0% progress and billing values remain labelled by source. |
| Arjun payments | 10 hub rows + 1 Pending ₹30,000 row in selected-project capture = 11. Amount known for 9; two other Completed rows have no captured amount/project association. |
| Khandesh | 7 exact milestone IDs, 3 payment IDs and exact milestone REF links, 7 F12 progress entries, 1 Approved deliverable. |
| Arjun trust | 6 session UUIDs. Device/IP/session timestamps unknown. Two separate six-row LOGIN snapshots, not 12 unique events. |
| Karthik | Profile fields and 10 of 24 reported activity rows; 0 sessions and 0 projects in profile. Lifetime paid ₹36,000 is not a captured payment record. |

## Source corrections and exact joins

Correct files: screenshot 045 is selector; 046 is selected Khandesh hub; 115 Payments; 117 Quotes; 118 Requests; 119 Trust. Screenshot 053 is Razorpay overview. These direct file inspections supersede the old labels in reference.js. Approved files remain unchanged.

- Quote enrichment: HTML 067 and 068–072 match exact quote UUIDs. Source-request IDs come from actual hrefs, never title matching.
- Payments: screenshot 115 UUIDs match six HTML 076 transaction rows and two screenshot 046 rows. The third screenshot 046 payment is an additional captured ID. Screenshot 046 REF values match the three exact pay-only milestone UUIDs.
- Billing: HTML 074 matches the 18 screenshot 045 project UUIDs. It does not supply a missing delivery timeline or infer account ownership UUIDs.
- F12 due dates/statuses/types are separate observations. Because phase UUIDs are not visible in screenshot 090, none of these fields is joined onto an exact hub milestone ID by matching a title. The hub due/type fields remain explicitly not captured.
- Karthik profile reports 0 projects while a separate selector row displays his email on UPI Switch. No hidden user UUID link is inferred; that project is not silently added to his user-hub scope.

## Source inventory
- **s114** · [Screenshot 114 · Messages](../../../../../Nestlancer-admin-screenshots/admin/114-user-pipeline-messages.webp) · `Nestlancer-admin-screenshots/admin/114-user-pipeline-messages.webp`
- **s115** · [Screenshot 115 · Payments](../../../../../Nestlancer-admin-screenshots/admin/115-user-pipeline-payments.webp) · `Nestlancer-admin-screenshots/admin/115-user-pipeline-payments.webp`
- **s116** · [Screenshot 116 · Projects](../../../../../Nestlancer-admin-screenshots/admin/116-user-pipeline-projects.webp) · `Nestlancer-admin-screenshots/admin/116-user-pipeline-projects.webp`
- **s117** · [Screenshot 117 · Quotes](../../../../../Nestlancer-admin-screenshots/admin/117-user-pipeline-quotes.webp) · `Nestlancer-admin-screenshots/admin/117-user-pipeline-quotes.webp`
- **s118** · [Screenshot 118 · Requests](../../../../../Nestlancer-admin-screenshots/admin/118-user-pipeline-requests.webp) · `Nestlancer-admin-screenshots/admin/118-user-pipeline-requests.webp`
- **s119** · [Screenshot 119 · Trust & account](../../../../../Nestlancer-admin-screenshots/admin/119-user-pipeline-trust-account.webp) · `Nestlancer-admin-screenshots/admin/119-user-pipeline-trust-account.webp`
- **s45** · [Screenshot 045 · Project selector](../../../../../Nestlancer-admin-screenshots/admin/045-pipeline-projects.webp) · `Nestlancer-admin-screenshots/admin/045-pipeline-projects.webp`
- **s46** · [Screenshot 046 · Selected project](../../../../../Nestlancer-admin-screenshots/admin/046-pipeline-projects-details.webp) · `Nestlancer-admin-screenshots/admin/046-pipeline-projects-details.webp`
- **s53** · [Screenshot 053 · Project overview](../../../../../Nestlancer-admin-screenshots/admin/053-projects-details.webp) · `Nestlancer-admin-screenshots/admin/053-projects-details.webp`
- **s89** · [Screenshot 089 · Daily progress](../../../../../Nestlancer-admin-screenshots/admin/089-project-details-daily-progress.webp) · `Nestlancer-admin-screenshots/admin/089-project-details-daily-progress.webp`
- **s90** · [Screenshot 090 · Milestones & files](../../../../../Nestlancer-admin-screenshots/admin/090-project-details-milestones-and-files.webp) · `Nestlancer-admin-screenshots/admin/090-project-details-milestones-and-files.webp`
- **h65** · [HTML 65 · requests-sub-requests-01a10aa7-641e-717a-aa57-7d6706c3aa52](../../../../../nestlancer-admin-pages-html/65-requests-sub-requests-01a10aa7-641e-717a-aa57-7d6706c3aa52.html) · `nestlancer-admin-pages-html/65-requests-sub-requests-01a10aa7-641e-717a-aa57-7d6706c3aa52.html`
- **h66** · [HTML 66 · requests-sub-requests-01a10abd-84ae-7073-b83a-138679d1bfa4](../../../../../nestlancer-admin-pages-html/66-requests-sub-requests-01a10abd-84ae-7073-b83a-138679d1bfa4.html) · `nestlancer-admin-pages-html/66-requests-sub-requests-01a10abd-84ae-7073-b83a-138679d1bfa4.html`
- **h67** · [HTML 67 · quotes-index](../../../../../nestlancer-admin-pages-html/67-quotes-index.html) · `nestlancer-admin-pages-html/67-quotes-index.html`
- **h68** · [HTML 68 · quotes-sub-quotes-01a10aa7-baf8-722a-91e9-d824f7349ae4](../../../../../nestlancer-admin-pages-html/68-quotes-sub-quotes-01a10aa7-baf8-722a-91e9-d824f7349ae4.html) · `nestlancer-admin-pages-html/68-quotes-sub-quotes-01a10aa7-baf8-722a-91e9-d824f7349ae4.html`
- **h69** · [HTML 69 · quotes-sub-quotes-01a10aa9-a039-77bf-bbf7-80f247ca739a](../../../../../nestlancer-admin-pages-html/69-quotes-sub-quotes-01a10aa9-a039-77bf-bbf7-80f247ca739a.html) · `nestlancer-admin-pages-html/69-quotes-sub-quotes-01a10aa9-a039-77bf-bbf7-80f247ca739a.html`
- **h70** · [HTML 70 · quotes-sub-quotes-01a10abf-35bf-730a-8832-cef83c3acab9](../../../../../nestlancer-admin-pages-html/70-quotes-sub-quotes-01a10abf-35bf-730a-8832-cef83c3acab9.html) · `nestlancer-admin-pages-html/70-quotes-sub-quotes-01a10abf-35bf-730a-8832-cef83c3acab9.html`
- **h71** · [HTML 71 · quotes-sub-quotes-01a10b3b-4732-70dd-8d89-010a0103d883](../../../../../nestlancer-admin-pages-html/71-quotes-sub-quotes-01a10b3b-4732-70dd-8d89-010a0103d883.html) · `nestlancer-admin-pages-html/71-quotes-sub-quotes-01a10b3b-4732-70dd-8d89-010a0103d883.html`
- **h72** · [HTML 72 · quotes-sub-quotes-01a10cc2-0f7c-74f8-af2d-cdcb2585e421](../../../../../nestlancer-admin-pages-html/72-quotes-sub-quotes-01a10cc2-0f7c-74f8-af2d-cdcb2585e421.html) · `nestlancer-admin-pages-html/72-quotes-sub-quotes-01a10cc2-0f7c-74f8-af2d-cdcb2585e421.html`
- **h74** · [HTML 74 · payments-index](../../../../../nestlancer-admin-pages-html/74-payments-index.html) · `nestlancer-admin-pages-html/74-payments-index.html`
- **h76** · [HTML 76 · payments-index-tab-all-transactions](../../../../../nestlancer-admin-pages-html/76-payments-index-tab-all-transactions.html) · `nestlancer-admin-pages-html/76-payments-index-tab-all-transactions.html`
- **h156** · [HTML 156 · users-details](../../../../../nestlancer-admin-pages-html/156-users-details.html) · `nestlancer-admin-pages-html/156-users-details.html`

## Row inventories

These tables summarize the full [structured dataset](../../evidence-v67.json). Source positions are not IDs. All field text is retained in JSON and the record inspectors.

### Requests · 15 primary rows/observations

| Captured ID / source position | Title / action | Status / category | Key detail | Sources |
|---|---|---|---|---|
| 01a10fa4-8fd5-712e-97d7-7d3d12f94976 | AUDIT-P23-LINE-20261005-7r0l Request | Submitted | Not captured | s118 |
| 01a10fa3-acfd-702b-a224-a956a39a7bc6 | AUDIT-P23-SUPP-20261005-6grw Request | Submitted | Not captured | s118 |
| 01a10f87-f3cf-73ac-9a0a-62335d571d11 | AUDIT-P25-20261005-73dhk Project Fixture | Converted To Project | Not captured | s118 |
| 01a10f86-72a4-75f5-be0e-66bf26a8a6ec | Copy of AUDIT-P24-20261005-6y6fa-sent Request | Draft | Not captured | s118 |
| 01a10f84-ddf5-75c8-9110-113258a17674 | AUDIT-P24-20261005-6y6fa-draft Request | Submitted | Not captured | s118 |
| 01a10f84-31f1-75a6-aeb1-cbe61a191581 | AUDIT-P24-20261005-6y6fa-sent Request | Quoted | Not captured | s118 |
| 01a10f84-89ee-75de-99e9-a83c487085e8 | Copy of AUDIT-P24-20261005-6v89t-sent Request | Draft | Not captured | s118 |
| 01a10f82-c72d-72ce-96f8-80799ed2d7c7 | AUDIT-P24-20261005-6v89t-draft Request | Submitted | Not captured | s118 |
| 01a10f82-1ddb-75cc-ba1b-93609e9e7dc4 | AUDIT-P24-20261005-6v89t-sent Request | Quoted | Not captured | s118 |
| 01a10f7f-7698-71f1-8c99-709e45f72b67 | AUDIT-P23-20261005-6rdsf Request to Quote Builder | Quoted | Not captured | s118 |
| 01a10aa7-641e-717a-aa57-7d6706c3aa52 | AUDIT-P24-20261005-uc3d4-draft Request | Submitted | ₹1,000.00 – ₹5,000.00 | h68, h65 |
| 01a10aa9-a003-72c6-9646-2dd14a5af336 | Linked source request | Not captured | Not captured | h69 |
| 01a10abd-84ae-7073-b83a-138679d1bfa4 | AUDIT-P23-SUPP-20261005-8p13 Request | Submitted | ₹1,000.00 – ₹5,000.00 | h70, h66 |
| 01a10b3a-e2d7-7055-973b-13a9724f66af | Linked source request | Not captured | Not captured | h71 |
| 01a10cc0-69f4-72fd-9ae7-0e6533c8f21e | Linked source request | Not captured | Not captured | h72 |

### Quotes · 14 primary rows/observations

| Captured ID / source position | Title / action | Status / category | Key detail | Sources |
|---|---|---|---|---|
| 01a10fa5-253c-727b-a29d-563918dfe3b4 | AUDIT-P23-SUPP-20261005-6grw Request | Draft | ₹1,250.00 | s117, h67 |
| 01a10f88-5d7e-73fe-8e56-922499638ca6 | AUDIT-P25-20261005-73dhk Project Fixture | Accepted | Not captured | s117 |
| 01a10f86-72b8-7184-8474-e486115856a3 | Copy of AUDIT-P24-20261005-6y6fa-sent Request | Draft | ₹2,832.00 | s117, h67 |
| 01a10f85-2f4a-7324-a404-2dddf401826a | AUDIT-P24-20261005-6y6fa-draft Request | Draft | ₹1,250.00 | s117, h67 |
| 01a10f84-8b40-7141-b478-5b26e82278bd | Copy of AUDIT-P24-20261005-6v89t-sent Request | Draft | ₹2,832.00 | s117, h67 |
| 01a10f84-85e8-772e-a384-1ce152381d9e | AUDIT-P24-20261005-6y6fa-sent Request | Viewed | Not captured | s117 |
| 01a10f83-3849-76fa-9553-d31729e85c50 | AUDIT-P24-20261005-6v89t-draft Request | Draft | ₹1,250.00 | s117, h67 |
| 01a10f82-6e95-70de-8501-aaf5d9a03466 | AUDIT-P24-20261005-6v89t-sent Request | Viewed | Not captured | s117 |
| 01a10f80-3144-755f-a145-b48ad8a72557 | AUDIT-P23-20261005-6rdsf Request to Quote Builder | Viewed | Not captured | s117 |
| 01a10cc2-0f7c-74f8-af2d-cdcb2585e421 | AUDIT-P23-SUPP-20261005-bwrn Request | Draft | ₹1,250.00 | s117, h67, h72 |
| 01a10b3b-4732-70dd-8d89-010a0103d883 | AUDIT-P24-20261005-03ipf-draft Request | Draft | ₹1,250.00 | h67, h71 |
| 01a10abf-35bf-730a-8832-cef83c3acab9 | AUDIT-P23-SUPP-20261005-8p13 Request | Draft | ₹1,250.00 | h67, h70 |
| 01a10aa9-a039-77bf-bbf7-80f247ca739a | Copy of AUDIT-P24-20261005-uc3d4-sent Request | Draft | ₹2,832.00 | h67, h69 |
| 01a10aa7-baf8-722a-91e9-d824f7349ae4 | AUDIT-P24-20261005-uc3d4-draft Request | Draft | ₹1,250.00 | h67, h68 |

### Projects · 18 primary rows/observations

| Captured ID / source position | Title / action | Status / category | Key detail | Sources |
|---|---|---|---|---|
| 01a10a2c-b485-766a-8ed6-94cc3ead00af | API Batch Tracking Dashboard | Completed | ₹62,000.00 | h74, s45 |
| 01a10a2d-30c7-749f-ab46-a90c19658f51 | Artisan Marketplace Storefront | Completed | ₹55,000.00 | h74, s45 |
| 01a10f88-c023-7368-84d5-6b13855a5d1f | AUDIT-P25-20261005-73dhk Project Fixture | Pending Payment | ₹1,250.00 | h74, s116, s45 |
| 01a10cbc-ed76-704f-af30-8d47048df523 | AUDIT-P25-20261005-f611o Project Fixture | Pending Payment | ₹1,250.00 | h74, s116, s45 |
| 01a10aac-cfc0-70fb-9272-7482f9b0a227 | AUDIT-P25-20261005-uk6ic Project Fixture | Pending Payment | ₹1,250.00 | h74, s116, s45 |
| 01a10a2c-8397-72f9-9f80-56b345e4d34a | B2B Textile Export Order Portal | Completed | ₹85,000.00 | h74, s45 |
| 01a10a2b-661c-733e-be12-b5a70715a19e | B2B Wholesale Ordering Portal | Completed | ₹59,000.00 | h74, s116, s45 |
| 01a10a2c-5cfb-71fa-854b-d88f4481e3e8 | Corporate LMS for 200 Employees | In Progress | ₹52,200.00 | h74, s45 |
| 01a10a2d-bbc4-777f-ba19-f51900dd5438 | Farmer Mandi Price App | Completed | ₹42,000.00 | h74, s45 |
| 01a10a2b-ca23-72d6-84d3-47fde5ca5746 | Festive Season Campaign Landing Pages | Completed | ₹12,000.00 | h74, s45 |
| 01a10a2e-4f64-740a-b4ca-0d9ab8dc1899 | GPS Fleet Tracking Portal | In Progress | ₹72,000.00 | h74, s45 |
| 01a10a2b-5eaa-769e-a5d9-0d58fcca6924 | Khandesh Spice D2C E-Commerce Store | In Progress | ₹75,000.00 | h74, s116, s46, s90, s45 |
| 01a10a2d-f356-748e-bbab-2cc07a848f9d | Multi-Branch Clinic Booking | Completed | ₹65,000.00 | h74, s45 |
| 01a10a2d-8ed9-767b-a4de-5701369ddfdf | Multi-Tenant Attendance SaaS | Completed | ₹92,000.00 | h74, s45 |
| 01a10a2d-61cd-733c-bd2c-7936be163dec | Property Lead CRM | Completed | ₹48,000.00 | h74, s45 |
| 01a10a2c-2c98-70ad-9d65-19c80c4cb784 | Razorpay Settlement Reconciliation Engine | Revision Requested | ₹48,000.00 | h74, s53, s45 |
| 01a10a2c-e744-724f-ad7d-b247f2d86ff2 | Shop-Floor OEE Dashboard | Completed | ₹78,000.00 | h74, s45 |
| 01a10a2e-2015-72f9-8347-645cab96c44e | UPI Switch Integration Layer | In Progress | ₹1,20,000.00 | h74, s45 |

### Payments · 11 primary rows/observations

| Captured ID / source position | Title / action | Status / category | Key detail | Sources |
|---|---|---|---|---|
| 01a10f88-c103-710c-8c8d-c28fec9226a8 | Captured payment | Pending | ₹625.00 | s115, h76 |
| 01a10f88-c103-710c-8c8d-be1873c17d44 | Captured payment | Created | ₹625.00 | s115, h76 |
| 01a10cbc-edbf-764c-bc51-b5debebadc56 | Captured payment | Pending | ₹625.00 | s115, h76 |
| 01a10cbc-edbf-764c-bc51-b35825aea61d | Captured payment | Created | ₹625.00 | s115, h76 |
| 01a10aac-d034-723e-8841-eb0ec84d268d | Captured payment | Created | ₹625.00 | s115, h76 |
| 01a10aac-d034-723e-8841-ee3e98977730 | Captured payment | Pending | ₹625.00 | s115, h76 |
| 01a10a2b-663e-7019-87c4-f4403da353e0 | Captured payment | Completed | Not captured | s115 |
| 01a10a2b-663e-7019-87c4-fa82caf14f0b | Captured payment | Completed | Not captured | s115 |
| 01a10a2b-5ed2-73bc-8aee-d4cdcbb6e6d6 | Captured payment | Pending | ₹22,500.00 | s115, s46 |
| 01a10a2b-5ed2-73bc-8aee-cf61167d4900 | Captured payment | Completed | ₹22,500.00 | s115, s46 |
| 01a10a2b-5ed2-73bc-8aee-d1c6262906e9 | Captured payment | Pending | ₹30,000.00 | s46 |

### Milestones · 7 primary rows/observations

| Captured ID / source position | Title / action | Status / category | Key detail | Sources |
|---|---|---|---|---|
| 01a10a2b-5eca-760b-8ae6-d33d2131d708 | Deposit | Pending | Not captured in the ID-bearing hub row | s46 |
| 01a10a2b-5eca-760b-8ae6-d723b0524e0a | Mid-project payment | Pending | Not captured in the ID-bearing hub row | s46 |
| 01a10a2b-5eca-760b-8ae6-db511c21e3b5 | Final payment | Pending | Not captured in the ID-bearing hub row | s46 |
| 01a10a2b-5ee3-72f8-841f-7ee941ba7636 | Project delivery | Approved | Not captured in the ID-bearing hub row | s46 |
| 01a10a2b-7765-721c-86f7-506c98b91e5e | Design & Architecture | Approved | Not captured in the ID-bearing hub row | s46 |
| 01a10a2b-777d-721e-bf80-f46a10c1d45e | Storefront & Checkout | Approved | Not captured in the ID-bearing hub row | s46 |
| 01a10a2b-77b5-7674-abec-84864264cf08 | QA, SEO & Launch | Approved | Not captured in the ID-bearing hub row | s46 |

### Sessions · 6 primary rows/observations

| Captured ID / source position | Title / action | Status / category | Key detail | Sources |
|---|---|---|---|---|
| 01a125ac-f30a-7128-b205-cccd856f2a55 | Active session | Active | Not captured | s119 |
| 01a125a7-698e-77b4-8a74-0c17c526ebf9 | Active session | Active | Not captured | s119 |
| 01a12573-fe46-70b8-9235-a143aea09b0f | Active session | Active | Not captured | s119 |
| 01a12558-ed84-72df-9ad4-49b18bf2ba99 | Active session | Active | Not captured | s119 |
| 01a124e2-5ed7-7748-b602-fe2caea75a9c | Active session | Active | Not captured | s119 |
| 01a124c5-8cae-71fd-b0fc-faddf55e29c3 | Active session | Active | Not captured | s119 |

### Activity · 22 primary rows/observations

| Captured ID / source position | Title / action | Status / category | Key detail | Sources |
|---|---|---|---|---|
| Source position 1; ID not captured | LOGIN | auth | 2026-10-10T11:57:09.639Z | s119 |
| Source position 2; ID not captured | LOGIN | auth | 2026-10-10T11:51:13.562Z | s119 |
| Source position 3; ID not captured | LOGIN | auth | 2026-10-10T11:50:30.767Z | s119 |
| Source position 4; ID not captured | LOGIN | auth | 2026-10-10T10:55:13.613Z | s119 |
| Source position 5; ID not captured | LOGIN | auth | 2026-10-10T10:24:57.630Z | s119 |
| Source position 6; ID not captured | LOGIN | auth | 2026-10-10T10:22:13.105Z | s119 |
| Source position 7; ID not captured | LOGIN | auth | Oct 10, 2026, 12:11 PM | h156 |
| Source position 8; ID not captured | LOGIN | auth | Oct 10, 2026, 10:17 AM | h156 |
| Source position 9; ID not captured | LOGIN | auth | Oct 10, 2026, 10:01 AM | h156 |
| Source position 10; ID not captured | LOGIN | auth | Oct 10, 2026, 8:05 AM | h156 |
| Source position 11; ID not captured | LOGIN | auth | Oct 9, 2026, 11:11 AM | h156 |
| Source position 12; ID not captured | LOGIN | auth | Oct 6, 2026, 5:14 AM | h156 |
| Source position 13; ID not captured | LOGIN | auth | Oct 6, 2026, 5:08 AM | h156 |
| Source position 14; ID not captured | LOGIN | auth | Oct 6, 2026, 4:25 AM | h156 |
| Source position 15; ID not captured | LOGIN | auth | Oct 6, 2026, 4:24 AM | h156 |
| Source position 16; ID not captured | LOGIN | auth | Oct 5, 2026, 4:48 PM | h156 |
| Source position 17; ID not captured | LOGIN | auth | 2026-10-10T12:03:30.382Z | s117 |
| Source position 18; ID not captured | LOGIN | auth | 2026-10-10T11:57:09.639Z | s117 |
| Source position 19; ID not captured | LOGIN | auth | 2026-10-10T11:51:13.562Z | s117 |
| Source position 20; ID not captured | LOGIN | auth | 2026-10-10T11:50:30.767Z | s117 |
| Source position 21; ID not captured | LOGIN | auth | 2026-10-10T10:55:13.613Z | s117 |
| Source position 22; ID not captured | LOGIN | auth | 2026-10-10T10:24:57.630Z | s117 |

### Timeline · 7 primary rows/observations

| Captured ID / source position | Title / action | Status / category | Key detail | Sources |
|---|---|---|---|---|
| Source position 1; ID not captured | Wireframe pack uploaded for review | Deliverable upload | Oct 5, 2026, 3:46 AM | s89 |
| Source position 2; ID not captured | Milestone Approved | Daily update | Oct 5, 2026, 3:46 AM | s89 |
| Source position 3; ID not captured | Milestone Approved | Daily update | Oct 5, 2026, 3:46 AM | s89 |
| Source position 4; ID not captured | Milestone Approved | Daily update | Oct 5, 2026, 3:46 AM | s89 |
| Source position 5; ID not captured | Internal — Shiprocket rate API spike | Internal note | Oct 5, 2026, 3:46 AM | s89 |
| Source position 6; ID not captured | Daily update — homepage and PLP wireframes | Daily update | Oct 5, 2026, 3:46 AM | s89 |
| Source position 7; ID not captured | Milestone Approved | Daily update | Oct 5, 2026, 3:46 AM | s89 |

### Deliverables · 1 primary rows/observations

| Captured ID / source position | Title / action | Status / category | Key detail | Sources |
|---|---|---|---|---|
| Source position 1; ID not captured | Milestone 1 wireframes — homepage, PLP, PDP, cart, checkout (Hindi + English). | Approved | Oct 5, 2026, 3:46 AM | s90 |

### Separate F12 milestone observations · seven unjoined rows

Phase UUIDs are not visible in screenshot 090. These fields are **not** joined to ID-bearing hub milestones by matching a title. Hub milestone due/type remain explicitly not captured.

| Observed phase title | F12 status | F12 due date | Captured type |
|---|---|---|---|
| Deposit | Paid | Oct 5, 2027 | deposit · pay-only |
| Mid-project payment | Payment due | Oct 5, 2027 | installment · pay-only |
| Final payment | Payment due | Oct 5, 2027 | installment · pay-only |
| Project delivery | Approved | Oct 5, 2027 | Delivery milestone |
| Design & Architecture | Approved | Jul 15, 2026 | Delivery milestone |
| Storefront & Checkout | Approved | Aug 15, 2026 | Delivery milestone |
| QA, SEO & Launch | Approved | Sep 30, 2026 | Delivery milestone |

## Contract boundaries

Read [SWAGGER-REVIEW](SWAGGER-REVIEW.md): 22 unique GET contracts across 8 opened service specs. Contracts do not furnish captured record values. User payment scope uses clientId; quote list requires both sort parameters; project delivery milestones are not an invented /milestones endpoint; admin deliverables are declared in Progress, not Projects; global messages lack selected-client filtering. Authentication LOGINs are not admin audit events.

## Reproduction

`collect-evidence.py` only transcribes evidence and enriches exact-ID records from the supplied local DOM snapshots. It produces evidence-v67.json and evidence-v67.js. It does not generate or copy either HTML design. Source inputs are immutable; the two HTML structures were authored independently.
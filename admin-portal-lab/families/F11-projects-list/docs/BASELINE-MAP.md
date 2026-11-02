# F11 baseline — initial screenshot review (incomplete)

## Screenshot 052-projects.webp
Historical screenshot, not a live service check. Title Projects; helper: “Search and manage all client projects. Click a project to view its full detail.” Headline counts: Total projects 18, Active 8, Completed 10. Status breakdown: Completed 10, In Progress 4, Pending Payment 3, Revision Requested 1. Search projects field, Status / All statuses select, Clear button. Table columns Title, Status, Client, Created, Actions. Row actions View, Archive, Use as template. Footer shows “Showing 1–18 of 18”, Prev, 1 / 1, Next, and “18 project records”.

The captured screenshot and later report of failed project endpoints are different historical observations; neither establishes current availability. Do not present screenshot records as live or silently infer actual freshness.

## Outage evidence from captured HTML and audit metadata
- `73-projects-index.html`, captured 2026-10-30 13:43 UTC: heading Projects, same helper text, `Loading…`; metadata reports zero inputs and zero tables. Its failedRequests array is empty, so this particular capture alone does not prove a failed request.
- `149-projects-index-settled.html`, captured 13:50 UTC: `Network Error`; metadata records failed requests for `/api/v1/admin/projects/stats` and `/api/v1/admin/projects?page=1&limit=20`. Zero inputs and tables.
- `185-projects-index-failure-reasons.html`, captured 13:55 UTC: `Network Error`; zero inputs and tables.
- These captures represent the failure path, while screenshot 052 preserves an earlier populated view. They cannot establish current availability. Do not claim the historical 18 records are a cache, or imply last-good freshness.

## Remaining Gate S work
Reconcile the screenshot rows against the source and freeze all visible details. This file does not assert Gate S passes. No templates or variants have been created.

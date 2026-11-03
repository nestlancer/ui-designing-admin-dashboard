# F23 · Media Library — Template & operations research (Gate T)

**Executed AFTER Gates S → R → A**, as required. 6 web searches; **12 references opened and read**; 2 fetches failed and are disclosed (not counted). Research covers enterprise ops-dashboard views/features/design plus digital-asset-management (DAM) media libraries, per the owner's instruction.

## Opened references

| # | Reference | URL | What was adopted |
|---|---|---|---|
| 1 | Cloudinary — Assets product overview | https://cloudinary.com/documentation/digital_asset_management_overview | Media Library as the single repository; drag-and-drop bulk upload; select multiple assets → bulk operations (delete, tags/metadata, move, download, moderated status). |
| 2 | Cloudinary — Assets (DAM) overview | https://cloudinary.com/documentation/dam_digital_asset_management | Assets/Folders/Collections navigation, Structured Metadata, Assets Reports, per-role access, light/dark/system theme selection. |
| 3 | Cloudinary — Get started with Assets | https://cloudinary.com/documentation/dam_assets_get_started | Folder hierarchy, metadata fields, admin workflow; upload presets. Read, not copied (no settings was captured). |
| 4 | Frontify — Getting started with the Media Library | https://help.frontify.com/en/articles/6784170-getting-started-with-the-media-library | Bottom bulk-action toolbar with select-all / clear, Move, Download, Delete, Edit; **staged bulk metadata edits applied only after review**; asset details in a collapsible right sidebar; library overview snapshot. |
| 5 | Strapi — Media Library Interface (DeepWiki) | https://deepwiki.com/strapi/strapi/4.3-media-library-interface | AssetsGrid / AssetsTable / **AssetDetailsDrawer** / UploadProgressDialog; persisted grid↔table view mode; real upload progress + retry. |
| 6 | Strapi — "Content type folders, a new Media Library" | https://strapi.io/blog/content-type-folders-new-media-library | Folders always in view, details open in a panel **beside** the list so browsing continues, uploads that don't hold the operator hostage, sort by file size, works on phone/tablet. |
| 7 | DAM News — "DAM UI Future Changes" | https://digitalassetmanagementnews.org/features/dam-ui-future-changes/ | Thumbnail grid is the balanced de-facto standard for mixed file types; text list wins when metadata is the differentiator; masonry fails for non-visual assets; don't replace conventions without added value. |
| 8 | RevoGrid — Building Powerful Enterprise Dashboards | https://rv-grid.com/blog/building-enterprise-dashboards | **Summary → investigation → action** layers; operational dashboard answers "what needs action now"; master–detail panels, keyboard nav, pinned identifiers, status not colour alone, designed empty/loading states. |
| 9 | vocab.design — Bulk actions | https://vocab.design/bulk-actions | Bar exists only while a selection exists; reports the count; replaces (not pushes) the toolbar; stays visible while scrolling; disable-with-reason rather than reshuffle; confirm naming the count **or, preferably, undo**; clear selection on filter change; announce count changes. |
| 10 | NN/g — Designing Empty States in Complex Applications | https://www.nngroup.com/articles/empty-state-interface-design/ | Empty states must say **why** the container is empty (no data vs still loading vs error) and offer a direct next step. |
| 11 | Sysax — Designing a Quarantine Workflow That People Follow | https://www.sysax.com/topics/malware-scanning-file-flows/quarantine-workflow-design/ | Quarantine is an isolated, tightly-permissioned, logged **evidence locker**; flag → alert → human triage → accountable release or controlled disposal; false positives need a fast path. |
| 12 | Carbon — Dialogs | https://carbondesignsystem.com/patterns/dialog-pattern/ | Short, user-initiated dialogs; descriptive action verbs; name the consequence for destructive actions; focus/tab-order discipline. |
| 13 | Digital Elliptical — Designing Enterprise Dashboards Without Card Walls | https://digitalelliptical.com/blog/designing-enterprise-dashboards-without-card-walls/ | Full-width operational stream + master–detail inspector instead of a bento card wall; borderless grouping; anomalies stand out. |

**Also opened:** rv-grid, Carbon and Digital Elliptical pages fetched in full; Cloudinary pages required chunk 2 to reach the body content.

**Failed fetches (disclosed, not counted):** `https://polado.io/en/blog/admin-dashboard-ux-design-operational-screens` and `https://v11.carbondesignsystem.com/community/patterns/remove-pattern`. Their search snippets were read (bulk-action safety, Carbon high/medium/low-impact deletion grades) but treated as secondary only; the Carbon dialog pattern above was fetched successfully from the current URL.

## Pattern → variant mapping

| Pattern | V1 | V2 | V3 | V4 | V5 |
|---|---|---|---|---|---|
| Summary → investigation → action (R8) | evidence ledger → browse rail + grid | wall caption → wall → inspector | trust band → list → decision rail | status strip → register → ops rail | choreography lane → stage → motion rail |
| Master–detail inspector (S5/S6/R13) | drawer | docked inspector + drawer | decision rail + drawer | ops rail + drawer | motion rail + sliding drawer |
| Grid / list parity (S5/S7) | ✓ | ✓ | list-first | list-first | ✓ |
| Bulk bar count + clear + undo (F4/v9/R9) | ✓ | ✓ | ✓ | ✓ | ✓ |
| Designed empty/loading/error (NNg/R8) | ✓ | ✓ | ✓ | ✓ | ✓ |
| Quarantine as evidence locker (S11) | ✓ | ✓ | ✓ | ✓ | ✓ |
| Short consequence-naming dialogs (C12) | ✓ | ✓ | ✓ | ✓ | ✓ |
| Upload that doesn't block browsing (S6) | staged dialog | staged dialog | staged dialog | staged dialog | visible step lane |

## Explicitly rejected (research-only, absent from captures and spec)

AI/visual/natural-language search, auto-tagging, transformations/Studio, duplicate detection, expiry analytics, portals, approval workflows, saved searches, per-operator RBAC screens, real image thumbnails, real 30-day upload series, folder trees, quarantine scan verdicts, SLA/assignee badges, and any invented operator identity. They are documented here, not drawn in the variants.

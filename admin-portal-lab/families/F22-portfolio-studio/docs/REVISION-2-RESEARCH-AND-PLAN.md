# F22 revision 2 — organization review

Owner clarification: **F22 only, all five versions**, not F01–F22. Earlier gate passes do not validate this revision.

## Diagnosis
The previous designs spread one job across too many equal-weight panels. Large decorative headings/title covers and four hero counters delayed the item workset. Categories, analytics, instructional copy and timeline competed with editing; V4 had three competing sidebars; the modal editor was a long undifferentiated form. Compacting spacing alone would not fix that information architecture.

## Fresh public research
Opened official reference pages, including actual product screenshots (Strapi displayed-fields image, Directus table layout and Sanity Structure default). Saved Directus/Sanity reference images under `references/`, not as product artwork.

| Reference | Evidence / application |
|---|---|
| https://docs.strapi.io/cms/features/content-manager | Distinct collection list and edit views. Clear header → single workset → record editing. Do not copy locale/release features into Nestlancer. |
| https://directus.com/docs/guides/content/layouts | Table/card layouts over the same collection; separate layout controls from item work. Use one toolbar and stable meta columns, not mixed card/analytics/control wallpaper. |
| https://payloadcms.com/docs/admin/preview | Preview is distinct from Live Preview. Label our safe local content preview accurately; no iframe/live-site guarantee. |
| https://www.sanity.io/docs/studio/structure-tool | Screenshot shows list→document workspace and anchored action area. V3 adapts this browsing/context geometry without adding collaboration/versioning. |
| https://www.nngroup.com/articles/progressive-disclosure/ | Primary few options first, secondary on request. Items / Categories / Analytics are shallow peer destinations; source/demo details are in one quiet utility. |
| https://www.nngroup.com/articles/visual-hierarchy-ux-definition/ | Scale/grouping/common regions communicate priority. Remove marketing headlines and equal-weight dashboard cards; emphasize the workset. |
| https://www.carbondesignsystem.com/building-blocks/core/components/data-table/guidelines | Consistent row/header height and toolbar anatomy. Align status/date/action columns; avoid one record gaining extra rows for feature metadata. |
| https://design-system.service.gov.uk/patterns/check-answers/ | Review facts before submitting with an opportunity to change answers. Editor review retains Back to editing; cancelling a confirmation must not lose form content. |
| https://tabler.io/admin-template/preview (redirect https://preview.tabler.io/) | Live open-source enterprise template. Borrow compact masthead/toolbar/list rhythm only; reject its large unrelated KPI dashboard for this curation task. No external libraries copied. |

### Thesis / academic search, with limits
- Fiona Neumann, **Developing a content management system with drag and drop functionality** (2022), Theseus record https://www.theseus.fi/handle/10024/781553. Search-indexed repository abstract describes creating, rearranging and deactivating posts and frontend rights. The full page fetch failed. Use only as related workflow context, not a controlled usability experiment or a read-in-full thesis.
- Akib Jawad / Mavi Villatoro Amaya, **User Experience (UX) Design in ERP Systems: Optimizing User Interface** (2023), https://www.theseus.fi/bitstreams/019fb20d-14d5-4370-80e1-eca5b28085d2/download. Search-indexed abstract/interview summary concerns clarity and end-user needs. PDF fetch failed; no claims of reading the full thesis or quantified results.
- **A critical analysis of cognitive load measurement methods**, https://arxiv.org/pdf/2402.11820. Search excerpts discuss split attention and task/error/time measures. HTML unavailable, PDF fetch failed. Do not claim the redesign measured or reduced cognitive load by a percentage.
- Old Directus docs URL returned 404; the current official layouts page above succeeded.

## Swagger re-read / corrections
Re-read portfolio paths and DTOs, related media upload/access/delete contracts, and checked admin/gateway for portfolio aliases (none). Admin portfolio operations explicitly use bearer JWT security, unlike public listing/view/like. A public view/like route is not an admin editing action and must never be called by a design preview.

- Admin list supports page/limit/pageSize/sort/status/categoryId/featured; status enum DRAFT/PUBLISHED/ARCHIVED. Only captured DRAFT/PUBLISHED filters remain in the lab; no archive operation added.
- `order` is the curator's public rank. Display sort is separate. Reorder requires full `items[{id,order}]`; the lab keeps full-list review, never silently reorders a filtered subset.
- Create requires title, shortDescription, fullDescription, contentFormat. Update fields are optional. Unknown selected values are not assumed false/empty, and production integration would need sparse PATCH construction.
- Item response provides category/client/projectDetails/links/seo fields; category response supplies itemCount/order, but these values are absent from the capture. Display “Not captured”, never invented zero assignments.
- Separate global and item analytics. Existing anonymous per-item zero remains anonymous; named-item views come from captured global rows only.
- **Correction to first API map:** portfolio `/media/upload` declares title, setAsThumbnail, setAsFeaturedVideo as required string query parameters but **does not describe a request body**. Therefore calling this a confirmed multipart contract was unsupported. Related media service has its own multipart/presign/chunk workflows, not interchangeable portfolio adapters. Actual upload body and boolean/string coercion need backend confirmation. Keep local staging only.
- Portfolio media unlink DELETE is not media-service global force-delete. Never label “Remove preview file” as destroying the asset everywhere.
- Category delete supports optional reassignToId. Captured IDs/membership missing, so a prototype cannot safely infer reassignment or affected count.
- No undo endpoint, no server permission/audit result. Ten-second undo remains local.

## New common IA (before markup edits)
1. Compact Portfolio header; one primary New item and one secondary public-preview action.
2. Quiet source line, not a large warning/banner card. Historical counts in a compact strip, not four dominant metric cards.
3. **Items / Categories / Analytics** peer tabs. Default Items contains only the workset, search/status, ordering and record actions. Secondary workspaces do not extend the default scroll.
4. Editor expands into a dedicated full-window workspace with section navigation, clear grouped fields and sticky review action. Form values survive review→back. All source fields retained.
5. Source differences, demo states and contract details belong to a single bottom utility or relevant point of use; no repetitive instruction panels.

## Five revised concept cards
- **V1 · Collection manager:** single full-width workset, regular row rhythm, fixed status/date/action columns. No sidebar panel inside the canvas. Minimal operational default.
- **V2 · Case-study library:** 4/3/2/1-column compact cards; small numbered title treatment, no giant fake image cover. Three rows on normal desktop, not a marketing page.
- **V3 · Editorial workspace:** narrower selectable roster + broad public-context/document pane; taxonomy/metrics move to tabs. Content context, not three competing sidebars.
- **V4 · Operations register:** denser aligned rank/title/status/date/actions register with a small left contextual tool rail (counted inventory, not taxonomy or analytics panels). Optimized scan density while keeping coarse targets.
- **V5 · Timeline curator:** one Oct-2026 chapter rail + eight compact timeline entries, source-safe title/summary where known. Public sequence is the workset, not an additional duplicated list. Motion transform-only/reduced-motion.

Difference axes: V1 flat register / V2 tiled library / V3 master-detail / V4 tool-rail register / V5 chapter spine. Primary hierarchy and interaction vary by job, but peer workspaces and source truth are consistent. Five distinct compositions, not five different navigation systems. User's organization feedback takes priority over decorative novelty.

## Revision acceptance targets
- At 1440×900, every default view shows the header, collection navigation, toolbar and at least four items; item eight is no farther than normal page scrolling.
- No taxonomy/analytics panels appear in the initial Items workset. Both destinations are one click away and complete.
- Header actions align; row metadata has consistent columns/heights; right pane only where concept needs one.
- Editor section navigation works, review-back preserves edits, dialogs remain named/focus-contained/Escape-safe, unsaved exit is guarded.
- Re-run all widths/themes and interaction/accessibility tests against this revision, including every workspace and editor, not the historical page.

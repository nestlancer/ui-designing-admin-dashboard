# F24 — primary design visuals inspected

Fetched3November2026. All three returnedHTTP200 and were opened with the image viewer; these are reference-only files, not interface assets.

|Local file under docs/research|Original URL|Observed pattern / boundary|
|---|---|---|
|drupal-template-list.png|https://project.pages.drupalcode.org/drupal_cms/customize/assets/email-setup--email-templates-list-r2.png|Clear Templates/Overrides/Settings hierarchy, one restrained operation per row with overflow, key and human name paired. Adopt template name+ID and single Edit&preview action; no overrides/settings scope invented|
|grafana-service-hierarchy.png|https://grafana.com/static/img/docs/best-practices/service-hierarchy-example.png|Service order follows data flow; per-service QPS and latency side by side. Adopt hierarchy/context only, NOT QPS/latency charts because F24 has no such measurements|
|bull-board-overview.png|https://raw.githubusercontent.com/felixmosh/bull-board/master/website/docs/public/screenshots/dashboard-overview.png|Status filters at top, queue groups left, explicit Failed/Active/Waiting in work cards. Adopt status-aware actions, not fabricated counts, retry success or scheduler controls|

Official BullBoard README was also retrieved directly into research/bull-board-readme.md. Browser/embedded demo behaviour was not tested; static reference composition was inspected. Carbon's embedded Storybook showed a preview error; documentation read only. Unleash's old page404 was followed to its official replacement. Research-source colours are not imported; locked tokens remain unchanged.

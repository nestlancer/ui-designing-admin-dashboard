# F15 — owner-review update, 2 November 2026

## What changed
All five existing layouts now load the **20 captured first-page directory rows**, rather than the earlier five-row sample. Role, status, dates and IDs come from HTML 79; only the five directory rows with corresponding captured F16 profiles link to a detail page, and links preserve the variant and exact user ID. The other 15 say the detail was not captured. Page two (14 other users) is not available and remains disabled. Without JavaScript, the original explicitly partial five-row fallback remains visible.

The profile/metrics header, surface treatment, filtering and typography were refreshed. The design directions remain based on a common pilot rather than five independently built implementations; the strict difference test is still open. No data, permissions, password, security or audit operation is sent to any server. Directory metrics remain historical and their freshness is unknown. Registration remains disabled as captured.

## Research and evidence
[REVIEW-EVIDENCE.md](../../F16-user-details-safety/docs/REVIEW-EVIDENCE.md) reconciles screenshots and profiles. See `TEMPLATE-RESEARCH.md` for new online references. The full user-service operation inventory is [OPENAPI-INVENTORY.md](../../F16-user-details-safety/docs/OPENAPI-INVENTORY.md). All previously incomplete ordered gates remain open; this review update is not a gate pass.

## QA and boundaries
Playwright/Chromium checked all 5 variants at 1440 × 900, 390 × 844, and 1440 × 900 dark: 20 rows, five mapped details, Sandeep search, local selection and bulk preview, deep link identity, no horizontal overflow at the directory and no browser errors. Automated axe-core WCAG 2 A/AA and 2.1 A/AA scans detected no violations in the initial 15 states; this does not replace manual accessibility testing. Captures in `qa/` reflect the updated layouts. Page-two data, live loading/error/permissions and full manual screen-reader, zoom, focus-order, touch and multi-browser checks are still open.

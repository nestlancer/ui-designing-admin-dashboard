# F15 — preliminary research and gate status

## Status
Work in progress, not a delivery report. The gate sequence S → R → A → T remains **incomplete**: complete content reconciliation, a full report/workbook study, mapping of all relevant contracts, and at least eight relevant user-directory references are still required. Searches listed below were exploratory and occurred before gates S/R/A were completed; they do **not** satisfy Gate T. No concepts or variants are claimed as delivered.

## Screenshot and HTML observations
`064-users.webp` and `79-users-index.html` show Users directory, caption, disabled Add new user and “New accounts come from client registration — operators cannot create users here.” Captured metrics in display order: Total users 34, Active 34, New this month 34, Suspended 0. These are historical captured values, not current facts. The screenshot has 20 rows and five data columns, plus selection checkboxes. Filter labels are Status and Role; search and clear are visible; pagination reads Showing 1–20 of 34, 1 / 2, Prev, Next. Provide unknown freshness rather than inventing a timestamp. Identical counts warrant review, not a conclusion that the data are incorrect.

## Contract observations
`users.openapi.json`: GET `/api/v1/admin/users` (page, limit, status, role), GET `/api/v1/admin/users/search`, POST `/api/v1/admin/users/bulk`. The admin list path has no POST method. Bulk schema action enum: suspend, activate, delete, resetPassword. Its reason description says compulsory, but `required` lists only userIds and action. Do not treat tagging, verification, bulk export, creation or mandatory server-side justification as verified by this schema. Role and status enforcement and API responses require separate inspection.

## Exploratory enterprise references (not Gate T)
- [Carbon data tables](https://carbondesignsystem.com/components/data-table/usage/) — toolbar, selection and batch actions.
- [Carbon filtering](https://www.carbondesignsystem.com/building-blocks/core/patterns/filtering) — filter visibility and reset.
- [Atlassian components](https://atlassian.design/components) — dynamic table pagination and sorting.
- [Shopify Polaris layout](https://polaris.shopify.com/foundations/design/space) — emphasis and hierarchy for operational data.
- [GOV.UK warning buttons](https://design-system.service.gov.uk/components/button/) — an additional confirmation step for serious destructive actions.

References are design guidance, not proof of product behavior. The required eight directory examples have not been gathered and evaluated in the prescribed order.

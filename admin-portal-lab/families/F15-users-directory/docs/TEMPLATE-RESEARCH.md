# F15 — external research after baseline/report/API mapping

Opened 2 Nov 2026; design cues only, not product capabilities or independently verified vendor claims.

1. [DashboardPack User Management](https://dashboardpack.com/theme-details/user-management-dashboard/) — searchable directory, facets and per-user detail; adopt compact table with clear filters, not its unsupported create flow.
2. [Alma Find and Manage Users](https://knowledge.exlibrisgroup.com/Alma/Product_Documentation/010Alma_Online_Help_(English)/050Administration/030User_Management/010Managing_Users) — role/status filters with identity linking; do not adopt its inline deactivate switch.
3. [Atlassian admin](https://support.atlassian.com/atlassian-cloud/kb/site-administrator-role-in-the-centralized-user-management-and-original-user-management-experiences/) — directory role/status and explicit permissions; do not infer Nestlancer permissions from another product.
4. [pgAdmin user management](https://www.pgadmin.org/docs/pgadmin4/latest/user_management.html) — search across user identifiers; link row to detail instead of applying dangerous inline actions.
5. [TocktickIT user management](https://github.com/GGital/TocktickIT/pull/75) — mobile cards, no-match and last-admin rejection; acknowledge this is a PR, not production proof.
6. [Tailwind Flex user table](https://tailwindflex.com/@ip-leroy/table-for-user-management) — readable name/email/role grouping; reject unguarded delete.
7. [AdminLTE template catalogue](https://adminlte.io/blog/html-dashboard-template/) — user management and compact data layouts; vendor catalogue not an independent review.
8. [Google user-management workflow](https://support.google.com/a/answer/33312?hl=en) — searchable directory, role-gated account action and confirmation; do not transfer Google policy to Nestlancer.

Carbon [data-table guidance](https://carbondesignsystem.com/components/data-table/usage/) adds scoped selection and a contextual batch toolbar. Some sources are documentation/catalogues rather than interactive template inspection; visual layouts have not been independently verified. This does not establish every strict Gate T criterion.

## Owner-review refresh — 2 November 2026

The owner said F15 looked good but asked to revisit both families; F16 felt too close to the production screenshot and had incomplete demo data. The revised work aims for a profile-led case file, scannable section navigation, a stronger identity hero, reusable historical identity selection, clearer data provenance and device-by-device review. These are composition changes, not evidence that unobserved product capabilities exist.

| Opened reference | Observed page / useful idea | Boundary |
|---|---|---|
| [DashboardPack live user detail](https://demo.dashboardpack.com/user-management-html/user-detail.html) | Identity at top, short section navigation, separate security, sessions and timeline groupings. | Reference/demo only: its MFA, teams, permissions, seat/billing and other data are not introduced into Nestlancer. |
| [DashboardPack live users](https://demo.dashboardpack.com/user-management-html/users.html) | Defined table fields, status context and scoped filtering. | No inferred invite, CSV export, team or MFA field for Nestlancer. |
| [DashboardPack sessions](https://demo.dashboardpack.com/user-management-html/sessions.html) | Keep device, IP, time and per-device action together. | No inferred location, risk or map; local revoke is simulated. |
| [Microsoft Entra audit user activity](https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/azure-pim-resource-rbac) | User-specific activity and role-event detail, explicit privileges. | Nestlancer authentication rows are not labelled admin audit, no live privilege claims. |
| [Carbon filtering](https://www.carbondesignsystem.com/building-blocks/core/patterns/filtering) | Filters applied together and a visible clear action. | Only documented list filters; no fictitious backend facets. |
| [shadcn dashboard example](https://ui.shadcn.com/examples/dashboard) | Compact type hierarchy, selection count and pagination visibility. | Visual inspiration only; no copied growth charts or example data. |
| [Tabler layouts](https://tabler.io/admin-template) | Alternate workspace geometry and theme-aware spacing. | Product/catalogue examples; no copied code. |
| [Eleken profile analysis](https://www.eleken.co/blog-posts/profile-page-design) | Identity grouped separately from working sections, sensible task navigation. | Profile pattern, not an IAM product contract. |
| [Orbix admin design guidance](https://www.orbix.studio/blogs/saas-admin-dashboard-design-rebuilds) | Design against messy and long table content, permission and empty states. | General guidance, not validation of these prototypes. |

These references were opened after the earlier partial API work, not after every strict gate was accepted; do not claim the mandatory S→R→A→T ordering passed. The live pages were read as rendered text; no authenticated production console was accessed.

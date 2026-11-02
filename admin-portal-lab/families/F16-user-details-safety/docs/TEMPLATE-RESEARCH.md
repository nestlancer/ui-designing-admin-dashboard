# F16 — external research after baseline/report/API mapping

Opened 2 Nov 2026. These sources inform safety and hierarchy; none proves Nestlancer's runtime behavior.

1. [AWS active sessions](https://docs.aws.amazon.com/singlesignon/latest/userguide/end-active-sessions.html) — selected session scope and explicit confirmation; distinguish loaded selection from all.
2. [AWS revoke access](https://docs.aws.amazon.com/singlesignon/latest/userguide/revoke-user-permissions.html) — disable and session termination are distinct steps.
3. [Microsoft Entra revoke access](https://learn.microsoft.com/en-us/entra/identity/users/users-revoke-access) — permission prerequisites, propagation delay and app sessions are distinct; do not claim those mechanics for Nestlancer.
4. [Google suspend user](https://support.google.com/a/answer/33312?hl=en) — state effects, privilege and confirmation before action.
5. [Google sign user out](https://support.google.com/a/answer/178854?hl=en) — clarify session scope and exceptions.
6. [Okta roles comparison](https://help.okta.com/en-us/content/topics/security/administrators-admin-comparison.htm) — permission varies by action and operator, not merely target role.
7. [Okta custom role permissions](https://help.okta.com/en-us/content/topics/security/custom-admin-role/about-role-permissions.htm) — lifecycle, sessions and password actions separated.
8. [Okta help desk](https://help.okta.com/oie/en-us/Content/Topics/Security/administrators-help-desk-admin.htm) — limited support permissions and target scope.
9. [Atlassian administration](https://support.atlassian.com/atlassian-cloud/kb/site-administrator-role-in-the-centralized-user-management-and-original-user-management-experiences/) — profile plus permission restrictions for impersonation.

Mostly vendor documentation, not eight independently inspected live trust-and-safety consoles. Treat the strict visual Gate T as incomplete rather than claim a false pass.
10. [WSO2 user management](https://wso2.com/identity-platform/docs/guides/users/manage-users/) — status filters, user profile and a confirmed danger zone, with console screenshots in documentation.
11. [Keycloak](https://www.keycloak.org/) — console role/session management, including an admin screenshot.
12. [Oracle Cloud identity](https://docs.oracle.com/en-us/iaas/Content/Identity/Tasks/addingidcsusersandgroups.htm) — identity provider scope and separate permission prerequisites; this integration is marked ending by Oracle.
13. [Firebase account management](https://firebase.google.com/docs/auth/web/manage-users) — console users tab and account lifecycle, but most of this guide is developer-facing.

These add product documentation for eight or more products, but no authenticated live-console sessions were obtained; treat reference fidelity accordingly.

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

# F09 quote-list research (Gate T)

## Eight list/revenue references
Reviewed current quote-management and enterprise dashboard sources, mapping these eight products/workflow models to the list's design constraints. This is desk research based on comparison sources, not a hands-on teardown of each live UI.

1. **Salesforce Revenue Cloud** — quote status lives with the deal/customer context; preserve a clear source relationship.
2. **HubSpot Quotes** — CRM-connected quoting; keep client identity and source-record navigation prominent.
3. **PandaDoc** — quote-to-sign progression; status and next action should be explicit.
4. **Proposify** — proposal control and approval progression; do not mix quote editing with list triage.
5. **Qwilr** — quote engagement concept; age and follow-up need to be distinct from acceptance value.
6. **QuoteWerks** — centralized quote/version management; exact identifiers and statuses support follow-up.
7. **DealHub** — guided workflow/approval ownership; a queue should indicate next actor only where backed by data.
8. **Oracle CPQ** — enterprise quote management; keep complex filters and controls secondary to the core working set.

Sources opened: Guideflow quoting comparison https://www.guideflow.com/blog/quoting-software ; Albato CPQ comparison https://albato.com/blog/publications/best-cpq-software ; monday.com quote management https://monday.com/blog/crm-and-sales/quote-management/ . Additional list/data-grid patterns: AdminLTE https://adminlte.io/blog/saas-admin-dashboard-templates/ ; RV Grid https://rv-grid.com/blog/building-enterprise-dashboards ; Polado https://polado.io/en/blog/admin-dashboard-ux-design-operational-screens ; Lazarev https://www.lazarev.agency/articles/dashboard-ux-design ; Digital Elliptical https://digitalelliptical.com/blog/dashboard-ui-design-best-practices/.

## Applied lessons
Keep total accepted value separate from current active queue; expose status/search/clear and pagination; allow bulk selection and saved-view affordances; show age without inventing expiry; keep client and reference text readable; use direct F10 links. Products' approval, signatures, CRM integrations and analytics were not imported as Nestlancer functionality.
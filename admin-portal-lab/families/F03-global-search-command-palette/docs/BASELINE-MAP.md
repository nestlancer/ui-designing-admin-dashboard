# F03 · Baseline map / Gate S

Opened screenshot `072-global-search-admin-dialog.webp`, snapshot `03-dashboard-global-search-dialog.html`, README mapping and full corresponding audit metadata. Screenshot is a tall full-page image; DOM bounds the list at 360px/50vh. Preserve content, not the screenshot’s excessive dialog height.

## Operations
- Dashboard
- Pipelines
- Pipeline · User hub
- Pipeline · Project hub
- Inquiries
- Requests
- Quotes
- Projects
- Users
- Payments
- Settlement accounts
- Company legal identity
- Inquiries
- Messages
- Moderation
- Analytics
## Content
- Blog
- Portfolio
- Media Library
## System
- System Config
- Webhooks
- Audit Logs
## Quick actions
- Create blog post
- New portfolio item
- Message client
- New group chat
- Switch to dark mode

## Frozen strings and anatomy
Dialog: **Command menu**. Input: **Search or jump to…**, accessible name **Command search**. Trigger: **Search pages… ⌘K**. Footer: **↑↓ navigate · ↵ select · esc close**. Row: icon + label; additions show secondary route/record hints, never invented counts.

## Completeness audit
27 captured rows / 26 unique actions. Inquiries appears twice in Operations: consolidate the duplicate, keep the label and route. Four captured groups retained in all five variants. Sidebar has 18 primary routes; Notifications is absent from the captured palette. Add Notifications. Add filtered Requests / Quotes inbox, New inquiries, Awaiting verification, Disputes, and named user/payment record lookup. Eight new actions including Notifications: 34 total unique commands.

Known dead route: New group chat → `/messages/new/group` is a captured 404. Preserve action wording but show a clearly labelled local group-creation preview, never link to the 404. Create blog post uses captured `/content/posts/new`; Message client uses `/messages/new-direct`. Theme command really toggles `.dark`. No generic gateway search API exists in the published gateway spec.

## Metadata
`capturedUtc=2026-10-30T13:38:16.971617+00:00`; one dialog, one combobox; no failedRequests. One inline-style CSP console error in source capture; no policy copied into lab. One missing-alt source image corrected with shared theme-aware logo pair.

## Fixture provenance
Karthik Menon, email and UUID `01a10a2b-1039-77dd-90c9-2793dd606216` from `156-users-details.html`. Payment context **UPI Switch Integration Layer**, project UUID `01a10a2e-2015-72f9-8347-645cab96c44e` from `74-payments-index.html`; ₹36,000.00 / Karthik from the dashboard snapshot. No captured individual payment ID verified: individual-record action is explicitly a demo; use project payment context, never invent a payment ID.

All added states are designed prototype states: recent (initially truly empty), grouped/filtered results, no matches, skeleton, focused error with retry, local route/record handoff. Route handoff is not a production page. All 18 routes reachable; existing F02 dashboard is a real lab link, other destinations are honest local handoffs.

**Gate S: PASS · screenshot 1/1 · HTML 1/1 · 27 captured / 8 additions / 1 known dead route repaired with demo preview.**

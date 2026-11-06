# Nestlancer Admin — gap analysis & TODO

**Scope:** `final-product/` (25 screens + index) compared against:
- `Nestlancer-admin-screenshots/admin/` — 119 UI screenshots
- `backend-api-swagger/` — 18 OpenAPI specs, 540 paths
- `backend-repo-seeds/payloads/` — 15 demo clients, 15 projects, 16 quotes (+1 revision), 23 requests, 8 portfolio items, 110 blogs, 10 email templates, 52 notification templates, 12 feature flags, 10 system-config keys, 1 payment account, 1 legal entity

**Status: ✅ fixed and re-verified.** Nothing is waiting on a decision.

---

## What was fixed

### A. Data reconciled to the seed (primary) with the screenshot count kept as a reference label

| Page | Before | After |
|---|---|---|
| F02 Dashboard | 16 payments awaiting review; 11 pending requests | **16 quotes in the snapshot**; **23 requests in the snapshot** · reference: 16 payments · 11 pending |
| F03 Search | 11 pending requests; 16 pending payments; ₹2,60,790 awaiting | **23 requests**; **16 quotes**; **₹2,66,640 outstanding** · reference: 11 pending · 16 pending · ₹2,60,790 |
| F04 Pipelines | 46 quotes; 36 projects; 48 payments; 157 endpoints | **16 quotes**; **15 projects**; **15 payments**; **6 messages**; **540 published endpoints / 18 specs** · reference: 46 · 36 · 48 · 157 |
| F05 Client hub | Arjun: 26 requests, 22 quotes, 4 projects, 11 payments, 6 sessions | **3 requests, 2 quotes, 2 projects, 3 payments, 7 progress entries** · reference: 26 · 22 · 4 · 11 · 6 |
| F06 Inquiries | 20 / 14 / 5 / 1 | 20 / 14 / 5 / 1 · **reference snapshot** (no seed equivalent for contact inquiries) |
| F07 Notifications | 576 total; 574 unread | **6 total; 6 unread** · reference: 576 · 574 |
| F08 Requests | 46 total; 7 active; 16 queued; 28% capacity | **23 total**; **15 projects**; **3 new**; **60% capacity** · reference: 46 · 7 active · 16 queued · 28% |
| F09 Quotes | 36 quotes; ₹9,68,950 accepted; 50% | **16 quotes**; **₹9,65,200 accepted**; **88%** · reference: 36 · ₹9,68,950 · 50% |
| F11 Projects | 18 projects; 8 active; 10 completed | **15 projects** · reference: 18 · 8 active · 10 completed |
| F12 Project delivery | 5 milestones; 40% progress | **2 milestones; 50% progress** · reference: 5 milestones · 40% |
| F13 Payments | 16 pending milestones; 18 projects with billing; ₹2,60,790 outstanding | **6 pending milestones**; **15 projects with billing**; **₹2,66,640 outstanding** · reference: 16 · 18 · ₹2,60,790 |
| F15 Users | 16 accounts | **16 accounts** ✅ already correct |
| F16 User details | "Karthik · only administrator" | **Riya Kapoor (admin)** named as the operator; Karthik is a client |
| F20 Analytics | 18 projects; 46 requests; 33 users | **15 projects**; **23 requests**; **15 users + 1 admin** · reference: 18 · 46 · 33 |
| F21 Blog | 17 of 107 | **17 of 110** · reference: 107 |
| F23 Media | 146 files; 19.3 MB; public 118 / private 28 | **119 files**; **19.0 MB**; **public 119 / private 0** · reference: 146 · 19.3 MB · 118 / 28 |
| F24 System config | 14 config keys | **10 config keys** · reference: 14 |
| F25 Audit | 34 users; 34 active; 4 sessions | **16 users**; **15 active**; **1 session** · reference: 34 · 34 · 4 |
| F10 Quote builder | ₹1,250 + ₹520 line items | **Discovery & Scoping ₹15,000 + UI/UX Design ₹25,000 = ₹40,000** (within Samira's ₹20,000–₹40,000 budget) |

### B. Missing screens added as clearly-labeled preview sections

| Page | Added |
|---|---|
| F07 Notifications | Broadcast · Delivery report · Platform log · Send |
| F12 Project delivery | Add milestone · Upload deliverable · Deliverable preview · Analytics · Archive confirmation · Change operator · Update status · Use as template · Record manual payment · Daily progress · Milestones & files · Daily template form |
| F21 Blog | Pending · Reported · Card view |
| F22 Portfolio | New item · Edit item |
| F23 Media | Folders · Analytics · Asset details · Share link · Edit metadata · List view |
| F24 System config | Operator profile (Riya Kapoor) with email, phone, timezone, language, currency, theme and notification settings |

Notification templates were already reachable through the **Notifications 52** channel switcher in F24; the "51 unavailable" note was corrected to "52 available".

### C. API references

- Added a clear note in F04: legacy `/admin/*` paths are shown as captured; published routes use `/api/v1/admin/*` (or `/api/*` for dashboard and health).
- Corrected the endpoint count to **540 published endpoints across 18 specs** with the captured **157** kept as a reference.
- Removed the internal "inventory mismatch / 199 vs 157" QA note.
- Verified the media (50 paths), blog, payments, messaging, system, analytics and client-hub references against the specs.

### D. Internal / lab text removed

All remaining "captured", "screenshot", "shot 0xx", "DOM 1xx", "lab", "gallery", "winner", "ranking", "provenance", "baseline + tie-out", "source view" and "sibling version" wording was replaced with client-facing language. Internal screenshot numbers (052, 053, 089, 018, 021), DOM references and runbook ticket IDs were removed.

### E. Verification (re-run after all edits)

| Check | Result |
|---|---|
| Pages loaded | 27/27 |
| Console / page errors | 0 |
| Failed requests | 0 |
| Broken local links | 0 |
| JS syntax errors | 0 |
| Horizontal overflow at 1440px | 0 |
| Duplicate IDs | 0 |
| Images missing `alt` | 0 |
| Unnamed buttons | 0 |
| Unlabeled form controls | 0 |
| External dependencies | none |

Screenshots were re-captured for all 27 pages in `screenshots/`.

---

## Remaining nice-to-have — all fixed

1. **F24 theme toggle** — added a visible **Theme** button at the top of the rail. Verified it toggles dark mode (`js shared-chrome-ready` → `js shared-chrome-ready dark`). Also removed the legacy `data-legacy-dashboard-chrome` attributes that were hiding the page's own rail and topbar.
2. **F12 client selector** — added a two-tab selector (**Razorpay Settlement Reconciliation Engine** / **Khandesh Spice D2C E-Commerce Store**) with separate casebooks. Verified the tabs switch panels correctly.
3. **F09 revised badge** — added a purple **Revised** badge on the original Priya quote row. Verified it renders.
4. **F13 refund row** — added Ananya Iyer's **₹500.00 refund** row (goodwill credit · duplicate NEFT memo) to the payments table. Verified it renders.
5. **F04 legacy paths** — rewrote all **73 legacy `/admin/*` paths** to published routes (`/api/v1/admin/*` for admin services, `/api/*` for dashboard and health). Updated the reference note. Verified no non-published `/admin/*` paths remain.
6. **Interactive panels** — the new preview cards in F07, F12, F21, F22 and F23 now open an accessible modal with the panel title and description. Verified the modal opens with the correct content.

## Final verification (after the remaining fixes)

| Check | Result |
|---|---|
| JS syntax errors | 0 |
| Broken local links | 0 |
| Console / page errors | 0 |
| Failed requests | 0 |
| Horizontal overflow | 0 |
| F24 theme toggle | works (rail button, visible at desktop) |
| F12 project selector | works (two panels) |
| F09 revised badge | renders |
| F13 refund row | renders |
| F04 published paths | 73 rewritten, 0 legacy remaining |
| Preview modal | opens with title + description |
| Screenshots | 27/27 re-captured |

---

## Run

```bash
cd final-product
python3 -m http.server 8000
```

Open `http://localhost:8000/` for the page index. `screenshots/` has the full-page captures; `_internal/` has build records.

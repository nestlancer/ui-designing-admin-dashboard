# F15/F16 user-data reanalysis — 2 November 2026

## Scope and provenance
The source is the historical local repository, not a live system. Each named screenshot below was individually reopened to avoid mixing results from parallel image calls. The first analysis mistakenly reversed filenames 002 and 111; that is corrected in the F16 prompt and baseline. The 20-row directory is from screenshot 064 and HTML 79. Five additional captured profile records are from HTML 80–84; HTML 156–161 repeat Karthik's profile or its dialog states. HTML 59 and 60 were loading captures and do not establish profile content; HTML 142 is a notification capture, not a user profile. Audit metadata and prior baseline notes should still be consulted for failed requests.

## Screenshot-by-screenshot
| Capture | Visible identity/state | Key content and qualification |
|---|---|---|
| 064 | Users directory | 34 total, 34 active, 34 new this month, 0 suspended; 20 page-one rows of 34. Disabled Add explains client registration. Counts are historical and definitions/freshness unknown. |
| 002 | **Riya Kapoor**, ADMIN | Only administrator; demotion, suspension and deletion blocked, admin impersonation unavailable. Eight sessions reported, five on visible page. 510 activity events reported, ten visible. Full user ID is visually truncated: no exact UUID is asserted. |
| 108 | Arjun page, deactivate dialog | “This soft-deletes the account (sets deletedAt). The user can be restored later.” |
| 109 | Arjun edit dialog | firstName, lastName, email; cancel/save. |
| 110 | Arjun impersonation dialog | Reason, confirmation, new client tab, admin tab retained, 60-minute session and audit are captured UI claims. They are not executed by this static prototype. |
| 111 | **Arjun Mehta**, USER | 26 requests, five projects, ₹81,500, last active —; six devices reported/five visible; 602 activity events reported/ten visible. |
| 112 | Arjun, single-device revoke | “This will sign the user out of this device.” Not an end-all confirmation. |
| 113 | Arjun set password | New password and confirmation; “Minimum 8 characters. Updating the password ends all sessions.” |
| 114 | Arjun user-hub messages | Separate F05 hub, no message records in capture; no global-inbox rows are attributed to Arjun. |
| 115 | Arjun user-hub payments | Eleven payments reported; chips show 5 pending, 3 created, 3 completed, while hub header separately says 8 pending. Do not silently reconcile. |
| 116 | Arjun user-hub projects | Five displayed project records; header says four active. |
| 117 | Arjun user-hub quotes | 22 reported: 10 draft, 7 viewed, 5 accepted; visible table is partial. |
| 118 | Arjun user-hub requests | 26 reported: 10 submitted, 7 quoted, 5 converted-to-project, 4 draft; visible table is partial. |
| 119 | Arjun user-hub trust | Six active session IDs shown; do not join those IDs to screenshot 111 device/time rows without evidence. |

## Profile coverage
| Reference | Identity | Requests / projects / paid | Session total | Activity reported / rows transcribed |
|---|---|---|---|---|
| HTML 80 / 156 | Karthik Menon | 1 / 0 / ₹36,000 | 0 | 24 / 10 |
| HTML 81 | Sandeep Chopra | 1 / 0 / ₹21,600 | 0 | 17 / 10 |
| HTML 82 | Audit P03 | 0 / 0 / ₹0 | 0 | 0 / 0 |
| HTML 83 | Audit TwoFA | 0 / 0 / ₹0 | 0 | 2 / 2 |
| HTML 84 | Audit P15C | 0 / 0 / ₹0 | 0 | 7 / 7, including one failed login |
| Screenshot 111 | Arjun Mehta | 26 / 5 / ₹81,500 | 6; five visible | 602 / 10 |
| Screenshot 002 | Riya Kapoor | 0 / 0 / ₹0 | 8; five visible | 510 / 10; IP text was truncated and is marked not legible |

All seven are selectable in F16. The five with exact captured directory IDs link from F15; Arjun and Riya are separately selectable because they are not on HTML 79's first page. Riya's `reference-riya-002` is a local selector key, **not** a user UUID. Equal timestamp/IP rows are preserved as separate visible rows rather than deduplicated or linked to specific devices. Missing pages and activity are not fabricated. F05 V6 contains identity-scoped hub records for Arjun and profile-only Karthik; other profile selections do not link to someone else's hub.

## API implications
See `OPENAPI-INVENTORY.md` for every operation in `users.openapi.json` (40 paths), relevant user/audit/impersonation operations in `admin.openapi.json`, parameter names, bodies, response codes and schemas. The specs are service-local and not live verification. List and search are separate; no administrator create endpoint appears on `/api/v1/admin/users`. Admin role/status/update and password endpoints specify a `user-agent` header, so browser integration must reconcile that contract with browser-controlled headers. Admin bulk reason is described as compulsory but is absent from schema's required list; the lab requires one without asserting backend enforcement. The auth-activity table is not the administrator audit stream. Sole-admin protection, ACL, deletion semantics, audit writes and response fields must be verified server-side.

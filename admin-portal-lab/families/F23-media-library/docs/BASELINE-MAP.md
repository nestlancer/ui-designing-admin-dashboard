# F23 · Media Library — Baseline map (Gate S)

**Sources:** 9 production screenshots (`Nestlancer-admin-screenshots/admin/`), 7 HTML DOM captures (`nestlancer-admin-pages-html/`), `audit-metadata.json`, `nestlancer-admin-pages-html/README.md`. Captured UTC 2026-10-30 13:46–13:55. All 9 shots opened and all 7 DOM states parsed.

## Shot-by-shot transcription

| Shot | Size | What is captured |
|---|---|---|
| `018-media.webp` | 1440×1000 | H1 "Media Library"; subtitle "Browse public and private storage, preview assets, and manage quarantine and analytics."; tabs Storage / Quarantine / Analytics; Browse rail All storage / Public library / Private; "Drag & drop to upload" + "Images, documents, video, and archives" + "Browse files"; type chips All types / IMAGE / DOCUMENT / VIDEO / ARCHIVE; source chips All sources / Message attachments / Projects / Deliveries / Uploads only / Folders; search "Search filename, mime, or ID…"; All statuses / Newest / grid+list / "View all files"; bucket cards Public "118 files · 19 MB" ("Blog, portfolio, and other published-site assets") and Private "28 files · 30.91 KB" ("User-owned private storage"); chrome Riya Kapoor / `admin@nestlancer.com` / © 2026 Nestlancer Admin. |
| `019-media-analytics.webp` | 1440×1000 | KPI strip Total files 146 · Storage used 19.3 MB · Quarantined 0 · Processing 0. Files by type: `image/jpeg` 118 (19 MB), `text/markdown` 1 (431 B), `application/zip` 12 (4.2 KB), `application/pdf` 15 (304.5 KB). "Uploads (last 30 days)" = baseline dashes plus one prominent bar, **no labelled series**. Storage maintenance: "Preview unattached private media (no context, excluding published site assets) before cleanup. Dry run does not delete anything." + Preview cleanup / Run cleanup. |
| `020-media-folders.webp` | 1440×1000 | "All buckets · folder", Folders source selected, spinner + "Loading…"; **no folder rows**. |
| `021-media-quarantine.webp` | 1440×1000 | Exact empty state "No quarantined media" / "Files flagged by security scanning will appear here for release, reprocess, or delete." No review rows. |
| `073-media-asset-details-and-preview.webp` | 1440×2215 | Modal `sandeep-chopra-gps-fleet-gps-fleet-staging-review.zip`; "No preview available" / "Open file"; READY · PRIVATE · 353 B; MIME `application/zip`; Context `project: 01a10a2e-4f64-740a-b4ca-0d9ab8dc1899`; Media ID `01a10a2e-6e69-71b8-ad19-25eb4e081e2f`; Uploader `admin@nestlancer.com` + View user; Uploaded `10/5/2026, 3:49:36 AM`; Edit metadata; "2 references" + "This file is linked elsewhere. Deleting without force may fail or break content." (project row + Deliverable "Staging build shared for progress review (work in progress; not final delivery)." + `01a10a2e-6efe-71e5-ab46-a7328d4436bc`); "No active share links." + Create link; Download / Replace / Reprocess / Delete; blurred asset grid behind. |
| `074-media-browse-all-files.webp` | 1440×2215 | All-buckets grid; "145 files · previews load as you scroll"; "Select page" checkbox; 4-column grid of 24 generic ZIP / DOC / TXT placeholder tiles with READY, "File ACL: PRIVATE", Riya Kapoor, truncated filenames; list/grid toggle; "Back to folders"; "Page 1 of 7 · 146 files" + Previous / Next. |
| `075-media-create-share-link-dialog.webp` | 1440×2215 | "Create share link"; copy "Describe why you are sharing sandeep-chopra-gps-fleet-gps-staging-review.zip. Each purpose gets its own link with a timeout — expired links are revoked automatically."; "Purpose / statement" (placeholder "e.g. Client preview for milestone 2 — expires after re…"); "Link timeout" "7 days — auto-revoke after expiry"; "Password (optional)" "Enter a password, or leave blank"; Cancel / Create link. |
| `076-media-edit-asset-metadata-dialog.webp` | 1440×2215 | Same modal in edit mode: Filename, Display name, Description ("Receipt for milestone 2"), Visibility PRIVATE, Save metadata, Cancel edit; References section retained. |
| `077-media-list-view.webp` | 1440×2065 | Table columns FILE / UPLOADER / TYPE / SIZE / STATUS / ACTIONS with a "Details" button per row; 21 visible rows; "Page 1 of 7 · 146 files"; size values 353 B / 20.3 KB / 356 B / 319 B / 431 B / 20.4 KB / 539 B; MIME values `application/zip`, `application/pdf`, `text/markdown`; READY badges. **Filename and uploader text overlap in the captured rendering** — a real hierarchy defect. |

## DOM states (7/7 read)

`119-media-index.html`, `120-media-index-tab-storage.html`, `121-media-index-tab-quarantine.html`, `122-media-index-tab-analytics.html`, `177-media-index-state-browse-files.html`, `178-media-index-go-media.html`, `187-media-index-go-quarantine.html`.

- **0 asset rows and 0 `<table>` elements in every F23 DOM capture**: the grid is JS-rendered, which is why report §2.2 says no asset links could be clicked. Cards are shot-transcribed.
- DOM 119/120/177 expose controls exactly: file input, search input, status select `All statuses / READY / PROCESSING / QUARANTINED / FAILED / UPLOADING`, sort select `Newest / Oldest / Largest / Name A–Z`, bucket cards.
- DOM 122 analytics text matches shot 019. DOM 121 + 187 contain the exact quarantine empty state. DOM 178 (`/media?contextType=uploads`) shows "Loading…" and "All buckets · uploads".
- Metadata: `buttonCount` 37 (storage) / 15 (quarantine) / 17 (analytics); `inputCount` 4 / 0 / 0; `failedRequests: []` on 119–122, failed `_rsc` prefetch noise on 177/178/187; one CSP inline-style console error on five captures; `99+` notifications and messages badge **21** on 119–122 but **20** on 177/178/187.

## Tie-outs (kept)

- Public 118 + Private 28 = **146** files; analytics type rows 118 + 1 + 12 + 15 = **146**; footer "146 files" agrees.
- 19 MB + 431 B + 4.2 KB + 304.5 KB ≈ **19.3 MB** storage used.
- Quarantined **0** matches the captured empty state; Processing **0** has no visible processing card.

## Conflicts (surfaced, never repaired)

| # | A | B | Treatment |
|---|---|---|---|
| 1 | Private "28 files · **309.1 KB**" (DOM 119/120/177) | "28 files · **30.91 KB**" (shot 018) | Both printed with provenance |
| 2 | "**145** files · previews load as you scroll" (shot 074) | "Page 1 of 7 · **146** files" (shots 074/077) | Both printed |
| 3 | Header messages badge **21** (DOM 119–122) | **20** (DOM 177/178/187) | Capture-time drift, no current value claimed |
| 4 | UI status select lacks PENDING | Swagger status enum includes `PENDING` | UI labels frozen; spec documented in API-MAP |
| 5 | "Display name" captured field | `AdminUpdateMediaDto.originalFilename` | Plausible mapping, unverified — no claim |

## Content lock

Tab labels, filter chips, status/sort vocab, search placeholder, upload copy, bucket copy, analytics figures, dialog fields, drawer fields and the two captured references are frozen. Card identities come from 12 filenames transcribed from 074/077 (truncated in capture); no other asset ID, uploader, date, verdict, thumbnail, SLA or metric is asserted. Generic ZIP/PDF/TXT placeholders are used because no visual previews were captured.

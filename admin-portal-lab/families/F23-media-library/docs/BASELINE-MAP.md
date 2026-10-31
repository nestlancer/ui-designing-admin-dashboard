# F23 Baseline Map — Media Library

## GATE S (F23)
```
## GATE S (F23) · Shots: 9/9 · HTML: 7/7 · Dialogs transcribed: YES · Gate: PASS
```

### Frozen hub (119 / 018)
- H1: **Media Library**
- Lede: Browse public and private storage, preview assets, and manage quarantine and analytics.
- Tabs: **Storage** · **Quarantine** · **Analytics**

### Storage (120 / 074 / 077)
- Browse: **All storage** · **Public library** · **Private**
- Upload: **Drag & drop to upload** · Images, documents, video, and archives · **Browse files**
- Type filters: **All types** · IMAGE · DOCUMENT · VIDEO · ARCHIVE
- Source filters: **All sources** · Message attachments · Projects · Deliveries · **Uploads only**
- **Folders** toggle · Status: All statuses · READY · PROCESSING · QUARANTINED · FAILED · UPLOADING
- Sort: **Newest** · Oldest · Largest · **Name A–Z** · **View all files**
- Buckets: **Public** 118 files · 19 MB · **Private** 28 files · 309.1 KB

### Quarantine (121 / 021)
- Empty: **No quarantined media**
- Copy: Files flagged by security scanning will appear here for release, reprocess, or delete.
- Lab: demo fixtures toggle (C17/A1 review craft)

### Analytics (122 / 019)
- Total files **146** · Storage used **19.3 MB** · Quarantined **0** · Processing **0**
- By type: image/jpeg **118 (19 MB)** · text/markdown **1 (431 B)** · application/zip **12 (4.2 KB)** · application/pdf **15 (304.5 KB)**
- Uploads last 30d: **2026-10-05: 146 uploads** (other days 0 in capture)
- **Storage maintenance** section (spec-backed)

### Drawer + dialogs (073 / 075 / 076 — shot baseline)
- Asset detail: preview, filename, type, size, visibility, source context, uploader, hash (mono), usage links
- Actions: **Create share link** · **Edit metadata** · Delete (preview + confirm)
- Share link: expiry, optional password, copy URL
- Edit metadata: display name, alt text, tags, visibility

### Upload (spec-only)
- `POST /api/v1/media/upload/request` → direct/confirm flow; progress/done/failed states in lab

### Live gaps (fixed in lab)
- Asset cards had **0** click selectors — all variants wire card → detail drawer.

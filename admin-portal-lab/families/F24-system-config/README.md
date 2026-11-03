# F24 · System Configuration

Five hand-authored design directions. **Only F24 was executed**; F01–F23 remain preserved and F25 was not run.

## Open

Use the existing **Admin Portal Lab** live preview on port8131, then open:

`/admin-portal-lab/families/F24-system-config/`

Or start a server from the repository root:

```sh
python3 -m http.server 8131 --bind 0.0.0.0
```

The [visual review collection](index.html) links the five directions. The operational pages use a **relative-asset offline bundle**: keep this folder and the lab's shared files/assets together. Keep the full lab if you want shell links to earlier families to work. Downloading just one variant HTML file is not a standalone operational preview.

| Variant | Direction | Default |
|---|---|---|
| [V1](V1/index.html) | Control desk · recommended general-purpose baseline | Health |
| [V2](V2/index.html) | Service atlas · persistent captured-health context | Health |
| [V3](V3/index.html) | Change studio · one key + review + local ledger | Config |
| [V4](V4/index.html) | Operations register · dense template register + drawer | Templates |
| [V5](V5/index.html) | Signal flow · chapters + motion-safe technical diagram | Health |

Every design covers all six workspaces, both themes, a persistent desktop icon rail/mobile drawer, local permission simulation, guarded edits and a local change ledger. Theme: `?theme=light|dark`; workspace: `?tab=health|config|features|jobs|templates|operations`. Preferences reuse `nl-theme` and `nl-rail`. Changes are in-memory and reset on reload; theme/sidebar preferences may persist.

**No production side effects.** No email sent, cache flushed, session revoked or job retried. No server ACL/audit result is asserted. DEMO jobs and log-request metadata are labelled. Template previews are local sandbox renders, not server-renderer parity.

The capture reports 62 templates but only 11 identities are recoverable. 51 notification identities and 9 email bodies remain unavailable. Those gaps are disclosed, never filled with invented data. See the [static no-JavaScript source ledger](source-view.html).

## Evidence

- [Delivery, verification and weight](docs/DELIVERY-REPORT.md)
- [Printed gate blocks](docs/GATE-EVIDENCE.md)
- [Source reconstruction](docs/BASELINE-MAP.md)
- [Report interpretation](docs/REPORT-STUDY.md)
- [Exact Swagger mapping](docs/API-MAP.md)
- [Research](docs/TEMPLATE-RESEARCH.md) / [visual study](docs/RESEARCH-VISUALS.md)
- [Concepts and difference matrix](docs/CONCEPTS.md)
- Verification summary: 70 width/theme cells, 495 interaction assertions, 120 axe scans, zero detected violations; 415 protected hashes unchanged. Iframe contents excluded; no manual accessibility certification. Ephemeral QA screenshots were not retained.

Each effective page is 129–141KB raw / 38–41KB estimated gzip: over the 70KB soft target, under 250KB. No CDN/font requests. Exact bytes and the packaging exception are in the delivery report. Owner approval remains pending.

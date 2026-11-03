# F24 · Five hand-authored concepts (pre-build revision)

All concepts share: frozen H1/subtitle/4summarycells, six workspace labels and counts, source keys/flags/jobs/templates/ops text, exact shared teal tokens, responsive collapsible shell, dark mode, local permission gate, confirm before EVERY mutation, local-only empty-by-default ledger.62templates is a total, not62recoverable records;51notifications remain explicitly unavailable. No count-up through false business numbers, invented live freshness, or seeded audit actors. No webhook form (F25).

## V1 · Control desk — minimal, faithful control surface

**Keeps:** captured six-tabs IA, Health four-card row, collapsed diagnostics, cache/log pair, all twelve named JSON keys,12flags,12jobs,10email+oneknownnotification. **Fixes:** C3/C5/C9/C12/C18/C20. **Adds:** A15 local read-only gate + separate change ledger; structural template closure.

```
[52px shell / 232px collapsible nav]
[SYSTEM / System Configuration] [Snapshot details]
[Service | Config14 | Flags5/12 | Templates62]
[Health / Config / Features / Jobs / Templates / Operations]
[4 quiet status cards]
[Diagnostics, progressive disclosure]
[Cache management             | System logs]
[Local change ledger, initially empty]
```

**Signature:** per-key edit→validated diff→reason→confirm local change. Dialog Cancel is initially focused on destructive actions; permission denial is explicit. **Operator story:** overview→one tab→one targeted action with minimal visual noise. **API basis:** all mapped system paths, gateway captured diagnostics, separate notification-template contract; no map-style config PATCH. **Refs:** Carbon table anatomy, Drupal library→preview, GOV.UK consequence warning. **Shell:** fluid full-available width, named compact icons, mobile native-dialog nav. **Dark/phone:** quiet token card surfaces, 2×2summary→stacked controls, one-DOM table cards. **Risk:** minimal can resemble production; use stronger summary typography, precise row hierarchy, compact audit footer and deliberate whitespace rather than copying capture geometry.

## V2 · Service atlas — persistent health spine

**Keeps/fixes/adds:** same frozen data and6Citems, A15 plus local ledger. **Default:** Health.

```
[page identity + compact summary strip]
[teal health spine (280px)] [six-tab inspect workspace (fluid)]
[Healthy / admin          ] [Diagnostics / dependencies-as-captured]
[Gateway Reachable        ] [Cache / logs, stacked when narrow]
[Maintenance Off          ] [Config/Features/Jobs/Templates/Ops replace right]
[Flags5/12                ] [context stays visible on left]
```

**Signature:** navigating workspaces preserves machine context; Load diagnostics reveals captured payload, Copy with fallback. **Story:** operator distinguishes gateway reachability from admin identity before changing cache or maintenance. **API basis:** GET `/api/health` vs `/api/v1/health/*` explicit; health data historic, not live. **Refs:** Grafana overview→drill-down; GoogleSRE symptom vs internals; Unleash operational-flag risk. **Shell:** global collapsible sidebar plus smaller in-canvas service spine, no nested desktop drawer. **Dark/phone:** spine theme-aware teal tint, becomes compact horizontal summary above tabs on phone. **Risk:** two nav rails could squeeze workspace; collapse spine contents below1100px and stack below760px. Never sticky over mobile content.

## V3 · Change studio — guided config and local ledger

**Keeps/fixes/adds:** same source story and6Citems; A15 edit-permission preview, audit rail. **Default:** Config (direct query can open any tab).

```
[System Configuration                | permission preview]
[small capture strip]
[horizontal six-tabs]
[config index180px] [chosen key / JSON edit, fluid] [local ledger260px]
[SYSTEM8         ] [read source fragment → author local draft]
[REQUESTS1       ] [review difference → confirm + reason]
[OTHER3          ] [Operations boundary,2managed]
```

**Signature:** pick one key, see source completeness, edit valid JSON, review exact before/after. Partial fragments never masquerade as complete JSON. **Story:** newer operator can change pagination safely without scrolling through a JSON wall or inferring MIME lists. **API basis:** `UpdateSystemConfigDto {key,value,description?}`; unknown ranges not invented. **Refs:** Carbon progressive row context; LaunchDarkly friendly name/secondary ID; GOV.UK consequences. **Shell:** same chrome; local key index is a named list, six-tabs remain standard ARIA. **Dark/phone:** ledger stacks below at≤1180; index becomes wrapping select-like buttons at≤700. **Risk:** no key can disappear during search; provide explicit no-match+Reset and keyboard focus management. Don't retain stale review after editor changes.

## V4 · Operations register — dense workset with inspector

**Keeps/fixes/adds:** all source content;6Citems, A15 denial/local ledger. **Default:** Templates; Jobs one click away.

```
[compact title / terminal utility line / source scope]
[Service verdict] [Config14] [Flags5/12] [Templates62]
[segmented six-tabs]
[search / channel / group / sort / shown-count]
[one compact template register, mono IDs, sticky heading]
[page-size5/10, local pagination]
[Edit & preview → right-side native modal drawer]
```

**Signature:** table→drawer retains search/order/page/scroll;9uncapturedbodiesstayunknown. **Story:** find verification by name/group, inspect body+preview, validate/save local subject then return to same row; optional job demo isolated from12capturedjobs. **API basis:** email GET/PATCH + preview/test with missing request-body honesty; notification PATCH separate path. **Refs:** Carbon compact density; BullBoard status-aware actions; Resend channel/transactional grouping. **Shell:** compact meta, same52/232pxchrome; table target sizes grow on coarse pointers. **Dark/phone:** card fallback uses same table DOM; drawer100%width at≤700; no tiny horizontal table. **Risk:** dense doesn't mean11pxbody;13pxbody/12pxmeta and44pxtouch controls remain.

## V5 · Signal flow — choreographed overview→inspect→review

**Keeps/fixes/adds:** same frozen content and6Citems; A15 local gate/ledger; no manufactured business data. **Default:** Health.

```
[page title / numbered margin annotation]
[captured summary, asymmetrically weighted service]
[indexed horizontal chapter tabs 01…06]
[Health: central admin node + four source signal tiles]
[Inspect diagnostics] → [Cache/log controls] → [local receipt stage]
[Templates opens full-window split editor / preview]
```

**Signature:** restrained IO entrance stagger, panel crossfade, spring thumb AFTER confirmation, full-window editor transform. No count animation, fake processing rates, ping implying live health, background neon or gradients. **Story:** overview stays legible; risky changes have explicit review stage and a single unambiguous local receipt. **API basis:** identical endpoints, no extra motion APIs. **Refs:** Grafana purposeful narrative; GoogleSRE distinct signals; Drupal preview-before-test. **Shell:** same production-minded chrome; layout art is technical connectors/outlined teal only. **Dark/phone:** diagram reflows into a linear list, connectors hidden; reduced-motion removes transforms/stagger and preserves controls. **Risk:** motion cannot hide content if JS/IO fails; content visible by default and animation progressive-enhancement only.

## Table1 · Coverage / interaction / contract

|Variant|Keeps|Fixes|Adds|Signature|Primary contract emphasis|
|---|---|---|---|---|---|
|V1|All6workspaces|C3/5/9/12/18/20|A15preview+ledger|Quiet per-key review|system config/flags/ops|
|V2|All6workspaces|same6|same|Persistent service context|adminhealth + gateway|
|V3|All6workspaces|same6|same|Guided key→diff→reason|single-key config PATCH|
|V4|All6workspaces|same6|same|Table→context-retaining drawer|email vs notification templates|
|V5|All6workspaces|same6|same|Chapters→full-window review|same contracts; motion local|

## Table2 · Difference test

|Variant|Ageometry|Bpriority|Cnarrative|Dsurface/density|Einteraction|
|---|---|---|---|---|---|
|V1|Full-width ledger|Balanced verdict|Tab-led|Minimal/quiet|Small review dialogs|
|V2|Asymmetric persistent spine|Health-first|Context+inspection|Airy/tinted spine|Context retention/copy|
|V3|Three-pane guided record|Change-first|Choose→edit→review|Document/audit|Field validation+diff|
|V4|Compact register|Workset-first|Queue→inspector|Dense/ruled|Sort/page/drawer|
|V5|Signal diagram+chapters|Overview→safe action|Indexed staged narrative|Technical/flow|IO/crossfade/full-window|

Every pair differs≥3axes includingAorC. No sharedA+Cpair. Colour is deliberately identical. Differences must be verified visually, not merely asserted by this matrix.

## Table3 · Scope of acceptance

SixCitems5/5;A15localpermissionpreview5/5, separateledger5/5(≥3required);minimalV1,healthV2,config/guideV3,dense/worksetV4,motionV5. NoP1casequeuebulkclaim. Template workflow5/5; fulltemplatecontent **11/62known,51unavailable** in5/5. Source limitation is not a reason to invent records or claim data closure.

```
GATE1 · F24
Five concept cards/sketches · difference plan≥3axes · sixCitems5/5 · A15planned5/5
PASS for build plan with explicit data limitation
```

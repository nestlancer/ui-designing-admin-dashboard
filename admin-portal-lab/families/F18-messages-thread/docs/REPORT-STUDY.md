# F18 Report Study

## GATE R (F18)
```
## GATE R (F18) · MD: YES · XLSX: 10/10 · C: C3 C5 C9 C12 C18 C20 · A: members closure · KEEP: YES · Gate: PASS
```

### Findings (Messages · thread slice)
- Coverage table: Messages **13 OK** — inbox, threads, reply/edit/mark-read, new-direct; `/new/group` **404**; **members panel unverified** in automation (shot **079** is baseline).
- Gap row: group members (079) — no route/state change via automation; screenshot remains baseline.
- **C9** — Mono refs/timestamps (`font-mono` for IDs + **Oct 5 3:48 AM**).
- **C3/C5/C12/C18/C20** — AA text, teal-only, hierarchy, dark parity, logo alt.

### CHANGE (F18)
| ID | Quote / intent |
|---|---|
| C9 | Mono + full thread ID on hover; timestamps monospace |
| C3 | AA-safe message body + badge contrast |
| C5 | Teal-only scheme |
| C12 | Thread header readable; stream vs composer hierarchy |
| C18 | Dark parity for bubbles + members panel |
| C20 | Nestlancer mark `alt` |

### ADD (family craft)
| Item | Priority | Coverage |
|---|---|---|
| **Members closure** — every thread shows who's in the room + roles + close room | P1 | 5/5 |

### KEEP
- Stream honesty (frozen bubbles + system copy only from captures/spec).
- Composer controls: Reply · Edit · Delete · Flag · Send · Search in conversation.
- Microcopy + teal identity.

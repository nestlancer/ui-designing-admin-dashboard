# F15 Template Research — User Directories

## GATE T (F15)
```
## GATE T (F15) · Queries: 9 · Refs: 8/≥8 · Mapped: YES · No invented: YES · Order: YES · Gate: PASS
```

Research ran **after** Gate S/R/A. Each ref maps to a F15 requirement — no invented product features.

| # | Reference | What we borrowed | F15 mapping |
|---|---|---|---|
| 1 | **Tabler** (admin tables) | Filter row + “Showing x–y of n” pagination grammar | C19 pagination chrome |
| 2 | **Shadcn Admin** (RBAC user table) | Role/status columns + row actions | Frozen columns + View → |
| 3 | **Mercury** (ops dashboards) | Mono IDs/emails, hover full value | C9 mono emails |
| 4 | **Retool** (user admin) | Bulk select → action bar | A1 bulk bar |
| 5 | **Linear** (keyboard lists) | j/k focus, x select, e act | A2 keyboard triage |
| 6 | **Stripe Dashboard** (customers list) | KPI strip + stale “as of” honesty | C16 freshness flag |
| 7 | **GitHub org members** | Suspended/gated destructive confirm | Suspend confirm in A1 |
| 8 | **Apex Admin** (TanStack table) | Dense role filters + search | Status/Role/Clear filters |

### Queries used
1. admin user directory table bulk actions  
2. RBAC user list filter role status  
3. data table pagination showing entries  
4. keyboard triage list j/k shortcuts  
5. KPI card stale metrics as-of  
6. user management mono email display  
7. operator cannot create user registration honesty  
8. dark mode admin data table  
9. mobile card fallback directory list  

### Anti-patterns rejected
- Fake “user created successfully” without POST create in spec  
- Invented page-2 identities when HTML capture only has 20 rows  
- Correcting 34/34/34 KPIs to “look realistic”

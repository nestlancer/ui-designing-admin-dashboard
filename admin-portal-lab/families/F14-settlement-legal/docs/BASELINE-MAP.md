# F14 Baseline Map — Settlement Accounts + Company Legal

## GATE S (F14)
```
## GATE S (F14) · Shots: 4/4 · HTML: 2/2 · Fields transcribed: 28 · Content frozen: YES · Gate: PASS
```

### Routes
| Route / state | Primary HTML | Screenshot |
|---|---|---|
| `/payments/accounts` | `182-payments-accounts.html` | `041-payments-accounts.webp` |
| `/payments/company-legal` | `183-payments-company-legal.html` | `042-payments-company-legal.webp` |
| Edit settlement account (form) | shot+spec | `103-settlement-accounts-edit-account-form.webp` |
| Edit legal profile (form) | shot+spec | `070-company-legal-identity-edit-profile-form.webp` |

Lab combines both routes in-page via tab/switch (accounts · legal).

### Settlement accounts — frozen copy
- **H1:** Settlement accounts
- **Lede:** Bank and UPI details shown to clients for offline transfers. Stored in the database — not in env.
- **Back:** ← Payments hub → F13 gallery `#f13`
- **CTA:** Add account
- **Helper (form):** Primary account appears on invoices; all active accounts are offered at checkout

**Form fields (add / edit):**
| Label | Demo / options |
|---|---|
| Label | Primary settlement — HDFC Current |
| Type | Bank · UPI · Bank + UPI (capture shows BOTH in list) |
| Account holder | Nestlancer Pvt Ltd |
| Bank name | HDFC Bank |
| Account number | 50200012345678 (mask list ••••5678; reveal on edit) |
| IFSC | HDFC0001234 |
| UPI VPA | nestlancer@hdfcbank |
| Instructions for clients | Use the project or invoice reference in the transfer note so we can match payment quickly. |
| Primary (invoices) | checkbox |
| Active | checkbox |
| Actions | Create account · Update account · Cancel edit |

**List — Accounts · 1 configured**
| Column | Frozen row |
|---|---|
| Label | Primary settlement — HDFC Current |
| Type | BOTH / Bank + UPI |
| Details | A/C 50200012345678 · IFSC HDFC0001234 · UPI nestlancer@hdfcbank |
| Flags | Primary · Active |
| Actions | Edit · Disable |

**Empty (honest):** no configured accounts — lab exposes preview toggle; copy states no payout destinations yet.

### Company legal identity — frozen copy
- **H1:** Company legal identity
- **Lede:** GSTIN, PAN, CIN and registered address printed on invoices, receipts and quotations. Leave fields blank to omit them from PDFs.
- **Back:** ← Payments hub
- **CTA:** Add legal profile
- **Helper:** Primary profile is used on all generated tax documents

**Form fields:**
| Label | Demo |
|---|---|
| Label | Primary legal entity |
| Legal name | Nestlancer Pvt Ltd |
| Trade / brand name | Nestlancer |
| GSTIN | 29AABCT1332L1ZV |
| PAN | AABCT1332L |
| CIN | U72900KA2020PTC123456 |
| State | Karnataka |
| State code | 29 |
| Billing e-mail | billing@nestlancer.com |
| Phone | +919876543210 |
| Website | https://nestlancer.com |
| Registered address | 12th Floor, Prestige Tech Park, Outer Ring Road, Bengaluru, Karnataka 560103 |
| Primary (used on PDFs) | checkbox |
| Active | checkbox |
| Actions | Create profile · Update profile · Cancel edit |

**List — Profiles · 1 configured**
| Column | Frozen row |
|---|---|
| Label | Primary legal entity · primary |
| Legal name | Nestlancer Pvt Ltd |
| GSTIN | 29AABCT1332L1ZV |
| Status | Active |
| Actions | Edit · Remove |

### Validation (inline — lab demos shapes)
- Label required on both forms
- IFSC: 4 letters + 0 + 6 alphanumerics (e.g. HDFC0001234)
- GSTIN: 15-char Indian GST pattern demo
- PAN: 5 letters + 4 digits + 1 letter (AABCT1332L)

### Cross-cutting states (every variant)
Empty · skeleton · error banner · saved receipt · dirty/invalid/saving/saved save bar · disable/remove confirm · dark · 375px stack · reduced-motion

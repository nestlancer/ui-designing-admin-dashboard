# F14 baseline — partial capture review

Historical observations only; not a current financial account record. No real account number or tax identifier should be exposed by a demo.

## Settlement accounts
Screenshot `041-payments-accounts.webp` and snapshot `182-payments-accounts.html`: heading Settlement accounts; helper “Bank and UPI details shown to clients for offline transfers. Stored in the database — not in env.” Add account; helper “Primary account appears on invoices; all active accounts are offered at checkout”. Form labels: Label, Type (Bank, UPI, Bank + UPI), Account holder, Bank name, Account number, IFSC, UPI VPA, Instructions for clients, Primary (invoices), Active, Create account. Accounts section states 1 configured; columns Label, Type, Details, Flags; actions Edit and Disable. Historical source showed an unmasked number; improved UI should mask by default.

## Company legal identity
Snapshot `183-payments-company-legal.html`: heading Company legal identity; helper “GSTIN, PAN, CIN and registered address printed on invoices, receipts and quotations. Leave fields blank to omit them from PDFs.” Add legal profile; helper “Primary profile is used on all generated tax documents”. Form labels: Label, Legal name, Trade / brand name, GSTIN, PAN, CIN, State, State code, Billing e-mail, Phone, Website, Registered address, Primary (used on PDFs), Active, Create profile. Profiles section states 1 configured; columns Label, Legal name, GSTIN, Status; actions Edit and Remove.

## Edit states
Screenshots 070 and 103 preserve the same fields as their add forms. In 070, `Edit legal profile` replaces the add heading; actions are `Update profile` and `Cancel edit`, with Primary and Active checked. In 103, `Edit account` replaces the add heading; actions are `Update account` and `Cancel edit`, with Primary and Active checked. Screenshot 042 matches the legal add form described above. The screenshots show populated values, but the prototype should not imply these are current or expose the captured financial identifiers.

## Remaining
Inspect audit metadata and reconcile full report findings. Gate S is not yet asserted to pass. No design variants have been built.

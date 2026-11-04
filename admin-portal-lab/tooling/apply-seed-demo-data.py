#!/usr/bin/env python3
"""Replace inaccurate capture/audit demo data in F02–F25 HTML with backend-repo-seeds.

Sources of truth:
  - tooling/seed-catalog.json (built from payloads/demo)
  - Admin: admin@nestlancer.com / Nestlancer Admin (NA)
  - 15 client accounts + their request/quote/project titles & INR totals
"""
from __future__ import annotations

import hashlib
import json
import re
import sys
from pathlib import Path

LAB = Path(__file__).resolve().parent.parent
CATALOG_PATH = Path(__file__).resolve().parent / "seed-catalog.json"
FAMILIES = LAB / "families"

CATEGORY_LABEL = {
    "webDevelopment": "Web Development",
    "mobileApp": "Mobile App",
    "design": "Design",
    "other": "Other",
}

STATUS_LABEL = {
    "submitted": "Submitted",
    "underReview": "Under Review",
    "changesRequested": "Changes Requested",
    "readyToQuote": "Ready to Quote",
    None: "Submitted",
}

QUOTE_STATUS = {
    "accept": "Accepted",
    "sent": "Sent",
    "requestChanges": "Changes requested",
    "revised-pending": "Revised",
    None: "Draft",
}


def load_catalog() -> dict:
    return json.loads(CATALOG_PATH.read_text(encoding="utf-8"))


def stable_id(seed_key: str, prefix: str = "01a1seed") -> str:
    digest = hashlib.sha1(seed_key.encode()).hexdigest()
    return f"{prefix}-{digest[:4]}-{digest[4:8]}-{digest[8:12]}-{digest[12:24]}"


def inr(amount: int) -> str:
    return f"₹{amount:,}.00"


def category_label(raw: str | None) -> str:
    if not raw:
        return "Web Development"
    return CATEGORY_LABEL.get(raw, re.sub(r"([A-Z])", r" \1", raw).strip().title())


def iter_target_html() -> list[Path]:
    out: list[Path] = []
    for fam in sorted(FAMILIES.iterdir()):
        if not fam.is_dir():
            continue
        m = re.match(r"F(0[2-9]|1\d|2[0-5])-", fam.name)
        if not m:
            continue
        for html in fam.rglob("*.html"):
            if "docs" in html.parts:
                continue
            out.append(html)
    return out


def replace_admin_operator(text: str) -> str:
    text = text.replace("Riya Kapoor", "Nestlancer Admin")
    text = text.replace("Preview operator (RK)", "Preview operator (NA)")
    text = text.replace("RK Riya", "NA Nestlancer")  # leftover patterns
    # Avatar / operator mark initials — only in clear operator contexts
    patterns = [
        (r'(<span class="avatar"[^>]*>)RK(</span>)', r"\1NA\2"),
        (r"(<span class=\"avatar\">)RK(</span>)", r"\1NA\2"),
        (r'(<span class="operator-mark"[^>]*>)RK(</span>)', r"\1NA\2"),
        (r"(<span>)RK(</span> Nestlancer Admin)", r"\1NA\2"),
        (r"(aria-label=\")RK Nestlancer Admin", r"\1NA Nestlancer Admin"),
        (r"(aria-label=\")RK,", r"\1NA,"),
        (r"(>|<span>)RK(</span> Nestlancer)", r"\1NA\2"),
        (r"('\\s*)RK('\\s* Nestlancer Admin)", r"\1NA\2"),
        (r'(<span>)RK(</span>) Nestlancer Admin', r"\1NA\2 Nestlancer Admin"),
        (r"avatar\"><span>RK</span>", 'avatar"><span>NA</span>'),
        (r'">RK</span> Nestlancer Admin', '">NA</span> Nestlancer Admin'),
        (r"\(RK\)", "(NA)"),
        (r"\bRK\b(?= Nestlancer Admin)", "NA"),
    ]
    for pat, repl in patterns:
        text = re.sub(pat, repl, text)
    return text


def replace_title_aliases(text: str) -> str:
    # Protect already-correct titles, then expand short aliases.
    text = text.replace("Multi-Branch Clinic Booking", "§MBCB§")
    text = text.replace("Branch Clinic Booking", "Multi-Branch Clinic Booking")
    text = text.replace("§MBCB§", "Multi-Branch Clinic Booking")

    text = text.replace("B2B Wholesale Ordering Portal", "§BWOP§")
    text = text.replace("Wholesale Ordering Portal", "B2B Wholesale Ordering Portal")
    text = text.replace("§BWOP§", "B2B Wholesale Ordering Portal")
    return text


def replace_amount_contexts(text: str, catalog: dict) -> str:
    """Fix known wrong capture amounts tied to seed project titles."""
    title_to_amount = {}
    for u in catalog["users"]:
        for q in u["quotes"]:
            if q.get("requestTitle") and q.get("totalRupees"):
                title_to_amount[q["requestTitle"]] = q["totalRupees"]
        for p in u["projects"]:
            if p.get("title") and p.get("totalRupees"):
                title_to_amount[p["title"]] = p["totalRupees"]

    # Specific known wrong capture pairs (title context nearby)
    known_wrong = {
        "UPI Switch Integration Layer": [
            ("₹36,000.00", inr(title_to_amount.get("UPI Switch Integration Layer", 120000))),
            ("₹36,000", inr(title_to_amount.get("UPI Switch Integration Layer", 120000)).replace(".00", "")),
        ],
        "GPS Fleet Tracking Portal": [
            ("₹21,600.00", inr(title_to_amount.get("GPS Fleet Tracking Portal", 72000))),
            ("₹21,600", inr(title_to_amount.get("GPS Fleet Tracking Portal", 72000)).replace(".00", "")),
        ],
        "Multi-Branch Clinic Booking": [
            ("₹26,000.00", inr(title_to_amount.get("Multi-Branch Clinic Booking", 65000))),
            ("₹19,500.00", inr(title_to_amount.get("Multi-Branch Clinic Booking", 65000))),
        ],
    }

    for title, pairs in known_wrong.items():
        # Only replace amounts that appear near the title (windowed)
        for m in re.finditer(re.escape(title), text):
            start = max(0, m.start() - 80)
            end = min(len(text), m.end() + 120)
            window = text[start:end]
            new_window = window
            for old_amt, new_amt in pairs:
                new_window = new_window.replace(old_amt, new_amt)
            if new_window != window:
                text = text[:start] + new_window + text[end:]
    return text


def replace_user_counts(text: str, catalog: dict) -> str:
    total = catalog["counts"]["totalAccounts"]  # 16
    clients = catalog["counts"]["clients"]  # 15
    # Explicit metric / copy patterns only — avoid CSS hex / bezier values
    replacements = [
        (
            "The 34 / 34 / 34 counts need verification.",
            f"Seed directory: {total} accounts ({clients} clients + 1 admin).",
        ),
        (
            "Historical capture, not live data.</strong> Metrics are from the reference; freshness is unknown. The 34 / 34 / 34 counts need verification.",
            f"Demo seed data from <code>backend-repo-seeds</code>.</strong> Directory shows {clients} clients + Nestlancer Admin ({total} accounts).",
        ),
        ("<span>Total users</span><strong>34</strong>", f"<span>Total users</span><strong>{total}</strong>"),
        ("<span>Active</span><strong>34</strong>", f"<span>Active</span><strong>{clients}</strong>"),
        ("<span>New this month</span><strong>34</strong>", f"<span>New this month</span><strong>{clients}</strong>"),
        (">Total users</span><strong>34</strong>", f">Total users</span><strong>{total}</strong>"),
        (
            "Total users<svg class=\"svg small\"><use href=\"#i-user\"></use></svg></div><strong>34</strong>",
            f'Total users<svg class="svg small"><use href="#i-user"></use></svg></div><strong>{total}</strong>',
        ),
        (
            "New users<svg class=\"svg small\"><use href=\"#i-user\"></use></svg></div><strong>34</strong>",
            f'New users<svg class="svg small"><use href="#i-user"></use></svg></div><strong>{clients}</strong>',
        ),
        ("Total users,34,", f"Total users,{total},"),
        ("New users,34,", f"New users,{clients},"),
        ("1–20 of 34", f"1–{clients} of {total}"),
        ("of 34", f"of {total}"),
        ("original capture: 1–20 of 16", f"seed directory: 1–{clients} of {total}"),  # idempotent cleanup
        ("34 / 34 / 34", f"{total} / {clients} / {clients}"),
        ("34/34/34", f"{total}/{clients}/{clients}"),
        ("users 34/34", f"users {total}/{clients}"),
        ("User totals 34/34", f"User totals {total}/{clients}"),
    ]
    for old, new in replacements:
        text = text.replace(old, new)
    return text


def build_request_rows(catalog: dict) -> list[list]:
    rows = []
    ages = ["2h", "5h", "1d", "2d", "3d", "4d", "5d", "6d"]
    i = 0
    for u in catalog["users"]:
        for req in u["requests"]:
            status = STATUS_LABEL.get(req.get("statusHint"), "Submitted")
            if req["title"] == "Field Sales Dealer Mobile App":
                status = "Draft"
            elif req["title"] in (
                "Patel Digital Agency Website Redesign",
            ):
                status = "Ready to Quote"
            elif req["title"] in (
                "UPI Merchant Collections Mobile App",
                "Live Shipment Tracking Dashboard",
            ):
                status = "Under Review"
            elif req["title"] in (
                "Tally ERP to Cloud Migration",
                "Blockchain-Based Skill Credential Platform",
            ):
                status = "Rejected"
            cat = category_label(req.get("category"))
            if "Mobile" in (req.get("title") or ""):
                cat = "Mobile App"
            if "Landing" in (req.get("title") or "") or "Website Redesign" in (req.get("title") or ""):
                cat = "Design"
            rows.append(
                [
                    stable_id(req["seedKey"], "01a1req"),
                    req["title"],
                    status,
                    cat,
                    u["email"],
                    "Oct 5, 2026",
                    ages[i % len(ages)],
                    1 if i % 2 == 0 else 0,
                ]
            )
            i += 1
    return rows


def build_quote_rows(catalog: dict) -> list[list]:
    rows = []
    ages = [f"{n}d" for n in range(1, 20)]
    i = 0
    for u in catalog["users"]:
        for q in u["quotes"]:
            if not q.get("totalRupees"):
                continue
            rows.append(
                [
                    stable_id(q["seedKey"], "01a1qte")[:16],
                    q["requestTitle"],
                    QUOTE_STATUS.get(q.get("decision"), "Draft"),
                    inr(q["totalRupees"]),
                    u["email"],
                    ages[i % len(ages)],
                ]
            )
            i += 1
    return rows


def js_array(rows: list) -> str:
    def lit(v):
        if isinstance(v, str):
            return "'" + v.replace("\\", "\\\\").replace("'", "\\'") + "'"
        if isinstance(v, bool):
            return "true" if v else "false"
        return str(v)

    parts = []
    for row in rows:
        parts.append("[" + ",".join(lit(v) for v in row) + "]")
    return "[" + ",".join(parts) + "]"


def rebuild_f08_data(text: str, catalog: dict) -> str:
    if "const data=[" not in text and "const data = [" not in text:
        return text
    rows = build_request_rows(catalog)
    # Prefer inbox-relevant (exclude pure drafts optionally keep a few)
    new = js_array(rows)

    def repl(m: re.Match) -> str:
        return m.group(1) + new

    text2, n = re.subn(
        r"(const data\s*=\s*)\[[\s\S]*?\](?=\s*;)",
        repl,
        text,
        count=1,
    )
    return text2 if n else text


def replace_js_array_assign(text: str, decl: str, new_array: str) -> tuple[str, bool]:
    """Replace `const rows=[...]` using bracket depth so nested arrays work."""
    m = re.search(rf"({decl}\s*=\s*)\[", text)
    if not m:
        return text, False
    start_bracket = m.end() - 1
    depth = 0
    for i, ch in enumerate(text[start_bracket:], start_bracket):
        if ch == "[":
            depth += 1
        elif ch == "]":
            depth -= 1
            if depth == 0:
                return text[: m.start(1)] + m.group(1) + new_array + text[i + 1 :], True
    return text, False


def rebuild_f09_rows(text: str, catalog: dict) -> str:
    # Detect quote-list fixtures by shape / leftover capture amounts
    if not re.search(r"const rows\s*=\s*\[\[", text):
        return text
    if "₹1,250" not in text and "₹2,832" not in text and all(
        inr(q["totalRupees"]) in text
        for u in catalog["users"][:1]
        for q in u["quotes"][:1]
        if q.get("totalRupees")
    ):
        # Already seed-shaped
        if "₹75,000.00" in text or "₹59,000.00" in text:
            return text
    rows = build_quote_rows(catalog)
    new = js_array(rows)
    for decl in ("const rows", "let rows", "const data", "let data"):
        text2, ok = replace_js_array_assign(text, decl, new)
        if ok:
            return text2
    return text


def rebuild_f15_users(text: str, catalog: dict) -> str:
    if "capturedUsers" not in text and "audit." not in text:
        # still update metrics / notices via other helpers
        pass

    admin = catalog["admin"]
    users_rows = []
    # Admin first
    users_rows.append(
        [
            admin["initials"],
            admin["email"],
            admin["displayName"],
            "Oct 1, 2026",
            stable_id("admin-nestlancer", "01a1adm"),
        ]
    )
    for u in catalog["users"]:
        users_rows.append(
            [
                u["initials"],
                u["email"],
                u["displayName"],
                "Oct 5, 2026",
                stable_id(u["seedKey"], "01a1usr"),
            ]
        )

    # Rebuild capturedUsers array if present
    if "capturedUsers" in text:
        # Format matching existing: ['AA','email','Name','Oct 7, 2026','uuid'],
        lines = []
        for initials, email, name, date, uid in users_rows:
            lines.append(
                f" ['{initials}','{email}','{name}','{date}','{uid}']"
            )
        body = "[\n" + ",\n".join(lines) + "\n]"
        text, n = re.subn(
            r"(const capturedUsers\s*=\s*)\[[\s\S]*?\](?=\s*;)",
            lambda m: m.group(1) + body,
            text,
            count=1,
        )
        # All seed users have detail pages conceptually — mark first 5 clients + admin
        detail_ids = [users_rows[0][4]] + [r[4] for r in users_rows[1:6]]
        detail_lit = "[" + ",".join(f"'{i}'" for i in detail_ids) + "]"
        text = re.sub(
            r"(const capturedDetails\s*=\s*new Set\()\[.*?\](\))",
            lambda m: m.group(1) + detail_lit + m.group(2),
            text,
            count=1,
        )
        text = text.replace(
            "Historical reference · all 20 captured first-page records",
            f"Demo seed directory · {len(users_rows)} accounts from backend-repo-seeds",
        )
        text = re.sub(
            r"document\.querySelector\('#list-title \+ p'\)\.textContent='[^']*'",
            f"document.querySelector('#list-title + p').textContent='Demo seed directory · {len(users_rows)} accounts from backend-repo-seeds'",
            text,
        )

    # Replace static tbody seed rows that list only a couple of users — leave JS renderer as source of truth
    return text


def rebuild_f06_contacts(text: str, catalog: dict) -> str:
    if "u2@spam.test" not in text and "audit-20261007@" not in text:
        return text
    # Build contact-like rows from first N seed users
    subjects = [
        "Question about delivery timeline",
        "Need GST invoice for last payment",
        "Scope clarification for quote",
        "Follow-up on request status",
        "Interested in a follow-on module",
        "Booking a discovery call",
        "Refund status check",
        "Attachment upload issue",
    ]
    statuses = ["New", "Read", "New", "Read"]
    tags = ["GENERAL", "SALES", "SUPPORT", "GENERAL"]
    parts = []
    for i, u in enumerate(catalog["users"][:8]):
        parts.append(
            "{"
            f"name:'{u['displayName']}',"
            f"email:'{u['email']}',"
            f"subject:'{subjects[i % len(subjects)]}',"
            f"status:'{statuses[i % len(statuses)]}',"
            f"age:'{(i % 5) + 1}d ago',"
            f"tag:'{tags[i % len(tags)]}'"
            "}"
        )
    new = "[" + ",".join(parts) + "]"
    text2, n = re.subn(
        r"(const rows\s*=\s*)\[[\s\S]*?\](?=\s*;)",
        lambda m: m.group(1) + new,
        text,
        count=1,
    )
    return text2 if n else text


def replace_audit_request_titles(text: str, catalog: dict) -> str:
    """Swap AUDIT-* request title strings for real seed request titles."""
    titles = []
    emails_by_title = {}
    for u in catalog["users"]:
        for req in u["requests"]:
            titles.append(req["title"])
            emails_by_title[req["title"]] = u["email"]
    if not titles:
        return text

    # Collect unique AUDIT title-like strings
    found = set(re.findall(r"AUDIT-[A-Za-z0-9-]+(?: Request(?: to Quote Builder)?)?", text))
    # Longest first so "…-sent Request" wins over bare id prefixes
    for i, old in enumerate(sorted(found, key=len, reverse=True)):
        if old.count("-") < 2:
            continue
        new_title = titles[i % len(titles)]
        text = text.replace(old, new_title)
    return text


def replace_audit_user_emails(text: str, catalog: dict) -> str:
    """Map audit.* / @maxxspace.com identities to seed clients (stable by hash)."""
    users = catalog["users"]
    emails = re.findall(
        r"(?:audit[a-z0-9._+-]*@nestlancer\.com|[a-z0-9._+-]+@maxxspace\.com)",
        text,
        flags=re.I,
    )
    for email in sorted(set(emails), key=len, reverse=True):
        idx = int(hashlib.sha1(email.lower().encode()).hexdigest(), 16) % len(users)
        u = users[idx]
        text = text.replace(email, u["email"])
        # Common "Audit …" display names near those rows
    # Person-style audit display names only (not "Audit Logs" nav labels)
    def name_repl(m: re.Match) -> str:
        raw = m.group(0)
        idx = int(hashlib.sha1(raw.encode()).hexdigest(), 16) % len(users)
        return users[idx]["displayName"]

    text = re.sub(
        r"Audit (?:AUDIT-[A-Za-z0-9-]+|P\d{2}[A-Za-z0-9-]*|Repro|TwoFA|P15(?:C|TwoFA|Delete))",
        name_repl,
        text,
    )
    return text


def update_shell_sources(catalog: dict) -> None:
    admin = catalog["admin"]
    for path in [
        LAB / "tooling" / "shell-sources" / "dashboard-shell.js",
        LAB / "tooling" / "make-html-independent.py",
    ]:
        if not path.exists():
            continue
        text = path.read_text(encoding="utf-8")
        orig = text
        text = text.replace("Riya Kapoor", admin["displayName"])
        text = text.replace("<span>RK</span>", f"<span>{admin['initials']}</span>")
        text = text.replace(">RK</span>", f">{admin['initials']}</span>")
        if text != orig:
            path.write_text(text, encoding="utf-8")
            print(f"  updated source {path.relative_to(LAB.parent)}")


def process_file(path: Path, catalog: dict) -> bool:
    original = path.read_text(encoding="utf-8")
    text = original
    fam = None
    for part in path.parts:
        if re.match(r"F\d{2}-", part):
            fam = part
            break

    text = replace_admin_operator(text)
    text = replace_title_aliases(text)
    text = replace_user_counts(text, catalog)
    text = replace_audit_request_titles(text, catalog)
    text = replace_audit_user_emails(text, catalog)
    text = replace_amount_contexts(text, catalog)

    if fam and fam.startswith("F08"):
        text = rebuild_f08_data(text, catalog)
    if fam and fam.startswith("F09"):
        text = rebuild_f09_rows(text, catalog)
    if fam and fam.startswith("F15"):
        text = rebuild_f15_users(text, catalog)
    if fam and fam.startswith("F06"):
        text = rebuild_f06_contacts(text, catalog)

    # Provenance note tweak where capture language remains misleading
    text = text.replace(
        "Historical capture, not live data.",
        "Demo seed data (backend-repo-seeds), not a live API session.",
    )

    if text != original:
        path.write_text(text, encoding="utf-8")
        return True
    return False


def main() -> int:
    if not CATALOG_PATH.is_file():
        print(f"Missing catalog: {CATALOG_PATH}", file=sys.stderr)
        return 1
    catalog = load_catalog()
    files = iter_target_html()
    print(f"Applying seed demo data to {len(files)} HTML files (F02–F25)")
    changed = 0
    for p in files:
        if process_file(p, catalog):
            changed += 1
            print(f"  ✓ {p.relative_to(LAB)}")
    update_shell_sources(catalog)
    print(f"\nDone. {changed}/{len(files)} files modified.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

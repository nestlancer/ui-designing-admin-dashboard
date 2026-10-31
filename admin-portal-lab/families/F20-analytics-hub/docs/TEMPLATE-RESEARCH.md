# F20 Template Research — Analytics dashboards

## GATE T (F20)
```
## GATE T (F20) · Queries: 8 · Refs: 8/≥8 · Mapped: YES · No invented: YES · Order: AFTER S/R/A · Gate: PASS
```

Research ran **after** Gate S + R + A. References inform layout only — all metrics frozen from baseline.

| # | Reference | Pattern borrowed | F20 mapping |
|---|---|---|---|
| 1 | Stripe Dashboard · Revenue | Period selector + headline MRR + sparse daily bars | Revenue tab range row + C10 bar chart |
| 2 | Linear Insights | Compact area tabs + export | Area tabs + Download CSV |
| 3 | Vercel Analytics | Labelled axes + “no data in range” copy | Sparse revenue/request captions |
| 4 | Plausible | Simple time series + point count in subtitle | “30 points · latest ₹0.00” |
| 5 | Mixpanel Boards | KPI strip above chart | Tab KPI grids (C12) |
| 6 | Amplitude | Breakdown table beside chart | Revenue by category table |
| 7 | Grafana single-stat + timeseries | Dense ops console variant | V4 multi-metric board |
| 8 | Google Analytics 4 (admin) | Table-first exploration | V3 table-led layout |

**Not used:** Chart.js / D3 CDN — hand-drawn SVG only per master §1.3.

**Teal lock:** All refs mapped to `shared/tokens.css` chart-1..5 — no imported colour systems.

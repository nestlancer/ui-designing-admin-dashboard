/* F20 · Analytics hub — shared fixture, tie-out maths, hand-drawn SVG charts and console state.
   Every number below is the captured value (Gate S). Nothing is repaired; mismatches are exposed.
   Variant geometry is NOT here: each V#/index.html supplies NL_VARIANT.render(state, api). */
(function () {
  'use strict';

  /* ------------------------------------------------------------------ data */
  var FIXTURE = {
    captured: '2026-10-30 13:38:40Z · /analytics',
    tabs: [
      { id: 'revenue', label: 'Revenue', section: 'Revenue', sub: 'Completed payments for the selected period' },
      { id: 'users', label: 'Users', section: 'Users', sub: 'Acquisition and role mix' },
      { id: 'projects', label: 'Projects', section: 'Projects', sub: 'Lifecycle distribution and delivery health' },
      { id: 'requests', label: 'Requests', section: 'Requests', sub: 'Inbound demand and quote conversion' }
    ],
    ranges: ['7d', '30d', '90d', '1y'],
    periodMap: { '7d': 'WEEK', '30d': 'MONTH', '90d': 'QUARTER', '1y': 'YEAR' },
    rowCount: { '7d': 7, '30d': 30, '90d': 90, '1y': 12 },
    revenue: {
      total: 708160, totalLabel: 'Completed payments (total)', unit: 'INR',
      trendShot: { value: 708160, delta: 100, dir: 'up' },
      trendDom: { value: 0, delta: -100, dir: 'down' },
      points: 30, latest: 0,
      spikeIndex: 22,
      byCategory: [
        { name: 'webDevelopment', amount: 666100 },
        { name: 'custom', amount: 30060 },
        { name: 'marketing', amount: 12000 }
      ]
    },
    users: {
      total: 34, active: 34, newThisMonth: 34, roles: { User: 33, Admin: 1 },
      barDate: '2026-10-04', barValue: 34
    },
    projects: {
      total: 18, active: 4, completed: 10, onHold: 0, cancelled: 0,
      avgCompletion: 0, onTimeRate: 100
    },
    requests: {
      total: 46, conversionRate: 43.9, avgResponseMinutes: 0, openPipeline: 13,
      volume: [{ label: '10-05', iso: '2026-10-05', value: 36 }, { label: '10-06', iso: '2026-10-06', value: 10 }],
      byStatus: [
        { name: 'Draft', count: 5 }, { name: 'Submitted', count: 11 },
        { name: 'Converted To Project', count: 18 }, { name: 'Rejected', count: 3 },
        { name: 'Expired Quote', count: 7 }, { name: 'Under Review', count: 2 }
      ],
      byCategory: [
        { name: 'webDevelopment', count: 37 }, { name: 'custom', count: 4 },
        { name: 'mobileApp', count: 2 }, { name: 'design', count: 1 },
        { name: 'consulting', count: 1 }, { name: 'marketing', count: 1 }
      ],
      quotes: { total: 36, acceptedValue: 968950, acceptanceRate: 50, requestConversion: 43.9 }
    },
    endpoints: {
      revenue: ['GET /api/dashboard/revenue?period=', 'GET /api/v1/admin/payments/stats'],
      users: ['GET /api/dashboard/users?period=', 'GET /api/dashboard/analytics/users?period='],
      projects: ['GET /api/dashboard/projects?period=', 'GET /api/dashboard/analytics/projects?period='],
      requests: ['GET /api/v1/admin/requests/stats', 'GET /api/v1/admin/quotes/stats'],
      health: 'GET /api/v1/health/detailed'
    }
  };

  /* --------------------------------------------------- tie-out derivations */
  var T = {
    revenueCatSum: FIXTURE.revenue.byCategory.reduce(function (s, r) { return s + r.amount; }, 0),
    statusSum: FIXTURE.requests.byStatus.reduce(function (s, r) { return s + r.count; }, 0),
    categorySum: FIXTURE.requests.byCategory.reduce(function (s, r) { return s + r.count; }, 0),
    pipelineSum: FIXTURE.requests.byStatus.filter(function (r) {
      return r.name === 'Submitted' || r.name === 'Under Review';
    }).reduce(function (s, r) { return s + r.count; }, 0),
    drafts: FIXTURE.requests.byStatus[0].count,
    converted: 18,
    quotesTotal: FIXTURE.requests.quotes.total,
    quotesAccepted: 18
  };
  T.conversionBasis = T.converted / (FIXTURE.requests.total - T.drafts);        /* 18/41 = 43.9% */
  T.conversionAsShot = T.converted / FIXTURE.requests.total;                     /* 18/46 = 39.1% */
  T.acceptanceBasis = T.quotesAccepted / T.quotesTotal;                          /* 18/36 = 50% */
  T.projectsCounted = FIXTURE.projects.active + FIXTURE.projects.completed +
    FIXTURE.projects.onHold + FIXTURE.projects.cancelled;                        /* 14 */
  T.projectsUncounted = FIXTURE.projects.total - T.projectsCounted;              /* 4 */
  T.usersTripleEqual = FIXTURE.users.total === FIXTURE.users.active &&
    FIXTURE.users.active === FIXTURE.users.newThisMonth;

  /* ------------------------------------------------------------ formatters */
  var nf = new Intl.NumberFormat('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  var ni = new Intl.NumberFormat('en-IN');
  function inr(n) { return '\u20B9' + nf.format(n); }
  function int(n) { return ni.format(n); }
  function pct(n) { return (Math.round(n * 10) / 10) + '%'; }
  function compactINR(n) {
    if (n >= 10000000) return '\u20B9' + (n / 10000000).toFixed(2) + ' Cr';
    if (n >= 100000) return '\u20B9' + (n / 100000).toFixed(2) + ' L';
    if (n >= 1000) return '\u20B9' + (n / 1000).toFixed(1) + 'k';
    return '\u20B9' + Math.round(n);
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  /* ----------------------------------------------------- series builders */
  var MONTHS = ['11-2025', '12-2025', '01-2026', '02-2026', '03-2026', '04-2026', '05-2026', '06-2026', '07-2026', '08-2026', '09-2026', '10-2026'];
  function dayLabel(i, count) {
    /* deterministic sequence ending 2026-10-30, formatted MM-DD like the capture */
    var end = new Date(Date.UTC(2026, 9, 30));
    var d = new Date(end.getTime() - (count - 1 - i) * 864e5);
    return ('0' + (d.getUTCMonth() + 1)).slice(-2) + '-' + ('0' + d.getUTCDate()).slice(-2);
  }
  function series(tab, range) {
    var count = FIXTURE.rowCount[range];
    var labels = [], values = [], filled = 0;
    if (range === '1y') labels = MONTHS.slice(0);
    else for (var i = 0; i < count; i++) labels.push(dayLabel(i, count));

    if (tab === 'revenue') {
      var spike = range === '1y' ? 10 : Math.round(count * 0.73);
      for (i = 0; i < count; i++) values.push(i === spike ? FIXTURE.revenue.total : 0);
    } else if (tab === 'users') {
      var b = range === '1y' ? 9 : Math.round(count * 0.62);
      for (i = 0; i < count; i++) values.push(i === b ? FIXTURE.users.barValue : 0);
    } else if (tab === 'requests') {
      /* the capture only proves two buckets; the rest of the window is empty, not invented */
      for (i = 0; i < count; i++) values.push(0);
      values[count - 1] = FIXTURE.requests.volume[1].value;
      if (count > 1) values[count - 2] = FIXTURE.requests.volume[0].value;
    } else {
      for (i = 0; i < count; i++) values.push(0); /* projects: API degraded, no series */
    }
    filled = values.filter(function (v) { return v > 0; }).length;
    return { labels: labels, values: values, count: count, filled: filled, empty: count - filled };
  }

  /* ---------------------------------------------------------- SVG charts */
  var SVGNS = 'http://www.w3.org/2000/svg';
  function niceMax(v) {
    if (v <= 0) return 1;
    var mag = Math.pow(10, Math.floor(Math.log10(v)));
    var n = v / mag;
    var step = n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 5 ? 5 : 10;
    return step * mag;
  }
  function ticksFor(max, n) {
    var out = [], i;
    for (i = 0; i <= n; i++) out.push(max * i / n);
    return out;
  }

  /* line chart — labelled y-axis + unit, x ticks, points only where value > 0 */
  function lineChart(ser, opt) {
    opt = opt || {};
    var w = 680, h = opt.height || 210, pl = 62, pr = 14, pt = 14, pb = 30;
    var iw = w - pl - pr, ih = h - pt - pb;
    var max = niceMax(Math.max.apply(null, ser.values) || 1);
    var unit = opt.unit || '\u20B9';
    var x = function (i) { return pl + (ser.count === 1 ? iw / 2 : (i / (ser.count - 1)) * iw); };
    var y = function (v) { return pt + ih - (v / max) * ih; };
    var s = '<svg class="chart" viewBox="0 0 ' + w + ' ' + h + '" role="img" aria-labelledby="' + opt.id + '-t ' + opt.id + '-d" preserveAspectRatio="xMidYMid meet">';
    s += '<title id="' + opt.id + '-t">' + esc(opt.title) + '</title>';
    s += '<desc id="' + opt.id + '-d">' + esc(opt.desc) + '</desc>';
    ticksFor(max, 4).forEach(function (t) {
      s += '<line class="grid-line" x1="' + pl + '" x2="' + (w - pr) + '" y1="' + y(t).toFixed(1) + '" y2="' + y(t).toFixed(1) + '"/>';
      s += '<text class="tick" x="' + (pl - 8) + '" y="' + (y(t) + 4).toFixed(1) + '" text-anchor="end">' + esc(unit === '\u20B9' ? compactINR(t) : int(t)) + '</text>';
    });
    s += '<line class="axis-line" x1="' + pl + '" x2="' + (w - pr) + '" y1="' + (pt + ih) + '" y2="' + (pt + ih) + '"/>';
    var step = Math.max(1, Math.ceil(ser.count / 5));
    for (var i = 0; i < ser.count; i += step) {
      s += '<text class="tick" x="' + x(i).toFixed(1) + '" y="' + (h - 10) + '" text-anchor="middle">' + esc(ser.labels[i]) + '</text>';
    }
    /* area + line drawn through the real (mostly zero) buckets — the spike stays a spike */
    var d = '', a = '';
    for (i = 0; i < ser.count; i++) {
      d += (i ? 'L' : 'M') + x(i).toFixed(1) + ' ' + y(ser.values[i]).toFixed(1) + ' ';
    }
    a = 'M' + pl + ' ' + (pt + ih) + ' L' + d.slice(1) + 'L' + x(ser.count - 1).toFixed(1) + ' ' + (pt + ih) + ' Z';
    s += '<path class="series-area" d="' + a + '"/>';
    s += '<path class="series-line" d="' + d + '"/>';
    for (i = 0; i < ser.count; i++) {
      if (ser.values[i] > 0) s += '<circle class="point" cx="' + x(i).toFixed(1) + '" cy="' + y(ser.values[i]).toFixed(1) + '" r="4"/>';
    }
    s += '<text class="flag-text" x="' + (w - pr) + '" y="' + (pt + 10) + '" text-anchor="end">' + esc(opt.yLabel || ('y-axis: ' + unit + ' per bucket')) + '</text>';
    s += '</svg>';
    return s;
  }

  /* bar chart — zero-based bars, direct value labels, labelled y-axis */
  function barChart(ser, opt) {
    opt = opt || {};
    var w = 680, h = opt.height || 220, pl = 52, pr = 14, pt = 22, pb = 30;
    var iw = w - pl - pr, ih = h - pt - pb;
    var max = niceMax(Math.max.apply(null, ser.values) || 1);
    var y = function (v) { return pt + ih - (v / max) * ih; };
    var slot = iw / ser.count;
    var bw = Math.min(opt.maxBar || 42, slot * 0.62);
    var s = '<svg class="chart" viewBox="0 0 ' + w + ' ' + h + '" role="img" aria-labelledby="' + opt.id + '-t ' + opt.id + '-d" preserveAspectRatio="xMidYMid meet">';
    s += '<title id="' + opt.id + '-t">' + esc(opt.title) + '</title>';
    s += '<desc id="' + opt.id + '-d">' + esc(opt.desc) + '</desc>';
    ticksFor(max, 4).forEach(function (t) {
      s += '<line class="grid-line" x1="' + pl + '" x2="' + (w - pr) + '" y1="' + y(t).toFixed(1) + '" y2="' + y(t).toFixed(1) + '"/>';
      s += '<text class="tick" x="' + (pl - 8) + '" y="' + (y(t) + 4).toFixed(1) + '" text-anchor="end">' + int(t) + '</text>';
    });
    var visible = 0;
    for (var i = 0; i < ser.count; i++) {
      if (ser.values[i] <= 0) continue;
      visible++;
      var cx = pl + slot * i + slot / 2;
      var bh = Math.max(4, (ser.values[i] / max) * ih);
      s += '<rect class="bar' + (ser.values[i] === Math.max.apply(null, ser.values) ? ' is-peak' : '') + '" x="' + (cx - bw / 2).toFixed(1) + '" y="' + (pt + ih - bh).toFixed(1) + '" width="' + bw.toFixed(1) + '" height="' + bh.toFixed(1) + '" rx="3"/>';
      s += '<text class="bar-label" x="' + cx.toFixed(1) + '" y="' + (pt + ih - bh - 8).toFixed(1) + '" text-anchor="middle">' + int(ser.values[i]) + '</text>';
      s += '<text class="tick" x="' + cx.toFixed(1) + '" y="' + (h - 10) + '" text-anchor="middle">' + esc(ser.labels[i]) + '</text>';
    }
    s += '<line class="zero-line" x1="' + pl + '" x2="' + (w - pr) + '" y1="' + (pt + ih) + '" y2="' + (pt + ih) + '"/>';
    s += '<text class="flag-text" x="' + pl + '" y="' + (pt - 8) + '">' + esc(opt.yLabel || 'y-axis: count per day') + '</text>';
    s += '<text class="flag-text" x="' + (w - pr) + '" y="' + (pt - 8) + '" text-anchor="end">' + visible + ' bar' + (visible === 1 ? '' : 's') + ' of ' + ser.count + ' buckets</text>';
    s += '</svg>';
    return s;
  }

  /* donut — segments given in declaration order; the captured blue slice is brand-500 (C5) */
  function donutChart(segments, opt) {
    opt = opt || {};
    var size = 220, r = 78, cx = size / 2, cy = size / 2, sw = 26;
    var total = segments.reduce(function (s, x) { return s + x.value; }, 0) || 1;
    var ang = -Math.PI / 2, s = '<svg class="chart" viewBox="0 0 ' + size + ' ' + size + '" role="img" aria-labelledby="' + opt.id + '-t ' + opt.id + '-d" style="max-width:260px;margin-inline:auto">';
    s += '<title id="' + opt.id + '-t">' + esc(opt.title) + '</title>';
    s += '<desc id="' + opt.id + '-d">' + esc(opt.desc) + '</desc>';
    segments.forEach(function (seg, i) {
      var frac = seg.value / total, a2 = ang + frac * Math.PI * 2;
      if (frac > 0) {
        var large = frac > 0.5 ? 1 : 0;
        var x1 = cx + r * Math.cos(ang), y1 = cy + r * Math.sin(ang);
        var x2 = cx + r * Math.cos(a2), y2 = cy + r * Math.sin(a2);
        s += '<path d="M' + x1.toFixed(2) + ' ' + y1.toFixed(2) + ' A' + r + ' ' + r + ' 0 ' + large + ' 1 ' + x2.toFixed(2) + ' ' + y2.toFixed(2) + '" fill="none" stroke="var(--chart-' + ((i % 5) + 1) + ')" stroke-width="' + sw + '" stroke-linecap="butt"/>';
      }
      ang = a2;
    });
    s += '<text x="' + cx + '" y="' + (cy + 2) + '" text-anchor="middle" style="font:800 26px var(--font);fill:var(--foreground);font-variant-numeric:tabular-nums">' + esc(opt.centre) + '</text>';
    s += '<text x="' + cx + '" y="' + (cy + 20) + '" text-anchor="middle" style="font:600 11px var(--font);fill:var(--muted-foreground)">' + esc(opt.centreLabel || 'counted') + '</text>';
    s += '</svg>';
    return s;
  }

  function sparkline(values) {
    var w = 56, h = 18, bw = w / values.length;
    var max = Math.max.apply(null, values) || 1, s = '<svg class="spark" viewBox="0 0 ' + w + ' ' + h + '" aria-hidden="true" focusable="false">';
    values.forEach(function (v, i) {
      if (v <= 0) { s += '<rect class="bar" x="' + (i * bw).toFixed(2) + '" y="' + (h - 1.5) + '" width="' + Math.max(1, bw - 1.4).toFixed(2) + '" height="1.5" opacity=".35"/>'; return; }
      var bh = Math.max(2, (v / max) * h);
      s += '<rect class="bar' + (values.filter(function (x) { return x > 0; }).length === 1 ? ' solo' : '') + '" x="' + (i * bw).toFixed(2) + '" y="' + (h - bh).toFixed(2) + '" width="' + Math.max(1, bw - 1.4).toFixed(2) + '" height="' + bh.toFixed(2) + '"/>';
    });
    return s + '</svg>';
  }

  /* -------------------------------------------------------------- UI bits */
  var ICON = {
    alert: 'i-alert', check: 'i-check', clock: 'i-clock', info: 'i-doc', x: 'i-x',
    down: 'i-down', up: 'i-up', eye: 'i-eye', filter: 'i-filter', save: 'i-save', cal: 'i-cal'
  };
  function icon(name, cls) {
    return '<svg class="ic ' + (cls || '') + '" aria-hidden="true" focusable="false"><use href="#' + (ICON[name] || name) + '"></use></svg>';
  }
  function chip(kind, label, iconName) {
    return '<span class="badge badge-' + kind + '">' + (iconName ? icon(iconName) : '') + esc(label) + '</span>';
  }
  function prov(id, title, rows) {
    var body = rows.map(function (r) {
      return '<dt>' + esc(r[0]) + '</dt><dd' + (r[2] ? ' class="mono"' : '') + '>' + esc(r[1]) + '</dd>';
    }).join('');
    return '<details class="prov" data-prov id="' + id + '"><summary>' + icon('info') + 'How this is calculated</summary>' +
      '<div class="prov-panel"><b>' + esc(title) + '</b><dl>' + body + '</dl>' +
      '<p class="hint">Static lab: the endpoint above is the documented contract, not a request made by this page.</p></div></details>';
  }
  function notice(kind, title, text, actions) {
    return '<div class="notice notice-' + kind + '" role="' + (kind === 'error' ? 'alert' : 'note') + '">' + icon(kind === 'error' ? 'alert' : kind === 'warning' ? 'alert' : 'check') +
      '<div class="notice-body"><strong>' + esc(title) + '</strong><span>' + text + '</span>' +
      (actions || '') + '</div></div>';
  }
  function skeleton(kind) {
    return '<div class="skeleton" role="status" aria-live="polite"><span class="visually-hidden">Loading ' + esc(kind) + '…</span>' +
      '<div class="sk h-lg"></div><div class="sk w-40"></div><div class="sk chart"></div><div class="sk w-80"></div><div class="sk w-60"></div></div>';
  }
  function emptyState(title, body, cta) {
    return '<div class="empty-state">' + icon('filter') + '<h3>' + esc(title) + '</h3><p>' + body + '</p>' + (cta || '') + '</div>';
  }
  function errorState(title, body, endpoint, retryLabel) {
    return '<div class="notice notice-error" role="alert" tabindex="-1" data-error-focus>' + icon('alert') +
      '<div class="notice-body"><strong>' + esc(title) + '</strong><span>' + body + '</span>' +
      '<span class="mono hint">' + esc(endpoint) + '</span>' +
      '<div class="notice-actions"><button class="btn btn-sm" data-retry>' + icon('clock') + esc(retryLabel || 'Retry (demo)') + '</button>' +
      '<a class="btn btn-sm" href="../../../index.html">Support runbook</a></div></div></div>';
  }
  function degradedState(endpoint) {
    return '<div class="notice notice-warning" role="note">' + icon('alert') +
      '<div class="notice-body"><strong>Project analytics unavailable — the projects API is failing in production</strong>' +
      '<span>This tab renders the captured <span class="mono">14 of 18</span> counted projects only. Lifecycle, completion and on-time figures cannot be verified while <span class="mono">' +
      esc(endpoint) + '</span> returns an error (report finding #1, captured 2026-10-30).</span>' +
      '<div class="notice-actions"><button class="btn btn-sm" data-retry>Retry (demo)</button>' +
      '<a class="btn btn-sm" href="../../../index.html">Service status runbook</a></div></div></div>';
  }

  function emptyView(tab, meta) {
    var body = '<p>The ' + esc(meta.label.toLowerCase()) + ' series returned no buckets for this range, so nothing is drawn. ' +
      'An empty chart is not the same as a zero value — the captured totals are still shown on the page header of a live view.</p>';
    return '<section class="panel"><div class="panel-head"><div><div class="panel-title">' + esc(meta.section) + '</div>' +
      '<div class="panel-sub">' + esc(meta.sub) + '</div></div><div class="panel-tools">' + chip('neutral', 'lab state: empty', 'alert') + '</div></div>' +
      '<div class="panel-body"><div class="chart-empty"><strong>No data in this range</strong>' + body +
      '<div class="notice-actions"><button class="btn btn-sm btn-secondary" data-retry>Reset to captured view</button>' +
      '<button class="btn btn-sm btn-ghost" data-range="1y">Try 1y</button></div></div></div>' +
      '<div class="panel-foot"><span class="mono">' + esc(endpointFor(tab)) + '</span><span>0 buckets returned · demo state</span></div></section>';
  }

  /* ---------------------------------------------------------------- CSV */
  function csv(view, rows, meta) {
    var lines = [];
    lines.push('# Nestlancer admin — analytics CSV (DEMO EXPORT, static lab)');
    lines.push('# view,' + view);
    lines.push('# range,' + meta.range + ' (mapped API period: ' + meta.period + ')');
    lines.push('# endpoint,' + meta.endpoint);
    lines.push('# captured,' + FIXTURE.captured);
    lines.push('# generated,' + new Date().toISOString());
    lines.push('# rows,' + rows.length);
    lines.push('# note,values are captured fixtures; no server request was made');
    lines = lines.concat(rows);
    var blob = new Blob([lines.join('\n')], { type: 'text/csv;charset=utf-8' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'nestlancer-analytics_' + view.replace(/[^a-z0-9]+/gi, '-').toLowerCase() + '_' + meta.range + '.csv';
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 2000);
    announce('CSV prepared for ' + view + ', ' + meta.range + ', ' + rows.length + ' rows. Demo export — no request was made.');
  }

  /* rows builders per tab (used by every variant's CSV button) */
  function csvRows(tab, range) {
    var ser = series(tab, range), r = [];
    if (tab === 'revenue') {
      r.push('section,label,value,unit');
      r.push('kpi,Completed payments (total),' + FIXTURE.revenue.total + ',INR');
      FIXTURE.revenue.byCategory.forEach(function (c) { r.push('by_category,' + c.name + ',' + c.amount + ',INR'); });
      ser.labels.forEach(function (l, i) { r.push('over_time,' + l + ',' + ser.values[i] + ',INR'); });
    } else if (tab === 'users') {
      r.push('metric,value');
      r.push('Total users,' + FIXTURE.users.total);
      r.push('Active,' + FIXTURE.users.active);
      r.push('New this month,' + FIXTURE.users.newThisMonth);
      r.push('Role User,' + FIXTURE.users.roles.User);
      r.push('Role Admin,' + FIXTURE.users.roles.Admin);
      ser.labels.forEach(function (l, i) { r.push('new_users,' + l + ',' + ser.values[i]); });
    } else if (tab === 'projects') {
      r.push('metric,value');
      r.push('Total projects,' + FIXTURE.projects.total);
      r.push('ACTIVE,' + FIXTURE.projects.active);
      r.push('COMPLETED,' + FIXTURE.projects.completed);
      r.push('ON HOLD,' + FIXTURE.projects.onHold);
      r.push('CANCELLED,' + FIXTURE.projects.cancelled);
      r.push('Avg. completion (days),' + FIXTURE.projects.avgCompletion);
      r.push('On-time rate,' + FIXTURE.projects.onTimeRate);
      r.push('uncounted,' + T.projectsUncounted);
    } else {
      r.push('section,label,value');
      r.push('kpi,Total requests,' + FIXTURE.requests.total);
      r.push('kpi,Conversion rate,' + FIXTURE.requests.conversionRate);
      r.push('kpi,Avg. response time (minutes),' + FIXTURE.requests.avgResponseMinutes);
      r.push('kpi,Open pipeline,' + FIXTURE.requests.openPipeline);
      FIXTURE.requests.byStatus.forEach(function (x) { r.push('by_status,' + x.name + ',' + x.count); });
      FIXTURE.requests.byCategory.forEach(function (x) { r.push('by_category,' + x.name + ',' + x.count); });
      r.push('quotes,Total quotes,' + FIXTURE.requests.quotes.total);
      r.push('quotes,Accepted value INR,' + FIXTURE.requests.quotes.acceptedValue);
      r.push('quotes,Acceptance rate,' + FIXTURE.requests.quotes.acceptanceRate);
    }
    return r;
  }

  /* ------------------------------------------------------------- console */
  var state = { tab: 'revenue', range: '30d', mode: 'chart', state: 'live', density: 'comfortable' };
  var listeners = [];
  function announce(msg) {
    var live = document.getElementById('live');
    if (!live) return;
    live.textContent = '';
    setTimeout(function () { live.textContent = msg; }, 20);
  }
  function period() { return FIXTURE.periodMap[state.range]; }
  function endpointFor(tab) { return FIXTURE.endpoints[tab][0] + (tab === 'requests' ? '' : period()); }
  function emit() { listeners.forEach(function (fn) { fn(state); }); }
  function set(patch, quiet) {
    Object.keys(patch).forEach(function (k) { state[k] = patch[k]; });
    try { localStorage.setItem('nl-f20-state', JSON.stringify(state)); } catch (e) { }
    emit();
    if (!quiet) announce('View updated: ' + state.tab + ', range ' + state.range + ', ' + state.state + ' state.');
  }

  function mount(render) {
    listeners.push(render);
    var tabs = document.querySelector('[role="tablist"][data-tabs]');
    var ranges = document.querySelector('[data-ranges]');
    var statesEl = document.querySelector('[data-states]');

    if (tabs) {
      tabs.addEventListener('click', function (e) {
        var b = e.target.closest('[role="tab"]');
        if (b) set({ tab: b.dataset.tab });
      });
      tabs.addEventListener('keydown', function (e) {
        var items = Array.prototype.slice.call(tabs.querySelectorAll('[role="tab"]'));
        var i = items.indexOf(document.activeElement), n = e.key;
        if (i < 0) return;
        if (n === 'ArrowRight' || n === 'ArrowLeft' || n === 'Home' || n === 'End') {
          e.preventDefault();
          var j = n === 'Home' ? 0 : n === 'End' ? items.length - 1 : (i + (n === 'ArrowRight' ? 1 : -1) + items.length) % items.length;
          items[j].focus(); set({ tab: items[j].dataset.tab });
        }
      });
    }
    if (ranges) {
      ranges.addEventListener('click', function (e) {
        var b = e.target.closest('[role="radio"]');
        if (b) set({ range: b.dataset.range });
      });
      ranges.addEventListener('keydown', function (e) {
        var items = Array.prototype.slice.call(ranges.querySelectorAll('[role="radio"]'));
        var i = items.indexOf(document.activeElement);
        if (i < 0) return;
        var k = e.key;
        if (['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp', 'Home', 'End'].indexOf(k) < 0) return;
        e.preventDefault();
        var j = k === 'Home' ? 0 : k === 'End' ? items.length - 1 :
          (i + ((k === 'ArrowRight' || k === 'ArrowDown') ? 1 : -1) + items.length) % items.length;
        items[j].focus(); set({ range: items[j].dataset.range });
      });
    }
    if (statesEl) {
      statesEl.addEventListener('click', function (e) {
        var b = e.target.closest('[data-state]');
        if (b) set({ state: b.dataset.state });
      });
    }

    /* delegated controls that any variant can use */
    document.addEventListener('click', function (e) {
      var t = e.target;
      var view = t.closest('[data-view]');
      if (view) { set({ mode: view.dataset.view }); return; }
      var dens = t.closest('[data-density]');
      if (dens) { set({ density: dens.dataset.density }); return; }
      var csvBtn = t.closest('[data-csv]');
      if (csvBtn) {
        csv(state.tab + ' · ' + state.range, csvRows(state.tab, state.range), { range: state.range, period: period(), endpoint: endpointFor(state.tab) });
        return;
      }
      if (t.closest('[data-retry]')) {
        announce('Demo retry — re-rendering the captured fixture. No request was made.');
        set({ state: 'live' }, true);
        return;
      }
      var probe = t.closest('[data-probe]');
      if (probe) { set({ tab: probe.dataset.probe, range: probe.dataset.range || state.range }); }
    });

    /* theme */
    var themeBtn = document.getElementById('theme');
    function paintTheme() {
      var dark = document.documentElement.classList.contains('dark');
      if (themeBtn) {
        themeBtn.setAttribute('aria-pressed', dark ? 'true' : 'false');
        themeBtn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
        themeBtn.innerHTML = '<svg class="ic" aria-hidden="true" focusable="false"><use href="#' + (dark ? 'i-spark' : 'i-moon') + '"></use></svg>';
      }
    }
    if (themeBtn) {
      themeBtn.addEventListener('click', function () {
        var dark = document.documentElement.classList.toggle('dark');
        try { localStorage.setItem('nl-theme', dark ? 'dark' : 'light'); } catch (e) { }
        paintTheme();
        announce(dark ? 'Dark theme on' : 'Light theme on');
      });
    }
    paintTheme();

    /* sidebar collapse + mobile drawer */
    var app = document.querySelector('.app');
    var collapse = document.getElementById('collapse');
    var menu = document.getElementById('menu');
    var overlay = document.getElementById('nav-overlay');
    try {
      if (app && localStorage.getItem('nl-nav') === 'collapsed') {
        app.classList.add('collapsed');
        if (collapse) { collapse.setAttribute('aria-expanded', 'false'); collapse.setAttribute('aria-label', 'Expand sidebar'); }
      }
    } catch (e) { }
    if (collapse) {
      collapse.addEventListener('click', function () {
        var collapsed = app.classList.toggle('collapsed');
        collapse.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
        collapse.setAttribute('aria-label', collapsed ? 'Expand sidebar' : 'Collapse sidebar');
        collapse.querySelector('.collapse-text').textContent = collapsed ? 'Expand' : 'Collapse';
        try { localStorage.setItem('nl-nav', collapsed ? 'collapsed' : 'expanded'); } catch (e) { }
        announce(collapsed ? 'Sidebar collapsed' : 'Sidebar expanded');
      });
    }
    function closeNav() {
      if (!app || !app.classList.contains('nav-open')) return;
      app.classList.remove('nav-open');
      if (menu) { menu.setAttribute('aria-expanded', 'false'); menu.focus(); }
    }
    if (menu) {
      menu.addEventListener('click', function () {
        var open = app.classList.toggle('nav-open');
        menu.setAttribute('aria-expanded', open ? 'true' : 'false');
        if (open) { var f = app.querySelector('.sidebar .nav'); if (f) f.focus(); }
      });
    }
    if (overlay) overlay.addEventListener('click', closeNav);

    /* shortcuts dialog */
    var dlg = document.getElementById('shortcuts');
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { closeNav(); if (dlg && dlg.open) dlg.close(); }
      if (e.key === '?' && !/input|textarea|select/i.test(document.activeElement.tagName)) {
        if (dlg && !dlg.open) { e.preventDefault(); dlg.showModal(); }
      }
    });

    /* restore state (view only — never the demo state machine) */
    try {
      var saved = JSON.parse(localStorage.getItem('nl-f20-state') || '{}');
      if (saved.tab && FIXTURE.tabs.some(function (t) { return t.id === saved.tab; })) state.tab = saved.tab;
      if (saved.range && FIXTURE.ranges.indexOf(saved.range) > -1) state.range = saved.range;
      if (saved.density) state.density = saved.density;
    } catch (e) { }

    emit();
  }

  /* ---------------------------------------------------------- public API */
  window.NL = {
    data: FIXTURE, tie: T, state: state,
    series: series, period: period, endpointFor: endpointFor,
    inr: inr, int: int, pct: pct, compactINR: compactINR, esc: esc,
    csv: csv, csvRows: csvRows,
    charts: { line: lineChart, bars: barChart, donut: donutChart, spark: sparkline },
    ui: { chip: chip, prov: prov, notice: notice, skeleton: skeleton, empty: emptyState, error: errorState, degraded: degradedState, icon: icon, emptyView: emptyView },
    announce: announce, set: set, mount: mount,
    tabs: FIXTURE.tabs, ranges: FIXTURE.ranges, captured: FIXTURE.captured
  };
})();

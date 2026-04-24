/* ════════════════════════════════════════════════
   DATA
   ════════════════════════════════════════════════ */

const RATES = {
  "UC Medicare PPO U": null,
  "UC Medicare PPO UC": null,
  "UC Medicare PPO UA": null,
  "UC Medicare PPO UAC": null,
  "UC Medicare PPO M": [572.60, 512.16],
  "UC Medicare PPO MM": [1145.20, 1024.32],
  "UC Medicare PPO MC": null,
  "UC Medicare PPO MA": null,
  "UC Medicare PPO MAC": null,
  "UC Medicare PPO MMM": [1717.80, 1536.48],
  "UC Medicare PPO MMC": null,

  "UC Medicare PPO without Rx U": null,
  "UC Medicare PPO without Rx UC": null,
  "UC Medicare PPO without Rx UA": null,
  "UC Medicare PPO without Rx UAC": null,
  "UC Medicare PPO without Rx M": [154.08, 512.16],
  "UC Medicare PPO without Rx MM": [308.16, 1024.32],
  "UC Medicare PPO without Rx MC": null,
  "UC Medicare PPO without Rx MA": null,
  "UC Medicare PPO without Rx MAC": null,
  "UC Medicare PPO without Rx MMM": [462.24, 1536.48],
  "UC Medicare PPO without Rx MMC": null,

  "HealthSavings+ U": [1091.78, 798.92],
  "HealthSavings+ UC": [1965.20, 1438.05],
  "HealthSavings+ UA": [2292.74, 1613.66],
  "HealthSavings+ UAC": [3166.16, 2252.79],
  "HealthSavings+ M": null,
  "HealthSavings+ MM": null,
  "HealthSavings+ MC": null,
  "HealthSavings+ MA": null,
  "HealthSavings+ MAC": null,
  "HealthSavings+ MMM": null,
  "HealthSavings+ MMC": null,

  "UC Blue & Gold HMO/UC Medicare Choice U": [1166.34, 802.81],
  "UC Blue & Gold HMO/UC Medicare Choice UC": [2099.41, 1445.06],
  "UC Blue & Gold HMO/UC Medicare Choice UA": [2449.31, 1621.82],
  "UC Blue & Gold HMO/UC Medicare Choice UAC": [3382.38, 2264.07],
  "UC Blue & Gold HMO/UC Medicare Choice M": null,
  "UC Blue & Gold HMO/UC Medicare Choice MM": null,
  "UC Blue & Gold HMO/UC Medicare Choice MC": [1546.92, 1154.41],
  "UC Blue & Gold HMO/UC Medicare Choice MA": [1896.82, 1331.17],
  "UC Blue & Gold HMO/UC Medicare Choice MAC": [2829.89, 1973.42],
  "UC Blue & Gold HMO/UC Medicare Choice MMM": null,
  "UC Blue & Gold HMO/UC Medicare Choice MMC": [2160.77, 1666.57],

  "UC High Option PPO U": null,
  "UC High Option PPO UC": null,
  "UC High Option PPO UA": null,
  "UC High Option PPO UAC": null,
  "UC High Option PPO M": [875.90, 512.16],
  "UC High Option PPO MM": [1751.80, 1024.32],
  "UC High Option PPO MC": null,
  "UC High Option PPO MA": null,
  "UC High Option PPO MAC": null,
  "UC High Option PPO MMM": [2627.70, 1536.48],
  "UC High Option PPO MMC": null,

  "Kaiser Permanente/Senior Advantage HMO U": [900.63, 659.64],
  "Kaiser Permanente/Senior Advantage HMO UC": [1621.13, 1187.35],
  "Kaiser Permanente/Senior Advantage HMO UA": [1891.32, 1321.17],
  "Kaiser Permanente/Senior Advantage HMO UAC": [2611.82, 1848.88],
  "Kaiser Permanente/Senior Advantage HMO M": [241.87, 512.16],
  "Kaiser Permanente/Senior Advantage HMO MM": [483.74, 1024.32],
  "Kaiser Permanente/Senior Advantage HMO MC": [962.37, 1039.87],
  "Kaiser Permanente/Senior Advantage HMO MA": [1232.56, 1173.69],
  "Kaiser Permanente/Senior Advantage HMO MAC": [1953.06, 1701.40],
  "Kaiser Permanente/Senior Advantage HMO MMM": [725.61, 1536.48],
  "Kaiser Permanente/Senior Advantage HMO MMC": [1204.24, 1552.03],

  "UC Care PPO/UC Medicare PPO U": [1199.22, 804.52],
  "UC Care PPO/UC Medicare PPO UC": [2158.60, 1448.14],
  "UC Care PPO/UC Medicare PPO UA": [2518.36, 1625.42],
  "UC Care PPO/UC Medicare PPO UAC": [3477.74, 2269.04],
  "UC Care PPO/UC Medicare PPO M": null,
  "UC Care PPO/UC Medicare PPO MM": null,
  "UC Care PPO/UC Medicare PPO MC": [1531.98, 1155.78],
  "UC Care PPO/UC Medicare PPO MA": [1891.74, 1333.06],
  "UC Care PPO/UC Medicare PPO MAC": [2851.12, 1976.68],
  "UC Care PPO/UC Medicare PPO MMM": null,
  "UC Care PPO/UC Medicare PPO MMC": [2104.58, 1667.94],

  "UC Medicare Choice U": null,
  "UC Medicare Choice UC": null,
  "UC Medicare Choice UA": null,
  "UC Medicare Choice UAC": null,
  "UC Medicare Choice M": [613.85, 512.16],
  "UC Medicare Choice MM": [1227.70, 1024.32],
  "UC Medicare Choice MC": null,
  "UC Medicare Choice MA": null,
  "UC Medicare Choice MAC": null,
  "UC Medicare Choice MMM": [1841.55, 1536.48],
  "UC Medicare Choice MMC": null,

  "Delta Dental PPO U": [45.18, 45.18],
  "Delta Dental PPO UC": [81.32, 81.32],
  "Delta Dental PPO UA": [94.88, 94.88],
  "Delta Dental PPO UAC": [131.02, 131.02],
  "Delta Dental PPO M": null,
  "Delta Dental PPO MM": null,
  "Delta Dental PPO MC": null,
  "Delta Dental PPO MA": null,
  "Delta Dental PPO MAC": null,
  "Delta Dental PPO MMM": null,
  "Delta Dental PPO MMC": null,

  "DeltaCare USA (Dental HMO) U": [18.54, 18.54],
  "DeltaCare USA (Dental HMO) UC": [33.37, 33.37],
  "DeltaCare USA (Dental HMO) UA": [38.93, 38.93],
  "DeltaCare USA (Dental HMO) UAC": [53.76, 53.76],
  "DeltaCare USA (Dental HMO) M": null,
  "DeltaCare USA (Dental HMO) MM": null,
  "DeltaCare USA (Dental HMO) MC": null,
  "DeltaCare USA (Dental HMO) MA": null,
  "DeltaCare USA (Dental HMO) MAC": null,
  "DeltaCare USA (Dental HMO) MMM": null,
  "DeltaCare USA (Dental HMO) MMC": null,
};

const COV_DESCS = {
  U:   "Retiree only",
  UC:  "Retiree + Child(ren)",
  UA:  "Retiree + Adult",
  UAC: "Retiree + Adult + Child(ren)",
  M:   "Medicare-eligible Retiree",
  MM:  "M-eligible Retiree + M-eligible Adult or Child",
  MC:  "M-eligible Retiree + Child(ren), or Retiree + M-eligible Child",
  MA:  "M-eligible Retiree + Adult, or Retiree + M-eligible Adult",
  MAC: "M-eligible Retiree + Adult + Child(ren) OR Retiree + M-eligible Adult + Child(ren) OR Retiree + Adult + M-eligible Child",
  MMM: "M-eligible Retiree + M-eligible Adult + M-eligible Child",
  MMC: "MMC = Medicare-eligible Retiree + Medicare-eligible Adult + Child(ren) OR M-eligible Retiree + Adult + M-eligible Child",
};

// Medicare Part B reimbursement: number of covered persons per level
const PARTB_PERSONS = { M: 1, MM: 2, MC: 1, MA: 1, MAC: 1, MMM: 3, MMC: 2 };
const PARTB_MAX     = 185; // max reimbursement per person per month

const LEVELS = ['U', 'UC', 'UA', 'UAC', 'M', 'MM', 'MC', 'MA', 'MAC', 'MMM', 'MMC'];

// Group 2: service credit → UC contribution fraction
const G2_SVC = {
  10: 0.50, 11: 0.55, 12: 0.60, 13: 0.65, 14: 0.70,
  15: 0.75, 16: 0.80, 17: 0.85, 18: 0.90, 19: 0.95, 20: 1.00,
};

// Group 3 lookup table (rows = service 10–20, cols = age 50–65)
const G3_SVCS = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const G3_AGES = [50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65];
const G3_DATA = [
  /* svc=10 */ [0, 0, 0, 0, 0, 0, 0.050, 0.100, 0.150, 0.200, 0.250, 0.300, 0.350, 0.400, 0.450, 0.500],
  /* svc=11 */ [0, 0, 0, 0, 0, 0, 0.055, 0.110, 0.165, 0.220, 0.275, 0.330, 0.385, 0.440, 0.495, 0.550],
  /* svc=12 */ [0, 0, 0, 0, 0, 0, 0.060, 0.120, 0.180, 0.240, 0.300, 0.360, 0.420, 0.480, 0.540, 0.600],
  /* svc=13 */ [0, 0, 0, 0, 0, 0, 0.065, 0.130, 0.195, 0.260, 0.325, 0.390, 0.455, 0.520, 0.585, 0.650],
  /* svc=14 */ [0, 0, 0, 0, 0, 0, 0.070, 0.140, 0.210, 0.280, 0.350, 0.420, 0.490, 0.560, 0.630, 0.700],
  /* svc=15 */ [0, 0, 0, 0, 0, 0, 0.075, 0.150, 0.225, 0.300, 0.375, 0.450, 0.525, 0.600, 0.675, 0.750],
  /* svc=16 */ [0, 0, 0, 0, 0, 0, 0.080, 0.160, 0.240, 0.320, 0.400, 0.480, 0.560, 0.640, 0.720, 0.800],
  /* svc=17 */ [0, 0, 0, 0, 0, 0, 0.085, 0.170, 0.255, 0.340, 0.425, 0.510, 0.595, 0.680, 0.765, 0.850],
  /* svc=18 */ [0, 0, 0, 0, 0, 0, 0.090, 0.180, 0.270, 0.360, 0.450, 0.540, 0.630, 0.720, 0.810, 0.900],
  /* svc=19 */ [0, 0, 0, 0, 0, 0, 0.095, 0.190, 0.285, 0.380, 0.475, 0.570, 0.665, 0.760, 0.855, 0.950],
  /* svc=20 */ [0, 0, 0, 0, 0, 0, 0.100, 0.200, 0.300, 0.400, 0.500, 0.600, 0.700, 0.800, 0.900, 1.000],
];

// The 8 medical plans shown in the comparison tab (order matches table columns)
const COMP_PLANS = [
  "UC Blue & Gold HMO/UC Medicare Choice",
  "Kaiser Permanente/Senior Advantage HMO",
  "HealthSavings+",
  "UC Care PPO/UC Medicare PPO",
  "UC High Option PPO",
  "UC Medicare PPO",
  "UC Medicare PPO without Rx",
  "UC Medicare Choice",
];


/* ════════════════════════════════════════════════
   DOM HELPERS
   ════════════════════════════════════════════════ */

/**
 * Creates an element with optional className, textContent, and attributes.
 * Text is always assigned via .textContent and is never parsed as HTML,
 * making this safe against XSS regardless of the string's contents.
 *
 * Attribute safety rules (defense-in-depth for future callers):
 *   - Any attribute whose name starts with "on" (e.g. onclick) is silently dropped.
 *   - Any URL attribute (href, src, xlink:href) whose value begins with "javascript:"
 *     is silently dropped.
 * All values here are controlled constants, so these guards are purely
 * protective against future misuse of this helper.
 */
const BLOCKED_ATTR  = /^on/i;
const URL_ATTRS     = new Set(['href', 'src', 'xlink:href']);
const JAVASCRIPT_RE = /^\s*javascript:/i;

function el(tag, { cls, text, attrs } = {}) {
  const node = document.createElement(tag);
  if (cls)              node.className   = cls;
  if (text !== undefined) node.textContent = text;

  if (attrs) {
    for (const [k, v] of Object.entries(attrs)) {
      if (BLOCKED_ATTR.test(k)) continue;
      if (URL_ATTRS.has(k) && typeof v === 'string' && JAVASCRIPT_RE.test(v)) continue;
      node.setAttribute(k, v);
    }
  }

  return node;
}

/**
 * Replaces all children of `container` with the provided nodes.
 * Never touches innerHTML.
 */
function replaceChildren(container, ...children) {
  container.replaceChildren(...children);
}

/**
 * Builds the coverage-level cell: bold acronym + ⓘ tooltip trigger.
 * Every string is set via .textContent — no HTML injection possible.
 */
function makeCovCell(level) {
  const wrapper = el('div', { cls: 'cov-cell' });
  const code    = el('span', { text: level, attrs: { style: 'font-weight:600;color:var(--navy)' } });
  const tipWrap = el('span', { cls: 'cov-tip-wrap' });
  const btn     = el('span', { cls: 'cov-info-btn', text: 'i',
                               attrs: { tabindex: '0', 'aria-label': COV_DESCS[level] } });
  const tip     = el('span', { cls: 'cov-tooltip', text: COV_DESCS[level],
                               attrs: { role: 'tooltip' } });

  tipWrap.appendChild(btn);
  tipWrap.appendChild(tip);
  wrapper.appendChild(code);
  wrapper.appendChild(tipWrap);
  return wrapper;
}

/**
 * Builds a small inline value-sign icon that references one of the hidden
 * SVG symbols defined at the top of index.html. `kind` must be 'no' (red,
 * Drake "No") or 'yes' (green, Drake "Yes"). The label text ("Negative Value"
 * / "Positive Value") is placed in a tooltip span that stays hidden until the
 * user hovers or focuses the icon.
 */
const SVG_NS = 'http://www.w3.org/2000/svg';

function makeValueIcon(kind) {
  const label = kind === 'no' ? 'Negative Value' : 'Positive Value';
  const wrap  = el('span', {
    cls:   `value-icon value-${kind}`,
    attrs: { tabindex: '0', role: 'img', 'aria-label': label },
  });

  const svg = document.createElementNS(SVG_NS, 'svg');
  svg.setAttribute('viewBox', '0 0 48 48');
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('focusable', 'false');

  const use = document.createElementNS(SVG_NS, 'use');
  use.setAttribute('href', `#icon-drake-${kind}`);
  svg.appendChild(use);

  const tip = el('span', { cls: 'value-tip', text: label, attrs: { role: 'tooltip' } });

  wrap.appendChild(svg);
  wrap.appendChild(tip);
  return wrap;
}

/** Builds a placeholder message node (emoji icon + descriptive text). */
function makePlaceholder(icon, message) {
  const wrap = el('div', { cls: 'placeholder-msg' });
  wrap.appendChild(el('div', { cls: 'icon', text: icon }));
  wrap.appendChild(el('p',   { text: message }));
  return wrap;
}


/* ════════════════════════════════════════════════
   CALCULATION HELPERS
   ════════════════════════════════════════════════ */

/** Returns UC contribution as a decimal (0–1), or null if ineligible. */
function calcUCPct(group, age, service) {
  if (group === 'group1') {
    // Group 1 eligibility:
    //   Age 50–54: at least 10 years of UCRP service credit required
    //   Age 55+:   at least 5 years of UCRP service credit required
    // If eligible, UC pays 100% of the max contribution.
    if (isNaN(age) || isNaN(service)) return null;
    const svc = Math.floor(service);
    if (age < 50) return null;
    if (age >= 55 && svc >= 5)  return 1.0;
    if (age >= 50 && svc >= 10) return 1.0;
    return null;
  }

  if (group === 'group2') {
    const svc = Math.floor(service);

    if (svc >= 10) {
      // Age is completely irrelevant for Group 2 with 10+ years of service.
      // Contribution is determined solely by service credit (capped at 20 years).
      return G2_SVC[Math.min(svc, 20)] ?? null;
    }

    // service < 10: age is needed only to evaluate Rule 75 (age + service ≥ 75).
    // Minimum eligibility: age ≥ 55 and service ≥ 5.
    if (age < 55)  return null;
    if (svc < 5)   return null;

    // Rule 75: age + service ≥ 75 → minimum contribution tier (50%).
    // Source: spreadsheet I19 → LOOKUP(10, C60:C70, D60:D70) = 0.50
    if ((age + svc) >= 75) return G2_SVC[10]; // 0.50

    return null; // service < 10 and Rule 75 not met
  }

  if (group === 'group3') {
    if (service < 10 || age < 50) return null;
    const si = G3_SVCS.indexOf(Math.min(Math.floor(service), 20));
    const ai = G3_AGES.indexOf(Math.min(Math.floor(age), 65));
    return (si < 0 || ai < 0) ? null : G3_DATA[si][ai];
  }

  return null;
}

/**
 * Returns true when the age field is needed to compute the UC contribution.
 *   Group 1 — always needed (age determines service-credit eligibility threshold).
 *   Group 2 — only needed when service is entered AND is < 10 (Rule 75 check).
 *   Group 3 — always needed (age × service lookup table).
 */
function ageIsRequired(group, service) {
  if (group === 'group1') return true;
  if (group === 'group2') return !isNaN(service) && Math.floor(service) < 10;
  if (group === 'group3') return true;
  return false;
}

/**
 * Calculates the premium breakdown for a single plan + coverage level.
 * Returns null if the combination is N/A.
 */
function calcRow(plan, level, ucPct) {
  const data = RATES[`${plan} ${level}`];
  if (!data) return null;

  const [total, maxUC] = data;
  const ucPays  = Math.min(total, parseFloat((ucPct * maxUC).toFixed(2)));
  const retiree = Math.max(0,     parseFloat((total - ucPays).toFixed(2)));
  const persons = PARTB_PERSONS[level] ?? 0;

  let partB = null;
  if (persons > 0 && retiree === 0) {
    const overage = parseFloat((ucPct * maxUC - total).toFixed(2));
    if (overage > 0) partB = Math.min(overage, persons * PARTB_MAX);
  }

  return { total, maxUC, ucPays, retiree, partB };
}

/** Reads the active UC % from the form (manual override takes precedence). */
function getActivePct() {
  const ov = document.getElementById('override-pct').value;
  if (ov !== '' && !isNaN(parseFloat(ov))) return parseFloat(ov) / 100;

  const g = document.getElementById('group').value;
  const s = parseFloat(document.getElementById('service').value);
  const a = parseFloat(document.getElementById('age').value);

  if (!g || isNaN(s)) return null;

  // Group 1 now requires age (age determines service-credit threshold).
  if (g === 'group1') return !isNaN(a) ? calcUCPct(g, a, s) : null;

  // Group 2 with service ≥ 10: age is not needed, proceed without it.
  if (g === 'group2' && Math.floor(s) >= 10) return calcUCPct(g, a, s);

  // All other cases (Group 2 service < 10, Group 3) require age.
  return !isNaN(a) ? calcUCPct(g, a, s) : null;
}

/** Formats a number as a dollar string, e.g. "$1,234.56". */
function fmt(v) {
  return '$' + v.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Formats a decimal fraction as a percentage string, preserving fractional
 * precision (so 0.385 renders as "38.5%", not "39%"). Whole-number
 * percentages drop their decimal (so 0.75 renders as "75%", not "75.0%").
 */
function pctStr(v) {
  const pct = v * 100;
  // Show up to 2 decimal places, then trim trailing zeros and a trailing dot.
  return pct.toFixed(2).replace(/\.?0+$/, '') + '%';
}


/* ════════════════════════════════════════════════
   TAB 1 — PREMIUM ESTIMATOR
   ════════════════════════════════════════════════ */

function renderEstimator() {
  const g       = document.getElementById('group').value;
  const s       = parseFloat(document.getElementById('service').value);
  const ageField = document.getElementById('age');
  const ageHint  = document.getElementById('age-hint');

  // Age field visibility and state
  const needAge = ageIsRequired(g, s);
  ageField.disabled = !needAge;
  ageField.style.opacity = needAge ? '1' : '0.45';

  if (g === 'group1') {
    ageHint.textContent = 'Required — Group 1 eligibility: age 50–54 needs 10+ years of service; age 55+ needs 5+ years. Eligible retirees receive 100% UC contribution.';
    ageHint.style.display = 'block';
  } else if (g === 'group2' && !needAge) {
    ageHint.textContent = 'Not required — with 10+ years of service, contribution is based on service credit alone.';
    ageHint.style.display = 'block';
  } else if (g === 'group2' && needAge) {
    ageHint.textContent = 'Required — with fewer than 10 years of service, age is needed to evaluate Rule 75 eligibility (age + service ≥ 75).';
    ageHint.style.display = 'block';
  } else {
    ageHint.style.display = 'none';
  }

  const plan  = document.getElementById('plan').value;
  const ucPct = getActivePct();
  const disp  = document.getElementById('contrib-display');

  if (ucPct === null) {
    disp.textContent = 'N/A';
    disp.className   = 'contrib-value na';
  } else {
    disp.textContent = pctStr(ucPct);
    disp.className   = 'contrib-value';
  }

  // title comes from a controlled <select>, but we still use textContent
  document.getElementById('results-title').textContent = plan || 'Premium Results';

  const area = document.getElementById('results-area');

  if (!plan) {
    replaceChildren(area, makePlaceholder('📋', 'Select a plan to view premium estimates.'));
    renderComparison();
    return;
  }

  if (ucPct === null) {
    replaceChildren(area, makePlaceholder('⚠️', 'Cannot calculate — check eligibility inputs or enter UC % manually.'));
    renderComparison();
    return;
  }

  // ── Build results table entirely via DOM ──────

  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const hdr   = document.createElement('tr');

  ['Coverage Level', 'Total Premium', 'Max UC Contrib.', 'UC Pays', 'You Pay', 'Part B Reimb.'].forEach(text => {
    hdr.appendChild(el('th', { text }));
  });
  thead.appendChild(hdr);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');

  for (const lv of LEVELS) {
    const r   = calcRow(plan, lv, ucPct);
    const row = document.createElement('tr');

    // Coverage level cell
    const firstTd = document.createElement('td');
    firstTd.appendChild(makeCovCell(lv));
    row.appendChild(firstTd);

    if (!r) {
      row.classList.add('na-row');
      row.appendChild(el('td', {
        cls:   'na-cell',
        text:  'Not available',
        attrs: { colspan: '5', style: 'text-align:center' },
      }));
    } else {
      row.appendChild(el('td', { cls: 'amount',           text: fmt(r.total) }));
      row.appendChild(el('td', { cls: 'amount',           text: fmt(r.maxUC) }));
      row.appendChild(el('td', { cls: 'amount uc-pays',   text: fmt(r.ucPays) }));

      // You Pay — red, append Negative Value icon when retiree owes > 0
      const payTd = el('td', { cls: 'amount retiree-pays' });
      payTd.appendChild(document.createTextNode(r.retiree <= 0 ? '$0.00' : fmt(r.retiree)));
      if (r.retiree > 0) payTd.appendChild(makeValueIcon('no'));
      row.appendChild(payTd);

      // Part B Reimb — green, append Positive Value icon when reimbursement exists
      const partbTd = el('td', { cls: 'amount partb' });
      partbTd.appendChild(document.createTextNode(r.partB ? fmt(r.partB) : '—'));
      if (r.partB) partbTd.appendChild(makeValueIcon('yes'));
      row.appendChild(partbTd);
    }

    tbody.appendChild(row);
  }

  table.appendChild(tbody);
  replaceChildren(area, table);
  renderComparison();
}


/* ════════════════════════════════════════════════
   TAB 2 — PLAN COMPARISON
   ════════════════════════════════════════════════ */

function renderComparison() {
  const ucPct = getActivePct();
  document.getElementById('comp-pct-label').textContent = ucPct !== null ? pctStr(ucPct) : '—';

  const tbody = document.getElementById('comp-tbody');

  if (ucPct === null) {
    const row = document.createElement('tr');
    row.appendChild(el('td', {
      text:  'Set your eligibility inputs on the Estimator tab to populate this chart.',
      attrs: { colspan: '17', style: 'padding:32px;text-align:center;color:var(--text-muted);font-size:13px;' },
    }));
    replaceChildren(tbody, row);
    return;
  }

  const rows = LEVELS.map(lv => {
    const results = COMP_PLANS.map(p => calcRow(p, lv, ucPct));
    const row     = document.createElement('tr');
    if (!results.some(r => r !== null)) row.classList.add('na-row');

    const firstTd = document.createElement('td');
    firstTd.appendChild(makeCovCell(lv));
    row.appendChild(firstTd);

    for (const r of results) {
      if (!r) {
        row.appendChild(el('td', { cls: 'nav grp-sep', text: 'N/A' }));
        row.appendChild(el('td', { cls: 'nav',         text: '—'   }));
      } else {
        row.appendChild(el('td', {
          cls:  r.retiree <= 0 ? 'net zero grp-sep' : 'net grp-sep',
          text: r.retiree <= 0 ? '$0.00' : fmt(r.retiree),
        }));
        // Part B Reimb — green, append Positive Value icon when reimbursement exists
        const pbvTd = el('td', { cls: 'pbv' });
        pbvTd.appendChild(document.createTextNode(r.partB ? fmt(r.partB) : '—'));
        if (r.partB) pbvTd.appendChild(makeValueIcon('yes'));
        row.appendChild(pbvTd);
      }
    }

    return row;
  });

  replaceChildren(tbody, ...rows);
}


/* ════════════════════════════════════════════════
   TAB 3 — VISION, LEGAL PREMIUMS
   ════════════════════════════════════════════════ */

/**
 * Renders the Vision & Legal Premiums tab. Premium rate data is not yet
 * wired in; this keeps the tab label/header/structure intact and updates
 * the shared UC-contribution pill so the tab is ready to be populated.
 */
function renderVisionLegal() {
  const ucPct = getActivePct();
  const pill  = document.getElementById('vl-pct-label');
  if (pill) pill.textContent = ucPct !== null ? pctStr(ucPct) : '—';
}


/* ════════════════════════════════════════════════
   TAB SWITCHING
   ════════════════════════════════════════════════ */

function initTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.tab).classList.add('active');
    });
  });
}


/* ════════════════════════════════════════════════
   EVENT WIRING
   ════════════════════════════════════════════════ */

function initEvents() {
  ['group', 'age', 'service', 'plan', 'override-pct'].forEach(id => {
    const node = document.getElementById(id);
    node.addEventListener('input',  () => { renderEstimator(); renderVisionLegal(); });
    node.addEventListener('change', () => { renderEstimator(); renderVisionLegal(); });
  });
}


/* ════════════════════════════════════════════════
   INIT
   ════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initEvents();
  renderVisionLegal();
  renderEstimator();
});

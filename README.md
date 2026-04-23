# 2026 UC Retiree Health Plan Premium Estimator

A client-side web tool for estimating monthly health plan premiums for University of California retirees for the 2026 plan year. Enter your eligibility details and instantly see net premiums across all UC medical and dental plans.

> **Disclaimer:** For planning purposes only. Not a guaranteed rate. Does not include premiums for retirees 65+ without Medicare, union-negotiated rates, disability rates, Via Benefits, postdocs, interns/residents, or students. See [UCnet](https://ucnet.universityofcalifornia.edu) for official rates.

---

## Features

### Premium Estimator (Tab 1)
A guided four-step form that calculates your net monthly premium after UC's contribution:

1. **Eligibility Group selector** — Group 1 (joined UCRP before 1/1/1990), Group 2 (1/1/1990–6/30/2013), or Group 3 (on or after 7/1/2013).
2. **Age & Service Credit inputs** — the form intelligently shows or hides the age field based on which group you select and whether it is actually needed for the calculation.
3. **Automatic UC Contribution %** — computed from your inputs using the correct rules for each group:
   - Group 1: always 100%.
   - Group 2: service-credit lookup, with Rule 75 (age + service ≥ 75) evaluated when service is under 10 years.
   - Group 3: the full 11 × 16 age-by-service matrix.
   - **Manual override field** lets you type a known UC % to bypass the calculation.
4. **Plan selector** covering eight medical plans and two dental plans:
   - UC Blue & Gold HMO / UC Medicare Choice
   - Kaiser Permanente / Senior Advantage HMO
   - HealthSavings+ (Blue Shield)
   - UC Care PPO / UC Medicare PPO
   - UC High Option PPO
   - UC Medicare PPO (with and without Rx)
   - UC Medicare Choice
   - Delta Dental PPO
   - DeltaCare USA (Dental HMO)

**Results panel** shows, for every valid coverage level:
- Total monthly premium
- UC's contribution (dollar amount)
- Your net premium
- Medicare Part B reimbursement amount (up to $185/person/month), when UC's contribution exceeds the plan cost for Medicare-eligible members.

A **Coverage Level Key** legend explains every abbreviation (U, UC, UA, UAC, M, MM, MC, MA, MAC, MMM, MMC).

### Medical Plan Comparison Chart (Tab 2)
A side-by-side comparison table showing **net monthly premium** and **Part B reimbursement** for every coverage level across all eight medical plans at once. The table auto-updates from your Estimator inputs, with:
- `$0.00` highlighted in green where UC fully covers the premium.
- `N/A` shown for plan/coverage combinations that don't exist.
- A pill at the top displaying the active UC contribution percentage.

### Group 3 Contribution Lookup Table (Tab 3)
An interactive reference table of the full UC contribution matrix for Group 3 retirees — rows are years of service (10–20), columns are age at retirement (50–65). Features:
- **Highlight controls** to spotlight any service/age intersection.
- **Automatic sync** with the Estimator tab inputs.
- Green cells for 100% contribution, dashes for ineligible combinations, navy/gold highlight for the selected cell.

---

## Technical Notes

- **Pure static site** — plain HTML, CSS, and vanilla JavaScript. No build step, no dependencies, no backend.
- **Strict Content Security Policy** — script execution is restricted to same-origin, inline handlers are blocked, and DOM helpers refuse `javascript:` URLs and `on*` attributes.
- **No data collection** — all calculations run locally in your browser; nothing is submitted anywhere.
- **Responsive typography** via Google Fonts (EB Garamond and DM Sans).

## Local Usage

Open `index.html` directly in any modern browser — no server required.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Page structure and form markup |
| `styles.css` | UC-branded styling and responsive layout |
| `app.js` | Rate data, contribution logic, and tab rendering |

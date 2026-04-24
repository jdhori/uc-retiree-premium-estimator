# 2026 UC Retiree Health Plan Premium Estimator

A client-side web tool for estimating monthly health plan premiums for University of California retirees for the 2026 plan year. Enter your eligibility details and instantly see net premiums across all UC medical and dental plans.

**Live site:** https://jdhori.github.io/uc-retiree-premium-estimator/

> **Disclaimer:** For planning purposes only. Not a guaranteed rate. Does not include premiums for retirees 65+ without Medicare, union-negotiated rates, disability rates, Via Benefits, postdocs, interns/residents, or students. See [UCnet](https://ucnet.universityofcalifornia.edu) for official rates.

---

## Features

### Medical, Dental Premiums (Tab 1)
A guided four-step form that calculates your net monthly premium after UC's contribution.

1. **Eligibility Group selector** — Group 1 (joined UCRP before 1/1/1990), Group 2 (1/1/1990–6/30/2013), or Group 3 (on or after 7/1/2013).
2. **Age & Service Credit inputs** — the form intelligently shows or hides the age field based on which group you select and whether it is actually needed for the calculation.
3. **Automatic UC Contribution %** — computed from your inputs using the correct rules for each group:
   - **Group 1:** age 50–54 requires at least 10 years of UCRP service; age 55+ requires at least 5 years. Eligible retirees receive 100% UC contribution.
   - **Group 2:** service-credit lookup (50% at 10 years → 100% at 20 years). If service is under 10 years, age is required so Rule 75 (age + service ≥ 75) can be evaluated.
   - **Group 3:** the full 11 × 16 age-by-service matrix (10–20 years × age 50–65).
   - Fractional percentages are displayed with decimal precision (e.g. `38.5%`, not rounded to `39%`).
   - **Manual override field** lets you type a known UC % to bypass the calculation.
4. **Plan selector** covering eight medical plans and two dental plans:
   - UC Blue & Gold HMO / UC Medicare Choice
   - Kaiser Permanente / Senior Advantage HMO
   - HealthSavings+
   - UC Care PPO / UC Medicare PPO
   - UC High Option PPO
   - UC Medicare PPO (with and without Rx)
   - UC Medicare Choice
   - Delta Dental PPO
   - DeltaCare USA (Dental HMO)

**Results panel** shows, for every valid coverage level, a color-coded breakdown:

| Column | Meaning | Color |
|---|---|---|
| Total Premium | Full monthly premium before UC's contribution | Neutral |
| Max UC Contrib. | The ceiling UC will contribute toward this plan | Neutral |
| **UC Pays** | Dollar amount UC actually pays this month | **Dark navy** |
| **You Pay** | What the retiree owes after UC's contribution | **Red** |
| **Part B Reimb.** | Medicare Part B reimbursement (up to $185/person/month) when UC's contribution exceeds the plan premium for Medicare-eligible members | **Green** |

Non-zero **You Pay** amounts are followed by a small red "You Pay" icon (Drake Hotline Bling — No). **Part B Reimb.** amounts are followed by a small green "You're Reimbursed" icon (Drake Hotline Bling — Yes). Both icons reveal a text tooltip on hover/focus for screen reader and keyboard users.

A **Coverage Level Key** legend explains every abbreviation (U, UC, UA, UAC, M, MM, MC, MA, MAC, MMM, MMC) and each abbreviation on the results table also has a hover tooltip.

### Medical Plan Comparison (Tab 2)
A side-by-side comparison table showing **Net Monthly Premium** and **Part B Reimb.** for every coverage level across all eight medical plans at once. The table auto-updates from your Tab 1 inputs.

- All Net Premium values (including `$0.00`) display in dark navy.
- Part B Reimb. values display in green, with the same "You're Reimbursed" icon for Medicare-eligible rows.
- `N/A` shown for plan/coverage combinations that don't exist.
- A pill at the top displays the active UC contribution percentage.

### Vision, Legal Premiums (Tab 3)
A dedicated tab for Vision and Legal plan rates. The tab structure, heading, and shared UC-contribution pill are in place; premium-rate data is pending — drop in the numbers from the source spreadsheet to populate the Vision and Legal cards.

---

## Accessibility

- Every `<th>` in the Estimator and Comparison tables declares a **scope** — `scope="col"` on column headers, `scope="colgroup"` on plan-name headers that span two sub-columns, and `scope="row"` on the coverage-level cell at the start of every body row. This lets screen readers announce the correct header when reading each data cell.
- Each value-icon (`.value-icon`) is focusable via keyboard (`tabindex="0"`), has `role="img"` and an `aria-label` ("You Pay" / "You're Reimbursed"), and reveals its text tooltip on both hover and focus.
- Each coverage-level abbreviation has an `i` info button with an accessible `aria-label` describing the coverage combination.

---

## Technical Notes

- **Pure static site** — plain HTML, CSS, and vanilla JavaScript. No build step, no dependencies, no backend.
- **Strict Content Security Policy** — script execution is restricted to same-origin, inline handlers are blocked, and DOM helpers refuse `javascript:` URLs and `on*` attributes.
- **No data collection** — all calculations run locally in your browser; nothing is submitted anywhere.
- **Responsive layout** — tables use `overflow-x: auto` wrappers and `white-space: nowrap` on amount cells so the number + value-icon never break across lines; narrow viewports get a horizontal scrollbar instead of wrapping.
- **Iconography** — Drake Hotline Bling SVGs (from Streamline Memes, Free) are stored as a hidden `<symbol>` sprite at the top of the document and referenced via `<use>`. Stroke / fill is `currentColor`, so the icons inherit the red or green color from the cell they live in.
- **Responsive typography** via Google Fonts (EB Garamond and DM Sans).

## Local Usage

Open `index.html` directly in any modern browser — no server required.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Page structure, form markup, and hidden SVG icon sprite |
| `styles.css` | UC-branded styling, responsive layout, icon and tooltip styles |
| `app.js` | Rate data, contribution logic, tab rendering, and DOM helpers |

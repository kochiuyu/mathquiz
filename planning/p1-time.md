# P1 Time (I): objective evidence and first release

**Status:** bilingual teacher-led activity authored; publication, browser/print review and independent review pending. This does not claim that the unit is verified complete or that pupils have demonstrated mastery.

## Sources and boundaries

Checked 16 November 2026: [EDB 2017 supplement, 1M4, printed pp.15–16 / PDF pp.18–19](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=18) and [EDB KS1 explanatory notes, printed pp.12–13 / PDF pp.18–19](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=18).

The seven objectives cover analogue hour/half-hour readings, the hour unit, interval measurement/comparison, simple time problems, weekday names, month names and calendars. Intervals are whole hours, at most twelve. Problems find either finishing time or elapsed time, not starting time. Hand drawing is not required. The notes additionally call for a lived sense of one hour, clock/stopwatch measurement, quicker/slower comparisons and approximately four weeks per month. Do not prescribe Sunday or Monday as the only start of a week. Calendar tasks retrieve dates and weekdays, not day-count calculations. Minute calculations, 24-hour notation and leap-year rules are not assessed here.

## Routes and delivery

- [English pupil sheets](../activities/p1-time.html?lang=en)
- [Traditional Chinese pupil sheets](../activities/p1-time.html?lang=zh)
- [English teacher key](../activities/p1-time.html?lang=en&key=1)
- [Traditional Chinese teacher key](../activities/p1-time.html?lang=zh&key=1)

Each language has three pupil sections, with print page breaks: clocks/problems; week/month/calendar; real observation. A separate teacher section is hidden by default and printed only when revealed. SVG clocks and the static calendar are embedded in HTML, so pupil figures do not depend on JavaScript generation or outside assets. JavaScript controls language/key routes and printing. The teacher records oral, written or adapted responses with independent/prompted/not-yet/not-observed categories.

## Numbered objective map

| EDB objective | Authored evidence | Acceptable observable result | Missing evidence / limits |
|---|---|---|---|
| 1 · Hour and half-hour readings | Task 1: four analogue SVG clocks, including twelve and a half-hour just before twelve. | Read A three o’clock, B half past seven, C twelve o’clock, D half past eleven. Distinguish hands. | No digital question family in this change. Adapt with tactile clock if images are inaccessible. |
| 2 · Hour unit | Task 5: observe ordinary activities over one genuine hour and explain `h`. | Actual endpoint readings, description of activities and hour-unit recognition. | No invented results; classroom observation must still occur. |
| 3 · Measure/compare intervals | Task 6: actual one-hour and two-hour observations using a clock; Task 2d gives a separate same-puzzle quicker/slower comparison. | Clock-based measurements, correct longer/shorter comparison; Jo quicker than Kim. | A paper answer alone cannot close practical measurement. Teacher must organise observation. |
| 4 · Simple interval problems | Task 2a/c find finish time, including the twelve-to-one boundary; Task 2b finds elapsed hours. | Five o’clock, one o’clock, two hours; count-on reasoning accepted. | This resource samples both problem types, not every numerical case. |
| 5 · Week and day names | Task 3 asks number of days and all names in cyclic order. | Seven, with all seven names; any starting day allowed. | Teacher records individual naming errors rather than participation alone. |
| 6 · Year and month names | Task 3 asks number of months, all names in order, approximate weeks/month. | Twelve, January–December (or 一月至十二月); about four weeks. | Does not require month-length or leap-year memorisation. |
| 7 · Calendar interpretation | Task 4 uses the actual November 2026 Gregorian layout. | Month/year, Monday the 16th, Fridays 6/13/20/27, Sunday the 22nd. | No holiday labels or current-date assumption; this is a fixed dated task. |

Every numbered objective has an authored task and observable criterion. Practical tasks remain unobserved until a teacher conducts them. Do not confuse resource coverage with pupil attainment or the project’s full release sign-off.

## Mathematical checks

- Clock endpoints use `(hour mod 12 + minute/60) × 30` degrees for the shorter hand and `minute × 6` degrees for the longer hand. Half-hour hour hands lie halfway between adjacent numerals, not on the previous numeral.
- Fixed clock answers are 3:00, 7:30, 12:00 and 11:30. Both hands visibly differ in length and width, including when aligned at twelve.
- Finishing-time examples: 2 + 3 hours → 5; 11 + 2 hours → 1. Elapsed example: 9:30 to 11:30 is two hours. Only whole-hour durations appear.
- November 2026 begins on Sunday and ends on Monday. The calendar is generated once from Python’s Gregorian calendar, with Monday-first columns and all dates 1–30 exactly once. Six calendar rows are legitimate here; the roughly-four-weeks teaching point is not a claim of exactly four printed calendar rows.
- Measurement examples in the key are explicitly setup examples, not prefilled observations. If real observation misses whole-hour endpoints, repeat rather than rounding or inventing readings.

## Release gates and remaining work

Before global status/count changes, review both language routes, key hide/reveal and keyboard activation, actual print preview with key off/on, clock and calendar legibility in grayscale, browser console and accessibility adaptation. Verify printed pupil sheets never contain the key. The key may flow onto additional pages; do not promise an exact printed page count until rendered.

No builder, quiz, practice, global index, font or tests files were changed by this task. Any later digital families need permanent IDs, exhaustive finite-variant checks, localized marking/hints, practice integration, paper/key and PDF font tests, and existing-ID regression. This activity is deliberately usable without them. Independent translation review, screen-reader testing, physical printing and classroom observations remain unperformed.

# P2 Time (II) · 2M2

**Integrated local candidate.** Source and finite mathematics/geometry independently reviewed. Live browser verification and publication pending; no unit-completion, pupil-mastery or delivered-inquiry-hours claim.

## Official audit and boundaries

Checked 16 November 2026: [EDB supplement PDF 33–34, printed 30–31](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=33); [KS1 explanatory notes PDF 37–38, printed 31–32](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=37).

All **ten** objectives belong here, including 24 hours/day, month lengths, common/leap years and calendar-event problems. These are not later-unit additions. P1 hour/half-hour reading is only prerequisite evidence, not sufficient for this unit.

Minute-reading applies to analogue AND digital clocks. Drawing hands is not required. Timing measurements and minute-interval problems use whole numbers no greater than 60. The required clock problems find finishing time from start plus duration, or elapsed minutes from start and finish. This draft does not add inverse starting-clock-time problems. Calendar-event problems separately require all three unknowns: starting date, finishing date or day count, using calendars.

Recognising 24 hours in a day does not require a 24-hour clock-notation conversion bank. Context determines morning/afternoon; noon and midnight may be labelled explicitly. Midnight ends one day and begins the next. Comparing consecutive-year calendars explains February variation and 365/366 days; no leap-year divisibility algorithm is required. No seconds calculations, fractional minutes, multi-hour interval exercises or hand drawing introduced.

## Pupil and teacher activity

[English](../activities/p2-time-ii.html?lang=en) · [Chinese](../activities/p2-time-ii.html?lang=zh) · [English key](../activities/p2-time-ii.html?lang=en&key=1) · [Chinese key](../activities/p2-time-ii.html?lang=zh&key=1)

| Objective | Task/evidence |
|---|---|
| 1 · nearest-minute time reading | Task 1: four labelled, 60-tick analogue clocks at 3:07, 8:42, 11:58, 12:01; digital displays 09:06, 09:16, 09:11; chronological ordering and earlier/later explanations. |
| 2 · minute | Task 2: actual adult-timed one-minute experience and 60 minutes = 1 hour. |
| 3 · measure/compare minutes | Task 2: pupil uses real clock/stopwatch for two activities lasting 2 and 3 whole minutes, with adult exact start/stop signals and undisclosed target durations, records and compares. Copying adult-provided numbers is not measuring evidence. |
| 4 · simple interval problems | Task 3: finish time crossing an hour (3:50 + 20 = 4:10), elapsed minutes (4:35 to 5:10 = 35), exact 60-minute duration (2:15 to 3:15). Explain through counting/clock. |
| 5 · 24 hours/day | Task 4 asks day length, not 24-hour notation. |
| 6 · a.m./p.m. | Task 4 attaches context to 8:05 a.m. and 3:20 p.m.; clock-only display cannot determine period. |
| 7 · morning/afternoon/noon/midnight | Task 4 reads four contextual analogue clocks E–H (8:05, 3:20, 12:00, 12:00) as well as digital school/home/lunch/day-boundary contexts; explicit noon/midnight labels, Monday-to-Tuesday continuity. |
| 8 · month lengths | Full, actual 2027 month grids, Monday-first; pupils read last dates and classify 30/31-day months, recording all twelve lengths. |
| 9 · common/leap years | Compare February 2026, 2027, 2028; total 2027 month lengths to 365 and explain the extra February day making 366 in 2028. |
| 10 · calendar-event problems | Task 7 marks actual 2027 calendars for missing duration (Jan 30–Feb 2, four days), finish (Apr 29 plus four inclusive days, May 2), start (three inclusive days ending Mar 2, Feb 28). All event days explicitly include first and last dates. |

Five pupil sheets and two hidden teacher sheets per language. Sessions should be split; monthly grids are reading resources, not a large single sitting. Tools and safe timing tasks are real, not simulated measurements. Adult privately assigns music 2 minutes and cards 3 minutes; pupil sheets do not disclose those targets. Adult signal controls exact whole-minute durations while pupils independently read/record timing. If a signal is missed, repeat rather than force a fractional observation into an integer answer.

Analogue SVG uses minute-hand angle `6 × minute` degrees and hour-hand angle `30 × (hour mod 12) + minute/2`, so the hour hand moves continuously, including 11:58 near but before 12. SVG accessible label identifies the clock without leaking its answer. A tactile clock or equivalent supported assessment is needed for pupils unable to access the visual diagram; this page does not claim independently accessible analogue assessment.

Hidden teacher rubric separately records actual reading, tool use, reasoning and calendar actions as independent/prompted/not-yet/not-observed. Transcription or partner support is not independent tool evidence.

## External screen proposals and checks

`mathquiz-2m2-families.js` and `.test.js` outside the repo propose:
- `timefinish2a`: 12 variants, two numeric fields (afternoon hour and minute), **two marks**, consistent with generic P2 per-field scoring.
- `timeelapsed2a`: 12 variants, one numeric minute field, one mark.

Both sample objective 4 only. All whole-minute intervals are 1–60, within the same afternoon, no noon/midnight crossing. IDs/variant order are proposed permanent payloads. Metadata `time2M2` holds start/end components, duration, kind and bilingual hints. Integrator must wire practice hints and labelled hour/minute answer keys so a pair never appears as an ambiguous fraction-like `4 / 10`. Numeric aliases may accept 00 as zero minutes; required fields must still reject blanks. Existing families remain unchanged.

Independent minute-by-minute stepping tests verify all 24 outcomes, bounds and field-mark alignment. Static validation checks month grids using Python calendar, clock hand endpoint formulae, hidden language/key sections and script syntax. Browser, PDF/print pagination, mobile readability, translation and independent source review remain pending. No global edits or publication.

## Integrated candidate checkpoint · 16 November 2026

The design/proposal sections above retain the original audit history. The reviewed later-P2 activities are now registered locally, and eight new digital families are integrated where appropriate. Existing pictogram tasks remain unchanged; inquiry is teacher-mediated, not a new automated attainment score.

The zero-dependency static gates pass 97 permanent families / 1,641 variants and all 112 new arithmetic/geometry cases. All 1,529 previously released payloads are preserved. The suite contains 298 authored browser checks, **not a passed live result**. Shared routes, partial scoring, labelled keys, visual practice, bilingual PDF exports and phone layouts await deployed verification.

Classroom observations, independent translation certification, teacher print-preview pagination/key isolation, physical printing, screen-reader testing and manual downloaded-PDF visual inspection remain unperformed. Resource completeness does not certify practical performance, pupil mastery or delivery of the full allocated inquiry time.

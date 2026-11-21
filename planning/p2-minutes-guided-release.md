# P2 minutes, clocks and elapsed time · 2M2 objectives 1–4

22 November 2026 (Hong Kong).

[Open the topic](https://kochiuyu.github.io/mathquiz/p2-learn.html?path=minutes) · [Evidence](p2-minutes-guided-evidence.json) · [Plan](p2-guided-learning-plan.md) · [Existing resources](p2-time-ii.md).

## Scope and sequence

Checked against [EDB KS1 explanatory notes, printed pages 31–32 / PDF pages 37–38](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=37). Time (II) has ten numbered objectives. This first guided release addresses objectives 1–4: nearest-minute analogue/digital reading and ordering, experiencing a minute, real measurement/comparison, and finishing times or elapsed intervals. Objectives 5–10, including times of day and calendars, remain planned. The topic map makes this boundary explicit.

Begin with a real one-minute experience and the 60-minute hour. Read analogue clocks, then connect digital notation and ordering; measure actual intervals before using start/finish problems. P1 o’clock and half-past lessons are linked for revision. This everyday-maths branch can be used independently of later arithmetic topics.

Intervals are whole minutes, at most 60. Questions use times within the same part of a day and avoid ambiguous overnight intervals. There is no required drawing of hands, inverse starting-time exercise, seconds calculation or 24-hour notation conversion in this release.

## Six lessons

| Lesson | Teaching and practical evidence |
| --- | --- |
| Experience a minute | Adult-timed real activities, one minute per tick, 60 minutes per hour and 30 minutes per half-hour. |
| Read every minute on a clock | Hour-hand position between numbers, minute ticks and near-hour boundaries such as 11:58 and 12:01. |
| Digital clocks, earlier and later | Hour/minute fields, leading zeros, same-morning comparisons and an ordered three-time teaching example. |
| Measure and compare minutes | Real clock/stopwatch use with exact start/stop signals; two separately saved self-reported trials. |
| Find a finishing time | Count forward from a start, bridge the next hour and include an exact 60-minute interval. |
| Find elapsed minutes | Count from start to finish; avoid subtracting minute digits alone across an hour. |

Adds 18 teaching steps, 12 guided tasks, 54 practice tasks and a separate 12-item sample check. P2 now has **14 topics, 79 lessons and 711 practice tasks**. Earlier data and practice banks are preserved.

## Clocks, models and practical records

Original SVG clocks have 60 ticks and 12 numerals. The short hour hand moves continuously with the minutes. Independent static checks recover both hand angles from the rendered endpoints at all 720 hour/minute positions. Analogue reading questions have neutral accessible labels without the answer; teaching examples can also show the digital time. The labels alone are not a nonvisual substitute for reading a clock. Real/tactile clocks and supported alternatives remain necessary; independent screen-reader review is pending.

Keyboard-operable model controls advance the displayed clock instantly by 1, 5, 10 or 60 minutes, up to a total of 60. They do not measure real elapsed time or award marks. The model resets on leaving, retains keyboard focus after each redraw and states this limitation on the page. Notes persist separately.

The practical notebook records two real timing trials: activity, clock/stopwatch, whole-minute interval, reported assistance and observation. It compares the reported intervals without awarding marks. Adults give accurate start/stop signals; a missed signal calls for repeating the trial, not rounding. Reports and assistance labels are self-reported, not independently observed achievement. Every lesson links the existing whole-unit activity; that supplementary resource does not imply that all ten objectives have guided lessons yet.

## Saved progress and assessment

Each learner has a separate `mathquiz-p2-minutes-v1` topic record and `mathquiz-p2-minutes-fieldwork-v1` notebook. Eighteen earlier data/support files are frozen by hashes, including the previous thirteen topic data files, shared store and earlier notebook/visual support. Topic reset affects only that learner’s current topic and notebook. Tests cover stale saves, full-width digits, future-format protection, invalid drafts, blocked storage and other-learner preservation.

Clock answers use separate hour/minute fields with limits 1–12 and 0–59; all fields must match for one item to score. Leading zeros and full-width numeric entry are supported. Earlier answer limits remain unchanged. The sample check is repeatable with the same questions and is not a certificate of real clock or stopwatch use.

## Verification

All **1,756 distinct local and public browser cases verified** on the final implementation. The final local run had 3 successful exact reruns; the public run had 5. Original results and errors are retained in the evidence. Author phone inspection exposed inherited P1 clock-pair child widths: clocks became too small and digital times wrapped. The P2 model now overrides those widths and keeps clock notation together; layout tests check clock size, single-line digital times and overflow. The full local suite was rerun after the repair. All **33 static suites passed**, including nine new minute/clock gates. All **24 changed runtime/test files** matched deployed SHA-256 hashes. Runtime commit `370ef39e10d2801d862627d87d1c2c17c9acd866`; [successful deployment](https://github.com/kochiuyu/mathquiz/actions/runs/44925935246).

Author checks at 320px visually inspected the Chinese 11:58/12:01 teaching pair and the real-timing notebook. After repair, pair clocks were about 218px wide, digital times stayed on one line and there was no horizontal overflow. Native Enter advanced the clock model by five minutes to 3:05 and retained focus on its button. These are author checks, not independent pupil or accessibility evidence.

## Next step and pending validation

Next: **Time (II) objectives 5–10: times of day and calendars**. Compass directions and integrated inquiry remain planned. Classroom trials, observed real timing/clock use, independent translation, physical printing and screen-reader review remain pending.

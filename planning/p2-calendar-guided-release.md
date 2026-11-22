# P2 times of day and calendars · 2M2 objectives 5–10

22 November 2026 (Hong Kong).

[Open the topic](https://kochiuyu.github.io/mathquiz/p2-learn.html?path=calendar) · [Evidence](p2-calendar-guided-evidence.json) · [P2 plan](p2-guided-learning-plan.md) · [Whole-unit resources](p2-time-ii.md).

## Scope and sequence

The [EDB KS1 notes, printed pages 31–32 / PDF pages 37–38](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=37) require a 24-hour day, a.m./p.m., contextual morning/afternoon/noon/midnight reading, month lengths, common/leap years and calendar event problems. This release supplies guided materials for objectives 5–10. Together with [minutes and clocks](p2-minutes-guided-release.md), guided materials now address all ten Time (II) objectives. This is not a claim of pupil mastery or classroom validation.

The sequence moves from the daily cycle to month/year calendars, then counts event dates before finding missing endpoints. It links back to minute clocks and P1 time. No 24-hour notation conversion, leap-year divisibility algorithm or inverse clock-start problem is added. Noon and midnight are named explicitly; the tasks do not depend on ambiguous 12 a.m./p.m. labels.

## Six lessons

| Lesson | Guided and practical work |
| --- | --- |
| A whole day, morning and afternoon | 24 hours including sleep; read hour, minute and period together using both clock types and contextual clues. |
| Noon, midnight and the next day | The middle of a day and the boundary between days; time continues across midnight. |
| Read all twelve month lengths | Read the final numbered date, explore every month, record and classify all twelve lengths. |
| Common years and leap years | Compare consecutive February calendars, total the month lengths and explain 365 versus 366 days. |
| Count the days of an event | Include both endpoints explicitly; one-date events and cross-month events, including leap February. |
| Find the first or last date | Count forwards or backwards with the known endpoint included, then check in the reverse direction. |

Adds 18 teaching steps, 12 guided tasks, 54 practice tasks and a separate 12-item sample check. P2 now has **15 topics, 85 lessons and 765 practice tasks**. There are six new lesson IDs and 78 unique answer IDs. Earlier payloads and saved learner records are preserved.

## Calendars and interaction

Month tables use real Gregorian dates and Monday-first weekday columns, with captions and full weekday names available on abbreviations. Blank cells are not dates. Independent Python calendar fixtures verify rendered rows for 108 months, including 1900/2000 century boundaries and 2026–2032. These internal edge checks do not introduce a divisibility rule to pupils. Event answers are independently checked with Python date arithmetic and inclusive counting.

Question calendars show the required months without highlighting an answer. Worked teaching examples mark the explained dates. The explorer offers all twelve months for 2026–2032. Keyboard-operable date buttons toggle a temporary count; changing month/year clears selection, leaving resets the model, and focus returns after redrawing. These actions award no marks and save no personal event.

Contextual clock questions ask for the complete time, with distractors for an incorrect period, hour or minute. A clock alone cannot determine a.m./p.m. The original continuous-hand renderer is reused unchanged. Its neutral labels do not provide a nonvisual substitute for reading the hands; tactile clocks or supported alternatives remain necessary.

All event questions explicitly count first and last dates. This measures the number of event dates, not elapsed 24-hour periods. Date answers use separate month/day fields and reject impossible dates for the stated year, including February 29 in a common year. Both fields must be correct for one item to score. Full-width digits and leading zeros are supported.

Every lesson has a practical prompt and links the existing activity. Paper calendars, oral explanations and adult observations remain separate from screen marks. The model does not certify real calendar use, unaided reasoning or completion of practical work.

## Progress and compatibility

The new topic uses `mathquiz-p2-calendar-v1`, separately for each learner. Twenty-one earlier data/support files are frozen, including the minutes questions, visual renderer and timing notebook. The previous minutes map now links forward and shows current handoff wording without modifying its original questions. Existing learner resets remain topic-specific. Long records, stale saves, future-format protection and learner isolation are covered by checks.

## Verification

All **1,864 distinct local and public browser cases verified**. Original failures and exact reruns are retained below in the evidence. An initial browser-test failure used a detached calendar element after a redraw; the test now reacquires the live model. Native interaction confirmed month/year navigation, and the entire 108-case calendar suite was verified again after the test repair and explanation-label refinement, including one exact timeout rerun. A broad topic-count test edit also mistakenly changed a division counter-conservation assertion from 14 to 15; all inherited assertions were restored, with only the topic selector updated, and the full 110-case division suite was verified again, including one exact timeout rerun. Product division data and code were unchanged. All **34 static suites passed**, including eight new calendar gates. All **25 changed runtime/test files** matched deployed SHA-256 hashes. Runtime commit `427d886fbf54bdab5c5f2b802ac43637a6a82b22`; [successful deployment](https://github.com/kochiuyu/mathquiz/actions/runs/44963900383).

Author checks at 320px visually inspected the Chinese month explorer. Its calendar measured 221px wide, with no horizontal overflow. Native Enter marked January 31 and retained focus; changing to February 2028 produced 29 date buttons, cleared the selection and retained select focus. These author checks do not replace independent accessibility or pupil trials.

## Next and pending

Next: **Directions and positions (II), 2S3**. Integrated inquiry and a whole-P2 coverage/readiness review remain planned. Classroom trials, independent translation, screen-reader listening and physical printing remain pending.

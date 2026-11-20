# P1 teaching pathway: time and calendars

20 November 2026. Tenth student pathway; original English and Traditional Chinese teaching.

[Start Time and calendars](https://kochiuyu.github.io/mathquiz/learn.html?path=time) · [Evidence](p1-time-evidence.json)

## Curriculum scope

The [EDB Key Stage 1 explanatory notes](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/en_ks1_e.pdf#page=18), printed pages 12–13, define 1M4. The pathway reads analogue clocks at o’clock and half past, introduces hours (h), counts whole-hour intervals up to 12, and finds a finishing time or elapsed interval. It teaches the seven weekday names, twelve month names, roughly four weeks per month, and reading calendar dates/columns. Real experience of an hour and actual measurement/comparison need adult observation.

It does not require drawing clock hands, reading intermediate minutes, minute arithmetic, 24-hour notation, finding a starting time from an ending time, leap-year rules or calculating day intervals. The date illustration is a labelled **November 2026 sample**, not a current-date display or public-holiday calendar. A week can be displayed with different first columns; no particular day is taught as the mandatory start of a week. All wording, question contexts and diagrams are original; no source exercise or image is copied.

## Lessons and progression

| Lesson | Teaching | Easy → Normal → Difficult |
|---|---|---|
| Read clocks / 讀時鐘 | Short hour hand, long minute hand; whole hours; half past with the hour hand between adjacent numbers. | Choose a reading; supply the hour in an o’clock/half-past frame; correct reading only one hand, including half past twelve. |
| Count the hours / 數小時 | The hour unit; count forwards across twelve; count gaps rather than readings. | Find an ending hour or duration; compare duration for the same task; correct inclusive counting and handle half-hour starts and a full twelve-hour turn. |
| Days and calendars / 日子與月曆 | Weekday cycle; twelve month names and approximate weeks; find a date’s column. | Match dates to weekdays; recall week/year counts and find the first Friday; use a Sunday-first calendar, move December to January and distinguish roughly four weeks from exactly four. |

Each lesson has three teaching steps, two guided questions and three questions at each difficulty. The **27 new practice items** bring the journey to **10 pathways, 30 lessons and 270 levelled practice items**. A separate six-question check samples two generated questions per lesson, including both finishing-time and elapsed-duration problems. Retakes rotate three overlapping deterministic configurations; they are not independent standardised assessments. Practice can complete after correction. The existing 5/6 recommendation is provisional, not calibrated mastery.

## Diagrams and accessibility

Original SVG clocks show twelve numerals, a shorter thicker hour hand and a longer thinner minute hand. The hour hand advances halfway between adjacent hour marks at half past, including between twelve and one. Accessible descriptions state the positions of both hands. Colour is supplementary; length and thickness also distinguish the hands. Pupils answer a numbered reading or the requested hour number, rather than entering a time string.

Interval diagrams show the supplied start and finish, or a question mark when the finish is unknown. Whole-hour examples keep the half-hour position unchanged. Twelve elapsed hours may return to the same clock reading without implying no time has passed. Duration comparisons explicitly concern the same task.

The calendar uses a semantic table with a caption, column headers and actual dates. Monday-first and Sunday-first variants show the same fixed month. Weekday alternatives sit compactly below it. The month list gives all twelve names, and the weekday list is a repeating cycle, not an assertion about the first day of every calendar. Every new teaching action and first practice answer is tested at 320 × 812 in both languages.

## Practical continuation

A collapsed “Try with a real clock” section links to the existing bilingual [P1 Time activity](../activities/p1-time.html). It supports a real experience of one hour, recording actual clock readings and measuring/comparing whole-hour durations. The teacher key stays hidden initially. Opening or completing a digital task does not award observed practical competence. The previous levelled P1 bank has no time skill; the final successful pathway action therefore opens this real-clock activity rather than an invalid skill route. Existing adult resources are unchanged.

## Saved-work compatibility

New path `time`; lessons `readclock`, `elapsedhours`, `calendays`; separate `checks.time` and path cursor. All earlier question payloads and identifiers are hashed against the preceding release. Three separate pupil slots keep the existing version-1 browser-local record. No account, tracking cookies or cross-device sync is added. Schema-based read capacity rises to 59,776 characters. The new fully populated record fixture is 33,184 characters. Tests cover near-boundary, malformed and oversized storage; reading/probing does not overwrite an unreadable record. Old quiz results, zero/100 answers and reset isolation are retained.

## Verification

All **143 local cases are verified**: the full run passed 142/143; `Subtraction complete en` passed its exact rerun after a test-frame reset timeout. Twelve static gates passed. The English half-past-twelve sample at 320 × 812 had no overflow and its first answer ended at pixel 768.84. Public verification is pending. The first focused English mobile test found the calendar teaching action below the viewport. A heading edit alone was insufficient; shortened teaching text fixed it, then the test exposed the first Easy calendar input below the viewport. Shorter prompts, compact calendar spacing and inline weekday choices fixed this. Both English and Chinese focused cases now pass. Exact development runs and final outcomes are retained in the evidence.

The new static gate independently derives 216 generated answers, checks all 27 practice answers and twelve check configurations, and verifies the time/calendar scope and earlier content. The browser suite contains 143 cases: all 128 previous cases plus 15 time cases covering bilingual completion, wrong/blank responses, retakes, saved continuation, unavailable storage, four layout widths, all new mobile teaching/practice views, clock-hand geometry, a full-turn interval, calendar column/date alignment and both activity languages. Twelve static gates include the previous pathway and shared resource/UI checks.

Pupil trials, independent translation review, screen-reader listening, real-time classroom observation and physical printing remain unperformed. The broader 267-case shared UI/activity browser suite is not repeated; focused teacher gateways and shared static gates are included. This remains partial P1 teaching coverage. The separate curriculum/resource catalogue counts and existing question banks are unchanged.

## Next work and workflow

1. 3-D shapes (1S1): prisms, cylinders, pyramids, cones and spheres; connect pictures to real objects and observe rolling/stacking. Check the exact EDB limits first.
2. 2-D shapes (1S2), then spatial position (1S3).
3. Inquiry and classroom follow-up; refine explanations using pupil responses.

Repeatable workflow: verify official scope; author original bilingual teaching and diagrams; independently derive question answers; preserve old IDs and records; check language, mobile actions, unavailable storage and activity routes; inspect representative visuals; publish with the expected branch head; compare deployed files; record exact failures/reruns and unfinished human reviews.

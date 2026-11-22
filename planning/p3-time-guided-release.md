# P3 Time (III) — guided release

22 November 2026. [Open the pathway](../p3-learn.html?path=time). Baseline: `52a69028c7930acaf9a7dcd67ff1c75bbac79672`.

## Scope and source

The existing official copy of [EDB KS1 notes, PDF page 58 / printed 52](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=58) was reread with the [prior source audit](p3-time-iii.md). No fresh PDF download is claimed. Three objectives cover second(s), actual measurement/comparison in seconds and finding any missing start/finish/duration. The [existing bilingual activity](../activities/p3-time-iii.html) and practice-bank payloads remain unchanged.

| Lesson | Guided experience | Separate pupil evidence |
|---|---|---|
| Feel a second · 1 | Start signal is zero; 60 illustrated intervals make one minute | Experience real 1/2/3-second gaps and a full minute with a suitable clock/signal |
| Real timing · 2 | Safe start/finish plans, example comparisons and optional stopwatch | Estimate, operate/read a tool, record actual precision, repeat and compare |
| Finishing time · 3 | Count forward across an hour | Draw a timeline, explain boundary and check backward |
| Elapsed minutes · 3 | Count the gap, splitting at the hour | Reconstruct the finish and explain intervals |
| Starting time · 3 | Count backward from finish, then verify forward | Solve an unseen inverse problem with own jumps/clock |
| Whole-hour unknowns · 3 | Start/finish/duration with a.m., noon, p.m. and midnight context | Make three related stories and check all inverse relations |

Six lessons provide 54 practice tasks, twelve guided examples and twelve sample checks. Word-problem durations are positive whole minutes no greater than 60 or whole hours no greater than 12; no seconds arithmetic is required in these stories. Actual timing intervals are reasonable but not capped at 60 seconds. Hours use complete twelve-hour labels; twenty-four-hour notation is the next topic. Internal minute-of-day values are implementation details, not pupil notation.

Checks have distinct prompts and new clock-problem tuples. Conceptual seconds/measurement items revisit core properties; this is not a wholly independent readiness assessment. Safe practical activities are seated and exclude running, breath-holding and speed competition.

## Models and records

The interval button starts at zero, advances one illustrated one-second interval and shows 60 s = 1 min. Click timing is explicitly not a real clock. Actual one-second experience uses a real clock, stopwatch or teacher-set signal.

The optional stopwatch uses elapsed browser-clock time, not callback counts. Delayed/background refresh does not redefine elapsed time. It displays tenths of a second without guaranteeing that accuracy, supports stop/continue/reset, preserves form drafts, and never automatically saves a measurement. Rapid updates are not live announcements. The two actual-timing records require a start/finish/tool plan, target and original estimate before readings, precision/uncertainty, reflection and help can be recorded. Decimal readings are preserved as actual record text rather than rounded into invented exact integers. A stopwatch reset does not reset learner evidence.

Analogue clocks include continuous hour-hand movement and complete time captions. Missing start/finish clocks are hidden until the learner reveals a forward check. Whole-hour examples include 12-hour durations, midnight and noon. Human observation of practical timing and explanations remains separate from screen answers.

First answers, one supported retry, observations and inquiry predictions stay separate by topic/learner. Existing length, capacity and weight notebooks retain their IDs and behavior. Damaged/future/oversized records are protected, stale writes refused, and unavailable storage is labelled temporary. Models earn no marks. The prerequisite review points to its actual `measure` session; there is no invented `time` session.

## Verification and corrections

The first static run passed eleven gates and failed the fresh-check gate on `p3-timecheck-11`: the initial whole-hour generator cycled back to a practice tuple. The two whole-hour checks were replaced with new same-day examples, then all twelve gates passed. Singular-hour grammar and complete Chinese day-period labels were refined before browser verification.

Static gates check bilingual inventory, independent forward stepping and bounds, all 1,440 displayed clock-hand positions, noon/midnight labels and options, stopwatch elapsed-time behavior including long gaps/pause/resume, check freshness, timing-record constraints/precision, earlier notebooks, inherited files, ten-topic/three-learner isolation, answer bounds, first/retry/prediction evidence and protected/full storage. Browser checks exercise all task stages and languages, hidden/revealed clocks, interval model, live stopwatch start/stop/reset, saved timing records, four layout widths and storage failure modes. Results and exact timeout reruns are retained in [evidence](p3-time-guided-evidence.json).

## Remaining validation

Classroom trials, independent translation, screen-reader listening, physical printing and observed pupil tool use remain pending. Display resolution is not an independently calibrated accuracy claim. Saved notes/screen matches do not certify mastery, practical independence or delivered teaching hours. Next: Time (IV), then bar charts and remaining arithmetic/fraction applications.

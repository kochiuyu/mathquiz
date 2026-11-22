# P2 integrated investigations

22 November 2026. [Open an investigation](../p2-investigate.html?path=division). Sixteen bilingual investigations are connected to the sixteen existing P2 guided topics. The lesson inventory stays at 90 lessons and 810 practice tasks; investigations are optional opportunities, not a seventeenth topic or extra marked questions.

## Source and learning design

The [EDB KS1 explanatory notes, printed page 42](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/en_ks1_e.pdf#page=48) and [existing 2F1 unit brief](p2-inquiry.md) frame inquiry as integrated mathematical learning. The activities here are MathQuiz-authored examples. They do not certify the allocated inquiry time, classroom delivery or pupil attainment.

Each investigation asks pupils to make a choice or set a criterion, predict, plan what changes and stays fixed, gather evidence, explain and test an extension. Pupils may talk, draw or manipulate objects with recorded support. Adult discussion guidance is collapsed initially. Screen answers are not supplied as an inquiry score.

| Topic | Investigation | Connection / boundary |
| --- | --- | --- |
| Numbers | Compare grouping methods for one collection | Fixed total, chosen helpfulness criterion, running counts within 999. |
| Arithmetic | Choose useful first pairs | Same three addends, intermediate totals, models and reasons. |
| Faces | Identify solids from selected clues | Base and other-face evidence; turn real models and revise clues. |
| Multiplication | Turn an array | Keep the collection; distinguish product from ordered grouping meanings. |
| Facts | Compare methods for an unfamiliar fact | Construct from groups/arrays/known facts; no inferred recall score. |
| Metres | Improve a personal reference | Original and revised methods estimate the same new target before measurement; equal/worse outcomes valid. |
| Pictograms | Represent the same cards two ways | Same disjoint categories and one-to-one whole symbols; record reader questions. |
| Thousands | Cross 1000 in different groups | Record all running totals; no multiplication algorithm. |
| Money | Same value, different notes | Choose criterion; only $10/$20/$50 set, no exhaustive combination requirement. |
| Change | Compare subtraction and counting up | Fixed cost/payment, retained estimates and corrections, whole dollars. |
| Division | Useful equal packing | Chosen criterion, all four pack sizes, 12 then 14 counters; leftovers explicit. |
| Angles | Change arms or opening | Control one variable, use overlap; no numerical angle measures. |
| Quadrilaterals | Deform fixed strips | Check equal sides and right angles, then repair and transfer. |
| Minutes | How a measured minute feels | Same measured duration, different activities, optional reversed order; personal observations only. |
| Calendars | Same four-day event in two years | Keep start/month and inclusive count fixed; compare boundary crossings. |
| Directions | Turn the body, keep objects fixed | Real compass measurements, reference reversal and separately observed movement. |

The linked [paper investigations](../activities/p2-inquiry.html) remain the more detailed support for packing and fair same-target estimation. Every investigation also links the relevant practical activity. Later trial predictions must be written before testing and preserved on paper; the digital notes are self-reports, not verified timestamps.

## Records and navigation

Every topic map and lesson/check screen links to its investigation, preserving language, learner and test-mode parameters. Investigations have a topic selector, three learner slots, bilingual navigation and a return to the topic map. Existing lesson cursors, marks, practical notebooks and notes are not rewritten by inquiry entry or recording.

The first question/criterion, prediction and plan are saved as drafts. Once explicitly kept, they become read-only. Trial evidence, observations, explanation, extension and adult support remain editable; corrections stay alongside the first record. A self-reported tried checkbox neither certifies completion nor awards marks.

Separate versioned records use `mathquiz-p2-inquiry-v1-<topic>-<learner>`. Known text fields are limited to 800 characters, escaped on display and bounded on read. Newer/malformed/oversized data is protected until an explicit investigation reset. A stale tab cannot overwrite a locked first prediction; updates reread current storage. Storage failure retains the current in-memory work and shows a notice.

Investigation reset affects one topic and learner only. Ordinary topic reset explicitly says inquiry records have their own reset and leaves them intact. No P1/P2 score serializer changes. All earlier P2 data/support scripts remain frozen, except the shared app's new link and reset disclosure.

## Verification

All **2,036 distinct local and public browser cases verified**, with original failures and exact reruns retained. The final 79-case inquiry suite was also verified locally after broadening its test-storage restoration to every topic and learner slot; lesson-entry tests write cursors, so restoring only a few keys was insufficient. The initial local run used a new test origin, and its created test records were cleared after completion. Product storage isolation did not change. All **36 static suites passed**, including eight new inquiry gates. All **13 changed runtime/test files** matched deployed hashes. Runtime commit `41d4bf50ffa049cdbc0f42cd3b3a6bd6ba7129f2`; [successful deployment](https://github.com/kochiuyu/mathquiz/actions/runs/44972276667).

New checks exercise every investigation and entry in both languages, blank/premature locking, first-record retention, reload/language changes, escaped text, all three learners, targeted resets, stale edits, storage events, future/malformed data, blocked storage and narrow layouts. Static checks independently verify concrete arithmetic/calendar examples, actual lesson/activity links, worst-case text bounds and frozen earlier files.

The initial static test incorrectly demanded more than ten characters in every bilingual field, rejecting legitimate short Chinese titles/material lists. It was changed to check nonempty bilingual strings, alongside the actual link/content checks; no lesson content was altered to satisfy an arbitrary length rule. The initial failure and final rerun remain recorded.

At 320px, a Chinese packing investigation was visually inspected. Native typing and Enter kept the first record, made prediction fields read-only, moved focus to trial evidence and caused no horizontal overflow. Test text was clearly labelled as an example and removed afterwards.

## Limits and next work

These are authored opportunities and software checks. Classroom trials, actual physical investigations, independent translation, screen-reader listening, physical printing and records of delivered inquiry time remain pending. Preset choices and correct calculations do not establish inquiry performance.

Next: whole-P2 coverage, prerequisite sequencing, unfamiliar application and readiness review before any P3 expansion. [Machine-readable evidence](p2-inquiry-guided-evidence.json) records this release; the completion note records final documentation deployment and readbacks.

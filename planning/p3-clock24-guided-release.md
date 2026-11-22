# P3 Time (IV) guided release

22 November 2026. [Open lessons](../p3-learn.html?path=clock24). Baseline `62bff26258c1ba42df28a0e2d8a366f08328deb2`.

## Scope and sources

The existing official [EDB KS1 notes, PDF61 / printed55](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=61) and [prior source audit](p3-time-iv.md) were reread. Two objectives require recognising and telling 24-hour time, including hour/minute pairs, 12-hour relationships, day-start 00:00 and day-end 24:00. Interval arithmetic is explicitly deferred to later learning. No new source download is claimed. The [existing bilingual activity](../activities/p3-time-iv.html) and original practice-bank payloads remain unchanged.

| Lesson | Screen work | Separate practical evidence |
|---|---|---|
| Day context | Ambiguous labels, different day parts and dates | Read an actual notice with date and day part |
| Digit pairs | Read/write two-digit hours and minutes | Annotate actual written HH:MM labels |
| Write 24-hour times | Morning, afternoon, noon and midnight-hour conversion | Write both notations and explain unchanged minutes |
| Read aloud | Select a complete 12-hour reading | Unseen timetable reading with day-part explanation |
| Named-day boundaries | Start, noon, end and adjacent-day midnight | Place and explain labels on adjacent day cards |

Five lessons contain 45 practice tasks, ten guided examples and ten sample checks. Check prompts and per-lesson tuples differ from practice; conceptual properties recur, so this is not an independent readiness certificate. All lessons remain open, with Easy/Normal/Difficult sets for each learner. Totals are eleven P3 topics, 61 lessons and 549 practice tasks.

## Models and records

The model pairs a chosen 24-hour label with a hidden/revealed analogue clock and complete 12-hour reading. It names Monday 24:00 as Tuesday 00:00, distinguishes same-date endpoints and disallows 24:05. Controls are keyboard reachable; models are temporary and unscored. The text input preserves HH:MM rather than parsing it as a number. Full-width digits and colon are accepted; missing zero padding, signs, decimal numbers, invalid minutes and 24:01–24:59 are rejected. A wrong but valid time remains a first response, distinct from a supported retry.

Topic/learner records are separate. Observed reading and writing, date/task/help and inquiry predictions/trials remain separate from answer matches. Reset affects only the selected topic/learner. Existing practical notebooks and numeric answer limits are unchanged. Damaged/future/oversized records are protected; stale writes are refused; unavailable storage is labelled temporary.

## Verification

Detailed results and original failures/exact reruns are in [evidence](p3-clock24-guided-evidence.json). The focused browser suite covers every task stage in both languages, all model/practical screens, four layout widths, storage failures, first/retry/inquiry evidence and navigation to all eleven topics. The earlier Time III and numbers browser suites are also rerun; other topic browser suites are not fully rerun in this release. All eleven guided static suites are checked, with independent validity checks for every 00:00–23:59 representation plus 24:00. Inherited files are compared against the baseline, and publication is read back.

Native Chinese 320-pixel checks reject 24:05, save full-width 07:05 with feedback focus, and reveal the midnight clock at a named day end without overflow. An unsupported shortcut and a native select automation mismatch were recovered using CTRL+A and keyboard End; these are tool results, not successful checks until the final state was read.

## Limits and handoff

Classroom trials, independent translation, screen-reader listening, physical printing and observed pupil performance remain pending. Sampled screen answers and saved notes do not certify mastery, independent oral/written performance or delivered teaching hours. Next: bar charts, then mixed calculations and remaining fraction applications.

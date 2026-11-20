# P1 teaching: counting groups and estimating

20 November 2026

## What pupils learn

[Open the pathway](https://kochiuyu.github.io/mathquiz/learn.html?path=groups). Three original bilingual lessons add nine teaching steps, six guided questions and **27 levelled practice items**. The four pathways now contain **12 lessons and 108 levelled practice items**, with a separate six-question check for each pathway. These are teaching-pathway counts; the existing curriculum, skill and adaptation banks are unchanged.

| Lesson | Teaching | Normal and Difficult practice |
|---|---|---|
| Count in twos | Touch each pair once; say the running total; count a loose one last | Missing counts, counting counters rather than boxes, correcting a mistaken jump or treating one counter as a pair |
| Count in fives and tens | Check group size; count equal groups; add loose ones to the spoken count | Partial groups, missing counts, distinguishing groups of five from ten, keeping a ten-step sequence from a non-zero start |
| Estimate, then check | Use a pictured reference group of ten; compare quantities; count afterwards | Choose a reasonable estimate from two stated alternatives, challenge a poor estimate, avoid relying on tray size or spacing alone |

Each lesson follows **Learn → Try together → Easy → Normal → Difficult**. Practice can be corrected after feedback. The check follows completed practice and provides explanations and a suggested review lesson. Five correct answers out of six offers further practice, but this is a provisional session threshold, not a mastery judgment. Three rotating check configurations overlap; they are not independent standardised assessments.

The Numbers to 100 result now offers this pathway. The new result links to the existing counting-groups Smart practice, whose saved progress remains separate. The homepage displays four compact choices and expands only the selected pathway's lessons. Parents and teachers retain their existing tools.

## Curriculum and estimation decisions

The [EDB Key Stage 1 explanatory notes](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf), 1N3, printed pages 5–6 (PDF pages 11–12), require grouping in twos, fives and tens and estimation with reference quantities. Both use quantities below 100. This pathway uses visual groups and spoken counting, without requiring multiplication notation or calculation rules. It complements the earlier Numbers to 100 pathway rather than claiming all 1N3 classroom work is complete.

An estimate is not an exact count. Marked estimation questions explicitly offer two widely separated numbers and ask which is more reasonable. Feedback names the preferred choice, then the exact count, and explains that other nearby estimates may be reasonable. The check therefore tests selecting a plausible estimate, not producing an unrestricted estimate. No rounding algorithm is introduced. Pupils are encouraged to estimate a small real-object collection, then count it, but the website cannot observe that activity.

Counters have consistent sizes between reference and target. A spaced example demonstrates why occupied space alone is misleading. Diagrams have text alternatives: grouped counts describe the boxes and loose counters; estimation describes an approximate reference relationship without exposing the exact count. This provides nonvisual support but is not equivalent evidence of visual estimation skill. Independent screen-reader listening remains pending.

## Saved work

The existing browser-local version-1 record and three learner slots remain. The new lesson IDs are `twos`, `fives`, `estimate`; the new pathway ID is `groups`, with a separate `checks.groups` record and cursor. Earlier lesson/question IDs, answers and quiz content are unchanged. A baseline content hash checks all earlier practice sets and generated questions so existing results retain their meaning.

Tests cover old zero and 100 answers, saved difficulty, separate pathway resumes, learner isolation/reset, invalid records and storage-denied use. A complete three-learner record across all twelve lessons is **13,285 characters**, below the existing 20,000-character read bound. Progress stays in one browser; clearing browser data removes it. There are no accounts or cross-device syncing.

## Verification

Six static gates passed: the original student gate, Numbers to 100, subtraction, the new grouping/estimation gate, resource structure and shared UI structure. The new gate independently checks 216 generated answers, all 27 practice answers, twelve check-attempt configurations, numerical bounds, earlier question compatibility and four-path storage.

All **54 distinct local browser cases are verified**. The initial run passed 54/54. After strengthening next-path and extra-practice link checks, the final full run passed 53/54 with one navigation timeout in `Subtraction layout en 768` at `learn.html?lesson=partsback&stage=practice&level=difficult&lang=en`; its exact rerun passed 1/1. The browser navigation call also timed out while the runner continued, so the result was read without reloading. A mobile English Difficult estimation sample at 360 × 812 had no horizontal overflow and its first answer ended at pixel 776.57. Public verification is pending. The expanded suite has 54 distinct cases: the existing 42 plus twelve for the new pathway, including complete English/Traditional Chinese journeys, wrong/blank answers, retakes, earlier quiz retention, difficulty/language continuation, learner isolation, blocked storage and layouts at 320, 375, 768 and 1280 pixels. The broader 267-case shared UI/activity browser suite is not rerun in this focused release. Parent/teacher gateway cases and shared static gates remain included.

Exact runs, deployment and content hashes are recorded in [the evidence](p1-groups-evidence.json). Pupil trials, independent translation review, screen-reader listening and real-object classroom reviews remain unperformed. Levels and the check threshold remain uncalibrated.

## Next P1 work

1. Fill earlier teaching gaps: ordinal numbers, odd/even numbers and comparison-as-subtraction, checking each specific curriculum boundary first.
2. Develop addition/subtraction within 100, including concrete place-value representations and the permitted carrying/borrowing scope.
3. Extend measurement, money, time, shapes, position and investigation from the existing objectives and activities.

For each addition: verify the source scope; author teaching and accessible diagrams; add guided and increasingly independent tasks; check answers independently; preserve saved IDs; test both languages, mobile answer placement and storage failures; publish exact results and any retries; then use pupil feedback to refine difficulty. Do not interpret automated completion as classroom mastery.

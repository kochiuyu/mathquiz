# P1 teaching: add and subtract below 100

20 November 2026. Sixth student learning pathway, following Positions, pairs and differences.

[Start the pathway](https://kochiuyu.github.io/mathquiz/learn.html?path=calculate) · [Automated browser checks](../tests/student.html) · [Release evidence](p1-calculate-evidence.json).

## Teaching scope

The three original bilingual lessons cover aligned tens/ones, addition with carrying, three-number addition, subtraction without borrowing and checking subtraction by adding back. Addition totals stay below 100. Word problems use two numbers; three-number work is presented as calculations. The curriculum does not require pupils to name the associative property or always write carry marks. These boundaries follow the [EDB Key Stage 1 explanatory notes, 1N4, printed pages 7–8](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf). The diagrams, teaching text and tasks are newly authored MathQuiz material, not copied exercises.

| Lesson | Teaching and guided work | Independent practice and reasoning |
|---|---|---|
| Add tens and ones / 十和個的加法 | Align columns; exchange ten ones for one ten; use a small carry mark as a reminder. | Add with and without carrying; solve a two-number story; correct a missing carry or misplaced single digit; distinguish the tens count from the full answer. |
| Add three numbers / 三個數相加 | Work left to right; combine a helpful adjacent pair; keep every addend once; exchange twenty ones for two tens. | Add three numbers, find a helpful pair and detect an omitted addend. Three-number word problems are not introduced. |
| Subtract and check / 減法與驗算 | Remove ones and tens; align one-digit subtrahends; check by adding back. | Two-number take-away/comparison stories, zero ones, a zero result, correction of a column error and an addition check. No borrowing. |

Each lesson has three teaching steps, two guided questions, then three questions at each Easy, Normal and Difficult level. The **27 added levelled practice items** bring the student teaching collection to **six pathways, eighteen lessons and 162 levelled practice items**. Difficulty changes guidance and reasoning rather than representing separate pupils or learning speeds.

The visual models show long blocks worth ten and small blocks worth one alongside aligned columns. Subtraction uses crossed-out blocks as well as colour. Worked teaching examples show the result and carry mark; practice and quiz diagrams leave the result blank. English and Traditional Chinese descriptions accompany the graphics. Shortened English explanations keep every new teaching-step action within the first 320 × 812 screen.

## Learning flow and assessment limits

Teach → try together → Easy → Normal → Difficult → six-question check. The check includes two generated questions for each lesson and has separate saved answers and retake state. Three deterministic rotating configurations reuse some items; they are not independent standardized tests. Practice completion can follow correction with feedback. The existing five-out-of-six next-step suggestion is provisional and is not a long-term mastery claim. Pupils can revisit earlier lessons; adults retain the resource library, builder, activity and paper routes.

## Saved progress and compatibility

Path ID: `calculate`. Lesson IDs: `columnadd`, `addthree`, `columnsubtract`. The existing browser-local key `mathquiz-learning-v1` and version 1 remain. The new path has its own `checks.calculate` and path cursor; three learner slots still mean separate pupils. Old lesson/question IDs, generated questions and levelled answers are unchanged, verified against their previous content hash. The original quiz fields and every earlier pathway check remain intact.

A complete three-pupil record across eighteen lessons is **20,026 characters**, exceeding the previous 20,000-character read cap. The new bound is derived from the permitted lesson/path schema: `4096 + 3 × (lessonCount × 512 + pathCount × 320)`, currently **37,504 characters**. This retains a finite parsing bound and grows with future authored lessons. Sanitization still accepts only known paths/lessons, bounded answers, three pupils and valid stages. Tests read a full record, a valid record padded past 20,000, and one immediately below the new limit; records at the limit and malformed JSON produce a notice without overwriting the saved content during read. Browser storage may still be unavailable or cleared by the user; the site explains this and permits an unsaved visit. No account, tracking cookie or cross-device sync is added.

## Verification

All **83 local browser cases are verified**: the full run passed 80, with two page-load timeouts and one English mobile teaching-action failure. The two timeout cases passed exact reruns. Shorter headings fixed the mobile issue; both English and Chinese teaching-layout cases then passed again. Public verification is pending. Exact results are recorded in the evidence file. Before the mobile refinement, all 81 local browser cases passed. Visual inspection found two English explanations putting the next button below the first mobile screen; they were shortened and two new teaching-layout checks were added. Development checks also corrected a brace in the new test fixture and replaced an order-sensitive object-string comparison with structural equality. These were test-development issues, not deployed failures.

Eight static gates cover every earlier teaching bank, the new calculation bank, resource routes and shared UI structure. New answer validation independently counts 216 generated cases and checks all 27 practice answers, twelve attempt configurations, carrying, zero, non-borrowing constraints, totals below 100, previous content hashes and saved-work compatibility. The focused browser suite has **83 cases** covering complete English/Chinese journeys, failed/blank answers, retakes, separate pathway and difficulty continuation, earlier quizzes, three pupil slots/reset, malformed routes, denied storage, a full three-pupil record and 320/375/768/1280 layouts. It checks all eighteen new bilingual teaching screens at 320 × 812 and column alignment, one/two carried tens, hidden practice totals and zero answers.

The broader 267-case shared UI/activity browser suite is not repeated for this release; parent/teacher gateways and shared static checks are included. Pupil trials, independent translation review, screen-reader listening and physical-object classroom review remain pending. This is partial P1 teaching coverage, not a curriculum-completion claim. Existing curriculum and adaptation catalogues retain their previous scope and counts.

## Next P1 teaching work

1. Measurement: compare aligned lengths and straight distances, use informal units, then centimetres and practical ruler activities within 1M1/1M3.
2. Hong Kong money, time, shapes and spatial position, following each unit's specific limits.
3. Investigation and classroom follow-up, then pupil feedback to refine explanations and difficulty.

Continue the same workflow: verify the curriculum boundary; author teaching and diagrams; add guided and levelled practice; independently check answers; preserve previous records and question identities; test both languages and storage failures; inspect mobile actions; publish and read back the exact deployed files; record failures/reruns and human-review limits.

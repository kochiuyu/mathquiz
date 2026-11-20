# P1 teaching: centimetres and rulers

20 November 2026. Eighth student pathway, following Length and distance.

[Start Centimetres and rulers](https://kochiuyu.github.io/mathquiz/learn.html?path=ruler) · [Browser checks](../tests/student.html) · [Evidence](p1-ruler-evidence.json).

## Scope and teaching

The [EDB 1M3 explanatory notes, printed page 11](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf) cover centimetres, measuring and comparing lengths/straight distances, selecting tools and estimating with a familiar measured body reference. This pathway illustrates zero alignment and endpoint readings, then introduces estimation before measurement. Whole-centimetre examples avoid adding millimetre, rounding or multiplication requirements. These are original MathQuiz lessons and diagrams, not copied exercises.

| Lesson | Teaching | Practice progression |
|---|---|---|
| Read centimetres / 讀取厘米 | One centimetre is a space between adjacent centimetre marks; align zero rather than the ruler edge; count spaces rather than marks. | Read lengths/straight spans; recognize correct alignment; correct counting the zero mark as a unit; read an enlarged diagram's labelled scale. |
| Compare in centimetres / 用厘米比較 | Compare readings in the same unit; measure a straight gap; choose a tool that can span the intended distance. | Compare lengths/distances and equality; compare differently enlarged diagrams by their scales; choose a 60 cm tape instead of a 15 cm ruler for a 40 cm gap in one placement. |
| Estimate, then check / 先估計，再核對 | First measure one's own reference; use repeated reference lengths; record an estimate before measuring the target. | Choose a reasonable estimate from two clearly separated alternatives; correct a poor reference-based estimate; distinguish estimating from copying a measurement; avoid assuming all hands have the same span. |

Each lesson has three teaching steps, two guided questions and three items at each Easy/Normal/Difficult level. The **27 added practice items** bring the collection to **eight pathways, twenty-four lessons and 216 levelled practice items**. A separate six-question check samples two generated items per lesson. Retakes rotate three overlapping deterministic configurations; they are not independent standardized assessments. Practice can complete after correction. The existing five-out-of-six recommendation remains provisional, not a calibrated mastery rating.

## What the diagrams mean

Every scale is labelled in centimetres, with zero visibly inside the ruler's edge. Endpoint guides, numbered setups and text descriptions avoid reliance on colour alone. The misalignment task asks which setup uses zero; it does not require pupils to subtract non-zero ruler readings. The zoom comparison intentionally makes the shorter labelled length look larger on screen, so pupils must use scale readings rather than screen pixels.

All diagrams state that real objects require a real ruler. SVGs resize with the screen and are **not physically calibrated measuring tools**. Reference diagrams have a measured reference label and an ungraduated target with a slightly irregular end. The chosen answer is a reasonable estimate among stated alternatives, not the target's hidden exact measurement. Feedback says “about” and tells pupils to measure afterwards. Repeated addition supports reference reasoning without requiring multiplication or rounding. An example hand span is explicitly one pupil's measured value, never a universal body measurement.

## Practical work

A collapsed “Try a real ruler” section links to the unchanged bilingual [Length and distance (II) activity](../activities/p1-length-distance-ii.html). An adult observes tool selection, zero alignment, straight measurement, comparisons, calibration of the child's own thumb/hand reference, estimates recorded first, and later measurements. Opening the sheet or completing the online check does not award observed practical competence. The worksheet's teacher key remains hidden by default; language links are preserved.

## Compatibility and storage

New path `ruler`; lessons `readcm`, `comparecm`, `estimatecm`; separate `checks.ruler` and path cursor. The browser-local version-1 record and three separate pupil slots remain. Baseline hashing confirms that all earlier generated questions, practice items and IDs are unchanged, preserving the meaning of earlier scores. The schema-based read bound grows to **48,640 characters**. The new full-record fixture is **26,611 characters**; another prior stress fixture reaches 26,623. Near-limit, malformed, oversized, reset/isolation, earlier quiz, zero and 100 cases pass. No account, cookie tracking or cross-device sync is introduced.

## Verification

Local verification passed **113/113 browser cases without retries**, plus ten static gates. The new independent static gate checks 216 generated answers, all 27 practice answers, twelve check configurations, diagram coordinates, candidate estimate bounds, unchanged earlier content and storage compatibility. The browser suite includes all 98 previous cases plus fifteen new cases: complete bilingual paths; wrong/blank answers and retakes; separate continuation; storage denied; 320/375/768/1280 layouts; every new teaching step and first practice answer at 320 pixels; edge/zero alignment, scale ticks, differently enlarged comparisons, ungraduated estimate targets and both activity languages. A local 320 × 812 English Difficult ruler example showed both setups and readable zero marks without overflow; its first answer ended at pixel 763.27.

Public verification is pending. Exact results and hashes are recorded in the evidence file. The broader 267-case UI/activity browser suite is not repeated; focused teacher gateways and shared static checks are included. Pupil trials, independent translation review, screen-reader listening and real-tool classroom observation remain pending. This is partial P1 teaching coverage; online completion does not finish 1M3 practical requirements. Curriculum/resource catalogue counts remain unchanged.

## Next work

1. Hong Kong money (1M2): recognise circulating coins, read prices up to $10 and count/exchange within the permitted coin groups. Do not introduce giving change or cross-group exchanges prematurely.
2. Time, shapes and spatial position within each unit's limits.
3. Investigation and classroom follow-up; use pupils' responses to refine explanations and difficulty.

Workflow: verify curriculum limits; author original bilingual teaching and diagrams; write guided/levelled questions; independently check answers; preserve prior questions and saved records; test languages, mobile actions and unavailable storage; inspect diagrams; publish and compare deployed hashes; record exact failures/reruns and unperformed human reviews.

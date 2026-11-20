# P1 teaching: length and distance

20 November 2026. Seventh student pathway, following Add and subtract below 100.

[Start Length and distance](https://kochiuyu.github.io/mathquiz/learn.html?path=measure) · [Browser checks](../tests/student.html) · [Evidence](p1-measure-evidence.json).

## Curriculum boundary

This pathway addresses the introductory comparison and informal-unit work in 1M1: observe two objects, align their starting ends, distinguish straight distance from a route and use suitable informal units. Curved cords need gentle straightening without stretching and practical comparison. The [EDB explanatory notes, printed page 9](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf) describe these objectives. Centimetres and ruler use belong to the next 1M3 pathway. The diagrams are original MathQuiz drawings; they are not calibrated on-screen centimetre rulers.

| Lesson | Teaching | Practice progression |
|---|---|---|
| Compare lengths / 比較長短 | Look along a strip, align one end, identify equal lengths; explain how to straighten cords. | Compare aligned strips; account for shifted starts; distinguish width from length; correct a misleading endpoint judgement. |
| Compare distances / 比較距離 | Compare straight spans from the same start; distinguish nearer/farther; show that a bent route does not change fixed endpoints. | Compare straight spans, then ignore a longer dashed route and preserve equal-distance judgements. |
| Measure with units / 用單位量度 | Use equal touching tiles; compare with the same unit; show why unit size changes counts. | Count units and compare strips; detect gaps/overlap; compare unit sizes for equal-length strips. |

Each lesson has three teaching steps, two guided questions, and three practice items at each Easy, Normal and Difficult level. There are **27 new levelled items**, making **seven pathways, twenty-one lessons and 189 levelled practice items**. The check includes two generated questions per lesson. Numeric choices are explicitly explained: write 1 or 2 for the pictured object/row, and 0 for equality only when offered. Zero is a comparison response here, not a claim that an object has zero length.

SVG diagrams share a fixed scale within each comparison and resize together. Labels identify objects without relying on colour. Straight spans are solid; walking routes are dashed. Incorrect tile rows show gaps or overlapping boundaries. Descriptions expose the same spatial quantities for assistive technology; this is conceptual practice, not a visual-acuity assessment. No unequal-unit count alone is used to infer which object is longer.

## Practical work stays practical

A collapsed “Try with real objects” section appears on the measurement pathway and its lesson/result pages, after the primary learning content. It links to the existing bilingual [Length and distance (I) activity](../activities/p1-length-distance-i.html). An adult observes aligned strips, gently straightened cords, straight spans and the choice/use of informal units. The existing activity and its teacher key are unchanged. Opening the activity does not award a practical-completion badge, and the digital check cannot verify that a pupil performed these observations.

Teach → try together → Easy → Normal → Difficult → six-question check is unchanged. Learners may complete practice after correction. The existing five-out-of-six suggestion is provisional; it is not a calibrated mastery result. Retakes rotate three deterministic, overlapping configurations rather than independent standardized tests. Each of the three learner slots remains a separate pupil, not a difficulty or speed setting.

## Compatibility

New path `measure`; lessons `alignlength`, `straightgap`, `equalunits`; separate `checks.measure` and pathway cursor. The version-1 storage key and previous quiz fields remain. A baseline hash verifies that all earlier generated questions, levelled content and IDs are unchanged. Saved earlier scores, zero/100 answers and three pupils remain compatible. The schema-based read bound grows to **43,072 characters**; full-record fixtures exceed 23,000 characters and are tested near the bound. Storage remains browser-local with no account, tracking cookie or cross-device sync.

## Verification

All **98 local browser cases are verified**: the final full run passed 97/98; `Subtraction layout en 1280` hit a page-load timeout and passed 1/1 on exact rerun. Nine static gates passed. An English Difficult distance sample at 320 × 812 showed a distinct dashed route and solid straight span, with the first answer ending at pixel 784.52 and no horizontal overflow. All **98 public cases are verified**: the full run passed 97/98, and `Difficulty resume, isolation and migration` passed its exact rerun after a page-load timeout. [Runtime d6bc8205](https://github.com/kochiuyu/mathquiz/commit/d6bc8205121656ed69cd1cf0b6f291760848df0e) deployed successfully in Pages run 44714170123. All sixteen changed runtime/test assets matched their tested hashes. A public Chinese Difficult informal-units example at 320 × 812 showed gapped and touching rows without horizontal overflow; the first answer ended at pixel 702.93. Exact results are recorded in the evidence file. The initial local browser run passed 96/98. The English final length-teaching paragraph was too tall on mobile and was shortened; the exact teaching case then passed. The practical-link test initially used a loader that required the student runtime on every page; it was corrected to allow the existing standalone activity page, and the exact case passed. No activity runtime change was needed.

Nine static gates include all previous teaching banks, the new measurement bank, resource routes and shared UI structure. New checks independently validate 216 generated answers, all 27 practice answers, twelve check-attempt configurations, diagram bounds, previous content identity, saved-record migration/isolation and malformed/oversized records. The focused browser suite has **98 cases**, including complete English/Chinese paths; wrong and blank answers; retakes; all prior checks; language/difficulty/path continuation; learner isolation/reset; full records; storage-denied visits; 320/375/768/1280 layouts; every new teaching step at 320 pixels; and first answers, shifted endpoints, route geometry, gaps, overlaps, unequal units and bilingual activity links.

The broader 267-case UI/activity browser suite is not rerun; its shared static checks and the focused teacher gateways are included. Pupil trials, independent translation review, screen-reader listening and physical classroom observations remain pending. This is partial teaching coverage, not full completion of P1 or 1M1 practical requirements. Existing curriculum/resource catalogue counts are unchanged.

## Next work

1. 1M3 centimetres: align a real ruler's zero, read and compare lengths/straight distances, choose tools and estimate before measuring. Keep physical ruler work distinct from screen drawings.
2. Hong Kong money, time, shapes and spatial position within their unit boundaries.
3. Investigation and classroom follow-up; use pupil feedback to refine lessons and difficulty.

Workflow: check the curriculum scope; author original bilingual teaching and diagrams; write guided and levelled tasks; independently verify answers; preserve previous IDs and saved work; test language, mobile actions and storage failures; inspect actual diagrams; publish and compare deployed file hashes; document failed attempts, exact reruns and human-review limits.

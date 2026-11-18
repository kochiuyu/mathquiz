# P1 difficulty pilot · 18 November 2026

## Decision

Add **Easy / Normal / Difficult** as teaching choices, not labels for children. Twelve numeric variations of one template do not establish twelve different demands. Existing questions should not all be reclassified as easy: some already ask pupils to find another number bond, interpret a story or justify an observation. Adult speed is not evidence of difficulty for a P1 learner.

Start with **1N1 Numbers to 20** and **1N2 Basic addition and subtraction**, then use the evidence to refine the remaining P1 units. The pilot contains **72 questions: two units × three levels × twelve questions**. Each level contains three task formats, with four versions of each. Four reproducible sets of three cover all twelve without repetition. Both languages, marking, partial credit, retry, pupil papers and worked keys are available at [the pilot page](../p1-levels.html).

The levels are **provisional author judgements**, not empirically calibrated ratings. They do not certify mastery, replace teacher observation or increase curriculum completion totals.

## What changes between levels

| Level | Intended demand | 1N1 examples | 1N2 examples |
|---|---|---|---|
| Easy / 容易 | A direct action with visible support | Count a collection; continue a forward count; compose a pictured whole | Join pictured groups; count what remains; remove a whole collection |
| Normal / 一般 | Apply a familiar idea or choose a representation/operation | Order three numbers; fill backward-count gaps; find a covered part | Record a pictured sum; compare groups; choose addition or subtraction |
| Difficult / 較難 | Connect information, check a claim or explain a relationship | Combine magnitude and parity clues; make a different bond; distinguish position from quantity when counting from the other end | Find a hidden quantity and check with addition; explain an unchanged total after swapping; correct a false total and verify with subtraction |

Larger numbers alone do not define the level. No timer, speed bonus, negative marking or automatic promotion is used. Adults may read every prompt aloud. Reasoning choices reduce the writing burden, but selected explanations do not replace pupils explaining or manipulating objects themselves.

## Curriculum boundaries

Checked against the [EDB KS1 notes, 1N1–1N2, PDF pages 7–10](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=7) and the existing [1N1 review](p1-numbers-to-20-review.md) and [1N2 review](p1-basic-operations-review.md).

- **1N1:** quantities and positions stay within 20; counting steps are one. Comparisons use words, not inequality symbols. Number bonds use two positive one-digit parts, total at most 18. A different bond must differ beyond swapping the same two parts.
- **1N2:** two one-digit parts, total at most 18; pictured joining, taking away and comparison. Zero is represented by removing everything. Inverse and checking tasks remain within 10. No column algorithms, negative answers, unknown-letter equations or P2 content are introduced.
- This is a **sampled progression**, not a claim that each objective has twelve questions at each level. For example, oral reading, real-object selection and all zero properties still require the wider unit resources.

## Rollout across the twelve P1 units

Only the first two rows are implemented in this release. The other rows are design proposals; source-check their exact limits before authoring. Practical difficulty must vary the reasoning or support, not demand unattainable precision from a screen picture.

| Unit | Easy direction | Normal direction | Difficult direction | Status |
|---|---|---|---|---|
| 1N1 Numbers to 20 | Count visible objects | Compare, order and recover a part | Combine clues; change viewpoint or partition | 36 pilot questions |
| 1N2 Basic operations | Join/remove pictured objects | Choose and record an operation | Check, explain or repair a result | 36 pilot questions |
| 1N3 Numbers to 100 | Read/place a numeral with support | Connect place value and representations | Diagnose a representation error; combine clues | Planned next |
| 1N4 Addition/subtraction I | Direct permitted calculation | Choose a calculation for a story | Explain grouping or repair an incorrect method | Planned next |
| 1M1 Length/distance I | Compare aligned objects | Align or use equal units appropriately | Explain why a proposed comparison is unfair | Planned |
| 1M2 Money I | Recognise a permitted coin/value | Count a permitted collection | Find another payment or check a claimed amount | Planned |
| 1M3 Length/distance II | Read an aligned centimetre scale | Select and apply measurement information | Diagnose a measuring setup; justify a correction | Planned |
| 1M4 Time I | Read a supported clock/calendar | Connect allowed representations | Use permitted calendar or event clues together | Planned |
| 1S1 Solids I | Name a familiar solid | Sort less familiar examples | Justify a sorting rule with examples | Planned; practical component |
| 1S2 Flat shapes | Recognise a shape | Match rotated/varied examples | Explain a classification or construction | Planned; construction component |
| 1S3 Directions/positions I | Describe from a stated viewpoint | Follow a short permitted instruction | Explain a viewpoint-dependent description | Planned; movement component |
| 1F1 Inquiry | Follow a guided investigation | Choose a method and record findings | Justify a prediction and revise it from evidence | Planned; teacher observation, not automatic grading |

For each later unit: define a common concept to compare across levels, author distinct reasoning demands, supply worked explanations and practical/oral alternatives, check answers and scope independently, then verify bilingual routes and printing before publishing. Do not obtain “difficult” questions by moving the unit's number range or operations into a later year.

## How to evaluate the pilot

Teachers can start with a normal set after the relevant concepts have been taught, then choose more support or more reasoning as appropriate. This is an option, not an enforced sequence. Keep level selection reversible and avoid ranking pupils.

For each attempted question, record first attempt, help/read-aloud given, representation used, misconception, and the pupil's explanation. Compare performance on a shared concept across levels, not raw totals across sets with different numbers of response parts. A mistake caused by reading, unfamiliar wording or an inaccessible diagram should lead to revising access/support before changing the mathematical level. Do not infer difficulty from one child or impose unvalidated score thresholds.

Review whether normal tasks demand more application and difficult tasks elicit more reasoning, whether any question's intended answer is ambiguous, and whether a child who understands the idea can demonstrate it without excessive language. Pupil/teacher trials and independent Traditional Chinese review remain deferred under the standing instruction. No trial outcomes are claimed here.

## Technical and verification scope

- The pilot is a **separate selectable page**, linked from the homepage and both unit groups. It is not yet mixed into the main quiz builder. Its 72 IDs are reported separately from the permanent core-family/variant totals. This permits a trial before changing every family's schema or assigning unvalidated levels to old questions.
- IDs include unit, level, task kind and version index. Set/language/paper/key URLs preserve exactly the same IDs. Shared links are reproducible; no random assignment is hidden behind the level selector.
- Marks are per answer part. Blank responses are not marked; correct and partial results include explanations. Submitted answers cannot earn extra credit through repeat submission. Whole-number fields accept ordinary/full-width digits, leading zeros and equivalent `.0` notation. They reject nonnumeric text and scientific notation; choice fields accept only supplied options.
- Screen and browser-print views are supported. **Direct PDF download and mixed-builder integration are not part of this pilot.** Physical print and screen-reader quality are not inferred from browser checks.
- `node tests/p1-levels-static.cjs` independently checks every answer, clue uniqueness, checking-equation truth, number limits, bilingual metadata, answer boundaries, distinct formats and set coverage. [Browser checks](../tests/p1-levels.html) exercise both languages, all 72 questions, blank/wrong/correct/partial grading, retry, language retention, stable paper/key content and narrow layouts.

## Release record

Published [release 6ebc99d](https://github.com/kochiuyu/mathquiz/commit/6ebc99d43cde8775854cc0445ab73f3b0bb8c17d); GitHub Pages deployment succeeded. Static answer and scope checks pass for all 72 questions. The final local and public browser runs each passed **53/53**, with zero failures, including core-link/marking smoke checks. A narrow-screen 200% text check caught a header wrapping issue that was fixed. Early rapid-frame runs timed out on a frame load; the final harness checks exact document readiness and allows a short interval between cases. No previous family payloads, marking rules or curriculum completion flags are changed. The existing full curriculum runner was not rerun for this separate pilot; the unrelated remaining-P4 verification status is preserved.

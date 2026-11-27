# P4 common multiples and factors — guided release

27 November 2026. [Open the topic](../p4-learn.html?path=common). Six new English/Traditional Chinese lessons implement the four 4N4 objectives. P4 now has 25 lessons across four topics. Runtime and local checks are complete; public deployment and verification are pending in this initial report. [Evidence](p4-common-guided-evidence.json).

## Curriculum and sequence

The [EDB KS2 explanatory notes, printed page 7 / PDF page 13](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=13) require common factors and multiples of two positive integers, their greatest/least values, and both listing and short division. This release uses manageable pairs, including equality, a multiple of the other number, 1 and coprime pairs. It does not add three-number algorithms or require a proof of short division or the product identity.

| Lesson | Objective | Work |
| --- | --- | --- |
| Find common multiples | 4N4.1 | Intersect positive-multiple lists; relate later common multiples to the L.C.M. |
| Find common factors | 4N4.1 | Enter every common factor in one blank field, without a supplied count. |
| List to find the L.C.M. | 4N4.2–3 | Write both multiple lists and all shared entries; identify the least. |
| List to find the H.C.F. | 4N4.2–3 | Write complete factor lists and all shared entries; identify the greatest. |
| Use short division | 4N4.4 | Write shared divisors and successive quotient pairs; distinguish the two products. |
| Choose and compare | 4N4.2–4 | Compare methods, next-coincidence times and longest equal ribbon pieces. |

Every lesson has one short bilingual instruction, a model shown one step at a time, two guided examples, three tasks at each of Easy/Normal/Difficult, and an adult-supported practical task. Totals: 12 guided examples, 54 practice tasks and 12 sample checks. Required conditions and answers stay visible; help and recording explanations are optional panels. The original P1–P3 wording and UI files remain unchanged apart from the catalogue version references.

## Original method records

Twelve number pairs each have three separate notebooks: multiple listing, factor listing and short division. All pupil construction fields start blank. Given pairs and model examples are not pupil evidence. A draft is saved as the pupil types; the first submitted method and one corrected method remain separate and can be read under Saved methods. Input order and line breaks are retained.

- Multiple lists must begin at the given number, include each step and end at a shared value. The pupil supplies all entries shared by those lists and the smallest positive common multiple. Lists reaching a later shared value are allowed when the least answer remains correct.
- Factor lists must include every factor of each number and every common factor, with no duplicates. Unordered lists and full-width digits/commas are accepted.
- Each short-division row contains the divisor, new left number and new right number. The shared divisor must exceed 1 and divide both current numbers exactly. Composite shared divisors are accepted. The bottom pair must be coprime. No rows are needed for an already coprime pair; the side product is 1. Equality can end at 1, 1. The answer fields consistently put L.C.M. before H.C.F.
- Correct final answers cannot compensate for missing lists or a wrong/unfinished ladder. Well-formed incorrect work is retained with feedback. Syntax errors stay editable without consuming an attempt.

The lesson notebooks do not award marks or mark lessons complete. Numerical practice answers alone do not demonstrate the requested method. Teacher observation and original paper work remain separate. The inquiry preserves an original prediction and plan before recording trials involving a multiple pair, equal numbers and 1.

## Compatibility and validation

New records use the existing versioned P4 topic/pupil store with a separate `common` key; earlier keys are unchanged. First/retry answers, practical observations, inquiry and Continue positions remain separate. Stale tabs cannot overwrite saved work. Malformed, future-version and oversized records are protected; unavailable storage keeps explicitly temporary work. Reset affects only the selected topic and pupil. The maximum tested record, including all 36 notebooks, restores below the existing 512 KiB cap.

Local core checks: 444/444, including 137 new cases and 307 inherited multiplication/division/factors cases. An independent arithmetic oracle checks all 78 new answers; all 1–36 number pairs are compared against independent lists and method checks. The new interface has 80 cases; the prior factor interface has 75. One navigation timeout in each suite passed an exact rerun, with originals retained in the evidence. All 186 shared navigation/wording cases are verified; the P2 English numbers map timed out once and passed its exact rerun. Overall, 785 distinct local browser cases are verified; reruns are not extra cases. The Chinese short-division model was visually inspected at phone width, with blank notebook fields and no horizontal overflow.

Ten new static gates and two inherited bank/resource suites pass. Earlier lesson data, models and grade stores remain byte-for-byte unchanged. Tests use isolated test keys and restore prior test records; normal-record preservation is checked. Public results, exact file readbacks and deployment completion will be added after publication.

## Limits and next step

The 12 check pairs differ from this topic's authored guided/practice pairs, but repeated visits repeat the same sample and other site resources may have familiar numbers. There is no whole-site novelty or mastery claim. Classroom trials, independent translation review, screen-reader listening, physical printing and observed paper work remain pending. Historical suites outside the stated selection were not rerun.

Next: **P4 fractions beyond one**, covering forms, conversion, equivalence/reduction and comparison (4N6.1–4) before a separate calculation/story topic (4N6.5–7), following the [P4 queue](p4-guided-learning-plan.md#delivery-queue). Complete P4 and its application review, then P5 and P6 before general P1–P3 revisions.

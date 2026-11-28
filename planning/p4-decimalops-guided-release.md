# P4 decimal addition and subtraction: guided release

29 November 2026. [Open lessons](../p4-learn.html?path=decimalops). [Evidence](p4-decimalops-guided-evidence.json).

Six English/Traditional Chinese lessons add **12 together tasks, 54 practice tasks and 12 sample checks**. P4 now has **81 lessons across thirteen topics**. Short instructions, optional hints and collapsed adult notes follow the existing learner interface.

## Curriculum and boundaries

The [EDB notes, printed page 14 / PDF page 20](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=20), checked for this release, require addition/subtraction of at most three amounts, mixed addition/subtraction of three amounts and problem solving. Whole numbers and decimals of up to **two decimal places** are included. After aligning precision, the four-digit calculation limit applies; examples excluded by EDB include 123.4 + 56.78 and 1234 − 5.6. This route conservatively also keeps all intermediates/results nonnegative and within 9999 aligned units; that extra bound is a resource design choice.

The four-place notation taught in [decimal meaning](../p4-learn.html?path=decimals) does not enlarge this arithmetic limit. Decimal multiplication/division, multi-unit conversions and negative results are excluded. The [earlier unit audit](p4-decimals-ii.md), [activity sheets](../activities/p4-decimals-ii.html) and practice banks remain unchanged.

| Lesson | Objectives | Teaching | Practical evidence |
| --- | --- | --- | --- |
| Line up decimals | 4N8.1 | Equal places, whole numbers, added end zeros; identify a correctly aligned row | Write columns and point to each place |
| Add and exchange | 4N8.1 | Right-to-left addition, carries at different places, zero and unequal precision | Exchange counters and write matching columns |
| Subtract and exchange | 4N8.1 | Borrowing, exchanges through zeros, whole-number minuends and zero differences | Explain how exchanged rows keep the same amount |
| Add three amounts | 4N8.1 | Three addends, changed order and useful grouping | Compare two orders/groupings with actual cards |
| Follow the two steps | 4N8.1–2 | Repeated subtraction, plus-minus/minus-plus and a subtraction counterexample | Record both steps and explain order |
| Choose, estimate and solve | 4N8.3 | Money, length and capacity, chosen operations and interpreted answers | Original aligned columns, units, estimates and help received |

The sample checks use numerical contexts absent from this topic's guided/practice tasks, the 48 existing decimal-operation bank tasks and ten activity expressions. They remain repeatable samples, not a fresh whole-year transfer review or mastery certificate. Selecting a row or operation alone does not establish independent column writing.

## Models and records

Controllable models align each digit under its place. Each addition step explains the written digit and exchange; subtraction models show exchanged top rows, including borrowing through zero, while keeping their numerical value. The decimal point stays in the same column. Three-amount work shows each intermediate. Addition order/grouping and a concrete subtraction counterexample are explicit. A compact single chart keeps alignment choices near their answer control on phones.

Three separate estimate tasks keep the original numerical estimate and reason before a reveal button appears. The exact amount and later reflection sit beside that original. Estimates may be whole numbers or decimals; reasonable approximation is reviewed by a person, not graded as an exact answer.

Three story notebooks accept blank aligned columns and an explanation, answer unit and help received. One original and one supported revision are saved separately. Spaces and line breaks are retained. These records are not automatically marked. A pupil may describe work drawn on paper; actual observations remain separate. Estimate and notebook panels stay open when saving so the next control remains available.

Exact integer arithmetic is used in the models; answers reuse the unchanged exact decimal parser/scorer. Equivalent terminal zeros and whole answers are accepted: 8.5 and 8.50 have the same value. Original written answers remain beside retries. Full-width digits/point and outer spaces are accepted; signs, expressions, exponents, units, fractions, missing digits beside a point and oversized components are rejected. No binary floating-point tolerance is used.

Topic/pupil/test namespaces stay independent. Existing safeguards protect stale, malformed, future and oversized records. Unavailable storage is shown as temporary. Reset requires confirmation and affects only the selected topic/pupil. Practical observations and original inquiry predictions remain separate from quiz scores. Earlier lesson data, models, bank payloads, graders and badge rules are preserved.

## Verification

**1,708 selected local browser cases verified**, including exact reruns of two navigation-timeout cases. Public checks and deployment readback remain pending.

Seventeen new static gates independently derive all 78 answers using rational arithmetic, check unique choice answers and sample contexts, curriculum limits, bilingual copy, 133 protected source files, exact catalogue extension and badge-rule preservation. Eleven inherited badge gates, the existing independent decimal-meaning suite and the decimal-operation suite also pass. The latter independently checks 48 fixtures and 10,201 arithmetic properties. Browser checks cover all thirteen core suites, both languages and all six lesson stages, each teaching example/step, all checks, original/retry records, estimates, written-column revisions, draft/conflict protection, blocked storage, phone/tablet layouts, prerequisite links, all earlier topics, shared wording/navigation and badges.

Corrections are retained in the evidence: two alignment distractors exceeded two places and made the initial independent test ambiguous; both were corrected and independently rechecked. A prior fractional fixture used the wrong scorer shape and was replaced with the actual unchanged fixture. Three UI checks initially addressed the prior lesson after selecting the addition lesson; their selectors were corrected. Any navigation timeout and exact rerun is retained, rather than counted as an extra distinct case.

Classroom trials, independent mathematical/translation review, screen-reader listening, physical printing and observed unaided written-column work remain pending.

## Next

**P4 larger bar charts**, then mixed calculations and whole-P4 coverage/application review. P5 and P6 follow. Further general P1–P3 revision remains deferred.

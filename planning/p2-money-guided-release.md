# P2 Money (II): notes, prices and payments

21 November 2026. [Open the five lessons](https://kochiuyu.github.io/mathquiz/p2-learn.html?path=money).

## Sequence and scope

Five bilingual lessons add 45 practice tasks, ten guided tasks, fifteen teaching steps and a ten-question sample check. P2 now has **nine guided topics, 49 lessons and 441 practice tasks**. The route follows four-digit numbers and prepares for later three-digit subtraction and change. Earlier P1/P2 lessons and saved work remain intact.

The [EDB explanatory notes, printed pages 33–34](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=39) were checked for note recognition, higher marked prices, counted amounts and the two exchange groups. The [HKMA circulation page](https://www.hkma.gov.hk/eng/key-functions/money/hong-kong-currency/notes/) was checked for six everyday note values and coexisting designs. The existing [unit brief](p2-money.md) and [practical activity](../activities/p2-money.html) supply the detailed source and observation map.

| Lesson | Screen work | Separate observed work |
| --- | --- | --- |
| Meet Hong Kong notes | Labelled value tokens; six denominations; same-value reasoning | Inspect both sides, features and sizes of real notes, including same-value examples from different issuers |
| Read higher prices | Contextual tags with two cent digits; match currency words | Read aloud without copying the notation |
| Count notes and coins | Point and count; enter dollars and remaining cents separately | Count each real piece once and give spoken running totals |
| Exchange smaller notes | Keep equal totals within $10/$20/$50/$100 | Move notes and explain both directions |
| Larger exchanges and exact payment | Exchanges within $100/$500/$1000; choose an exact-payment tray | Perform both directions and separately role-play exact payment |

Prices and counted totals stop at HK$1000. Price writing, decimal operations and giving change are not required. No exchange combines values across the two sets; coin/note exact-payment trays are explicitly a separate task. A denomination catalogue shows all six values without presenting their combined value as a counting task.

## Models, language and practical evidence

Tokens explicitly identify note/coin type and value. They are original labelled models, not authentic note artwork. Every model carries that distinction. The first lesson links HKMA examples and asks an adult to record each denomination, features noticed, support and whether the pupil handled a real note or viewed an image. Missing examples remain unobserved. Matching a token label does not establish authentic-note recognition.

Price choices use English dollar/cent words and Traditional Chinese 元/分 wording; the teaching example also connects fifty cents with 五毫. The existing activity uses additional everyday wording. Oral reading needs a listener and should accept correct equivalent currency expressions. The screen cannot listen to the pupil or certify pronunciation.

Counted-value tasks include $133.80, $687.50, $999.90 and $1000.00, plus cents that carry into a dollar. The learner records two quantities, not a decimal expression or copied price tag. Exchanges include fixed notes in the receiving tray, reversed exchanges and equal-value sets with different numbers of pieces. Exact-payment choices compare full trays, including their cents.

The existing practical sheet is linked from every lesson and remains unchanged. Its real-note recognition, counting, construction and exchange observations complement the new guided materials. Practical notes stay separate from quiz scores. No pupil participation or real purchase occurred during development.

## Input and compatibility

The money topic has its own `mathquiz-p2-money-v1` records for three learners. Dollar fields allow 0–1000; cent fields allow 0–99; the combined amount cannot exceed $1000. Values such as 1000 dollars and 1 cent are rejected. Full-width digits normalise before marking, and blank cents are not silently converted to zero. Decimal, negative, exponent and comma-separated single-field input is invalid.

Money adds a 1000 ceiling without widening earlier topics: the four-digit topic retains 9999, and the earlier seven retain 999. The eight earlier topic data files, shared store and metre notebook remain byte-identical. Saved answers, notes, learner isolation, reset scope, stale updates, future records and blocked-storage fallback are checked. No practice-bank IDs or payloads change.

## Verification

All **28 static suites passed**, including eight new money gates for independent amounts, denominations, permitted exchanges, price-word fixtures, models, storage and syntax.

All **1,222 distinct local browser cases verified**, with one exact successful timeout rerun; original outcomes are retained in the evidence.

The new suite has 96 browser cases: both languages, every teaching/practice stage, sample-check marking and revisits, 320/375/768/1280 layouts, currency bounds, zero cents, full-width digits, exact-payment choices, separate observation links, storage behaviour and earlier answer limits. The previous suites supply the other 1,126 cases. Test keys are restored; manual work uses a separate localhost origin.

Manual local inspection covered the English denomination catalogue and the Chinese counted-amount form at actual width 375. Typing full-width 1000 and zero cents then pressing Enter produced correct feedback and restored focus without horizontal overflow. A Chinese $50.70 exact-payment choice produced correct feedback after using its check button. Native Enter on the select recorded the choice but did not submit the form. Real-note handling, oral reading and screen-reader listening remain unperformed.

All **1,222 distinct public browser cases verified**, with ten exact successful timeout reruns; original outcomes are retained in the evidence. All eighteen deployed runtime/test files matched SHA-256 readback. See the [evidence](p2-money-guided-evidence.json). The public learning map and lesson links were inspected.

Baseline: `9b07214ffdf35755a9de95e7a129468c16ef5028`. Runtime commit: `f21eb72db6cf12669326a8878ac7883f4733155d`. The [runtime Pages deployment](https://github.com/kochiuyu/mathquiz/actions/runs/44896247807) succeeded with the matching commit.

## Next and remaining limits

Next implement **2N5 three-digit subtraction, mixed addition/subtraction and money change**, now that four-digit numbers and Money (II) have guided materials. Keep money reasoning in dollars/cents without introducing decimal arithmetic. Division and the angle/quadrilateral branch remain later unfinished work.

Classroom trials, difficulty calibration, independent translation, physical printing, screen-reader listening and observed practical performance remain pending. The fixed sample check suggests revisits and does not certify mastery.

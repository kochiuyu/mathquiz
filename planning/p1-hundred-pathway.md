# P1 teaching expansion: numbers to 100

20 November 2026

## What pupils can do

The learning homepage now offers two compact pathway choices. Only the selected pathway expands into lessons, keeping the page manageable on phones. Start/Continue follows the selected pathway on its overview, and the most recent learning journey on the main homepage. A successful first-pathway check offers the new pathway. Pupils may also explore it directly; the earlier pathway is a suggested prerequisite, not an enforced gate.

The new **Numbers to 100** pathway adds three original English/Traditional Chinese lessons:

| Lesson | Teaching and worked examples | Practice progression |
|---|---|---|
| Tens, ones and one hundred | Bundles of ten, zero ones, ten tens making 100 | Read pictured bundles; construct numbers independently; correct reversed digits and regroup ten loose ones |
| Which number is larger? | Compare tens first, then ones; compare 99 and 100 | Use a tens/ones table; compare numerals independently; correct a ones-only comparison or find a number between neighbours |
| Order and continue | Smallest/largest order; count forwards and backwards across a ten | Complete a visible sequence or middle position; order independently; repair an ordering or cross 100 backwards |

Each lesson has three teaching steps, two guided questions, and three questions at each of Easy, Normal and Difficult. This adds **nine teaching steps, six guided questions and 27 independent-practice questions**. Across both pathways there are now **six lessons and 54 levelled practice questions**. These teaching items are separate from the existing skill and adaptation banks; the resource catalogue totals have not changed.

Each pathway retains its own six-question core understanding check and retake counter. A check samples two items per lesson. Retakes cycle through three deterministic forms with overlapping items; they are practice opportunities, not independent standardised assessments. The checks sample core concepts rather than certifying Difficult-level mastery. All levels in that pathway must be practised before a new check opens. Correcting mistakes can complete practice and is not recorded as first-attempt mastery. Below five correct answers the recommendation identifies the weakest lesson; this is a provisional teaching rule, not a calibrated diagnosis.

## Curriculum scope and authorship

The mapping uses the project's retained EDB Key Stage 1 explanatory notes, [1N3 Numbers to 100](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=11). It covers recognition through 100, tens/ones, comparing magnitude, ordering and sequences across tens. Pupil prompts use words for larger/smaller; formal inequality symbols are not introduced. Bundles and tables show counts of tens and ones, so 100 can be represented as ten tens, not a claim that its tens digit is ten.

The explanations, questions and CSS diagrams are original MathQuiz content. This is a partial teaching pathway within 1N3, not a claim that all its objectives are taught: counting in twos/fives and estimation remain to be added. Neither the first pathway nor this addition completes P1 teaching. Existing curriculum completion flags and question-bank IDs are unchanged.

## Progress and compatibility

Existing version-1 browser-local records and the three learner slots remain. The first pathway's `attempt` and `quiz` fields retain their meaning and original question generation, so saved results are not reinterpreted. The new pathway uses `checks.hundred`, independently storing its attempt, draft or result. `pathCursors` saves the place within each pathway while the existing global cursor controls the homepage continuation. Lesson and difficulty answers stay within the selected learner. Reset clears that learner's learning record across both pathways, leaving the other learners intact.

Input and stored answers now support whole numbers through 100, including the three-character answer `100`; blanks, negatives, decimals, exponent notation and values above 100 are rejected. Reloading or changing language preserves this answer. Old single-set practice still upgrades to Easy as before. No account, cookie, name collection or cross-device sync is introduced. With storage unavailable, either pathway can still be completed within one visit, with the existing warning; reloading can lose unsaved work. Other Smart practice storage remains separate.

## Verification and limits

Four static gates passed: original student checks, new numbers-to-100 checks, resource structure and shared UI structure. New checks independently derive **216 generated answers**, check all 27 new practice items and twelve quiz-attempt configurations, validate the 100 boundary and malformed records, and exercise separate learner/pathway storage. The original 162 generated-answer checks and 27 earlier practice-item checks still pass.

The final local browser suite passed **30/30 composite cases**. It includes both full bilingual pathways, all nine new level sets, mistakes, incomplete submission, retakes, old-result preservation, per-pathway resume, saved 100, learner separation, reset, storage conflicts, storage-denied journeys and layout at 320/375/768/1280 pixels. Chinese mobile teaching was visually inspected. The initial development run was 29/30 because the new resume test expected Difficult after completing Normal while Easy was still unfinished; the runtime correctly selected Easy. The test was corrected to complete Easy first, and the full suite passed.

Public verification: **all 30 distinct cases verified**. The full run passed 29 and had one navigation timeout at `learn.html?lesson=add&stage=quiz` in `Quiz gate and malformed route`; its exact rerun passed 1/1. The initial browser navigation also timed out while the runner continued, so the result was read without reloading. All eleven changed runtime/test assets matched the tested UTF-8/LF content hashes. [Runtime 22e6159](https://github.com/kochiuyu/mathquiz/commit/22e61595c80246342eb04ba536400362774e7c15) deployed successfully in Pages run 44689173593. The public Chinese mobile overview showed the two choices, a correct start link and no horizontal overflow. See [release evidence](p1-hundred-evidence.json) for exact results. The broader shared 267-case browser suite is not rerun for this focused learning release; shared static gates and parent/teacher gateway browser cases remain included. Pupil trials, independent translation review and screen-reader listening remain unperformed. Difficulty and the quiz threshold remain provisional.

## Remaining P1 teaching sequence

1. Number bonds and taking away within 20: connect known parts, missing parts and subtraction; check by joining the parts again (1N1/1N2).
2. Counting groups of two/five/ten and estimating against a known group (remaining 1N3 teaching).
3. Addition/subtraction within 100 with the appropriate concrete representations and progression (1N4).
4. Extend measurement, money, time, shapes, position and data lessons using their existing curriculum objectives and activity links.

For each addition, write teaching and worked examples before selecting practice, keep the check specific to that pathway, preserve old question/check identities and saved data, independently verify answers, then exercise both languages, mobile first-action placement, storage denial and resumed work. Trial the explanations with pupils before treating difficulty as calibrated. Publish exact evidence and keep existing resource-bank counts distinct from teaching coverage.

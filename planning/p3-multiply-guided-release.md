# P3 multiplication guided release

22 November 2026 · baseline `01cf014598624f3df29f49f19f409a28596a2965`.
[Open multiplication](../p3-learn.html?path=multiply).

## Teaching route

Six bilingual lessons: split into tens/ones; exchange and carry; three digits/zero places/four-digit products; helpful grouping of three factors; two- and three-factor contextual stories; estimation after exact calculation. Each has two guided and nine levelled practice tasks, plus two topic-check items: **54 practice, 12 guided, 12 check items**. P3 now has 11 guided lessons and 99 practice tasks across two topics.

The [EDB KS1 notes, PDF page 50](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=50) were rechecked. The [existing 3N2 source audit](p3-multiplication-i.md) supplies the detailed objective and activity mapping. Materials cover 3N2.1 (two/three digits by one digit, either factor order, carrying and column principles), 3N2.2 (three-factor grouping) and 3N2.3 (problems), with the estimation remark placed last. No two-digit-by-two-digit algorithm or compulsory technical property name is introduced. Four-digit products are valid; factor limits do not constrain products to three digits.

Value cards precede progressively revealed column digits. The carry text names the value moved into the next place. Worked models include 32×3, 28×4, 206×4 and 364×4; grouped trays show the same 30 counters in two routes. Pupils must independently write columns and explain intermediate units in practical observations: entering a final number does not demonstrate written calculation. Activity sheets remain linked.

Three estimate records (196×3, 403×4, 79×6) retain each original estimate and reason before exact results can be revealed. A pupil acknowledges doing paper calculation, then records comparison/reflection/help. This acknowledgement is a self-report, not observed achievement. Estimates are not automatically scored. The separate investigation retains a question, prediction and plan before trials; failed examples and a changed rule/example remain part of the record.

All 12 check task tuples and prompts differ from worked, guided and practice examples, including the numerical examples in the activity audit. Formats remain familiar, and the sample is not a mastery certificate. First responses and one explicitly supported retry stay separate. Explanations and practical work need human review; blank help does not establish independence.

## Compatibility

An explicit P3 topic selector chooses data before rendering. The shared store is configured per topic; the default API and number IDs remain backward compatible. The multiplication record is `mathquiz-p3-guided-v1-multiply-0|1|2`, with test keys inserting `test-` before `v1`. Number keys, cursors, data and existing scores are unchanged. Older number tabs and multiplication tabs can write independently. Scoped resets never clear another topic or learner.

Multiplication accepts whole answers 0–9999, including full-width digits and outer whitespace, without commas, signs, decimals, exponents or more than four entered digits. Number teaching keeps its existing five-digit range. Notes and estimates have separate fields, no inferred completion or bank-score migration. The 524288-character cap accommodates all maximum-length explanations/retries/observations/inquiry and estimates. Malformed/future/oversized records remain protected, stale writes are refused, and blocked storage is explicitly temporary. Original predictions and estimates cannot be silently revised.

## Verification and limits

**201 distinct cases verified locally and publicly:** multiplication 91 and earlier numbers 110. Each local and public suite had one page-load timeout that passed its exact rerun. Ten static gates passed; 222 relative document links resolved; 807 inherited files remained unchanged. All 15 initial GitHub/public file readbacks matched, with three GitHub reads requiring exact retries. Runtime `92a854ac9ab963e0a259d8e5b5bf3a766959c1a7` deployed successfully in [run 44986773139](https://github.com/kochiuyu/mathquiz/actions/runs/44986773139). Final documentation verification is recorded in the completion report. A 320px Chinese keyboard/column sample and the live English map were checked; neither overflowed.

The [evidence](p3-multiply-guided-evidence.json) records local/public runs, original failures and exact reruns. Ten static gates cover an independent repeated-addition oracle for all 78 tasks, scope, fresh tuples, model columns, records at full capacity, immutability and topic isolation. The 91-case multiplication browser suite covers every task set in both languages, model/notes, estimate reveal/reflection, inquiry, four viewport sizes, isolation, resets and failed storage. The existing 110-case number suite is rerun because its shared engine changed. Historical full-site totals are not counted as new tests. Unchanged-file checks cover earlier grades and all question banks.

Classroom trials, independent translation, screen-reader listening, physical printing and actual written/model observations remain pending. Automated evidence and a visual/keyboard sample cannot establish these. Next: the separate kilometre/millimetre pathway, preserving the open parallel branches.

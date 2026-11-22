# P3 division by one digit — guided release

22 November 2026. [Open division](../p3-learn.html?path=division). Baseline: `8bf4cf6a06ef9af9c953c53a37371f1fd9cf4a38`.

## Scope and teaching

The [EDB explanatory notes, PDF page 51 / printed 45](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=51) were read again. This release connects place-value sharing to columns, explains exchanges and remainders, contrasts grouping orders concretely and places estimation after calculation practice. It uses two-/three-digit dividends and nonzero one-digit divisors. Chain tasks divide exactly at both stages. No decimal quotient, multi-digit divisor or formal bracket lesson is introduced. Existing [activity sheets](../activities/p3-division-i.html) remain linked and unchanged.

| Lesson | Objective | Teaching and separate observation |
|---|---|---|
| Share tens and ones | 3N3.1 | Share value pieces; align quotient digits above the dividend; independently write a new column. |
| Exchange and keep zero places | 3N3.1 | 72 ÷ 3, 432 ÷ 4, 156 ÷ 3 and 600 ÷ 3 models; show hundreds-to-tens and tens-to-ones exchanges, leading empty place and required internal/trailing zero. |
| Remainders and a check | 3N3.1 | Multiply back and add the remainder, check the remainder bound; explain why an oversized remainder is unfinished. |
| Divide from left to right | 3N3.2 | Record intermediate and final answers; the same 24 counters split among twelve pupils or three groups show why regrouping changes meaning. |
| What happens to leftovers? | 3N3.3 | Sharing whole counters, counting full bags, and enough vehicles for everyone; explain units and leftover decisions. |
| Estimate after exact division | 3N3.3, estimation remark | Suggested-nearby-number practice is distinct from three unscored original estimates, reasons, paper-calculation acknowledgements and reflections. |

Six lessons contain 54 practice tasks and twelve guided examples. Twelve sample-check items use fresh tuples and prompts, with familiar formats. A separate investigation retains the first prediction and plan before trials, explanations and extensions. Screen matches do not assess written columns, explanations or actual handling. The first lesson deliberately stays small; later models extend the same principles to three digits.

## Storage and interface

The existing topic-and-learner storage scheme adds a division namespace without migrating old records. Two-field input uses explicit bilingual role labels, validates every field, accepts full-width digits and preserves the first response before a single supported retry. Feedback also labels the stored parts. Blank help remains unknown independence. Original estimates cannot be replaced; later reveal/reflection records remain unscored. Damaged, future and oversized data stay protected until explicit reset; stale writers cannot overwrite another tab. Unavailable storage is clearly temporary.

Topic navigation retains language, learner and test context. P2 sharing/grouping is linked as an optional prerequisite. The four guided P3 topics total 22 lessons and 198 practice tasks. Models are temporary; observations and inquiry are saved separately.

## Verification

Ten static gates passed, including independent repeated-subtraction task answers, minimal seating capacity, fresh check tuples, all 8,910 column dividend/divisor combinations, full storage capacity, damaged/stale records, first/retry immutability and preservation of earlier resources. These are software tests, not pupil outcomes.

Local browser suites: division 91/91, length 81/81, multiplication 91/91, numbers 109/110 on the initial full run with the single exact navigation-timeout case passing on rerun. Thus all 373 distinct local cases are verified. After feedback labels and two-column field layout were refined, all 91 division cases passed again. Repeat executions do not increase the distinct count. An attempted test URL `tests/p3-learn.html` was absent; the correct `tests/p3-numbers.html` was used. Initial Node lookup failed because it was not on PATH; the installed executable ran successfully. A shell-quoting error in a no-op helper changed nothing; a file-based helper applied the intended UI refinement.

At a 320px outer viewport, Traditional Chinese full-width quotient/remainder entry with Enter recorded `42,0`, focused feedback and did not overflow. Its owned test record was removed afterward. The 432 ÷ 4 mobile column screenshot was inspected: 1,0,8 aligned to their places and exchange labels were readable. Automated suites restore their owned test keys and compare unrelated records.

Public browser suites, deployment and content-hash verification: pending runtime publication. The [evidence file](p3-division-guided-evidence.json) records final status. Initial GitHub source read returned a transient fetch failure; retry confirmed the expected baseline.

## Remaining validation and next work

Classroom trials, independent translation, screen-reader listening, physical printing and observation of actual column writing and handling remain pending. No mastery claim is made from sampled screen answers. No new whole-site historical regression total is claimed. Earlier resources were compared unchanged outside explicit shared files.

Next: P3 fraction foundations. Keep the independent branch open and identify equal parts and the whole before notation or equivalence work.

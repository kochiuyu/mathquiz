# P2 hundreds and numbers to 999

21 November 2026. First guided P2 slice, 2N1. [Open the pathway](../p2-learn.html). Publication and test details are recorded in [release evidence](p2-number-guided-evidence.json).

## Delivered teaching

Five bilingual lessons, each with three teaching explanations, two guided tasks and three tasks at each of Easy, Normal and Difficult. Totals: **15 explanations, 10 guided tasks, 45 practice tasks and a separate 10-question check**. Eleven of the guided/practice tasks are estimate-before-reveal investigations, not automatically marked accuracy tests. The check samples estimation-method recognition; it does not certify actual estimation, oral reading, writing or physical counting.

| 2N1 objective | Lesson and evidence | Practical evidence still needed |
| --- | --- | --- |
| 1: recognise/read/write/count three-digit numbers | `p2-hundred`, `p2-sequence`: models, boundary sequences in both directions, ones-based parity | Read aloud, write dictated numbers and count a real collection |
| 2: hundreds place | `p2-hundred`: ten visible tens become a hundred; 243/304; digit value and empty-place zero | Build and exchange real bundles; explain each place |
| 3: compare magnitudes | `p2-compare`: spoken relationships before symbols; <, =, >; three input boxes for ordering in either direction | Say relationships and arrange cards, explaining the first different place |
| 4: groups of 20/25/50/100 | `p2-groups`: countable dots within visible groups; running totals in teaching | Point to each real group and say the running totals, not just give the final answer |
| 5: estimate collections below 1000 | `p2-estimate`: counted reference, original estimate/reason, separate reveal and reflection | Observe reference use, prediction, counting and explanation with real objects |

Scope follows the [2N1 brief](p2-3digit-numbers.md) and [EDB KS1 explanatory notes, PDF page 25](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=25). No multiplication algorithm or fixed estimation tolerance is required. Original check values differ from the guided practice. Repeating a check reuses its questions and is not independent mastery evidence.

## Navigation and compatibility

The P1 header now offers P1/P2 navigation in the existing row, preserving the compact mobile layout. P2 has its own map and Continue link, with separate P1 Continue, three learner slots and useful-first revisits. Branches remain open. Other P2 branches link existing practical resources and explicitly say their guided lessons are planned.

The separate P2 page deliberately leaves the P1 question generator and answer/storage schema unchanged. P2 supports numeric responses 0–999, full-width digits, comparison/parity choices and three-part ordered answers. Each question has a stable ID. No practice-bank score is converted to guided progress. Practice completion means the set was attempted; it does not assert all answers were correct.

P2 uses `mathquiz-p2-learning-v1-0`, `-1` and `-2`, one bounded versioned record per learner. Numeric strings such as 304/999 and ordered responses are not truncated. The selected learner travels in year/language links. Following a P2-to-P1 link changes P1's active-slot field only when needed; its lesson/answer/note/cursor data are retained. Browsing and answering in P2 never writes the P1 record. Old P1 tabs do not know or clean the new keys.

Before each mutation, the store reads current saved data, reducing stale-tab overwrites; storage events refresh the visible form. Same-field edits use the last saved value. An explicit reset clears only this learner's P2 record; P1 resets now explicitly state their year scope. Malformed, oversized or future-version P2 records are not overwritten without an explicit reset. Unavailable storage keeps work in memory and shows a notice; closing that tab loses unsaved work.

Estimate originals and explanations cannot be edited after recording. Only then is the count-reveal button available. Reflections and practical notes stay separate from scores; hint use is recorded separately. Text is length-bounded and escaped before display. There are no accounts, network submissions, names or analytics.

## Accessibility and validation limits

Native links, buttons, labelled inputs, select controls and textareas support keyboard use without dragging. Block descriptions provide place counts rather than just the answer. Visual estimation cannot provide an equivalent nonvisual challenge by reading out the hidden total: the page instead directs an adult to provide a tactile collection and record that separate practical activity. This adaptation is explicit, not claimed as a tested screen-reader estimation assessment.

Automated bilingual routes and widths 320/375/768/1280 cover teaching, practice, check, labels, persistence and overflow. A Chinese mobile teaching sample and an English comparison keyboard interaction were inspected. The release runner also reruns the five existing P1 suites, preserving original failures and exact retries in the evidence. Tests use separate test keys and restore them afterwards.

Classroom trials, independent translation, screen-reader listening, real-object assessment, difficulty calibration and physical printing remain pending. Screen completion is not observed practical achievement or a certificate of P2 readiness.

## Verified release

Runtime commit `44600c1913b59ad13ff83b8f8bac77be2b5bfcc8` is live. All **385 distinct local browser cases** are verified (384 passed in the final full run; one page-load timeout passed its exact rerun). All **385 public browser cases passed without retries**. The 19 inherited static suites and 11 new static gates passed. All 12 runtime/test files match the publication payload. Original development failures and fixes are retained in the evidence.

## Next work

Continue the early parallel releases in the [P2 plan](p2-guided-learning-plan.md): addition/two-digit borrowing and multiplication meaning, alongside solid faces/bases, metres and pictograms. Do not require completion of all arithmetic before a practical or shape branch. Later preserve 2N4 → money → three-digit subtraction/change and angles → quadrilateral properties.

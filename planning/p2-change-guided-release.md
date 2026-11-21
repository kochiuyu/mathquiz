# P2 guided subtraction and change · 2N5

Release date: 21 November 2026. Published and verified locally and publicly.

[Open the topic](https://kochiuyu.github.io/mathquiz/p2-learn.html?path=change) · [Evidence](p2-change-guided-evidence.json) · [P2 plan](p2-guided-learning-plan.md) · [Existing unit resources](p2-addition-subtraction-iii.md).

## Scope and sequence

Checked against [EDB KS1 explanatory notes, printed pages 25–26 / PDF pages 31–32](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=31), on 21 November 2026. Whole-number operands and every intermediate/result stay in 0–999. Two-number subtraction includes regrouping across zero. Three-number work includes +−, −+, ++ and −−, from left to right. Sequential stories avoid later comparison-plus-altogether problems. Money uses named dollars and cents, not decimal operations. Estimation follows exact calculation experience.

The prerequisite links keep **2N4 → 2M3 → 2N5**, with earlier 2N2 arithmetic available for revisits. Every topic remains open; prerequisites are recommendations, not a score gate.

## Six lessons

| Lesson | Teaching and pupil evidence |
| --- | --- |
| Exchange hundreds, tens and ones | Align places; conserve 432 while regrouping; subtract and verify by addition. Pupils write their own columns. |
| Exchange across a zero | Model 500 and 602 in successive groupings; include zero and one as differences; explain where the new tens/ones came from. |
| Work from left to right | Both intermediate and final results are pupil responses, covering all four two-sign patterns. |
| Explain two changes | Follow receiving/using events. Say what each intermediate amount means, with a unit and explanation. |
| Give change in dollars and cents | Regroup one dollar as 100 cents or count on. Separate dollar/cent fields; sequential purchases keep both balances. |
| Estimate, calculate and compare | Record an original estimate and reason, calculate on paper, then reveal and compare. No automatic estimate-accuracy mark. |

There are **18 teaching steps, 12 guided tasks, 54 practice tasks and a 12-question sample check**. Eleven guided/practice tasks are ungraded estimation records (two guided, nine practice). The other 67 items include the sample check. P2 now has **10 topics, 55 lessons and 495 practice tasks**, plus the existing 121 ordered multiplication-fact workshop items and other practical builders.

The sample check gives one mark per complete item. Both step results or all dollar/cent fields must match for that item; it does not give per-field partial credit. This follows the existing guided-topic check contract. The older practice-bank activities have their own scoring contract and were not changed. The check uses the same items on repeat and is not an independent readiness certificate.

## Models and practical work

Original HTML tables label hundreds/tens/ones and dollars/cents, with text headings available to assistive technology. Teaching tables display conserved groupings; practice diagrams show unknowns rather than solutions. Money trays are labelled quantities in a pretend context. No authentic-note identification or real payment is implied.

Each lesson links [the existing practical activity](../activities/p2-addition-subtraction-iii.html). Written columns, manipulation, oral explanations, a pretend shop and estimate-first observation require pupil participation. Optional notes accept adult transcription and stay separate from quiz marks. A correct screen total alone does not certify the method or practical skill.

## Progress and compatibility

New records use `mathquiz-p2-change-v1` per learner. The nine earlier topic data files, shared progress store and metre notebook remain byte-identical. Earlier P1/P2 records, other learners and the permanent question bank remain separate. Reset affects only this topic and learner. The new four-field money tasks preserve both intermediate and final dollar/cent balances. Cents accept 0–99, ordinary numeric answers 0–999. Full-width digits normalize; invalid or incomplete responses do not pass completion/check gates.

Estimate originals, reasons and reflections survive reloads and language changes. Future-format records are protected; blocked storage retains in-tab work with a notice; stale-controller updates merge through the shared store. Navigation was tightened on small screens after an initial regression pushed 320px headings too low.

## Verification

All **1,328 distinct cases verified locally and publicly**. The final full local run had 3 successful exact timeout reruns. After the final paired-money-field layout refinement, the 106-case change suite and 96-case money suite were checked again, with two successful exact timeout reruns. The public full run had 4 successful exact timeout reruns. Original failures and reruns are retained in the evidence. All **29 static suites passed**, including eight new change gates; all **19 changed runtime/test files** matched deployed SHA-256 hashes. Runtime commit `8aa35d8864ae1fd36ae47143995cd8cc817d32c0`; [successful Pages deployment](https://github.com/kochiuyu/mathquiz/actions/runs/44904900750).

The initial run found one test assumption about an unset completion record and nineteen 320px heading regressions. The test and navigation were corrected; the complete local rerun verified them. A separate initial student-navigation timeout passed its exact rerun. Observer timeouts did not justify restarting active suites.

Manual browser inspection used a separate localhost origin from the regression runner. A Chinese four-field purchase task accepted full-width １３,３０,８,８０, submitted with Enter, saved 13,30,8,80 and restored focus to the first field with correct feedback. A native estimate interaction retained the original 500 and its reason before revealing 502. The corrected 320px multiplication map heading was at 378.15px with no horizontal overflow. Teaching diagrams and public map were visually inspected; these are bounded author checks.

## Limits and next step

No classroom trial, independent translation certification, screen-reader listening, physical printing or observed pupil performance was conducted. Estimate-first timing is self-recorded unless an adult observes it. Authored model tables do not prove real manipulation. These remain explicit validation tasks.

Next: **basic division (2N6)**, beginning with sharing and grouping, then quotient/remainder and multiplication checks. Continue to put angles before quadrilateral properties. Do not claim P2 is a fully validated course.

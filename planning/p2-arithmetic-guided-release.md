# P2 addition, subtraction and explanations

21 November 2026. Guided 2N2 teaching. [Open the pathway](../p2-learn.html?path=arithmetic). [Verification evidence](p2-arithmetic-guided-evidence.json).

## Delivered sequence

Six bilingual lessons, with three teaching explanations, two guided tasks and three tasks at each practice level per lesson. Totals: **18 teaching explanations, 12 guided tasks, 54 practice tasks and a separate 12-question check**. Eleven guided/practice tasks preserve an estimate and reason before revealing the exact result; they receive no automatic accuracy mark. The existing 2N1 pathway remains five lessons and 45 practice tasks: P2 now has **two guided topics, 11 lessons and 99 practice tasks**.

| Lesson | Objective and teaching evidence | Practical evidence required |
| --- | --- | --- |
| `p2-carry` · Add with exchanges | Objective 1: two/three addends, aligned places, exchanging ones/tens, carrying 2 from a three-addend ones column | Model the exchanges; independently set out written columns |
| `p2-smartadd` · Helpful pairs | Objective 2: preserve all addends while choosing a convenient pair; original-order check | Choose an efficient pair without the prompt supplying it; explain why |
| `p2-borrow` · Exchange a ten | Objective 3: same quantity before/after exchange, zero ones, subtract from the remaining tens; inverse check | Exchange actual tens and ones before taking away; write columns |
| `p2-substeps` · Stated order | Objective 3 and grouping remark: intermediate/final responses; left-to-right removal; two removals contrasted with removing their difference | Act out both counter stories and explain the different outcomes |
| `p2-stories` · Choose and explain | Objective 4: joining, two successive removals, direct more/fewer comparison; separate saved written statements | Explain the operation and each quantity; include units and record adult transcription |
| `p2-roughcheck` · Estimate/check | Estimation after exact skills: nearby convenient quantities or bounds, original prediction, reveal and reflection | Make a genuine prior prediction, calculate independently and discuss reasonableness |

Scope follows the [audited 2N2 brief](p2-addition-subtraction-ii.md) and [EDB explanatory notes, PDF pages 26–27](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=26), rechecked for this release. Addition involves at most three addends and totals below 1000. Subtraction involves at most three operands, each at most two digits, with nonnegative intermediate and final answers. No mixed-operation calculation, three-digit subtraction, negative number, formal property-name requirement, formal rounding rule or combined comparison-and-total story is introduced.

## Responses and feedback

Two-part controls distinguish a useful pair subtotal from the whole total, and an intermediate remainder from the final remainder. Both fields must be correct for that screen question to be marked correct. Omissions, reversed parts, decimal/exponent forms and out-of-range values are rejected. Full-width digits are normalized. No drag is required, and focus returns to the first field after checking a multi-part answer.

Story explanations are optional text records, saved under stable question IDs. The screen score marks only the numerical/choice answer; it does not judge the quality of the written statement. Adults can review spoken/drawn explanations and record the help given. Every lesson also has its own observation field and a link to the existing 2N2 activity; inquiry is integrated rather than added as a final graded unit.

Calculation estimates permit 0–999. Original estimates and reasons become fixed before a separate reveal action; reflection remains editable. An implausible estimate is not automatically failed: the teacher reviews the method. The visible flow does not show the exact result before recording; client-side source is not a secure answer vault. The check samples estimation-method recognition rather than pretending to assess genuine prior prediction.

## Storage and old-tab compatibility

The arithmetic topic uses `mathquiz-p2-arithmetic-v1-0`, `-1`, `-2`. The first P2 number topic keeps `mathquiz-p2-learning-v1-0`, `-1`, `-2`, with its original question IDs, meanings and answers. P1 storage and content are unchanged. This separation prevents an old number-topic tab from cleaning new arithmetic fields out of a shared record.

Topic links carry the selected learner and language. Each topic has a separate cursor/check and Continue route. Opening one topic does not mark the other completed or change its cursor. Reset wording now explicitly limits the action to the current topic and learner; other P2 topics, P1 and other learners are retained. Same-topic writes read the latest record first, and storage events refresh visible answers. Same-field concurrent edits remain last-write-wins.

Malformed/oversized/future-version records remain untouched until explicit reset. Blocked or full storage retains session-only work with a notice. Text is escaped and bounded; explanations are separate from answers, estimates and practical notes. Practice-set completion means attempted, not mastery. Existing practice-bank scores are not converted to lesson completion.

## Verification and limitations

Static checks independently recalculate every authored arithmetic answer using BigInt, check intermediate results and scope, verify actual carry/borrow tasks, bilingual fields, the check-answer oracle, storage capacity, blocked storage, old-tab edits and topic/pupil reset isolation. The first P2 data file remains byte-identical. All 21 static suites passed: 19 existing P1/shared suites, the first P2 suite with 11 gates, and the new arithmetic suite with 10 gates.

The final local browser evidence consists of a **502-case full run without failures**, plus **two new focused completion/resume checks**, both passing: **504 distinct cases verified locally**. All **504 distinct public cases are verified**: 503 passed in the full run, and one P1 solids page-load timeout passed its exact rerun. All ten runtime/test files match commit `1099f36b68af16abc721f0f22114a0d9efb73c70`. The evidence retains the original timeout and retry. Checks cover both languages, every new practice/guided set, the 12-question check, 320/375/768/1280 widths, persistence and the earlier P2/P1 flows. A Chinese borrowing model was inspected at a 360-pixel mobile viewport. An English two-field subtraction answer was entered and submitted with the keyboard; correct feedback and returned focus were observed.

Classroom trials, independent translation, screen-reader listening, physical printing, difficulty calibration and real-object/written-column observation remain pending. The course is not claimed classroom validated. A correct typed total alone does not demonstrate written layout, exchanging, prior estimation or an explanatory statement.

## Next step

Implement **P2 solid faces and bases (2S1)** next to alternate branches as planned, revisiting familiar P1 solids and their flat outlines. Multiplication meaning/facts, metres and pictograms remain early parallel releases. Later retain four-digit numbers → money → three-digit subtraction/change, and angles → quadrilateral properties.

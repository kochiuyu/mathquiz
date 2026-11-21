# P2 guided basic division · 2N6

Release date: 21 November 2026. Published and verified locally and publicly.

[Open the topic](https://kochiuyu.github.io/mathquiz/p2-learn.html?path=division) · [Evidence](p2-division-guided-evidence.json) · [P2 plan](p2-guided-learning-plan.md) · [Existing unit resources](p2-basic-division.md).

## Scope and sequence

Checked against [EDB KS1 explanatory notes, printed pages 27–28 / PDF pages 33–34](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=33), on 21 November 2026. The guided topic addresses all four numbered 2N6 objectives: division concepts, basic division, its multiplication relationship and word problems. Sharing and grouping both include exact divisions and remainders. Pupils progress from oral accounts through drawings and words to symbols.

The topic links back to multiplication meaning and facts. Every lesson stays open; these links recommend useful foundations without imposing a score gate. All authored divisors are 1–10, dividends 0–100 and quotients 0–10. Tasks include zero dividends, division by one, dividing a nonzero number by itself, and a dividend smaller than its divisor. There are no zero divisors, fractional answers or long-division procedures.

## Six lessons

| Lesson | Teaching and pupil evidence |
| --- | --- |
| Share equally: how many in each? | Deal 12, then 14 counters among three trays in equal rounds. Explain the amount per tray and leftovers. |
| Make groups: how many groups? | Make groups of three from the same totals. Contrast the meaning of the divisor and quotient with sharing. |
| Name the quotient and remainder | Label all five terms, improve an unfinished grouping, and require a remainder smaller than the divisor. |
| Use multiplication to check | Reconstruct the total as divisor × quotient + remainder; compare 8 ÷ 2 with 2 ÷ 8. |
| Divide with zero and one | Model an empty collection, one tray and one counter per tray. Keep zero out of the divisor position. |
| What do the leftovers mean? | Contrast stickers per child, full pencil packs and enough tables for everyone. Explain why the same division can lead to different contextual answers. |

There are **18 teaching steps, 12 guided tasks, 54 practice tasks and a 12-question sample check**. P2 now has **11 topics, 61 lessons and 549 practice tasks**, in addition to the existing 121 ordered multiplication-fact workshop items and other practical builders.

The check gives one mark per complete item; both quotient and remainder must match. Explanation and practical-note fields are not automatically marked. Repeated checks reuse the same items and are not independent mastery evidence. The earlier question-bank scoring contract is unchanged.

## Models and practical work

Two interactive counter models make different actions visible: give one counter to each existing tray, or make one new group of the stated size. Every step conserves the original total. Controls stop when another full round or group cannot be made, and keyboard focus moves to the reset control. Visible text records tray/group counts and leftovers, so colour and dots are not the only representation.

Models reset on leaving the page and award no progress or marks. This is disclosed beside the model. Optional practical notes persist separately. Practice diagrams show the starting collection and empty trays or specified group size, rather than revealing the completed arrangement.

Each lesson links [the existing practical activity](../activities/p2-basic-division.html). Pupils should manipulate real counters, explain the meaning of numbers, draw their own records, and act out the three 17 ÷ 5 contexts. Screen actions do not certify physical sharing or independent oral reasoning.

## Progress and compatibility

Records use `mathquiz-p2-division-v1` separately for each learner. The ten earlier topic data files, shared progress store and metre notebook remain byte-identical. P1 records, previous P2 topics and other learners are preserved; reset affects only the current topic and learner.

Full-width digits normalize. Quotient/remainder fields use bounds 0–10 and 0 through one less than the divisor. Incomplete, negative, decimal and excessive entries cannot complete a task. Existing numeric and dollar/cent limits are unchanged. Future-format records are protected, stale updates merge, and blocked storage retains in-tab work with a notice.

## Verification

All **1,438 distinct cases verified locally and publicly**. The full local run had 4 successful exact timeout reruns; the public run had 4. Original failures and exact reruns are retained in the evidence. The new 110-case division suite also passed on its own. All **30 static suites passed**, including eight division gates. All **20 changed runtime/test files** matched deployed SHA-256 hashes. Runtime commit `fe0a2ce5b7d3c56337f847306df2c33495f18a41`; [successful Pages deployment](https://github.com/kochiuyu/mathquiz/actions/runs/44912531282).

Static checks independently recompute answers by repeated subtraction, inspect the complete authored inventory, conserve counters at every model step, and verify storage compatibility and frozen-file hashes. Browser checks cover both languages, four screen widths, native forms, model steps, explanations, check/revisit routes, topic/learner separation, future-format protection and earlier-topic limits. Observation calls sometimes timed out during rapid iframe navigation; running suites were allowed to finish.

Manual inspection used a separate localhost origin from the regression runner. Four native button clicks on the 14-counter sharing model produced three trays of four and two leftovers, preserved all 14 counters, disabled further steps and focused reset. The grouping model instead made four groups of three and two leftovers. Native Chinese entry of full-width ４ and ２, submitted with Enter, saved `4,2`, gave correct feedback and focused the quotient field. At 320px the paired fields remained usable without horizontal overflow. The new sharing page and earlier multiplication map headings were at 378.15px. The deployed map showed all six lessons and eleven topic links with no horizontal overflow. These are bounded author checks, not an independent accessibility audit.

## Limits and next step

Classroom trials, independent translation review, screen-reader listening, physical printing and observed pupil performance remain pending. Drawings, whole-object handling and explanations require pupil participation and, where needed, an adult observer. No fully validated course claim is made.

Next: **angles and perpendicular lines (2S2)**, returning to the shapes branch before square and rectangle properties. The remaining time, directions and inquiry work stays in the P2 plan.

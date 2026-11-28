# P4 fraction calculations and stories — guided release

28 November 2026. Published and verified locally and on the public site.

[Open lessons](../p4-learn.html?path=fractionops) · [Evidence](p4-fractionops-guided-evidence.json) · [P4 plan](p4-guided-learning-plan.md)

## Scope

Six bilingual lessons add 12 guided examples, 54 practice tasks and 12 sample checks for **4N6.5–7**. With [fractions beyond one](p4-fractions-guided-release.md), guided resources now cover all seven 4N6 objectives. P4 has **37 lessons across six topics**. This is resource coverage, not pupil mastery.

The [EDB KS2 explanatory notes, PDF pages 16–17](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=16) specify addition/subtraction of up to three same-denominator quantities, three-term mixed addition/subtraction, and problems. Whole and mixed quantities are included. Calculation results use lowest terms; reduced improper and mixed answers are both accepted. Estimation supports the work. The example denominators here are teaching choices, not a curriculum ceiling. Unlike-denominator operations belong to later learning.

| Lesson | Teaching focus | Objective |
| --- | --- | --- |
| Add equal-sized parts | Join two or three quantities without changing part size | 4N6.5 |
| Subtract equal-sized parts | Remove one or two quantities; include zero | 4N6.5 |
| Regroup a whole | Exchange a whole for fractional parts before subtraction | 4N6.5 |
| Add and subtract in order | Work left to right through three terms | 4N6.6 |
| Solve one-step fraction stories | Interpret totals, amounts left and differences | 4N6.7 |
| Solve two-step fraction stories | Follow two changes and retain the result's unit | 4N6.7 |

Operation diagrams keep every whole at equal width. Added parts have a distinct shade; removed parts are crossed out, with text explaining each change. Each intermediate amount appears in order. Regrouping shows a valid equation such as 2 1/4 = 1 + 5/4. A zero result retains a blank reference whole. Pupils select examples and reveal one step at a time.

English questions contain at most 13 words. Required numbers, conditions and units stay visible. The answer label specifies metres or litres for a story. Hints and optional explanations remain collapsed. Physical strip tasks, spoken explanations and adult practical observations are separate from screen marks.

## Answers, estimates and inquiry

The existing exact fraction parser and scorer are unchanged. Reduced proper, improper, mixed and whole answers are accepted according to the task. Equivalent unreduced answers receive a specific “same amount” message; they are not described as the wrong quantity. Full-width digits/slashes and mixed-number spacing are supported. Invalid syntax, including unit suffixes, does not create a first attempt. First responses and one supported retry remain separate.

Three estimation records accompany the final lesson. A pupil saves an approximate amount and a reason before the exact result can be revealed. The original estimate cannot be replaced by a later result. A separate reflection can be updated after reveal. These records are not graded and do not add quiz marks. Older multiplication/division estimate validation remains unchanged.

The inquiry compares 2 − 1/4 + 1/4 with 2 − (1/4 + 1/4), then invites new numbers. Concrete strips and original predictions precede trials. This optional investigation explores order and grouping; it does not add an algebra prerequisite or nested-bracket requirement.

## Preservation

The topic has separate saved records for each pupil. Earlier P1–P4 data, exact fraction grading, models, badge rules and the repaired badge reader are unchanged. Existing generic badges include the new topic; no new badge rule is introduced. Lesson progress, practical observations, estimates and inquiry stay distinct. Scoped reset, stale-tab protection, damaged/future/oversized-record protection and temporary storage notices are retained. Required new dependencies are included on the badge page as well as lessons.

The twelve sample prompts differ from this topic's teaching and practice prompts. They are fixed samples, not an unseen-question guarantee. Repeated values in different representations are deliberate.

## Verification

Focused browser checks cover 647 core cases across all six P4 topics, 83 new interface cases, seven badge cases, and 190 shared learner wording/navigation cases. The Node runner repeats the same core cases; these are not added to browser totals. Exact reruns and original outcomes are retained in the evidence.

Fourteen new static gates independently recompute all 78 answers with rational arithmetic, check nonnegative intermediates, same displayed denominators, operation limits, bilingual numbers/units, concise prompts, topic counts and unchanged protected files. Eleven inherited badge gates and three inherited fraction suites passed. Generated arithmetic/geometry fixtures are grouped assertions, not extra browser cases.

An authoring assertion initially caught one mixed quantity incorrectly labelled as a whole in the source fixture; it was fixed before generating the lesson data. The local interface had one navigation timeout (`en p4-mixfractionsteps learn`) that passed its exact rerun. No failed check is silently discarded.

All **927 local and 927 public cases** are verified (1,854 selected cases); reruns are not extra cases. The local shared suite had one navigation timeout (`Topic en P2 numbers`), which passed its exact rerun. Public interface and shared navigation each had one timeout (en p4-regroupwholeparts normal; Topic en P1 numberstart). Both passed exact case reruns.

Runtime deployment succeeded. All 45 changed public files and 25 exact versioned assets matched; six repository readbacks matched. All 74 relative handoff/report links resolved. 968 inherited files remained byte-identical, with none deleted. Mobile diagrams were visually inspected locally and live, including equal whole widths, removed-part markings and no horizontal overflow. Classroom trials, independent content/translation review, screen-reader listening and observed practical work remain pending.

## Next

**P4 perimeter**, followed by area as a separate release, according to the [delivery queue](p4-guided-learning-plan.md#delivery-queue). Continue P4 and its application review before P5 and P6; general P1–P3 revision stays deferred.

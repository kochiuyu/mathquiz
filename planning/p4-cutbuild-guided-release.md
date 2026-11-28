# P4 cut-and-build shapes: guided release

28 November 2026. [Open lessons](../p4-learn.html?path=cutbuild). [Evidence](p4-cutbuild-guided-evidence.json).

Six English/Traditional Chinese lessons add **12 together tasks, 54 practice tasks and 12 sample checks**. P4 now has **63 lessons across ten topics**. English prompts use at most eight words. Required diagrams and answers remain visible; hints, optional writing and adult notes stay collapsed.

## Curriculum and teaching

The [EDB notes, PDF page 26](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=26), checked for this release, specify dissecting and forming polygons, with reasoning about component and resulting properties. The [earlier unit audit](p4-dissecting-forming.md) and [physical activity sheets](../activities/p4-dissecting-forming.html) remain available.

| Lesson | Objective | Teaching and response | Physical evidence |
| --- | --- | --- | --- |
| Trace the outside | 4S2.1 foundation | Closed straight outline; internal seams excluded; indented and open examples | Trace paper polygons and point out corners |
| Cut corner to corner | 4S2.1 | Rectangle gives right triangles; square gives isosceles right triangles | Cut both paper originals and check sides/corners |
| Plan different cuts | 4S2.1 | Different two/three-piece partitions; predict before the corner-cut model reveals pieces | Draw two cut plans, cut and retain all pieces |
| Join triangle pieces | 4S2.2 | Form a square, non-square rectangle, triangle or non-rectangular parallelogram | Form two different polygons from matching triangles |
| Join trapezium pieces | 4S2.2 | Matching right-angled trapeziums form a rectangle; joins stay inside | Explain the four outside right angles |
| Check the fit | 4S2.2 | Reject gaps, overlaps, missing and duplicate pieces | Repair actual paper fitting without resizing |

The two topic objectives are supported; polygon recognition is a prerequisite, not an added numbered objective. Models use uniform scaling and exact vertices. Rectangle and square dimensions are labelled where needed to deduce triangle properties. Square/rectangle naming choices explicitly separate square and non-square cases. The established exactly-one-parallel-pair trapezium convention remains intact. Formal diagonal vocabulary, angle sums, degree measures and triangle-area formulas are not required.

## Models and records

The cut model starts without a cut or prediction. Pupils select two non-adjacent corners of a rectangle, square or pentagon, predict the resulting pieces, then reveal the cut. Selecting an outside edge is rejected. The original model prediction remains visible even when wrong; restart or changing paper begins a new temporary trial.

The assembly board offers two triangle and two trapezium kits. Pupils choose a piece, slide it in four directions or turn it by a quarter turn. Both pieces keep their size and shape. A correct fit requires all original pieces once, full target coverage, no overlap and no protrusion; equal total area alone is insufficient. Controls retain keyboard focus. Both models are temporary, reset on navigation and award no quiz marks.

Physical cutting and physical forming have separate lesson observation records, initially unobserved. The linked sheets support adult-supervised paper cutting and retention of actual work. Screen geometry cannot establish safe tool handling or observed construction. Inquiry keeps the original question, prediction and plan beside later trials, including unsuccessful ones and help received. Blank help fields do not establish independence.

The new topic has its own records for each of the existing three pupils. First answers and supported retries remain separate; another answer's draft survives rerendering. Stale, malformed, future and oversized records remain protected. Confirmed reset affects the current pupil/topic only. Earlier lesson content, practice-bank payloads and storage contracts are preserved.

## Verification

**1,388 distinct local browser cases verified**: 1,085 core, 98 interface, seven badge and 198 shared wording/navigation cases. One interface navigation timeout and one shared navigation timeout passed exact reruns; originals remain in the evidence. Public verification and deployment are pending.

Sixteen static gates independently check 64 valid partitions using exact rational clipping and cancellation of internal boundaries, plus 320 rejected missing/duplicate/shifted/stretched mutations. Component side lengths, right angles, congruent trapeziums and four resulting outline types are independently checked. The browser core exercises every new answer, both model languages, rigid turns, cut validation, exact fitting, storage and badges, alongside all nine earlier topic suites. Sweeps count as aggregate checks, not extra pupil tasks.

The first phone answer initially appeared at 996 px; shortening the caption and tightening diagram spacing moved it to 845 px at 375 px width. Bilingual first-answer position checks now cover this.

Interface cases cover both languages, every lesson/stage, all model examples, SVG label bounds, question submission/retry, original predictions, adjacent-corner rejection, both piece kits, gaps/overlaps, resets, keyboard focus, observation/inquiry records, prerequisite destinations, topic inference and nine earlier routes. Badge and shared wording/navigation checks cover the shared assets.

The inherited dissection geometry suite initially failed because Windows decoded its UTF-8 input using the local code page. Its subprocess now explicitly selects UTF-8. After that, it reached an outdated homepage script-version expectation; the unchanged baseline failed identically. The expectation now matches the existing homepage version while retaining exact checks. Both inherited dissection suites and eleven badge gates pass. No old assessment content was changed.

Classroom trials, independent content/translation review, screen-reader listening, physical printing and observed paper work remain pending. These sample questions are not a fresh whole-P4 transfer assessment or mastery certificate.

## Next

**P4 eight directions**, followed by decimal meaning and decimal calculations. Follow the [P4 delivery queue](p4-guided-learning-plan.md#delivery-queue), finish the whole-P4 coverage/application review, then implement P5 and P6. General P1–P3 revision remains deferred.

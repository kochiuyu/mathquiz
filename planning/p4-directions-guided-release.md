# P4 eight directions: guided release

28 November 2026. [Open lessons](../p4-learn.html?path=directions). [Evidence](p4-directions-guided-evidence.json).

Six English/Traditional Chinese lessons add **12 together tasks, 54 practice tasks and 12 sample checks**. P4 now has **69 lessons across eleven topics**. Questions use short prompts; required diagrams, route steps and answers remain visible. Hints, optional writing and adult notes stay collapsed.

## Curriculum and teaching

The [EDB notes, PDF page 27](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=27), checked for this release, specify all eight directions and compass applications. [The earlier audit](p4-directions-iii.md) and [physical activity sheets](../activities/p4-directions-iii.html) remain available. The prerequisite is [P2 four directions](../p2-learn.html?path=directions).

| Lesson | Objective | Teaching and response | Physical evidence |
| --- | --- | --- | --- |
| Find eight directions | 4S3.1 | N, NE, E, SE, S, SW, W, NW; intercardinal names and abbreviations | Point out directions from a stated place |
| Start from a named place | 4S3.1 | Name a target direction from the marked reference | Identify reference and target in the room |
| Swap the reference place | 4S3.1 | Reverse the two places and explain the opposite direction | Look back from the second place |
| Turn the map | 4S3.1 | Follow the north arrow when the paper turns | Turn a paper map without changing the relationship |
| Use a compass | 4S3.2 | Align the dial, wait for a steady level instrument, identify interference | Use an actual compass; record original prediction and repeated readings |
| Turn and follow a route | 4S3.2 | Turn left/right through one or two right angles from the shown facing direction | Follow an adult-approved route; stop before reading the instrument |

Maps rotate rigidly: north, places, roads and facing arrows move together. Reference places are explicit. Turns start from the shown facing direction. Numerical bearings, angle degrees, declination, coordinate notation and map-scale calculations are not required. Accessible diagram descriptions use ordinary screen positions and identify the north arrow, places, roads and facing/sighting lines.

## Models and records

The rotating-map model keeps a chosen relationship through four paper orientations. The compass model starts with the dial N misaligned; pupils turn it left or right, then read the dashed sighting line. It is explicitly a picture and does not measure device direction. These temporary models award no quiz marks.

An optional real-compass notebook starts blank. Each of two independent reference places keeps the pupil's original reference, target, instrument and predicted direction. The first pair of actual readings, date and reported help are retained separately from one later pair. Disagreeing readings stay visible and prompt a tool/location check. Looking back requires a new observation; no opposite answer is prefilled. Blank help does not establish independence. The record is a report, not proof of physical competence or a quiz score. Failed storage is described truthfully as temporary.

The lesson notes and linked sheets distinguish screen recognition from instrument use. Pupils follow the actual instrument's instructions to identify its north-seeking end; no universal needle colour is assumed. Keep the instrument level, wait for it to settle, avoid interference and change tool or location when readings are unreliable. Real routes require adult supervision, safe locations and stopping to read before moving. Inquiry preserves an initial prediction beside later trials, including unsuccessful ones and help received.

The new topic has separate records for each of the three existing pupils. First answers and supported retries remain separate; drafts survive rerendering. Original compass predictions/readings cannot be overwritten. Stale, malformed, future and oversized records remain protected. Confirmed reset affects only the selected pupil/topic. Earlier teaching content, practice-bank payloads and storage contracts are preserved.

## Verification

**All 1,500 selected local browser cases are verified:** 1,188 core, 105 interface, seven badge and 200 shared wording/navigation cases. One P1 navigation timeout passed its exact rerun; the original failure remains in the evidence. Public verification and deployment are pending.

Seventeen static gates include an independent Python oracle which derives all 78 answers from 156 actual bilingual SVG drawings and the route instructions. It checks reference reversal, four map orientations, facing-relative turns, unique road choices, compass sighting, all eight answers, readiness scenarios and preserved content. The core browser suite covers all eleven P4 topics. Rotation/turn sweeps count as aggregate checks, not extra pupil tasks.

A manual model preview found that untouched blank compass selectors triggered the unsaved-draft guard. Explicit blank defaults fix this; a new regression checks both clean blank forms and protected typed drafts. The real-compass task also now names its notebook directly.

Interface checks cover both languages, all lessons and stages, all teaching examples and SVG label bounds, all sample checks, first answers/retries, both interactive models, keyboard focus, blank and required notebook fields, original predictions/readings/retries, separate reference places, stale drafts, blocked storage, mobile answer placement, observations/inquiry, scoped reset, prerequisites and all ten earlier topics. Badge and shared wording/navigation suites exercise shared assets.

The inherited direction-independent suite had a known stale homepage version expectation from earlier releases. Only that expectation was aligned with the existing homepage script version before this run; predecessor payload and marking checks remain exact. Both inherited direction suites and eleven badge static gates pass. No old assessment content was changed.

Classroom trials, independent content/translation review, screen-reader listening, physical printing and observed compass use remain pending. These sample questions are not a fresh whole-P4 transfer assessment or mastery certificate.

## Next

**P4 decimal meaning**, followed by decimal calculations. Follow the [P4 delivery queue](p4-guided-learning-plan.md#delivery-queue), finish the whole-P4 coverage/application review, then implement P5 and P6. General P1–P3 revision remains deferred.

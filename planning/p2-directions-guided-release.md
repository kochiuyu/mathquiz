# P2 Compass directions and positions · guided release

22 November 2026. [Open the topic](../p2-learn.html?path=directions). Five bilingual lessons add 45 practice tasks, ten guided tasks and a ten-item sample check. P2 now has 16 topics, 90 lessons and 810 practice tasks. Existing question-bank tasks and earlier topic payloads remain unchanged.

## Scope and sequence

The [EDB KS1 explanatory notes, printed page 38](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/en_ks1_e.pdf#page=44), checked 22 November 2026, require the four main directions and compass measurement, including relative-position sentences and walking in a measured direction. The [unit brief](p2-directions-ii.md) and [practical activity](../activities/p2-directions-ii.html) retain detailed source references and observation sheets.

| Lesson | Objective / note | Teaching and evidence |
| --- | --- | --- |
| Four directions and short forms | 1 | N/E/S/W names, opposite pairs, clockwise order and turned paper. Spoken names recorded separately. |
| Find north before reading a map | 1 | North-arrow orientation before page position; maps in all four page orientations. |
| Relative positions | 1, sentence note | Start at the reference object, say a full sentence, swap reference/target and reverse direction. |
| Measure with a real compass | 2 | Read the actual instrument instructions, identify its north-seeking end, hold level, wait, mark directions and recheck after turning. |
| Turn, check and follow | 1/2, movement note | Facing-dependent left/right, temporary keyboard model, actual two-leg measured walk and explanation of return route. |

P1 relative-position work is linked as a useful revisit. This branch is open without completing arithmetic. There are only four main directions: no diagonal directions, numerical bearings, scale or declination calculations. Quarter-turn left/right is an application of P1 position knowledge. Maps show a north arrow; page up is never assumed to be actual north. Turning the body does not change the room's north. Real compass use and walking remain practical tasks, not automatic marks.

## Practical work and accessibility

All lessons have bilingual prompts, links to the existing activity and a separate saved observation note. The compass lesson asks for place, instrument, measurements, recheck, actual words/actions and assistance. It does not assume a universal needle colour. The adult checks a clear suitable location and reliable readings; pupils stop before looking down at a compass. If a partner walks from a pupil's instructions, compass reading and movement are recorded separately.

The turning model is explicitly a model, not a sensor or assessment. Left/right buttons turn the facing arrow while fixed compass labels remain in place. Four right turns return to the starting direction. Keyboard activation retains focus, and leaving the lesson resets the model. Drawings include an accessible description of page geometry and north-arrow orientation, preserving the same directional reasoning as the picture. No dragging is required. Native buttons/selects and scoped responsive SVGs support narrow screens.

Screen choices do not certify full spoken sentences, compass handling or walking. Notes are self/adult records, not verified attainment. No practical completion score or admission gate is added.

## Compatibility

Path `directions`; storage `mathquiz-p2-directions-v1`, with separate learner slots. The existing shared serializer is unchanged. Stable question IDs, explanations, cursor, practical notes and sampled check are saved for this topic only. Reset leaves other learners, earlier P1/P2 topics and practice banks untouched. A future-format record remains protected until an explicit reset. Twenty-three earlier data/support files are frozen by hashes; topic-count tests change only their topic-link selector assertion.

The shared app adds two scripts, a topic choice, the shapes-branch link, the P1 position revisit, visual dispatch and direction-specific explanation wording. Its earlier response types and answer limits remain intact.

## Verification

All **1,957 distinct local and public browser cases verified**, with original failures and exact reruns retained in the evidence. The final 93-case directions suite was also verified locally after the explanation-label refinement (92 initial passes and one successful exact timeout rerun). All **35 static suites passed**, including seven new direction gates. All **25 changed runtime/test files** matched deployed hashes. Runtime commit `b2cdf766a18f11c712f7639f131966f8717221dd`; [successful deployment](https://github.com/kochiuyu/mathquiz/actions/runs/44967868335).

The new static gates independently recover point and north vectors from rendered SVG and project them to check every map answer, including reversed references. Facing vectors are rotated independently to check each left/right item. Fixed sample answers are also checked, alongside bilingual fields, unique IDs, record bounds, stale-tab updates, unavailable storage and future-record protection.

The first preview opening reported a script content-length mismatch before any cases ran; a fresh navigation started the complete run. Its navigation wait timed out while the nested suites continued. A final directions-only rerun covers the direction-specific explanation-label refinement. Original case failures and exact reruns are retained in the evidence; no timeout is counted as a pass without a successful rerun.

At 320px, the Chinese turning model was visually inspected and keyboard Enter turned north to east, retained button focus, and caused no horizontal overflow. SVG width was about 218px. This does not substitute for screen-reader listening or classroom testing.

## Remaining work

Next: integrate P2 investigations across the existing topics, then audit whole-P2 coverage, prerequisites, unfamiliar application and readiness. Do not move automatically to P3 based on screen scores. Classroom trials, real compass observations, independent translation, screen-reader use and physical printing remain pending.

[Machine-readable evidence](p2-directions-guided-evidence.json) records the verified release. Final document deployment/readbacks are recorded in the attached completion note.

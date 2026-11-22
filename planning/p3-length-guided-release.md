# P3 kilometres and millimetres — guided release

Date: 22 November 2026. Route: [P3 length](../p3-learn.html?path=length). Baseline: `13579e7c14a48024f4b856826a7ae8e2f16f22ac`.

## Scope and sequence

The [official EDB notes, PDF pages 56–57 / printed 50–51](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=56) were retrieved again for this implementation. They require km/mm recognition, comparisons, actual measurement and appropriate records. Measurement experience precedes estimation. Compound-to-single conversion is included; single-to-compound and decimal records are not required. The existing [unit audit](p3-length-distance-iv.md) and [activity sheets](../activities/p3-length-distance-iv.html) remain unchanged.

| Lesson | Objective | Digital teaching | Actual pupil evidence still needed |
|---|---|---|---|
| Kilometres | 3M1.1 | Ten represented 100 m sections; 1000 m = 1 km | Familiar route, verified reference and explanation |
| Compare km | 3M1.2 | Fictional tunnel lengths and route distances, including equality | Explain both comparison contexts and matching units |
| Millimetres | 3M1.3 | Ten equal intervals per cm; boundary marks versus spaces | Locate 1 mm and 1 cm on a real ruler |
| Measure mm | 3M1.4 | Zero alignment, endpoint reading, shifted starts, strip/dot models | Measure two actual strips AND two actual straight dot-pair distances, record tool use and compare pairs |
| Records and estimates | 3M1.5 and remarks | Suitable unit with supplied plausible number; cm/mm to mm; two notebooks | Use measured reference, estimate new specimen before measuring, record units and explain difference |

All five lessons remain open; optional prior links point to P2 metres and the measurement review. Physical references can be adult-provided and verified without requiring a kilometre walk. No screen or printed image is claimed to have physical calibration. Other mathematically valid unit choices can be discussed; marked unit questions specify the number as well as context.

## Inventory and evidence boundaries

Five lessons; two guided plus three tasks at each of Easy/Normal/Difficult per lesson: **45 practice + 10 guided + 10 checks = 65 tasks**. Check prompts are new relative to this pathway's practice; formats are familiar. They do not prove unfamiliar transfer or practical mastery. P3 totals: three topics, 16 lessons, 144 practice tasks.

The practical notebook has independent strip and dot-pair records. A reference already measured, a new target, and an estimate with unit/reason are required before the result form appears. The original record cannot be replaced. Actual tool/alignment, measurement with unit and reflection are required later; help is optional and blank help means unknown. Free text allows real observations, uncertainty and compound notation; it is not automatically graded or certified. There is no fixed specimen answer. An adult may transcribe.

Prediction-led inquiry asks whether a known reference helps with new estimates. Pupils choose/adapt the question, keep predictions, collect trials, explain and test changes. No automatic inquiry completion or hours claim.

## Storage and compatibility

The added key is `mathquiz-p3-guided-v1-length-<pupil>` (or the corresponding test key). The three pupils remain independent, not difficulty settings. Topic-specific IDs and numeric bounds are validated. Number and multiplication records retain their prior contracts. First answers and one supported retry stay separate; resetting length affects only that topic/pupil. Observations, estimates and inquiry are not scores.

The shared engine has one new selector, model renderer and optional ruler question graphic; prior datasets and models are unchanged. The store rejects stale writes and protects malformed, future and oversized data. Blocked storage is explicitly temporary. Drafts survive rerender; read-only reloads do not write. All 816 inherited files outside six explicit shared runtime/document files remain unchanged.

## Verification record

Eight static gates passed: inventory/bilingual coverage; independently counted intervals and repeated-addition arithmetic; fresh check prompts; inherited-file comparison; three-topic/pupil isolation; first-answer/estimate separation; stale/damaged/blocked storage; maximum record capacity and numeric boundaries.

Browser results are recorded in [machine-readable evidence](p3-length-guided-evidence.json). **All 282 distinct cases verified locally and publicly**: 81 length, 91 multiplication and 110 numbers. This is the current P3 regression set, not a new full-site run.

Local: preliminary length 81/81; final length 80/81 after widening the mobile ruler and enlarging labels, with exact `Layout zh 1280 p3-lengthrecords` timeout rerun passing. Multiplication 90/91 with exact `Model and practical zh carry` timeout rerun passing. Numbers 109/110 with exact `Layout zh 320 check` timeout rerun passing.

Public length: 80/81 initially. Exact timeout reruns passed: `Tasks zh p3-kilometre together`. 

Public multiply: 90/91 initially. Exact timeout reruns passed: `Tasks zh p3-carryproduct difficult`. 

Public numbers: 109/110 initially. Exact timeout reruns passed: `Tasks zh p3-crossfive normal`. 

Outer navigation timeouts occurred while runners continued; results were polled without restarting. No failed case was silently dropped. Test-owned keys were restored. A native 320px Chinese keyboard check accepted full-width １８ plus Enter as 18, focused feedback and did not overflow. The test key was restored. Mobile and live model screenshots were inspected; this is not comprehensive accessibility review.

Runtime commit `5e0aa303595822584722bf46e7c5cbc07b3b91d3`; [Pages deployment 44992481500](https://github.com/kochiuyu/mathquiz/actions/runs/44992481500) succeeded in 45 seconds. All 14 GitHub payload readbacks matched. All ten runtime/test public hashes matched. All 226 relative Markdown links resolved. Final documentation publication/readback is completed separately and recorded in the attached release-completion note.

Independent translation review, screen-reader listening, physical printing, real-tool calibration, pupil trials and adult observations have not been performed. Automated layout and marking checks do not establish those results.

Next: division by one digit, with fraction foundations as a parallel branch.

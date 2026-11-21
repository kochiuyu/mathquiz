# P2 metres, lengths and distances

21 November 2026. [Open the lessons](https://kochiuyu.github.io/mathquiz/p2-learn.html?path=metres).

## Learning sequence

Six bilingual lessons form an early everyday-maths branch: build one metre; choose and use tools; read and compare lengths and distances; record metres and centimetres; calibrate a personal reference; estimate before measuring. Relevant P1 length and ruler lessons are linked as optional preparation. Pupils do not need to finish multiplication to enter this branch.

The release adds **18 teaching explanations, 12 guided tasks, 54 practice tasks and a 12-question sample check**. P2 now has **six guided topics, 34 lessons and 306 practice tasks**. The practical notebook is separate from these screen tasks. P1's 45 lessons and all existing question banks remain unchanged.

## Curriculum scope

The [EDB explanatory notes, printed pages 29–30](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=35) provide four 2M1 objectives: understand metres and their relationship to centimetres; measure and compare lengths and distances; record with suitable units; and use measured personal references to estimate. The notes permit mixed metres/centimetres to be expressed in centimetres and place personal-reference work after measurement experience.

The teaching uses 100 cm = 1 m, whole metres and mixed m/cm records. It does not require centimetres to be decomposed into mixed units, decimal measurements, millimetres, kilometres or perimeter. Reference lengths are measured for the individual rather than assumed from body size. The six-lesson organisation and notebook interface are MathQuiz choices, not an official timetable.

| Objective | Guided materials | Practical evidence still needed |
| --- | --- | --- |
| 2M1.1: metre and centimetre relationship | Ten 10 cm pieces; labelled metre intervals; matching units | Construct and handle an actual one-metre reference |
| 2M1.2: measure and compare lengths and distances | Zero alignment, repeated metre placement, tools, endpoints, labelled object and distance diagrams | Observe actual tool placement, reading and comparisons |
| 2M1.3: suitable units and records | Whole metres, mixed m/cm, mixed-to-cm conversion, notebook units | Inspect units attached to the pupil's real measurements |
| 2M1.4: estimate with a measured personal reference | Two reference readings, approximate reference, estimate-first records and reflection | Observe calibration, estimate reasoning and subsequent tool use |

Metre rulers, tapes and other suitable tools can offer different workable methods. The tool-choice question accepts both a tape and carefully repeated metre-ruler placement. Diagrams label scale values and endpoints; a ribbon's length is distinguished from a straight A-to-B distance. All scale diagrams explicitly say they are not actual size. Conversion boxes are labelled parts, not proportional length pictures.

## Practical notebook

Each learner has a calibration record and two trials: a new object length and a new straight distance. Before calibration, pupils describe earlier real length/distance measurement experience and any help. They record a comfortable reference, two actual readings and a chosen approximate length. An arm reference is available when walking is unsuitable. No fixed automatic error threshold is imposed.

A trial first stores the target and endpoints, units, estimate and reasoning. It also takes a snapshot of the reference used. Only then does the measured-result form appear. The original estimate, target and reasoning remain unchanged when the measured result is added or corrected. Updating the current reference does not rewrite an older trial's reference. More trials can be recorded on the linked [existing activity sheet](../activities/p2-length-distance-iii.html).

Results and reflections are self-reported practical records. The app does not supply real-world measurements or infer tool competence from a completed form. Examples with supplied reference lengths are clearly labelled examples. No practical accuracy score is awarded. Screen answers, the sampled check, written explanations and adult observations remain distinct.

## Saving and access

Screen work uses `mathquiz-p2-metres-v1`; practical records use `mathquiz-p2-metres-fieldwork-v1`, each with three learner slots. The five earlier P2 data files and shared store are byte-for-byte unchanged. Reset clears only the current learner's metres topic and notebook. Other topics, P1 and other learners are preserved.

Notebook changes merge against the latest stored record, so a stale tab cannot resurrect a reset trial. Malformed, future-version and oversized records are protected until explicit reset. Blocked/full storage retains work for the current session and displays a notice. Text is escaped and bounded. Whole-number fields accept full-width digits; decimals and invalid remainders are rejected. The 1–999 cm reference bounds and notebook field limits are application limits, not curriculum attainment criteria.

Inputs have labels and touch-sized controls. Enter submits calibration and estimates; feedback receives focus. Invalid entries remain in the form for correction. Hidden extra-centimetre fields do not block submission when a single unit is selected. English and Chinese layouts are checked at widths 320, 375, 768 and 1280. Screen-reader listening remains pending.

## Verification

Local: **940 distinct browser cases verified**, including two exact successful reruns of prior P1 page-load timeouts. All **25 static suites passed**, including 13 new gates. Conversion and interval answers use independent addition checks; the complete response key, multiple valid tools, reference snapshots, estimate locks, storage failures, maximum records and preserved files are checked.

The new browser suite contributes **112 cases** covering both languages, six teaching routes, guided/practice stages, sample-check marking and revisits, calibration and estimate gating, invalid-input retention, mixed units, record/score separation, learners, resets, stale updates, language switching and responsive layouts. The other 828 cases cover earlier P1/P2 flows. Suites use separate test keys and restore previous test values.

Manual local inspection covered an English labelled distance/length diagram and the Chinese notebook at an actual viewport width of 375 pixels. Full-width numbers, keyboard submission, feedback focus, mixed-unit estimates and separate measured results worked without horizontal overflow. Inputs were explicitly synthetic test data; no actual pupil measurement took place. A nonmatching manual button selector was corrected using the observed button label. One result-inspection timeout was followed by a successful completed-result read; it was not a test-case failure.

Public: **940 distinct browser cases verified**, including 4 exact successful timeout rerun(s). All fifteen deployed runtime/test files matched SHA-256 readback. Original failures, exact reruns and browser observer timeouts are preserved in the [evidence](p2-metres-guided-evidence.json).

Source baseline: `1e7e539148d2c065fe64d97e8d57f854fb67e39d`. Runtime: `9fa10691c68d538f26ead5810789549951999977`. The [runtime Pages deployment](https://github.com/kochiuyu/mathquiz/actions/runs/44879886042) completed successfully with the matching commit.

## Remaining work

Guided materials now address the four 2M1 objectives, with real measurement and observation still required. Classroom trials, difficulty calibration, independent translation, screen-reader listening, physical printing and observed practical performance remain pending. The existing worksheet was linked, not newly print-tested.

Next implement **pictograms (2D1)** as another early parallel branch. Retain the later four-digit-number → money → subtraction/change sequence and angles → quadrilateral-properties sequence.

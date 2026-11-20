# P1 practical application and readiness review

20 November 2026. This closes the implementable practical/transfer follow-up before guided P2 work. It does not certify full P1 attainment.

## Pupil flow

All 45 guided lessons now have a bilingual, lesson-specific **Try away from the screen** panel with a working practical-sheet link. A button at the final teaching step opens and focuses that panel. The six foundation lessons retain their original practical prompts; the earlier 39 lessons gain original prompts. Opening a task does not mark it complete. Existing lessons, generated questions, quizzes and recommended routes retain their identities and content. Panels are absent during topic quizzes.

Examples include making one's own estimate before counting or seeing choices, independently writing column calculations on blank paper, explaining operation choices aloud, tracing real objects, measuring from zero with a real ruler, identifying Hong Kong coins and reading real clocks/calendars. Adults observe actual work. No automatic tick pretends that writing, measuring or speaking happened.

The [P1 review](../p1-review.html) is linked from the learning homepage and topic results. It has six fixed, original bilingual screen questions on parts, addition with exchange, subtraction in context, shape invariance, length comparison and whole-hour intervals. Explanations appear after all six whole-number answers are submitted. Wrong answers link to specific lessons; correct answers lead to the practical tasks, not a promotion message. A repeat uses the same questions and is explicitly labelled practice.

Six additional practical tasks cover oral number work, free estimation, independent written columns, real shapes/positions, rulers/coins and clocks/calendars. Each has optional observation/help/next-step notes and related lesson links. An adult can enter actual observations, or the pupil can explain orally or by drawing. Notes are never merged into the screen score, treated as an adult certification or used to unlock P2. Missing notes remain unrecorded evidence. The sample is not an exhaustive objective-level examination.

## Persistence and accessibility

Review answers, submission state and six notes (240 characters each) are saved under the current pupil in the existing device-only `mathquiz-learning-v1` record, schema 1. Three slots continue to mean separate pupils. Reading older records supplies an empty review without migrating or clearing old work. Completing a review does not move the lesson cursor, set lesson completion or alter topic quiz scores. Switching pupils and resetting one pupil keep the other pupils isolated. Reset wording now explicitly includes the P1 review.

Saved records are bounded and cleaned; note HTML is escaped. The read capacity is 300,736 characters. Blocked storage still permits use for the current visit and shows a warning. A cross-tab change disables editing and offers reload. Language changes retain the same answers and notes. The print control uses browser printing; printed notes are full text mirrors rather than clipped textareas. Physical printing and screen-reader listening remain unperformed.

The first answer remains within the sampled 812px-high mobile viewport; tests cover English/Traditional Chinese and widths 320, 375, 768 and 1280px. Practical panels remain collapsed until requested. Existing parent/teacher routes remain available.

## Verification

19 static gates passed, including 45 bilingual practical prompts, 15 valid worksheet routes, six independently calculated answers, observation links, sanitization, pupil isolation/reset, storage limits and legacy content checks.

All 286 distinct local browser cases verified: final practical/review 47/48, shared student 186/188, foundations 18/18, map 16/16 and inquiry 16/16 in full runs; all three navigation-timeout cases passed exact reruns. Public verification pending.

## Curriculum and remaining evidence

The [P1 coverage review](p1-coverage-review.md) remains the objective-level map. These original tasks operationalise its practical and transfer concerns; they add no curriculum objectives or guided P2 lessons. Existing totals remain 15 pathways, 45 lessons, 405 levelled practice items and 15 investigations. The readiness sample adds six screen questions and six practical task groups, counted separately.

Classroom trials, difficulty calibration, independent translation review, screen-reader listening and physical printing remain pending. Oral fluency, all fact combinations, actual physical skills and independent transfer cannot be established by automated tests. Adults should use the review to choose revisits and plan the next learning step, not apply a fixed P2 cutoff. Guided P2 planning may proceed with these limits explicit; manual validation remains a separate workstream.

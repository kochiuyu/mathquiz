# P1 teaching: number bonds and taking away

20 November 2026

## Pupil journey

The new pathway has three original bilingual lessons: **Two parts, one whole; Take away and count what stays; Put the parts back together**. It sits between the first numbers/addition pathway and Numbers to 100. A successful first-pathway check now offers it; a successful new check offers Numbers to 100, resuming saved work there when available. Pupils can still choose any pathway directly. Existing lesson IDs and both earlier quizzes retain their meanings.

Each new lesson has three teaching steps, two guided questions and three questions at each of Easy, Normal and Difficult. The addition is **nine teaching steps, six guided questions and 27 levelled practice items**. All new tasks include a diagram: part/whole boxes, visible or covered groups, or crossed-out counters. Across the three pathways there are **nine lessons and 81 levelled practice items**, plus a separate six-question core check for each pathway. These are teaching-pathway counts, not changes to the existing resource catalogue or skill banks.

| Lesson | Teaching | Difficulty progression |
|---|---|---|
| Two parts, one whole | Joining parts, alternative splits, finding a covered part | Count visible parts; infer a covered part; correct a claimed part or keep a whole fixed while moving a counter |
| Take away and count what stays | Taking away, taking all, taking none | Count uncrossed counters; apply the horizontal subtraction; distinguish taken-away/remaining amounts or recover what was taken |
| Put the parts back together | Rebuild the original whole; related addition/subtraction statements | Fill a related part; rebuild the whole; explain a wrong subtraction using the original parts |

Shorter practice introductions keep the first answer accessible on small English screens. Difficulty continues to describe the question's demand, not speed or a learner category. All three answers must be correct to complete a level, including answers corrected after feedback. Practice completion is not first-attempt mastery. The check offers no hints before submission, then explanations and a suggested review lesson below five correct answers. That threshold and the difficulty labels remain provisional. Retakes rotate three deterministic forms with overlapping items, not independent standardised assessments.

## Curriculum boundaries

The source checked for this release is the [EDB Key Stage 1 explanatory notes](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf), sections 1N1/1N2, PDF pages 7–10. The broad earlier plan said “within 20”; the implemented scope is deliberately more precise:

- Number bonds use two one-digit parts and totals from 2 to 18.
- Taking-away tasks use those one-digit part pairs, plus explicit zero cases.
- Explorations connecting addition and subtraction stay within 10.
- Tasks are diagram-led and use horizontal statements. Column subtraction and larger-part calculations are not introduced.

The text, questions and diagrams are original MathQuiz work. Pupils are encouraged to explain with the parts; this is early relational understanding, not a formal checking algorithm. This does not complete all 1N1/1N2 teaching: ordinal/odd-even coverage and comparison-as-subtraction still need dedicated lessons, along with classroom manipulation and discussion. Existing curriculum completion flags remain unchanged.

## Saved work and navigation

The existing browser-local version-1 record is extended additively. The first pathway still uses its original quiz/attempt fields; Numbers to 100 still uses `checks.hundred`; the new pathway uses `checks.subtract`. Allowed lesson IDs and per-pathway cursors are explicitly listed. Earlier answers and quiz results are not re-scored against new questions. Each pupil has one record spanning all difficulty levels and all three pathways, with separate drafts, attempts and results.

The three learner slots remain optional and below the pathway. Reset wording explicitly says it clears the selected learner's progress/results across all pathways; other learners are preserved. A complete three-learner record with all nine lessons is tested at 10,033 characters, safely within the existing 20,000-character read bound. Malformed fields remain bounded. Saved zero answers and existing `100` answers survive language/reload changes. Storage-denied use can finish in one visit, with the existing warning; no account, cookie, tracking or cross-device sync is added. Other Smart practice tools continue to have separate storage.

## Verification

Five static gates passed: the original student gate, numbers-to-100 gate, new subtraction gate, resource structure and shared UI structure. The new gate independently checks **216 generated-answer cases**, all 27 new practice items, twelve check-attempt configurations, diagram presence, curriculum number bounds, zero, malformed records, earlier quiz preservation, learner isolation and the fully populated storage record. The earlier answer checks remain intact.

All **42 distinct local browser cases are verified**. The final full run passed 41 and had one navigation timeout in `Subtraction layout en 768` at `learn.html?lesson=bonds&stage=practice&level=normal&lang=en`; its exact rerun passed 1/1. An earlier development run passed 40/42 and found two real first-answer placement failures on English mobile screens. Repeated introductory text was shortened; both cases passed in the final full run. The final runner's initial browser navigation call timed out while the tests continued; it was read without reloading.

The suite covers all three full bilingual journeys, wrong/blank answers, retakes, preserved old results, zero/100 drafts, three-pathway resumes, learner reset/isolation, quiz prerequisites, cross-tab conflicts, storage-denied completion and layouts at 320/375/768/1280 pixels. The compact English Difficult practice was visually checked: its first answer field ended within the sampled 812-pixel viewport. Public verification is pending; exact evidence is recorded in [the release evidence](p1-subtract-evidence.json).

The broader 267-case shared browser suite was not rerun in this focused release; resource/shared static gates and parent/teacher gateway browser cases are included. Pupil trials, independent translation review, screen-reader listening and physical-object classroom work remain unperformed. No claim of full P1 teaching coverage or calibrated mastery is made.

## Remaining P1 teaching plan

1. Counting groups of two, five and ten, then estimation against known groups (remaining 1N3 teaching).
2. Fill the earlier gaps: ordinal numbers, odd/even numbers and comparison-as-subtraction (1N1/1N2).
3. Addition/subtraction within 100 using appropriate concrete representations (1N4).
4. Extend measurement, money, time, shapes, position and data from existing curriculum objectives and activities.

For each pathway, check the specific curriculum boundaries before authoring. Write teaching and diagrams first, then guided practice, increasing reasoning demands and a short core check. Preserve lesson/check IDs and all earlier saved records. Verify answers independently, test both languages and mobile answer placement, exercise zero/boundary inputs and storage failures, publish exact results including retries, and then seek pupil feedback before describing levels as calibrated.

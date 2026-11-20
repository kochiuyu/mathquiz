# P1 teaching: positions, pairs and differences

20 November 2026

## Pupil journey

[Open the pathway](https://kochiuyu.github.io/mathquiz/learn.html?path=relations). Three original bilingual lessons add nine teaching steps, six guided questions and **27 levelled practice items**. Across five pathways there are now **15 lessons and 135 levelled practice items**, plus a separate six-question check for each pathway. Existing curriculum, skill and adaptation banks are unchanged.

| Lesson | Teaching | Increasing challenge |
|---|---|---|
| Which position? | Distinguish total quantity from position; identify the starting end; count each token once | Count from either end, separate a position from the total, correct a reversed-direction claim, update a position after a token joins |
| Odd or even? | Make pairs; recognise zero as even; use the ones digit of larger numbers | Choose a number of the requested kind, distinguish tens from ones, explain an unpaired counter, complete a pair |
| How many more or fewer? | Match two aligned rows, count unmatched counters, recognise equal quantities | Interpret more/fewer wording, reject a group's total as the difference, find how many to add to equalise quantities |

Each lesson follows teaching, guided practice and Easy → Normal → Difficult practice. Corrected practice answers can complete a level; completion is not first-attempt mastery. A six-question check follows completed practice, with explanations and review guidance afterwards. The five-out-of-six threshold is provisional. Retakes rotate three deterministic forms with overlapping items, not independent standardised assessments.

The grouping/estimation result now offers this pathway. Its successful result offers existing odd/even Smart practice, which has separate saved progress. The homepage keeps Start/Continue above the five compact choices, with only one pathway's lesson list expanded. The displayed pathway count now comes from the catalogue. Parent/teacher tools remain available.

## Curriculum scope

The source is the [EDB Key Stage 1 explanatory notes](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf), units 1N1–1N3, printed pages 1–6 (PDF pages 7–12). Ordinal/cardinal meanings are taught with positions up to twenty. Pairing establishes odd/even within twenty; the previously introduced tens/ones knowledge supports zero and larger two-digit examples under 1N3. The largest authored odd/even comparison is 71.

Comparison-as-subtraction uses diagram-led differences with larger quantities at most 18; the matched quantity and the difference are each at most nine, with explicit zero cases. It uses horizontal statements and verbal more/fewer descriptions. Inequality symbols, column calculation and larger subtraction rules are not introduced. Pupils can explain with real objects, but classroom manipulation and discussion are not observed by the site. This addition fills these specific teaching gaps, not all P1 learning outcomes.

## Diagrams and language

Ordinal diagrams stay in one row, including twenty tokens, with left/right labels and a star distinguished by shape and contrast. Text alternatives list tokens from left to right. Questions explicitly state the starting end and request a position number; a separate question requests the total quantity.

Odd/even diagrams pair counters, mark a single counter separately and show an empty collection for zero. Larger examples show complete tens and paired ones. Marked classification tasks ask pupils to enter the requested number from two stated alternatives, avoiding English/Chinese spelling as part of the maths assessment. Diagrams describe the quantities for nonvisual users; independent screen-reader listening remains pending.

Comparison diagrams align both rows from the left; corresponding positions use the same spacing. Empty positions remain visible as gaps, so extra counters can be counted. A/B labels and text alternatives identify the two quantities without relying on colour alone.

## Saved-work compatibility

The existing version-1 browser-local record and three pupil slots remain. New lesson IDs are `position`, `parity`, `difference`; pathway ID `relations` has separate `checks.relations` and continuation data. All earlier practice and generated questions retain their exact content and IDs, checked by a baseline hash. Existing quiz scores are not recomputed against changed questions.

Tests cover earlier results, zero and 100 answers, language changes, separate difficulty/pathway continuation, learner isolation and reset, malformed values, and completing a pathway with storage unavailable. A complete three-learner record across fifteen lessons is **16,582 characters**, below the existing 20,000-character read limit. Future expansion must recheck this bound before adding more lessons. Progress remains browser-local; clearing browser data removes it, and there is no account or cross-device sync.

## Verification

All **67 local browser cases passed in one full run**, with no retries. Seven static gates passed: the original student, Numbers to 100, subtraction, grouping/estimation, new relations, resource structure and shared UI gates. The new gate independently checks 216 generated answers, all 27 practice answers, twelve check-attempt configurations, numerical limits, earlier question compatibility and five-path storage.

The browser suite includes all earlier 54 cases and thirteen new cases: complete bilingual journeys, wrong/blank answers, retakes, older quiz preservation, pathway/language/difficulty continuation, learner isolation, denied storage, 320/375/768/1280 layouts and boundary diagrams. A local 320 × 812 English Difficult position sample showed all twenty tokens without horizontal overflow; its first answer ended at pixel 711.80. Public verification is pending.

Exact results and deployed content hashes are recorded in [the evidence](p1-relations-evidence.json). The broader 267-case shared UI/activity browser suite was not rerun; parent/teacher gateway cases and shared static checks are included. Pupil calibration, independent translation review, screen-reader listening and physical-object classroom review remain unperformed.

## Next P1 teaching work

1. Addition/subtraction within 100: concrete place-value representations, carrying addition and subtraction without borrowing, within the precise 1N4 limits. Recheck storage capacity before expanding.
2. Measurement, money, time, shapes and position, using existing curriculum objectives and activities.
3. Investigation and classroom follow-up, then pupil feedback to refine teaching and difficulty.

For each pathway, verify curriculum boundaries first; author teaching and accessible diagrams; add guided and increasingly independent practice; check answers independently; preserve prior identities and saved work; test both languages, mobile layout and storage failures; publish exact results including retries; and distinguish automated completion from observed understanding.

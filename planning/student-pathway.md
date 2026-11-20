# Student-first learning pilot

20 November 2026

## Pupil experience

The default homepage now starts with one **Start learning / Continue learning** action and a small learning pathway. Parents & teachers remains a visible header link and a dedicated area. The former homepage is available at `?view=teacher`, preserving resource browsing, year choices, quiz creation, adaptations, examples and activities. Existing pupil quiz URLs, print views and resource links continue to work.

The first complete P1 pathway is **Numbers and addition to 20**, spanning early 1N1 and 1N2 prerequisites. It has three lessons: Count carefully; A ten and some ones; Put groups together. Each lesson has three original teaching steps with diagrams, two guided questions and three independent practice questions. Teaching includes one-to-one counting and zero, ten frames and tens/ones, count-on addition and a missing part. No curriculum completeness claim is made for these three lessons.

Pupils can explore lessons in any order and revisit any stage. Guided questions offer method hints. Independent practice encourages a first attempt, then explains errors and allows correction. A practice stage is completed when all answers are correct after any needed support; this is explicitly not a mastery score. All three practice stages must be completed before the six-question understanding check opens. The check gives no hints or correctness feedback until submission; incomplete answers cannot be submitted. Afterwards it shows every answer and explanation and recommends the lowest-scoring lesson when fewer than five answers are correct. A stronger result offers additional existing P1 practice. These recommendations are simple provisional rules, not a diagnostic assessment.

The check contains two items per lesson. Retakes rotate through three deterministic forms with some overlapping items. They are another opportunity to practise, not an independent standardised assessment. The teaching and practice are original bilingual content with number values within 20. Number input accepts whole-number digits, trims surrounding whitespace and rejects blanks, negative numbers, scientific notation and malformed text.

## Remembering and continuing

Three named animal slots—Fox, Owl and Otter—keep separate pathway records on a shared browser. They are local slots, not private accounts. No real name, email, date of birth, cookie, analytics or server account is needed. The versioned browser-local record stores the active slot, teaching step, answers, completed practice stages, current location and quiz attempt. It contains no remote URL to navigate to; routes are reconstructed from allowed lesson and stage names.

The homepage restores an appropriate next action. Answers and the current teaching step survive reloads and language changes when storage works. A nested reset action clears only the selected learner. Other existing quiz and Smart practice storage is untouched. Extra practice outside this pathway remains separate from these learner slots, as the result screen explains.

Progress stays in this browser only. Clearing browser data removes it; there is no cross-device synchronisation or backup. If storage is blocked or full, a visible message explains the limitation. Within the lesson page, stage navigation uses in-page routing so the complete pathway can still be finished in memory during one visit; leaving or reloading can lose unsaved progress. Malformed/oversized records are rejected or bounded. A change from another tab stops stale input and provides a reload link, rather than silently overwriting the other tab's work.

## Presentation and access

Both languages have compact headers, an immediate next action, explicit learning stages, visual counters/ten frames, text alternatives and large controls. Keyboard focus moves to the next heading or a correction/continuation control. Feedback is textual and announced through live regions; it does not depend on colour or sound. There are no new animations or audio. P2–P6 retain practice links and clearly say that guided teaching currently covers only this P1 pilot.

Manual visual samples inspected: Chinese mobile student homepage and a tens/ones teaching step. Automated layout checks cover English and Chinese at 320, 375, 768 and 1280 pixels, including first-action and first-answer positions. Independent translation, classroom use, screen-reader listening and physical printing remain unverified. This pilot does not replace the existing paper/key tools or claim a printable course.

## Verification

`tests/student-static.cjs` independently derives the answer from counter counts, frame totals or missing-part counting for 162 generation cases; checks twelve quiz-attempt configurations; and checks saved profiles, reloads, reset isolation, malformed/blocked storage and input validation. Existing resource and shared-UI static checks preserve the 270 curriculum-linked + 30 TSA-informed practice types and all 85 units/activities.

`tests/student.html` covers full English and Chinese teaching→guided→practice→quiz→review journeys, blank/wrong answers, retakes, stored steps across languages, profile separation, reset isolation, responsive layouts, the teacher gateway, quiz prerequisites, invalid routes, saved drafts, cross-tab conflicts and a full storage-denied journey. It uses a separate test storage key and restores that test record; normal pupil progress is not cleared by the runner. The storage-denied fixture deliberately disables only its own window's storage.

Local focused browser checks: **17/17 passed**. During development two storage-denied test setups failed (an `about:srcdoc` route and a document-rewrite load wait); these were replaced with an explicit same-origin test fixture, after which the complete run passed. All 267 shared UI/activity browser checks passed locally with no retries. **Published and verified:** [runtime 9cc164fc](https://github.com/kochiuyu/mathquiz/commit/9cc164fc5446f97be383aab48fe62e3165ab68c1). The local and public runs both passed **17/17 student-flow cases and 267/267 shared UI/activity cases**. Public shared-run retries: 1; exact retry routes are retained in the evidence. All 20 published files matched tested bytes through browser SHA-256 readback. The runtime Pages deployment succeeded. Supplemental public checks confirmed unfinished quiz answers survive a language/reload change without early feedback, and submitted results reopen correctly. Exact results are recorded in [the evidence](student-pathway-evidence.json).

## How to extend the pathway

1. Choose one prerequisite-sized learning goal and map it to the existing curriculum; do not treat every resource card as a lesson.
2. Write a concrete explanation and a worked example, then guided and independent tasks that use the same representation before changing it.
3. Build a short check that can identify which lesson to revisit. Keep practice completion distinct from independent quiz performance and long-term mastery.
4. Independently verify answers and all accepted inputs. Test both languages, mobile layouts, resume, profile separation, storage failure and old resource routes.
5. Trial with pupils and improve explanations before expanding year coverage. Keep saved-data version migrations explicit when the lesson structure changes.

Future work: pupil testing, wider P1 topic pathways, then additional years; optional account-based synchronisation only with a separate design for consent, access and data handling. No accounts or backend have been added in this release.

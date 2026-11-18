# Smart practice · 18 November 2026

## Two distinct choices

**Fixed-level practice** lets a learner or teacher choose Easy, Normal or Difficult and a fixed question set, with papers and worked keys. **Smart practice** starts at Easy and guides the learner through all three levels for one skill. It replaces the P1–P4 Quick practice links in Find resources, including the alternate coverage page. The Smart practice resource shortcut uses `mode=practice` for compatibility with existing filter links.

Smart practice covers all 165 selectable P1–P4 skills (38 / 41 / 35 / 51). P5/P6 retain their original practice; they do not yet have the three-level banks needed for Smart practice. Existing direct core practice URLs remain functional.

## Progression contract

1. A fresh skill session starts at Easy. A `level` URL parameter cannot skip ahead.
2. Each level has the existing twelve questions, shuffled once per session. Questions are not repeated until all twelve at that level have been presented.
3. Three consecutive questions must be entirely correct on their first submission, without pressing **Show method**, to reach a level target. All parts and reasoning fields count. Canonical and valid alternative answers use the original grade bank's marking functions.
4. Blank submissions are not attempts. A partial or incorrect answer resets the streak, displays the existing worked explanation and offers another question at the same level. No level is lost.
5. Show method reveals the worked explanation and resets the streak. A subsequent correct answer is recognised as supported practice and does not add to the streak.
6. A completed answer is locked. Repeated submissions and hidden Next clicks cannot increase progress or skip a task.
7. After three qualifying answers, **Continue to the next level** advances Easy → Normal → Difficult. After Difficult the session shows **Smart practice complete** and offers another skill.
8. If the twelve questions are exhausted before the target is reached, a labelled review round begins at the same level. These are repeated bank questions, not newly generated tasks.
9. Restart is disclosed behind a separate control, clears this skill's progress and shuffles a fresh Easy session.

This three-answer threshold is a product rule, not a validated mastery cut-off. Completing one session does not prove durable mastery. The completion page encourages later practice and explaining a method to someone; pupil calibration remains outstanding.

## State, access and privacy

The app saves an answer-event log, current draft and shuffle seed in `sessionStorage`, scoped to grade and skill, with a 24-hour inactivity limit. Progress is reconstructed by replaying answers through the original marking function. Invalid or expired state safely starts at Easy. Switching language or reloading retains the current question, draft, help use, streak and completed state. Progress is browser-session-only, not an account or cross-device record.

If storage is unavailable, practice continues in memory and a visible message explains the limitation. A language switch is paused so it cannot silently discard work. No server, tracking, localStorage or pupil identity is added. Shared URLs contain only grade, skill and language.

Native answer controls retain accessible labels, column and fraction arrangements, and the existing figures. Text and icons identify levels, feedback is announced and focused, controls wrap on phones, and enlarged text is checked. Paper/key use continues through fixed-level practice.

## Validation

- `tests/smart-static.cjs`: progression invariants; duplicate submits, hints, mistakes and bank exhaustion; all 165 skills and 5,940 canonical answer records; bilingual prompts and syntax.
- `tests/smart-regression.html`: 65 bilingual session, navigation, persistence, error, responsive and enlarged-text cases.
- `tests/resources-ui-regression.html`: 97 library cases, including exact Smart links and P5/P6 boundaries.
- `tests/ui-regression.html`: 193 shared UI cases, including the changed coverage-to-Smart destination and retained original core routes.
- Core, shared UI, level-directory and resource-library static gates.

See [release evidence](smart-practice-evidence.json). Classroom difficulty calibration, independent translation, physical printing and full screen-reader review remain deferred. Existing mathematics banks, marking, diagrams and curriculum-completion records are preserved; this release does not add curriculum units.

# Shorter wording for P1–P3 pupils

23 November 2026. In classroom use, pupils found the descriptions too long and tedious compared with the questions. This revision reduces the reading required around a task.

## What changed

- One short instruction before practice: **“Try an answer. Then check.” / 「試試作答，再核對。」**
- Plain buttons: **“Check answer” / 「核對答案」**, **“Try again” / 「再試一次」**, **“Next set” / 「下一組」**.
- Shorter navigation: **Review / 重溫** and **More practice / 更多練習**.
- Optional explanation/help fields open under **“Explain or add a note” / 「解釋或加筆記」**. Existing notes remain editable; fields with text reopen so a draft is not concealed after a redraw.
- Assessment caveats and repeated pupil-storage explanations move to **For adults**. Practical observation forms in P2/P3 reviews open separately. The constraints still apply; they are not deleted or softened.
- Topic introductions open under **About this topic** on P2/P3 maps. Duplicate P3 difficulty headings are removed.
- Review question headings show a question number instead of an internal item ID.

The question, picture, quantities, units and required answer fields remain visible. Required explanation answers and estimate-before-calculation records in P3 reviews stay outside the optional panels. Storage warnings, errors, reset confirmations and the actual mathematical feedback remain available. No learning data, question answers, saved-record schema or scoring rules change.

## Pupil-copy guidance for future work

Write the action the pupil needs now, in one short sentence when possible. Use familiar verbs: count, choose, draw, write, check. Keep necessary quantities, units, conditions and mathematical terms. Do not shorten by removing part of the problem.

Avoid describing assessment design, evidence quality, storage implementation or certification in the pupil's task introduction. Put adult interpretation beside the relevant records or in an adult panel. Offer explanations and method hints on demand; do not hide instructions needed to answer a question. Keep English and Traditional Chinese equally direct.

This is a revision of instructions and surrounding text, not a blanket shortening of every word problem or lesson explanation. The next classroom trial should check whether pupils can find the question, start without reading adult notes, and open help when they need it. No claim of improved comprehension is made before that trial.

## Verification

**178 focused browser cases were verified locally (177 in the final full run, with the remaining navigation timeout passing an exact rerun), and all 178 passed live without retries.** Six static suites passed; 82 content, store, model and notebook files remained exact. The runtime deployment succeeded and all 22 runtime/test files matched the repository and public site. The final documentation commit also versions the previously unversioned P2 review script URL.

See [release evidence](learner-wording-evidence.json) for browser results, preserved-content hashes, static checks and deployment verification. Tests cover both languages, all 45 topic routes, native answer submission/reload, pupil isolation, optional-note editing, retained first responses/retries, visible required review fields and mobile layouts.

The initial new wording tests reused the English test pupil's completed attempt and explanation when switching to Chinese. That correctly exhausted the retry and reopened the saved note, so those initial assertions failed. The test fixtures now reset only isolated test records between languages and restore the pre-run records afterwards. One initial P1 page load timed out. Original outcomes are retained in the evidence.

Next: continue P4 planning using these pupil-copy rules, and use pupil feedback to refine the existing lessons.

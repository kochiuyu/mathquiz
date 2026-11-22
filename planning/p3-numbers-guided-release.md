# P3 five-digit guided release

22 November 2026. Baseline: `889c039825dcf81f569dd9e5f3f33dbb5efe3179`. [Open the pathway](../p3-learn.html?path=numbers).

## Teaching and scope

Five EN/Traditional Chinese lessons map to EDB 3N1.1–3: ten 1000-valued cards exchanged for 10000; digits versus values; reading/writing with internal zeros; forward/back equal steps across 10000; parity through paired ones; highest-place comparisons, equality and ordering. Official [KS1 notes, PDF page 49](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=49) were rechecked. The detailed [unit audit](p3-5digit-numbers.md) remains the source map. There is no six-digit, estimation or new arithmetic-algorithm requirement.

Inventory: **5 lessons, 45 practice tasks (3 per level per lesson), 10 guided tasks, 10 sample-check tasks**. Models are controllable, temporary and unscored. Practical prompts accompany every lesson, including real value-card exchange, oral reading and hidden-card dictation, boundary counting, pairing and comparison explanations. Observation records require an actual task and date when an observed status is chosen. Text records can be adult transcriptions; the software cannot verify the physical activity.

Check inputs and contexts were compared with worked, guided, practice and activity-sheet examples. All ten use different source numbers and no exact task repetition. They deliberately retain familiar mathematical structures and input formats; a fresh number is not proof of unfamiliar application. First responses and one explicitly supported retry are both retained. The check display counts first-response matches only, never substitutes retries, and does not auto-grade explanations or infer independence from a blank help record.

The integrated card investigation records a pupil question, prediction and plan before showing the trial notebook. Original predictions remain immutable. Trials, failed examples, noticed patterns, explanation, changed example/rule and help can be recorded separately from scores. No automatic investigation completion, mastery or teaching-time claim is awarded.

## Progress and compatibility

Isolated modules `p3-learn-data.js`, `p3-learn-store.js`, `p3-learn.js`, `p3-learn.css` and `p3-learn.html` do not load/mutate the P2 topic loader. Keys are `mathquiz-p3-guided-v1-numbers-0|1|2`; test keys insert `test-` before `v1`. Records include a cursor, self-reported tried lessons, immutable first/one retry, observations and inquiry in separate fields. No practice-bank score is migrated into lesson completion.

Five-digit input accepts 1–5 ASCII/full-width digits, trims outside spaces and compares numerically; leading zeros within the five-character bound are accepted. No commas, sign, decimal, exponent or six-character numeral. Order tasks require all three fields. Values 9999/10000/99999 work; 100000 is rejected. Numerical equivalence is not evidence of written dictation conventions. The P2 max-answer whitelist is unchanged.

Stored JSON is bounded at 524288 characters, enough for every permitted explanation and retry at its 800-character field limit. An initial 131072-character design failed the all-fields-filled test and was enlarged only for P3. Malformed, oversized and future-version records are protected until explicit topic reset. Raw-record comparison refuses stale writes, including deletion/recreation. Storage events warn without redrawing drafts. Failed writes become honestly temporary for the session. Reset discloses and affects only the selected P3 topic/learner. Reload requires acknowledgement to preserve any wanted draft. Other unsaved forms survive local redraws; page navigation uses the browser's unsaved-work warning where supported.

Navigation adds context-aware P3 links to P1/home, P2 and the P3 bank. P2 Continue is unchanged. Entry, language and explicit learner are passed separately; the usual learner defaults to P1's active slot when no explicit learner is supplied. All lessons and the P2 review remain open, without a pass gate.

## Verification

See the [evidence JSON](p3-numbers-guided-evidence.json) for executed counts, original failures, readbacks and deployment. Fourteen static gates include an independent arithmetic/place-value oracle for all 65 tasks, bilingual/ID/objective checks, fresh-context comparison, full record capacity, normalization, stale/malformed/blocked storage, scoped reset and earlier resource preservation. Browser checks exercise both languages, every task set and model, first/retry separation, notes/inquiry, 320/375/768/1280 widths, boundaries and cross-grade navigation. The existing P2 review suite is rerun because the P2 header gains a grade link; historical whole-site totals are not presented as new results.

The initial static language check incorrectly required Chinese prompts to have the same minimum character count as English; it was corrected to a language-appropriate content check. The initial 106 browser cases passed; added explicit-learner, numeric-boundary, model and reload tests define the final suite. An outer browser navigation timeout did not imply a stopped runner: existing results were polled without restarting it. Any genuine case timeouts and exact reruns are retained in evidence.

## Limits and next step

Automated answers, source audit, visual samples and keyboard checks do not replace classroom trials, independent translation, screen-reader listening, physical printing or observed practical work. These remain pending. Existing P1/P2 and P3 practice banks remain available, and all their question payloads/storage modules are unchanged.

Next: P3 multiplication by one digit, connecting partial products and carrying to columns; then a separate km/mm release along the parallel measures branch. The remainder of the [54-objective P3 plan](p3-guided-learning-plan.md) remains planned.

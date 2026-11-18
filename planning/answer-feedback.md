# Correct-answer feedback

## Behaviour

One shared presentation layer adds a green tick and a short animation to fully correct answers in core quizzes/practice, the original P1 unit practice, and P1–P6 fixed-level and Smart practice. Smart practice uses a star and an explicit next-level message at promotion, and a short celebration after Difficult. Correct answers after help receive encouragement but keep the existing streak rules. Incorrect, blank and partly correct questions receive no success celebration; an independently correct question in a mixed-result quiz still receives its tick.

The existing written feedback, methods, scores, focus handling and progression remain authoritative. Duplicate submissions, restored results and language changes do not replay rewards. Retry clears old decorations. Effects are excluded from paper/key views and printing. Reduced-motion preferences disable animation while preserving the tick and text. There is no flashing, fullscreen overlay or negative sound.

## Sound

Sound is off by default. A labelled, keyboard-accessible toggle remembers the preference in local storage on that browser/device and synchronizes open tabs. If storage is unavailable, the choice works for the current page and the limitation is shown. If Web Audio is unavailable or blocked, visual/written feedback still works.

The sounds are locally synthesized sine tones: one note for a correct answer, two for promotion and three for completion, lasting under half a second with a low gain and smooth envelope. A multi-question submission plays one chime, not one per question. Muting, moving on, restarting, hiding or leaving the page cancels current or pending sound. There is no audio download, tracking request or audio on page load. Context creation/resume follows the browser's user-interaction policy; see [MDN Web Audio best practices](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Best_practices).

## Verification

The dedicated [feedback browser runner](../tests/answer-feedback.html) covers all six grades in both languages, assisted answers, wrong/blank/duplicate submissions, all Smart level transitions, restored completion, fixed-level retry, core practice/quiz, legacy unit practice and paper exclusion. Its instrumented audio fixture checks opt-in, bounded gain, mute, persistence and unavailable/rejected audio without playing test sounds. The normal page was also checked with the native AudioContext: it reached `running`, scheduled one oscillator for a correct answer, and muted afterwards. Actual reduced-motion emulation returned `animation-name: none` for both effects, with no mobile horizontal overflow. The Traditional Chinese mobile promotion view was visually inspected.

The initial dedicated run passed 34/35: its CSS test assumed a shorthand serialization that the browser does not promise. The test now reads the actual CSS properties. A second run passed 34/35 with a page-navigation readiness error; the loader now requires a new document. A later audio-fixture assertion failed during concurrent background-tab testing; visibility is now controlled in the fixture, with a separate hidden-page case. The original hidden state was not directly measured. The final 36-case local run passed 35 with one page-load timeout, and that exact case passed on rerun. These attempts and the broader regressions are retained in `answer-feedback-evidence.json`.

Broader Smart checks exposed an existing randomized P6 keyboard assertion: `decdivide6a` Easy variants 1–6 require decimal quantities, while 7–12 require whole-number portion counts. Both input types were correct in production. A concurrent P6 release published the same correction while this work was underway. That published test correction is preserved; the test now checks the appropriate keyboard and independently exercises all twelve variants, in both languages, including rejecting fraction notation and accepting the canonical numeral. Mathematical data and marking code were not changed.

Full classroom, independent translation, screen-reader and cross-device audio listening reviews remain deferred. This feature does not validate curriculum completeness or long-term mastery, and does not change curriculum-completion flags.

## Published verification · 19 November 2026

The [initial feature release](https://github.com/kochiuyu/mathquiz/commit/7251a56428ee0b9efe0d44be1bbd42cc1d1cf4e5) deployed successfully. Public checks passed **36/36 feedback and 245/245 shared UI**. The public Smart full run passed **322/329**, with seven page-load timeouts; all seven exact cases subsequently passed. One additional rerun had a navigation timeout and an unavailable application-state error before passing on the next attempt. Thus 329 distinct Smart cases are verified across runs, not a clean 329/329 full run. All failed attempts are retained in the evidence.

The [final placement refinement](https://github.com/kochiuyu/mathquiz/commit/ed687a3acec971e0d860042226614d4dd98eda73) puts the Difficult-completed badge inside the completion card pupils are focused on. Its updated suite passed **36/36 locally and publicly**, including that location in all six grades and both languages. All 14 deployed refinement files matched the tested content. Five static gates passed again, including frozen core payloads, all 9,720 skill-bank canonical answers and the P6 keyboard contract. The broad UI and Smart runs above belong to the initial feature release; they were not repeated in full for this placement-only refinement.

Earlier local verification covered all 36 feedback cases (35/36 plus one exact passing page-load rerun), shared UI 245/245 and Smart candidate 331/331. The local candidate had two separate extra keyboard cases; the concurrently published suite folds exhaustive keyboard coverage into its original cases. Its two adopted cases also passed locally. These counts are not added as distinct cases.

See [full evidence and failed attempts](answer-feedback-evidence.json), [initial release file hashes](answer-feedback-assets.json) and [final refinement file hashes](answer-feedback-placement-assets.json). The full core browser suite was not rerun for this presentation-only change. Deferred reviews remain listed above.

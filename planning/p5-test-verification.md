# P5 testing repair and release verification

Date: 18 November 2026. Test release: [beb30ebd](https://github.com/kochiuyu/mathquiz/commit/beb30ebdae259631cbf7108f9b93e52dba927c3f).

## What was failing

The earlier P5 integration record retained two real display failures: comparison labels interpreted as HTML in 5N2, and clipped SVG labels in 5N3. Those fixes were already in the published site when this investigation began at `02be401d8c39c81e67b092cdd9450e66c19b7883`. The old record had a passing private full run but still explicitly lacked live P5 verification.

This investigation reproduced a separate Windows test setup failure. The independent 5N2 HTML oracle invoked `python3`, which resolved to the Windows Store alias instead of the installed interpreter. It now accepts the `PYTHON` environment variable, defaults to `python` on Windows and `python3` elsewhere, and reports an actionable error if the interpreter cannot run. Its 180 HTML parses, rational arithmetic checks and mutation rejection remain intact.

## Changes

- Added [P5-only browser checks](https://kochiuyu.github.io/mathquiz/tests/regression.html?scope=p5), using the existing test bodies and frozen question hashes. The unfiltered page still runs the full curriculum suite.
- Included all 19 P5 family payload checks, the existing P5 routes and the full 5N1/5N2/5N3 checks, plus three shared data contracts. A P5 run has 86 checks; the other 530 are explicitly reported outside its scope.
- Retained names and error messages in the machine-readable result. The optional `only` parameter selects a test-name substring for diagnosis. A filter matching nothing reports `NO MATCH`, never a pass.
- Added a static check of scope selection, failure reporting and empty results. Updated the two static cache-version assertions to match the new runner URL.

No question payload, answer, marking rule, practice behaviour or curriculum completion flag changed. The source comparison found all 342 untouched tracked files byte-identical to the published baseline; the five changed tracked files were test files. One new runner-selection test was added.

## Verification

| Check | Local | Public |
|---|---|---|
| P5 browser suite | 86 passed, 0 failed | 86 passed, 0 failed |
| Nine relevant Node gates | Passed | Not run on the static host |
| Actual embedded PDF font coverage | 1,033 source characters covered | Same deployed font |
| Published asset comparison | 29 exact file hashes | All matched |

The browser suite includes bilingual assessment, correct/wrong/blank/retry behaviour, practice completion, bounded paper/key/PDF batches, mobile overflow and diagram-label geometry. The 192 new 5N1/5N2/5N3 variants all undergo actual assessment in both languages; the older P5 families retain their independent answer and route tests. The shared data checks cover all 2,853 released core variants and stable payloads.

The first static attempt retained two cache-version failures introduced while adding the new runner URL, plus the reproduced Python launcher failure. The cache assertions were updated to the exact new version; the interpreter selection was corrected. The final nine Node gates and PDF font check all passed. No mathematical assertion or fixture was relaxed. The local browser run passed on its first complete attempt. The public browser run also passed on its first complete attempt, without reruns.

Evidence: [static output](p5-verification-static.txt), [source baseline comparison](p5-current-baseline.json), [deployed asset hashes](p5-live-assets.json), [browser result](p5-test-results.json). Pages deployment [44321857066](https://github.com/kochiuyu/mathquiz/actions/runs/44321857066) succeeded.

## Run the checks again

Open the P5 browser link above and wait for the final result. The full suite remains available at [regression.html](https://kochiuyu.github.io/mathquiz/tests/regression.html). A P5 pass does not claim that the other 530 checks were rerun.

For local independent checks, run `node tests/p5-fractions-independent-static.cjs`. Python 3 is required for the HTML parser. If Python is not on PATH, set `PYTHON` to the installed executable first. For example, in PowerShell:

```powershell
$env:PYTHON='C:\Path\To\Python\python.exe'
node tests/p5-fractions-independent-static.cjs
```

The example path must be replaced with the actual installation. `node tests/regression-scope-static.cjs` verifies the runner selection and reporting logic.

## Limits

This closes testing of the existing P5 resources; it does not complete the P5 curriculum or add a P5 Easy/Normal/Difficult bank. The historical full 616-check result is preserved as historical evidence, not represented as a fresh full-suite run. Classroom observation, independent translation, physical printing and screen-reader validation remain deferred.

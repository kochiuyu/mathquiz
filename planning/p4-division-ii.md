#4N2 Division (II): private implementation audit

Not published or resource complete. Adds48variants: dividecolumns4a12, divisibility4a24, divisionstory4a12. All2,085 predecessor payloads unchanged; candidate135families/2,133variants,134selectable/2,118,49selectable units/54resource units,43activities. Verified42unit baseline retained; this unit remains incomplete.

## Official scope

- EDB primary supplement, printed58–59 / PDF61–62: https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=61
- EDB KS2 explanatory notes (2020), printed3–4 / PDF9–10: https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=9

Three numbered objectives cover division, divisibility and problems; suggested time is six hours. Calculation extends to two-/three-digit dividends divided by two-digit divisors. Column-method meaning is required as well as execution. KS2 explicitly includes subtraction with borrowing and nonzero remainders. Divisibility tests are limited to2,3,5,10; proofs and tests for4,6,8,9 are outside this unit. Introduce whole numbers including0, and connect odd/even to divisibility by2. Estimation follows calculation practice and supports problem-solving; it is not an additional numbered objective. The notes' discussion of a common principle for larger dividends does not expand the required digit range.

## Existing coverage and gaps

No4N2 family is currently mapped. Existing3N3 has:
- `dividecolumns3a`:12 quotient/remainder items, two-/three-digit dividends but only one-digit divisors.
- `dividechain3a`:12 left-to-right division chains, a different task rather than two-digit-divisor work.
- `divisionstory3a`:12 sharing/packing/seating contexts with quotient/remainder interpretation, again one-digit divisors.
Earlier P2 division, P3 parity and P4 factor/multiple work do not establish4N2's complete divisibility/algorithm evidence. Retain all old payloads and use new IDs; do not relabel old questions as this unit.

## Evidence map

| Objective | New digital evidence | Necessary teacher evidence |
|---|---|---|
|4N2.1 Division|Explicit quotient/remainder fields for two-digit divisors, exact and nonexact cases|Original column algorithm: estimate a trial digit, multiply, subtract with borrowing where needed, bring down by place value and check remainder bounds.|
|4N2.2 Divisibility|Tests for2,3,5,10 across yes/no/boundary cases|Meaning of exact division, whole numbers including0, reasons for applying the test, and odd/even via divisibility by2; formal proofs not required.|
|4N2.3 Problems|Contexts distinguish full groups/remainders from minimum capacity needed|Model quantities and units, interpret remainder, estimate before exact work and explain plausibility.|

A correct quotient does not demonstrate written-algorithm understanding. Divisibility recognition is not a substitute for actual two-digit-divisor calculation. Use separate observed status for reasoning and computation.

## Implemented families

Names checked against the predecessor catalogue.48variants implemented.

1. `dividecolumns4a`,12variants, two labelled fields: quotient/商 and remainder/餘數; explicit0remainder when exact. Award one mark per field. Curate two-/three-digit dividends, divisors10–99, exact/nonexact, borrowing and zero quotient digits. Examples84÷12=7R0,95÷12=7R11,736÷23=32R0,825÷24=34R9,309÷15=20R9,900÷30=30R0,999÷99=10R9. A two-digit quotient can have a trailing0; do not claim a three-digit quotient or an internal zero, which these ranges cannot produce. A small-dividend case such as24÷36=0R24 is permissible but should be explained carefully, not framed as a required special curriculum item.
2. `divisibility4a`,24variants, six for each divisor2,3,5,10, exact Yes/No choices. Balance positives/negatives; include last-digit traps for3 and digit-sum cases. Include0among the whole-number examples, explaining0=d×0 for a nonzero test divisor. Never divide by0. Suggested boundaries:0,1,10,12,15,21,102,105,111,120,125,203,999; choose a balanced audited matrix rather than recycling the same easy cases. Hints use final digit for2/5/10 and digit sum for3. Teacher work makes the whole-number and parity connection explicit.
3. `divisionstory4a`,12variants: sharing with retained items, exact-size full packs plus leftovers, and minimum equal-capacity vehicles/containers for everyone/every item. Labels identify what quotient/remainder count. Full-pack answers are floor quotient; minimum-capacity answers add one iff remainder>0. Mix exact and nonexact cases in each mode, so “always add one” fails. One mark per requested labelled field.

Use established numeric normalisation for quotient/remainder/story fields, explicitly documented; exact choice grading for divisibility. Practice must register actual grade4callbacks, full boundary samples, hints/retries and language-preserving links. Reuse controls without a new global UI.

## Six-task bilingual teacher resource

`activities/p4-division-ii.html`, shared shell, `body data-unit="4N2"`, three pupil/two teacher sheets, hidden key and blank observation records:

1. Connect equal grouping with written division using84÷12, and explain what quotient/remainder represent. Relate the algorithm to multiplication and subtraction rather than memorised motions alone.
2. Independently perform736÷23,825÷24 and309÷15 in columns. Keep trial quotient choices and corrections; explain borrowing and the0in20. Blank column work space is required.
3. Diagnose a purported825÷24=33R33:24×33+33 does recover825, but the remainder is not smaller than24. Exchange another full group to get34R9. This teaches that recomposition alone is insufficient. Include a missing-zero quotient error for309÷15 if space permits.
4. Apply the four divisibility tests, classify selected whole numbers, and connect even/odd with divisibility by2. Explain0as a whole/even number and exact division by a positive divisor; distinguish that from undefined division by0. Do not introduce negative-number examples or prove the tests.
5. After calculation practice, estimate a NEW contextual division before exact calculation; keep the estimate visible. For a packing example825items in packs of24,840÷24=35 is one compatible-number estimate; exact34full packs and9leftovers explain why the estimate is not the exact full-pack answer. If825÷24 was already solved in task2, use a different numerical context here so prior exact knowledge does not invalidate the estimate-before-calculate evidence.
6. Solve a contrasting minimum-capacity problem, state units and explain why a remainder may require another container/vehicle. Include an exact-capacity comparison where adding one is wrong. Record modelling, estimation and interpretation separately.

Accept different justified estimates, not a single hidden target. Teacher rubric: independent/prompted/not yet/not observed for calculation, column principle, divisibility, modelling and estimation. Preserve original work and actual support; no inferred mastery from digital totals.

## Exact checks

- Independent repeated subtraction derives(q,r); verify n=dq+r and0≤r<d for EVERY case. Bound10≤n≤999 and10≤d≤99. Assert digit-length mix, exact/nonexact cases and zero quotient digits. Deliberately reject wrong-remainder pairs that recompose correctly.
- Independently trace decimal long division: each trial partial dividend, chosen quotient digit, product, subtraction and carry-down relation. Require at least one actual borrow, not merely an example labelled “borrowing”. For736÷23,73−69 requires borrowing; remaining4then46 yields quotient32. For825÷24,82−72=10,105−96=9; result34R9. For309÷15,30−30=0 then9 gives20R9.
- Validate divisibility both by independent grouping/modulo and the stated digit criterion across a bounded whole-number sweep, e.g.0–9999. Divisor2↔even, and not-divisible-by2↔odd. Divisor3uses digit sum, not the last digit. Restrict assessment divisors to2/3/5/10; reject any divisor0.
- Story oracles separately check floor groups, leftovers and ceiling capacity. For minimum capacity verify c×d≥n and(c−1)×d<n; for full packs q×d≤n<(q+1)×d. Exact cases must not add one. Unit labels and per-field marks must agree with prompts in both languages.
- Freeze all earlier hashes. Test stable-link decoding/bounds, numeric accepted/rejected forms, blank remainder vs explicit0, partial credit, exact choice grading, actual grade4practice callback and fixture order.
- Grade4paper/key/PDF tests must not be added to hardcoded-grade3batches. Respect12item/300character limits; assert exact selected IDs and labels. Verify original column spaces, teacher key toggles, both languages, phone layout and font cmap coverage. Retain uncached resource manifest with exact activity count, generic version assertions and unique changed-asset tokens.
- All existing static/browser/UI gates plus new independent division/divisibility/units tests. Audit sources/objectives and regenerate metadata only in an isolated candidate.

No source-scope blocker found. Browser, print and classroom verification remain pending. This unit adds three numbered objectives only after resource and runtime verification; no inquiry statement. Manual print/classroom use, independent translation and screen-reader validation remain unperformed.

## Executed implementation checks

All14static gates pass. New independent repeated-subtraction oracle covers every calculation and contextual answer; decimal long-division traces verify borrowing and zero placement. The24divisibility items balance3yes/3no for each allowed divisor. Digit criteria are checked across0–9999. All three context modes contain exact and nonexact examples. Student blanks and four original column grids per language remain unfilled; teacher examples include fresh947÷24=39R11, compatible estimate960÷24=40, and capacity125/24→6 versus120/24→5. All48new IDs survive bounded grade4paper batches without omissions; wrong-grade decode rejects them.

Actual resource counts135permanent/2133variants,134selectable/2118,49selectable units/54resource units,43activities,42inheritedcomplete. Font236936bytes covers881sourcecharacters with actual nonzero glyphs. Cache versionp4-division-r1, uncached activity manifest with43assertion, existing iframe nonces retained. Exact predecessor payload hashes all pass. Browser routes, paper/key/PDF rendering and teacher resource interaction still need release verification; no completion promotion or publication performed.

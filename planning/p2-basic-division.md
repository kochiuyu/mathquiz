# P2 Basic division (2N6): source audit and proposed release

**Status:** resource complete, verified 16 November 2026. All 4 numbered objectives and applicable remarks have linked assessment resources. This is not a pupil-mastery claim.

## Official scope

Checked16 November2026: [EDB supplement, PDF31](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=31) and [KS1 explanatory notes, PDF33–34](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=33).

Four objectives concern division concepts, basic calculation, its relationship to multiplication and problem solving. The notes require sharing and grouping, each with and without remainders; oral results followed by diagrams, words and symbols; division vocabulary; and explaining why the remainder is smaller than the divisor. Examples use the0–10 multiplication table. Zero divided by a nonzero number is zero. Concrete work demonstrates multiplication checking and that swapping division operands does not preserve results. Stories require interpreting what to do with remainders.

No zero divisor, fractional/decimal quotient, formal long-division algorithm or general algebraic proof is introduced here. In this proposal divisor1–10 and quotient0–10 are explicit bank bounds, not a claim that every possible remaindering combination must be assessed. All authored dividends are at most100.

## Existing share2a: actual evidence, not inferred evidence

Inspected current builder.js. Twelve permanent cases are(12,3),(13,4),(10,2),(16,5),(14,3),(20,4),(17,5),(18,3),(11,2),(22,4),(23,5),(24,4), interpreted as total/children. Pupils enter each-child count and remainder from a sharing picture. Existing special `equalSharingAnswer` scoring gives one all-or-none mark for the pair. Preserve these released payloads and marking semantics.

The family samples exact and remainder sharing, but not division-as-grouping, physical distribution, pupil-generated diagram/statement, vocabulary, a multiplication check chosen by the pupil, zero dividend, a noncommutative contrast or contextual remainder handling. Its worked check is feedback, not independent pupil evidence. No existing code or IDs changed in this task.

## Activity and objective map

[English pupil sheets](../activities/p2-basic-division.html?lang=en) · [Chinese](../activities/p2-basic-division.html?lang=zh) · [English teacher key](../activities/p2-basic-division.html?lang=en&key=1) · [Chinese key](../activities/p2-basic-division.html?lang=zh&key=1)

| Official objective / remark | Pupil actions | Observable evidence |
|---|---|---|
| 1 · Concepts, sharing and grouping | Tasks1–2 physically share12/14 among3 and separately make groups of3. | Exact and remainder models in both interpretations; explain that divisor means group count in sharing but group size in grouping. Quotient meanings differ. |
| Oral → diagram → words → symbols | Tasks1–2 explicitly require this sequence. | Record each mode independently; supported transcription is not independent writing. |
| Vocabulary and remainder bound | Task3 rebuilds erroneous14÷3 result3 remainder5, improves to4 remainder2, and names dividend/divisor/quotient/remainder/sign. | Another full group or distribution round can be made from5 leftovers, so it is not a final remainder. |
| 2 · Basic division, zero and order | Task4 computes table-based exact/remainder facts including3÷5 and0÷4; task6 compares8÷2 and2÷8 physically. | Correct whole-group quotient/remainder, zero dividend handling and demonstration that swapped operands need not agree. |
| 3 · Multiplication relation | Task5 reuses3 groups of4 for both inverse divisions and checks17÷5 by product plus leftovers. | Concrete recovery of starting collection; remainder accounted for and smaller than divisor; either multiplication factor order accepted. |
| 4 · Problem solving and remainder interpretation | Task7 shares17 stickers among5 children, packs17 pencils5 per pack, then seats17 children at tables of5. | First two retain2 leftovers; last requires4 tables rather than quotient3. Expressions, units and contextual reasons recorded separately. |

The extra-table story is an authored example of handling remainders, not a new rounding procedure. No fixed pass score; teacher records independent/prompted/not-yet/not-observed plus actual responses. Materials35 large counters and8 trays/circles suffice with reuse. All teacher answers remain hidden by default.

## Proposed screen evidence and integration contract

Outside-repository files: `mathquiz-2n6-families.js` and `mathquiz-2n6-families.test.js`.

| Proposed permanent ID | Variants | Evidence / marks |
|---|---:|---|
| divfact2a |110| Every divisor1–10 × quotient0–10 combination; unpictured numeric quotient,1mark. Includes all nonzero divisors with zero dividend. |
| divremain2a |12| Numeric quotient/remainder, including dividend smaller than divisor;2fields,2marks under current generic P2 partial-credit contract. |
| divgroup2a |12| Grouping stories specifying pencils per full pack, asking full packs/unpacked pencils;2fields,2marks. Does not claim physical grouping or spoken explanation. |
| divcheck2a |12| Select divisor×quotient check for the full groups; feedback accounts for remainder. Three labelled choices,1mark. All distractor equations are arithmetically true but do not check the stated full groups. |

Total146 new variants. New metadata is `division2N6` with bilingual hints and explicit semantic kind. Grouping stories flag offline explanation evidence. Localized choice labels are provided; generic two-field answer keys need labels rather than a fraction-like slash. Do not reuse `equalSharing` metadata just to borrow its all-or-none scoring, since that would misrepresent these new tasks and alter the intended2mark contract.

Remaining integration: family registration/grade routes, numeric or choice practice modes with hint/retry/completion, exact field-based scoring, labelled paper/key, PDF/font coverage, immutable digests, finite UI marking and old-link regression. Existing share2a remains12variants and one mark, with identical payloads. No global renderer, tests or release status updated here.

## Verified maths and scope

External tests passed all146 variants using repeated subtraction as an independent quotient/remainder oracle. Checks cover nonzero divisors, integer quotient0–10, remainder0≤r<d, dividends≤100, correct field/mark counts, all110unique exact-table pairs, bilingual metadata and4/4/4 correct-option positions. Proposed tests do not certify app integration or visual output.

Fixed activity results:12÷3=4r0;14÷3=4r2;24÷6=4r0;35÷5=7r0;17÷5=3r2;3÷5=0r3;0÷4=0r0. Product checks3×4=12 and5×3=15 with2left recover17. Order contrast8÷2=4r0 versus2÷8=0r2. Context answers are3stickers each with2retained,3full packs with2unpacked pencils, and4tables for all17children.

## Pending review

Independent source/mathematics/translation review; oral-before-record instructions; adapted-mode distinctions; phone width; keyboard/key hiding; grayscale print pagination (long key can span pages); browser/PDF tests; live publication checks. Classroom observations, physical-printer and screen-reader validation remain separately unperformed. No construction of files alone closes learner or release evidence.

## Integrated candidate checkpoint · 16 November 2026

The proposal sections above retain the original design and review history. This candidate now registers the families, bilingual pupil/key/practice routes, targeted hints, retries, explicit numeric labels, per-field scoring for new items, permanent payload digests, and PDF/font coverage. Existing released payloads and historical scoring remain unchanged.

The full repository static gate (`node tests/static.cjs`) passes all 89 permanent families and 1,529 variants, including stable-link round trips and frozen-payload checks. The browser suite contains 280 authored checks; those new checks have **not yet been run live**. Independent source and finite-mathematics review is complete, not independent translation certification.

Exact deployment, browser marking/practice/layout/PDF checks remain pending. Classroom observation, independent translation, physical printing, teacher print-preview pagination/key isolation, screen-reader use and manual downloaded-PDF visual inspection remain unverified. Resource completeness will be recorded only after the agreed live gates; it does not certify pupil mastery or completion of practical activities.

## Verified resource-complete checkpoint

**2N6 · Basic division: resource complete.** Five families / 158 variants including unchanged share2a: exact facts, remainders, grouping and multiplication checks; concrete sharing/grouping and contextual remainder decisions assessed separately.

**Verified live release:** `a288a7c95064baa86f6b617a7989abd20e09bed6`; Pages run `43917886662` succeeded. The independent live suite passed **280/280**, covering all 1,529 permanent variants, stable high-index links, bilingual marking/partial credit, practice hints/retries/completion, paper/key/PDF exports, teacher-key routes and phone layouts. Source and finite mathematics reviews passed.

Manual live checks confirmed the Chinese change key ($6.20), division key (7÷3 gives quotient 2 and remainder 1), and English zero-dividend practice (0÷1=0). No broader manual visual coverage is implied.

**Remaining objective gap:** none identified. Teacher print-preview pagination/key isolation, manual downloaded-PDF visual inspection, classroom trials, independent translation certification, physical printing and screen-reader use remain unperformed. Practical/oral evidence still requires actual pupil participation. Earlier candidate sections above are retained as review history; this checkpoint supersedes their pending-live status.

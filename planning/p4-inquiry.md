# 4F1 Inquiry and investigation: verified resource-complete checkpoint

**Verified resource-complete checkpoint: 56/85 units.** All P1–P4 units have source-reviewed assessment resources, covering 211 numbered objectives plus four integrated inquiry statements. Public remaining-P4 release `b10a771` passed **549/549 curriculum checks and 187/187 UI checks**, with zero failures. The five units add 108 variants, 11 numbered objectives (3+2+2+4) and one inquiry statement; all 2,553 measures-release predecessor payloads are preserved. Inventory: 175 permanent families / 2,661 variants; 174 selectable / 2,646; 58 selectable units / 64 resource units; 56 activities and eight open resource-bearing units. Resource completeness is not pupil mastery or delivered inquiry hours. Manual printing, classroom trials, independent translation and screen-reader validation remain unperformed.

**This unit contributes one inquiry statement and zero numbered objectives.** Source scope and evidence below were reviewed before publication. Earlier candidate status language is retained only as historical provenance and is superseded by this verified checkpoint. Physical/manual limitations remain in force.

## Historical development and source-evidence record

17 November 2026. Assets only, incomplete. No question family, numbered objective or completion promotion is added. The release coordinator reconciles current publication state and integrates these assets after the 4D1 candidate.

## Source and accounting

Verified [EDB KS2 notes, printed23/PDF29](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=29) and [primary supplement, printed73/PDF76](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=76). This is one integrated inquiry statement supporting discovery, inquiry, reasoning, communication and conceptual understanding within other mathematics learning. It is not an isolated subject. The suggested time allocation is not evidence of delivered lessons. Adjacent optional enrichment topics are not compulsory additional objectives.

Later verified resource closure adds one inquiry statement, zero numbered objectives and zero scored variants. Resource completeness is not pupil mastery, attendance or actual investigation time.

## Two pupil-led investigations

[Activity](../activities/p4-inquiry.html) contains A1/A2/A3 and B1/B2/B3 in English and Traditional Chinese, four pupil sheets plus a hidden teacher sheet per language.

**A: Same tiles, different borders.** Pupils choose a question and comparison criterion, predict and plan before arranging 24 unit-square tiles as filled positive-integer-side rectangles. They retain their own models, sides, cell counts, exposed-edge counts, unsuccessful trials and actual partner feedback. Rotations are equivalent. Pupils decide whether their search is exhaustive, produce a counterexample or unresolved conclusion, and transfer to perimeter24. Separate paper is explicitly permitted for the 1×24 case. No screen-pixel or calibrated physical-unit claim is made.

**B: Can rounding change our story?** Pupils choose exact test counts, a nearest-ten/hundred rule and a question before calculating. Data are explicitly supplied/invented or genuinely collected anonymous aggregates, not fabricated survey observations. They compare exact and approximate order/totals, choose a table or justified P4-scale chart, test a no-change example, record actual feedback and qualify/revise their claim. A strict order can become a tie under one consistent rounding rule, not reverse. The original counts remain available.

Fourteen empty observation/work fields per language distinguish original work from peer response, revision and the integrated-statement rubric. No statuses, dates, pupil measurements, conjectures or comments are prefilled. Contradicted and unresolved conjectures remain legitimate recorded evidence.

## Independent teacher checks

Teacher tables are hidden by default. Every visible row is checked against its attributes and independent mathematics, not only against a copied answer key.

- Area24 unordered integer rectangles: (1,24), (2,12), (3,8), (4,6), with perimeter50,28,22,20.
- Perimeter24 unordered integer rectangles: (1,11), (2,10), (3,9), (4,8), (5,7), (6,6), with area11,20,27,32,35,36.
- The static oracle builds cell sets and counts exposed neighbour edges, independently checking multiplication/perimeter formulae and bounded completeness. Extremum conclusions are restricted to these finite rectangle domains.
- Distance to adjacent multiples rounds nonnegative counts with upward ties. 149 and151 both round to150 at tens; this is a tie rather than reversal.
- Three145 values total435. Individually rounded values sum450; rounding435 gives440. These are different procedures, neither changes the exact total.
- 140,150,160 already lie on tens; both procedures yield450, a no-change reference.
- Exhaustive checks cover2,000 nearest-ten/hundred monotonic cases and80,000 rounded-sum pairs, confirming both agreement and disagreement cases. Pupil tasks do not require this exhaustive computation.

## Legacy and integration contract

No existing file is modified by this asset package. The independently rechecked 3F1 files remain:
- `activities/p3-inquiry.html`:25,644bytes; SHA256 `0ba0688b09760687966c67137e4875dc0a752d3d9f0a11482524215668911b41`.
- `planning/p3-inquiry.md`:4,555bytes; SHA256 `a051b510c6592dae52c1800ec7ed29df461cca2e21e614b2343515fe771ea0df`.

The static test runs in the assets-only folder. When merged into a runtime tree it additionally verifies these hashes, no 4F1 scored family, the activity registration, unchanged 3F1 completion and an incomplete 4F1 candidate flag. The later verified closure must explicitly update its candidate-state assertion. It requires the activity in the font build source list; rebuild the actual glyph subset and run cmap coverage after merging.

Merge only the activity, audit and test. Update registration/inventory and browser checks in the final reconciled candidate, preserving all preceding payloads. The activity uses the existing shared activity UI/CSS, which are intentionally not duplicated here.

## Verification state

`tests/p4-inquiry-static.cjs` passes in the assets folder and an isolated copy: exact visible teacher tables, bilingual six-task/five-sheet parity, fourteen blank work/observation fields per language, hidden/revealed-key script, source links and original-work space. Runtime integration and font rebuild passed in the final candidate, followed by the complete 549/549 curriculum and 187/187 UI private browser runs. Deployed verification remains pending. Physical printing, classroom delivery, independent translation and screen-reader use remain unperformed.

## Private rerun provenance

The first complete private run recorded 544 passes and five failures, with UI 187/187 passing. Two failures came from inherited 171-family expectations instead of the independently verified 174 selectable families. Three came from new 4D1 routes using a test-helper default sequence [0,6,11] instead of the actual full [0..11] practice sequence. Exact counts, new-ID sample maps and static guards were corrected without changing computational runtime or weakening assertions. The subsequent full 549/549 and 187/187 private rerun passed. The first run is retained as failed test-harness provenance, not a release pass.

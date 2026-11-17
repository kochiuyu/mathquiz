## Verified publication · 17 November 2026

3S2 is resource complete. Public release `6c88951` passed 378/378 curriculum and 153/153 UI browser checks, plus ten static gates. Checkpoint: 39/85 units, 155 numbered objectives and two inquiry statements. Earlier candidate notes below are historical. Actual pupil performance, manual PDF/print pagination, physical printing, classroom trials, independent translation and screen-reader validation remain unverified.

# 3S2 Triangles: private candidate audit

## Implemented checkpoint

Candidate only. Implemented `triangleproperty3a`, `trianglerelation3a`, `trianglesides3a`, each 12 variants. Added a six-task EN/繁中 activity with three pupil sheets and two teacher sheets per language. New SVG renderer carries equivalent text descriptions, equal-side ticks and right-angle markers. Resource routing and full-sample practice fixtures are registered. 128 permanent families/2,025 variants, 127 selectable/2,010 variants, 47 selectable units/51 resource units, 39 activities. No closure promotion: inherited 38 complete units remain unchanged. All 1,989 predecessor payloads pass their untouched frozen hashes.

Ten static gates passed. Triangle-specific tests independently check all 36 answers, overlap truth vectors, every implication and counterexample, symbolic equilateral data, integer geometry, SVG markers, and all 3,375 positive integer triples with side lengths 1–15. Browser, visual/print, physical, classroom, independent translation and screen-reader checks are not claimed.

The original source-audited plan follows; its proposed tests and workflow are not additional executed results.


Prepared 17 November 2026. Planning only: no implementation, publication, test pass or resource-completion claim. Reconcile latest master and the 3S1 release before implementation. Preserve current UI and every previously released variant payload.

## Source audit and scope

Official sources inspected:

- **S**: EDB, *Learning Content of Primary Mathematics* (2017), printed pp.52–54, PDF pp.55–57: https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=55
- **N**: EDB, *Explanatory Notes, Key Stage 1* (2018), printed pp.60–61, PDF pp.66–67: https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=66

The numbered scope has four objectives (nine suggested hours): five named triangle categories; relationships between categories; the strict triangle inequality; and drawing plus making triangles. S explicitly requires applying the inequality when making triangles. S lists right-angled, isosceles, equilateral, isosceles right-angled and scalene categories, accepting the alternate word order “right-angled isosceles”.

N explicitly includes equilateral triangles within isosceles triangles and isosceles-right triangles within both right and isosceles categories. It warns against unspecified naming questions. Simple grouping aids may support teaching; constructing diagrams, interpreting complicated diagrams and recalling the technical relation terminology are not required. N suggests physical exploration and varied drawing papers/materials. Acute/obtuse classification, angle sums, numerical angle measurement, formal proof and Pythagoras are not objectives here; do not silently enlarge this unit.

## Objective-to-evidence map (proposed, not completed)

| Objective | Source location | Proposed pupil evidence | Completion evidence required |
|---|---|---|---|
| 3S2.1 Category recognition | S printed52/PDF55; N printed60/PDF66 | Digital specified-property decisions covering all five categories; physical-card sorting with a reason | Key distinguishes equal sides from right angles, including rotated examples; teacher observes explanation |
| 3S2.2 Category relationships | S printed53/PDF56; N printed60–61/PDF66–67 | True/false membership statements and selecting the complete valid-name list from explicit options | Equilateral→isosceles and isosceles-right→both parent categories each assessed; reverse implications challenged |
| 3S2.3 Side-length feasibility | S printed53/PDF56; N printed61/PDF67 | Digital three-length feasibility, then prediction/test/explanation with strips | Strict boundary cases and actual attempted construction recorded |
| 3S2.4 Drawing and making | S printed54/PDF57; N printed61/PDF67 | Separate pupil drawing and physical construction tasks, applying feasibility when choosing materials | Original drawing plus observed joined model, verification and explanation; digital score is not substitute |

## Small bilingual digital release

Propose three new permanent families, initially 12 curated variants each. IDs below are provisional and must be checked for collisions before adding. Extend existing family/answer contracts, not the global interaction model.

1. `triangleproperty3a`: one explicitly specified category per item, with Yes/No answers. Cover right/isosceles/equilateral/isosceles-right/scalene plus clear negatives, orientation changes and scale changes. Do not ask simply “Name this triangle.” Example: “Is this an isosceles triangle?” / 「這是等腰三角形嗎？」 An equilateral example must answer Yes.
2. `trianglerelation3a`: choose one complete valid-name list, or evaluate one precisely quantified statement. A right-isosceles figure accepts all three relevant names in the list, not only the most specific name. Distinguish “every”/「每個」 from “some”/「有些」; include counterexamples to converses. Keep labels and statement logic identical across languages.
3. `trianglesides3a`: “Can these three strips form a triangle?” / 「這三條紙條能否組成三角形？」 Small positive integer lengths in the same unit; answers Yes/No. Include `(3,4,5)` yes, `(2,3,5)` no, `(2,3,6)` no, `(3,3,3)` yes, with permutations. Worked feedback compares the two shorter lengths against the longest; teacher extension checks all three inequalities. No arbitrary upper-range claim from EDB.

Author vocabulary: right-angled triangle / 直角三角形; isosceles triangle / 等腰三角形; equilateral triangle / 等邊三角形; isosceles right-angled triangle / 等腰直角三角形; scalene triangle / 不等邊三角形. These Chinese labels are author proposals, not independently audited translations. Use explicit equal-side ticks/right-angle markers or labelled side data where exact classification would otherwise depend on appearance. Accessible descriptions must provide equivalent geometric information without naming the answer.

## Practical resource and marking

Create a bilingual `activities/p3-triangles.html` using the established pupil-sheet/hidden-teacher-key pattern. Set `body data-unit="3S2"`, load `../activity-ui.css?v=1` and `../activity-ui.js?v=1`, and register the unit in the resource generator. No redesign.

Six proposed tasks: (1) sort marked cards and justify; (2) give every applicable label for an equilateral and a right-isosceles card; (3) predict which of three strip sets can close; (4) physically test valid, equality and too-long cases; (5) draw two triangles of different sizes, then draw a requested property example; (6) choose a feasible set using the inequality, make a joined triangle and explain the choice. Supply blank/grid spaces, cut-out cards and a separate materials list. Teachers may prepare strips rather than requiring pupils to cut.

Record drawing and making separately: closed three-sided figure, straight sides, three distinct vertices, requested property if specified, and independent use of the side-length rule. Keep “independent / prompted / not yet / not observed” and a space for actual evidence. Accept any valid triangle where no narrower property was requested. Do not turn extra practice with specific categories into an invented requirement that every category must be constructed. Printed grids are not calibrated centimetre rulers; measure actual teacher-prepared strips with real tools. Physical tolerances belong to teacher judgement, not an exact screen grader.

## Exact model and regression tests

These are proposed engineering tests, not pupil requirements or executed checks:

- For every coordinate triangle, reject duplicate vertices and zero signed cross-product area. Compute squared side lengths independently. Isosceles means at least one equal pair; equilateral all three equal; scalene all three distinct. Right means a vertex dot product is zero. Isosceles-right is the conjunction. Verify the entire category truth vector, not a mutually exclusive label enum.
- For integer-coordinate templates use exact integer arithmetic; translation, reflection and quarter-turn rotation must preserve the truth vector. Include a scalene-right example `(0,0),(4,0),(0,3)` and an isosceles-right example `(0,0),(3,0),(0,3)`.
- A nondegenerate equilateral triangle cannot have all integer Cartesian coordinates. Use an exact symbolic model such as `(0,0),(2s,0),(s,s√3)`, whose three squared lengths are `4s²`; generate SVG numerically only at rendering. Never claim rounded SVG points are exactly equilateral or infer the answer from float equality. Test analytic fixture truth and displayed tick/label consistency separately.
- For positive length triples check all three strict inequalities against an independently sorted oracle `smallest + middle > largest`; reject zero/negative values. Enumerate a bounded integer domain and every permutation; equality must always fail. Check all fixture answers and distractors, including unique correct option.
- Compare all pre-existing serialized variant payloads byte-for-byte against the reconciled release baseline. Never revise legacy indices or answers to fit new classifiers. Add new fixtures append-only using existing conventions.
- Run every current static gate and full browser suite; add targeted EN/繁中 builder, practice, answer-key, shared-link, printed-paper and teacher-activity checks. Assert actual SVG points/markers and fixture indices, not merely repeated prompt text. Verify selected new variants survive encode/decode, deterministic regeneration and marking in both languages.
- Check activity unit registration, source links, hidden key, language toggle and print styles. Update counts only after verified implementation; preserve historical verification scope. Publication and live verification remain a separate parent's workflow.

## Remaining limits

No source-scope blocker found. Independent Chinese review, rendered print/PDF pagination, physical construction trials, classroom trials and screen-reader validation remain outstanding. This plan does not certify any of them or establish pupil mastery. The current repository still marks 3S2 as a gap; only a reviewed, tested implementation with practical assessment resources can change that status.

## PDF font coverage correction

Pre-preview cmap audit found9 missing builder-source glyphs (including 腰),1 quiz-source glyph and47 missing activity-source glyphs. These counts overlap across files. Regenerated the bundled subset from the hash-verified local Noto Sans TC source, adding the bilingual triangle activity to the source inventory. The205,928-byte font covers all785 collected source characters with nonzero glyph IDs. `tests/pdf-font-static.py`, invoked by the triangle static gate, verifies actual cmap/glyph coverage. PDF/font and entry-point cache tokens use triangles-r4. This is glyph coverage evidence, not a claim of manual PDF visual validation.

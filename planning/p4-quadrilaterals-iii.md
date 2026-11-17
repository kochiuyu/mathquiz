# 4S1 Quadrilaterals (III): candidate source and objective audit

Private candidate, incomplete. No claim of live verification or pupil mastery.

## Sources and scope

[EDB KS2 printed 19 / PDF 25](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=25) and [primary supplement printed 69–70 / PDF 72–73](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=72) require three objectives: rhombus concept/properties; drawing and making rhombuses; relationships among quadrilaterals.

A rhombus has four equal sides and opposite parallel pairs. Squares count as rhombuses AND rectangles; squares, rectangles and rhombuses count as parallelograms. False converses require genuine counterexamples. No diagonal theorems, rhombus area, angle-sum proof, protractor/degree work, formal set terminology or pupil-constructed Venn/tree diagram is required.

## Evidence map

| Objective | Digital candidate | Teacher-observed evidence |
|---|---|---|
| 4S1.1 | `rhombusproperties4a`, 12 property recognition variants | Task 1 checks actual original four-side and opposite-parallel properties |
| 4S1.2 | No scored click establishes practical production | Task 2 draws different sizes/shapes; task 3 separately makes real models, with originals, tools and actual checks |
| 4S1.3 | `quadrelations4a`, 12 relationship and all-name-list variants | Tasks 4–6 sort inclusive names, explain links, give counterexamples and rotate a physical square |

[Activity](../activities/p4-quadrilaterals-iii.html) has six tasks, four pupil articles plus one hidden teacher-key/rubric article in each language. All observation records are blank. Independent/prompted/not-yet/not-observed is recorded separately, never prefilled. Actual drawing and making are both needed; a completed digital quiz does not establish either.

## Exact activity cards

Cards are schematic, not calibrated physical measuring templates. Given integer side lengths are authored data, not pupil observations. Uniform coordinate scaling preserves all shape properties. A=(0,0),(4,0),(4,4),(0,4); B=(0,0),(6,0),(6,3),(0,3); C=(0,0),(5,0),(8,4),(3,4); D=(0,0),(6,0),(9,4),(3,4); E=(0,-12),(5,0),(0,12),(-9,0); F=(0,0),(3,4),(-1,7),(-4,3).

A and F have all five names; B is quadrilateral/parallelogram/rectangle; C quadrilateral/parallelogram/rhombus; D quadrilateral/parallelogram; E quadrilateral only. Sides respectively: A 4,4,4,4; B 6,3,6,3; C 5,5,5,5; D 6,5,6,5; E 13,13,15,15; F 5,5,5,5. B, C and D refute the three false converse statements. A/F show orientation invariance.

P2 `quadproperties2a` rectangle examples excluding squares and P3 `parallelpairs3a` remain byte-frozen; earlier-stage teaching boundaries are not retroactively changed. Existing exactly-one-parallel-pair trapezium convention is untouched.

## Inventory and verification

Historical unit-only candidate inventory: 168 permanent families / 2,577 variants; 167 selectable / 2,562; 56 selectable units / 61 resource units; 52 activities; 49 complete / 12 open resource-bearing units. The three new objectives are not added to completed-objective totals. All 2,553 predecessor payloads and legacy marking remain unchanged, verified by pinned SHA-256 and all frozen family fixtures.

Required checks: independent integer edge norm/dot/cross geometry; convex simple outlines; exact answer and bilingual-name contracts; all 24 assessment/practice routes; bounded bilingual paper/key/PDF geometry and labels; actual font cmap coverage; activity geometry and blank records; standalone static gates without sibling checkout dependencies. Physical printing, classroom trial, independent translation and screen-reader validation remain unperformed.

Private verification: all 28 CJS static suites and actual PDF-font cmap coverage pass (976 source characters, 268,292-byte subset). The independent runtime oracle checks 24 choices, 48 bilingual SVGs and 27,248 exact integer quadrilateral implications; the separate activity oracle checks 12 bilingual cards. Private 4S1 browser verification passed **508/508 curriculum checks and 179/179 UI checks**, zero failures, as reported by the release coordinator on 17 November 2026. These are private-candidate results, not live publication evidence; 4S1 remains incomplete pending its later reviewed public closure.

## Current reconciled private packet

Rebased on published measures closure `7c98f40`: 51 complete units, 200 numbered objectives plus three inquiry statements. Current private inventory: 175 permanent families / 2,661 variants; 174 selectable / 2,646; 58 selectable units / 64 resource units; 56 activities; 13 open resource-bearing units. 4S1, 4S2, 4S3, 4D1 and 4F1 remain incomplete. All 35 CJS static suites and actual font coverage pass in an isolated standalone copy (279,960-byte subset, 1,016 source characters). The final combined private browser run passed **549/549 curriculum checks and 187/187 UI checks**, with zero failures, as verified by the release coordinator. Public deployment verification remains pending; all five remaining P4 units stay incomplete and the 51 published completion flags are unchanged.

## Private rerun provenance

The first complete private run recorded 544 passes and five failures, with UI 187/187 passing. Two failures came from inherited 171-family expectations instead of the independently verified 174 selectable families. Three came from new 4D1 routes using a test-helper default sequence [0,6,11] instead of the actual full [0..11] practice sequence. Exact counts, new-ID sample maps and static guards were corrected without changing computational runtime or weakening assertions. The subsequent full 549/549 and 187/187 private rerun passed. The first run is retained as failed test-harness provenance, not a release pass.

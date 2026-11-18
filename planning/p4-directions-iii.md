# 4S3 Directions and positions (III): verified resource-complete checkpoint

**Verified resource-complete checkpoint: 56/85 units.** All P1–P4 units have source-reviewed assessment resources, covering 211 numbered objectives plus four integrated inquiry statements. Public remaining-P4 release `b10a771` passed **549/549 curriculum checks and 187/187 UI checks**, with zero failures. The five units add 108 variants, 11 numbered objectives (3+2+2+4) and one inquiry statement; all 2,553 measures-release predecessor payloads are preserved. Inventory: 175 permanent families / 2,661 variants; 174 selectable / 2,646; 58 selectable units / 64 resource units; 56 activities and eight open resource-bearing units. Resource completeness is not pupil mastery or delivered inquiry hours. Manual printing, classroom trials, independent translation and screen-reader validation remain unperformed.

**This unit contributes 2 numbered objectives and zero inquiry statements.** Source scope and evidence below were reviewed before publication. Earlier candidate status language is retained only as historical provenance and is superseded by this verified checkpoint. Physical/manual limitations remain in force.

## Historical development and source-evidence record

Private candidate, incomplete. [EDB KS2 printed 21 / PDF 27](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=27) and [primary supplement printed 71 / PDF 74](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=74) specify two objectives: recognise intermediate directions and use a compass for direction measurement. Required abbreviations NE/SE/SW/NW, explicit relative positions, all eight compass points and map/route applications. Left/right right-angle turns support route tasks. Numerical bearings, declination and map-scale calculations are outside scope.

## Evidence

`directionrelative4a` has 16 variants; `compassroute4a` has eight. Digital maps support eight-direction, rotation, reference-reversal and route reasoning, not actual instrument use. P2 cardinal-only families, renderer, safety guidance and all 2,601 predecessor payloads remain unchanged.

[Practical activity](../activities/p4-directions-iii.html) has six tasks and five articles per language (four pupil sheets plus hidden teacher key): eight names and opposites; actual instrument use; measured object positions and reference reversal; body/map turning; safe measured route; original north-arrow sketch with error diagnosis. Two blank objective rubric rows retain date, tool, readings, reference, original work, assistance and next step. Recognition and practical measurement are observed separately.

## Safety and truthful evidence

Use instrument-specific instructions to identify the north-seeking end, never a universal needle colour. Level the tool, allow settling, avoid magnetic interference and stop/change tool or location if unreliable. Adult checks a safe unobstructed route away from roads, stairs, water and vehicles. No blindfolds or looking down while walking: stop before each reading. Partner assistance can adapt mobility, but assistance and observed compass use must remain distinct. Supplied diagrams/readings cannot be copied as actual observations.

## Diagram oracle

Two maps share exact eight vectors N(0,-1), NE(1,-1), E(1,0), SE(1,1), S(0,1), SW(-1,1), W(-1,0), NW(-1,-1); second map rigidly rotates clockwise. O=(160,155), object displacement scale 70, north arrow scale 100. Derive north from the actual arrow endpoints and east from its clockwise perpendicular. Project each actual object displacement, check exact sign/equal intermediate components, reverse reference and require opposite directions. On rotated map north points right and north-east down-right; B is north-east of O, O south-west of B. Test actual SVG endpoints and visible labels, not stored direction codes alone.

## Inventory and verification limits

172 permanent families / 2,625 variants; 171 selectable / 2,610; 58 selectable units / 63 resource units; 54 activities; 49 complete / 14 open resource-bearing units. 4S1–4S3 remain incomplete. At that historical private checkpoint, verified objective totals were 190 numbered plus three inquiry statements. Independent static diagram and safety checks are required; browser layout, physical print, classroom trials, independent translation and screen-reader review remain unperformed until separately evidenced.

## Private static verification

All 32 CJS static suites and actual PDF-font cmap coverage pass in an isolated standalone copy. The subset is 275,792 bytes and covers 1,001 source characters. The runtime oracle independently recovers actual SVG north, reference, facing and road vectors for 24 choices/48 bilingual renders and 192 exhaustive orientation/reversal/turn properties. A separate activity gate checks four compass maps and blank, safe practical records. All 2,601 predecessor payloads and marking are frozen. At that unit-only checkpoint, browser/PDF execution remained pending. The final combined private pass is recorded below; digital results do not establish actual compass use.

Inherited private provenance: Private 4S2 browser verification passed **519/519 curriculum checks and 181/181 UI checks**, zero failures, as reported by the release coordinator on 17 November 2026. This verifies the private candidate, not a public release; completion flags are unchanged. The 4S1 private run passed 508/508 curriculum and 179/179 UI checks. These predecessor results alone did not verify the new 4S3 browser routes; the final combined private pass is recorded below.

## Private rerun provenance

The first complete private run recorded 544 passes and five failures, with UI 187/187 passing. Two failures came from inherited 171-family expectations instead of the independently verified 174 selectable families. Three came from new 4D1 routes using a test-helper default sequence [0,6,11] instead of the actual full [0..11] practice sequence. Exact counts, new-ID sample maps and static guards were corrected without changing computational runtime or weakening assertions. The subsequent full 549/549 and 187/187 private rerun passed. The first run is retained as failed test-harness provenance, not a release pass.

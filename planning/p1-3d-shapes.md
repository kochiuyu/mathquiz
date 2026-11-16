# P1 3-D shapes (I): source audit and first release

**Status: verified resource complete.** See the dated checkpoint below for evidence and unperformed validation limits.

## Official scope

Checked 16 November 2026: [2017 EDB supplement, PDF pp.19–20](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=19) and [KS1 explanatory notes, PDF p.20 / printed p.14](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=20).

1S1 has **one numbered objective**: intuitive recognition of five solid families. It includes recognising drawings and physically exploring models by touch, observation, rolling and stacking. Exclude oblique solids, required construction of solids, and names of prism/pyramid subtypes. Construction belongs later; stacking ready-made models is not construction evidence. Faces, bases, lateral faces and curved-surface terminology are not assessment targets here.

The activity uses prism/角柱體, cylinder/圓柱體, pyramid/角錐體, cone/圓錐體 and sphere/球體. The angular terms avoid treating the broader Chinese 柱體 or 錐體 as alternatives disjoint from round solids. Teachers may accept equivalent unambiguous local wording. Independent translation review remains pending.

## Usable resource and objective evidence

[English pupil activity](../activities/p1-3d-shapes.html?lang=en) · [Traditional Chinese pupil activity](../activities/p1-3d-shapes.html?lang=zh) · [English teacher key](../activities/p1-3d-shapes.html?lang=en&key=1) · [Chinese teacher key](../activities/p1-3d-shapes.html?lang=zh&key=1)

| Objective 1 evidence mode | Task | Observable evidence / marking |
|---|---|---|
| Real-model recognition across all five families | Task 1: examine ten models, two per family, then group and name. | Correct grouping and naming recorded separately for each family. Varied polygonal prism and pyramid examples supplied by teacher; subtype names not tested. |
| Touch, observe, roll, stack | Tasks 1–2: turn models, safely roll on a tray, make low stacks. | Actual trial and observation, with orientation considered. Participation alone is not recognition. No absolute “all cylinders stack” rule. |
| Identify solids from drawings | Task 3: name five embedded SVG models and match to real models. | A prism, B cylinder, C pyramid, D cone, E sphere. Match and naming recorded separately. |
| Connect a representation to a model | Task 4: follow one drawing’s outer silhouette and compare with corresponding solid. | Trace external outline, match real solid and describe a view or tactile detail unavailable in the flat image. Not a requirement to construct solids. |

All parts of the single objective have authored evidence; none is a claim of actual classroom observations. Model supply is essential: the screen alone cannot complete the practical modes. The hidden key specifies materials, responses, scope, safety and an independent/prompted/not-yet/not-observed rubric.

## Separate digital proposal, not released

The handoff fragment `mathquiz-3d-families.js` is outside the repository. It proposes `solidname1a`, fifteen permanent variants: five families times three drawing orientations (0°, 25°, 90°). It includes a code-native SVG renderer, bilingual choice labels, explanation and practice-hint metadata. Only broad-family image recognition is assessed.

- Five options per variant, each correct position occurs three times.
- Each solid occurs three times; rotations turn an entire drawing without changing the model into an oblique solid.
- Sphere drawing has curved internal surface cues; prism and pyramid have depth cues. Neutral image descriptions do not reveal the answer. Nonvisual users need corresponding tactile models, with adaptation recorded.
- This first digital family uses one representative geometry per solid family. It is not broad subtype variation; the real-model task explicitly varies prism and pyramid bases.
- No counting faces/edges, nets, model construction, prism/pyramid subtype names, cone-versus-pyramid vertex-count drills or roll/stack binary quiz.

Before integration, add the new figure branch, localized choice/key labels, practice route and hints, permanent digest fixtures, full finite-answer checks, fonts and cache update. Verify builder, quiz, practice, printable paper/key and PDFs. Preserve all existing IDs. The fragment is a proposal until those gates pass.

## Verification and release gates

Authored SVGs use distinct strokes and grayscale fills with dashed hidden edges. Static validation checks unique HTML IDs, ten parseable SVGs (five in each language), hidden teacher keys, JavaScript syntax, fifteen unique variant descriptors, correct labels/answer membership and balanced answer positions.

Browser layout, grayscale print preview, page-fit, key hiding/reveal keyboard flow, screen-reader review, independent geometry/translation review and classroom use remain pending. Do not promote a complete-unit status solely because the files exist. No global builder, quiz, tests, coverage or README files were edited in this task.

## Integrated release candidate

`solidname1a` is now integrated in builder, pupil, paper/key and five-question practice (one of each broad solid). All15 variants and all929 earlier permanent variants pass digest/preservation checks. The corrected prism projection has parallel matching edges. Bilingual browser/PDF and exact live-release verification remain pending; this is not yet a completed unit.

## Verified resource-completion checkpoint · 16 November 2026

**1S1 · 3-D shapes (I): resource complete.** Five broad solid families through pictures and real-model handling, classification, rolling and stacking. Every applicable objective and remark has a released pupil task and observable marking evidence. This is resource coverage, not pupil attainment.

**Objectives closed:** 1 numbered objectives.

**Last verified release:** `fa4b8e4767c8c1ca1d89bad2e773c6285515ebb1`; Pages run `43904709924` succeeded. The public browser suite passed **185/185**, including historical payloads, bilingual routes/keys, practice, PDF generation and phone pupil/key layout. Independent source and mathematics review passed. Targeted desktop checks confirmed the new solid practice in both languages, legible clock faces, the complete 2-D curve and front/behind diagram occlusion. These targeted checks do not claim every page was manually inspected.

**Remaining objective gap:** none identified. **Validation still unperformed:** teacher print-preview/pagination (the available browser did not show a preview), manual downloaded-PDF visual inspection, classroom trials, independent translation review, physical printing and screen-reader testing. Practical observation tasks must still be conducted with pupils; no observations are invented.

**Next work:** proceed to P2 while preserving permanent IDs; collect later layout/accessibility and classroom findings separately.

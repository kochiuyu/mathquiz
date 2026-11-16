# P2 one-to-one pictogram family · item brief

**Full-unit resource status:** resource complete, verified 16 November 2026; all 3 numbered objectives and applicable remarks. Not pupil mastery or proof of delivered practical/inquiry time.

Status: **live**. Twelve `pict2a` variants are available in the P2 builder, pupil quiz, paper, worked key and [three-question practice](https://kochiuyu.github.io/mathquiz/?lang=en&p=2&view=practice&skill=pict2a). Manual pupil and hands-on screen-reader checks remain deferred at the user's request.

## Curriculum match

- **Year and unit:** Primary 2, 2D1 “Pictograms”. The [2017 EDB primary supplement, 2D1 objective 2](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=40) asks pupils to interpret pictograms. Objectives 1 and 3 cover recognising and constructing them; the proposed answer to a given chart directly assesses interpretation, not construction.
- The [2018 Key Stage 1 explanatory notes, 2D1](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=47) limit P2 interpretation and construction to **one-to-one representation**, require both horizontal and vertical forms, and recommend familiar contexts with few items and little data. Every complete symbol in this family stands for exactly one pupil. Do not use a scale of 2, 5 or 10, partial symbols, or fractional values.
- **Prerequisite:** count small whole-number sets (P1 1N1). This mapping is the project's interpretation of EDB sources, not EDB approval or evidence of pupil mastery.

## Proposed item

Use a chart of favourite fruit in a class. The category labels are Apple, Banana and Pear (蘋果、香蕉、梨). In the first example, show four identical pupil symbols beside Apple, two beside Banana and three beside Pear, with no printed totals beside the rows.

| Element | English | 繁體中文 |
|---|---|---|
| Chart title | Favourite fruit in our class | 本班最喜愛的水果 |
| Key | Each pupil picture stands for 1 pupil. | 每個學生圖案代表1名學生。 |
| Pupil prompt | How many pupils chose bananas? | 有多少名學生選擇香蕉？ |
| Answer layout | `[ ] pupils` | `[ ]名學生` |
| Worked key | Banana has 2 pupil pictures. Each picture stands for 1 pupil, so **2 pupils** chose bananas. | 香蕉一類有2個學生圖案。每個圖案代表1名學生，所以有**2名學生**選擇香蕉。 |
| First wrong-answer hint | Find the Banana row, then count only its pupil pictures. | 找出香蕉的一行，只數這一行的學生圖案。 |

**Diagram contract:** Use one consistent, recognisable outlined pupil symbol throughout a chart; use position and category labels rather than colour to distinguish categories. Include a title, the one-to-one key and clearly separated labelled categories. Horizontal and vertical variants use the same record structure and question rule, with symbols aligned in equal-size cells. In vertical form, category labels sit below their columns and symbols stack upward from a common baseline. The question and chart must stay together in pupil, builder, paper, key and practice views. No row total, axis number or decorative symbol may reveal or confuse the answer.

**Released variants:** Permanent IDs `pict2a-0` through `pict2a-11` are twelve deterministic charts: six horizontal and six vertical, each with Apple, Banana and Pear and 0–6 pupils per category. They include target counts of 0, 1 and 6, equal counts across two categories, and a non-target category with more pictures than the target. The first chart shows 4, 2 and 3 pupils and asks for Bananas. Each record stores orientation, ordered categories, each count, target category, title, one-to-one key, bilingual prompt, answer and worked step; every view derives from that record. Existing IDs and shared links remain unchanged.

## Marking, access and release checks

- **Online:** One mark for the exact whole-number numeral that matches the target category's symbol count. Trim outer spaces and normalise full-width digits. Reject decimals, expressions, leading-zero forms such as `02`, and a count from the wrong category, even when it is a valid chart count. An empty field asks for completion. The unit appears beside the field and is not typed. Apply this rule only to this new family.
- **Paper and key:** Leave space for a numeral; repeat the same complete chart and key. The worked key points to the target category, counts its symbols and states that each symbol represents one pupil. Check English and Traditional Chinese A4 output in both orientations.
- **Practice:** Begin with a two-pupil horizontal chart, give the category-specific counting hint after a wrong first attempt, allow one retry, then show the worked count. Follow with a zero-count horizontal chart and a vertical chart. Track first-try success separately.
- **Accessibility:** The chart has a text alternative with its title, one-to-one key, category names and a sequence of one spoken “pupil symbol” per drawn symbol, including an explicit empty category. It must not state the target's numeric total before the pupil answers. Give the input a visible label; preserve keyboard operation, focus, contrast and reading order. A screen reader user should be able to count the same symbols as a sighted user.
- **Automated release checks:** The local and public browser regression runners passed **72/72** checks. They enumerate every permanent ID and check record counts, one-to-one charts, both orientations, boundary counts, answer formats, builder, pupil marking, paper, key, practice, Chinese wording, direct PDF and older links. The local 360-pixel phone paper had no horizontal overflow. A Chinese vertical-chart direct PDF fit one A4 page and contained a selectable text layer. Manual pupil and hands-on screen-reader checks remain deferred and must not be marked complete.

**Scope limit:** Reading one category's count from a supplied chart does not test constructing a pictogram, collecting data, comparing categories, or mastery of all three 2D1 objectives. Those are separate future item designs.

[Release commit](https://github.com/kochiuyu/mathquiz/commit/b342a7a7a9423b09f258db776742ba5e9f492afa).

## Full-unit source audit and local supplementary activity · 16 November 2026

The released-family evidence above remains historical evidence for `pict2a`, not a claim that all 2D1 objectives were complete. The new supplement is **local-only, pending independent review and browser/print QA**. No global registration or publication is authorised by this addition.

Rechecked official supplement PDF **40–41**, printed 37–38, and KS1 explanatory notes PDF **47**, printed 41. Three objectives: (1) recognise pictograms, (2) interpret pictograms, (3) construct pictograms. Both horizontal and vertical forms and **one-to-one representation only** are required. Concrete examples should establish why organising and representing data helps; familiar contexts, few categories and small datasets are recommended. A survey or personal-data collection is not independently mandated. Sorting/counting the supplied card collection supplies actual source-data actions without inventing such a requirement.

[English activity](../activities/p2-pictograms.html?lang=en) · [Chinese activity](../activities/p2-pictograms.html?lang=zh) · [English teacher key](../activities/p2-pictograms.html?lang=en&key=1) · [Chinese teacher key](../activities/p2-pictograms.html?lang=zh&key=1)

| Requirement | Existing evidence and supplementary pupil action |
|---|---|
| 1 · recognise; organisation and representation | Existing charts expose titles/keys/categories but do not demand explanation. Task 1 compares an unorganised 12-card collection with sorted categories; Task 3 explicitly identifies title, categories and key. |
| 2 · interpret | Existing `pict2a` has 12 fixed single-category count items (six per orientation), with zeros and counts up to six. Tasks 3/5 add most/fewest, difference by matching, reading the same data in both forms, and explaining orientation invariance. |
| 3 · construct | Tasks 2/4 require the pupil to draw horizontal AND vertical pictograms from sorted cards, label/title each and check every card against one symbol. No correct digital response substitutes for drawing. |
| Both orientations | Horizontal left-to-right rows and vertical bottom-up columns on a common baseline, each with six available symbol cells per category. |
| One-to-one and small familiar data | Five pencil, three book and four ball cards. One complete circle represents one card; printed empty cells are construction guides, not symbols. No half-symbols/scaled keys. |
| Representation assumptions | Title identifies model card collection, not a fictitious class survey. Same data reused across orientations, not double-counted observations. Task 5 keeps an empty category label and questions symbols that violate the key. |

The original source cards deliberately display object names rather than a finished pictogram. Adult cutting or word-reading assistance is recorded; objects can substitute only with matching titles/key. Teacher rubric distinguishes data organisation, recognition, reading, both constructions and checking/explanation. It records independent/prompted/not-yet/not-observed rather than auto-awarding mastery.

No additional digital family is proposed at this stage: single-category reading is already permanent `pict2a`, while the genuine missing actions are construction, sorting and explanation. The supplement adds these without duplicating released IDs. Finite verification confirms raw card counts 5/3/4, total 12, comparison difference 2 and grid capacities; independent source review, native translation, rendered mobile/print and classroom trials remain pending. Existing released-family QA above does not cover this new activity.


## Later-P2 integrated candidate checkpoint

The linked full-unit activity is registered locally and independently source/mathematics reviewed. Existing pict2a payloads are unchanged. Live bilingual activity, responsive layout and key-toggle QA remain pending in the 298-check candidate suite. No unit closure yet; classroom, independent translation, physical print, screen-reader, print-preview pagination and manual downloaded-PDF visual checks remain unperformed.

## Verified resource-complete checkpoint

**2D1 · Pictograms: resource complete.** Preserves the existing pict2a reading family and adds actual sorting/counting, horizontal and vertical one-to-one chart construction, titles/keys, explanation and empty-category cases.

Source and mathematics review identified no remaining objective-resource gap. Live `10848e83b510822641a65bcef3a116dbadec1d66`, Pages run `43930855933`, passed **299/299** checks, including all1,641 released payloads, bilingual pupil/marking/partial-credit/practice routes, teacher-key hiding/reveal, phone widths and paper/key PDF export. The quadrilateral hotfix preserves its original immutable digest and rendered SVGs; deterministic-coordinate and mutation checks pass.

These are independently reviewed resources and automated live-browser evidence, not comprehensive manual visual testing. Manual downloaded-PDF inspection, teacher print-preview pagination/key isolation, physical printing, classroom trials, independent translation certification and screen-reader/accessibility use remain unperformed. Practical/oral/construction tasks require actual pupil participation; inquiry resources do not certify completion of allocated hours. Earlier candidate sections retain review history and are superseded by this checkpoint.

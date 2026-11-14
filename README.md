# MathQuiz · Hong Kong primary mathematics

Teachers can create a bilingual quiz, replace individual questions, share an online pupil version, and print a matching A4 paper and worked answer key. Pupils can take a quiz in English or Traditional Chinese without signing in.

[Open MathQuiz](https://kochiuyu.github.io/mathquiz/) · [English teacher builder](https://kochiuyu.github.io/mathquiz/?v=2&lang=en&p=1&view=build) · [繁體中文出卷工具](https://kochiuyu.github.io/mathquiz/?v=2&lang=zh&p=1&view=build)

## Resume work here

**Checkpoint · 15 November 2026.** The bilingual P1/P4/P6 pilot and custom builder are live. The [home page](https://kochiuyu.github.io/mathquiz/) now links directly to the editable [six-question P1 exit ticket](https://kochiuyu.github.io/mathquiz/?v=2&lang=en&p=1&items=count20a-12.next1-10.pictureadd1-38.parts18a-58.storyadd1-70.otherway1-3&view=build), a blank builder and the existing example quizzes. The preset shows question and mark totals, move up/down, replacement and undo. Its ordered draft survives switching languages and returning from the paper or worked key. The [item brief](planning/p1-exit-ticket.md) records the paper drawing rubric and online response formats. All 173 new variants passed number and diagram checks; correct, incorrect and unanswered online responses were exercised; English and Chinese A4 papers and keys each fit on two pages; the phone layout has no horizontal overflow; and the older four-question link still opens. A P1 mathematics teacher reviewed the edited paper, said they would hand it out, and reported its physical A4 print legible; no changes were specified. **Next: add the five-minute warm-up preset and collect pupil-use observations.** Pupil classroom testing remains pending. Use this README as the working plan and update its checkpoint and task boxes after each verified release.

**Step 6 public-site observation · 15 November 2026.** Starting at the [live home page](https://kochiuyu.github.io/mathquiz/), I opened the exit-ticket preset and replaced question 5. The first replacement (`storyadd1-38`) repeated the pictured question's `3 + 5 = 8`; a second replacement (`storyadd1-43`) gave `8 + 5 = 13`. Random replacement can therefore repeat a calculation across representations; whether that is useful needs teacher judgement. The [edited builder](https://kochiuyu.github.io/mathquiz/?v=2&lang=en&p=1&items=count20a-12.next1-10.pictureadd1-38.parts18a-58.storyadd1-43.otherway1-3&view=build), [paper](https://kochiuyu.github.io/mathquiz/?v=2&lang=en&p=1&items=count20a-12.next1-10.pictureadd1-38.parts18a-58.storyadd1-43.otherway1-3&view=paper), [worked key](https://kochiuyu.github.io/mathquiz/?v=2&lang=en&p=1&items=count20a-12.next1-10.pictureadd1-38.parts18a-58.storyadd1-43.otherway1-3&view=key) and [pupil link](https://kochiuyu.github.io/mathquiz/?v=2&lang=en&p=1&items=count20a-12.next1-10.pictureadd1-38.parts18a-58.storyadd1-43.otherway1-3) retained the same six ordered IDs and six marks. The key gives 13, 14, `3 + 5 = 8`, 7, 13 and `2 + 7 = 9`. The phone quiz opened in English and Chinese without horizontal overflow. [Homepage release commit](https://github.com/kochiuyu/mathquiz/commit/983bb5d91f578b975492899abe3af1c2002a6bf1). A P1 mathematics teacher reviewed the final paper and reported that they would hand it out and that its physical A4 print was legible. They did not request changes to wording, writing space, difficulty or number choices. This is the teacher's report; the physical copy was not independently inspected and pupil use has not been observed. Next: add the five-minute warm-up preset and gather pupil-use feedback.

- [x] Map 85 P1–P6 learning units and link the EDB objectives. [Curriculum map and original quiz briefs](planning/primary-mathematics.md)
- [x] Publish the fixed bilingual pilot and worked keys. [Pull request #1](https://github.com/kochiuyu/mathquiz/pull/1)
- [x] Publish the custom builder with preview, replacement, sharing and printing. [Pull request #2](https://github.com/kochiuyu/mathquiz/pull/2)
- [x] Use underscores for written answers on custom papers. [Published change](https://github.com/kochiuyu/mathquiz/commit/361bd9fb6a8d59e0adb9987307e8a05e6538bea8)
- [x] Put the P1 sequence answer in place and correct generated bead wording. [Published change](https://github.com/kochiuyu/mathquiz/commit/2a8375551ab99b1234e80205f70533452fde37f6)
- [x] Author the P1 exit-ticket brief and release grouped counters and a two-part diagram. [Item brief](planning/p1-exit-ticket.md) · [Published change](https://github.com/kochiuyu/mathquiz/commit/84bb75c72baa6acd831e86aac0fefe30556a50b1)
- [x] Assemble and publish the ordered six-question P1 exit ticket. [Pupil example](https://kochiuyu.github.io/mathquiz/?v=2&lang=en&p=1&items=count20a-12.next1-10.pictureadd1-38.parts18a-58.storyadd1-70.otherway1-3) · [Paper](https://kochiuyu.github.io/mathquiz/?v=2&lang=en&p=1&items=count20a-12.next1-10.pictureadd1-38.parts18a-58.storyadd1-70.otherway1-3&view=paper) · [Key](https://kochiuyu.github.io/mathquiz/?v=2&lang=en&p=1&items=count20a-12.next1-10.pictureadd1-38.parts18a-58.storyadd1-70.otherway1-3&view=key)
- [x] Add the editable P1 exit-ticket preset with totals, reordering and undo. [Builder changes](https://github.com/kochiuyu/mathquiz/commit/1b53dec57336b70f97bbc19b0131598c0027ffb2) · [Live builder](https://kochiuyu.github.io/mathquiz/?v=2&lang=en&p=1&view=build)
- [x] Expose the P1 preset on the homepage and check the release on paper, screen and phone. [Homepage change](https://github.com/kochiuyu/mathquiz/commit/983bb5d91f578b975492899abe3af1c2002a6bf1) · [Live home page](https://kochiuyu.github.io/mathquiz/)
- [x] Record the detailed roadmap and execution checklist here.
- [x] Complete the P1 exit-ticket batch and record the release and P1 teacher paper review.
- [ ] Add the five-minute warm-up preset and collect pupil-use observations.

### Next implementation batch, in order

| Step | Work | How to verify |
|---|---|---|
| 1. Done — fix the P1 paper issue | In the saved four-question example, the writing space is inside question 4's sequence with no redundant answer line. Generated bead counts use singular and plural wording. | Verified on the live English and Chinese paper and online quiz, and on local A4 output. [Example paper](https://kochiuyu.github.io/mathquiz/?v=2&lang=en&p=1&items=add1-3.add1-2.add1-5.next1-10&view=paper) |
| 2. Done — author the P1 set | The [item brief](planning/p1-exit-ticket.md) records six bilingual prompts, values, steps and marking rules against 1N1 and 1N2. The grouped-counter and two-part diagram families are live. | Checked all 101 new variants against their number bounds, the smallest and largest diagrams against their keys in English and Chinese, and correct and incorrect online marking. Teacher review remains pending. |
| 3. Done — assemble six questions | The [ordered example](https://kochiuyu.github.io/mathquiz/?v=2&lang=en&p=1&items=count20a-12.next1-10.pictureadd1-38.parts18a-58.storyadd1-70.otherway1-3) covers grouped counting, a sequence, a pictured addition sentence, a missing part, an addition story and another way to make the total. | Either order of a pictured addition is accepted; the last item accepts a different valid one-digit pair and rejects a reversal of the pictured pair. The [paper rubric and online formats](planning/p1-exit-ticket.md#marking-the-two-open-response-items) are documented. Both local A4 papers fit on two pages. |
| 4. Done — improve the builder | The P1 builder offers the ordered exit-ticket preset, six-question/six-mark total, move up/down, replacement and undo. The draft remains in its ordered link on return from the paper or key. | Replaced an item, moved it, undid replacement without losing the new order, switched languages, and reopened the pupil link. Paper and key returned to the same draft; the previous four-question link still opens. |
| 5. Done — expose and test the release | The homepage offers direct entry to the editable P1 preset and pupil example, alongside a blank builder and the existing grade quizzes. The P1 builder also retains its preset button. | Local marking returned 6/6 for correct answers and 5/6 for one wrong equation; unanswered items prompted for completion. English and Chinese A4 papers and keys each rendered on two pages without clipped questions. The phone home page, builder and pupil quiz had no horizontal overflow. The previous four-question link reopened with its original answers. |
| 6. Done — publish and observe | The public teacher workflow, release commit, edited paper, worked key and phone link are recorded above. | A P1 mathematics teacher said they would hand out the exact paper and reported a legible physical A4 print. No edits were requested; pupil use remains unobserved. |

### Working in this repository

The site uses static HTML, CSS and JavaScript. From the repository root, run `python -m http.server 8000` and open `http://localhost:8000/`. Use the same query strings as the live examples to reproduce a specific quiz locally.

| File | Start here when changing… |
|---|---|
| [index.html](index.html) | Page shell, language navigation and script loading |
| [questions.js](questions.js) | Fixed pilot questions, explanations and answers |
| [builder.js](builder.js) | Generated question families, stable variant IDs, builder controls and share links |
| [quiz.js](quiz.js) | Question display, pupil marking, diagrams and paper/key views |
| [quiz.css](quiz.css) | Screen layout, A4 print styles and underscore answer spaces |
| [papers/](papers/) | Downloadable papers and worked keys for the fixed pilot |
| [planning/](planning/) | Curriculum sources, original briefs and the dated development roadmap |

### Decisions to carry forward

Use Hong Kong EDB objectives and terminology for curriculum alignment. Khan Academy is a design reference for practice. Write original questions and explanations in both languages. Preserve released question IDs and their mathematical meaning so a teacher can reopen the exact paper they distributed. Keep the core workflow account-free. Evaluate named submissions after teachers identify a concrete use for collected results.

## Detailed development and execution plan

The next batch delivers the first part of Release 1. The five releases below describe the wider work, acceptance checks and classroom decisions. The proposed grade-pack sequence is **P1 → P4 → P6 → P2 → P3 → P5**. Revisit that order when classroom evidence gives a reason to do so.

## What is in production

| Original milestone | Evidence | Outstanding work |
|---|---|---|
| Map the curriculum | The project indexes 85 EDB learning units across P1–P6, with links and one proposed task per unit. | Map objectives within each unit. A proposed example does not establish full unit coverage. |
| Prove paper and screen can share questions | Nine fixed questions across P1, P4 and P6. English and Traditional Chinese versions. Twelve downloadable A4 files comprising papers and keys. | Validate the experience with teachers and pupils on paper and phones. |
| Build teacher preview and sharing | Eleven generator families: seven in P1 and two each in P4 and P6, with 352 selectable variants altogether. Teachers select 0–5 questions per family or start with the P1 exit-ticket preset, preview, replace or move an item, undo replacement, copy a pupil link and print the paper or key. | Add the five-minute warm-up preset, durable version checks and direct PDF export for custom papers. |
| Build practice and scale | Submitted quizzes show scores and worked feedback. Published links encode an ordered set of variant IDs. | Independent practice with hints and fresh attempts, coverage for P2/P3/P5, richer diagrams and ongoing review of generated items. |

The custom builder currently uses the browser’s **Print / Save as PDF**. The fixed quizzes have direct PDF files. A versioned link recreates a quiz through its generator, so preserving old generator behaviour is essential.

[Live builder](https://kochiuyu.github.io/mathquiz/?v=2&lang=en&p=1&view=build) · [Project curriculum map](planning/primary-mathematics.md) · [EDB primary curriculum sources](https://www.edb.gov.hk/en/curriculum-development/kla/ma/curr/index2.html)

## Release 1 · Make P1 useful for tomorrow’s class

**Teacher task.** Prepare a six-question P1 exit ticket on numbers to 20 and basic addition. Include a visual, a calculation and a missing-number question. Replace one item, give the paper to a pupil, and open the same set on a phone.

1. Put **Create a quiz** and **Practise a skill** within easy reach on the home page as each experience becomes available. Retain direct access to the existing example quizzes and language switch.
2. Organise P1 choices by what the pupil does. Start with counting a collection, continuing a sequence, composing a number, adding two groups and finding a missing addend. Verify the number bounds and permitted operations against the relevant EDB objective. Use the current addition-to-10 family as one selectable subset.
3. Add pictures pupils reason with. Use counters in groups of five, an uncluttered number track and two-part diagrams. A graphic and its answer must use the same quantities. Keep first attempts untimed.
4. Make paper prompts unambiguous. The current counting item can show a blank inside the sequence and a second answer line beneath it. Render a single writing space where the answer belongs. Put units once, give a child room to write, and handle singular/plural English forms.
5. Add two editable starting sets, **Five-minute warm-up** and **Six-question exit ticket**. Preview the actual set before printing. Show total questions and marks, allow moving a question up or down, and keep the draft when the teacher returns from the paper or answer key.
6. Give printed instructions in the selected language. Test one question with a long Chinese prompt, one with a large diagram and a sheet with multiple pages. Keep a question together where it fits. Give each paper and its key the same short identifying code.
7. Check the P1 experience with someone who teaches the year. Ask them to identify the skill assessed by each question and point out wording they would change before handing it out.

**Release check.** The teacher completes the task without instructions. The pupil knows where to write or tap. Reordering and replacing preserve all other items. Preview, pupil link, A4 paper and key agree on order, values, units and marks in both languages.

## Release 2 · Build the authoring system around the P1 examples

| Authoring decision | What to record or implement |
|---|---|
| Curriculum alignment | Grade, EDB unit, objective number or source page, precise skill, prerequisites, scope limits and date checked. Track draft, reviewed and live at skill level. |
| Mathematical variety | Give each template a purpose such as identify, calculate, represent, apply or explain. Record allowed parameters, excluded cases, answer rules and a specific misconception. Distinguish different representations from number substitutions. |
| Bilingual writing | Store parallel prompts, labels, units, hints and solutions. Review Hong Kong terminology against EDB materials. Check each language independently for grammar, ambiguity and whether it accidentally reveals the answer. |
| Reproducibility | Use permanent versioned identifiers and deterministic values. Freeze released versions and create new IDs when the mathematics, answer, diagram or meaning changes. Keep example links from every released version as regression fixtures. |
| Marking | Specify acceptable forms per field. Test whole numbers, equivalent fractions, decimals and full-width input where appropriate. If simplest form is the objective, give specific feedback for an equivalent unsimplified fraction. Specify rounding only when the question calls for it. |
| Explanations | Write one explanation that identifies the mathematical step in words, with a diagram when it earns its space. Multi-step items specify how marks are allocated. Give open explanations and constructions a rubric for teacher or pupil review. |
| Verification | Enumerate every variant in small finite families, including all 78 current variants. Independently recompute answers, test boundary values, and check for repeated choices, ambiguous diagrams and malformed share links. |
| Maintenance | Separate the grade catalogue, question generation, scoring and rendering sufficiently to add a skill without editing multiple hard-coded grade lists. Preserve existing share links and fixed PDFs. Update the README with how to run, add questions, regenerate outputs and verify a release. |

**Release check.** A second contributor can add one reviewed bilingual family from an example, run its tests, and see it in the teacher builder, pupil quiz, paper and key. Deliberately changing an old variant’s answer fails a regression test.

## Release 3 · Make practice worth repeating

Offer a short practice session per skill. Begin with a representative question. On an incorrect answer, show a targeted hint and let the pupil retry. Then show a worked explanation and offer a fresh problem testing the same idea. Keep the first-attempt result separate from success after a hint. In teacher-assigned quizzes, retain feedback after submission.

For example, a P4 pupil answers **54 cm** for the perimeter of an 18 cm by 3 cm rectangle. Explain that 18 × 3 counts square centimetres inside it. Highlight the four boundary segments and invite the pupil to add 18 + 3 + 18 + 3. A pupil answering **21 cm** needs a different prompt about the two remaining sides. For an unrecognised wrong answer, show a neutral first step.

Show the pupil what they did and one useful next step. For example, “You found both perimeters. Try finding a missing side.” Use descriptive evidence from the session. A single correct response is insufficient evidence for a mastery label. Make progress on this device optional and keep shared classroom devices usable without sign-in.

**Release check.** Every supported skill in practice has a hint, a worked example and an unseen follow-up. A pupil can complete a session with a keyboard or a small touch screen, including reviewing an incorrect answer.

## Release 4 · Extend across P1–P6 with representative packs

Use the project’s curriculum map as the index. Verify each selected objective and its remarks before writing generators. These packs are starting points for development, not claims of full grade coverage.

| Year | Suggested next pack | Example that justifies the work |
|---|---|---|
| P1 | Numbers to 20 and basic addition, followed by flat shapes | Show an irregularly oriented triangle among distractors. Ask what feature makes it a triangle. |
| P2 | Three-digit place value, equal groups and pictograms | Read a pictogram and explain what one symbol represents. Use the scale allowed for the objective. |
| P3 | Simple fractions, capacity and bar charts | Compare two shaded fractions with equal-sized wholes. Read a measuring jug with clearly marked intervals. |
| P4 | Factors, perimeter and scaled bar charts | Move from selecting factors to explaining a factor pair. Move from finding a perimeter to finding a missing side. |
| P5 | Fraction operations, simple equations and area | Translate a short purchase story into an equation. Find triangle area using a labelled perpendicular height. |
| P6 | Percentages, speed and averages | Compare percentage and absolute change. Convert minutes to hours before calculating average speed. |

**Suggested order.** Finish the P1 pack. Use P4 to prove a diagram-heavy pack and P6 to prove multi-step marking. Then launch P2, P3 and P5 in separate releases. After each pack, review a mixed paper and a single-skill practice session. Publish a grade coverage page listing available skills and distinguishing planned work. Report units touched, objectives reviewed and distinct task types separately.

For each substantially covered skill, aim for a straightforward prompt, a second representation and an application or reasoning question where appropriate. Variation should change the decision a pupil makes. For inquiry, drawing or practical measurement, provide a printable activity and rubric when the task warrants teacher judgement.

## Release 5 · Make custom papers dependable for regular use

- **Teacher editing.** Add an optional paper title, reorder, remove, undo replacement and create parallel versions with an equivalent skill mix. Show total marks and an estimated page count. Let teachers save a reusable mix separately from the exact paper they distributed.
- **PDF delivery.** Keep browser printing available. Prototype a direct download from the same quiz record, compare client-side output and a build/render service on a representative Chinese, diagram-heavy paper, and choose using font fidelity, file size, speed and maintenance effort. Keep the current static hosting while it meets the requirement.
- **Print design.** Set writing space by answer type. Use a single underscore for a short answer, squared space for drawing and several lines for reasoning. Keep labels readable in grayscale. Validate actual-size ruler exercises against printer scaling or supply an internal scale.
- **Access.** Test keyboard order, visible focus, touch targets, long Chinese prompts, simplified navigation on phones, and equivalent access to charts without revealing the mathematical inference. Review the shape and counting tasks with a screen reader.
- **Continuity.** Put quiz version and page numbers on papers and keys. Open representative older links after each release. When a URL is invalid or obsolete, show a clear recovery action. Copying a pupil link should omit teacher controls.

**Release check.** Print a mixed multi-page paper in both languages on a school-style grayscale printer, compare it with the key and the shared phone quiz, and check that none of the three needs manual correction.

## Classroom pilot and decisions after it

Start with a small proposed pilot of three to five teachers spanning lower and upper primary. Give them concrete tasks: create a six-question revision paper, replace one unsuitable question, share it, and explain one marked response. Observe where they hesitate. Ask whether they would use the paper tomorrow and, if not, what they would edit. Invite teachers to try a paper with their class through their normal classroom arrangements and record anonymised observations.

| Measure | Initial decision rule |
|---|---|
| Teacher can create and distribute a paper | Aim for completion within two minutes using a familiar topic, without coaching. Record the step that consumes the most time. |
| Pupil understands the task | Observe whether the child can begin, enter an answer and understand the feedback without an adult explaining the interface. Revise repeated points of confusion. |
| Mathematical and marking accuracy | Block release of affected items for any confirmed incorrect key, ambiguous correct answer or disagreement between paper and screen. |
| Usefulness of generated questions | Log why a teacher replaces or edits questions. Distinguish awkward wording, level mismatch, repetition and layout. Use this evidence to prioritise the next pack. |
| Print readiness | Require legible grayscale diagrams, correct Chinese text, paired paper/key identifiers and adequate working space on the pilot sheets. |
| Demand for accounts | Ask what decision a teacher would make with collected results. Scope named submissions, sign-in, retention and access only if the pilot establishes a concrete need. |

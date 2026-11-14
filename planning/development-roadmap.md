# MathQuiz development roadmap

**Planning baseline · 14 November 2026.** Build a bilingual Hong Kong primary mathematics site that a teacher can use to prepare tomorrow’s paper and a pupil can use independently to practise one skill. The example releases below are proposals. Completion is measured by working questions, usable papers and observed classroom tasks.

## What is in production

| Original milestone | Evidence | Outstanding work |
|---|---|---|
| Map the curriculum | The project indexes 85 EDB learning units across P1–P6, with links and one proposed task per unit. | Map objectives within each unit. A proposed example does not establish full unit coverage. |
| Prove paper and screen can share questions | Nine fixed questions across P1, P4 and P6. English and Traditional Chinese versions. Twelve downloadable A4 files comprising papers and keys. | Validate the experience with teachers and pupils on paper and phones. |
| Build teacher preview and sharing | Six generator families, two in each pilot year, with 78 selectable variants altogether. Teachers select 0–5 questions per family, preview, replace an item, copy a pupil link and print the paper or key. | More meaningful variety, editing and reordering, durable version checks and direct PDF export for custom papers. |
| Build practice and scale | Submitted quizzes show scores and worked feedback. Published links encode an ordered set of variant IDs. | Independent practice with hints and fresh attempts, coverage for P2/P3/P5, richer diagrams and ongoing review of generated items. |

The custom builder currently uses the browser’s **Print / Save as PDF**. The fixed quizzes have direct PDF files. A versioned link recreates a quiz through its generator, so preserving old generator behaviour is essential. The older project README still describes a three-choice arithmetic game and should be updated with the next implementation release.

[Live builder](https://kochiuyu.github.io/mathquiz/?v=2&lang=en&p=1&view=build) · [Project curriculum map](primary-mathematics.md) · [EDB primary curriculum sources](https://www.edb.gov.hk/en/curriculum-development/kla/ma/curr/index2.html)

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

## First implementation batch

1. Update the homepage hierarchy and README to reflect the two audiences and currently available features.
2. Repair the P1 sequence double blank and agreement in variable English wording. Add regression examples for short answers with and without units.
3. Add two new P1 representations, including one grouping or composition diagram, and write bilingual worked explanations.
4. Ship the six-question P1 exit ticket with preview, replace and reorder. Verify equivalent English and Chinese papers at A4 size.
5. Run a teacher walkthrough. Capture observed issues and use them to order the next batch of authoring, practice and P4 work.

The timing of later releases depends on bilingual content review, teacher availability and the results of the PDF prototype. The first decision point is whether an actual teacher would hand out the P1 exit ticket as generated.

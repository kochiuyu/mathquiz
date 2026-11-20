# Researching and releasing primary mathematics questions

This repeatable workflow was developed with the first MathQuiz reasoning collection on 20 November 2026. It turns a useful mathematical idea found online into an original, checked, discoverable activity. It does not grant permission to publish future work: follow the scope of the current request.

## 1. Establish the current baseline

Read the current README, curriculum map, source catalogue and release evidence. Fetch the current repository head before editing. Work in a separate checkout and preserve unrelated changes. Check the live catalogue, not historical totals further down the README.

Record separately: official curriculum units; curriculum-linked practice types; TSA-informed types; optional reasoning collections; teacher-reviewed activities. In the first release these remain **85 official units; 270 curriculum-linked + 30 TSA-informed practice types; 12 separate reasoning collections**. A different interaction or new set of numbers is not automatically a new skill.

## 2. Search for mathematical structures

Start with a small, bounded batch across the requested grades and topics. Search for gaps in basic practice, application, reasoning and investigation. More worksheets are useful when they add a missing representation, misconception check or practical context; do not classify every adaptation as reasoning. Useful query patterns include:

- `site:nrich.maths.org primary [topic] all possibilities`
- `site:tasks.illustrativemathematics.org [topic] explain compare`
- `site:mathathome.mathlearningcenter.org [topic]`
- `site:edb.gov.hk primary mathematics [topic] learning objectives`
- `site:bca.hkeaa.edu.hk [grade] mathematics [year]` when assessment references are relevant.

Open the actual task, teacher notes and relevant diagrams. Record the exact source title, page URL, access date, and item/page number for a PDF. A search snippet alone is insufficient. Prefer primary sources. Check the current source terms before using material; free access does not establish reuse rights.

### Hong Kong source and quality checks

- Search local university teaching projects, identifiable school resource pages and EDB materials as well as overseas task libraries. Useful queries: `site:eduhk.hk primary mathematics lesson plan`, `site:edu.hk 小學 數學 題目`, and `site:edb.gov.hk 小學 數學 工作紙`.
- Read the actual example and answer, not only a directory or search snippet. Mark inaccessible and index-only sources as leads. Map historical unit codes to current prerequisites.
- Independently check source answers. Record apparent errors and write a corrected independent task; a reputable host is not proof that every answer is correct.
- Use **MathQuiz adaptations / MathQuiz改編練習** as the collection origin label. Keep year, topic, difficulty and task format separate. Retain the named source and original-adaptation explanation; the label does not imply a licence to copy.
- Separate published tasks from the research queue. Do not increase live catalogue totals for unimplemented drafts.

### Going deeper into Hong Kong resources

- Use the [deeper Hong Kong review](hong-kong-source-expansion.md) as a starting point: follow named school lessons through CUHK's financial-literacy collection, EDB school-based curriculum sharing and QEF project archives. Count reviewed resources separately from websites and publishers.
- Record one-based PDF page numbers including covers. For scanned PDFs, inspect rendered pages; a successful download or empty text extraction is not a completed review. Read only the relevant sections and state that scope.
- Check task provenance: a school-hosted PDF may embed publisher textbook pages. Write original tasks and diagrams; do not assume hosting grants republication rights.
- Prioritise everyday applications, misconception diagnosis, representations and practical work as well as puzzles. Keep suggested grade, source grade and task format separate.
- Search existing generated explanations before claiming novelty. If a misconception is already taught, merge the proposed variant into that skill; a new source does not automatically mean a new question type.
- Prefer fictional budgets and records over pupils' personal finances or identifiable work. Preserve the source's historical date and do not pass old data off as current.
- Record broken links, HTTP 429, maintenance pages and unreadable legacy files as unresolved leads. Do not count them as reviewed questions or bypass access controls.

### UK and Singapore sources

- Use NCETM and Cambridge NRICH for varied representations and explanations; use identifiable Singapore school teaching materials for bar models and problem-solving methods. Start with the [reviewed regional source shortlist](hk-uk-singapore-sources.md).
- Search patterns include `site:ncetm.org.uk primary assessment [topic]`, `site:nrich.maths.org [topic]`, and `site:moe.edu.sg mathematics model drawing parents`. Open the actual resource: indexed PDFs can be removed or replaced.
- Record whether a source is a question, a worked example, a method page or only a directory. Do not count a teaching-method page as collected questions.
- Keep source country and source year label separate from the suggested HK grade. Review prerequisites before adopting either the task or its claimed difficulty.
- Record copyright ownership for text and diagrams separately where the source distinguishes them. Original adaptation is the default; accessible does not mean freely reusable.

## 3. Keep a research register

Use the existing shared `mathquiz_question_candidates` table. Its stable candidate key links research to implementation. Record title, suggested grade, source title/URL, review date, status, overlap notes, original English/Traditional Chinese example, answer, progression and adaptation notes. Never store credentials or pupil data.

Use statuses such as `candidate`, `extension`, `teacher-reviewed`, `implemented — awaiting verification`, `published — verified`, or `deferred`, with a reason. Update an existing candidate instead of creating duplicates. The repository plan is the public narrative; the register is the ongoing research queue.

## 4. Check novelty and curriculum boundaries

Compare the idea with existing labels **and related generated question payloads**, worked answers and activities. Record the nearest existing IDs and what is different. Separate a new structure, a skill extension and a teacher discussion. Do not claim an exhaustive novelty audit unless one was performed.

Map the prerequisites to the actual HK unit names and objectives. Overseas grade labels are not interchangeable with HK grades. Check number range, permitted operations, fraction demands, units, geometry and vocabulary. Assign a suggested grade; label optional enrichment and extensions explicitly. Never invent an official EDB objective or HKEAA competency code. If a task combines units, record both prerequisites and use the later one for navigation.

## 5. Write original bilingual tasks

Use the source as a reference for the mathematical idea. Create independent wording, values, contexts, diagrams, feedback and worked solutions. Do not mirror a source worksheet, translate its text wholesale, trace its illustrations or imply endorsement. Keep a source link and adaptation note. If exact reuse is intended, verify the relevant permission or licence first and meet its conditions.

Draft at least one complete task and solution before generating variants. Specify all constraints: allowed numbers, repeated digits, whether order matters, whether a square counts as a rectangle, whether every solution is requested, and what a fraction refers to. Avoid questions with accidental ambiguity.

Build difficulty through thinking demand:

| Level | Typical demand |
| --- | --- |
| Easy | Compare supplied cases, follow a diagram or use a visible cue. |
| Normal | Choose a method or construct a valid answer independently. |
| Difficult | Find every bounded solution, reject a false claim, justify or compare interpretations. |

Larger numbers alone are not a difficulty progression. Make variants meaningfully distinct; do not count the same translated question twice. Difficulty remains provisional until pupil trials.

## 6. Design honest marking and presentation

For multiple valid solutions, mark the defining constraints rather than one answer string. Accept equivalent fractions and harmless input differences. Test blanks, duplicates, invalid symbols and out-of-range values. Teacher judgement is needed for open explanations that cannot be scored reliably; never silently grade these as wrong or infer mastery.

Show concise prompts and familiar mathematical notation. Keep source details expandable, with a short visible origin label. Add English/Traditional Chinese navigation, short sets, useful retry feedback, pupil paper and worked answers. Preserve drafts across language changes where promised. Keep questions and answer controls prominent on mobile. Avoid placing internal development instructions in pupil text.

## 7. Verify independently

1. Enumerate every generated context at every level. Derive answers independently of the generator: brute-force bounded solutions, calculate separately, or geometrically fold/measure diagrams.
2. Check all valid alternatives as well as plausible wrong answers. Ensure choice options are distinct and the key identifies exactly the intended answer.
3. Run the existing checks affected by the change. Preserve old catalogue totals, routes and question banks.
4. In the actual browser, test both languages, all topic/level routes, marking, teacher prompts, draft continuity, search/source/year filters, papers and worked keys. Include narrow mobile widths and visible layout inspection.
5. Check print CSS and paper content. Record physical printing, independent translation, screen-reader use, cross-device audio and classroom calibration as unverified unless actually performed.

Record failures and fixes. A page-load timeout is a failed run, not a pass. Retry the exact case and retain both results. Report distinct cases verified across runs rather than disguising reruns as a flawless full run.

## 8. Publish and verify the deployed result

Publish only within the user's authorization. Re-read the remote branch head before creating a commit; preserve concurrent changes and update the branch with an expected-head check. Follow the configured co-author convention. Check the deployment result, compare the live asset bytes with the tested files, and run the targeted browser suite on the public site.

Update README and release evidence with exact counts, source mapping, local/live results, original failures and reruns, deployment commit and limitations. Verify the published documents. Update the research register only after live verification. Attach the concise release plan/workflow to the user. Close only this task's browser tabs and stop only its preview server.

## Completion checklist for the next batch

- Source pages read; rights approach and adaptation recorded.
- Related existing questions checked; new structure versus extension classified.
- HK prerequisites and optional scope explicit.
- Original bilingual examples, independent diagrams and complete solutions.
- Every generated variant and alternative answer checked.
- Searchable entry points, separate counts and mobile/print views tested.
- Local and live results recorded without hiding failures.
- README, evidence and research register updated; user receives links.

Reference implementation: [first reasoning release](reasoning-collection.md), [question generator](../reasoning-data.js), [independent answer checks](../tests/reasoning-static.cjs), [browser runner](../tests/reasoning.html).


## 20 November implementation refinement: resolve candidates without inflating counts

- A single fully reviewed example may ship as one worked example; do not repeat it across three levels or twelve indices and count the duplicates as variants. Hide level/set controls for these tasks and exclude them from the levelled filter.
- An already-covered candidate can be resolved by linking to the actual existing generated practice. Record the overlap, keep curriculum totals unchanged, and do not describe unchanged questions as newly implemented.
- Check printed choice alternatives as well as empty answer lines. Verify source-region aliases in English and Traditional Chinese. Update every entry point's cache version, including curriculum/coverage views.
- Keep an independent numerical checker separate from the question definitions. Re-run existing banks after renderer or marking changes. A teacher story remains unscored; a selected explanation does not certify an oral proof.
- After deployed verification, change each candidate to published or resolved-covered, with its exact destination. Preserve historical research notes with a prominent status update.

The 22-candidate batch is implemented as 20 single examples and two existing-practice links; see [the release report](research-to-practice-release.md). These are separate from the original 12 levelled collections and from the 300 curriculum/TSA practice types.

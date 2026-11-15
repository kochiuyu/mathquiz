# P2 equal-sharing division family · item brief

Status: **draft, not live**. This brief defines a bilingual equal-sharing family for the next implementation step. Manual pupil and hands-on screen-reader checks remain deferred at the user's request.

## Curriculum match

- **Year and unit:** Primary 2, 2N6 “Basic division”. The [2017 EDB primary supplement, 2N6 objectives 1–2 and 4](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=30) covers the concept and performance of basic division and solving problems. A pictured equal-sharing task directly probes the concept and calculation; its short story touches problem solving. A correct response to one story does not establish mastery of objective 4. Objective 3, the multiplication–division relationship, can appear in the worked key but is not independently assessed.
- The [2018 Key Stage 1 explanatory notes, 2N6](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS1_e.pdf#page=33) distinguish sharing from grouping and require examples **with and without remainders**. They recommend concrete distribution situations, diagrams and symbols, within the 0–10 multiplication table. The [2017 supplement](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf#page=30) explicitly includes remainders. This first family must include both outcomes and keep each remainder smaller than the number of recipients.
- **Prerequisites:** P1 counting and P2 equal-groups multiplication (2N3) for checking (divisor × quotient + remainder = dividend). This is a project interpretation of EDB sources, not EDB approval or evidence of pupil mastery.

## Proposed item

Use a familiar sharing situation and separate the quotient and remainder into two response fields. The first example has 12 counters and 3 children. A second example has 13 counters and 4 children.

| Element | English | 繁體中文 |
|---|---|---|
| Pupil prompt, no remainder | Share 12 counters equally among 3 children. How many does each child get? How many are left over? | 把12粒圓片平均分給3名小朋友。每人分得多少粒？剩下多少粒？ |
| Answer layout | Each gets `[ ]` counters; `[ ]` counters left over. | 每人分得`[ ]`粒圓片；剩下`[ ]`粒。 |
| Worked key | Put 4 counters in each of 3 trays. (3 × 4 = 12), so (12 ÷ 3 = 4) with **0 left over**. | 3個盤子各放4粒。(3 × 4 = 12)，所以(12 ÷ 3 = 4)，**剩下0粒**。 |
| Remainder example | 13 counters shared among 4 children give 3 each and 1 left over: (4 × 3 + 1 = 13). | 13粒圓片平均分給4人，每人3粒，剩下1粒：(4 × 3 + 1 = 13)。 |
| First wrong-answer hint | Give one counter to each child in turn. Stop when you cannot give everyone another counter. Count one tray and what is left. | 輪流給每人一粒圓片；不足以再每人分一粒時就停下來。數一數每盤有多少粒，以及剩下多少粒。 |

**Diagram contract:** Show the entire starting set as countable counters and exactly the stated number of empty, labelled trays or child positions. Do not pre-fill trays in the pupil diagram: that would disclose the quotient. Paper, key and practice use the same starting set and tray count. The worked key may add an after-sharing diagram with equal filled trays and a separate remainder. Distinguish trays by borders and position, not colour alone. A text alternative states the starting count and number of empty trays without the quotient or remainder. Keep diagram, prompt and two answer fields together on A4.

**Variant plan:** Freeze permanent IDs before release. Begin with 12 deterministic variants, including 12 ÷ 3 = 4 remainder 0 and 13 ÷ 4 = 3 remainder 1. Use 2–5 recipients, quotients 2–6 and a remainder from 0 up to one less than the divisor; keep totals within 4–30 and use only multiplication facts within the 0–10 table. Include at least four exact-division and four remainder cases, remainders of 1 and greater than 1, different divisors, and a case where a child count could be confused with the answer. Each record stores dividend, divisor, quotient, remainder, bilingual prompt, worked step and diagram parameters; all views derive from that record. Existing IDs and shared links must remain unchanged.

## Marking, access and release checks

- **Online:** Require both fields, awarding one mark only when the quotient and remainder are both correct. Accept whole-number numerals after trimming spaces and normalising full-width digits. Require an explicit `0` in the remainder field for exact division. Reject decimals, calculations, reversed quotient/remainder, a remainder at least as large as the divisor, or a quotient that only makes the total work with an invalid remainder. A blank field asks for completion. Apply the rule only to this new family.
- **Paper and key:** Print two labelled blanks. The key shows the equal tray counts, remainder, division sentence and multiplication check (divisor × quotient + remainder = dividend). Check both a zero-remainder and nonzero-remainder case in English and Chinese A4 output.
- **Practice:** Start with the 12-counter exact-sharing example, show the distribution hint after a wrong first attempt, allow one retry, then show the worked result. Follow with distinct diagrams including a nonzero remainder; track first-try success separately.
- **Accessibility:** Give the two fields separate labels, “each child gets” and “left over”. The starting-set diagram's text alternative must let a screen reader user count the counters and recipients without announcing the answer. Preserve keyboard order, visible focus and grayscale contrast.
- **Automated release checks:** Enumerate permanent IDs and verify (dividend = divisor × quotient + remainder), (0 ≤ remainder < divisor), picture counts, bilingual prompts, both answer fields and key. Check accepted and rejected number formats, blank prompting, practice hint/retry and distinct follow-ups, phone width, A4/PDF output and old links. Manual pupil and hands-on screen-reader checks remain deferred and must not be marked complete.

**Scope limit:** This family assesses equal sharing in small pictured contexts. It does not directly test grouping into sets of a given size, division of zero, long division, interpreting a remainder in a more complex real-world decision, or the full 2N6 unit.

# 6A1: Simple equations (II)

**P6 resources verified:** All 16 P6 units are resource complete following live verification of `11eb4a1d7fd6652a55acddc4c3cdb6992c225013`. All 85 units are resource complete: 297 numbered objectives plus 6 inquiry statements. Inventory: 271 permanent families / 4,035 variants; 270 selectable / 4,020; 77 selectable units, 85 resource-bearing units, 85 activities and zero open units. P1–P6 has 9,720 level tasks. Resource completeness is not pupil mastery or observed classroom performance. Physical printing, classroom trials, independent translation and screen-reader validation remain unverified. [Live evidence](p6-live-closure-evidence.json).

Earlier verification records below retain their original scope and are historical.

## Learning coverage

2 numbered objectives. Six equation forms with non-integral values, modelling the original quantity or a shape dimension, and solving with contextual substitution checks.

Sources: [EDB 2020 KS2 notes](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=55) and the [2017 primary mathematics supplement](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf).

## Digital families

- `equationtypes6a`: 24 variants; Six equation forms with non-integral values.
- `equationmodel6a`: 12 variants; Model the original quantity or shape dimension.
- `equationcheck6a`: 12 variants; Solve and check contextual equations.

## Response and practice contracts

`number6.js` parses bounded nonnegative integer, decimal and lowest-term fraction/mixed-number responses using exact rational arithmetic. Each field declares its representation; units and scientific notation are not silently accepted as numeric input. Earlier grading contracts remain unchanged. `algebra6.js` supports bounded linear expressions with decimal, fraction and percentage constants. Constructed equations must represent the directly stated relationship on corresponding sides, not merely have the same solution. There is no `eval` or variable denominator. Operator spacing is supported; mixed coefficients use explicit parentheses such as `(1+1/2)`.

Every family provides bilingual hints that do not simply reveal the canonical answer. Easy adds a method cue, Normal retains independent application, and Difficult adds contextual intermediate calculations or checks. Difficulty labels remain provisional.

## Practical work

The [bilingual activity](../activities/p6-simple-equations-ii.html) contains six task groups, visible supplies, hidden teacher models and 2 blank objective records per language. No pupil observation or mastery is prefilled.

## Verification limits

Independent rational/AST, actual generated HTML, assessment and minimal-DOM practice-recovery checks cover these families. Minimal-DOM testing is not browser verification. P6 completion remains pending live verification. Digital answers do not establish practical performance or lasting mastery. Physical printing, classroom use, independent translation and screen-reader validation have not been verified. See [integration and verification status](p6-core-integration.md) for the current software checks.

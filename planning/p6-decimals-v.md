# 6N2: Decimals (V)

## Learning coverage

2 numbered objectives. Conversion between decimals and fractions, exact versus explicitly rounded decimals, and comparisons that do not mistake rounded ties for equality.

Sources: [EDB 2020 KS2 notes](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=52) and the [2017 primary mathematics supplement](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/pmc2017_e.pdf).

## Digital families

- `decfraction6a`: 12 variants; Decimals to lowest-term fractions.
- `fractiondecimal6a`: 12 variants; Fractions to exact or rounded decimals.
- `fractioncompare6a`: 12 variants; Compare fractions through decimals.

## Response and practice contracts

`number6.js` parses bounded nonnegative integer, decimal and lowest-term fraction/mixed-number responses using exact rational arithmetic. Each field declares its representation; units and scientific notation are not silently accepted as numeric input. Earlier grading contracts remain unchanged.

Every family provides bilingual hints that do not simply reveal the canonical answer. Easy adds a method cue, Normal retains independent application, and Difficult adds contextual intermediate calculations or checks. Difficulty labels remain provisional.

## Practical work

The [bilingual activity](../activities/p6-decimals-v.html) contains six task groups, visible supplies, hidden teacher models and 2 blank objective records per language. No pupil observation or mastery is prefilled.

## Verification limits

Independent rational/AST, actual generated HTML, assessment and minimal-DOM practice-recovery checks cover these families. Minimal-DOM testing is not browser verification. P6 completion remains pending live verification. Digital answers do not establish practical performance or lasting mastery. Physical printing, classroom use, independent translation and screen-reader validation have not been verified. See [integration and verification status](p6-core-integration.md) for the current software checks.

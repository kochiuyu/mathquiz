# P4 factor pairs · family brief

Status: **live** as `factorpair4a`. Source checked 16 November 2026. This is a second representation of 4N3 objective 2, not full coverage of factors or observed pupil understanding. Manual language, classroom, physical print and screen-reader checks remain deferred.

The [EDB 2020 Key Stage 2 explanatory notes, 4N3](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/EN_KS2_e.pdf#page=11) connect factors to exact divisibility and multiplication, and ask pupils to find all factors of a positive integer. The existing `factor1` family asks pupils to select two factors from four choices. This family instead asks a pupil to complete a multiplication sentence that **shows** one factor pair. Completing a sentence is a structured explanation; it does not assess a pupil's free-written reasoning or ability to list all factors.

Twelve permanent IDs (`factorpair4a-0` to `factorpair4a-11`) use target numbers 12–42 and a given positive factor. Cases include square pairs (`4 × 4 = 16`, `6 × 6 = 36`), a given factor of 1 (`1 × 40 = 40`) and a given factor equal to the target (`42 × 1 = 42`). The missing cofactor is a positive whole number and the product has no remainder. The ordered item record stores the target, given factor, cofactor, bilingual prompt, answer and worked explanation. No released `factor1` record or ID changes.

| Part | English | 繁體中文 |
|---|---|---|
| Prompt example | Complete the multiplication sentence to show why 3 is a factor of 12: 3 × ___ = 12. | 完成乘法算式，說明為甚麼3是12的因數：3 × ___ = 12。 |
| Worked step | 3 × 4 = 12 exactly. The factors 3 and 4 form a pair because the product is 12 with no remainder. | 因為3 × 4 = 12，積剛好是12，沒有餘數，所以3和4是一對因數。 |
| Hint | Divide 12 by 3. Check that your answer times 3 gives 12 exactly. | 用12除以3，再檢查答案乘3是否剛好等於12。 |

The online item is worth one mark for the exact whole-number cofactor. Full-width digits and outer spaces work. A decimal, fraction, calculation or typed unit does not. A blank answer prompts completion. Paper and key put the blank or answer inside the multiplication sentence, followed by the worked explanation on the key.

Practice begins with `3 × ___ = 12`, permits one retry, then shows the worked step. Subtracting the given factor from the target triggers a subtraction-versus-multiplication hint. Entering the target triggers a product-versus-factor hint. The unseen follow-ups include a square pair and the factor 1. First-try results are tracked separately. These misconceptions are design hypotheses, not observed pupil errors.

Automated checks enumerate all twelve cases, independently recompute each product, cover square and unity cases, test numeral rules, preserve old IDs, and exercise English and Chinese builder, pupil, paper, key and practice routes. Physical and classroom checks remain deferred.

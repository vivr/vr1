---
title: Equality Testing
date: 2023-10-28
order: 11
---

### Equality Testing

In JavaScript, the `==` (double equals) and `===` (triple equals) are comparison operators used for equality testing.

#### Double Equals (`==`)

- Performs type coercion before making the comparison.
- If the operands have different types, JavaScript tries to convert them to a common type before making the comparison.
- For example, `"5" == 5` will be `true` because the string `"5"` is coerced into the number `5` for the comparison.

#### Triple Equals (`===`)

- Does not perform type coercion; it checks both value and type for equality.
- If the operands have different types, the comparison evaluates to `false`.
- For example, `"5" === 5` will be `false` because the string and number are of different types.

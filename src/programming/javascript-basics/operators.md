---
title: JS Basics - Operators
shortTitle: Operators
date: 2023-10-28
order: 4
---

### Operators

Operators have **operands**. An operand is the value that is going to be operated on by the operator. For example, `3 + 4`. The operator is `+` and the operands are `3` and `4`. These could also be referred to as the left operand _(3 in this case)_ and the right operand _(4 in this case)._ If the operator has two operands then it is called a binary operator. If the operator only involves one operand then it is called a unary operator.

#### Math operators

- `+`: add two numbers.
- `-`: subtract two numbers.
- `*`: multiply two numbers.
- `/`: divide two numbers.
- `%`: divide two numbers, yield remainder.
- `**`: exponentation (e.g. `2 ** 3 = 8`) It raises the left operand to the power of the right operand.

#### Assignment Operators

- `=`: assign value to variable.
- `+=`: adds the right operand to the left operand and assigns the result to the left operand.
- `-=`: subtracts the right operand from the left operand and assigns the result to the left operand.
- `*=`: multiplies the left operand by the right operand and assigns the result to the left operand.
- `/=`: divides the left operand by the right operand and assigns the result to the left operand.
- `%=`: computes the remainder when dividing the left operand by the right operand and assigns the result to the left operand.

#### String concatenation

Concatenation typically refers to the process of combining strings or values together. You can use the `+` operator to concatenate strings.

#### Boolean operators

Booleans are used to determine whether or not a block gets executed, where any defined variable that is neither zero nor an empty string is treated as true.

- `AND(&&)`: true if ALL are true.
- `OR(||)`: true if ONE is true.
- `NOT(!)`: inverts true/false value.

#### Comparison Operators

JavaScript comparisons are used to determine whether two values are equal or not.

- `==`: two values are equal if they have the same value, regardless of their data types.
- `===`: two values are equal if they have the same value and the same data type.
- `!=`: two values are not equal if they do not have the same value.
- `!==`: two values are _strictly_ not equal if they do not have the same value or the same data type.
- `>`: checks if the first value is greater than the second value.
- `<`: checks if the first value is less than the second value.
- `>=`: checks if the first value is greater than or equal to the second value.
- `<=`: checks if the first value is less than or equal to the second value.

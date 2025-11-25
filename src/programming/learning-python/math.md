---
title: Learning Python - Maths
shortTitle: Maths
date: 2025-11-18
order: 5
---

### Math operators

#### Basic math

Python does simple maths just like a calculator:

```python
5 + 3       # Addition: 8
10 - 4      # Subtraction: 6
6 * 7       # Multiplication: 42
20 / 4      # Division: 5
```

#### Order of operations

Maths follows the normal rules. Multiplication and division happen before addition and subtraction:

```python
2 + 3 * 4    # Equals 14 (multiply first, then add)
(2 + 3) * 4  # Equals 20 (brackets override the order)
```

#### Special maths operators

Python has a few extra operators:

- **Modulus (%)**: Gives you the remainder after division.

```python
10 % 3    # Equals 1 (10 divided by 3 is 3 remainder 1)
```

- **Exponentiation (**)**: Raises a number to a power.

```python
2 ** 3    # Equals 8 (2 to the power of 3)
5 ** 2    # Equals 25 (5 squared)
```

- **Floor Division (//)**: Divides and rounds down to a whole number.

```python
7 // 2    # Equals 3 (7 divided by 2 is 3.5, rounded down to 3)
```

#### Shorthand maths

You can combine maths operators with assignment for quick updates:

```python
x = 10
x += 5    # Same as: x = x + 5, now x is 15
x -= 3    # Same as: x = x - 3, now x is 12
x *= 2    # Same as: x = x * 2, now x is 24
x /= 4    # Same as: x = x / 4, now x is 6
```

This also works with `%=` and `**=`.

#### The math module

Python has a built-in maths toolkit. Import it to use extra functions:

```python
import math

math.sqrt(16)      # Square root: 4
math.ceil(3.2)     # Round up: 4
math.floor(3.9)    # Round down: 3
math.pi            # The value of pi: 3.14159...
```

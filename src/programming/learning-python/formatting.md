---
title: Formatting
date: 2025-11-22
order: 11
---

### Formatting

Formatting controls how text and data appear when printed.

#### New line (`\n`)

```python
print("Hello\nWorld")
```

`\n` tells Python to start a new line.

So the output becomes:

```python
Hello
World
```

#### f-strings

```python
name = "Alice"
print(f"Hello, {name}")
```

An f-string lets you insert variable values directly into text using {}. {name} is replaced with the value stored in name. This is often the cleanest way to build strings.

### Formatting numbers and currency

```python
price = 9.456
print(f"{price:.2f}")   # 9.46
```

`:.2f` means "format this number with 2 decimal places". Python rounds the number for you.

- `.2` → two decimal places
- `f` → format as a floating-point number

```python
large = 1000000
print(f"{large:,}")     # 1,000,000
```

`:`, adds commas to large numbers to make them easier to read. Useful for things like money totals, file sizes, or populations.

```python
amount = 12.5
print(f"£{amount:.2f}")
```

You write the currency symbol yourself (£). Then `:.2f` ensures the value is shown with exactly two decimal places — the standard for currency.

### Aligning text

Alignment controls how text is positioned in a fixed space.

```python
print(f"{'Name':<10} {'Score':>5}")
print(f"{'Alice':<10} {95:>5}")
print(f"{'Bob':<10} {72:>5}")
```

Output:

```nginx
Name        Score
Alice          95
Bob            72
```

- 'Name': <10 → “Name” takes up 10 spaces, aligned to the left
- Score: >5 → “Score” takes up 5 spaces, aligned to the right
- The data lines follow the same alignment rules

This creates a simple, neat table that lines up correctly, even when text and numbers have different lengths.

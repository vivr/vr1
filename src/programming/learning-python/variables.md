---
title: Learning Python - Variables
shortTitle: Variables
date: 2025-11-18
order: 4
---

### Variables

#### Creating a variable

Pick a name and give it a value:

```python
name = "Alice"
age = 30
```

#### Using a variable

Use it anywhere in your code:

```python
print(name)      # Shows Alice
print(age + 5)   # Shows 35
```

#### Changing a variable

Assign a new value to replace the old one:

```python
age = 30
age = 31         # The old value (30) is forgotten
```

#### Good variable names

Your names should make sense:

- Start with a letter or underscore
- No numbers at the start
- No spaces
- Should describe what's inside

```python
first_name = "Sam"      # Good
total_score = 42        # Good
x = 10                  # Bad - doesn't describe anything
```

#### Dynamic typing

Python figures out the type as you go. You can change what type a variable holds:

```python
value = 10        # This is a number
value = "hello"   # Now it's text
```

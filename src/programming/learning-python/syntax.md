---
title: Learning Python - Syntax
shortTitle: Syntax
date: 2025-11-18
order: 2
---

### Python syntax basics

#### Variables

A variable is like a labelled box where you store information. You create a variable by giving it a name and putting a value in it using the equals sign (=).

```python
name = "Alice"
age = 25
```

Good variable names describe what's inside the box, so `user_age` is better than `ua`.

#### String quotes

Strings are text. You can write them with single quotes or double quotes—Python treats them the same.

```python
greeting = 'Hello'
greeting = "Hello"  # Both work exactly the same
```

For longer text that spans multiple lines, use triple quotes:

```python
message = """Hello,
this is a longer
message"""
```

You don't need to tell Python "this is text", it figures it out automatically when it sees quotes.

#### Data types

Python automatically knows what type of data you're storing. You don't have to tell it.

```python
name = "Alice"    # Python knows this is text
age = 25          # Python knows this is a number
```

If you need to change a value from one type to another, you can do that later using functions like `str()`, `int()`, or `float()`.

#### Case sensitivity

Python cares about uppercase and lowercase letters. These are three different variables:

```python
name = "Alice"
Name = "Bob"
NAME = "Charlie"
```

Also, `True` and `False` must start with a capital letter. Writing `true` or `false` will cause an error.

#### Naming conventions

Write variable names in lowercase with underscores between words. This is called "snake_case":

```python
my_variable = 10
user_age = 25
total_score = 100
```

Don't start names with numbers or use special characters (except underscores). These won't work:

```python
25_age = 25        # Wrong! Can't start with a number
user-age = 25      # Wrong! Can't use hyphens
```

#### Whitespace and indentation

Python uses indentation (pushing code in from the left) to organise code. Incorrect indentation breaks your program, so be careful to keep it consistent.

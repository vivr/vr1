---
title: Functions
date: 2025-11-18
order: 7
---

### Functions

A function is like a recipe that you write once and can use over and over again. Instead of writing the same instructions every time, you just call your function by name.

#### Defining a function

To create a function, use `def`, give it a name, add brackets, and a colon. Everything inside must be indented (pushed in).

```python
def say_hello():
    print("Hello!")
```

#### Calling a function

To use a function, write its name followed by brackets:

```python
say_hello()
```

This will run the code inside and print "Hello!".

#### Parameters and arguments

Functions can accept input values. Think of it like giving your recipe ingredients.

- **Parameters** are the ingredient names in your recipe.
- **Arguments** are the actual ingredients you use.

```python
def greet(name):
    print("Hi, " + name)

greet("Alice")
```

Here, `name` is the parameter (the placeholder). When you call the function, `"Alice"` is the argument (the actual value).

#### Return values

A function can give you back a value using `return`. This lets you save the result and use it later.

```python
def add_numbers(a, b):
    return a + b

answer = add_numbers(3, 5)
print(answer)  # Shows 8
```

The function calculates 3 + 5 and gives back **8**, which you store in `answer`.

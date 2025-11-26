---
title: Data Types
date: 2025-11-18
order: 3
---

### Data types

Think of data types as different kinds of boxes you can use to store different things.

#### Integer

A whole number with no decimal point:

```python
age = 25
temperature = -5
count = 0
```

#### Float

A number with a decimal point:

```python
price = 9.99
temperature = 36.5
percentage = 0.75
```

#### Boolean

Can only be `True` or `False`. Used for yes/no questions:

```python
is_raining = True
is_student = False
```

#### String

Text enclosed in quotes:

```python
name = "Alice"
city = 'London'
message = """This is
a multi-line
string"""
```

#### List

An ordered collection of items in square brackets. Lists can hold different types of data and you can change them:

```python
fruits = ['apple', 'banana', 'cherry']
numbers = [1, 2, 3, 4, 5]
mixed = [1, 'hello', 3.14]
```

#### Tuple

Like a list but in parentheses. Once created, you cannot change it:

```python
rgb = (255, 0, 128)
days = ('Monday', 'Tuesday', 'Wednesday')
```

#### Dictionary

Stores pairs of labels and values in curly braces. You look up information by its label (called a "key"):

```python
person = {'name': 'Alice', 'age': 25, 'city': 'London'}
```

To get a value, use its key:

```python
print(person['name'])  # Shows Alice
```

#### Set

An unordered collection of unique items. Duplicates are automatically removed:

```python
numbers = {1, 2, 3, 3, 4}  # Becomes {1, 2, 3, 4}
```

#### NoneType

Represents "nothing" or "no value". Useful as a placeholder:

```python
result = None
```

#### Finding out data types

Use `type()` to see what kind of data something is:

```python
print(type(25))           # Shows <class 'int'>
print(type("hello"))      # Shows <class 'str'>
print(type([1, 2, 3]))    # Shows <class 'list'>
```

#### Casting

Casting means converting data from one type to another:

```python
age = "25"              # This is text
age = int(age)          # Now it's a number
```

---
title: Learning Python - Strings
shortTitle: Strings
date: 2025-11-18
order: 6
---

### Strings

#### String concatenation

Concatenation means joining strings together.

#### Using the + operator

Stick strings together with `+`:

```python
greeting = "Hello" + " " + "World"
# Result: "Hello World"
```

You can also join string variables:

```python
first_name = "John"
last_name = "Doe"
full_name = first_name + " " + last_name
# Result: "John Doe"
```

#### Mixing strings and numbers

If you want to include a number in your string, convert it to text first using `str()`:

```python
age = 25
message = "I am " + str(age) + " years old"
# Result: "I am 25 years old"
```

Without `str()`, Python gets confused because it doesn't know how to mix text and numbers.

#### Joining multiple pieces

You can chain many pieces together:

```python
first_name = "Alice"
middle_name = "Marie"
last_name = "Smith"
full_name = first_name + " " + middle_name + " " + last_name
# Result: "Alice Marie Smith"
```

Or mix variables with plain text:

```python
city = "London"
country = "England"
message = "I live in " + city + ", " + country
# Result: "I live in London, England"
```

#### Storing concatenated strings

Save the result in a new variable for later use:

```python
street = "123 Main Street"
city = "London"
postcode = "SW1A 1AA"
full_address = street + ", " + city + ", " + postcode
# Now full_address contains the complete address
```

#### Different data types

Always convert non-text types to text before joining:

```python
name = "Bob"
age = 30
message = name + " is " + str(age) + " years old"
# Result: "Bob is 30 years old"
```

This works because we converted `age` (a number) into text with `str()`.

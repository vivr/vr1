---
title: Learning Python - Methods
shortTitle: Methods
date: 2025-11-22
order: 15
---

### What is a method?

A **method** is a function that belongs to a value. You call it with a dot after the value or variable name.

```python
greeting = "hello"
capitalised = greeting.capitalize()
print(capitalised)
# Output: Hello
```

`capitalize()` is a method that belongs to the string stored in greeting. It returns a new version of the string with the first letter made uppercase.

Methods do not always change the original value. For strings, methods like `upper()` return a **new** string, because strings are immutable.

#### Using dir() to see available methods

You can use `dir()` on a value or variable to see which methods it has.

```python
greeting = "hello"
print(dir(greeting))
```

This shows a list of methods you can use with strings.

#### Methods and brackets ()

Methods are written with brackets `()` at the end. Some methods need **arguments** inside the brackets.

```python
text = "hello hello"
print(text.count("hello"))
# Count how many times "hello" appears
```

Here, `"hello"` is an argument to `count()`.

Some methods need more than one argument:

```python
text = "I like cats"
new_text = text.replace("cats", "dogs")
print(new_text)
# Output: I like dogs
```

`replace()` needs two arguments: what to replace, and what to replace it with.

### String methods

#### Checking what a string contains

These methods return `True` or `False`.

```python
code = "12345"
print(code.isdigit())   # True

name = "Alice"
print(name.isalpha())   # True

space_only = "   "
print(space_only.isspace())  # True
```

- `isdigit()` checks if all characters are digits.
- `isalpha()` checks if all characters are letters.
- `isspace()` checks if the string only contains whitespace (spaces, tabs, new lines).

These are useful when validating user input.

#### Splitting strings

```python
text = "apples,bananas,oranges"
parts = text.split(",")
print(parts)
# Output: ['apples', 'bananas', 'oranges']
```

`split()` breaks a string into a list, using the separator you give it.

```python
lines = "First line\nSecond line\nThird line"
print(lines.splitlines())
# Output: ['First line', 'Second line', 'Third line']
```

`splitlines()` splits the string at line breaks.

#### Joining strings

```python
words = ["Python", "is", "fun"]
sentence = " ".join(words)
print(sentence)
# Output: Python is fun
```

`join()` does the opposite of `split()`. It takes a list of strings and joins them into one string, using the string before `.join()` as the separator.

#### Removing spaces

```python
text = "  hello  "
print(text.strip())
# 'hello'

print(text.lstrip())
# 'hello  '

print(text.rstrip())
# '  hello'
```

- `strip()` removes spaces from both ends.
- `lstrip()` removes spaces from the left (start).
- `rstrip()` removes spaces from the right (end).

This is useful when cleaning up user input or data from files.

#### Finding text

```python
message = "welcome to python"
print(message.find("to"))
# Output: 8
```

`find()` returns the index where the text starts, or `-1` if it is not found.

```python
print(message.index("to"))
# Output: 8
```

`index()` is similar, but it **raises an error** if the text is not found.

Use `find()` when you want a safe search, and `index()` when not finding the text should be treated as an error.

#### Replacing text

```python
sentence = "I like blue cars and blue bikes"
fixed = sentence.replace("blue", "red")
print(fixed)
# Output: I like red cars and red bikes
```

`replace()` changes all matches of one substring to another.

#### Counting text

```python
note = "test, test, test"
print(note.count("test"))
# Output: 3
```

`count()` tells you how many times a substring appears.

#### Checking start and end

```python
filename = "report.pdf"
print(filename.startswith("report"))  # True
print(filename.endswith(".pdf"))      # True
```

- `startswith()` checks if a string begins with the given text.
- `endswith()` checks if a string finishes with the given text.

These are useful for checking file types, prefixes, or simple patterns.

### Lambda functions

A **lambda function** is a tiny function you write in one line.  
It does not need a name and is often used when you only need the function once.

```python
double = lambda number: number * 2
print(double(5))
# Output: 10
```

This does the same job as:

```python
def double(number):
    return number * 2
```

Lambdas are useful when you want a quick, simple function without creating a full `def` block.

### map()

`map()` takes a function and applies it to every item in a list.

```python
numbers = [1, 2, 3, 4]

def add_one(n):
    return n + 1

new_list = list(map(add_one, numbers))
print(new_list)
# Output: [2, 3, 4, 5]
```

You can use `map()` with a lambda instead:

```python
new_list = list(map(lambda n: n + 1, numbers))
```

Many people prefer list comprehensions because they are easy to read:

```python
new_list = [n + 1 for n in numbers]
```

Even if you don’t use `lambda` or `map()` often, it helps to recognise them in other people's code.

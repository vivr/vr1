---
title: Learning Python - Slicing
shortTitle: Slicing
date: 2025-11-22
order: 12
---

### What is Slicing?

Slicing extracts part of a string or list.

```python
text = "Hello World"
print(text[0:5])   # Hello
```

#### Why start at 0?

Python uses zero-based indexing:

```python
H  e  l  l  o
0  1  2  3  4
```

#### Why the end number is not included

Slice numbers are **offsets**, not character positions.

For "Viv Reay":

```python
name = "Viv Reay"
first = name[0:3]
```

It includes index 0, 1, 2 and stops *before* offset 3.

#### Lists and slicing

```python
items = ["a", "b", "c", "d", "e"]
print(items[1:4])   # ['b', 'c', 'd']
```

### Summary

- Slicing extracts sections  
- Start index is included  
- End index is excluded  
- Works the same on strings and lists  

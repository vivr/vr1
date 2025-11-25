---
title: Learning Python - List Data Type
shortTitle: List Data Type
date: 2025-11-22
order: 8
---

### The List Data Type

A **list** is a collection of items stored in a specific order. Think of it as a row of boxes, where each box can hold a value. Unlike a variable that stores just one thing, a list can store many.

Lists are written with square brackets, and items are separated by commas:

```python
numbers = [10, 20, 30, 40]
names = ["Alice", "Bob", "Charlie"]
mixed = [1, "hello", 3.5]
```

Lists are useful because you can **add**, **remove**, and **change** items whenever you need to. This makes them one of the most common data types in Python.

#### Example: Using a list with `sum()`

```python
# List of daily steps taken over a week
daily_steps = [6540, 7120, 8030, 4990, 10220, 8870, 7600]

# Use sum() to add all values in the list
total_steps = sum(daily_steps)

# Print the total
print(total_steps)
```

#### More about the `sum()` function

`sum()` is a built-in Python function that adds together all the numbers in a list. It saves you from having to write your own loop.

```python
numbers = [10, 20, 30]
total = sum(numbers)
print(total)
# Result: 60
```

The list must contain numbers (integers or floats). If Python can’t add the items together, it will show an error.

### Common mistakes with `sum()`

#### Mixing data types

```python
values = [10, "20", 30]
sum(values)  # Error: Python can’t add text and numbers
```

#### Using it on strings

```python
names = ["Alice", "Bob"]
sum(names)  # Error: sum() cannot add text together
```

#### Trailing commas creating unintended lists

```python
numbers = [10, 20, 30,]  # This is fine
numbers = [10, 20, "30",]  # This will break sum()
```

If you stick to a list of numbers, `sum()` works perfectly every time.

#### Example: Adding, removing, and inserting items

This example shows how websites might track recently viewed items:

```python
# A list of recently viewed items on a website
recently_viewed = ["Laptop", "Headphones", "Desk Chair"]

# Add a new item the user just clicked on
recently_viewed.append("Monitor")

# Insert an item that was viewed again, so it moves to the top
recently_viewed.insert(0, "Laptop Stand")

# Remove an item that the system decides to clear out (oldest view)
recently_viewed.remove("Headphones")

# Show the first two items for a small homepage preview
preview_items = recently_viewed[:2]

# Print the final list and the preview
print(recently_viewed)
print(preview_items)

# Step-by-step result:
# Start: ["Laptop", "Headphones", "Desk Chair"]
# After append("Monitor"): ["Laptop", "Headphones", "Desk Chair", "Monitor"]
# After insert(0, "Laptop Stand"): ["Laptop Stand", "Laptop", "Headphones", "Desk Chair", "Monitor"]
# After remove("Headphones"): ["Laptop Stand", "Laptop", "Desk Chair", "Monitor"]
# preview_items = ["Laptop Stand", "Laptop"]

# Final output:
# ["Laptop Stand", "Laptop", "Desk Chair", "Monitor"]
# ["Laptop Stand", "Laptop"]
```

### append() vs insert()

Both methods add new items to a list, but they place them in different positions.

#### append()

Adds an item **to the end** of the list.
Use this when you simply want to add something new without changing the order.

```python
items = ["a", "b", "c"]
items.append("d")
# Result: ["a", "b", "c", "d"]
```

#### insert()

Adds an item **at a specific position**.
You choose the index to place the item (position 0 is the start).

```python
items = ["a", "b", "c"]
items.insert(1, "x")
# Result: ["a", "x", "b", "c"]
```

#### Quick summary

* **append()** → adds to the end
* **insert()** → adds wherever you tell it

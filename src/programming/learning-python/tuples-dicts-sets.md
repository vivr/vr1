---
title: Learning Python - Tuples, Dictionaries and Sets
shortTitle: Tuples, Dictionaries and Sets
date: 2025-11-22
order: 14
---

### What is a tuple?

A tuple is a collection of items, similar to a list, but the key difference is that **tuples cannot be changed**. This means you cannot add, remove, or modify items once the tuple is created.

```python
coordinates = (54.97, -1.60)
```

Tuples are useful when you want data to stay the same, such as settings, fixed information, or results loaded from a database.

#### How is a tuple different from a list?

- A **list** is *mutable* (you can change it).  
- A **tuple** is *immutable* (you cannot change it).

```python
numbers = [10, 20, 30]
numbers[1] = 99
# Result: [10, 99, 30]
```

Trying to change a tuple will cause an error:

```python
fixed_numbers = (10, 20, 30)
# fixed_numbers[1] = 99  # Not allowed
```

#### Why use a tuple?

- To protect data from being changed by accident  
- To improve speed in large programs (tuples are slightly faster than lists)  
- To store data that should stay constant  

### What is a dictionary?

A dictionary stores data in **key–value pairs**. The *key* is a label, and the *value* is the information connected to it. Keys can be numbers or strings and values can be any data type.

```python
person = {
    "name": "Alice",
    "age": 30
}
```

#### Accessing values

```python
print(person["name"])
# Output: Alice
```

#### Adding information to a dictionary

```python
person = {"name": "Alice"}
person["city"] = "London"
```

This adds a new key–value pair.

#### Using `pop()`

`pop()` removes a key–value pair by its key. Useful when you want to delete information safely.

```python
person.pop("city")
```

#### Using `update()`

`update()` adds or changes multiple key–value pairs at once.

```python
person.update({"age": 31, "city": "London"})
```

#### Dictionaries inside dictionaries (nested dictionaries)

```python
user = {
    "username": "alice01",
    "address": {
        "street": "North Road",
        "city": "Newcastle"
    }
}
```

Access inner values like this:

```python
print(user["address"]["city"])
```

#### Looping through a dictionary with `items()`

`items()` gives you both the key and the value.

```python
for key, value in person.items():
    print(key, value)
```

### What is a set?

A set is a collection that **automatically removes duplicate values**.

```python
scores = set([10, 10, 20, 30])
# Result: {10, 20, 30}
```

#### Sets are useful when:

- You want only unique items  
- You need fast membership checks  

#### Storing a set in a variable

```python
unique_names = {"Alice", "Bob", "Alice"}
# Result: {"Alice", "Bob"}
```

#### Common set methods

```python
numbers = {1, 2, 3}
numbers.add(4)         # Add a value
numbers.discard(2)     # Remove a value
numbers2 = {3, 4, 5}

numbers.union(numbers2)        # Combine sets
numbers.intersection(numbers2) # Shared values
numbers.difference(numbers2)   # Values only in the first set
```

### Summary

#### Tuples

- Use brackets: `( )`
- Immutable (cannot change)
- Best for fixed data

#### Dictionaries

- Use `{ }`
- Key–value pairs
- Can be nested

#### Sets

- Use `set()`
- No duplicates
- Fast for comparisons

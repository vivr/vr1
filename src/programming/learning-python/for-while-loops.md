---
title: For and While Loops
date: 2025-11-22
order: 13
---

### For loops

A **for loop** lets you repeat code without writing the same line many times. It is useful when you want to perform the same action for every item in a list.

#### Without a for loop (the long way)

```python
print("Buy milk")
print("Buy bread")
print("Buy apples")
print("Buy coffee")
print("Buy pasta")
```

#### With a for loop (shorter and cleaner)

```python
shopping = ["milk", "bread", "apples", "coffee", "pasta"]

for item in shopping:
    print("Buy " + item)
```

**Explanation:**  
`for item in shopping` means: "Go through each item in the list called `shopping`, and for each one, run the code inside the loop."

### Using `break` in a for loop

`break` stops the loop early.

```python
tasks = ["email", "report", "meeting", "break", "presentation"]

for task in tasks:
    if task == "break":
        print("Taking a break now.")
        break
    print("Working on:", task)
```

**Explanation:**  
The loop stops as soon as it reaches `break`. This is useful when you only want to loop *until* something happens.

### Using `range()` in a for loop

`range()` lets you loop a set number of times.

```python
for number in range(5):
    print("Loop number:", number)
```

**Explanation:**  
`range(5)` creates numbers 0, 1, 2, 3, 4. It is useful when you want a loop to run a specific number of times.

### While loops

A **while loop** runs *while a condition is true*. It stops when the condition becomes false.

#### Simple while loop example

```python
count = 1

while count <= 3:
    print("Count is:", count)
    count += 1
```

**Explanation:**  
The loop repeats until `count` becomes greater than 3.

#### While loop with a for loop inside

```python
attempts = 0

while attempts < 2:
    print("Attempt:", attempts + 1)

    for letter in ["A", "B", "C"]:
        print("Checking option:", letter)

    attempts += 1
```

**Explanation:**  
The `while` loop runs twice. Inside it, the `for` loop runs through the list `["A", "B", "C"]` each time. This is helpful when you need repeated cycles, and each cycle has several steps.

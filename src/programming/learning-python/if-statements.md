---
title: If Statements
date: 2025-11-22
order: 9
---

### If statements

An **if statement** lets your program make decisions. Python checks a condition, and if it’s true, the code underneath runs.

Use `==` to compare values (two equals signs), and always end the line with a **colon**. Anything inside the if block must be **indented**.

```python
age = 20

if age >= 18:
    print("You can create an account.")
else:
    print("You must be 18 or over.")
```

#### Nested if statements

A nested `if` is simply an **if statement inside another if statement**. This is useful when you need more than one check.

```python
password = "secret123"
entered = input("Enter your password: ")

if entered != password:
    print("Incorrect password.")
else:
    print("Login successful.")
    two_factor = input("Enter your 2FA code: ")

    if two_factor != "1234":
        print("Incorrect 2FA code.")
    else:
        print("Access granted.")
```

### elif

`elif` means "else if". It lets you check several conditions one after another.

```python
temperature = int(input("What is the temperature? "))

if temperature < 0:
    print("It is freezing today.")
elif temperature < 15:
    print("It is cold outside.")
elif temperature < 25:
    print("The weather is mild.")
else:
    print("It is warm today.")
```

### Not equals (!=)

Use `!=` to check whether two values **do not match**.

```python
answer = input("Enter Y or N: ")

if answer != "Y":
    print("You did not enter Y.")
```

### and

Use `and` when **both conditions must be true**.

```python
age = 25
has_id = True

if age >= 18 and has_id:
    print("Entry allowed.")
```

### or

Use `or` when **at least one condition needs to be true**.

```python
day = input("Enter a day: ")

if day == "Saturday" or day == "Sunday":
    print("It is the weekend!")
else:
    print("It is a weekday.")
```

#### A common mistake with `or`

Beginners sometimes write this:

```python
if choice == "A" or "B":  # This always evaluates as True
```

The correct way is:

```python
if choice == "A" or choice == "B":
```

Or shorter:

```python
if choice in ["A", "B"]:
```

### Understanding the difference between `else` and `elif`

It helps to think about how many outcomes your code needs to handle.

#### Use `else` when there are only two possibilities

`else` covers "anything that wasn’t caught above".

```python
if code == "1234":
    print("Access granted.")
else:
    print("Incorrect code.")
```

There are only two outcomes:

1. Correct code
2. Anything else  

#### Use `elif` when you have more than two options

Each `elif` checks for an extra, separate condition.

```python
if grade >= 90:
    print("A")
elif grade >= 80:
    print("B")
elif grade >= 70:
    print("C")
else:
    print("Below C")
```

#### Quick summary

- `if` → first check  
- `elif` → extra checks  
- `else` → everything else  

#### Example

```python
status = input("Enter status: online, away, or offline: ")

if status == "online":
    print("User is active.")
elif status == "away":
    print("User is idle.")
else:
    print("User is offline.")
```

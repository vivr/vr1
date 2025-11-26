---
title: Match and Case
date: 2025-11-22
order: 10
---

### Match and case

`match` and `case` let you check a value against several patterns. It works like a clean, modern alternative to multiple `elif` statements.

#### Basic example

```python
status = input("Enter status: ")

match status:
    case "online":
        print("User is online.")
    case "away":
        print("User is away.")
    case "offline":
        print("User is offline.")
    case _:
        print("Unknown status.")
```

### Nested match and case

```python
action = input("Choose action: view, edit, or delete: ")
role = input("Enter role: admin or user: ")

match action:
    case "view":
        print("Viewing item.")
    case "edit":
        match role:
            case "admin":
                print("Edit allowed.")
            case _:
                print("Edit not allowed for this role.")
    case "delete":
        match role:
            case "admin":
                print("Item deleted.")
            case _:
                print("Only admins can delete.")
    case _:
        print("Unknown action.")
```

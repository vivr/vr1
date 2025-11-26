---
title: OOP and Classes
date: 2025-11-26
order: 16
---

### Object Oriented Programming (OOP)

OOP is a way of organising code by putting related data and functions together into **classes**.  

- A **class** is a blueprint.  
- An **instance** (or object) is something built from that blueprint.

### Creating a class

```python
class Person:
    def __init__(self, name):
        self.name = name
        print("Created person:", name)

person1 = Person("Alice")
person2 = Person("Ben")

# Output:
# Created person: Alice
# Created person: Ben
```

Each time you create a `Person`, you get a separate **instance**.

### Methods inside classes

A method is a function that belongs to a class. Methods always take `self` so they can access data stored in the object.

```python
class Person:
    def __init__(self, name):
        self.name = name

    def say_hello(self):
        print(self.name, "says hello.")

p = Person("Mia")
p.say_hello()

# Output:
# Mia says hello.
```

### The self keyword

`self` refers to the **current object**.  It lets you read and change data stored inside that object.

```python
class Pet:
    def __init__(self, name):
        self.name = name

    def speak(self):
        print(self.name, "makes a sound.")

cat = Pet("Willow")
dog = Pet("Rex")

cat.speak()
dog.speak()

# Output:
# Willow makes a sound.
# Rex makes a sound.
```

### Class attributes vs instance attributes

#### Instance attributes

Unique for each object.

```python
self.name
self.age
```

#### Class attributes

Shared across every instance.

```python
class Animal:
    species = "Mammal"   # class attribute

    def __init__(self, name):
        self.name = name   # instance attribute

a = Animal("Tiger")
b = Animal("Lion")

print(a.species)
print(b.species)

# Output:
# Mammal
# Mammal
```

### Inheritance

Inheritance allows one class to reuse code from another.

```python
class Device:
    def power_on(self):
        print("Device is now on.")

class Phone(Device):
    pass

my_phone = Phone()
my_phone.power_on()

# Output:
# Device is now on.
```

#### Overriding methods

A subclass can replace a method from its parent.

```python
class Device:
    def power_on(self):
        print("Powering on...")

class Laptop(Device):
    def power_on(self):
        print("Laptop booting up...")

lap = Laptop()
lap.power_on()

# Output:
# Laptop booting up...
```

### Encapsulation

Encapsulation helps hide internal details. Making attributes private protects them.

```python
class Wallet:
    def __init__(self, amount):
        self.__amount = amount   # private

    def add(self, value):
        self.__amount += value

    def get_balance(self):
        return self.__amount

w = Wallet(50)
w.add(20)
print(w.get_balance())

# Output:
# 70
```

Trying to access `w.__amount` directly will fail.

### Magic (Dunder) methods

These special methods begin and end with double underscores.

```python
class Book:
    def __init__(self, title):
        self.title = title

    def __str__(self):
        return f"Book: {self.title}"

b = Book("Python Basics")
print(b)

# Output:
# Book: Python Basics
```

#### Useful magic methods

- `__str__` — how the object is printed  
- `__len__` — length of an object  
- `__eq__` — how two objects are compared  
- `__add__` — what it means to “add” two objects  

### Composition and aggregation

Composition means one object contains another as part of how it works.

```python
class Engine:
    def start(self):
        print("Engine started.")

class Car:
    def __init__(self):
        self.engine = Engine()   # composition

car = Car()
car.engine.start()

# Output:
# Engine started.
```

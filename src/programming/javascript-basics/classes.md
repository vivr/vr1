---
title: Classes
date: 2023-10-28
order: 19
---

### Classes

Classes are a way to create objects and implement object-oriented programming concepts. Classes provide a convenient syntax for creating objects and defining their behavior. When using classes, the `this` keyword is commonly used to refer to the current instance of the class within its methods.

```javascript
class Workshop {
  constructor(teacher) {
    this.teacher = teacher;
  }
  ask(question) {
    console.log(this.teacher, question);
  }
}

var deepJS = new Workshop("Kyle");
var reactJS = new Workshop("Suzy");

deepJS.ask("Is 'class' a class?");
// Kyle Is 'class' a class?

reactJS.ask("Is this class OK?");
// Suzy Is this class OK?
```

This code defines a class called `Workshop`.

- The `Workshop` class is defined with a `constructor` method and an `ask` method.
- The `constructor` method is a special method called when a new instance of the class is created. It initialises the `teacher` property of the instance with the value passed as an argument.
- The `ask` method is a custom method that logs a message to the console using the `teacher` property and a provided `question`.
- Two instances of the `Workshop` class, `deepJS` and `reactJS`, are created using the `new` keyword. Each instance is associated with a specific teacher (`"Kyle"` for `deepJS` and `"Suzy"` for `reactJS`).
- The `ask` method is called on each instance, passing a specific question.
- Each call to `ask` logs a message to the console, combining the teacher's name (`this.teacher`) and the question passed to the method.

The usage of the class demonstrates how different instances of the same class can have different property values while sharing the same methods.

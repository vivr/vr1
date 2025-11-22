---
title: JS Basics - Implicit Binding
shortTitle: Implicit Binding
date: 2023-10-28
order: 18
---

### Implicit Binding

The **this** keyword refers to the context in which a function is executed. Its value is determined by how a function is invoked.

```javascript
var workshop = {
  teacher: "Kyle",
  ask(question) {
    console.log(this.teacher, question);
  },
};

workshop.ask("What is implicit binding?");
// Kyle What is implicit binding?
```

In this code snippet, `this.teacher` is part of an object method, and its value is implicitly set to the object on which the method is called. This is known as **implicit binding**.

- `var workshop` is an object with a property `teacher` and a method `ask`.
- The `ask` method takes a parameter `question` and logs the combination of `this.teacher` and the `question` parameter.
- `workshop.ask("What is implicit binding?");` invokes the `ask` method on the `workshop` object.
- When a method is invoked, the `this` keyword inside the method refers to the object on which the method was called, which, in this case, is `workshop`.
- The `console.log(this.teacher, question);` logs the value of `this.teacher` (which is "Kyle" because it refers to the `teacher` property of the `workshop` object) along with the provided `question` parameter.

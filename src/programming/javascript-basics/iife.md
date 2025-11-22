---
title: JS Basics - IIFE
shortTitle: IIFE
date: 2023-10-28
order: 15
---

### IIFE

IIFE stands for **Immediately Invoked Function Expression**. It is a design pattern in JavaScript where a function is defined and executed immediately after its creation. The primary purpose of an IIFE is to create a new scope for variables, preventing them from polluting the global scope.

```javascript
var teacher = "Kyle";

(function anotherTeacher() {
  var teacher = "Suzy"; // Suzy
  console.log(teacher);
})();

console.log(teacher); // Kyle
```

In this code, there's an Immediately Invoked Function Expression (IIFE) that defines a function named `anotherTeacher`. Inside the IIFE, there's a local variable `teacher` assigned the value "Suzy," and it is logged to the console using `console.log(teacher);`

- `var teacher = "Kyle";` declares a global variable named `teacher` with the initial value "Kyle."
- `(function anotherTeacher() { ... })();` defines an IIFE with the function name `anotherTeacher`.
- Inside the IIFE, a local variable `teacher` is declared with the value "Suzy," and this value is logged to the console.
- The IIFE logs "Suzy" to the console.
- `console.log(teacher);` outside the IIFE logs the value of the global variable `teacher`, which is "Kyle."

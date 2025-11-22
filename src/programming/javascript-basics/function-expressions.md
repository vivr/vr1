---
title: JS Basics - Function Expressions
shortTitle: Function Expressions
date: 2023-10-28
order: 14
---

### Function Expressions

A **function expression** is a way to define a function as part of an expression, rather than as a declaration. In other words, it involves assigning a function to a variable or passing it as an argument to another function.

Here's a basic example of a function expression:

```javascript
var add = function (x, y) {
  return x + y;
};

console.log(add(3, 5)); // Output: 8
```

In this example:

- `function(x, y) { return x + y; }` is an anonymous function (a function without a name).
- The entire expression `var add = function(x, y) { return x + y; };` assigns this anonymous function to the variable `add`.

Function expressions have a few key characteristics:

- **Anonymous Functions:**

  - In the example above, the function lacks a name. It is referred to using the variable (`add` in this case).

- **Assignment:**

  - The function is assigned to a variable (`add`), making it possible to reference and use the function through that variable.

- **Flexibility:**
  - Function expressions are very flexible. They can be used in various ways, such as being passed as arguments to other functions, assigned to object properties, or used as immediately invoked function expressions (IIFE).

Here's an example of using a function expression as an argument to another function:

```javascript
var result = (function (x, y) {
  return x * y;
})(4, 6);

console.log(result); // Output: 24
```

In this case, the function expression is immediately invoked, and its result is assigned to the variable `result`.

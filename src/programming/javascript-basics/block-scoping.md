---
title: JS Basics - Block Scoping
shortTitle: Block Scoping
date: 2023-10-28
order: 16
---

### Block Scoping

Block scoping refers to the way variables are scoped within a block of code, typically defined by a pair of curly braces `{}`. Prior to the introduction of ECMAScript 6 (ES6), JavaScript had function-level scoping, meaning that variables declared inside a function were only accessible within that function.

With the introduction of the `let` and `const` keywords in ES6, JavaScript gained block-scoping capabilities. Variables declared with `let` and `const` are scoped to the nearest enclosing block, which can be a statement or a set of curly braces.

```javascript
var teacher = "Kyle";

{
  let teacher = "Suzy";
  console.log(teacher); // Suzy
}

console.log(teacher); // Kyle
```

- `var teacher = "Kyle";` declares a variable `teacher` in the global scope and assigns the value "Kyle" to it.
- `{}` defines a block. Inside this block, `let teacher = "Suzy";` declares a new variable `teacher` that is block-scoped to the curly braces. This `teacher` variable has a local scope within the block and does not affect the value of the global `teacher`.
- `console.log(teacher);` inside the block logs the value of the block-scoped `teacher`, which is "Suzy."
- `console.log(teacher);` outside the block logs the value of the global `teacher`, which is "Kyle."

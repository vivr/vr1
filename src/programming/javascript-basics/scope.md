---
title: Scope
date: 2023-10-28
order: 12
---

### Scope

In JavaScript, the term "scope" refers to the context in which variables are declared and can be accessed. There are two main types of scope, **Global** and **Local**.

#### Global Scope

Variables declared outside any function or block have global scope and can be accessed throughout the entire program.

#### Local Scope

Variables declared within a function or block have local scope and are only accessible within that specific function or block.

```javascript
var teacher = "Kyle";

function otherClass() {
  teacher = "Suzy";
  topic = "React";
  console.log("Welcome!");
}

otherClass(); // Welcome!

teacher;
topic;
```

In this code snippet, there is a global variable `teacher` initialised with the value "Kyle." Additionally, there is a function called `otherClass` that is invoked. Within the `otherClass` function, there are two assignments:

- `teacher = "Suzy";`: This modifies the global variable `teacher` and changes its value to "Suzy."
- `topic = "React";`: This creates a new variable named `topic` without using the `var`, `let`, or `const` keyword. In JavaScript, if you assign a value to a variable without declaring it using `var`, `let`, or `const`, it becomes a global variable. So, `topic` would also become a global variable in this case.

The `console.log("Welcome!");` statement logs "Welcome!" to the console when the `otherClass` function is invoked.

After calling `otherClass()`, the code then has two expressions:

- `teacher;`: This expression is not assigned to anything, so it doesn't produce any visible output in most environments. However, it effectively retrieves the value of the global variable `teacher`.
- `topic;`: Similar to the first expression, this retrieves the value of the global variable `topic`, which was created inside the `otherClass` function.

It's worth noting that relying on implicitly creating global variables by omitting the `var`, `let`, or `const` keyword is generally not considered good practice, as it can lead to unexpected behavior and make the code harder to maintain. It's recommended to always declare variables using `var`, `let`, or `const` to explicitly specify their scope.

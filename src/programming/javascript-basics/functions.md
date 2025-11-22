---
title: JS Basics - Functions
shortTitle: Functions
date: 2023-10-28
order: 9
---

### Functions

Functions are like mini-programs that group together code blocks to perform specific tasks. They can make your code cleaner, reusable, and easier to manage. Functions can return values using the return keyword. The returned value can be used by other functions or assigned to variables.

```javascript
function greetStudent(student) {
  console.log(`Hello, ${student.name}!`);
}
```

The interpolated string, also known as a template literal, is created using backticks in JavaScript. It allows you to embed expressions within the string. In this case, it’s dynamically inserting the value of `student.name` into the string. So, if `student.name` is, for instance, "John", the resulting string would be _“Hello, John!”_.

```javascript
function timeRemaining(timeElapsed, endTime) {
  return endTime - timeElapsed;
}

var left = timeRemaining(42, 240);

left; // 198
```

The function `timeRemaining` calculates the time remaining by subtracting `timeElapsed` from `endTime`. We are calling the function with `timeElapsed` set to 42 and `endTime` set to 240. The result, `left`, would be the time remaining, which is 240 - 42 = 198.

---
title: JS Basics - Coercion
shortTitle: Coercion
date: 2023-10-28
order: 10
---

### Coercion

Coercion in JavaScript refers to the process of converting a value from one type to another.

#### String Concatenation (Number to String)

```javascript
var msg1 = "There are ";
var numStudents = 16;
var msg2 = " students.";
console.log(msg1 + numStudents + msg2);
// "There are 16 students."
```

When you use the `+` operator between a string and a number, JavaScript converts the number to a string before concatenating. So, `numStudents` gets implicitly converted to a string, and then all three strings are concatenated together.

```javascript
var numStudents = 16;

console.log(`There are ${numStudents + ""} students.`);
// "There are 16 students."
```

The `numStudents + ""` part ensures that the numeric value of `numStudents` is coerced into a string before being included in the template literal.

#### String to Number

```javascript
function addAStudent(numStudents) {
  return numStudents + 1;
}
addAStudent(Number(studentInputElem.value));
// 17
```

The `Number` function is used to convert the value obtained from `studentInputElem.value` into a number.

#### Boolean Coercion

In JavaScript, boolean coercion involves converting values to either `true` or `false` based on their truthiness or falsiness. The falsy values in JavaScript include `false`, `0`, `""` _(empty string)_, `null`, `undefined`, and `NaN`. All other values are considered truthy.

```javascript
while (newStudents.length > 0) {
  enrollStudent(newStudents.pop());
}
```

`newStudents.length > 0` is checking whether the length of the `newStudents` array is greater than 0. If the length is greater than 0, it evaluates to `true`, indicating that there are still elements in the array. The `while` loop continues to execute as long as the condition in parentheses is `true`. The boolean coercion happens implicitly in the `while` loop condition, where the truthiness of the expression is determined by whether the array length is greater than 0.

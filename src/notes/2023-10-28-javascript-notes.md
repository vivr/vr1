---
title: Javascript Basics
pageId: js
eleventyNavigation:
  key: Javascript Basics
---

### What is Javascript?

Javascript is a programming language widely used for changing things that happen in the web browser. The language can be used as part of web pages on the client-side and can also be used on the server-side with node.js.

### Values

Values are the data types that can be assigned to variables and manipulated in code. The basic data types in JavaScript are:

- **Number:** Numeric values.
- **String:** Textual data.
- **Boolean:** True or false values.
- **Null:** Represents the intentional absence of any object value.
- **Undefined:** Denotes an uninitialised variable.
- **Object:** A collection of key-value pairs.

### Fundamental Objects

JavaScript fundamental objects are essential built-in objects that provide basic functionalities in the language. Some key fundamental objects include:

- **Object:** The base object from which all other objects inherit.
- **Array:** Used to store and manipulate lists of items.
- **Function:** Functions in JavaScript are objects and are used to define reusable blocks of code.
- **Date:** Allows working with dates and times.
- **RegExp (Regular Expression):** Enables pattern matching with strings.
- **Error:** Represents runtime errors and provides information about them.

### Operators

Operators have **operands**. An operand is the value that is going to be operated on by the operator. For example, `3 + 4`. The operator is `+` and the operands are `3` and `4`. These could also be referred to as the left operand _(3 in this case)_ and the right operand _(4 in this case)._ If the operator has two operands then it is called a binary operator. If the operator only involves one operand then it is called a unary operator.

#### Math operators

- `+`: add two numbers.
- `-`: subtract two numbers.
- `*`: multiply two numbers.
- `/`: divide two numbers.
- `%`: divide two numbers, yield remainder.
- `**`: exponentation (e.g. `2 ** 3 = 8`) It raises the left operand to the power of the right operand.

#### Assignment Operators

- `=`: assign value to variable.
- `+=`: adds the right operand to the left operand and assigns the result to the left operand.
- `-=`: subtracts the right operand from the left operand and assignd the result to the left operand.
- `\*=`: multiplies the left operand by the right operand and assigns the result to the left operand.
- `/=`: divides the left operand by the right operand and assigns the result to the left operand.
- `%=`: computes the remainder when dividing the left operand by the right operand and assigns the result to the left operand.

#### String concatenation

Concatenation typically refers to the process of combining strings or values together. You can use the `+` operator to concatenate strings.

#### Boolean operators

Booleans are used to determine whether or not a block gets executed, where any defined variable that is neither zero nor an empty string is treated as true.

- `AND(&&)`: true if ALL are true.
- `OR(||)`: true if ONE is true.
- `NOT(!)`: inverts true/false value.

#### Comparison Operators

JavaScript comparisons are used to determine whether two values are equal or not.

- `==`: two values are equal if they have the same value, regardless of their data types.
- `===`: two values are equal if they have the same value and the same data type.
- `!=`: two values are not equal if they do not have the same value.
- `!==`: two values are _strictly_ not equal if they do not have the same value or the same data type.
- `>`: checks if the first value is greater than the second value.
- `<`: checks if the first value is less than the second value.
- `>=`: checks if the first value is greater than or equal to the second value.
- `<=`: checks if the first value is less than or equal to the second value.

### Variables

Variables are used to store and manage data. You can think of a variable as a named container that holds a value. This value can be a number, string, object, or any other data type. Variables provide a way to store information in your program and reference it later. When we declare a variable it looks like this: `var name = viv;`.

In Javascript, `const` is a keyword used to declare a constant variable. Once a variable is defined with `const`, its value cannot be reassigned. However, it's important to note that `const` does not make the variable itself immutable; it only prevents reassignment of the variable reference. Use `const` when you want to ensure that a variable's value remains constant throughout its scope.

### Expressions and Statements

In JavaScript, expressions are like building blocks that produce values, while statements are complete instructions or actions that end with a semicolon.

An example statement is `let age = 50;`. The expression inside this statement is `age = 50` _(this is an assignment expression)_.

### Decisions

A decision is typically implemented using conditional statements. These statements allow your code to make decisions based on certain conditions. The most common ones are `if` and `else`. They enable your program to execute different blocks of code depending on whether a specified condition evaluates to true or false.

The `if` statement takes a condition as its argument, and if the condition is true, then the block of code following the `if` statement is executed. The `else` statement is used to specify code that should be executed if the condition in the `if` statement is false.

### Loops

A loop is a way to repeat a block of code multiple times.

#### for loops

```javascript
var students = [ "Matt", "Sarah", "Susan" ];

for (let student of students) {
  greetStudent( student );
}
```

This code defines an array of students, iterates over the array and calls a function (`greetStudent`) for each student

#### while loops

```javascript
var students = [ "Matt", "Sarah", "Susan" ];

while (students.length > 0) {
  let student = students.pop();
    greetStudent(student);
}
```

This code is using a `while` loop to iterate over the `students` array in reverse order and call the `greetStudent` function for each student.

The `while` loop continues to pop students from the array and greet them until the array is empty. The `pop` method modifies the original array by removing the last element and returning it, which is why the loop runs until the length of the array becomes 0. The result is that the students are greeted in reverse order: first Susan, then Sarah, and finally Matt.

### Functions

Functions are like mini-programs that group together code blocks to perform specific tasks. They can make your code cleaner, reusable, and easier to manage. Functions can return values using the return keyword. The returned value can be used by other functions or assigned to variables.

```javascript
function greetStudent(student) {
  console.log( 
	`Hello, ${student.name}!` 
  );
}
```

The interpolated string, also known as a template literal, is created using backticks in JavaScript. It allows you to embed expressions within the string. In this case, it’s dynamically inserting the value of `student.name` into the string. So, if `student.name` is, for instance, “John,” the resulting string would be _“Hello, John!”_.

```javascript
function timeRemaining(timeElapsed,endTime) {
  return endTime - timeElapsed;
}

var left = timeRemaining(42,240);

left; // 198
```

The function `timeRemaining` calculates the time remaining by subtracting `timeElapsed` from `endTime`. We are calling the function with `timeElapsed` set to 42 and `endTime` set to 240. The result, `left`, would be the time remaining, which is 240 - 42 = 198.

### Coercion

Coercion in JavaScript refers to the process of converting a value from one type to another.

#### String Concatenation (Number to String)

```javascript
var msg1 = "There are ";
var numStudents = 16;
var msg2 = " students."
console.log(msg1 + numStudents + msg2);
// "There are 16 students."
```

When you use the `+` operator between a string and a number, JavaScript converts the number to a string before concatenating. So, `numStudents` gets implicitly converted to a string, and then all three strings are concatenated together.

```javascript
var numStudents = 16;

console.log(
  `There are ${numStudents+""} students.` 
);
// "There are 16 students."
```

The `numStudents + ""` part ensures that the numeric value of `numStudents` is coerced into a string before being included in the template literal.

#### String to Number

```javascript
function addAStudent(numStudents) {
  return numStudents + 1
}
addAStudent(
  Number(studentInputElem.value)
);
// 17
```

The `Number` function is used to convert the value obtained from `studentInputElem.value` into a number.

#### Boolean Coercion

In JavaScript, boolean coercion involves converting values to either `true` or `false` based on their truthiness or falsiness. The falsy values in JavaScript include `false`, `0`, `""` *(empty string)*, `null`, `undefined`, and `NaN`. All other values are considered truthy.

```javascript
while (newStudents.length > 0) {
  enrollStudent(newStudents.pop());
}
```

`newStudents.length > 0` is checking whether the length of the `newStudents` array is greater than 0. If the length is greater than 0, it evaluates to `true`, indicating that there are still elements in the array. The `while` loop continues to execute as long as the condition in parentheses is `true`. The boolean coercion happens implicitly in the `while` loop condition, where the truthiness of the expression is determined by whether the array length is greater than 0.

### Equality Testing

In JavaScript, the `==` (double equals) and `===` (triple equals) are comparison operators used for equality testing.

#### Double Equals (`==`)

- Performs type coercion before making the comparison.
- If the operands have different types, JavaScript tries to convert them to a common type before making the comparison.
- For example, `"5" == 5` will be `true` because the string `"5"` is coerced into the number `5` for the comparison.

#### Triple Equals (`===`)

- Does not perform type coercion; it checks both value and type for equality.
- If the operands have different types, the comparison evaluates to `false`.
- For example, `"5" === 5` will be `false` because the string and number are of different types.

In general, it's recommended to use `===` for strict equality checks because it avoids unexpected type coercion.

### Scope

In JavaScript, the term "scope" refers to the context in which variables are declared and can be accessed. There are two main types of scope, **Global** and **Local**.

#### Global Scope

Variables declared outside any function or block have global scope and can be accessed throughout the entire program.

#### Local Scope

Variables declared within a function or block have local scope and are only accessible within that specific function or block.

### Sources

- [MDN web docs - JavaScript reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- [Javascript - Wikibooks](https://en.wikibooks.org/wiki/JavaScript)
- [The Complete JavaScript Course: From Zero to Expert!](https://www.udemy.com/course/the-complete-javascript-course/)
- [JavaScript - The Complete Guide (Beginner + Advanced)](https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/)
- [Getting Started with Javascript v2 by Kyle Simpson (2019)](https://frontendmasters.com/courses/getting-started-javascript-v2/)

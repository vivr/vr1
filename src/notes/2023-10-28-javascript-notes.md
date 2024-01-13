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
- `-=`: subtracts the right operand from the left operand and assigns the result to the left operand.
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
var students = ["Matt", "Sarah", "Susan"];

for (let student of students) {
  greetStudent(student);
}
```

This code defines an array of students, iterates over the array and calls a function (`greetStudent`) for each student

#### while loops

```javascript
var students = ["Matt", "Sarah", "Susan"];

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

### Undefined vs Undeclared

**Undefined** is a value that a declared variable or function can have when it has not been assigned a value or has no explicit return value.

**Undeclared** refers to using a variable that has not been declared using `var`, `let`, or `const`, and it can lead to different behaviors depending on whether you are in strict mode or not. In strict mode, it results in a reference error, and in non-strict mode, it creates a global variable.

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

### Closure

Closures allow functions to remember and access variables from their outer (enclosing) scope, even after the outer function has finished executing. They are created when a function is defined within another function, forming a "closed-over" environment. Closures enable powerful patterns such as data encapsulation, providing a way to create private variables and maintain their values.

```javascript
function ask(question) {
  setTimeout(function waitASec() {
    console.log(question);
  }, 100);
}

ask("What is closure?");
// What is closure?
```

In this code snippet, there is a function called `ask` that takes a parameter `question`. Inside the `ask` function, there's a call to `setTimeout`. The `setTimeout` function is asynchronous and schedules the execution of the provided callback function (`waitASec`) after a specified delay of 100 milliseconds. The callback function logs the `question` to the console.

Even though the `ask` function has finished executing by the time the `waitASec` function is invoked, the `waitASec` function still has access to the `question` parameter due to closure. This is because the inner function (`waitASec`) "closes over" the variables in its outer scope (`ask`), creating a closure. Therefore, when `ask("What is closure?")` is called, it logs "What is closure?" after a delay of 100 milliseconds. This demonstrates the concept of closure, where the inner function retains access to the variables of its outer function even after the outer function has completed execution.

```javascript
function ask(question) {
  return function holdYourQuestion() {
    console.log(question);
  };
}

var myQuestion = ask("What is closure?");

// ..

myQuestion(); // What is closure?
```

In this code snippet, there is a function called `ask` that takes a parameter `question`. Inside the `ask` function, there's another function, `holdYourQuestion`, which is returned by `ask`. This is a classic example of creating a closure. The inner function `holdYourQuestion` has access to the `question` variable even after the outer function (`ask`) has finished executing.

- `ask` takes a `question` parameter and returns the inner function `holdYourQuestion`.
- `holdYourQuestion` is a closure because it "closes over" the `question` variable from its outer scope (`ask`).
- `var myQuestion = ask("What is closure?");` calls the `ask` function with the argument "What is closure?" and assigns the returned function (`holdYourQuestion`) to the variable `myQuestion`.
- `myQuestion();` invokes the function stored in the `myQuestion` variable, which is the `holdYourQuestion` function created during the call to `ask`.
- When `myQuestion()` is called, it logs the value of the `question` parameter, which is "What is closure?".

This pattern is often used to create functions that "remember" values from their creation context. In this case, `myQuestion` is a closure that "remembers" the question it was initially created with and can still access that value when invoked later.

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

### Reference

- [Getting Started with Javascript v2 by Kyle Simpson (2019)](https://frontendmasters.com/courses/getting-started-javascript-v2/)

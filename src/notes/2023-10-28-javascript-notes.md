---
title: Javascript Basics
pageId: js
eleventyNavigation:
  key: Javascript Basics
---

### What is Javascript?

Javascript is a programming language widely used for changing things that happen in the web browser. The language can be used as part of web pages on the client-side and can also be used on the server-side with node.js.

### Data Types

JavaScript has data types to store different types of values.

- **Number:** Represents numeric values, including integers and floating-point numbers.
- **String:** Represents sequences of characters, including text, letters, and symbols.
- **Boolean:** Represents two logical values: true and false.
- **Null:** Represents the intentional absence of a value.
- **Undefined:** Represents the default value of a variable that has not been declared or initialised.
- **BigInt:** Represent integer values that are too large or too small to be represented by the default Number data type.
- **Symbol:** Represents unique identifiers that can be used as property keys or object identifiers.

### Comparisons

JavaScript comparisons are used to determine whether two values are equal or not.

- `==`: two values are equal if they have the same value, regardless of their data types.
- `===`: two values are equal if they have the same value and the same data type.
- `!=`: two values are not equal if they do not have the same value.
- `!==`: two values are _strictly_ not equal if they do not have the same value or the same data type.
- `>`: checks if the first value is greater than the second value.
- `<`: checks if the first value is less than the second value.
- `>=`: checks if the first value is greater than or equal to the second value.
- `<=`: checks if the first value is less than or equal to the second value.

### Booleans

Booleans are used to determine whether or not a block gets executed, where any defined variable that is neither zero nor an empty string is treated as true.

- `AND(&&)`: true if ALL are true.
- `OR(||)`: true if ONE is true.
- `NOT(!)`: inverts true/false value.

### Math Operators

- `+`: add two numbers.
- `-`: subtract two numbers.
- `*`: multiply two numbers.
- `/`: divide two numbers.
- `%`: divide two numbers, yield remainder.
- `**`: exponentation (e.g. `2 ** 3 = 8`) It raises the left operand to the power of the right operand.

### Assignment Operators

- `=`: assign value to variable.
- `+=`: adds the right operand to the left operand and assigns the result to the left operand.
- `-=`: subtracts the right operand from the left operand and assignd the result to the left operand.
- `\*=`: multiplies the left operand by the right operand and assigns the result to the left operand.
- `/=`: divides the left operand by the right operand and assigns the result to the left operand.
- `%=`: computes the remainder when dividing the left operand by the right operand and assigns the result to the left operand.

### String Concatenation

Concatenation typically refers to the process of combining strings or values together. You can use the `+` operator to concatenate strings.

### Conditionals

JavaScript conditionals are used to control the flow of execution of a program based on certain conditions. The most basic conditional statement is the `if` statement. The `if` statement takes a condition as its argument, and if the condition is true, then the block of code following the `if` statement is executed.

In addition to the `if` statement, JavaScript also has an `else` statement and an `else if` statement. The `else` statement is used to specify code that should be executed if the condition in the `if` statement is false. The `else if` statement is used to specify code that should be executed if the condition in the `if` statement is false and the condition in the `else if` statement is true.

The `switch` statement is similar to a series of IF statements on the same variable. This is used for when you want to compare the same variable with many different values, and execute a different piece of code depending on which value it equals to.

### Data Structures

Data structures in JavaScript encompass a variety of ways to organise and store data efficiently, each with its own strengths and applications. The choice of data structure depends on the specific requirements of the data and the operations that need to be performed on it. Here are some common data structures in JavaScript:

- **Arrays:** An ordered collection of elements of the same data type. Elements are accessed using their index positions. Versatile and efficient for storing and manipulating ordered sequences of data.
- **Objects:** Collections of key-value pairs. Keys are unique identifiers, and values can be of any data type. Suitable for storing and accessing data associated with unique identifiers.
- **Linked Lists:** A collection of nodes, where each node contains data and a pointer to the next node in the list. Useful for efficient insertion and deletion at any point in the list.
- **Stacks:** LIFO (Last In, First Out) data structure. Elements are added and removed from the top (last in).
- **Queues:** FIFO (First In, First Out) data structure. Elements are added to the back and removed from the front.
- **Sets:** Collections of unique values, where each value can only appear once. Efficient for checking for membership and removing duplicates.
- **Maps:** Collections of key-value pairs, similar to objects, but keys must be unique and are often restricted to primitive data types. Ooptimised for retrieving values based on keys.
- **Trees:** Hierarchical data structures with a root node and branches of child nodes. Useful for representing hierarchical relationships, such as file systems or organisational structures.
- **Graphs:** Collections of interconnected nodes (vertices) and edges (relationships between nodes). Suitable for modeling complex relationships between entities.

### Basic Rules for Writing Javascript

- Javascript is case sensitive. Variables, functions and methods are written in camelCase (e.g. `let userName`).
- Names can use letters and digits, e.g. `let ageGroup5`.
- The dollar sign and the underscore can also be used at the beginning of your name or anywhere inside of it, e.g. `$kindOfSpecial`. `_internalValue`. No other special characters can be used, e.g. `let user-b` _is not allowed_.
- Snake case is bad practice for the Javascript language unlike some other programming languages, e.g. `let user_name`. _This is not recommended_.
- Names must not start with a digit, e.g. `let 21Players`. We are also not allowed to use keywords such as `let` and `const`, e.g. `let let`.
- The semi-colon (`;`) can be used to finish off a line of code but this is optional in most cases. For example, you can't omit the semi-colon when having two expressions in one line, e.g. `let const a = 1;let const b = 2;`.

### Simple Debugging in the Console

- Console log can be used to output data to the console: `console.log(name);`
- We can get data from the console by using prompt: `let lastName = prompt('What is your last name?');`
- _alert_ is similar to the prompt but it doesn't ask a question: `alert(name + ' is a ' + age + ' years old ' + job + '.');`

### Variables

A variable is a container in which we can store a value in order to use it repeatedly. By saving a value in a variable we don't have to write that value each time we want to use it. When we declare a variable it looks like this: `let name = viv;`.

### When to Use `var` and `let`

In general, it is recommended to use `let` instead of `var` for most variable declarations. This is because `let` has block scope, which makes it more predictable and easier to reason about the lifetime of variables. Additionally, `let` does not allow redeclaration, which helps to prevent bugs caused by accidentally overriding variables.

However, there are some cases where `var` may still be useful. For example, `var` can be used to declare global variables, which are variables that are accessible from anywhere in the program. Additionally, `var` can be used to declare variables that need to be accessed before they are declared.

### const

In Javascript, `const` is a keyword used to declare a constant variable. Once a variable is defined with `const`, its value cannot be reassigned. However, it's important to note that `const` does not make the variable itself immutable; it only prevents reassignment of the variable reference. Use `const` when you want to ensure that a variable's value remains constant throughout its scope.

### Functions

Functions are like mini-programs that group together code blocks to perform specific tasks. They can make your code cleaner, reusable, and easier to manage. Functions can return values using the return keyword. The returned value can be used by other functions or assigned to variables.

- **Named Functions**: Have a name and are called by their name.
- **Anonymous Functions**: Don't have a name and are often triggered by events.
- **Immediately Invoked Function Expressions (IIFEs)**: Anonymous functions that run immediately.

### Properties and Methods

In javascript objects have properties and methods. Properties are pieces of meta information about the object and methods are functions that belong to the object.

To use a method on an object call the object then add a punctuation mark followed by the name of the method and parentheses: `users.reverse();`. In some cases the method has arguments that can be passed inside the parentheses.

- **Properties** are like attributes or characteristics of an object. They store information about the object and can be of various data types, such as numbers, strings, booleans, or even other objects. Properties are accessed using the dot notation.
- **Methods** are functions associated with an object. They encapsulate actions or operations that the object can perform. Methods are also called using the dot notation, followed by the method name and parentheses:

Properties and methods work together to define the behavior and characteristics of an object. Properties represent the state of the object, while methods allow the object to perform actions or respond to interactions. Methods can access and modify the object's properties, and properties can influence the outcome of method calls.

### Loops

In JavaScript, a loop is a way to repeat a block of code multiple times. There are three main types of loops:

- **for loops:** Used when you know the number of times you want to repeat the code.

  ```javascript
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  ```

- **while loops:** Used when you want to repeat the code as long as a specific condition is true.

  ```javascript
  let i = 1;
  while (i <= 10) {
    console.log(i);
    i++;
  }
  ```

- **do-while loops:** Similar to while loops, but the code inside is executed at least once before checking the condition.

  ```javascript
  let i = 1;
  do {
    console.log(i);
    i++;
  } while (i <= 10);
  ```

### The DOM (Document Object Model)

The DOM is a representation of an HTML document that allows languages like CSS and JavaScript to interact with the document. It organises the elements of an HTML document into a tree structure, where each element is a node. Nodes can have parent nodes, child nodes, and sibling nodes.

### Selecting DOM Elements

- **Selecting Elements by ID**: The most straightforward way to select elements in the DOM is by their unique ID attribute. Each element can have only one ID, and it serves as a global identifier within the document. To select an element by its ID, use the `getElementById()` method:
- **Selecting Elements by Class**: An element can have multiple classes, which are used to group related elements together. To select elements by their class, use the `getElementsByClassName()` method.
- **Selecting Elements by Tag Name**: To select all elements of a specific tag type, such as `<div>`, `<p>`, or `<img>`, use the `getElementsByTagName()` method:
- **Selecting Elements by CSS Selectors**: CSS selectors provide a more powerful and versatile way to select elements based on their attributes, relationships, and positions within the document structure. The `querySelector()` method selects a single element matching the selector, while `querySelectorAll()` returns a collection of elements.
- **Combining Selectors**: CSS selectors can be combined using various combinators, such as child selectors (`>`), descendant selectors _separated by white space_ (``), and sibling selectors (`+`) to target specific element relationships:

### getAttribute

The `getAttribute()` method is used to retrieve the value of a specified attribute from an HTML element. It takes two arguments:

1. **The name of the attribute to retrieve:** This is a string that represents the name of the attribute you want to get the value of. For example, to get the value of the `id` attribute, you would pass `"id"` as the first argument.

2. **An optional second argument:** This argument specifies whether to retrieve the attribute value in its original form (the default) or whether to convert it to a specific data type. For example, to get the `value` attribute of an `<input>` element as a number, you would pass `"value"` as the first argument and `"number"` as the second argument.

Here is an example of how to use the `getAttribute()` method to get the value of the `id` attribute of an element with the ID `myElement`:

```javascript
const element = document.getElementById("myElement");
const id = element.getAttribute("id");
console.log(id); // Output: myElement
```

### Changing Styles

**Adding classes**: The `classList` property is used to manipulate the class attributes of an HTML element in JavaScript. It provides a convenient and efficient way to add, remove, toggle, and check for classes on an element.

To add one or more classes to an element, use the `add()` method of the `classList` property:

```javascript
const element = document.getElementById("myElement");
element.classList.add("myClass1", "myClass2");
```

**Removing Classes**: To remove one or more classes from an element, use the `remove()` method of the `classList` property:

```javascript
const element = document.getElementById("myElement");
element.classList.remove("myClass2");
```

**Toggling Classes**: To toggle the presence of a class on an element, meaning adding it if it's not there or removing it if it is, use the `toggle()` method of the `classList` property:

```javascript
const element = document.getElementById("myElement");
element.classList.toggle("myClass1");
```

**Checking for Classes**: To check whether an element has a specific class, use the `contains()` method of the `classList` property:

```javascript
const element = document.getElementById("myElement");
const hasClass = element.classList.contains("myClass1");
console.log(hasClass); // Output: true or false
```

This will check if the element has the class `myClass1` and assign the result to the `hasClass` variable.

### innerHTML

Selecting and modifying the `innerHTML` property of an HTML element using JavaScript can be dangerous due to the potential for cross-site scripting (XSS) vulnerabilities. XSS attacks allow malicious code to be injected into a web page, which can then be executed in the user's browser.

When you use `innerHTML` to set the content of an element, you are essentially inserting raw HTML code directly into the page. If this code contains malicious JavaScript, it can be executed when the page is loaded or when the user interacts with the page. This can lead to a variety of security risks.

To avoid XSS vulnerabilities, it is generally recommended to avoid using `innerHTML` to set the content of elements. Instead, you should use more secure methods, such as:

- **Creating DOM elements and appending them to the parent element:** This allows you to create elements with the desired content without directly inserting raw HTML code.
- **Using libraries that sanitise user input:** There are several libraries available that can sanitise user input to remove any potential XSS payloads.

### JavaScript Events

Events in JavaScript are user-triggered actions that occur in response to user interactions or browser events. They enable web applications to be dynamic and responsive to user input, creating a more engaging and interactive user experience. There are numerous types of events in JavaScript, ranging from user interactions to browser actions. Some common examples include:

- **Mouse events:** Click, mouseover, mouseout, mousedown, mouseup, scroll
- **Keyboard events:** Keydown, keyup, keypress
- **Form events:** Submit, change, reset
- **Window events:** Load, unload, resize, scroll
- **Document events:** DOMContentLoaded, load

To handle events in JavaScript, you need to associate event handlers with the elements that should respond to those events. Event handlers are functions that execute when the corresponding event occurs. The most common way to associate event handlers is using the `addEventListener()` method:

```javascript
element.addEventListener("event_name", function_name);
```

For example, to handle a click event on an element with the ID `myButton`, you would use the following code:

```javascript
const button = document.getElementById("myButton");
button.addEventListener("click", function () {
  alert("You clicked the button!");
});
```

This code creates an event listener for the `click` event on the `myButton` element. When the button is clicked, the anonymous function is executed, displaying an alert message.

When an event occurs, it propagates up the DOM tree, from the target element to its parent elements, and so on. This allows you to handle events at different levels of the DOM hierarchy.

### Sources

- [MDN web docs - JavaScript reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- [Javascript - Wikibooks](https://en.wikibooks.org/wiki/JavaScript)
- [The Complete JavaScript Course: From Zero to Expert!](https://www.udemy.com/course/the-complete-javascript-course/)
- [JavaScript - The Complete Guide (Beginner + Advanced)](https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/)

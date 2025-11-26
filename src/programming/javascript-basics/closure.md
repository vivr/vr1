---
title: Closure
date: 2023-10-28
order: 17
---

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

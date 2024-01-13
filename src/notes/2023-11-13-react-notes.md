---
title: React Todo List App
pageId: react
eleventyNavigation:
  key: React Todo List App
---

### What is React?

React is a javascript library used for building user interfaces and web applications. It uses a component-based architecture allowing developers to create reusable UI components that can be combined to build complex interfaces.

### Simple Todo List App

The tutorial described in this post is from [Learn React With This One Project tutorial by WebDevSimplified](https://www.youtube.com/watch?v=Rh3tobg7hEo).

### Install Vite

1. Run `npm create vite@latest .` _(The `.` (period) will create the project inside whatever folder you are currently in)_.
2. Use the arrow key to select the _React_ framework.
3. Choose _Javascript_ language.
4. Run `npm i` to install all dependencies.
5. Next, run `npm run dev` to start the application.

### Manage Directories

Delete the following directories:

- _public_
- _src/assets_

### Manage Files

Delete the following files:

- _src/index.css_
- _src/app.css_

Create the following files:

- _src/NewTodoForm.jsx_
- _src/TodoList.jsx_
- _src/TodoItem.jsx_
- _src/styles.css_

### main.jsx

In the _src/main.jsx_ file delete the `import './index.css'` line.

### App.jsx

Delete everything in the _src/App.jsx_ file and add the following:

```jsx
import { useEffect, useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import "./styles.css";
import { TodoList } from "./TodoList";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
```

This is a React functional component called `App` that represents a simple Todo list application. Let's break down the key parts of this file:

#### Imports

```jsx
import { useEffect, useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import "./styles.css";
import { TodoList } from "./TodoList";
```

- The `useEffect` and `useState` are React hooks. `useEffect` is used for handling side effects in functional components, and `useState` is used for managing state.
- The component imports two other components: `NewTodoForm` and `TodoList`.
- The `styles.css` file is imported for styling purposes.

#### Component Functions

```jsx
export default function App() {
```

This declares a functional component named `App`.

#### State Management

```jsx
const [todos, setTodos] = useState(() => {
  const localValue = localStorage.getItem("ITEMS");
  if (localValue == null) return [];

  return JSON.parse(localValue);
});
```

It initializes a state variable `todos` using the `useState` hook. The initial state is retrieved from the local storage. If no data is stored, an empty array is used as the default state.

#### Local Storage and useEffect

```jsx
useEffect(() => {
  localStorage.setItem("ITEMS", JSON.stringify(todos));
}, [todos]);
```

The `useEffect` hook is used here. It watches for changes in the `todos` state, and whenever it changes, it updates the local storage with the new value.

#### Todo Manipulation Functions

- `addTodo`: Adds a new todo item to the state.
- `toggleTodo`: Toggles the completion status of a todo item.
- `deleteTodo`: Deletes a todo item from the state.

#### Render

```jsx
return (
  <>
    <NewTodoForm onSubmit={addTodo} />
    <h1 className="header">Todo List</h1>
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
  </>
);
```

- The component returns JSX, which represents the structure of the rendered component.
- It renders `NewTodoForm` for adding new todos, an `<h1>` element with the class "header," and the `TodoList` component to display the list of todos.

In summary, this React component manages a Todo list. It uses local storage to persist the todos, and it provides functions to add, toggle completion, and delete todos. The component structure consists of a form for adding new todos, a title for the todo list, and a list of todos with checkboxes to toggle completion and buttons to delete todos.

### NewTodoForm.jsx

Open _src/NewTodoForm.jsx_ and add the following code:

```jsx
import { useState } from "react";

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
```

This React file defines a functional component named `NewTodoForm` that represents a form for adding new items to a todo list. Let's break down the key parts of this file:

#### Import Statement

```jsx
import { useState } from "react";
```

It imports the `useState` hook from the React library. The `useState` hook is used for managing state in functional components.

#### NewTodoForm Functional Component Definition

```jsx
export function NewTodoForm({ onSubmit }) {
```

This declares a functional component named `NewTodoForm`. It takes an object with a property `onSubmit` as a parameter. This `onSubmit` function is expected to handle the submission of a new item.

#### NewTodoForm State Management

```jsx
const [newItem, setNewItem] = useState("");
```

It initializes a state variable `newItem` using the `useState` hook. This state represents the value of the input field in the form.

#### Form Submission Handling

```jsx
function handleSubmit(e) {
  e.preventDefault();
  if (newItem === "") return;

  onSubmit(newItem);

  setNewItem("");
}
```

- The `handleSubmit` function is triggered when the form is submitted.
- `e.preventDefault()` prevents the default form submission behavior, which would cause a page reload.
- It checks if `newItem` is not an empty string, and if not, it calls the `onSubmit` function with the current value of `newItem`.
- After submission, it resets the `newItem` state to an empty string.

#### Render JSX

```jsx
return (
  <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        type="text"
        id="item"
      />
    </div>
    <button className="btn">Add</button>
  </form>
);
```

- The component renders a form with an `onSubmit` handler set to the `handleSubmit` function.
- Inside the form, there is a label and an input field for entering the new item's text.
- The `value` of the input field is bound to the `newItem` state, and the `onChange` event updates the `newItem` state as the user types.
- Finally, there is a submit button with the label "Add."

In summary, this component provides a form for adding new items to a todo list. It manages the state of the input field (`newItem`) and triggers a callback (`onSubmit`) when the form is submitted. The `onSubmit` function is expected to handle the logic of adding the new item to the todo list.

### TodoList.jsx

Open _src/TodoList.jsx_ and add the following code:

```jsx
import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
```

This React file defines a functional component named `TodoList` that represents a list of todo items. Let's break down the key parts of this file:

#### TodoItem Import Statement

```jsx
import { TodoItem } from "./TodoItem";
```

It imports the `TodoItem` component from another file. Each individual todo item is represented by the `TodoItem` component.

#### TodoList Functional Component Definition

```jsx
export function TodoList({ todos, toggleTodo, deleteTodo }) {
```

This declares a functional component named `TodoList`. It takes an object with properties `todos`, `toggleTodo`, and `deleteTodo` as parameters. These properties represent the list of todos, a function to toggle the completion status of a todo, and a function to delete a todo.

#### Rendering the Todo List

```jsx
return (
  <ul className="list">
    {todos.length === 0 && "No Todos"}
    {todos.map((todo) => {
      return (
        <TodoItem
          {...todo}
          key={todo.id}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      );
    })}
  </ul>
);
```

- The component returns JSX, representing the structure of the rendered component.
- It renders an unordered list (`<ul>`) with the class name "list."
- It checks if the length of the `todos` array is 0. If true, it displays the text "No Todos." This is a simple conditional rendering to handle the case when there are no todos.
- It then uses the `map` function to iterate over each `todo` in the `todos` array and renders a `TodoItem` component for each todo.
- The spread operator (`{...todo}`) is used to pass all properties of the `todo` object as individual props to the `TodoItem` component.
- Each `TodoItem` component is assigned a unique `key` prop using the `todo.id` to help React efficiently update and re-render the list when needed.
- The `toggleTodo` and `deleteTodo` functions are also passed as props to each `TodoItem` component, allowing them to communicate with the parent component (`TodoList`).

In summary, the `TodoList` component is responsible for rendering a list of todo items. It maps over the `todos` array and renders a `TodoItem` component for each todo, passing the necessary data and functions as props. If there are no todos, it displays a message indicating that there are no todos. The actual rendering of each todo item is delegated to the `TodoItem` component.

### TodoItem.jsx

Open _src/TodoItem.jsx_ and add the following code:

```jsx
export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
}
```

This React file defines a functional component named `TodoItem` that represents an individual todo item in a todo list. Let's break down the key parts of this file:

#### TodoItem Functional Component Definition

```jsx
export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
```

This declares a functional component named `TodoItem`. It takes an object with properties `completed`, `id`, `title`, `toggleTodo`, and `deleteTodo` as parameters. These properties represent the details of a todo item and functions to handle toggling completion status and deleting the todo.

#### Rendering the Todo Item

```jsx
return (
  <li>
    <label>
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      {title}
    </label>
    <button onClick={() => deleteTodo(id)} className="btn btn-danger">
      Delete
    </button>
  </li>
);
```

- The component returns JSX, representing the structure of the rendered todo item.
- It renders a list item (`<li>`) containing the details of a todo item.
- Inside the list item, there is a label element containing an input checkbox and the title of the todo.
- The checkbox is controlled by the `checked` prop, which is set to the value of the `completed` property. The `onChange` event is used to handle changes to the checkbox. When the checkbox is toggled, the `toggleTodo` function is called with the `id` of the todo and the new checked state.
- The title of the todo is displayed inside the label.
- There is also a delete button (`<button>`) with an `onClick` event. When the button is clicked, the `deleteTodo` function is called with the `id` of the todo. The button has a class name for styling purposes.

In summary, the `TodoItem` component is responsible for rendering the details of an individual todo item. It includes a checkbox to toggle the completion status and a delete button to remove the todo item. The component receives the todo details and callback functions (`toggleTodo` and `deleteTodo`) as props, making it reusable and allowing it to interact with the parent components that manage the todo list.

### References

- [react.dev](https://react.dev/learn)
- [Learn React With This One Project](https://www.youtube.com/watch?v=Rh3tobg7hEo) by [WebDevSimplified](https://www.youtube.com/@WebDevSimplified)
- [Complete Intro to React v8 by Brian Holt](https://frontendmasters.com/courses/complete-react-v8/)

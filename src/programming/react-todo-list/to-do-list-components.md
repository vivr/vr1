---
title: Components
date: 2024-11-04
order: 4
---

### NewTodoForm.jsx

```jsx
import { useRef } from "react";

export function NewTodoForm({ onSubmit }) {
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const title = inputRef.current.value.trim();
    if (title.length === 0) return;
    onSubmit(title);
    inputRef.current.value = "";
  }

  return (
    <form onSubmit={handleSubmit} className="new-todo-form">
      <input ref={inputRef} type="text" placeholder="Add todo" />
      <button className="button" type="submit">Add</button>
    </form>
  );
}
```

### TodoList.jsx

```jsx
import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  if (todos.length === 0) {
    return <p>No todos yet</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
}
```

### TodoItem.jsx

```jsx
export function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => toggleTodo(todo.id, e.target.checked)}
        />
        <span>{todo.title}</span>
      </label>
      <button className="delete" onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}
```

Explanation

- `NewTodoForm` handles task entry and calls `onSubmit` with the new title.
- `TodoList` maps over todos and renders `TodoItem` for each.
- `TodoItem` shows a checkbox and delete button and reports actions via callbacks.

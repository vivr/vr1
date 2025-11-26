---
title: Loops
date: 2023-10-28
order: 8
---

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

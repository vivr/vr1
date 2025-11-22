---
title: CSS Basics
date: 2023-10-21
image: /assets/webdesign/css.webp
---

### What is CSS?

CSS controls the visual side of a website, including layout, colours, spacing and typography. It keeps styling separate from your HTML so your pages are easier to read, maintain and build on.

### CSS Selectors

Selectors tell CSS which elements to style.

- **Element selectors** target tags like `p` or `h1`.
- **Class selectors** target reusable styles, written with a dot, for example `.button`.
- **ID selectors** target a single unique element, written with a hash, for example `#header`.
- **Attribute selectors**, **pseudo-classes** like `:hover` and **combinators** let you target elements in more specific or conditional ways.

### Specificity

When two CSS rules conflict, the browser uses specificity to decide which one wins.

From strongest to weakest:

1. **Inline styles**
2. **IDs**
3. **Classes**, **attributes**, **pseudo-classes**
4. **Element selectors**

If specificity is equal, the rule written last in the stylesheet applies.

### Box Model

Every element on a page is a “box” made up of:

- **Content** – the text or images
- **Padding** – space around the content
- **Border** – the line around the padding
- **Margin** – space outside the border, separating the element from others

Understanding this is the key to solving most layout problems.

### Positioning

Positioning controls how elements sit on the page:

- **Static** – the default, follows normal document flow
- **Relative** – stays in flow but can be nudged with offsets
- **Absolute** – removed from flow and positioned relative to the nearest positioned parent
- **Fixed** – sticks to the viewport
- **Sticky** – behaves like relative until a set scroll point is reached

### Flexbox

Flexbox makes it easier to line things up and distribute space within a container. It is especially useful for centring items, creating rows or columns and handling flexible spacing across different screen sizes.

### CSS Grid

CSS Grid is a two-dimensional layout system using rows and columns. It is ideal for structured layouts, gallery-style designs or any layout where elements need precise placement. Grid can also handle overlapping and more complex arrangements.

### Responsive Design

Responsive design ensures a site looks good on all devices. **Media queries** apply different CSS depending on the device’s features, such as screen width or orientation.

```css
/* Example */
@media (max-width: 600px) {
  .container {
    padding: 1rem;
  }
}
```

### CSS Variables

CSS variables (custom properties) let you store values and reuse them across your stylesheet:

```css
:root {
  --main-colour: #333;
}

body {
  colour: var(--main-colour);
}
```

They make updates and theming much easier.

### Reset vs Normalise

Browsers have their own default styles.

- **CSS Reset** clears everything to a blank slate.
- **CSS Normalise** keeps sensible defaults and smooths out inconsistencies.

Normalise is generally the more practical option.

### Extra Concepts Worth Knowing

A few more ideas that help everything else make sense:

- **Cascade** – CSS is read from top to bottom, which affects what takes priority.
- **Units** – `px`, `em`, `rem`, percentages and viewport units each behave differently.
- **Shorthand rules** – for example, `margin: 10px 20px` makes CSS cleaner and easier to read.

### Resources

- [The 6 most important CSS concepts for beginners by Kevin Powell](https://www.youtube.com/watch?v=JnTPd9G6hoY)
- [MDN CSS Guides](https://developer.mozilla.org/en-US/docs/Learn/CSS)
- [Modern CSS Solutions](https://moderncss.dev/)

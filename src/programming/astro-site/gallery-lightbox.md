---
title: Gallery and Lightbox
date: 2025-11-25
order: 3
---

### Auto-loading images

Astro’s `import.meta.glob` loads all images based on a pattern.

Example:

```js
const modules = import.meta.glob('../assets/gallery/*.webp', {
  import: 'default',
  query: '?url'
});
```

Filenames become titles automatically:

```md
birds-eye-view-of-newcastle-3.webp
→ Birds Eye View Of Newcastle 3
```

### Gallery structure

Each image is rendered as:

- A button  
- A thumbnail  
- A caption  

### Lightbox behaviour

The lightbox:

- Opens on click  
- Shows large image  
- Shows title  
- Supports next/previous  
- Supports Escape and arrows  
- Closes on backdrop click  

The script sits inside the same component for simplicity.

---
title: Structure
date: 2025-11-25
order: 2
---

### Folder structure

```md
src/
  pages/
  layouts/
  components/
  assets/gallery/
  styles/
```

### Pages

Pages are `.astro` files inside `src/pages/`.

Example homepage:

```js
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Gallery from '../components/Gallery.astro';
---

<BaseLayout title="george reay">
  <Gallery />
</BaseLayout>
```

### Layout

The layout contains:

- `<head>` tags  
- Header  
- `<main>` area  
- Footer with auto-updating year  

### Assets

Place `.webp` files into:

```js
src/assets/gallery/
```

Astro automatically imports them and generates readable titles from filenames.

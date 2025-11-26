---
title: Folder Structure
date: 2025-11-21
order: 2
---

### Main Folders

Everything is stored inside `src/`:

```markdown
src/
_includes/        → Layouts and partials
_data/            → Global data files
programming/      → Multi-page programming topics
music/            → Single-layer collection
webdesign/        → Single-layer collection
assets/           → Images
css/              → Stylesheets
index.njk         → Homepage
```

### Output Folder

Eleventy puts the final site into:

```markdown
docs/
```

This is the folder GitHub Pages hosts.

### How Pages Work

Any Markdown file with front matter becomes a page.

Folders with matching `.njk` files at the top level (for example `music.njk` or `programming.njk`) become top-level sections automatically.

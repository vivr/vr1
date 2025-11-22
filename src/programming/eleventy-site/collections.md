---
title: Eleventy Site – Collections
shortTitle: Collections
date: 2025-11-21
order: 3
renderAsList: false
---

### How Collections Work

Collections are built using the `tags:` field in front matter. Every content page includes something like:

```yaml
---
title: Example Page
date: 2024-01-01
order: 1
tags: ["posts", "collection-name"]
---
```

Eleventy groups pages by tag names. The tag `"posts"` is the general content collection, and the second tag (for example `"learning-python"`) identifies the specific series or section.

### Programming Collections

Inside `src/programming/`, each topic has its own folder:

```markdown
src/
  programming/
    javascript-basics/
    learning-python/
    machine-learning-basics/
    react-todo-list/
```

Each topic folder usually contains:

- a JSON file for shared data and settings  
- several Markdown files (one per page in the series)

Each topic:

- uses the `order` field in front matter to control page order  
- generates its own sidebar list  
- has previous/next navigation  
- appears automatically on the `/programming/` page

### Other Collections

Sections like **Music** and **Web Design** use a simpler setup. Their JSON file typically looks like this:

```json
{
  "layout": "collection.njk",
  "tags": ["music", "posts"],
  "image": "/assets/music/music.webp"
}
```

These collections are sorted by **date**, not `order`. To add a new page, just create a Markdown file with:

```yaml
tags: ["music", "posts"]
date: 2025-01-01
```

And it will appear automatically.

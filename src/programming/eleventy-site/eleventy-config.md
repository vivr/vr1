---
title: Eleventy Site – Eleventy Config
shortTitle: Config
date: 2025-11-21
order: 6
renderAsList: false
---

### Overview

The `/.eleventy.js` file controls how the site is built.  

It sets up:

- passthrough file copying  
- filters for dates and sorting  
- helper functions for collections  
- custom collections for posts and programming topics

### Passthrough

These lines tell Eleventy to copy the CSS and assets straight to the output folder:

- `./src/css/style.css`  
- `./src/assets`

### Filters

The config defines several filters, including:

- `postDate`, `postMonth`, `postYear`  
- `sortByOrderAsc`  
- `sortByDateDesc`  
- `isProgrammingCollection`

These filters are used in the templates.

### Collections

#### `posts`

All pages tagged `"posts"`, sorted first by `order`, then by date.

#### `postsForNav`

Builds grouped lists of posts by section.

#### `programmingTopics`

This collection powers the `/programming/` page. It:

- looks at all Markdown files under `src/programming/`  
- groups them by topic folder name  
- sorts pages by `order`  
- chooses the first page as the topic link  
- reads titles and images from folder data  
- sorts topics by the date of their latest post

### The Result

Adding new content or new sections works automatically:

- new programming topics  
- new pages in music or web design  
- new top-level sections  

The homepage, sidebars and navigation all update without configuration changes.

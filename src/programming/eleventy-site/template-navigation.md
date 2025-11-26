---
title: Templates
date: 2025-11-21
order: 5
renderAsList: false
---

### Base Layout: `base.njk`

The base layout wraps every page and includes:

- HTML head and metadata  
- the main header and navigation  
- conditional rendering for collection index pages  
- a sidebar for post pages

If a page is tagged `frontPage` or `pages`, the content is wrapped in a card-style list. Other pages are rendered with the sidebar alongside the content.

### Sidebar

The sidebar (`_sidebar.njk`) shows an “In this section” list. It:

- works out which collection the current page belongs to  
- fetches `collections[thatCollection]`  
- sorts pages differently depending on the collection type

Sorting rules are:

- for collections under `src/programming/` → use `order`  
- for everything else → sort by newest date

The site uses a filter called `isProgrammingCollection` to decide this.

### Previous/Next Navigation

`series-nav.njk` builds previous and next links at the bottom of post pages.

For programming topics:

- it reads the URL (for example `/programming/javascript-basics/intro/`)  
- finds all pages in the `javascript-basics` collection  
- sorts them by `order`  
- links to the previous and next page in that series only

For other collections (like music or web design), navigation is based on date.

### Collection Index Template

`collection-index.njk` is used by top-level section pages such as `/music/` and `/webdesign/`.

It:

- finds the correct collection slug (from front matter, tags or URL)  
- fetches `collections[slug]`  
- sorts by `order` for programming collections, or by date for others  
- renders each page using a card macro

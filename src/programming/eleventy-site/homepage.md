---
title: Homepage
date: 2025-11-21
order: 4
renderAsList: false
---

### Fully Automatic Homepage

The homepage uses a data file called:

```markdown
src/_data/homeCollections.js
```

This script:

1. Scans the `src/` folder  
2. Finds all top-level collections which have a matching `.njk` file  
3. Tries to read each collection’s image from its JSON file  
4. Builds the homepage cards automatically

### Example

If you create:

- a new folder `src/photography/`  
- a template file `src/photography.njk`  
- a JSON file `src/photography/photography.json` with an `image` field  

then a new card for “Photography” will appear on the homepage automatically. No changes to the homepage template or the Eleventy config are needed.

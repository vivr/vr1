---
title: Build an 11ty Site
pageId: eleventy
eleventyNavigation:
  key: Build an 11ty Site
---

### What is Eleventy?

[Eleventy (11ty)](https://www.11ty.dev/) lets you write content using template languages (such as Markdown and Nunjucks, etc.) and then generates static HTML files.

### Directories and Files

Create a main directory and add the following directories and files:

<pre class="language-markdown">
┌── src
│ ├── _data
│ │ ├── meta.js
│ ├── _includes
│ │ ├── _header.njk
│ │ ├── _meta.njk
│ │ ├── _nav.njk
│ │ ├── _sidebar.njk
│ │ ├── base.njk
│ │ ├── note.njk
│ │ ├── page-snippet.njk
│ ├── assets
│ │ ├── notes
│ │ │ ├── my-first-note-img.webp
│ │ ├── favicon.png
│ ├── css
│ │ ├── style.scss
│ ├── notes
│ │ ├── my-first-note.md
│ │ ├── notes.json
│ ├── index.njk
│ ├── notes.njk
└─└── .eleventy.js
</pre>

### Install Eleventy

1. Make sure [Nodejs](https://nodejs.org/en/download) is installed.
2. Open a terminal inside the root directory of your project and run `npm init -y`. This automatically generates a _package.json_ file for your project with default values.
3. Next, run `npm install @11ty/eleventy --save-dev`. This installs Eleventy as a development dependency for your project.

### package.json

Open _package.json_ in your code editor. Delete the existing _"test"_ script in the _"scripts"_ section and add the following:

```json
"scripts": {
  "start": "eleventy --serve",
  "build": "eleventy"
},
```

The `start` script is used for starting a development server and the `build` script generates the static files for your site.

When you want to run the local server and generate your static files, type `npm start` in the terminal (inside your project directory). To stop the server click _Ctrl C_ in the terminal then type `y` and hit return.

### .eleventy.js

Open the _.eleventy.js_ file located in the root directory of your project. This is a configuration file where you can define various settings and customise the behaviour of Eleventy according to your project's requirements. Add the following code:

```javascript
const { DateTime } = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css/style.css");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });
  eleventyConfig.addFilter("postMonth", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat("LLL").toLowerCase();
  });
  eleventyConfig.addFilter("postYear", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString({ year: "numeric" });
  });
  const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);
  return {
    dir: {
      input: "src",
      output: "docs",
    },
  };
};
```

{% raw %}

#### Importing Dependencies

```javascript
const { DateTime } = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
```

The `DateTime` object is imported from the Luxon library. Luxon is used for working with dates and times in JavaScript. The syntaxHighlight plugin is imported. This plugin is used for syntax highlighting in code blocks.

#### Module Export

```javascript
module.exports = function (eleventyConfig) {
```

The module exports a function that takes `eleventyConfig` as a parameter. This function is where you configure Eleventy.

#### Passthrough Copy

```javascript
eleventyConfig.addPassthroughCopy("./src/css/style.css");
eleventyConfig.addPassthroughCopy("./src/assets");
```

These lines configure Eleventy to copy the CSS file and the contents of the "assets" directory directly to the output directory without modification.

#### Date Formatting Filters

```javascript
eleventyConfig.addFilter("postDate", (dateObj) => {
  return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
});

eleventyConfig.addFilter("postMonth", (dateObj) => {
  return DateTime.fromJSDate(dateObj).toFormat("LLL").toLowerCase();
});

eleventyConfig.addFilter("postYear", (dateObj) => {
  return DateTime.fromJSDate(dateObj).toLocaleString({ year: "numeric" });
});
```

These lines use Luxon's `DateTime` to format date objects into human-readable strings.

#### Eleventy Navigation Plugin

```javascript
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
eleventyConfig.addPlugin(eleventyNavigationPlugin);
```

This plugin helps with creating navigation structures in your site.

#### Syntax Highlighting Plugin

```javascript
eleventyConfig.addPlugin(syntaxHighlight);
```

The syntax highlighting plugin is added to the Eleventy configuration. This plugin uses Prism. You can choose a theme and download the CSS from the [Prism website](https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript).

#### Configuration Options

```javascript
return {
  dir: {
    input: "src",
    output: "docs",
  },
};
```

The configuration object specifies the input and output directories for Eleventy. The content is expected to be in the "src" directory, and the generated site will be output to the "docs" directory.

{% endraw %}

### meta.js

Open the _\_data/meta.js_ file and add the following:

```javascript
module.exports = {
  url: "https://your-site.co.uk/" || "http://localhost:8080",
  siteName: "your site name",
  siteDescription: "Your site description.",
};
```

This module is designed to be used as configuration settings for the website.

### meta.njk

Open the _\_includes/meta.njk_ file and add the following code:

{% raw %}

```twig
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>
{{ title }} | {{ meta.siteName }}
</title>
<meta name="description" content="{{ meta.siteDescription }}"/>
<link rel="icon" href="/assets/favicon.png" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@500;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/css/style.css">
```

This Nunjucks partial sets up the essential meta tags for an HTML document, dynamically generates the title, includes a description, specifies a favicon, preconnects to external resources (Google Fonts), and includes a stylesheet for the site.

{% endraw %}

### base.njk

Open the _\_includes/base.njk_ file and add the following:

{% raw %}

```twig
<!DOCTYPE html>
<html lang="en">
  <head>
    {% include '_meta.njk' %}
  </head>
<body>
<a href="#main-content" class="visually-hidden">Skip to main content</a>
  <main class="content-grid">
    {% include '_header.njk' %}

    {%- if tags == "pages" or tags == "frontPage" -%}
      <ul id="main-content" class="card" role="list">
        {{ content | safe }}
      </ul>
    {%- else -%}
      {{ content | safe }}
    {%- endif -%}

    {% if '/notes' in page.url and tags != "pages" %}
      {% include '_sidebar.njk' %}
    {% endif %}
  </main>
</body>
</html>
```

{% endraw %}

This Nunjucks template defines the structure of an HTML document, includes various components using Nunjucks includes, and conditionally renders content based on tags and page URL.

### header.njk

Open the _\_includes/header.njk_ file and add the following code:

{% raw %}

```twig
<header class="header">
  <div class="header__info">
    <h1><a href="/">Vivienne Reay</a></h1>
  </div>
  {% include '_nav.njk' %}
</header>
```

This HTML code defines a header for the website, including a brand name and the inclusion of a navigation section from a separate Nunjucks file `{% include '_nav.njk' %}`.

{% endraw %}

### nav.njk

Open the _\_includes/nav.njk_ file and add the following code:

{% raw %}

```twig
<nav role="navigation" class="header__nav">
  <ul role="list" class="nav-list">
    <li><a href="/" class="{{ 'active' if tags == "frontPage"}} button">Index</a></li>
    <li><a href="/notes/" class="{% if '/notes' in page.url %}active{% endif %} button">Notes</a></li>
  </ul>
</nav>
```

This HTML code defines a navigation section with two navigation items. The "active" class is conditionally applied to the navigation items based on the page's tags and URL path, indicating the currently active page.

{% endraw %}

### index.njk

Open the _index.njk_ file and add the following code:

{% raw %}

```twig
---
title: Vivienne Reay
layout: 'base.njk'
tags: frontPage
---
{%- for post in collections.posts | reverse -%}
  {% include 'page-snippet.njk' %}
{%- endfor -%}
```

{% endraw %}

The purpose of this code is to generate the front page of the website, listing posts in reverse chronological order. Each post is rendered using the 'page-snippet.njk' template. The front matter at the beginning provides metadata for the page and specifies the layout to use.

### page-snippet.njk

Open the _\_includes/page-snippet.njk_ file and add the following:

{% raw %}

```twig
<li>
  <a href="{{ post.url }}">
    <figure tabindex="0">
        <img class="invert-light" alt="{{ post.data.pageId }} logo" src="/assets/notes/{{ post.data.pageId }}.webp" />
        <figcaption>{{ post.data.title }}</figcaption>
    </figure>
  </a>
</li>
```

{% endraw %}

This code generates a list item for posts. The figure element contains an image and a caption, and the entire structure is wrapped in a link to the post's URL.

### notes.njk

Open the _notes.njk_ page and add the following:

{% raw %}

```twig
---
title: Notes
layout: 'base.njk'
tags: pages
---
{%- for post in collections.notes | reverse -%}
  {% include 'page-snippet.njk' %}
{%- endfor -%}
```

{% endraw %}

This file represents a page with the title "notes." It uses the 'base.njk' layout and assigns the tag "pages." The content of this page is generated by iterating over the posts in the 'notes' collection (in reverse order) and including the content of 'page-snippet.njk' for each post.

### notes.json

Open the _notes/notes.json_ and add the following code:

```json
{
  "layout": "note.njk",
  "tags": ["notes", "posts"]
}
```

This front matter provides information about how this content should be processed and displayed. It specifies the layout 'note.njk' and assigns tags to the content. Tags are often used to categorise and organise content, and they can be used in templates to conditionally render content or apply specific styles.

### my-first-note.md

Open the _notes/my-first-note.md_ file and add the following code:

```markdown
---
title: My First Note
pageId: imagename
eleventyNavigation:
  key: My First Note
---

### This is a heading

Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam perspiciatis nam, ipsa soluta ex aut ut repudiandae aperiam eligendi nihil!
```

The front matter provides metadata such as the title, pageId, and Eleventy navigation information. The content of the file includes a heading and a paragraph.

### note.njk

Open the _\_includes/note.njk_ file and add the following code:

{% raw %}

```twig
---
layout: 'base.njk'
---
<div class="post-title">
<h2 id="main-content">
  <span>Notes:</span>
  <br />{{ title }}
  <br /><span class="post-date">{{ page.date | postDate }}
</span>
</h2>
</div>

<article class="notes">
  <div class="notes__image">
  <img class="invert-light" src="/assets/notes/{{ pageId }}.webp" alt="{{ pageId }} logo">
  </div>

  <div class="notes__content">
    {{ content | safe }}
  </div>
</article>
```

This template is designed to render individual notes. It includes a layout specified in the front matter ('base.njk') and contains a structure with an image and the content of the note. The template allows for dynamic rendering by using variables like {{ pageId }} and {{ content }}.

{% endraw %}

### sidebar.njk

Open the _\_includes/sidebar.njk_ file and add the following:

{% raw %}

```twig
<aside class="sidebar">
  <div class="sidebar__content">
    <h5>Notes</h5>
    {% set navPages = collections.notes | eleventyNavigation | reverse %}
      <ul>
      {%- for entry in navPages %}
        <li{% if entry.url == page.url %} class="active"{% endif %}>
          <a href="{{ entry.url }}">{{ entry.title }}</a>
        </li>
      {%- endfor %}
      </ul>
  </div>
</aside>
```

{% endraw %}

This code generates a sidebar with navigation links for notes, and it applies a class to highlight the active link based on the current page's URL.

### References

- [A Deep Dive Into Eleventy Static Site Generator by Stephanie Eckles, 2021](https://www.smashingmagazine.com/2021/03/eleventy-static-site-generator/).
- [Turn static HTML/CSS into a blog with CMS using the JAMStack by Kevin Powell, 2021](https://www.youtube.com/watch?v=4wD00RT6d-g)

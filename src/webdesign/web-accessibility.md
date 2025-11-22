---
title: Web Accessibility Basics
date: 2023-11-30
image: /assets/webdesign/accessibility.webp
---

### What is Web Accessibility?

Web accessibility is about making sure websites can be used by everyone, including people with disabilities. The aim is simple: equal access, clear content and a smooth experience for all users, whatever tools or assistive technology they rely on.

### Semantic HTML

Semantic HTML gives pages a proper structure that screen readers and other tools can understand. Use elements like `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>` and `<footer>` so content makes sense in the right order.

Headings should follow a clear hierarchy (`<h1>`, `<h2>`, `<h3>` and so on). This helps users jump through the page easily.

A few essentials to keep in mind:

- Use proper lists (`<ul>`, `<ol>`, `<li>`) rather than styling paragraphs to look like lists.
- Write meaningful link text instead of “click here”.
- Always associate form inputs with `<label>` elements.
- Use table markup (`<table>`, `<thead>`, `<tbody>`, `<th>`, `<td>`) when presenting tabular data.
- Images should have helpful `alt` text. Use `<figure>` and `<figcaption>` when more explanation is needed.

WAI-ARIA roles and attributes (`role`, `aria-*`) can help in specific cases, but they should support—not replace—good HTML.

### Focus Indication

Users navigating by keyboard or screen reader rely on knowing which element is “in focus”. Make sure your site has a clear, visible focus style.

You can:

- Keep the default focus outline or create your own using CSS.
- Make sure every interactive element can be reached with the Tab key.
- Ensure the focus style has strong contrast against the background.
- Keep focus behaviour consistent across your pages.

A visible focus state prevents users becoming “lost” on the page.

### Colour Contrast

Good colour contrast helps everyone but is essential for users with low vision. Check contrast between text and background meets WCAG guidelines.

Useful tools include:

- Browser dev tools for live contrast checking
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Contrast Ratio](https://contrast-ratio.com/)
- [WAVE tool](https://wave.webaim.org/extension/) for visual accessibility checks

Strong contrast improves readability and reduces eye strain, even for users without impairments.

### Resizable Text and Zoom

Make sure text scales properly when users zoom or change font sizes.

Helpful tips:

- Use relative units like `em` or `rem` instead of fixed pixel sizes.
- Use responsive layouts so content can adapt at larger zoom levels.
- Test your site with browser zoom tools to ensure nothing becomes unusable or clipped.

Accessible text sizing supports a wide range of users, including those with low vision or reading difficulties.

### Resources

- [MDN - Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [A11y Coffee](https://a11y.coffee/)
- [Solid Start](https://www.solidstart.info/)

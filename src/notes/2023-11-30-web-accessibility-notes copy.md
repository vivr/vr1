---
title: Web Accessibility Basics
pageId: accessibility
eleventyNavigation:
  key: Web Accessibility Basics
---

### What is Web Accessibility?

Web accessibility refers to the practice of ensuring that websites and web applications are designed and developed in a way that makes them usable and accessible to people with disabilities. The goal is to provide equal access and opportunity for all users, regardless of their abilities or impairments.

### Semantic HTML

Ensuring web accessibility involves implementing semantic elements like `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, and `<footer>` for proper document structure. This aids screen readers and other assistive technologies in udnerstanding the organisation of content.

Maintaining a logical hierarchy with heading elements (`<h1>`, `<h2>`, etc.) enhances user experience for individuals relying on screen readers. Consistent use and ordering of headings contribute to better navigation and understanding of content structure.

Proper use of list elements (`<ul>`, `<ol>`, `<li>`) facilitates accessibility, with screen readers announcing and providing navigation options for lists. Additionally, employing meaningful text for link anchor text (`<a>`) and associating form elements (`<form>`, `<input>`, `<label>`) using `<label>` elements enhance usability for individuals with visual impairments or using keyboard-only navigation. When incorporating tables (`<table>`, `<th>`, `<td>`), semantic elements like `<thead>`, `<tbody>`, `<tfoot>`, `<th>`, and `<td>` aid screen readers in interpreting the table structure.

For images (`<img>`, `<figure>`, `<figcaption>`), providing descriptive alternative text through the alt attribute ensures accessibility. Complex images benefit from the `<figure>` and `<figcaption>` elements for additional context. When needed, integrating WAI-ARIA attributes, such as `role` and `aria-*` attributes, enhances overall accessibility for diverse user needs.

### Focus Indication

Clear and consistent focus indicators are crucial for web accessibility, enabling effective interaction for users with visual impairments and those utilising keyboard navigation. Default browser focus indicators, such as colored outlines for buttons, links, and form fields, may lack visibility for all users. Utilising CSS to implement custom focus styles allows for enhanced visibility, providing control over appearance and the incorporation of visual cues like colour changes.

Employ WAI-ARIA's `aria-focus` attribute to explicitly indicate focus on elements, particularly beneficial for non-naturally focused elements like decorative or non-interactive areas. Improve keyboard navigation by ensuring elements are reachable with the Tab key, offering visual feedback on focus changes for efficient navigation. Maintain sufficient visual contrast between focus indicators and backgrounds to support users with low vision. Consistency and predictability in focus indicators across the website ensure user clarity, promoting a uniform appearance and behavior across all pages and components.

### Colour Contrast

Ensure adequate color contrast between text and background for readability, especially for users with visual impairments. Numerous tools and methods are available for assessing color contrast. You can use built-in developer tools in modern browsers to inspect and assess colour contrast directly, examining elements and computed styles. Online tools like [WebAIM's Contrast Checker](https://webaim.org/resources/contrastchecker/) and [Contrast Ratio](https://contrast-ratio.com/) enable input of specific colour values for assessing contrast ratios, adhering to Web Content Accessibility Guidelines (WCAG) recommendations. Additionally, consider browser extensions or plugins, such as the [WAVE Evaluation Tool](https://wave.webaim.org/extension/), that provide colour contrast information within the browser, overlaying visual indicators to highlight areas not meeting accessibility standards.

### Resizable Text and Zoom

Design your website to facilitate text resizing without sacrificing content or functionality and ensure usability when users zoom in. Use relative units like ems or rems, rather than fixed pixel sizes, to define text sizes, allowing text to scale appropriately with browser adjustments or zoom functions. Implement responsive design principles for adaptability to various screen sizes, inherently supporting text resizing within fluid layouts. Test your website with browser zoom functions across different browsers and devices to verify consistent behavior, and be attentive to potential zoom-only breakpoints, ensuring your design remains functional and visually appealing at different zoom levels.

### Sources

- [MDN - Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [A11y Coffee](https://a11y.coffee/)
- [Solid Start](https://www.solidstart.info/)

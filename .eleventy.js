const { DateTime } = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

/**
 * Helpers
 */

function formatPostDate(dateObj) {
  return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
}
function formatPostMonth(dateObj) {
  return DateTime.fromJSDate(dateObj).toFormat("LLL").toLowerCase();
}
function formatPostYear(dateObj) {
  return DateTime.fromJSDate(dateObj).toLocaleString({ year: "numeric" });
}

function getOrder(data) {
  return data && typeof data.order !== "undefined" ? data.order : null;
}
function getTime(item) {
  return item.date instanceof Date ? item.date.getTime() : 0;
}

function sortByOrderAsc(a, b) {
  const oa = getOrder(a.data);
  const ob = getOrder(b.data);
  const na = oa === null ? 0 : oa;
  const nb = ob === null ? 0 : ob;
  return na - nb;
}

function sortByOrderThenDateAsc(a, b) {
  const oa = getOrder(a.data);
  const ob = getOrder(b.data);

  if (oa !== null && ob !== null) {
    return oa - ob;
  }
  if (oa !== null) return -1;
  if (ob !== null) return 1;

  return getTime(a) - getTime(b);
}

function sortByDateDesc(a, b) {
  return getTime(b) - getTime(a);
}

// Helper: get topic slug from an inputPath under src/programming/
function getProgrammingTopicSlugFromPath(path) {
  if (!path) return null;
  const parts = path.split("/");
  const idx = parts.indexOf("programming");
  if (idx === -1 || idx + 1 >= parts.length) return null;
  return parts[idx + 1]; // e.g. "javascript-basics"
}

module.exports = function (eleventyConfig) {
  /**
   * Passthrough copies
   */
  eleventyConfig.addPassthroughCopy("./src/css/style.css");
  eleventyConfig.addPassthroughCopy("./src/assets");

  /**
   * Filters
   */
  eleventyConfig.addFilter("postDate", formatPostDate);
  eleventyConfig.addFilter("postMonth", formatPostMonth);
  eleventyConfig.addFilter("postYear", formatPostYear);

  // Sort an array of items by `order` ascending
  eleventyConfig.addFilter("sortByOrderAsc", function (items) {
    if (!Array.isArray(items)) return [];
    return items.slice().sort(sortByOrderAsc);
  });

  // Sort an array of items by date descending (newest first)
  eleventyConfig.addFilter("sortByDateDesc", function (items) {
    if (!Array.isArray(items)) return [];
    return items.slice().sort(sortByDateDesc);
  });

  // Detect if a collection is under src/programming/
  eleventyConfig.addFilter("isProgrammingCollection", function (items) {
    if (!Array.isArray(items) || items.length === 0) return false;
    const first = items[0];
    const path = first.inputPath || "";
    return path.includes("/src/programming/");
  });

  /**
   * Plugins
   */
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);

  /**
   * posts
   */
  eleventyConfig.addCollection("posts", function (collectionApi) {
    const items = collectionApi.getFilteredByTag("posts");
    return items.slice().sort(sortByOrderThenDateAsc);
  });

  /**
   * postsForNav
   */
  eleventyConfig.addCollection("postsForNav", function (collectionApi) {
    const items = collectionApi.getFilteredByTag("posts");

    const groups = {};
    const sectionOrder = [];

    items.forEach((item) => {
      const tags = Array.isArray(item.data.tags) ? item.data.tags : [];
      const section =
        tags.find((t) => t !== "posts" && t !== "frontPage") || "misc";

      if (!groups[section]) {
        groups[section] = [];
        sectionOrder.push(section);
      }
      groups[section].push(item);
    });

    const result = [];

    sectionOrder.forEach((section) => {
      const all = groups[section] || [];

      const withOrder = all
        .filter((i) => getOrder(i.data) !== null)
        .slice()
        .sort(sortByOrderAsc);

      const withoutOrder = all
        .filter((i) => getOrder(i.data) === null)
        .slice()
        .sort(sortByDateDesc);

      result.push(...withOrder, ...withoutOrder);
    });

    return result;
  });

  /**
   * programmingTopics
   *
   * One entry per programming topic (folder under src/programming/).
   * Uses:
   *  - first markdown file in the topic (by `order`) for the URL
   *  - folder data (e.g. javascript-basics/javascript-basics.json) for image/title
   */
  eleventyConfig.addCollection("programmingTopics", function (collectionApi) {
    // All markdown items under src/programming/
    const allProgrammingItems = collectionApi.getAll().filter((item) => {
      const path = item.inputPath || "";
      return (
        path.includes("/src/programming/") &&
        path.endsWith(".md")
      );
    });

    const topicMap = new Map(); // slug -> [items]

    allProgrammingItems.forEach((item) => {
      const slug = getProgrammingTopicSlugFromPath(item.inputPath);
      if (!slug) return;

      if (!topicMap.has(slug)) {
        topicMap.set(slug, []);
      }
      topicMap.get(slug).push(item);
    });

    function titleFromSlug(slug) {
      return slug
        .split("-")
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ");
    }

    const topics = [];

    topicMap.forEach((items, slug) => {
      if (!items || items.length === 0) return;

      // Sort items in a topic by `order` (for first-page URL)
      const sorted = items.slice().sort((a, b) => {
        const oa = typeof a.data.order === "number" ? a.data.order : 0;
        const ob = typeof b.data.order === "number" ? b.data.order : 0;
        return oa - ob;
      });

      const first = sorted[0];
      if (!first) return;

      const topicTitle =
        first.data.seriesTitle ||
        titleFromSlug(slug);

      const topicImage = first.data.image || "";

      // Find the latest date among items in this topic
      const latestTime = items.reduce((max, item) => {
        const t = getTime(item);
        return t > max ? t : max;
      }, 0);

      topics.push({
        url: first.url,
        latestTime,
        data: {
          title: topicTitle,
          image: topicImage,
        },
      });
    });

    // Sort topics by latest post date (newest topic first)
    topics.sort((a, b) => b.latestTime - a.latestTime);

    return topics;
  });

  return {
    dir: {
      input: "src",
      output: "docs",
    },
  };
};

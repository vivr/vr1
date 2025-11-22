const fs = require("fs");
const path = require("path");

module.exports = () => {
  const srcDir = path.join(__dirname, ".."); // points to src/
  const entries = fs.readdirSync(srcDir, { withFileTypes: true });

  // Only include folders that contain a .njk collection index file
  const collections = [];

  entries.forEach((entry) => {
    if (!entry.isDirectory()) return;

    const folder = entry.name;

    // Skip Eleventy folders
    if (folder.startsWith("_")) return;
    if (folder === "assets" || folder === "css") return;

    // Look for <folder>.njk e.g. programming.njk, webdesign.njk
    const indexNJK = path.join(srcDir, `${folder}.njk`);
    if (!fs.existsSync(indexNJK)) return;

    // Attempt to read image path from the collection JSON file
    let image = `/assets/${folder}/${folder}.webp`;
    const jsonPath = path.join(srcDir, folder, `${folder}.json`);

    if (fs.existsSync(jsonPath)) {
      try {
        const data = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
        if (data.image) {
          image = data.image;
        }
      } catch (_) {
        // ignore parse errors
      }
    }

    const title =
      folder
        .split("-")
        .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
        .join(" ");

    collections.push({
      slug: folder,
      title,
      image,
    });
  });

  return collections;
};

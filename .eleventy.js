const fs = require("fs");
const path = require("path");
const dateFunctions = require("date-fns");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const rss = require("@11ty/eleventy-plugin-rss");
const eleventyImg = require("@11ty/eleventy-img");
const markdownIt = require("markdown-it");
const markdownItNamedHeadings = require("markdown-it-named-headings");

const graph = require("./_utilities/graph.js");

module.exports = function (eleventyConfig) {
  async function imageShortcode(src, alt) {
    let metadata = await eleventyImg(src, {
      widths: ["auto"],
      formats: ["avif", "jpeg", "png", "webp"],
      outputDir: path.join("_site", "img")
    });

    let imageAttributes = {
      alt,
      loading: "lazy",
      decoding: "async",
    };

    return eleventyImg.generateHTML(metadata, imageAttributes, {
      whitespaceMode: "inline",
    });
  }
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(rss);

  // Allow assets e.g. images to be accessed
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("2020/**/*.png");

  // Custom filters
  eleventyConfig.addFilter("date", function (date, formatString) {
    return date ? dateFunctions.format(new Date(date), formatString) : date;
  });
  eleventyConfig.addFilter("dateISO", function (date) {
    return date ? dateFunctions.formatISO(new Date(date)) : date;
  });

  // Custom shortcode
  eleventyConfig.addShortcode("slideImagePath", function (slide, optimised) {
    if (!optimised) {
      return `/assets/img/dsl-accessibility-slides/dsl-accessibility-slides-${slide}.png`;
    }
    const path = `/assets/img/dsl-accessibility-slides-optimised/dsl-accessibility-slides-${slide}`;

    // Since we only have images in jpg and png format we can check if there's a
    // jpg and if there isn't assume there's a png to use.
    const fileSuffix = fs.existsSync(__dirname + path + ".jpg")
      ? ".jpg"
      : ".png";
    return path + fileSuffix;
  });

  eleventyConfig.addPairedAsyncShortcode("graph", graph);

  // Custom markdown rendering
  const markdownOptions = {
    html: true,
    breaks: true,
    linkify: true,
  };
  const markdownRenderer = markdownIt(markdownOptions).use(
    markdownItNamedHeadings
  );
  eleventyConfig.setLibrary("md", markdownRenderer);

  return {
    passthroughFileCopy: true,
    markdownTemplateEngine: "njk",
  };
};

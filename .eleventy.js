const fs = require('fs')
const dateFunctions = require('date-fns')
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")
const rss = require("@11ty/eleventy-plugin-rss")

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(syntaxHighlight)
    eleventyConfig.addPlugin(rss)

    // Allow assets e.g. images to be accessed
    eleventyConfig.addPassthroughCopy('assets')
    eleventyConfig.addPassthroughCopy('favicon.ico')
    eleventyConfig.addPassthroughCopy('2020/**/*.png')

    // Custom filters
    eleventyConfig.addFilter("date", function(date, formatString) {
        return date ? dateFunctions.format(new Date(date), formatString) : date
    })
    eleventyConfig.addFilter("dateISO", function(date) {
        return date ? dateFunctions.formatISO(new Date(date)) : date
    })

    // Custom shortcode
    eleventyConfig.addShortcode("slideImagePath", function(slide, optimised) {
        if (!optimised) {
            return `/assets/img/dsl-accessibility-slides/dsl-accessibility-slides-${slide}.png`
        }
        const path = `/assets/img/dsl-accessibility-slides-optimised/dsl-accessibility-slides-${slide}`

        // Since we only have images in jpg and png format we can check if there's a 
        // jpg and if there isn't assume there's a png to use.
        const fileSuffix = fs.existsSync(__dirname + path + '.jpg') ? '.jpg' : '.png'
        return path + fileSuffix
    })


    return {
       passthroughFileCopy: true,
       markdownTemplateEngine: "njk"
    }
}

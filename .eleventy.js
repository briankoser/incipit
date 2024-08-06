let quote = function(quote) {
    return `
<figure class="quote">
    <blockquote>${quote.Incipit}</blockquote>
    <figcaption>— ${quote.Author}, <i>${quote.Book}</i></figcaption>
</figure>`;
}

module.exports = function (eleventyConfig) {
    eleventyConfig.addShortcode("quote", quote);

    eleventyConfig.addPassthroughCopy({'assets/css': 'css'});
    eleventyConfig.addPassthroughCopy({'assets/img': 'img'});
    eleventyConfig.addPassthroughCopy({'assets/js': 'js'});
    
    return {
        markdownTemplateEngine: "njk"
    };
};
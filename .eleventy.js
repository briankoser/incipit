let quote = function(quote) {
    let blockquote = quote.preformatted
        ? `<blockquote><pre>${quote.incipit}</pre></blockquote>`
        : `<blockquote>${quote.incipit}</blockquote>`;
    
    return `
<figure>
    ${blockquote}
    <figcaption>— ${quote.author}, <i>${quote.book}</i></figcaption>
</figure>`;
}

module.exports = function (eleventyConfig) {
    eleventyConfig.addShortcode("quote", quote);

    eleventyConfig.addPassthroughCopy({'assets/css': 'css'});
    eleventyConfig.addPassthroughCopy({'assets/fonts': 'fonts'});
    eleventyConfig.addPassthroughCopy({'assets/img': 'img'});
    eleventyConfig.addPassthroughCopy({'assets/js': 'js'});
    
    return {
        markdownTemplateEngine: "njk"
    };
};
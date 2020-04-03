const purgecss = require("@fullhuman/postcss-purgecss")({
    // Specify the paths to all of the template files in your project
    content: [
        "./src/**/*.tsx",
        // etc.
    ],

    // Include any special characters you're using in this regular expression
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
    plugins: [
        require("postcss-import")({
            plugins: [
                require("stylelint")({
                    /* your options */
                }),
            ],
        }),
        require("tailwindcss"), // TODO: add tailwind configuration
        require("postcss-preset-env"),
        ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
    ],
};

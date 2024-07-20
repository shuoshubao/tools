module.exports = {
    printWidth: 160,
    useTabs: false,
    tabWidth: 4,
    semi: true,
    singleQuote: true,
    trailingComma: 'none',
    proseWrap: 'never',
    arrowParens: 'avoid',
    bracketSpacing: true,
    htmlWhitespaceSensitivity: 'ignore',
    overrides: [
        {
            files: 'mock/**/*.json',
            options: {
                printWidth: 0
            }
        }
    ]
};

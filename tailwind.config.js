const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: {
        enabled: process.env.REACT_APP_IS_PRODUCTION || false,
        content:["./src/*.js", "./src/**/*.js"]
    },
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: {},
    plugins: [require('@tailwindcss/ui')],
}

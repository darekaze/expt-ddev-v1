/* eslint-disable global-require */
// Theme doc: https://tailwindcss.com/docs/theme/
// Supporing plugins: https://twin-docs.netlify.app/plugin-support
// Customizing typography: https://github.com/tailwindlabs/tailwindcss-typography#customization

module.exports = {
  theme: {
    extend: {
      colors: {
        text: '#8BADC1',
        bg: '#001122',
        primary: '#07c',
        secondary: '#30c',
        muted: '#f6f6f9',
        gray: '#2d3952',
        highlight: 'hsla(205, 100%, 40%, 0.125)',
        cyan: '#29c5c5',
      },
      fonts: {
        body: 'system-ui, sans-serif',
        heading: 'inherit',
        monospace: 'Menlo, monospace',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

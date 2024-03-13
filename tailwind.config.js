/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
        colors: {
          primary: {
            100: "#e8f7f2",
            500: "#50D6B6"
          },
          secondary: "#F7931E",
          button: "#F42186",
          tertiary: "#333333",
          background: "#f9f9f9",
        },
        zIndex: {
          60: '60',
          70: '70',
          80: '80',
          90: '90',
          100: '100',
        }
      },
    },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

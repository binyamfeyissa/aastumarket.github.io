/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App/views/**/*.{html,js,php}"],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:{
      fontFamily: {
        sans: ['"Akshar"', 'sans-serif'], // Override default sans
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./src/app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        timetwist: ["Timetwist", "serif"],
        helvetica: ["Helvetica Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};

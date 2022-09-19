/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      serif: ["Noto Serif Display, ui-serif, Georgia"],
    },
    letterSpacing: {
      widest: ".2em",
    },
    extend: {},
  },
  plugins: [],
};

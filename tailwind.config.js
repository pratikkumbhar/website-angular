/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      body: ['"Roboto", sans-serif'],
    },
    colors: {
      primary: "#0E3998",
      secondary: "#F3F1F6",
      accent: "#FFBC01",
      myblack: "#150E1F",
      mygray: "#554B4E",
    },
    extend: {
      backgroundImage: {},
    },
  },
  plugins: [],
};

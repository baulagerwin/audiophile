/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rust: "#D87D4A",
        apricot: "#FBAF85",
        jetBlack: "#101010",

        whiteSmoke: "#F1F1F1",
        graySmoke: "#979797",
        grainsBoro: "#CFCFCF",
        offWhite: "#FAFAFA",
        white: "#FFF",
        black: "#000",
        error: "#CD2C2C",
      },
    },
  },
  plugins: [],
};

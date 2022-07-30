/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        dark: {

          "primary": "#66CC8A",

          "secondary": "#377CFB",

          "accent": "#EA5234",

          "neutral": "#FFFFFF",

          "base-100": "#333C4D",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
        light: {

          "primary": "#66CC8A",

          "secondary": "#377CFB",

          "accent": "#EA5234",

          "neutral": "#333C4D",

          "base-100": "#FFFFFF",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },

      },
      "cupcake",
      "retro",
      "business",
      "corporate"
    ],
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fira: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
}
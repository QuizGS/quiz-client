/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        dark: {

          "primary": "#1a385c",

          "secondary": "#f96262",

          "accent": "#f0e64b",

          "neutral": "#848e8f",

          "base-100": "#1a1d20",

          "info": "#0ea5e9",

          "success": "#01c873",

          "warning": "#facc15",

          "error": "#ef4444",
        },
        light: {

          "primary": "#1a385c",

          "secondary": "#f96262",

          "accent": "#f0e64b",

          "neutral": "#848e8f",

          "base-100": "#FFFFFF",

          "info": "#0ea5e9",

          "success": "#01c873",

          "warning": "#facc15",

          "error": "#ef4444",
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
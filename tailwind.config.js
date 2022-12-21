/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#07BEB8",

          secondary: "#000000",

          accent: "#000000",

          neutral: "#000000",

          "base-100": "#1C1C27",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },

        dark: {
          primary: "#07C0BA",

          secondary: "#636271",

          accent: "#37CDBE",

          neutral: "#3D4451",

          "base-100": "#FFFFFF",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
      "dark",
    ],
  },
  content: [],
  theme: {
    extend: {},
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("daisyui")],
};

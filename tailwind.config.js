/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

theme: {
  screens: {
    sm: "480px",
    tablet: "768px",
    laptop1: "976px",
    laptop2: "1280px",
    desktop: "1440px",
  },
  extend: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      SEPurple: "#8F40DE",
      SESky: "#05D6D9",
      SEBlue: "#6B68FA",
      SEDarkBlue: "#210042",
      SELightPink: "#FF96F8",
      SEAmber: "#F44E4E",
      SEYellow: "#FF9743",
      SEGreen: "#51AB46",
    },
    borderRadius: {
      "4xl": "2rem",
      "5xl": "2.5rem",
      "6xl": "3rem",
    },
    boxShadow: {
      "3xl": "-8px -5px 50px -19px rgba(0,0,0,0.75)",
    },
    fontFamily: {},
  },
},
// plugins: [require("preline/plugin"), require("flowbite/plugin")],

  plugins: [],
}

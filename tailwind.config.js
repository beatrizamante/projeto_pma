/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        lighter: "#F7F7F7",
        semilight: "#F0F0EB",
        semidark: "#9B9293",
        darker: "#303138"
      },
    },
  },
  plugins: [],
}
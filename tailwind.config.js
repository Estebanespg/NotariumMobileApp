/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    theme: {
      extend: {
        fontFamily: {
          sans: ['Sora', 'sans-serif'],
        },
      },
    },
  },
  plugins: [],
}


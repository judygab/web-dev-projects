/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        graphikMedium: ["Graphik Medium", "sans-serif"],
        graphikLight: ["Graphik Light", "sans-serif"],
        graphikBold: ["Graphik Bold", "sans-serif"],
      }
    },
  },
  plugins: [],
}

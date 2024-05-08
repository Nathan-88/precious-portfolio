/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6C5CCC",
        secondary: "#54595F",
        tertiary: "#F1F1F1",
        card: "#F9F9F9"
      },
      backgroundImage: {
        parallex: "linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),url('./src/assets/backImg.jpg')",

      }
    },
  },
  plugins: [],
}


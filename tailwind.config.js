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
        marino: "#4054B2",
        listcol: "#296DB3",
        secondary: "#54595F",
        sidebar : "#525252",
        text: "#7A7A7A",
        accent: "#61CE70",
        eucalyptus: "#23A455",
        tertiary: "#F1F1F1",
        card: "#F9F9F9"
      },
      backgroundImage: {
        parallex: "linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),url('./src/assets/backImg.jpg')",

      }
    },

    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '2560px',
      // => @media (min-width: 2560px) { ... }
    }
  },
  plugins: [],
}


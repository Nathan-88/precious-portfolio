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
        whitecard: "#F5F5F5",
        hueblack: "#454545",
        card: "#F9F9F9",
        hrline: "#898383"
      },
      fontFamily: {
        'work-sans': ['"Work Sans"', 'sans-serif'],
        'roboto': ["Roboto", 'sans-serif'],
        'Helvetica-Neue': ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif']
      },
      fontSize: {
        sm: ['15px', '22.2px'],
        base: ['16px', '24px'],
        lg: ['18px', '28px'],
        xl: ['20px', '28px'],
        '2xl': ['24px', '32px'],
        '3xl': ['28px', '31.4px'],
        '4xl': ['36px', '40px'],
        xxl: ['80px', '88px'],

    },
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


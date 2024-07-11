/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      smd: '600px',
      md: '825px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        light: "#fffcf6",
        lightgray: '#e5e4e2',
        lightblue: "#2248bb",
        dark: "#121621",
        darkblue:"#010066",
        customgreen:"#1b8016",
        customyellow: "#fcb92c",
        customred: "#fb0102",
      },
      fontFamily: {
        // 'styrene': ["StyreneA", "san serif"]
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      colors: {
        "primary": "#252b31",
        "secondary": "#1d2730",
        "accent": "#66c0ee",
        "neutral": "#191D24",
        "base-100": "#2A303C",
        "info": "#3ABFF8",
        "success": "#36D399",
        "warning": "#FBBD23",
        "error": "#F87272",
      },
      
    },


  },
  plugins: [],
}


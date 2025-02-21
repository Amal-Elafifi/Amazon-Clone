/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,js,ts,tsx}","./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['Alegreya Sans', 'ui-serif', 'Georgia'],
        mono: ['IBM Plex Sans Condensed', 'ui-monospace', 'SFMono-Regular'],
        inika: ["Inika", 'serif'], // Add el custom hna
        Lato: ["Lato", "sans-serif"],
      },
      backgroundColor: {
        headerColor : 'rgba(19, 25, 33, 1)',
        searchCategory: 'rgba(217, 217, 217, 1)',
        searchbtn: "rgba(255, 204, 0, 1)",
     
      },
      colors: {
        lightfont: "rgba(192, 204, 204, 1)",

        searchCategoryColor: "rgba(103, 103, 103, 1)",
        searchicon: ' rgba(33, 33, 33, 1)',
      },
      // padding: {

      // }
    },
  },
  plugins: [],
}


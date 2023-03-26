/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        merriweather: ["Merriweather"],
      },

      // animation: {
      //   "fade-in": "fade-in 1s linear",
      // },
      // keyframes: {
      //   "fade-in": {
      //     "0%": { opacity: "0" },
      //     "100%": { opacity: "1" },
      //   },
      // },
    },
  },
  plugins: [],
};

module.exports = config;

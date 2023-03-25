/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "merriweather": ["Merriweather"],
      }
    },
  },
  plugins: [],
};

module.exports = config;

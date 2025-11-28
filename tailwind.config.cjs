/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fdf7f3",
          100: "#f7e0cf",
          500: "#b97a57",
          700: "#7a4a32",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

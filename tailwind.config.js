/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        playfair: ["'Playfair Display'", "serif"],
        outfit: ["Outfit", "sans-serif"],
        libertinus: ["'Libertinus Serif'", "serif"],
        reem: ["'Reem Kufi'", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      colors: {
        bgColor: "#000000",
        primaryColor: "#64FFDA",
        textColor: "#8892b0",
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  important: true,

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f3f3f3",
        secondary: "#333",
        tertiary: "#0073E6",
        baige: "#FEF8EC",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-bg": "url('./src/assets/bg-hero.png')",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGray: "#CAB6D7",
        primary: "#9854CB",
        primaryHover: "#7e4da3",
        lightPurple: "#F3ECF8",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['"DM Sans"', "sans-serif"],
      heading: ["Unbounded", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};

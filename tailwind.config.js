/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#081b29",
        secondBgColor: "#112e42",
        mainColor: "#00abf0",
      },

      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
      },

      span: {
        set: "mainColor",
      },
    },
  },
  plugins: [],
};

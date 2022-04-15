module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
        mont: ["Montserrat", "sans-serif"],
        har: ["Harmattan", "sans-serif"],
        bree: ["Bree Serif", "serif"],
        liv: ["Livvic", "sans-serif"],
      },
      colors: {
        primary: "#3f4954",
        hoverGreen: "#104f55",
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A", // blue-900
        secondary: "#1d4ed8", // blue-700
      },
      fontFamily: {
        heading: ['"Baloo 2"', "sans-serif"],
      },
      transitionTimingFunction: {
        "in-out-cubic": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

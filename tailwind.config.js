/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,tx,tsx}"],
  theme: {
    extend: {
      colors: {
        themeblue: "#0a66c2",
        themgray: "#00000099",
        themered: "#d11124",
        hoverblue: "#006097",
        themelightblue: "#D0E8FF",
        hovergrey: "rgba(207, 207, 207, 0.25)",
      },
    },
  },
  plugins: [],
};

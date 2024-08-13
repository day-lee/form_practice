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
        zoomgrey: "#f7f9fa",
        zoomagreegrey: "#747487",
        zoombtnblue: "#0e72ed",
        zoomdarkblue: "#0956b5",
        zoomhoverblue: "#033a7d",
        zoomred: "#b22424",
        zoomlightred: "#fff2f5",
        zoombordergrey: "#6e7680",
        zoomsigningrey: "#f1f4f6",
        zoomsignindarkgrey: "#6e7680",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#1DA1F2",
        card: "#F1F1F1CC",
        notification: "#F22A1D"
      },
      fontFamily: {
        openSans: ["Open Sans"],
        roboto: ["Roboto"]
      }
    },
  },
  plugins: [],
}
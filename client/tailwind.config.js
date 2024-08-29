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
        secondary: "#F1F1F1",
        notification: "#F22A1D",
        message: "#000000B2"
      },
      fontFamily: {
        openSans: ["Open Sans"],
        roboto: ["Roboto"]
      }
    },
  },
  plugins: [],
}
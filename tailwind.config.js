module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "serif"],
        roboto: ["Roboto", "serif"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

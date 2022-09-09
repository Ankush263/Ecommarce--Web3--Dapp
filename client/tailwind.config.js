/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "#373B44",
        'background': "-webkit-linear-gradient(to right, #4286f4, #373B44)",
        'background': "linear-gradient(to right, #4286f4, #373B44)"

      }
    },
  },
  plugins: [],
}

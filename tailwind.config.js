/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      inset: {
        '18': '4.5rem', // Custom value for top
      },
      fontFamily: {
        libre: ['"Poppins", sans-serif'], // Google Font configuration
      }
    },
  },
  plugins: []
}
  
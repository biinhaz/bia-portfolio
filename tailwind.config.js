/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#5C00AA',
        'secondary-color': '#E923E5'
      }
    },
  },
  plugins: [],
}
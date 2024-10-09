/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#10375C', 
        secondary: '#EB8317', 
        background: '#F4F6FF',
      },
    },
  },
  plugins: [],
}

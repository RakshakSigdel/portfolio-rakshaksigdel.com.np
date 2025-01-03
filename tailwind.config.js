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
      animation: {
        "radar-spin": "radar-spin 10s linear infinite",
      },
      keyframes: {
        "radar-spin": {
          from: { transform: "rotate(20deg)" },
          to: { transform: "rotate(380deg)" },
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

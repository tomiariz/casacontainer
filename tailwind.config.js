/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'txt-color': '#ffffff', // Blanco
        'accnt-color': '#808080', // Gris
        'bg-color': '#000000', // Negro
        'blur-color': 'rgba(0, 0, 0, 0.5)',
        'particle-color': '#ffffff', // Blanco
        'card-bg-color': 'rgba(13, 13, 13, 0.9)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        lora: ['Lora', 'serif'],
      },
      boxShadow: {
        'card': '0px 4px 8px rgba(255, 255, 255, 0.2)',
      },
    },
  },
  plugins: [],
}
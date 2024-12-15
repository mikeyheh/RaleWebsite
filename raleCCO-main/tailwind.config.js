/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['Helvetica', 'sans-serif'],
        dafoe: ['"Mr Dafoe"', 'cursive'],
        'archivo-black': ['"Archivo Black"', 'sans-serif'],
      },
    },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
  },
  plugins: [],
}

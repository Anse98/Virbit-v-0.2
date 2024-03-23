/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'phone': '360px', //breakpoint per dispositivi "telefono" con larghezza minima di 370px
        'tablet': '700' //breakpoint per dispositivi "tablet" con larghezza minima di 700px
      }
    },
  },
  plugins: [],
}


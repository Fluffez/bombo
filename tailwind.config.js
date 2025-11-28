/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1f2937',
        secondary: '#ff6b35',
        accent: '#004e89'
      }
    }
  },
  plugins: []
}

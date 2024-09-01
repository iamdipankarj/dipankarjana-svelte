/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,svelte}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6464',
        subheading: '#504E4E',
        social: '#79819A',
        socialtext: '#47516B',
        socialicon: '#E2E6EE',
        footertext: '#21243D'
      }
    }
  },
  plugins: [],
}
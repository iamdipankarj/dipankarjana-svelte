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
        footertext: '#21243D',

        // Badges
        lightBlue: '#F0FAFF',
        lightBlueText: '#0075AD',
        lightBlueStroke: '#ADE4FF',
        
        lightGreen: '#EEFBF4',
        lightGreenText: "#17663A",
        lightGreenStroke: '#B2EECC',

        lightRed: '#FEF0F4',
        lightRedText: '#D50B3E',
        lightRedStroke: '#D50B3E',

        lightGray: '#F7F7F8',
        lightGrayText: '#3F3F50',
        lightGrayStroke: '#8A8AA3',

        lightYellow: '#FFF9EB',
        lightYellowText: '#8A6100',
        lightYellowStroke: '#C28800',

        lightOrange: '#FFF2EE',
        lightOrangeText: '#B82E00',
        lightOrangeStroke: '#EB3A00',

        lightPurple: '#F4F1FD',
        lightPurpleText: '#4316CA',
        lightPurpleStroke: '#7047EB',

        lightPink: '#FEECFB',
        lightPinkText: '#A5088C',
        lightPinkStroke: '#A5088C',

        lightTeal: '#719C9A',
        lightTealText: '#43605e',
        lightTealStroke: '#719C9A'
      }
    }
  },
  plugins: [],
}
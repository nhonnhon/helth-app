/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        light: '#FFFFFF',
        'dark-500': '#414141',
        'dark-600': '#2E2E2E',
        'gray-400': '#777777',
        'primary-300': '#FFCC21',
        'primary-400': '#FF963C',
        'primary-500': '#EA6C00',
        'primary-300-400': 'linear-gradient(180deg, #FFCC21 0%, #FF963C 100%)',
        'secondary-300': '#8FE9D0',
        'menu-divide-top': 'rgb(255 255 255 / 15%)',
        'menu-divide-bottom': 'rgb(46 46 46 / 25%)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        notosansjp: ['Noto Sans JP', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-yellowred':
          'linear-gradient(180deg, #FFCC21 0%, #FF963C 100%)',
        'achievement-bg': 'linear-gradient(225deg, #FFCC21 0%, #FF963C 100%)',
        'btn-gradient':
          'linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)',
      },
    },
    screens: {
      md: '960px',
      lg: '1280px',
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};

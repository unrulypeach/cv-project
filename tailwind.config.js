/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx}',
  ],
  theme: {
    colors: {
      black: '#02010A',
      blue: '#10131F',
      lblue: '#dceff7',
      hovBlue: '#c1dbe5',
      grey: '#f9f9f9',
      dgrey: '#f0eded',
      sgrey: '#E0E0E0',
      darkgreen: '#272B2A',
      green: '#74817F',
      silver: '#A0A7A6',
      snow: '#F7F3F3',
      white: '#FFFFFF',
      red: '#e87474',
      lred: 'rgba(232, 116, 116, 30%)',
    },
    extend: {
      height: {
        96: '94vh',
      },
      width: {
        99: '98%',
      },
      flexBasis: {
        45: '46%',
        10: '8%',
      },
    },
  },
  plugins: [],
};

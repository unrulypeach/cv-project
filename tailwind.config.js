/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx}',
  ],
  theme: {
    colors: {
      black: '#02010A',
      blue: '#10131F',
      grey: '#41525A',
      sgrey: '#E0E0E0',
      darkgreen: '#272B2A',
      green: '#74817F',
      silver: '#A0A7A6',
      snow: '#F7F3F3',
      white: '#FFFFFF',
      red: '#9D6C6C',
    },
    extend: {
      width: {
        99: '98%',
      },
    },
  },
  plugins: [],
};

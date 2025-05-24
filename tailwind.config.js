/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './apps/FlowerApp/src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      colors: {
        ree: 'red',
      },
    },
  },
  plugins: []
};
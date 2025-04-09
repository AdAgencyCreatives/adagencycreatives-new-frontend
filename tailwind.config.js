// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './components/**/**/*.{js,ts,jsx,tsx}',
        './pageComponents/**/*.{js,ts,jsx,tsx}',
        './pageComponents/**/**/*.{js,ts,jsx,tsx}',
        './icons/**'
      ],
      fontFamily: {
        hass75: ['Hass75', 'sans-serif'],
        alta: ['AltaRegular', 'sans-serif'],
      },
      colors: {
        primary: 'var(--primary)'
      }
    },
  },
};
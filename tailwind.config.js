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
        './icons/**',
        './css/**',
        './contexts/**/**/*.{js,ts,jsx,tsx}',
      ],
      fontFamily: {
        hass75: ['Hass75', 'sans-serif'],
        alta: ['AltaRegular', 'sans-serif'],
        wix: ['var(--font-wix)', 'sans-serif'],
      },
      colors: {
        default: '#6e6e6e'
      },
      boxShadow: {
        white: '0 1px 4px rgba(0, 0, 0, 0.6)',
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite', // default is 1s
        'spin-slower': 'spin 4s linear infinite',
      },
    },
  },
};
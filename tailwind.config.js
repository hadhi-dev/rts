module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  darkMode:  'class', // or 'media' or 'class'
  purge: ['./src/**/*.js'],
  theme: {
    extend: {
      fontSize: {
        14: '14px',
      },
      zIndex: {
        '10': 10,
      },
      backgroundColor: {
        'main-bg': '#FAFBFB',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#33373E',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        color: 'rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
};
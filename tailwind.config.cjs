module.exports = {
  // purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        btnColor: '#191d24',
        activeColor: '#570df8',
      },
      screens: {
        sm: '480px',
        xmd: { max: '767px' },
        xl: '1360px',
        '2xl': '1360px',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      height: {
        220: '220px',
        700: '700px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

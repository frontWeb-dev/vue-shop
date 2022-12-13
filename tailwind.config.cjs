module.exports = {
  // purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        btnColor: '#191d24',
      },
      screens: {
        sm: '480px',
        xl: '1360px',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

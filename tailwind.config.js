module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      fontfamily: {
        a1: 'Aktiv-Black',
        a2: 'Aktiv-Bold',
        a3: 'Aktiv-Medium',
        a4: 'Aktiv-Regular',
        a5: 'Aktiv-Light',
        a6: 'Aktiv-Thin',
      },
    },
  },
  plugins: [],
};

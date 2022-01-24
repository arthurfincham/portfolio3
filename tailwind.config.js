module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      screens: {
        xs: '440px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1480px',
      },
      fontFamily: {
        a1: ['Aktiv-Black'],
        a2: ['Aktiv-Bold'],
        a3: ['Aktiv-Medium'],
        a4: ['Aktiv-Regular'],
        a5: ['Aktiv-Light'],
        a6: ['Aktiv-Thin'],
        mono1: ['IBMPlexMono-Bold'],
        mono2: ['IBMPlexMono-SemiBold'],
        mono3: ['IBMPlexMono-Medium'],
        mono4: ['IBMPlexMono-Regular'],
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      keyframes: {
        show: {
          '0%': { opacity: 0, transform: 'translateY(-500px)'},
          '100%': { opacity: 1 , transform: 'translateY(0)' },
        }
      },

      animation: {
        show: 'show 1.8s ease-in-out',
      }
    },
  },
  plugins: [],
}

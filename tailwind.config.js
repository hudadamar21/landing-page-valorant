module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#FD4556',
          200: '#BD3944',
          300: '#53212B'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

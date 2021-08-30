module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['"Atkinson Hyperlegible"', '"Trebuchet MS"',  'sans-serif'],
      'heading': ['DotGothic16', 'monospace'],
      'comic': ['"Comic Neue"', '"Comic Sans MS"', '"Comic Sans"', 'cursive']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: ['emerald'],
    base: true,
    utils: false,
    logs: true,
    rtl: false,
    prefix: '',
  },
}

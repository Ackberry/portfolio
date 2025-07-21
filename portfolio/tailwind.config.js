/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lightbg: '#FFF2E0',
        buttonlight: '#A2AADB',
        accent1: '#898AC4',
        accent2: '#A2AADB',
      },
    },
  },
  plugins: [],
}

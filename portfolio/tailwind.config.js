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
      fontFamily: {
        mono: ['"DM Mono"', 'monospace'],
        oxygen: ['var(--font-oxygen-mono)', 'monospace'],
      },
      colors: {
        lightbg: '#FFF2E0',
        buttonlight: '#A2AADB',
        accent1: '#898AC4',
        accent2: '#A2AADB',
      },
      keyframes: {
        blink: {
          '0%, 100%' : { opacity: '1'},
          '50%': { opacity: '0'},
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#0567d1',
      'orange': '#ff6314',
      'white': '#ffffff',
      'light-grey': '#f3f3f3',
      'grey': '#e6e6e6',
      'dark-grey': '#919392',
    },
    extend: {},
  },
  plugins: [],
}


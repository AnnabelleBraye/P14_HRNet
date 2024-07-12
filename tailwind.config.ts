/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-table-component-package/dist/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#12002b',
        'blue-grey': 'rgb(32, 50, 56)'
      },
    },
  },
  plugins: [],
}


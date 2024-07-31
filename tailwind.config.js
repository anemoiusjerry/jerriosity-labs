/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    colors: {
      'primary-dark': '#03001C',
      'secondary-dark': '#71f9ff'
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


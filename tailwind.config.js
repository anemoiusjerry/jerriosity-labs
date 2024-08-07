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
      'dusty-gray': '#021526',
      'sand': '#fdda93',
      'peach': '#f6b4a2',
      'salmon': '#fdaf77',
      'turquoise': '#71c8c1'
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


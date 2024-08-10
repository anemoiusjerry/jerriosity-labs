/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'off-white': '#FAF9F6',
        'dark-gray': '#222222',
        'light-gray': '#3b3b3b',
        'sky-blue': '#73C2FB'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


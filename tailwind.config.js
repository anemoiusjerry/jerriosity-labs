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
        'sky-blue': '#73C2FB',
        'blood-orange': '#FF5F1F',
        'whatsapp-green': '#25D366'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'selector'
}


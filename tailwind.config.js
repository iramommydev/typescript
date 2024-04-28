/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'banner-bg': "url('./src/assets/kyiv_banner.jpg')" 
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#06001E',
        'secondary-bg': '#F2F2F2',
        'primary-button': '#DF2266',
        'primary-overlay': '#6610f2'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
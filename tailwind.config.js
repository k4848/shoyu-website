/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'shoyu-brown': '#3E2723',
        'shoyu-light': '#795548',
        'shoyu-cream': '#F5E6D3',
        'shoyu-gold': '#D4AF37',
      },
      fontFamily: {
        'serif': ['serif'],
        'sans': ['sans-serif'],
      },
    },
  },
  plugins: [],
}

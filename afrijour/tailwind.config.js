/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}', // Add all the file types you're using Tailwind with
    './pages/**/*.{js,ts,jsx,tsx}',    // If you're using Next.js, include pages
    './components/**/*.{js,ts,jsx,tsx}', // If you have a components directory
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        border: 'hsl(var(--border))',
      }
    },
  },
  plugins: [],
}
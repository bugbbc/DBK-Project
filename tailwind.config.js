/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'brand-primary': '#165DFF',
        'brand-secondary': '#E0F2FE',
        'brand-accent': '#FBBF24',
        'text-primary': '#374151',
        'text-secondary': '#9CA3AF',
        'bg-card': '#F3F4F6',
        'bg-main': '#FFFFFF',

        // Dark mode colors
        'dark-brand-primary': '#3B82F6',
        'dark-bg-main': '#1E293B',
        'dark-bg-card': '#334155',
        'dark-text-primary': '#F9FAFB',
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans SC', 'sans-serif']
      }
    },
  },
  plugins: [],
}
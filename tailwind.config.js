/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: { extend: { colors: { forest: { 950: '#102c28', 900: '#123b35', 800: '#185347', 700: '#24705c' }, lime: { 400: '#b9d77b', 500: '#9fc65d' }, paper: '#f5f7f2' }, boxShadow: { card: '0 12px 36px rgba(18,59,53,.07)' } } },
  plugins: [],
};

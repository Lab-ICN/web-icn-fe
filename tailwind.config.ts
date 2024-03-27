import type { Config } from 'tailwindcss';
const plugin = require('tailwindcss/plugin');

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#1090CB',
        'secondary-blue': '#1090CB',
        'primary-orange': '#FFB703A6'
      },
      fontSize: {
        heading1: '40px',
        heading2: '24px'
      },
      borderRadius: { '4xl': '500px' }
    }
  },
  plugins: [require('tailwindcss-textshadow')]
};
export default config;

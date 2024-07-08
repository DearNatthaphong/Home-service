/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        prompt: ['Prompt', 'sans-serif']
      },
      colors: {
        blue: {
          100: '#E7EEFF',
          200: '#D2DFFC',
          300: '#A6BFFA',
          400: '#799FF7',
          500: '#4C7FF4',
          600: '#336DF2',
          700: '#1852D6',
          800: '#0E3FB0',
          900: '#022B87',
          950: '#001C59'
        },
        gray: {
          100: '#EFEFF2',
          200: '#E6E7EB',
          300: '#CCD0D7',
          400: '#B3B8C4',
          500: '#9AA1B0',
          600: '#80899C',
          700: '#646C80',
          800: '#4B5160',
          900: '#323640',
          950: '#232630'
        },
        purple: {
          100: '#ECE6FF',
          900: '#4512B4'
        },
        yellow: {
          100: '#FFF3D4',
          900: '#6E5000'
        },
        green: {
          100: '#DFF9F6',
          900: '#00596C'
        },
        black: '#000000',
        white: '#FFFFFF',
        red: '#C82438',
        background: '#F3F4F6'
      },
      boxShadow: {
        shadow: '2px 2px 24px 0px rgba(23, 51, 106, 0.12)'
      }
    }
  },
  plugins: [require('daisyui')]
};

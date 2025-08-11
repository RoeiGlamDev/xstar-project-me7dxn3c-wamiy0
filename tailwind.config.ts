import type { Config } from 'tailwindcss';

/
 * Tailwind CSS configuration for CleanSSR
 * This configuration is tailored for the CleanSSR brand with a minimal design approach
 * and a focus on a technology industry aesthetic.
 */

const config: Config = {
  mode: 'jit',
  purge: ['./src//*.{js,ts,jsx,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#6B5BFF', // Purple color for the brand
        secondary: '#FFFFFF', // White color for the brand
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

export default config;
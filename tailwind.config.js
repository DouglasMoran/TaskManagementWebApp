/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neutral: {
          1: 'var(--color-neutral-1)',
          2: 'var(--color-neutral-2)',
          3: 'var(--color-neutral-3)',
          4: 'var(--color-neutral-4)',
          5: 'var(--color-neutral-5)',
        },
        primary: {
          1: 'var(--color-primary-1)',
          2: 'var(--color-primary-2)',
          3: 'var(--color-primary-3)',
          4: 'var(--color-primary-4)',
          5: 'var(--color-primary-5)',
        },
        secondary: {
          1: 'var(--color-secondary-1)',
          2: 'var(--color-secondary-2)',
          3: 'var(--color-secondary-3)',
          4: 'var(--color-secondary-4)',
        },
        tertiary: {
          1: 'var(--color-tertiary-1)',
          2: 'var(--color-tertiary-2)',
          3: 'var(--color-tertiary-3)',
          4: 'var(--color-tertiary-4)',
        },
      },
      fontSize: {
        xxsmall: '0.25rem', // 4px
        xsmall: '0.5rem', // 8px
        small: '0.75rem', // 12px
        medium: '1rem', // 16px
        large: '1.5rem', // 24px
        xlarge: '2rem', // 32px
        xxlarge: '3rem', // 48px
        xxxlarge: '4rem', // 64px
        big: '4.5rem', // 72px
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        sf: ['"SF Pro Display"', 'sans-serif'],
      },
      screens: {
        // Breakpoints
        mobilexs: '360px',
        mobile: '375px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
};

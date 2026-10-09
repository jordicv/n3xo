/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#08080C',
          surface: '#0D0E15',
          card: '#12131D',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(196, 91, 255, 0.3)',
        },
        brand: {
          violet: '#7200FF',
          neon: '#C45BFF',
          lavender: '#E879FF',
          silver: '#A1A1AA',
          dark: '#08080C',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        apple: 'cubic-bezier(0.16, 1, 0.3, 1)',
        'apple-spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
      backgroundImage: {
        'n3xo-gradient': 'linear-gradient(135deg, #E879FF 0%, #A020F0 50%, #6200FF 100%)',
        'n3xo-gradient-radial': 'radial-gradient(circle at center, rgba(114, 0, 255, 0.15) 0%, transparent 70%)',
        'card-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};

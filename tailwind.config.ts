import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0c3040',
          deep: '#071e28',
          mid: '#0f3d52',
          light: '#1a5068',
          muted: '#234b60',
        },
        accent: {
          DEFAULT: '#79a5ec',
          light: '#a8c4f4',
          muted: '#5a8cd4',
          dark: '#3d70c4',
        },
        gold: {
          DEFAULT: '#eaa939',
          light: '#f2c06e',
          dark: '#c8881c',
          muted: '#d4952a',
        },
        cream: '#f5f0e8',
        charcoal: '#1a2533',
        mist: '#8fa8b8',
        'off-white': '#f8f6f2',
        'warm-gray': '#c8c0b4',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['clamp(2.8rem,7vw,6.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-xl': ['clamp(2.2rem,5vw,4.5rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(1.8rem,3.5vw,3.2rem)', { lineHeight: '1.12', letterSpacing: '-0.015em' }],
        'display-md': ['clamp(1.4rem,2.5vw,2.2rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['clamp(1.2rem,2vw,1.7rem)', { lineHeight: '1.25', letterSpacing: '-0.005em' }],
      },
      backgroundImage: {
        'gradient-navy': 'linear-gradient(135deg, #071e28 0%, #0c3040 50%, #0f3d52 100%)',
        'gradient-gold': 'linear-gradient(135deg, #c8881c 0%, #eaa939 50%, #f2c06e 100%)',
        'gradient-radial-navy': 'radial-gradient(ellipse at 30% 50%, #1a5068 0%, #071e28 70%)',
      },
      boxShadow: {
        'gold': '0 0 0 1px rgba(234,169,57,0.3), 0 4px 24px rgba(234,169,57,0.1)',
        'gold-lg': '0 0 0 1px rgba(234,169,57,0.4), 0 8px 40px rgba(234,169,57,0.15)',
        'card': '0 4px 24px rgba(7,30,40,0.4)',
        'card-hover': '0 16px 48px rgba(7,30,40,0.6)',
        'inner-gold': 'inset 0 1px 0 rgba(234,169,57,0.2)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(234,169,57,0.4)' },
          '50%': { boxShadow: '0 0 0 8px rgba(234,169,57,0)' },
        },
      },
      opacity: {
        '6': '0.06',
        '8': '0.08',
        '12': '0.12',
        '15': '0.15',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config

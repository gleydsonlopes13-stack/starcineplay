import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light Mode
        light: {
          bg: {
            primary: '#FFFFFF',
            secondary: '#F8FAFC',
          },
          text: {
            primary: '#1E293B',
            secondary: '#64748B',
          },
        },
        // Dark Mode
        dark: {
          bg: {
            primary: '#0B0F1A',
            secondary: '#111827',
          },
          text: {
            primary: '#F8FAFC',
            secondary: '#CBD5E1',
          },
        },

        // Common Colors (Starcine - RED THEME)
        primary: '#DC2626', // red-600
        primaryHover: '#B91C1C', // red-700
        secondary: '#7F1D1D', // red-900 (mais fechado)
        accent: '#F59E0B', // amber-500 (dourado combina com a logo)
        error: '#EF4444',
      },

      backgroundImage: {
        // Gradiente principal agora vermelho (sem azul)
        'gradient-primary': 'linear-gradient(135deg, #DC2626 0%, #7F1D1D 100%)',

        // Gradiente do hero agora dark + vermelho
        'gradient-hero': 'linear-gradient(135deg, #0B0F1A 0%, #111827 40%, #7F1D1D 100%)',
      },
    },
  },
  plugins: [],
}

export default config


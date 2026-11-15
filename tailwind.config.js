/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#FAFAF8',
        surface: '#FFFFFF',
        'surface-subtle': '#F4F4F1',
        'surface-hover': '#EEEEEC',
        border: '#E7E7E3',
        'border-strong': '#D2D2CC',
        foreground: '#202124',
        muted: '#777777',
        subtle: '#9A9A95',
        primary: {
          DEFAULT: '#24845B',
          hover: '#1D6E4A',
          subtle: '#EBF5F0',
          border: '#BFE0D1',
        },
        state: {
          low: '#8C8C88',
          high: '#24845B',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}

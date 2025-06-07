import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
        colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        },
        fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        },
    },
    },

  plugins: [],
}

export default config

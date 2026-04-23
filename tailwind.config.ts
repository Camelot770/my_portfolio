import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#000000',
        'bg-2': '#080809',
        'bg-3': '#0e0e10',
        fg: '#f3f0ea',
        'fg-dim': '#8a8680',
        'fg-mute': '#4a4742',
        line: '#1a1a1c',
        'line-soft': '#121214',
        accent: '#ff5a1f',
        'accent-2': '#c9ff3f',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
        serif: ['var(--font-serif)', 'Times New Roman', 'serif'],
      },
      transitionTimingFunction: {
        brand: 'cubic-bezier(0.2, 0.7, 0.2, 1)',
        out: 'cubic-bezier(0.16, 1, 0.3, 1)',
        inout: 'cubic-bezier(0.76, 0, 0.24, 1)',
      },
    },
  },
  plugins: [],
};

export default config;

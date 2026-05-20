/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Page / surface
        page:    'var(--background)',
        cream:   'var(--background)',
        surface: 'var(--surface)',
        'surface-2': 'var(--background-soft)',
        'surface-3': 'var(--surface-muted)',
        // Borders
        border:  'var(--border)',
        'border-strong': 'var(--text-muted)',
        // Text
        'text-primary':   'var(--text-main)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted':     'var(--text-muted)',
        'text-faint':     'var(--text-muted)',
        // Soft botanical accent
        accent:        'var(--accent)',
        'accent-light': 'var(--accent-soft)',
        'accent-dark':  'var(--accent-strong)',
        'accent-bg':    'var(--background-soft)',
        coffee:        'var(--coffee)',
        'coffee-soft': 'var(--coffee-soft)',
        ink:           'var(--ink)',
        // Technical accent - use sparingly
        tech:     'var(--coffee)',
        'tech-bg': 'var(--coffee-soft)',
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Fraunces"', 'Georgia', 'serif'],
        display: ['"Fraunces"', 'Georgia', 'serif'],
        mono: ['"IBM Plex Mono"', '"Fira Code"', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.65rem', { lineHeight: '1rem' }],
      },
      boxShadow: {
        'card':    '0 1px 2px rgba(15, 50, 72, 0.05), 0 10px 30px -28px rgba(15, 50, 72, 0.35)',
        'card-md': '0 14px 36px -24px rgba(15, 50, 72, 0.28), 0 2px 8px rgba(15, 50, 72, 0.05)',
        'card-lg': '0 24px 60px -32px rgba(15, 50, 72, 0.34), 0 8px 20px -14px rgba(160, 100, 72, 0.2)',
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.25rem',
      },
      maxWidth: {
        'content': '1120px',
      },
    },
  },
  plugins: [],
};

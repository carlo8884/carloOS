/**
 * CarloOS Tailwind Preset
 * All 5 sites extend this. Site-specific overrides go in each app's tailwind.config.ts.
 * Uses CSS variables set by the theme system so design tokens are the single source of truth.
 */

import type { Config } from 'tailwindcss'

const carloOSPreset: Partial<Config> = {
  content: [],
  theme: {
    extend: {
      // ── COLORS via CSS variables ──────────────────────────────────────
      // All site themes expose the same variable names — only values differ.
      colors: {
        brand: {
          primary: 'var(--brand-primary)',
          'primary-light': 'var(--brand-primary-light)',
          'primary-pale': 'var(--brand-primary-pale)',
          'primary-dark': 'var(--brand-primary-dark)',
          dark: 'var(--brand-dark)',
          surface: 'var(--brand-surface)',
          white: 'var(--brand-white)',
        },
        text: {
          dark: 'var(--brand-text-dark)',
          mid: 'var(--brand-text-mid)',
          light: 'var(--brand-text-light)',
        },
        border: 'var(--brand-border)',
        success: 'var(--brand-success)',
        warning: 'var(--brand-warning)',
        danger: 'var(--brand-danger)',
      },

      // ── TYPOGRAPHY ────────────────────────────────────────────────────
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
      },
      fontSize: {
        '2xs': ['11px', { lineHeight: '1.4', letterSpacing: '0.02em' }],
        xs: ['13px', { lineHeight: '1.5' }],
        sm: ['14px', { lineHeight: '1.6' }],
        base: ['16px', { lineHeight: '1.7' }],
        lg: ['18px', { lineHeight: '1.7' }],
        xl: ['20px', { lineHeight: '1.5' }],
        '2xl': ['24px', { lineHeight: '1.4' }],
        '3xl': ['30px', { lineHeight: '1.3' }],
        '4xl': ['36px', { lineHeight: '1.2' }],
        '5xl': ['48px', { lineHeight: '1.1' }],
        '6xl': ['60px', { lineHeight: '1.05' }],
        '7xl': ['72px', { lineHeight: '1.0' }],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        normal: '0',
        wide: '0.04em',
        wider: '0.08em',
        widest: '0.18em',
        eyebrow: '0.16em',  // section labels / uppercase tags
      },

      // ── SPACING ───────────────────────────────────────────────────────
      spacing: {
        section: '88px',      // standard section vertical padding
        container: '80px',    // standard horizontal padding
        'container-sm': '24px', // mobile horizontal padding
        nav: '68px',          // nav height
      },

      // ── BORDER RADIUS ─────────────────────────────────────────────────
      borderRadius: {
        sm: '6px',
        DEFAULT: '10px',
        lg: '16px',
        xl: '24px',
        pill: '9999px',
      },

      // ── SHADOWS ───────────────────────────────────────────────────────
      boxShadow: {
        card: '0 4px 24px rgba(0,0,0,0.07)',
        'card-hover': '0 12px 40px rgba(0,0,0,0.12)',
        nav: '0 4px 24px rgba(0,0,0,0.08)',
        subtle: '0 2px 8px rgba(0,0,0,0.06)',
      },

      // ── MAX WIDTHS ────────────────────────────────────────────────────
      maxWidth: {
        content: '800px',
        'content-wide': '1000px',
        container: '1200px',
        'container-wide': '1400px',
      },

      // ── TRANSITIONS ───────────────────────────────────────────────────
      transitionTimingFunction: {
        'carloOS': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },

      // ── ANIMATIONS ───────────────────────────────────────────────────
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fade-in 0.4s ease forwards',
        'slide-in-right': 'slide-in-right 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
    },
  },

  // ── BASE STYLES ───────────────────────────────────────────────────────
  plugins: [
    // Will add @tailwindcss/typography for article content
    // Will add @tailwindcss/forms for clean form resets
  ],
}

export default carloOSPreset

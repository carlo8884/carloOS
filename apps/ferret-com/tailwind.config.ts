import type { Config } from 'tailwindcss'
import carloOSPreset from '@carloOS/config/tailwind'
import typography from '@tailwindcss/typography'

const config: Config = {
  presets: [carloOSPreset as Config],
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Ferret.com-specific overrides — driven by CSS variables in globals.css.
      // Redesign HR2: header 56px mobile / 64px desktop via --nav-height.
      spacing: { nav: 'var(--nav-height)' },
    },
  },
  plugins: [typography],
}

export default config

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
      // Dog.com-specific overrides (set via CSS variables in globals.css)
      // The CSS vars are already set in globals.css — Tailwind reads them.
    },
  },
  plugins: [typography],
}

export default config

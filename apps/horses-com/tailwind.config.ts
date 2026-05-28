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
      // Horses.com-specific overrides — driven by CSS variables in globals.css.
    },
  },
  plugins: [typography],
}

export default config

import type { Config } from 'tailwindcss'
import carloOSPreset from '@carloOS/config/tailwind'
import typography from '@tailwindcss/typography'
const config: Config = {
  presets: [carloOSPreset as Config],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', '../../packages/ui/src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: { spacing: { nav: 'var(--nav-height)' } } }, // redesign: header 56px mobile / 64px desktop on this site only
  plugins: [typography],
}
export default config

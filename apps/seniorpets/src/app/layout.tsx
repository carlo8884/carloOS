import type { Metadata } from 'next'
import { Lora, Source_Sans_3 } from 'next/font/google'
import { buildMetadata } from '@carloOS/ui'
import './globals.css'

const lora = Lora({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-lora', display: 'swap' })
const sourceSans = Source_Sans_3({ subsets: ['latin'], weight: ['300','400','500','600','700'], variable: '--font-source-sans', display: 'swap' })

export const metadata: Metadata = buildMetadata({
  siteId: 'seniorpets',
  title: 'SeniorPetPharmacy — Compassionate care for aging pets — research-anchored guides and trusted product references.',
  description: 'SeniorPetPharmacy — Rx and care guidance for senior dogs and cats. Vet-reviewed, sourced.',
  path: '/',
  type: 'website',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${lora.variable} ${sourceSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}

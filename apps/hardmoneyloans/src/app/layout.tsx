import type { Metadata } from 'next'
import { Source_Serif_4, Inter } from 'next/font/google'
import { buildMetadata } from '@carloOS/ui'
import './globals.css'

const sourceSerif = Source_Serif_4({ subsets: ['latin'], weight: ['400','600','700','900'], variable: '--font-source-serif', display: 'swap' })
const inter = Inter({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-inter', display: 'swap' })

export const metadata: Metadata = buildMetadata({
  siteId: 'hardmoneyloans',
  title: 'HardMoneyLoans.com — Compare top hard money lenders for real estate investors',
  description: 'HardMoneyLoans.com — independent comparisons of hard money lenders for real estate investors. Rates, terms, and reviews.',
  path: '/',
  type: 'website',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sourceSerif.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}

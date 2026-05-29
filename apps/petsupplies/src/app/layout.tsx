import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { buildMetadata } from '@carloOS/ui'
import './globals.css'

const inter = Inter({ subsets: ['latin'], weight: ['300','400','500','600','700','900'], variable: '--font-inter', display: 'swap' })

export const metadata: Metadata = buildMetadata({
  siteId: 'petsupplies',
  title: 'PetSupplies.com — Independent Pet Product Comparisons',
  description: 'PetSupplies.com — independent comparisons of dog, cat, fish, reptile, and small-pet products. NerdWallet for pet gear.',
  path: '/',
  type: 'website',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}

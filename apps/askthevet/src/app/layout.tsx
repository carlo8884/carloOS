import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { buildMetadata, Nav, Footer } from '@carloOS/ui'
import './globals.css'

const inter = Inter({ subsets: ['latin'], weight: ['300','400','500','600','700','800'], variable: '--font-inter', display: 'swap' })

export const metadata: Metadata = buildMetadata({
  siteId: 'askthevet',
  title: 'AskTheVet.com — AI Pet Symptom Checker — Triage in Seconds',
  description: 'AskTheVet.com — AI-assisted pet symptom triage. Educational guidance with vet-referral routing.',
  path: '/',
  type: 'website',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Nav siteId="askthevet" />
        <main>{children}</main>
        <Footer siteId="askthevet" showAffiliateDisclosure />
      </body>
    </html>
  )
}

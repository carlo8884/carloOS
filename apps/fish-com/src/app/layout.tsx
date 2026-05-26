import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Nav, Footer, buildMetadata } from '@carloOS/ui'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'The Complete Aquarium Resource',
  description: 'Fish.com is the authoritative source for aquarium fishkeeping — species guides, tank setup, water chemistry, fish health, and honest equipment reviews.',
  path: '/',
  type: 'website',
})

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        {GA_ID && GA_ID !== 'G-XXXXXXXXXX' && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
            <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');` }} />
          </>
        )}
      </head>
      <body>
        <Nav siteId="fish-com" />
        <main>{children}</main>
        <Footer siteId="fish-com" showAffiliateDisclosure />
      </body>
    </html>
  )
}

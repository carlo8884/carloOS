import type { Metadata } from 'next'
import { Nav, Footer, buildMetadata } from '@carloOS/ui'
import './globals.css'

export const metadata: Metadata = buildMetadata({
  siteId: 'lizard-com',
  title: 'Reptile Care, Source-First',
  description: 'Lizard.com — research-based care guides for reptiles and amphibians. Species profiles, UVB lighting, enclosure setup, feeding, and health, drawn from peer-reviewed husbandry literature and Ferguson Zone research.',
  path: '/',
  type: 'website',
})

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="font-vars">
      <head>
        {GA_ID && GA_ID !== 'G-XXXXXXXXXX' && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
            <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');` }} />
          </>
        )}
      </head>
      <body>
        <Nav siteId="lizard-com" />
        <main className="relative z-10">{children}</main>
        <Footer siteId="lizard-com" showAffiliateDisclosure />
      </body>
    </html>
  )
}

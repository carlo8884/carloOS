import type { Metadata } from 'next'
import { Nav, Footer, CrossPortfolioCard, buildMetadata } from '@carloOS/ui'
import './globals.css'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: 'Saddles & Equestrian Equipment, Compared',
  description: 'Saddle.com — expert saddle reviews, buying guides, fitting tutorials, leather care, and brand comparisons. Drawing on CSF reviewer notes and Society of Master Saddlers reference material.',
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
        <Nav siteId="saddle-com" />
        <main>{children}</main>
        <CrossPortfolioCard currentSite="saddle-com" contentType="general" variant="footer" />
        <Footer siteId="saddle-com" showAffiliateDisclosure />
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Nav, Footer, buildMetadata } from '@carloOS/ui'
import './globals.css'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Find a Vet. Read the Guidelines.',
  description: 'Vets.co — find veterinary specialists, understand your pet\'s health, and compare pet insurance. Guides grounded in AVMA, AAHA, and ACVIM material.',
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
        <Nav siteId="vets-co" />
        <main>{children}</main>
        <Footer siteId="vets-co" showAffiliateDisclosure />
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Zilla_Slab, Raleway } from 'next/font/google'
import { Nav, Footer, buildMetadata } from '@carloOS/ui'
import './globals.css'

const zillaSlab = Zilla_Slab({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-zilla',
  display: 'swap',
})

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
  variable: '--font-raleway',
  display: 'swap',
})

export const metadata: Metadata = buildMetadata({
  siteId: 'lizard-com',
  title: 'Reptile Care, Science-First',
  description: 'Lizard.com — science-based care guides for reptiles and amphibians. Species profiles, UVB lighting, enclosure setup, feeding, and health — written by experienced keepers and reviewed by exotic vets.',
  path: '/',
  type: 'website',
})

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${zillaSlab.variable} ${raleway.variable}`}>
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
        <Footer siteId="lizard-com" showAffiliateDisclosure={false} />
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Libre_Baskerville, Manrope } from 'next/font/google'
import { Nav, Footer, buildMetadata } from '@carloOS/ui'
import './globals.css'

const baskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-baskerville',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Find the Right Vet. Get Trusted Answers.',
  description: 'Vets.co helps you find veterinary specialists, understand your pet\'s health, compare pet insurance, and get expert guidance written by licensed veterinarians.',
  path: '/',
  type: 'website',
})

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${baskerville.variable} ${manrope.variable}`}>
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

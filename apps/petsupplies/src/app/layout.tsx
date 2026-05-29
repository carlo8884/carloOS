import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Nav, Footer } from '@carloOS/ui'
import { buildMetadata } from '@carloOS/ui'
import './globals.css'

// PetSupplies.com uses a single sans (Inter) across display and body to support
// the NerdWallet-style trustworthy-commerce aesthetic. No decorative serif.
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = buildMetadata({
  siteId: 'petsupplies',
  title: 'Independent Pet Product Comparisons',
  description:
    'PetSupplies.com — independent comparison engine for pet products. 30+ categories across dogs, cats, fish, reptiles, birds, and small animals. Rankings are editorial, not paid.',
  path: '/',
  type: 'website',
})

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        {GA_ID && GA_ID !== 'G-XXXXXXXXXX' && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', {
                    custom_map: {
                      dimension1: 'category',
                      dimension2: 'vendor',
                      dimension3: 'site_name'
                    }
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body>
        <Nav siteId="petsupplies" />
        <main>{children}</main>
        <Footer siteId="petsupplies" showAffiliateDisclosure />
      </body>
    </html>
  )
}

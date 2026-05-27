import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import { Nav, Footer } from '@carloOS/ui'
import { buildMetadata } from '@carloOS/ui'
import './globals.css'

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
})

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'A Reference for Dog Owners',
  description:
    'Dog.com — research-based reference for dog health, breed guides, training, and nutrition. 30 detailed breed profiles and the health topics owners want straight answers on.',
  path: '/',
  type: 'website',
})

// ─── GA4 Script ─────────────────────────────────────────────────────────────

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

// ─── Layout ─────────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`font-vars ${playfairDisplay.variable} ${dmSans.variable}`}
    >
      <head>
        {/* GA4 — only loads in production with a real ID */}
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
                      dimension1: 'content_type',
                      dimension2: 'site_section',
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
        {/* Shared Nav — reads nav links from siteConfig */}
        <Nav siteId="dog-com" />

        {/* Page content */}
        <main>{children}</main>

        {/* Shared Footer */}
        <Footer siteId="dog-com" showAffiliateDisclosure />
      </body>
    </html>
  )
}

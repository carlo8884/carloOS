import type { Metadata } from 'next'
import { Source_Serif_4, Inter } from 'next/font/google'
import { Nav, Footer, SkimlinksLoader, AdSenseLoader } from '@carloOS/ui'
import { buildMetadata } from '@carloOS/ui'
import './globals.css'

/**
 * HardMoneyLoans.com root layout — Architect S11 flagship.
 *
 * Finance-trustworthy typography:
 *   - Source Serif 4 — display headings (conservative, journal-grade serif
 *     that signals editorial authority in finance content)
 *   - Inter — UI / body (workhorse sans, neutral and legible at scale)
 */

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-source-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = buildMetadata({
  siteId: 'hardmoneyloans',
  title: 'Hard Money Loans for Real Estate Investors',
  description:
    'Compare top hard money lenders for fix-and-flip, BRRRR, bridge, and DSCR loans. Independent rankings, state-by-state guidance, and a 60-second match quiz.',
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
    <html
      lang="en"
      className={`${sourceSerif.variable} ${inter.variable} font-vars`}
    >
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
                      dimension1: 'content_type',
                      dimension2: 'site_section',
                      dimension3: 'vendor'
                    }
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body>
        {/* Sitewide AdSense loader — no-op until NEXT_PUBLIC_ADSENSE_CLIENT is set */}
        <AdSenseLoader />

        <Nav siteId="hardmoneyloans" />

        <main>{children}</main>

        {/* Footer disclosure is pet-vertical specific in the shared Footer
            component; we render our own finance-vertical AffiliateDisclosure
            per page. Keep the Footer disclosure off. */}
        <Footer siteId="hardmoneyloans" showAffiliateDisclosure={false} />

        {/* Sitewide affiliate link rewriting via Skimlinks (per affiliate-rollout pattern) */}
        <SkimlinksLoader />
      </body>
    </html>
  )
}

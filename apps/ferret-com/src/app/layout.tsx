import type { Metadata } from 'next'
import { Playfair_Display, Source_Sans_3 } from 'next/font/google'
import { Nav, Footer, DisplayAds } from '@carloOS/ui'
import { buildMetadata } from '@carloOS/ui'
import { displayAds } from '../data/display-ads'
import { HomeEmailCapture } from '../components/HomeEmailCapture'
import { EmailCaptureGate } from '../components/EmailCaptureGate'
import { EmailUnderHero } from '@carloOS/ui'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-playfair',
  display: 'swap',
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-source-sans',
  display: 'swap',
})

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret.com — A Reference for Ferret Owners',
  description:
    'Ferret.com — research-based reference for ferret owners. Diet, health, equipment, and the first-year schedule, grounded in exotic-mammal veterinary literature.',
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
      className={`font-vars ${playfair.variable} ${sourceSans.variable}`}
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-2 focus:left-2 focus:bg-brand-primary focus:text-white focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>

        <Nav siteId="ferret-com" />

        <main id="main-content" tabIndex={-1}>{children}
        <EmailCaptureGate>
          <EmailUnderHero>
            <HomeEmailCapture />
          </EmailUnderHero>
        </EmailCaptureGate>
        </main>

        <Footer siteId="ferret-com" showAffiliateDisclosure />

        <DisplayAds config={displayAds} />
      </body>
    </html>
  )
}

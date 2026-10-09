import type { Metadata } from 'next'
import { Playfair_Display, Source_Sans_3 } from 'next/font/google'
import { Nav, Footer, DisplayAds, buildOrganizationSchema, SchemaScript, Ga4Loader, AffiliateClickListener, JourneyEvents } from '@carloOS/ui'
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
  // Phone LCP on comparison pages is the body lede, not this display face.
  preload: false,
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

const organizationSchema = buildOrganizationSchema({
  siteId: 'ferret-com',
  name: 'Ferret.com',
  url: 'https://ferret.com/',
})

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
      <body>
        <SchemaScript schema={organizationSchema} />
        <Ga4Loader measurementId={GA_ID} customMap />
        <AffiliateClickListener site="ferret-com" />
        <JourneyEvents site="ferret-com" />
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

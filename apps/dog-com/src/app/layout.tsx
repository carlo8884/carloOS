import type { Metadata } from 'next'
import Script from 'next/script'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import { Nav, Footer, DisplayAds, buildMetadata, EmailUnderHero, Ga4Loader, AffiliateClickListener, JourneyEvents, HopEarnsProvider } from '@carloOS/ui'
import { displayAds } from '../data/display-ads'
import { HomeEmailCapture } from '../components/HomeEmailCapture'
import { EmailCaptureGate } from '../components/EmailCaptureGate'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
  // Long-guide LCP is the body lede. Don't preload this display face ahead of it.
  preload: false,
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'A Reference for Dog Owners',
  description:
    'Dog.com — research-based reference for dog health, breed guides, training, and nutrition. 200+ breeds and the topics most owners want straight answers on.',
  path: '/',
  type: 'website',
})

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

// Content hash of Playfair's fallback subset (em dash and other punctuation
// outside the preloaded latin slice). Preloading it keeps the hero lede from
// shifting when that file arrives. Hash stays put until the font file changes.
const PLAYFAIR_PUNCT_SUBSET = '/_next/static/media/eaead17c7dbfcd5d-s.woff2'

const SKIMLINKS_SRC =
  'https://s.skimresources.com/js/303850X1791986.skimlinks.js'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} font-vars`}
    >
      <head>
        <meta
          name="impact-site-verification"
          content="f06484a9-0400-4029-a0b5-f1f1014163fc"
        />
        <link
          rel="preload"
          href={PLAYFAIR_PUNCT_SUBSET}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <HopEarnsProvider amazon={Boolean(process.env.AFF_AMAZON_TAG || process.env.AFF_AMAZON_BRAND_TAG)}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-2 focus:left-2 focus:bg-brand-primary focus:text-white focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>

        <Nav siteId="dog-com" />

        <main id="main-content" tabIndex={-1}>
          {children}
          <EmailCaptureGate>
            <EmailUnderHero excludePaths={['/']}>
              <HomeEmailCapture />
            </EmailUnderHero>
          </EmailCaptureGate>
        </main>

        <Footer siteId="dog-com" showAffiliateDisclosure />

        <Ga4Loader measurementId={GA_ID} customMap />
        <AffiliateClickListener site="dog-com" />
        <JourneyEvents site="dog-com" />

        <Script src={SKIMLINKS_SRC} strategy="lazyOnload" />

        <DisplayAds config={displayAds} />
        </HopEarnsProvider>
      </body>
    </html>
  )
}

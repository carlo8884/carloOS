import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Nav, Footer, buildMetadata, DisplayAds, EmailUnderHero, Ga4Loader, AffiliateClickListener, JourneyEvents, HopEarnsProvider } from '@carloOS/ui'
import { displayAds } from '../data/display-ads'
import { HomeEmailCapture } from '../components/HomeEmailCapture'
import { EmailCaptureGate } from '../components/EmailCaptureGate'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
  // Phone LCP on comparison pages is the body lede, not this display face.
  preload: false,
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'An Aquarium Reference',
  description: 'Fish.com — aquarium fishkeeping reference: species guides, tank setup, water chemistry, fish health, and honest equipment comparisons.',
  path: '/',
  type: 'website',
})

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} font-vars`}>
      <body>
        <HopEarnsProvider amazon={Boolean(process.env.AFF_AMAZON_TAG || process.env.AFF_AMAZON_BRAND_TAG)}>
        <Ga4Loader measurementId={GA_ID} />
        <AffiliateClickListener site="fish-com" />
        <JourneyEvents site="fish-com" />
        <Nav siteId="fish-com" />
        <main>
          {children}
          <EmailCaptureGate>
            <EmailUnderHero excludePaths={['/', '/reviews']}>
              <HomeEmailCapture />
            </EmailUnderHero>
          </EmailCaptureGate>
        </main>
        <Footer siteId="fish-com" showAffiliateDisclosure />
        <DisplayAds config={displayAds} />
        </HopEarnsProvider>
      </body>
    </html>
  )
}

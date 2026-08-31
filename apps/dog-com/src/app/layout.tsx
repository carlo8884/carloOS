import type { Metadata } from 'next'
import Script from 'next/script'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import { Nav, Footer, DisplayAds, buildMetadata, EmailUnderHero } from '@carloOS/ui'
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

        <Nav siteId="dog-com" />

        <main id="main-content" tabIndex={-1}>
          {children}
          <EmailCaptureGate>
            <EmailUnderHero>
              <HomeEmailCapture />
            </EmailUnderHero>
          </EmailCaptureGate>
        </main>

        <Footer siteId="dog-com" showAffiliateDisclosure />

        <Script src={SKIMLINKS_SRC} strategy="afterInteractive" />

        <DisplayAds config={displayAds} />
      </body>
    </html>
  )
}

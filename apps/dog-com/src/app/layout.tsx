import type { Metadata } from 'next'
import Script from 'next/script'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import { Nav, Footer } from '@carloOS/ui'
import { buildMetadata } from '@carloOS/ui'
import './globals.css'

// ─── Fonts ──────────────────────────────────────────────────────────────────
// Playfair Display: editorial serif for headlines, eyebrows, and display numerals.
// DM Sans: neutral geometric sans for body, UI, and meta.
// Both load via next/font (self-hosted, no network round-trip at runtime) and
// expose CSS variables consumed in globals.css and the Tailwind preset.

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

// ─── Metadata ───────────────────────────────────────────────────────────────

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'A Reference for Dog Owners',
  description:
    'Dog.com — research-based reference for dog health, breed guides, training, and nutrition. 200+ breeds and the topics most owners want straight answers on.',
  path: '/',
  type: 'website',
})

// ─── GA4 Script ─────────────────────────────────────────────────────────────

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

// ─── Skimlinks — auto-affiliate-link for long-tail merchants ────────────────
// Approved 2026-05-30 (Carlo). Publisher ID is dog-com-specific per
// Skimlinks dashboard; sister sites get their own publisher snippets.
// Script loads after page is interactive — does NOT block render.
//
// Refs:
//   ops/handoffs/2026-05-30-monetization-activation-roadmap.md (Day 0-7)
//   ops/handoffs/2026-05-30-affiliate-wiring-round-1-applications.md
const SKIMLINKS_SRC =
  'https://s.skimresources.com/js/303850X1791986.skimlinks.js'

// ─── Layout ─────────────────────────────────────────────────────────────────

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
        {/* Impact.com site verification — added 2026-05-30. Will resolve
            once DNS points dog.com at this Vercel deployment. */}
        <meta
          name="impact-site-verification"
          content="f06484a9-0400-4029-a0b5-f1f1014163fc"
        />

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

        {/* Skimlinks auto-affiliate — Carlo-approved 2026-05-30 */}
        <Script src={SKIMLINKS_SRC} strategy="afterInteractive" />
      </body>
    </html>
  )
}

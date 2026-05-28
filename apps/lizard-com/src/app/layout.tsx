import type { Metadata } from 'next'
import { Zilla_Slab, Raleway } from 'next/font/google'
import { Nav, Footer, buildMetadata } from '@carloOS/ui'
import './globals.css'

// ─── Fonts ──────────────────────────────────────────────────────────────────
// Zilla Slab — slab serif from Mozilla's type foundry. Built for editorial
// display use; the slabs give the field-guide-cover feel without the
// transitional-serif fragility at large display sizes. Italics used for
// scientific names and pull quotes.
const zillaSlab = Zilla_Slab({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-zilla',
  display: 'swap',
})

// Raleway — geometric humanist sans for body + UI. Light weights give a
// magazine-style hierarchy against the heavier slab; full 300-700 range so
// the dark theme can lean on lighter weights without losing legibility.
const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-raleway',
  display: 'swap',
})

// ─── Metadata ───────────────────────────────────────────────────────────────

export const metadata: Metadata = buildMetadata({
  siteId: 'lizard-com',
  title: 'Reptile Care, Source-First',
  description:
    'Husbandry built on published research: species profiles, UVB measurements, Ferguson zones, ARAV-aligned health, and tested-gear reviews for reptile keepers.',
  path: '/',
  type: 'website',
})

// ─── GA4 ────────────────────────────────────────────────────────────────────

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

// ─── Layout ─────────────────────────────────────────────────────────────────

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${zillaSlab.variable} ${raleway.variable} font-vars`}
    >
      <head>
        {GA_ID && GA_ID !== 'G-XXXXXXXXXX' && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`,
              }}
            />
          </>
        )}
      </head>
      <body>
        <Nav siteId="lizard-com" />
        <main className="relative z-10">{children}</main>
        <Footer siteId="lizard-com" showAffiliateDisclosure />
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
<<<<<<< HEAD
import { Playfair_Display, Source_Sans_3 } from 'next/font/google'
import { Nav, Footer, buildMetadata } from '@carloOS/ui'
import './globals.css'

// ─── Fonts ──────────────────────────────────────────────────────────────────
// Playfair Display — high-contrast didone-adjacent serif. Used for display
// headings only (32px and up — thin strokes vanish below that).
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

// Source Sans 3 — readable humanist sans for body + UI.
const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-source-sans',
  display: 'swap',
})

=======
import { Nav, Footer } from '@carloOS/ui'
import { buildMetadata } from '@carloOS/ui'
import './globals.css'

>>>>>>> origin/main
// ─── Metadata ───────────────────────────────────────────────────────────────

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
<<<<<<< HEAD
  title: 'The Reference for Horse Owners',
  description:
    'Horses.com — research-based reference for horse owners across discipline lines. Breed guides, equine health, gear reviews, supplement evaluations, and the 90-day first-horse roadmap.',
=======
  title: 'A Reference for Horse Owners',
  description:
    'Horses.com — research-based reference for horse owners. Site coming soon.',
>>>>>>> origin/main
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
<<<<<<< HEAD
      className={`${playfair.variable} ${sourceSans.variable} font-vars`}
=======
      className="font-vars"
>>>>>>> origin/main
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
        <Nav siteId="horses-com" />

        {/* Page content */}
        <main>{children}</main>

        {/* Shared Footer */}
        <Footer siteId="horses-com" showAffiliateDisclosure={false} />
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Nav, Footer, CrossPortfolioCard } from '@carloOS/ui'
import { buildMetadata } from '@carloOS/ui'
import './globals.css'

// ─── Fonts ──────────────────────────────────────────────────────────────────

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

// ─── Layout ─────────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className="font-vars"
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

        {/* Sister-site recommendations — portfolio-wide */}
        <CrossPortfolioCard currentSite="dog-com" contentType="general" variant="footer" />

        {/* Shared Footer */}
        <Footer siteId="dog-com" showAffiliateDisclosure />
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Nav, Footer } from '@carloOS/ui'
import { buildMetadata } from '@carloOS/ui'
import './globals.css'

// ─── Metadata ───────────────────────────────────────────────────────────────

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'A Reference for Ferret Owners',
  description:
    'Ferret.com — research-based reference for ferret owners. Site coming soon.',
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
        <Nav siteId="ferret-com" />

        {/* Page content */}
        <main>{children}</main>

        {/* Shared Footer */}
        <Footer siteId="ferret-com" showAffiliateDisclosure={false} />
      </body>
    </html>
  )
}

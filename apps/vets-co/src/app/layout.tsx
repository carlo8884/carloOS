import type { Metadata } from 'next'
import { Libre_Baskerville, Manrope } from 'next/font/google'
import { Nav, Footer, buildMetadata } from '@carloOS/ui'
import './globals.css'

// ─── Fonts ──────────────────────────────────────────────────────────────────
// Libre Baskerville — old-style serif with a tall x-height. Used for display
// headings, the H1, and italic taglines. Two weights + italic give us the
// magazine-byline feel without leaning into a didone (those go thin too fast
// for clinical body copy contexts).
const baskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-baskerville',
  display: 'swap',
})

// Manrope — neutral humanist sans for body, UI, eyebrows, and labels. Wide
// weight range so we can hit a true 300 light for long-form intros without
// reaching for a second sans family.
const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
})

// ─── Metadata ───────────────────────────────────────────────────────────────

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Find a Vet. Read the Guidelines.',
  description:
    'Vets.co — find veterinary specialists, understand your pet\'s health, and compare pet insurance. Guides grounded in AVMA, AAHA, and ACVIM material.',
  path: '/',
  type: 'website',
})

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${baskerville.variable} ${manrope.variable} font-vars`}
    >
      <head>
        {GA_ID && GA_ID !== 'G-XXXXXXXXXX' && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
            <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');` }} />
          </>
        )}
      </head>
      <body>
        <Nav siteId="vets-co" />
        <main>{children}</main>
        <Footer siteId="vets-co" showAffiliateDisclosure />
      </body>
    </html>
  )
}

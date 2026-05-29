import type { Metadata } from 'next'
import { Fraunces, Nunito } from 'next/font/google'
import { buildMetadata } from '@carloOS/ui'
import './globals.css'

// ─── Fonts ─────────────────────────────────────────────────────────────────
// Fraunces: playful modern serif for display — pairs warmth + craft for a
// gift product. Nunito: rounded geometric sans for UI / body — reads warm and
// approachable, the right register for a consumer keepsake brand.

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800'],
  variable: '--font-nunito',
  display: 'swap',
})

// ─── Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = buildMetadata({
  siteId: 'dogpicture',
  title: 'DogPicture.com — AI Dog Portraits, From $9',
  description:
    'Turn your dog into a masterpiece. AI portraits in 60 seconds, starting at $9. Download instantly or order a canvas, mug, T-shirt, or blanket — shipped worldwide.',
  path: '/',
  type: 'website',
})

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${nunito.variable} font-vars`}
    >
      <head>
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
                  gtag('config', '${GA_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}

// ─── Inline header ─────────────────────────────────────────────────────────
// Consumer commerce wants a tighter, more product-y nav than the editorial
// `<Nav siteId>` shared component (which assumes a magazine-style site).

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-brand-white/90 backdrop-blur-md border-b border-brand-border">
      <div className="max-w-container mx-auto px-container-sm sm:px-10 h-[68px] flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 no-underline">
          <span aria-hidden="true" className="text-2xl">🐾</span>
          <span className="font-display font-black text-xl text-brand-text-dark tracking-tight">
            DogPicture
          </span>
        </a>
        <nav className="flex items-center gap-2 sm:gap-6">
          <a href="/#styles" className="hidden sm:inline text-sm font-semibold text-brand-text-mid hover:text-brand-primary no-underline">
            Styles
          </a>
          <a href="/#how-it-works" className="hidden sm:inline text-sm font-semibold text-brand-text-mid hover:text-brand-primary no-underline">
            How it works
          </a>
          <a
            href="/create"
            className="inline-flex items-center bg-brand-primary text-white font-bold text-sm px-4 sm:px-5 py-2.5 rounded-pill no-underline hover:bg-brand-primary-light transition-colors"
          >
            Create yours →
          </a>
        </nav>
      </div>
    </header>
  )
}

function SiteFooter() {
  return (
    <footer className="bg-brand-dark text-white/80 mt-section">
      <div className="max-w-container mx-auto px-container-sm sm:px-10 py-16 grid gap-12 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span aria-hidden="true" className="text-2xl">🐾</span>
            <span className="font-display font-black text-xl text-white">DogPicture</span>
          </div>
          <p className="text-sm text-white/55 leading-relaxed">
            AI dog portraits — printed, framed, and shipped. A keepsake from the dog you love.
          </p>
        </div>
        <FooterCol heading="Create" links={[
          { label: 'Start a Portrait', href: '/create' },
          { label: 'Browse Styles', href: '/#styles' },
          { label: 'Gift Cards', href: '/create?gift=true' },
        ]} />
        <FooterCol heading="Help" links={[
          { label: 'How It Works', href: '/#how-it-works' },
          { label: 'Track an Order', href: '/order' },
          { label: 'Refund Policy', href: '/legal/refund-policy' },
          { label: 'Contact', href: 'mailto:hello@dogpicture.com' },
        ]} />
        <FooterCol heading="About" links={[
          { label: 'Why We Do This', href: '/about' },
          { label: 'Terms of Use', href: '/legal/terms' },
          { label: 'Privacy', href: '/legal/privacy-policy' },
        ]} />
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-container mx-auto px-container-sm sm:px-10 py-6 flex flex-col sm:flex-row gap-3 justify-between text-xs text-white/40">
          <span>© {new Date().getFullYear()} DogPicture.com · Part of the CarloOS portfolio.</span>
          <span>Secure checkout via Stripe · Prints fulfilled by Printify</span>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ heading, links }: { heading: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="font-display font-bold text-sm text-white mb-3 uppercase tracking-eyebrow">{heading}</h4>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="text-sm text-white/55 hover:text-white no-underline">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

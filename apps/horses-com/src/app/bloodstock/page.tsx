/**
 * Horses.com Bloodstock Hub -- /bloodstock
 *
 * Educational/editorial cluster on the breeding and sales side of racing:
 * what bloodstock means, how Thoroughbred sales work, and how to read a
 * pedigree. NON-WAGERING. No betting, odds, or handicapping anywhere.
 *
 * Byline: Horses.com Editorial (no fabricated credentials).
 * Authorities cited: The Jockey Club, major auction houses (educational).
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbSchema, combineSchemas, SchemaScript, EmailCapture } from '@carloOS/ui'
import { PremiumMasthead } from '@/components/PremiumMasthead'
import { bloodstockSpokes } from '@/data/bloodstock'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Bloodstock & Breeding -- Sales & Pedigrees | Horses.com',
  description:
    'Reference on the breeding and sales side of racing: what bloodstock means, how Thoroughbred auctions work, and how to read a pedigree.',
  path: '/bloodstock',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://horses.com' },
    { name: 'Bloodstock', url: 'https://horses.com/bloodstock' },
  ],
})

const bloodstockListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Bloodstock & Breeding Reference Articles at Horses.com',
  description:
    'Educational reference on the breeding and sales side of horse racing: bloodstock, Thoroughbred sales, and pedigrees.',
  numberOfItems: bloodstockSpokes.length,
  itemListElement: bloodstockSpokes.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.title,
    url: `https://horses.com/bloodstock/${s.slug}`,
  })),
}

const schema = combineSchemas(breadcrumbSchema, bloodstockListSchema)

export default function BloodstockHubPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      {/* ── PREMIUM MASTHEAD (image-first) ─────────────────────────── */}
      <PremiumMasthead
        manifestKey="horses-com:bloodstock-hero"
        fallbackKey="horses-com:hero"
        eyebrow="The Business of Racing"
        title="Bloodstock & Breeding"
        subtitle="Behind every racehorse is a market most fans never see: the breeding and sales world where pedigrees are read, foals are bred, and horses change hands at public auction. This is an educational reference to how that world works. Not a betting resource. Not a handicapping guide."
        alt="A Thoroughbred mare and foal in a breeding paddock"
      />

      {/* ── BREADCRUMB ─────────────────────────────────────────────── */}
      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>&#8250;</span>
        <span className="text-brand-text-mid font-medium">Bloodstock</span>
      </nav>

      {/* ── INTRO ──────────────────────────────────────────────────── */}
      <div className="px-container-sm sm:px-container py-12">
        <p className="text-sm text-brand-text-light mb-10 max-w-2xl">
          &ldquo;Bloodstock&rdquo; is the word racing uses for Thoroughbreds
          considered as breeding and trading assets &mdash; the business side of
          the sport that runs alongside the racing itself. These reference
          articles explain what the term covers, how Thoroughbred sales work,
          and how to read a pedigree page. They are educational guides: no
          betting, odds, handicapping, or individualized buying or investment
          advice appears anywhere in this cluster.
        </p>

        {/* ── SPOKE GRID ─────────────────────────────────────────── */}
        <section>
          <h2 className="font-display font-bold text-brand-dark text-xl mb-2 border-b border-brand-border pb-2">
            Bloodstock Reference Articles
            <span className="text-sm font-normal text-brand-text-light ml-3">
              {bloodstockSpokes.length} articles
            </span>
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0 mt-5">
            {bloodstockSpokes.map((spoke) => (
              <li key={spoke.slug}>
                <Link
                  href={`/bloodstock/${spoke.slug}`}
                  className="block py-3 px-4 rounded-md border border-brand-border bg-brand-surface hover:border-brand-primary hover:bg-white no-underline transition"
                >
                  <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-1">
                    {spoke.kicker}
                  </div>
                  <div className="font-display font-bold text-brand-dark text-base leading-tight mb-1">
                    {spoke.title}
                  </div>
                  <div className="text-xs text-brand-text-mid">
                    {spoke.description}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* ── EDITORIAL SCOPE NOTE ───────────────────────────────── */}
        <div className="mt-16 p-6 bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
            Editorial Scope
          </div>
          <p className="text-sm text-brand-text-mid m-0 leading-relaxed">
            These articles describe the breeding, sales, and pedigree side of
            racing as an educational subject. They are not wagering resources. No
            betting tips, odds commentary, or handicapping guidance is provided
            or implied. Nothing here is individualized buying, breeding, or
            investment advice; for decisions involving the purchase or breeding
            of horses, consult a qualified professional directly.
          </p>
        </div>

        {/* ── CROSS-LINKS TO SITE HUBS ────────────────────────────── */}
        <div className="mt-10">
          <h2 className="font-display font-bold text-brand-dark text-lg mb-4">
            Related Horses.com Reference
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Racing Hub', href: '/racing' },
              { label: 'Thoroughbred Flat Racing', href: '/racing/thoroughbred-flat-racing' },
              { label: 'Breeds', href: '/breeds' },
              { label: 'Ownership', href: '/ownership' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center text-xs font-semibold no-underline transition rounded-pill px-3 py-1.5 border border-brand-border text-brand-text-mid hover:border-brand-primary hover:bg-brand-primary-pale"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── EMAIL CAPTURE ──────────────────────────────────────────── */}
      <section
        className="px-container-sm sm:px-container py-12"
        style={{ background: 'var(--brand-primary-pale)' }}
      >
        <EmailCapture
          variant="section"
          siteId="horses-com"
          title="The Horses.com Reference"
          subtitle="One email a week: a deep-dive on a discipline, breed, or the business of the sport. Citation-anchored. No product pushes."
          ctaText="Send the weekly notes"
          source="bloodstock-hub"
          perks={[
            'One email weekly',
            'Citation-anchored',
            'No paid placements',
            'Unsubscribe anytime',
          ]}
        />
      </section>
    </>
  )
}

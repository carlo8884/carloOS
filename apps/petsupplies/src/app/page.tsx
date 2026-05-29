/**
 * PetSupplies.com homepage — /
 * Architect S1 / Directive 6.
 *
 * Hero with category search, "What are you shopping for?" pet-type grid,
 * "Top categories" list, How-we-review CTA, and Mailchimp-tagged email capture.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, CalloutBox } from '@carloOS/ui'
import { CATEGORIES } from '@/data/categories'

export const metadata: Metadata = buildMetadata({
  siteId: 'petsupplies',
  title: 'Independent Pet Product Comparisons',
  description:
    'PetSupplies.com — independent NerdWallet-style comparison engine for pet products. 30+ categories ranked by transparent editorial scoring across dogs, cats, fish, reptiles, and birds.',
  path: '/',
  type: 'website',
})

const PET_GROUPS: Array<{
  petType: string
  label: string
  emoji: string
  blurb: string
}> = [
  { petType: 'dog', label: 'Dogs', emoji: '🐶', blurb: 'Food, beds, crates, leashes, dental, joints' },
  { petType: 'cat', label: 'Cats', emoji: '🐱', blurb: 'Food, litter, scratchers, toys' },
  { petType: 'fish', label: 'Fish & Aquariums', emoji: '🐠', blurb: 'Tanks, filters, heaters, lighting' },
  { petType: 'reptile', label: 'Reptiles', emoji: '🦎', blurb: 'Enclosures, UVB, heating, substrate' },
  { petType: 'small-animal', label: 'Small Animals', emoji: '🐰', blurb: 'Rabbits, guinea pigs, ferrets' },
  { petType: 'bird', label: 'Birds', emoji: '🦜', blurb: 'Cages, food, perches' },
  { petType: 'general', label: 'Travel & Tech', emoji: '🎒', blurb: 'Carriers, GPS, cameras, stairs' },
]

export default function HomePage() {
  const topCategories = CATEGORIES.slice(0, 12)

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="bg-brand-dark px-container sm:px-container-sm py-20 relative overflow-hidden">
        <div className="max-w-content mx-auto relative z-10">
          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-6 h-0.5 bg-brand-primary-light" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary-light">
              Independent Pet Product Comparisons · 2026
            </span>
          </div>

          <h1
            className="font-display font-black text-white tracking-tighter leading-none mb-6 max-w-4xl"
            style={{ fontSize: 'clamp(40px, 6vw, 78px)' }}
          >
            Pet products,<br />
            <em className="text-brand-primary-light not-italic">compared honestly.</em>
          </h1>

          <p className="text-base lg:text-lg font-light text-white/70 leading-relaxed max-w-2xl mb-10">
            30+ categories ranked by transparent editorial scoring. We pick winners
            before affiliate links are added — commission rates do not influence rankings.
            See{' '}
            <Link href="/editorial-standards" className="underline hover:text-white">
              how we review
            </Link>
            .
          </p>

          {/* Search-bar styled jump-to-category */}
          <form
            action="/search"
            method="get"
            className="flex gap-3 max-w-xl flex-wrap"
            role="search"
          >
            <label htmlFor="q" className="sr-only">Search categories</label>
            <input
              id="q"
              name="q"
              type="search"
              placeholder="What are you shopping for? e.g. dog food, fish tank, UVB bulb"
              className="flex-1 min-w-64 px-4 py-3.5 bg-white/8 border border-white/12 rounded text-white text-sm outline-none placeholder:text-white/40 focus:border-brand-primary-light"
            />
            <button
              type="submit"
              className="px-6 py-3.5 bg-brand-primary-light text-white text-sm font-semibold rounded cursor-pointer border-0 hover:bg-white hover:text-brand-dark transition-colors"
            >
              Browse →
            </button>
          </form>
        </div>
      </section>

      {/* ── PET GROUPS ────────────────────────────────────────────────── */}
      <section className="bg-brand-surface px-container sm:px-container-sm py-section">
        <div className="max-w-content mx-auto">
          <h2 className="font-display font-bold text-brand-dark text-3xl tracking-tight mb-3">
            What are you shopping for?
          </h2>
          <p className="text-base text-brand-text-light mb-9 max-w-lg">
            Browse comparisons by pet type. Every category page has 5-10 ranked picks plus a
            buyer&apos;s guide.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {PET_GROUPS.map((g) => (
              <Link
                key={g.petType}
                href={`#${g.petType}`}
                className="block bg-brand-white border border-brand-border rounded-lg p-5 no-underline hover:border-brand-primary hover:-translate-y-0.5 transition-all duration-200"
              >
                <span className="text-2xl mb-3 block">{g.emoji}</span>
                <div className="font-display font-bold text-brand-dark text-base mb-1">{g.label}</div>
                <div className="text-xs text-brand-text-light">{g.blurb}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOP CATEGORIES GRID ──────────────────────────────────────── */}
      <section className="px-container sm:px-container-sm py-section">
        <div className="max-w-content mx-auto">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <h2 className="font-display font-bold text-brand-dark text-3xl tracking-tight">
              Top Categories
            </h2>
            <span className="text-xs text-brand-text-light">
              Updated {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {topCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="block bg-brand-white border border-brand-border rounded-lg p-5 no-underline hover:border-brand-primary hover:shadow-card transition-all"
              >
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
                  {labelFor(cat.petType)}
                </div>
                <div className="font-display font-bold text-brand-dark text-lg leading-snug mb-1">
                  Best {cat.h1Name}
                </div>
                <div className="text-xs text-brand-text-light line-clamp-2">
                  {cat.subcategories.slice(0, 3).join(' · ')}
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-9">
            <Link
              href="#all-categories"
              className="text-sm font-semibold text-brand-primary hover:underline"
            >
              See all {CATEGORIES.length} categories →
            </Link>
          </div>
        </div>
      </section>

      {/* ── ALL CATEGORIES BY PET TYPE ──────────────────────────────── */}
      {PET_GROUPS.map((group) => {
        const cats = CATEGORIES.filter((c) => c.petType === group.petType)
        if (cats.length === 0) return null
        return (
          <section
            key={group.petType}
            id={group.petType}
            className="px-container sm:px-container-sm py-12 border-t border-brand-border"
          >
            <div className="max-w-content mx-auto">
              <h2 className="font-display font-bold text-brand-dark text-2xl tracking-tight mb-6">
                <span className="mr-2" aria-hidden="true">{group.emoji}</span> {group.label}
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 list-none p-0 m-0">
                {cats.map((cat) => (
                  <li key={cat.slug}>
                    <Link
                      href={`/category/${cat.slug}`}
                      className="block bg-brand-surface border border-brand-border rounded-lg px-4 py-3 no-underline hover:border-brand-primary hover:bg-brand-white transition-colors"
                    >
                      <div className="text-sm font-semibold text-brand-dark">
                        Best {cat.shortName}
                      </div>
                      <div className="text-xs text-brand-text-light mt-0.5">
                        {cat.subcategories.length} sub-types
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )
      })}

      {/* ── HOW WE REVIEW ─────────────────────────────────────────── */}
      <section className="bg-brand-dark px-container sm:px-container-sm py-section">
        <div className="max-w-content mx-auto">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-10 items-center">
            <div>
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary-light mb-3">
                Editorial Standards
              </div>
              <h2 className="font-display font-bold text-white text-3xl tracking-tight">
                How We Review
              </h2>
            </div>
            <div className="text-white/70 text-base leading-relaxed">
              <p className="mb-4">
                Every ranking is decided by the PetSupplies.com editorial team before affiliate
                links are added. We rank products based on independent criteria — WSAVA-compliant
                manufacturing, VOHC acceptance for dental products, peer-reviewed published
                evidence, real-world reliability reports — not commission rates.
              </p>
              <p>
                We do not claim hands-on testing we have not done. We do not employ DVMs as
                marketing credentials. We use third-person framing — &quot;reviews indicate&quot; and
                &quot;compared to alternatives&quot; — to keep claims honest.
              </p>
              <Link
                href="/editorial-standards"
                className="inline-block mt-6 text-sm font-semibold text-brand-primary-light hover:text-white"
              >
                Read the full methodology →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FTC TRUST STRIP ──────────────────────────────────────── */}
      <div className="bg-brand-primary-pale border-y border-brand-border px-container sm:px-container-sm py-4">
        <div className="max-w-content mx-auto flex flex-wrap gap-x-8 gap-y-2 items-center justify-center">
          {[
            '✓ Independent rankings',
            '✓ No paid placement',
            '✓ Real brands, real specs',
            '✓ FTC disclosed on every page',
          ].map((item) => (
            <span key={item} className="text-xs font-semibold text-brand-primary-dark">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── EMAIL CAPTURE ─────────────────────────────────────────── */}
      <section className="bg-brand-surface px-container sm:px-container-sm py-section">
        <div className="max-w-content mx-auto">
          <EmailCapture
            variant="section"
            siteId="petsupplies"
            title="Weekly deals + new reviews"
            subtitle="One email per week with new product reviews and pet-supply deals. Unsubscribe anytime — every email links to a one-click unsubscribe."
            ctaText="Subscribe Free"
            source="petsupplies:weekly"
            perks={['📬 One email weekly', '🚫 No spam', '🔒 No data resale', '⭐ Honest reviews']}
          />
          <div className="text-center mt-6">
            <CalloutBox variant="note" title="What you'll get">
              <p>
                A short Tuesday email with this week&apos;s newly published category, any updated
                rankings, and current deals on the products we&apos;ve already recommended. Tagged as{' '}
                <code className="text-xs bg-brand-white px-1.5 py-0.5 rounded border border-brand-border">
                  petsupplies:weekly
                </code>{' '}
                in our list — you can switch tags from any email.
              </p>
            </CalloutBox>
          </div>
        </div>
      </section>
    </>
  )
}

function labelFor(petType: string): string {
  switch (petType) {
    case 'dog': return 'Dogs'
    case 'cat': return 'Cats'
    case 'small-animal': return 'Small Animals'
    case 'fish': return 'Fish'
    case 'reptile': return 'Reptiles'
    case 'bird': return 'Birds'
    default: return 'General'
  }
}

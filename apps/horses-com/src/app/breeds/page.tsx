/**
 * Horses.com Breeds Index — /breeds
 *
 * Lists all breeds in src/data/breeds.ts, grouped by BreedType. Each entry
 * deep-links to /breeds/[slug] (where the template renders a full profile
 * for every slug NOT in EXISTING_STATIC_BREED_SLUGS).
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture } from '@carloOS/ui'
import { Breeds, groupBreedsByType, type BreedType } from '../../data/breeds'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Horse Breed Guide — 50 Breeds Profiled',
  description:
    'Reference profiles for 50 horse breeds: temperament, disciplines, health concerns, and care guidance grounded in AAEP, UC Davis VGL, and breed-club data.',
  path: '/breeds',
})

const GROUP_ORDER: BreedType[] = [
  'Stock',
  'Sport',
  'Warmblood',
  'Gaited',
  'Draft',
  'Pony',
  'Pleasure',
  'Wild/Feral',
]

const GROUP_DESCRIPTIONS: Record<BreedType, string> = {
  Stock:
    'American working horse breeds developed for cattle work and short-distance racing.',
  Sport:
    'Hot-blooded breeds historically bred for racing, war, or refined sport competition.',
  Warmblood:
    'European sport-horse studbooks (Hanoverian, KWPN, Holsteiner, etc.) bred for FEI disciplines.',
  Gaited:
    'Breeds carrying inherited four-beat ambling gaits, prized for smooth riding over long distance.',
  Draft:
    'Heavy horses bred for plowing, logging, and heavy harness work.',
  Pony:
    'Breeds standing under ~14.2 hh — typically hardy mountain or moor types.',
  Pleasure:
    'Light horses bred primarily for harness, saddle, or all-around amateur use.',
  'Wild/Feral':
    'Feral or semi-feral breeds adopted from wild populations and gentled for domestic use.',
}

export default function BreedsIndexPage() {
  const grouped = groupBreedsByType()

  return (
    <>
      {/* Hero */}
      <div className="bg-brand-dark px-container-sm sm:px-container py-16">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
            Breed Reference
          </span>
        </div>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-4"
          style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
        >
          Horse Breed Guide
        </h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">
          Reference profiles for {Breeds.length} horse breeds — registry, height/weight,
          disciplines, breed-specific health risks, and recommended genetic-test panels.
        </p>
      </div>

      {/* Breadcrumb */}
      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Breeds</span>
      </nav>

      {/* Content */}
      <div className="px-container-sm sm:px-container py-12">
        <p className="text-sm text-brand-text-light mb-10 max-w-2xl">
          {Breeds.length} breed profiles, grouped by working type. Profiles combine
          breed-registry guidance, UC Davis VGL test data, AAEP vaccination and
          wellness rhythms, and peer-reviewed equine literature.
        </p>

        <div className="space-y-12">
          {GROUP_ORDER.map((groupName) => {
            const groupBreeds = grouped[groupName]
            if (!groupBreeds || groupBreeds.length === 0) return null
            return (
              <section key={groupName}>
                <h2 className="font-display font-bold text-brand-dark text-xl mb-2 border-b border-brand-border pb-2">
                  {groupName}
                  <span className="text-sm font-normal text-brand-text-light ml-3">
                    {groupBreeds.length} {groupBreeds.length === 1 ? 'breed' : 'breeds'}
                  </span>
                </h2>
                <p className="text-sm text-brand-text-light mb-5 max-w-2xl">
                  {GROUP_DESCRIPTIONS[groupName]}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 list-none p-0">
                  {groupBreeds.map((b) => (
                    <li key={b.slug}>
                      <Link
                        href={`/breeds/${b.slug}`}
                        className="block py-2 px-3 rounded-md border border-brand-border bg-brand-surface hover:border-brand-primary hover:bg-white no-underline transition"
                      >
                        <div className="font-display font-bold text-brand-dark text-base leading-tight">
                          {b.name}
                        </div>
                        <div className="text-xs text-brand-text-light mt-0.5">
                          {b.sizeCategory.split(' (')[0]} · {b.energyLevel} energy ·{' '}
                          {b.heightRangeHh[0]}–{b.heightRangeHh[1]} hh
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )
          })}
        </div>
      </div>

      <section
        className="px-container-sm sm:px-container py-12"
        style={{ background: 'var(--brand-primary-pale)' }}
      >
        <EmailCapture
          variant="section"
          siteId="horses-com"
          title="The Horses.com Breed Reference"
          subtitle="One email a week: a deep-dive on a single breed, discipline, or piece of gear. Citation-anchored. No product pushes."
          ctaText="Subscribe"
          source="breeds-hub"
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

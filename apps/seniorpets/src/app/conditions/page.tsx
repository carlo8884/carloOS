import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@carloOS/ui'
import { CONDITIONS } from '../../data/conditions'
import { AffiliateDisclosure } from '../../components'

export const metadata: Metadata = buildMetadata({
  siteId: 'seniorpets',
  title: 'Senior Pet Conditions — Index | SeniorPetPharmacy',
  description:
    'Browse vet-reviewed guides to the 30 most common senior pet conditions — arthritis, kidney disease, cognitive decline, heart disease, and more, for both dogs and cats.',
  path: '/conditions',
})

const DOGS = CONDITIONS.filter((c) => c.species === 'dog')
const CATS = CONDITIONS.filter((c) => c.species === 'cat')

export default function ConditionsIndexPage() {
  return (
    <div className="px-container sm:px-container-sm py-16 max-w-content mx-auto">
      <nav className="text-xs text-brand-text-light flex gap-2 mb-6">
        <Link href="/" className="hover:text-brand-primary no-underline">
          Home
        </Link>
        <span>›</span>
        <span className="text-brand-text-mid">Conditions</span>
      </nav>

      <h1 className="font-display font-semibold text-brand-dark text-4xl tracking-tight mb-4">
        Senior pet conditions
      </h1>
      <p className="text-base text-brand-text-mid leading-relaxed max-w-2xl mb-8">
        The thirty diagnoses your veterinarian is most likely to make in the
        back half of your pet&apos;s life. Each guide is written for owners —
        what it is, when to worry, what treatment looks like, and which
        products and medications support care.
      </p>

      <AffiliateDisclosure variant="banner" />

      <section className="mt-10">
        <h2 className="font-display font-semibold text-brand-dark text-2xl mb-5">
          Senior dogs ({DOGS.length})
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {DOGS.map((c) => (
            <ConditionCard key={c.slug} c={c} />
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display font-semibold text-brand-dark text-2xl mb-5">
          Senior cats ({CATS.length})
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATS.map((c) => (
            <ConditionCard key={c.slug} c={c} />
          ))}
        </div>
      </section>
    </div>
  )
}

function ConditionCard({ c }: { c: (typeof CONDITIONS)[number] }) {
  return (
    <Link
      href={`/conditions/${c.slug}`}
      className="block bg-brand-white border border-brand-border rounded-lg p-5 no-underline hover:border-brand-primary hover:shadow-card transition-all"
    >
      <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-1.5">
        {c.category.replace('-', ' ')}
      </div>
      <h3 className="font-display font-semibold text-brand-dark text-lg leading-snug mb-2">
        {c.title}
      </h3>
      <p className="text-sm text-brand-text-light leading-relaxed line-clamp-3">
        {c.description}
      </p>
    </Link>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@carloOS/ui'
import { MEDICATIONS } from '../../data/medications'
import { AffiliateDisclosure, VetDisclaimer } from '../../components'

export const metadata: Metadata = buildMetadata({
  siteId: 'seniorpets',
  title: 'Senior Pet Medications — Reference Index | SeniorPetPharmacy',
  description:
    'Vet-reviewed references for the 20 medications most senior pet owners encounter — joint support, cardiac care, antithyroid, insulin, and senior pain management.',
  path: '/medications',
})

export default function MedicationsIndexPage() {
  return (
    <div className="px-container sm:px-container-sm py-16 max-w-content mx-auto">
      <nav className="text-xs text-brand-text-light flex gap-2 mb-6">
        <Link href="/" className="hover:text-brand-primary no-underline">
          Home
        </Link>
        <span>›</span>
        <span className="text-brand-text-mid">Medications</span>
      </nav>

      <h1 className="font-display font-semibold text-brand-dark text-4xl tracking-tight mb-4">
        Senior pet medication reference
      </h1>
      <p className="text-base text-brand-text-mid leading-relaxed max-w-2xl mb-6">
        Owner-friendly references for the medications most senior dogs and
        cats are prescribed. Each entry explains what the medication does,
        what conditions it treats, common side effects, and the published dose
        range — with a strong reminder to confirm any dose with your
        veterinarian.
      </p>

      <VetDisclaimer />
      <AffiliateDisclosure variant="banner" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {MEDICATIONS.map((m) => (
          <Link
            key={m.slug}
            href={`/medications/${m.slug}`}
            className="block bg-brand-white border border-brand-border rounded-lg p-5 no-underline hover:border-brand-primary hover:shadow-card transition-all"
          >
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-1.5">
              {m.drugClass}
            </div>
            <h3 className="font-display font-semibold text-brand-dark text-lg leading-tight mb-1.5">
              {m.name}
            </h3>
            <p className="text-xs text-brand-text-light mb-2">
              {m.activeIngredient}
            </p>
            <p className="text-sm text-brand-text-mid leading-snug line-clamp-3">
              {m.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

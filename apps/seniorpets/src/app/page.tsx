import type { Metadata } from 'next'
import { buildMetadata, AffiliateDisclosure } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'seniorpets',
  title: 'SeniorPetPharmacy — Compassionate care for aging pets — research-anchored guides and trusted product references.',
  description: 'SeniorPetPharmacy — Rx and care guidance for senior dogs and cats. Vet-reviewed, sourced.',
  path: '/',
  type: 'website',
})

export default function HomePage() {
  return (
    <main className="min-h-screen bg-brand-white">
      <div className="max-w-content mx-auto px-container py-20">
        <p className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
          SeniorPetPharmacy
        </p>
        <h1 className="font-display font-black text-brand-dark mb-6"
            style={{ fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1.05 }}>
          Compassionate care for aging pets — research-anchored guides and trusted product references.
        </h1>
        <p className="text-lg text-brand-text-mid leading-relaxed max-w-2xl mb-10">
          SeniorPetPharmacy — Rx and care guidance for senior dogs and cats. Vet-reviewed, sourced.
        </p>
        <AffiliateDisclosure variant="inline" siteId="seniorpets" />
      </div>
    </main>
  )
}

import type { Metadata } from 'next'
import { buildMetadata, AffiliateDisclosure } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petsupplies',
  title: 'PetSupplies.com — Independent Pet Product Comparisons',
  description: 'PetSupplies.com — independent comparisons of dog, cat, fish, reptile, and small-pet products. NerdWallet for pet gear.',
  path: '/',
  type: 'website',
})

export default function HomePage() {
  return (
    <main className="min-h-screen bg-brand-white">
      <div className="max-w-content mx-auto px-container py-20">
        <p className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
          PetSupplies.com
        </p>
        <h1 className="font-display font-black text-brand-dark mb-6"
            style={{ fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1.05 }}>
          Independent Pet Product Comparisons
        </h1>
        <p className="text-lg text-brand-text-mid leading-relaxed max-w-2xl mb-10">
          PetSupplies.com — independent comparisons of dog, cat, fish, reptile, and small-pet products. NerdWallet for pet gear.
        </p>
        <AffiliateDisclosure variant="inline" siteId="petsupplies" />
      </div>
    </main>
  )
}

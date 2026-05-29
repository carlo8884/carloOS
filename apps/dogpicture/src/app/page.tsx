import type { Metadata } from 'next'
import { buildMetadata, AffiliateDisclosure } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dogpicture',
  title: 'DogPicture.com — AI dog portraits — keepsakes for the dog you love',
  description: 'DogPicture.com — AI-generated dog portraits printed on canvas, mugs, posters. Self-serve POD.',
  path: '/',
  type: 'website',
})

export default function HomePage() {
  return (
    <main className="min-h-screen bg-brand-white">
      <div className="max-w-content mx-auto px-container py-20">
        <p className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
          DogPicture
        </p>
        <h1 className="font-display font-black text-brand-dark mb-6"
            style={{ fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1.05 }}>
          AI dog portraits — keepsakes for the dog you love
        </h1>
        <p className="text-lg text-brand-text-mid leading-relaxed max-w-2xl mb-10">
          DogPicture.com — AI-generated dog portraits printed on canvas, mugs, posters. Self-serve POD.
        </p>
        <AffiliateDisclosure variant="inline" siteId="dogpicture" />
      </div>
    </main>
  )
}

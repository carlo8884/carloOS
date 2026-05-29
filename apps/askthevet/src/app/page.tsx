import type { Metadata } from 'next'
import { buildMetadata, AffiliateDisclosure } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'askthevet',
  title: 'AskTheVet.com — AI Pet Symptom Checker — Triage in Seconds',
  description: 'AskTheVet.com — AI-assisted pet symptom triage. Educational guidance with vet-referral routing.',
  path: '/',
  type: 'website',
})

export default function HomePage() {
  return (
    <main className="min-h-screen bg-brand-white">
      <div className="max-w-content mx-auto px-container py-20">
        <p className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
          AskTheVet
        </p>
        <h1 className="font-display font-black text-brand-dark mb-6"
            style={{ fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1.05 }}>
          AI Pet Symptom Checker — Triage in Seconds
        </h1>
        <p className="text-lg text-brand-text-mid leading-relaxed max-w-2xl mb-10">
          AskTheVet.com — AI-assisted pet symptom triage. Educational guidance with vet-referral routing.
        </p>
        <AffiliateDisclosure variant="inline" siteId="askthevet" />
      </div>
    </main>
  )
}

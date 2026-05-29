import type { Metadata } from 'next'
import { buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'askthevet',
  title: 'Affiliate Disclosure',
  description: 'How AskTheVet earns revenue and why our triage guidance stays independent.',
  path: '/legal/affiliate-disclosure',
})

export default function Page() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-12 prose">
      <h1>Affiliate Disclosure</h1>
      <p>
        AskTheVet.com participates in several affiliate programs. When you click an outbound
        link to a partner — Vetster, Dutch, Lemonade, Pumpkin, ManyPets, Chewy, Amazon, and
        others — and complete a qualifying action, AskTheVet may receive a commission at no
        additional cost to you.
      </p>
      <p>
        These relationships do not influence our triage guidance. The triage_level we surface
        is selected by the AI model based on the symptom and species you describe. Monetization
        routing comes after the triage decision, never before.
      </p>
      <p>
        AskTheVet provides consumer health information, not veterinary advice. Always consult a
        licensed veterinarian for diagnosis and treatment.
      </p>
    </article>
  )
}

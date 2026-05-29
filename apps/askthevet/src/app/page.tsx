/**
 * AskTheVet Homepage — /
 *
 * Composed from <ScaffoldHomeShell /> per packages/ui/src/components/
 * visual/ScaffoldHomeShell.tsx. AI-assisted symptom-triage positioning.
 *
 * Voice: educational, vet-deferential, urgency-aware. No diagnostic
 * claims, no "AI vet says" framing — every output is "educational
 * guidance, not a substitute for veterinary care."
 *
 * Categories prop intentionally omitted until the underlying routes
 * ship — /symptom-checker, /urgency, /find-a-vet, /telehealth,
 * /conditions, /insurance don't exist yet on this scaffold. Adding
 * 404-bound nav cards is worse than a thinner homepage. The shell's
 * `categories` prop reactivates them via a single config addition
 * once COO/content lands the routes.
 *
 * standardsHref also omitted for the same reason (/editorial-standards
 * doesn't exist yet). Quote alone (no link) still ships as a clean
 * editorial moment.
 */

import type { Metadata } from 'next'
import { buildMetadata, ScaffoldHomeShell } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'askthevet',
  title: 'AskTheVet.com — AI Pet Symptom Checker — Triage in Seconds',
  description:
    'AskTheVet.com — AI-assisted pet symptom triage. Educational guidance with vet-referral routing.',
  path: '/',
  type: 'website',
})

export default function HomePage() {
  return (
    <ScaffoldHomeShell
      siteId="askthevet"
      eyebrow="Educational pet symptom guidance"
      headline="When to worry."
      headlineAccent="When to wait."
      positioning="AskTheVet is an educational reference for pet owners trying to read a symptom — what the most likely categories of cause are, when the situation is genuinely urgent, and how to describe what you are seeing to a veterinary professional. This is triage support, not a diagnosis; every page routes you toward an actual veterinarian when the symptom warrants it."
      primaryCta={{ label: 'Get the Triage Brief', href: '#email-capture' }}
      trustClaims={[
        'Educational, not diagnostic',
        'Veterinary-source-anchored',
        'Routes to real clinicians',
        'No paid referrals',
      ]}
      quote={{
        text: 'The right answer to most pet symptoms starts with a real veterinarian. The point of this site is to help you decide how soon, and what to bring.',
      }}
      emailTitle="The Triage Brief"
      emailSubtitle="One short email a month — the symptom patterns we covered, new vet-tele evaluations, and the urgency-tier updates. Free. No upsells. Unsubscribe anytime."
      emailCta="Subscribe"
    />
  )
}

/**
 * AskTheVet Homepage — /
 *
 * Composed from <ScaffoldHomeShell /> per packages/ui/src/components/
 * visual/ScaffoldHomeShell.tsx. AI-assisted symptom-triage positioning;
 * routes to existing scaffolded surfaces and to telehealth-partner
 * referral pages (Monetization-lane data, surfaced via shell categories).
 *
 * Voice: educational, vet-deferential, urgency-aware. No diagnostic
 * claims, no "AI vet says" framing — every output is "educational
 * guidance, not a substitute for veterinary care."
 */

import type { Metadata } from 'next'
import { buildMetadata, ScaffoldHomeShell } from '@carloOS/ui'
import type { ScaffoldCategory } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'askthevet',
  title: 'AskTheVet.com — AI Pet Symptom Checker — Triage in Seconds',
  description:
    'AskTheVet.com — AI-assisted pet symptom triage. Educational guidance with vet-referral routing.',
  path: '/',
  type: 'website',
})

const CATEGORIES: ScaffoldCategory[] = [
  {
    icon: 'check',
    title: 'Symptom triage',
    desc: 'Describe what you are seeing — gait change, appetite shift, breathing pattern — and get an educational read on urgency tiers and likely categories of cause.',
    href: '/symptom-checker',
  },
  {
    icon: 'health',
    title: 'When to call a vet',
    desc: 'Plain-English thresholds for the most common owner-observable symptoms in dogs and cats. Updated against published triage guidance.',
    href: '/urgency',
  },
  {
    icon: 'directory',
    title: 'Find a vet near you',
    desc: 'Local-clinic directory with general practice, emergency, and specialty filters. AVMA membership is the floor; we surface board-certified specialists where they exist.',
    href: '/find-a-vet',
  },
  {
    icon: 'lightbulb',
    title: 'Vet telehealth',
    desc: 'When telehealth is the right call (and when it absolutely is not). Independent comparisons of the major vet-tele services.',
    href: '/telehealth',
  },
  {
    icon: 'guide',
    title: 'Common conditions',
    desc: 'Educational references for the conditions owners most often try to identify themselves — ear infections, vomiting, GI upset, skin issues, and more.',
    href: '/conditions',
  },
  {
    icon: 'shield',
    title: 'Pet insurance',
    desc: 'How insurance interacts with the triage process — pre-authorization, coverage of emergency visits, and which plans hold up across age tiers.',
    href: '/insurance',
  },
]

export default function HomePage() {
  return (
    <ScaffoldHomeShell
      siteId="askthevet"
      eyebrow="Educational pet symptom guidance"
      headline="When to worry."
      headlineAccent="When to wait."
      positioning="AskTheVet is an educational reference for pet owners trying to read a symptom — what the most likely categories of cause are, when the situation is genuinely urgent, and how to describe what you are seeing to a veterinary professional. This is triage support, not a diagnosis; every page routes you toward an actual veterinarian when the symptom warrants it."
      primaryCta={{ label: 'Start the symptom checker', href: '/symptom-checker' }}
      secondaryCta={{ label: 'Find a vet', href: '/find-a-vet' }}
      trustClaims={[
        'Educational, not diagnostic',
        'Veterinary-source-anchored',
        'Routes to real clinicians',
        'No paid referrals',
      ]}
      categories={CATEGORIES}
      quote={{
        text: 'The right answer to most pet symptoms starts with a real veterinarian. The point of this site is to help you decide how soon, and what to bring.',
        standardsHref: '/editorial-standards',
      }}
      emailTitle="The Triage Brief"
      emailSubtitle="One short email a month — the symptom patterns we covered, new vet-tele evaluations, and the urgency-tier updates. Free. No upsells. Unsubscribe anytime."
      emailCta="Subscribe"
    />
  )
}

/**
 * SeniorPetPharmacy Homepage — /
 *
 * Composed from <ScaffoldHomeShell /> per packages/ui/src/components/
 * visual/ScaffoldHomeShell.tsx. Per-site copy lives here; structural
 * UI and trust pattern live in the shell.
 *
 * Voice: senior-pet care reference, vet-respectful, source-anchored.
 * No fabricated authority; categories link to existing routes only.
 */

import type { Metadata } from 'next'
import { buildMetadata, ScaffoldHomeShell } from '@carloOS/ui'
import type { ScaffoldCategory } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'seniorpets',
  title: 'SeniorPetPharmacy — Compassionate care for aging pets — research-anchored guides and trusted product references.',
  description:
    'SeniorPetPharmacy — Rx and care guidance for senior dogs and cats. Vet-reviewed, sourced.',
  path: '/',
  type: 'website',
})

const CATEGORIES: ScaffoldCategory[] = [
  {
    icon: 'senior',
    title: 'Senior dog care',
    desc: 'What changes after seven years — mobility, cognitive shifts, weight management, and the screenings worth running annually.',
    href: '/dogs',
  },
  {
    icon: 'health',
    title: 'Senior cat care',
    desc: 'Kidney disease, hyperthyroidism, dental shifts, and the once-or-twice-yearly bloodwork cadence that catches them early.',
    href: '/cats',
  },
  {
    icon: 'shield',
    title: 'Pet insurance for seniors',
    desc: 'Pre-existing-condition rules, age caps, and which carriers still write meaningful coverage past ten — independently compared.',
    href: '/insurance',
  },
  {
    icon: 'food',
    title: 'Senior nutrition',
    desc: 'Protein levels, joint-support ingredients, calorie targets, and what the literature actually shows about life-stage-formulated foods.',
    href: '/nutrition',
  },
  {
    icon: 'guide',
    title: 'Quality-of-life decisions',
    desc: 'The hardest stretch of pet ownership — assessing pain, mobility, and dignity. Frameworks vets actually use.',
    href: '/quality-of-life',
  },
  {
    icon: 'compare',
    title: 'Product references',
    desc: 'Joint supplements, mobility aids, orthopedic beds, and senior-formula foods. Same rubric. No paid placements.',
    href: '/reviews',
  },
]

export default function HomePage() {
  return (
    <ScaffoldHomeShell
      siteId="seniorpets"
      eyebrow="A Reference for Senior-Pet Care"
      headline="Compassionate care"
      headlineAccent="for aging pets."
      positioning="SeniorPetPharmacy is a research-anchored reference for owners of senior dogs and cats — the years where small management decisions compound into months of comfort. Condition guides cite veterinary sources, product references run the same evaluation rubric across brands, and the editorial line is honest about where the evidence stops. Built for owners who'd rather read a citation than a marketing claim."
      primaryCta={{ label: 'Browse care guides', href: '/dogs' }}
      secondaryCta={{ label: 'Compare senior pet insurance', href: '/insurance' }}
      trustClaims={[
        'Research-anchored guidance',
        'Vet-respectful framing',
        'Independent product references',
        'No paid placements',
      ]}
      categories={CATEGORIES}
      quote={{
        text: 'The last years are the ones where small decisions matter most — and where the cost of a wrong one is also smallest. We try to be useful in that window.',
        standardsHref: '/editorial-standards',
      }}
      emailTitle="The Senior-Pet Brief"
      emailSubtitle="A monthly digest for owners of older dogs and cats — care updates, new product references, and the gentler corners of veterinary research. One email a month. No upsells."
      emailCta="Subscribe"
    />
  )
}

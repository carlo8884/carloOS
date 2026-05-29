/**
 * SeniorPetPharmacy Homepage — /
 *
 * Composed from <ScaffoldHomeShell /> per packages/ui/src/components/
 * visual/ScaffoldHomeShell.tsx. Per-site copy lives here; structural
 * UI and trust pattern live in the shell.
 *
 * Voice: senior-pet care reference, vet-respectful, source-anchored.
 *
 * Categories prop intentionally omitted until the underlying category
 * routes ship — /dogs, /cats, /insurance, /nutrition, /quality-of-life,
 * /reviews don't exist yet. Adding 404-bound nav cards is worse than
 * a thinner homepage. The shell's `categories` prop reactivates them
 * via a single config addition once COO/content lands the routes.
 *
 * Other quote / standardsHref also point at not-yet-existent
 * /editorial-standards; omitting standardsHref for now to keep the
 * homepage 404-free. Quote alone (no link) still ships as a clean
 * editorial moment.
 */

import type { Metadata } from 'next'
import { buildMetadata, ScaffoldHomeShell } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'seniorpets',
  title: 'SeniorPetPharmacy — Compassionate care for aging pets — research-anchored guides and trusted product references.',
  description:
    'SeniorPetPharmacy — Rx and care guidance for senior dogs and cats. Vet-reviewed, sourced.',
  path: '/',
  type: 'website',
})

export default function HomePage() {
  return (
    <ScaffoldHomeShell
      siteId="seniorpets"
      eyebrow="A Reference for Senior-Pet Care"
      headline="Compassionate care"
      headlineAccent="for aging pets."
      positioning="SeniorPetPharmacy is a research-anchored reference for owners of senior dogs and cats — the years where small management decisions compound into months of comfort. Condition guides cite veterinary sources, product references run the same evaluation rubric across brands, and the editorial line is honest about where the evidence stops. Built for owners who'd rather read a citation than a marketing claim."
      primaryCta={{ label: 'Get the Senior-Pet Brief', href: '#email-capture' }}
      trustClaims={[
        'Research-anchored guidance',
        'Vet-respectful framing',
        'Independent product references',
        'No paid placements',
      ]}
      quote={{
        text: 'The last years are the ones where small decisions matter most — and where the cost of a wrong one is also smallest. We try to be useful in that window.',
      }}
      emailTitle="The Senior-Pet Brief"
      emailSubtitle="A monthly digest for owners of older dogs and cats — care updates, new product references, and the gentler corners of veterinary research. One email a month. No upsells."
      emailCta="Subscribe"
    />
  )
}

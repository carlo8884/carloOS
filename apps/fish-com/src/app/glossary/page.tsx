import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
  EmailCapture,
} from '@carloOS/ui'
import { HubMasthead } from '../../components/HubMasthead'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Aquarium Glossary — Fishkeeping Terms Defined | Fish.com',
  description:
    'A plain-language aquarium glossary: the nitrogen cycle, ammonia, nitrite, nitrate, pH, GH, KH, cycling, bioload, brackish, and more fishkeeping terms defined.',
  path: '/glossary',
})

interface Term {
  term: string
  def: string
}
interface Group {
  category: string
  terms: Term[]
}

const GLOSSARY: Group[] = [
  {
    category: 'The Nitrogen Cycle',
    terms: [
      { term: 'Nitrogen cycle', def: 'The biological process by which beneficial bacteria convert toxic fish waste into less harmful compounds: ammonia → nitrite → nitrate. Establishing it is the single most important step in a new tank.' },
      { term: 'Ammonia (NH₃)', def: 'The first and most toxic waste product, from fish respiration, waste, and decaying matter. Even low levels harm fish. The target in an established tank is zero.' },
      { term: 'Nitrite (NO₂)', def: 'The second-stage compound, produced as bacteria process ammonia. Still highly toxic; the target is zero. A nitrite spike is the classic mid-cycle danger point.' },
      { term: 'Nitrate (NO₃)', def: 'The far less toxic end product, removed by water changes and live plants. Kept low (commonly under 20–40 ppm) rather than zero.' },
      { term: 'Beneficial bacteria', def: 'The nitrifying bacteria (Nitrosomonas, Nitrobacter/Nitrospira) that colonize filter media and surfaces and drive the nitrogen cycle. Protecting them is why filter media is rinsed in tank water, not tap.' },
      { term: 'Cycling', def: 'The process of growing enough beneficial bacteria to handle the tank’s waste before (fishless) or while (fish-in, riskier) stocking it. Often takes several weeks.' },
      { term: 'New tank syndrome', def: 'Fish loss or stress from stocking a tank before it has cycled, when ammonia or nitrite climbs with no bacteria to process it.' },
    ],
  },
  {
    category: 'Water Chemistry',
    terms: [
      { term: 'pH', def: 'How acidic or basic the water is, on a 0–14 scale. Different species prefer different ranges; stability matters more than chasing a specific number.' },
      { term: 'GH (general hardness)', def: 'The concentration of dissolved minerals, mainly calcium and magnesium. Soft-water species prefer low GH; livebearers prefer high GH.' },
      { term: 'KH (carbonate hardness)', def: 'The water’s buffering capacity — its resistance to pH swings. Low KH lets pH crash; KH is also a variable in the CO₂ calculation for planted tanks.' },
      { term: 'TDS', def: 'Total dissolved solids — a broad measure of everything dissolved in the water, used to track water quality and consistency, especially in shrimp and soft-water tanks.' },
      { term: 'Salinity / specific gravity', def: 'The salt concentration of the water, measured directly (ppt) or as specific gravity with a hydrometer or refractometer. Reef tanks target ~1.025 SG.' },
      { term: 'Brackish', def: 'Water between fresh and full marine salinity, the natural environment of species such as mollies, archerfish, and figure-eight puffers.' },
    ],
  },
  {
    category: 'Equipment & Filtration',
    terms: [
      { term: 'Biological filtration', def: 'The filter’s most important job: housing the beneficial bacteria on media with high surface area. It is what actually keeps a cycled tank safe.' },
      { term: 'Mechanical filtration', def: 'Physically trapping particles (floss, sponge, filter pads) so the water runs clear. The trapped debris must be cleaned out regularly.' },
      { term: 'Chemical filtration', def: 'Using media such as activated carbon to remove dissolved substances (odors, tannins, some medications) by adsorption.' },
      { term: 'HOB / canister / sponge filter', def: 'Common filter types: hang-on-back (HOB) for ease, canister for capacity on larger tanks, and sponge filters for gentle, fry- and shrimp-safe biological filtration.' },
      { term: 'Heater', def: 'Maintains a stable tropical temperature. Sizing depends on tank volume and the room-to-target temperature gap — and large tanks are safer with two smaller heaters.' },
      { term: 'Protein skimmer', def: 'A marine-tank device that removes dissolved organic waste by foam fractionation before it breaks down into nitrate. Standard on reef systems.' },
      { term: 'Drop checker', def: 'A planted-tank indicator filled with a reference solution that changes color with dissolved CO₂ — lime green indicates an on-target level.' },
    ],
  },
  {
    category: 'Husbandry & Stocking',
    terms: [
      { term: 'Acclimation', def: 'Gradually adjusting a new fish to the tank’s temperature and water chemistry (e.g., floating then drip acclimation) to avoid shock.' },
      { term: 'Quarantine', def: 'Housing new arrivals separately for a few weeks to observe for disease before adding them to the display tank — the single best way to prevent outbreaks.' },
      { term: 'Water change', def: 'Replacing a portion of tank water with fresh dechlorinated water to export nitrate and replenish minerals — the backbone of maintenance.' },
      { term: 'Bioload', def: 'The total waste burden the livestock places on the system. High bioload (e.g., goldfish) demands more filtration and larger or more frequent water changes.' },
      { term: 'Stocking', def: 'How heavily a tank is populated relative to its volume, surface area, and filtration. Conservative stocking is more forgiving and more stable.' },
      { term: 'School / shoal', def: 'Many species are social and must be kept in groups (often 6+) to feel secure; a stressed lone schooling fish is more disease-prone.' },
      { term: 'Fry', def: 'Baby fish. They need finer food, gentle (often sponge) filtration, and frequently a separate grow-out tank.' },
    ],
  },
]

const ALL_TERMS = GLOSSARY.flatMap((g) => g.terms)

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Fish.com', url: 'https://fish.com/' },
    { name: 'Glossary', url: 'https://fish.com/glossary' },
  ],
})

const definedTermSetSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  name: 'Aquarium Glossary',
  description: 'Plain-language definitions of aquarium and fishkeeping terms.',
  url: 'https://fish.com/glossary',
  hasDefinedTerm: ALL_TERMS.map((t) => ({
    '@type': 'DefinedTerm',
    name: t.term,
    description: t.def,
    inDefinedTermSet: 'https://fish.com/glossary',
  })),
}

const schema = combineSchemas(breadcrumbSchema, definedTermSetSchema)

export default function AquariumGlossaryPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      {/* HERO — premium image-first masthead (HubMasthead) */}
      <HubMasthead
        manifestKey="fish-com:glossary-hero"
        alt="A planted freshwater aquarium"
        eyebrow="Reference"
        title="Aquarium Glossary"
        subtitle="The language of fishkeeping in plain English — the nitrogen cycle, water chemistry, the gear and how it filters, and the husbandry terms behind a stable, healthy tank."
        primaryCta={{ href: '/tools', label: 'Open the calculators' }}
        secondaryCta={{ href: '/setup/aquarium-cycling-guide', label: 'Learn the nitrogen cycle' }}
      />

      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Fish.com</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Glossary</span>
      </nav>

      <div className="px-container-sm sm:px-container py-12 max-w-3xl">
        <p className="text-sm text-brand-text-light mb-10">
          {ALL_TERMS.length} fishkeeping terms, grouped by topic. To put the water-chemistry terms to work, the
          <Link href="/tools" className="text-brand-primary hover:underline"> calculators</Link> handle the math, and the
          <Link href="/water-parameters" className="text-brand-primary hover:underline"> water parameters</Link> reference goes deeper on each.
        </p>

        {GLOSSARY.map((group) => (
          <section key={group.category} className="mb-10">
            <h2 className="font-display font-bold text-brand-dark text-xl mb-4 pb-2 border-b border-brand-border">
              {group.category}
            </h2>
            <dl className="space-y-4">
              {group.terms.map((t) => (
                <div key={t.term} className="border-l-2 border-brand-primary/30 pl-4">
                  <dt className="font-display font-bold text-brand-dark text-base">{t.term}</dt>
                  <dd className="text-sm text-brand-text-mid leading-relaxed mt-0.5 ml-0">{t.def}</dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>

      <div className="bg-brand-primary-pale border-t border-brand-border px-container-sm sm:px-container py-12">
        <EmailCapture
          variant="section"
          siteId="fish-com"
          title="The Weekly Tank"
          subtitle="Fishkeeping references and tool updates. No spam."
          source="glossary"
          ctaText="Send the tank notes"
        />
      </div>
    </>
  )
}

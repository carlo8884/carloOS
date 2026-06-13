import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, buildBreadcrumbSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'lizard-com',
  title: 'Reptile Calculators & Tools — UVB, Enclosures, Husbandry | Lizard.com',
  description: 'Free reptile-keeping calculators: UVB distance estimator with Ferguson Zone targets, enclosure size calculator, and husbandry references.',
  path: '/tools',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://lizard.com/' },
    { name: 'Tools', url: 'https://lizard.com/tools' },
  ],
})

const TOOLS = [
  {
    href: '/tools/uvb-distance-calculator',
    title: 'UVB Distance Calculator',
    desc: 'Estimate UVI at the basking surface from bulb strength, mounting distance, and screen attenuation. Compared against published Ferguson Zone targets per species.',
    tag: 'Lighting',
  },
  {
    href: '/tools/enclosure-size-calculator',
    title: 'Enclosure Size Calculator',
    desc: 'Compute recommended minimum enclosure dimensions, floor footprint, and volume from adult body length and locomotor habit. Includes a check-my-tank mode to compare an existing enclosure against the minimums.',
    tag: 'Housing',
  },
  {
    href: '/tools/reptile-cost-calculator',
    title: 'Reptile Cost of Ownership Calculator',
    desc: 'How much does a reptile cost to keep? Estimate one-time setup plus monthly and yearly running cost — electricity (computed from wattage), feeders, substrate, bulbs, and a vet fund — from editable species presets.',
    tag: 'Budget',
  },
  {
    href: '/tools/reptile-feeding-calculator',
    title: 'Reptile Feeding Calculator',
    desc: 'How many crickets to feed a bearded dragon, leopard gecko, and more. Get prey type, count or portion, feeding frequency, and the feeder-size rule by species and life stage.',
    tag: 'Feeding',
  },
  {
    href: '/tools/basking-temperature-calculator',
    title: 'Basking Temperature Calculator',
    desc: 'Target basking-surface, cool-side, and night-drop temperatures by species, plus a gradient check that compares your measured warm and cool readings against the targets.',
    tag: 'Heat',
  },
  {
    href: '/tools/reptile-match-quiz',
    title: 'Which Reptile Is Right For You?',
    desc: 'A beginner matcher quiz: answer six questions about space, handling, effort, activity, and diet, and get 2–3 beginner-appropriate species suggestions with reasons and care-guide links.',
    tag: 'Beginner',
  },
]

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Reptile Husbandry Calculators',
  numberOfItems: TOOLS.length,
  itemListElement: TOOLS.map((t, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: t.title,
    url: `https://lizard.com${t.href}`,
  })),
}

const hubSchema = combineSchemas(breadcrumbSchema, itemListSchema)

export default function ToolsHub() {
  return (
    <>
      <SchemaScript schema={hubSchema} />
      <section className="bg-brand-dark px-container-sm sm:px-container py-section relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(ellipse at 30% 50%, rgba(76, 132, 92, 0.55) 0%, transparent 60%)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Calculators &amp; Tools</span>
          </div>
          <h1
            className="font-display font-bold text-white tracking-tight leading-none mb-5"
            style={{ fontSize: 'clamp(40px, 5.5vw, 64px)' }}
          >
            Reptile husbandry math, <span className="italic font-normal">in the open.</span>
          </h1>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
            Free, source-cited reptile-keeping calculators. UVI estimation from the Ferguson Zone framework, with explicit methodology and the limits of a rule-of-thumb estimator vs. a calibrated meter reading.
          </p>
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container pt-section">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl font-semibold text-brand-text-dark mb-4">
            Where the calculators fit in a husbandry plan
          </h2>
          <div className="space-y-4 text-sm leading-relaxed text-brand-text-mid">
            <p>
              Most reptile-keeping failures trace back to numbers that were never
              checked: a basking surface a few degrees off target, a UVB lamp
              mounted too far away, an enclosure too small for the animal&apos;s
              activity range. The tools collected here exist to turn those guesses
              into figures you can write down before an animal ever moves into the
              enclosure. They are estimators, not verdicts — a starting point that
              a reading from a calibrated meter or a thermometer placed at the
              basking site should always confirm.
            </p>
            <p>
              The{' '}
              <Link href="/tools/uvb-distance-calculator" className="text-brand-primary hover:underline">
                UVB distance calculator
              </Link>{' '}
              is the anchor of this hub. It works the Ferguson Zone framework
              backwards: instead of asking how much UVB a bulb emits, it asks how
              much actually reaches the surface the animal occupies once mounting
              distance and screen mesh have taken their cut. That figure only
              means something alongside the rest of the lighting picture, which is
              why it pairs closely with the{' '}
              <Link href="/setup/uvb-lighting-guide" className="text-brand-primary hover:underline">
                UVB lighting guide
              </Link>{' '}
              and the broader{' '}
              <Link href="/setup/lighting-guide" className="text-brand-primary hover:underline">
                enclosure lighting reference
              </Link>
              , which cover photoperiod, lamp placement, and bulb replacement
              intervals a single estimate cannot capture on its own.
            </p>
            <p>
              These pages are written for keepers setting up a new enclosure,
              auditing an established one, or troubleshooting an animal that
              isn&apos;t thriving. Every input maps to a number you can verify on
              the bench, and every output is hedged against the limits of a
              rule-of-thumb estimate. Before committing to a build, it is worth
              reading the relevant{' '}
              <Link href="/species" className="text-brand-primary hover:underline">
                species care sheet
              </Link>{' '}
              first, since the Ferguson Zone target — and therefore every figure
              the calculators produce — is set by the animal, not the equipment.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="grid md:grid-cols-2 gap-5 max-w-5xl">
          {TOOLS.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group block rounded-lg border border-brand-border bg-brand-surface p-6 transition hover:border-brand-primary"
            >
              <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">{tool.tag}</div>
              <h2 className="mb-2 font-display text-2xl font-semibold text-brand-text-dark group-hover:text-brand-primary">{tool.title}</h2>
              <p className="text-sm leading-relaxed text-brand-text-mid">{tool.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-2xl">
          <EmailCapture
            siteId="lizard-com"
            variant="inline"
            title="Lizard.com keeper letter"
            subtitle="Husbandry deep-dives and tool updates. No fluff."
            source="tools-hub"
          />
        </div>
      </section>
    </>
  )
}

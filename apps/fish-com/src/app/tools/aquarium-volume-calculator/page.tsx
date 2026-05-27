/**
 * Aquarium Volume & Weight Calculator — /tools/aquarium-volume-calculator
 *
 * Server-rendered page wrapping a client-side calculator. Targets
 * "aquarium volume calculator" / "how many gallons is my tank" / "tank
 * weight" intent. Funnels to affiliate-bearing equipment review pages
 * (heaters, filters, lighting) sized off the calculated volume.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Breadcrumb,
  FAQAccordion,
  buildMetadata,
  buildFAQSchema,
  SchemaScript,
  EmailCapture,
} from '@carloOS/ui'
import { Calculator } from './Calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Aquarium Volume Calculator — Gallons, Liters & Water Weight',
  description:
    'Calculate aquarium volume in gallons and liters, water weight, realistic fill volume, and stocking ceiling. Rectangular, bowfront, cylinder, and hex tanks.',
  path: '/tools/aquarium-volume-calculator',
})

const FAQ_ITEMS = [
  {
    question: 'Why use 90% as the "filled" volume?',
    answer:
      'You never fill an aquarium to the literal top edge — water surface needs room for gas exchange, hardscape and substrate take displaceable space, and most lids/rims sit below the absolute top. 90% is a realistic working volume for stocking and dosing calculations. For exact dosing of medications or fertilizers, measure your actual water level.',
  },
  {
    question: 'How much heater wattage do I need?',
    answer:
      'A common rule of thumb is 3-5 watts per gallon of filled volume. Use the lower end (3 W/gal) if your home stays warm year-round and the tank is in a well-insulated room; use 5 W/gal for cooler rooms or species needing tropical highs (e.g. discus). For tanks over 75 gallons, two smaller heaters at opposite ends are more reliable than one large unit.',
  },
  {
    question: 'How much filter flow do I need?',
    answer:
      'Turnover should be 4-8× the filled tank volume per hour. A 50-gallon filled tank wants a filter rated 200-400 GPH after media loss (manufacturers rate empty; real-world flow is typically 70-80% of the spec sheet). High-bioload tanks (cichlids, goldfish, planted-show tanks) lean toward the 8× end.',
  },
  {
    question: 'Is "1 inch of fish per gallon" accurate?',
    answer:
      'No — but it is the most-searched starting point, so we show it as an upper ceiling. The rule breaks down for tall-bodied fish (angelfish, discus), schooling fish that need swimming room, and any fish over ~6 inches adult length. Bioload (waste produced) scales with mass, not length, so a 6" oscar is not the same as six 1" tetras. Stocking calculators that account for filtration and adult size are more useful — see our linked stocking guides below.',
  },
  {
    question: 'Why does water weight matter?',
    answer:
      "A filled 75-gallon tank weighs about 625 lb / 283 kg with water alone, and 800+ lb with substrate, rock, and stand. Floors built to standard residential code (40 psf live load) handle this if the load is distributed parallel to the joists, but a tank perpendicular to joists or over a basement room may need engineering. Anything over 100 gallons should be on a load-bearing wall or have the floor evaluated.",
  },
  {
    question: 'Does shape affect the actual volume much?',
    answer:
      'Yes — bowfront tanks of the same nominal dimensions hold ~5-8% more than a rectangle. Cylinder tanks of equivalent floor footprint hold ~21% less than a rectangle (πr² vs square). Use the shape selector; assuming a rectangle when you have a bowfront under-doses medication and over-stocks the tank.',
  },
]

export default function AquariumVolumeCalculatorPage() {
  return (
    <>
      <SchemaScript schema={buildFAQSchema({ questions: FAQ_ITEMS })} />

      <Breadcrumb
        siteId="fish-com"
        items={[
          { name: 'Home', href: '/' },
          { name: 'Tools', href: '/tools' },
          { name: 'Aquarium Volume Calculator' },
        ]}
      />

      <article className="px-container sm:px-container-sm py-10 max-w-5xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-3">
            Aquarium Volume Calculator — Gallons, Liters & Water Weight
          </h1>
          <p className="text-lg text-brand-text-mid">
            Volume in gallons and liters, realistic fill volume, water weight,
            and a stocking ceiling — for rectangular, bowfront, cylinder, and
            hex tanks. The single most important number for every other tank
            decision.
          </p>
        </header>

        <Calculator />

        <section className="prose prose-lg max-w-none mb-12">
          <h2>Why this number matters more than any other</h2>
          <p>
            Volume drives every other tank decision: heater wattage, filter
            flow rate, stocking density, dosing of medications and ferts,
            water change volume, and floor-loading requirements. Manufacturers
            label tanks by nominal dimensions; actual interior volume is
            typically 5-10% lower once you account for glass thickness, rim,
            and the realistic 90% fill line.
          </p>

          <h2>Equipment sized off the calculated volume</h2>
          <p>
            Once you know your filled volume, our reviews compare equipment
            specifically by the volume range they suit:
          </p>
          <ul>
            <li><Link href="/reviews/best-aquarium-filters">Best aquarium filters</Link> — turnover charts by tank size</li>
            <li><Link href="/reviews/best-canister-filters">Best canister filters</Link> — for 40 gal+</li>
            <li><Link href="/reviews/best-aquarium-heaters">Best aquarium heaters</Link> — wattage selector inside</li>
            <li><Link href="/reviews/best-aquarium-lighting">Best aquarium lighting</Link> — PAR + spread per depth</li>
            <li><Link href="/reviews/best-nano-tanks">Best nano tanks (≤20 gal)</Link></li>
            <li><Link href="/reviews/best-water-test-kits">Best water test kits</Link> — dose per volume calculator inside</li>
          </ul>

          <h2>Setup guides that use these numbers</h2>
          <ul>
            <li><Link href="/setup/aquarium-cycling-guide">Cycling your aquarium</Link> — dose ammonia per gallon</li>
            <li><Link href="/setup/planted-tank-setup">Planted tank setup</Link> — substrate + fert dosing per gal</li>
            <li><Link href="/setup/saltwater-tank-setup">Saltwater tank setup</Link> — salt mix per gallon</li>
            <li><Link href="/setup/water-chemistry-guide">Water chemistry guide</Link> — buffer per gallon</li>
            <li><Link href="/setup/quarantine-tank-guide">Quarantine tank guide</Link> — meds per gallon</li>
          </ul>
        </section>

        <EmailCapture
          variant="section"
          siteId="fish-com"
          source="tools-aquarium-volume-calculator"
          title="Tank setup, weekly"
          subtitle="Concise emails on cycling, stocking, equipment sizing, and water chemistry. Unsubscribe anytime."
        />

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-brand-text mb-4">
            Frequently asked questions
          </h2>
          <FAQAccordion items={FAQ_ITEMS} includeSchema={false} />
        </section>

        <p className="mt-10 text-xs text-brand-text-light">
          Calculator results are educational estimates. Equipment sizing,
          stocking decisions, and floor-loading should be confirmed for your
          specific tank and home. See <Link href="/editorial-standards">editorial standards</Link>.
        </p>
      </article>
    </>
  )
}

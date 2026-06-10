/**
 * /water-parameters — Fish.com reference authority hub.
 *
 * Canonical reference for aquarium water chemistry: targets per setup,
 * how to test, and what each parameter means. Links to one deep-dive
 * per parameter at /water-parameters/[slug].
 *
 * Editorial posture:
 *   - Reference catalog, not veterinary or prescriptive advice.
 *   - Bylined "Fish.com Editorial — sourced from cited references."
 *   - No first-person hands-on claims.
 *
 * Schema emitted:
 *   - CollectionPage (via ArticleLayout-equivalent inline)
 *   - ItemList (the 8 parameters)
 *   - BreadcrumbList
 *   - FAQPage
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildFAQSchema,
  buildBreadcrumbSchema,
  EmailCapture,
  FAQAccordion,
  CalloutBox,
} from '@carloOS/ui'
import type { FAQItem } from '@carloOS/ui'
import { HubMasthead } from '../../components/HubMasthead'
import { PARAMETERS } from '../../data/water-parameters'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Aquarium Water Parameters — Targets, Tests, Troubleshooting | Fish.com',
  description:
    'The 8 aquarium water parameters that matter: ammonia, nitrite, nitrate, pH, GH, KH, temperature, DO. Target ranges, testing, and fixes.',
  path: '/water-parameters',
})

const HUB_URL = 'https://fish.com/water-parameters'

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Which water parameters should I test every week?',
    answer:
      'Hobby references generally recommend a weekly check of ammonia, nitrite, nitrate, and pH for established freshwater community tanks. Reef and saltwater systems add alkalinity (KH), calcium, and magnesium to the weekly cycle, with temperature and salinity verified daily.',
    answerText:
      'Hobby references generally recommend a weekly check of ammonia, nitrite, nitrate, and pH for established freshwater community tanks. Reef and saltwater systems add alkalinity (KH), calcium, and magnesium to the weekly cycle, with temperature and salinity verified daily.',
  },
  {
    question: 'What are the most dangerous parameter readings to ignore?',
    answer:
      'Any detectable ammonia or nitrite in a cycled tank is the most acute hazard — both are toxic at very low concentrations. A KH reading below 3 dKH (freshwater) or 7 dKH (reef) signals imminent pH instability. A dissolved oxygen reading below 4 ppm is associated with surface gasping and fish kills, particularly in heavily stocked or planted tanks at dawn.',
    answerText:
      'Any detectable ammonia or nitrite in a cycled tank is the most acute hazard — both are toxic at very low concentrations. A KH reading below 3 dKH (freshwater) or 7 dKH (reef) signals imminent pH instability. A dissolved oxygen reading below 4 ppm is associated with surface gasping and fish kills, particularly in heavily stocked or planted tanks at dawn.',
  },
  {
    question: 'Is a stable wrong pH worse than a fluctuating right pH?',
    answer:
      'For most farm-raised community freshwater species, the published consensus is the opposite — stability matters more than hitting a specific pH value within a tolerable band. A daily 0.5 pH swing stresses fish more than a steady 7.6 reading when the species "ideal" is 6.8. Address the underlying KH (buffer capacity) before chasing pH numbers.',
    answerText:
      'For most farm-raised community freshwater species, the published consensus is the opposite — stability matters more than hitting a specific pH value within a tolerable band. A daily 0.5 pH swing stresses fish more than a steady 7.6 reading when the species "ideal" is 6.8. Address the underlying KH (buffer capacity) before chasing pH numbers.',
  },
  {
    question: 'Why is my tank cycled but I keep seeing ammonia spikes?',
    answer:
      'Recurrent ammonia in a previously cycled tank usually traces to one of: overstocking or overfeeding past biofilter capacity, simultaneous replacement of all filter media, prolonged power outage starving the biofilter of oxygen, antibiotic dosing in the display tank, or an unnoticed dead fish or decaying plant. The nitrogen-cycle and new-tank-syndrome guides cover diagnostic steps.',
    answerText:
      'Recurrent ammonia in a previously cycled tank usually traces to one of: overstocking or overfeeding past biofilter capacity, simultaneous replacement of all filter media, prolonged power outage starving the biofilter of oxygen, antibiotic dosing in the display tank, or an unnoticed dead fish or decaying plant. The nitrogen-cycle and new-tank-syndrome guides cover diagnostic steps.',
  },
  {
    question: 'What is the difference between GH and KH?',
    answer:
      'GH (general hardness) measures total dissolved divalent minerals — predominantly calcium and magnesium — and is what determines whether water is "soft" or "hard." KH (carbonate hardness, also called alkalinity in marine contexts) measures carbonate and bicarbonate buffer ions and resists pH change. The two are independent: a tank can have low GH and high KH, or vice versa.',
    answerText:
      'GH (general hardness) measures total dissolved divalent minerals — predominantly calcium and magnesium — and is what determines whether water is "soft" or "hard." KH (carbonate hardness, also called alkalinity in marine contexts) measures carbonate and bicarbonate buffer ions and resists pH change. The two are independent: a tank can have low GH and high KH, or vice versa.',
  },
  {
    question: 'Are liquid test kits worth the extra effort over strips?',
    answer:
      'Hobby aquatic-vet references generally describe liquid reagent kits as more precise than colorimetric strips, particularly at the low end of the ammonia, nitrite, and KH ranges where the most important husbandry decisions are made. Strips are useful for trend monitoring; liquids are preferred when diagnosing an active problem.',
    answerText:
      'Hobby aquatic-vet references generally describe liquid reagent kits as more precise than colorimetric strips, particularly at the low end of the ammonia, nitrite, and KH ranges where the most important husbandry decisions are made. Strips are useful for trend monitoring; liquids are preferred when diagnosing an active problem.',
  },
  {
    question: 'How do I interpret a full water test when multiple numbers look off?',
    answer:
      'The published triage order is: dissolved oxygen and temperature first (immediate life-support), then ammonia and nitrite (acute toxicity), then KH (the buffer protecting pH), then pH itself, then nitrate and GH (chronic-stress parameters). Fix in that order; many "pH problems" disappear once KH is restored.',
    answerText:
      'The published triage order is: dissolved oxygen and temperature first (immediate life-support), then ammonia and nitrite (acute toxicity), then KH (the buffer protecting pH), then pH itself, then nitrate and GH (chronic-stress parameters). Fix in that order; many "pH problems" disappear once KH is restored.',
  },
]

export default function WaterParametersHubPage() {
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Water Parameters', href: '/water-parameters' },
  ]

  const breadcrumbSchema = buildBreadcrumbSchema({
    items: breadcrumbItems.map((b) => ({ name: b.name, url: `https://fish.com${b.href}` })),
  })

  const faqSchema = buildFAQSchema({
    questions: FAQ_ITEMS.map((f) => ({
      question: f.question,
      answer: f.answerText ?? (typeof f.answer === 'string' ? f.answer : ''),
    })),
  })

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Aquarium Water Parameters — Targets, Tests, and Troubleshooting',
    description:
      'Reference catalog of the 8 aquarium water-chemistry parameters that determine fish survival: targets per setup, how to test, and how to fix common problems.',
    url: HUB_URL,
    isPartOf: { '@type': 'WebSite', name: 'Fish.com', url: 'https://fish.com' },
    publisher: { '@type': 'Organization', name: 'Fish.com', url: 'https://fish.com' },
  }

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'The 8 aquarium water parameters that matter most',
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    numberOfItems: PARAMETERS.length,
    itemListElement: PARAMETERS.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${HUB_URL}/${p.slug}`,
      name: p.name,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO — premium image-first masthead (HubMasthead) */}
      <HubMasthead
        manifestKey="fish-com:water-parameters-hero"
        alt="A freshwater aquarium test kit being used to check water parameters"
        eyebrow="Water Parameter Reference"
        title="Aquarium Water Parameters — Targets, Tests, and Troubleshooting"
        subtitle="Water chemistry is the single largest determinant of whether aquarium fish live or die. This reference catalogs the 8 parameters that drive fish survival, their target ranges, how each is tested, and what goes wrong when readings drift."
        primaryCta={{ href: '/tools/water-change-calculator', label: 'Plan a water change' }}
        secondaryCta={{ href: '/setup/water-chemistry-guide', label: 'Read the chemistry guide' }}
      />

      {/* Sourcing + byline band (preserved from the prior hero) */}
      <div className="bg-brand-dark border-t border-white/5 px-container-sm sm:px-container pb-10 pt-2">
        <p className="text-sm font-light text-white/50 max-w-2xl leading-relaxed mb-3">
          Ranges below are typical hobby-literature bands drawn from published aquatic-science and
          ornamental-fish references (Noga; Boyd; Walstad; UF/IFAS Extension; WAVMA), not
          quantitative tolerances. Individual species edge cases and citations are on each
          parameter&apos;s deep-dive page.
        </p>
        <div className="text-2xs font-medium text-white/40">
          By Fish.com Editorial — sourced from cited references
        </div>
      </div>

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">
          Home
        </Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Water Parameters</span>
      </nav>

      {/* Intro / overview */}
      <div className="px-container-sm sm:px-container py-12 max-w-content-wide mx-auto">
        <h2 className="font-display font-bold text-brand-dark text-2xl mb-4">
          The 8 parameters that matter most
        </h2>
        <p className="text-sm text-brand-text-mid leading-relaxed mb-6">
          Three parameters are part of the nitrogen cycle (ammonia, nitrite, nitrate). Two govern
          buffer capacity and acidity (KH, pH). Two describe dissolved minerals and physical
          conditions (GH, temperature). One — dissolved oxygen — is rarely tested but is a leading
          cause of unexplained morning mortalities. Each row links to a full deep-dive.
        </p>

        {/* Hub table */}
        <div className="overflow-x-auto -mx-container-sm sm:mx-0">
          <table className="w-full text-xs border-collapse min-w-[920px]">
            <thead>
              <tr className="bg-brand-dark text-white">
                {[
                  'Parameter',
                  'What it measures',
                  'Community FW',
                  'Planted / soft FW',
                  'Reef / marine',
                  'How to test',
                  'Common problem',
                ].map((h) => (
                  <th
                    key={h}
                    className="text-left px-3 py-2.5 font-bold tracking-wide text-2xs uppercase border-b border-brand-border"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PARAMETERS.map((p, i) => {
                const fw = p.ranges.find((r) => r.setup === 'Community freshwater')
                const planted = p.ranges.find((r) => r.setup === 'Planted / soft-water freshwater')
                const reef = p.ranges.find((r) => r.setup === 'Reef / marine')
                return (
                  <tr key={p.slug} className={i % 2 === 0 ? 'bg-brand-white' : 'bg-brand-surface'}>
                    <td className="px-3 py-2.5 align-top border-b border-brand-border">
                      <Link
                        href={`/water-parameters/${p.slug}`}
                        className="font-display font-bold text-brand-primary text-sm no-underline hover:underline"
                      >
                        {p.name}
                      </Link>
                      <div className="text-2xs text-brand-text-light mt-0.5">{p.symbol}</div>
                    </td>
                    <td className="px-3 py-2.5 align-top text-brand-text-mid border-b border-brand-border">
                      {p.whatItMeasures}
                    </td>
                    <td className="px-3 py-2.5 align-top text-brand-text-mid border-b border-brand-border">
                      {fw?.target ?? '—'}
                    </td>
                    <td className="px-3 py-2.5 align-top text-brand-text-mid border-b border-brand-border">
                      {planted?.target ?? '—'}
                    </td>
                    <td className="px-3 py-2.5 align-top text-brand-text-mid border-b border-brand-border">
                      {reef?.target ?? '—'}
                    </td>
                    <td className="px-3 py-2.5 align-top text-brand-text-mid border-b border-brand-border">
                      {p.howToTest[0]?.method ?? '—'}
                    </td>
                    <td className="px-3 py-2.5 align-top text-brand-text-mid border-b border-brand-border">
                      {p.commonProblem}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <p className="text-2xs text-brand-text-light mt-3">
          Ranges are hobby-literature bands; individual species edge cases listed on each deep-dive
          page.
        </p>
      </div>

      {/* How to interpret a full test */}
      <div className="bg-brand-surface border-y border-brand-border px-container-sm sm:px-container py-12">
        <div className="max-w-content-wide mx-auto">
          <h2 className="font-display font-bold text-brand-dark text-2xl mb-4">
            How to interpret a full water test
          </h2>
          <p className="text-sm text-brand-text-mid leading-relaxed mb-5">
            When multiple readings look off, hobby and aquaculture references describe a triage
            order that addresses immediate life-support before chronic-stress parameters. The
            sequence below works for community freshwater; reef systems add calcium, magnesium, and
            salinity to the chain.
          </p>
          <ol className="list-decimal pl-5 space-y-3 text-sm text-brand-text-mid leading-relaxed">
            <li>
              <strong className="text-brand-dark">Check temperature and dissolved oxygen first.</strong>{' '}
              These are the immediate life-support parameters. Surface gasping, lethargy, or fish
              hanging at the filter outflow can signal low DO; verify temperature with an
              independent thermometer before trusting the heater dial.
            </li>
            <li>
              <strong className="text-brand-dark">Test ammonia and nitrite next.</strong> Any
              detectable reading in a cycled tank is an acute hazard. A 25–50 percent water change
              is the standard first response while you identify the source.
            </li>
            <li>
              <strong className="text-brand-dark">Test KH (alkalinity) before pH.</strong> Low KH
              is the underlying cause of most pH instability. Restoring KH usually stabilizes pH
              automatically.
            </li>
            <li>
              <strong className="text-brand-dark">Then test pH.</strong> If the value is within the
              species-appropriate band and KH is now stable, monitor for 24 hours before
              intervening.
            </li>
            <li>
              <strong className="text-brand-dark">Finally, log nitrate and GH.</strong> These are
              chronic-stress parameters managed through routine water changes, source-water choice,
              and remineralization, not emergency intervention.
            </li>
          </ol>
        </div>
      </div>

      {/* Most common parameter problems */}
      <div className="px-container-sm sm:px-container py-12 max-w-content-wide mx-auto">
        <h2 className="font-display font-bold text-brand-dark text-2xl mb-4">
          Most common parameter problems
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              title: 'Cycling crash from media replacement',
              body: 'Swapping all biofilter media at once removes the established nitrifying colony. Ammonia and nitrite spike within days. Replace one media component at a time, separated by 4–6 weeks, and never replace media and substrate in the same week.',
              href: '/health/new-tank-syndrome',
            },
            {
              title: 'Ammonia spike during the nitrogen cycle',
              body: 'A new tank cycles through ammonia → nitrite → nitrate. Stocking during the ammonia or nitrite peak causes acute toxicity. Cycle fishless to a stable read of 0 ammonia / 0 nitrite before adding livestock.',
              href: '/health/nitrogen-cycle-explained',
            },
            {
              title: 'pH crash from low KH',
              body: 'When KH drops below 3 dKH, the tank loses its buffer and pH can swing by more than 1 unit overnight. Test KH first whenever pH is unstable; restoring buffer capacity stops the swings.',
              href: '/setup/water-chemistry-guide',
            },
            {
              title: 'Hard water on soft-water specialists',
              body: 'Discus, wild apistos, and Caridina shrimp are kept on RO/DI water remineralized to a target GH and KH. Dropping soft-water species into tap water above 12 dGH is a common acclimation failure; dilute the source water first.',
              href: '/species/discus',
            },
            {
              title: 'Pre-dawn DO crash in planted tanks',
              body: 'Heavy planting plus CO2 injection can swing dissolved oxygen from oversaturation at the end of the photoperiod to dangerously low pre-dawn. Pair CO2 with overnight surface agitation to break the gas-exchange limit.',
              href: '/tools/co2-calculator',
            },
            {
              title: 'Chronic nitrate creep from skipped water changes',
              body: 'Nitrate rises week-over-week in stocked tanks unless export keeps pace. The published baseline is a 25–30 percent weekly water change for most community freshwater setups, calibrated up or down based on stocking.',
              href: '/tools/water-change-calculator',
            },
          ].map((problem) => (
            <Link
              key={problem.title}
              href={problem.href}
              className="block bg-brand-white border border-brand-border rounded-xl p-5 no-underline hover:border-brand-primary transition-colors"
            >
              <div className="font-display font-bold text-brand-dark text-sm mb-2">
                {problem.title}
              </div>
              <p className="text-xs text-brand-text-mid leading-relaxed m-0">{problem.body}</p>
              <div className="text-2xs font-medium text-brand-primary mt-3">Read related guide →</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Cross-link to calculators */}
      <div className="bg-brand-primary-pale border-y border-brand-border px-container-sm sm:px-container py-10">
        <div className="max-w-content-wide mx-auto">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
            Calculators that pair with this hub
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              {
                title: 'Aquarium Volume Calculator',
                href: '/tools/aquarium-volume-calculator',
                desc: 'L × W × H to gallons and liters',
              },
              {
                title: 'Water Change Calculator',
                href: '/tools/water-change-calculator',
                desc: 'Volume math for parameter dilution',
              },
              {
                title: 'CO2 Calculator',
                href: '/tools/co2-calculator',
                desc: 'pH + KH to estimated CO2',
              },
              {
                title: 'Stocking Calculator',
                href: '/tools/stocking-calculator',
                desc: 'Bioload vs. tank capacity',
              },
            ].map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="block bg-brand-white border border-brand-border rounded-lg p-4 no-underline hover:border-brand-primary transition-colors"
              >
                <div className="font-display font-semibold text-brand-dark text-sm mb-1">
                  {c.title}
                </div>
                <div className="text-2xs text-brand-text-light">{c.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Companion guides */}
      <div className="px-container-sm sm:px-container py-12 max-w-content-wide mx-auto">
        <h2 className="font-display font-bold text-brand-dark text-2xl mb-4">Companion guides</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            {
              title: 'Nitrogen Cycle Explained',
              href: '/health/nitrogen-cycle-explained',
              desc: 'Why a tank must be cycled before fish go in',
            },
            {
              title: 'Aquarium Water Chemistry',
              href: '/setup/water-chemistry-guide',
              desc: 'Companion narrative version of this reference',
            },
            {
              title: 'Aquarium Cycling Guide',
              href: '/setup/aquarium-cycling-guide',
              desc: 'Step-by-step fishless cycling',
            },
            {
              title: 'Tank Setup Guide',
              href: '/setup',
              desc: 'First-aquarium walkthrough',
            },
            {
              title: 'Planted Tank Setup',
              href: '/setup/planted-tank-setup',
              desc: 'CO2-injected and Walstad approaches',
            },
            {
              title: 'Saltwater Tank Setup',
              href: '/setup/saltwater-tank-setup',
              desc: 'Reef-specific water-quality routines',
            },
          ].map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="block bg-brand-white border border-brand-border rounded-xl p-5 no-underline hover:border-brand-primary transition-colors"
            >
              <div className="font-display font-bold text-brand-dark text-sm mb-1">{g.title}</div>
              <div className="text-xs text-brand-text-light">{g.desc}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-brand-surface border-y border-brand-border px-container-sm sm:px-container py-12">
        <div className="max-w-content-narrow mx-auto">
          <h2 className="font-display font-bold text-brand-dark text-2xl mb-5">
            Water-parameter FAQ
          </h2>
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </div>

      {/* Sources */}
      <div className="px-container-sm sm:px-container py-10 max-w-content-wide mx-auto">
        <h2 className="font-display font-bold text-brand-dark text-lg mb-3">Sources cited</h2>
        <CalloutBox variant="info" title="Editorial standard">
          <p style={{ margin: 0 }}>
            Target ranges and guidance on this page are drawn from the published references below.
            Numbers are hobby-literature bands, not first-person measurements. Each parameter
            deep-dive lists its own citation set.
          </p>
        </CalloutBox>
        <ul className="text-sm text-brand-text-mid leading-relaxed mt-4 space-y-1.5 list-disc pl-5">
          <li>
            Noga EJ. <em>Fish Disease: Diagnosis and Treatment.</em> 2nd ed. Wiley-Blackwell, 2010.
          </li>
          <li>
            Boyd CE. <em>Water Quality in Ponds for Aquaculture.</em> Auburn University, 1990.
          </li>
          <li>
            Boyd CE, Tucker CS. <em>Pond Aquaculture Water Quality Management.</em> Springer, 1998.
          </li>
          <li>
            Walstad DL. <em>Ecology of the Planted Aquarium.</em> 3rd ed. Echinodorus Publishing,
            2013.
          </li>
          <li>
            Sprung J, Delbeek JC. <em>The Reef Aquarium</em> Vols. 1–3. Ricordea Publishing.
          </li>
          <li>
            Spotte S. <em>Captive Seawater Fishes: Science and Technology.</em> Wiley-Interscience,
            1992.
          </li>
          <li>
            Francis-Floyd R, Watson C, Petty D, Pouder DB. UF/IFAS Extension fact sheets on
            ammonia, dissolved oxygen, and nitrogen-cycle management in aquaculture systems.
          </li>
          <li>
            Yanong RPE. UF/IFAS Extension FA-122 — Use of Salt in Freshwater Aquaculture.
          </li>
          <li>
            Holmes-Farley R. Chemistry and the Aquarium series. Advanced Aquarist / Reefkeeping
            archives.
          </li>
          <li>World Aquatic Veterinary Medical Association (WAVMA) reference materials.</li>
        </ul>
        <p className="text-xs text-brand-text-light mt-4">
          This page is editorial reference content for hobbyists and is not a substitute for
          veterinary diagnosis or treatment. For valuable specimens or active disease, consult an
          aquatic veterinarian.
        </p>
      </div>

      <div className="bg-brand-primary-pale border-t border-brand-border px-container-sm sm:px-container py-12">
        <EmailCapture
          variant="section"
          siteId="fish-com"
          title="The Weekly Tank"
          subtitle="Water-chemistry references, species guides, and equipment picks every Thursday."
          source="water-parameters-hub"
          ctaText="Subscribe Free"
          perks={['Water chemistry', 'Species guides', 'Equipment picks']}
        />
      </div>
    </>
  )
}

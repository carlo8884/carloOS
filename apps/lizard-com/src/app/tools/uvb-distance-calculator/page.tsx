import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildHowToSchema,
  ArticleLayout,
  FAQAccordion,
  EmailCapture,
  TableOfContents,
  RelatedLinks,
} from '@carloOS/ui'
import { UvbDistanceCalculator } from '../../../components/visual/UvbDistanceCalculator'

const URL = 'https://lizard.com/tools/uvb-distance-calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'lizard-com',
  title: 'UVB Distance Calculator — Ferguson Zone Targets | Lizard.com',
  description: 'Estimate UVI at the basking surface from bulb strength, distance, and screen attenuation. Compared against published Ferguson Zone targets per species.',
  path: '/tools/uvb-distance-calculator',
})

const schema = buildHowToSchema({
  name: 'How to estimate UVI at a reptile basking site',
  description:
    'Use bulb type and strength, the distance from bulb to basking surface, and the screen between the two to estimate UVI at the surface the animal occupies, then compare against the published Ferguson Zone target for the species.',
  url: URL,
  totalTime: 'PT3M',
  steps: [
    {
      name: 'Identify the species Ferguson Zone',
      text: 'Each species sits in one of four Ferguson Zones (1 = crepuscular / shade-dweller through 4 = mid-day open basker). Zone determines the target UVI range at the basking surface.',
    },
    {
      name: 'Select the bulb',
      text: 'Pick the bulb type and strength. T5 HO linear bulbs deliver substantially more UVB at distance than T8 or compact alternatives.',
    },
    {
      name: 'Measure distance to the basking surface',
      text: 'Measure from the bulb to the surface the animal actually occupies — top of the basking branch or platform, not the enclosure floor.',
    },
    {
      name: 'Account for the screen',
      text: 'Mesh attenuates UVB output by roughly 25-55% depending on weave. Glass blocks UVB entirely.',
    },
    {
      name: 'Compare to the Ferguson target',
      text: 'Estimated UVI is compared to the species\'s Ferguson Zone range. Adjust distance or bulb strength to land within the target band.',
    },
  ],
})

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Reptile UVB Distance Calculator',
  url: URL,
  applicationCategory: 'UtilitiesApplication',
  applicationSubCategory: 'ReptileHusbandryCalculator',
  operatingSystem: 'Web Browser (any HTML5-capable device)',
  description:
    'Free reptile UVB distance / Ferguson Zone calculator. Estimates UVI at the basking surface from bulb class, mounting distance, and screen attenuation using the published Ferguson Zone target ranges per species.',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Inputs: species (19 common pet reptiles), bulb class, distance to basking surface, screen attenuation',
    'Inverse-square distance falloff model',
    'Mesh / glass / open-top attenuation factors',
    'Output compared against published Ferguson Zone target UVI ranges',
    'Explicit estimator — not a substitute for a calibrated Solarmeter reading',
  ],
  publisher: {
    '@type': 'Organization',
    name: 'Lizard.com Editorial',
    url: 'https://lizard.com',
  },
}

const FAQS = [
  {
    question: 'Is this a substitute for a Solarmeter reading?',
    answer:
      'No. This is a rule-of-thumb estimator using bulb-class typical output and the inverse-square distance law. Bulb-to-bulb variation, fixture reflector geometry, and bulb age all change the real number at the surface. The only ground-truth reading is a calibrated Solarmeter 6.5 at the basking site. Use the calculator to plan, the meter to verify.',
  },
  {
    question: 'Why does distance matter so much?',
    answer:
      'UVB output drops with the square of distance. A bulb that delivers UVI 4.0 at 6 inches delivers about UVI 1.0 at 12 inches and only UVI 0.25 at 24 inches. Mounting distance is the single dominant variable for what the animal actually receives.',
  },
  {
    question: 'What is a Ferguson Zone?',
    answer:
      'The Ferguson Zone framework (Ferguson et al., 2010) groups reptile species by the natural UVB exposure of their wild microhabitat — Zone 1 (crepuscular / shade-dweller), Zone 2 (partial-sun thermoregulator), Zone 3 (open / partial-sun basker), and Zone 4 (mid-day full-sun basker). Each zone has a target UVI band at the basking site that keeper husbandry should aim to reproduce.',
  },
  {
    question: 'Does glass really block all UVB?',
    answer:
      'Standard window and aquarium glass blocks essentially the entire 290-320 nm UVB band. A glass top above a UVB fixture renders the fixture useless for the animal beneath it. UVB bulbs must be mounted inside the enclosure, or above a mesh / open top with no glass between.',
  },
  {
    question: 'How often should I replace the UVB bulb?',
    answer:
      'T5 HO linear bulbs typically hold useful UVB output for 9-12 months of normal use; compact bulbs degrade faster (~6-9 months). Replace on a calendar even if visible light still appears normal — UVB output is invisible to the eye and a bulb can be biologically dead while still glowing. Track replacement dates and verify with a meter.',
  },
  {
    question: 'Why is even Zone 1 (leopard geckos, ball pythons) given a UVB target?',
    answer:
      'Earlier keeper convention housed crepuscular species without any UVB. Recent literature supports providing low-level UVB (UVI 0-1.0 at the basking surface) even for these species, citing reduced risk of metabolic bone disease and improved long-term welfare. Avoid sustained UVI 0; do not push toward open-basker numbers.',
  },
]

export default function UvbDistanceCalculatorPage() {
  return (
    <ArticleLayout
      siteId="lizard-com"
      hero={{
        title: 'UVB Distance Calculator',
        subtitle:
          'Estimate UVI at the basking surface from bulb class, mounting distance, and screen attenuation. Compared against published Ferguson Zone targets per species.',
        category: 'Calculators',
        categoryHref: '/tools',
        publishedAt: 'May 2026',
        readTime: '3 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'UVB Distance Calculator' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The calculator', href: '#calculator' },
              { label: 'Ferguson Zone targets', href: '#zones' },
              { label: 'Methodology &amp; limits', href: '#methodology' },
              { label: 'Sources', href: '#sources' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Husbandry"
            links={[
              { label: 'UVB Lighting deep-dive', href: '/setup/uvb-lighting-guide' },
              { label: 'Best UVB bulbs', href: '/reviews/best-uvb-bulbs' },
              { label: 'Enclosure setup', href: '/setup' },
              { label: 'Species library', href: '/species' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="lizard-com"
            title="Lizard.com keeper letter"
            subtitle="Husbandry deep-dives and tool updates."
            source="uvb-calculator"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />

        <h2 id="calculator">The calculator</h2>
        <p>
          Pick a species, the bulb you plan to use, the distance from bulb to basking surface, and the screen between them. The calculator estimates UVI at the surface and compares it to the published Ferguson Zone target band for the species.
        </p>
        <UvbDistanceCalculator />

        <h2 id="zones">Ferguson Zone targets at a glance</h2>
        <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-brand-border">
                <th className="text-left py-2 pr-4 font-semibold text-brand-text-dark">Zone</th>
                <th className="text-left py-2 pr-4 font-semibold text-brand-text-dark">Microhabitat</th>
                <th className="text-left py-2 pr-4 font-semibold text-brand-text-dark">UVI at basking surface</th>
                <th className="text-left py-2 font-semibold text-brand-text-dark">Representative species</th>
              </tr>
            </thead>
            <tbody className="text-brand-text-mid">
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">1</td><td className="py-2 pr-4">Crepuscular / shade-dweller</td><td className="py-2 pr-4">0 – 1.0</td><td className="py-2">Leopard gecko, ball python, corn snake, tokay gecko</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">2</td><td className="py-2 pr-4">Partial-sun thermoregulator</td><td className="py-2 pr-4">0.7 – 1.5</td><td className="py-2">Crested gecko, gargoyle gecko, day geckos (some)</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">3</td><td className="py-2 pr-4">Open / partial-sun basker</td><td className="py-2 pr-4">1.0 – 2.6</td><td className="py-2">Blue-tongue skink (N), panther chameleon, day gecko, tegu, savannah monitor</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">4</td><td className="py-2 pr-4">Mid-day full-sun basker</td><td className="py-2 pr-4">2.6 – 4.5</td><td className="py-2">Bearded dragon, uromastyx, sulcata tortoise</td></tr>
            </tbody>
          </table>
        </div>

        <h2 id="methodology">Methodology &amp; limits</h2>
        <p>
          The estimator combines three published or measurable inputs:
        </p>
        <ul>
          <li><strong>Bulb class baseline output</strong> — typical UVI at 12 inches for the named bulb class, drawn from published vendor data and aggregated keeper measurements in the references below. <strong>Bulb-to-bulb variation is real</strong>; a specific bulb may deliver 20-30% above or below the class baseline.</li>
          <li><strong>Inverse-square distance scaling</strong> — UVB output at distance <em>d</em> is approximated as the 12-inch baseline × (12/<em>d</em>)<sup>2</sup>. Real-world fixtures with reflectors produce a slightly less steep falloff close in, and bulb arc geometry adds asymmetry near the bulb itself.</li>
          <li><strong>Screen attenuation factors</strong> — typical multipliers (coarse mesh ~0.7, fine mesh ~0.5, glass ~0). Specific weave geometry and material varies; verify with a meter.</li>
        </ul>
        <p>
          The output is a planning estimate, <strong>not a substitute for a calibrated Solarmeter 6.5 reading</strong> at the basking site. Use the calculator to size and place the fixture; use a meter at install and quarterly thereafter to verify that the animal is actually receiving what you intended.
        </p>
        <p>
          The calculator does not currently model bulb aging (a bulb at 6-12 months typically delivers materially less UVB than a new one), seasonal sun angle, ambient UVB from windows, or the brief peaks animals receive when they climb above the basking site. All of these are reasons to verify with a meter rather than trust a single number.
        </p>

        <h2 id="sources">Sources</h2>
        <ul>
          <li>Ferguson, G. W., Brinker, A. M., Gehrmann, W. H., Bucklin, S. E., Baines, F. M., &amp; Mackin, S. J. (2010). Voluntary exposure of some western-hemisphere snake and lizard species to ultraviolet-B radiation in the field. <em>Zoo Biology</em>, 29(3), 317-334.</li>
          <li>Baines, F. M., Chattell, J., Dale, J., Garrick, D., Gill, I., Goetz, M., Skelton, T., &amp; Swatman, M. (2016). How much UV-B does my reptile need? The UV-Tool, a guide to the selection of UV lighting for reptiles and amphibians in captivity. <em>Journal of Zoo and Aquarium Research</em>, 4(1), 42-63.</li>
          <li>Mader, D. R., &amp; Divers, S. J. (eds.) (2014). <em>Current Therapy in Reptile Medicine and Surgery</em>. Saunders. (UVB / vitamin D3 / MBD chapters.)</li>
          <li>Solarmeter 6.5 reference instrument documentation, Solartech Inc. (Used by keeper community as the field-standard UVI meter.)</li>
        </ul>
        <p className="text-sm text-brand-text-mid">
          Lizard.com Editorial cites these as the published basis for the Ferguson Zone framework and bulb-class output figures used by the calculator. No in-house bench testing of bulbs by Lizard.com is implied or claimed.
        </p>

        <h2 id="faq">FAQ</h2>
        <FAQAccordion
          items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
          includeSchema
          allowMultiple
        />

        <p className="mt-8 text-sm">
          For the full deep-dive on bulb selection, mounting, and replacement schedule, see the <Link href="/setup/uvb-lighting-guide">UVB Lighting Guide</Link>.
        </p>
      </div>
    </ArticleLayout>
  )
}

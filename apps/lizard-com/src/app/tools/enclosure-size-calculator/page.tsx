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
import { EnclosureSizeCalculator } from '../../../components/visual/EnclosureSizeCalculator'

const URL = 'https://lizard.com/tools/enclosure-size-calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'lizard-com',
  title: 'Reptile Enclosure Size Calculator | Lizard.com',
  description: 'Minimum and recommended enclosure dimensions per species, with single- and group-housing scaling. Source-cited from ARAV and keeper literature.',
  path: '/tools/enclosure-size-calculator',
})

const schema = buildHowToSchema({
  name: 'How to size a reptile enclosure',
  description:
    'Use species, orientation (terrestrial / arboreal / mixed), and intended number of animals to look up published minimum and recommended enclosure dimensions, then scale for group housing where the species tolerates it.',
  url: URL,
  totalTime: 'PT2M',
  steps: [
    {
      name: 'Identify the species',
      text: 'Each species has a published minimum enclosure size in keeper-veterinary literature. Sub-adults and juveniles often do better in smaller enclosures than the adult minimum — this estimator returns the adult target.',
    },
    {
      name: 'Determine orientation',
      text: 'Terrestrial species (bearded dragon, leopard gecko, tortoises) need floor area. Arboreal species (crested gecko, chameleons, day geckos) need height. Mixed-use species (corn snake, blue-tongue skink) benefit from both.',
    },
    {
      name: 'Account for animal count',
      text: 'Most species are solitary in captivity. For species that tolerate pairs / groups (rarely), conservative practice is +50% floor area per additional animal, with separate basking sites and resources.',
    },
    {
      name: 'Build to recommended, not minimum',
      text: 'Minimums are the floor below which welfare clearly suffers. The recommended dimensions reflect modern keeper consensus on what supports natural behavior. Where space and budget allow, build larger.',
    },
  ],
})

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Reptile Enclosure Size Calculator',
  url: URL,
  applicationCategory: 'UtilitiesApplication',
  applicationSubCategory: 'ReptileHusbandryCalculator',
  operatingSystem: 'Web Browser (any HTML5-capable device)',
  description:
    'Free reptile enclosure size calculator. Inputs: species (19 common pet reptiles), number of animals (single or group). Outputs: minimum and recommended L × W × H dimensions, floor area in square feet, group-housing warnings for solitary species, and species-specific husbandry notes.',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    '19 common pet reptiles covered',
    'Single-animal minimum and recommended dimensions',
    'Group-housing scale factor (+50% per additional animal)',
    'Explicit warnings for species that are solitary in captivity',
    'Per-species husbandry notes (substrate depth, basking sites, brumation, etc.)',
  ],
  publisher: { '@type': 'Organization', name: 'Lizard.com Editorial', url: 'https://lizard.com' },
}

const FAQS = [
  {
    question: 'Are these the minimum sizes or the recommended sizes?',
    answer:
      'Both. Minimums are the floor below which welfare clearly suffers based on published keeper-veterinary literature. Recommended dimensions reflect modern keeper consensus on what supports natural behavior. Where space and budget allow, build to the recommended size or larger.',
  },
  {
    question: 'Can I house two leopard geckos together?',
    answer:
      'Most keeper-vet literature strongly advises against cohabiting leopard geckos. Females may tolerate each other in large enclosures but there are no benefits to the animals and substantial risks (food competition, dominance bullying, asymptomatic disease transmission). Single housing is the recommendation; the calculator surfaces a warning if you select multiple animals.',
  },
  {
    question: 'Why are arboreal enclosures taller than wide?',
    answer:
      'Arboreal species — chameleons, crested geckos, day geckos, leaf-tail geckos — use vertical space for thermoregulation, visual security, and natural behavior. A 2-foot-wide × 4-foot-tall enclosure provides more usable habitat for a chameleon than a 4-foot-wide × 2-foot-tall enclosure of equal volume.',
  },
  {
    question: 'What about juveniles?',
    answer:
      'This calculator returns adult target dimensions. Many juveniles do better short-term in smaller enclosures (easier to find food, less stress from unused space). Plan to upgrade to the adult target before sexual maturity (typically 12-18 months depending on species). Some keepers raise hatchlings in the adult enclosure from the start with heavy clutter and visual barriers — this is acceptable when done thoughtfully.',
  },
  {
    question: 'Are these sizes for glass terrariums or PVC enclosures?',
    answer:
      'Dimensions are dimensions — material does not change the welfare-floor footprint. Material does change temperature stability (PVC holds heat better than glass), humidity stability (sealed PVC retains humidity well; mesh-screen enclosures dump humidity quickly), and visual security (front-opening PVC with solid sides reduces stress for snakes and skinks). For most species, modern keeper consensus favors front-opening PVC enclosures over glass aquariums.',
  },
  {
    question: 'What about outdoor enclosures for tortoises?',
    answer:
      'Outdoor enclosures with secure fencing and predator-proof shelter are strongly preferred for Russian and sulcata tortoises (and all tortoise species, where climate permits). The calculator returns the indoor minimum, but outdoor space significantly exceeds these numbers — a sulcata adult needs 100+ square feet of outdoor pen plus an insulated heated shelter for cold months.',
  },
]

export default function EnclosureSizeCalculatorPage() {
  return (
    <ArticleLayout
      siteId="lizard-com"
      hero={{
        title: 'Reptile Enclosure Size Calculator',
        subtitle:
          'Minimum and recommended enclosure dimensions per species, with single- and group-housing scaling. Source-cited from ARAV and keeper literature.',
        category: 'Calculators',
        categoryHref: '/tools',
        publishedAt: 'May 2026',
        readTime: '3 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Enclosure Size Calculator' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The calculator', href: '#calculator' },
              { label: 'Why bigger is better', href: '#bigger-better' },
              { label: 'Methodology &amp; limits', href: '#methodology' },
              { label: 'Sources', href: '#sources' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Husbandry"
            links={[
              { label: 'Vivarium Builds', href: '/builds' },
              { label: 'Husbandry Library', href: '/husbandry' },
              { label: 'Species Library', href: '/species' },
              { label: 'Setup Reviews', href: '/reviews' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="lizard-com"
            title="Lizard.com keeper letter"
            subtitle="Husbandry deep-dives and tool updates."
            source="enclosure-size-calculator"
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
          Pick the species and number of animals. The calculator returns minimum and recommended enclosure dimensions, floor area in square feet, group-housing warnings where the species is solitary in captivity, and species-specific husbandry notes.
        </p>
        <EnclosureSizeCalculator />

        <h2 id="bigger-better">Why bigger is essentially always better</h2>
        <p>
          Minimum enclosure dimensions in keeper literature represent the floor below which welfare clearly degrades — observable stress behavior, reduced activity, chronic husbandry-induced disease. They are not the optimal size.
        </p>
        <p>
          A bearded dragon in a 4 × 2 × 2-foot enclosure is housed adequately by published minimums; the same dragon in a 6 × 2 × 2-foot enclosure has noticeably more natural basking-to-cool-side excursion behavior, more enrichment surface for the keeper to design around, and easier thermoregulation. The same logic holds for leopard geckos in 4 × 2 vs. 3 × 1.5-foot floor space, ball pythons in 6-foot vs. 4-foot PVC, and so on across species.
        </p>
        <p>
          The recommendation when budget allows: build to the recommended dimensions or larger, in the keeper consensus on enclosure type (front-opening PVC for most snakes, mesh-screen for arboreal lizards needing airflow, tortoise table or outdoor pen for tortoises).
        </p>

        <h2 id="methodology">Methodology &amp; limits</h2>
        <p>
          The calculator returns published minimums and modern recommendations per species. The model is a lookup, not a derivation — dimensions are not computed from animal length or weight. The numbers reflect:
        </p>
        <ul>
          <li>ARAV (Association of Reptile and Amphibian Veterinarians) husbandry standards</li>
          <li>RAMS (Mader &amp; Divers, <em>Current Therapy in Reptile Medicine and Surgery</em>) species-care chapters</li>
          <li>Peer-reviewed keeper literature (J Zoo Aquar Res, Reptiles Magazine)</li>
          <li>Modern keeper consensus from species-specific community guides (BeardedDragon.org, Phillipe de Vosjoli&apos;s gecko volumes, Wright &amp; Whitaker for ball pythons)</li>
        </ul>
        <p>
          The calculator does <strong>not</strong>:
        </p>
        <ul>
          <li>Account for individual animal size variation within a species</li>
          <li>Distinguish hatchling / juvenile / sub-adult / adult phases (returns adult target)</li>
          <li>Account for outdoor vs. indoor housing (for tortoises specifically, outdoor recommendations are larger)</li>
          <li>Account for breeding / brumation room (some species need a separate cool-down enclosure)</li>
          <li>Account for vet-mandated quarantine or isolation enclosures for medical reasons</li>
        </ul>

        <h2 id="sources">Sources</h2>
        <ul>
          <li>ARAV (Association of Reptile and Amphibian Veterinarians) — husbandry guidance and species-care standards.</li>
          <li>Mader, D. R., &amp; Divers, S. J. (eds.) (2014). <em>Current Therapy in Reptile Medicine and Surgery</em>. Saunders. Species-care chapters.</li>
          <li>de Vosjoli, P. (multiple volumes). <em>The Bearded Dragon Manual</em>, <em>The Leopard Gecko Manual</em>, <em>The Crested Gecko Manual</em>. Advanced Vivarium Systems.</li>
          <li>Wright, K., &amp; Whitaker, B. (2001). <em>Amphibian Medicine and Captive Husbandry</em>. Krieger Publishing.</li>
          <li>BeardedDragon.org and ReptiFiles species-care guides (community-consensus references aligned to the published literature above).</li>
        </ul>
        <p className="text-sm text-brand-text-muted">
          Lizard.com Editorial cites these as the published basis for the enclosure-size minimums and recommendations used by the calculator.
        </p>

        <h2 id="faq">FAQ</h2>
        <FAQAccordion
          items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
          includeSchema
          allowMultiple
        />

        <p className="mt-8 text-sm">
          See <Link href="/builds">Vivarium Builds</Link> for completed enclosures at the recommended dimensions and <Link href="/husbandry">Husbandry Library</Link> for the keeper-side deep-dive on each species.
        </p>
      </div>
    </ArticleLayout>
  )
}

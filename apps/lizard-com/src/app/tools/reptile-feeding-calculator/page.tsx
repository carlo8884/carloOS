import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildHowToSchema,
  SchemaScript,
  ArticleLayout,
  FAQAccordion,
  ArticleSourcesList,
  EmailCapture,
  TableOfContents,
  RelatedLinks,
  AffiliateDisclosure,
} from '@carloOS/ui'
import { ReptileFeedingCalculator } from './Calculator'

const URL = 'https://lizard.com/tools/reptile-feeding-calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'lizard-com',
  title: 'Reptile Feeding Calculator — How Many Crickets to Feed | Lizard.com',
  description:
    'How many crickets to feed a bearded dragon, leopard gecko, and more. Get prey type, count, frequency, and feeder size by species and life stage.',
  path: '/tools/reptile-feeding-calculator',
})

const howToSchema = buildHowToSchema({
  name: 'How to work out a reptile feeding schedule by species and age',
  description:
    'Use species diet type, life stage, and the head-width feeder-size rule to determine prey type, count or portion, and feeding frequency for a captive reptile.',
  url: URL,
  totalTime: 'PT3M',
  steps: [
    {
      name: 'Identify the species diet type',
      text: 'Reptiles fall into insectivore, carnivore, omnivore, or frugivore diet archetypes. Diet type sets whether you count insects, offer rodents, or provide a prepared diet plus greens.',
    },
    {
      name: 'Select the life stage',
      text: 'Hatchlings and juveniles eat more, more often, and lean more protein/insect-heavy while growing. Adults eat less often and many omnivores shift toward greens.',
    },
    {
      name: 'Read the prey count and frequency',
      text: 'The calculator returns a count or portion range and a feeding frequency drawn from published husbandry guidance for that species and stage.',
    },
    {
      name: 'Apply the feeder-size rule',
      text: 'Feeder insects should be no larger than the space between the animal\'s eyes; rodent prey should be no wider than roughly the snake\'s widest point. Oversized prey is an impaction and choking risk.',
    },
    {
      name: 'Adjust for the individual animal',
      text: 'Appetite varies with enclosure temperature, season, and the individual. Monitor body condition and consult a reptile veterinarian for an underweight, ill, or non-feeding animal.',
    },
  ],
})

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Reptile Feeding Calculator',
  url: URL,
  applicationCategory: 'UtilitiesApplication',
  applicationSubCategory: 'ReptileHusbandryCalculator',
  operatingSystem: 'Web Browser (any HTML5-capable device)',
  description:
    'Free reptile feeding calculator. Select a species (bearded dragon, leopard gecko, crested gecko, blue-tongued skink, and more) and life stage to get prey type, insect count or portion, feeding frequency, and the head-width feeder-size rule, based on published husbandry guidance.',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Inputs: species (8 common pet reptiles), life stage (hatchling / juvenile / adult)',
    'Outputs: prey type, insect count or portion range, feeding frequency, greens guidance',
    'Head-width feeder-size rule reminder per species',
    'Husbandry guidance only — explicitly not a clinical diet plan',
  ],
  publisher: {
    '@type': 'Organization',
    name: 'Lizard.com Editorial',
    url: 'https://lizard.com',
  },
}

const schema = howToSchema

const SOURCES = [
  {
    label:
      'Mader, D. R., & Divers, S. J. (eds.) (2014). Current Therapy in Reptile Medicine and Surgery (nutrition / feeding chapters).',
    publisher: 'Saunders / Elsevier',
  },
  {
    label:
      'Association of Reptilian and Amphibian Veterinarians (ARAV) — client husbandry and nutrition resources.',
    url: 'https://arav.org',
    publisher: 'ARAV',
  },
  {
    label:
      'Stahl, S. J. & Donoghue, S. Nutrition of Reptiles — captive feeding ration and frequency guidance.',
    publisher: 'Vet Clinics: Exotic Animal Practice',
  },
  {
    label:
      'Boyer, T. H. & Scott, P. W. Nutritional husbandry of insectivorous, herbivorous, and carnivorous reptiles.',
    publisher: 'Reptile Medicine and Surgery references',
  },
]

const FAQS = [
  {
    question: 'How many crickets should I feed my bearded dragon?',
    answer:
      'A juvenile bearded dragon eats roughly 20–40 appropriately sized insects per day across 1–2 feedings, plus daily greens. An adult bearded dragon shifts to insects every other day (about 10–20 per feeding, 2–3 times a week) with greens making up roughly 70–80% of the diet. Hatchlings eat the most — 20–40 insects spread across 3–5 short feedings a day. Always keep insects no larger than the space between the dragon\'s eyes.',
  },
  {
    question: 'How often should I feed a leopard gecko?',
    answer:
      'Hatchling and young leopard geckos are fed daily; juveniles daily to every other day; and adults roughly 2–3 times per week (every 2–3 days). A common rule of thumb is about two appropriately sized insects per inch of the gecko\'s length per feeding. Leopard geckos are obligate insectivores — they eat only live feeder insects, never plant matter — and most feedings should be dusted with calcium.',
  },
  {
    question: 'What is the feeder-size rule for reptiles?',
    answer:
      'For most insectivorous and omnivorous lizards, no feeder insect should be larger than the space between the animal\'s eyes. For snakes, prey should be no wider than roughly 1 to 1.5 times the widest part of the snake\'s body. Oversized prey is a recognised impaction and choking hazard, especially in young animals.',
  },
  {
    question: 'Do adult reptiles eat less than juveniles?',
    answer:
      'Yes. Across nearly every commonly kept species, growing hatchlings and juveniles eat larger quantities far more frequently than adults because they are building body mass. As an animal matures, both portion frequency and (for omnivores) the proportion of animal protein typically drop. Continuing a juvenile feeding schedule into adulthood is one of the most common causes of captive reptile obesity.',
  },
  {
    question: 'Should I gut-load and dust feeder insects?',
    answer:
      'For insectivores and insect-eating omnivores, yes. Gut-load feeder insects with a quality diet 24–48 hours before offering so the insects carry useful nutrition, and dust with a calcium (and periodic vitamin D3 / multivitamin) supplement following your species\' care sheet. Gut-loading and dusting are central to preventing metabolic bone disease in captive reptiles.',
  },
  {
    question: 'My reptile stopped eating — what should I do?',
    answer:
      'This calculator provides husbandry guidance, not medical advice. Short appetite dips can follow shedding, brumation, seasonal cues, or a basking temperature that is too low. But a sustained refusal to eat, visible weight loss, or any other sign of illness warrants a consultation with a reptile veterinarian rather than a change in feeding count alone.',
  },
]

export default function ReptileFeedingCalculatorPage() {
  return (
    <ArticleLayout
      siteId="lizard-com"
      hero={{
        title: 'Reptile Feeding Calculator',
        subtitle:
          'Pick a species and life stage to get prey type, insect count or portion, feeding frequency, greens guidance, and the feeder-size rule — based on published husbandry guidance.',
        category: 'Calculators',
        categoryHref: '/tools',
        publishedAt: 'June 2026',
        readTime: '4 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Reptile Feeding Calculator' },
      ]}
      schema={schema}
      relatedLinks={[
        { title: 'Tools Hub', href: '/tools', category: 'Hub' },
        { title: 'Basking Temperature Calculator', href: '/tools/basking-temperature-calculator', category: 'Tools' },
        { title: 'Enclosure Size Calculator', href: '/tools/enclosure-size-calculator', category: 'Tools' },
        { title: 'Reptile Feeding Guide', href: '/health/reptile-feeding-guide', category: 'Health' },
        { title: 'Feeder Insects Compared', href: '/health/feeder-insects-compared', category: 'Health' },
        { title: 'Gut-Loading Guide', href: '/health/gut-loading-guide', category: 'Health' },
        { title: 'Bearded Dragon Care', href: '/species/bearded-dragon', category: 'Species' },
        { title: 'Leopard Gecko Care', href: '/species/leopard-gecko', category: 'Species' },
      ]}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The calculator', href: '#calculator' },
              { label: 'Quick reference table', href: '#reference' },
              { label: 'How it works', href: '#methodology' },
              { label: 'Sources', href: '#sources' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Feeding &amp; nutrition"
            links={[
              { label: 'Reptile Feeding Guide', href: '/health/reptile-feeding-guide' },
              { label: 'Feeder Insects Compared', href: '/health/feeder-insects-compared' },
              { label: 'Gut-Loading Guide', href: '/health/gut-loading-guide' },
              { label: 'Calcium &amp; D3 Supplementation', href: '/health/calcium-d3-supplementation' },
              { label: 'Species library', href: '/species' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="lizard-com"
            title="Lizard.com keeper letter"
            subtitle="Husbandry deep-dives and tool updates."
            source="feeding-calculator"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <SchemaScript schema={softwareApplicationSchema} />

        <p>
          <strong>Quick answer:</strong> A juvenile bearded dragon eats roughly <strong>20–40 appropriately sized
          insects per day</strong> plus daily greens; an adult eats insects <strong>every other day</strong> (about
          10–20 per feeding) with greens making up the bulk of the diet. A leopard gecko is fed <strong>daily as a
          juvenile and 2–3 times a week as an adult</strong>. Across species, keep every feeder insect no larger than
          the space between the animal&apos;s eyes. Pick your species and life stage below for the full schedule.
        </p>

        <h2 id="calculator">The calculator</h2>
        <p>
          Select a species and life stage. The calculator returns prey type, the count or portion range, feeding
          frequency, greens guidance, and the species-specific feeder-size rule, drawn from the published husbandry
          sources listed below.
        </p>
        <ReptileFeedingCalculator />

        <h2 id="reference">Feeding quick-reference by species</h2>
        <p>
          The table below summarises typical feeding for commonly kept species. Counts are ranges, not exact
          prescriptions — appetite shifts with temperature, season, and the individual animal.
        </p>
        <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-brand-border">
                <th className="text-left py-2 pr-4 font-semibold text-brand-text-dark">Species</th>
                <th className="text-left py-2 pr-4 font-semibold text-brand-text-dark">Diet type</th>
                <th className="text-left py-2 pr-4 font-semibold text-brand-text-dark">Juvenile</th>
                <th className="text-left py-2 font-semibold text-brand-text-dark">Adult</th>
              </tr>
            </thead>
            <tbody className="text-brand-text-mid">
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">Bearded dragon</td><td className="py-2 pr-4">Omnivore</td><td className="py-2 pr-4">20–40 insects/day + daily greens</td><td className="py-2">Insects every other day; greens daily</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">Leopard gecko</td><td className="py-2 pr-4">Insectivore</td><td className="py-2 pr-4">5–8 insects daily / every other day</td><td className="py-2">6–10 insects 2–3x/week</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">Crested gecko</td><td className="py-2 pr-4">Frugivore/omnivore</td><td className="py-2 pr-4">CGD 3–4 nights/week + occasional insects</td><td className="py-2">CGD 2–3 nights/week + occasional insects</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">Blue-tongued skink</td><td className="py-2 pr-4">Omnivore</td><td className="py-2 pr-4">Head-sized portion 2–3x/week</td><td className="py-2">Head-sized portion 1–2x/week</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">Veiled chameleon</td><td className="py-2 pr-4">Insectivore</td><td className="py-2 pr-4">8–12 insects/day</td><td className="py-2">5–8 insects every other day</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">Corn snake</td><td className="py-2 pr-4">Carnivore</td><td className="py-2 pr-4">1 fuzzy/hopper every 7 days</td><td className="py-2">1 adult mouse every 7–14 days</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">Ball python</td><td className="py-2 pr-4">Carnivore</td><td className="py-2 pr-4">1 weaned mouse/small rat every 7–10 days</td><td className="py-2">1 rat every 10–14 days</td></tr>
            </tbody>
          </table>
        </div>

        <h2 id="methodology">How it works</h2>
        <p>
          The calculator maps each species to a <strong>diet archetype</strong> (insectivore, carnivore, omnivore, or
          frugivore) and a <strong>life stage</strong> (hatchling, juvenile, adult), then returns the published-guidance
          feeding ranges for that combination. Three principles drive every output:
        </p>
        <ul>
          <li>
            <strong>Younger animals eat more, more often.</strong> Hatchlings and juveniles are building body mass, so
            they take larger quantities at higher frequency and (for omnivores) lean more insect/protein-heavy than
            adults of the same species.
          </li>
          <li>
            <strong>Adults shift down — and omnivores shift toward plants.</strong> Adult feeding frequency drops across
            the board. For bearded dragons and other omnivores, the animal-protein share falls and greens become the
            staple. Continuing a juvenile schedule into adulthood is a leading cause of captive obesity.
          </li>
          <li>
            <strong>The feeder-size rule is non-negotiable.</strong> Feeder insects should be no larger than the space
            between the animal&apos;s eyes; rodent prey should be no wider than roughly the snake&apos;s widest point.
            Oversized prey is a recognised impaction and choking risk.
          </li>
        </ul>
        <p>
          The figures are <strong>ranges drawn from published husbandry guidance</strong>, not exact prescriptions.
          Real appetite varies with enclosure temperature (a too-cool basking site suppresses appetite and digestion),
          season, shedding cycle, and the individual animal. Use the output as a starting plan, then adjust to keep the
          animal at a healthy body condition. For insectivores, pair feeding with{' '}
          <Link href="/health/gut-loading-guide" className="text-brand-primary hover:underline">gut-loading</Link>{' '}
          and calcium dusting; see{' '}
          <Link href="/health/feeder-insects-compared" className="text-brand-primary hover:underline">feeder insects compared</Link>{' '}
          for choosing staples vs. treats.
        </p>
        <p>
          This is <strong>husbandry guidance only</strong>. It is not a clinical diet plan and does not address
          underweight, ill, gravid, or non-feeding animals. For any of those, consult a reptile veterinarian.
        </p>

        <ArticleSourcesList sources={SOURCES} />
        <p className="text-sm text-brand-text-mid mt-3">
          Lizard.com Editorial compiled these feeding ranges from the published husbandry references above. No in-house
          feeding trials by Lizard.com are implied or claimed.
        </p>

        <h2 id="faq">FAQ</h2>
        <FAQAccordion
          items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
          includeSchema
          allowMultiple
        />

        <p className="mt-8 text-sm">
          Once the diet is set, confirm the rest of the husbandry picture: check the basking and gradient temperatures
          with the <Link href="/tools/basking-temperature-calculator">Basking Temperature Calculator</Link>, size the
          enclosure with the <Link href="/tools/enclosure-size-calculator">Enclosure Size Calculator</Link>, and read
          the full <Link href="/health/reptile-feeding-guide">reptile feeding guide</Link>.
        </p>

        <AffiliateDisclosure variant="inline" siteId="lizard-com" />
        <div style={{ background: 'var(--brand-surface, #1a1f2b)', border: '1px solid var(--brand-border, #2d3548)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #8a96ad)', marginBottom: '8px' }}>Shop Feeder Insects &amp; Supplements</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #8a96ad)', lineHeight: 1.55 }}>Once you know the count and frequency, stock appropriately sized feeders plus a calcium / D3 supplement for dusting. Lizard.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission never influences the feeding guidance above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/reptile%20calcium%20supplement%20feeder%20insects?s=tool-feeding-calculator" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Feeders &amp; Supplements on Amazon →</a>
            <a href="/go/chewy-brand/reptile%20feeder%20insects?s=tool-feeding-calculator" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #7bc25c)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
            <Link href="/health/feeder-insects-compared" style={{ display: 'inline-block', padding: '9px 16px', border: '1px solid var(--brand-border-strong, #3a4358)', color: 'var(--brand-white)', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Feeder insects compared →</Link>
          </div>
        </div>
      </div>
    </ArticleLayout>
  )
}

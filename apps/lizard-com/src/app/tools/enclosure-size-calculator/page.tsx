import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  SchemaScript,
  ArticleLayout,
  FAQAccordion,
  EmailCapture,
  TableOfContents,
  RelatedLinks,
} from '@carloOS/ui'
import { EnclosureSizeCalculator } from './Calculator'

const URL = 'https://lizard.com/tools/enclosure-size-calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'lizard-com',
  title: 'Reptile Enclosure Size Calculator | Lizard.com',
  description: 'Calculate recommended minimum enclosure dimensions from adult body length and locomotor habit. Outputs L x W x H, floor footprint, and volume in gallons.',
  path: '/tools/enclosure-size-calculator',
})

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Reptile Enclosure Size Calculator',
  url: URL,
  applicationCategory: 'UtilitiesApplication',
  applicationSubCategory: 'ReptileHusbandryCalculator',
  operatingSystem: 'Web Browser (any HTML5-capable device)',
  description:
    'Free reptile enclosure size calculator. Enter adult total body length and locomotor habit (terrestrial, semi-arboreal, or arboreal) to compute recommended minimum enclosure dimensions, floor footprint, and volume. Includes a second mode to check whether an existing tank meets the minimums.',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Inputs: adult total body length (inches or cm), locomotor habit',
    'Outputs: recommended minimum L x W x H in both inches and cm',
    'Floor footprint in sq in and sq ft',
    'Volume in US gallons and liters (cubic inches / 231)',
    'Check-my-tank mode: enter actual enclosure dimensions to compare against recommended minimums',
    'Pass/fail verdict with per-dimension breakdown',
  ],
  publisher: {
    '@type': 'Organization',
    name: 'Lizard.com Editorial',
    url: 'https://lizard.com',
  },
}

const schema = appSchema

const FAQS = [
  {
    question: 'What multipliers does the calculator use?',
    answer:
      'The calculator applies widely-cited keeper-literature multipliers to adult total body length (L). Terrestrial species: 2L x 1L x 1L. Semi-arboreal species: 1.5L x 1L x 1.5L. Arboreal species: 1L x 1L x 2L. These are minimums; larger enclosures are always better.',
  },
  {
    question: 'How do I measure total body length?',
    answer:
      'Total body length is measured nose-tip to tail-tip on a fully extended animal. For planning purposes, use the expected adult size for the species, not the current juvenile length. Most published care sheets list expected adult SVL (snout-vent length) and total length separately; use total length here.',
  },
  {
    question: 'How is enclosure volume calculated?',
    answer:
      'Volume in US gallons = (length x width x height in inches) / 231. One US gallon equals 231 cubic inches. Liters = gallons x 3.785. This gives you an equivalent "tank size" figure comparable to the labeled capacity of aquarium glass tanks, which are often sold by nominal gallon rating.',
  },
  {
    question: 'My tank is listed as "40 gallons" — why does the calculator give a different number?',
    answer:
      'Aquarium manufacturers measure internal usable water volume and often round. Reptile enclosures rated by cubic volume and tanks rated by water capacity use slightly different conventions. The calculator uses the geometric formula (L x W x H / 231) from your actual measured dimensions, which may differ from the nominal label by a few gallons.',
  },
]

export default function EnclosureSizeCalculatorPage() {
  return (
    <ArticleLayout
      siteId="lizard-com"
      hero={{
        title: 'Enclosure Size Calculator',
        subtitle:
          'Enter your reptile\'s adult body length and locomotor habit to get recommended minimum enclosure dimensions, floor footprint, and volume. Or check whether a tank you already own meets the minimums.',
        category: 'Calculators',
        categoryHref: '/tools',
        publishedAt: 'June 2026',
        readTime: '3 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Enclosure Size Calculator' },
      ]}
      schema={schema}
      relatedLinks={[
        { title: 'Tools Hub', href: '/tools', category: 'Hub' },
        { title: 'UVB Distance Calculator', href: '/tools/uvb-distance-calculator', category: 'Tools' },
        { title: 'Best Reptile Terrariums', href: '/reviews/best-reptile-terrariums', category: 'Reviews' },
        { title: 'Enclosure Size Guide', href: '/setup/terrarium-size-guide', category: 'Setup' },
        { title: 'Screen vs PVC Enclosures', href: '/setup/screen-vs-pvc-enclosure', category: 'Setup' },
        { title: 'Species Library', href: '/species', category: 'Species' },
      ]}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The calculator', href: '#calculator' },
              { label: 'How the multipliers work', href: '#multipliers' },
              { label: 'Reading the output', href: '#output' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Enclosure Setup"
            links={[
              { label: 'Enclosure Size Guide', href: '/setup/terrarium-size-guide' },
              { label: 'Screen vs PVC vs Glass', href: '/setup/screen-vs-pvc-enclosure' },
              { label: 'Substrate Guide', href: '/setup/substrate-guide' },
              { label: 'UVB Distance Calculator', href: '/tools/uvb-distance-calculator' },
              { label: 'Species library', href: '/species' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="lizard-com"
            title="Lizard.com keeper letter"
            subtitle="Husbandry deep-dives and tool updates."
            source="enclosure-calculator"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <SchemaScript schema={schema} />

        <h2 id="calculator">The calculator</h2>
        <p>
          Enter your reptile&apos;s expected adult total body length and select its locomotor habit. The calculator outputs recommended minimum enclosure dimensions, floor footprint, and volume. Switch to &quot;Check My Tank&quot; mode to compare an existing enclosure against those minimums.
        </p>
        <EnclosureSizeCalculator />

        <h2 id="multipliers">How the multipliers work</h2>
        <p>
          Keeper literature and welfare researchers commonly express minimum enclosure dimensions as multiples of the animal&apos;s adult total body length (L). The multipliers applied here follow the widely-cited breakdown by locomotor habit:
        </p>
        <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-brand-border">
                <th className="text-left py-2 pr-4 font-semibold text-brand-text-dark">Habit</th>
                <th className="text-left py-2 pr-4 font-semibold text-brand-text-dark">Length</th>
                <th className="text-left py-2 pr-4 font-semibold text-brand-text-dark">Width</th>
                <th className="text-left py-2 pr-4 font-semibold text-brand-text-dark">Height</th>
                <th className="text-left py-2 font-semibold text-brand-text-dark">Priority dimension</th>
              </tr>
            </thead>
            <tbody className="text-brand-text-mid">
              <tr className="border-b border-brand-border/50">
                <td className="py-2 pr-4">Terrestrial</td>
                <td className="py-2 pr-4">2 x L</td>
                <td className="py-2 pr-4">1 x L</td>
                <td className="py-2 pr-4">1 x L</td>
                <td className="py-2">Floor area</td>
              </tr>
              <tr className="border-b border-brand-border/50">
                <td className="py-2 pr-4">Semi-arboreal</td>
                <td className="py-2 pr-4">1.5 x L</td>
                <td className="py-2 pr-4">1 x L</td>
                <td className="py-2 pr-4">1.5 x L</td>
                <td className="py-2">Balanced</td>
              </tr>
              <tr className="border-b border-brand-border/50">
                <td className="py-2 pr-4">Arboreal</td>
                <td className="py-2 pr-4">1 x L</td>
                <td className="py-2 pr-4">1 x L</td>
                <td className="py-2 pr-4">2 x L</td>
                <td className="py-2">Height / vertical</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Terrestrial species (most skinks, ground geckos, tortoises, ground-dwelling snakes) benefit most from a long, wide footprint that allows a real thermal gradient from warm end to cool end and room to forage and explore. Arboreal species (chameleons, arboreal geckos, water dragons, arboreal boas) spend the bulk of their time off the floor; height is the critical dimension, but a narrow column is not enough — width still matters for enrichment structure. Semi-arboreal species use both layers and benefit from balanced dimensions.
        </p>
        <p>
          These multipliers produce a <strong>recommended minimum</strong> enclosure, not an ideal one. Bigger is almost always better, and a species care sheet will often provide stricter requirements based on observed behavior in captivity. Confirm against your species&apos; published care sheet before finalizing your build.
        </p>

        <h2 id="output">Reading the output</h2>
        <p>
          The calculator returns three sets of figures:
        </p>
        <ul>
          <li><strong>L x W x H</strong> — minimum enclosure length, width, and height in both inches and centimeters.</li>
          <li><strong>Floor footprint</strong> — the product of length and width in square inches and square feet. Floor footprint is the dominant welfare metric for terrestrial species.</li>
          <li><strong>Volume</strong> — total internal volume in US gallons (cubic inches / 231) and liters. This is particularly useful for comparing against commercially available glass tank sizes, which are typically sold by nominal gallon rating.</li>
        </ul>
        <p>
          In &quot;Check My Tank&quot; mode, the calculator compares your actual enclosure dimensions against the recommended minimums and gives a pass / fail verdict per dimension, so you can see exactly where an existing tank falls short.
        </p>
        <p>
          For a deeper look at enclosure sizing by species and the welfare research behind larger enclosures, see the <Link href="/setup/terrarium-size-guide" className="text-brand-primary hover:underline">Enclosure Size Guide</Link>. For the UVB side of the setup picture, the <Link href="/tools/uvb-distance-calculator" className="text-brand-primary hover:underline">UVB Distance Calculator</Link> estimates UVI at the basking surface once you know your enclosure dimensions and mounting distance.
        </p>

        <h2 id="faq">FAQ</h2>
        <FAQAccordion
          items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
          includeSchema
          allowMultiple
        />

        <p className="mt-8 text-sm">
          Confirm all figures against the{' '}
          <Link href="/species" className="text-brand-primary hover:underline">species library</Link>{' '}
          and the{' '}
          <Link href="/setup" className="text-brand-primary hover:underline">setup guides</Link>{' '}
          before committing to a build.
        </p>

        <div style={{ background: 'var(--brand-surface, #1a1f2b)', border: '1px solid var(--brand-border, #2d3548)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #8a96ad)', marginBottom: '8px' }}>Shop Enclosures That Meet These Minimums</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #8a96ad)', lineHeight: 1.55 }}>Once you have your target dimensions, browse front-opening terrariums and PVC enclosures sized to hit them. Lizard.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission never influences the dimensions calculated above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/reptile%20terrarium%20enclosure?s=tool-enclosure-calculator" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Reptile Enclosures on Amazon →</a>
            <a href="/go/chewy-brand/reptile%20terrarium?s=tool-enclosure-calculator" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #7bc25c)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
            <Link href="/reviews/best-reptile-terrariums" style={{ display: 'inline-block', padding: '9px 16px', border: '1px solid var(--brand-border-strong, #3a4358)', color: 'var(--brand-white)', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Our terrarium reviews →</Link>
          </div>
        </div>
      </div>
    </ArticleLayout>
  )
}

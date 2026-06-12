import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildHowToSchema,
  ArticleLayout,
  ArticleByline,
  ArticleSourcesList,
  FAQAccordion,
  EmailCapture,
  TableOfContents,
  RelatedLinks,
  CrossPortfolioCard,
} from '@carloOS/ui'
import Calculator from './Calculator'

const URL = 'https://horses.com/tools/horse-feed-calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Horse Feed & Hay Calculator (Daily Intake) | Horses.com',
  description:
    'Estimate how much hay and feed a horse needs per day from bodyweight, workload, and keeper type. Free forage-first calculator using NRC intake ranges.',
  path: '/tools/horse-feed-calculator',
})

const howToSchema = buildHowToSchema({
  name: 'How to calculate how much hay a horse needs per day',
  description:
    'Estimate a horse’s daily forage from its bodyweight. Horses eat roughly 1.5–2.5% of bodyweight in dry matter per day, forage-first; multiply bodyweight by the intake percentage to get the daily dry-matter target.',
  url: URL,
  totalTime: 'PT3M',
  steps: [
    {
      name: 'Establish bodyweight',
      text: 'Weigh the horse on a livestock scale, or estimate it with a girth-and-length weight calculator. Every feeding figure is anchored to bodyweight.',
    },
    {
      name: 'Pick an intake percentage',
      text: 'Most horses eat about 1.5–2.5% of bodyweight in dry matter per day. Use the lower end for idle and easy-keeper horses and the upper end for hard keepers and horses in heavy work.',
    },
    {
      name: 'Calculate the daily dry-matter target',
      text: 'Multiply bodyweight by the intake percentage. A 1,000 lb horse at 2% needs about 20 lb of feed dry matter per day; at 1.5% it needs about 15 lb.',
    },
    {
      name: 'Build the ration forage-first',
      text: 'Keep forage at roughly 1.5% of bodyweight or more, and add concentrates or a ration balancer only to fill the energy or nutrient gap that forage leaves.',
    },
    {
      name: 'Convert dry matter to as-fed',
      text: 'Grass hay is about 88–90% dry matter, so divide the hay dry-matter target by about 0.9 to get the as-fed weight you actually put in the net.',
    },
  ],
})

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Horse Feed & Hay Calculator',
  url: URL,
  applicationCategory: 'UtilitiesApplication',
  applicationSubCategory: 'EquineHusbandryCalculator',
  operatingSystem: 'Web Browser (any HTML5-capable device)',
  description:
    'Free horse feed and hay calculator. Inputs: bodyweight (lb/kg), workload (maintenance / light / moderate / heavy), and keeper type (easy / average / hard). Outputs: total daily dry-matter intake range and a forage baseline, using NRC (2007) intake ranges, forage-first.',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Daily dry-matter intake range as 1.5–2.5%+ of bodyweight (NRC 2007)',
    'Workload and easy/hard-keeper adjustments',
    'Forage-first baseline with a forage-floor minimum',
    'Dry-matter vs. as-fed conversion guidance for hay and pasture',
    'Husbandry framing only — no clinical diet prescriptions',
  ],
  publisher: { '@type': 'Organization', name: 'Horses.com Editorial', url: 'https://horses.com' },
}

const FAQS = [
  {
    question: 'How much hay should a horse eat per day?',
    answer:
      'As a rule of thumb, a horse eats about 1.5–2.5% of its bodyweight in dry matter per day, and forage (hay or pasture) should make up the majority of that. For a 1,000 lb (450 kg) horse, that is roughly 15–25 lb of feed dry matter per day, with hay at a minimum of about 1.5% of bodyweight (around 15 lb dry matter). Because grass hay is about 88–90% dry matter, 15 lb of hay dry matter is roughly 17 lb of hay as-fed. Idle and easy-keeper horses sit at the lower end; hard keepers and horses in heavy work sit at the upper end.',
  },
  {
    question: 'How much does a horse eat as a percentage of its bodyweight?',
    answer:
      'Total daily dry-matter intake is typically 1.5–2.5% of bodyweight, occasionally up to about 3% for horses in very hard work or lactating mares. Forage alone should generally be kept at or above 1.5% of bodyweight to maintain gut health and reduce the risk of ulcers, colic, and stereotypies. The calculator applies these ranges and shifts within them based on workload and whether the horse is an easy or hard keeper.',
  },
  {
    question: 'What does “forage first” actually mean?',
    answer:
      'Forage first means building the ration on pasture, hay, or haylage and only adding concentrates (grain mixes, ration balancers, beet pulp, oils) to fill the gap that forage leaves. Horses evolved as trickle-feeders with a small stomach and a large hindgut built to ferment fibre, so a forage-led diet matches their physiology. A horse that meets its energy needs on good forage may need only a ration balancer for vitamins and minerals, not a bucket of grain.',
  },
  {
    question: 'Do I weigh hay wet (as-fed) or as dry matter?',
    answer:
      'The intake percentages refer to dry matter (DM), which removes the water content so different feeds can be compared fairly. To turn a dry-matter target into the weight you actually feed, divide by the feed’s dry-matter fraction: grass hay is about 88–90% DM, so a 15 lb DM hay target is about 17 lb as-fed. Fresh pasture is much wetter — often 20–30% DM — so a grazing horse eats far more by weight to reach the same dry matter. Weighing hay with a luggage scale is the single most useful habit for accurate feeding.',
  },
  {
    question: 'Should I use this calculator for a pregnant, sick, or growing horse?',
    answer:
      'Treat the calculator as a general husbandry starting point for healthy adult horses. Pregnant and lactating mares, growing youngstock, seniors with dental issues, hard keepers, and horses with metabolic or other health conditions have specific requirements that go beyond a simple bodyweight percentage. For those cases, work with an equine nutritionist or your veterinarian to build a tailored ration rather than relying on a calculator.',
  },
]

export default function HorseFeedCalculatorPage() {
  return (
    <ArticleLayout
      siteId="horses-com"
      relatedLinks={[
        { title: 'Horse Weight Calculator', href: '/tools/horse-weight-calculator', category: 'Tools' },
        { title: 'Body Condition Score (Henneke)', href: '/tools/body-condition-score', category: 'Tools' },
        { title: 'Horse Gestation Calculator', href: '/tools/horse-gestation-calculator', category: 'Tools' },
        { title: 'Horse Height Converter', href: '/tools/horse-height-converter', category: 'Tools' },
        { title: 'Forage Basics', href: '/nutrition/forage-basics' },
      ]}
      hero={{
        title: 'Horse Feed & Hay Calculator',
        subtitle:
          'Estimate how much hay and feed a horse needs each day from bodyweight, workload, and keeper type — forage-first, using published NRC intake ranges.',
        category: 'Calculators',
        categoryHref: '/tools',
        publishedAt: 'June 2026',
        readTime: '5 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Horse Feed & Hay Calculator' },
      ]}
      schema={howToSchema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The calculator', href: '#calculator' },
              { label: 'The math', href: '#math' },
              { label: 'How it works', href: '#methodology' },
              { label: 'Sources', href: '#sources' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Horse tools"
            links={[
              { label: 'Weight Calculator', href: '/tools/horse-weight-calculator' },
              { label: 'Body Condition Score', href: '/tools/body-condition-score' },
              { label: 'Gestation Calculator', href: '/tools/horse-gestation-calculator' },
              { label: 'Height Converter', href: '/tools/horse-height-converter' },
              { label: 'Hay Types', href: '/nutrition/hay-types' },
              { label: 'Ration Balancers', href: '/nutrition/ration-balancers' },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="tool" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Horses.com owner letter"
            subtitle="Horse-care references and tool updates."
            source="feed-calculator"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline
          siteName="Horses.com Editorial"
          publishedAt="2026-06-11"
          updatedAt="2026-06-11"
          reviewedBy="Editorial team"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />

        <p>
          <strong>The quick answer:</strong> a horse eats about{' '}
          <strong>1.5–2.5% of its bodyweight in dry matter per day</strong>, forage-first. For a{' '}
          <strong>1,000 lb (450 kg) horse</strong>, that is roughly{' '}
          <strong>15–25 lb of feed dry matter per day</strong>, with hay kept at a minimum of about
          1.5% of bodyweight (around 15 lb dry matter, or about 17 lb of hay as-fed). Build the
          ration on forage and add concentrates only to fill the gap.
        </p>

        <h2 id="calculator">The calculator</h2>
        <p>
          Enter the horse&rsquo;s bodyweight, choose its workload and keeper type, and the calculator
          returns a total daily dry-matter range plus a forage baseline. Don&rsquo;t have a weight?
          Estimate it first with the{' '}
          <Link href="/tools/horse-weight-calculator">horse weight calculator</Link>.
        </p>
        <Calculator />

        <h2 id="math">The math</h2>
        <ul>
          <li>
            <strong>Total daily dry matter</strong> = bodyweight &times; intake&nbsp;% (about
            1.5–2.5% for most horses, up to ~3% for very hard work)
          </li>
          <li>
            <strong>Forage baseline</strong> = bodyweight &times; ~1.5% minimum, in dry matter,
            to protect gut health
          </li>
          <li>
            <strong>As-fed hay</strong> = hay dry-matter target &divide; ~0.9 (grass hay is about
            88–90% dry matter)
          </li>
        </ul>
        <p>
          <strong>Worked example.</strong> A 1,000 lb idle horse at 2% of bodyweight needs about{' '}
          <strong>20 lb of feed dry matter per day</strong> (1,000 &times; 0.02). Kept entirely on
          grass hay at ~90% dry matter, that is roughly <strong>22 lb of hay as-fed</strong>{' '}
          (20 &divide; 0.9). The same horse in heavy work as a hard keeper could need closer to{' '}
          25–30 lb of dry matter, with the extra calories coming from higher-quality forage and a
          measured concentrate, fed in several small meals.
        </p>

        <h2 id="methodology">How it works &amp; limits</h2>
        <p>
          The horse is a trickle-feeding hindgut fermenter: a small stomach, no gallbladder, and a
          large fibre-fermenting hindgut built for near-constant forage intake. That physiology is
          why every credible feeding system starts from bodyweight and forage, and why a sudden
          grain-heavy ration causes problems. The intake percentages above come from published
          equine nutrition guidance and are deliberately given as <em>ranges</em>, because true need
          depends on forage quality, metabolism, temperament, climate, and condition.
        </p>
        <p>The calculator does <strong>not</strong>:</p>
        <ul>
          <li>Prescribe a specific brand, product, or medicated or therapeutic diet</li>
          <li>Replace a forage analysis, which is the only way to know a hay&rsquo;s real energy and mineral content</li>
          <li>Set rations for pregnant or lactating mares, foals, or horses with metabolic or other disease — those need professional input</li>
          <li>Account for individual variation — always verify against body condition over the following weeks and adjust</li>
        </ul>
        <p>
          Use the output as a starting target, then track results with the{' '}
          <Link href="/tools/body-condition-score">body condition score tool</Link> and adjust the
          ration up or down. Read{' '}
          <Link href="/nutrition/forage-basics">forage basics</Link> and{' '}
          <Link href="/nutrition/hay-types">hay types</Link> to choose the right forage for the job.
        </p>

        <h2 id="sources">Sources</h2>
        <ArticleSourcesList
          sources={[
            {
              label:
                'National Research Council (2007). Nutrient Requirements of Horses, Sixth Revised Edition. National Academies Press.',
              publisher: 'NRC',
            },
            {
              label:
                'Harris, P. A., et al. (2017). Review: Feeding conserved forage to horses — recent advances and recommendations. Animal, 11(6), 958–967.',
              publisher: 'Animal',
            },
            {
              label:
                'University of Minnesota Extension — How much should I feed my horse? (bodyweight-based forage and concentrate guidance).',
              url: 'https://extension.umn.edu/horse-nutrition/how-much-feed-my-horse',
              publisher: 'UMN Extension',
            },
          ]}
        />
        <p className="text-sm text-brand-text-mid">
          Horses.com Editorial cites these as the published basis for the bodyweight-percentage
          intake ranges and forage-first feeding referenced by the calculator. The output is a
          general husbandry estimate; it is not a veterinary or therapeutic diet.
        </p>

        <h2 id="faq">FAQ</h2>
        <FAQAccordion
          items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
          includeSchema
          allowMultiple
        />

        <p className="mt-8 text-sm">
          Start by estimating bodyweight with the{' '}
          <Link href="/tools/horse-weight-calculator">horse weight calculator</Link>, then track
          whether the ration is working with the{' '}
          <Link href="/tools/body-condition-score">body condition score calculator</Link>.
        </p>
      </div>
    </ArticleLayout>
  )
}

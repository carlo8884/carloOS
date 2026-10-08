import { HopDisclosure } from '../../../components/HopDisclosure'
import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildArticleSchema,
  buildMetadata,
  buildHowToSchema,
  ArticleLayout,
  ArticleByline,
  ArticleSourcesList,
  FAQAccordion,
  TableOfContents,
  RelatedLinks,
  CrossPortfolioCard,
  JourneyNext,
  ShopCtas,
} from '@carloOS/ui'
import Calculator from './Calculator'

const URL = 'https://horses.com/tools/horse-feed-calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Horse Feed & Hay Calculator (Daily Intake) | Horses.com',
  description:
    'Estimate how much hay and feed a horse needs per day from bodyweight, workload, and keeper type. Forage floor and maximal intake follow Merck’s reading of NRC 2007; workload splits are planning figures.',
  path: '/tools/horse-feed-calculator',
})

const howToSchema = buildHowToSchema({
  name: 'How to calculate how much hay a horse needs per day',
  description:
    'Estimate a horse’s daily forage from its bodyweight. Merck, citing NRC 2007, puts forage at least at 1.5–2% of body weight and maximal intake at 2.5–3%. Other workload splits are planning figures.',
  url: URL,
  totalTime: 'PT3M',
  steps: [
    {
      name: 'Establish bodyweight',
      text: 'Weigh the horse on a livestock scale, or estimate it with a girth-and-length weight calculator. Every feeding figure is anchored to bodyweight.',
    },
    {
      name: 'Pick an intake percentage',
      text: 'Merck, citing NRC 2007, says forage should be at least 1.5–2% of body weight, and maximal daily intake is about 2.5–3%. The light, moderate, and heavy splits on this page are planning figures inside that envelope.',
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
    'Free horse feed and hay calculator. Inputs: bodyweight (lb/kg), workload (maintenance / light / moderate / heavy), and keeper type (easy / average / hard). Outputs: total daily dry-matter intake range and a forage baseline, using Merck’s reading of NRC 2007 for the forage floor and maximal intake. Workload splits are planning figures.',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Forage at least 1.5–2% of body weight and maximal intake 2.5–3% (Merck, citing NRC 2007); other splits are planning figures',
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
      'Merck, citing Nutrient Requirements of Horses (NRC 2007), says horses need at least 1.5–2% of body weight in forage per day on a dry-matter basis, and that maximal daily intake is about 2.5–3% of body weight. For a 1,000 lb (450 kg) horse, 1.5% is about 15 lb of dry matter. The 88–90% hay conversion used to turn that into as-fed weight is a planning figure, so 15 lb of hay dry matter is roughly 17 lb of hay as-fed. Light, moderate, and heavy workload bands on this page are planning splits inside that envelope, not a second published table.',
  },
  {
    question: 'How much does a horse eat as a percentage of its bodyweight?',
    answer:
      'Merck, citing NRC 2007, states a forage floor of at least 1.5–2% of body weight and a maximal daily intake of about 2.5–3% of body weight in dry matter. Maintenance on this page uses 1.5–2%. Light, moderate, and heavy bands, and the easy- or hard-keeper shift, are planning figures inside that envelope. They are not a published workload table.',
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

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'Horse Feed & Hay Calculator',
  description: 'Estimate how much hay and feed a horse needs each day from bodyweight, workload, and keeper type — forage-first, using Merck’s 1.5–2% forage floor and 2.5–3% maximal intake. Workload splits are planning figures.',
  url: 'https://horses.com/tools/horse-feed-calculator',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-11',
  modifiedAt: '2026-09-03',
})
export default function HorseFeedCalculatorPage() {
  return (
    <ArticleLayout
      siteId="horses-com"
      relatedLinks={[
        { title: 'Horse Weight Calculator', href: '/tools/horse-weight-calculator', category: 'Tools' },
        { title: 'Horse Cost of Ownership Calculator', href: '/tools/horse-cost-calculator', category: 'Tools' },
        { title: 'Body Condition Score (Henneke)', href: '/tools/body-condition-score', category: 'Tools' },
        { title: 'Stall Bedding Calculator', href: '/tools/stall-bedding-calculator', category: 'Tools' },
        { title: 'Horse Gestation Calculator', href: '/tools/horse-gestation-calculator', category: 'Tools' },
        { title: 'Forage Basics', href: '/nutrition/forage-basics' },
      ]}
      heroExtra={
        <div id="calculator" className="mb-4 [&_.text-brand-primary]:!text-brand-dark">
          <Calculator />
        </div>
      }
      hero={{
        title: 'Horse Feed & Hay Calculator',
        subtitle:
          'Estimate how much hay and feed a horse needs each day from bodyweight, workload, and keeper type — forage-first, using Merck’s 1.5–2% forage floor and 2.5–3% maximal intake. Workload splits are planning figures.',
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
      schema={[howToSchema, articleSchema]}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The calculator', href: '#calculator' },
              { label: 'Shop a barn feed kit', href: '#shop' },
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
              { label: 'Cost of Ownership Calculator', href: '/tools/horse-cost-calculator' },
              { label: 'Stall Bedding Calculator', href: '/tools/stall-bedding-calculator' },
              { label: 'Body Condition Score', href: '/tools/body-condition-score' },
              { label: 'Hay Types', href: '/nutrition/hay-types' },
              { label: 'Ration Balancers', href: '/nutrition/ration-balancers' },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="tool" variant="sidebar" />

        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline
          siteName="Horses.com Editorial"
          publishedAt="2026-06-11"
          updatedAt="2026-09-03"
          reviewedBy="Editorial team"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />
        <div className="mb-8">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the hay notes
          </p>

        </div>

        <p>
          <strong>The quick answer:</strong> Merck, citing NRC 2007, puts forage at least at{' '}
          <strong>1.5–2% of body weight</strong> in dry matter per day, and maximal intake at{' '}
          <strong>2.5–3%</strong>. For a <strong>1,000 lb (450 kg) horse</strong>, 1.5% is about{' '}
          <strong>15 lb of dry matter</strong> (about 17 lb of hay as-fed if you use the planning
          88–90% hay conversion). Workload splits on this page are planning figures inside that
          envelope. Build the ration on forage and add concentrates only to fill the gap.
        </p>

        <h2>The calculator</h2>
        <p>
          Enter the horse&rsquo;s bodyweight, choose its workload and keeper type, and the calculator
          returns a total daily dry-matter range plus a forage baseline. Don&rsquo;t have a weight?
          Estimate it first with the{' '}
          <Link href="/tools/horse-weight-calculator">horse weight calculator</Link>.
        </p>
        <JourneyNext
          siteId="horses-com"
          nextHref="/nutrition/forage-basics"
          nextLabel="Read forage basics before you buy hay"
          nextBlurb="The pound range is a starting target. Forage basics is why the ration starts with hay, and hay types is the next page when you are choosing a cutting. The hop is the timothy-hay search already on this page."
          resourceHref="/go/amazon-brand/timothy+hay+horse?s=tools-horse-feed-calculator"
          resourceLabel="Browse timothy hay for horses on Amazon →"
        />

        {/* Money path — live amazon-brand search hops (timothy hay / ration
            balancer / feed scoop / slow-feeder net / salt lick). ShopCtas
            hides empty Chewy; never href="#" or PLACEHOLDER. Scoop and
            slow-feeder queries match horse-cost-calculator / forage-basics. */}
        <HopDisclosure siteId="horses-com" href={["/go/amazon-brand/timothy+hay+horse?s=tools-horse-feed-calculator", "/go/amazon-brand/horse+ration+balancer?s=tools-horse-feed-calculator", "/go/amazon-brand/horse+feed+scoop+scale?s=tools-horse-feed-calculator", "/go/amazon-brand/slow+feeder+hay+net+horse?s=tools-horse-feed-calculator", "/go/amazon-brand/equine+salt+lick?s=tools-horse-feed-calculator"]} />
        <div id="shop" className="mb-8 rounded-xl border border-brand-border bg-brand-surface p-5">
          <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Shop a barn feed kit
          </div>
          
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/timothy+hay+horse?s=tools-horse-feed-calculator"
              amazonLabel="Browse timothy hay for horses on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/horse+ration+balancer?s=tools-horse-feed-calculator"
              amazonLabel="Browse horse ration balancers on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/horse+feed+scoop+scale?s=tools-horse-feed-calculator"
              amazonLabel="Browse horse feed scoops and scales on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/slow+feeder+hay+net+horse?s=tools-horse-feed-calculator"
              amazonLabel="Browse slow-feeder hay nets on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/equine+salt+lick?s=tools-horse-feed-calculator"
              amazonLabel="Browse equine salt licks on Amazon →"
            />
          </div>
        </div>

        <h2 id="math">The math</h2>
        <ul>
          <li>
            <strong>Total daily dry matter</strong> = bodyweight &times; intake&nbsp;%. Forage floor
            1.5–2% and maximal intake 2.5–3% are Merck’s reading of NRC 2007. Other workload percents
            are planning figures.
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
                'Merck Veterinary Manual — Nutritional Requirements of Horses. Forage at least 1.5–2% of body weight (dry matter); maximal daily intake estimated at 2.5–3% of body weight. Adapted from Nutrient Requirements of Horses, 6th ed., National Research Council, 2007.',
              publisher: 'Merck Veterinary Manual',
              url: 'https://www.merckvetmanual.com/management-and-nutrition/nutrition-horses/nutritional-requirements-of-horses',
            },
            {
              label:
                'Harris, P. A., et al. (2017). Review: Feeding conserved forage to horses — recent advances and recommendations. Animal, 11(6), 958–967.',
              publisher: 'Animal',
            },
          ]}
        />
        <p className="text-sm text-brand-text-mid">
          Merck’s page, which adapts the 2007 NRC horse requirements, is the source for the 1.5–2%
          forage floor and the 2.5–3% maximal intake. Workload splits and the keeper shift are
          planning figures inside that envelope. The output is a husbandry estimate, not a veterinary diet.
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

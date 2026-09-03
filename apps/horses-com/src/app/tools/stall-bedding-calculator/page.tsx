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
  AffiliateDisclosure,
  ShopCtas,
} from '@carloOS/ui'
import Calculator from './Calculator'

const URL = 'https://horses.com/tools/stall-bedding-calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Stall Bedding Calculator — Bags of Shavings | Horses.com',
  description:
    'How many bags of shavings for a horse stall? Enter length, width, and depth to get cubic feet plus a bag or bale count for pine shavings, pellets, or straw.',
  path: '/tools/stall-bedding-calculator',
})

const howToSchema = buildHowToSchema({
  name: 'How to calculate how much stall bedding a horse needs',
  description:
    'Measure the stall length and width in feet and the bed depth in inches, multiply length × width × (depth ÷ 12) to get cubic feet, then divide by the expanded volume of a typical bag or bale.',
  url: URL,
  totalTime: 'PT3M',
  steps: [
    {
      name: 'Measure the stall footprint',
      text: 'Measure the inside length and width of the stall in feet. A common US box stall is 12 × 12 feet; ponies may use 10 × 10, and drafts often need 14 × 14 or larger.',
    },
    {
      name: 'Choose a bed depth',
      text: 'Pick a depth in inches. Two to three inches over rubber mats is a light daily bed; four to six inches is a standard full bed; eight to ten inches is a deep winter or extra-cushion bed.',
    },
    {
      name: 'Calculate volume',
      text: 'Volume in cubic feet equals stall length in feet × stall width in feet × (bed depth in inches ÷ 12). Multiply by the number of stalls if you are bedding a barn aisle.',
    },
    {
      name: 'Convert volume to bags or bales',
      text: 'Divide cubic feet by a typical expanded yield: about 8 cubic feet per compressed pine-shavings or wood-pellet bag, or about 12 cubic feet per small square straw bale. Round up. Plan on roughly 15% of that volume each week to replace what you pick out.',
    },
    {
      name: 'Check the bag and skip black walnut',
      text: 'Treat the bag count as a shopping estimate — brands fluff differently. Never use black-walnut shavings. For airway-sensitive horses, prefer dust-extracted shavings, pellets, or mats.',
    },
  ],
})

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Stall Bedding Calculator',
  url: URL,
  applicationCategory: 'UtilitiesApplication',
  applicationSubCategory: 'EquineHusbandryCalculator',
  operatingSystem: 'Web Browser (any HTML5-capable device)',
  description:
    'Free stall bedding estimator. Inputs: stall length and width in feet, bed depth in inches, stall count, and bedding type (pine shavings, wood pellets, or straw). Outputs: cubic feet plus a planning bag or bale count for the initial bed and a weekly restock.',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Volume = length × width × (depth ÷ 12)',
    'Pine shavings, wood pellets, and straw with typical expanded yields',
    'Initial bed plus a ~15% weekly restock estimate',
    'Multi-stall barn aisle multiplier',
    'Black-walnut shavings warning',
  ],
  publisher: { '@type': 'Organization', name: 'Horses.com Editorial', url: 'https://horses.com' },
}

const FAQS = [
  {
    question: 'How many bags of shavings do I need for a 12×12 stall?',
    answer:
      'A 12 × 12 foot stall bedded 6 inches deep is 72 cubic feet (12 × 12 × 6 ÷ 12). At a typical expanded yield of about 8 cubic feet per compressed pine-shavings bag, that is 9 bags for the initial bed. A lighter 4-inch bed is 48 cubic feet, or 6 bags. Plan on about 1–2 bags a week after daily pick-out to replace the wet spots. Bag fluff varies by brand, so treat the number as a shopping estimate and check the bag label.',
  },
  {
    question: 'How deep should stall bedding be?',
    answer:
      'Two to three inches is enough over interlocking rubber mats for a horse that is out most of the day. Four to six inches is a standard full bed on a bare or lightly matted floor. Eight to ten inches is a deep winter bed or extra cushion for a horse that lives in. Deeper is not automatically better: a banked wall helps, but a soggy deep bed holds ammonia and dust. Depth is a management choice, not a clinical prescription — ask your veterinarian if the horse has heaves, laminitis, or a recumbency problem.',
  },
  {
    question: 'Are wood pellets or pine shavings better?',
    answer:
      'Both work. Pine shavings are the usual full-bed choice and are easy to pick. Wood pellets start denser in the bag, expand after watering to a similar cubic-foot yield, and are often lower-dust once they fluff — a common pick for stalled horses with airway sensitivity. Straw is cheaper by volume and warmer, but dustier and harder to pick clean. Never use black-walnut shavings; they are a documented laminitis trigger. The calculator swaps the yield constant when you change type; it does not rank brands.',
  },
  {
    question: 'Do rubber stall mats reduce how much bedding I need?',
    answer:
      'Yes. A well-fitted mat floor lets you run a 2–3 inch absorbent layer instead of a 6–8 inch full bed, which cuts the initial bag count and the weekly restock. Mats also protect the horse from a cold or abrasive floor. They do not replace bedding: you still need an absorbent layer for urine. Size the mats to the stall so edges cannot curl, then enter the shallower depth in the calculator.',
  },
  {
    question: 'Why does this calculator say “estimate” and not give an exact bag count?',
    answer:
      'Compressed bags expand differently by brand, moisture, and how you bank the walls. The 8 cubic-foot (shavings/pellets) and 12 cubic-foot (straw bale) yields are typical planning constants used by barns, not a guarantee printed on every bag. Use the number to buy the first load, then adjust after a week of pick-out. The weekly restock figure assumes you remove about 15% of the bed — wet spots and manure — not a full strip.',
  },
]

export default function StallBeddingCalculatorPage() {
  return (
    <ArticleLayout
      siteId="horses-com"
      relatedLinks={[
        { title: 'Horse Cost of Ownership Calculator', href: '/tools/horse-cost-calculator', category: 'Tools' },
        { title: 'Is This a Horse Emergency?', href: '/tools/is-this-a-horse-emergency', category: 'Tools' },
        { title: 'Horse Feed & Hay Calculator', href: '/tools/horse-feed-calculator', category: 'Tools' },
        { title: 'Turnout vs Stabling', href: '/care/turnout-vs-stabling', category: 'Care' },
        { title: 'Heaves (Equine Asthma)', href: '/health/heaves', category: 'Health' },
      ]}
      hero={{
        title: 'Stall Bedding Calculator',
        subtitle:
          'How many bags of shavings for a stall? Enter length, width, and depth to get cubic feet plus a bag or bale count for pine shavings, wood pellets, or straw.',
        category: 'Calculators',
        categoryHref: '/tools',
        publishedAt: 'September 2026',
        readTime: '4 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Stall Bedding Calculator' },
      ]}
      schema={howToSchema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The calculator', href: '#calculator' },
              { label: 'The formula', href: '#formula' },
              { label: 'How it works', href: '#methodology' },
              { label: 'Sources', href: '#sources' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Horse tools & stall care"
            links={[
              { label: 'Cost of Ownership Calculator', href: '/tools/horse-cost-calculator' },
              { label: 'Is This a Horse Emergency?', href: '/tools/is-this-a-horse-emergency' },
              { label: 'Feed & Hay Calculator', href: '/tools/horse-feed-calculator' },
              { label: 'Turnout vs Stabling', href: '/care/turnout-vs-stabling' },
              { label: 'Heaves (Equine Asthma)', href: '/health/heaves' },
              { label: 'Toxic Plants (black walnut)', href: '/nutrition/toxic-plants' },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="tool" variant="sidebar" />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline
          siteName="Horses.com Editorial"
          publishedAt="2026-09-03"
          updatedAt="2026-09-03"
          reviewedBy="Editorial team"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />

        <div className="mb-8">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the bag count
          </p>
          <h3 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Stall bedding shopping list
          </h3>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the cubic-foot volume and bag count — initial bed plus the weekly restock — so
            you can order shavings, pellets, or mats without re-running the math. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="horses-com"
            title="Stall bedding shopping list"
            subtitle="Email the bag count — cubic feet, initial bed, and weekly restock so you can order without re-running the math. No spam."
            ctaText="Email the bag count"
            source="tools-stall-bedding-calculator-under-hero"
          />
        </div>

        <p>
          <strong>The quick answer:</strong> stall bedding volume in cubic feet equals stall
          length (ft) × stall width (ft) × (bed depth in inches ÷ 12). A{' '}
          <strong>12 × 12 foot stall bedded 6 inches deep</strong> is{' '}
          <strong>72 cubic feet</strong>. At a typical expanded yield of about 8 cubic feet per
          compressed pine-shavings bag, that is <strong>9 bags</strong> for the initial bed, then
          about 1–2 bags a week after daily pick-out. Use 8 cubic feet per wood-pellet bag and
          about 12 cubic feet per small square straw bale. Never use black-walnut shavings.
        </p>

        <h2 id="calculator">The calculator</h2>
        <p>
          Enter the stall footprint, the bed depth, how many stalls you are bedding, and the
          bedding type. The calculator returns cubic feet, a planning bag or bale count for the
          initial bed, and a weekly restock estimate. Switching the type swaps the yield
          constant.
        </p>
        <Calculator />

        <AffiliateDisclosure variant="inline" siteId="horses-com" />
        <div className="mb-8 rounded-xl border border-brand-border bg-brand-surface p-5">
          <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Shop stall bedding
          </div>
          <p className="mb-4 text-sm leading-relaxed text-brand-text-mid">
            Pine shavings are the usual full-bed bag. Wood pellets fluff after watering and are
            often the lower-dust pick. Rubber stall mats let you run a shallower absorbent layer.
            A stall fork is what turns the weekly restock into a 15-minute pick-out instead of a
            full strip. Horses.com earns a commission on qualifying purchases at no extra cost to
            you.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/pine+shavings+horse+stall+bedding?s=tools-stall-bedding-calculator"
              amazonLabel="Shop pine shavings on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/wood+pellet+horse+stall+bedding?s=tools-stall-bedding-calculator"
              amazonLabel="Shop wood pellet bedding on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/horse+stall+rubber+mats?s=tools-stall-bedding-calculator"
              amazonLabel="Shop rubber stall mats on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/horse+stall+fork+manure+picker?s=tools-stall-bedding-calculator"
              amazonLabel="Shop stall forks on Amazon →"
            />
          </div>
        </div>

        <h2 id="formula">The formula</h2>
        <p>Stall bedding is a box of material on the stall floor:</p>
        <ul>
          <li>
            <strong>Volume (cu ft)</strong> = stall length (ft) × stall width (ft) × (bed depth
            in inches ÷ 12)
          </li>
          <li>
            <strong>Bags or bales</strong> = volume ÷ expanded cubic feet per unit, rounded up
          </li>
          <li>
            <strong>Planning yields:</strong> ~<strong>8 cu ft</strong> per compressed pine-shavings
            or wood-pellet bag; ~<strong>12 cu ft</strong> per small square straw bale
          </li>
          <li>
            <strong>Weekly restock:</strong> about <strong>15%</strong> of the initial volume after
            daily pick-out of wet spots and manure
          </li>
        </ul>
        <p>
          <strong>Worked example.</strong> A 12 × 12 stall at 6 inches of pine shavings:{' '}
          12 × 12 × (6 ÷ 12) = <strong>72 cu ft</strong>. 72 ÷ 8 = <strong>9 bags</strong> to set
          the bed. Fifteen percent of 72 is 10.8 cu ft, so the weekly restock is about{' '}
          <strong>2 bags</strong>. The same stall at 3 inches over mats is 36 cu ft — 5 bags to
          start, about 1 bag a week.
        </p>

        <h2 id="methodology">How it works &amp; limits</h2>
        <p>
          The cube formula is geometry, not a brand claim. The yield constants are typical
          expanded volumes used as barn planning numbers — compressed bags fluff differently,
          and a banked wall uses more than a flat bed. Use the output to buy the first load,
          then adjust after a week of pick-out.
        </p>
        <p>The estimate does <strong>not</strong>:</p>
        <ul>
          <li>Replace the cubic-foot figure printed on a specific bag</li>
          <li>Tell you which brand to buy, or rank products by commission</li>
          <li>Account for a horse that paws, banks, or lives in 24 hours a day versus one that is out most of the day</li>
          <li>Diagnose airway disease — pair dusty-bedding decisions with the{' '}
            <Link href="/health/heaves">heaves (equine asthma)</Link> reference and your veterinarian
          </li>
        </ul>
        <p>
          Two husbandry rules sit next to the math. First, never bed on{' '}
          <Link href="/nutrition/toxic-plants">black-walnut shavings</Link> — contact with{' '}
          <em>Juglans nigra</em> bedding is a documented laminitis trigger. Second, stalled horses
          with heaves or other airway disease usually do better on dust-extracted shavings,
          pellets, or mats than on dusty straw; ventilation matters as much as the bag. Bedding
          is also a recurring cost line — carry the bag count into the{' '}
          <Link href="/tools/horse-cost-calculator">horse cost of ownership calculator</Link> and
          weigh stall time against{' '}
          <Link href="/care/turnout-vs-stabling">turnout versus stabling</Link>.
        </p>

        <h2 id="sources">Sources</h2>
        <ArticleSourcesList
          sources={[
            {
              label:
                'University of Minnesota Extension — Horse stall and stable management (bedding depth, pick-out, and absorbent layers).',
              url: 'https://extension.umn.edu/horse-care-and-management',
              publisher: 'UMN Extension',
            },
            {
              label:
                'Penn State Extension — Horse stable bedding materials and manure handling (shavings, pellets, straw as planning options).',
              publisher: 'Penn State Extension',
            },
            {
              label:
                'University of Kentucky / equine extension references on black-walnut (Juglans nigra) shavings as a laminitis trigger.',
              publisher: 'University of Kentucky',
            },
            {
              label:
                'Horses.com — Heaves (equine asthma) and turnout-versus-stabling pages: low-dust bedding and ventilation as management, not a diagnosis.',
              url: 'https://horses.com/health/heaves',
              publisher: 'Horses.com Editorial',
            },
          ]}
        />
        <p className="text-sm text-brand-text-mid">
          Horses.com Editorial cites these as the published basis for stall-volume math, typical
          bag/bale yields, and the black-walnut warning. The calculator output is a husbandry
          shopping estimate; no veterinary diagnosis is implied.
        </p>

        <h2 id="faq">FAQ</h2>
        <FAQAccordion
          items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
          includeSchema
          allowMultiple
        />

        <p className="mt-8 text-sm">
          Next: fold bedding into the monthly budget with the{' '}
          <Link href="/tools/horse-cost-calculator">horse cost of ownership calculator</Link>,
          set a forage target with the{' '}
          <Link href="/tools/horse-feed-calculator">horse feed &amp; hay calculator</Link>, and
          read{' '}
          <Link href="/care/turnout-vs-stabling">turnout versus stabling</Link> before you default
          to a stalled life. If a stalled horse looks painful or off, the{' '}
          <Link href="/tools/is-this-a-horse-emergency">horse emergency sign-list</Link> is a
          conservative triage aid — not a diagnosis.
        </p>
      </div>
    </ArticleLayout>
  )
}

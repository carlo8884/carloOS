import type { Metadata } from 'next'
import {
  buildMetadata,
  buildHowToSchema,
  ArticleLayout,
  ArticleByline,
  FAQAccordion,
  EmailCapture,
  TableOfContents,
  RelatedLinks,
  CrossPortfolioCard,
  AffiliateDisclosure,
  ShopCtas,
} from '@carloOS/ui'
import Calculator from './Calculator'

const URL = 'https://horses.com/tools/horse-blanket-size-calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Horse Blanket Size Calculator — What Size Do I Need? | Horses.com',
  description:
    'What size blanket does your horse need? Measure chest to tail and get the standard US blanket size plus the approximate EU/cm equivalent, with fit tips.',
  path: '/tools/horse-blanket-size-calculator',
})

const howToSchema = buildHowToSchema({
  name: 'How to measure a horse for a blanket',
  description:
    'Measure from the centre of the chest to the point of the buttock in inches to find the standard US horse-blanket size.',
  url: URL,
  steps: [
    { name: 'Stand the horse square', text: 'Have the horse stand square on level ground so the measurement is not distorted.' },
    { name: 'Measure chest to tail', text: 'With a soft tape, measure in a straight line from the centre of the chest, along the side, to the point of the buttock (the edge of the tail).' },
    { name: 'Read the size in inches', text: 'That measurement in inches is the US blanket size; round to the nearest standard 3-inch size (e.g. 75, 78, 81).' },
    { name: 'Round up if between sizes', text: 'If the horse falls between sizes or is broad and heavily muscled, choose the larger size so the blanket does not rub at the shoulders.' },
  ],
})

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Horse Blanket Size Calculator',
  url: URL,
  applicationCategory: 'UtilitiesApplication',
  applicationSubCategory: 'EquineCalculator',
  operatingSystem: 'Web Browser (any HTML5-capable device)',
  description:
    'Free horse blanket size calculator. Enter the chest-to-tail body measurement in inches or centimetres to get the standard US/UK blanket size (rounded to the nearest 3-inch size) and the approximate EU/cm equivalent, with fit guidance.',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Inputs: chest-to-tail measurement in inches or centimetres',
    'US/UK blanket size rounded to the standard 3-inch sizing',
    'Approximate EU/cm equivalent from the standard conversion',
    'Round-up-if-between-sizes fit guidance and a size category',
  ],
  publisher: { '@type': 'Organization', name: 'Horses.com Editorial', url: 'https://horses.com' },
}

const FAQS = [
  {
    question: 'How do I measure my horse for a blanket?',
    answer:
      'Stand the horse square and use a soft tape to measure in a straight line from the centre of the chest, along the side of the body, to the point of the buttock (the edge of the tail). That measurement in inches is the horse’s US blanket size. A helper makes it far easier to keep the tape straight and level.',
  },
  {
    question: 'What size blanket does my horse need?',
    answer:
      'Your chest-to-tail measurement, rounded to the nearest standard 3-inch size, is the blanket size — US sizes run from about 48 inches (small ponies) to 90 inches (drafts), in 3-inch steps. Most full-size riding horses land between 75 and 81 inches. The calculator does the rounding and also gives the size category.',
  },
  {
    question: 'What if my horse is between two blanket sizes?',
    answer:
      'Size up. A blanket slightly too large is far better than one that is too small: an undersized blanket pulls across the chest and rubs the shoulders, causing sores and rubbed manes, while a slightly large one simply settles a little further back. Broad, heavily muscled, or warmblood-type horses often need to size up for the same chest-to-tail length.',
  },
  {
    question: 'How are US and EU horse blanket sizes different?',
    answer:
      'US/UK blankets are sized by the body measurement in inches (e.g. a 78-inch blanket). European blankets are sized in centimetres of back length, which is a different measurement, so the conversion is approximate — a 78-inch US blanket is roughly 155 cm. Cuts also vary between brands, so always check the manufacturer’s own size chart, especially when buying across sizing systems.',
  },
  {
    question: 'Does blanket weight matter as well as size?',
    answer:
      'Yes — size and weight are two separate decisions. Size is the fit; weight (the grams of fill) is the warmth, from uninsulated sheets to heavyweight blankets. Choose the size from your measurement, then choose the weight from your climate, whether the horse is clipped, and how much shelter it has.',
  },
]

export default function HorseBlanketSizeCalculatorPage() {
  return (
    <ArticleLayout
      siteId="horses-com"
      relatedLinks={[
        { title: 'Blanket Weights Explained', href: '/tack/blanket-weights', category: 'Tack' },
        { title: 'Best Winter Horse Blankets', href: '/reviews/best-winter-horse-blankets', category: 'Reviews' },
        { title: 'Horse Weight Calculator', href: '/tools/horse-weight-calculator', category: 'Tools' },
        { title: 'Tack Guide', href: '/tack', category: 'Tack' },
      ]}
      hero={{
        title: 'Horse Blanket Size Calculator',
        subtitle:
          'What size blanket does your horse need? Measure from the chest to the tail and get the standard US/UK blanket size, the approximate EU/cm equivalent, and a fit tip — because US blanket sizing simply is that body measurement in inches.',
        category: 'Calculators',
        categoryHref: '/tools',
        publishedAt: 'June 2026',
        readTime: '3 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Horse Blanket Size Calculator' },
      ]}
      schema={howToSchema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The calculator', href: '#calculator' },
              { label: 'Shop a blanket-fit kit', href: '#shop' },
              { label: 'How to measure', href: '#measure' },
              { label: 'Size vs. weight', href: '#weight' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Blanketing"
            links={[
              { label: 'Blanket Weights Explained', href: '/tack/blanket-weights' },
              { label: 'Best Winter Horse Blankets', href: '/reviews/best-winter-horse-blankets' },
              { label: 'Tack Guide', href: '/tack' },
              { label: 'Horse Weight Calculator', href: '/tools/horse-weight-calculator' },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="tool" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Horses.com owner letter"
            subtitle="Horse-care references and tool updates."
            source="blanket-size-calculator"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Horses.com Editorial" publishedAt="2026-06-14" updatedAt="2026-09-03" reviewedBy="Editorial team" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />

        {/* Under-hero capture — source must end in under-hero so it always renders. */}
        <div className="mb-8">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the fit notes
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Horse blanket fit checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the chest-to-tail measuring steps, the round-up-if-between-sizes
            rule, and winter blanketing tips so you can fit without re-running the
            calculator. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="horses-com"
            title="Horse blanket fit checklist"
            subtitle="Email the blanket fit checklist and winter blanketing tips. No spam."
            ctaText="Email my blanket fit checklist"
            source="tools-horse-blanket-size-calculator-under-hero"
          />
        </div>

        <p>
          <strong>The quick answer:</strong> US horse-blanket sizing <em>is</em> the body measurement. Measure in a
          straight line from the centre of the chest, along the side, to the point of the buttock (the edge of the
          tail), in inches — round that to the nearest standard 3-inch size and you have the blanket size. A horse that
          measures 78 inches takes a 78-inch blanket (about 155 cm in European sizing).
        </p>

        <h2 id="calculator">The calculator</h2>
        <p>
          Enter your chest-to-tail measurement in inches or centimetres. The calculator rounds to the nearest standard
          US/UK size and gives the approximate EU/cm equivalent and the size category.
        </p>
        <Calculator />

        {/* Money path — live amazon-brand search hops (winter blanket / turnout /
            stable / tape / cooler). ShopCtas hides empty Chewy; never href="#"
            or PLACEHOLDER. Measuring-tape query matches horse-weight-calculator. */}
        <AffiliateDisclosure variant="inline" siteId="horses-com" />
        <div id="shop" className="mb-8 rounded-xl border border-brand-border bg-brand-surface p-5">
          <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Shop a blanket-fit kit
          </div>
          <p className="mb-4 text-sm leading-relaxed text-brand-text-mid">
            These Amazon category searches match the size you just calculated — a
            winter horse blanket, a turnout sheet, a stable blanket, a soft
            measuring tape for the chest-to-tail check (same query as the{' '}
            <a href="/tools/horse-weight-calculator" className="text-brand-primary no-underline hover:underline">
              horse weight calculator
            </a>
            ), and a fleece cooler for after work. Pair the size with fill weight
            on the{' '}
            <a href="/tack/blanket-weights" className="text-brand-primary no-underline hover:underline">
              blanket weights guide
            </a>{' '}
            and the{' '}
            <a href="/reviews/best-winter-horse-blankets" className="text-brand-primary no-underline hover:underline">
              winter blanket reviews
            </a>
            . They are not a ranked product list and not invented inventory.
            Horses.com earns a commission on qualifying purchases at no extra
            cost to you. Empty Chewy buttons stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/winter+horse+blanket?s=tools-horse-blanket-size-calculator"
              amazonLabel="Shop winter horse blankets on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/horse+turnout+sheet?s=tools-horse-blanket-size-calculator"
              amazonLabel="Shop turnout sheets on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/horse+stable+blanket?s=tools-horse-blanket-size-calculator"
              amazonLabel="Shop stable blankets on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/horse+measuring+tape?s=tools-horse-blanket-size-calculator"
              amazonLabel="Shop horse measuring tapes on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/horse+fleece+cooler?s=tools-horse-blanket-size-calculator"
              amazonLabel="Shop fleece coolers on Amazon →"
            />
          </div>
        </div>

        <h2 id="measure">How to measure</h2>
        <p>
          Stand the horse square on level ground and use a soft measuring tape (a piece of string you then measure
          against a tape works too). Start at the centre of the chest, run the tape along the side of the body keeping
          it level, and finish at the point of the buttock — the furthest point of the hindquarter at the base of the
          tail. A helper to hold the start point keeps the line straight. If the number lands between two standard
          sizes, or your horse is broad through the shoulder, choose the larger size.
        </p>

        <h2 id="weight">Size vs. weight</h2>
        <p>
          Fit and warmth are two separate choices. This tool gives you the <em>size</em>; the{' '}
          <a href="/tack/blanket-weights">blanket weights guide</a> covers the <em>fill weight</em> — sheet,
          lightweight, medium, or heavyweight — which you choose for your climate, whether the horse is clipped, and how
          much shelter it has. Our <a href="/reviews/best-winter-horse-blankets">winter blanket reviews</a> pair the two
          together for specific picks.
        </p>

        <h2 id="faq">Frequently asked questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}

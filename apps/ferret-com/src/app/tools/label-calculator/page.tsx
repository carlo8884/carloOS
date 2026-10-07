import { HopDisclosure } from '../../../components/HopDisclosure'
import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArticleLayout,
  FAQAccordion,
  RelatedLinks,
  buildArticleSchema,
  buildHowToSchema,
  buildMetadata,
} from '@carloOS/ui'
import LabelCalculator from './Calculator'

const URL = 'https://ferret.com/tools/label-calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Food Label Calculator | Ferret.com',
  description:
    'Convert a ferret kibble label to dry-matter protein, fat, and carbohydrate by difference, then match the kibble review’s cards.',
  path: '/tools/label-calculator',
})

const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Ferret Food Label Calculator',
  description:
    'Dry-matter protein, fat, and carbohydrate by difference from the guaranteed analysis, using the label page’s conversion.',
  url: URL,
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
})

const howToSchema = buildHowToSchema({
  name: 'How to read a ferret food label on a dry-matter basis',
  description: 'Subtract moisture from 100, then convert each nutrient. Carbohydrate is what remains after protein, fat, fiber, moisture, and ash.',
  url: URL,
  steps: [
    { name: 'Enter the guaranteed analysis', text: 'Use crude protein, crude fat, crude fiber, and moisture as printed.' },
    { name: 'Enter ash or leave it blank', text: 'If ash is missing, the label page’s 6–8% note is applied at the midpoint, 7%.' },
    { name: 'Read carbohydrate on a dry-matter basis', text: 'Single digits match the Wysong card. Mid teens, 13 through 16, match the Marshall card. Other results stay on the review.' },
  ],
})

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Ferret Food Label Calculator',
  url: URL,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  isAccessibleForFree: true,
  publisher: { '@type': 'Organization', name: 'Ferret.com Editorial', url: 'https://ferret.com' },
}

const FAQS = [
  {
    question: 'How is carbohydrate by difference calculated?',
    answer:
      'The label page says to add protein, fat, fiber, moisture, and ash, then subtract from 100. Dry-matter percentage is 100 minus moisture. A dry-matter nutrient is the as-fed number divided by that dry-matter percentage, times 100. The page’s own example is 36% protein at 10% moisture, which is 40% protein on a dry-matter basis. If ash is missing, this tool uses 7%, the midpoint of the page’s 6–8% note.',
  },
  {
    question: 'Which kibble card does the result use?',
    answer:
      'The kibble review prints Wysong Epigen 90 as carbohydrate in the single digits and Marshall Premium as mid teens. Under 10% dry-matter carbohydrate points at Wysong. From 13% up to but not including 17% points at Marshall. Any other carbohydrate stays on the review, because neither card prints that figure. The tool does not test either food.',
  },
  {
    question: 'Does a passing label mean the food is the reviewed bag?',
    answer:
      'No. Similar carbohydrate does not make an unknown label into Wysong or Marshall. The link is the card whose printed carbohydrate line is the closer description. Ingredient order, starch, and whether you can buy it are still on the review.',
  },
]

export default function FerretLabelPage() {
  return (
    <ArticleLayout
      siteId="ferret-com"
      hero={{
        title: 'Ferret Food Label Calculator',
        subtitle: 'Dry-matter protein, fat, and carbohydrate by difference from the guaranteed analysis.',
        category: 'Tools',
        categoryHref: '/tools',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Ferret Food Label Calculator' },
      ]}
      schema={[articleSchema, howToSchema]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reading food labels', href: '/diet/reading-food-labels' },
            { label: 'Ferret kibble review', href: '/diet/best-ferret-kibble' },
            { label: 'How we pick', href: '/how-we-pick' },
          ]}
        />
      }
    >
      <div className="carloOS-article">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
        <p>
          The <Link href="/diet/reading-food-labels">label guide</Link> explains dry-matter conversion and
          carbohydrate by difference. Guaranteed-analysis numbers are as-fed, so a moist food looks lower in protein
          than a kibble even when the dry matter is similar. This calculator does that arithmetic and then compares the
          carbohydrate result with the two cards on the{' '}
          <Link href="/diet/best-ferret-kibble">kibble review</Link>: single digits for Wysong Epigen 90, and mid teens
          for Marshall Premium.
        </p>
        <h2 id="calculator">Calculator</h2>
        <LabelCalculator />
        <div id="kibble-next" className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
          <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            Next step
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            The kibble review is the matching guide. Its single-digit card is Wysong Epigen 90, and the price check opens that food at Wysong. The calculator did not test that food. A result outside the single digits stays on the review.
          </p>
          <div className="flex flex-col gap-3">
            <Link
              href="/diet/best-ferret-kibble"
              className="inline-block bg-brand-primary text-white font-semibold px-5 py-2.5 rounded-md no-underline hover:bg-brand-primary-dark"
            >
              Read the ferret kibble review →
            </Link>
            <HopDisclosure siteId="ferret-com" href="/go/wysong/epigen-90?s=tools-label-calculator" />
            <a
              id="wysong-hop"
              href="/go/wysong/epigen-90?s=tools-label-calculator"
              rel="sponsored noopener"
              className="inline-block bg-brand-dark text-white font-semibold px-5 py-2.5 rounded-md no-underline"
            >
              Check price of Wysong Epigen 90 at Wysong
            </a>
          </div>
        </div>
        <h2>Worked conversion</h2>
        <p>
          The label page’s example is 36% crude protein and 10% moisture. Dry matter is 90%. Dry-matter protein is
          36 divided by 90, times 100, which is 40%. Carbohydrate uses the same conversion after you subtract protein,
          fat, fiber, moisture, and ash from 100. Ash is often missing. The page says ash is roughly 6 to 8% if it is
          not listed, so a blank ash field uses 7 and says so on the result. Enter the printed ash when you have it.
        </p>
        <p>
          A label whose dry-matter carbohydrate is in the single digits is not automatically the Wysong bag, and a
          mid-teens result is not automatically Marshall. Those phrases are how the review describes the cards. The
          closing link follows the phrase and leaves ingredient quality on the review. The result is label arithmetic, not a feeding trial.
          The method for the product links is on <Link href="/how-we-pick">How we pick</Link>.
        </p>
        <h2 id="faq">FAQ</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}

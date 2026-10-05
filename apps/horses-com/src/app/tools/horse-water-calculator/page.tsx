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
import HorseWaterCalculator from './Calculator'

const URL = 'https://horses.com/tools/horse-water-calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Horse Water Intake Calculator | Horses.com',
  description:
    'Scale the water page’s 5–10 gallon idle-adult band by body weight: half a gallon to one gallon per 100 pounds.',
  path: '/tools/horse-water-calculator',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'Horse Water Intake Calculator',
  description:
    'A temperate idle drinking band from body weight, set so a 1,000-pound horse matches the 5–10 gallons on the water page.',
  url: URL,
  imageUrl: '',
  authorName: 'Horses.com Editorial',
})

const howToSchema = buildHowToSchema({
  name: 'How to estimate a horse’s temperate water band',
  description: 'Multiply body weight in hundreds of pounds by 0.5 and by 1.0 gallon.',
  url: URL,
  steps: [
    { name: 'Enter body weight in pounds', text: 'The band is half a gallon to one gallon per 100 pounds.' },
    { name: 'Read the temperate idle range', text: 'A 1,000-pound horse is 5–10 gallons, the figure on the water requirements page.' },
    { name: 'Choose the stall bucket only if water can freeze', text: 'Freezing does not raise the band. It switches the existing heated-bucket link for the flat-back bucket.' },
  ],
})

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Horse Water Intake Calculator',
  url: URL,
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  isAccessibleForFree: true,
  publisher: { '@type': 'Organization', name: 'Horses.com Editorial', url: 'https://horses.com' },
}

const FAQS = [
  {
    question: 'Where does the horse water formula come from?',
    answer:
      'The water requirements page says an average idle adult drinks roughly 5 to 10 gallons, about 20 to 40 liters, in temperate conditions, and that a larger body raises the need. This tool uses half a gallon to one gallon per 100 pounds so a 1,000-pound horse lands on that 5-to-10-gallon line. It does not add a separate multiplier for heat, work, lactation, or lush grass, because the page describes those shifts without a second number.',
  },
  {
    question: 'Does freezing weather increase the gallons?',
    answer:
      'No. The water page and the winter water guide say icy water is when horses drink less, especially on dry hay. Checking the freeze box keeps the same band and points at the heated bucket those pages already use. Unchecked, the link is the flat-back bucket on the water page.',
  },
  {
    question: 'Is the band a ration to stop offering water?',
    answer:
      'No. The page’s instruction is free-choice water that is clean and available. The band is a planning range for an idle horse in temperate weather. A horse that stops drinking needs a veterinarian, not a lower target.',
  },
]

export default function HorseWaterPage() {
  return (
    <ArticleLayout
      siteId="horses-com"
      hero={{
        title: 'Horse Water Intake Calculator',
        subtitle: 'The water page’s 5–10 gallon idle band, scaled by body weight.',
        category: 'Tools',
        categoryHref: '/tools',
        publishedAt: 'October 2026',
        readTime: '5 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Horse Water Intake Calculator' },
      ]}
      schema={[articleSchema, howToSchema]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Water requirements', href: '/nutrition/water-requirements' },
            { label: 'Winter water guide', href: '/reviews/winter-water-unfrozen-guide' },
            { label: 'Hay calculator', href: '/tools/horse-feed-calculator' },
            { label: 'How we pick', href: '/how-we-pick' },
          ]}
        />
      }
    >
      <div className="carloOS-article">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
        <p>
          The <Link href="/nutrition/water-requirements">water requirements page</Link> puts an average idle adult at
          roughly 20 to 40 liters a day, about 5 to 10 gallons, in temperate conditions. It also says large body size
          raises the requirement, and that heat, work, dry forage, and lactation push intake up while lush grass can
          push it down. The hay calculator already covers forage. This one covers the drinking band the water page
          states, scaled so the 1,000-pound horse matches 5 to 10 gallons.
        </p>
        <h2 id="calculator">Calculator</h2>
        <HorseWaterCalculator />
        <h2>What the band is not</h2>
        <p>
          Half a gallon to one gallon per 100 pounds is the arithmetic that reproduces the page at about 1,000 pounds.
          A heavier horse gets a wider band in proportion. A lighter horse gets a narrower one. Liters on the result are
          the gallon figures times 3.785, so they will sit near the page’s 20-to-40-liter line at that average weight
          and will not match it exactly, because the page already calls 20 to 40 liters “about” 5 to 10 gallons.
        </p>
        <p>
          Do not withhold water to hit the low end. The page’s practical rule is free-choice water. The{' '}
          <Link href="/reviews/winter-water-unfrozen-guide">winter water guide</Link> is where icy buckets and dry hay
          are tied to impaction risk. The heated bucket and the flat-back bucket are the two searches already on the
          water page. Method for those product links is on <Link href="/how-we-pick">How we pick</Link>.
        </p>
        <h2 id="faq">FAQ</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}

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
    'Merck maintenance minimum is 5 L per 100 kg, about 0.60 gal per 100 lb. The upper gallon per 100 lb is a planning figure.',
  path: '/tools/horse-water-calculator',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'Horse Water Intake Calculator',
  description:
    'Low end is Merck’s 5 L per 100 kg maintenance minimum. The upper gallon per 100 lb is a planning figure.',
  url: URL,
  imageUrl: '',
  authorName: 'Horses.com Editorial',
})

const howToSchema = buildHowToSchema({
  name: 'How to estimate a horse’s temperate water band',
  description: 'Low end converts Merck’s 5 L per 100 kg. The upper gallon per 100 lb is a planning figure.',
  url: URL,
  steps: [
    { name: 'Enter body weight in pounds', text: 'The low end is about 0.60 gallon per 100 pounds, Merck’s 5 L per 100 kg minimum.' },
    { name: 'Read the band', text: 'A 1,000-pound horse is about 6 gallons at the Merck minimum and 10 gallons at the planning-figure upper bound.' },
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
      'How we calculate: Merck’s nutritional-requirements page states an average minimal maintenance requirement of 5 L per 100 kg per day for a sedentary adult horse in a thermoneutral environment. That is about 0.60 US gallon per 100 pounds, or about 6 gallons for a 1,000-pound horse. The upper bound of 1 gallon per 100 pounds is a planning figure, not that Merck sentence. Merck also says dry hay can almost double intake; this tool does not apply a second coefficient.',
  },
  {
    question: 'Does freezing weather increase the gallons?',
    answer:
      'No. The water page and the winter water guide say icy water is when horses drink less, especially on dry hay. Checking the freeze box keeps the same band and points at the heated bucket those pages use. Unchecked, the link is the flat-back bucket on the water page.',
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
      heroExtra={
        <div id="calculator" className="mb-4 [&_.text-brand-primary]:!text-brand-dark">
          <HorseWaterCalculator />
        </div>
      }
      hero={{
        title: 'Horse Water Intake Calculator',
        subtitle: 'Merck minimum is 5 L per 100 kg. The upper gallon per 100 lb is a planning figure.',
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
          How we calculate: the low end is the Merck Veterinary Manual maintenance minimum of 5 L per 100 kg
          of body weight per day for a sedentary adult horse in a thermoneutral environment
          (about 0.60 US gallon per 100 lb, or about 6 gallons at 1,000 lb). The high end, 1 gallon per 100 lb,
          is a planning figure. Merck says dry hay can almost double intake and that lactation and sweat
          increase needs; this tool does not multiply by a second coefficient. The{' '}
          <Link href="/nutrition/water-requirements">water requirements page</Link> is a separate husbandry note.
        </p>
        <h2>What the band is not</h2>
        <p>
          Liters on the result are the gallon figures times 3.785. A heavier horse gets a wider band in proportion.
          A lighter horse gets a narrower one. The 0.60 gallon figure is the Merck minimum converted to US gallons.
          The upper gallon is a planning figure.
        </p>
        <p>
          Do not withhold water to hit the low end. The page’s practical rule is free-choice water. The{' '}
          <Link href="/reviews/winter-water-unfrozen-guide">winter water guide</Link> is where icy buckets and dry hay
          are tied to impaction risk. The heated bucket and the flat-back bucket are the two searches on the
          water page. Method for those product links is on <Link href="/how-we-pick">How we pick</Link>.
        </p>
        <h2 id="faq">FAQ</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}

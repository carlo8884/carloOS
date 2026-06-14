import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildHowToSchema,
  ArticleLayout,
  FAQAccordion,
  EmailCapture,
  TableOfContents,
  RelatedLinks,
  CrossPortfolioCard,
} from '@carloOS/ui'
import CatAgeCalculator from '../../../components/tools/CatAgeCalculator'

const URL = 'https://vets.co/tools/cat-age-calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Cat Age Calculator — Cat Years to Human Years & Life Stage | Vets.co',
  description:
    'How old is your cat in human years? Convert cat years to human years with the standard vet chart and see your cat’s life stage and the care it needs.',
  path: '/tools/cat-age-calculator',
})

const articleSchema = buildArticleSchema({
  siteId: 'vets-co',
  title: 'Cat Age Calculator — Cat Years to Human Years & Life Stage',
  description:
    'Convert a cat’s age to human-equivalent years and identify its AAFP/AAHA life stage and the veterinary care that stage calls for.',
  url: URL,
  imageUrl: '',
  authorName: 'Vets.co Editorial',
  publishedAt: '2026-06-14T00:00:00Z',
  modifiedAt: '2026-06-14T00:00:00Z',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://vets.co/' },
    { name: 'Tools', url: 'https://vets.co/tools' },
    { name: 'Cat Age Calculator', url: URL },
  ],
})

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Cat Age & Life-Stage Calculator',
  url: URL,
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description:
    'Free cat age calculator. Converts a cat’s age to human-equivalent years with the standard veterinary chart (year 1 = 15, year 2 = 24, then +4 per year) and reports the AAFP/AAHA feline life stage with stage-appropriate care guidance.',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  featureList: [
    'Cat years to human years using the standard veterinary chart',
    'AAFP/AAHA life stage: kitten, young adult, mature adult, senior',
    'Stage-appropriate veterinary care guidance',
    'Senior-screening prompts (kidney, thyroid, blood pressure)',
  ],
  publisher: { '@type': 'Organization', name: 'Vets.co Editorial', url: 'https://vets.co' },
}

const howToSchema = buildHowToSchema({
  name: 'How to calculate your cat’s age in human years',
  description:
    'Convert a cat’s age to human-equivalent years using the standard veterinary chart and read off the matching life stage.',
  url: URL,
  steps: [
    { name: 'Count the first year as 15', text: 'A cat’s first year is roughly equivalent to 15 human years of development.' },
    { name: 'Add 9 for the second year', text: 'By age two, a cat is about 24 in human-equivalent years.' },
    { name: 'Add 4 for each year after that', text: 'From age two onward, add about four human years per cat year — so a 10-year-old cat is about 56.' },
    { name: 'Match the life stage', text: 'Kitten under 1, young adult 1–6, mature adult 7–10, senior 11+ — and adjust care accordingly with your vet.' },
  ],
})

const FAQS = [
  {
    question: 'How old is my cat in human years?',
    answer:
      'Using the standard veterinary chart, a cat’s first year is about 15 human years, the second brings it to about 24, and every year after adds roughly four. So a 3-year-old cat is about 28, a 7-year-old about 44, a 10-year-old about 56, and a 15-year-old about 76. The calculator does the math for any age.',
  },
  {
    question: 'When is a cat considered a senior?',
    answer:
      'Under the AAFP/AAHA feline life-stage framework, cats are kittens up to 1 year, young adults from 1 to 6, mature adults from 7 to 10, and seniors from about 11 onward (cats over 15 are sometimes called geriatric or super-senior). Senior cats benefit from twice-yearly vet visits and routine screening, because several common conditions are very treatable when caught early.',
  },
  {
    question: 'How do you calculate cat years to human years?',
    answer:
      'The widely used veterinary formula counts the first year as 15 human years, the second year as 9 more (reaching 24 by age two), and about 4 human years for each year after that. It is an approximation — individual cats age differently — but it is far more accurate than the old “multiply by seven” myth, which overstates a young cat’s age and understates an old one’s.',
  },
  {
    question: 'How long do cats live?',
    answer:
      'Indoor cats commonly live 13–17 years, and many reach their late teens or early twenties with good care. Outdoor and indoor-outdoor cats tend to live shorter lives because of trauma, infectious disease, and predation. Diet, dental care, weight, and regular veterinary screening all influence lifespan.',
  },
  {
    question: 'What changes as my cat gets older?',
    answer:
      'From middle age (around 7+), kidney disease, hyperthyroidism, diabetes, dental disease, and arthritis become more common. The practical response is more frequent vet visits, baseline and then routine bloodwork and blood-pressure checks, and watching at home for weight loss, increased thirst or urination, and changes in appetite or activity — all early-warning signs worth reporting to your vet.',
  },
]

export default function CatAgeCalculatorPage() {
  return (
    <ArticleLayout
      siteId="vets-co"
      hero={{
        title: 'Cat Age Calculator',
        subtitle:
          'How old is your cat in human years — and what does its age mean for its care? Enter your cat’s age to convert it with the standard veterinary chart and see its life stage and the screening it needs.',
        category: 'Tools',
        categoryHref: '/tools',
        publishedAt: 'June 2026',
        readTime: '3 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Cat Age Calculator' },
      ]}
      schema={[articleSchema, breadcrumbSchema]}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The calculator', href: '#calculator' },
              { label: 'How cat years work', href: '#how' },
              { label: 'Care by life stage', href: '#stages' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Feline health"
            links={[
              { label: 'Cat Body Condition Score', href: '/tools/cat-body-condition-score' },
              { label: 'Senior Pet Care', href: '/health/senior-pet-care' },
              { label: 'Senior Bloodwork Guide', href: '/health/senior-bloodwork-guide' },
              { label: 'Preventive Care Schedule', href: '/health/preventive-care-schedule' },
            ]}
          />
          <CrossPortfolioCard currentSite="vets-co" contentType="tool" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="vets-co"
            title="Vets.co reference letter"
            subtitle="Veterinary references for pet owners."
            source="cat-age-calculator"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

        <h2 id="calculator">The calculator</h2>
        <p>
          Enter your cat&apos;s age to convert it to human-equivalent years and see which life stage your cat is in.
          The conversion uses the standard veterinary chart, not the old &ldquo;multiply by seven&rdquo; rule, which
          is wrong for cats.
        </p>
        <CatAgeCalculator />

        <h2 id="how">How cat years work</h2>
        <p>
          Cats mature fast and then settle into a long, slow middle age. The first year alone is worth about 15 human
          years — a one-year-old cat is physically a young adult — and the second year adds another nine, reaching
          about 24. After that, each cat year is worth roughly four human years. That is why a 10-year-old cat is about
          56, not 70, and why the &ldquo;cat years = 7 × age&rdquo; shortcut is misleading at both ends.
        </p>

        <h2 id="stages">Care by life stage</h2>
        <p>
          The AAFP/AAHA feline life-stage framework splits a cat&apos;s life into kitten (under 1), young adult (1–6),
          mature adult (7–10), and senior (11+). The value of knowing the stage is that it changes what veterinary care
          matters most: vaccines and neutering for kittens; weight, dental, and an annual exam for young adults;
          baseline bloodwork and weight vigilance for mature adults; and twice-yearly visits with senior screening for
          kidney disease, thyroid disease, diabetes, and blood pressure once a cat is a senior. The{' '}
          <a href="/tools/cat-body-condition-score">cat body condition score</a> tool pairs with this to track weight,
          and the <a href="/health/senior-bloodwork-guide">senior bloodwork guide</a> covers what those screening tests
          look for.
        </p>

        <h2 id="faq">Frequently asked questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}

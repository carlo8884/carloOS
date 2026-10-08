import { HopDisclosure } from '../../../components/HopDisclosure'
import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildHowToSchema,
  ArticleLayout,
  FAQAccordion,
  ShopCtas,
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
    'Life stage follows 2021 AAHA/AAFP. The 15/24/+4 human-year chart is a planning figure, not an AAFP stage.',
  path: '/tools/cat-age-calculator',
})

const articleSchema = buildArticleSchema({
  siteId: 'vets-co',
  title: 'Cat Age Calculator',
  description:
    'Convert a cat’s age to human-equivalent years and identify its AAFP/AAHA life stage and the veterinary care that stage calls for.',
  url: URL,
  imageUrl: '',
  authorName: 'Vets.co Editorial',
  publishedAt: '2026-06-14T00:00:00Z',
  modifiedAt: '2026-09-03T00:00:00Z',
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
    'Life stage follows the 2021 AAHA/AAFP feline definitions. The 15/24/+4 human-year chart is a planning figure, not an AAFP stage.',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  featureList: [
    'Human-year chart (15/24/+4) labeled a planning figure',
    'AAFP/AAHA life stage: kitten, young adult, mature adult, senior',
    'Stage-appropriate veterinary care guidance',
    'Senior-screening prompts (kidney, thyroid, blood pressure)',
    'Shoppable life-stage kit via Amazon category searches (kitten food, senior cat food, digital pet scale, carrier, dental)',
  ],
  publisher: { '@type': 'Organization', name: 'Vets.co Editorial', url: 'https://vets.co' },
}

const howToSchema = buildHowToSchema({
  name: 'How to calculate your cat’s age in human years',
  description:
    'Read the 2021 AAHA/AAFP life stage, and treat the 15/24/+4 human-year chart as a planning figure.',
  url: URL,
  steps: [
    { name: 'Count the first year as 15', text: 'A cat’s first year is roughly equivalent to 15 human years of development.' },
    { name: 'Add 9 for the second year', text: 'By age two, a cat is about 24 in human-equivalent years.' },
    { name: 'Add 4 for each year after that', text: 'From age two onward, add about four human years per cat year — so a 10-year-old cat is about 56.' },
    { name: 'Match the life stage', text: '2021 AAHA/AAFP: kitten to 1 year, young adult 1–6, mature adult 7–10, senior over 10. The age-15 geriatric label is a planning figure, not an AAFP stage.' },
  ],
})

const FAQS = [
  {
    question: 'How old is my cat in human years?',
    answer:
      'The 15 / 24 / +4 human-year chart is a planning figure, not an AAFP or AAHA table. On that planning chart a 3-year-old is about 28, a 7-year-old about 44, a 10-year-old about 56, and a 15-year-old about 76.',
  },
  {
    question: 'When is a cat considered a senior?',
    answer:
      'The 2021 AAHA/AAFP feline life stage definitions are kitten (birth to 1 year), young adult (1–6 years), mature adult (7–10 years), and senior (over 10 years). End-of-life is a stage at any age, not an age band. Calling cats over 15 “geriatric” is a planning label on this page, not an AAFP stage.',
  },
  {
    question: 'How do you calculate cat years to human years?',
    answer:
      'How we calculate: life stage is the 2021 AAHA/AAFP set above. The human-year math is a planning figure — first year 15, second year reaches 24, then about 4 per year. It is not an AAFP chart. It is also not the old multiply-by-seven shortcut.',
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
  {
    question: 'Is this calculator a diagnosis?',
    answer:
      'No. The AAFP/AAHA stages and the planning-figure human-year chart help you talk with your veterinarian about screening. They do not diagnose a disease, set a treatment plan, or replace an exam. If your cat is losing weight, drinking more, hiding, or seems painful, use the cat grimace scale as an owner aid and contact a veterinarian — or start with telehealth when the cat is stable and this is not an emergency.',
  },
]

export default function CatAgeCalculatorPage() {
  return (
    <ArticleLayout
      siteId="vets-co"
      hero={{
        title: 'Cat Age Calculator',
        subtitle:
          'How old is your cat in human years? Life stage follows the 2021 AAHA/AAFP definitions. The 15/24/+4 chart is a planning figure, not an AAFP stage.',
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
              { label: 'Life-stage kit', href: '#cat-age-kit' },
              { label: 'How cat years work', href: '#how' },
              { label: 'Care by life stage', href: '#stages' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Feline health"
            links={[
              { label: 'Is This a Cat Emergency?', href: '/tools/is-this-a-cat-emergency' },
              { label: 'Cat Body Condition Score', href: '/tools/cat-body-condition-score' },
              { label: 'Cat Grimace Scale', href: '/tools/cat-grimace-scale' },
              { label: 'Senior Pet Care', href: '/health/senior-pet-care' },
              { label: 'Senior Bloodwork Guide', href: '/health/senior-bloodwork-guide' },
              { label: 'Preventive Care Schedule', href: '/health/preventive-care-schedule' },
              { label: 'Insurance Coverage Finder', href: '/tools/insurance-finder' },
              { label: 'Talk to a vet (telehealth)', href: '/telehealth' },
            ]}
          />
          <CrossPortfolioCard currentSite="vets-co" contentType="tool" variant="sidebar" />
        </>
      }
    >
      <div className="carloOS-article">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
        <div className="mb-8">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the stage notes
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Life-stage care notes
          </h2>

        </div>

        <h2 id="calculator">The calculator</h2>
        <p>
          Enter your cat&apos;s age to convert it to human-equivalent years and see which life stage your cat is in.
          How we calculate: life stage follows the 2021 AAHA/AAFP definitions. The 15 / 24 / +4 human-year
          chart is a planning figure, not that guideline and not the old multiply-by-seven shortcut.
        </p>
        <CatAgeCalculator />

        {/* Money path — live amazon-brand search hops (life-stage kit).
            ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
            Category searches only — not a ranked list, not a diagnosis. */}
        <div id="cat-age-kit" className="mt-8 mb-8">
          <HopDisclosure siteId="vets-co" href={["/go/amazon-brand/kitten+food?s=tools-cat-age-calculator", "/go/amazon-brand/senior+cat+food?s=tools-cat-age-calculator", "/go/amazon-brand/digital+pet+scale?s=tools-cat-age-calculator", "/go/amazon-brand/cat+carrier?s=tools-cat-age-calculator", "/go/amazon-brand/cat+dental?s=tools-cat-age-calculator"]} />
          <div className="mt-4 rounded-xl border border-brand-border bg-brand-surface p-5">
            <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Shop a life-stage kit
            </div>
            <p className="mb-4 text-sm leading-relaxed text-brand-text-mid">Amazon search links go to general supplies. They are not a ranked product list and they do not replace veterinary care.</p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/kitten+food?s=tools-cat-age-calculator"
                amazonLabel="Browse kitten food on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/senior+cat+food?s=tools-cat-age-calculator"
                amazonLabel="Browse senior cat food on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/digital+pet+scale?s=tools-cat-age-calculator"
                amazonLabel="Browse digital pet scales on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/cat+carrier?s=tools-cat-age-calculator"
                amazonLabel="Browse cat carriers on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/cat+dental?s=tools-cat-age-calculator"
                amazonLabel="Browse cat dental care on Amazon →"
              />
          </div>
          </div>
        </div>

        <div className="mb-8 rounded-xl border border-brand-border bg-brand-surface p-5">
          <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Planning ahead
          </div>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Vet costs tend to climb once a cat is mature or senior. Pet
            insurance is least expensive while a cat is young and healthy —
            pre-existing conditions are excluded — so it is worth comparing
            published coverage early. For a non-emergency question, talk to a
            licensed vet on a screen rather than waiting for a gap to become
            an ER visit.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            <Link
              href="/tools/insurance-finder"
              className="inline-block bg-brand-primary text-white font-semibold text-sm px-4 py-2 rounded-md no-underline hover:bg-brand-primary-dark"
            >
              Filter insurance coverage →
            </Link>
            <Link
              href="/reviews/best-pet-insurance"
              className="inline-block bg-brand-dark text-white font-semibold text-sm px-4 py-2 rounded-md no-underline hover:bg-brand-dark/90"
            >
              Compare pet insurance →
            </Link>
            <Link
              href="/telehealth"
              className="inline-block border border-brand-border bg-brand-white text-brand-dark font-semibold text-sm px-4 py-2 rounded-md no-underline hover:border-brand-primary"
            >
              Talk to a vet (telehealth) →
            </Link>
          </div>
        </div>

        <h2 id="how">How cat years work</h2>
        <p>
          How we calculate: the human-year numbers below are a planning figure, not the 2021 AAHA/AAFP guideline.
          On that planning chart the first year is 15, the second year reaches 24, and each later year adds about 4.
          A 10-year-old is about 56 on that chart. The multiply-by-seven shortcut is a different shortcut, and this
          page does not use it.
        </p>

        <h2 id="stages">Care by life stage</h2>
        <p>
          The 2021 AAHA/AAFP feline life stage definitions are kitten (birth to 1 year), young adult (1–6),
          mature adult (7–10), and senior (over 10). End-of-life is a stage at any age, not an age band. The value of knowing the stage is that it changes what veterinary care
          matters most: vaccines and neutering for kittens; weight, dental, and an annual exam for young adults;
          baseline bloodwork and weight vigilance for mature adults; and twice-yearly visits with senior screening for
          kidney disease, thyroid disease, diabetes, and blood pressure once a cat is a senior. This page is a
          planning reference, not a diagnosis.           The{' '}
          <Link href="/tools/cat-body-condition-score">cat body condition score</Link> tool pairs with this to track
          weight, the <Link href="/tools/cat-grimace-scale">cat grimace scale</Link> is an owner aid when you are
          watching for pain (observation kit, not a diagnosis), the{' '}
          <Link href="/tools/is-this-a-cat-emergency">cat emergency sign-list</Link> is a
          go-now / same-day / monitor triage aid (not a diagnosis), and the <Link href="/health/senior-bloodwork-guide">senior bloodwork guide</Link>{' '}
          covers what those screening tests look for. For a stable, non-emergency question, start at{' '}
          <Link href="/telehealth">telehealth</Link>.
        </p>

        <h2 id="faq">Frequently asked questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}

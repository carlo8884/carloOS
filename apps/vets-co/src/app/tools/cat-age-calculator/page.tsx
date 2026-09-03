import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildHowToSchema,
  ArticleLayout,
  FAQAccordion,
  EmailCapture,
  AffiliateDisclosure,
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
    'Free cat age calculator. Converts a cat’s age to human-equivalent years with the standard veterinary chart (year 1 = 15, year 2 = 24, then +4 per year) and reports the AAFP/AAHA feline life stage with stage-appropriate care guidance.',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  featureList: [
    'Cat years to human years using the standard veterinary chart',
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
    'Convert a cat’s age to human-equivalent years using the standard veterinary chart and read off the matching life stage.',
  url: URL,
  steps: [
    { name: 'Count the first year as 15', text: 'A cat’s first year is roughly equivalent to 15 human years of development.' },
    { name: 'Add 9 for the second year', text: 'By age two, a cat is about 24 in human-equivalent years.' },
    { name: 'Add 4 for each year after that', text: 'From age two onward, add about four human years per cat year — so a 10-year-old cat is about 56.' },
    { name: 'Match the life stage', text: 'Kitten under 1, young adult 1–6, mature adult 7–10, senior 11+ — and adjust care accordingly with your vet. This is a planning reference, not a diagnosis.' },
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
  {
    question: 'Is this calculator a diagnosis?',
    answer:
      'No. It is a planning and life-stage reference only. The veterinary chart and AAFP/AAHA stages help you talk with your veterinarian about screening and care; they do not diagnose a disease, set a treatment plan, or replace an exam. If your cat is losing weight, drinking more, hiding, or seems painful, use the cat grimace scale as an owner aid and contact a veterinarian — or start with telehealth when the cat is stable and this is not an emergency.',
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

        {/* Under-hero capture — source must end in under-hero so it always renders. */}
        <div className="mb-8">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the stage notes
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Life-stage care notes
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the AAFP/AAHA life-stage recap and senior-screening checklist
            (kidney, thyroid, blood pressure) so you can come back to the right
            stage without re-running the chart. Planning reference only — not a
            diagnosis. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="vets-co"
            title="Life-stage care notes"
            subtitle="Email the AAFP/AAHA life-stage recap and senior-screening checklist. No spam."
            ctaText="Email my life-stage notes"
            source="tools-cat-age-calculator-under-hero"
          />
        </div>

        <h2 id="calculator">The calculator</h2>
        <p>
          Enter your cat&apos;s age to convert it to human-equivalent years and see which life stage your cat is in.
          The conversion uses the standard veterinary chart, not the old &ldquo;multiply by seven&rdquo; rule, which
          is wrong for cats.
        </p>
        <CatAgeCalculator />

        {/* Money path — live amazon-brand search hops (life-stage kit).
            ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
            Category searches only — not a ranked list, not a diagnosis. */}
        <div id="cat-age-kit" className="mt-8 mb-8">
          <AffiliateDisclosure variant="inline" siteId="vets-co" />
          <div className="mt-4 rounded-xl border border-brand-border bg-brand-surface p-5">
            <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Shop a life-stage kit
            </div>
            <p className="mb-4 text-sm leading-relaxed text-brand-text-mid">
              These Amazon category searches are husbandry items that match the
              life-stage label above — kitten food, senior cat food, a digital
              pet scale, a carrier, and dental care. They are not a ranked
              product list, not invented inventory, and they do not diagnose a
              health problem or set a care plan. Ask your veterinarian which
              stage-appropriate products fit your cat. Vets.co earns a
              commission on qualifying purchases at no extra cost to you.
              Empty Chewy buttons stay hidden.
            </p>
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

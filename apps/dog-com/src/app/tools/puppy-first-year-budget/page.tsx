import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  EmailCapture,
  buildBreadcrumbSchema,
  buildHowToSchema,
  combineSchemas,
  SchemaScript,
  FAQAccordion,
  AffiliateDisclosure,
  CrossPortfolioCard,
  ShopCtas,
} from '@carloOS/ui'
import Calculator from './Calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Puppy First-Year Budget Calculator',
  description:
    'Estimate first-year puppy costs by adult size — crate, food, vet, and training ranges you can edit. Planning tool, not a quote.',
  path: '/tools/puppy-first-year-budget',
})

const FAQS = [
  {
    question: 'How much does a puppy cost in the first year?',
    answer:
      'It varies by size and how the puppy arrives. Small dogs usually cost less in food and crate size; giant breeds cost more on both. Adoption or purchase can be the largest single line. The calculator starts from typical US retail ranges you can edit — it is a planning tool, not a clinic or retailer quote.',
  },
  {
    question: 'What is the biggest first-year puppy expense?',
    answer:
      'For most owners it is either the arrival fee (adoption or purchase) or the first-year veterinary work — vaccines, spay or neuter, and year-round parasite prevention. The crate is usually the largest gear line if you buy an adult-size crate once instead of replacing it as the puppy grows.',
  },
  {
    question: 'Does the calculator include pet insurance?',
    answer:
      'No. Insurance is optional and premiums vary by breed, ZIP code, and deductible. If you want it, add your quoted monthly premium times 12 to the miscellaneous line. Compare policies on Vets.co rather than treating insurance as a default cost here.',
  },
  {
    question: 'Should I buy a crate now or wait until the puppy grows?',
    answer:
      'Buy for the expected adult size and use a divider. Replacing crates as a puppy grows costs more than one correctly sized crate. Use the crate size calculator for the length, then shop a wire crate with a divider.',
  },
  {
    question: 'Are these numbers from a survey?',
    answer:
      'No. They are labeled starting points based on typical US retail ranges for crates, food, and first-year veterinary work. Edit every line to match your city, clinic, and the individual dog. Ongoing food and vet care outweigh one-time supplies over the dog’s life.',
  },
]

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Dog.com', url: 'https://dog.com/' },
    { name: 'Tools', url: 'https://dog.com/tools' },
    { name: 'Puppy First-Year Budget', url: 'https://dog.com/tools/puppy-first-year-budget' },
  ],
})

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Puppy First-Year Budget Calculator',
  description:
    'Free interactive planner that estimates first-year puppy costs from expected adult size and acquisition path, with editable setup, food, vet, and training lines.',
  url: 'https://dog.com/tools/puppy-first-year-budget',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Adult-size bands (small / medium / large / giant)',
    'Adopted, purchased, or already-home acquisition paths',
    'Editable setup, food, vet, and training lines',
    'First-year total with a 12-month food rollup',
  ],
  publisher: { '@type': 'Organization', name: 'Dog.com Editorial', url: 'https://dog.com' },
}

const howToSchema = buildHowToSchema({
  name: 'How to estimate a puppy’s first-year cost',
  description:
    'Pick expected adult size and how the puppy arrives, then add crate and gear, twelve months of food, first-year veterinary work, and training.',
  url: 'https://dog.com/tools/puppy-first-year-budget',
  steps: [
    {
      name: 'Pick expected adult size',
      text: 'Choose small, medium, large, or giant so crate, food, and vet starting points match the dog you are planning for.',
    },
    {
      name: 'Choose how the puppy arrives',
      text: 'Adoption, purchase, or already home. Edit the fee to match the receipt — these fees vary widely.',
    },
    {
      name: 'Edit the line items',
      text: 'Adjust crate and gear, monthly food, first-year vet (vaccines, spay or neuter, preventives), and training so the total matches your city and clinic.',
    },
    {
      name: 'Read the first-year total',
      text: 'The planner adds setup + food × 12 + vet + training + arrival. It is a planning range, not a quote.',
    },
  ],
})

const schema = combineSchemas(breadcrumbSchema, appSchema, howToSchema)

export default function PuppyFirstYearBudgetPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      <section className="bg-brand-dark px-container-sm sm:px-container py-10 sm:py-14 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(ellipse at 30% 50%, rgba(90, 110, 140, 0.5) 0%, transparent 60%)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
              Tools &amp; Calculators
            </span>
          </div>
          <h1
            className="font-display font-bold text-white tracking-tight leading-none mb-5"
            style={{ fontSize: 'clamp(34px, 5vw, 56px)' }}
          >
            Puppy First-Year Budget
          </h1>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
            How much does a puppy cost in year one? Pick adult size and how the puppy arrives, then
            edit crate, food, vet, and training lines. A planning range — not a quote.
          </p>
        </div>
      </section>

      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">
          Dog.com
        </Link>
        <span>›</span>
        <Link href="/tools" className="hover:text-brand-primary no-underline">
          Tools
        </Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Puppy First-Year Budget</span>
      </nav>

      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-5xl">
          <Calculator />
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <AffiliateDisclosure variant="inline" siteId="dog-com" />
          <div className="mt-4">
            <ShopCtas
              amazonHref="/go/amazon-brand/wire+dog+crate+with+divider+panel?s=tools-puppy-first-year-budget"
              amazonLabel="Browse crates on Amazon →"
            />
          </div>
          <p className="mt-3 text-xs text-brand-text-light">
            We may earn a commission if you buy through the Amazon link — at no extra cost to you, and we never rank by commission. A wire crate with a divider is the same hop as the new-puppy checklist.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-brand-text-mid">
            Pair this with the{' '}
            <Link href="/tools/new-puppy-checklist" className="text-brand-primary underline-offset-2 hover:underline">
              new-puppy checklist
            </Link>{' '}
            for what to buy, and the{' '}
            <Link href="/tools/dog-crate-size-calculator" className="text-brand-primary underline-offset-2 hover:underline">
              crate size calculator
            </Link>{' '}
            for the length. Food portions live on the{' '}
            <Link href="/tools/dog-calorie-calculator" className="text-brand-primary underline-offset-2 hover:underline">
              calorie calculator
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <h2 className="mb-4 font-display text-2xl font-semibold text-brand-dark">What the first year actually costs</h2>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            One-time gear is the visible number. Recurring food and veterinary care usually overtake
            it before the first birthday. Buying an adult-size crate once (with a divider) is cheaper
            than replacing crates as the puppy grows. Spay or neuter timing is a veterinary decision —
            budget for it in year one unless your veterinarian has a documented reason to wait.
          </p>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            The{' '}
            <Link href="/breeds" className="text-brand-primary underline-offset-2 hover:underline">
              breed guide
            </Link>{' '}
            helps you pick a size class before you shop. For the day-one kit itself, use the{' '}
            <Link href="/tools/new-puppy-checklist" className="text-brand-primary underline-offset-2 hover:underline">
              new-puppy checklist
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <h2 className="mb-4 font-display text-2xl font-semibold text-brand-dark">Frequently asked questions</h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-2xl">
          <EmailCapture
            siteId="dog-com"
            variant="inline"
            title="Dog.com owner’s letter"
            subtitle="Practical first-year references and tool updates. No spam."
            source="tools-puppy-first-year-budget"
          />
        </div>
      </section>

      <CrossPortfolioCard currentSite="dog-com" contentType="tool" variant="footer" />
    </>
  )
}

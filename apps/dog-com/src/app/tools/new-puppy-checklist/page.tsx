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
  CrossPortfolioCard,
} from '@carloOS/ui'
import Calculator from './Calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'New Puppy Checklist — What Do I Need for a Puppy? | Dog.com',
  description:
    'What do you need for a new puppy? Pick life stage and adult size for a complete essentials checklist — crate, food, bowls, bed, leash, prevention, and more.',
  path: '/tools/new-puppy-checklist',
})

const FAQS = [
  {
    question: 'What do I need for a new puppy?',
    answer:
      'The essentials are: a complete puppy food and stainless or ceramic bowls, an adult-size crate with a divider, a bed, a flat collar with an ID tag plus a harness and leash, house-training supplies (poop bags and an enzymatic cleaner), appropriate chews and a couple of toys, grooming basics, and a first vet visit to start vaccines, parasite prevention, and microchip registration. The builder above tailors the list to your puppy’s adult size.',
  },
  {
    question: 'What should I buy before bringing a puppy home?',
    answer:
      'Have the core kit ready before day one: crate (sized to the adult dog, with a divider), food and bowls, bed, collar with ID tag, harness and leash, poop bags, and an enzymatic cleaner for the inevitable accidents. Book the first vet appointment in advance. Everything else — chews, grooming tools, training treats — can follow in the first week.',
  },
  {
    question: 'How much do new-puppy supplies cost?',
    answer:
      'It varies widely, but the crate, bed, and the first weeks of food are usually the largest items, and buying an adult-size crate once (rather than upsizing as the puppy grows) saves money. Ongoing costs — food, parasite prevention, and vet care — outweigh the one-time supplies over the dog’s life, which is worth planning for from the start.',
  },
  {
    question: 'Do I need pet insurance for a puppy?',
    answer:
      'It is optional, but if you want it, enrolling while the puppy is young and healthy is the time to do it — once a condition appears it becomes pre-existing and is excluded from cover. Insurance is most valuable as protection against a large, unexpected vet bill rather than as a way to save money on routine care.',
  },
  {
    question: 'What matters most for a new puppy — beyond the gear?',
    answer:
      'Early socialisation, house-training, and that first vet visit matter far more than any product. The socialisation window is short, so positive exposures to people, dogs, and everyday situations in the first months pay off for life. The supplies are there to support those things, not replace them.',
  },
]

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Dog.com', url: 'https://dog.com/' },
    { name: 'Tools', url: 'https://dog.com/tools' },
    { name: 'New Puppy Checklist', url: 'https://dog.com/tools/new-puppy-checklist' },
  ],
})

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'New Puppy Essentials Checklist Builder',
  description:
    'Free interactive checklist that builds a complete new-puppy or new-dog supplies list from life stage and adult size, with why each item matters and links to reviews and sizing tools.',
  url: 'https://dog.com/tools/new-puppy-checklist',
  applicationCategory: 'LifestyleApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Tailors the list to life stage (puppy or adult) and adult size',
    'Covers crate, food, bowls, bed, collar/leash/harness, prevention, and more',
    'Flags the essentials vs. the nice-to-haves',
    'Links each item to the relevant review or sizing tool',
  ],
  publisher: { '@type': 'Organization', name: 'Dog.com Editorial', url: 'https://dog.com' },
}

const howToSchema = buildHowToSchema({
  name: 'How to prepare for a new puppy',
  description:
    'Build a complete new-puppy supplies checklist from the puppy’s life stage and adult size, then prioritise the day-one essentials.',
  url: 'https://dog.com/tools/new-puppy-checklist',
  steps: [
    { name: 'Pick life stage and adult size', text: 'Choose puppy or adult and the dog’s expected adult size so the crate, food, and bed recommendations fit.' },
    { name: 'Get the day-one essentials first', text: 'Crate with divider, food and bowls, bed, collar with ID tag, harness and leash, poop bags, and an enzymatic cleaner.' },
    { name: 'Book the first vet visit', text: 'Start vaccines, parasite prevention, and microchip registration, and decide about pet insurance while the puppy is healthy.' },
    { name: 'Add the rest in week one', text: 'Chews and toys, grooming tools, training treats, and a first-aid kit, while you focus on socialisation and house-training.' },
  ],
})

const schema = combineSchemas(breadcrumbSchema, appSchema, howToSchema)

export default function NewPuppyChecklistPage() {
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
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Tools &amp; Calculators</span>
          </div>
          <h1
            className="font-display font-bold text-white tracking-tight leading-none mb-5"
            style={{ fontSize: 'clamp(34px, 5vw, 56px)' }}
          >
            New Puppy Checklist
          </h1>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
            What do you actually need for a new puppy? Pick the life stage and adult size and get a
            complete, prioritised essentials list — crate, food, bowls, bed, leash, prevention and
            more — with why each matters and where to find the right one.
          </p>
        </div>
      </section>

      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Dog.com</Link>
        <span>›</span>
        <Link href="/tools" className="hover:text-brand-primary no-underline">Tools</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">New Puppy Checklist</span>
      </nav>

      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-5xl">
          <Calculator />
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl space-y-10">
          <div>
            <h2 className="mb-3 font-display text-2xl font-bold text-brand-dark">Get the day-one essentials first</h2>
            <div className="space-y-3 text-sm leading-relaxed text-brand-text-mid">
              <p>
                The list above sorts the must-haves from the nice-to-haves. Before your puppy comes
                home, prioritise the crate, food and bowls, bed, collar with ID tag, leash and harness,
                and house-training supplies — and book that first vet visit. Sizing the{' '}
                <Link href="/tools/dog-crate-size-calculator" className="text-brand-primary underline-offset-2 hover:underline">crate</Link>{' '}
                and the{' '}
                <Link href="/tools/harness-collar-size" className="text-brand-primary underline-offset-2 hover:underline">collar and harness</Link>{' '}
                to the adult dog, setting the right{' '}
                <Link href="/tools/dog-calorie-calculator" className="text-brand-primary underline-offset-2 hover:underline">food portion</Link>
                , and running the{' '}
                <Link href="/tools/puppy-first-year-budget" className="text-brand-primary underline-offset-2 hover:underline">first-year budget planner</Link>{' '}
                from the start are the easiest ways to avoid early mistakes.
              </p>
              <p>
                Everything else — chews and toys, grooming tools, a first-aid kit — can follow in the
                first week while you focus on what actually shapes the dog: socialisation,
                house-training, and a calm, consistent routine. Expecting a litter? The{' '}
                <Link href="/tools/dog-gestation-calculator" className="text-brand-primary underline-offset-2 hover:underline">
                  pregnancy and whelping calendar
                </Link>{' '}
                estimates the due date and lists the whelping-kit items to pack before week 7.
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-4 font-display text-2xl font-bold text-brand-dark">Frequently asked questions</h2>
            <FAQAccordion items={FAQS} />
          </div>

          <CrossPortfolioCard currentSite="dog-com" contentType="tool" />

          <EmailCapture
            siteId="dog-com"
            title="Dog.com new-owner letter"
            subtitle="Practical, vet-referenced guidance for the first year — one email a week."
            source="tools-new-puppy-checklist"
          />
        </div>
      </section>
    </>
  )
}

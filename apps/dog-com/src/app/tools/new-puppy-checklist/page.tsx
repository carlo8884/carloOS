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
  title: 'New Puppy Checklist — First-Week Essentials | Dog.com',
  description:
    'Pick adult size, pickup age, indoor or outdoor, crate training, and budget for a checkable new-puppy list with Amazon shop hops. Free.',
  path: '/tools/new-puppy-checklist',
})

const FAQS = [
  {
    question: 'What do I need for a new puppy?',
    answer:
      'The day-one essentials are a complete puppy food and stainless or ceramic bowls, an adult-size crate with a divider, a washable bed, a flat collar with an ID tag plus a harness and leash, house-training supplies (poop bags and an enzymatic cleaner), and a first vet visit to start vaccines, parasite prevention, and microchip registration. The builder above tailors the list to adult size, age at pickup, indoor or outdoor living, crate-training status, and budget.',
  },
  {
    question: 'What should I buy before bringing a puppy home?',
    answer:
      'Have the core kit ready before day one: crate (sized to the adult dog, with a divider), food and bowls, bed, collar with ID tag, harness and leash, poop bags, and an enzymatic cleaner. Book the first vet appointment in advance. Everything else — chews, grooming tools, training treats — can follow in the first week.',
  },
  {
    question: 'How much do new-puppy supplies cost?',
    answer:
      'It varies widely, but the crate, bed, and the first weeks of food are usually the largest items, and buying an adult-size crate once (rather than upsizing as the puppy grows) saves money. The first-year budget planner puts ranges on crate, food, vet, and training. Ongoing costs — food, parasite prevention, and vet care — outweigh the one-time supplies over the dog’s life.',
  },
  {
    question: 'Do I need pet insurance for a puppy?',
    answer:
      'It is optional, but if you want it, enrolling while the puppy is young and healthy is the time to do it — once a condition appears it becomes pre-existing and is excluded from cover. Insurance is most valuable as protection against a large, unexpected vet bill rather than as a way to save money on routine care. Compare policies on Vets.co.',
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
    'Free interactive checklist that builds a staged new-puppy supplies list from adult size, pickup age, indoor or outdoor living, crate-training status, and budget, with Amazon category-search hops on every gear item.',
  url: 'https://dog.com/tools/new-puppy-checklist',
  applicationCategory: 'LifestyleApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Tailors the list to adult size, pickup age, indoor/outdoor, crate training, and budget',
    'Checkable stages: before pickup, first 48 hours, first month, vet and paperwork',
    'Flags the essentials vs. the nice-to-haves',
    'Shoppable first-week kit via Amazon category searches',
  ],
  publisher: { '@type': 'Organization', name: 'Dog.com Editorial', url: 'https://dog.com' },
}

const howToSchema = buildHowToSchema({
  name: 'How to prepare for a new puppy',
  description:
    'Build a staged new-puppy supplies checklist from adult size, pickup age, indoor or outdoor living, crate-training status, and budget, then shop the day-one kit.',
  url: 'https://dog.com/tools/new-puppy-checklist',
  steps: [
    {
      name: 'Pick size, pickup age, setting, crate training, and budget',
      text: 'Choose expected adult size, age at pickup, indoor or outdoor, whether the puppy is crate-trained, and a budget tier so crate, food, and extras fit.',
    },
    {
      name: 'Check off the before-pickup essentials',
      text: 'Crate with divider, food and bowls, bed, collar with ID tag, harness and leash, poop bags, and an enzymatic cleaner.',
    },
    {
      name: 'Cover the first 48 hours and first month',
      text: 'Teething toys, house-training supplies, training treats, and grooming basics once the puppy is home.',
    },
    {
      name: 'Book the first vet visit',
      text: 'Start vaccines, parasite prevention, and microchip registration, and decide about pet insurance while the puppy is healthy.',
    },
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
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
              Tools &amp; Calculators
            </span>
          </div>
          <h1
            className="font-display font-bold text-white tracking-tight leading-none mb-5"
            style={{ fontSize: 'clamp(34px, 5vw, 56px)' }}
          >
            New Puppy Checklist
          </h1>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
            What do you actually need before a puppy comes home? Pick adult size, age at pickup,
            indoor or outdoor, crate training, and budget — then check off a staged first-week list
            with a shoppable kit for every gear item.
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

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-8 pb-0">
        <div className="max-w-2xl">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Printable new-puppy checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the printable new-puppy checklist plus a week-1 schedule —
            crate, food, first vet, house-training, and the shoppable kit —
            so you can pack before pickup without re-running the builder. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="dog-com"
            title="Printable new-puppy checklist"
            subtitle="Email the printable new-puppy checklist plus a week-1 schedule. No spam."
            ctaText="Email my new-puppy checklist"
            source="tools-new-puppy-checklist-under-hero"
          />
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-5xl">
          <Calculator />
        </div>
      </section>

      {/* Money path — live amazon-brand search hops (first-week kit).
          ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
          Category searches only — not a ranked list, not a diagnosis. */}
      <section id="new-puppy-kit" className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <AffiliateDisclosure variant="inline" siteId="dog-com" />
          <div className="mt-4 rounded-xl border border-brand-border bg-brand-white p-5">
            <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Shop a first-week puppy kit
            </div>
            <p className="mb-4 text-sm leading-relaxed text-brand-text-mid">
              These Amazon category searches are husbandry items on the
              checklist above — a wire crate with a divider, puppy food, a
              slow-feeder bowl, a harness, an ID tag / collar, teething toys,
              and an enzymatic cleaner. They are not a ranked product list,
              not invented inventory, and they do not replace the first vet
              visit. Size the crate and harness before you order. Dog.com
              earns a commission on qualifying purchases at no extra cost to
              you. Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/wire+dog+crate+with+divider+panel?s=tools-new-puppy-checklist"
                amazonLabel="Browse crates on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/puppy+food?s=tools-new-puppy-checklist"
                amazonLabel="Browse puppy food on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/northmate+green+interactive+feeder?s=tools-new-puppy-checklist"
                amazonLabel="Browse slow-feeder bowls on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/julius+k9+idc+powerharness?s=tools-new-puppy-checklist"
                amazonLabel="Browse harnesses on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/dog+id+tag+collar?s=tools-new-puppy-checklist"
                amazonLabel="Browse dog ID tags and collars on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/puppy+teething+toys?s=tools-new-puppy-checklist"
                amazonLabel="Browse puppy teething toys on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/enzymatic+pet+stain+odor+cleaner?s=tools-new-puppy-checklist"
                amazonLabel="Browse enzymatic pet cleaners on Amazon →"
              />
            </div>
          </div>
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
                to the adult dog, checking{' '}
                <Link href="/tools/dog-ideal-weight-calculator" className="text-brand-primary underline-offset-2 hover:underline">healthy adult weight</Link>
                , converting{' '}
                <Link href="/tools/dog-age-calculator" className="text-brand-primary underline-offset-2 hover:underline">age in human years</Link>
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
        </div>
      </section>

      <section className="bg-brand-white border-t border-brand-border px-container-sm sm:px-container py-10">
        <div className="max-w-2xl">
          <h2 className="font-display text-lg font-bold text-brand-dark mb-4">Related Tools &amp; Guides</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'Dog Crate Size Calculator', href: '/tools/dog-crate-size-calculator', note: 'Adult-size crate length before you buy' },
              { label: 'Harness & Collar Size', href: '/tools/harness-collar-size', note: 'Fit the walk gear to neck and chest' },
              { label: 'Puppy First-Year Budget', href: '/tools/puppy-first-year-budget', note: 'Crate, food, vet, and training ranges' },
              { label: 'Dog Age Calculator', href: '/tools/dog-age-calculator', note: 'Human-year estimate and life stage' },
              { label: 'Puppy Weight Predictor', href: '/tools/puppy-weight-predictor', note: 'How big will the adult dog get?' },
              { label: 'Dog Ideal Weight Calculator', href: '/tools/dog-ideal-weight-calculator', note: 'Healthy adult weight range by breed' },
              { label: 'Puppy Schedule', href: '/training/puppy-schedule', note: 'Week-1 routine once the puppy is home' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block bg-brand-surface border border-brand-border rounded-lg p-4 no-underline hover:border-brand-primary transition-colors duration-200"
              >
                <div className="text-sm font-bold text-brand-dark mb-0.5">{item.label}</div>
                <div className="text-xs text-brand-text-light">{item.note}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CrossPortfolioCard currentSite="dog-com" contentType="tool" variant="footer" />
    </>
  )
}

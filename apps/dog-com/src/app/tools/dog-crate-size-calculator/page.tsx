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
} from '@carloOS/ui'
import Calculator from './Calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Dog Crate Size Calculator — What Size Crate Do I Need? | Dog.com',
  description:
    'What size crate does your dog need? Enter length and height to get the minimum crate dimensions and the recommended standard crate size.',
  path: '/tools/dog-crate-size-calculator',
})

const FAQS = [
  {
    question: 'What size crate does my dog need?',
    answer:
      'A crate should let your dog stand without ducking, turn around, and lie down fully stretched. The rule of thumb is to measure your dog from nose to the base of the tail and from the floor to the top of the head, then add 2 to 4 inches to each (we use the 2-inch minimum). Pick the smallest standard crate (commonly 18, 22, 24, 30, 36, 42, or 48 inches long) that meets both numbers. A crate that is too small is uncomfortable; one that is far too big undermines house-training.',
  },
  {
    question: 'How do I measure my dog for a crate?',
    answer:
      'Two measurements. For length, measure from the tip of the nose to the base of the tail (where the tail meets the body — not the tail tip, or you will oversize the crate). For height, measure from the floor to the top of the head while the dog is sitting or standing tall, whichever is taller. Add about 2 inches to each (2 to 4 inches is the usual range) for comfortable headroom and turning space.',
  },
  {
    question: 'What size crate for a puppy that is still growing?',
    answer:
      'Buy for the expected adult size, not the current puppy size — repurchasing crates as a puppy grows is expensive. Most crates include or accept a divider panel: set it so the puppy has just enough room to stand, turn, and lie down, then move it back as they grow. A crate sized to the adult dog but left undivided lets a puppy soil one end and sleep in the other, which slows house-training.',
  },
  {
    question: 'Should I size up if my dog is between two crate sizes?',
    answer:
      'Generally yes — size up. The minimum is the floor; extra room to stretch and turn is comfortable, and a slightly larger crate is rarely a problem for an adult dog. The main exception is house-training, where too much empty space can encourage soiling — use a divider in that case.',
  },
  {
    question: 'Do crate dimensions vary between brands?',
    answer:
      'Yes. The 18/22/24/30/36/42/48-inch sizes are an industry convention, but the internal width and height differ between manufacturers, and a crate\'s stated size is usually its external length. Always check the specific crate\'s internal measurements against the minimums this calculator gives you before buying.',
  },
]

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Dog.com', url: 'https://dog.com/' },
    { name: 'Tools', url: 'https://dog.com/tools' },
    { name: 'Dog Crate Size Calculator', url: 'https://dog.com/tools/dog-crate-size-calculator' },
  ],
})

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Dog Crate Size Calculator',
  description:
    'Free interactive calculator that turns a dog\'s body length and standing height into the minimum internal crate dimensions and a recommended standard crate size.',
  url: 'https://dog.com/tools/dog-crate-size-calculator',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Minimum internal crate length and height from two body measurements',
    'Recommended standard crate size (18–48 inch line) with size class',
    'Inches or centimetres',
    'Puppy guidance: size to adult dimensions and use a divider',
  ],
  publisher: { '@type': 'Organization', name: 'Dog.com Editorial', url: 'https://dog.com' },
}

const howToSchema = buildHowToSchema({
  name: 'How to choose the right dog crate size',
  description:
    'Measure a dog\'s length and height and add headroom to find the minimum crate dimensions and the right standard crate size.',
  url: 'https://dog.com/tools/dog-crate-size-calculator',
  steps: [
    {
      name: 'Measure body length',
      text: 'Measure from the tip of the nose to the base of the tail (where the tail meets the body, not the tail tip).',
    },
    {
      name: 'Measure standing height',
      text: 'Measure from the floor to the top of the head while the dog sits or stands tall — use the taller of the two.',
    },
    {
      name: 'Add headroom',
      text: 'Add about 2 inches to each measurement (the standard 2 to 4-inch clearance) so the dog can stand without ducking, turn around, and lie flat.',
    },
    {
      name: 'Pick the standard crate size',
      text: 'Choose the smallest standard crate (18, 22, 24, 30, 36, 42, or 48 inches) whose length and height meet both minimums. If between sizes or still growing, size up and use a divider for puppies.',
    },
  ],
})

const schema = combineSchemas(breadcrumbSchema, appSchema, howToSchema)

export default function DogCrateSizeCalculatorPage() {
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
            Dog Crate Size Calculator
          </h1>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
            What size crate does your dog need? Enter two measurements — body length and standing
            height — and get the minimum internal crate dimensions plus the recommended standard
            crate size, so your dog can stand, turn, and stretch out comfortably.
          </p>
        </div>
      </section>

      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Dog.com</Link>
        <span>›</span>
        <Link href="/tools" className="hover:text-brand-primary no-underline">Tools</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Crate Size Calculator</span>
      </nav>

      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-5xl">
          <Calculator />
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl rounded-lg border border-brand-border bg-brand-white p-6">
          <p className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
            Got your size?
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Set the crate up for success
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-brand-text-mid">
            The right size is step one. Crate training goes faster with the crate in the right spot
            and a positive introduction — see the{' '}
            <Link href="/training" className="text-brand-primary underline-offset-2 hover:underline">
              training guides
            </Link>
            ,             and if this is a new puppy, the{' '}
            <Link href="/tools/puppy-weight-predictor" className="text-brand-primary underline-offset-2 hover:underline">
              puppy weight predictor
            </Link>{' '}
            estimates the adult size to buy for. The{' '}
            <Link href="/tools/puppy-first-year-budget" className="text-brand-primary underline-offset-2 hover:underline">
              first-year budget planner
            </Link>{' '}
            puts a number on crate, food, and vet together.
          </p>
          <AffiliateDisclosure variant="inline" siteId="dog-com" />
          <div className="mt-3 flex flex-wrap gap-3">
            <a
              href="/go/amazon-brand/wire+dog+crate+with+divider+panel?s=tools-crate-size"
              rel="sponsored nofollow noopener noreferrer"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-primary px-4 py-2.5 text-sm font-semibold text-white no-underline transition-colors hover:bg-brand-primary-dark"
            >
              Browse crates on Amazon
              <span aria-hidden="true">&rarr;</span>
            </a>
            <Link
              href="/reviews/best-dog-crates"
              className="inline-flex items-center rounded-lg border border-brand-border px-4 py-2.5 text-sm font-semibold text-brand-dark no-underline hover:bg-brand-surface"
            >
              Read our crate reviews
            </Link>
          </div>
          <p className="mt-3 text-xs text-brand-text-light">
            We may earn a commission if you buy through the Amazon link — at no extra cost to you, and we never rank by commission. A wire crate with a divider panel fits most of the sizes above.
          </p>
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <h2 className="mb-4 font-display text-2xl font-semibold text-brand-dark">
            How crate sizing works
          </h2>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            A correctly sized crate is one the dog can stand up in without ducking, turn around in,
            and lie down fully stretched. That is the standard set by breeders, trainers, and most
            airline kennel rules. Translate it to a number by measuring the dog nose-to-tail-base for
            length and floor-to-head for height, then adding a couple of inches of headroom to each.
          </p>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            Standard wire and plastic crates come in a fixed set of lengths — 18, 22, 24, 30, 36, 42,
            and 48 inches — so the practical answer is the smallest of those that clears both of your
            minimums. The calculator does that match for you. For a growing puppy, buy for the adult
            size and divide the space down; the{' '}
            <Link href="/tools/puppy-weight-predictor" className="text-brand-primary underline-offset-2 hover:underline">
              puppy weight predictor
            </Link>{' '}
            and the{' '}
            <Link href="/training" className="text-brand-primary underline-offset-2 hover:underline">
              training guides
            </Link>{' '}
            cover the rest.
          </p>
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <h2 className="mb-4 font-display text-2xl font-semibold text-brand-dark">
            Frequently asked questions
          </h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-2xl">
          <EmailCapture
            siteId="dog-com"
            variant="inline"
            title="Dog.com owner’s letter"
            subtitle="Practical dog-care references and tool updates. No spam."
            source="tools-dog-crate-size-calculator"
          />
        </div>
      </section>

      <CrossPortfolioCard currentSite="dog-com" contentType="tool" variant="footer" />
    </>
  )
}

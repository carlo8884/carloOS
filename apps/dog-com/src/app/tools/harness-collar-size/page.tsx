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
  title: 'Dog Harness & Collar Size Calculator',
  description:
    'What size harness and collar does your dog need? Enter weight or size class plus neck and chest for typical S–XL bands and fit tips.',
  path: '/tools/harness-collar-size',
})

const FAQS = [
  {
    question: 'What size harness and collar does my dog need?',
    answer:
      'Measure neck circumference where a flat collar sits and chest girth just behind the front legs. Typical retail bands run XS through XXL (for example a medium collar is often 14–18 inches of neck, a medium harness 22–28 inches of chest). Weight or breed size class is only a starting point when you have not measured yet. Brand charts differ — match the tape to the product, not the letter alone.',
  },
  {
    question: 'How do I measure a dog for a collar or harness?',
    answer:
      'Use a soft tape. For the collar, wrap the neck at collar height so it is snug but not tight. For the harness, wrap the widest part of the ribcage just behind the front legs. Write the number in inches or centimetres and compare it to the size chart on the specific collar or harness. Two fingers should still slide under the strap once it is on.',
  },
  {
    question: 'Should I use a harness or a collar for walks?',
    answer:
      'A flat collar is the usual place for ID tags. For walks, a well-fitted harness keeps leash pressure off the neck. Front-clip harnesses help with pulling; back-clip harnesses suit dogs that already walk loosely. This tool only sizes the gear — it does not diagnose neck or airway problems.',
  },
  {
    question: 'When should I size up a collar or harness?',
    answer:
      'Size up when the measurement sits at the top of a band (this calculator uses a half-inch margin), when a growing puppy will outgrow the current holes in a few weeks, when a thick coat or barrel chest makes the two-finger check fail, or when the next size still has unused adjuster travel after a comfortable fit. A slightly larger adjustable piece is easier to tighten than one that will not close.',
  },
  {
    question: 'Do harness and collar sizes vary by brand?',
    answer:
      'Yes. XS–XXL letters are a retail convention, not a standard. Julius-K9, PetSafe, and Ruffwear publish different girth ranges for the same letter. Always read the product’s neck or chest range before you buy. This page gives typical bands so you know which letter to start with.',
  },
]

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Dog.com', url: 'https://dog.com/' },
    { name: 'Tools', url: 'https://dog.com/tools' },
    { name: 'Harness & Collar Size', url: 'https://dog.com/tools/harness-collar-size' },
  ],
})

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Dog Harness & Collar Size Calculator',
  description:
    'Free interactive calculator that turns a dog’s weight or size class plus neck and chest measurements into typical collar and harness size bands with fit tips.',
  url: 'https://dog.com/tools/harness-collar-size',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Collar size band from neck circumference',
    'Harness size band from chest / girth',
    'Weight or breed size-class fallback',
    'Inches or centimetres',
    'Conservative size-up when between bands',
  ],
  publisher: { '@type': 'Organization', name: 'Dog.com Editorial', url: 'https://dog.com' },
}

const howToSchema = buildHowToSchema({
  name: 'How to choose a dog harness and collar size',
  description:
    'Measure neck and chest, compare to typical retail size bands, and size up when the number sits at the top of a band.',
  url: 'https://dog.com/tools/harness-collar-size',
  steps: [
    {
      name: 'Pick size class and weight',
      text: 'Choose toy through giant and enter body weight. These set a starting band if you have not measured yet.',
    },
    {
      name: 'Measure the neck',
      text: 'Wrap a soft tape where a flat collar sits. Keep it snug, not tight. Use inches or centimetres.',
    },
    {
      name: 'Measure the chest',
      text: 'Wrap the widest part of the ribcage just behind the front legs — that is the harness girth.',
    },
    {
      name: 'Read the bands and size up if needed',
      text: 'Use the collar band for neck and the harness band for chest. If the number is within half an inch of the next band, size up. Confirm the product chart before buying.',
    },
  ],
})

const schema = combineSchemas(breadcrumbSchema, appSchema, howToSchema)

export default function HarnessCollarSizePage() {
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
            Harness &amp; Collar Size
          </h1>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
            What size harness and collar does your dog need? Enter weight or size class plus neck
            and chest measurements for typical S–XL bands, fit tips, and when to size up.
            Starting sizes — not a brand guarantee.
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
        <span className="text-brand-text-mid font-medium">Harness &amp; Collar Size</span>
      </nav>

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-8 pb-0">
        <div className="max-w-2xl">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the size chart
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Harness &amp; collar size chart
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the neck and chest bands, two-finger fit check, and the shoppable
            walk kit (harness, collar, measuring tape, leash) so you can measure
            once and buy without re-running the calculator. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="dog-com"
            title="Harness & collar size chart"
            subtitle="Email the size bands, fit check, and shoppable walk kit. No spam."
            ctaText="Email my harness size chart"
            source="tools-harness-collar-size-under-hero"
          />
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-5xl">
          <Calculator />
        </div>
      </section>

      {/* Money path — live amazon-brand search hops (walk kit).
          ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
          Category searches only — not a ranked list, not a brand guarantee. */}
      <section id="walk-kit" className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <AffiliateDisclosure variant="inline" siteId="dog-com" />
          <div className="mt-4 rounded-xl border border-brand-border bg-brand-white p-5">
            <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Shop a walk kit
            </div>
            <p className="mb-4 text-sm leading-relaxed text-brand-text-mid">
              These Amazon category searches match the neck and chest bands you
              just calculated — a Julius-K9-style harness and a flat buckle
              collar (same queries this tool already used), a measuring tape
              (same query as the{' '}
              <Link href="/tools/dog-body-condition-score" className="text-brand-primary underline-offset-2 hover:underline">
                body condition score
              </Link>
              {' '}tool and the{' '}
              <Link href="/tools/puppy-weight-predictor" className="text-brand-primary underline-offset-2 hover:underline">
                puppy weight predictor
              </Link>
              ), a leash (same query as the{' '}
              <Link href="/tools/dog-exercise-calculator" className="text-brand-primary underline-offset-2 hover:underline">
                exercise calculator
              </Link>
              ), and a front-clip no-pull harness for dogs that pull (same
              query as the{' '}
              <Link href="/training/loose-leash-walking" className="text-brand-primary underline-offset-2 hover:underline">
                loose-leash walking
              </Link>
              {' '}guide). They are not a ranked product list, not invented
              inventory, and they are not a brand size guarantee. Match the
              tape to the product chart before you buy — see the{' '}
              <Link href="/reviews/best-dog-harnesses" className="text-brand-primary underline-offset-2 hover:underline">
                harness buyer&apos;s guide
              </Link>
              . Dog.com earns a commission on qualifying purchases at no extra
              cost to you. Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/julius+k9+idc+powerharness?s=tools-harness-collar-size"
                amazonLabel="Browse harnesses on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/flat+buckle+nylon+dog+collar?s=tools-harness-collar-size"
                amazonLabel="Browse collars on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/dog+measuring+tape+body+condition+chart?s=tools-harness-collar-size"
                amazonLabel="Browse measuring tapes on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/dog+leash?s=tools-harness-collar-size"
                amazonLabel="Browse leashes on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/front+clip+no+pull+dog+harness?s=tools-harness-collar-size"
                amazonLabel="Browse front-clip harnesses on Amazon →"
              />
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-brand-text-mid">
            Compare styles on the{' '}
            <Link href="/reviews/best-dog-harnesses" className="text-brand-primary underline-offset-2 hover:underline">
              harness buyer&apos;s guide
            </Link>
            , then use a front-clip for pulling — see{' '}
            <Link href="/training/loose-leash-walking" className="text-brand-primary underline-offset-2 hover:underline">
              loose-leash walking
            </Link>
            . Day-one kit lives on the{' '}
            <Link href="/tools/new-puppy-checklist" className="text-brand-primary underline-offset-2 hover:underline">
              new-puppy checklist
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <h2 className="mb-4 font-display text-2xl font-semibold text-brand-dark">How the size bands work</h2>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            Retail collars and harnesses are sold in letter sizes that map to a neck or chest range.
            The calculator uses typical US bands: a medium collar is often 14–18 inches of neck; a
            medium harness is often 22–28 inches of chest. If your tape sits within half an inch of
            the next band, the result sizes up — extra adjuster travel is safer than a strap that
            will not buckle.
          </p>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            Weight and size class fill in only when a measurement is missing. A barrel-chested dog
            can wear a larger harness than the weight chart suggests; a deep-coated dog can need
            more neck room than a smooth-coated dog of the same pounds. Confirm the product chart
            on the{' '}
            <Link href="/reviews/best-dog-harnesses" className="text-brand-primary underline-offset-2 hover:underline">
              harness reviews
            </Link>{' '}
            before you buy, and size a crate separately with the{' '}
            <Link href="/tools/dog-crate-size-calculator" className="text-brand-primary underline-offset-2 hover:underline">
              crate size calculator
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
            title="Walk-gear size notes"
            subtitle="Collar and harness fit reminders plus new Dog.com tools. No spam."
            ctaText="Send the size notes"
            source="tools-harness-collar-size"
          />
        </div>
      </section>

      <CrossPortfolioCard currentSite="dog-com" contentType="tool" variant="footer" />
    </>
  )
}

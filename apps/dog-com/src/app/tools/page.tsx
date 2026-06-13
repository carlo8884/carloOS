import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  EmailCapture,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
  StockImage,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Dog Tools & Calculators | Dog.com',
  description:
    'Free, source-cited dog care calculators. Start with the Dog Calorie Calculator: RER and daily intake estimates using WSAVA/AAHA-style life-stage factors.',
  path: '/tools',
})

const TOOLS = [
  {
    href: '/tools/is-this-a-dog-emergency',
    title: 'Is This a Dog Emergency?',
    desc: 'Check the signs you are seeing against veterinary emergency-medicine criteria and get a conservative urgency read -- go now, same-day vet, or monitor closely. A triage aid to help you decide how urgently to seek care, not a diagnosis.',
    tag: 'Health',
  },
  {
    href: '/tools/dog-calorie-calculator',
    title: 'Dog Calorie Calculator',
    desc: 'Estimate your dog\'s daily calorie needs (kcal/day) using the standard RER formula (70 x kg^0.75) and WSAVA/AAHA-style life-stage factors. Includes optional cups-per-day output from your food\'s calorie density.',
    tag: 'Nutrition',
  },
  {
    href: '/tools/dog-age-calculator',
    title: 'Dog Age in Human Years Calculator',
    desc: 'Convert your dog\'s age to a human-year equivalent using the AVMA/AAHA-style banded model -- not the inaccurate multiply-by-7 rule. Accounts for size (small, medium, large, giant) and outputs a qualitative life-stage label.',
    tag: 'Life Stage',
  },
  {
    href: '/tools/puppy-weight-predictor',
    title: 'Puppy Weight Predictor',
    desc: 'How big will your puppy get? Estimate adult weight as a range from current age and weight using the standard growth-percentage method and published size-class growth curves -- toy, small, medium, large, and giant breeds mature on different curves.',
    tag: 'Puppy',
  },
  {
    href: '/tools/dog-chocolate-toxicity-calculator',
    title: 'Dog Chocolate Toxicity Calculator',
    desc: 'My dog ate chocolate -- how much is dangerous? Estimate theobromine exposure by chocolate type, amount, and body weight against standard veterinary dose bands. Educational only: every result tells you to call your vet or poison control right now.',
    tag: 'Health',
  },
  {
    href: '/tools/dog-gestation-calculator',
    title: 'Dog Pregnancy & Whelping Calendar',
    desc: 'How long are dogs pregnant? Enter the breeding date to get the estimated whelping (due) date -- the 63-day canine average plus the normal 58-68 day window -- with the typical ultrasound, X-ray, and temperature-drop checkpoints mapped onto your calendar. Breeding info, not a diagnosis.',
    tag: 'Breeding',
  },
  {
    href: '/tools/dog-ideal-weight-calculator',
    title: 'Dog Ideal Weight Calculator',
    desc: 'How much should my dog weigh? Get the healthy adult weight range by breed (AKC-standard) plus an estimated ideal weight from your dog\'s body condition score on the 9-point WSAVA scale. Every result defers a target weight to your veterinarian.',
    tag: 'Nutrition',
  },
  {
    href: '/tools/dog-crate-size-calculator',
    title: 'Dog Crate Size Calculator',
    desc: 'What size crate does my dog need? Enter your dog\'s length and standing height to get the minimum internal crate dimensions and the recommended standard crate size (18–48"), plus puppy divider guidance.',
    tag: 'Gear',
  },
]

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Dog.com', url: 'https://dog.com/' },
    { name: 'Tools', url: 'https://dog.com/tools' },
  ],
})

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Dog.com calculators and tools',
  itemListElement: TOOLS.map((tool, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'WebApplication',
      name: tool.title,
      description: tool.desc,
      url: `https://dog.com${tool.href}`,
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'Web',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
  })),
}

const combinedSchema = combineSchemas(breadcrumbSchema, itemListSchema)

export default function ToolsHub() {
  return (
    <>
      <SchemaScript schema={combinedSchema} />

      {/* Hero */}
      <section className="bg-brand-dark px-container-sm sm:px-container py-section relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(ellipse at 30% 50%, rgba(30, 80, 160, 0.5) 0%, transparent 60%)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
              Calculators &amp; Tools
            </span>
          </div>
          <h1
            className="font-display font-bold text-white tracking-tight leading-none mb-5"
            style={{ fontSize: 'clamp(40px, 5.5vw, 64px)' }}
          >
            Dog care calculators,{' '}
            <span className="italic font-normal">source-cited.</span>
          </h1>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
            Free tools built on published veterinary guidelines -- not arbitrary numbers. Every
            formula is cited and labeled as an estimate; every result includes a reminder to
            confirm with your veterinarian.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2"
      >
        <Link href="/" className="hover:text-brand-primary no-underline">Dog.com</Link>
        <span>&#8250;</span>
        <span className="text-brand-text-mid font-medium">Tools</span>
      </nav>

      <div className="px-container-sm sm:px-container pt-8">
        <StockImage manifestKey="dog-com:tools-hero" aspect="16:9" variant="wide" priority />
      </div>

      {/* Tool cards */}
      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="grid md:grid-cols-2 gap-5 max-w-5xl">
          {TOOLS.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group block rounded-lg border border-brand-border bg-brand-surface p-6 transition hover:border-brand-primary"
            >
              <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                {tool.tag}
              </div>
              <h2 className="mb-2 font-display text-2xl font-semibold text-brand-text-dark group-hover:text-brand-primary">
                {tool.title}
              </h2>
              <p className="text-sm leading-relaxed text-brand-text-mid">{tool.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Context section */}
      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <h2 className="mb-4 font-display text-2xl font-semibold text-brand-text-dark">
            Why source-cited tools matter
          </h2>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            The internet is full of dog calorie calculators that do not disclose their formulas or
            cite their sources. This hub exists to close that gap. Every tool here uses a published,
            verifiable equation -- the RER formula and WSAVA/AAHA-style life-stage factors are
            documented in veterinary nutrition literature, not invented for this site. Every result
            is labeled as an estimate and includes guidance to calibrate with a veterinarian.
          </p>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            For the reference content that explains what these numbers mean, start with{' '}
            <Link
              href="/nutrition/how-much-to-feed"
              className="text-brand-primary underline-offset-2 hover:underline"
            >
              how much to feed a dog
            </Link>
            , which explains body condition scoring and how to adjust from a starting estimate.
            The{' '}
            <Link
              href="/nutrition"
              className="text-brand-primary underline-offset-2 hover:underline"
            >
              nutrition hub
            </Link>{' '}
            covers the broader diet context: food label reading, WSAVA guidelines, and condition-specific diets.
          </p>
        </div>
      </section>

      {/* Email capture */}
      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-2xl">
          <EmailCapture
            siteId="dog-com"
            variant="inline"
            title="Dog.com tool updates"
            subtitle="New calculators and source-cited dog care references. No spam."
            source="tools-hub"
          />
        </div>
      </section>
    </>
  )
}

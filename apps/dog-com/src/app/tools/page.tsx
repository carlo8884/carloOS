import type { Metadata } from 'next'
import Link from 'next/link'
import {
  AffiliateDisclosure,
  buildMetadata,
  buildBreadcrumbSchema,
  combineSchemas,
  EmailCapture,
  SchemaScript,
  ShopCtas,
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
    desc: 'Check the signs you are seeing against veterinary emergency-medicine criteria and get a conservative urgency read -- go now, same-day vet, or monitor closely. Email a fridge triage cheat sheet, then shop an emergency-prep kit (first-aid, thermometer, soft carrier, styptic powder, tick remover). A triage aid, not a diagnosis.',
    tag: 'Health',
  },
  {
    href: '/tools/dog-grimace-scale',
    title: 'Dog Grimace Scale',
    desc: 'Is your dog in pain? Score five facial signs — ears, eyes, muzzle, brow, head — on this owner pain-face checklist, then shop an observation / comfort kit (first-aid kit, soft recovery cone, orthopedic bed, ice pack wrap, calming chews). Planning / observation reference, not a diagnosis. High-pain faces go to emergency triage first, not a shopping list.',
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
    desc: 'Convert your dog\'s age to a human-year equivalent using the AVMA/AAHA-style banded model -- not the inaccurate multiply-by-7 rule. Accounts for size and a life-stage label, then shop by stage (puppy food / teething toys, adult dental chews, senior joint support, ID tag, leash).',
    tag: 'Life Stage',
  },
  {
    href: '/tools/puppy-weight-predictor',
    title: 'Puppy Weight Predictor',
    desc: 'How big will your puppy get? Estimate adult weight as a range from current age and weight using the standard growth-percentage method and published size-class growth curves, then shop a growth kit (scale, puppy food, crate with divider, slow feeder). Planning estimate, not a diagnosis.',
    tag: 'Puppy',
  },
  {
    href: '/tools/dog-chocolate-toxicity-calculator',
    title: 'Dog Chocolate Toxicity Calculator',
    desc: 'My dog ate chocolate -- how much is dangerous? Estimate theobromine exposure by chocolate type, amount, and body weight against standard veterinary dose bands — then shop a chocolate-safety kit (first-aid, emergency kit, crate for quiet rest). Educational only: every result tells you to call your vet or poison control right now.',
    tag: 'Health',
  },
  {
    href: '/tools/dog-gestation-calculator',
    title: 'Dog Pregnancy & Whelping Calendar',
    desc: 'How long are dogs pregnant? Enter the breeding date to get the estimated whelping (due) date -- the 63-day canine average plus the 58-68 day window -- then pack a whelping-kit checklist (box, pads, scale, thermometer, bulb syringe, towels). Breeding info, not a diagnosis.',
    tag: 'Breeding',
  },
  {
    href: '/tools/dog-ideal-weight-calculator',
    title: 'Dog Ideal Weight Calculator',
    desc: 'How much should my dog weigh? Get the healthy adult weight range by breed (AKC-standard) plus an estimated ideal weight from your dog\'s body condition score on the 9-point WSAVA scale, then shop a weight-check kit (scale, portion tools, slow feeder). Every result defers a target weight to your veterinarian.',
    tag: 'Nutrition',
  },
  {
    href: '/tools/dog-crate-size-calculator',
    title: 'Dog Crate Size Calculator',
    desc: 'What size crate does my dog need? Enter your dog\'s length and standing height to get the minimum internal crate dimensions and the recommended standard crate size (18–48"), plus puppy divider guidance, then shop a crate kit (wire crate with divider, crate pad, crate cover, puppy training pads).',
    tag: 'Gear',
  },
  {
    href: '/tools/harness-collar-size',
    title: 'Harness & Collar Size Calculator',
    desc: 'What size harness and collar does my dog need? Enter weight or size class plus neck and chest measurements for typical S–XL bands, fit tips, and when to size up, then shop a walk kit (harness, collar, measuring tape, leash).',
    tag: 'Gear',
  },
  {
    href: '/tools/dog-body-condition-score',
    title: 'Dog Body Condition Score',
    desc: 'Is your dog under or overweight? Answer three hands-on checks — rib feel, waist from above, belly tuck from the side — to estimate your dog\'s body condition score on the 1–9 scale, then shop a BCS / weight-management kit (measuring tape, portion scale, slow feeder). Educational only: every result defers a target weight to your veterinarian.',
    tag: 'Health',
  },
  {
    href: '/tools/dog-exercise-calculator',
    title: 'Dog Exercise Calculator',
    desc: 'How much exercise does your dog need? Get a daily target by life stage and energy level — including the joint-safe 5-minute-per-month rule for puppies and low-impact senior guidance — then shop walk gear (leash, harness, fetch toys, activity tracker).',
    tag: 'Health',
  },
  {
    href: '/tools/new-puppy-checklist',
    title: 'New Puppy Checklist',
    desc: 'What do you need for a new puppy? Pick adult size, pickup age, indoor or outdoor, crate training, and budget for a checkable first-week list — crate, food, bowls, harness, teething toys — then shop the kit on Amazon.',
    tag: 'New Owner',
  },
  {
    href: '/tools/puppy-first-year-budget',
    title: 'Puppy First-Year Budget',
    desc: 'How much does a puppy cost in year one? Pick adult size and how the puppy arrives for an editable planning total — crate and gear, food, first-year vet, and training — then shop the first-year kit (wire crate with divider, puppy food, scale, training pads). Not a quote.',
    tag: 'New Owner',
  },
  {
    href: '/tools/dog-water-intake-calculator',
    title: 'Dog Water Intake Calculator',
    desc: 'How much water should my dog drink? Enter body weight for a typical daily intake range in ounces, millilitres, and cups — then shop a hydration kit (water bowl, fountain, travel bottle, measuring cup). A sustained jump or drop in drinking is worth a vet call.',
    tag: 'Health',
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

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-8 pb-0">
        <div className="max-w-content-wide">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the dog tools-hub checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Dog tools-hub checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the laminated-dog-calculator-tools-chart,
            fridge-measurement-card, and
            canine-calculator-reference-handbook notes that
            match the calculator-section-map,
            per-dog-measurement-log, and
            RER-WSAVA-and-crate-size copy on this hub — a
            laminated dog calculator-tools chart so the
            section map (calories, crate size, harness fit,
            age, water, BCS, exercise, gestation, ideal
            weight, emergency, grimace, chocolate, puppy
            checklist, first-year budget) is posted on the
            fridge (not a first-aid chart, not a health-hub
            chart, not a crate-size chart), a dog fridge
            measurement card so each dog&apos;s calorie
            estimate, crate minimums, harness band, and
            water range is labeled on the fridge (not a
            first-aid card, not a crate-pad card, not a
            harness-fit card), and a canine calculator
            reference handbook so the RER / WSAVA /
            crate-clearance grounding is a physical kitchen
            book (not a first-aid handbook, not a health
            handbook, not a crate-training handbook).
            Educational kitchen checklist, not a treatment,
            not a ranked product list, and not a substitute
            for a veterinarian. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="dog-com"
            title="Dog tools-hub checklist"
            subtitle="Email the calculator-tools-chart, fridge measurement-card, and calculator-handbook notes. No spam."
            ctaText="Email my dog tools-hub checklist"
            source="tools-hub-under-hero"
          />
        </div>
      </section>

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
            The{' '}
            <Link
              href="/tools/dog-grimace-scale"
              className="text-brand-primary underline-offset-2 hover:underline"
            >
              dog grimace scale
            </Link>{' '}
            is the pain-face twin of Vets.co&apos;s cat grimace tool: five facial signs, a planning
            total, and a reminder that high-pain faces go to{' '}
            <Link
              href="/tools/is-this-a-dog-emergency"
              className="text-brand-primary underline-offset-2 hover:underline"
            >
              emergency triage
            </Link>{' '}
            first.
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
            A laminated dog calculator-tools chart is how the hub map (calories, crate size, harness fit, age, water, BCS, exercise, gestation, ideal weight, emergency, grimace, chocolate, puppy checklist, first-year budget) stays posted on the fridge — it is not a laminated first-aid chart (that lives on the health hub), not a laminated crate-size chart (that lives on the crate-size tool), and not a laminated harness-fit chart (that lives on the harness tool).
            A dog fridge measurement card is how each dog&apos;s calorie estimate, crate minimums, harness band, and water range is labeled on the fridge — it is not a first-aid card, not a crate-pad card, and not a harness-fit card (those live on the health hub and the child tools).
            A canine calculator reference handbook is how the RER / WSAVA / crate-clearance grounding sits in the kitchen — it is not a canine first-aid handbook and not a canine health handbook (those live on the health hub).
          </p>
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <h2 id="kit" className="font-display font-bold text-brand-dark text-xl mb-4 max-w-content-wide">
          Tools-hub kitchen kit
        </h2>
        <p className="max-w-content-wide text-sm text-brand-text-mid leading-relaxed">
          Everyday physical supplies that match the
          calculator-section-map, per-dog-measurement-log,
          and RER-WSAVA-and-crate-size copy on this hub — a
          laminated dog calculator-tools chart so the
          section map is posted on the fridge, a dog fridge
          measurement card so each dog&apos;s calorie
          estimate, crate minimums, harness band, and water
          range is labeled on the fridge, and a canine
          calculator reference handbook so the RER / WSAVA /
          crate-clearance grounding is a physical kitchen
          book. These are educational kitchen searches, not
          a ranked product list, not a substitute for a
          veterinarian, not a first-aid-kit / thermometer /
          carrier hop (those live on the health hub), and
          not a wire-crate / crate-pad / crate-cover /
          harness hop (those live on the tool children).
          This page does not hop medications or vaccines.
          This page does not claim hands-on testing.
        </p>

        <div className="max-w-content-wide mt-6">
          <AffiliateDisclosure variant="inline" siteId="dog-com" />
        </div>

        {/* Money path — live amazon-brand search hops
            (laminated dog calculator-tools chart /
            dog fridge measurement card /
            canine calculator reference handbook).
            Educational kitchen searches only; no Rx /
            vaccine ASIN hops. ShopCtas hides empty
            Chewy; never href="#" or PLACEHOLDER.
            Unused vs health-hub
            pet+first+aid+kit / digital+pet+thermometer /
            soft+dog+carrier / dental+chews+dog /
            orthopedic+dog+bed, tool children
            wire+dog+crate+with+divider+panel /
            dog+crate+pad / dog+crate+cover /
            puppy+training+pads. */}
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose max-w-content-wide">
          <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            Shop the tools-hub kitchen kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            These Amazon category searches match the
            on-page calculator-section-map,
            per-dog-measurement-log, and
            RER-WSAVA-and-crate-size copy — a laminated
            dog calculator-tools chart, a dog fridge
            measurement card, and a canine calculator
            reference handbook. Educational kitchen
            searches only. They are not a ranked product
            list, they are not a first-aid-kit /
            thermometer / carrier hop, they are not a
            wire-crate / crate-pad / crate-cover hop, and
            they do not replace a veterinarian. Dog.com
            earns a commission on qualifying purchases at
            no extra cost to you. Empty Chewy buttons stay
            hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/laminated+dog+calculator+tools+chart?s=tools-hub"
              amazonLabel="Browse laminated dog calculator-tools charts on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/dog+fridge+measurement+card?s=tools-hub"
              amazonLabel="Browse dog fridge measurement cards on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/canine+calculator+reference+handbook?s=tools-hub"
              amazonLabel="Browse canine calculator reference handbooks on Amazon →"
            />
          </div>
        </div>
      </section>

    </>
  )
}

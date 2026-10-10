import { HopDisclosure } from '../../../components/HopDisclosure'
import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildArticleSchema,
  buildMetadata,
  buildBreadcrumbSchema,
  buildHowToSchema,
  combineSchemas,
  SchemaScript,
  FAQAccordion,
  CrossPortfolioCard,
  ShopCtas,
  JourneyNext,
} from '@carloOS/ui'
import Calculator from './Calculator'
import { crossSiteHref } from '@carloOS/config'


export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Dog Calorie Calculator — RER & Daily Intake | Dog.com',
  description:
    'Estimate daily calories with the WSAVA July 2020 adult chart (95 or 130 × kg^0.75). Other life-stage multipliers are planning figures.',
  path: '/tools/dog-calorie-calculator',
})

const FAQS = [
  {
    question: 'How is a dog\'s daily calorie need calculated?',
    answer:
      'Healthy adult maintenance follows the WSAVA July 2020 chart, which cites the 2006 NRC: 95 times kg to the power 0.75 for an inactive adult, and 130 times kg to the power 0.75 for an active adult. Other multipliers, including 1.6 for a neutered adult, are planning figures on resting energy (70 times kg to the power 0.75). They are not rows on that chart. The result is an estimate. Body condition still belongs with a veterinarian.',
    answerText:
      'Inactive adult: 95 x kg^0.75. Active adult: 130 x kg^0.75 (WSAVA July 2020, citing 2006 NRC). Other multipliers from 1.0 to 3.0 are planning figures on 70 x kg^0.75.',
  },
  {
    question: 'What weight should I enter -- current or target?',
    answer:
      'For a dog at a healthy weight, use the current weight. For a dog that needs to lose weight, use the target (ideal) weight as assessed by your veterinarian -- using the current overweight body mass would overestimate calorie needs and slow progress. For a dog gaining weight, use current weight. Your veterinarian can assign a body condition score (BCS) and recommend a target weight.',
    answerText:
      'Use current weight for healthy or weight-gain dogs. Use the veterinarian-assessed target weight for dogs on a weight-loss plan. BCS from your vet determines which applies.',
  },
  {
    question: 'How do I find the kcal/cup figure for my dog\'s food?',
    answer:
      'Every commercial dog food sold in the US is required to include a calorie statement on the label. Look for a line like "3,600 kcal ME/kg" or "350 kcal/cup" -- it may be in small print near the guaranteed analysis or on the back panel. If you do not see it on the bag, the brand\'s website or AAFCO-compliant label will list it. The kcal/cup figure varies significantly by food (roughly 270-500 kcal/cup for kibble), so always use the number specific to the food your dog eats.',
    answerText:
      'Check the calorie statement on the food bag (required by US law) -- usually listed as "kcal/cup" or "ME kcal/cup." It is typically 270-500 kcal/cup for dry kibble. Use the exact figure for your specific food.',
  },
  {
    question: 'Why does this calculator say "estimate" and not "prescription"?',
    answer:
      'Calorie formulas give a population-level starting point, not an individual prescription. A dog\'s actual metabolic rate depends on breed, body composition, neuter status, health status, temperature, and individual variation. The WSAVA Nutritional Assessment Guidelines state that energy requirements can vary by 30% in either direction for dogs, particularly the maintenance energy requirement (https://pmc.ncbi.nlm.nih.gov/articles/PMC11107980/). Feed near the estimate, then adjust up or down over 4-6 weeks based on body condition score. Your veterinarian should confirm the target weight and review any significant calorie restriction.',
    answerText:
      'The WSAVA Nutritional Assessment Guidelines state that energy requirements can vary by 30% in either direction for dogs, particularly the maintenance energy requirement (https://pmc.ncbi.nlm.nih.gov/articles/PMC11107980/). Adjust over 4-6 weeks using body condition and veterinary guidance.',
  },
  {
    question: 'Do treats count toward the daily calorie target?',
    answer:
      'Yes. The WSAVA guide to treats for dogs states that treats should make up no more than 10% of a dog\'s daily calorie intake (https://wsava.org/wp-content/uploads/2025/11/WSAVA_GuidetoTreats_Dogs_251107.pdf). That 10% is not a row on the WSAVA July 2020 calorie chart. Subtract treat calories from the estimate before you portion the bowl. Weigh meals on a kitchen scale rather than a measuring cup: how full the cup is changes the portion. A separate planning figure is that a heaped cup can run about 20% high. That 20% is not a fetched measurement.',
    answerText:
      'The WSAVA guide to treats for dogs states that treats should make up no more than 10% of a dog\'s daily calorie intake (https://wsava.org/wp-content/uploads/2025/11/WSAVA_GuidetoTreats_Dogs_251107.pdf). A heaped cup about 20% high is a planning figure. Weigh meals on a kitchen scale.',
  },
]

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Dog.com', url: 'https://dog.com/' },
    { name: 'Tools', url: 'https://dog.com/tools' },
    { name: 'Dog Calorie Calculator', url: 'https://dog.com/tools/dog-calorie-calculator' },
  ],
})

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Dog Calorie Calculator',
  description:
    'Free dog calorie calculator using the standard RER formula (70 x kg^0.75) and the WSAVA July 2020 adult chart; other multipliers are planning figures. Outputs kcal/day and optional cups/day.',
  url: 'https://dog.com/tools/dog-calorie-calculator',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

const howToSchema = buildHowToSchema({
  name: 'How to calculate a dog\'s daily calorie needs',
  description: 'Estimate daily calorie requirements (RER and MER) using the standard veterinary formula and the WSAVA July 2020 adult chart, with other life-stage multipliers labeled as planning figures.',
  url: 'https://dog.com/tools/dog-calorie-calculator',
  steps: [
    {
      name: 'Enter your dog\'s weight',
      text: 'Optionally pick a size class to pre-fill a typical adult weight, then enter your dog\'s body weight in pounds or kilograms. For weight-loss dogs, use the veterinarian-assessed target weight rather than the current weight.',
    },
    {
      name: 'Select the life stage',
      text: 'Inactive and active adults use the WSAVA July 2020 chart (95 or 130 times kg to the power 0.75). Neutered, intact, puppy, senior, and weight-change rows are planning figures on resting energy.',
    },
    {
      name: 'Read the kcal/day estimate',
      text: 'Inactive adults use 95 times kg to the power 0.75. Active adults use 130 times kg to the power 0.75. Planning rows multiply 70 times kg to the power 0.75 by their factor. For cups per day, enter kcal/cup from the label.',
    },
    {
      name: 'Use as a starting point and monitor',
      text: 'Feed near the estimate for 4–6 weeks, then adjust up or down by 10–20% based on your dog\'s body condition score. Confirm any significant calorie restriction with your veterinarian.',
    },
  ],
})

const articleSchema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Dog Calorie Calculator',
  description: 'Estimate your dog\'s daily calorie needs using the standard RER formula and the WSAVA July 2020 adult chart, with other life-stage multipliers labeled as planning figures. Enter weight, pick a life stage, and get kcal/day -- plus optional cups/day if you enter your food\'s calorie density.',
  url: 'https://dog.com/tools/dog-calorie-calculator',
  imageUrl: '',
  authorName: 'Dog.com Editorial',
})
const schema = combineSchemas(breadcrumbSchema, appSchema, howToSchema, articleSchema)

export default function DogCalorieCalculatorPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      {/* Hero */}
      <section className="bg-brand-dark px-container-sm sm:px-container py-10 sm:py-14 relative overflow-hidden">
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
            className="font-display font-bold text-white tracking-tight leading-none mb-4"
            style={{ fontSize: 'clamp(30px, 4vw, 46px)' }}
          >
            Dog Calorie Calculator
          </h1>
          <p className="text-base text-white/60 leading-relaxed max-w-2xl">
            Estimate your dog&apos;s daily calorie needs with the WSAVA July 2020 adult chart. Other life-stage
            multipliers are planning figures. Enter weight, pick a life stage, and get kcal/day -- plus optional
            cups/day if you enter your food&apos;s calorie density.
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
        <Link href="/tools" className="hover:text-brand-primary no-underline">Tools</Link>
        <span>&#8250;</span>
        <span className="text-brand-text-mid font-medium">Dog Calorie Calculator</span>
      </nav>
      {/* Calculator */}
      <section className="bg-brand-surface px-container-sm sm:px-container py-10 sm:py-12">
        <div className="max-w-4xl">
          <Calculator />
          <JourneyNext
            siteId="dog-com"
            nextHref="/tools/dog-body-condition-score"
            nextLabel="Check the number against body condition"
            nextBlurb="The calculator is a starting scoop. BCS is whether that scoop is right — ribs felt, waist seen. Weigh the meal; The button below opens the same kitchen-scale search on Amazon."
            resourceHref="/go/amazon-brand/kitchen+gram+scale?s=tools-dog-calorie-calculator"
            resourceLabel="Browse kitchen gram scales on Amazon →"
          />
        </div>
      </section>

      {/* Shop note — live amazon-brand search buttons (food / scale / feeders / treats).
          Twin of vets.co cat-calorie-calculator. ShopCtas hides empty Chewy;
          never href="#" or an empty link. Amazon searches only — not ranked product pages. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <HopDisclosure siteId="dog-com" href={["/go/amazon-brand/measured+dog+food?s=tools-dog-calorie-calculator", "/go/amazon-brand/kitchen+gram+scale?s=tools-dog-calorie-calculator", "/go/amazon-brand/slow+feeder+dog+bowl?s=tools-dog-calorie-calculator", "/go/amazon-brand/interactive+dog+feeder?s=tools-dog-calorie-calculator", "/go/amazon-brand/low+calorie+dog+treats?s=tools-dog-calorie-calculator"]} />
          <div className="mt-4 rounded-xl border border-brand-border bg-brand-white p-5">
            <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Shop portions
            </div>
            <p className="mb-4 text-sm leading-relaxed text-brand-text-mid">Amazon search links go to general supplies. They are not a ranked product list and they do not replace veterinary care.</p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/measured+dog+food?s=tools-dog-calorie-calculator"
                amazonLabel="Browse measured dog food on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/kitchen+gram+scale?s=tools-dog-calorie-calculator"
                amazonLabel="Browse kitchen gram scales on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/slow+feeder+dog+bowl?s=tools-dog-calorie-calculator"
                amazonLabel="Browse slow-feeder dog bowls on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/interactive+dog+feeder?s=tools-dog-calorie-calculator"
                amazonLabel="Browse interactive dog feeders on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/low+calorie+dog+treats?s=tools-dog-calorie-calculator"
                amazonLabel="Browse low-calorie dog treats on Amazon →"
              />
          </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-brand-text-mid">
            Compare formulas on the{' '}
            <Link
              href="/reviews/best-dry-dog-food"
              className="text-brand-primary underline-offset-2 hover:underline"
            >
              dry-food buyer&apos;s guide
            </Link>
            , then calibrate the target with the{' '}
            <Link
              href="/tools/dog-body-condition-score"
              className="text-brand-primary underline-offset-2 hover:underline"
            >
              body condition score
            </Link>{' '}
            tool. Weight-loss dogs should use a veterinarian-set target weight, not the current
            overweight number. The cat twin of this math lives on{' '}
            <a
              href={crossSiteHref('vets-co', '/tools/cat-calorie-calculator')}
              className="text-brand-primary underline-offset-2 hover:underline"
            >
              Vets.co&apos;s cat calorie calculator
            </a>
            . For how weight-related disease can change vet costs, read the educational{' '}
            <a
              href={crossSiteHref('vets-co', '/reviews/best-pet-insurance')}
              className="text-brand-primary underline-offset-2 hover:underline"
            >
              pet insurance review
            </a>
            {' '}— a coverage comparison, not a carrier ranking.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <h2 className="mb-4 font-display text-2xl font-semibold text-brand-text-dark">
            The formulas behind the estimate
          </h2>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            Healthy adult maintenance uses the WSAVA July 2020 chart, which cites the 2006 NRC:
            95 &times; kg^0.75 for an inactive adult and 130 &times; kg^0.75 for an active adult.
            The other multipliers — 1.6 neutered, 1.8 intact, 1.0 weight loss, 1.7 weight gain, 2.0 light work,
            3.0 and 2.0 for puppies, and 1.4 for a less active senior — are planning figures on
            RER = 70 &times; kg^0.75. They are not rows on that chart.
          </p>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            For how feeding amount intersects with body condition scoring and what to do when a dog
            is overweight, see the{' '}
            <Link
              href="/nutrition/how-much-to-feed"
              className="text-brand-primary underline-offset-2 hover:underline"
            >
              how much to feed
            </Link>{' '}
            guide. For the full context on nutrition labels, kcal statements, and what guaranteed
            analysis means, the{' '}
            <Link
              href="/nutrition/reading-food-labels"
              className="text-brand-primary underline-offset-2 hover:underline"
            >
              reading a dog food label
            </Link>{' '}
            guide explains each section. For dogs being managed for obesity, the{' '}
            <Link
              href="/nutrition/weight-management"
              className="text-brand-primary underline-offset-2 hover:underline"
            >
              weight management
            </Link>{' '}
            reference covers caloric restriction, body condition scoring, and veterinary supervision.
            This page is a planning / wellness reference, not a diagnosis or a diet plan. For a
            stable, non-emergency feeding question, start at{' '}
            <a href={crossSiteHref('vets-co', '/telehealth')} className="text-brand-primary underline-offset-2 hover:underline">
              telehealth
            </a>
            .
          </p>

          <div className="mb-8 rounded-xl border border-brand-border bg-brand-white p-5">
            <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Planning ahead
            </div>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Weight-related disease (diabetes, arthritis, pancreatitis) is one of the cost
              drivers pet insurance is built for. Comparing published coverage while a dog is
              young and healthy matters because pre-existing conditions are excluded. This is
              educational context, not a recommendation of any named carrier. For a stable,
              non-emergency feeding question, talk to a licensed vet on a screen rather than
              waiting for a gap to become an ER visit.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <a
                href={crossSiteHref('vets-co', '/reviews/best-pet-insurance')}
                className="inline-block bg-brand-dark text-white font-semibold text-sm px-4 py-2 rounded-md no-underline hover:bg-brand-dark/90"
              >
                Compare pet insurance →
              </a>
              <a
                href={crossSiteHref('vets-co', '/telehealth')}
                className="inline-block border border-brand-border bg-brand-white text-brand-dark font-semibold text-sm px-4 py-2 rounded-md no-underline hover:border-brand-primary"
              >
                Talk to a vet (telehealth) →
              </a>
            </div>
          </div>

          <h2 className="mb-4 mt-8 font-display text-2xl font-semibold text-brand-text-dark">
            Common questions
          </h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      {/* Related tools + reviews */}
      <section className="bg-brand-white border-t border-brand-border px-container-sm sm:px-container py-10">
        <div className="max-w-2xl">
          <h2 className="font-display text-lg font-bold text-brand-dark mb-4">Related Tools &amp; Reviews</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'Dog Age in Human Years Calculator', href: '/tools/dog-age-calculator', note: 'Convert calendar age to life-stage' },
              { label: 'Dog Grimace Scale', href: '/tools/dog-grimace-scale', note: 'Facial pain-watch — not a diagnosis' },
              { label: 'Best Dry Dog Food 2026', href: '/reviews/best-dry-dog-food', note: 'WSAVA-ranked foods by calorie density' },
              { label: 'Best Dog Food for Senior Dogs', href: '/reviews/best-dog-food-senior', note: 'Lower-calorie senior formulas' },
              { label: 'Best Dog Food for Small Breeds', href: '/reviews/best-dog-food-small-breed', note: 'High-calorie-density small breed foods' },
              { label: 'Best Large Breed Dog Food', href: '/reviews/best-large-breed-dog-food', note: 'Controlled-calorie large breed formulas' },
              { label: 'Breed Profiles — Exercise &amp; Energy', href: '/breeds', note: 'Energy level by breed affects calorie needs' },
              { label: 'Dog Body Condition Score', href: '/tools/dog-body-condition-score', note: 'Calibrate the kcal target to rib feel and waist' },
              { label: 'Dog Body Condition Score (BCS) — The 1–9 Scale, Step by Step', href: '/guides/dog-body-condition-score', note: 'How to score ribs, waist, and tuck on the 1–9 scale' },
              { label: 'Pet Insurance Review', href: crossSiteHref('vets-co', '/reviews/best-pet-insurance'), note: 'Educational coverage comparison, not a ranking' },
              { label: 'Talk to a vet (telehealth)', href: crossSiteHref('vets-co', '/telehealth'), note: 'Stable feeding questions, not an ER substitute' },
            ].map(item => (
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

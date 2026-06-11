import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  EmailCapture,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
  FAQAccordion,
  AffiliateDisclosure,
} from '@carloOS/ui'
import Calculator from './Calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Dog Calorie Calculator — RER & Daily Intake | Dog.com',
  description:
    'Estimate your dog\'s daily calorie needs using the standard RER formula (70 x kg^0.75) and WSAVA/AAHA-style life-stage factors. Free, with cups-per-day output.',
  path: '/tools/dog-calorie-calculator',
})

const FAQS = [
  {
    question: 'How is a dog\'s daily calorie need calculated?',
    answer:
      'The standard starting point is the Resting Energy Requirement (RER): 70 multiplied by the dog\'s body weight in kilograms raised to the power of 0.75. RER represents the energy needed at rest. To account for life stage and activity, RER is multiplied by a factor (the Maintenance Energy Requirement, or MER). A neutered adult typically uses a factor of 1.6; a very active dog might use 2.0; a growing puppy under 4 months uses 3.0. These factors follow the WSAVA/AAHA-style published guidelines. The result is an estimate -- individual dogs vary, and veterinary assessment of body condition score is essential for calibration.',
    answerText:
      'RER = 70 x (weight in kg)^0.75. MER = life-stage factor x RER. Factor ranges from 1.0 (weight loss) to 3.0 (young puppy). These are WSAVA/AAHA-style estimates; confirm with your veterinarian.',
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
      'Calorie formulas give a population-level starting point, not an individual prescription. A dog\'s actual metabolic rate depends on breed, body composition, neuter status, health status, temperature, and individual variation that no formula can capture. Studies have shown individual variation of 30% or more around the mean even within the same life stage. The right way to use this number is as a starting point: feed near the estimate, then adjust up or down over 4-6 weeks based on body condition score. Your veterinarian should confirm the target weight and review any significant calorie restriction.',
    answerText:
      'Formula estimates have 30%+ individual variation. Use as a starting point, then adjust over 4-6 weeks based on body condition score and veterinary guidance.',
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
    'Free dog calorie calculator using the standard RER formula (70 x kg^0.75) and WSAVA/AAHA-style life-stage MER factors. Outputs kcal/day and optional cups/day.',
  url: 'https://dog.com/tools/dog-calorie-calculator',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

const schema = combineSchemas(breadcrumbSchema, appSchema)

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
            Estimate your dog&apos;s daily calorie needs using the standard RER formula and WSAVA/AAHA-style
            life-stage factors. Enter weight, pick a life stage, and get kcal/day -- plus optional
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
        </div>
      </section>

      {/* Result next-step — shop foods matched to the calorie estimate.
          One tasteful, disclosed editorial path after the result. The
          comparison hub is where commercial /go food links live; we route
          there rather than putting a buy-box on a free tool. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <div className="rounded-xl border border-brand-border bg-brand-white p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              Next step
            </div>
            <p className="text-sm text-brand-text-mid leading-relaxed mb-3">
              Have your dog&apos;s daily calorie target? Foods vary widely in calorie
              density (roughly 270–500 kcal/cup), so the right pick makes hitting that
              number easier. Compare formulas matched to your dog&apos;s calorie needs and
              life stage.
            </p>
            <AffiliateDisclosure variant="inline" siteId="dog-com" className="mb-3 text-2xs" />
            <Link
              href="/reviews/best-dry-dog-food"
              className="inline-block bg-brand-primary text-white font-semibold text-sm px-4 py-2 rounded-md no-underline hover:bg-brand-primary-dark"
            >
              Compare foods by calorie density →
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <h2 className="mb-4 font-display text-2xl font-semibold text-brand-text-dark">
            The formulas behind the estimate
          </h2>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            The calculator uses two standard equations. First, Resting Energy Requirement (RER):
            70 multiplied by the dog&apos;s body weight in kilograms raised to the power of 0.75.
            RER is the baseline energy a dog needs at rest to maintain normal physiological functions.
            Second, Maintenance Energy Requirement (MER): a life-stage factor multiplied by RER.
            The factors -- 1.6 for neutered adults, 3.0 for very young puppies, 1.0 for a supervised
            weight-loss plan -- are the standard values cited in WSAVA Global Nutrition Guidelines and
            AAHA Nutritional Assessment Guidelines.
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
          </p>

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
              { label: 'Best Dry Dog Food 2026', href: '/reviews/best-dry-dog-food', note: 'WSAVA-ranked foods by calorie density' },
              { label: 'Best Dog Food for Senior Dogs', href: '/reviews/best-dog-food-senior', note: 'Lower-calorie senior formulas' },
              { label: 'Best Dog Food for Small Breeds', href: '/reviews/best-dog-food-small-breed', note: 'High-calorie-density small breed foods' },
              { label: 'Best Large Breed Dog Food', href: '/reviews/best-large-breed-dog-food', note: 'Controlled-calorie large breed formulas' },
              { label: 'Breed Profiles — Exercise &amp; Energy', href: '/breeds', note: 'Energy level by breed affects calorie needs' },
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

      {/* Email capture */}
      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-2xl">
          <EmailCapture
            siteId="dog-com"
            variant="inline"
            title="Dog.com nutrition &amp; tool updates"
            subtitle="Research-based dog nutrition guidance and new tool announcements. No spam."
            source="tools-dog-calorie-calculator"
          />
        </div>
      </section>
    </>
  )
}

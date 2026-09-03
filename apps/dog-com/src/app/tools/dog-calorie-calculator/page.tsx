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
  {
    question: 'Do treats count toward the daily calorie target?',
    answer:
      'Yes. Treats should stay within about 10% of daily calories — training treats and table scraps both count. Subtract treat calories from the MER estimate before you portion the bowl. Weigh meals on a kitchen scale rather than a measuring cup: cups over-portion by roughly 20% depending on how they are filled. That 10% rule and the scale-over-cup note are the same husbandry guidance used on the weight-management and breed-feeding pages.',
    answerText:
      'Keep treats to about 10% of daily calories. Weigh meals on a kitchen scale; measuring cups often over-portion by about 20%.',
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

const howToSchema = buildHowToSchema({
  name: 'How to calculate a dog\'s daily calorie needs',
  description: 'Estimate daily calorie requirements (RER and MER) using the standard veterinary formula and WSAVA/AAHA-style life-stage factors.',
  url: 'https://dog.com/tools/dog-calorie-calculator',
  steps: [
    {
      name: 'Enter your dog\'s weight',
      text: 'Optionally pick a size class to pre-fill a typical adult weight, then enter your dog\'s body weight in pounds or kilograms. For weight-loss dogs, use the veterinarian-assessed target weight rather than the current weight.',
    },
    {
      name: 'Select the life stage',
      text: 'Choose the life stage that best fits your dog: neutered adult, intact adult, weight loss, active/working, puppy under 4 months, puppy 4–12 months, or senior. Each stage applies a different MER factor to the RER baseline.',
    },
    {
      name: 'Read the kcal/day estimate',
      text: 'The calculator computes RER (70 × weight_kg^0.75) and multiplies it by the life-stage MER factor to give kcal/day. For a cups-per-day estimate, also enter the kcal/cup from your food\'s label.',
    },
    {
      name: 'Use as a starting point and monitor',
      text: 'Feed near the estimate for 4–6 weeks, then adjust up or down by 10–20% based on your dog\'s body condition score. Confirm any significant calorie restriction with your veterinarian.',
    },
  ],
})

const schema = combineSchemas(breadcrumbSchema, appSchema, howToSchema)

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

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-8 pb-0">
        <div className="max-w-2xl">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the target
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Daily kcal worksheet
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the daily kcal target — RER, MER, and cups-per-day from your food label — so you
            can portion tomorrow without re-running the math. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="dog-com"
            title="Daily kcal worksheet"
            subtitle="Email the daily kcal target — RER, MER, and cups-per-day so you can portion tomorrow. No spam."
            ctaText="Email the kcal target"
            source="tools-dog-calorie-calculator-under-hero"
          />
        </div>
      </section>

      {/* Calculator */}
      <section className="bg-brand-surface px-container-sm sm:px-container py-10 sm:py-12">
        <div className="max-w-4xl">
          <Calculator />
        </div>
      </section>

      {/* Money path — live amazon-brand search hops (food / treats / scale).
          Reuses queries already shipped on reviews + training + ferret diet.
          ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <AffiliateDisclosure variant="inline" siteId="dog-com" />
          <div className="mt-4 rounded-xl border border-brand-border bg-brand-white p-5">
            <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Shop portions
            </div>
            <p className="mb-4 text-sm leading-relaxed text-brand-text-mid">
              Foods vary widely in calorie density (roughly 270–500 kcal/cup), so the label kcal/cup
              figure is what turns MER into a bowl amount. Training treats count toward the 10%
              treat budget. A gram kitchen scale beats a measuring cup — cups over-portion by
              roughly 20%. Same Amazon hops used on the{' '}
              <Link href="/reviews/best-dry-dog-food" className="text-brand-primary underline-offset-2 hover:underline">
                dry-food reviews
              </Link>{' '}
              and{' '}
              <Link href="/training/basic-commands" className="text-brand-primary underline-offset-2 hover:underline">
                basic-commands
              </Link>{' '}
              pages. Dog.com earns a commission on qualifying purchases at no extra cost to you.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/royal+canin+dry+dog+food?s=tools-dog-calorie-calculator"
                amazonLabel="Browse dry dog food on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/soft+small+dog+training+treats?s=tools-dog-calorie-calculator"
                amazonLabel="Browse training treats on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/digital+gram+scale+kitchen+pet?s=tools-dog-calorie-calculator"
                amazonLabel="Browse kitchen / pet scales on Amazon →"
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
            overweight number.
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
              { label: 'Dog Grimace Scale', href: '/tools/dog-grimace-scale', note: 'Facial pain-watch — not a diagnosis' },
              { label: 'Best Dry Dog Food 2026', href: '/reviews/best-dry-dog-food', note: 'WSAVA-ranked foods by calorie density' },
              { label: 'Best Dog Food for Senior Dogs', href: '/reviews/best-dog-food-senior', note: 'Lower-calorie senior formulas' },
              { label: 'Best Dog Food for Small Breeds', href: '/reviews/best-dog-food-small-breed', note: 'High-calorie-density small breed foods' },
              { label: 'Best Large Breed Dog Food', href: '/reviews/best-large-breed-dog-food', note: 'Controlled-calorie large breed formulas' },
              { label: 'Breed Profiles — Exercise &amp; Energy', href: '/breeds', note: 'Energy level by breed affects calorie needs' },
              { label: 'Dog Body Condition Score', href: '/tools/dog-body-condition-score', note: 'Calibrate the kcal target to rib feel and waist' },
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

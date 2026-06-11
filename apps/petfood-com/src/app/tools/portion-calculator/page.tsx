import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
  FAQAccordion,
  EmailCapture,
  AffiliateDisclosure,
  CrossPortfolioCard,
} from '@carloOS/ui'
import PortionCalculator from './Calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Dog & Cat Portion Calculator — Daily Calories | PetFood.com',
  description:
    'Calculate your dog or cat daily calorie needs using the standard RER/MER equations. Enter weight and life stage; get kcal/day and optional cups/day estimate.',
  path: '/tools/portion-calculator',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://petfood.com/' },
    { name: 'Tools', url: 'https://petfood.com/tools' },
    { name: 'Portion Calculator', url: 'https://petfood.com/tools/portion-calculator' },
  ],
})

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Dog & Cat Portion & Calorie Calculator',
  description:
    'Free interactive calculator that estimates daily caloric needs (RER and MER) for dogs and cats from body weight and life stage, with optional cups-per-day output.',
  url: 'https://petfood.com/tools/portion-calculator',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Resting Energy Requirement (RER) calculation: 70 x (weight_kg^0.75)',
    'Maintenance Energy Requirement (MER) per species and life stage',
    'Dog life stages: neutered adult, intact adult, weight loss, active/working, puppy under 4 months, puppy 4-12 months, senior',
    'Cat life stages: neutered adult, intact adult, weight loss, kitten, senior, obese-prone',
    'lb and kg weight input',
    'Optional cups-per-day output from food energy density (kcal/cup)',
    'WSAVA/AAHA-style standard MER factors',
  ],
  publisher: { '@type': 'Organization', name: 'PetFood.com Editorial', url: 'https://petfood.com' },
}

const schema = combineSchemas(breadcrumbSchema, appSchema)

const FAQS = [
  {
    question: 'What is RER and why does the calculator start there?',
    answer:
      'RER stands for Resting Energy Requirement — the calories a pet needs just to maintain basic body functions at rest (breathing, circulation, organ function). The formula is 70 multiplied by body weight in kilograms raised to the 0.75 power. This allometric equation is well-established in veterinary nutrition and is the foundation used by WSAVA and AAHA guidelines. MER (Maintenance Energy Requirement) then multiplies RER by a life-stage factor to account for activity, reproductive status, and growth.',
    answerText:
      'RER is the calories a pet needs at rest. Formula: 70 x (weight_kg^0.75). MER multiplies RER by a life-stage factor for activity, reproductive status, and growth. The approach follows WSAVA/AAHA guidelines.',
  },
  {
    question: 'How do I find the kcal-per-cup figure for my pet\'s food?',
    answer:
      'It is printed on the bag, usually near the feeding guide or guaranteed analysis panel. Look for "Caloric content" or "kcal/cup" — most bags list it as "X kcal/kg" and "Y kcal/cup (8 oz)." If your bag only shows kcal/kg, you can divide by roughly 4 to estimate kcal/cup for standard dry kibble, but the stated kcal/cup is always more accurate. Our ' +
      '<a href="/feeding/calorie-calculator-guide" class="text-brand-primary underline-offset-2 hover:underline">Calorie Calculator Guide</a>' +
      ' explains how to locate and use this number.',
    answerText:
      'It is printed on the bag near the feeding guide or guaranteed analysis. Look for "Caloric content" or "kcal/cup." If only kcal/kg is shown, divide by roughly 4 as an approximation for standard dry kibble.',
  },
  {
    question: 'Should I feed exactly the MER number?',
    answer:
      'MER is a starting point, not a prescription. Actual needs vary by individual metabolism, body condition, breed, health status, and even climate. Most veterinary nutritionists recommend starting at the calculated MER, monitoring body condition score over 2-4 weeks, and adjusting by 10-20% up or down based on whether the pet is gaining or losing weight relative to their target. Consult your veterinarian before making significant changes, especially for weight loss or any medical diet.',
    answerText:
      'MER is a starting point. Monitor body condition over 2-4 weeks and adjust by 10-20% based on response. Consult your veterinarian before significant changes, especially for weight loss or medical diets.',
  },
  {
    question: 'Why does the cat weight-loss factor look very low (0.8x RER)?',
    answer:
      'A 0.8x RER target for feline weight loss is consistent with published WSAVA/AAHA-style guidelines, but it is also the factor most critical to use only under veterinary supervision. Cats are uniquely susceptible to hepatic lipidosis (fatty liver disease) when calorie intake drops too quickly. A veterinarian should establish the target weight, confirm the starting point, and monitor progress — this is not a self-managed protocol.',
    answerText:
      'A 0.8x RER target for feline weight loss follows published WSAVA/AAHA guidelines but must only be used under veterinary supervision. Cats are susceptible to hepatic lipidosis when calories drop too fast.',
  },
]

export default function PortionCalculatorPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      <section className="bg-brand-dark px-container-sm sm:px-container py-section relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(ellipse at 30% 50%, rgba(80, 110, 70, 0.5) 0%, transparent 60%)' }}
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
            style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
          >
            Portion &amp; Calorie Calculator
          </h1>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
            How many calories does your dog or cat actually need each day? Enter weight and life
            stage; get the RER (resting requirement) and MER (maintenance requirement) in kcal,
            plus an optional cups-per-day estimate from the food&apos;s label.
          </p>
        </div>
      </section>

      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">PetFood.com</Link>
        <span>›</span>
        <Link href="/tools" className="hover:text-brand-primary no-underline">Tools</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Portion Calculator</span>
      </nav>

      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-5xl">
          <PortionCalculator />
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl rounded-lg border border-brand-border bg-brand-white p-6">
          <p className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
            Have your daily calorie target?
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-text-dark">
            Turn calories into the right food and portion
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-brand-text-mid">
            A calorie target is only useful once you match it to a complete, life-stage-appropriate
            food and its kcal-per-cup. Compare options with our independent{' '}
            <Link href="/brands" className="text-brand-primary underline-offset-2 hover:underline">
              brand evaluations
            </Link>
            , then run the chosen bag through the{' '}
            <Link href="/tools/food-cost-calculator" className="text-brand-primary underline-offset-2 hover:underline">
              food cost calculator
            </Link>
            .
          </p>
          <AffiliateDisclosure variant="inline" siteId="petfood-com" />
          <div className="mt-3 flex flex-wrap gap-3">
            <Link
              href="/brands"
              className="inline-flex items-center rounded-md bg-brand-primary px-4 py-2 text-sm font-semibold text-white no-underline hover:opacity-90"
            >
              Read brand evaluations
            </Link>
            <a
              href="/go/chewy-brand/complete%20balanced%20pet%20food?s=tools-portion-calculator"
              rel="nofollow sponsored"
              target="_blank"
              className="inline-flex items-center rounded-md border border-brand-border px-4 py-2 text-sm font-semibold text-brand-text-dark no-underline hover:bg-brand-surface"
            >
              Browse complete diets on Chewy →
            </a>
          </div>
          <p className="mt-3 text-xs text-brand-text-light">
            We earn a commission if you purchase through the retailer link — no extra cost to you, and we never rank by commission.
          </p>
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <h2 className="mb-4 font-display text-2xl font-semibold text-brand-text-dark">
            How the calculator works
          </h2>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            The calculator uses the standard RER/MER framework from WSAVA and AAHA-style veterinary
            nutrition guidelines. RER (Resting Energy Requirement) is the baseline caloric floor:
            70 multiplied by body weight in kilograms raised to the 0.75 power. MER (Maintenance
            Energy Requirement) then scales that baseline by a life-stage factor — a neutered adult
            dog at rest needs a different multiplier than a growing puppy or an active working dog.
          </p>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            For the narrative version of these formulas — what they measure, where the factors come
            from, and how to apply them confidently — see the{' '}
            <Link href="/feeding/calorie-calculator-guide" className="text-brand-primary underline-offset-2 hover:underline">
              Calorie Calculator Guide
            </Link>
            . To turn those calorie targets into a real food cost, use the{' '}
            <Link href="/tools/food-cost-calculator" className="text-brand-primary underline-offset-2 hover:underline">
              Pet Food Cost Calculator
            </Link>
            . The feeding guides under{' '}
            <Link href="/feeding" className="text-brand-primary underline-offset-2 hover:underline">
              Feeding
            </Link>{' '}
            add the life-stage and species context that sits behind the numbers.
          </p>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            The cups-per-day output requires the food&apos;s kcal-per-cup figure, which is printed
            on the bag near the feeding guide. It is a single additional input that converts a calorie
            target into a practical scoop count — useful for daily meal planning but dependent on
            the density of the specific food, so always check the label rather than estimating.
          </p>

          <h2 className="mb-4 mt-8 font-display text-2xl font-semibold text-brand-text-dark">
            What the calculator does not replace
          </h2>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            This tool produces a starting estimate based on population-level factors. It does not
            account for individual metabolic variation, underlying health conditions, concurrent
            medications, body condition score, or the specific nutrient density of your pet&apos;s
            food. A veterinarian who can assess body condition in person is the right person to set
            a final target, especially for any weight-loss or medical-diet scenario.
          </p>

          <h2 className="mb-4 mt-8 font-display text-2xl font-semibold text-brand-text-dark">
            Common questions
          </h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-2xl">
          <EmailCapture
            siteId="petfood-com"
            variant="inline"
            title="PetFood.com nutrition letter"
            subtitle="Pet nutrition references and tool updates. No spam."
            source="tools-portion-calculator"
          />
        </div>
      </section>

      <CrossPortfolioCard currentSite="petfood-com" contentType="tool" variant="footer" />
    </>
  )
}

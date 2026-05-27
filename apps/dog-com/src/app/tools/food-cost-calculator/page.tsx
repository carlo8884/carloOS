/**
 * Dog Food Cost Calculator — /tools/food-cost-calculator
 *
 * Server-rendered page wrapping a client-side calculator. Targets
 * "how much should I feed my dog" intent and funnels to affiliate-bearing
 * food review pages.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Breadcrumb,
  FAQAccordion,
  buildMetadata,
  buildFAQSchema,
  SchemaScript,
  EmailCapture,
} from '@carloOS/ui'
import { Calculator } from './Calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Dog Food Calculator — Daily Calories, Cups & Monthly Cost',
  description:
    'Calculates daily kcal using the RER × MER formula, then converts to cups per day and monthly food cost based on your bag\'s kcal density and price. Adult, puppy, senior, and weight-loss tiers.',
  path: '/tools/food-cost-calculator',
})

const FAQ_ITEMS = [
  {
    question: 'Where do these numbers come from?',
    answer:
      'The Resting Energy Requirement (RER) formula RER = 70 × (BW kg)^0.75 is the standard equation used by the National Research Council (2006) and cited by AAHA and WSAVA nutritional guidelines. The lifestyle multipliers (MER factors) are general starting points published by AAHA — every dog is different, and a body-condition score check at 2-4 weeks is the most reliable way to confirm the estimate is right for your dog.',
  },
  {
    question: 'Why is my dog gaining weight on the recommended amount?',
    answer:
      "Three usual causes: (1) the kcal/cup density on your bag is different from the preset you picked — always check the actual bag, (2) you are feeding treats above ~10% of daily calories, or (3) the activity multiplier is too high for your dog's real day. Drop one MER tier lower and re-check body condition in 3-4 weeks. Persistent weight gain on appropriate calories warrants a thyroid / Cushing's workup.",
  },
  {
    question: 'How much of the daily calories can be treats?',
    answer:
      "A widely-cited AAHA guideline is that treats should not exceed 10% of total daily calories. Above that, the complete-and-balanced ration drops below the level that meets the dog's vitamin and mineral needs. The calculator gives you the daily kcal total; multiply by 0.10 for your treat-kcal ceiling.",
  },
  {
    question: 'Is "feed by package recommendation" the same as this?',
    answer:
      "Package recommendations tend to overestimate — they are written assuming an active, intact, average-weight adult, which most pet dogs are not. If you follow the bag and your dog is gaining weight, the bag is not lying — it is just the wrong tier for your dog. The calculator gives a per-dog starting point. WSAVA's recommendation is the same: estimate, then adjust based on body condition.",
  },
  {
    question: 'Do I need a vet to confirm this?',
    answer:
      "For a healthy adult dog: no — but a body-condition score check at your next visit costs nothing and confirms the math is working. For puppies under 1 year (large/giant breeds especially), pregnant or lactating dogs, dogs with kidney/liver/heart/diabetes diagnoses, or any dog losing or gaining weight unexpectedly, a vet-built feeding plan is appropriate.",
  },
  {
    question: 'Does kibble brand matter as much as how much I feed?',
    answer:
      "Total calories matter most for weight. Brand matters most for everything else — protein quality, AAFCO life-stage compliance, the existence of feeding trials (vs formulation-only), digestibility, and recall history. The WSAVA nutritional assessment tool is a good first filter; see our guide below.",
  },
]

export default function FoodCostCalculatorPage() {
  return (
    <>
      <SchemaScript schema={buildFAQSchema({ questions: FAQ_ITEMS })} />

      <Breadcrumb
        siteId="dog-com"
        items={[
          { name: 'Home', href: '/' },
          { name: 'Tools', href: '/tools' },
          { name: 'Food Cost Calculator' },
        ]}
      />

      <article className="px-container sm:px-container-sm py-10 max-w-5xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-3">
            Dog Food Calculator — Daily Calories, Cups & Monthly Cost
          </h1>
          <p className="text-lg text-brand-text-mid">
            Estimates daily kcal using the standard{' '}
            <code className="text-sm">RER = 70 × BW<sup>0.75</sup></code> formula and
            an AAHA-published lifestyle multiplier, then converts to cups per
            day and monthly food spend based on your bag&apos;s kcal density and
            price.
          </p>
        </header>

        <Calculator />

        <section className="prose prose-lg max-w-none mb-12">
          <h2>How the math works</h2>
          <p>
            The calculator uses the formula adopted by the{' '}
            <a
              href="https://nap.nationalacademies.org/catalog/10668/nutrient-requirements-of-dogs-and-cats"
              target="_blank"
              rel="noopener noreferrer"
            >
              National Research Council (2006)
            </a>{' '}
            and cited by AAHA and WSAVA nutritional guidelines:
          </p>
          <ol>
            <li>
              <strong>RER (Resting Energy Requirement)</strong> = 70 × (body
              weight in kg)<sup>0.75</sup>. Calories burned at rest by a
              healthy adult dog of that weight.
            </li>
            <li>
              <strong>MER (Maintenance Energy Requirement)</strong> = RER ×
              lifestyle factor. Accounts for activity, age, neuter status,
              pregnancy/lactation, and weight goals.
            </li>
            <li>
              <strong>Cups per day</strong> = MER ÷ kcal-per-cup of your
              specific food. The step most people skip — kcal density varies
              by 50% or more between bags.
            </li>
          </ol>
          <p>
            All starting points. Confirm with a body-condition score check at
            your vet&apos;s next visit and adjust ±10% based on whether your dog
            is gaining or losing.
          </p>

          <h2>Which food matches your calculated intake?</h2>
          <p>
            Once you know your dog&apos;s daily kcal target, the next decision is
            which food. Our food comparisons look at ingredient quality, AAFCO
            statement type, kcal density, and recall history:
          </p>
          <ul>
            <li><Link href="/reviews/best-dry-dog-food">Best dry dog food</Link> — flagship comparison</li>
            <li><Link href="/reviews/best-dog-food-for-puppies">Best puppy food</Link> — large-breed growth considerations</li>
            <li><Link href="/reviews/best-large-breed-dog-food">Best large-breed adult food</Link> — calcium / phosphorus balance</li>
            <li><Link href="/reviews/best-dog-food-senior">Best senior food</Link> — protein and joint support</li>
            <li><Link href="/reviews/best-dog-food-sensitive-stomach">Best sensitive-stomach food</Link> — limited ingredient and hydrolyzed options</li>
            <li><Link href="/reviews/best-dog-food-small-breed">Best small-breed food</Link></li>
          </ul>

          <h2>Where the numbers come from</h2>
          <ul>
            <li><Link href="/nutrition/wsava-explained">WSAVA Global Nutrition Toolkit</Link> — how to evaluate a brand before buying</li>
            <li><Link href="/nutrition/how-much-to-feed">How much to feed your dog</Link> — long-form version of this calculator&apos;s logic</li>
            <li><Link href="/nutrition/reading-food-labels">Reading dog food labels</Link> — what the kcal statement actually means</li>
            <li><Link href="/nutrition/weight-management">Dog weight management</Link> — body condition scoring + treat-budgeting</li>
            <li><Link href="/nutrition/prescription-diets">Prescription diets</Link> — when general MER stops applying</li>
          </ul>
        </section>

        <EmailCapture
          variant="section"
          siteId="dog-com"
          source="tools-food-cost-calculator"
          title="Smarter feeding decisions, weekly"
          subtitle="One short email with new comparisons, food safety alerts, and recall notices. Unsubscribe anytime."
        />

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-brand-text mb-4">
            Frequently asked questions
          </h2>
          <FAQAccordion items={FAQ_ITEMS} includeSchema={false} />
        </section>

        <p className="mt-10 text-xs text-brand-text-light">
          Calculator results are educational estimates only and are not a
          substitute for individualized advice from your veterinarian. See
          our <Link href="/editorial-standards">editorial standards</Link> for
          how this content was produced.
        </p>
      </article>
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildBreadcrumbSchema,
  buildHowToSchema,
  combineSchemas,
  SchemaScript,
  FAQAccordion,
  EmailCapture,
  AffiliateDisclosure,
  CrossPortfolioCard,
} from '@carloOS/ui'
import FoodTransitionCalculator from './Calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Pet Food Transition Calculator — 7/10/14-Day Schedule | PetFood.com',
  description:
    'Switch your dog or cat to a new food without the upset stomach. Enter daily amount and pick a 7, 10, or 14-day window for a day-by-day old/new mixing schedule.',
  path: '/tools/food-transition-calculator',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://petfood.com/' },
    { name: 'Tools', url: 'https://petfood.com/tools' },
    { name: 'Food Transition Calculator', url: 'https://petfood.com/tools/food-transition-calculator' },
  ],
})

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Pet Food Transition Calculator',
  description:
    'Free interactive calculator that builds a day-by-day old-food/new-food mixing schedule for switching a dog or cat to a new diet over a 7, 10, or 14-day window.',
  url: 'https://petfood.com/tools/food-transition-calculator',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Day-by-day mixing schedule (25% -> 50% -> 75% -> 100% new food)',
    'Choice of 7-day (standard), 10-day (cautious), or 14-day (sensitive) window',
    'Old-food and new-food amounts per phase in cups or grams',
    'Keeps total daily amount constant — changes the ratio, not the calories',
  ],
  publisher: { '@type': 'Organization', name: 'PetFood.com Editorial', url: 'https://petfood.com' },
}

const howToSchema = buildHowToSchema({
  name: 'How to transition your pet to a new food',
  description:
    'Switch a dog or cat to a new food gradually over 7–14 days by mixing increasing proportions of the new food into the old to avoid digestive upset.',
  url: 'https://petfood.com/tools/food-transition-calculator',
  steps: [
    {
      name: 'Find your pet’s normal daily amount',
      text: 'Total up the cups or grams your pet eats across all meals on a normal day. Keep this total constant through the switch — you change the ratio of old to new, not the calories.',
    },
    {
      name: 'Pick a transition window',
      text: 'Use 7 days for a healthy adult, 10 days if past switches caused mild upset, or 14 days for a sensitive stomach, a senior, or a large formula change such as a new protein source.',
    },
    {
      name: 'Mix old and new in rising proportions',
      text: 'Move through four steps — 25% new / 75% old, then 50/50, then 75% new / 25% old, then 100% new — holding each step for the days the schedule shows.',
    },
    {
      name: 'Watch the stool and adjust',
      text: 'If the stool turns loose or your pet refuses meals, hold at the current step for a few extra days or drop back one step before continuing. Defer to your veterinarian for a therapeutic-diet switch.',
    },
  ],
})

const schema = combineSchemas(breadcrumbSchema, appSchema, howToSchema)

// FAQ content is drawn from facts presented on this page + the standard
// published gradual-transition guidance. No clinical/diagnostic claims (QC §1).
const FAQS = [
  {
    question: 'How long should it take to switch my pet’s food?',
    answer:
      'Seven days is the standard window for a healthy adult dog or cat. Use 10 days if past switches caused mild stomach upset, and 14 days for a known-sensitive stomach, a senior pet, or a big formula change such as a different protein source. A slower ramp is always safer than a faster one.',
  },
  {
    question: 'What is the old-food/new-food ratio for each step?',
    answer:
      'The standard ramp is four steps: 25% new with 75% old, then 50/50, then 75% new with 25% old, then 100% new. The calculator spreads those four steps across the window you choose and shows the cups or grams of each food per phase.',
  },
  {
    question: 'Do I feed more food during the transition?',
    answer:
      'No. Keep the total daily amount the same throughout — you are changing the ratio of old to new food, not the number of calories. Feeding extra during a switch is a common cause of the loose stool people blame on the new food itself.',
  },
  {
    question: 'What if my pet gets diarrhoea during the switch?',
    answer:
      'Mild, brief loosening is common; hold at the current step for a few extra days, or drop back one step, before moving on. If vomiting or diarrhoea is persistent, severe, or bloody, or the pet is lethargic or off food, stop and contact your veterinarian — that is no longer a feeding question.',
  },
  {
    question: 'Can I switch foods cold turkey?',
    answer:
      'You can, but an abrupt change is the most common avoidable cause of digestive upset, especially for cats and for dogs with sensitive stomachs. A gradual mix gives the gut microbiome time to adjust. The exception is a veterinary therapeutic diet, where you should follow your vet’s specific timeline.',
  },
]

export default function FoodTransitionCalculatorPage() {
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
            Food Transition Calculator
          </h1>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
            Switching your dog or cat to a new food? Enter the daily amount and pick a window — the
            calculator builds a day-by-day old/new mixing schedule that avoids the upset stomach an
            abrupt change so often causes.
          </p>
        </div>
      </section>

      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">PetFood.com</Link>
        <span>›</span>
        <Link href="/tools" className="hover:text-brand-primary no-underline">Tools</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Food Transition Calculator</span>
      </nav>

      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-5xl">
          <FoodTransitionCalculator />
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl rounded-lg border border-brand-border bg-brand-white p-6">
          <p className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
            Picking the new food?
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-text-dark">
            Choose the right food before you start the switch
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-brand-text-mid">
            A smooth transition only matters if the destination food is the right one. Compare
            complete, life-stage-appropriate options with our independent{' '}
            <Link href="/brands" className="text-brand-primary underline-offset-2 hover:underline">
              brand evaluations
            </Link>
            , confirm the daily amount with the{' '}
            <Link href="/tools/portion-calculator" className="text-brand-primary underline-offset-2 hover:underline">
              portion &amp; calorie calculator
            </Link>
            , then price the bag with the{' '}
            <Link href="/tools/food-cost-calculator" className="text-brand-primary underline-offset-2 hover:underline">
              food cost calculator
            </Link>
            .
          </p>
          <AffiliateDisclosure variant="inline" siteId="petfood-com" />
          {/* Monetization lane: a /go buy-box CTA for the new food can be wired here. */}
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <h2 className="mb-4 font-display text-2xl font-semibold text-brand-text-dark">
            Why switch food gradually
          </h2>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            A pet&apos;s gut microbiome is adapted to the current diet. Swapping foods overnight
            forces that microbiome to adjust all at once, and the usual result is gas, loose stool,
            or a day or two of refused meals. Mixing the new food in gradually — a little more each
            phase — lets the gut adapt without the upset. Cats and dogs with a history of sensitive
            stomachs benefit most from the slower windows.
          </p>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            The one rule people miss: keep the <em>total</em> daily amount constant. The calculator
            changes the ratio of old to new food, not the calorie count. If you need to confirm that
            daily total first, the{' '}
            <Link href="/tools/portion-calculator" className="text-brand-primary underline-offset-2 hover:underline">
              portion &amp; calorie calculator
            </Link>{' '}
            derives it from your pet&apos;s weight and life stage, and the{' '}
            <Link href="/feeding" className="text-brand-primary underline-offset-2 hover:underline">
              feeding guides
            </Link>{' '}
            cover the life-stage context behind the numbers.
          </p>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            Therapeutic and prescription diets are the exception: when a veterinarian changes a diet
            for a medical reason, follow the timeline they give you, which may be faster or slower
            than the general schedule here.
          </p>
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <h2 className="mb-4 font-display text-2xl font-semibold text-brand-text-dark">
            Frequently asked questions
          </h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-2xl">
          <EmailCapture
            siteId="petfood-com"
            variant="inline"
            title="PetFood.com feeding letter"
            subtitle="Practical feeding and nutrition references. No spam."
            source="tools-food-transition-calculator"
          />
        </div>
      </section>

      <CrossPortfolioCard currentSite="petfood-com" contentType="tool" variant="footer" />
    </>
  )
}

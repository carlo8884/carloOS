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
  CrossPortfolioCard,
} from '@carloOS/ui'
import Calculator from './Calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Dog Water Intake Calculator — How Much Should My Dog Drink? | Dog.com',
  description:
    'How much water should your dog drink? Enter body weight for a typical daily intake range in ounces, millilitres, and cups, plus the signs worth a vet call.',
  path: '/tools/dog-water-intake-calculator',
})

const FAQS = [
  {
    question: 'How much water should a dog drink per day?',
    answer:
      'The common rule of thumb is roughly half an ounce to one ounce of water per pound of body weight per day (about 50–65 ml per kg). A 40-pound dog therefore drinks somewhere around 20–40 ounces, or 2.5–5 cups, on a typical day. The lower end fits a quiet day indoors; the upper end reflects heat, exercise, or a dry-kibble diet. This figure is total water — what the dog drinks plus the moisture already in its food.',
  },
  {
    question: 'Why is the result a range instead of one number?',
    answer:
      'Daily water need genuinely varies day to day. Ambient temperature, activity level, and diet all move it: a dog on canned food gets a lot of water from the food and drinks less, while a dog on dry kibble in summer drinks much more. A range is the honest answer; a single number would imply a precision that does not exist.',
  },
  {
    question: 'When should I worry about how much my dog drinks?',
    answer:
      'Watch for a sustained change rather than a single thirsty afternoon. A marked, lasting increase in drinking (and urinating) can be an early sign of diabetes, kidney disease, Cushing’s disease, or infection; a marked decrease can signal nausea, pain, or dehydration. If your dog’s drinking shifts noticeably from its normal pattern, or you are seeing other signs, contact your veterinarian — this calculator is a husbandry estimate, not a diagnosis.',
  },
  {
    question: 'Does food count toward water intake?',
    answer:
      'Yes. The estimate is total water intake, and a large share can come from food. Canned and fresh diets are roughly 70–80% water, so dogs eating them drink noticeably less from the bowl. Dogs on dry kibble (around 10% moisture) make up the difference by drinking more. Either way, fresh water should always be available.',
  },
]

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Dog.com', url: 'https://dog.com/' },
    { name: 'Tools', url: 'https://dog.com/tools' },
    { name: 'Dog Water Intake Calculator', url: 'https://dog.com/tools/dog-water-intake-calculator' },
  ],
})

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Dog Water Intake Calculator',
  description:
    'Free interactive calculator that estimates a dog\'s typical daily water need from body weight, in ounces, millilitres, and cups, using the standard ~0.5–1 oz per lb husbandry rule.',
  url: 'https://dog.com/tools/dog-water-intake-calculator',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Daily water range in ounces, millilitres, and cups',
    'lb and kg input',
    'Accounts for the diet/activity/temperature range',
    'Flags the drinking changes worth a veterinary call',
  ],
  publisher: { '@type': 'Organization', name: 'Dog.com Editorial', url: 'https://dog.com' },
}

const howToSchema = buildHowToSchema({
  name: 'How to estimate your dog’s daily water intake',
  description:
    'Estimate a dog\'s typical daily water need from body weight using the standard half-to-one ounce per pound rule, and know which drinking changes warrant a vet visit.',
  url: 'https://dog.com/tools/dog-water-intake-calculator',
  steps: [
    {
      name: 'Enter body weight',
      text: 'Enter the dog’s weight in pounds or kilograms.',
    },
    {
      name: 'Read the daily range',
      text: 'The calculator returns roughly 0.5–1 ounce of water per pound per day, shown in ounces, millilitres, and cups. The lower end is a quiet day; the upper end reflects heat, exercise, or a dry diet.',
    },
    {
      name: 'Account for food moisture',
      text: 'Remember the figure is total water. Dogs on canned or fresh food get much of it from the food and drink less; dogs on dry kibble drink more.',
    },
    {
      name: 'Watch for sustained change',
      text: 'Use the estimate as a baseline. A marked, lasting increase or decrease in drinking is worth a veterinary call, since it can signal an underlying condition.',
    },
  ],
})

const schema = combineSchemas(breadcrumbSchema, appSchema, howToSchema)

export default function DogWaterIntakeCalculatorPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      <section className="bg-brand-dark px-container-sm sm:px-container py-10 sm:py-14 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(ellipse at 30% 50%, rgba(70, 120, 150, 0.5) 0%, transparent 60%)' }}
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
            Dog Water Intake Calculator
          </h1>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
            How much water should your dog drink in a day? Enter their weight for a typical daily
            range — in ounces, millilitres, and cups — and the drinking changes that are worth a
            call to your vet.
          </p>
        </div>
      </section>

      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Dog.com</Link>
        <span>›</span>
        <Link href="/tools" className="hover:text-brand-primary no-underline">Tools</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Water Intake Calculator</span>
      </nav>

      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-5xl">
          <Calculator />
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <h2 className="mb-4 font-display text-2xl font-semibold text-brand-dark">
            How to read the number
          </h2>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            The estimate is a healthy daily range, not a quota to enforce. Dogs self-regulate water
            well when fresh water is always available — the value of knowing the range is spotting
            when intake drifts far outside it. Pair this with daily calorie needs from the{' '}
            <Link href="/tools/dog-calorie-calculator" className="text-brand-primary underline-offset-2 hover:underline">
              calorie calculator
            </Link>{' '}
            and the broader{' '}
            <Link href="/health" className="text-brand-primary underline-offset-2 hover:underline">
              health guides
            </Link>{' '}
            for the context behind the numbers.
          </p>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            Excessive thirst (polydipsia) and reduced drinking both matter clinically, which is why
            the result flags sustained change rather than day-to-day variation. If you are tracking a
            specific concern, note the dog’s normal baseline now so a future change is easy to see.
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
            source="tools-dog-water-intake-calculator"
          />
        </div>
      </section>

      <CrossPortfolioCard currentSite="dog-com" contentType="tool" variant="footer" />
    </>
  )
}

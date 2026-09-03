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
  title: 'Dog Exercise Calculator — How Much Does My Dog Need? | Dog.com',
  description:
    'How much exercise does your dog need? Get a daily target by life stage and energy level — with the 5-minute-per-month puppy rule and senior adjustments.',
  path: '/tools/dog-exercise-calculator',
})

const FAQS = [
  {
    question: 'How much exercise does my dog need?',
    answer:
      'It depends mostly on energy level and life stage. As a guide, low-energy adult dogs do well on about 20–40 minutes of activity a day, moderate dogs 45–60, high-energy and sporting breeds 60–90, and working breeds like Border Collies or Huskies often need 90–120+ minutes. Mental work — training, sniff-walks, puzzle feeders — counts toward meeting a dog’s needs, not just distance covered.',
  },
  {
    question: 'How much exercise should a puppy get?',
    answer:
      'A widely used guideline is about five minutes of structured exercise per month of age, once or twice a day — so roughly 15 minutes twice daily for a three-month-old puppy. The point is to protect growing joints: forced, repetitive, or high-impact exercise (long runs, jumping, stairs) before the growth plates close can cause lasting damage. Free play and exploration at the puppy’s own pace are safer than forced exercise.',
  },
  {
    question: 'Can you over-exercise a dog?',
    answer:
      'Yes. In puppies, too much forced exercise risks joint damage. In adults, pushing an unfit dog too hard, or any dog in heat and humidity, risks injury and heatstroke — flat-faced (brachycephalic) breeds are especially vulnerable and should never be pushed in warm weather. Build fitness gradually, watch for limping or excessive panting, and stop if your dog is struggling.',
  },
  {
    question: 'What are the signs my dog isn’t getting enough exercise?',
    answer:
      'Restlessness, destructive chewing, excessive barking, pacing, difficulty settling, and weight gain are common signs of under-exercise — and many "behaviour problems" are really unmet physical and mental needs. Increasing daily activity (physical and mental) often resolves them. Persistent issues are worth discussing with your vet or a qualified trainer.',
  },
  {
    question: 'Does mental exercise really count?',
    answer:
      'Yes — mental stimulation tires a dog in a way that complements physical exercise. Training sessions, scent games, puzzle feeders, and letting a dog sniff freely on walks all engage the brain and can be as satisfying as a longer walk, which is especially useful for recovering dogs, seniors, or bad-weather days.',
  },
]

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Dog.com', url: 'https://dog.com/' },
    { name: 'Tools', url: 'https://dog.com/tools' },
    { name: 'Dog Exercise Calculator', url: 'https://dog.com/tools/dog-exercise-calculator' },
  ],
})

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Dog Exercise Needs Estimator',
  description:
    'Free interactive estimator that suggests a daily exercise target for a dog from life stage and energy level, including the five-minute-per-month puppy guideline and senior adjustments.',
  url: 'https://dog.com/tools/dog-exercise-calculator',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Daily exercise target by life stage (puppy, adult, senior)',
    'Energy-level ranges from low to working-breed',
    'Puppy “5 minutes per month of age” joint-safe guideline',
    'Senior low-impact adjustment and heat/health cautions',
    'Shoppable walk-gear kit via Amazon category searches',
  ],
  publisher: { '@type': 'Organization', name: 'Dog.com Editorial', url: 'https://dog.com' },
}

const howToSchema = buildHowToSchema({
  name: 'How to estimate how much exercise your dog needs',
  description:
    'Use life stage and energy level to estimate a daily exercise target for a dog, with a joint-safe rule for puppies.',
  url: 'https://dog.com/tools/dog-exercise-calculator',
  steps: [
    { name: 'Pick the life stage', text: 'Choose puppy, adult, or senior — the right amount and intensity changes a lot with age.' },
    { name: 'For a puppy, enter the age', text: 'The tool applies the five-minutes-per-month-of-age guideline, once or twice daily, to protect developing joints.' },
    { name: 'For an adult or senior, pick the energy level', text: 'Low, moderate, high, or working — each maps to a daily minutes range, reduced and made low-impact for seniors.' },
    { name: 'Adjust to your dog', text: 'Build fitness gradually, count mental exercise, cut back in heat, and check with your vet before increasing exercise for any dog with a health condition.' },
  ],
})

const schema = combineSchemas(breadcrumbSchema, appSchema, howToSchema)

export default function DogExerciseCalculatorPage() {
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
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Tools &amp; Calculators</span>
          </div>
          <h1
            className="font-display font-bold text-white tracking-tight leading-none mb-5"
            style={{ fontSize: 'clamp(34px, 5vw, 56px)' }}
          >
            Dog Exercise Calculator
          </h1>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
            How much exercise does your dog really need? Get a daily target by life stage and energy
            level — including the joint-safe five-minute-per-month rule for puppies and gentler,
            low-impact guidance for seniors.
          </p>
        </div>
      </section>

      <nav
        aria-label="Breadcrumb"
        className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2"
      >
        <Link href="/" className="hover:text-brand-primary no-underline">Dog.com</Link>
        <span>›</span>
        <Link href="/tools" className="hover:text-brand-primary no-underline">Tools</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Exercise Calculator</span>
      </nav>

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-8 pb-0">
        <div className="max-w-2xl">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Walk-gear checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the walk-gear checklist — leash, harness, fetch toys, and
            activity-tracker notes that match your daily target — so you can
            kit the walk without re-running the estimate. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="dog-com"
            title="Walk-gear checklist"
            subtitle="Email the walk-gear checklist — leash, harness, fetch toys, and activity-tracker notes. No spam."
            ctaText="Email my walk-gear checklist"
            source="tools-dog-exercise-under-hero"
          />
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-5xl">
          <Calculator />
        </div>
      </section>

      {/* Money path — live amazon-brand search hops (walk / play kit).
          ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
          Category searches only — not a ranked list, not a workout plan. */}
      <section id="dog-exercise-kit" className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <AffiliateDisclosure variant="inline" siteId="dog-com" />
          <div className="mt-4 rounded-xl border border-brand-border bg-brand-white p-5">
            <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Shop walk gear
            </div>
            <p className="mb-4 text-sm leading-relaxed text-brand-text-mid">
              These Amazon category searches are walk and play items that match
              the daily target above — a leash, a well-fitted harness, fetch
              toys, and activity / GPS trackers. They are not a ranked product
              list, not invented inventory, and they do not prescribe a workout.
              Fit a harness before long walks, and check with your veterinarian
              before ramping up exercise for puppies, seniors, or dogs with a
              health condition. Dog.com earns a commission on qualifying
              purchases at no extra cost to you. Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/dog+leash?s=tools-dog-exercise"
                amazonLabel="Browse dog leashes on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/julius+k9+idc+powerharness?s=tools-dog-exercise"
                amazonLabel="Browse Julius-K9 harnesses on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/front+clip+no+pull+dog+harness?s=tools-dog-exercise"
                amazonLabel="Browse no-pull harnesses on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/kong+classic+dog+toy+stuffable?s=tools-dog-exercise"
                amazonLabel="Browse Kong fetch / stuffable toys on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/dog+fetch+toys?s=tools-dog-exercise"
                amazonLabel="Browse dog fetch toys on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/fi+series+3+dog+collar?s=tools-dog-exercise"
                amazonLabel="Browse Fi activity / GPS collars on Amazon →"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl space-y-10">
          <div>
            <h2 className="mb-3 font-display text-2xl font-bold text-brand-dark">Exercise, diet, and weight go together</h2>
            <div className="space-y-3 text-sm leading-relaxed text-brand-text-mid">
              <p>
                Exercise is half of the weight equation — the other half is calories in. If you are working
                on your dog&apos;s weight, pair this with the{' '}
                <Link href="/tools/dog-calorie-calculator" className="text-brand-primary underline-offset-2 hover:underline">calorie calculator</Link>{' '}
                to set the right portion. If a walk or play session leaves the
                dog looking sore in the face, the{' '}
                <Link href="/tools/dog-grimace-scale" className="text-brand-primary underline-offset-2 hover:underline">dog grimace scale</Link>{' '}
                is a pain-face observation aid — not a diagnosis — and sudden
                distress belongs with{' '}
                <Link href="/tools/is-this-a-dog-emergency" className="text-brand-primary underline-offset-2 hover:underline">emergency triage</Link>
                , not a longer workout. Read our{' '}
                <Link href="/health/dog-obesity" className="text-brand-primary underline-offset-2 hover:underline">dog obesity</Link>{' '}
                and{' '}
                <Link href="/nutrition/weight-management" className="text-brand-primary underline-offset-2 hover:underline">weight management</Link>{' '}
                guides. A well-fitted{' '}
                <Link href="/reviews/best-dog-harnesses" className="text-brand-primary underline-offset-2 hover:underline">harness</Link>{' '}
                makes daily walks more comfortable, and a{' '}
                <Link href="/reviews/best-dog-gps-tracker" className="text-brand-primary underline-offset-2 hover:underline">GPS tracker</Link>{' '}
                is useful for dogs with strong recall-testing energy.
              </p>
              <p>
                Whatever the number, mix it up: physical activity and mental work together meet a dog&apos;s needs
                far better than the same plod every day.
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-4 font-display text-2xl font-bold text-brand-dark">Frequently asked questions</h2>
            <FAQAccordion items={FAQS} />
          </div>

          <CrossPortfolioCard currentSite="dog-com" contentType="tool" />
        </div>
      </section>
    </>
  )
}

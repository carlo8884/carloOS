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
  AffiliateDisclosure,
  ShopCtas,
} from '@carloOS/ui'
import Calculator from './Calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Dog Body Condition Score Calculator — Assess Your Dog’s BCS | Dog.com',
  description:
    'Is your dog under or overweight? Answer three hands-on questions to estimate your dog’s body condition score (1–9) on the WSAVA scale, with what to do next.',
  path: '/tools/dog-body-condition-score',
})

const FAQS = [
  {
    question: 'What is a body condition score for a dog?',
    answer:
      'Body condition score (BCS) is a standardized way to judge whether a dog carries a healthy amount of fat, independent of breed or scale weight. The most common system is the WSAVA 9-point scale, where 1 is emaciated, 9 is grossly obese, and 4–5 is ideal. It is assessed by feel and sight: how easily you can feel the ribs, whether there is a visible waist from above, and whether the belly tucks up from the side. Because it is proportional to the individual dog, BCS is often more useful than weight alone.',
  },
  {
    question: 'What is a healthy body condition score?',
    answer:
      'A BCS of 4 to 5 out of 9 is ideal for most dogs. At that score you can easily feel the ribs under a thin layer of fat, see a waist when you look down from above, and see the belly tuck up when you look from the side. Some lean, athletic breeds (sighthounds, working dogs) sit comfortably at the lower end of ideal.',
  },
  {
    question: 'How do I tell if my dog is overweight?',
    answer:
      'Three quick checks: you should be able to feel the ribs with light pressure (not press through fat to find them), see a waist behind the ribs from above, and see the belly rise toward the back legs from the side. If the ribs are hard to feel, the waist has disappeared, and the belly is level or sagging, the dog is likely overweight. As a rule of thumb, each BCS point above 5 is roughly 10% over ideal body weight, so a BCS of 7 is about 20% overweight.',
  },
  {
    question: 'Is body condition score better than weighing my dog?',
    answer:
      'They work together, but BCS is usually the better single measure. Scale weight only means something relative to that individual dog’s frame — 30 lb is lean on one dog and obese on another. BCS judges the dog against itself. The best practice is to find your dog’s ideal weight at a BCS of 4–5, then track the scale against that target over time.',
  },
  {
    question: 'My dog is very fluffy or deep-chested — does that change the score?',
    answer:
      'Use your hands, not just your eyes. A thick or fluffy coat hides body condition, and deep-chested or barrel-shaped breeds can look heavier or leaner than they are. The rib feel and the abdominal tuck are the most reliable cues through a coat. If you are unsure, your veterinarian can score your dog in seconds and show you what ideal feels like.',
  },
]

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Dog.com', url: 'https://dog.com/' },
    { name: 'Tools', url: 'https://dog.com/tools' },
    { name: 'Dog Body Condition Score Calculator', url: 'https://dog.com/tools/dog-body-condition-score' },
  ],
})

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Dog Body Condition Score Calculator',
  description:
    'Free guided self-assessment that estimates a dog’s body condition score (1–9 WSAVA scale) from three hands-on and visual checks: rib feel, top-down waist, and side-view abdominal tuck.',
  url: 'https://dog.com/tools/dog-body-condition-score',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Estimates body condition score on the WSAVA 1–9 scale',
    'Three guided checks: rib palpation, waist from above, abdominal tuck from the side',
    'Plain-English interpretation: underweight, ideal, overweight, obese',
    'Next-step guidance with a defer-to-vet note',
    'Shoppable BCS / weight-management kit via Amazon category searches',
  ],
  publisher: { '@type': 'Organization', name: 'Dog.com Editorial', url: 'https://dog.com' },
}

const howToSchema = buildHowToSchema({
  name: 'How to assess your dog’s body condition score',
  description:
    'Estimate a dog’s body condition score on the 9-point scale using three checks: feeling the ribs, looking at the waist from above, and checking the abdominal tuck from the side.',
  url: 'https://dog.com/tools/dog-body-condition-score',
  steps: [
    {
      name: 'Feel the ribs',
      text: 'Run both hands along the rib cage with light pressure. At ideal condition you feel the ribs easily under a thin layer of fat.',
    },
    {
      name: 'Look from above',
      text: 'Stand over your dog and look down. At ideal condition there is a visible waist behind the ribs — an hourglass shape.',
    },
    {
      name: 'Look from the side',
      text: 'View your dog at eye level. At ideal condition the belly tucks up from the chest toward the back legs.',
    },
    {
      name: 'Combine into a score',
      text: 'Average the three checks to an estimated BCS of 1–9 (4–5 is ideal), then follow the interpretation and confirm with your veterinarian.',
    },
  ],
})

const schema = combineSchemas(breadcrumbSchema, appSchema, howToSchema)

export default function DogBodyConditionScorePage() {
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
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
              Tools &amp; Calculators
            </span>
          </div>
          <h1
            className="font-display font-bold text-white tracking-tight leading-none mb-5"
            style={{ fontSize: 'clamp(34px, 5vw, 56px)' }}
          >
            Dog Body Condition Score
          </h1>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
            Is your dog under or overweight? Answer three hands-on questions — feel the ribs, check
            the waist from above, and the belly tuck from the side — to estimate your dog&apos;s body
            condition score on the 1–9 scale, with what it means and what to do next.
          </p>
        </div>
      </section>

      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Dog.com</Link>
        <span>›</span>
        <Link href="/tools" className="hover:text-brand-primary no-underline">Tools</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Body Condition Score</span>
      </nav>

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-8 pb-0">
        <div className="max-w-2xl">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Dog BCS checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the BCS checklist — rib feel, waist, belly tuck, and the shoppable
            weight-management kit (measuring tape, portion scale, slow feeder) — so you
            can re-score next month without re-reading the descriptors. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="dog-com"
            title="Dog BCS checklist"
            subtitle="Email the BCS checklist — rib feel, waist, tuck, and the weight-management kit. No spam."
            ctaText="Email my dog BCS checklist"
            source="tools-dog-bcs-under-hero"
          />
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-5xl">
          <Calculator />
        </div>
      </section>

      {/* Money path — live amazon-brand search hops (BCS / weight-management kit).
          ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
          Category searches only — not a ranked list, not a diagnosis. */}
      <section id="bcs-weight-kit" className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <AffiliateDisclosure variant="inline" siteId="dog-com" />
          <div className="mt-4 rounded-xl border border-brand-border bg-brand-white p-5">
            <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Shop a BCS / weight-management kit
            </div>
            <p className="mb-4 text-sm leading-relaxed text-brand-text-mid">
              These Amazon category searches are husbandry items that make a body-condition
              score repeatable — a measuring tape or BCS chart, an elevated slow-feeder
              bowl, a portion-control food scale, a puzzle feeder, joint-support treats,
              and weight-management dog food. They are not a ranked product list, not
              invented inventory, and they do not diagnose a weight problem or set a
              target weight. Ask your veterinarian for a target and a safe rate of change
              before cutting or adding calories. Dog.com earns a commission on qualifying
              purchases at no extra cost to you. Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/dog+measuring+tape+body+condition+chart?s=tools-dog-bcs"
                amazonLabel="Browse dog measuring tapes and BCS charts on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/elevated+slow+feeder+bowl+dog?s=tools-dog-bcs"
                amazonLabel="Browse elevated slow-feeder bowls on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/portion+control+food+scale+dog?s=tools-dog-bcs"
                amazonLabel="Browse portion-control food scales on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/puzzle+feeder+dog?s=tools-dog-bcs"
                amazonLabel="Browse puzzle feeders on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/joint+support+dog+treats?s=tools-dog-bcs"
                amazonLabel="Browse joint-support dog treats on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/weight+management+dog+food?s=tools-dog-bcs"
                amazonLabel="Browse weight-management dog food on Amazon →"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl space-y-10">
          <div>
            <h2 className="mb-3 font-display text-2xl font-bold text-brand-dark">
              How body condition scoring works
            </h2>
            <div className="space-y-3 text-sm leading-relaxed text-brand-text-mid">
              <p>
                Body condition scoring is the method vets use to judge a dog&apos;s fat coverage
                against its own frame, rather than against a breed-average weight. The 9-point scale
                runs from 1 (emaciated) to 9 (grossly obese), with 4–5 as ideal. It rests on three
                observations — how easily the ribs are felt, whether a waist is visible from above,
                and whether the belly tucks up from the side — which is exactly what this tool walks
                you through.
              </p>
              <p>
                The reason it matters: studies link lean body condition to a longer, healthier life,
                while excess weight worsens arthritis, diabetes, and breathing problems. Catching a
                drift from a 5 to a 6 early is far easier to reverse than a 5 to an 8. Re-checking
                every month or two turns body condition into something you manage rather than
                discover at the vet.
              </p>
              <p>
                This is a guided estimate to help you look and feel the right way — it is not a
                diagnosis. Your veterinarian&apos;s hands-on score is the reference, and any
                unexplained weight change deserves a vet visit to rule out an underlying cause.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-brand-border bg-brand-white p-6">
            <p className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              Next steps
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Turn the score into a plan
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-brand-text-mid">
              Once you know roughly where your dog sits, the{' '}
              <Link href="/tools/dog-ideal-weight-calculator" className="text-brand-primary underline-offset-2 hover:underline">
                ideal weight calculator
              </Link>{' '}
              estimates a target to aim for, the{' '}
              <Link href="/tools/dog-calorie-calculator" className="text-brand-primary underline-offset-2 hover:underline">
                calorie calculator
              </Link>{' '}
              sets daily feeding, and our{' '}
              <Link href="/guides/dog-body-condition-score" className="text-brand-primary underline-offset-2 hover:underline">
                body condition score guide
              </Link>{' '}
              and{' '}
              <Link href="/health/dog-obesity" className="text-brand-primary underline-offset-2 hover:underline">
                dog obesity guide
              </Link>{' '}
              cover safe weight loss in depth.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-display text-2xl font-bold text-brand-dark">
              Frequently asked questions
            </h2>
            <FAQAccordion items={FAQS} />
          </div>

          <CrossPortfolioCard currentSite="dog-com" contentType="tool" />
        </div>
      </section>
    </>
  )
}

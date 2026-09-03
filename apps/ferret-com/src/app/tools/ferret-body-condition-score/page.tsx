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
import FerretBCSCalculator from './Calculator'

const URL = 'https://ferret.com/tools/ferret-body-condition-score'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Body Condition Score — 1–9 Planning Aid | Ferret.com',
  description:
    'Estimate a ferret’s body condition (1–9) from rib feel, waist, and belly. A planning reference, not a diagnosis.',
  path: '/tools/ferret-body-condition-score',
})

const FAQS = [
  {
    question: 'What is a healthy body condition score for a ferret?',
    answer:
      'On this planning scale, 4 to 5 out of 9 is the ideal band — the same midpoint the Dog.com and Vets.co BCS tools use. At that score a ferret feels lean and muscular: ribs and spine are easy to feel under a light covering of flesh, the body tapers to a defined waist behind the ribs, and there is no pendulous belly. That language is from Ferret.com’s weight-management reference, not a published ferret-specific WSAVA chart. Coat thickness hides a lot, so use your hands.',
    answerText:
      'Planning scale 4–5/9 is ideal: ribs and spine easy to feel under a light covering, defined waist, no pendulous belly. Not a published ferret WSAVA chart. Use your hands — coat hides a lot.',
  },
  {
    question: 'How do I tell if my ferret is overweight?',
    answer:
      'Three checks: ribs hard to feel under fat, the waist gone when you look down from above, and a pendulous or rounded belly from the side. True obesity is distinct from the normal autumn fat layer that many ferrets put on and then shed in spring. If the softness is year-round and play is down, the usual levers are fewer sugary or fatty treats and more out-of-cage time — not a crash diet. Ferrets are prone to hypoglycemia; ask an exotic-mammal veterinarian for a target before cutting food.',
    answerText:
      'Ribs hard to feel, waist gone, pendulous belly — and year-round, not just the autumn seasonal fat layer. Fix treats and play, do not crash-diet. Ask an exotic-mammal vet for a target.',
  },
  {
    question: 'My ferret looks fatter in winter — is that obesity?',
    answer:
      'Often no. Intact and even many altered ferrets put on a noticeable fat layer in autumn and shed it in spring — a normal seasonal weight swing tied to coat and daylight. New owners frequently mistake the autumn version for obesity and the spring slim-down for illness. In a ferret that is otherwise bright, active, and eating well, that swing is expected. Flag weight change that is rapid, sustained, out of season, or paired with lethargy, hind weakness, mouth-pawing, hair loss, or vomiting.',
    answerText:
      'Autumn fat and spring slim-down are a normal seasonal weight swing. Worry when change is rapid, out of season, or paired with other signs — that is a vet visit, not a diet tweak.',
  },
  {
    question: 'Is body condition score better than weighing my ferret?',
    answer:
      'They work together. Scale weight in grams is more sensitive than judging by eye and turns a vague impression into a trend — a steady seasonal curve looks different from a sudden drop. BCS judges fat cover against the ferret’s own frame, which a single gram number cannot. Ferret.com’s weight-management copy recommends weekly or every-other-week weights plus a monthly hands-on score, especially for seniors. Neither one diagnoses a disease.',
    answerText:
      'Use both: gram weights for the trend, BCS for fat cover on that ferret’s frame. Weekly weights plus a monthly hands-on score. Neither is a diagnosis.',
  },
  {
    question: 'Is this body-condition score a diagnosis?',
    answer:
      'No. It is a planning and husbandry reference only. The 1–9 number helps you talk with an exotic-mammal veterinarian about feeding, treats, and play; it does not diagnose insulinoma, dental pain, or any other disease, set a calorie target, or replace an exam. Unexplained weight loss or gain belongs with a veterinarian — or start with telehealth when the ferret is stable and this is not an emergency. If collapse, labored breathing, or a hard belly is in front of you, use the ferret emergency sign-list and go to a ferret-capable clinic.',
    answerText:
      'No. Planning reference only — not a diagnosis. For urgent signs, use the ferret emergency sign-list and seek ferret-capable care.',
  },
]

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Ferret.com', url: 'https://ferret.com/' },
    { name: 'Tools', url: 'https://ferret.com/tools' },
    { name: 'Ferret Body Condition Score', url: URL },
  ],
})

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Ferret Body Condition Score Calculator',
  description:
    'Free guided self-assessment that estimates a ferret’s body condition score (1–9) from three hands-on and visual checks: rib and spine feel, top-down waist, and side-view belly. Planning reference grounded in Ferret.com weight-management copy, including the seasonal weight swing — not a diagnosis.',
  url: URL,
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Estimates ferret body condition on the same 1–9 planning scale as the dog and cat BCS tools',
    'Three guided checks: rib/spine palpation, waist from above, belly from the side',
    'Seasonal weight-swing caveat (autumn fat / spring slim-down)',
    'Interpretation: underweight, ideal, overweight, obese, with vet-deferring next steps',
    'Shoppable BCS kit via Amazon category searches (ferret food, senior ferret food, digital pet scale, ferret hammock, carrier)',
  ],
  publisher: { '@type': 'Organization', name: 'Ferret.com Editorial', url: 'https://ferret.com' },
}

const howToSchema = buildHowToSchema({
  name: 'How to assess your ferret’s body condition score',
  description:
    'Estimate a ferret’s body condition score on the 9-point planning scale using three checks: feeling the ribs and spine, looking at the waist from above, and checking the belly from the side. A planning reference, not a diagnosis.',
  url: URL,
  steps: [
    {
      name: 'Feel the ribs and spine',
      text: 'Run both hands along the rib cage and back with light pressure. At ideal condition you feel the ribs and spine easily under a light covering of flesh. Use your hands — coat thickness hides a lot.',
    },
    {
      name: 'Look from above',
      text: 'With the ferret standing, look down. At ideal condition the body tapers to a defined waist behind the ribs.',
    },
    {
      name: 'Look from the side',
      text: 'View the ferret at eye level. At ideal condition there is no pendulous belly. Do not confuse a normal seasonal fat layer with year-round softness.',
    },
    {
      name: 'Combine into a score',
      text: 'Average the three checks to an estimated BCS of 1–9 (4–5 is ideal), then follow the interpretation and confirm with an exotic-mammal veterinarian. This is a planning reference, not a diagnosis.',
    },
  ],
})

const schema = combineSchemas(breadcrumbSchema, appSchema, howToSchema)

export default function FerretBodyConditionScorePage() {
  return (
    <>
      <SchemaScript schema={schema} />

      {/* Hero */}
      <section className="bg-brand-dark px-container-sm sm:px-container py-section relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(ellipse at 30% 50%, rgba(110, 80, 50, 0.5) 0%, transparent 60%)' }}
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
            style={{ fontSize: 'clamp(34px, 5vw, 56px)' }}
          >
            Ferret Body Condition Score
          </h1>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
            Is your ferret under or overweight — or just in a seasonal swing?
            Answer three hands-on checks — rib and spine feel, waist from above,
            belly from the side — for a 1–9 planning score. A planning reference,
            not a diagnosis.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2"
      >
        <Link href="/" className="hover:text-brand-primary no-underline">Ferret.com</Link>
        <span>&#8250;</span>
        <Link href="/tools" className="hover:text-brand-primary no-underline">Tools</Link>
        <span>&#8250;</span>
        <span className="text-brand-text-mid font-medium">Body Condition Score</span>
      </nav>

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-8 pb-0">
        <div className="max-w-2xl">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Ferret BCS checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the rib / waist / belly checklist, the seasonal-swing caveat,
            and the shoppable BCS kit (ferret food, senior ferret food, digital
            pet scale, hammock, carrier) so you can re-score next month without
            re-reading the descriptors. Planning reference only — not a
            diagnosis. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="ferret-com"
            title="Ferret BCS checklist"
            subtitle="Email the ferret BCS checklist and husbandry kit. No spam."
            ctaText="Email my ferret BCS checklist"
            source="tools-ferret-bcs-under-hero"
          />
        </div>
      </section>

      {/* Calculator */}
      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-5xl">
          <FerretBCSCalculator />
        </div>
      </section>

      {/* Money path — live amazon-brand search hops (BCS / weight-management kit).
          ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
          Category searches only — not a ranked list, not a diagnosis. */}
      <section id="ferret-bcs-kit" className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <AffiliateDisclosure variant="inline" siteId="ferret-com" />
          <div className="mt-4 rounded-xl border border-brand-border bg-brand-white p-5">
            <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Shop a BCS / weight-management kit
            </div>
            <p className="mb-4 text-sm leading-relaxed text-brand-text-mid">
              These Amazon category searches are husbandry items that make a
              body-condition score repeatable — ferret food, senior ferret food,
              a digital pet scale, a ferret hammock, and a carrier. They are not
              a ranked product list, not invented inventory, and they do not
              diagnose a weight problem or set a calorie target. Ask your
              exotic-mammal veterinarian which products fit this ferret. Do not
              crash-diet a ferret. Ferret.com earns a commission on qualifying
              purchases at no extra cost to you. Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/ferret+food?s=tools-ferret-body-condition-score"
                amazonLabel="Browse ferret food on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/senior+ferret+food?s=tools-ferret-body-condition-score"
                amazonLabel="Browse senior ferret food on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/digital+pet+scale?s=tools-ferret-body-condition-score"
                amazonLabel="Browse digital pet scales on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/ferret+hammock?s=tools-ferret-body-condition-score"
                amazonLabel="Browse ferret hammocks on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/ferret+carrier?s=tools-ferret-body-condition-score"
                amazonLabel="Browse ferret carriers on Amazon →"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Planning ahead — insurance (educational) + non-ER telehealth. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <div className="rounded-xl border border-brand-border bg-brand-white p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              Planning ahead
            </div>
            <p className="text-sm text-brand-text-mid leading-relaxed mb-3">
              Weight change in ferrets is often the first clue to insulinoma,
              dental pain, or other disease — costs that are not in a tidy
              monthly food number. Pet insurance is least expensive while a
              ferret is young and healthy; pre-existing conditions are excluded.
              This is an educational comparison link, not a ranking of carriers.
              For a stable, non-emergency question about weight or feeding, talk
              to a licensed vet on a screen rather than waiting for a gap to
              become an ER visit.
            </p>
            <AffiliateDisclosure variant="inline" siteId="ferret-com" className="mb-3 text-2xs" />
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <Link
                href="https://vets.co/reviews/best-pet-insurance"
                className="inline-block bg-brand-dark text-white font-semibold text-sm px-4 py-2 rounded-md no-underline hover:bg-brand-dark/90"
              >
                Compare pet insurance →
              </Link>
              <Link
                href="https://vets.co/telehealth"
                className="inline-block border border-brand-border bg-brand-white text-brand-dark font-semibold text-sm px-4 py-2 rounded-md no-underline hover:border-brand-primary"
              >
                Talk to a vet (telehealth) →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <h2 className="mb-4 font-display text-2xl font-semibold text-brand-text-dark">
            How ferret body condition scoring works
          </h2>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            More reliable than the scale alone is a hands-on read of fat cover
            against this ferret&apos;s own frame. The{' '}
            <Link href="/diet/weight-management" className="text-brand-primary underline-offset-2 hover:underline">
              ferret weight-management
            </Link>{' '}
            reference describes the ideal as lean and muscular: ribs and spine
            felt under a light covering, a defined waist behind the ribs, and no
            pendulous belly. Underweight feels sharp and bony; overweight hides
            the ribs, loses the waist, and hangs at the belly. This tool walks
            those three checks and maps them onto the same 1–9 planning scale
            used on Dog.com and Vets.co so the number is easy to talk about with
            a veterinarian. It is not a published ferret-specific WSAVA chart
            and it is not a diagnosis.
          </p>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            Two ferret-specific cautions sit on top of the number. First, the
            seasonal weight swing: many ferrets put on autumn fat and slim down
            in spring. Second, unexplained change — rapid, out of season, or
            paired with other signs — is a reason to see an exotic-mammal
            veterinarian, not to simply add or subtract food. Seniors especially
            should be weighed in grams on a regular cadence, as{' '}
            <Link href="/health/aging-ferret-care" className="text-brand-primary underline-offset-2 hover:underline">
              aging ferret care
            </Link>{' '}
            and{' '}
            <Link href="/diet/senior-ferret-nutrition" className="text-brand-primary underline-offset-2 hover:underline">
              senior ferret nutrition
            </Link>{' '}
            cover. Pair the score with the{' '}
            <Link href="/tools/food-evaluator" className="text-brand-primary underline-offset-2 hover:underline">
              food evaluator
            </Link>
            , the{' '}
            <Link href="/tools/ferret-age-calculator" className="text-brand-primary underline-offset-2 hover:underline">
              ferret age calculator
            </Link>
            , and the{' '}
            <Link href="/tools/cost-calculator" className="text-brand-primary underline-offset-2 hover:underline">
              cost calculator
            </Link>
            . For a stable, non-emergency question, start at{' '}
            <Link href="https://vets.co/telehealth" className="text-brand-primary underline-offset-2 hover:underline">
              telehealth
            </Link>
            . If a sign is in front of you right now, the{' '}
            <Link href="/tools/is-this-a-ferret-emergency" className="text-brand-primary underline-offset-2 hover:underline">
              ferret emergency sign-list
            </Link>{' '}
            is a conservative urgency read — not a diagnosis. For a facial pain-watch, the{' '}
            <Link href="/tools/ferret-grimace-scale" className="text-brand-primary underline-offset-2 hover:underline">
              ferret grimace scale
            </Link>{' '}
            is a planning reference, not a diagnosis.
          </p>

          <h2 className="mb-4 mt-8 font-display text-2xl font-semibold text-brand-text-dark">
            Common questions
          </h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      {/* Related tools */}
      <section className="bg-brand-white border-t border-brand-border px-container-sm sm:px-container py-10">
        <div className="max-w-2xl">
          <h2 className="font-display text-lg font-bold text-brand-dark mb-4">Related Tools &amp; Guides</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'Ferret Weight Management', href: '/diet/weight-management', note: 'Seasonal swing, BCS language, and when change means illness' },
              { label: 'Ferret Age Calculator', href: '/tools/ferret-age-calculator', note: 'Human-year estimate and kit / young adult / mature / senior label' },
              { label: 'Ferret Cost Calculator', href: '/tools/cost-calculator', note: 'Monthly and first-year setup cost' },
              { label: 'Cage Size Calculator', href: '/tools/cage-size-calculator', note: 'Minimum L×W×H from ferret count and levels' },
              { label: 'Ferret Food Evaluator', href: '/tools/food-evaluator', note: 'Score a bag against nutrient targets' },
              { label: 'Readiness Quiz', href: '/tools/readiness-quiz', note: 'Score household fit, then pack the day-one kit' },
              { label: 'Is This a Ferret Emergency?', href: '/tools/is-this-a-ferret-emergency', note: 'Conservative sign-list urgency read, not a diagnosis' },
              { label: 'Ferret Grimace Scale', href: '/tools/ferret-grimace-scale', note: 'Facial pain-watch, not a diagnosis' },
              { label: 'Aging Ferret Care', href: '/health/aging-ferret-care', note: 'Weekly grams and monthly body-condition checks' },
              { label: 'Talk to a vet (telehealth)', href: 'https://vets.co/telehealth', note: 'Stable, non-emergency questions' },
            ].map((item) => (
              item.href.startsWith('http') ? (
                <a
                  key={item.href}
                  href={item.href}
                  className="block bg-brand-surface border border-brand-border rounded-lg p-4 no-underline hover:border-brand-primary transition-colors duration-200"
                >
                  <div className="text-sm font-bold text-brand-dark mb-0.5">{item.label}</div>
                  <div className="text-xs text-brand-text-light">{item.note}</div>
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block bg-brand-surface border border-brand-border rounded-lg p-4 no-underline hover:border-brand-primary transition-colors duration-200"
                >
                  <div className="text-sm font-bold text-brand-dark mb-0.5">{item.label}</div>
                  <div className="text-xs text-brand-text-light">{item.note}</div>
                </Link>
              )
            ))}
          </div>
        </div>
      </section>

      <CrossPortfolioCard currentSite="ferret-com" contentType="tool" variant="footer" />
    </>
  )
}

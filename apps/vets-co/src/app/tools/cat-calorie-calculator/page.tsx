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
  siteId: 'vets-co',
  title: 'Cat Calorie Calculator — Daily kcal | Vets.co',
  description:
    'Estimate your cat’s daily calorie needs using feline RER (70 x kg^0.75) plus indoor, outdoor, and neuter factors. Free, with optional cups-per-day.',
  path: '/tools/cat-calorie-calculator',
})

const FAQS = [
  {
    question: 'How is a cat’s daily calorie need calculated?',
    answer:
      'The starting point is the same Resting Energy Requirement (RER) used for dogs: 70 multiplied by body weight in kilograms raised to the power of 0.75. Cats then use different Daily Energy Requirement (DER) factors than dogs. A typical neutered indoor adult uses 1.2 × RER; an intact indoor adult uses 1.4; outdoor or highly active cats use 1.4–1.6; kittens use 2.5; a vet-supervised weight-loss plan uses 0.8. These are WSAVA/AAHA-style published estimates. Individual cats vary, and a veterinarian-assigned body condition score is how the number gets calibrated.',
    answerText:
      'RER = 70 x (weight in kg)^0.75. DER = feline life-stage factor x RER. Neutered indoor adults typically use 1.2; intact indoor 1.4; outdoor/active 1.4–1.6; kittens 2.5; vet-supervised weight loss 0.8.',
  },
  {
    question: 'Why are cat factors lower than dog calorie factors?',
    answer:
      'Cats are smaller, often less active, and — once neutered and kept indoors — have a lower maintenance multiplier than a typical neutered adult dog (1.6 × RER). Published feline DER factors cluster around 1.0–1.4 for indoor adults. Using a dog MER factor on a cat overestimates the bowl and is a common path to weight gain.',
    answerText:
      'Neutered indoor cats typically use 1.2 × RER, not the 1.6 dog factor. Applying dog MER to a cat overestimates calories.',
  },
  {
    question: 'Does indoor vs outdoor or neuter status change the number?',
    answer:
      'Yes. Neutering lowers adult maintenance need; indoor, sedentary cats sit at the low end of the range; outdoor or highly active cats sit higher. That is why this tool lists combined options — neutered indoor, intact indoor, neutered outdoor/active, intact outdoor/active — instead of a single “adult cat” slider. If you are unsure, start with neutered indoor adult (1.2) and let body condition over 4–6 weeks decide whether to move up or down.',
    answerText:
      'Neuter status and indoor vs outdoor both change the DER factor. Neutered indoor is 1.2; intact indoor 1.4; outdoor/active 1.4–1.6.',
  },
  {
    question: 'What weight should I enter — current or target?',
    answer:
      'For a cat at a healthy weight, use the current weight. For a cat that needs to lose weight, use the veterinarian-assessed target (ideal) weight — using the current overweight mass overestimates calories and slows progress. Pair this tool with the cat body condition score: a BCS of 4–5/9 is the usual ideal band. Never crash-diet a cat; rapid restriction can trigger hepatic lipidosis (fatty liver).',
    answerText:
      'Use current weight for healthy cats. Use the veterinarian-assessed target weight for weight-loss plans. Confirm with BCS. Never crash-diet a cat (hepatic lipidosis risk).',
  },
  {
    question: 'How do I find the kcal/cup figure for my cat’s food?',
    answer:
      'Every commercial cat food sold in the US is required to include a calorie statement on the label. Look for a line like “3,800 kcal ME/kg” or “350 kcal/cup” — often in small print near the guaranteed analysis. Dry cat food commonly lands around 300–450 kcal/cup; wet food is listed per can or per cup of the mixed ration. Always use the number on the specific food your cat eats.',
    answerText:
      'Check the calorie statement on the food bag (required by US law), usually listed as kcal/cup or ME kcal/cup. Dry cat food is often 300–450 kcal/cup.',
  },
  {
    question: 'Why does this calculator say “estimate” and not “prescription”?',
    answer:
      'Calorie formulas give a population-level starting point, not an individual prescription. Metabolic rate depends on lean mass, thyroid status, temperature, and individual variation that no formula captures. Studies show variation of 30% or more around the mean even within the same life stage. Feed near the estimate, then adjust over 4–6 weeks based on body condition score. A veterinarian should confirm the target weight and review any significant calorie restriction — especially the 0.8 × RER weight-loss factor.',
    answerText:
      'Formula estimates have 30%+ individual variation. Use as a starting point, then adjust over 4–6 weeks based on body condition score and veterinary guidance. Not a diagnosis or a diet plan.',
  },
  {
    question: 'Do treats count toward the daily calorie target?',
    answer:
      'Yes. Treats should stay within about 10% of daily calories — dental treats, squeeze-ups, and table scraps all count. Subtract treat calories from the DER estimate before you portion the bowl. Weigh meals on a kitchen gram scale rather than a measuring cup: cups over-portion depending on how they are filled. A slow-feeder bowl or interactive feeder can stretch a measured ration without adding calories.',
    answerText:
      'Keep treats to about 10% of daily calories. Weigh meals on a kitchen gram scale; measuring cups often over-portion.',
  },
]

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Vets.co', url: 'https://vets.co/' },
    { name: 'Tools', url: 'https://vets.co/tools' },
    { name: 'Cat Calorie Calculator', url: 'https://vets.co/tools/cat-calorie-calculator' },
  ],
})

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Cat Calorie Calculator',
  description:
    'Free cat calorie calculator using the standard RER formula (70 x kg^0.75) and WSAVA/AAHA-style feline DER factors for indoor vs outdoor, neuter status, and life stage. Outputs kcal/day and optional cups/day.',
  url: 'https://vets.co/tools/cat-calorie-calculator',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  featureList: [
    'Feline RER = 70 × (body weight in kg)^0.75',
    'DER factors for indoor vs outdoor, neuter status, and life stage',
    'Optional cups-per-day from the food-label kcal/cup',
    'Vet-supervised weight-loss factor (0.8) with hepatic-lipidosis caution',
    'Shoppable portioning kit via Amazon category searches (measured cat food, kitchen gram scale, slow-feeder bowl, interactive feeder, low-calorie treats)',
  ],
  publisher: { '@type': 'Organization', name: 'Vets.co Editorial', url: 'https://vets.co' },
}

const howToSchema = buildHowToSchema({
  name: 'How to calculate a cat’s daily calorie needs',
  description:
    'Estimate daily calorie requirements (RER and DER) using the standard veterinary formula and WSAVA/AAHA-style feline life-stage, neuter, and indoor/outdoor factors.',
  url: 'https://vets.co/tools/cat-calorie-calculator',
  steps: [
    {
      name: 'Enter your cat’s weight',
      text: 'Optionally pick a size class to pre-fill a typical adult weight, then enter your cat’s body weight in pounds or kilograms. For weight-loss cats, use the veterinarian-assessed target weight rather than the current weight.',
    },
    {
      name: 'Select life stage, neuter status, and lifestyle',
      text: 'Choose the option that best fits: neutered or intact, indoor or outdoor/active, kitten, senior, obese-prone, weight gain, or vet-supervised weight loss. Each option applies a different feline DER factor to the RER baseline.',
    },
    {
      name: 'Read the kcal/day estimate',
      text: 'The calculator computes RER (70 × weight_kg^0.75) and multiplies it by the feline DER factor to give kcal/day. For a cups-per-day estimate, also enter the kcal/cup from your food’s label.',
    },
    {
      name: 'Use as a starting point and monitor',
      text: 'Feed near the estimate for 4–6 weeks, then adjust up or down by about 10% based on your cat’s body condition score. Confirm any significant calorie restriction with your veterinarian. This is a planning / wellness reference, not a diagnosis or a diet plan.',
    },
  ],
})

const schema = combineSchemas(breadcrumbSchema, appSchema, howToSchema)

export default function CatCalorieCalculatorPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      {/* Hero */}
      <section className="bg-brand-dark px-container-sm sm:px-container py-10 sm:py-14 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(ellipse at 30% 50%, rgba(60, 110, 160, 0.55) 0%, transparent 60%)' }}
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
            Cat Calorie Calculator
          </h1>
          <p className="text-base text-white/60 leading-relaxed max-w-2xl">
            Estimate your cat&apos;s daily calorie needs using the standard RER formula and
            WSAVA/AAHA-style feline DER factors — indoor vs outdoor, neuter status, and life stage.
            Enter weight, pick the matching option, and get kcal/day — plus optional cups/day if you
            enter your food&apos;s calorie density.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2"
      >
        <Link href="/" className="hover:text-brand-primary no-underline">Vets.co</Link>
        <span>&#8250;</span>
        <Link href="/tools" className="hover:text-brand-primary no-underline">Tools</Link>
        <span>&#8250;</span>
        <span className="text-brand-text-mid font-medium">Cat Calorie Calculator</span>
      </nav>

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-8 pb-0">
        <div className="max-w-2xl">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the target
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Daily cat kcal worksheet
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the daily kcal target — RER, DER, and cups-per-day from your food label — so you
            can portion tomorrow without re-running the math. Planning / wellness reference only —
            not a diagnosis. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="vets-co"
            title="Daily cat kcal worksheet"
            subtitle="Email the daily kcal target — RER, DER, and cups-per-day so you can portion tomorrow. No spam."
            ctaText="Email my cat kcal target"
            source="tools-cat-calorie-calculator-under-hero"
          />
        </div>
      </section>

      {/* Calculator */}
      <section className="bg-brand-surface px-container-sm sm:px-container py-10 sm:py-12">
        <div className="max-w-4xl">
          <Calculator />
        </div>
      </section>

      {/* Money path — live amazon-brand search hops (food / scale / feeders / treats).
          ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <AffiliateDisclosure variant="inline" siteId="vets-co" />
          <div className="mt-4 rounded-xl border border-brand-border bg-brand-white p-5">
            <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Shop portions
            </div>
            <p className="mb-4 text-sm leading-relaxed text-brand-text-mid">
              Foods vary widely in calorie density, so the label kcal/cup figure is what turns DER
              into a bowl amount. A kitchen gram scale beats a measuring cup. A slow-feeder bowl or
              interactive feeder stretches a measured ration without adding calories. Low-calorie
              treats belong in the 10% treat budget. These are Amazon category searches — not a
              ranked product list and not a diet plan. Ask your veterinarian which foods and
              portions fit your cat. Vets.co earns a commission on qualifying purchases at no extra
              cost to you. Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/measured+cat+food?s=tools-cat-calorie-calculator"
                amazonLabel="Browse measured cat food on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/kitchen+gram+scale?s=tools-cat-calorie-calculator"
                amazonLabel="Browse kitchen gram scales on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/slow+feeder+cat+bowl?s=tools-cat-calorie-calculator"
                amazonLabel="Browse slow-feeder cat bowls on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/interactive+cat+feeder?s=tools-cat-calorie-calculator"
                amazonLabel="Browse interactive cat feeders on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/low+calorie+cat+treats?s=tools-cat-calorie-calculator"
                amazonLabel="Browse low-calorie cat treats on Amazon →"
              />
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-brand-text-mid">
            Calibrate the target with the{' '}
            <Link
              href="/tools/cat-body-condition-score"
              className="text-brand-primary underline-offset-2 hover:underline"
            >
              cat body condition score
            </Link>{' '}
            tool. Weight-loss cats should use a veterinarian-set target weight, not the current
            overweight number. The dog twin of this math lives on{' '}
            <a
              href="https://dog.com/tools/dog-calorie-calculator"
              className="text-brand-primary underline-offset-2 hover:underline"
            >
              Dog.com&apos;s dog calorie calculator
            </a>
            . For how weight-related disease can change vet costs, read the educational{' '}
            <Link
              href="/reviews/best-pet-insurance"
              className="text-brand-primary underline-offset-2 hover:underline"
            >
              pet insurance review
            </Link>
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
            The calculator uses two standard equations. First, Resting Energy Requirement (RER):
            70 multiplied by the cat&apos;s body weight in kilograms raised to the power of 0.75.
            RER is the baseline energy a cat needs at rest. Second, Daily Energy Requirement (DER):
            a feline life-stage factor multiplied by RER. The factors — 1.2 for a neutered indoor
            adult, 1.4 for intact indoor, 1.4–1.6 for outdoor or highly active cats, 2.5 for
            kittens, 1.1 for a senior indoor cat, 1.0 for obese-prone indoor, and 0.8 for a
            supervised weight-loss plan — are the standard values cited in WSAVA Global Nutrition
            Guidelines and AAHA Nutritional Assessment Guidelines. They are not dog MER factors.
          </p>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            For how feeding amount intersects with body condition scoring, use the{' '}
            <Link
              href="/tools/cat-body-condition-score"
              className="text-brand-primary underline-offset-2 hover:underline"
            >
              cat body condition score
            </Link>{' '}
            tool and the{' '}
            <Link
              href="/health/weight-management"
              className="text-brand-primary underline-offset-2 hover:underline"
            >
              weight management
            </Link>{' '}
            reference. Rapid calorie cuts in an overweight cat can trigger hepatic lipidosis
            (fatty liver) — a veterinarian should set the target and the rate of change. This page
            is a planning / wellness reference, not a diagnosis or a diet plan. For a stable,
            non-emergency feeding question, start at{' '}
            <Link href="/telehealth" className="text-brand-primary underline-offset-2 hover:underline">
              telehealth
            </Link>
            .
          </p>

          <div className="mb-8 rounded-xl border border-brand-border bg-brand-white p-5">
            <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Planning ahead
            </div>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Weight-related disease (diabetes, arthritis, urinary disease) is one of the cost
              drivers pet insurance is built for. Comparing published coverage while a cat is
              young and healthy matters because pre-existing conditions are excluded. This is
              educational context, not a recommendation of any named carrier.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <Link
                href="/tools/insurance-finder"
                className="inline-block bg-brand-primary text-white font-semibold text-sm px-4 py-2 rounded-md no-underline hover:bg-brand-primary-dark"
              >
                Filter insurance coverage →
              </Link>
              <Link
                href="/reviews/best-pet-insurance"
                className="inline-block bg-brand-dark text-white font-semibold text-sm px-4 py-2 rounded-md no-underline hover:bg-brand-dark/90"
              >
                Compare pet insurance →
              </Link>
              <Link
                href="/telehealth"
                className="inline-block border border-brand-border bg-brand-white text-brand-dark font-semibold text-sm px-4 py-2 rounded-md no-underline hover:border-brand-primary"
              >
                Talk to a vet (telehealth) →
              </Link>
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
              { label: 'Cat Body Condition Score', href: '/tools/cat-body-condition-score', note: 'Calibrate the kcal target to rib feel and waist' },
              { label: 'Cat Age Calculator', href: '/tools/cat-age-calculator', note: 'Match portions to AAFP/AAHA life stage' },
              { label: 'Cat Grimace Scale', href: '/tools/cat-grimace-scale', note: 'Facial pain-watch — not a diagnosis' },
              { label: 'Weight Management', href: '/health/weight-management', note: 'Safe loss rates; hepatic-lipidosis caution' },
              { label: 'Pet Insurance Review', href: '/reviews/best-pet-insurance', note: 'Educational coverage comparison, not a ranking' },
              { label: 'Insurance Coverage Finder', href: '/tools/insurance-finder', note: 'Filter published features — no carrier re-rank' },
              { label: 'Dog Calorie Calculator', href: 'https://dog.com/tools/dog-calorie-calculator', note: 'The canine twin — dog MER factors, not feline DER' },
              { label: 'Talk to a vet (telehealth)', href: '/telehealth', note: 'Stable feeding questions, not an ER substitute' },
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

      <CrossPortfolioCard currentSite="vets-co" contentType="tool" variant="footer" />
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  EmailCapture,
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildHowToSchema,
  combineSchemas,
  SchemaScript,
  FAQAccordion,
  AffiliateDisclosure,
  ArticleSourcesList,
  CrossPortfolioCard,
} from '@carloOS/ui'
import Calculator from './Calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Dog Ideal Weight Calculator: How Much Should My Dog Weigh? | Dog.com',
  description:
    'How much should my dog weigh? Get the healthy adult weight range by breed, plus an estimated ideal weight from your dog\'s body condition score (BCS). Free.',
  path: '/tools/dog-ideal-weight-calculator',
})

const SOURCES = [
  { label: 'American Kennel Club: Breed Weight and Standards', url: 'https://www.akc.org/dog-breeds/', publisher: 'AKC' },
  { label: 'American Animal Hospital Association: Weight Management Guidelines for Dogs and Cats', url: 'https://www.aaha.org/aaha-guidelines/weight-management/weight-management-home/', publisher: 'AAHA' },
  { label: 'WSAVA Global Nutrition Committee: Body Condition Score Charts (9-point)', url: 'https://wsava.org/global-guidelines/global-nutrition-guidelines/', publisher: 'WSAVA' },
  { label: 'Merck Veterinary Manual: Obesity and Nutritional Management in Dogs', url: 'https://www.merckvetmanual.com/management-and-nutrition/nutrition-small-animals/nutritional-requirements-and-related-diseases-of-small-animals', publisher: 'Merck Vet Manual' },
]

const FAQS = [
  {
    question: 'How much should my dog weigh?',
    answer:
      'A healthy adult weight is a range, not one number, and it depends mostly on breed and frame. For example, a Labrador Retriever\'s healthy adult weight is typically 55–80 lb depending on sex and build, while a smaller breed like a Beagle sits around 20–30 lb. The most practical way to judge your individual dog is the body condition score (BCS): a 9-point scale where 4–5 out of 9 is ideal. At an ideal score you can feel the ribs easily without pressing hard, the waist is visible from above, and the belly tucks up from the side. This tool returns the breed range and, if you enter current weight and a BCS, an estimated ideal weight.',
    answerText:
      'It depends on breed and frame and is a range, not one number. A Labrador is typically 55–80 lb; a Beagle 20–30 lb. Judge your individual dog by body condition score (4–5 of 9 is ideal).',
  },
  {
    question: 'What is a body condition score (BCS)?',
    answer:
      'Body condition score is a standardized way to assess whether a dog is underweight, ideal, or overweight, independent of breed. The WSAVA 9-point scale runs from 1 (emaciated) to 9 (severely obese), with 4–5 as the ideal. At an ideal score, the ribs are easy to feel under a thin fat layer, there is a visible waist when viewed from above, and the abdomen tucks up when viewed from the side. BCS matters because the same weight can be ideal for one dog and overweight for another with a smaller frame — so vets often set weight goals using BCS rather than a single target number.',
    answerText:
      'A 9-point scale (1 = emaciated, 9 = severely obese) for assessing body fat, with 4–5 ideal. At ideal, ribs are easy to feel, the waist is visible from above, and the belly tucks up from the side.',
  },
  {
    question: 'How do I know if my dog is overweight?',
    answer:
      'Use the hands-on body condition check rather than the scale alone. Run your hands along the rib cage: at a healthy weight you should feel the ribs easily with light pressure, like the back of your hand. Look from above for a visible waist behind the rib cage, and from the side for an upward tuck of the belly. If you cannot feel the ribs without pressing, the waist is gone, or the belly hangs level, the dog is likely carrying excess weight (BCS 6 or higher). Excess weight raises the risk of joint disease, diabetes, and other problems, so a gradual, veterinarian-guided weight-loss plan is the safe approach — never crash dieting.',
    answerText:
      'Check by feel: ribs should be easy to feel with light pressure, with a visible waist from above and a belly tuck from the side. If ribs are hard to feel and the waist is gone, the dog is likely overweight (BCS 6+).',
  },
  {
    question: 'How do I help my dog lose weight safely?',
    answer:
      'Weight loss in dogs should be gradual and vet-guided — typically aiming for roughly 1–2% of body weight lost per week, not a crash diet. Start by having your veterinarian set a target weight and rule out a medical cause such as hypothyroidism. From there, measure food by weight or with the calorie calculator rather than free-feeding, account for treats in the daily total, and increase activity as the dog\'s joints allow. A weight-management or therapeutic diet can help because it keeps the dog feeling full on fewer calories. Re-check the body condition score every few weeks and adjust.',
    answerText:
      'Gradually, under veterinary guidance — about 1–2% of body weight per week. Have the vet set a target and rule out a medical cause, measure food by calories, count treats, and re-check body condition every few weeks.',
  },
]

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Dog.com', url: 'https://dog.com/' },
    { name: 'Tools', url: 'https://dog.com/tools' },
    { name: 'Dog Ideal Weight Calculator', url: 'https://dog.com/tools/dog-ideal-weight-calculator' },
  ],
})

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Dog Ideal Weight Calculator',
  description:
    'Free dog ideal weight calculator that returns a healthy adult weight range by breed and an estimated ideal weight from a 9-point body condition score (BCS).',
  url: 'https://dog.com/tools/dog-ideal-weight-calculator',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

const articleSchema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Dog Ideal Weight Calculator: How Much Should My Dog Weigh?',
  description:
    'How to find a dog\'s healthy adult weight range by breed and estimate an ideal weight from the 9-point body condition score, with a worked example.',
  url: 'https://dog.com/tools/dog-ideal-weight-calculator',
  imageUrl: 'https://dog.com/og/tools.png',
  authorName: 'Dog.com Editorial',
  publishedAt: '2026-06-11',
  modifiedAt: '2026-06-11',

  citation: SOURCES,
})

const howToSchema = buildHowToSchema({
  name: 'How to find a dog\'s healthy weight range and ideal weight',
  description: 'Estimate the healthy adult weight range by breed and an ideal weight from the 9-point WSAVA body condition score using AKC-standard breed data.',
  url: 'https://dog.com/tools/dog-ideal-weight-calculator',
  steps: [
    {
      name: 'Select your dog\'s breed or size class',
      text: 'Choose your dog\'s breed from the list to get the AKC-standard adult weight range for that breed. For mixed-breed or unlisted dogs, select the appropriate size class (toy, small, medium, large, or giant).',
    },
    {
      name: 'Enter your dog\'s current weight',
      text: 'Enter your dog\'s current body weight in pounds or kilograms.',
    },
    {
      name: 'Enter your dog\'s body condition score',
      text: 'Assess and enter your dog\'s body condition score on the 9-point WSAVA scale (4–5 is ideal). At an ideal score, ribs are easy to feel with light pressure, the waist is visible from above, and the belly tucks up from the side.',
    },
    {
      name: 'Read the healthy range and estimated ideal weight',
      text: 'The calculator returns the breed\'s healthy adult weight range and applies the standard BCS heuristic (each point above 5 ≈ 10% overweight) to estimate an individual ideal weight. Use this as a starting point; your veterinarian sets the final target.',
    },
  ],
})

const schema = combineSchemas(breadcrumbSchema, appSchema, articleSchema, howToSchema)

export default function DogIdealWeightCalculatorPage() {
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
            Dog Ideal Weight Calculator
          </h1>
          <p className="text-base text-white/60 leading-relaxed max-w-2xl">
            How much should your dog weigh? Get the healthy adult weight range for your breed, then
            add your dog&apos;s current weight and body condition score for an estimated ideal weight
            — using AKC-standard breed ranges and the WSAVA 9-point body condition scale.
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
        <span className="text-brand-text-mid font-medium">Dog Ideal Weight Calculator</span>
      </nav>

      {/* GEO: extractable answer + worked example, ABOVE the tool */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-section pb-2">
        <div className="max-w-2xl">
          <div className="rounded-xl border border-brand-border bg-brand-white p-5 sm:p-6">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              The short answer
            </div>
            <p className="text-base text-brand-text-mid leading-relaxed mb-3">
              A healthy adult weight is a <span className="font-semibold text-brand-dark">range</span>,
              set mostly by breed and frame, and the practical check for an individual dog is the
              body condition score (BCS), where 4–5 of 9 is ideal.
            </p>
            <p className="text-base text-brand-text-mid leading-relaxed mb-3">
              <span className="font-semibold text-brand-dark">Worked example.</span> A Labrador&apos;s
              healthy adult weight is typically{' '}
              <span className="font-semibold text-brand-dark">55–80 lb</span> depending on sex and
              frame. If a Lab weighs 90 lb at a BCS of 7/9, the standard heuristic (each BCS point
              above ideal ≈ 10% over weight) estimates an ideal of about{' '}
              <span className="font-semibold text-brand-dark">75 lb</span> — roughly 15 lb to lose,
              gradually and under veterinary guidance.
            </p>
            <p className="text-sm text-brand-text-light leading-relaxed m-0">
              These are <span className="font-semibold">estimates</span>. Your veterinarian can set a
              target weight for your individual dog and rule out a medical cause for weight change.
            </p>
          </div>
        </div>
      </section>

      {/* Tool */}
      <section className="bg-brand-surface px-container-sm sm:px-container py-8 sm:py-10">
        <div className="max-w-4xl">
          <Calculator />
        </div>
      </section>

      {/* BCS reference table — citation magnet */}
      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-3xl">
          <h2 className="mb-4 font-display text-2xl font-semibold text-brand-text-dark">
            Body condition score at a glance (9-point WSAVA scale)
          </h2>
          <p className="mb-4 text-sm text-brand-text-mid leading-relaxed">
            Body condition score judges body fat independent of breed. The full assessment is by
            feel and sight — see the{' '}
            <Link href="/guides/dog-body-condition-score" className="text-brand-primary underline-offset-2 hover:underline">
              body condition score guide
            </Link>{' '}
            for the hands-on method.
          </p>
          <div className="overflow-x-auto rounded-lg border border-brand-border">
            <table className="w-full text-sm border-collapse bg-brand-white">
              <thead>
                <tr className="bg-brand-surface text-left">
                  <th className="p-3 font-semibold text-brand-dark border-b border-brand-border">Score</th>
                  <th className="p-3 font-semibold text-brand-dark border-b border-brand-border">Category</th>
                  <th className="p-3 font-semibold text-brand-dark border-b border-brand-border">What you see and feel</th>
                </tr>
              </thead>
              <tbody className="text-brand-text-mid">
                {[
                  ['1–3', 'Underweight', 'Ribs, spine, and hip bones easily visible; no fat cover; obvious waist and tuck'],
                  ['4–5', 'Ideal', 'Ribs easy to feel with light pressure; visible waist from above; belly tucks up'],
                  ['6–7', 'Overweight', 'Ribs hard to feel; waist barely or not visible; little to no belly tuck'],
                  ['8–9', 'Obese', 'Ribs cannot be felt under heavy fat; no waist; belly hangs and may distend'],
                ].map((row) => (
                  <tr key={row[0]} className="border-b border-brand-border last:border-0">
                    <td className="p-3 font-medium text-brand-dark">{row[0]}</td>
                    <td className="p-3">{row[1]}</td>
                    <td className="p-3">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-2xs text-brand-text-light">
            Descriptions are general; assessment is by feel and sight. Your veterinarian can confirm
            the score and set an individual target.
          </p>
        </div>
      </section>

      {/* Result next-step — disclosed editorial path */}
      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <div className="rounded-xl border border-brand-border bg-brand-white p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              Next step
            </div>
            <p className="text-sm text-brand-text-mid leading-relaxed mb-3">
              Got a target weight? Size the daily food with the{' '}
              <Link href="/tools/dog-calorie-calculator" className="text-brand-primary underline-offset-2 hover:underline">
                dog calorie calculator
              </Link>{' '}
              (use the weight-loss factor if needed), learn the hands-on check in the{' '}
              <Link href="/guides/dog-body-condition-score" className="text-brand-primary underline-offset-2 hover:underline">
                body condition score guide
              </Link>
              , and read{' '}
              <Link href="/nutrition/weight-management" className="text-brand-primary underline-offset-2 hover:underline">
                weight management
              </Link>{' '}
              for the full plan. A weight-management diet can keep a dog full on fewer calories.
            </p>
            <AffiliateDisclosure variant="inline" siteId="dog-com" className="mb-3 text-2xs" />
            <Link
              href="/reviews/best-dry-dog-food"
              className="inline-block bg-brand-primary text-white font-semibold text-sm px-4 py-2 rounded-md no-underline hover:bg-brand-primary-dark"
            >
              Compare weight-management dog foods →
            </Link>
          </div>
        </div>
      </section>

      {/* Methodology + FAQ */}
      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <h2 className="mb-4 font-display text-2xl font-semibold text-brand-text-dark">
            The method behind the estimate
          </h2>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            The healthy range comes from the AKC-standard adult weight band for the selected breed in
            the Dog.com breed dataset; for a mixed-breed or unlisted dog, a size-class band is used
            instead. The estimated ideal weight uses the standard veterinary body-condition
            heuristic: each point of body condition score above the ideal (4–5 of 9) represents
            roughly 10% over ideal body weight, so estimated ideal weight ≈ current weight ÷ (1 +
            0.10 × (BCS − 5)). Because frame, sex, age, and muscle all shift the right number, two
            dogs of the same breed can sit at different points in the range — which is why a body
            condition assessment matters more than the scale alone.
          </p>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            This is husbandry information, not a diagnosis or a target your veterinarian set. Your
            veterinarian can set a target weight for your individual dog and rule out a medical cause
            for weight change. For breed-specific adult-size context, browse the{' '}
            <Link href="/breeds" className="text-brand-primary underline-offset-2 hover:underline">
              breed profiles
            </Link>
            ; for the hands-on body condition method, see the{' '}
            <Link href="/guides/dog-body-condition-score" className="text-brand-primary underline-offset-2 hover:underline">
              body condition score guide
            </Link>
            .
          </p>

          <h2 className="mb-4 mt-8 font-display text-2xl font-semibold text-brand-text-dark">
            Common questions
          </h2>
          <FAQAccordion items={FAQS} />

          <div className="mt-8">
            <ArticleSourcesList sources={SOURCES} />
          </div>
        </div>
      </section>

      {/* Related tools + guides */}
      <section className="bg-brand-white border-t border-brand-border px-container-sm sm:px-container py-10">
        <div className="max-w-2xl">
          <h2 className="font-display text-lg font-bold text-brand-dark mb-4">Related Tools &amp; Guides</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'Dog Calorie Calculator', href: '/tools/dog-calorie-calculator', note: 'Daily calories, with a weight-loss factor' },
              { label: 'Body Condition Score Guide', href: '/guides/dog-body-condition-score', note: 'The hands-on 9-point assessment' },
              { label: 'Weight Management', href: '/nutrition/weight-management', note: 'Safe, gradual weight-loss plan' },
              { label: 'Dog Obesity', href: '/health/dog-obesity', note: 'Risks and how to reverse it' },
              { label: 'Breed Profiles', href: '/breeds', note: 'Typical adult weight by breed' },
              { label: 'Best Dry Dog Food 2026', href: '/reviews/best-dry-dog-food', note: 'Including weight-management formulas' },
            ].map((item) => (
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
            subtitle="Research-based weight and nutrition guidance and new tool announcements. No spam."
            source="tools-dog-ideal-weight-calculator"
          />
        </div>
      </section>

      <CrossPortfolioCard currentSite="dog-com" contentType="tool" variant="footer" />
    </>
  )
}

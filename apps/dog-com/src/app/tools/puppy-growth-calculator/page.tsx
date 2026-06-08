import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  EmailCapture,
  buildBreadcrumbSchema,
  buildHowToSchema,
  buildFAQSchema,
  combineSchemas,
  SchemaScript,
  StockImage,
  FAQAccordion,
  ArticleSourcesList,
  AffiliateDisclosure,
} from '@carloOS/ui'
import Calculator from './Calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Puppy Growth Calculator — Predict Adult Weight | Dog.com',
  description:
    'Estimate your puppy\'s adult weight and growth progress from current age, weight, and size class or breed. Free, source-cited, and labeled an estimate.',
  path: '/tools/puppy-growth-calculator',
})

const FAQS = [
  {
    question: 'How does the puppy growth calculator predict adult weight?',
    answer:
      'It uses the standard growth-percentage method. Dogs reach their full adult weight at different ages depending on size: toy and small breeds finish growing by roughly 8 to 12 months, medium breeds by about 12 to 14 months, large breeds by 15 to 18 months, and giant breeds not until 18 to 24 months. The calculator looks up what fraction of adult weight a puppy of your dog\'s size class has typically reached at its current age, then divides the current weight by that fraction to project the adult weight. The growth curve fractions come from widely published size-class growth data, not from numbers invented for this site.',
    answerText:
      'Adult weight = current weight divided by the fraction of adult weight typically reached at the puppy\'s current age for its size class. Toy/small dogs mature by 8-12 months; giant breeds by 18-24 months. It is a population estimate, not a guarantee.',
  },
  {
    question: 'How accurate is a puppy adult-weight prediction?',
    answer:
      'It is an estimate, and accuracy improves with age. A projection made at eight weeks is far less reliable than one made at six months, because early-life weight is a weaker predictor of adult size. Mixed-breed puppies are harder to predict than purebreds because their adult size can fall anywhere within their parents\' range. The calculator shows a likely range rather than a single number, and that range is intentionally wider for very young puppies. Treat the figure as a planning aid for choosing crate sizes, food amounts, and harness sizes, not a precise guarantee.',
    answerText:
      'It is an estimate that gets more reliable with age. Projections at 6 months are more accurate than at 8 weeks. Mixed breeds are harder to predict. The tool shows a likely range, wider for younger puppies.',
  },
  {
    question: 'When should I switch my puppy from puppy food to adult food?',
    answer:
      'The common guideline is to switch when a puppy is near skeletal maturity, which tracks with size class: small and toy breeds around 9 to 12 months, medium breeds around 12 months, and large and giant breeds around 12 to 24 months. Large and giant breed puppies are a special case: they should stay on a food formulated for large-breed growth (with controlled calcium and energy) until they finish growing, because overfeeding energy and calcium during rapid growth is linked to orthopedic problems. Always transition foods gradually over 7 to 10 days, and confirm timing with your veterinarian, who can assess your individual dog.',
    answerText:
      'Switch near skeletal maturity: small/toy breeds ~9-12 months, medium ~12 months, large/giant ~12-24 months. Large-breed puppies need large-breed growth formulas until mature. Transition over 7-10 days and confirm timing with your vet.',
  },
  {
    question: 'What growth red flags should prompt a vet visit?',
    answer:
      'Healthy puppies generally gain weight steadily and stay active and bright. Signs worth a veterinary check include: failure to gain weight or visible weight loss, a sudden change in appetite, a distended or painful abdomen, persistent diarrhea or vomiting, lethargy, lameness or reluctance to move (especially in fast-growing large breeds), or a body that looks very thin or very heavy for its age. This calculator estimates size; it does not assess health. If your puppy\'s growth seems off or any of these signs appear, contact your veterinarian rather than relying on a calculator.',
    answerText:
      'See a vet for: failure to gain or weight loss, appetite changes, distended/painful abdomen, persistent vomiting or diarrhea, lethargy, or lameness in large breeds. The calculator estimates size only, not health.',
  },
  {
    question: 'Does spaying or neutering affect a puppy\'s growth?',
    answer:
      'It can. Removing the sex hormones before a dog finishes growing can delay the closure of the growth plates, which may lead to slightly taller adult stature in some dogs, particularly larger breeds. The size and direction of this effect varies and is an area of ongoing veterinary discussion. The timing of spay or neuter is a decision to make with your veterinarian based on breed, size, sex, and individual health, not based on a weight calculator. This tool does not factor neuter status into its estimate.',
    answerText:
      'It can. Altering before growth plates close may slightly affect adult height in some dogs, especially larger breeds. Discuss timing with your vet. The calculator does not factor in neuter status.',
  },
]

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Dog.com', url: 'https://dog.com/' },
    { name: 'Tools', url: 'https://dog.com/tools' },
    { name: 'Puppy Growth Calculator', url: 'https://dog.com/tools/puppy-growth-calculator' },
  ],
})

const howToSchema = buildHowToSchema({
  name: 'How to estimate your puppy\'s adult weight',
  description:
    'Estimate a puppy\'s adult weight using current age, current weight, and size class with the standard growth-percentage method.',
  url: 'https://dog.com/tools/puppy-growth-calculator',
  totalTime: 'PT2M',
  steps: [
    {
      name: 'Pick size class or breed',
      text: 'Choose your puppy\'s estimated adult size class (toy, small, medium, large, or giant), or select its breed to use the matching growth curve.',
    },
    {
      name: 'Enter current age',
      text: 'Enter the puppy\'s current age in weeks or months. Estimates are most reliable from about eight weeks up to the size class\'s maturity age.',
    },
    {
      name: 'Enter current weight',
      text: 'Enter the puppy\'s current weight in pounds or kilograms.',
    },
    {
      name: 'Read the estimate',
      text: 'The tool shows the percentage of adult weight reached so far and the estimated adult weight with a likely range. Treat it as an estimate and confirm with your veterinarian.',
    },
  ],
})

const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText })),
})

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Puppy Growth & Adult Weight Calculator',
  description:
    'Free puppy growth calculator that estimates adult weight and growth progress from current age, weight, and size class or breed using the standard growth-percentage method.',
  url: 'https://dog.com/tools/puppy-growth-calculator',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

const schema = combineSchemas(breadcrumbSchema, howToSchema, faqSchema, appSchema)

const SOURCES = [
  {
    label: 'Nutritional Requirements of Dogs (growth and energy needs)',
    publisher: 'National Research Council (NRC)',
  },
  {
    label: 'WSAVA Global Nutrition Guidelines — life-stage feeding',
    url: 'https://wsava.org/global-guidelines/global-nutrition-guidelines/',
    publisher: 'WSAVA',
  },
  {
    label: 'Puppy growth, large-breed development, and when to switch foods',
    url: 'https://www.akc.org/expert-advice/nutrition/puppy-feeding-fundamentals/',
    publisher: 'American Kennel Club',
  },
  {
    label: 'Feeding Growing Puppies — energy, calcium, and orthopedic risk in large breeds',
    publisher: 'Merck Veterinary Manual',
  },
]

const MONEY_LINKS = [
  {
    label: 'Best Dog Food for Puppies',
    href: '/reviews/best-dog-food-for-puppies',
    note: 'Growth formulas, including large-breed-specific picks',
  },
  {
    label: 'Best Dog Crates',
    href: '/reviews/best-dog-crates',
    note: 'Size your crate to the estimated adult weight, not the puppy',
  },
  {
    label: 'Best Dog Food for Small Breeds',
    href: '/reviews/best-dog-food-small-breed',
    note: 'Calorie-dense formulas for toy and small breeds',
  },
  {
    label: 'Best Large Breed Dog Food',
    href: '/reviews/best-large-breed-dog-food',
    note: 'Controlled-calcium growth foods for large and giant breeds',
  },
  {
    label: 'Best Dog Harnesses',
    href: '/reviews/best-dog-harnesses',
    note: 'Adjustable harnesses that fit a growing puppy',
  },
  {
    label: 'Breed Profiles',
    href: '/breeds',
    note: 'Adult weight ranges and growth notes by breed',
  },
]

export default function PuppyGrowthCalculatorPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      {/* Hero */}
      <section className="bg-brand-dark px-container-sm sm:px-container py-section relative overflow-hidden">
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
            className="font-display font-bold text-white tracking-tight leading-none mb-5"
            style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
          >
            Puppy Growth Calculator
          </h1>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
            Estimate how big your puppy will get. Enter its current age, weight, and size class or
            breed to see how far along it is and a projected adult weight -- using the standard
            growth-percentage method, clearly labeled as an estimate.
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
        <span className="text-brand-text-mid font-medium">Puppy Growth Calculator</span>
      </nav>

      {/* Hero image */}
      <div className="px-container-sm sm:px-container pt-8 bg-brand-surface">
        <div className="max-w-5xl">
          <StockImage
            manifestKey="dog-com:tools-puppy-growth"
            fallbackKey="dog-com:category-puppy"
            aspect="16:9"
            variant="wide"
            priority
          />
        </div>
      </div>

      {/* Calculator */}
      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-5xl">
          <Calculator />
          <p className="mt-3 text-xs text-brand-text-light">
            Compiled by <span className="font-medium text-brand-text-mid">Dog.com Editorial</span>{' '}
            from cited veterinary and breed-registry references. This is an estimate, not a
            diagnosis -- consult your veterinarian for guidance specific to your dog.
          </p>
        </div>
      </section>

      {/* How puppy growth works */}
      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <h2 className="mb-4 font-display text-2xl font-semibold text-brand-text-dark">
            How puppy growth actually works
          </h2>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            Puppies do not grow at a constant rate, and they do not all finish growing at the same
            age. Growth is fastest in the first few months, then slows as a dog approaches its adult
            size. The single biggest factor in <em>when</em> a dog stops growing is its adult size:
            small dogs have less mass to build and finish early, while giant breeds keep adding bone
            and muscle for up to two years. That is why a calculator that predicts adult weight has
            to know the size class -- the same current weight means something very different for a
            four-month-old toy-breed puppy than for a four-month-old giant-breed puppy.
          </p>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            The method this tool uses is the standard growth-percentage approach: at a given age, a
            puppy of a given size class has typically reached a known fraction of its adult weight.
            Divide the current weight by that fraction and you get an estimated adult weight. The
            fractions are drawn from widely published size-class growth curves; the tool shows them
            transparently and interpolates between the published checkpoints.
          </p>

          <h2 className="mb-4 mt-8 font-display text-2xl font-semibold text-brand-text-dark">
            Growth timelines by size class
          </h2>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            These are typical maturity windows, not fixed dates. Individual dogs vary, and
            mixed-breed dogs can fall anywhere across their parents&apos; ranges.
          </p>
          <ul className="mb-4 space-y-2 text-base leading-relaxed text-brand-text-mid">
            <li>
              <strong className="text-brand-text-dark">Toy (under ~12 lb):</strong> reaches adult
              weight around 8-11 months; roughly half of adult weight by ~3.5-4 months.
            </li>
            <li>
              <strong className="text-brand-text-dark">Small (~12-25 lb):</strong> adult weight by
              about 10-12 months.
            </li>
            <li>
              <strong className="text-brand-text-dark">Medium (~25-50 lb):</strong> adult weight by
              about 12-14 months.
            </li>
            <li>
              <strong className="text-brand-text-dark">Large (~50-90 lb):</strong> keeps growing to
              roughly 15-18 months; near adult height earlier than adult weight.
            </li>
            <li>
              <strong className="text-brand-text-dark">Giant (~90 lb+):</strong> the slowest to
              mature -- often not at full adult weight until 18-24 months.
            </li>
          </ul>

          <h2 className="mb-4 mt-8 font-display text-2xl font-semibold text-brand-text-dark">
            When to switch from puppy food to adult food
          </h2>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            A reasonable rule is to switch near skeletal maturity, which lines up with the timelines
            above: small and toy breeds around 9-12 months, medium breeds around 12 months, and
            large and giant breeds anywhere from 12 to 24 months. Large and giant breed puppies are
            the important exception -- they should stay on a food formulated for large-breed growth,
            with controlled calcium and energy density, until they finish growing. Overfeeding
            energy and calcium during rapid growth is associated with developmental orthopedic
            disease in big dogs, so &quot;more food, faster growth&quot; is the opposite of the goal.
            For the full picture, see the{' '}
            <Link
              href="/nutrition/puppy-nutrition"
              className="text-brand-primary underline-offset-2 hover:underline"
            >
              puppy nutrition guide
            </Link>{' '}
            and the{' '}
            <Link
              href="/nutrition/feeding-frequency"
              className="text-brand-primary underline-offset-2 hover:underline"
            >
              feeding frequency
            </Link>{' '}
            reference. Once you know an estimated adult weight, the{' '}
            <Link
              href="/tools/dog-calorie-calculator"
              className="text-brand-primary underline-offset-2 hover:underline"
            >
              dog calorie calculator
            </Link>{' '}
            can turn that target weight into a daily calorie estimate.
          </p>

          <h2 className="mb-4 mt-8 font-display text-2xl font-semibold text-brand-text-dark">
            Growth red flags worth a vet visit
          </h2>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            A weight predictor estimates size, not health. Contact your veterinarian if your puppy
            fails to gain weight or loses weight, has a sudden change in appetite, develops a
            distended or painful abdomen, has persistent vomiting or diarrhea, becomes lethargic, or
            shows lameness or reluctance to move -- particularly fast-growing large-breed puppies,
            where limping can signal a developmental problem. None of these are things a calculator
            can assess.
          </p>

          <h2 className="mb-4 mt-8 font-display text-2xl font-semibold text-brand-text-dark">
            Common questions
          </h2>
          <FAQAccordion items={FAQS} />

          <ArticleSourcesList sources={SOURCES} title="References" />
        </div>
      </section>

      {/* Money path: gear & food sized to the estimate */}
      <section className="bg-brand-white border-t border-brand-border px-container-sm sm:px-container py-10">
        <div className="max-w-2xl">
          <h2 className="font-display text-lg font-bold text-brand-dark mb-2">
            Buy gear &amp; food sized to the estimate
          </h2>
          <p className="text-sm text-brand-text-mid mb-4">
            Use the projected adult weight to choose the right crate, harness, and growth food the
            first time -- instead of re-buying as your puppy grows.
          </p>
          <AffiliateDisclosure variant="inline" siteId="dog-com" />
          <div className="mt-4 grid sm:grid-cols-2 gap-3">
            {MONEY_LINKS.map((item) => (
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
            title="Dog.com puppy &amp; tool updates"
            subtitle="Research-based puppy care guidance and new calculator announcements. No spam."
            source="tools-puppy-growth-calculator"
          />
        </div>
      </section>
    </>
  )
}

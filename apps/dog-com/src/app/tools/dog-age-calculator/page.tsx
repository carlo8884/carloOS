import { HopDisclosure } from '../../../components/HopDisclosure'
import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildBreadcrumbSchema,
  buildHowToSchema,
  combineSchemas,
  SchemaScript,
  FAQAccordion,
  CrossPortfolioCard,
  ShopCtas,
} from '@carloOS/ui'
import Calculator from './Calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Dog Age in Human Years Calculator | Dog.com',
  description:
    'Convert a dog\'s age to human years with a banded planning figure, not an AVMA or AAHA chart. Enter age and size.',
  path: '/tools/dog-age-calculator',
})

const FAQS = [
  {
    question: 'Why is the "multiply by 7" rule inaccurate?',
    answer:
      'The popular rule of multiplying a dog\'s age by 7 assumes a simple linear relationship between dog and human aging, which does not reflect how dogs actually develop. Dogs mature very rapidly in their first year -- reaching reproductive maturity in roughly 6-12 months -- and then slow down considerably in later life, especially smaller breeds. A one-year-old dog is already physiologically closer to a 15-year-old human than to a 7-year-old on this page\'s planning chart. The multiply-by-7 shortcut also ignores size: large and giant breeds age faster than small breeds in later years, meaning a 10-year-old Great Dane and a 10-year-old Chihuahua are not at equivalent stages on that chart. A 2020 epigenetic clock study published in Cell Systems (University of California, San Diego) proposed a methylation-based formula -- approximately 16 x ln(dog age) + 31 -- from Labrador Retrievers. That formula is one breed study. This calculator does not use it, and it is not an AVMA or AAHA chart. The 15 / 9 / size-rate band on this page is a planning figure.',
    answerText:
      'The multiply-by-7 rule treats aging as linear. This page uses a planning figure instead: fast early, then slower, with a higher later rate for larger dogs. It is not an AVMA or AAHA chart. A 2020 Cell Systems study proposed 16 x ln(dog age) + 31 from Labradors; this calculator does not use that formula.',
  },
  {
    question: 'How does size affect how a dog ages?',
    answer:
      'Larger and giant breeds often have shorter median lifespans than small breeds. On this calculator the senior label is a planning figure: giant breeds at about age 6, large at 7, medium at 8, and small at 9. After age two the human-year rates are also a planning figure: Small 4 human years per calendar year, Medium and Large 5, Giant 6. They are not an AVMA or AAHA chart. Individual dogs of the same size can age differently based on genetics, body condition, nutrition, and veterinary care.',
    answerText:
      'Senior labels and the after-age-2 rates are a planning figure, not an AVMA or AAHA chart: giant about 6, large 7, medium 8, small 9; then Small 4, Medium/Large 5, Giant 6 human years per calendar year.',
  },
  {
    question: 'What do the life stage labels (puppy, adult, senior) mean?',
    answer:
      'The life stage labels in this calculator -- Puppy, Adolescent, Adult, Mature adult, Senior -- are a planning figure, not an AVMA or AAHA chart. This page places giant breeds in the Senior stage at approximately age 6, large at 7, medium at 8, and small at 9. Your veterinarian is the right person to assess an individual dog, since two dogs of the same age and size can be at different stages depending on their history and condition.',
    answerText:
      'Life stage labels are a planning figure, not an AVMA or AAHA chart. Senior thresholds: Giant ~6, Large ~7, Medium ~8, Small ~9. Your veterinarian assesses individual health status.',
  },
  {
    question: 'Is this an exact conversion or an estimate?',
    answer:
      'It is an estimate. The banded model -- 15 human years in year one, 9 in year two, then a size-based rate -- is a planning figure, not an AVMA or AAHA chart. It follows the non-linear shape better than multiply-by-7, and this page does not claim a measured accuracy percent. It does not account for breed, individual health history, or body condition. Treat the output as a conversational reference, not a medical data point.',
    answerText:
      'It is a planning figure, not an AVMA or AAHA chart and not a measured accuracy percent. It does not account for breed, genetics, or individual health.',
  },
]

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Dog.com', url: 'https://dog.com/' },
    { name: 'Tools', url: 'https://dog.com/tools' },
    { name: 'Dog Age in Human Years Calculator', url: 'https://dog.com/tools/dog-age-calculator' },
  ],
})

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Dog Age in Human Years Calculator',
  description:
    'Converts dog age to a human-year equivalent with a banded planning figure. Not an AVMA or AAHA chart.',
  url: 'https://dog.com/tools/dog-age-calculator',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Converts dog age with a banded planning figure, not an AVMA or AAHA chart',
    'Size-specific rates after year two (small, medium, large, giant)',
    'Qualitative life-stage label: puppy, adolescent, adult, mature adult, senior',
    'Shoppable life-stage kit via Amazon category searches',
  ],
}

const howToSchema = buildHowToSchema({
  name: 'How to convert a dog\'s age to human years',
  description: 'Estimate a dog\'s equivalent human age with a banded planning figure based on age and size. Not an AVMA or AAHA chart.',
  url: 'https://dog.com/tools/dog-age-calculator',
  steps: [
    {
      name: 'Enter your dog\'s age in years',
      text: 'Type your dog\'s age in calendar years. The calculator handles ages from under one year through senior dogs.',
    },
    {
      name: 'Select your dog\'s size class',
      text: 'Choose Small (under 20 lb), Medium (20–50 lb), Large (50–90 lb), or Giant (over 90 lb). Size affects the human-year rate from year three onward.',
    },
    {
      name: 'Read the human-year estimate and life stage',
      text: 'The calculator returns a planning figure: year 1 = 15 human years, year 2 = 9 more, then 4–6 per year by size, plus a life-stage label. It is not an AVMA or AAHA chart.',
    },
  ],
})

const schema = combineSchemas(breadcrumbSchema, appSchema, howToSchema)

export default function DogAgeCalculatorPage() {
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
            Dog Age in Human Years Calculator
          </h1>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
            Convert your dog&apos;s age to a human-year equivalent using a banded planning figure —
            not an AVMA or AAHA chart, and not the multiply-by-7 rule. Enter age and size for an
            estimate and a life-stage label.
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
        <span className="text-brand-text-mid font-medium">Dog Age Calculator</span>
      </nav>

      {/* Calculator */}
      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-5xl">
          <Calculator />
        </div>
      </section>

      {/* Money path — live amazon-brand search hops (life-stage kit).
          ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
          Category searches only — not a ranked list, not a diagnosis. */}
      <section id="dog-age-kit" className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <HopDisclosure siteId="dog-com" href={["/go/amazon-brand/puppy+food?s=tools-dog-age", "/go/amazon-brand/puppy+teething+toys?s=tools-dog-age", "/go/amazon-brand/dental+chews+dog?s=tools-dog-age", "/go/amazon-brand/joint+support+dog+treats?s=tools-dog-age", "/go/amazon-brand/dog+id+tag+collar?s=tools-dog-age", "/go/amazon-brand/dog+leash?s=tools-dog-age"]} />
          <div className="mt-4 rounded-xl border border-brand-border bg-brand-white p-5">
            <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Shop by life stage
            </div>
            <p className="mb-4 text-sm leading-relaxed text-brand-text-mid">Amazon search links go to general supplies. They are not a ranked product list and they do not replace veterinary care.</p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/puppy+food?s=tools-dog-age"
                amazonLabel="Browse puppy food on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/puppy+teething+toys?s=tools-dog-age"
                amazonLabel="Browse puppy teething toys on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/dental+chews+dog?s=tools-dog-age"
                amazonLabel="Browse dental chews for dogs on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/joint+support+dog+treats?s=tools-dog-age"
                amazonLabel="Browse joint-support dog treats on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/dog+id+tag+collar?s=tools-dog-age"
                amazonLabel="Browse dog ID tags and collars on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/dog+leash?s=tools-dog-age"
                amazonLabel="Browse dog leashes on Amazon →"
              />
          </div>
          </div>
        </div>
      </section>

      {/* Result next-step — soft senior-care / cost-planning intent path.
          A dog's human-age estimate naturally raises "what should I plan for?"
          Insurance premiums are typically lowest while a dog is young; this is a financial-
          readiness link, not a product pitch. Routes to the editorial
          comparison hub. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <div className="rounded-xl border border-brand-border bg-brand-white p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              Planning ahead
            </div>
            <p className="text-sm text-brand-text-mid leading-relaxed mb-3">
              As dogs move into their mature and senior years, vet costs tend to climb.
              Pet insurance is least expensive while a dog is young and healthy —
              pre-existing conditions are universally excluded — so it&apos;s worth
              understanding the options early.
            </p>
            <Link
              href="https://vets.co/reviews/best-pet-insurance"
              className="inline-block bg-brand-dark text-white font-semibold text-sm px-4 py-2 rounded-md no-underline hover:bg-brand-dark/90"
            >
              Compare pet insurance →
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <h2 className="mb-4 font-display text-2xl font-semibold text-brand-text-dark">
            The formula behind the estimate
          </h2>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            How we calculate: the band is a planning figure, not an AVMA or AAHA chart. In the
            first year, one calendar year maps to 15 human years. In year two, the chart adds 9.
            From year three onward, small dogs (up to 20 lb) add 4 human years per calendar year;
            medium and large dogs add 5; giant breeds (over 90 lb) add 6.
          </p>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            This is a planning figure. Aging varies by breed, individual health, and body condition.
            The old &quot;multiply by 7&quot; shortcut ignores the faster early years and treats all sizes
            the same. A 2020 study published in Cell Systems used Labrador Retrievers for one
            epigenetic formula. This page does not claim AVMA or any other body adopted that formula,
            and this calculator does not use it.
          </p>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            For how aging intersects with health care decisions -- vaccination schedules, senior
            wellness exams, life-stage nutrition -- see the{' '}
            <Link
              href="/health/senior-dog-care"
              className="text-brand-primary underline-offset-2 hover:underline"
            >
              senior dog care
            </Link>{' '}
            guide, and for size-specific longevity context, the{' '}
            <Link
              href="/breeds"
              className="text-brand-primary underline-offset-2 hover:underline"
            >
              breed profiles
            </Link>{' '}
            include typical lifespan data for each breed.
          </p>

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
              { label: 'New Puppy Checklist', href: '/tools/new-puppy-checklist', note: 'First-week kit before a puppy comes home' },
              { label: 'Dog Grimace Scale', href: '/tools/dog-grimace-scale', note: 'Facial pain-watch for seniors and sore dogs — not a diagnosis' },
              { label: 'Dog Calorie Calculator', href: '/tools/dog-calorie-calculator', note: 'Estimate daily kcal needs by life stage' },
              { label: 'Best Senior Dog Food 2026', href: '/reviews/best-dog-food-senior', note: 'Nutrition for dogs 7+ years' },
              { label: 'Best Joint Supplements for Dogs', href: '/reviews/best-joint-supplements', note: 'Evidence-based options for senior joint health' },
              { label: 'Best Pet Insurance 2026', href: 'https://vets.co/reviews/best-pet-insurance', note: 'Senior dogs cost more to insure — enroll early' },
              { label: 'Breed Profiles — Lifespan by Breed', href: '/breeds', note: 'Typical lifespans for 50+ breeds' },
              { label: 'Dog Symptoms Guide', href: '/health/dog-symptoms-guide', note: 'When age-related symptoms need vet attention' },
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

      <CrossPortfolioCard currentSite="dog-com" contentType="tool" variant="footer" />
    </>
  )
}

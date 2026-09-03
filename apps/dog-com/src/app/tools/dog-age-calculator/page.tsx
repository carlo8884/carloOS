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
  title: 'Dog Age in Human Years Calculator | Dog.com',
  description:
    'Convert your dog\'s age to human years with the AVMA/AAHA-style banded model -- more accurate than the x7 rule. Enter age and size for an instant estimate.',
  path: '/tools/dog-age-calculator',
})

const FAQS = [
  {
    question: 'Why is the "multiply by 7" rule inaccurate?',
    answer:
      'The popular rule of multiplying a dog\'s age by 7 assumes a simple linear relationship between dog and human aging, which does not reflect how dogs actually develop. Dogs mature very rapidly in their first year -- reaching reproductive maturity in roughly 6-12 months -- and then slow down considerably in later life, especially smaller breeds. A one-year-old dog is already physiologically closer to a 15-year-old human than to a 7-year-old. The multiply-by-7 shortcut also ignores size: large and giant breeds age significantly faster than small breeds in later years, meaning a 10-year-old Great Dane and a 10-year-old Chihuahua are not at equivalent human-age stages. A 2020 epigenetic clock study published in Cell Systems (University of California, San Diego) proposed a methylation-based formula -- approximately 16 x ln(dog age) + 31 -- as a more biologically grounded model derived from Labrador Retrievers, though this applies to one breed and is not yet widely generalized across sizes. The AVMA and AAHA use life-stage frameworks (puppy, adult, mature, senior) that better reflect the non-linear nature of dog aging, and the banded model used by this calculator aligns with those frameworks.',
    answerText:
      'The multiply-by-7 rule is inaccurate because dogs age non-linearly: very fast early, then more slowly, with larger breeds aging faster in later life. AVMA/AAHA use life-stage frameworks instead. A 2020 Cell Systems epigenetic study (UCSD) proposed 16 x ln(dog age) + 31 as one alternative model from Labradors.',
  },
  {
    question: 'How does size affect how a dog ages?',
    answer:
      'Larger and giant breeds age faster after early adulthood, and typically have shorter median lifespans than small breeds. A Giant breed dog (over 90 lb) is often considered "senior" by around age 6, while a small breed (under 20 lb) may not reach that stage until age 9-10 or later. The physiological reasons are not fully understood, but one leading hypothesis is that rapid growth in large breeds may increase oxidative stress and cellular wear over time. This is why this calculator uses different per-year conversion rates by size for dogs older than two years: Small 4 human years per calendar year, Medium and Large 5, Giant 6. These are population-level estimates; individual dogs of the same size and breed can age quite differently based on genetics, body condition, nutrition, and veterinary care.',
    answerText:
      'Larger breeds age faster after early adulthood and have shorter lifespans. Giants become "senior" around age 6; small dogs around 9-10. After age 2, the calculator applies size-specific rates: Small 4 human yr/yr, Medium/Large 5, Giant 6.',
  },
  {
    question: 'What do the life stage labels (puppy, adult, senior) mean?',
    answer:
      'The life stage labels in this calculator -- Puppy, Adolescent, Adult, Mature adult, Senior -- are qualitative descriptions aligned with AVMA and AAHA-style frameworks, which divide a dog\'s life into stages to guide veterinary care decisions rather than provide a precise age mapping. "Senior" thresholds vary by source and by size: this calculator places giant breeds in the Senior stage at approximately age 6, large at 7, medium at 8, and small at 9. These are rough approximations. Your veterinarian is the right person to assess your dog\'s individual health status and stage of life, since two dogs of the same age and size can be at meaningfully different physiological stages depending on their history and condition.',
    answerText:
      'Life stage labels follow AVMA/AAHA-style frameworks. Senior thresholds: Giant ~6, Large ~7, Medium ~8, Small ~9. These are qualitative and approximate; your veterinarian assesses individual health status.',
  },
  {
    question: 'Is this an exact conversion or an estimate?',
    answer:
      'It is an estimate. The banded model this calculator uses -- 15 human years in year one, 9 in year two, then a size-based rate per year after that -- is a simplified, population-level approximation derived from published veterinary life-stage frameworks (AVMA, AAHA). It gives a reasonable rough comparison that is far more accurate than the naive multiply-by-7 rule, but it does not account for breed, individual health history, body condition, or the continuous variation in aging rates across individual dogs. Epigenetic research is moving toward more precise biological age clocks, but those are not yet standardized across breeds and sizes for clinical or consumer use. Treat the output as a useful conversational reference, not a medical data point.',
    answerText:
      'It is a population-level estimate, not a precise individual measurement. The banded model is more accurate than multiply-by-7 but does not account for breed, genetics, or individual health. Epigenetic clocks are more precise but not yet standardized across breeds.',
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
    'Converts dog age to human-year equivalent using the AVMA/AAHA-style banded model with size-specific factors. More accurate than the multiply-by-7 rule.',
  url: 'https://dog.com/tools/dog-age-calculator',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Converts dog age to human-year equivalent using an AVMA/AAHA-style banded model',
    'Size-specific rates after year two (small, medium, large, giant)',
    'Qualitative life-stage label: puppy, adolescent, adult, mature adult, senior',
    'Shoppable life-stage kit via Amazon category searches',
  ],
}

const howToSchema = buildHowToSchema({
  name: 'How to convert a dog\'s age to human years',
  description: 'Estimate a dog\'s equivalent human age using the AVMA/AAHA-style banded model based on life stage and size.',
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
      text: 'The calculator returns the human-year equivalent using the banded model (year 1 = 15 human years, year 2 = 9 more, then 4–6 per year by size) and a life-stage label aligned with AVMA/AAHA frameworks.',
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
            Convert your dog&apos;s age to a human-year equivalent using the AVMA/AAHA-style banded
            model -- not the inaccurate multiply-by-7 rule. Enter your dog&apos;s age and size to
            get an estimate and life-stage label.
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

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-8 pb-0">
        <div className="max-w-2xl">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Dog-age checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the dog-age checklist — life-stage notes and the shoppable kit
            (puppy food / teething toys, adult dental chews, senior joint support,
            ID tag, leash) — so you can come back to the right stage without
            re-running the estimate. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="dog-com"
            title="Dog-age checklist"
            subtitle="Email the dog-age checklist — life-stage notes and the shoppable kit. No spam."
            ctaText="Email my dog-age checklist"
            source="tools-dog-age-under-hero"
          />
        </div>
      </section>

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
          <AffiliateDisclosure variant="inline" siteId="dog-com" />
          <div className="mt-4 rounded-xl border border-brand-border bg-brand-white p-5">
            <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Shop by life stage
            </div>
            <p className="mb-4 text-sm leading-relaxed text-brand-text-mid">
              These Amazon category searches are husbandry items that match the
              life-stage label above — puppy food and teething toys, adult dental
              chews, senior joint-support treats, an ID tag / collar, and a leash.
              They are not a ranked product list, not invented inventory, and they
              do not diagnose a health problem or set a care plan. Ask your
              veterinarian which stage-appropriate products fit your dog. Dog.com
              earns a commission on qualifying purchases at no extra cost to you.
              Empty Chewy buttons stay hidden.
            </p>
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
            <AffiliateDisclosure variant="inline" siteId="dog-com" className="mb-3 text-2xs" />
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
            This calculator uses a banded model consistent with AVMA and AAHA-style life-stage
            frameworks, which recognize that dogs age non-linearly. In the first year, a dog
            matures very rapidly -- reaching adolescence and often reproductive maturity --
            so one calendar year maps to approximately 15 human years. In year two, the rate
            slows to roughly 9 additional human years. From year three onward, the rate depends
            on size: small dogs (up to 20 lb) accumulate about 4 human years per calendar year;
            medium and large dogs accumulate 5; giant breeds (over 90 lb) accumulate 6.
          </p>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            This is an approximation. Aging varies by breed, individual health, and body condition.
            The old &quot;multiply by 7&quot; rule is widely known to be inaccurate -- it ignores the rapid
            early development phase and treats all sizes identically. The model used here is a
            practical improvement, though researchers continue to develop more precise biological
            age clocks using epigenetic markers (including a 2020 study published in Cell Systems
            using Labrador Retrievers as a model, cited by AVMA and other veterinary sources as
            a reference point for advancing the science).
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

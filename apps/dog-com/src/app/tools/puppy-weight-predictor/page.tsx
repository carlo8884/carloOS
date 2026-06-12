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
import Predictor from './Predictor'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Puppy Weight Predictor — How Big Will My Puppy Get? | Dog.com',
  description:
    'Estimate your puppy\'s adult weight from its current age and weight using the standard growth-percentage method and published size-class growth curves. Free.',
  path: '/tools/puppy-weight-predictor',
})

const SOURCES = [
  { label: 'American Kennel Club: Puppy Growth and Development Stages', url: 'https://www.akc.org/expert-advice/nutrition/puppy-weight-and-growth-chart/', publisher: 'AKC' },
  { label: 'Merck Veterinary Manual: Growth in Dogs — Nutritional Requirements', url: 'https://www.merckvetmanual.com/management-and-nutrition/nutrition-small-animals/nutrition-in-disease-management-in-small-animals', publisher: 'Merck Vet Manual' },
  { label: 'WSAVA Global Nutrition Committee: Body Condition Score Charts', url: 'https://wsava.org/global-guidelines/global-nutrition-guidelines/', publisher: 'WSAVA' },
  { label: 'VCA Animal Hospitals: Puppy Nutrition and Growth', url: 'https://vcahospitals.com/know-your-pet/feeding-growing-puppies', publisher: 'VCA' },
]

const FAQS = [
  {
    question: 'How big will my puppy get?',
    answer:
      'The most reliable at-home estimate uses the growth-percentage method: divide your puppy\'s current weight by the share of adult weight a dog of that size class typically reaches at its current age. For example, small and medium breeds reach roughly half of their adult weight by about 16 weeks, so a 10-week-to-16-week weight can be doubled for a rough adult figure. Large and giant breeds grow more slowly and reach that halfway mark later, so the same shortcut does not apply to them. Because breed, sex, and individual genetics all shift the curve, the honest output is a range, not a single number. A growth chart at your veterinarian, or a breed/DNA test for a mixed-breed puppy, narrows it further.',
    answerText:
      'Divide current weight by the fraction of adult weight reached at the current age for the puppy\'s size class. Small/medium breeds reach ~50% of adult weight by ~16 weeks; large/giant breeds mature slower. The result is a range, not an exact number.',
  },
  {
    question: 'Is the "double the weight at 16 weeks" rule accurate?',
    answer:
      'It is a reasonable shortcut for small and medium breeds, where weight at 14–16 weeks is roughly half of adult weight, so doubling it gives a usable estimate. It is less accurate for toy breeds (which can be slightly past halfway at 16 weeks) and clearly underestimates large and giant breeds, which reach only about 40 percent or less of adult weight by 16 weeks and keep growing until 18–24 months. This tool uses size-class-specific growth fractions instead of one fixed multiplier, which is why it returns different estimates for the same weight depending on the expected adult size.',
    answerText:
      'The doubling rule works reasonably for small and medium breeds but underestimates large and giant breeds, which reach only ~40% or less of adult weight by 16 weeks. Use size-class-specific fractions instead.',
  },
  {
    question: 'At what age is a dog fully grown?',
    answer:
      'It depends heavily on adult size. Toy and small breeds are usually full-grown by about 10–12 months. Medium breeds finish around 12 months. Large breeds keep filling out to roughly 15–18 months, and giant breeds may not reach their adult weight until 18–24 months. Height is generally reached before final weight — a large-breed dog can look its adult height by a year old while still adding muscle and body mass for several more months. Predictions made very early (before about 8 weeks) are the least reliable because so much growth is still ahead.',
    answerText:
      'Toy/small breeds: ~10–12 months. Medium: ~12 months. Large: ~15–18 months. Giant: ~18–24 months. Height is reached before final weight.',
  },
  {
    question: 'My puppy is a mixed breed — how do I pick a size class?',
    answer:
      'For a mixed-breed puppy, estimate the expected adult size from the parents if you know them — puppies usually finish somewhere in the range bracketed by the two parents\' sizes. If the parents are unknown, paw and frame size give a rough hint, but a breed/DNA test is the most reliable way to learn likely adult size early. When in doubt, run the estimate for two adjacent size classes and treat the combined span as your planning range. The result is always an estimate; your veterinarian tracking weight on a growth chart over several visits is the best real-world check.',
    answerText:
      'Estimate from the parents\' sizes, or use a breed/DNA test. If unsure, run two adjacent size classes and treat the combined span as the range. A vet growth chart over several visits is the best check.',
  },
]

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Dog.com', url: 'https://dog.com/' },
    { name: 'Tools', url: 'https://dog.com/tools' },
    { name: 'Puppy Weight Predictor', url: 'https://dog.com/tools/puppy-weight-predictor' },
  ],
})

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Puppy Weight Predictor',
  description:
    'Free puppy weight predictor that estimates a dog\'s adult weight range from current age and weight using the growth-percentage method and published size-class growth curves.',
  url: 'https://dog.com/tools/puppy-weight-predictor',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

const articleSchema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Puppy Weight Predictor — How Big Will My Puppy Get?',
  description:
    'How to estimate a puppy\'s adult weight using the growth-percentage method and published size-class growth curves, with a worked example.',
  url: 'https://dog.com/tools/puppy-weight-predictor',
  imageUrl: 'https://dog.com/og/tools.png',
  authorName: 'Dog.com Editorial',
  publishedAt: '2026-06-11',
  modifiedAt: '2026-06-11',
})

const howToSchema = buildHowToSchema({
  name: 'How to predict a puppy\'s adult weight',
  description: 'Estimate adult weight from current age and weight using the growth-percentage method and published size-class growth curves.',
  url: 'https://dog.com/tools/puppy-weight-predictor',
  steps: [
    {
      name: 'Select the puppy\'s expected adult size class',
      text: 'Choose the size class that matches the expected adult size: Toy (under ~12 lb), Small (~12–25 lb), Medium (~25–50 lb), Large (~50–100 lb), or Giant (over ~100 lb). For mixed breeds, use the parents\' sizes as a guide or run two adjacent size classes.',
    },
    {
      name: 'Enter the puppy\'s current age',
      text: 'Enter the puppy\'s current age in weeks or months. Predictions made before about 8 weeks are the least reliable.',
    },
    {
      name: 'Enter the puppy\'s current weight',
      text: 'Enter the puppy\'s current body weight in pounds or kilograms.',
    },
    {
      name: 'Read the adult weight estimate range',
      text: 'The calculator divides current weight by the typical growth fraction at the current age for the selected size class, then widens the result into a planning range. For example, a large-breed puppy at 20 lb at 14 weeks (typically 35% of adult weight) predicts a range of roughly 49–66 lb.',
    },
  ],
})

const schema = combineSchemas(breadcrumbSchema, appSchema, articleSchema, howToSchema)

export default function PuppyWeightPredictorPage() {
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
            Puppy Weight Predictor
          </h1>
          <p className="text-base text-white/60 leading-relaxed max-w-2xl">
            How big will your puppy get? Enter your puppy&apos;s size class, current age, and current
            weight to estimate its adult weight as a range — using the standard growth-percentage method
            and published size-class growth curves, not a single fixed multiplier.
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
        <span className="text-brand-text-mid font-medium">Puppy Weight Predictor</span>
      </nav>

      {/* GEO: extractable answer + worked example, ABOVE the tool */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-section pb-2">
        <div className="max-w-2xl">
          <div className="rounded-xl border border-brand-border bg-brand-white p-5 sm:p-6">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              The short answer
            </div>
            <p className="text-base text-brand-text-mid leading-relaxed mb-3">
              To estimate how big a puppy will get, divide its current weight by the share of adult
              weight a dog of that size class typically reaches at its current age:
            </p>
            <p className="text-base font-semibold text-brand-dark leading-relaxed mb-3">
              estimated adult weight ≈ current weight ÷ (% of adult weight reached at current age)
            </p>
            <p className="text-base text-brand-text-mid leading-relaxed mb-3">
              <span className="font-semibold text-brand-dark">Worked example.</span> A large-breed
              puppy (e.g. a Labrador) weighing 20 lb at 14 weeks has typically reached about 35% of its
              adult weight. 20 ÷ 0.35 ≈ 57 lb, so a planning range of roughly{' '}
              <span className="font-semibold text-brand-dark">49–66 lb</span> is reasonable. A
              small-breed puppy weighing the same 20 lb at the same age would already be near 50% of
              adult weight, predicting a much lighter adult — which is why size class matters.
            </p>
            <p className="text-sm text-brand-text-light leading-relaxed m-0">
              The output is a <span className="font-semibold">range</span>, never a single guaranteed
              number: breed, sex, nutrition, and individual genetics all shift the curve.
            </p>
          </div>
        </div>
      </section>

      {/* Tool */}
      <section className="bg-brand-surface px-container-sm sm:px-container py-8 sm:py-10">
        <div className="max-w-4xl">
          <Predictor />
        </div>
      </section>

      {/* Growth-fraction reference table — citation magnet */}
      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-3xl">
          <h2 className="mb-4 font-display text-2xl font-semibold text-brand-text-dark">
            Approximate % of adult weight reached by age
          </h2>
          <p className="mb-4 text-sm text-brand-text-mid leading-relaxed">
            These are typical growth fractions by size class, interpolated from published AKC and
            veterinary growth-curve references. Smaller breeds mature faster; larger breeds keep growing
            for many more months. Use the row that matches your puppy&apos;s expected adult size.
          </p>
          <div className="overflow-x-auto rounded-lg border border-brand-border">
            <table className="w-full text-sm border-collapse bg-brand-white">
              <thead>
                <tr className="bg-brand-surface text-left">
                  <th className="p-3 font-semibold text-brand-dark border-b border-brand-border">Size class</th>
                  <th className="p-3 font-semibold text-brand-dark border-b border-brand-border">8 wk</th>
                  <th className="p-3 font-semibold text-brand-dark border-b border-brand-border">12 wk</th>
                  <th className="p-3 font-semibold text-brand-dark border-b border-brand-border">16 wk</th>
                  <th className="p-3 font-semibold text-brand-dark border-b border-brand-border">26 wk</th>
                  <th className="p-3 font-semibold text-brand-dark border-b border-brand-border">Full-grown</th>
                </tr>
              </thead>
              <tbody className="text-brand-text-mid">
                {[
                  ['Toy (under ~12 lb)', '31%', '45%', '58%', '85%', '~10 mo'],
                  ['Small (~12–25 lb)', '28%', '42%', '53%', '78%', '~11–12 mo'],
                  ['Medium (~25–50 lb)', '24%', '37%', '48%', '72%', '~12 mo'],
                  ['Large (~50–100 lb)', '19%', '30%', '40%', '62%', '~15–18 mo'],
                  ['Giant (over ~100 lb)', '15%', '24%', '33%', '53%', '~18–24 mo'],
                ].map((row) => (
                  <tr key={row[0]} className="border-b border-brand-border last:border-0">
                    <td className="p-3 font-medium text-brand-dark">{row[0]}</td>
                    <td className="p-3">{row[1]}</td>
                    <td className="p-3">{row[2]}</td>
                    <td className="p-3">{row[3]}</td>
                    <td className="p-3">{row[4]}</td>
                    <td className="p-3">{row[5]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-2xs text-brand-text-light">
            Figures are approximate and vary by breed and individual. They are planning estimates, not
            breed standards.
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
              Got an adult-weight estimate? A growing puppy&apos;s calorie needs change fast. Use the{' '}
              <Link href="/tools/dog-calorie-calculator" className="text-brand-primary underline-offset-2 hover:underline">
                dog calorie calculator
              </Link>{' '}
              to size daily intake, read the{' '}
              <Link href="/nutrition/puppy-nutrition" className="text-brand-primary underline-offset-2 hover:underline">
                puppy nutrition guide
              </Link>
              , then compare large- and small-breed-appropriate puppy formulas.
            </p>
            <AffiliateDisclosure variant="inline" siteId="dog-com" className="mb-3 text-2xs" />
            <Link
              href="/reviews/best-dog-food-for-puppies"
              className="inline-block bg-brand-primary text-white font-semibold text-sm px-4 py-2 rounded-md no-underline hover:bg-brand-primary-dark"
            >
              Compare the best puppy foods →
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
            The predictor uses the growth-percentage method, the same logic veterinary and AKC growth
            guidance describe: a puppy reaches a predictable share of its adult weight at a given age,
            and that share depends mostly on adult size. The tool divides current weight by the typical
            growth fraction at the puppy&apos;s current age for the selected size class, then widens the
            result into a range to reflect breed and individual variation. It deliberately avoids the
            single &quot;multiply by two&quot; shortcut, which only fits small and medium breeds and
            badly underestimates large and giant dogs.
          </p>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            For breed-specific adult-weight context, browse the{' '}
            <Link href="/breeds" className="text-brand-primary underline-offset-2 hover:underline">
              breed profiles
            </Link>
            , which list typical adult size ranges. For feeding a growing puppy correctly, see the{' '}
            <Link href="/nutrition/puppy-nutrition" className="text-brand-primary underline-offset-2 hover:underline">
              puppy nutrition guide
            </Link>{' '}
            and the{' '}
            <Link href="/puppy-schedule" className="text-brand-primary underline-offset-2 hover:underline">
              puppy schedule
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

      {/* Related tools + reviews */}
      <section className="bg-brand-white border-t border-brand-border px-container-sm sm:px-container py-10">
        <div className="max-w-2xl">
          <h2 className="font-display text-lg font-bold text-brand-dark mb-4">Related Tools &amp; Guides</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'Dog Calorie Calculator', href: '/tools/dog-calorie-calculator', note: 'Daily calories for your growing puppy' },
              { label: 'Dog Age in Human Years', href: '/tools/dog-age-calculator', note: 'Life-stage by size class' },
              { label: 'Puppy Nutrition Guide', href: '/nutrition/puppy-nutrition', note: 'How and what to feed a puppy' },
              { label: 'Best Puppy Food 2026', href: '/reviews/best-dog-food-for-puppies', note: 'Large- and small-breed formulas' },
              { label: 'Breed Profiles', href: '/breeds', note: 'Typical adult size by breed' },
              { label: 'Puppy Schedule', href: '/puppy-schedule', note: 'Week-by-week first-year plan' },
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
            title="Dog.com puppy &amp; tool updates"
            subtitle="Research-based puppy care guidance and new tool announcements. No spam."
            source="tools-puppy-weight-predictor"
          />
        </div>
      </section>

      <CrossPortfolioCard currentSite="dog-com" contentType="tool" variant="footer" />
    </>
  )
}

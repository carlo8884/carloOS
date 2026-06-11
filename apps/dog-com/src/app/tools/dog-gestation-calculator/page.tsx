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
} from '@carloOS/ui'
import Calculator from './Calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Dog Pregnancy Calculator & Whelping Calendar | Dog.com',
  description:
    'How long are dogs pregnant? Enter the breeding date to get your dog\'s estimated whelping (due) date — the 63-day average plus the normal 58–68 day window. Free.',
  path: '/tools/dog-gestation-calculator',
})

const SOURCES = [
  { label: 'American Kennel Club: Dog Pregnancy — Signs, Care, and Preparation', url: 'https://www.akc.org/expert-advice/dog-breeding/dog-pregnancy/', publisher: 'AKC' },
  { label: 'American Animal Hospital Association: Reproduction and Whelping Guidance', url: 'https://www.aaha.org/your-pet/pet-owner-education/', publisher: 'AAHA' },
  { label: 'Merck Veterinary Manual: Management of Reproduction in Dogs', url: 'https://www.merckvetmanual.com/management-and-nutrition/management-of-reproduction-dogs', publisher: 'Merck Vet Manual' },
  { label: 'WSAVA Global Nutrition Committee: Feeding the Pregnant and Lactating Bitch', url: 'https://wsava.org/global-guidelines/global-nutrition-guidelines/', publisher: 'WSAVA' },
]

const FAQS = [
  {
    question: 'How long are dogs pregnant?',
    answer:
      'Canine pregnancy averages about 63 days — roughly nine weeks — measured from the day of breeding, with a normal range of about 58 to 68 days. The reason the range is wide is that the breeding date is not always the conception date: sperm can survive several days inside the female reproductive tract, and the egg matures over a window, so fertilization can happen a few days after a given mating. When ovulation is timed precisely by a veterinarian using progesterone testing, the estimate tightens considerably and gestation from the ovulation date is very close to 63 days. This calculator adds 63 days to the breeding date for the estimated due date and shows the 58–68 day window around it.',
    answerText:
      'About 63 days (roughly nine weeks) from breeding, with a normal range of 58–68 days. Timing ovulation by progesterone testing tightens the estimate to very close to 63 days from ovulation.',
  },
  {
    question: 'How do I calculate my dog\'s due date?',
    answer:
      'Add 63 days to the breeding date for the estimated whelping date, then treat the span from 58 to 68 days after breeding as the normal window in which labor is likely. For example, a dog bred on May 1 is due around July 3 (May 1 + 63 days), with a normal window of roughly June 28 to July 8. If your veterinarian timed ovulation by progesterone, count 63 days from the ovulation date instead, which is the most accurate version of this estimate.',
    answerText:
      'Add 63 days to the breeding date for the estimated due date, and use 58–68 days after breeding as the normal window. A dog bred May 1 is due around July 3.',
  },
  {
    question: 'When can a vet confirm pregnancy and count the puppies?',
    answer:
      'Your veterinarian can typically confirm pregnancy by ultrasound from about days 25 to 30 after breeding, which can also check for fetal heartbeats. To estimate how many puppies to expect, your veterinarian can take an X-ray from about day 45 onward, once the puppies\' skeletons have calcified enough to be visible and countable. Knowing the puppy count ahead of time helps you recognize when whelping is complete. These are veterinary procedures — this tool only shows the typical date windows so you can plan the appointments.',
    answerText:
      'A vet can confirm pregnancy by ultrasound at ~days 25–30 and estimate the puppy count by X-ray from ~day 45+. This tool shows the typical date windows so you can plan the appointments.',
  },
  {
    question: 'What is the temperature drop before labor?',
    answer:
      'In the roughly 12 to 24 hours before labor begins, a pregnant dog\'s rectal temperature often drops, frequently to around 98–99°F (below the normal ~100–102.5°F). Many breeders take the dam\'s temperature twice daily in the final week to anticipate whelping. This is a general owner observation rather than a precise predictor — temperature behavior varies between individuals — so use it as one signal alongside the due-date window, and contact your veterinarian if the due window passes with no labor or if anything seems wrong.',
    answerText:
      'A dog\'s rectal temperature often drops (toward ~98–99°F, below the normal ~100–102.5°F) about 12–24 hours before labor. It is a general owner sign, not a precise predictor.',
  },
]

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Dog.com', url: 'https://dog.com/' },
    { name: 'Tools', url: 'https://dog.com/tools' },
    { name: 'Dog Pregnancy Calculator', url: 'https://dog.com/tools/dog-gestation-calculator' },
  ],
})

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Dog Pregnancy Calculator & Whelping Calendar',
  description:
    'Free dog pregnancy calculator that estimates a whelping (due) date from the breeding date using the 63-day canine gestation average and the normal 58–68 day window.',
  url: 'https://dog.com/tools/dog-gestation-calculator',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

const howToSchema = buildHowToSchema({
  name: 'How to calculate a dog\'s due date',
  description:
    'Estimate a dog\'s whelping (due) date from the breeding date using the canine gestation average and normal window.',
  url: 'https://dog.com/tools/dog-gestation-calculator',
  steps: [
    {
      name: 'Note the breeding date',
      text: 'Record the date your dog was bred. If your veterinarian timed ovulation by progesterone testing, use the ovulation date for the tightest estimate.',
    },
    {
      name: 'Add 63 days',
      text: 'Add 63 days to the breeding date — the canine gestation average — for the estimated whelping (due) date. Example: bred May 1, due around July 3.',
    },
    {
      name: 'Mark the 58–68 day window',
      text: 'Treat the span from 58 to 68 days after breeding as the normal window in which labor is likely, since breeding date can differ from true conception.',
    },
    {
      name: 'Plan veterinary checkpoints',
      text: 'Plan an ultrasound at about days 25–30 to confirm pregnancy, and an X-ray from about day 45+ so your veterinarian can estimate the puppy count.',
    },
  ],
})

const articleSchema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Dog Pregnancy Calculator & Whelping Calendar',
  description:
    'How to estimate a dog\'s whelping date from the breeding date using the 63-day canine gestation average and the normal 58–68 day window, with a worked example.',
  url: 'https://dog.com/tools/dog-gestation-calculator',
  imageUrl: 'https://dog.com/og/tools.png',
  authorName: 'Dog.com Editorial',
  publishedAt: '2026-06-11',
  modifiedAt: '2026-06-11',
})

const schema = combineSchemas(breadcrumbSchema, appSchema, howToSchema, articleSchema)

export default function DogGestationCalculatorPage() {
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
            Dog Pregnancy &amp; Whelping Calendar
          </h1>
          <p className="text-base text-white/60 leading-relaxed max-w-2xl">
            How long are dogs pregnant? Enter the breeding date to get the estimated whelping (due)
            date — the 63-day canine average plus the normal 58–68 day window — with the typical
            veterinary checkpoints mapped onto your own calendar.
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
        <span className="text-brand-text-mid font-medium">Dog Pregnancy Calculator</span>
      </nav>

      {/* GEO: extractable answer + worked example, ABOVE the tool */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-section pb-2">
        <div className="max-w-2xl">
          <div className="rounded-xl border border-brand-border bg-brand-white p-5 sm:p-6">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              The short answer
            </div>
            <p className="text-base text-brand-text-mid leading-relaxed mb-3">
              Dogs are pregnant for about <span className="font-semibold text-brand-dark">63 days</span>{' '}
              (roughly nine weeks) from breeding, with a normal range of 58–68 days. To find the due
              date:
            </p>
            <p className="text-base font-semibold text-brand-dark leading-relaxed mb-3">
              estimated whelping date = breeding date + 63 days
            </p>
            <p className="text-base text-brand-text-mid leading-relaxed mb-3">
              <span className="font-semibold text-brand-dark">Worked example.</span> A dog bred on
              May 1 is due around <span className="font-semibold text-brand-dark">July 3</span> (May 1
              + 63 days), with a normal window of roughly June 28 to July 8. A veterinarian can
              confirm pregnancy by ultrasound at about days 25–30 and estimate the puppy count by
              X-ray from about day 45.
            </p>
            <p className="text-sm text-brand-text-light leading-relaxed m-0">
              The due date is an <span className="font-semibold">estimate</span>: breeding date and
              true conception can differ by several days. Timing ovulation by progesterone testing
              tightens it.
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

      {/* Gestation reference table — citation magnet */}
      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-3xl">
          <h2 className="mb-4 font-display text-2xl font-semibold text-brand-text-dark">
            Canine pregnancy timeline at a glance
          </h2>
          <p className="mb-4 text-sm text-brand-text-mid leading-relaxed">
            Days are counted from breeding. These are typical husbandry checkpoints drawn from AKC
            and veterinary reproduction guidance; the ultrasound and X-ray steps are veterinary
            procedures your veterinarian performs.
          </p>
          <div className="overflow-x-auto rounded-lg border border-brand-border">
            <table className="w-full text-sm border-collapse bg-brand-white">
              <thead>
                <tr className="bg-brand-surface text-left">
                  <th className="p-3 font-semibold text-brand-dark border-b border-brand-border">Stage</th>
                  <th className="p-3 font-semibold text-brand-dark border-b border-brand-border">Days after breeding</th>
                  <th className="p-3 font-semibold text-brand-dark border-b border-brand-border">What happens</th>
                </tr>
              </thead>
              <tbody className="text-brand-text-mid">
                {[
                  ['Implantation', '~16–18', 'Embryos implant in the uterine wall'],
                  ['Ultrasound', '~25–30', 'Vet can confirm pregnancy and fetal heartbeats'],
                  ['Appetite rises', '~35–45', 'Dam gains weight; breeders often shift to puppy/higher-calorie food'],
                  ['X-ray (puppy count)', '~45+', 'Skeletons calcify; vet can estimate litter size'],
                  ['Temperature drop', '~62–63', 'Rectal temp often falls below ~100°F ~12–24 h before labor'],
                  ['Whelping (due)', '58–68 (avg 63)', 'Labor and delivery in the normal window'],
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
            Figures are approximate and vary by individual dog. They are planning estimates, not
            medical instructions.
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
              Got a due date? Once the puppies arrive, the{' '}
              <Link href="/tools/puppy-weight-predictor" className="text-brand-primary underline-offset-2 hover:underline">
                puppy weight predictor
              </Link>{' '}
              estimates how big they will get, and the{' '}
              <Link href="/nutrition/puppy-nutrition" className="text-brand-primary underline-offset-2 hover:underline">
                puppy nutrition guide
              </Link>{' '}
              covers feeding a litter and the dam. Compare appropriate puppy formulas for the weeks
              ahead.
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
            The calendar uses the canine gestation average documented in AKC and veterinary
            reproduction references: about 63 days from breeding, with a normal range of 58–68 days.
            It adds 63 days to your breeding date for the estimated whelping date and shows the
            58–68 day span as the normal window. The reason the window is wide is biological — sperm
            can survive several days in the female tract and the egg matures over a window, so the
            breeding date and the true conception date can differ. When a veterinarian times
            ovulation by progesterone testing, gestation from the ovulation date is very close to 63
            days and the estimate tightens.
          </p>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            This is breeding and husbandry information, not a diagnosis. Pregnancy confirmation, the
            puppy count, and any concern about the dam or labor are questions for your veterinarian,
            who can confirm by ultrasound (~days 25–30) and X-ray (~day 45+). For feeding the dam and
            the litter, see the{' '}
            <Link href="/nutrition/puppy-nutrition" className="text-brand-primary underline-offset-2 hover:underline">
              puppy nutrition guide
            </Link>
            , and for the first-year plan, the{' '}
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

      {/* Related tools + guides */}
      <section className="bg-brand-white border-t border-brand-border px-container-sm sm:px-container py-10">
        <div className="max-w-2xl">
          <h2 className="font-display text-lg font-bold text-brand-dark mb-4">Related Tools &amp; Guides</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'Puppy Weight Predictor', href: '/tools/puppy-weight-predictor', note: 'How big will the puppies get?' },
              { label: 'Dog Calorie Calculator', href: '/tools/dog-calorie-calculator', note: 'Daily calories for the dam and pups' },
              { label: 'Puppy Nutrition Guide', href: '/nutrition/puppy-nutrition', note: 'Feeding the dam and a litter' },
              { label: 'Best Puppy Food 2026', href: '/reviews/best-dog-food-for-puppies', note: 'Large- and small-breed formulas' },
              { label: 'Puppy Schedule', href: '/puppy-schedule', note: 'Week-by-week first-year plan' },
              { label: 'Breed Profiles', href: '/breeds', note: 'Typical adult size by breed' },
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
            title="Dog.com breeding &amp; puppy updates"
            subtitle="Research-based breeding and puppy care guidance and new tool announcements. No spam."
            source="tools-dog-gestation-calculator"
          />
        </div>
      </section>
    </>
  )
}

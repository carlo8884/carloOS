import { HopDisclosure } from '../../../components/HopDisclosure'
import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildHowToSchema,
  combineSchemas,
  SchemaScript,
  FAQAccordion,
  ArticleSourcesList,
  CrossPortfolioCard,
  ShopCtas,
  JourneyNext,
} from '@carloOS/ui'
import Calculator from './Calculator'
import WhelpingKit from './WhelpingKit'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Dog Pregnancy Calculator & Whelping Calendar | Dog.com',
  description:
    'Merck window: 58–72 days from an untimed breeding, or 62–64 days from ovulation. Not a diagnosis.',
  path: '/tools/dog-gestation-calculator',
})

const SOURCES = [
  { label: 'American Kennel Club: Dog Pregnancy — Signs, Care, and Preparation', url: 'https://www.akc.org/expert-advice/dog-breeding/dog-pregnancy-care-prep/', publisher: 'AKC' },
  { label: 'American Animal Hospital Association: Reproduction and Whelping Guidance', url: 'https://www.aaha.org/for-pet-parents/find-an-aaha-accredited-animal-hospital-near-me/', publisher: 'AAHA' },
  { label: 'Merck Veterinary Manual: The Reproductive System in Animals (gestation table, 58–72 days from untimed breeding; 62–64 days from ovulation)', url: 'https://www.merckvetmanual.com/reproductive-system/reproductive-system-introduction/the-reproductive-system-in-animals', publisher: 'Merck Vet Manual' },
  { label: 'Merck Veterinary Manual: Whelping and Queening in Bitches and Queens', url: 'https://www.merckvetmanual.com/management-and-nutrition/management-of-reproduction-dogs-and-cats/whelping-and-queening-in-bitches-and-queens', publisher: 'Merck Vet Manual' },
  { label: 'Merck Veterinary Manual: Management of Reproduction in Dogs', url: 'https://www.merckvetmanual.com/dog-owners/reproductive-disorders-of-dogs/management-of-reproduction-in-dogs', publisher: 'Merck Vet Manual' },
  { label: 'WSAVA Global Nutrition Committee: Feeding the Pregnant and Lactating Bitch', url: 'https://wsava.org/global-guidelines/global-nutrition-guidelines/', publisher: 'WSAVA' },
]

const FAQS = [
  {
    question: 'How long are dogs pregnant?',
    answer:
      'Merck’s reproductive-system table gives 58–72 days from breeding at an unknown stage of estrus, and 62–64 days from the day of ovulation. Day 63 is the midpoint of that ovulation window only. It is not an average counted from an untimed breeding date.',
    answerText:
      'Merck: 58–72 days from an untimed breeding, and 62–64 days from ovulation. Day 63 is the ovulation midpoint, not a breeding-date average.',
  },
  {
    question: 'How do I calculate my dog\'s due date?',
    answer:
      'If the date is a breeding at an unknown stage of estrus, use 58 to 72 days. A dog bred on May 1 has a Merck window of roughly June 28 to July 12. If a veterinarian timed ovulation, use 62 to 64 days from that date. Day 63 (July 3 from a May 1 ovulation) is the midpoint of 62–64, not the average from an untimed breeding.',
    answerText:
      'Untimed breeding: 58–72 days (May 1 lands about June 28–July 12). Timed ovulation: 62–64 days. Day 63 is the ovulation midpoint only.',
  },
  {
    question: 'When can a vet confirm pregnancy and count the puppies?',
    answer:
      'The Merck owner page says ultrasound is reliable by about days 25 to 35, radiographs are useful after about day 45, and the litter count is most reliable after about day 55. These are veterinary procedures. This tool only shows those date windows so you can plan the appointments.',
    answerText:
      'Merck owner page: ultrasound by about days 25–35, radiographs after about day 45, litter count most reliable after about day 55.',
  },
  {
    question: 'What is the temperature drop before labor?',
    answer:
      'Merck’s whelping page says a drop in rectal temperature usually precedes delivery by about 8 to 24 hours. This page does not print a degree target, because that sentence does not state one. Contact your veterinarian if the window passes with no labor or if anything seems wrong.',
    answerText:
      'Merck: a rectal-temperature drop usually precedes delivery by about 8 to 24 hours. No degree target is stated here.',
  },
  {
    question: 'What should be in a dog whelping kit?',
    answer:
      'A typical owner kit is a whelping box with a pig rail, absorbent whelping pads, a digital puppy scale, a digital rectal thermometer, a clean bulb syringe, and a stack of clean towels. Set the box up by about day 45 so the dam can acclimate. This is a husbandry packing list, not a veterinary supply order — ask your veterinarian what else your dam needs, especially for a first litter or a breed that often needs a cesarean.',
    answerText:
      'A typical kit is a whelping box with a pig rail, pads, a digital puppy scale, a rectal thermometer, a bulb syringe, and clean towels. Set the box up by about day 45. Ask your veterinarian what else your dam needs.',
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
    'Merck windows: 58–72 days from an untimed breeding, or 62–64 days from ovulation. Day 63 is the ovulation midpoint only.',
  url: 'https://dog.com/tools/dog-gestation-calculator',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

const howToSchema = buildHowToSchema({
  name: 'How to calculate a dog\'s due date',
  description:
    'Read Merck’s windows: 58–72 days from an untimed breeding, or 62–64 days from ovulation.',
  url: 'https://dog.com/tools/dog-gestation-calculator',
  steps: [
    {
      name: 'Note the breeding date',
      text: 'Record the date your dog was bred. If your veterinarian timed ovulation by progesterone testing, use the ovulation date for the tightest estimate.',
    },
    {
      name: 'Use 58–72 days for an untimed breeding',
      text: 'Merck’s table gives 58–72 days from breeding at an unknown stage of estrus. A May 1 breeding window runs about June 28 to July 12. Day 63 is not that average.',
    },
    {
      name: 'Use 62–64 days for a timed ovulation',
      text: 'From the day of ovulation, Merck’s window is 62–64 days. Day 63 is the midpoint of that window only.',
    },
    {
      name: 'Plan veterinary checkpoints',
      text: 'The Merck owner page says ultrasound is reliable by about days 25–35, radiographs are useful after about day 45, and litter count is most reliable after about day 55.',
    },
    {
      name: 'Pack the whelping kit by week 7',
      text: 'Set up a whelping box by about day 45 and gather pads, a puppy scale, a digital thermometer, a bulb syringe, and clean towels. Confirm any extras with your veterinarian.',
    },
  ],
})

const articleSchema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Dog Pregnancy & Whelping Calendar',
  description:
    'How to read Merck’s canine windows: 58–72 days from an untimed breeding, or 62–64 days from ovulation.',
  url: 'https://dog.com/tools/dog-gestation-calculator',
  imageUrl: 'https://dog.com/og/tools.png',
  authorName: 'Dog.com Editorial',
  publishedAt: '2026-06-11',
  modifiedAt: '2026-09-03',

  citation: SOURCES,
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
            How long are dogs pregnant? Merck’s table is 58–72 days from an untimed breeding, or
            62–64 days from ovulation. Day 63 is the ovulation midpoint only. Then pack the
            whelping-kit checklist before week 7.
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
              How we calculate: Merck’s reproductive-system table gives{' '}
              <span className="font-semibold text-brand-dark">58–72 days</span> from breeding at an
              unknown stage of estrus, and <span className="font-semibold text-brand-dark">62–64 days</span>{' '}
              from ovulation. Day 63 is the ovulation midpoint only.
            </p>
            <p className="text-base font-semibold text-brand-dark leading-relaxed mb-3">
              untimed breeding window = breeding date + 58 to 72 days
            </p>
            <p className="text-base text-brand-text-mid leading-relaxed mb-3">
              <span className="font-semibold text-brand-dark">Worked example.</span> A dog bred on
              May 1, stage of estrus unknown, has a window of roughly June 28 to July 12. If that
              May 1 date was a timed ovulation, the window is July 2 to July 4, and July 3 is day 63.
              Ultrasound is reliable by about days 25–35. Radiographs are useful after about day 45;
              litter count is most reliable after about day 55.
            </p>
            <p className="text-sm text-brand-text-light leading-relaxed m-0">
              Source: Merck Veterinary Manual reproductive-system table and the whelping page. This
              is a planning calendar, not a diagnosis.
            </p>
          </div>
        </div>
      </section>

      {/* Tool */}
      <section className="bg-brand-surface px-container-sm sm:px-container py-8 sm:py-10">
        <div className="max-w-4xl">
          <Calculator />
        </div>
        <div className="max-w-2xl mt-8">
          <JourneyNext
            siteId="dog-com"
            nextHref="/tools/new-puppy-checklist"
            nextLabel="Pack the new-puppy list once the due date is set"
            nextBlurb="Merck’s window is 58–72 days from an untimed breeding, or 62–64 days from ovulation. After that, the new-puppy checklist is the crate, food, and first-week order. The hop below is the same digital puppy-scale search already on this page."
            resourceHref="/go/amazon-brand/digital+puppy+scale?s=tools-dog-gestation-calculator"
            resourceLabel="Browse digital puppy scales on Amazon →"
          />
        </div>
      </section>

      {/* Interactive whelping kit + Amazon hops. ShopCtas hides empty Chewy. */}
      <section id="whelping-kit" className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-4xl">
          <WhelpingKit />
        </div>
        <div className="max-w-2xl mt-6">
          <HopDisclosure siteId="dog-com" href={["/go/amazon-brand/dog+whelping+box?s=tools-dog-gestation-calculator", "/go/amazon-brand/digital+puppy+scale?s=tools-dog-gestation-calculator", "/go/amazon-brand/digital+pet+thermometer?s=tools-dog-gestation-calculator"]} />
          <div className="mt-4 rounded-xl border border-brand-border bg-brand-white p-5">
            <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Shop the kit
            </div>
            <p className="mb-4 text-sm leading-relaxed text-brand-text-mid">Amazon search links go to general supplies. They are not a ranked product list and they do not replace veterinary care.</p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/dog+whelping+box?s=tools-dog-gestation-calculator"
                amazonLabel="Browse whelping boxes on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/digital+puppy+scale?s=tools-dog-gestation-calculator"
                amazonLabel="Browse digital puppy scales on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/digital+pet+thermometer?s=tools-dog-gestation-calculator"
                amazonLabel="Browse digital pet thermometers on Amazon →"
              />
          </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-brand-text-mid">
            Once the puppies arrive, the{' '}
            <Link href="/tools/new-puppy-checklist" className="text-brand-primary underline-offset-2 hover:underline">
              new-puppy checklist
            </Link>{' '}
            covers the day-one kit, and the{' '}
            <Link href="/nutrition/puppy-nutrition" className="text-brand-primary underline-offset-2 hover:underline">
              puppy nutrition guide
            </Link>{' '}
            covers feeding the dam and the litter.
          </p>
        </div>
      </section>

      {/* Gestation reference table — citation magnet */}
      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-3xl">
          <h2 className="mb-4 font-display text-2xl font-semibold text-brand-text-dark">
            Canine pregnancy timeline at a glance
          </h2>
          <p className="mb-4 text-sm text-brand-text-mid leading-relaxed">
            How we calculate: the 58–72 and 62–64 windows, the ultrasound days, the radiograph days,
            and the temperature timing are Merck Veterinary Manual sentences, cited under Sources.
            The appetite row is a planning note, not a Merck row. Ultrasound and radiographs are
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
                  ['Ultrasound', '~25–35', 'Merck owner page: reliable by about days 25–35'],
                  ['Appetite rises', '~35–45', 'Dam gains weight; ask a veterinarian before changing the diet'],
                  ['X-ray (puppy count)', '~45+; count best after ~55', 'Merck owner page: useful after about day 45; litter count most reliable after about day 55'],
                  ['Temperature drop', 'about 8–24 h before labor', 'Merck whelping page. No degree target is printed here'],
                  ['Whelping window', '58–72 breeding; 62–64 ovulation', 'Merck reproductive-system table. Day 63 is the ovulation midpoint only'],
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
            How we calculate: the windows are the Merck Veterinary Manual reproductive-system table.
            Breeding at an unknown stage of estrus is 58–72 days. From the day of ovulation the
            period is 62–64 days, and 63 is the midpoint of that range only. The owner page places
            ultrasound at about days 25–35, radiographs after about day 45, and the best litter
            count after about day 55. The whelping page places the rectal-temperature drop about 8
            to 24 hours before delivery and does not give a degree target on this page.
          </p>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            This is breeding and husbandry information, not a diagnosis. Pregnancy confirmation, the
            puppy count, and any concern about the dam or labor are questions for your veterinarian,
            who can confirm by ultrasound (about days 25–35) and X-ray (after about day 45). For feeding the dam and
            the litter, see the{' '}
            <Link href="/nutrition/puppy-nutrition" className="text-brand-primary underline-offset-2 hover:underline">
              puppy nutrition guide
            </Link>
            , and for the first-year plan, the{' '}
            <Link href="/training/puppy-schedule" className="text-brand-primary underline-offset-2 hover:underline">
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
              { label: 'New Puppy Checklist', href: '/tools/new-puppy-checklist', note: 'Day-one kit once the litter arrives' },
              { label: 'Puppy Weight Predictor', href: '/tools/puppy-weight-predictor', note: 'How big will the puppies get?' },
              { label: 'Dog Calorie Calculator', href: '/tools/dog-calorie-calculator', note: 'Daily calories for the dam and pups' },
              { label: 'Puppy Nutrition Guide', href: '/nutrition/puppy-nutrition', note: 'Feeding the dam and a litter' },
              { label: 'Best Puppy Food 2026', href: '/reviews/best-dog-food-for-puppies', note: 'Large- and small-breed formulas' },
              { label: 'Puppy Schedule', href: '/training/puppy-schedule', note: 'Week-by-week first-year plan' },
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

      <CrossPortfolioCard currentSite="dog-com" contentType="tool" variant="footer" />
    </>
  )
}

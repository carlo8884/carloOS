import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildBreadcrumbSchema,
  buildHowToSchema,
  buildFAQSchema,
  combineSchemas,
  SchemaScript,
  StockImage,
  FAQAccordion,
  ArticleByline,
  ArticleSourcesList,
  AffiliateDisclosure,
  BuyBox,
  EmailCapture,
} from '@carloOS/ui'
import FoodTransitionCalculator from './Calculator'

const URL = 'https://petfood.com/tools/food-transition-calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Pet Food Transition Schedule Generator | PetFood.com',
  description:
    'Free dog & cat food transition calculator. Pick 7, 10, or 14 days (or a sensitive-stomach plan) for a day-by-day old:new mixing ratio and gram/cup splits.',
  path: '/tools/food-transition-calculator',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://petfood.com/' },
    { name: 'Tools', url: 'https://petfood.com/tools' },
    {
      name: 'Food Transition Calculator',
      url: 'https://petfood.com/tools/food-transition-calculator',
    },
  ],
})

const howToSchema = buildHowToSchema({
  name: 'How to transition your dog or cat to a new food',
  description:
    'Switch a pet onto a new food gradually using a day-by-day old:new mixing schedule, letting the gut microbiome adapt and watching stool quality to set the pace.',
  url: URL,
  totalTime: 'P7D',
  steps: [
    {
      name: 'Choose a transition length',
      text: 'Pick 7 days for a healthy adult with no known sensitivity, 10 days for a gentler default (good for cats), 14 days for a large ingredient change, or the extended sensitive-stomach plan for pets with a history of GI upset.',
    },
    {
      name: 'Start with mostly old food',
      text: 'On day one, feed a small fraction of the new food mixed into the old food. The calculator returns the exact old:new percentage for each day of your chosen window.',
    },
    {
      name: 'Increase the new food each day',
      text: 'Step the new-food share up day by day toward 100%. If you entered a daily amount, the schedule also splits it into the gram or cup portion of each food per day.',
    },
    {
      name: 'Watch stool quality and adjust',
      text: 'If stool stays firm, advance as scheduled. If it softens, hold at the current ratio or step back a day and extend the plan. Let the pet’s tolerance set the pace.',
    },
    {
      name: 'Reach 100% new food',
      text: 'On the final day the pet is fully on the new food. Persistent vomiting or diarrhea, blood in the stool, or refusal to eat at any point is a reason to slow down and call your veterinarian.',
    },
  ],
})

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Pet Food Transition Schedule Generator',
  url: URL,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description:
    'Free interactive food transition calculator for dogs and cats. Generates a day-by-day old:new food mixing ratio for 7, 10, 14-day, or extended sensitive-stomach plans, with optional gram/cup splits per day and GI-upset watch guidance.',
  featureList: [
    '7, 10, and 14-day transition schedules',
    'Extended sensitive-stomach (21-day) plan',
    'Day-by-day old:new mixing percentages',
    'Optional gram or cup split of the daily amount per food',
    'GI-upset watch guidance and when-to-call-a-vet triggers',
    'WSAVA/AAHA-style gradual-transition approach',
  ],
  publisher: {
    '@type': 'Organization',
    name: 'PetFood.com Editorial',
    url: 'https://petfood.com',
  },
}

const FAQS = [
  {
    question: 'Why transition pet food gradually instead of switching all at once?',
    answer:
      'A pet’s gut is home to a microbial community adapted to its current diet, along with digestive enzymes tuned to that food’s protein, fat, and fiber profile. Swap everything overnight and that community has no time to adjust, which commonly produces gas, soft stool, vomiting, or diarrhea. Spreading the change across roughly 7 to 14 days lets the microbiome and gut shift in step with the rising proportion of new food, which is why standard veterinary feeding guidance recommends a gradual transition.',
    answerText:
      'A pet’s gut microbiome and digestive enzymes are adapted to the current food. An abrupt switch gives them no time to adjust and commonly causes gas, soft stool, or diarrhea. Spreading the change over 7 to 14 days lets the gut adapt, which is why standard veterinary guidance recommends a gradual transition.',
  },
  {
    question: 'How long should a food transition take?',
    answer:
      'Seven to ten days suits most healthy adult dogs and cats. Choose a longer 14-day window for a bigger change — a new protein source, kibble to fresh or raw, or moving onto a therapeutic diet under veterinary direction. Pets with a history of digestive upset, inflammatory bowel disease, or a previous bad reaction to a switch often do better over three weeks or more. The schedule length is a starting frame; the pet’s response is what actually sets the pace.',
    answerText:
      'Seven to ten days suits most healthy adult pets. Use 14 days for a larger change such as a new protein or a therapeutic diet, and three weeks or more for pets with a history of GI upset. The pet’s response sets the real pace.',
  },
  {
    question: 'What are the signs my pet is not tolerating the new food?',
    answer:
      'Mild, brief soft stool or extra gas in the first day or two is common and usually resolves if you hold the current ratio rather than advancing. Watch instead for signs that the change is too fast or the food does not agree: persistent loose stool each time you increase the new food, repeated vomiting, reduced appetite, or a dull, low-energy mood. These call for slowing the schedule down. Diarrhea lasting more than a day or two, blood in the stool, refusal to eat, or signs of dehydration are reasons to stop and contact your veterinarian.',
    answerText:
      'Brief soft stool or gas early on is common; hold the ratio rather than advancing. Persistent loose stool, repeated vomiting, low appetite, or low energy mean slow down. Diarrhea lasting more than a day or two, blood in the stool, refusal to eat, or dehydration are reasons to call your veterinarian.',
  },
  {
    question: 'Does the gram and cup split account for different calorie densities?',
    answer:
      'No. The amount split divides one total daily amount between the two foods by the day’s ratio, which keeps the math simple and the scoops easy to measure. If the new food is more or less calorie-dense than the old one, the correct total amount of new food will differ from the old. Confirm the new food’s target portion using the feeding guide on the bag or our portion calculator, then use that as the total once you are fully switched over.',
    answerText:
      'No. The split divides one total daily amount by the day’s ratio. If the new food differs in calorie density, confirm its target portion using the bag’s feeding guide or the portion calculator, and use that as the total once fully switched.',
  },
  {
    question: 'Is a transition schedule different for a prescription or therapeutic diet?',
    answer:
      'Therapeutic and prescription diets are a veterinary decision, and the transition onto one should follow your veterinarian’s instructions rather than a generic schedule. Some conditions call for a faster change, others a slower one, and the clinical picture — not a calculator — governs it. This tool is general feeding guidance for routine food changes; use it as a planning aid and defer to your vet for any medically directed diet.',
    answerText:
      'Yes — therapeutic and prescription diets are a veterinary decision and the transition should follow your vet’s instructions, not a generic schedule. This tool is general guidance for routine food changes; defer to your vet for any medically directed diet.',
  },
]

const SOURCES = [
  {
    label: 'WSAVA Global Nutrition Guidelines and Recommendations on Selecting Pet Foods',
    url: 'https://wsava.org/committees/global-nutrition-committee/',
    publisher: 'World Small Animal Veterinary Association Global Nutrition Committee',
  },
  {
    label: 'AAHA Nutritional Assessment Guidelines for Dogs and Cats',
    url: 'https://www.aaha.org/resources/2021-aaha-nutrition-and-weight-management-guidelines/',
    publisher: 'American Animal Hospital Association',
  },
  {
    label: 'Nutrient Requirements of Dogs and Cats',
    url: 'https://nap.nationalacademies.org/catalog/10668/nutrient-requirements-of-dogs-and-cats',
    publisher: 'National Research Council, National Academies Press, 2006',
  },
]

const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText })),
})

const schema = combineSchemas(breadcrumbSchema, howToSchema, faqSchema, appSchema)

export default function FoodTransitionCalculatorPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      <section className="bg-brand-dark px-container-sm sm:px-container py-section relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 30% 50%, rgba(80, 110, 70, 0.5) 0%, transparent 60%)',
          }}
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
            Food Transition Schedule Generator
          </h1>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
            Switching your dog or cat to a new food? Pick a transition length and get a day-by-day
            old:new mixing schedule that gives the gut time to adapt — plus an optional gram/cup
            split per day and clear guidance on when to slow down or call a vet.
          </p>
        </div>
      </section>

      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">
          PetFood.com
        </Link>
        <span>›</span>
        <Link href="/tools" className="hover:text-brand-primary no-underline">
          Tools
        </Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Food Transition Calculator</span>
      </nav>

      <div className="px-container-sm sm:px-container pt-8 bg-brand-surface">
        <StockImage
          manifestKey="petfood-com:tool-food-transition"
          fallbackKey="petfood-com:tools-hero"
          aspect="16:9"
          variant="wide"
          priority
        />
      </div>

      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-5xl">
          <FoodTransitionCalculator />
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <ArticleByline
            siteName="PetFood.com Editorial"
            publishedAt="2026-06-08T00:00:00Z"
            updatedAt="2026-06-08T00:00:00Z"
            reviewedBy="Editorial team"
          />

          <h2 className="mb-4 mt-8 font-display text-2xl font-semibold text-brand-text-dark">
            Why a gradual transition matters
          </h2>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            The most common cause of avoidable vomiting and diarrhea around a food change is simply
            changing too fast. A pet&apos;s digestive tract carries a microbiome — a community of gut
            bacteria — that is adapted to the current food&apos;s particular mix of protein, fat, and
            fiber, alongside enzyme activity tuned to that diet. Replace everything at once and that
            system has no time to adjust, which is what produces gas, loose stool, and upset. Easing
            the new food in over several days lets the microbiome shift in step with the rising
            proportion of new food, so the gut is never asked to digest something it is unprepared
            for. This gradual approach is the standard recommendation in WSAVA and AAHA-style feeding
            guidance.
          </p>

          <h2 className="mb-4 mt-8 font-display text-2xl font-semibold text-brand-text-dark">
            Reading the schedule
          </h2>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            The generator starts the new food at a small share on day one and steps it up evenly to
            100% on the final day of your chosen window, rounded to practical 5% increments. If you
            enter a total daily amount, each day&apos;s row also shows how many cups or grams of the
            old and new food that ratio works out to, so you can measure both into the bowl without
            doing the math yourself. The numbers are a frame, not a fixed prescription — the next
            section explains why your pet&apos;s response is what really sets the pace.
          </p>

          <h2 className="mb-4 mt-8 font-display text-2xl font-semibold text-brand-text-dark">
            When to extend the timeline
          </h2>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            Slow the schedule down — or start with the extended sensitive-stomach plan — when the
            change is large or the pet is prone to digestive trouble. A new protein source, a move
            from kibble to fresh or raw, a young or senior animal, or any history of inflammatory
            bowel disease or a previous bad reaction to a switch all argue for a longer, gentler
            ramp. If soft stool appears as you increase the new food, hold at the last ratio your pet
            tolerated for an extra day or two before advancing again rather than pushing through.
            There is no penalty for taking three weeks instead of one; the goal is a comfortable
            switch, not a fast one.
          </p>

          <h2 className="mb-4 mt-8 font-display text-2xl font-semibold text-brand-text-dark">
            When it&apos;s a veterinary issue
          </h2>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            This tool is general guidance for routine food changes, not a diagnosis. Contact your
            veterinarian if you see repeated vomiting, diarrhea that lasts more than a day or two,
            blood in the stool, refusal to eat, lethargy, or any sign of dehydration — at any point
            in the transition. Therapeutic and prescription diets are a separate matter entirely:
            those are a veterinary decision, and the pace of moving onto one should follow your
            vet&apos;s instructions rather than a generic schedule. For the narrative version of all
            of this, see the{' '}
            <Link
              href="/feeding/how-to-transition-pet-food"
              className="text-brand-primary underline-offset-2 hover:underline"
            >
              guide to transitioning your pet to a new food
            </Link>
            .
          </p>

          <h2 className="mb-4 mt-8 font-display text-2xl font-semibold text-brand-text-dark">
            Found your new food?
          </h2>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            If you&apos;re still narrowing down what to switch to, compare options on the same terms
            first. Our{' '}
            <Link href="/brands" className="text-brand-primary underline-offset-2 hover:underline">
              brand database
            </Link>{' '}
            and{' '}
            <Link href="/compare" className="text-brand-primary underline-offset-2 hover:underline">
              food comparisons
            </Link>{' '}
            break down formulas head-to-head, and the{' '}
            <Link
              href="/tools/food-cost-calculator"
              className="text-brand-primary underline-offset-2 hover:underline"
            >
              food cost calculator
            </Link>{' '}
            shows the real per-day cost before you commit. Once you&apos;ve picked a food, you can
            pick it up here:
          </p>

          <AffiliateDisclosure variant="inline" siteId="petfood-com" />
          <BuyBox
            label="Shop your new food"
            disclosure="Already chosen a food? Browse the lineup on Chewy or Amazon. We earn an affiliate commission when you purchase through these links — at no extra cost to you."
            secondaryDisclosure="We never rank by commission, and ingredient and therapeutic-diet guidance stays editorial."
            brands={[
              {
                name: 'Pet food',
                vendors: [
                  {
                    vendor: 'chewy',
                    href: '/go/chewy-brand/dog%20food?s=tool-food-transition',
                    label: 'Browse on Chewy',
                  },
                  {
                    vendor: 'amazon',
                    href: '/go/amazon-brand/dog%20food?s=tool-food-transition',
                    label: 'Browse on Amazon',
                  },
                ],
              },
            ]}
          />

          <h2 className="mb-4 mt-8 font-display text-2xl font-semibold text-brand-text-dark">
            Common questions
          </h2>
          <FAQAccordion items={FAQS} allowMultiple />

          <div className="mt-8">
            <ArticleSourcesList sources={SOURCES} />
          </div>
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-2xl">
          <EmailCapture
            siteId="petfood-com"
            variant="inline"
            title="PetFood.com nutrition letter"
            subtitle="Pet nutrition references and tool updates. No spam."
            source="tools-food-transition-calculator"
          />
        </div>
      </section>
    </>
  )
}

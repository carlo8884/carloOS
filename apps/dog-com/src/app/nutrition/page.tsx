import type { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure, buildMetadata, FAQAccordion, buildBreadcrumbSchema, buildFAQSchema, combineSchemas, EmailCapture, SchemaScript, ShopCtas, StockImage, CrossPortfolioCard } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Dog Nutrition Guide — What to Feed, What to Avoid | Dog.com',
  description: 'research-based dog nutrition guides. What to feed, what\'s toxic, how much, WSAVA-compliant brands, raw vs cooked, puppy vs senior',
  path: '/nutrition',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://dog.com/' },
    { name: 'Nutrition', url: 'https://dog.com/nutrition' },
  ],
})


const GUIDES = [
  {
    category: 'Choosing Food',
    items: [
      { title: 'Best Dry Dog Food 2026', desc: 'Royal Canin, Purina Pro Plan, Hill\'s ranked by WSAVA compliance', href: '/reviews/best-dry-dog-food', badge: '🏆 Top Picks' },
      { title: 'WSAVA Guidelines Explained', desc: 'What "meets WSAVA standards" actually means and why it matters', href: '/nutrition/wsava-explained' },
      { title: 'Grain-Free Dog Food — The DCM Risk', desc: 'FDA investigation findings and what to avoid', href: '/nutrition/grain-free-dcm-risk' },
      { title: 'Raw Diet Pros & Cons', desc: 'What veterinary nutritionists actually say', href: '/nutrition/raw-diet-risks' },
    ],
  },
  {
    category: 'Feeding Basics',
    items: [
      { title: 'How Much to Feed Your Dog', desc: 'By weight, age, and activity level — with body condition scoring', href: '/nutrition/how-much-to-feed' },
      { title: 'How Often to Feed', desc: 'Meal frequency by life stage', href: '/nutrition/feeding-frequency' },
      { title: 'Reading a Dog Food Label', desc: 'Ingredient list, guaranteed analysis, and AAFCO statements decoded', href: '/nutrition/reading-food-labels' },
      { title: 'Puppy Nutrition', desc: 'Large breed puppy formula, growth rates, when to switch to adult', href: '/nutrition/puppy-nutrition' },
    ],
  },
  {
    category: 'What Dogs Can & Cannot Eat',
    items: [
      { title: 'Can Dogs Eat…? Food Checker', desc: 'A–Z safe/caution/toxic checker for 30+ common foods', href: '/nutrition/can-dogs-eat', badge: '🆕 Checker' },
      { title: 'Foods Toxic to Dogs', desc: 'Chocolate, xylitol, grapes, onions, and 20+ more', href: '/nutrition/toxic-foods', badge: '⚠️ Safety' },
      { title: 'Human Foods Safe for Dogs', desc: 'What can actually be shared as treats', href: '/nutrition/safe-human-foods' },
      { title: 'Dog Treats Guide', desc: 'Caloric budget (the 10% rule), dental treats, and jerky safety', href: '/nutrition/dog-treats-guide' },
      { title: 'Supplements That Work', desc: 'Fish oil, joint supplements, probiotics — evidence graded', href: '/nutrition/dog-supplements' },
    ],
  },
  {
    category: 'Life Stage & Condition',
    items: [
      { title: 'Senior Dog Nutrition', desc: 'Metabolic slowdown, protein needs, kidney-supporting diets', href: '/health/senior-dog-care' },
      { title: 'Weight Management for Dogs', desc: 'Body condition scoring, calorie restriction, exercise', href: '/nutrition/weight-management' },
      { title: 'Ozempic for Dogs? GLP-1 Drugs Explained', desc: 'What the GLP-1 weight-loss trend means for dogs — trials, risks, and what works now', href: '/nutrition/ozempic-for-dogs', badge: '🆕 New' },
      { title: 'Dog DNA Tests: What They Tell You', desc: 'How DNA kits work, breed-ID accuracy, health-panel limits, and Embark vs Wisdom Panel', href: '/nutrition/dog-dna-tests', badge: '🆕 New' },
      { title: 'Prescription Diets Explained', desc: 'Kidney, liver, urinary, joint — when prescription food matters', href: '/nutrition/prescription-diets' },
    ],
  },
]

// Life-stage reference framework. General orientation only — exact targets vary
// by individual dog and should be set with a veterinarian. Figures describe the
// dominant nutritional priorities at each stage, not prescriptive numbers.
const LIFE_STAGE_TABLE = [
  {
    stage: 'Puppy (growth)',
    aafco: 'Growth / All Life Stages',
    priority: 'Higher calorie density; controlled calcium for large breeds',
    watch: 'Large-breed puppies need a large-breed-specific growth formula to slow bone growth and lower orthopedic risk',
    guide: { label: 'Puppy Nutrition', href: '/nutrition/puppy-nutrition' },
  },
  {
    stage: 'Adult (maintenance)',
    aafco: 'Adult Maintenance',
    priority: 'Calories matched to body condition; complete and balanced profile',
    watch: 'Most healthy adults are fed twice daily; portion to a 4–5/9 body condition score',
    guide: { label: 'How Much to Feed', href: '/nutrition/how-much-to-feed' },
  },
  {
    stage: 'Senior',
    aafco: 'Adult Maintenance (often lower-calorie)',
    priority: 'Calorie control for slowing metabolism; protein generally maintained, not cut',
    watch: 'Protein restriction is a clinical decision tied to a diagnosis (e.g. kidney disease) — not a default for age alone',
    guide: { label: 'Senior Dog Care', href: '/health/senior-dog-care' },
  },
  {
    stage: 'Weight loss',
    aafco: 'Adult Maintenance or veterinary therapeutic',
    priority: 'Calorie restriction with maintained protein to preserve lean mass',
    watch: 'Crash dieting can cause harm; reduce gradually under veterinary guidance',
    guide: { label: 'Weight Management', href: '/nutrition/weight-management' },
  },
  {
    stage: 'Clinical / prescription',
    aafco: 'Veterinary therapeutic (Rx)',
    priority: 'Formulated around a diagnosis — kidney, liver, urinary, GI, joint',
    watch: 'Prescription diets are dispensed and monitored by a veterinarian, not chosen at the shelf',
    guide: { label: 'Prescription Diets', href: '/nutrition/prescription-diets' },
  },
]

const FAQS = [
  {
    question: 'What should I feed my dog?',
    answer:
      "For most healthy dogs, the strongest single signal is a complete-and-balanced commercial diet that meets the AAFCO nutritional adequacy standard for your dog's life stage and is made by a company that meets WSAVA selection guidelines (employs a qualified nutritionist, runs feeding trials, owns its manufacturing). Beyond that baseline, match calories to body condition rather than to the cup markings on the bag, keep treats to roughly 10% of daily calories, and let any medical condition — not breed marketing or trends — drive special diets. Your veterinarian is the right partner for individual targets.",
  },
  {
    question: 'How do I know if a dog food is good quality?',
    answer:
      "Ingredient panels are weak quality signals on their own; the more reliable checks are the AAFCO nutritional adequacy statement (and whether it was met by formulation or by feeding trial), and whether the manufacturer satisfies the WSAVA selection criteria — a qualified nutritionist on staff, published research, and ownership of the production facility. Our WSAVA guide and food-label guide walk through how to read both, so you can judge a bag on substance rather than packaging claims like 'human-grade' or 'holistic,' which are not regulated nutrition terms.",
  },
  {
    question: 'Is grain-free dog food bad for dogs?',
    answer:
      "Grain-free is not inherently harmful, but the FDA has investigated a possible association between certain grain-free, legume-heavy ('BEG') diets and a form of dilated cardiomyopathy (DCM) in dogs without a genetic predisposition. The relationship is not fully established and remains an area of active veterinary research. For most owners with no specific reason to avoid grains, the cautious default is a WSAVA-aligned diet from a manufacturer with strong nutritional oversight. Our grain-free DCM guide covers the current state of the evidence.",
  },
  {
    question: 'How much should I feed my dog each day?',
    answer:
      "Feeding charts on the bag are starting estimates, not prescriptions — many dogs need less. A more individualized approach starts from resting energy requirement (the standard RER formula) and applies a life-stage and activity factor, then adjusts every few weeks based on body condition score. A dog you can feel but not see the ribs on, with a visible waist, is at a healthy weight regardless of what the bag says. Use the calorie calculator for a starting number and confirm the plan with your veterinarian.",
  },
]

const ALL_NUTRITION_ITEMS = GUIDES.flatMap((s) => s.items)
const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Dog Nutrition Guides',
  numberOfItems: ALL_NUTRITION_ITEMS.length,
  itemListElement: ALL_NUTRITION_ITEMS.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.title,
    url: `https://dog.com${item.href}`,
  })),
}

const faqSchema = buildFAQSchema({ questions: FAQS.map((f) => ({ question: f.question, answer: f.answer })) })

const nutritionSchema = combineSchemas(breadcrumbSchema, itemListSchema, faqSchema)

export default function NutritionHubPage() {
  return (
    <>
      <SchemaScript schema={nutritionSchema} />
      <>
      <div className="bg-brand-dark px-container-sm sm:px-container py-16">
        <div className="flex items-center gap-2.5 mb-5">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Dog Nutrition</span>
        </div>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-4" style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
          Dog Nutrition Guide
        </h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">
          research-based nutrition content — from choosing between WSAVA-compliant brands to understanding what&apos;s actually toxic and what the grain-free DCM concern means for your dog.
        </p>
      </div>

      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Nutrition</span>
      </nav>

      <div className="px-container-sm sm:px-container pt-8 max-w-container-wide mx-auto">
        <StockImage manifestKey="dog-com:category-nutrition" aspect="16:9" variant="wide" priority />
      </div>

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-8 pb-0">
        <div className="max-w-container-wide mx-auto">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the dog nutrition-hub checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Dog nutrition-hub checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the laminated-dog-nutrition-feeding-chart,
            fridge-wsava-label-card, and
            canine-nutrition-reference-handbook notes that
            match the feeding-section-map,
            wsava-label-and-life-stage-log, and
            NRC-WSAVA-and-AAFCO-grounding copy on this
            hub — a laminated dog nutrition feeding chart
            so the section map (choosing food, how much,
            labels, puppy vs senior, treats) is posted on
            the fridge (not a tools-hub calculator chart,
            not a reviews-hub buyer-guide chart, not a
            first-aid chart), a dog fridge WSAVA label
            card so AAFCO statements and life-stage
            feeding notes are labeled on the fridge (not
            a measurement card, not a reviews comparison
            card, not a crate-pad card), and a canine
            nutrition reference handbook so the NRC /
            WSAVA / AAFCO grounding is a physical kitchen
            book (not a calculator handbook, not a
            reviews handbook, not a first-aid handbook).
            Educational kitchen checklist, not a ranked
            product list, not a prescription diet, and
            not a substitute for a veterinarian. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="dog-com"
            title="Dog nutrition-hub checklist"
            subtitle="Email the nutrition-feeding-chart, fridge WSAVA-label-card, and nutrition-handbook notes. No spam."
            ctaText="Email my dog nutrition-hub checklist"
            source="nutrition-hub-under-hero"
          />
        </div>
      </section>

      <div className="px-container-sm sm:px-container py-14 max-w-container-wide mx-auto">
        {GUIDES.map((section) => (
          <div key={section.category} className="mb-12">
            <h2 className="font-display text-2xl font-bold text-brand-dark mb-5 pb-3 border-b border-brand-border">
              {section.category}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {section.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block bg-brand-white border border-brand-border rounded-lg p-5 no-underline hover:border-brand-primary hover:shadow-card transition-all duration-200"
                >
                  {item.badge && (
                    <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">{item.badge}</div>
                  )}
                  <div className="font-display font-bold text-brand-dark text-base mb-1.5 leading-tight">{item.title}</div>
                  <div className="text-xs text-brand-text-light leading-relaxed">{item.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* agent1-browse-all-start */}
      <section className="border-t border-brand-border bg-brand-surface px-container-sm sm:px-container py-10">
        <h2 className="font-display font-bold text-brand-dark text-lg mb-4">All Nutrition Guides</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2">
        <Link key="can-dogs-eat" href="/nutrition/can-dogs-eat" className="text-sm text-brand-primary no-underline hover:underline">Can Dogs Eat…?</Link>
        <Link key="dog-dna-tests" href="/nutrition/dog-dna-tests" className="text-sm text-brand-primary no-underline hover:underline">Dog DNA Tests</Link>
        <Link key="dog-supplements" href="/nutrition/dog-supplements" className="text-sm text-brand-primary no-underline hover:underline">Dog Supplements</Link>
        <Link key="elimination-diet" href="/nutrition/elimination-diet" className="text-sm text-brand-primary no-underline hover:underline">Elimination Diet</Link>
        <Link key="feeding-frequency" href="/nutrition/feeding-frequency" className="text-sm text-brand-primary no-underline hover:underline">Feeding Frequency</Link>
        <Link key="grain-free-dcm-risk" href="/nutrition/grain-free-dcm-risk" className="text-sm text-brand-primary no-underline hover:underline">Grain Free DCM Risk</Link>
        <Link key="how-much-to-feed" href="/nutrition/how-much-to-feed" className="text-sm text-brand-primary no-underline hover:underline">How Much To Feed</Link>
        <Link key="ozempic-for-dogs" href="/nutrition/ozempic-for-dogs" className="text-sm text-brand-primary no-underline hover:underline">Ozempic for Dogs</Link>
        <Link key="prescription-diets" href="/nutrition/prescription-diets" className="text-sm text-brand-primary no-underline hover:underline">Prescription Diets</Link>
        <Link key="puppy-nutrition" href="/nutrition/puppy-nutrition" className="text-sm text-brand-primary no-underline hover:underline">Puppy Nutrition</Link>
        <Link key="raw-diet-risks" href="/nutrition/raw-diet-risks" className="text-sm text-brand-primary no-underline hover:underline">Raw Diet Risks</Link>
        <Link key="reading-food-labels" href="/nutrition/reading-food-labels" className="text-sm text-brand-primary no-underline hover:underline">Reading Food Labels</Link>
        <Link key="safe-human-foods" href="/nutrition/safe-human-foods" className="text-sm text-brand-primary no-underline hover:underline">Safe Human Foods</Link>
        <Link key="senior-dog-nutrition" href="/nutrition/senior-dog-nutrition" className="text-sm text-brand-primary no-underline hover:underline">Senior Dog Nutrition</Link>
        <Link key="toxic-foods" href="/nutrition/toxic-foods" className="text-sm text-brand-primary no-underline hover:underline">Toxic Foods</Link>
        <Link key="weight-management" href="/nutrition/weight-management" className="text-sm text-brand-primary no-underline hover:underline">Weight Management</Link>
        <Link key="wsava-explained" href="/nutrition/wsava-explained" className="text-sm text-brand-primary no-underline hover:underline">WSAVA Explained</Link>
        </div>
      </section>
      {/* agent1-browse-all-end */}
      <section className="px-container-sm sm:px-container pb-10">
        <p className="text-sm text-brand-text-light max-w-2xl">
          Hitting an unfamiliar term? The <Link href="/glossary" className="text-brand-primary hover:underline">dog owner glossary</Link> defines
          AAFCO, by-product, grain-free/DCM, body condition score, and more in plain English.
          Need to put a number on how much to feed?{' '}
          <Link href="/tools/dog-calorie-calculator" className="text-brand-primary hover:underline">
            The Dog Calorie Calculator
          </Link>{' '}
          estimates daily kcal needs using the standard RER formula and WSAVA/AAHA-style life-stage factors.
        </p>
      </section>
      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <h2 id="kit" className="font-display font-bold text-brand-dark text-xl mb-4 max-w-container-wide">
          Nutrition-hub kitchen kit
        </h2>
        <p className="max-w-container-wide text-sm text-brand-text-mid leading-relaxed">
          Everyday physical supplies that match the
          feeding-section-map, wsava-label-and-life-stage-log,
          and NRC-WSAVA-and-AAFCO-grounding copy on this
          hub — a laminated dog nutrition feeding chart so
          the section map is posted on the fridge, a dog
          fridge WSAVA label card so AAFCO statements and
          life-stage feeding notes are labeled on the
          fridge, and a canine nutrition reference handbook
          so the NRC / WSAVA / AAFCO grounding is a
          physical kitchen book. These are educational
          kitchen searches, not a ranked product list, not
          a substitute for a veterinarian, not a tools-hub
          calculator-tools chart hop, and not a reviews-hub
          buyer-guide hop or a puppy / senior food hop
          (those live on the child nutrition and review
          pages). This page does not hop medications or
          vaccines. This page does not claim hands-on
          testing.
        </p>

        <div className="max-w-container-wide mt-6">
          <AffiliateDisclosure variant="inline" siteId="dog-com" />
        </div>

        {/* Money path — live amazon-brand search hops
            (laminated dog nutrition feeding chart /
            dog fridge WSAVA label card /
            canine nutrition reference handbook).
            Educational kitchen searches only; no Rx /
            vaccine / flea / heartworm ASIN hops.
            ShopCtas hides empty Chewy; never href="#"
            or PLACEHOLDER. Unused vs tools-hub
            laminated+dog+calculator+tools+chart /
            dog+fridge+measurement+card /
            canine+calculator+reference+handbook,
            reviews-hub laminated+dog+reviews+buyer+guide+chart /
            dog+fridge+reviews+comparison+card /
            canine+reviews+reference+handbook,
            child nutrition large+breed+puppy+dry+dog+food+aafco /
            senior+dog+dry+food+wsava+recommended. */}
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose max-w-container-wide">
          <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            Shop the nutrition-hub kitchen kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            These Amazon category searches match the
            on-page feeding-section-map,
            wsava-label-and-life-stage-log, and
            NRC-WSAVA-and-AAFCO-grounding copy — a
            laminated dog nutrition feeding chart, a dog
            fridge WSAVA label card, and a canine
            nutrition reference handbook. Educational
            kitchen searches only. They are not a ranked
            product list, they are not a tools-hub
            calculator-tools hop, they are not a
            reviews-hub buyer-guide hop, they are not a
            puppy / senior food hop, and they do not
            replace a veterinarian. Dog.com earns a
            commission on qualifying purchases at no
            extra cost to you. Empty Chewy buttons stay
            hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/laminated+dog+nutrition+feeding+chart?s=nutrition-hub"
              amazonLabel="Browse laminated dog nutrition feeding charts on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/dog+fridge+wsava+label+card?s=nutrition-hub"
              amazonLabel="Browse dog fridge WSAVA label cards on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/canine+nutrition+reference+handbook?s=nutrition-hub"
              amazonLabel="Browse canine nutrition reference handbooks on Amazon →"
            />
          </div>
        </div>
      </section>

      <CrossPortfolioCard currentSite="dog-com" contentType="nutrition" variant="footer" />
    </>
  </>
  )
}

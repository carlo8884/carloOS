import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, buildBreadcrumbSchema, buildFAQSchema, combineSchemas, SchemaScript, StockImage, FAQAccordion } from '@carloOS/ui'
import type { FAQItem } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Pet Supplements — Evidence Reference | PetFood.com',
  description:
    'Evidence-based reference on common pet supplements — fish oil, glucosamine, probiotics, multivitamins, joint, skin, and digestive supplements.',
  path: '/supplements',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://petfood.com/' },
    { name: 'Supplements', url: 'https://petfood.com/supplements' },
  ],
})


const SUPPLEMENTS = [
  {
    slug: 'fish-oil-omega-3',
    title: 'Fish Oil and Omega-3 Supplements',
    description:
      'Fish oil is the pet supplement with the strongest evidence base, supported for joint comfort, skin and coat, and as an adjunct in kidney and heart disease.',
  },
  {
    slug: 'glucosamine-and-joint-support',
    title: 'Glucosamine and Joint Supplements',
    description:
      'Glucosamine and chondroitin are the best-selling joint supplements for pets, but their evidence base is weaker than their marketing implies, and the loosely regulated supplement...',
  },
  {
    slug: 'probiotics-for-pets',
    title: 'Probiotics for Pets',
    description:
      'Probiotics have a genuine evidence base for specific uses in pets — notably acute diarrhea — but the benefits are strain-specific, human products are not interchangeable with pe...',
  },
  {
    slug: 'multivitamins-for-pets',
    title: 'Multivitamins for Pets',
    description:
      'Multivitamins are among the most-purchased and least-necessary pet supplements.',
  },
  {
    slug: 'skin-and-coat-supplements',
    title: 'Skin and Coat Supplements',
    description:
      'A dull, flaky, or shedding coat is one of the most common reasons owners reach for a supplement, and some skin-and-coat ingredients genuinely help.',
  },
]

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Pet Supplement Evidence Reference',
  numberOfItems: SUPPLEMENTS.length,
  itemListElement: SUPPLEMENTS.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.title,
    url: `https://petfood.com/supplements/${s.slug}`,
  })),
}

const supplementsFAQItems: FAQItem[] = [
  {
    question: "Does my pet need supplements if they eat a complete-and-balanced diet?",
    answer: "For most healthy pets eating an AAFCO-complete-and-balanced commercial diet, routine supplementation is not necessary and can be counterproductive. Adding extra vitamins and minerals on top of a nutritionally complete diet risks pushing specific nutrients above safe upper limits — this is a documented concern for fat-soluble vitamins such as A and D, and for minerals such as calcium. Exceptions include specific therapeutic uses with veterinary direction (omega-3 fatty acids at prescription doses for kidney disease or cardiac conditions, for example), pets on a home-prepared diet that has not been formulated by a board-certified veterinary nutritionist, and individual animals with diagnosed deficiencies. The pages in this cluster address the evidence for each supplement category individually, including when evidence supports use and when it does not.",
    answerText: "For most healthy pets eating an AAFCO-complete-and-balanced commercial diet, routine supplementation is not necessary and can be counterproductive. Adding extra vitamins and minerals on top of a nutritionally complete diet risks pushing specific nutrients above safe upper limits — this is a documented concern for fat-soluble vitamins such as A and D, and for minerals such as calcium. Exceptions include specific therapeutic uses with veterinary direction (omega-3 fatty acids at prescription doses for kidney disease or cardiac conditions, for example), pets on a home-prepared diet that has not been formulated by a board-certified veterinary nutritionist, and individual animals with diagnosed deficiencies. The pages in this cluster address the evidence for each supplement category individually, including when evidence supports use and when it does not.",
  },
  {
    question: "Are pet supplements regulated the same way as pet food?",
    answer: "No, and the difference is significant for evaluating product quality. Pet food is regulated by AAFCO model regulations adopted at the state level, and must carry an AAFCO nutritional adequacy statement to be sold as complete-and-balanced. Pet supplements marketed as treats or toppers do not carry AAFCO nutritional adequacy statements and are regulated under a much lighter-touch framework. The National Animal Supplement Council (NASC) operates a voluntary quality-seal program, and some supplement companies submit to third-party testing, but neither is mandatory. Practically, this means the label claims on a pet supplement are less constrained by regulatory oversight than a pet food label, and the variation in active-ingredient content between products can be substantial. The supplement pages in this cluster note where third-party quality standards are available and relevant.",
    answerText: "No, and the difference is significant for evaluating product quality. Pet food is regulated by AAFCO model regulations adopted at the state level, and must carry an AAFCO nutritional adequacy statement to be sold as complete-and-balanced. Pet supplements marketed as treats or toppers do not carry AAFCO nutritional adequacy statements and are regulated under a much lighter-touch framework. The National Animal Supplement Council (NASC) operates a voluntary quality-seal program, and some supplement companies submit to third-party testing, but neither is mandatory. Practically, this means the label claims on a pet supplement are less constrained by regulatory oversight than a pet food label, and the variation in active-ingredient content between products can be substantial. The supplement pages in this cluster note where third-party quality standards are available and relevant.",
  },
  {
    question: "What is the evidence for fish oil in dogs and cats?",
    answer: "Omega-3 fatty acids from fish oil — primarily EPA (eicosapentaenoic acid) and DHA (docosahexaenoic acid) — have the strongest evidence base among commonly used pet supplements. Evidence supports their use for skin and coat quality, as an adjunct therapy in canine and feline chronic kidney disease (where they may slow GFR decline), in cardiac disease management, and in osteoarthritis comfort. The mechanism in kidney and cardiac disease involves the anti-inflammatory and prostaglandin-modulating effects of EPA and DHA. Dosing for therapeutic use is substantially higher than the small amounts typically found in standard kibble, and the appropriate dose for a specific condition should be determined by a veterinarian. Plant-source omega-3s such as flaxseed ALA are not an equivalent substitute because cats and dogs have limited capacity to convert ALA to the longer-chain EPA and DHA.",
    answerText: "Omega-3 fatty acids from fish oil — primarily EPA (eicosapentaenoic acid) and DHA (docosahexaenoic acid) — have the strongest evidence base among commonly used pet supplements. Evidence supports their use for skin and coat quality, as an adjunct therapy in canine and feline chronic kidney disease (where they may slow GFR decline), in cardiac disease management, and in osteoarthritis comfort. The mechanism in kidney and cardiac disease involves the anti-inflammatory and prostaglandin-modulating effects of EPA and DHA. Dosing for therapeutic use is substantially higher than the small amounts typically found in standard kibble, and the appropriate dose for a specific condition should be determined by a veterinarian. Plant-source omega-3s such as flaxseed ALA are not an equivalent substitute because cats and dogs have limited capacity to convert ALA to the longer-chain EPA and DHA.",
  },
]

const faqSchema = buildFAQSchema({
  questions: supplementsFAQItems.map((f) => ({
    question: f.question,
    answer: f.answerText ?? (typeof f.answer === 'string' ? f.answer : ''),
  })),
})

const supplementsSchema = combineSchemas(breadcrumbSchema, itemListSchema, faqSchema)

export default function SupplementsHubPage() {
  return (
    <>
      <SchemaScript schema={supplementsSchema} />
      <>
      <div className="bg-brand-dark px-container-sm sm:px-container py-16">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
            Supplement Reference
          </span>
        </div>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-4"
          style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
        >
          Pet Supplements
        </h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">
          What the evidence actually supports for the most-marketed pet supplements — and when a complete diet already covers the need.
        </p>
      </div>

      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>&#x203A;</span>
        <span className="text-brand-text-mid font-medium">Supplements</span>
      </nav>

      <div className="px-container-sm sm:px-container pt-8">
        <StockImage manifestKey="petfood-com:supplements-hero" aspect="16:9" variant="wide" priority />
      </div>

      <div className="px-container-sm sm:px-container py-10 max-w-content-wide">
        <p className="text-base text-brand-text-mid leading-relaxed mb-4">
          Pet supplements are a multi-billion-dollar category that sits outside the AAFCO regulatory framework that governs complete-and-balanced pet food. Unlike food, supplements are not required to carry an AAFCO nutritional adequacy statement; label claims are largely unverified by a mandatory pre-market review process; and the evidence base varies enormously across categories — from well-supported (fish oil omega-3s for specific conditions) to weak or largely anecdotal (most joint supplements, most multivitamins for pets on a complete diet).
        </p>
        <p className="text-base text-brand-text-mid leading-relaxed mb-4">
          This cluster covers five of the highest-volume supplement categories sold for dogs and cats. Each page follows the same framework: what the ingredient is, what mechanism is claimed, what the actual evidence base looks like (including whether studies are in companion animal populations or extrapolated from rodent or human research), when use is indicated versus unnecessary, and what quality signals to look for on the label. The framing is calibrated — where evidence is weak or limited to specific conditions, this is stated plainly. Where evidence supports use at specific doses for specific conditions, that context is provided.
        </p>
        <p className="text-base text-brand-text-mid leading-relaxed">
          If your pet has a diagnosed condition and your veterinarian has recommended supplementation, start with the page for that supplement category. If you are considering adding a supplement to the routine of a healthy pet eating a complete-and-balanced diet, start with the multivitamins page for context on the evidence threshold for routine supplementation.
        </p>
      </div>

      <div className="px-container-sm sm:px-container py-12">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 list-none p-0 max-w-content-wide">
          {SUPPLEMENTS.map((i) => (
            <li key={i.slug}>
              <Link
                href={`/supplements/${i.slug}`}
                className="block py-5 px-6 rounded-lg border border-brand-border bg-brand-surface hover:border-brand-primary hover:bg-white no-underline transition"
              >
                <div className="font-display font-bold text-brand-dark text-lg mb-2 leading-tight">
                  {i.title}
                </div>
                <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                  {i.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="px-container-sm sm:px-container pb-12 max-w-content-wide">
        <h2 className="font-display font-bold text-brand-dark text-2xl mb-6">Frequently Asked Questions</h2>
        <FAQAccordion items={supplementsFAQItems} includeSchema={false} />
      </div>

      <section
        className="px-container-sm sm:px-container py-12"
        style={{ background: 'var(--brand-primary-pale)' }}
      >
        <EmailCapture
          variant="section"
          siteId="petfood-com"
          title="Free Label Decoder"
          subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
          source="supplements-hub"
        />
      </section>
    </>
  </>
  )
}

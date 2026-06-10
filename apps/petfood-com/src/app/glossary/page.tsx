import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
  EmailCapture,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Pet Food Glossary — Label & Nutrition Terms | PetFood.com',
  description:
    'A plain-language pet food glossary: AAFCO, guaranteed analysis, complete & balanced, meat meal vs by-product, dry-matter basis, and more label terms defined.',
  path: '/glossary',
})

interface Term {
  term: string
  def: string
}
interface Group {
  category: string
  terms: Term[]
}

const GLOSSARY: Group[] = [
  {
    category: 'Label & Regulation',
    terms: [
      { term: 'AAFCO', def: 'The Association of American Feed Control Officials — a non-profit that publishes model pet-food regulations and nutrient profiles. AAFCO does not test or approve foods; it sets the standards that state feed-control officials enforce.' },
      { term: 'Guaranteed analysis', def: 'The label panel required on every pet food, stating minimums for crude protein and crude fat and maximums for crude fiber and moisture (and often ash and other nutrients). It gives ranges, not exact amounts.' },
      { term: '"Complete and balanced"', def: 'A regulated claim meaning the food provides all nutrients a pet needs, in the right proportions, for a stated life stage. It must be backed by a nutritional adequacy statement.' },
      { term: 'Nutritional adequacy statement', def: 'The sentence on the label declaring which life stage(s) the food is complete and balanced for, and how that was substantiated — by meeting AAFCO nutrient profiles or by passing an AAFCO feeding trial.' },
      { term: 'AAFCO nutrient profiles', def: 'Reference tables of minimum (and some maximum) nutrient levels for dogs and cats by life stage. A food can meet adequacy by being formulated to these profiles.' },
      { term: 'Feeding trial', def: 'The alternative substantiation method: the food is fed to animals under an AAFCO protocol and they maintain health. Considered the more rigorous of the two methods.' },
      { term: 'Calorie content statement', def: 'The required statement of energy density, expressed as kilocalories of metabolizable energy per kilogram and per common household unit (e.g., per cup or per can).' },
    ],
  },
  {
    category: 'Life Stage',
    terms: [
      { term: 'Growth', def: 'A life-stage designation for puppies and kittens, requiring higher levels of several nutrients than adult maintenance.' },
      { term: 'Maintenance', def: 'A life-stage designation for healthy adult animals at a stable, moderate activity level.' },
      { term: 'All life stages', def: 'A designation meaning the food meets the more demanding growth/reproduction profile, so it is suitable for adults and young animals alike — though it may be richer than an adult-only animal needs.' },
      { term: 'Large-breed growth', def: 'A puppy-food designation meeting additional constraints (notably controlled calcium) important for the skeletal development of large- and giant-breed dogs.' },
    ],
  },
  {
    category: 'Ingredients',
    terms: [
      { term: 'Named meat (e.g. "chicken")', def: 'A whole, named animal protein. Because whole meat is roughly 70% water, its position high on the ingredient list can overstate its post-cooking contribution relative to a meal.' },
      { term: 'Meat meal', def: 'A named animal protein that has been rendered (cooked and dried), removing water. It is far more protein-dense by weight than whole meat. "Named" (e.g., chicken meal) is preferred over generic "meat meal."' },
      { term: 'By-product', def: 'Animal parts other than skeletal muscle — which can include nutritious organ meats. Quality depends on the source; "named" by-products (e.g., chicken by-product) are more transparent than generic ones.' },
      { term: 'By-product meal', def: 'A rendered, water-removed by-product. As with meals generally, a named source is more transparent than a generic one.' },
      { term: 'Ingredient splitting', def: 'Listing a single ingredient as several sub-components (e.g., several corn fractions) so each appears lower on the weight-ordered ingredient list than the combined ingredient would.' },
      { term: 'Ingredient list order', def: 'Ingredients are listed by weight before cooking, which is why a high-water whole meat can rank above a more protein-dense meal. Order is a starting point, not the whole story.' },
      { term: 'Rendering', def: 'The cooking-and-drying process that turns animal tissue into a shelf-stable, water-removed meal.' },
    ],
  },
  {
    category: 'Nutrients & Analysis',
    terms: [
      { term: 'Crude protein', def: 'The total protein estimate from the guaranteed analysis, derived from nitrogen content. "Crude" refers to the measurement method, not protein quality.' },
      { term: 'Crude fat', def: 'The total fat minimum from the guaranteed analysis. Fat is the most energy-dense macronutrient and a major driver of palatability and calories.' },
      { term: 'Crude fiber', def: 'A maximum on the indigestible plant matter in the food. It is an imperfect proxy for total dietary fiber but is what the label reports.' },
      { term: 'Ash', def: 'The total mineral content (what remains after combustion). Relevant for some urinary and renal considerations; reported by some but not all labels.' },
      { term: 'Dry-matter basis (DMB)', def: 'Nutrient levels recalculated with all water removed, which is the only fair way to compare a dry kibble against a high-moisture canned food.' },
      { term: 'As-fed basis', def: 'Nutrient levels as they appear in the food including its moisture — the form the guaranteed analysis uses, and why wet and dry foods cannot be compared directly without converting to DMB.' },
      { term: 'Metabolizable energy (ME)', def: 'The usable energy in the food after accounting for losses, expressed in kilocalories. The basis for the calorie-content statement and for portioning.' },
      { term: 'Taurine', def: 'An amino acid that is essential for cats (and a concern in some dog diets). Insufficient taurine is linked to a form of heart disease, making it a watched nutrient.' },
    ],
  },
  {
    category: 'Diet Types',
    terms: [
      { term: 'Grain-free', def: 'A formulation without grains, often using legumes or potatoes instead. The FDA has investigated a possible association between some grain-free diets and canine heart disease (DCM); the picture is unresolved.' },
      { term: 'Limited-ingredient diet (LID)', def: 'A food built from a deliberately short ingredient list, often used to simplify identifying triggers in suspected food sensitivities.' },
      { term: 'Novel protein', def: 'A protein the animal has not eaten before (e.g., venison, rabbit), used in elimination diets because the immune system has not been sensitized to it.' },
      { term: 'Prescription / therapeutic diet', def: 'A food formulated for the dietary management of a diagnosed condition, sold under veterinary direction. Use should be guided by a veterinarian.' },
      { term: 'WSAVA guidelines', def: 'World Small Animal Veterinary Association recommendations on selecting pet foods and evaluating manufacturers (nutritional expertise, quality control, research). Widely cited as a vetting framework.' },
    ],
  },
]

const ALL_TERMS = GLOSSARY.flatMap((g) => g.terms)

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'PetFood.com', url: 'https://petfood.com/' },
    { name: 'Glossary', url: 'https://petfood.com/glossary' },
  ],
})

const definedTermSetSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  name: 'Pet Food Glossary',
  description: 'Plain-language definitions of pet-food label, ingredient, and nutrition terms.',
  url: 'https://petfood.com/glossary',
  hasDefinedTerm: ALL_TERMS.map((t) => ({
    '@type': 'DefinedTerm',
    name: t.term,
    description: t.def,
    inDefinedTermSet: 'https://petfood.com/glossary',
  })),
}

const schema = combineSchemas(breadcrumbSchema, definedTermSetSchema)

export default function PetFoodGlossaryPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      <div className="bg-brand-dark px-container-sm sm:px-container py-16">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Reference</span>
        </div>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-4" style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
          Pet Food Glossary
        </h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">
          The language of the pet-food label, in plain English — regulation and life-stage terms,
          what ingredient names actually mean, the nutrients in the guaranteed analysis, and the
          diet-type labels you see on the shelf.
        </p>
      </div>

      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">PetFood.com</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Glossary</span>
      </nav>

      <div className="px-container-sm sm:px-container py-12 max-w-3xl">
        <p className="text-sm text-brand-text-light mb-10">
          {ALL_TERMS.length} pet-food terms, grouped by topic. To put them to use, the <Link href="/tools/food-cost-calculator" className="text-brand-primary hover:underline">food cost calculator</Link> and
          the <Link href="/ingredients" className="text-brand-primary hover:underline">ingredients</Link> and <Link href="/nutrition" className="text-brand-primary hover:underline">nutrition</Link> references go deeper on the concepts defined here.
        </p>

        {GLOSSARY.map((group) => (
          <section key={group.category} className="mb-10">
            <h2 className="font-display font-bold text-brand-dark text-xl mb-4 pb-2 border-b border-brand-border">
              {group.category}
            </h2>
            <dl className="space-y-4">
              {group.terms.map((t) => (
                <div key={t.term} className="border-l-2 border-brand-primary/30 pl-4">
                  <dt className="font-display font-bold text-brand-dark text-base">{t.term}</dt>
                  <dd className="text-sm text-brand-text-mid leading-relaxed mt-0.5 ml-0">{t.def}</dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>

      <div className="bg-brand-primary-pale border-t border-brand-border px-container-sm sm:px-container py-12">
        <EmailCapture
          variant="section"
          siteId="petfood-com"
          title="PetFood.com reference letter"
          subtitle="Evidence-based pet-nutrition references and label decoders. No spam."
          source="glossary"
          ctaText="Subscribe Free"
        />
      </div>
    </>
  )
}

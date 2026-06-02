import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, buildBreadcrumbSchema, combineSchemas, SchemaScript, StockImage } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Condition-Specific Pet Diets — Reference Library | PetFood.com',
  description:
    'Reference on therapeutic and condition-specific diets — kidney, allergy, weight, diabetic, senior, urinary, GI, liver, and pancreatitis nutrition.',
  path: '/diets',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://petfood.com/' },
    { name: 'Diets', url: 'https://petfood.com/diets' },
  ],
})


const DIETS = [
  {
    slug: 'kidney-disease-diets',
    title: 'Kidney Disease Diets for Dogs and Cats',
    description:
      'Chronic kidney disease is one of the most common conditions of older cats and a frequent diagnosis in older dogs, and diet is the single intervention with the strongest evidence...',
  },
  {
    slug: 'food-allergy-and-elimination-diets',
    title: 'Food Allergy and Elimination Diets',
    description:
      'Food allergy in dogs and cats is real but less common than the marketing suggests, and it cannot be diagnosed by a blood or saliva test.',
  },
  {
    slug: 'weight-management-diets',
    title: 'Weight-Management Diets',
    description:
      'More than half of dogs and cats in many surveys are overweight or obese, and excess weight shortens lifespan and worsens nearly every chronic disease.',
  },
  {
    slug: 'diabetic-diets',
    title: 'Diabetic Diets for Dogs and Cats',
    description:
      'Diabetes mellitus is managed primarily with insulin, but diet is a powerful co-therapy — and the dietary approach differs sharply between cats and dogs because their diabetes di...',
  },
  {
    slug: 'senior-pet-diets',
    title: 'Senior Pet Diets',
    description:
      'Senior is the most-marketed and least-regulated label on a pet food bag.',
  },
  {
    slug: 'urinary-tract-diets',
    title: 'Urinary and Bladder Stone Diets',
    description:
      'Urinary therapeutic diets manage two of the most common lower-urinary-tract problems: mineral stones (uroliths) and feline idiopathic cystitis.',
  },
  {
    slug: 'fiber-and-digestive-health',
    title: 'Fiber and Digestive Health Diets',
    description:
      'Gastrointestinal therapeutic diets are among the most-used veterinary diets, because digestive upset is one of the most common reasons pets visit the clinic.',
  },
  {
    slug: 'liver-disease-diets',
    title: 'Liver Disease Diets',
    description:
      'The liver is central to metabolism, and liver disease demands a careful nutritional balance — enough high-quality protein to support regeneration without overwhelming a compromi...',
  },
  {
    slug: 'pancreatitis-low-fat-diets',
    title: 'Pancreatitis and Low-Fat Diets',
    description:
      'Pancreatitis is painful, sometimes life-threatening, and strongly linked to dietary fat in dogs.',
  },
  {
    slug: 'joint-and-mobility-diets',
    title: 'Joint and Mobility Diets',
    description:
      'Osteoarthritis is extremely common in older dogs and underdiagnosed in cats, and diet is a genuine tool for managing it — though the evidence is strongest for the least-marketed...',
  },
  {
    slug: 'hydrolyzed-protein-diets',
    title: 'Hydrolyzed and Novel-Protein Diets',
    description:
      'Hydrolyzed and novel-protein diets are the therapeutic backbone of food-allergy and food-responsive gastrointestinal management.',
  },
  {
    slug: 'puppy-and-kitten-growth-diets',
    title: 'Puppy and Kitten Growth Diets',
    description:
      'Growth is the most nutritionally demanding life stage, and the consequences of getting it wrong — skeletal disease in large-breed puppies, developmental deficits in kittens — ca...',
  },
  {
    slug: 'cardiac-and-low-sodium-diets',
    title: 'Cardiac and Low-Sodium Diets',
    description:
      'Heart disease is common in older dogs and cats, and diet is a meaningful adjunct to medical management — chiefly through sodium control, but also protein preservation, taurine, ...',
  },
  {
    slug: 'hyperthyroid-cat-diets',
    title: 'Hyperthyroid Cat Diets',
    description:
      'Hyperthyroidism is one of the most common endocrine diseases of older cats, and dietary iodine restriction is one of several treatment options — a genuinely effective one, but w...',
  },
]

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Condition-Specific Pet Diets Reference',
  numberOfItems: DIETS.length,
  itemListElement: DIETS.map((d, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: d.title,
    url: `https://petfood.com/diets/${d.slug}`,
  })),
}

const dietsSchema = combineSchemas(breadcrumbSchema, itemListSchema)

export default function DietsHubPage() {
  return (
    <>
      <SchemaScript schema={dietsSchema} />
      <>
      <div className="bg-brand-dark px-container-sm sm:px-container py-16">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
            Condition-Specific Diets
          </span>
        </div>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-4"
          style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
        >
          Condition-Specific Diets
        </h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">
          How diet is used to manage diagnosed conditions — what the therapeutic nutrient targets are, what the evidence supports, and what requires veterinary oversight.
        </p>
      </div>

      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Diets</span>
      </nav>

      <div className="px-container-sm sm:px-container pt-12">
        <StockImage manifestKey="petfood-com:diets-hero" priority aspect="16:9" variant="wide" />
      </div>

      <div className="px-container-sm sm:px-container py-12">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 list-none p-0 max-w-content-wide">
          {DIETS.map((i) => (
            <li key={i.slug}>
              <Link
                href={`/diets/${i.slug}`}
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

      <section
        className="px-container-sm sm:px-container py-12"
        style={{ background: 'var(--brand-primary-pale)' }}
      >
        <EmailCapture
          variant="section"
          siteId="petfood-com"
          title="Free Label Decoder"
          subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
          source="diets-hub"
        />
      </section>
    </>
  </>
  )
}

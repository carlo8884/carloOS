import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Dog Ear Infections — Types, Causes & Treatment | Dog.com', description: 'Ear infections are the #1 reason for vet visits. Yeast vs bacterial vs ear mites — different presentations and different treatments.', path: '/health/dog-ear-infections', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Dog Ear Infections', description: 'Yeast, bacterial, and ear mite infections — diagnosis and treatment.', url: 'https://dog.com/health/dog-ear-infections', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Dog Ear Infections', description: 'Types, diagnosis, and treatment of canine ear infections.', url: 'https://dog.com/health/dog-ear-infections', authorName: 'Dog.com Editorial', lastReviewed: '2025-05-01' })
const combined = combineSchemas(schema, med)

const FAQS = [
  { question: 'Can I treat my dog\'s ear infection at home?', answer: 'Over-the-counter ear cleaners can help maintain ear hygiene and prevent infections. However, active infections require veterinary diagnosis and prescription medication — the wrong treatment for the wrong organism can make infections worse. A dog shaking its head, scratching at its ears, or showing ear discharge needs a vet exam, not home treatment.' },
  { question: 'Why does my dog keep getting ear infections?', answer: 'Recurrent ear infections almost always have an underlying cause: allergies (most common), hypothyroidism, Cushing\'s disease, anatomical factors (heavy pendulous ears, hairy ear canals), or inadequate treatment of the initial infection. If your dog has had more than 2 ear infections in a year, ask your vet for an allergy workup rather than treating each infection in isolation.' },
  { question: 'How do I clean my dog\'s ears properly?', answer: 'Fill the ear canal with a veterinary ear cleaner (Virbac Epi-Otic, Douxo Ear). Massage the base of the ear for 30 seconds to loosen debris. Let the dog shake, then gently wipe the visible canal and ear flap with a cotton ball. Never use cotton swabs inside the ear canal — they push debris deeper. Clean weekly for prevention in infection-prone dogs.' },
]

export default function DogEarInfectionsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'Dog Ear Infections', subtitle: 'The most common reason dogs visit the vet. Three main types — yeast, bacterial, and ear mites — present differently and require different treatments. Getting the right diagnosis changes the outcome.', category: 'Dog Health', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: 'Ear Infections', href: '/health/dog-ear-infections' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Signs of Ear Infection</div>
            {['Head shaking', 'Scratching at ears', 'Odor from ears', 'Dark discharge', 'Redness or swelling', 'Tilted head (inner ear)', 'Crying when ear touched'].map(s => (
              <div key={s} className="py-1.5 border-b border-brand-border last:border-0 text-xs text-brand-text-mid flex items-center gap-2">
                <span className="text-brand-primary">→</span>{s}
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Dog Allergies', href: '/health/dog-allergies' }, { label: 'Hypothyroidism', href: '/health/hypothyroidism' }, { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' }]} />
          <CrossPortfolioCard currentSite="dog-com" contentType="health" variant="sidebar" />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="health-ear-infections" />
        </>}
      >
        <div className="carloOS-article">
          <h2>The Three Types and How to Tell Them Apart</h2>

          <div className="bg-brand-surface border border-brand-border rounded-xl p-5 mb-4">
            <h3 className="font-display font-bold text-brand-dark text-base mt-0 mb-2">Yeast (Malassezia) — Most Common</h3>
            <p className="text-sm text-brand-text-mid leading-relaxed m-0">Brown-black waxy discharge. Sweet, musty, or "corn chip" odor. Often affects both ears simultaneously. Associated with allergies and hypothyroidism. Ears are red and itchy. Treatment: antifungal medication (ketoconazole, clotrimazole in prescription ear drops). Underlying allergy management required to prevent recurrence.</p>
          </div>

          <div className="bg-brand-surface border border-brand-border rounded-xl p-5 mb-4">
            <h3 className="font-display font-bold text-brand-dark text-base mt-0 mb-2">Bacterial (Pseudomonas, Staphylococcus, Proteus)</h3>
            <p className="text-sm text-brand-text-mid leading-relaxed m-0">Yellow or green pus-like discharge. More painful than yeast. May affect one or both ears. Can be a primary infection or secondary to a yeast infection. Treatment: antibiotic ear drops based on culture and sensitivity — Pseudomonas in particular can be antibiotic resistant and requires appropriate selection. Chronic bacterial infections warrant culture before treatment.</p>
          </div>

          <div className="bg-brand-surface border border-brand-border rounded-xl p-5 mb-6">
            <h3 className="font-display font-bold text-brand-dark text-base mt-0 mb-2">Ear Mites (Otodectes cynotis)</h3>
            <p className="text-sm text-brand-text-mid leading-relaxed m-0">Dark brown-black crumbly "coffee ground" debris. Intensely itchy — dog scratches constantly. Usually affects both ears. More common in young dogs and cats. Highly contagious between animals in the household. Treatment: parasiticide (Revolution, Bravecto, or ear drops with ivermectin/selamectin). All household animals must be treated simultaneously.</p>
          </div>

          <h2>Why Diagnosis Matters — Cytology</h2>
          <p>A swab of ear discharge examined under a microscope (ear cytology) identifies what is present — yeast cells, bacteria (rods vs cocci), mites, or inflammatory cells. This takes 5 minutes in clinic and determines the correct treatment. Treating bacterial infections with antifungal drops fails. Treating yeast with antibiotics fails. The cytology determines which drug to use.</p>

          <h2>Otitis Media and Interna — Deeper Infections</h2>
          <p>Otitis externa (outer ear canal) is the most common form. When infection progresses through the eardrum into the middle ear (otitis media) or inner ear (otitis interna), signs worsen: severe pain, head tilt, circling, loss of balance, Horner's syndrome (drooping eyelid). CT or MRI is typically needed to assess middle and inner ear involvement. Deep ear infections require systemic antibiotics in addition to topical treatment.</p>

          <h2>High-Risk Breeds</h2>
          <p>Breeds with heavy, pendulous ears (Cocker Spaniels, Basset Hounds, Bloodhounds) trap moisture and have reduced airflow — predisposing to chronic infections. Breeds with hairy ear canals (Poodles, Schnauzers) may benefit from hair removal by a groomer or veterinarian to improve ventilation. Breeds with allergies (Goldens, Labradors, Frenchies, Bulldogs) are predisposed because ear infection is commonly an allergy manifestation.</p>

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />
        </div>
      </ArticleLayout>
    </>
  )
}

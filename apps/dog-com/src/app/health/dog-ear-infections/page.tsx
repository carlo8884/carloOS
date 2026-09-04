import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, CrossPortfolioCard, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'
const SOURCES = [
  { label: 'Merck Veterinary Manual: Otitis Externa in Dogs and Cats', url: 'https://www.merckvetmanual.com/eye-and-ear/ear-diseases/otitis-externa-in-dogs-and-cats', publisher: 'Merck Vet Manual' },
  { label: 'ACVIM: Otitis Externa — Diagnosis and Management', url: 'https://www.acvim.org/Portals/0/PDF/consensus/otitis_consensus.pdf', publisher: 'ACVIM' },
  { label: 'AVMA: Ear Infections in Dogs (Otitis Externa)', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/common-health-conditions-dogs', publisher: 'AVMA' },
  { label: 'Nuttall T et al. Trends in antimicrobial resistance in canine and feline otitis externa and skin infections. J Small Anim Pract. 2019;60(12):728-739.', publisher: 'JSAP' },
]


export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Dog Ear Infections — Types, Causes & Treatment | Dog.com', description: 'Ear infections are a common reason for vet visits. Yeast vs bacterial vs ear mites — different presentations and different treatments.', path: '/health/dog-ear-infections', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Dog Ear Infections', description: 'Yeast, bacterial, and ear mite infections — diagnosis and treatment.', url: 'https://dog.com/health/dog-ear-infections', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' ,
  citation: SOURCES,
})
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
        hero={{ title: 'Dog Ear Infections', subtitle: 'A common reason dogs visit the vet. Three main types — yeast, bacterial, and ear mites — present differently and require different treatments. Getting the right diagnosis changes the outcome.', category: 'Dog Health', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: 'Ear Infections', href: '/health/dog-ear-infections' }]}
        relatedLinks={[{ title: 'Dog Health Hub', href: '/health', category: 'Hub' }, { title: 'Dog Allergies', href: '/health/dog-allergies', category: 'Dog Health' }, { title: 'Dog Skin Allergies', href: '/health/dog-skin-allergies', category: 'Dog Health' }, { title: 'Dog Symptoms Guide', href: '/health/dog-symptoms-guide', category: 'Dog Health' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Signs of Ear Infection</div>
            {['Head shaking', 'Scratching at ears', 'Odor from ears', 'Dark discharge', 'Redness or swelling', 'Tilted head (inner ear)', 'Crying when ear touched'].map(s => (
              <div key={s} className="py-1.5 border-b border-brand-border last:border-0 text-xs text-brand-text-mid flex items-center gap-2">
                <span className="text-brand-primary">→</span>{s}
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Dog Allergies', href: '/health/dog-allergies' }, { label: 'Hypothyroidism', href: '/health/hypothyroidism' }, { label: 'Best Pet Insurance', href: 'https://vets.co/reviews/best-pet-insurance' }]} />
          <CrossPortfolioCard currentSite="dog-com" contentType="health" variant="sidebar" />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="health-ear-infections" />
        </>}
      >
        <div className="carloOS-article">
          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the weekly ear-cleaning checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Dog ear-cleaning checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the weekly ear-cleaning notes — a veterinary ear
              cleaner and cotton balls for wiping the visible canal and
              ear flap. Educational checklist, not a diagnosis and not a
              prescription ear drop. Active infections need a vet exam.
              No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="dog-com"
              title="Dog ear-cleaning checklist"
              subtitle="Email the weekly ear-cleaning notes. No spam."
              ctaText="Email my dog ear-cleaning checklist"
              source="health-dog-ear-infections-under-hero"
            />
          </div>

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

          <h2 id="kit">Weekly ear-cleaning kit</h2>
          <p>Everyday physical supplies that match the home-care copy above — a veterinary ear cleaner to fill the canal, then a cotton ball to wipe the visible canal and ear flap after the dog shakes. Cotton swabs stay out of the canal. Prescription ear drops, parasiticide brands (Revolution, Bravecto), and brand ASINs (Virbac Epi-Otic, Douxo Ear) stay educational copy only — this page never hops Rx drops, parasiticide brands, or medications. This page does not claim hands-on testing.</p>

          <AffiliateDisclosure variant="inline" siteId="dog-com" />

          {/* Money path — live amazon-brand search hops (weekly ear-cleaning kit).
              ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
              Category searches only — reuse the live sister query from
              ferret.com ear-cleaning (pet+ear+cleaner). Cotton balls
              match on-page wipe copy. Prescription ear drops,
              parasiticide brands, and brand ASINs are not shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the weekly ear-cleaning kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the on-page
              ear-cleaning copy — a veterinary ear cleaner and cotton
              balls for wiping the visible canal and ear flap. Everyday
              physical supplies only. They are not a ranked product list,
              they are not prescription ear drops, they are not
              medications or parasiticide brands, and they do not replace
              a veterinarian or cytology. Dog.com earns a commission on
              qualifying purchases at no extra cost to you. Empty Chewy
              buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/pet+ear+cleaner?s=health-dog-ear-infections"
                amazonLabel="Browse pet ear cleaners on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/cotton+balls?s=health-dog-ear-infections"
                amazonLabel="Browse cotton balls on Amazon →"
              />
            </div>
          </div>

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}

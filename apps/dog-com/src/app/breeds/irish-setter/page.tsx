import type { Metadata } from 'next'
import { AffiliateDisclosure, buildMetadata, ArticleLayout, BreedHealthCard, EmailCapture, RelatedLinks, ShopCtas, CrossPortfolioCard , ArticleByline, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Irish Setter Breed Guide — Epilepsy, PRA | Dog.com', description: 'Irish Setters are exuberantly energetic sporting dogs. Progressive retinal atrophy (PRA) and epilepsy are the primary health concerns.', path: '/breeds/irish-setter', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Irish Setter Breed Guide', description: 'PRA, epilepsy, exercise requirements, and care for Irish Setters.', url: 'https://dog.com/breeds/irish-setter', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-11T00:00:00Z' })

const FAQS = [
  {
    question: 'How much exercise does an Irish Setter need?',
    answer: 'Irish Setters need 90+ minutes of vigorous daily exercise — running, not just walking. They were bred for all-day upland bird hunting, and dog sports (agility, field trials, hunt tests) and off-leash running in safe areas suit them well. An under-exercised Irish Setter typically redirects that energy into destructive, hyperactive behavior.',
  },
  {
    question: 'What health problems do Irish Setters have?',
    answer: 'The primary documented concerns are progressive retinal atrophy (PRA — the rcd1 mutation was first identified in this breed, and DNA testing plus annual CAER eye exams are appropriate), an elevated prevalence of idiopathic epilepsy with typical onset between 1–5 years, and gluten-sensitive enteropathy. Discuss breed-appropriate screening with your veterinarian.',
  },
  {
    question: 'How long do Irish Setters live?',
    answer: 'Irish Setters typically live 11–15 years. Adults generally weigh 60–70 lbs, and their long, silky mahogany coat needs weekly grooming.',
  },
  {
    question: 'Are Irish Setters easy to train?',
    answer: 'They are trainable but famously slow to mature mentally — a 3-year-old Irish Setter often shows the impulse control of a much younger dog. This is a breed characteristic, not a training failure. Consistent, patient positive-reinforcement training from puppyhood works best, with the understanding that the calm adult stage may not arrive until age 3–4.',
  },
  {
    question: 'Do Irish Setters need a gluten-free diet?',
    answer: 'Only dogs affected by gluten-sensitive enteropathy — a documented Irish Setter-specific condition characterized in research at the University of Liverpool — genuinely require a gluten-free diet. Genetic testing is available, and affected dogs show poor growth, weight loss, and diarrhea on gluten-containing diets. This is distinct from general grain-free feeding trends; discuss testing and diet choices with your veterinarian.',
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })
const combinedSchema = combineSchemas(schema, faqSchema)
export default function IrishSetterPage() {
  return (
    <ArticleLayout siteId="dog-com"
      hero={{ title: 'Irish Setter Breed Guide', subtitle: 'The mahogany-red Irish Setter is one of the most instantly recognizable dog breeds — and one of the most energetic. Bred for all-day upland bird hunting across Irish terrain, they combine a beautiful flowing coat with an exuberance and energy level that requires an active household to channel properly.', category: 'Breed Guide', authorName: 'Dog.com Editorial', authorAvatar: '🐕', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Breeds', href: '/breeds' }, { name: 'Irish Setter', href: '/breeds/irish-setter' }]}
      relatedLinks={[{ title: 'Dog Breeds Hub', href: '/breeds', category: 'Hub' }, { title: 'Irish Wolfhound Guide', href: '/breeds/irish-wolfhound', category: 'Breed Guide' }, { title: 'Vizsla Guide', href: '/breeds/vizsla', category: 'Breed Guide' }, { title: 'Dog Training Hub', href: '/training', category: 'Training' }]}
      schema={combinedSchema}
      contentType="breed"
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">At a Glance</div>
          {[['Size', '60–70 lbs'], ['Lifespan', '11–15 years'], ['Exercise', 'High — 90+ min vigorous daily'], ['Trainability', 'Good — slow to mature mentally'], ['PRA risk', 'Elevated — CAER annual exam'], ['Epilepsy', 'Elevated prevalence'], ['Coat', 'Long silky mahogany — weekly grooming']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-2 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Dog Seizures', href: '/health/dog-seizures' }, { label: 'Best Pet Insurance', href: 'https://vets.co/reviews/best-pet-insurance' }, { label: 'Separation Anxiety', href: '/training/separation-anxiety' }]} />
        <CrossPortfolioCard currentSite="dog-com" contentType="breed" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="breed-irish-setter" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Dog.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />

        <div className="mb-8">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the irish-setter checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Irish Setter checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the laminated-dog-setter-1700s-bird-chart,
            dog-fridge-setter-90min-run-card, and
            canine-first-owner-irish-setter-handbook notes
            that match the 1700s Irish bird-hunt origin, the
            90-minute vigorous-run floor, and first-time-
            owner notes on this page — a laminated dog Setter
            1700s-bird chart so the English-Setter / Spaniel /
            Pointer / net-trapper notes are posted on the
            fridge (not a Pyr LGD-wolf chart, not a Dane
            boar-hunt chart), a fridge Setter 90min-run card
            so the all-day upland / not-just-walking notes
            are labeled in the kitchen (not a night-bark
            card, not a finger-toothbrush hop), and a first-
            owner Irish Setter handbook so the YES-typically
            / Peter-Pan 3–4-year / rcd1-PRA grounding is a
            physical kitchen book (not a first-owner Great
            Pyrenees handbook). Educational kitchen
            checklist, not a ranked product list, not a
            substitute for a veterinarian. Dog.com does not
            sell insurance. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="dog-com"
            title="Irish Setter checklist"
            subtitle="Email the 1700s-bird chart, 90min-run card, and first-owner handbook notes. No spam."
            ctaText="Email my irish-setter checklist"
            source="breed-irish-setter-under-hero"
          />
        </div>

        <p>The working story starts in 1700s Ireland: English Setter, Spaniel, and Pointer stock refined to locate game birds for net-trappers and hunters. That upland-bird / all-day-hunt history is why a household Irish Setter still needs a 90-minute vigorous-run clock and a slow-maturity plan, not a crate-only afternoon. Irish Setters are typically first-time-owner friendly — YES-typically — when the household accepts the Peter Pan 3–4 year maturity clock, weekly mahogany-coat grooming, and the rcd1 PRA / gluten-enteropathy screening conversation.</p>

                <BreedHealthCard name="Progressive Retinal Atrophy (PRA)" riskLevel="high"
          description="Irish Setters were one of the first breeds in which PRA was studied extensively — the rod-cone dysplasia (rcd1) mutation was identified in Irish Setters and led to the first DNA test for hereditary eye disease in dogs. The rcd1 mutation causes early-onset blindness (rods begin degenerating from birth, with clinical signs appearing in puppies). Modern Irish Setter lines have been largely cleared of rcd1 through testing programs, but later-onset PRA mutations also occur in the breed. Annual CAER examination and DNA testing of breeding dogs is appropriate."
          signs={['Night blindness in young dogs (rcd1 — early onset)', 'Progressive difficulty seeing in low light', 'Eventual complete blindness in affected dogs']}
          management="DNA test breeding dogs for rcd1 and other available PRA mutations. Annual CAER examination. Affected dogs adapt well to familiar environments." />

        <BreedHealthCard name="Epilepsy" riskLevel="moderate"
          description="Irish Setters have an elevated prevalence of idiopathic epilepsy — typical onset between 1–5 years. Most affected dogs are well-managed on anti-epileptic medication. The breed's epilepsy has some familial inheritance patterns — pedigree research when purchasing from a breeder is appropriate."
          signs={['Generalized tonic-clonic seizures', 'Focal seizures', 'Post-ictal confusion and disorientation']}
          management="Veterinary evaluation after first seizure. Anti-epileptic medication (phenobarbital or levetiracetam as first-line) when indicated. Regular bloodwork monitoring." />

        <h2>The "Peter Pan" Syndrome</h2>
        <p>Irish Setters are famously slow to mature mentally — they retain their puppy exuberance and lack of impulse control for significantly longer than most large breeds. A 3-year-old Irish Setter often behaves more like a 1-year-old Lab in terms of impulse control and focus. This is not a training failure — it is a breed characteristic. The upside: their joy and enthusiasm for life remains infectious well into adulthood. The management requirement: consistent, patient positive reinforcement training from puppyhood, understanding that the "calm adult" stage may not arrive until age 3-4.</p>

        <h2>Gluten Sensitivity in Irish Setters</h2>
        <p>Irish Setters are one of the few breeds with documented gluten-sensitive enteropathy — a condition analogous to celiac disease in humans where gluten (from wheat, barley, rye) causes intestinal inflammation and malabsorption. The condition was characterized in research at the University of Liverpool. Affected Irish Setters on a gluten-containing diet show: poor growth, weight loss, diarrhea, and eventually skin and coat changes. A gluten-free diet resolves the clinical signs in affected dogs. Genetic testing is available; responsible breeders test for the mutation. This is an Irish Setter-specific condition distinct from the general grain-free DCM concern — grain-free is not inherently recommended for all dogs, but a tested-positive Irish Setter genuinely requires a gluten-free diet.</p>

        <h2>Exercise Requirements</h2>
        <p>90+ minutes of vigorous daily exercise is the Irish Setter's requirement — and "vigorous" means running, not walking. They are built for all-day hunting across varied terrain. Dog sports (agility, field trials, hunt tests), off-leash running in safe areas, and consistent active engagement satisfy their needs. An under-exercised Irish Setter is a destructive, hyperactive Irish Setter — all that energy goes somewhere, and in an unstimulated environment it goes into furniture, landscaping, and anything else that provides an outlet.</p>

        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
          <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            Shop the Irish Setter home kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            These Amazon category searches match the on-page
            1700s Irish bird-hunt origin, the 90-minute
            vigorous-run floor, and first-time-owner notes —
            a laminated dog Setter 1700s-bird chart, a fridge
            Setter 90min-run card, and a first-owner Irish
            Setter handbook. Educational kitchen searches
            only. They are not a ranked product list, they
            are not a crate hop, they are not a finger-
            toothbrush hop, and they do not replace a
            veterinarian. Dog.com does not sell insurance.
            Dog.com earns a commission on qualifying
            purchases at no extra cost to you.
          </p>
          <AffiliateDisclosure variant="inline" siteId="dog-com" />
          <div className="flex flex-col gap-3 mt-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/laminated+dog+setter+1700s+bird+chart?s=breed-irish-setter"
              amazonLabel="Browse laminated dog Setter 1700s-bird charts on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/dog+fridge+setter+90min+run+card?s=breed-irish-setter"
              amazonLabel="Browse fridge Setter 90min-run cards on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/canine+first+owner+irish+setter+handbook?s=breed-irish-setter"
              amazonLabel="Browse first-owner Irish Setter handbooks on Amazon →"
            />
          </div>
        </div>

        <h2>Frequently Asked Questions</h2>
        <FAQAccordion
          items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
          includeSchema={false}
          allowMultiple
        />
      </div>
    </ArticleLayout>
  )
}

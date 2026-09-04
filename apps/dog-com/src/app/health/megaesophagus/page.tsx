import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, CrossPortfolioCard, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'
const SOURCES = [
  { label: 'Merck Veterinary Manual: Megaesophagus in Animals', url: 'https://www.merckvetmanual.com/digestive-system/diseases-of-the-esophagus-in-small-animals/megaesophagus-in-dogs-and-cats', publisher: 'Merck Vet Manual' },
  { label: 'AVMA: Megaesophagus in Dogs — Management and Aspiration Pneumonia Prevention', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/common-health-conditions-dogs', publisher: 'AVMA' },
  { label: 'Gaynor AR et al. Risk factors for acquired megaesophagus in dogs. J Am Vet Med Assoc. 1997;211(11):1406-1412.', publisher: 'JAVMA' },
  { label: 'Dewey CW et al. Myasthenia gravis and megaesophagus in dogs. Vet Clin North Am Small Anim Pract. 2004;34(6):1437-1468.', publisher: 'Vet Clinics Small Animal Practice' },
]


export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Megaesophagus in Dogs — Upright Feeding, Bailey Chair | Dog.com', description: 'Megaesophagus causes regurgitation and life-threatening aspiration pneumonia.', path: '/health/megaesophagus', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Megaesophagus in Dogs', description: 'Upright feeding, Bailey chair, and aspiration pneumonia prevention for dogs with megaesophagus.', url: 'https://dog.com/health/megaesophagus', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-11T00:00:00Z' ,
  citation: SOURCES,
})
const med = buildMedicalWebPageSchema({ name: 'Megaesophagus in Dogs', description: 'Canine megaesophagus — management, upright feeding, and aspiration prevention.', url: 'https://dog.com/health/megaesophagus', authorName: 'Dog.com Editorial', lastReviewed: '2025-05-01' })
const FAQS = [
  { question: 'What is the difference between regurgitation and vomiting in dogs?', answer: 'Vomiting is active and forceful — the dog retches, the abdomen contracts, there is visible effort. Regurgitation is passive: food or fluid comes up without effort, often as a tube-shaped mass of undigested food (it never reached the stomach, so it retains its shape), and the dog may be surprised by it. This passive, effortless expulsion of undigested food is the hallmark of megaesophagus and esophageal disease generally — and the distinction matters diagnostically, so describe what you are seeing precisely to your veterinarian, or video an episode.' },
  { question: 'What is a Bailey chair and does my dog need one?', answer: 'A Bailey chair is a custom-built seat that holds the dog nearly vertical — like a "sitting bear" — during feeding and for 10–30 minutes afterward, letting gravity move food into the stomach that the dilated esophagus cannot push down itself. It is the most effective single intervention for megaesophagus and dramatically reduces regurgitation and aspiration in a properly sized chair. Chairs can be bought pre-made or built from plans shared by megaesophagus support groups; dogs introduced gradually typically accept them readily. For dogs with significant aspiration risk, upright feeding at every meal is non-negotiable.' },
  { question: 'What is the biggest danger of megaesophagus in dogs?', answer: 'Aspiration pneumonia — regurgitated material inhaled into the lungs causes bacterial infection of lung tissue, and it is the primary cause of death and suffering in megaesophagus dogs. Watch for cough, exercise intolerance, fever, increased breathing rate or effort, and in severe cases blue-tinged gums. Aspiration pneumonia in a megaesophagus dog is a medical emergency requiring hospitalization, IV antibiotics, and oxygen therapy — go to an emergency veterinarian, do not wait. Every feeding modification in megaesophagus management exists to prevent this complication.' },
  { question: 'What should I feed a dog with megaesophagus?', answer: 'Whatever consistency that individual dog transits with the least regurgitation — there is no universal answer. Some dogs do best with small meatballs of canned food, some with liquid slurry, others with soaked kibble or gel-forming foods; it takes experimentation and observation, ideally guided by your veterinarian. The one consistent rule on this page: avoid dry kibble in dogs with significant megaesophagus, because it does not transit reliably.' },
  { question: 'What causes megaesophagus in dogs?', answer: 'It is either congenital — present from birth and noticed when puppies start solid food — or acquired later from neuromuscular disease. The most common acquired cause is myasthenia gravis, an immune-mediated condition of the neuromuscular junction; hypothyroidism, Addison\'s disease, and toxins are other causes. That is why testing for underlying causes — specifically the acetylcholine receptor antibody titer for myasthenia gravis — is essential in adult-onset cases: treating the underlying condition may resolve the megaesophagus.' },
]
const combined = combineSchemas(schema, med, buildFAQSchema({ questions: FAQS.map(f => ({ question: f.question, answer: f.answer })) }))

export default function MegaesophagusPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'Megaesophagus in Dogs', subtitle: 'Megaesophagus is dilation and reduced motility of the esophagus — the tube connecting the mouth to the stomach. A normal esophagus moves food downward through coordinated muscle contractions (peristalsis). In megaesophagus, the esophagus dilates and loses this coordinated movement, causing food to pool rather than transit to the stomach. The result: regurgitation, and the life-threatening risk of aspiration pneumonia.', category: 'Dog Health', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: 'Megaesophagus', href: '/health/megaesophagus' }]}
        relatedLinks={[{ title: 'Dog Health Hub', href: '/health', category: 'Hub' }, { title: 'Dog Vomiting Guide', href: '/health/dog-vomiting', category: 'Dog Health' }, { title: 'Dog Symptoms Guide', href: '/health/dog-symptoms-guide', category: 'Dog Health' }, { title: 'Addisons Disease in Dogs', href: '/health/addisons-disease', category: 'Dog Health' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Predisposed Breeds</div>
            {['German Shepherd', 'Great Dane', 'Irish Setter', 'Labrador Retriever', 'Miniature Schnauzer', 'Shar Pei', 'Wire Fox Terrier'].map(b => (
              <div key={b} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid">{b}</div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Dog Vomiting', href: '/health/dog-vomiting' }, { label: 'Dog Symptoms Guide', href: '/health/dog-symptoms-guide' }, { label: 'Senior Dog Care', href: '/health/senior-dog-care' }, { label: 'Best Pet Insurance', href: 'https://vets.co/reviews/best-pet-insurance' }]} />
          <CrossPortfolioCard currentSite="dog-com" contentType="health" variant="sidebar" />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="health-megaesophagus" />
        </>}
      >
        <div className="carloOS-article">
          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the Bailey-chair feeding checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Dog megaesophagus Bailey-chair checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the upright-feeding notes — a Bailey chair or other
              near-vertical feeding chair so gravity can move food into
              the stomach after each meal. Educational checklist, not a
              diagnosis and not a prescription diet. Canine Caviar,
              myasthenia gravis medications, and antibiotics for
              aspiration pneumonia stay off this list. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="dog-com"
              title="Dog megaesophagus Bailey-chair checklist"
              subtitle="Email the Bailey-chair and upright-feeding notes. No spam."
              ctaText="Email my dog Bailey chair checklist"
              source="health-megaesophagus-under-hero"
            />
          </div>

          <h2>Regurgitation vs Vomiting — The Critical Distinction</h2>
          <p>Owners often describe megaesophagus as "vomiting" but the distinction matters diagnostically. Vomiting is an active, forceful process — the dog retches, the abdomen contracts, there is effort. Regurgitation is passive — food or fluid comes up without active effort, often as a tube-shaped mass of undigested food (the food never reached the stomach to be digested, so it retains its shape). The dog may not show warning signs before regurgitation and may be surprised by it. This passive, effortless expulsion of undigested food is the hallmark of megaesophagus and esophageal disease generally.</p>

          <h2>Aspiration Pneumonia — The Primary Danger</h2>
          <p>Regurgitated material that is inhaled into the lungs causes aspiration pneumonia — bacterial infection of lung tissue from aspirated food, saliva, and gastric contents. This is the primary cause of death and suffering in megaesophagus dogs. Signs of aspiration pneumonia: cough, exercise intolerance, fever, increased respiratory rate and effort, and in severe cases, cyanosis (blue-tinged gums from low blood oxygen). Aspiration pneumonia in a megaesophagus dog is a medical emergency requiring hospitalization, IV antibiotics, oxygen therapy, and supportive care.</p>
          <p>Prevention of aspiration is the entire goal of megaesophagus management — every feeding modification, food consistency adjustment, and positional feeding protocol exists to reduce aspiration risk.</p>

          <h2>The Bailey Chair — Upright Feeding</h2>
          <p>The Bailey Chair is a custom-built seat that holds the dog in a near-vertical upright position during feeding and for 10-30 minutes afterward. In the upright position, gravity moves food from the esophagus into the stomach without requiring peristaltic contractions the megaesophagus dog does not have reliably. This is the most effective single intervention for megaesophagus management and dramatically reduces regurgitation and aspiration frequency in appropriately sized and comfortable chairs.</p>
          <p>Bailey Chairs can be purchased pre-made or built from plans available through megaesophagus support groups. The chair must be properly sized for the dog — the dog should be fully upright with forelimbs extended forward (like a "sitting bear" position). Dogs that are introduced to the chair gradually typically accept it readily; many come to enjoy mealtime in the chair. The commitment: every meal, twice daily, requires 10-30 minutes of upright post-feeding time. This is non-negotiable for dogs with significant aspiration risk.</p>

          <h2>Food Consistency — Finding What Works</h2>
          <p>Food consistency significantly affects how well a megaesophagus dog can manage transit. Different dogs do best with different textures — some manage slurry or liquid food better, others do better with small meatballs, others with soaked kibble. There is no universal recommendation; it requires experimentation and observation of which consistency produces least regurgitation for the individual dog. Common approaches: small meatballs of canned food (gravity pulls them down faster than liquid), liquid/slurry (some dogs transit liquid better), Canine Caviar (a food specifically designed for megaesophagus dogs that forms gel balls). Avoid dry kibble in dogs with significant megaesophagus — it does not transit reliably.</p>

          <h2>Causes and Diagnostics</h2>
          <p>Megaesophagus may be congenital (present from birth — diagnosed when puppies begin eating solid food) or acquired (develops later in life from neuromuscular disease). Acquired causes include myasthenia gravis (the most common cause of acquired megaesophagus in adult dogs — an immune-mediated condition affecting the neuromuscular junction), hypothyroidism, hypoadrenocorticism (Addison's disease), and toxin exposure. Thoracic radiographs show the dilated esophagus. Fluoroscopic swallow study (barium swallow) demonstrates the functional deficit. In acquired megaesophagus, testing for underlying causes — specifically acetylcholine receptor antibody titer for myasthenia gravis — is essential because treating the underlying condition may resolve the megaesophagus.</p>

          <h2 id="kit">Bailey-chair feeding kit</h2>
          <p>Everyday physical supplies that match the upright-feeding copy above — a Bailey chair or other near-vertical feeding chair that holds the dog in a sitting-bear position during the meal and for 10–30 minutes afterward. Canine Caviar, prescription diets, myasthenia gravis medications, and antibiotics for aspiration pneumonia stay educational copy only — this page never hops brand foods, diet ASINs, or medications. This page does not claim hands-on testing.</p>

          <AffiliateDisclosure variant="inline" siteId="dog-com" />

          {/* Money path — live amazon-brand search hops (Bailey chair /
              upright feeding chair). ShopCtas hides empty Chewy; never
              href="#" or PLACEHOLDER. Category searches only.
              Canine Caviar, prescription diets, myasthenia gravis
              medications, and antibiotics are not shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the Bailey-chair feeding kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the on-page upright-
              feeding copy — a Bailey chair and other near-vertical
              feeding chairs so gravity can move food into the stomach.
              Everyday physical gear only. They are not a ranked product
              list, they are not prescription diets, they are not
              medications, they are not brand ASINs, and they do not
              replace a veterinarian. Dog.com earns a commission on
              qualifying purchases at no extra cost to you. Empty Chewy
              buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/bailey+chair+dog?s=health-megaesophagus"
                amazonLabel="Browse Bailey chairs on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/upright+dog+feeding+chair?s=health-megaesophagus"
                amazonLabel="Browse upright feeding chairs on Amazon →"
              />
            </div>
          </div>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}

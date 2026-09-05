import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, CrossPortfolioCard, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'
const SOURCES = [
  { label: 'Merck Veterinary Manual: Vomiting in Small Animals', url: 'https://www.merckvetmanual.com/digestive-system/vomiting-in-small-animals/vomiting-in-small-animals', publisher: 'Merck Vet Manual' },
  { label: 'AVMA: Vomiting in Dogs — When to See a Vet', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/common-health-conditions-dogs', publisher: 'AVMA' },
  { label: 'AAHA: Emergency Signs — Vomiting and GI Emergencies', url: 'https://www.aaha.org/aaha-guidelines/emergency-and-critical-care/emergency-and-critical-care-guidelines/', publisher: 'AAHA' },
  { label: 'Merck Veterinary Manual: Gastric Dilation and Volvulus — Emergency Presentation', url: 'https://www.merckvetmanual.com/digestive-system/diseases-of-the-stomach-and-intestines-in-small-animals/gastric-dilation-and-volvulus-in-small-animals', publisher: 'Merck Vet Manual' },
]

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Dog Vomiting — Acute vs Chronic, Yellow Bile | Dog.com', description: 'Dog vomiting guide. Acute vs chronic, yellow bile in the morning, and the signs that make vomiting an emergency. When to treat at home vs see a vet immediately.', path: '/health/dog-vomiting', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Dog Vomiting Guide', description: 'Acute vs chronic vomiting, yellow bile syndrome, and emergency signs for dog vomiting.', url: 'https://dog.com/health/dog-vomiting', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-11T00:00:00Z' ,
  citation: SOURCES,
})
const med = buildMedicalWebPageSchema({ name: 'Dog Vomiting', description: 'Causes, home care, and emergency signs for dog vomiting.', url: 'https://dog.com/health/dog-vomiting', authorName: 'Dog.com Editorial', lastReviewed: '2025-05-01' })
const FAQS = [
  { question: 'Why is my dog vomiting?', answer: 'The most common cause of acute vomiting is dietary indiscretion — the dog ate something it should not have (garbage, table scraps, foreign material). Gastritis and bilious vomiting syndrome are also common and usually self-limiting. But vomiting is also a sign of serious conditions — GDV, pancreatitis, toxin ingestion, intestinal obstruction, and parvovirus in unvaccinated puppies — so the pattern and accompanying signs matter. A single episode in an otherwise alert adult dog can usually be monitored at home for 24 hours; repeated vomiting, blood, or lethargy means contact your veterinarian.' },
  { question: 'Why is my dog throwing up yellow bile in the morning?', answer: 'Vomiting yellow bile — bile without food — first thing in the morning or after a long gap between meals is typically bilious vomiting syndrome. Bile refluxes into the empty stomach overnight and irritates the stomach lining. It usually resolves with a small bedtime snack or more frequent feeding so the stomach is empty for less time. It is not generally serious, but it is worth discussing with your veterinarian if it persists.' },
  { question: 'When should I take my dog to the vet for vomiting?', answer: 'Call or visit the vet the same day for multiple vomiting episodes over several hours, inability to keep water down, or mild lethargy. Go to the emergency vet immediately for any of the emergency signs this page lists: unproductive retching (especially in large breeds — a GDV sign), blood in the vomit, severe lethargy, vomiting after suspected foreign body ingestion, a distended abdomen, pale gums, a puppy that cannot keep anything down, or vomiting persisting beyond 24 hours.' },
  { question: 'Is it an emergency if my dog is retching but nothing comes up?', answer: 'Yes — treat it as one. Unproductive retching, particularly in large or deep-chested breeds, is a hallmark sign of gastric dilatation-volvulus (GDV/bloat), which is fatal without emergency surgery. The page above lists unproductive retching as an emergency sign — go to the emergency veterinarian immediately rather than waiting to see if other signs develop.' },
  { question: 'What is the difference between vomiting and regurgitation in dogs?', answer: 'Vomiting is active: abdominal contractions, retching, and nausea behavior beforehand (lip-licking, drooling, restlessness), with material coming from the stomach or upper small intestine. Regurgitation is passive: undigested food slides out without effort or retching, often tubular in shape. Regurgitation points to an esophageal problem (such as megaesophagus or esophageal obstruction) rather than gastric disease, and the diagnostic approach is entirely different — describe which one you are seeing to your veterinarian.' },
]

const combined = combineSchemas(schema, med, buildFAQSchema({ questions: FAQS.map(f => ({ question: f.question, answer: f.answer })) }))
export default function DogVomitingPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'Dog Vomiting', subtitle: 'Dogs vomit. Most of the time it is not serious. But vomiting is also a sign of some of the most serious conditions in veterinary medicine — GDV, pancreatitis, toxin ingestion, intestinal obstruction. Knowing which signs escalate to emergency is essential.', category: 'Dog Health', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: 'Dog Vomiting', href: '/health/dog-vomiting' }]}
        relatedLinks={[{ title: 'Dog Health Hub', href: '/health', category: 'Hub' }, { title: 'Dog Diarrhea', href: '/health/dog-diarrhea', category: 'Dog Health' }, { title: 'Pancreatitis in Dogs', href: '/health/pancreatitis', category: 'Dog Health' }, { title: 'Dog Bloat (GDV)', href: '/health/dog-bloat-gvd', category: 'Dog Health' }]}
        sidebar={<>
          <div className="bg-brand-danger/5 border border-brand-danger/20 rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-danger mb-2">Emergency Signs</div>
            <ul className="text-xs text-brand-text-mid space-y-1 m-0 p-0 list-none">
              {['Unproductive retching (no vomit produced)', 'Blood in vomit', 'Vomiting + distended abdomen', 'Vomiting after suspected foreign body', 'Vomiting + extreme lethargy', 'Vomiting + pale gums', 'Puppy vomiting repeatedly', 'Vomiting persists >24 hours'].map(s => <li key={s} className="flex gap-2"><span className="text-brand-danger font-bold">→</span>{s}</li>)}
            </ul>
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'GDV / Bloat', href: '/health/dog-bloat-gvd' }, { label: 'Dog Diarrhea', href: '/health/dog-diarrhea' }, { label: 'Dog Pancreatitis', href: '/health/dog-symptoms-guide' }]} />
          <RelatedLinks title="Plan for the Cost" links={[{ label: 'Compare Pet Insurance', href: 'https://vets.co/reviews/best-pet-insurance' }]} />
          <CrossPortfolioCard currentSite="dog-com" contentType="health" variant="sidebar" />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="health-vomiting" />
        </>}
      >
        <div className="carloOS-article">
          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the dog-vomiting bland-diet checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Dog-vomiting bland-diet checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the home-monitor notes — a mini rice
              cooker so you can make a small batch of plain
              white rice after the 6–12 hour withhold, plus
              glass meal-prep containers for leftover
              bland-diet portions and the small bedtime
              snack used for bilious vomiting. Educational
              checklist, not a diagnosis and not a
              treatment list. Anti-nausea medication,
              prescription GI diets, probiotics, pumpkin,
              slow-feeders, elevated bowls, and Bailey
              chairs stay off this list. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="dog-com"
              title="Dog-vomiting bland-diet checklist"
              subtitle="Email the rice-cooker and meal-prep-container notes. No spam."
              ctaText="Email my dog-vomiting bland-diet checklist"
              source="health-dog-vomiting-under-hero"
            />
          </div>

          <h2>Vomiting vs Regurgitation — An Important Distinction</h2>
          <p><strong>Vomiting</strong> is active — abdominal contractions, retching, nausea behavior beforehand (lip-licking, drooling, restlessness). The material comes from the stomach or upper small intestine. <strong>Regurgitation</strong> is passive — food slides out without effort, no retching, often tubular in shape (the shape of the esophagus), undigested food. Regurgitation indicates an esophageal problem (megaesophagus, esophageal obstruction) rather than gastric or intestinal disease. The distinction matters because the diagnostic and treatment approach is entirely different.</p>

          <h2>Common Causes of Acute Vomiting</h2>
          <p><strong>Dietary indiscretion:</strong> The dog ate something they shouldn't. Garbage, table scraps, foreign material. Most common cause. Usually self-limiting in 24 hours in otherwise healthy dogs.</p>
          <p><strong>Gastritis:</strong> Inflammation of the stomach lining from dietary indiscretion, infection, or unknown cause. May vomit several times, then improve. Withholding food for 6–12 hours, then a bland diet of boiled unseasoned white chicken breast and plain white rice, typically resolves uncomplicated gastritis. A mini rice cooker is a kitchen prep tool so you can cook a small batch of plain white rice without leftover seasoning from the family pot. Glass meal-prep containers hold leftover bland-diet portions for the 24-hour monitor window so you are not remaking the mix every few hours. Those two items are prep tools. They are not a treatment, they do not replace a veterinarian when emergency signs are present, and they are not a slow-feeder, an elevated bowl, or a Bailey chair.</p>
          <p><strong>Bilious vomiting syndrome (yellow bile in the morning):</strong> Many dogs vomit yellow bile — bile without food — first thing in the morning or after a long gap between meals. Caused by bile refluxing into the empty stomach overnight, irritating the stomach lining. Usually resolves with a small bedtime snack (empty stomach less time overnight) or feeding more frequently. Glass meal-prep containers also hold that bedtime snack portion so it is ready instead of skipped. Not serious but worth investigating if persistent.</p>

          <h2>Serious Causes That Mimic Mild Vomiting</h2>
          <p><strong>Intestinal obstruction:</strong> Foreign object (bone fragment, toy, corn cob, sock) stuck in the GI tract. Dogs may vomit repeatedly without progressing to improvement. Key sign: vomiting persists despite fasting, or the dog vomited after known ingestion of a foreign object. Radiographs and sometimes ultrasound or contrast study required to diagnose. Surgery often required. Delay worsens outcome significantly.</p>
          <p><strong>Pancreatitis:</strong> Inflammation of the pancreas — acute cases can be severe. Signs: vomiting, abdominal pain (dog may assume a "prayer position" — front end down, hind end up), lethargy, fever. Triggered by fatty meals. Golden Retrievers, Miniature Schnauzers, and Cocker Spaniels are predisposed. Requires IV fluids, pain management, and nil per os (no food/water initially). Diagnosis by elevated serum lipase (cPLI).</p>
          <p><strong>Parvovirus:</strong> In unvaccinated puppies — severe hemorrhagic gastroenteritis, vomiting, bloody diarrhea, lethargy. Emergency. Confirm vaccination status of any vomiting puppy.</p>

          <h2>When to Wait vs When to Go</h2>
          <p><strong>Can monitor at home (24 hours):</strong> Single vomiting episode in an otherwise alert adult dog, no blood, no known foreign body ingestion, no concurrent diarrhea, eating normally afterward.</p>
          <p><strong>Call or go to vet same day:</strong> Multiple vomiting episodes over several hours, not keeping water down, mild lethargy.</p>
          <p><strong>Emergency — go immediately:</strong> Unproductive retching (especially large breeds — GDV), blood in vomit, severe lethargy, vomiting after foreign body ingestion, distended abdomen, pale gums, puppy that cannot keep anything down.</p>

          <h2 id="kit">Bland-diet prep kit</h2>
          <p>Everyday kitchen supplies that match the home-monitor copy above — a mini rice cooker so you can make a small batch of plain white rice after the 6–12 hour withhold, plus glass meal-prep containers for leftover bland-diet portions and the small bedtime snack used for bilious vomiting. These are prep tools, not treatments. They do not stop vomiting, they do not replace fasting or veterinary examination, and they do not treat GDV, obstruction, pancreatitis, or parvovirus. Anti-nausea medication (Cerenia / maropitant and similar), prescription GI diets (Hill&apos;s i/d, Royal Canin Gastrointestinal, and similar), probiotics, and plain canned pumpkin stay educational copy only — probiotics and pumpkin stay on the sister <a href="/health/dog-diarrhea">dog diarrhea</a> page. Slow-feeder bowls stay on <a href="/health/dog-obesity">dog obesity</a>. Bailey chairs and upright feeding chairs stay on <a href="/health/megaesophagus">megaesophagus</a>. Elevated bowls stay off this page. This page does not claim hands-on testing.</p>

          <AffiliateDisclosure variant="inline" siteId="dog-com" />

          {/* Money path — live amazon-brand search hops (mini
              rice cooker / glass meal-prep containers). ShopCtas
              hides empty Chewy; never href="#" or PLACEHOLDER.
              Category searches only. Anti-nausea Rx, prescription
              GI diets, probiotics, pumpkin, slow-feeders,
              elevated bowls, and Bailey chairs are not
              shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the dog-vomiting bland-diet prep kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the on-page
              home-monitor copy — a mini rice cooker and glass
              meal-prep containers. Everyday physical gear only.
              They are not a ranked product list, they are not
              medications, they are not prescription GI-diet
              ASINs, they are not probiotics or pumpkin, they
              are not slow-feeders, elevated bowls, or Bailey
              chairs, and they do not replace a veterinarian.
              Dog.com earns a commission on qualifying purchases
              at no extra cost to you. Empty Chewy buttons stay
              hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/mini+rice+cooker?s=health-dog-vomiting"
                amazonLabel="Browse mini rice cookers on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/glass+meal+prep+containers?s=health-dog-vomiting"
                amazonLabel="Browse glass meal-prep containers on Amazon →"
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

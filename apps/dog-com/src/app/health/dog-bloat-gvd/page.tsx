import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'
const SOURCES = [
  { label: 'Merck Veterinary Manual: Gastric Dilation and Volvulus in Small Animals', url: 'https://www.merckvetmanual.com/digestive-system/diseases-of-the-stomach-and-intestines-in-small-animals/gastric-dilation-and-volvulus-in-small-animals', publisher: 'Merck Vet Manual' },
  { label: 'Glickman LT et al. Non-dietary risk factors for gastric dilatation-volvulus in large and giant breed dogs. J Am Vet Med Assoc. 2000;217(10):1492-1499.', publisher: 'JAVMA' },
  { label: 'AVMA: Bloat (Gastric Dilatation and Volvulus) in Dogs', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/bloat-dogs', publisher: 'AVMA' },
  { label: 'Brockman DJ et al. Canine gastric dilatation-volvulus syndrome in a veterinary critical care unit: 295 cases (1986-1992). J Am Vet Med Assoc. 1995;207(4):460-464.', publisher: 'JAVMA' },
]


export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'GDV (Bloat) in Dogs — Signs, Emergency Response | Dog.com', description: 'Gastric dilatation-volvulus (GDV) kills within hours without surgery. Know the signs — unproductive retching, distended abdomen — and act immediately.', path: '/health/dog-bloat-gvd', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'GDV (Bloat) in Dogs', description: 'Signs, emergency response, and prevention for gastric dilatation-volvulus.', url: 'https://dog.com/health/dog-bloat-gvd', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-11T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'GDV (Bloat) in Dogs', description: 'Emergency signs and prevention for canine gastric dilatation-volvulus.', url: 'https://dog.com/health/dog-bloat-gvd', authorName: 'Dog.com Editorial', lastReviewed: '2025-05-01' })
const FAQS = [
  { question: 'What are the first signs of bloat (GDV) in a dog?', answer: 'The most important early sign is unproductive retching — the dog repeatedly tries to vomit but brings up nothing, or only white foam. In approximate order, the other signs are: visible abdominal distension (hard, drum-like when tapped), extreme restlessness and inability to settle, excessive drooling, and pale or white gums (already a sign of shock). In a large or deep-chested breed, unproductive retching alone is reason to go to the emergency vet immediately — do not wait for the other signs.' },
  { question: 'How long does a dog with bloat have without treatment?', answer: 'GDV is fatal without emergency surgery, typically within 4–6 hours of onset. Time is measured in hours: the twisted stomach traps gas, cuts off blood supply to the stomach wall, obstructs venous return to the heart, and rapidly causes cardiovascular shock. If you suspect GDV, the page above says it directly — stop reading, call ahead, and go to the emergency vet now.' },
  { question: 'Which dog breeds are most at risk of GDV?', answer: 'Large, deep-chested breeds with a chest depth-to-width ratio greater than 1.4. Great Danes carry the highest risk — a lifetime GDV risk of approximately 37% (Glickman et al., JAVMA 2000). Standard Poodles, German Shepherds, Irish and Gordon Setters, Weimaraners, Saint Bernards, Irish Wolfhounds, Bloodhounds, Dobermans, Rottweilers, and other large breeds are also at significantly elevated risk.' },
  { question: 'Can bloat in dogs be prevented?', answer: 'Risk can be meaningfully reduced: feed twice daily rather than once (once-daily feeding is a documented risk factor), use a slow-feeder bowl for fast eaters, and know your dog\'s breed risk. The most definitive option is prophylactic gastropexy — surgically attaching the stomach to the abdominal wall so it cannot twist. It can be done laparoscopically at the time of spay or neuter for roughly $300–500, versus $5,000–15,000+ for emergency GDV treatment. Ask your vet whether your dog\'s breed is a candidate.' },
  { question: 'Can a dog survive GDV with surgery?', answer: 'Yes — with prompt treatment at a well-equipped emergency facility, survival rates are 80–95%. Survival drops significantly with delayed treatment or when the stomach wall tissue has been deprived of blood long enough to become necrotic. This is why acting on the first sign (unproductive retching) rather than waiting matters so much.' },
]

const combined = combineSchemas(schema, med, buildFAQSchema({ questions: FAQS.map(f => ({ question: f.question, answer: f.answer })) }))

const HIGH_RISK_BREEDS = ['Great Dane (highest risk)', 'Standard Poodle', 'German Shepherd', 'Irish Setter', 'Gordon Setter', 'Weimaraner', 'Saint Bernard', 'Irish Wolfhound', 'Bloodhound', 'Doberman Pinscher', 'Rottweiler', 'Labrador Retriever', 'Old English Sheepdog', 'Basset Hound']

export default function GdvPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'GDV (Bloat) in Dogs — Emergency Guide', subtitle: 'Gastric dilatation-volvulus is fatal without emergency surgery, typically within 4–6 hours of onset. The signs are specific. Knowing them in advance is the difference between life and death.', category: 'Emergency Guide', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '8 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: 'GDV / Bloat', href: '/health/dog-bloat-gvd' }]}
        relatedLinks={[{ title: 'Dog Health Hub', href: '/health', category: 'Hub' }, { title: 'German Shepherd Health', href: '/health/german-shepherd-health', category: 'Dog Health' }, { title: 'Dog Symptoms Guide', href: '/health/dog-symptoms-guide', category: 'Dog Health' }, { title: 'Dog Vomiting Guide', href: '/health/dog-vomiting', category: 'Dog Health' }]}
        sidebar={<>
          <div className="bg-brand-danger/5 border border-brand-danger/20 rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-danger mb-2">Emergency Signs — Go Now</div>
            <ul className="text-xs text-brand-text-mid space-y-1.5 m-0 p-0 list-none">
              {['Unproductive retching', 'Distended hard abdomen', 'Extreme restlessness', 'Excessive drooling', 'Pale or white gums'].map(s => (
                <li key={s} className="flex items-center gap-2"><span className="text-brand-danger font-bold">→</span>{s}</li>
              ))}
            </ul>
          </div>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Highest Risk Breeds</div>
            <div className="text-xs text-brand-text-mid space-y-1">
              {HIGH_RISK_BREEDS.slice(0, 6).map(b => <div key={b}>{b}</div>)}
              <div className="text-brand-text-light italic">+ 8 more large breeds</div>
            </div>
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Emergency Symptoms Guide', href: '/health/dog-symptoms-guide' }, { label: 'Find Emergency Vet', href: '/find-a-vet' }, { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' }]} />
          <CrossPortfolioCard currentSite="dog-com" contentType="health" variant="sidebar" />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="health-gdv" />
        </>}
      >
        <div className="carloOS-article">
          <div style={{ background: 'rgba(200,74,42,0.06)', border: '1px solid rgba(200,74,42,0.25)', borderRadius: '10px', padding: '16px 20px', marginBottom: '24px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C84A2A', marginBottom: '8px' }}>Action First</div>
            <p style={{ fontSize: '14px', color: 'var(--brand-text-mid)', margin: 0, lineHeight: 1.65 }}>If your dog is retching unproductively with a distended abdomen — stop reading and go to the emergency vet. Call ahead so they can prepare. Time is measured in hours. Read this guide later, when your dog is safe.</p>
          </div>

          <h2>What GDV Is</h2>
          <p>Gastric dilatation-volvulus (GDV) occurs in two stages. First, the stomach dilates — fills with gas, fluid, or food and expands beyond normal capacity. Second, and catastrophically, the stomach twists on its mesenteric axis (volvulus) — rotating up to 360 degrees. This rotation traps the gas inside (no exit through esophagus or pylorus), cuts off blood supply to the stomach wall, compresses the spleen and its blood supply, obstructs venous return to the heart, and rapidly causes cardiovascular shock. Without surgery to untwist the stomach, correct the blood supply, and assess stomach wall viability, GDV is uniformly fatal.</p>

          <h2>Signs — In Approximate Order of Appearance</h2>
          <ol>
            <li><strong>Unproductive retching</strong> — the dog attempts to vomit repeatedly, bringing nothing up or producing only white foam. This is the most important early sign. Do not wait for other signs. In large and deep-chested breeds, unproductive retching = emergency vet immediately.</li>
            <li><strong>Abdominal distension</strong> — the abdomen visually expands and feels hard or drum-like when tapped. May not be obvious in early stages or in muscular dogs.</li>
            <li><strong>Restlessness</strong> — the dog cannot settle, paces, looks at its flank, appears distressed. Unable to find a comfortable position.</li>
            <li><strong>Hypersalivation</strong> — excessive drooling from distress and nausea.</li>
            <li><strong>Pale or white gums</strong> — indicates cardiovascular shock from blood supply compromise. At this stage the dog is in critical condition.</li>
            <li><strong>Rapid deterioration</strong> — weakness, collapse, death without intervention.</li>
          </ol>

          <h2>Risk Factors</h2>
          <p><strong>Breed</strong> is the strongest risk factor — large, deep-chested breeds with a depth-to-width chest ratio greater than 1.4 are most at risk. Great Danes have a lifetime GDV risk of approximately 37% (Glickman et al., JAVMA 2000). Standard Poodles, Irish Setters, Gordon Setters, Weimaraners, Saint Bernards, and German Shepherds are all significantly elevated risk.</p>
          <p>Other risk factors with research support: eating once daily (twice daily feeding reduces risk), eating rapidly (use a slow feeder bowl), family history of GDV, prior splenic disease, anxious or fearful temperament. Exercise immediately after eating has been suggested but the evidence is less conclusive than breed and feeding frequency.</p>

          <h2>Treatment</h2>
          <p>Emergency stabilization: IV fluids, pain management, gastric decompression (passing a tube to release gas or trocharization through the body wall). Emergency surgery: the stomach is repositioned and sutured to the body wall to prevent re-rotation (gastropexy). Non-viable stomach tissue is resected if blood supply was compromised long enough to cause necrosis. The spleen may require removal if compromised.</p>
          <p>Survival rates with prompt treatment at well-equipped emergency facilities: 80–95%. Survival rates with delayed treatment or compromised stomach tissue: significantly lower. Cost: $5,000–15,000+ depending on severity and institution.</p>

          <h2>Prevention — Prophylactic Gastropexy</h2>
          <p>Prophylactic gastropexy is a surgical procedure that permanently attaches the stomach to the abdominal wall, preventing the torsion (twisting) component of GDV. It does not prevent the stomach from dilating (the first stage) but eliminates the life-threatening second stage. It can be performed laparoscopically (minimally invasive) at the time of spay or neuter, adding $300–500 to the procedure cost.</p>
          <p>For any large or giant breed dog — particularly Great Danes, Standard Poodles, Setters, Weimaraners, and German Shepherds — the conversation about prophylactic gastropexy should happen at the spay/neuter appointment. The cost-benefit calculation strongly favors the procedure for high-risk breeds: a $400 prophylactic surgery versus a $10,000+ emergency procedure if GDV occurs.</p>
          <p>Ask your vet: <em>"Is my dog's breed a candidate for prophylactic gastropexy? Can it be performed with the spay/neuter?"</em></p>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}

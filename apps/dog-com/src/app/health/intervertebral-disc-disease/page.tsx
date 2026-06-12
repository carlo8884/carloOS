import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'
const SOURCES = [
  { label: 'Merck Veterinary Manual: Intervertebral Disk Disease in Dogs and Cats', url: 'https://www.merckvetmanual.com/nervous-system/spinal-cord-diseases/intervertebral-disk-disease-in-dogs-and-cats', publisher: 'Merck Vet Manual' },
  { label: 'ACVS: American College of Veterinary Surgeons — Intervertebral Disc Disease', url: 'https://www.acvs.org/small-animal/intervertebral-disc-disease', publisher: 'ACVS' },
  { label: 'AVMA: Intervertebral Disc Disease (IVDD) in Dogs', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/common-health-conditions-dogs', publisher: 'AVMA' },
  { label: 'Brisson BA. Intervertebral disc disease in dogs. Vet Clin North Am Small Anim Pract. 2010;40(5):829-858.', publisher: 'Vet Clinics Small Animal Practice' },
]

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'IVDD in Dogs — Intervertebral Disc Disease Signs | Dog.com', description: 'IVDD causes back pain to paralysis in chondrodystrophic dogs. The surgical window is 24-48 hours for best recovery. Signs, grades, and rehabilitation guide.', path: '/health/intervertebral-disc-disease', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Intervertebral Disc Disease (IVDD) in Dogs', description: 'Signs, grading, surgical timing, and rehabilitation for canine IVDD.', url: 'https://dog.com/health/intervertebral-disc-disease', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-11T00:00:00Z' ,
  citation: SOURCES,
})
const med = buildMedicalWebPageSchema({ name: 'Intervertebral Disc Disease in Dogs', description: 'IVDD signs, grades, surgical indications, and rehabilitation.', url: 'https://dog.com/health/intervertebral-disc-disease', authorName: 'Dog.com Editorial', lastReviewed: '2025-05-01' })
const FAQS = [
  { question: 'Is IVDD in dogs an emergency?', answer: 'Any hind limb weakness, stumbling, inability to walk, dragging of the rear legs, or loss of bladder/bowel control in a Dachshund, Corgi, French Bulldog, or other chondrodystrophic breed requires emergency veterinary evaluation immediately — not in the morning, not after the weekend. The chance of neurological recovery with surgery falls significantly the longer the spinal cord is compressed; the window is roughly 24–48 hours, and a Grade 4 dog operated within 12 hours has an 85–90% chance of walking again versus a significantly lower rate at 72 hours. Call ahead while driving.' },
  { question: 'Can IVDD be treated without surgery?', answer: 'Grade 1 IVDD — pain only, with a normal gait — can be managed conservatively: strict crate rest for 4–6 weeks plus veterinarian-prescribed NSAIDs, and approximately 80% of Grade 1 dogs improve. The catch is what "strict" means: in a crate except brief leashed toilet walks, no furniture, no stairs, no play. Insufficient restriction is the most common reason conservative management fails. If the dog is not improving or worsens at any point, reassess with a neurologist immediately. Grades 2 and above are surgical recommendations.' },
  { question: 'What are the chances my dog walks again after IVDD surgery?', answer: 'By neurological grade, from this page: Grade 3 (non-ambulatory with voluntary movement) — 85–90% return to walking with urgent surgery. Grade 4 (paralysis with deep pain sensation intact) — 50–80% with prompt emergency surgery. Grade 5 (paralysis with loss of deep pain) carries a guarded prognosis and needs surgery within hours for any chance of recovery. Post-surgical rehabilitation — underwater treadmill, electrical stimulation, therapeutic exercise — measurably improves outcomes; recovery runs 2–8 weeks for Grades 2–3 and 3–6+ months for Grades 4–5.' },
  { question: 'Which dog breeds are most at risk for IVDD?', answer: 'Chondrodystrophic breeds — dogs bred for shortened, bowed legs whose discs mineralize abnormally early: Dachshunds (the most affected), Corgis, Beagles, Basset Hounds, and French Bulldogs. These breeds get sudden Type I disc extrusions. Large non-chondrodystrophic breeds like German Shepherds and Labradors develop Type II IVDD — gradual disc protrusion that progresses more slowly, though the same neurological grades apply.' },
  { question: 'How is IVDD diagnosed?', answer: 'MRI is the gold standard — it localizes the affected disc precisely, shows the degree of spinal cord compression, and is required for surgical planning. CT myelography is the alternative where MRI is unavailable. Plain X-rays can show narrowed disc spaces and mineralized discs but cannot visualize the cord compression itself, so a dog with neurological signs needs advanced imaging at a referral or emergency hospital.' },
]
const combined = combineSchemas(schema, med, buildFAQSchema({ questions: FAQS.map(f => ({ question: f.question, answer: f.answer })) }))
export default function IVDDPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'Intervertebral Disc Disease (IVDD)', subtitle: 'IVDD is the most serious orthopedic condition in chondrodystrophic breeds — Dachshunds, Corgis, Beagles, Basset Hounds, French Bulldogs, and others. When a disc herniates into the spinal canal, the neurological window for surgical recovery is 24–48 hours. Speed matters more than almost anything else in this condition.', category: 'Dog Health', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '10 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: 'IVDD', href: '/health/intervertebral-disc-disease' }]}
        relatedLinks={[{ title: 'Dog Health Hub', href: '/health', category: 'Hub' }, { title: 'Dog Luxating Patella', href: '/health/dog-luxating-patella', category: 'Dog Health' }, { title: 'French Bulldog Health', href: '/health/french-bulldog-health', category: 'Dog Health' }, { title: 'Dog Arthritis', href: '/health/dog-arthritis', category: 'Dog Health' }]}
        sidebar={<>
          <div className="bg-brand-danger/5 border border-brand-danger/20 rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-danger mb-2">Emergency Signs — Go Now</div>
            <ul className="text-xs text-brand-text-mid space-y-1.5 m-0 p-0 list-none">
              {['Any hind limb weakness', 'Stumbling or ataxia', 'Inability to walk on hind limbs', 'Loss of bladder/bowel control', 'Dragging hind legs'].map(s => <li key={s} className="flex gap-2"><span className="text-brand-danger font-bold">→</span>{s}</li>)}
            </ul>
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Dachshund Breed Guide', href: '/breeds/dachshund' }, { label: 'French Bulldog Health', href: '/breeds/french-bulldog' }, { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' }]} />
          <CrossPortfolioCard currentSite="dog-com" contentType="health" variant="sidebar" />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="health-ivdd" />
        </>}
      >
        <div className="carloOS-article">
          <h2>What IVDD Is</h2>
          <p>Intervertebral discs are cartilaginous cushions between each vertebra of the spine. In chondrodystrophic breeds — dogs genetically selected for shortened, bowed legs (Dachshunds being the most affected) — the nucleus of these discs mineralizes and hardens abnormally early in life. Mineralized discs lose their shock-absorbing quality and are prone to sudden extrusion (Type I IVDD) into the spinal canal, where they compress the spinal cord.</p>
          <p>Non-chondrodystrophic breeds develop Type II IVDD — gradual fibrous disc protrusion over time rather than sudden extrusion — which is more common in large breeds like German Shepherds and Labrador Retrievers. Type II is generally slower in progression and somewhat less surgically urgent, though the neurological grades still apply.</p>

          <h2>Neurological Grades</h2>
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {[
              { g: 'Grade 1', desc: 'Back or neck pain only. Normal gait. No neurological deficits.', tx: 'Strict crate rest 4-6 weeks + NSAIDs. Surgical indications if not improving.' },
              { g: 'Grade 2', desc: 'Pain + mild paresis (weakness). Dog walks but with difficulty.', tx: 'Surgery strongly recommended. Good prognosis with prompt surgery.' },
              { g: 'Grade 3', desc: 'Non-ambulatory — cannot walk but has voluntary movement.', tx: 'Surgery urgently recommended. 85-90% return to walking.' },
              { g: 'Grade 4', desc: 'Paralysis. No voluntary movement but deep pain present.', tx: 'Emergency surgery. 50-80% return to walking with prompt surgery.' },
              { g: 'Grade 5', desc: 'Paralysis + loss of deep pain sensation. Worst prognosis.', tx: 'Surgery within hours for any chance of recovery. Prognosis guarded.' },
            ].map(item => (
              <div key={item.g} className="bg-brand-surface border border-brand-border rounded-lg p-4">
                <div className="font-bold text-brand-dark text-sm mb-1">{item.g}</div>
                <p className="text-xs text-brand-text-mid leading-relaxed mb-2 m-0">{item.desc}</p>
                <div className="text-2xs font-semibold text-brand-primary">{item.tx}</div>
              </div>
            ))}
          </div>

          <h2>The 24-48 Hour Window</h2>
          <p>For Grades 3, 4, and especially 5: the chance of neurological recovery with surgery decreases significantly the longer the spinal cord is compressed. Neural tissue deprived of blood supply beyond approximately 24–48 hours may undergo irreversible damage even with technically perfect decompression surgery. A Grade 4 dog that receives surgery within 12 hours of symptom onset has an 85-90% chance of returning to walking. A Grade 4 dog that receives surgery at 72 hours has a significantly lower recovery rate.</p>
          <p>This is why any Dachshund, Corgi, French Bulldog, or other chondrodystrophic breed showing hind limb weakness, stumbling, or inability to walk requires emergency veterinary evaluation immediately — not in the morning, not after the weekend. Call ahead while driving.</p>

          <h2>Diagnosis</h2>
          <p>MRI is the gold standard for IVDD diagnosis — it precisely localizes the affected disc, shows the degree of spinal cord compression, and is required for surgical planning. CT myelography (CT scan after contrast injection into the spinal canal) is an alternative when MRI is not available. Plain radiographs can show narrowed disc spaces and mineralized discs but cannot directly visualize soft tissue compression.</p>

          <h2>Conservative Management — Grade 1</h2>
          <p>Grade 1 IVDD (pain only, normal gait) can be managed conservatively with strict crate rest (no jumping, stairs, or running — truly strict confinement) for 4–6 weeks combined with NSAIDs for pain and inflammation. Approximately 80% of Grade 1 dogs improve with strict rest. "Strict rest" means: in a crate except for brief leashed toilet walks, no furniture access, no playing with other dogs. Many owners underestimate what strict means — insufficient restriction is the most common reason conservative management fails. If the dog is not improving or worsening at any point during conservative management, reassess with a neurologist immediately.</p>

          <h2>Rehabilitation After Surgery</h2>
          <p>Post-surgical rehabilitation significantly improves outcomes. Hydrotherapy (underwater treadmill — allows weight-bearing movement before the dog can walk on land), neuromuscular electrical stimulation, therapeutic exercises, and massage all contribute to faster recovery. A certified canine rehabilitation therapist (CCRP or CCRT) designs the protocol. Recovery timeline varies: Grade 2-3 dogs typically regain ambulation within 2–8 weeks post-surgery. Grade 4-5 dogs may take 3–6 months or longer. Bladder management (manual expression or catheterization for dogs that cannot urinate voluntarily) is a critical component of post-surgical care that owners must learn.</p>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}

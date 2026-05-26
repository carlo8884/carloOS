import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'IVDD in Dogs — Intervertebral Disc Disease Signs, Surgery & Recovery | Dog.com', description: 'IVDD causes back pain to paralysis in chondrodystrophic dogs. The surgical window is 24-48 hours for best recovery. Signs, grades, and rehabilitation guide.', path: '/health/intervertebral-disc-disease', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Intervertebral Disc Disease (IVDD) in Dogs', description: 'Signs, grading, surgical timing, and rehabilitation for canine IVDD.', url: 'https://dog.com/health/intervertebral-disc-disease', imageUrl: '', authorName: 'Dr. Amanda Reyes, DVM, DACVIM', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Intervertebral Disc Disease in Dogs', description: 'IVDD signs, grades, surgical indications, and rehabilitation.', url: 'https://dog.com/health/intervertebral-disc-disease', authorName: 'Dr. Amanda Reyes, DVM, DACVIM', lastReviewed: '2025-05-01' })
const combined = combineSchemas(schema, med)
export default function IVDDPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'Intervertebral Disc Disease (IVDD)', subtitle: 'IVDD is the most serious orthopedic condition in chondrodystrophic breeds — Dachshunds, Corgis, Beagles, Basset Hounds, French Bulldogs, and others. When a disc herniates into the spinal canal, the neurological window for surgical recovery is 24–48 hours. Speed matters more than almost anything else in this condition.', category: 'Dog Health', authorName: 'Dr. Amanda Reyes, DVM, DACVIM', authorCredentials: 'Internal Medicine Specialist', authorAvatar: '👩‍⚕️', publishedAt: 'May 2025', readTime: '10 min', dvmReviewed: true }}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: 'IVDD', href: '/health/intervertebral-disc-disease' }]}
        sidebar={<>
          <div className="bg-brand-danger/5 border border-brand-danger/20 rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-danger mb-2">Emergency Signs — Go Now</div>
            <ul className="text-xs text-brand-text-mid space-y-1.5 m-0 p-0 list-none">
              {['Any hind limb weakness', 'Stumbling or ataxia', 'Inability to walk on hind limbs', 'Loss of bladder/bowel control', 'Dragging hind legs'].map(s => <li key={s} className="flex gap-2"><span className="text-brand-danger font-bold">→</span>{s}</li>)}
            </ul>
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Dachshund Breed Guide', href: '/breeds/dachshund' }, { label: 'French Bulldog Health', href: '/breeds/french-bulldog' }, { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' }]} />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="DVM-written guidance weekly." source="health-ivdd" />
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
        </div>
      </ArticleLayout>
    </>
  )
}

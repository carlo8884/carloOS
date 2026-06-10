import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'
const SOURCES = [
  { label: 'Merck Veterinary Manual: Patellar Luxation in Dogs and Cats', url: 'https://www.merckvetmanual.com/musculoskeletal-system/joint-diseases-of-dogs-and-cats/patellar-luxation-in-dogs-and-cats', publisher: 'Merck Vet Manual' },
  { label: 'AVMA: Luxating Patella (Slipping Kneecap) in Dogs', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/common-health-conditions-dogs', publisher: 'AVMA' },
  { label: 'ACVS: American College of Veterinary Surgeons — Patellar Luxation', url: 'https://www.acvs.org/small-animal/patellar-luxation', publisher: 'ACVS' },
  { label: 'Willauer CC, Vasseur PB. Clinical results of surgical correction of medial luxation of the patella in dogs. Vet Surg. 1987;16(1):31-36.', publisher: 'Vet Surgery' },
]


export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Luxating Patella in Dogs — Grades, Surgery | Dog.com', description: 'Luxating patella (slipping kneecap) is the most common orthopedic condition in small dogs. Grades 1-4, when surgery is needed.', path: '/health/dog-luxating-patella', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Luxating Patella in Dogs', description: 'Grades, surgical indications, and breed predisposition for luxating patella in dogs.', url: 'https://dog.com/health/dog-luxating-patella', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Luxating Patella in Dogs', description: 'Grading system, surgical indications, and treatment for patellar luxation.', url: 'https://dog.com/health/dog-luxating-patella', authorName: 'Dog.com Editorial', lastReviewed: '2025-05-01' })
const combined = combineSchemas(schema, med)

export default function LuxatingPatellaPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'Luxating Patella in Dogs', subtitle: 'The patella (kneecap) normally sits in a groove (trochlear groove) at the end of the femur. In dogs with luxating patella, the kneecap slips out of this groove — medially (inward) in most small dogs. The classic presentation: a small dog that skips on three legs for a few steps, then returns to normal.', category: 'Dog Health', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: 'Luxating Patella', href: '/health/dog-luxating-patella' }]}
        relatedLinks={[{ title: 'Dog Health Hub', href: '/health', category: 'Hub' }, { title: 'Dog Arthritis', href: '/health/dog-arthritis', category: 'Dog Health' }, { title: 'Intervertebral Disc Disease', href: '/health/intervertebral-disc-disease', category: 'Dog Health' }, { title: 'French Bulldog Health', href: '/health/french-bulldog-health', category: 'Dog Health' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Most Affected Breeds</div>
            {['Yorkshire Terrier', 'Pomeranian', 'Chihuahua', 'Toy & Miniature Poodle', 'Maltese', 'Boston Terrier', 'Pekingese', 'Shih Tzu', 'Bichon Frise'].map(b => (
              <div key={b} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid">{b}</div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Dog Arthritis', href: '/health/dog-arthritis' }, { label: 'Best Joint Supplements', href: '/reviews/best-joint-supplements' }, { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' }]} />
          <CrossPortfolioCard currentSite="dog-com" contentType="health" variant="sidebar" />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="health-luxating-patella" />
        </>}
      >
        <div className="carloOS-article">
          <h2>The Grading System — Grades 1 Through 4</h2>
          <p>Luxating patella is graded from 1–4 based on severity, and the grade guides treatment decisions:</p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {[
              { grade: 'Grade 1', desc: 'Patella manually displaced but returns spontaneously. No or minimal clinical signs. Many dogs never progress beyond this.', tx: 'Monitor. Weight management. No surgery typically needed.' },
              { grade: 'Grade 2', desc: 'Patella luxates with joint movement or manual pressure. Returns spontaneously. Intermittent skipping gait. Cartilage damage begins.', tx: 'Surgery recommended if causing clinical signs or progressive cartilage damage.' },
              { grade: 'Grade 3', desc: 'Patella permanently luxated but can be manually replaced. Limb frequently carried. Significant cartilage and bone changes.', tx: 'Surgery strongly recommended.' },
              { grade: 'Grade 4', desc: 'Patella permanently luxated, cannot be manually replaced. Significant skeletal deformity. Limb non-weight-bearing.', tx: 'Surgery required — complex reconstruction.' },
            ].map(g => (
              <div key={g.grade} className="bg-brand-surface border border-brand-border rounded-lg p-4">
                <div className="font-bold text-brand-dark text-sm mb-1">{g.grade}</div>
                <p className="text-xs text-brand-text-mid leading-relaxed mb-2 m-0">{g.desc}</p>
                <div className="text-2xs font-semibold text-brand-primary">{g.tx}</div>
              </div>
            ))}
          </div>

          <h2>Why Small Breeds Are Predisposed</h2>
          <p>Luxating patella in small dogs is primarily genetic — a heritable conformational abnormality where the tibial crest (where the patellar tendon attaches) is positioned medially (inward) of its normal position, pulling the patella off the normal tracking path. Associated abnormalities: a shallow or absent trochlear groove (the groove the patella sits in), medial bowing of the femur, and internal rotation of the tibia. These abnormalities develop during growth and are influenced by both genetics and body weight during the developmental period.</p>
          <p>Large breeds also develop luxating patella — German Shepherds, Labrador Retrievers, and Golden Retrievers can develop lateral patellar luxation (outward displacement rather than inward) which carries different surgical implications. Large breed patellar luxation is frequently associated with cruciate ligament disease.</p>

          <h2>Surgical Correction</h2>
          <p>Surgery for luxating patella typically involves one or more procedures performed simultaneously: <strong>trochlear recession</strong> (deepening the groove the patella sits in — either trochlear wedge recession or block recession), <strong>tibial crest transposition</strong> (moving the tibial crest to realign the pull of the patellar tendon toward the center rather than the inside), and in severe cases, <strong>femoral or tibial osteotomy</strong> (corrective bone cuts to address the underlying skeletal deformity).</p>
          <p>Surgery is performed by a board-certified veterinary surgeon (DACVS) or an experienced general practitioner with orthopedic training for uncomplicated Grade 2 cases. Grades 3 and 4 and large breed cases should be referred to a specialist. Post-operative: strict exercise restriction for 6–8 weeks, controlled leash walks, physical rehabilitation to rebuild muscle. Prognosis with surgery is excellent for Grade 2–3 cases — the majority of dogs return to normal or near-normal function.</p>

          <h2>Without Surgery — Grade 1 and Monitoring</h2>
          <p>Grade 1 luxating patella in a dog with minimal clinical signs does not necessarily require surgery. Management: maintain lean body weight (reduces force across the joint with every step), joint supplementation (Dasuquin Advanced — glucosamine and chondroitin), omega-3 fatty acids (EPA/DHA from fish oil — anti-inflammatory), and monitoring every 6 months to assess for progression. If the dog begins showing more frequent skipping, increased lameness, or significant cartilage wear (visible on radiograph), surgical intervention should be reconsidered.</p>
          <p>Exercise modification during flares — reduce high-impact jumping and running during symptomatic periods. Low-impact activity (leash walks, swimming) maintains muscle mass without worsening the joint.</p>

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}

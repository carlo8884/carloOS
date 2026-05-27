import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: "Cherry Eye in Dogs — What It Is, Surgery | Dog.com", description: "Cherry eye is prolapse of the nictitating membrane gland.", path: '/health/cherry-eye', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Cherry Eye in Dogs', description: 'Prolapsed third eyelid gland — causes, surgical correction, and why manual replacement fails.', url: 'https://dog.com/health/cherry-eye', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Cherry Eye in Dogs', description: 'Prolapsed nictitating membrane gland — causes and surgical treatment.', url: 'https://dog.com/health/cherry-eye', authorName: 'Dog.com Editorial', lastReviewed: '2025-05-01' })
const combined = combineSchemas(schema, med)

const FAQS = [
  { question: 'Can I push cherry eye back in myself?', answer: 'Manual replacement is a temporary measure at best. The connective tissue that holds the gland in place is weakened or absent in dogs that develop cherry eye — pushing the gland back will not restore that attachment. Most manually replaced glands re-prolapse within days to weeks. The only permanent solution is surgical correction, ideally performed by an ophthalmologist. Some veterinarians will show owners a temporary replacement technique to use until surgery can be scheduled, but this should not replace surgical correction.' },
  { question: 'Can cherry eye be left untreated?', answer: 'Cherry eye can be left untreated without immediate danger in most cases — it is not acutely painful. However, the exposed gland dries out, becomes chronically inflamed, and loses functional tissue over time. Long-term consequences: reduced tear production (the prolapsed gland produces approximately 30-50% of total tear film), which can lead to keratoconjunctivitis sicca (dry eye) requiring lifelong medication. Early surgical correction preserves more glandular function. Leaving cherry eye untreated long-term is not recommended.' },
  { question: 'Does cherry eye come back after surgery?', answer: 'With the pocket technique (gland replacement and suturing), re-prolapse rates are 5-20% depending on technique and surgeon experience. With gland removal (excision), re-prolapse cannot occur but dry eye is a significant long-term consequence as 30-50% of tear production is removed. The pocket technique is preferred for this reason — the gland is preserved even at the cost of some recurrence risk.' },
]

export default function CherryEyePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'Cherry Eye in Dogs', subtitle: 'That red mass appearing at the inner corner of your dog\'s eye is cherry eye — the prolapse of the third eyelid gland (nictitating membrane gland). It looks alarming but is not immediately painful. It does, however, require surgical correction — not manual replacement, which almost always fails.', category: 'Dog Health', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '8 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: 'Cherry Eye', href: '/health/cherry-eye' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Most Affected Breeds</div>
            {['Bulldog (English)', 'French Bulldog', 'Beagle', 'Cocker Spaniel', 'Boston Terrier', 'Shar-Pei', 'Bloodhound', 'Lhasa Apso', 'Shih Tzu'].map(b => (
              <div key={b} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid">{b}</div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Bulldog Health', href: '/breeds/bulldog' }, { label: 'French Bulldog Health', href: '/breeds/french-bulldog' }, { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' }]} />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="health-cherry-eye" />
        </>}
      >
        <div className="carloOS-article">
          <h2>What Cherry Eye Is</h2>
          <p>Dogs have a third eyelid (nictitating membrane) in the inner corner of each eye. Inside this membrane sits a gland — the nictitating membrane gland (also called the third eyelid gland or Harderian gland) — that produces approximately 30–50% of the dog's total tear film. This gland is held in place by a small ligament and connective tissue. In dogs genetically predisposed to cherry eye, this anchoring system is weak or malformed — the gland pops out of position and becomes visible as a red, fleshy oval mass at the inner corner of the eye.</p>
          <p>Cherry eye most commonly occurs in young dogs (under 2 years) and may affect one or both eyes. It is not immediately painful, though the exposed gland becomes chronically irritated and inflamed, and the dog may paw at the eye. The mass is easily visible — owners notice it suddenly and often describe it as appearing overnight.</p>

          <h2>Why Manual Replacement Doesn't Work</h2>
          <p>The instinct to push the gland back into position is understandable — and it usually works temporarily. The problem is structural: the connective tissue that was supposed to hold the gland in position is weak or absent. There is nothing for the gland to anchor to. Most manually replaced glands re-prolapse within hours to days. Repeated manipulation of the gland without addressing the underlying structural problem also causes further inflammation and scarring, which can complicate subsequent surgery.</p>
          <p>Manual replacement is sometimes used as a short-term bridge to surgery — a veterinarian may show an owner how to temporarily reduce the prolapse to keep the gland moist until a surgical appointment. This is not a substitute for surgery.</p>

          <h2>Surgical Options</h2>
          <p><strong>Pocket technique (gland replacement and anchoring):</strong> The preferred approach. The gland is repositioned and sutured into a pocket created in the nictitating membrane, securing it in place. The gland is preserved — maintaining its tear-producing function. Re-prolapse rate: approximately 5–20% depending on technique and breed. Bulldog-type breeds have higher re-prolapse rates due to the severity of the underlying anatomical weakness. Recommended to be performed by a veterinary ophthalmologist (DACVO) for best outcomes.</p>
          <p><strong>Gland excision (removal):</strong> Removal of the prolapsed gland entirely. Eliminates re-prolapse risk but removes 30–50% of tear production capacity. The long-term consequence: keratoconjunctivitis sicca (KCS/dry eye) — insufficient tear production causing chronic eye inflammation, corneal damage, and the need for lifelong cyclosporine or tacrolimus eye drops (immunosuppressive drops that stimulate remaining tear production). This approach is now generally considered outdated for cherry eye and should only be considered when gland replacement has repeatedly failed and the gland itself has become too damaged to function.</p>

          <h2>When to See an Ophthalmologist</h2>
          <p>Cherry eye surgery can be performed by general practice veterinarians with appropriate training, but referral to a board-certified veterinary ophthalmologist (DACVO) produces better outcomes — lower re-prolapse rates, better preservation of glandular function. For brachycephalic breeds (Bulldogs, French Bulldogs) where re-prolapse rates are higher and ocular complications are more common, ophthalmologist referral is particularly advisable. Pet insurance typically covers cherry eye surgery as it is a medical condition rather than cosmetic.</p>

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />
        </div>
      </ArticleLayout>
    </>
  )
}

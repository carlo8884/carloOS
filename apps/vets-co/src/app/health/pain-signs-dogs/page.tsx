import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: '14 Signs Your Dog Is in Pain — Subtle | Vets.co', description: 'Dogs hide pain well. 14 signs — from obvious limping to subtle changes in posture, appetite, and behavior — that indicate a dog is experiencing pain.', path: '/health/pain-signs-dogs', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Signs Your Dog Is in Pain', description: '14 pain indicators in dogs — subtle and obvious signs of chronic and acute pain.', url: 'https://vets.co/health/pain-signs-dogs', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-07T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Signs Your Dog Is in Pain', description: 'Subtle and obvious pain indicators in dogs.', url: 'https://vets.co/health/pain-signs-dogs', authorName: 'Vets.co Editorial', lastReviewed: '2026-06-07' })
const combined = combineSchemas(schema, med)
const SIGNS = [
  { sign: 'Changes in posture', detail: 'A hunched back, tucked abdomen, or a stance with weight shifted away from one limb indicates pain. Dogs with abdominal pain adopt a "praying position" (front down, rear elevated). Hunched posture in a dog that normally stands upright is significant.' },
  { sign: 'Facial expression changes', detail: 'Research has validated the "Dog Grimace Scale" — dogs in pain show: narrowed eyes or partially closed eyes, tense orbital area, rounded or drawn back ears, raised cheeks, and a tense muzzle. These subtle facial changes are observable before vocalization or behavioral changes occur.' },
  { sign: 'Reluctance to be touched in specific areas', detail: 'A dog that flinches, moves away, growls, or snaps when a specific body area is touched is communicating pain at that location. Never interpret this as "bad behavior" without first ruling out pain — a dog that has never growled before that suddenly growls when touched somewhere is almost certainly in pain there.' },
  { sign: 'Changes in activity level', detail: 'Reluctance to exercise, play, or climb stairs that was previously easy; stopping more frequently on walks; a dog that always greeted you at the door now not rising — all represent activity changes that warrant investigation for pain.' },
  { sign: 'Altered gait or movement', detail: 'Limping is obvious. Subtle gait changes — short-striding on one limb, head bobbing (horses and dogs both head-bob when a forelimb is painful — the head rises when the painful limb bears weight), asymmetric movement — are harder to catch but meaningful.' },
  { sign: 'Changes in sleeping position or location', detail: 'A dog that changes where it sleeps — avoiding stairs to the bed, sleeping on the floor instead of furniture — may be avoiding movement that hurts. Changes in preferred sleeping positions can indicate which body areas are uncomfortable to lie on.' },
  { sign: 'Reduced appetite', detail: 'Pain suppresses appetite. A dog that is eating less without a clear dietary explanation warrants evaluation. Oral or dental pain specifically causes reluctance to chew, preference for wet food, or dropping food while eating.' },
  { sign: 'Excessive licking of a body area', detail: 'Dogs instinctively lick painful areas. Repeated licking of a paw, joint, or body area — especially if the area appears normal — indicates pain at that location. Hot spots frequently originate from licking that started as pain behavior before becoming self-perpetuating.' },
  { sign: 'Vocalization', detail: 'Whimpering, yelping when touched or moved, groaning when lying down or rising. Many stoic dogs vocalize only in significant acute pain — chronic pain may produce minimal vocalization even when substantial.' },
  { sign: 'Aggression or personality change', detail: 'New-onset aggression, particularly when a specific body area is approached or touched, is pain behavior in a significant proportion of dogs brought to veterinary behaviorists. Rule out pain before attributing unexplained aggression to behavioral causes.' },
  { sign: 'Restlessness or inability to settle', detail: 'A dog that cannot find a comfortable position, repeatedly lies down and rises, or paces — particularly at night — may be experiencing pain that prevents sustained rest.' },
  { sign: 'Shallow or labored breathing', detail: 'Chest or abdominal pain causes shallow breathing (expanding the chest or abdomen hurts). Panting at rest without heat or exercise — particularly in a stoic dog — is a pain indicator worth investigating.' },
  { sign: 'Squinting or pawing at the face', detail: 'Eye pain — corneal ulcer, glaucoma, uveitis — causes squinting, rubbing at the eye or face, and discharge. Any squinting eye in a dog warrants same-day veterinary evaluation.' },
  { sign: 'Changes in elimination habits', detail: 'Reluctance to posture for urination or defecation — crouching low, not fully assuming the normal position — can indicate perineal, lower back, or joint pain. New house soiling in a previously reliable dog may reflect pain when moving to eliminate location.' },
]
const SOURCES = [
  { label: 'WSAVA: Pain Management Guidelines', url: 'https://wsava.org/global-guidelines/global-pain-council-guidelines/', publisher: 'WSAVA' },
  { label: 'AAHA: Pain Management Guidelines for Dogs and Cats', url: 'https://www.aaha.org/aaha-guidelines/pain-management/', publisher: 'AAHA' },
  { label: 'Merck Veterinary Manual: Signs of Pain in Animals', url: 'https://www.merckvetmanual.com/pharmacology/analgesia/pain-assessment-and-treatment-in-animals', publisher: 'Merck Vet Manual' },
]
export default function PainSignsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Signs Your Dog Is in Pain', subtitle: 'Dogs evolved to hide pain — displaying weakness to a predator or within a pack was dangerous. This evolutionary legacy means dogs in significant chronic pain often show subtle, easily missed signs rather than obvious distress. Recognizing pain early means treatment begins earlier and the dog suffers less.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', publishedAt: 'May 2025', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Pain Signs', href: '/health/pain-signs-dogs' }]}
        relatedLinks={[
          { title: 'Health Conditions', href: '/health', category: 'Hub' },
          { title: 'Pain Management in Dogs', href: '/health/pain-management-dogs', category: 'Veterinary Guide' },
          { title: 'Arthritis in Dogs', href: '/health/arthritis-in-dogs', category: 'Veterinary Guide' },
          { title: 'Emergency Signs', href: '/health/emergency-signs', category: 'Emergency Guide' },
        ]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">The Dog Grimace Scale</div>
            <p className="text-xs text-brand-text-mid leading-relaxed m-0 mb-2">Research-validated facial pain assessment:</p>
            {['Narrowed, squinted eyes', 'Tense orbital area', 'Rounded or drawn back ears', 'Raised or tense cheeks', 'Tense muzzle'].map(s => (
              <div key={s} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid flex gap-2"><span className="text-brand-primary">→</span>{s}</div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Pain Management in Dogs', href: '/health/pain-management-dogs' }, { label: 'Arthritis in Dogs', href: '/health/arthritis-in-dogs' }, { label: 'Senior Dog Care', href: '/health/senior-pet-care' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-pain-signs" />
                  <CrossPortfolioCard currentSite="vets-co" contentType="health" variant="sidebar" />
</>}
      >
        <div className="carloOS-article">
          <p className="text-base text-brand-text-mid leading-relaxed mb-8">A stoic dog in chronic pain may show none of the classic "pain" behaviors — no whimpering, no limping, no obvious distress. They adapt. They stop doing things that hurt, move differently, interact less. The change from baseline is what matters. Know your dog's normal.</p>
          {SIGNS.map((item, i) => (
            <div key={item.sign} className="flex gap-4 mb-5 p-5 rounded-xl border border-brand-border bg-brand-surface">
              <span className="font-display font-black text-brand-primary text-2xl flex-shrink-0 leading-none mt-0.5">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="font-display font-bold text-brand-dark text-base m-0 mb-2 leading-snug">{item.sign}</h3>
                <p className="text-sm text-brand-text-mid leading-relaxed m-0">{item.detail}</p>
              </div>
            </div>
          ))}

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}

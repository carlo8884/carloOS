import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'saddle-com', title: 'Horse Body Condition Scoring — Henneke Scale Explained | Saddle.com', description: 'The Henneke 1-9 Body Condition Score assesses fat deposits in 6 locations. How to score your horse, what score is ideal.', path: '/guides/horse-body-condition-scoring', type: 'article' })
const schema = buildArticleSchema({ siteId: 'saddle-com', title: 'Horse Body Condition Scoring Guide', description: 'The Henneke 1-9 BCS scale — assessing horse body condition by fat deposits.', url: 'https://saddle.com/guides/horse-body-condition-scoring', imageUrl: '', authorName: 'Saddle.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function HorseBCSPage() {
  return (
    <ArticleLayout siteId="saddle-com"
      hero={{ title: 'Horse Body Condition Scoring', subtitle: 'The Henneke Body Condition Score (BCS) is the standardized tool veterinarians, equine nutritionists, and horse welfare organizations use to assess a horse\'s nutritional status. A 1–9 scale based on palpation and visual assessment of fat deposits in 6 body locations — objective enough to be reproducible across observers, practical enough to be done at every feeding.', category: 'Horse Care Guide', authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides', href: '/guides/saddle-fit-guide' }, { name: 'Body Condition Scoring', href: '/guides/horse-body-condition-scoring' }]}
      schema={schema}
      relatedLinks={[
        { title: 'Guides Hub', href: '/guides', category: 'Hub' },
        { title: 'Horse Nutrition Guide', href: '/guides/horse-nutrition-guide', category: 'Horse Care' },
        { title: 'Horse Grooming Guide', href: '/guides/horse-grooming-guide', category: 'Horse Care' },
        { title: 'Buying Your First Horse', href: '/guides/buying-first-horse', category: 'Horse Care' },
      ]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Henneke Scale</div>
          {[['1 — Poor', 'Spine, ribs, tailhead clearly visible, no fat'], ['2 — Very Thin', 'Faint fat cover, all structures prominent'], ['3 — Thin', 'Slight fat, individual ribs visible'], ['4 — Moderately Thin', 'Slight ridge, ribs faintly visible'], ['5 — Moderate', 'Back flat, ribs not visible but felt'], ['6 — Moderately Fleshy', 'Slight crease along back'], ['7 — Fleshy', 'Crease along back, fat filling between ribs'], ['8 — Fat', 'Prominent crease, ribs need firm pressure'], ['9 — Extremely Fat', 'Patchy fat, deep crease, obvious obesity']].map(([score, desc]) => (
            <div key={score} className="py-2 border-b border-brand-border last:border-0">
              <div className="text-xs font-bold text-brand-dark">{score}</div>
              <div className="text-2xs text-brand-text-light">{desc}</div>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Horse Nutrition Guide', href: '/guides/horse-nutrition-guide' }, { label: 'Saddle Fit Guide', href: '/guides/saddle-fit-guide' }, { label: 'Horse Grooming Guide', href: '/guides/horse-grooming-guide' }]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Horse Care Guides" subtitle="Expert care and equipment guides." source="guides-bcs" />
      </>}
    >
      <div className="carloOS-article">
        <h2>The Six Locations</h2>
        <p>BCS assessment is based on palpation and visual assessment of fat deposits in six specific body locations. Each area provides different information about the horse's nutritional and metabolic status:</p>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {[
            { loc: 'Neck and crest', info: 'Fat along the top of the neck — cresty neck is an early indicator of metabolic syndrome (EMS) in horses prone to this condition. Fat here before fat elsewhere is a warning sign.' },
            { loc: 'Withers', info: 'Fat filling around and behind the withers. In lean horses, the withers are prominent; in well-conditioned horses, fat fills the area flanking the withers without hiding them.' },
            { loc: 'Loin and back', info: 'Fat over the backbone between the last rib and the hindquarters. A BCS 5 horse has a flat back — no ridge, no crease. Higher BCS shows increasing crease.' },
            { loc: 'Tail head', info: 'Fat surrounding the tail head. In thin horses, the tail head is prominent and angular. In ideal condition, flesh fills around it. In obese horses, the area is deeply padded.' },
            { loc: 'Ribs', info: 'The most commonly assessed area. At BCS 5 (ideal), ribs can be felt with light pressure but are not visible. The visual vs palpation distinction is key.' },
            { loc: 'Shoulder and behind the elbow', info: 'Fat filling the area behind the shoulder and into the armpit region. Less commonly assessed but part of the complete BCS evaluation.' },
          ].map(item => (
            <div key={item.loc} className="bg-brand-surface border border-brand-border rounded-lg p-4">
              <div className="font-bold text-brand-dark text-sm mb-1">{item.loc}</div>
              <p className="text-xs text-brand-text-mid leading-relaxed m-0">{item.info}</p>
            </div>
          ))}
        </div>

        <h2>What Score Is Ideal — and Why It Varies</h2>
        <p><strong>BCS 5 (Moderate):</strong> The commonly cited ideal for horses in regular work — ribs not visible but easily felt with light pressure, flat back, defined but not excessive muscling over the hindquarters. This is the appropriate target for most performance horses in regular training.</p>
        <p><strong>BCS 5.5–6 (Moderate to Moderately Fleshy):</strong> Slightly above the traditional ideal. Some breeding mares benefit from a slightly higher condition score entering breeding season. Horses in heavy endurance or sustained athletic work may maintain better performance with slightly higher reserves.</p>
        <p><strong>BCS 4:</strong> Acceptable for horses in very heavy work or during winter when some condition loss is normal. Below 4 warrants dietary intervention — something is wrong with either the diet or the horse's health.</p>
        <p><strong>BCS 6–7 for easy keepers:</strong> A horse that reaches BCS 7 despite appropriate hay ration and no grain requires dietary management. Pasture restriction, a grazing muzzle, or a slower hay feeder may be necessary. BCS 7+ in horses predisposed to equine metabolic syndrome (EMS) or Cushing's disease significantly increases laminitis risk.</p>

        <h2>Metabolic Warning Signs in BCS Assessment</h2>
        <p>Two BCS patterns warrant metabolic investigation regardless of the overall score: <strong>Cresty neck</strong> (disproportionate fat deposition on the top of the neck) in a horse that is otherwise not severely overweight is an early indicator of insulin dysregulation — a component of EMS. The crest feels firm rather than soft. <strong>Fat pads</strong> appearing behind the shoulders, above the eyes ("supraorbital fat pads"), or around the tail head in a patchy distribution — rather than diffuse general obesity — suggest Cushing's disease (pituitary pars intermedia dysfunction/PPID) or EMS.</p>
        <p>Any horse showing cresty neck, recurrent laminitis, unusual fat distribution, or difficulty losing weight despite appropriate management should have an ACTH level test (for Cushing's) and an insulin/glucose test (for EMS) performed by a veterinarian. Both conditions are manageable with medication and dietary management once diagnosed.</p>
      </div>
    </ArticleLayout>
  )
}

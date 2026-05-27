import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'saddle-com', title: 'Buying Your First Horse — Pre-Purchase Exam, Budget & Breed Selection | Saddle.com', description: 'First horse buying guide. The pre-purchase exam is non-negotiable. True cost breakdown, breed considerations for beginners, and what to ask before purchase.', path: '/guides/buying-first-horse', type: 'article' })
const schema = buildArticleSchema({ siteId: 'saddle-com', title: 'Buying Your First Horse Guide', description: 'Pre-purchase exam, true cost, and breed selection for buying a first horse.', url: 'https://saddle.com/guides/buying-first-horse', imageUrl: '', authorName: 'Saddle.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function BuyingFirstHorsePage() {
  return (
    <ArticleLayout siteId="saddle-com"
      hero={{ title: 'Buying Your First Horse', subtitle: 'The purchase price is the smallest expense of horse ownership. The monthly cost of keeping a horse is significant and ongoing for the animal\'s 25–35 year lifespan. Understanding the true cost before acquisition — and getting a veterinary pre-purchase examination — are the two most important steps in responsible first-horse purchase.', category: 'Horse Care Guide', authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'May 2025', readTime: '10 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides', href: '/guides/saddle-fit-guide' }, { name: 'Buying First Horse', href: '/guides/buying-first-horse' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Monthly Cost Estimate</div>
          {[['Board (full care)', '$400–1,500/month by region'], ['Feed (if not included)', '$150–300/month'], ['Farrier', '$35–150 every 6-8 weeks'], ['Vaccines + Coggins', '$200–400/year'], ['Dental float', '$150–300/year'], ['Worming', '$60–120/year'], ['Lessons/training', '$200–600/month'], ['Emergency fund', 'Budget $2,000–5,000/year'], ['Insurance', '$500–3,000/year']].map(([item, cost]) => (
            <div key={item} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{item}</span><span className="font-bold text-brand-dark text-right max-w-[45%]">{cost}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Saddle Fit Guide', href: '/guides/saddle-fit-guide' }, { label: 'Horse Nutrition Guide', href: '/guides/horse-nutrition-guide' }, { label: 'Horse First Aid', href: '/guides/horse-first-aid-guide' }]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Horse Care Guides" subtitle="Expert care and equipment guides." source="guides-buying-horse" />
      </>}
    >
      <div className="carloOS-article">
        <h2>The True Cost — Before You Fall in Love</h2>
        <p>The purchase price of a first horse ($1,000–15,000 for a suitable beginner horse depending on market, training level, and soundness) is a one-time expense. The ongoing expenses are permanent for the horse's life. Full-care board (the facility feeds, waters, cleans stalls, and provides pasture access) runs $400–1,500/month depending on region and facility quality. Self-care or pasture board is significantly cheaper but requires daily owner involvement — appropriate if you have your own property or the flexibility to be at the barn twice daily.</p>
        <p>The "hidden" costs that surprise new owners: emergency veterinary care (colic surgery costs $5,000–15,000; significant injuries can exceed this — budget or insure for it), dental care (horses need annual floating of sharp points on their teeth — $150–300 per session), farrier every 6–8 weeks whether or not the horse is ridden (hooves grow continuously and must be trimmed), and blankets, fly gear, and other seasonal equipment that accumulates over years.</p>

        <h2>The Pre-Purchase Exam — Non-Negotiable</h2>
        <p>A pre-purchase examination (PPE) performed by a veterinarian of your choosing (not the seller's veterinarian) before purchase is essential. The PPE typically includes: a comprehensive physical examination, lameness evaluation (trotting on a straight line, lunging on circles, flexion tests of all four limbs), and radiographs of joints or regions of concern identified on the lameness examination. Scoping (upper airway endoscopy) and echocardiography are added for competition horses or when specific concerns exist.</p>
        <p>The PPE does not determine whether to buy the horse — it provides information to make an informed decision. A horse with some radiographic changes may still be appropriate for low-level trail riding; the same horse would be inappropriate for high-level jumping. The PPE also documents the horse's condition at time of purchase — invaluable for insurance purposes.</p>
        <p>Cost: typically $250–600 for a basic PPE, $600–1,500+ for a comprehensive PPE with extensive radiographs. Spend this money. A horse purchased without a PPE that develops lameness shortly after purchase leaves the buyer with no recourse and potentially a large veterinary bill for a horse that cannot be ridden.</p>

        <h2>What Horse Is Right for a Beginner</h2>
        <p>The classic advice: an older, calm, experienced horse for a beginner rider. A horse that has been there, done that — has miles of trail experience, show experience, or consistent handling — is more forgiving of beginner mistakes than a young horse or one with limited training. "Green plus green equals black and blue" in the equestrian world — novice rider plus young inexperienced horse produces accidents.</p>
        <p><strong>Age:</strong> 8–15 years is the sweet spot for first horses. Young enough to have many usable years ahead, old enough to have experience and settled temperament. Very young horses (under 5) are inappropriate for beginner riders.</p>
        <p><strong>Sex:</strong> Geldings (castrated males) are most commonly recommended for beginner owners — predictable temperament without hormonal cycles. Well-trained mares are excellent horses, but some mares can be moody during estrus. Stallions are inappropriate for the vast majority of amateur owners.</p>
        <p><strong>Breed:</strong> Quarter Horses, Warmbloods (for English disciplines), and draft crosses are common choices for beginners — typically forgiving, sturdy, and well-tempered. Thoroughbreds (OTTBs — off-track Thoroughbreds) can be excellent but require experienced handling initially. The individual horse's temperament and training is more important than breed.</p>

        <h2>Questions to Ask the Seller</h2>
        <ul>
          <li>Why are you selling this horse?</li>
          <li>What is the horse's riding history and current workload?</li>
          <li>What is the horse's feeding program?</li>
          <li>Any known health conditions, past colic episodes, or lameness history?</li>
          <li>Is the horse current on vaccinations, Coggins test, dental care, and farrier?</li>
          <li>What does the horse need improvement on?</li>
          <li>Can I ride the horse multiple times before committing?</li>
          <li>Will you allow a pre-purchase exam by my veterinarian?</li>
        </ul>
        <p>A seller who refuses to allow a pre-purchase exam by an independent veterinarian is a seller whose horse you should not buy.</p>
      </div>
    </ArticleLayout>
  )
}

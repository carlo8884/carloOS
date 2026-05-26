import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'saddle-com', title: 'Horse First Aid Guide — Wound Care, Colic Assessment & When to Call the Vet | Saddle.com', description: 'Horse first aid guide: wound assessment and cleaning, colic signs and vital parameters, when to call the vet, and what belongs in an equine first aid kit.', path: '/guides/horse-first-aid-guide', type: 'article' })
const schema = buildArticleSchema({ siteId: 'saddle-com', title: 'Horse First Aid Guide', description: 'Wound care, colic assessment, and emergency protocols for horse owners.', url: 'https://saddle.com/guides/horse-first-aid-guide', imageUrl: '', authorName: 'Victoria Marsh, CSF', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function HorseFirstAidPage() {
  return (
    <ArticleLayout siteId="saddle-com"
      hero={{ title: 'Horse First Aid Guide', subtitle: 'Knowing your horse\'s normal vital signs before an emergency occurs is the most important preparation you can make. When something goes wrong, you need to know what baseline you\'re comparing against — and you need to have already talked to your veterinarian before you are in a panicked state trying to describe what\'s happening.', category: 'Horse Care Guide', authorName: 'Victoria Marsh, CSF', authorCredentials: 'Certified Equine Professional', authorAvatar: '🐴', publishedAt: 'May 2025', readTime: '10 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides', href: '/guides/saddle-fit-guide' }, { name: 'First Aid Guide', href: '/guides/horse-first-aid-guide' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Normal Vital Signs</div>
          {[['Heart rate', '28–44 bpm at rest'], ['Respiratory rate', '12–20 breaths/min'], ['Temperature', '99.5–101.5°F'], ['Gut sounds', 'Present all 4 quadrants'], ['CRT', 'Under 2 seconds'], ['Gum color', 'Pink, moist']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Horse Grooming Guide', href: '/guides/horse-grooming-guide' }, { label: 'Horse Nutrition Guide', href: '/guides/horse-nutrition-guide' }, { label: 'Leather Care Guide', href: '/guides/leather-care-guide' }]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Horse Care Guides" subtitle="Expert care and equipment guides." source="guides-first-aid" />
      </>}
    >
      <div className="carloOS-article">
        <h2>Know Your Horse's Normal Values First</h2>
        <p>Learn your individual horse's normal vital signs on a healthy, resting day. Take heart rate, respiratory rate, and temperature several times on normal days so you know what baseline looks like. Horses vary individually — some horses run 32 bpm at rest, others 42 bpm. "Normal range" is a population average; your horse's normal may be toward either end. Write your horse's normal values in your barn notebook and share them with your veterinarian.</p>

        <h2>Colic Assessment — The Most Important Emergency Skill</h2>
        <p>Colic (abdominal pain) is the leading cause of death in horses. Every horse owner must be able to assess colic severity and know when to call the veterinarian immediately versus when to walk and monitor.</p>
        <p><strong>Call your vet immediately for:</strong> Heart rate above 52 bpm at rest, pale or discolored gums, absent gut sounds in any quadrant for 2 minutes of listening, signs of cardiovascular compromise (sweating profusely, recumbent and unable to rise, violent rolling), pawing and looking at flank that does not respond to walking, or colic that has continued more than 30 minutes without improvement.</p>
        <p><strong>Monitoring while waiting for the vet:</strong> Take vital signs every 15 minutes and note changes. Walk the horse (walking stimulates gut motility and keeps a colicking horse from injuring itself by rolling, but do not force an exhausted horse to walk). Remove food. Do not administer Banamine (flunixin meglumine) without veterinary direction — while you may have it in your kit, inappropriate dosing can mask signs that guide diagnosis.</p>

        <h2>Wound Assessment and First Aid</h2>
        <p><strong>When to call the vet immediately for a wound:</strong></p>
        <ul>
          <li>Any wound involving a joint, tendon sheath, or hoof (joint/tendon infections are emergencies — not waiting for morning)</li>
          <li>Wounds with arterial bleeding (pulsing, bright red blood)</li>
          <li>Wounds near the eye</li>
          <li>Puncture wounds to the foot (nail through hoof — do not remove the nail, call the vet, prevent the horse from stepping further)</li>
          <li>Any wound gaping more than 1 cm (may require sutures — window for effective suturing closes within 6-8 hours)</li>
          <li>Any wound that may involve the tendon (visible white/yellow tissue in a leg wound)</li>
        </ul>
        <p><strong>For wounds you are managing while the vet is coming:</strong> Rinse with clean cold water or saline (not hydrogen peroxide — damages tissue). Apply clean bandage pressure for bleeding. Wrap the limb if the wound is on a leg — even a temporary wrap provides support and reduces contamination. Do not apply antiseptic cream inside deep wounds. Keep the horse calm and prevent further movement.</p>

        <h2>Lameness Assessment</h2>
        <p>A suddenly lame horse requires assessment of: which limb, at which gait (walk vs trot), severity (weight-bearing or non-weight-bearing), and the hoof specifically (hoof tester, visual inspection for sole bruising, thrush, foreign body). A horse that is suddenly, severely lame in a forelimb requires ruling out laminitis immediately — particularly if they have been on rich grass, on corticosteroids, or are overweight. A horse that is completely non-weight-bearing on a limb is a same-day emergency.</p>

        <h2>Essential First Aid Kit Contents</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { cat: 'Assessment', items: 'Thermometer (rectal), stethoscope, flashlight, watch with second hand' },
            { cat: 'Wound care', items: 'Saline solution, non-stick wound pads, self-adhesive bandage (Vetrap), gauze, bandage scissors' },
            { cat: 'Medications (vet-prescribed)', items: 'Banamine (injectable or oral paste), phenylbutazone, ophthalmic eye wash' },
            { cat: 'Tools', items: 'Hoof pick, wire cutters (for fence entanglement), halter and lead, twitch' },
            { cat: 'Documentation', items: 'Vet contact numbers (including emergency after-hours), horse health records, vaccination certificates' },
          ].map(item => (
            <div key={item.cat} className="bg-brand-surface border border-brand-border rounded-lg p-4">
              <div className="text-xs font-bold text-brand-dark mb-1">{item.cat}</div>
              <div className="text-2xs text-brand-text-light leading-relaxed">{item.items}</div>
            </div>
          ))}
        </div>
      </div>
    </ArticleLayout>
  )
}

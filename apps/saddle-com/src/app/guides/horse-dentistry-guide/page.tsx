import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'saddle-com', title: 'Horse Dentistry Guide — Floating, Signs of Dental Pain & Schedule | Saddle.com', description: 'Horses need annual dental floating — power tools under sedation are the current standard. Signs of dental pain, wolf teeth extraction, and why diet affects dental wear.', path: '/guides/horse-dentistry-guide', type: 'article' })
const schema = buildArticleSchema({ siteId: 'saddle-com', title: 'Horse Dentistry Guide', description: 'Annual floating schedule, signs of dental pain, and equine dental care.', url: 'https://saddle.com/guides/horse-dentistry-guide', imageUrl: '', authorName: 'Saddle.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function HorseDentistryPage() {
  return (
    <ArticleLayout siteId="saddle-com"
      hero={{ title: 'Horse Dentistry Guide', subtitle: 'Horses\' teeth grow continuously throughout their lives and wear unevenly — creating sharp points on the outer edges of upper teeth and inner edges of lower teeth that lacerate the cheeks and tongue. Annual dental floating (filing these points smooth) under sedation by a veterinarian or equine dental technician is standard preventive care.', category: 'Horse Care Guide', authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides', href: '/guides/saddle-fit-guide' }, { name: 'Horse Dentistry', href: '/guides/horse-dentistry-guide' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Signs of Dental Pain</div>
          {['Dropping grain or hay while eating (quidding)', 'Tilting head to one side while eating', 'Weight loss despite adequate food', 'Resistance to bit — head-tossing, evasion', 'Foul odor from mouth or nostrils', 'Swelling along the jaw', 'Difficulty chewing — slow eating'].map(s => (
            <div key={s} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid">{s}</div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Horse Nutrition Guide', href: '/guides/horse-nutrition-guide' }, { label: 'Horse Body Condition Scoring', href: '/guides/horse-body-condition-scoring' }, { label: 'Bit Selection Guide', href: '/guides/bit-selection-guide' }]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Horse Care Guides" subtitle="Expert care and equipment guides." source="guides-dentistry" />
      </>}
    >
      <div className="carloOS-article">
        <h2>How Horse Teeth Work</h2>
        <p>Horses are hypsodont — they have high-crowned teeth that erupt continuously throughout life, wearing down gradually through forage consumption. A horse has 36–44 permanent teeth including 12 incisors, 12 premolars, 12 molars, and (in most male horses) 4 canine teeth. The upper arcade (top jaw) is slightly wider than the lower arcade — the teeth do not meet evenly across their full surface. As they grind, the outside edge of the upper teeth and the inside edge of the lower teeth develop progressively sharper points that cut the cheeks and tongue during chewing.</p>

        <h2>Floating — What It Involves</h2>
        <p>Floating is the filing of sharp dental points to restore a more functional grinding surface. Modern equine dentistry is performed under light sedation (typically detomidine or xylazine administered by a veterinarian) with the horse's mouth held open by a full-mouth speculum. Power float tools (motorized rotary files) have largely replaced hand floats in current practice — they are faster, more precise, and less physically demanding for the practitioner, resulting in more thorough work. The procedure takes 20–45 minutes and the horse is weight-bearing and functional within 1–2 hours of sedation recovery.</p>
        <p>Frequency: annually for most horses. Young horses (2–5 years) during the transition from baby teeth to permanent dentition may need every 6 months. Senior horses with significantly worn or missing teeth may also need more frequent attention. The specific interval depends on the individual horse's dental anatomy.</p>

        <h2>Wolf Teeth</h2>
        <p>Wolf teeth are small, vestigial first premolars that appear just in front of the first cheek teeth in the upper jaw (and occasionally lower). They are present in approximately 70% of horses. Wolf teeth are not functional — they serve no purpose — but their position directly in front of the bit's working area can cause bit discomfort, head-tossing, and behavioral evasion. Standard practice: extract wolf teeth when they are erupted and causing or likely to cause bit interference. Extraction is performed under sedation by a veterinarian, typically at the same time as the first float or before the horse enters training.</p>

        <h2>Diet's Effect on Dental Wear</h2>
        <p>The forage a horse eats dramatically affects the rate and evenness of dental wear. Horses on continuous pasture graze in a natural side-to-side motion that provides relatively even wear across the dental arcade. Horses fed hay (rather than pasture) have a less varied chewing motion — hay floats faster than grass. Horses fed pelleted or processed feeds have even less opportunity for natural wear — the grinding motion is reduced and teeth develop points more rapidly.</p>
        <p>Horses fed predominantly hay and concentrates (the management system of most performance horses) require more consistent annual dental care than horses with extensive pasture access. This is one practical reason why providing adequate hay (versus processed feed) is nutritionally and dentally beneficial.</p>

        <h2>Senior Horse Dental Challenges</h2>
        <p>Horse teeth wear down completely over time — most horses run out of tooth by their late 20s or 30s. "Smooth mouth" — a horse with no functional grinding surface remaining — requires a completely different dietary management approach: soaked hay cubes, complete feeds processed to a texture the horse can manage without functional molars. Senior horses (20+) require dental evaluation twice yearly — changes in dental anatomy happen more rapidly at this life stage, and weight loss from dental compromise is a common and underdiagnosed problem in senior horses.</p>
      </div>
    </ArticleLayout>
  )
}

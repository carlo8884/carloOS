import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'saddle-com', title: 'Horse Nutrition Guide — Hay, Grain, Supplements & Forage First | Saddle.com', description: 'Complete horse nutrition guide. Forage-first feeding, how much hay a horse needs, when to add grain, essential supplements, and the most common nutritional mistakes.', path: '/guides/horse-nutrition-guide', type: 'article' })
const schema = buildArticleSchema({ siteId: 'saddle-com', title: 'Horse Nutrition Guide', description: 'Hay, grain, and supplement guide for horse owners — forage-first approach.', url: 'https://saddle.com/guides/horse-nutrition-guide', imageUrl: '', authorName: 'Victoria Marsh, CSF', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function HorseNutritionGuidePage() {
  return (
    <ArticleLayout siteId="saddle-com"
      hero={{ title: 'Horse Nutrition Guide', subtitle: 'Horses evolved as continuous grazers — their digestive systems are designed for small, frequent meals of forage, not large grain meals twice daily. Modern horse management often inverts this, with consequences for health. Forage first, grain second, supplements third.', category: 'Horse Care Guide', authorName: 'Victoria Marsh, CSF', authorCredentials: 'Certified Equine Professional', authorAvatar: '🐴', publishedAt: 'May 2025', readTime: '11 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides', href: '/guides/saddle-fit-guide' }, { name: 'Horse Nutrition', href: '/guides/horse-nutrition-guide' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Daily Forage Rule</div>
          <p className="text-xs text-brand-text-mid leading-relaxed m-0 mb-3">Horses need minimum 1.5-2% of body weight in forage daily. A 1,000 lb horse needs 15-20 lbs of hay per day — minimum. This is the foundation of the diet.</p>
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-2 mt-3">By Weight</div>
          {[['900 lb horse', '13.5–18 lbs hay/day'], ['1,000 lb horse', '15–20 lbs hay/day'], ['1,200 lb horse', '18–24 lbs hay/day'], ['1,500 lb horse', '22–30 lbs hay/day']].map(([w, h]) => (
            <div key={w} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{w}</span><span className="font-bold text-brand-dark">{h}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Horse Grooming Guide', href: '/guides/horse-grooming-guide' }, { label: 'Saddle Fit Guide', href: '/guides/saddle-fit-guide' }, { label: 'Leather Care Guide', href: '/guides/leather-care-guide' }]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Equipment Guides" subtitle="Horse care and tack guides." source="guides-nutrition" />
      </>}
    >
      <div className="carloOS-article">
        <h2>Forage First — The Foundation</h2>
        <p>The horse's digestive system — a 100-foot gastrointestinal tract with a relatively small stomach and a large hindgut designed for fermentation of fibrous plant material — requires near-continuous forage intake to function properly. Horses produce stomach acid continuously; without food in the stomach, that acid causes gastric ulcers. The hindgut requires a consistent flow of fermentable fiber — gaps in forage intake (more than 4–6 hours) disrupt hindgut flora and predispose to hindgut dysbiosis, colic, and laminitis.</p>
        <p>Practical implication: horses should have access to forage for as close to 24 hours as possible. Pasture grazing, slow-feeder hay nets (which extend eating time dramatically by reducing the rate of consumption), or multiple daily hay feedings are the tools to achieve this. A horse that inhales all its hay within 4 hours and then stands with no forage for 8 hours before the next feeding is at elevated colic, ulcer, and behavioral problem risk.</p>

        <h2>Hay Quality and Types</h2>
        <p><strong>Grass hay</strong> (timothy, orchard grass, bermuda, fescue, brome): the foundation forage for most horses. Lower in energy (calories) and protein than legume hay, making it appropriate for easy keepers, horses at maintenance, and those prone to weight gain. Excellent for ad libitum feeding in slow feeders.</p>
        <p><strong>Legume hay</strong> (alfalfa, clover): higher in protein, calcium, and energy than grass hay. Appropriate for hard-keepers, horses in heavy work, growing youngsters, lactating mares, and senior horses that struggle to maintain weight. Not appropriate as the primary forage for overweight horses or those prone to laminitis. The protein in alfalfa is high quality — it is often mischaracterized as "too rich" for any horse, but appropriate amounts benefit many horses that don't get enough protein from grass hay alone.</p>
        <p><strong>Mixed hay</strong>: a blend of grass and legume, often the most practical choice — higher palatability than pure grass, lower calorie density than pure alfalfa.</p>
        <p><strong>Testing hay:</strong> Hay quality varies enormously by cutting, region, drought conditions, and storage. A hay analysis ($20–40 at a forage testing laboratory) reveals protein, carbohydrate, energy, and mineral content — allowing you to balance the ration appropriately rather than guessing.</p>

        <h2>Grain — When, How Much, and Which</h2>
        <p>Most horses in light to moderate work on good quality hay do not need grain. The decision to add grain should be based on body condition, work level, and hay quality — not on tradition. Horses that need additional calories above what hay provides: hard keepers, horses in moderate to heavy work, lactating mares, and growing horses.</p>
        <p>When grain is needed: commercial balanced feeds (Purina, Triple Crown, Nutrena) are preferable to straight grains (oats, corn) because they are formulated with vitamins and minerals that whole grains lack. Feed grain in small meals — the horse's stomach holds only 2–4 gallons. Large grain meals ferment in the hindgut rather than digesting in the small intestine, causing acidosis and colic risk. No more than 0.5% of body weight per meal (5 lbs for a 1,000 lb horse). If more is needed, divide into additional feedings.</p>

        <h2>Water — The Most Critical Nutrient</h2>
        <p>A 1,000 lb horse drinks 8–12 gallons of water per day at maintenance, significantly more in hot weather or heavy work. Water must be fresh, clean, and accessible at all times. Automatic waterers should be inspected daily — malfunction without the horse showing obvious distress until dehydration is significant. In winter, water temperature matters: horses prefer water at 45–65°F and may reduce intake significantly when water is at or near freezing, increasing colic risk. Heated buckets or tank heaters are advisable in climates with freezing temperatures.</p>

        <h2>Essential Supplements for Most Horses</h2>
        <p><strong>Salt</strong>: Horses require approximately 1–2 oz of salt (sodium chloride) daily, increasing significantly with sweat during work. Most hay-based diets are sodium deficient. Provide a plain white salt block free-choice plus consider adding 1 tablespoon of loose salt to the daily ration to ensure intake. Electrolyte supplements (containing sodium, potassium, chloride) are appropriate during heavy sweat loss in hot weather or competition.</p>
        <p><strong>Vitamin E and selenium</strong>: Horses on stored hay (as opposed to fresh pasture) are often deficient in vitamin E — a fat-soluble antioxidant critical for muscle and immune function. Selenium is regionally deficient in many US soils. Most commercial feeds include selenium, but hay-based horses without commercial feed may need supplementation. Note: selenium toxicity is a real risk — test before supplementing aggressively.</p>
        <p><strong>Hoof supplement</strong>: Biotin (20mg/day), zinc, and methionine support hoof quality in horses with poor hoof condition. Results require 6–12 months of consistent supplementation — the hoof grows slowly.</p>
      </div>
    </ArticleLayout>
  )
}

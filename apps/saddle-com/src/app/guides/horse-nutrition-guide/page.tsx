import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'saddle-com', title: 'Horse Nutrition Guide — Hay, Grain, Supplements | Saddle.com', description: 'Complete horse nutrition guide. Forage-first feeding, how much hay a horse needs, when to add grain, essential supplements.', path: '/guides/horse-nutrition-guide', type: 'article' })
const schema = buildArticleSchema({ siteId: 'saddle-com', title: 'Horse Nutrition Guide', description: 'Hay, grain, and supplement guide for horse owners — forage-first approach.', url: 'https://saddle.com/guides/horse-nutrition-guide', imageUrl: '', authorName: 'Saddle.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function HorseNutritionGuidePage() {
  return (
    <ArticleLayout siteId="saddle-com"
      hero={{ title: 'Horse Nutrition Guide', subtitle: 'Horses evolved as continuous grazers — their digestive systems are designed for small, frequent meals of forage, not large grain meals twice daily. Modern horse management often inverts this, with consequences for health. Forage first, grain second, supplements third.', category: 'Horse Care Guide', authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'May 2025', readTime: '18 min' }}
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
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-05-28T00:00:00Z" reviewedBy="Editorial team" />

        <h2>Forage First — The Foundation</h2>
        <DropCap>The horse's digestive system — a 100-foot gastrointestinal tract with a relatively small stomach and a large hindgut designed for fermentation of fibrous plant material — requires near-continuous forage intake to function properly. Horses produce stomach acid continuously; without food in the stomach, that acid causes gastric ulcers. The hindgut requires a consistent flow of fermentable fiber — gaps in forage intake (more than 4–6 hours) disrupt hindgut flora and predispose to hindgut dysbiosis, colic, and laminitis.</DropCap>
        <p>Practical implication: horses should have access to forage for as close to 24 hours as possible. Pasture grazing, slow-feeder hay nets (which extend eating time dramatically by reducing the rate of consumption), or multiple daily hay feedings are the tools to achieve this. A horse that inhales all its hay within 4 hours and then stands with no forage for 8 hours before the next feeding is at elevated colic, ulcer, and behavioral problem risk.</p>
        <p>The forage-first principle is reinforced by published equine nutrition research — work referenced in journals such as the <em>Equine Veterinary Journal</em> and the <em>Journal of Equine Veterinary Science</em> has repeatedly documented the relationship between long feed-free intervals and equine gastric ulcer syndrome (EGUS) prevalence, particularly in performance horses. The National Research Council's <em>Nutrient Requirements of Horses</em> (sixth revised edition) sets minimum forage at 1% of body weight in dry matter and recommends 1.5–2% for normal maintenance. Most working horses do best at the upper end of that range.</p>

        <h2>Hay Quality and Types</h2>
        <p><strong>Grass hay</strong> (timothy, orchard grass, bermuda, fescue, brome): the foundation forage for most horses. Lower in energy (calories) and protein than legume hay, making it appropriate for easy keepers, horses at maintenance, and those prone to weight gain. Excellent for ad libitum feeding in slow feeders.</p>
        <p><strong>Legume hay</strong> (alfalfa, clover): higher in protein, calcium, and energy than grass hay. Appropriate for hard-keepers, horses in heavy work, growing youngsters, lactating mares, and senior horses that struggle to maintain weight. Not appropriate as the primary forage for overweight horses or those prone to laminitis. The protein in alfalfa is high quality — it is often mischaracterized as "too rich" for any horse, but appropriate amounts benefit many horses that don't get enough protein from grass hay alone.</p>
        <p><strong>Mixed hay</strong>: a blend of grass and legume, often the most practical choice — higher palatability than pure grass, lower calorie density than pure alfalfa.</p>
        <p><strong>Testing hay:</strong> Hay quality varies enormously by cutting, region, drought conditions, and storage. A hay analysis ($20–40 at a forage testing laboratory) reveals protein, carbohydrate, energy, and mineral content — allowing you to balance the ration appropriately rather than guessing.</p>

        <h2>Calcium-to-Phosphorus Ratios in Common Forages</h2>
        <p>The calcium-to-phosphorus (Ca:P) ratio matters in horse diets because phosphorus in excess of calcium interferes with calcium absorption and, sustained over time, drives demineralization of bone. The accepted target across most life stages is a Ca:P ratio between 1.5:1 and 2:1, with the absolute minimum being 1:1 (never inverted). Forages vary widely:</p>
        <ul>
          <li><strong>Alfalfa hay:</strong> typically 1.3–1.6% calcium, 0.20–0.30% phosphorus — a Ca:P ratio around 5:1 or higher. Excellent calcium source.</li>
          <li><strong>Timothy hay:</strong> roughly 0.4–0.5% calcium, 0.15–0.25% phosphorus — Ca:P near 2:1. Naturally balanced.</li>
          <li><strong>Orchard grass:</strong> similar to timothy, around 0.3–0.5% calcium with comparable phosphorus — Ca:P near 2:1.</li>
          <li><strong>Bermuda (coastal) hay:</strong> calcium 0.3–0.4%, phosphorus 0.15–0.25% — typically a Ca:P of 1.5–2:1 but variable.</li>
          <li><strong>Cereal grain hays</strong> (oat, barley): often inverted Ca:P (more P than Ca). Must be balanced with a legume or with a calcium-providing supplement; not appropriate as the sole forage.</li>
          <li><strong>Straight cereal grains</strong> (oats, corn, barley): phosphorus-heavy with very little calcium. Any meaningful grain inclusion must be balanced upstream by calcium-providing forage (alfalfa) or a ration balancer that supplies calcium.</li>
        </ul>
        <p>The practical takeaway: horses on a grass-hay-plus-oats diet are at the greatest risk of inverted Ca:P. Horses on a mixed timothy/alfalfa or grass-plus-ration-balancer diet are usually well within target. When in doubt, run the hay analysis and have a feed company nutritionist or independent equine nutritionist balance the ration.</p>

        <h2>Workload and Caloric Requirements</h2>
        <p>The NRC <em>Nutrient Requirements of Horses</em> categorizes work in four bands. Caloric needs are typically expressed in megacalories of digestible energy (Mcal DE) per day; for a 1,100 lb (500 kg) horse, the baseline maintenance is roughly 16.7 Mcal DE/day. From there:</p>
        <ul>
          <li><strong>Light work</strong> (1–3 hours/week, walk/trot with limited canter — recreational trail, light dressage schooling): roughly 20% above maintenance, around 20 Mcal DE/day. Usually achievable on good grass hay alone or hay plus a small ration balancer.</li>
          <li><strong>Moderate work</strong> (3–5 hours/week with regular canter work, schooling jumps, lessons): roughly 40% above maintenance, around 23 Mcal DE/day. Often needs hay plus a performance feed or beet pulp/oil top-up.</li>
          <li><strong>Heavy work</strong> (4–5 hours/week with substantial canter and gallop, regular jumping, eventing prep): roughly 60% above maintenance, around 26.6 Mcal DE/day. Typically requires a formulated performance feed at meaningful intake (4–8 lbs/day split into multiple meals).</li>
          <li><strong>Very heavy work</strong> (race training, upper-level eventing, endurance race conditioning): up to 90% above maintenance, around 32 Mcal DE/day. Requires careful ration design with both forage and concentrate; energy density from fat (oil, rice bran) often plays a larger role to keep starch intake manageable.</li>
        </ul>
        <p>These figures are starting points. The single best feedback loop is body condition scoring (BCS) on the 1–9 Henneke scale, performed every 2–4 weeks. A working horse should sit at 5–6. Drift toward 4 means increase intake; drift toward 7 means cut back. Adjust on what the horse looks and feels like, not on what the bag says.</p>

        <h2>Grain — When, How Much, and Which</h2>
        <p>Most horses in light to moderate work on good quality hay do not need grain. The decision to add grain should be based on body condition, work level, and hay quality — not on tradition. Horses that need additional calories above what hay provides: hard keepers, horses in moderate to heavy work, lactating mares, and growing horses.</p>
        <p>When grain is needed: commercial balanced feeds (Purina, Triple Crown, Nutrena) are preferable to straight grains (oats, corn) because they are formulated with vitamins and minerals that whole grains lack. Feed grain in small meals — the horse's stomach holds only 2–4 gallons. Large grain meals ferment in the hindgut rather than digesting in the small intestine, causing acidosis and colic risk. No more than 0.5% of body weight per meal (5 lbs for a 1,000 lb horse). If more is needed, divide into additional feedings.</p>

        <h2>Reading a Commercial Feed Tag</h2>
        <p>Every bagged commercial feed in the US is required to carry a guaranteed analysis tag. The key fields and what they actually mean:</p>
        <ul>
          <li><strong>Crude Protein (min %):</strong> total nitrogen × 6.25. A maintenance ration balancer might show 30% (small daily portion); a performance feed 12–14%; a senior feed 12–16%. Higher is not always better — excess protein is excreted as urea, increasing ammonia in the stall and water demand.</li>
          <li><strong>Crude Fat (min %):</strong> a proxy for calorie density. Standard sweet feeds are 3–6% fat; performance feeds 6–10%; high-fat feeds 10–14%. Higher fat means more calories per pound and less starch needed to hit the same energy target.</li>
          <li><strong>Crude Fiber (max %):</strong> the indigestible-cell-wall proxy. A textured feed might be 8–12%; a hay-replacer or senior feed 18–25%. Higher fiber generally indicates a more forage-like, slower-fermenting feed.</li>
          <li><strong>NSC (Non-Structural Carbohydrates):</strong> not always on the bag, but critical for metabolic horses. NSC = starch + ESC (water-soluble sugars). Safe for laminitis-prone or insulin-resistant horses is generally ≤10–12% NSC. Many standard sweet feeds are 25–40% NSC and are not safe for these horses.</li>
          <li><strong>Calcium and phosphorus (min %):</strong> check the ratio. Should be 1.5:1 to 2:1 Ca:P, not inverted.</li>
          <li><strong>Feeding directions:</strong> always list the intake range required to deliver the formulated vitamin/mineral package. A ration balancer fed at 0.5 lb when the bag specifies 1–2 lb will under-deliver micronutrients.</li>
        </ul>
        <p>Most importantly: the ingredient list reveals what's actually in the bag. "Grain by-products" and "plant protein products" are vague catch-alls; named ingredients (oats, soybean meal, beet pulp, alfalfa meal, rice bran) tell you what you're paying for.</p>

        <CalloutBox variant="evidence" title="Ca:P target: 1.5–2:1, never inverted">
          The accepted calcium-to-phosphorus ratio across most equine life stages is 1.5:1 to 2:1, with the absolute minimum being 1:1. Straight cereal grains (oats, corn, barley) are phosphorus-heavy and will invert the ratio if fed without a calcium-providing forage or balancer. Run a hay analysis and have a nutritionist balance the ration when in doubt.
        </CalloutBox>

        <h2>Water — The Most Critical Nutrient</h2>
        <p>A 1,000 lb horse drinks 8–12 gallons of water per day at maintenance, significantly more in hot weather or heavy work. Water must be fresh, clean, and accessible at all times. Automatic waterers should be inspected daily — malfunction without the horse showing obvious distress until dehydration is significant. In winter, water temperature matters: horses prefer water at 45–65°F and may reduce intake significantly when water is at or near freezing, increasing colic risk. Heated buckets or tank heaters are advisable in climates with freezing temperatures.</p>

        <h2>Essential Supplements for Most Horses</h2>
        <p><strong>Salt</strong>: Horses require approximately 1–2 oz of salt (sodium chloride) daily, increasing significantly with sweat during work. Most hay-based diets are sodium deficient. Provide a plain white salt block free-choice plus consider adding 1 tablespoon of loose salt to the daily ration to ensure intake. Electrolyte supplements (containing sodium, potassium, chloride) are appropriate during heavy sweat loss in hot weather or competition.</p>
        <p><strong>Vitamin E and selenium</strong>: Horses on stored hay (as opposed to fresh pasture) are often deficient in vitamin E — a fat-soluble antioxidant critical for muscle and immune function. Selenium is regionally deficient in many US soils. Most commercial feeds include selenium, but hay-based horses without commercial feed may need supplementation. Note: selenium toxicity is a real risk — test before supplementing aggressively.</p>
        <p><strong>Hoof supplement</strong>: Biotin (20mg/day), zinc, and methionine support hoof quality in horses with poor hoof condition. Results require 6–12 months of consistent supplementation — the hoof grows slowly.</p>

        <h2>Senior Horse Modifications (15+ Years)</h2>
        <p>Senior horses face a predictable cluster of nutritional issues that, taken together, justify a different ration design. The most common changes:</p>
        <ul>
          <li><strong>Dental loss.</strong> Teeth wear flat or are lost outright; chewing efficiency drops. Long-stem hay may be quidded (chewed into a ball and dropped). The fix is hay alternatives: chopped hay, hay cubes soaked into a mash, hay pellets, or a complete senior feed designed to replace forage outright. Soaking is critical — dry pellets or cubes are a choke risk in a horse with poor chewing.</li>
          <li><strong>Reduced digestive efficiency.</strong> Older horses extract fewer calories from the same intake. Senior feeds are typically higher fat (8–12%), higher fiber from beet pulp and alfalfa meal, and easier to chew. Intake recommendations usually run 4–8 lbs/day at minimum to deliver the formulated nutrient package.</li>
          <li><strong>Protein quality matters more.</strong> Aged horses lose lean muscle (sarcopenia). Lysine, the first limiting amino acid, becomes especially important — soybean meal and alfalfa meal are good sources. A senior feed at appropriate intake usually delivers adequate lysine.</li>
          <li><strong>Pituitary pars intermedia dysfunction (PPID, "Cushing's").</strong> Common in horses over 15. PPID frequently coexists with insulin dysregulation. Many PPID horses tolerate ration balancers and beet pulp but must avoid molasses-heavy sweet feeds. See the metabolic-horse section below.</li>
          <li><strong>Hydration.</strong> Older horses sometimes drink less. A daily wet mash (soaked hay cubes or beet pulp) sneaks in 1–2 gallons of water per feeding.</li>
        </ul>
        <p>A practical senior plan: free-choice quality grass or mixed hay if the horse can still chew long-stem; if not, chopped hay or soaked hay cubes ad libitum. Add a senior feed at the bag's recommended intake split into 2–3 meals. Add salt and water. Body condition score every two weeks and adjust.</p>

        <h2>Easy Keepers and Metabolic Horses</h2>
        <p>Some horses, particularly stock-type and pony breeds, gain weight on what looks like a sparse diet. These are "easy keepers," and many of them carry an underlying metabolic condition that makes weight management both critical and difficult.</p>
        <p><strong>Equine Metabolic Syndrome (EMS).</strong> Defined by insulin dysregulation, regional adiposity (cresty neck, fat pads at the tail head and behind the shoulder), and elevated laminitis risk. EMS is the equine analog of metabolic syndrome in humans. Management is dietary: low-NSC forage (target ≤10–12%), soaked hay if NSC of the available hay is unknown or high (soaking for 60 minutes in cold water reduces water-soluble carbohydrates by roughly 30%, though results vary), no pasture during high-sugar windows (afternoons on cool sunny days are the worst), no sweet feed. A ration balancer at recommended intake delivers the vitamin/mineral package without meaningful calories.</p>
        <p><strong>Pituitary pars intermedia dysfunction (PPID, "Cushing's").</strong> The most common endocrine disorder of aged horses. Often co-occurs with insulin dysregulation. Diagnosed via ACTH testing. Managed medically (pergolide is standard) plus the same low-NSC dietary approach used in EMS. Long coat that fails to shed and recurrent infections are classic signs.</p>
        <p><strong>Polysaccharide Storage Myopathy (PSSM).</strong> A muscle glycogen storage disorder, most common in Quarter Horses, Draft breeds, and Warmbloods. PSSM-1 (the GYS1 mutation) and PSSM-2 (a heterogeneous group) cause exertional rhabdomyolysis (tying up). Dietary management is critical: very low NSC (target ≤10%), high fat (oil, rice bran) to provide energy without starch, and consistent daily exercise. Many PSSM horses do well on a 12–15% NSC forage analysis paired with a low-starch, high-fat performance feed at modest intake.</p>
        <p>For any horse with suspected metabolic disease, a veterinary diagnosis precedes the diet change. Insulin, glucose, and ACTH testing are the standard workup. Ration balancing should be done with a hay analysis in hand — guessing at NSC content is the most common cause of a "managed" metabolic horse that still laminitis episodes.</p>

        <h2>Feeding Schedules</h2>
        <p>Whatever the ration design, the schedule is part of the diet. Two large meals 12 hours apart with no forage between is high-risk for any horse — it concentrates digestive load, leaves long acid-exposed gastric windows, and disrupts hindgut fermentation. The healthier model is small, frequent meals: ad libitum hay (slow-feeder if intake control is needed), grain or concentrate split into 2–3 meals, and salt and water continuously available. Changes to either the type or quantity of feed should be made over 7–14 days; abrupt changes are a well-documented colic trigger.</p>
      </div>
    </ArticleLayout>
  )
}

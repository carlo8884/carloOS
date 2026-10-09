import { HopDisclosure } from '../../../components/HopDisclosure'
import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, PrimaryHop, RelatedLinks, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Weight Management in Dogs and Cats | Vets.co', description: 'Dog body-condition scoring and a calorie example. Cats use the body condition score tool and the cat calorie calculator.', path: '/health/weight-management', type: 'article' })
const SOURCES = [
  { label: 'AAHA: Nutritional Assessment Guidelines', url: 'https://www.aaha.org/aaha-guidelines/nutritional-assessment/', publisher: 'AAHA' },
  { label: 'WSAVA: Global Nutrition Guidelines', url: 'https://wsava.org/global-guidelines/global-nutrition-guidelines/', publisher: 'WSAVA' },
  { label: 'Kealy RD et al. JAVMA 2002 — Effects of Diet Restriction on Life Span and Age-Related Changes', url: 'https://pubmed.ncbi.nlm.nih.gov/12420743/', publisher: 'Journal of the American Veterinary Medical Association' },
]
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Weight Management in Dogs and Cats', description: 'Dog body-condition scoring and a calorie example. Cats use the body condition score tool and the cat calorie calculator.', url: 'https://vets.co/health/weight-management', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-10-05T00:00:00Z' ,
  citation: SOURCES,
})
const med = buildMedicalWebPageSchema({ name: 'Weight Management in Dogs and Cats', description: 'Dog body-condition scoring and a calorie example. Cat checks use the body condition score tool and the cat calorie calculator.', url: 'https://vets.co/health/weight-management', authorName: 'Vets.co Editorial', lastReviewed: '2026-06-07' })
const combined = combineSchemas(schema, med)

export default function WeightManagementPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Weight Management in Dogs and Cats', subtitle: 'Roughly 59% of US dogs are overweight or obese (APOP 2022 survey). Excess weight is not a cosmetic issue — it is the leading modifiable risk factor for arthritis, diabetes, respiratory disease, cardiac stress, reduced mobility, and shortened lifespan in dogs. A dog at ideal body weight lives on average ~1.8 years longer than the same dog kept overweight (Kealy et al., Purina Lifespan Study, JAVMA 2002). That survey figure is for dogs. Cat checks are the tools linked below, not this dog example.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', publishedAt: 'May 2025', readTime: '9 min',}}
        heroHop={<>
          <PrimaryHop href="/go/amazon-brand/digital+pet+scale?s=health-weight-management" label="Search Amazon for a digital pet scale" />
          <HopDisclosure tone="on-dark" siteId="vets-co" href="/go/amazon-brand/digital+pet+scale?s=health-weight-management" />
        </>}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Weight Management', href: '/health/weight-management' }]}
        relatedLinks={[
          { title: 'Daily Cat Food Grams', href: '/tools/cat-food-amount-calculator', category: 'Tool' },
          { title: 'Cat Body Condition Score Tool', href: '/tools/cat-body-condition-score', category: 'Tool' },
          { title: 'Cat Calorie Calculator', href: '/tools/cat-calorie-calculator', category: 'Tool' },
          { title: 'Health Conditions', href: '/health', category: 'Hub' },
          { title: 'Arthritis in Dogs', href: '/health/arthritis-in-dogs', category: 'Veterinary Guide' },
          { title: 'Senior Dog Care', href: '/health/senior-pet-care', category: 'Veterinary Guide' },
          { title: 'Preventive Care Schedule', href: '/health/preventive-care-schedule', category: 'Veterinary Guide' },
        ]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">BCS 9-Point Scale</div>
            {[['1–3', 'Underweight — ribs visible, no fat cover'], ['4–5', 'Ideal — ribs easily felt, visible waist'], ['6–7', 'Overweight — ribs difficult to feel'], ['8–9', 'Obese — ribs not palpable, no waist']].map(([s, d]) => (
              <div key={s} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">BCS {s}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Cat body condition score', href: '/tools/cat-body-condition-score' }, { label: 'Cat calorie calculator', href: '/tools/cat-calorie-calculator' }, { label: 'Daily cat food grams', href: '/tools/cat-food-amount-calculator' }, { label: 'Arthritis in Dogs', href: '/health/arthritis-in-dogs' }, { label: 'Senior Dog Care', href: '/health/senior-pet-care' }, { label: 'Find a Vet', href: '/find-a-vet' }]} />

                  <CrossPortfolioCard currentSite="vets-co" contentType="health" variant="sidebar" />
</>}
      >
        <div className="carloOS-article">
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the kitchen-scale portioning notes
            </p>

          </div>

          <h2>Cats use different tools</h2>
          <p>The scoring steps and the calorie example below are for a dog. A cat is not that example. The <Link href="/tools/cat-body-condition-score">cat body condition score</Link> tool uses rib, waist, and abdominal-pad checks on a 1–9 scale. The <Link href="/tools/cat-calorie-calculator">cat calorie calculator</Link> uses feline life-stage factors, not the dog formula on this page. That calculator says a rapid cut in an overweight cat can trigger hepatic lipidosis, so a veterinarian sets the target and the rate of change.</p>
          <div id="cat-weight-next" className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Cat next step
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/tools/cat-body-condition-score" className="inline-block bg-brand-primary text-white font-semibold px-5 py-2.5 rounded-md no-underline hover:bg-brand-primary-dark">
                Score a cat →
              </Link>
              <Link href="/tools/cat-calorie-calculator" className="inline-block bg-brand-primary text-white font-semibold px-5 py-2.5 rounded-md no-underline hover:bg-brand-primary-dark">
                Estimate cat calories →
              </Link>
            </div>
          </div>

          <h2>Body Condition Score — Assess Your Dog Accurately</h2>
          <p>The 9-point body condition score (BCS) system provides a standardized way to assess fat stores regardless of breed or size. Weight alone is meaningless — a 70-lb Labrador at BCS 5 is ideal; a 70-lb Labrador at BCS 7 is significantly overweight. BCS assesses body composition through hands-on palpation and visual inspection.</p>
          <p><strong>How to assess BCS:</strong> Run your hands along both sides of the ribcage. At BCS 4–5 (ideal): you feel ribs easily with light pressure — like running fingers over the back of your hand. At BCS 6–7: you must press harder to feel ribs — like pressing on your palm. At BCS 8–9: ribs are not palpable or require significant pressure — like pressing on your abdomen. Look at the dog from above (waist visible?) and from the side (abdominal tuck?). A healthy dog has a visible waist and abdominal tuck at BCS 4–5.</p>

          <h2>Calculating Weight Loss Calorie Targets</h2>
          <p>Weight loss requires a caloric deficit — the dog must eat less than it burns. The calculation:</p>
          <ol>
            <li>Determine ideal body weight (your veterinarian can help — it is not the dog's current weight if overweight)</li>
            <li>Calculate Resting Energy Requirement (RER) at ideal weight: RER = 70 × (ideal weight in kg)^0.75</li>
            <li>Weight loss calorie target = RER × 1.0 (no multiplier — this is a deficit compared to maintenance)</li>
            <li>Divide by the caloric density of the food (kcal/cup on the bag) to get cups per day</li>
          </ol>
          <p>Example: A 35-lb Labrador with an ideal weight of 28 lbs (12.7 kg). RER = 70 × 12.7^0.75 = 70 × 6.7 = 469 kcal/day. If the food is 350 kcal/cup, feed 469/350 = 1.34 cups per day. This is typically 20–30% less than current intake — significant enough to drive weight loss without causing muscle loss.</p>

          <h2>Prescription Weight Management Diets</h2>
          <p>Prescription weight management diets (Hill's Metabolic, Royal Canin Satiety, Purina Pro Plan Overweight Management) are significantly more effective than calorie-restricting regular food. They achieve this by:</p>
          <ul>
            <li><strong>High protein, low carbohydrate:</strong> Protein has higher satiety and thermic effect than carbohydrate. High protein preserves lean muscle mass during calorie restriction — critical, as standard calorie restriction causes both fat and muscle loss.</li>
            <li><strong>High fiber:</strong> Adds volume without calories — the dog feels fuller on fewer calories. L-carnitine in many WM diets supports fat metabolism.</li>
            <li><strong>Controlled calorie density:</strong> The dog can eat a more normal volume (psychologically important for dogs food-motivated enough to develop obesity) while consuming fewer calories.</li>
          </ul>
          <p>Clinical trial data shows prescription WM diets produce faster and more sustainable weight loss than calorie-restricted regular food. Hill's Metabolic in particular has published trial data showing significant body fat reduction with minimal muscle loss. Requires a prescription and veterinary guidance on appropriate feeding amounts.</p>

          <h2>Practical Weight Loss Management</h2>
          <p><strong>Measure food precisely.</strong> Use a kitchen scale, not a measuring cup — cups vary by 20–30% depending on how tightly packed. A kitchen scale that measures in grams eliminates this variability. Weigh every meal.</p>
          <p><strong>Count treats.</strong> Treats are calories. Ten medium-sized training treats per day for a small dog may represent 15–20% of daily caloric allowance. Either eliminate treats or switch to very low-calorie options (small pieces of carrot, cucumber, green beans) and count them against the daily total.</p>
          <p><strong>All family members must comply.</strong> One person covertly giving extra food or treats eliminates the deficit. Weight management requires household-wide consistency. Identify who is feeding extra and address it directly — it is the most common reason veterinary weight management fails.</p>
          <p><strong>Weigh monthly.</strong> A loss of 1–2% of body weight per month is a planning figure on this page — faster loss causes muscle loss. Monthly weigh-ins on the same scale track progress and identify when adjustment is needed. If not losing weight after 4 weeks of strict compliance, reduce food by another 10%.</p>

          <h2 id="kit">Kitchen-scale portioning kit</h2>
          <p>Everyday physical supplies that match the portioning copy above — a kitchen scale that measures in grams, plus a portion-control food scale for weighing every meal. Measuring cups stay off this kit: the copy says they vary by 20–30%. Carrot, cucumber, and green-bean pieces named as low-calorie treat swaps are produce, not a retail treat hop. Prescription weight-management diets (Hill&apos;s Metabolic, Royal Canin Satiety, Purina Pro Plan Overweight Management) stay educational copy only — this page never hops Rx food, brand ASINs, or medication. This page does not claim hands-on testing.</p>

          <HopDisclosure siteId="vets-co" href={["/go/amazon-brand/kitchen+gram+scale?s=health-weight-management", "/go/amazon-brand/portion+control+food+scale+dog?s=health-weight-management"]} />

          {/* Money path — live amazon-brand search hops (kitchen / food gram scale).
              ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
              Category searches only — reuse live sister queries from the
              dog calorie calculator (kitchen+gram+scale) and dog
              ideal-weight / BCS tools (portion+control+food+scale+dog).
              Measuring cups, commercial treat ASINs, prescription WM
              diets, and medication are not shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop related supplies
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">Amazon search links go to general supplies. They are not a ranked product list and they do not replace veterinary care.</p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/kitchen+gram+scale?s=health-weight-management"
                amazonLabel="Browse kitchen gram scales on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/portion+control+food+scale+dog?s=health-weight-management"
                amazonLabel="Browse portion-control food scales on Amazon →"
              />
          </div>
          </div>

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}

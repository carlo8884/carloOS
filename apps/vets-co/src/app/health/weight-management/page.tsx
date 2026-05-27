import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Dog Weight Management — BCS Scoring, Calorie Math & Prescription Diets | Vets.co', description: 'How to assess your dog\'s body condition score, calculate calorie targets for weight loss, choose appropriate food, and when to use prescription weight management diets.', path: '/health/weight-management', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Dog Weight Management Guide', description: 'Body condition scoring, calorie calculation, and prescription diets for dog weight management.', url: 'https://vets.co/health/weight-management', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Dog Weight Management', description: 'BCS scoring, calorie targets, and dietary management for overweight dogs.', url: 'https://vets.co/health/weight-management', authorName: 'Vets.co Editorial', lastReviewed: '2025-05-01' })
const combined = combineSchemas(schema, med)

export default function WeightManagementPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Dog Weight Management', subtitle: 'Roughly 59% of US dogs are overweight or obese (APOP 2022 survey). Excess weight is not a cosmetic issue — it is the leading modifiable risk factor for arthritis, diabetes, respiratory disease, cardiac stress, reduced mobility, and shortened lifespan in dogs. A dog at ideal body weight lives on average ~1.8 years longer than the same dog kept overweight (Kealy et al., Purina Lifespan Study, JAVMA 2002).', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Weight Management', href: '/health/weight-management' }]}
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
          <RelatedLinks title="Related Guides" links={[{ label: 'Senior Dog Care', href: '/health/senior-pet-care' }, { label: 'Preventive Care Schedule', href: '/health/preventive-care-schedule' }, { label: 'Find a Vet', href: '/find-a-vet' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-weight-mgmt" />
        </>}
      >
        <div className="carloOS-article">
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
          <p><strong>Weigh monthly.</strong> Expect 1–2% body weight loss per month — faster loss causes muscle loss. Monthly weigh-ins on the same scale track progress and identify when adjustment is needed. If not losing weight after 4 weeks of strict compliance, reduce food by another 10%.</p>
        </div>
      </ArticleLayout>
    </>
  )
}

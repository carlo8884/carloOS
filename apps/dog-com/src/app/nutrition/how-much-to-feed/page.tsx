import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'How Much to Feed Your Dog — By Weight, Age & Activity Level | Dog.com', description: 'Dog feeding amounts based on current weight, ideal weight, life stage, and activity level. Body condition scoring explained. research-based.', path: '/nutrition/how-much-to-feed', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'How Much to Feed Your Dog', description: 'Feeding amounts by weight, age, and activity level.', url: 'https://dog.com/nutrition/how-much-to-feed', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

const BCS_DESCRIPTIONS = [
  { score: '1–2', label: 'Emaciated / Underweight', desc: 'Ribs, spine, and hip bones visible with no need to touch. Obvious muscle loss. Veterinary attention required.' },
  { score: '3–4', label: 'Thin', desc: 'Ribs easily felt, some spine and hip bone visible. Waist and abdominal tuck obvious. Slightly underweight — increase food 10%.' },
  { score: '4–5', label: 'Ideal', desc: 'Ribs felt easily without pressing but not visible. Waist visible from above. Abdominal tuck present when viewed from side. This is the target.' },
  { score: '6–7', label: 'Overweight', desc: 'Ribs felt with firm pressure only. Waist not visible or barely discernible. No abdominal tuck. Reduce food 10–15%.' },
  { score: '8–9', label: 'Obese', desc: 'Ribs not palpable under fat layer. Heavy fat deposits over lumbar, face, and limb junctions. Distended abdomen. Veterinary weight management plan required.' },
]

export default function HowMuchToFeedPage() {
  return (
    <ArticleLayout
      siteId="dog-com"
      hero={{ title: 'How Much to Feed Your Dog', subtitle: 'There is no universal feeding amount — caloric needs depend on weight, ideal weight, age, activity level, and whether your dog is spayed or neutered. This guide gives you the framework.', category: 'Nutrition Guide', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '8 min',}}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Nutrition', href: '/nutrition' }, { name: 'How Much to Feed', href: '/nutrition/how-much-to-feed' }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[{ label: 'Body Condition Scoring', href: '#bcs' }, { label: 'Using Package Guidelines', href: '#guidelines' }, { label: 'Calorie Calculator', href: '#calculator' }, { label: 'Adjusting for Activity', href: '#activity' }, { label: 'Puppies', href: '#puppies' }, { label: 'Senior Dogs', href: '#seniors' }]} />
        <RelatedLinks title="Related" links={[{ label: 'Best Dry Dog Food 2025', href: '/reviews/best-dry-dog-food' }, { label: 'Puppy Nutrition', href: '/nutrition/puppy-nutrition' }, { label: 'Senior Dog Care', href: '/health/senior-dog-care' }]} />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance every Tuesday." source="nutrition-how-much" />
      </>}
    >
      <div className="carloOS-article">
        <h2 id="bcs">Body Condition Score — The Most Important Tool</h2>
        <p>Calorie tables and package guidelines are starting points. The definitive measure of whether you are feeding the right amount is your dog&apos;s body condition score (BCS) — a standardized 9-point scale that assesses body fat relative to muscle and frame. No formula accounts for every individual variation; BCS is how you interpret the result.</p>
        <p>Check your dog&apos;s BCS monthly — the same day each month is easiest to remember. Adjust food based on trajectory, not single readings.</p>
        <div style={{ borderRadius: '12px', overflow: 'hidden', margin: '20px 0', border: '1px solid var(--brand-border)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <thead><tr style={{ background: 'var(--brand-dark)' }}>{['BCS Score', 'Assessment', 'What to Feel & See'].map(h => <th key={h} style={{ padding: '11px 15px', textAlign: 'left', color: 'white', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{h}</th>)}</tr></thead>
            <tbody>{BCS_DESCRIPTIONS.map((row, i) => (
              <tr key={row.score} style={{ background: i % 2 === 0 ? 'white' : 'var(--brand-surface)' }}>
                <td style={{ padding: '10px 15px', borderTop: '1px solid var(--brand-border)', fontWeight: 700, color: i === 2 ? 'var(--brand-success)' : i >= 3 ? 'var(--brand-danger)' : 'var(--brand-warning)' }}>{row.score}</td>
                <td style={{ padding: '10px 15px', borderTop: '1px solid var(--brand-border)', fontWeight: 600, color: 'var(--brand-dark)' }}>{row.label}</td>
                <td style={{ padding: '10px 15px', borderTop: '1px solid var(--brand-border)', color: 'var(--brand-text-mid)', fontSize: '13px' }}>{row.desc}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>

        <h2 id="guidelines">Using Package Feeding Guidelines</h2>
        <p>Feeding guidelines on dog food bags are a starting point calibrated for an average adult dog at each weight. They are typically on the higher end — manufacturers have an incentive to recommend feeding more food, not less. Start at the low end of the suggested range and adjust based on BCS over 4–6 weeks.</p>
        <p><strong>Critical rule:</strong> use your dog&apos;s <em>ideal</em> body weight, not their current weight, if they are overweight. A dog that should weigh 60 lbs but currently weighs 75 lbs should be fed based on the 60-lb guideline — feeding based on actual weight perpetuates excess caloric intake.</p>

        <h2 id="calculator">Resting Energy Requirement (RER) Formula</h2>
        <p>For a more precise starting point, use the RER formula veterinary nutritionists use:</p>
        <p style={{ background: 'var(--brand-primary-pale)', padding: '16px 20px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '15px' }}><strong>RER (kcal/day) = 70 × (body weight in kg)<sup>0.75</sup></strong></p>
        <p>Then multiply by a life stage factor:</p>
        <ul>
          <li>Intact adult: RER × 1.8</li>
          <li>Neutered adult: RER × 1.6</li>
          <li>Active/working adult: RER × 2.0–5.0 (depending on intensity)</li>
          <li>Overweight dog: RER × 1.0 (for weight loss)</li>
          <li>Puppy (4 months to adult): RER × 2.0</li>
          <li>Senior inactive: RER × 1.4</li>
        </ul>
        <p>This gives you a daily calorie target. Divide by the calories per cup of your specific food (listed on the bag as kcal/cup) to get daily cup amount.</p>

        <h2 id="activity">Adjusting for Activity Level</h2>
        <p>Activity dramatically affects caloric needs. A working Border Collie may need 2–3x the calories of a similarly-sized couch dog. Monitor BCS monthly and adjust by 10% increments when the score drifts from ideal. Do not make large sudden changes — gradual adjustment is easier to calibrate.</p>

        <h2 id="puppies">Puppies — Different Rules Apply</h2>
        <p>Puppies need significantly more calories per pound than adults, but overfeeding is a real risk — particularly in large and giant breeds where rapid growth contributes to orthopedic disease. Feed a <em>large breed puppy formula</em> (lower calcium-to-phosphorus ratio) for any dog expected to exceed 50 lbs as an adult. Follow the puppy-specific guidelines on the bag, adjusting to BCS monthly.</p>

        <h2 id="seniors">Senior Dogs — Adjust for Metabolic Slowdown</h2>
        <p>Senior dogs have lower metabolic rates. The portions that maintained ideal weight at age 4 will cause gradual weight gain by age 9 if not adjusted. Reduce portions by 10–15% when your dog enters senior status and monitor BCS monthly. Dogs with kidney disease need prescription diet portioning guidance from their veterinarian.</p>
      </div>
    </ArticleLayout>
  )
}

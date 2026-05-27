import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Dog Weight Management — Safe Weight Loss Protocol | Dog.com', description: 'Roughly 59% of US dogs are overweight (APOP 2022 survey).', path: '/nutrition/weight-management', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Dog Weight Management', description: 'Safe weight loss protocol, caloric reduction, and prescription diet options.', url: 'https://dog.com/nutrition/weight-management', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

export default function WeightManagementPage() {
  return (
    <ArticleLayout
      siteId="dog-com"
      hero={{ title: 'Dog Weight Management', subtitle: 'Roughly 59% of US dogs are overweight or obese (APOP 2022 survey) — a number that has risen every year for two decades. Obesity shortens lifespan, accelerates joint disease, increases cancer risk, and reduces quality of life. Here\'s the protocol.', category: 'Nutrition', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '9 min',}}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Nutrition', href: '/nutrition' }, { name: 'Weight Management', href: '/nutrition/weight-management' }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[{ label: 'Is My Dog Overweight?', href: '#assess' }, { label: 'Why Weight Matters', href: '#why' }, { label: 'Safe Caloric Reduction', href: '#reduction' }, { label: 'Weight Management Diets', href: '#diets' }, { label: 'Exercise Protocol', href: '#exercise' }, { label: 'Tracking Progress', href: '#tracking' }]} />
        <RelatedLinks title="Related" links={[{ label: 'How Much to Feed', href: '/nutrition/how-much-to-feed' }, { label: 'Best Dry Dog Food 2025', href: '/reviews/best-dry-dog-food' }, { label: 'Senior Dog Care', href: '/health/senior-dog-care' }]} />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance every Tuesday." source="nutrition-weight" />
      </>}
    >
      <div className="carloOS-article">
        <h2 id="assess">Is My Dog Overweight? The Body Condition Score</h2>
        <p>Scale weight is misleading without body condition context. A large-framed dog may be 80 lbs and lean; a small-framed dog may be 60 lbs and obese. Body condition scoring (BCS) is the correct tool.</p>
        <p><strong>Run your hands along both sides of your dog&apos;s ribcage.</strong> Can you feel each rib easily without pressing? Can you see a waist when you look down from above? Can you see an abdominal tuck (belly rising toward hindquarters) when viewed from the side? If yes to all three: ideal weight. If ribs are difficult to feel, no waist is visible, and no tuck: overweight. If ribs are buried under fat, abdomen is distended: obese.</p>

        <h2 id="why">Why Weight Matters Beyond Aesthetics</h2>
        <p>The 2002 Purina Lifespan Study — the most rigorous dog longevity study conducted — found that lean dogs lived a median of 1.8 years longer than their overweight littermates. That is not a minor benefit. Additional documented consequences of obesity in dogs:</p>
        <ul>
          <li><strong>Joint disease:</strong> Each pound above ideal adds approximately 4 lbs of force to each knee and hip joint with every step. Obesity directly accelerates the progression of hip and elbow dysplasia, osteoarthritis, and cruciate ligament disease.</li>
          <li><strong>Diabetes mellitus</strong></li>
          <li><strong>Respiratory compromise</strong> — particularly in brachycephalic breeds where fat deposits worsen already compromised airways</li>
          <li><strong>Increased cancer risk</strong> — the association is documented, though mechanism is not fully established</li>
          <li><strong>Reduced immune function</strong></li>
          <li><strong>Heat intolerance</strong></li>
          <li><strong>Surgical risk</strong> — obese dogs have significantly higher anesthetic and surgical complications</li>
        </ul>

        <h2 id="reduction">Safe Caloric Reduction Protocol</h2>
        <p>Safe weight loss is 1–2% of body weight per month. Faster loss risks muscle mass depletion (which reduces metabolism, making further loss harder) and, in cats, hepatic lipidosis (not typically a risk in dogs but worth noting the principle of too-fast loss).</p>
        <ol>
          <li><strong>Get a baseline weight:</strong> Weigh your dog at a veterinary clinic or pet store scale. Record it.</li>
          <li><strong>Calculate ideal weight:</strong> Work with your veterinarian if unsure. The dog&apos;s current body condition score suggests how far off ideal you are.</li>
          <li><strong>Calculate target caloric intake:</strong> Feed based on ideal body weight, not current weight. Use the RER formula (70 × ideal weight in kg^0.75) × appropriate life stage factor (1.0 for weight loss, lower than maintenance). Most dogs lose weight on 60–80% of their calculated maintenance calorie intake at ideal weight.</li>
          <li><strong>Measure everything:</strong> Use a kitchen scale, not volume measurements. Calories in a cup of kibble vary by 30–40% depending on how the cup is filled. Treats count — track them and subtract from daily allocation.</li>
          <li><strong>Monitor monthly:</strong> Weigh at the same time (pre-meal, post-elimination) on the same scale each month. Adjust intake by 10% if not losing at target rate, or if losing faster than 2% per month (too fast).</li>
        </ol>

        <h2 id="diets">Weight Management Diets</h2>
        <p><strong>Prescription weight management diets:</strong> Hill&apos;s Prescription Diet Metabolic, Royal Canin Satiety Support, and Purina Pro Plan Veterinary Diets OM are the most-studied prescription weight management options. These are specifically formulated to reduce caloric density while maintaining satiety (high fiber) and preserving muscle mass (high protein). Proven to produce greater weight loss than regular reduced-portion feeding of maintenance food in clinical studies.</p>
        <p><strong>Over-the-counter weight management foods:</strong> Hill&apos;s Science Diet Perfect Weight and Purina Pro Plan Weight Management are the OTC options with the best evidence base. Avoid random &quot;lite&quot; or &quot;weight control&quot; labels without WSAVA-compliant manufacturer credentials behind them.</p>
        <p><strong>Adding green beans or pumpkin:</strong> Adding plain canned green beans (no sodium added) to existing food increases volume without meaningfully increasing calories — reduces the sensation of deprivation for dogs that wolf their food. Not a substitute for a proper weight management plan but a useful adjunct for food-motivated dogs.</p>

        <h2 id="exercise">Exercise Protocol for Overweight Dogs</h2>
        <p>Exercise alone rarely produces meaningful weight loss in dogs — the numbers simply don&apos;t support it. A 50-lb dog burns approximately 25–35 calories per mile walked. Reducing food intake by 100 kcal/day produces far more weight loss than adding walking. That said, exercise is essential for health during weight loss because it preserves muscle mass (calories from food restriction are not all from fat — muscle is also catabolized without exercise stimulus).</p>
        <p>For overweight dogs starting exercise: begin gently. A dog carrying significant excess weight has stressed joints. Start with short, flat, low-impact walks (10–15 minutes) and build over weeks. Swimming is ideal for overweight arthritic dogs: full cardiovascular and muscular workout with zero joint impact. Avoid high-impact exercise (fetch, jumping, running) until excess weight is reduced and joints are assessed.</p>

        <h2 id="tracking">Tracking Progress</h2>
        <ul>
          <li>Weigh monthly, same conditions (time, scale, pre-meal)</li>
          <li>BCS at each weigh-in — as fat decreases, ribs become more palpable, waist becomes more defined</li>
          <li>Adjust intake by 10% if not meeting the 1–2%/month target</li>
          <li>Recheck with your veterinarian at 3-month intervals during active weight loss — bloodwork may need to be monitored depending on the dog&apos;s health status</li>
          <li>Target: reach ideal weight, then recalculate maintenance intake at the new weight and maintain indefinitely</li>
        </ul>
        <p>Weight management is lifelong, not temporary. A dog that loses weight on a restricted diet and then returns to previous intake will regain the weight. Maintenance monitoring — BCS monthly, weight every 3 months — is the correct long-term approach.</p>
      </div>
    </ArticleLayout>
  )
}

import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Dog Obesity — Health Risks, Causes & Weight Loss Plan | Dog.com', description: 'Over 50% of US dogs are overweight. Dog obesity causes arthritis, diabetes, cancer, and shortened lifespan. Reference guide to body condition scoring and safe weight loss.', path: '/health/dog-obesity', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Dog Obesity — Health Risks and Weight Loss', description: 'Body condition scoring, health risks, and safe weight loss for overweight dogs.', url: 'https://dog.com/health/dog-obesity', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Dog Obesity', description: 'Health risks and weight management for overweight dogs.', url: 'https://dog.com/health/dog-obesity', authorName: 'Dog.com Editorial', lastReviewed: '2025-05-01' })
const combined = combineSchemas(schema, med)

export default function DogObesityPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'Dog Obesity — Health Risks & Weight Loss Plan', subtitle: 'Over half of dogs in the US are overweight or obese — and most owners do not realize it because overweight has become the visual norm. Excess weight is not cosmetic. It shortens lifespan and causes or worsens arthritis, diabetes, cancer, and cardiac disease.', category: 'Dog Health', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: 'Dog Obesity', href: '/health/dog-obesity' }]}
        sidebar={<>
          <TableOfContents items={[{ label: 'Body Condition Scoring', href: '#bcs' }, { label: 'Health Consequences', href: '#risks' }, { label: 'Causes', href: '#causes' }, { label: 'Weight Loss Plan', href: '#plan' }, { label: 'Breeds at Risk', href: '#breeds' }]} />
          <RelatedLinks title="Related Guides" links={[{ label: 'How Much to Feed', href: '/nutrition/how-much-to-feed' }, { label: 'Weight Management', href: '/nutrition/weight-management' }, { label: 'Best Joint Supplements', href: '/reviews/best-joint-supplements' }]} />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="health-obesity" />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="bcs">Body Condition Scoring — The Correct Assessment</h2>
          <p>Weight alone is insufficient — a 70-lb Labrador can be ideal weight or significantly overweight depending on frame size. Body condition scoring (BCS) uses palpation and visual assessment on a 1–9 scale:</p>
          <ul>
            <li><strong>BCS 4–5 (ideal):</strong> Ribs easily felt with light pressure, not visible. Waist visible from above. Abdominal tuck visible from the side.</li>
            <li><strong>BCS 6–7 (overweight):</strong> Ribs felt with firm pressure. Waist barely visible or absent. Minimal abdominal tuck.</li>
            <li><strong>BCS 8–9 (obese):</strong> Ribs difficult or impossible to feel. No waist. Abdomen rounded. Fat deposits over lumbar area, base of tail, and neck.</li>
          </ul>
          <p>Check your dog monthly. The ribs test is the most reliable single indicator — you should be able to feel each rib with light finger pressure, the way you feel the back of your hand. If you have to press firmly to feel ribs, the dog is overweight.</p>

          <h2 id="risks">Health Consequences of Obesity</h2>
          <ul>
            <li><strong>Osteoarthritis:</strong> Each pound above ideal adds approximately 4 pounds of force on each joint per step. Obesity is both a cause and a major accelerant of arthritis. Weight loss is the single most effective arthritis intervention in overweight dogs — more effective than NSAIDs alone.</li>
            <li><strong>Diabetes mellitus:</strong> Adipose tissue produces inflammatory cytokines that cause insulin resistance. Obese dogs develop type 2-equivalent diabetes at significantly higher rates than lean dogs.</li>
            <li><strong>Cancer:</strong> Adipose tissue is metabolically active and produces hormones and growth factors that promote certain cancers. Obesity is an established cancer risk factor in dogs.</li>
            <li><strong>Respiratory compromise:</strong> Excess thoracic fat reduces lung capacity. Brachycephalic breeds (Bulldogs, Frenchies, Pugs) with existing airway compromise are severely worsened by obesity.</li>
            <li><strong>Shortened lifespan:</strong> A Purina lifetime study showed that dogs maintained at lean body condition lived 1.8 years longer on average than dogs allowed to be moderately overweight — and had significantly delayed onset of chronic disease.</li>
          </ul>

          <h2 id="causes">Why Dogs Become Obese</h2>
          <p><strong>Overfeeding</strong> is the primary cause — specifically, feeding by appearance ("the bowl looks empty") rather than measured portion. Feeding guidelines on food bags are calibrated for an active, unspayed/unneutered dog — the average spayed/neutered, moderately active indoor dog needs 20–30% fewer calories than the bag suggests.</p>
          <p><strong>Treats</strong> are the most commonly underestimated calorie source. A single commercial dog treat may contain 30–50 calories. A 20-lb dog's daily caloric need is approximately 400 calories — 3–4 treats is 25–40% of daily intake before any meals are counted.</p>
          <p><strong>Breed predisposition:</strong> Labradors, Beagles, Cavalier King Charles Spaniels, Cocker Spaniels, Pugs, and Basset Hounds have documented genetic predispositions to obesity — reduced satiety signaling, lower resting metabolic rates, or both. These breeds require more vigilant management.</p>
          <p><strong>Spay/neuter:</strong> Reduces resting metabolic rate by approximately 20–30%. Caloric intake must be reduced after surgery — this is not optional, it is metabolic reality.</p>

          <h2 id="plan">Safe Weight Loss Plan</h2>
          <p>Target rate: 1–2% of body weight per week. Faster weight loss risks muscle mass loss rather than fat. Slower weight loss is acceptable but requires patience.</p>
          <ol>
            <li><strong>Establish a calorie target:</strong> Calculate resting energy requirement (RER = 70 × body weight in kg^0.75) × 1.0 for weight loss (vs 1.4–1.6 for maintenance). Feed 20–30% below calculated maintenance.</li>
            <li><strong>Measure all food:</strong> Use a digital kitchen scale — measuring cups are inaccurate by 20–30% depending on kibble size. Weigh food in grams.</li>
            <li><strong>Eliminate or account for all treats:</strong> Use kibble from the daily ration as treats. Or choose very low-calorie treats (carrot pieces, plain cooked chicken in small amounts) and subtract from the daily total.</li>
            <li><strong>Switch to a weight management diet:</strong> Hill's Prescription Diet Metabolic, Royal Canin Satiety Support, or Purina Pro Plan Weight Management. These are calorie-restricted and fiber-enriched to reduce hunger while cutting calories. Hill's Metabolic has clinical trial data showing superior results vs. standard reduced-calorie feeding.</li>
            <li><strong>Weigh monthly:</strong> Track progress. If losing faster than 2% per week, increase portion slightly. If not losing, reduce by 10% and recheck.</li>
          </ol>

          <h2 id="breeds">High-Risk Breeds — Extra Vigilance Required</h2>
          <p>Labrador Retrievers carry a documented mutation in the POMC gene affecting satiety signaling — they genuinely do not feel full the way other dogs do. This is not behavioral — it is physiological. Labradors require permanent portion control and should never be free-fed. The same applies to most Beagles, Cavalier King Charles Spaniels, and Cocker Spaniels to varying degrees.</p>
          <p>For these breeds: measure every meal, treat sparingly, weigh monthly, and maintain BCS 4–5 as a lifelong practice — not a periodic intervention when the dog gets heavy.</p>
        </div>
      </ArticleLayout>
    </>
  )
}

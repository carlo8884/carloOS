import type { Metadata } from 'next'
import {
  buildMetadata,
  ArticleLayout,
  FAQAccordion,
  EmailCapture,
  RelatedLinks,
  TableOfContents,
} from '@carloOS/ui'
import {
  buildArticleSchema,
  buildMedicalWebPageSchema,
  buildFAQSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Dog Obesity — Health Risks, Causes & Weight Loss Plan | Dog.com',
  description:
    'About 59% of US dogs are overweight (APOP 2022). Obesity shortens lifespan and drives arthritis and diabetes. Structured weight-loss plan inside.',
  path: '/health/dog-obesity',
  category: 'Dog Health',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Dog Obesity — Health Risks and Weight Loss',
  description:
    'Diagnosis (BCS 7–9), causes, lifespan consequences, and the evidence-based weight loss protocol for overweight and obese dogs.',
  url: 'https://dog.com/health/dog-obesity',
  imageUrl: '',
  authorName: 'Dog.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2026-05-28T00:00:00Z',
})
const med = buildMedicalWebPageSchema({
  name: 'Dog Obesity',
  description:
    'Diagnosis, lifespan consequences, and structured weight loss for overweight and obese dogs.',
  url: 'https://dog.com/health/dog-obesity',
  authorName: 'Dog.com Editorial',
  lastReviewed: '2026-05-28',
})

const FAQS = [
  {
    question: 'How do I know if my dog is overweight?',
    answer:
      'Body condition score (BCS) on the 1–9 WSAVA/AAHA scale is the standard. At BCS 6 you can feel ribs only with firmer pressure; at BCS 7 there is heavy fat over the ribs and the waist is gone; at BCS 8–9 ribs are not palpable. Scale weight alone is not enough — a 70-lb Labrador can be ideal or overweight depending on frame. See our body condition score guide for the full method.',
  },
  {
    question: 'How fast should an overweight dog lose weight?',
    answer:
      'AAHA Weight Management Guidelines recommend a target rate of approximately 1–2% of body weight per week. Faster rates risk muscle mass loss rather than fat loss; slower is acceptable but requires patience. Reaching ideal body condition often takes 6–12 months for moderately overweight dogs and 12–18 months for severely obese dogs.',
  },
  {
    question: 'Do prescription weight-loss diets actually work?',
    answer:
      'Yes, with clinical-trial support. Hill’s Prescription Diet Metabolic and Royal Canin Satiety Support are calorie-restricted and fiber-enriched to reduce hunger while cutting calories. Published trials including German and colleagues’ work in the International Journal of Obesity Supplements (2012) demonstrated superior weight loss outcomes with veterinary-formulated weight management diets versus simple caloric restriction of maintenance food. They also reduce hunger-driven food seeking, which improves owner compliance.',
  },
  {
    question: 'Does neutering really make dogs gain weight?',
    answer:
      'Neutering reduces resting metabolic requirements by approximately 20–30% within weeks of surgery. If the food portion is not reduced to match, weight gain follows reliably. This is metabolic, not behavioral. The fix is to recalculate the daily calorie target after surgery and feed by gram weight, not by the bag scoop. This is so consistent that AAHA includes a post-neuter calorie review in its weight management guidance.',
  },
  {
    question: 'My partner keeps giving the dog treats. What do I do?',
    answer:
      'Partner non-compliance is the most common cause of weight-loss failure that veterinarians cite. Two practical strategies: (1) measure out the entire daily treat ration in a labeled container each morning — when it is empty, no more treats from anyone; (2) replace high-calorie treats with low-calorie substitutes (carrot pieces, green beans, ice cubes) so the giving behavior continues without the calories. A vet-led conversation with the whole household often helps; the diet is a household project, not just one person’s.',
  },
]

const combined = combineSchemas(schema, med, buildFAQSchema({ questions: FAQS }))

export default function DogObesityPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="dog-com"
        contentType="health"
        hero={{
          title: 'Dog Obesity — Health Risks, Causes & Weight Loss Plan',
          subtitle:
            'Roughly 59% of US dogs are overweight or obese (APOP 2022 survey), and most owners do not realize it because overweight has become the visual norm. Excess weight is not cosmetic. It shortens lifespan, accelerates arthritis and diabetes, and impairs respiratory and cardiac function. The good news: structured weight loss works, and the protocol is well-defined.',
          category: 'Dog Health',
          authorName: 'Dog.com Editorial',
          authorAvatar: '🐾',
          publishedAt: 'May 2025',
          readTime: '13 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Dog Health', href: '/health' },
          { name: 'Dog Obesity', href: '/health/dog-obesity' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'Diagnosis (BCS)', href: '#diagnosis' },
                { label: 'Causes', href: '#causes' },
                { label: 'Health Consequences', href: '#consequences' },
                { label: 'Weight Loss Plan', href: '#plan' },
                { label: 'Prescription Diets', href: '#prescription' },
                { label: 'Activity Prescription', href: '#activity' },
                { label: 'Common Pitfalls', href: '#pitfalls' },
                { label: 'High-Risk Breeds', href: '#breeds' },
                { label: 'FAQ', href: '#faq' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Body Condition Score (BCS)', href: '/guides/dog-body-condition-score' },
                { label: 'How Much to Feed', href: '/nutrition/how-much-to-feed' },
                { label: 'Weight Management Diets', href: '/nutrition/weight-management' },
                { label: 'Dog Treats Guide', href: '/nutrition/dog-treats-guide' },
                { label: 'Dog Arthritis', href: '/health/dog-arthritis' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="dog-com"
              title="Free Dog Health Tips"
              subtitle="Practical guidance weekly."
              source="health-obesity"
            />
          </>
        }
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Dog.com Editorial"
            publishedAt="2025-05-01T00:00:00Z"
            updatedAt="2026-05-28T00:00:00Z"
            reviewedBy="Editorial team"
          />

          <CalloutBox variant="evidence" title="TL;DR — Dog obesity, in numbers">
            <p>
              <strong>About 59% of US dogs</strong> are overweight or obese (APOP 2022 survey).
            </p>
            <p>
              <strong>Lean dogs live ~1.8 years longer.</strong> Kealy et al., <em>JAVMA</em> 2002 — the Purina Lifespan Study.
            </p>
            <p>
              <strong>Diagnosis is BCS 6–9</strong> on the 1–9 scale (WSAVA/AAHA). <strong>Treatment is structured weight loss</strong>: prescription weight-management diet, measured feeding, controlled activity, and 1–2% body-weight loss per week.
            </p>
          </CalloutBox>

          <h2 id="diagnosis">Diagnosis — Body Condition Score, Not Just the Scale</h2>
          <DropCap>
            Weight alone is insufficient — a 70-lb Labrador can be ideal weight or significantly overweight depending on frame and muscle mass. The standard diagnostic tool is body condition scoring (BCS) on the 9-point scale published by the World Small Animal Veterinary Association (WSAVA) and used in the AAHA Weight Management Guidelines. Each one-point change on the scale corresponds to roughly 10–15% deviation from ideal body weight.
          </DropCap>
          <ul>
            <li><strong>BCS 4–5 (ideal):</strong> Ribs easily felt with light pressure, not visible. Waist visible from above. Abdominal tuck visible from the side.</li>
            <li><strong>BCS 6 (overweight):</strong> Ribs palpable with firmer pressure. Waist barely visible. Abdominal tuck reduced.</li>
            <li><strong>BCS 7 (heavy):</strong> Heavy fat over ribs. Waist absent. Fat deposits at base of tail and over lumbar spine.</li>
            <li><strong>BCS 8–9 (obese):</strong> Ribs difficult or impossible to palpate. Fat deposits over thorax, spine, base of tail, neck, and limbs. Abdomen distended.</li>
          </ul>
          <p>
            See our <a href="/guides/dog-body-condition-score" className="text-brand-primary hover:underline">body condition score guide</a> for the full three-test method (rib palpation, top-down waist, side-view tuck) and the breed adjustments that change what an ideal score looks like.
          </p>

          <h2 id="causes">Causes — Why Dogs Become Obese</h2>
          <p>
            <strong>Overfeeding.</strong> The primary driver. Feeding by appearance (&ldquo;the bowl looks empty&rdquo;) rather than measured weight is the most common error. Feeding guidelines printed on commercial food bags are calibrated for an active, intact dog of average build; the typical spayed/neutered, moderately active indoor companion needs roughly 20–30% fewer calories than the bag suggests.
          </p>
          <p>
            <strong>Treats.</strong> The most commonly underestimated calorie source. A single medium commercial dog treat may contain 30–50 kcal. For a 20-lb dog with a maintenance requirement of about 400 kcal, three treats is already 25–40% of the daily calorie target before any meal calories are counted. See our <a href="/nutrition/dog-treats-guide" className="text-brand-primary hover:underline">treats guide</a> for the 10% rule and how to budget treats.
          </p>
          <p>
            <strong>Low activity.</strong> Modern indoor companion dogs commonly receive less than 30 minutes of structured exercise per day. Energy intake calibrated for an active dog and energy expenditure of a sedentary dog is a reliable formula for slow weight gain.
          </p>
          <p>
            <strong>Neuter/spay.</strong> Resting metabolic rate falls by approximately 20–30% after gonadectomy, and food intake regulation is altered. If portions are not reduced after surgery, weight gain follows. AAHA explicitly recommends a calorie review at the post-surgery visit.
          </p>
          <p>
            <strong>Endocrine disease.</strong> Two clinical entities cause obesity without true overfeeding:
          </p>
          <ul>
            <li><strong>Hypothyroidism.</strong> Reduced thyroid hormone lowers basal metabolic rate; affected dogs also show lethargy, dull coat, weight gain despite normal or reduced intake, and cold intolerance. Diagnosed with a thyroid panel (free T4, TSH). Treatment is daily levothyroxine.</li>
            <li><strong>Hyperadrenocorticism (Cushing&rsquo;s disease).</strong> Excess cortisol causes truncal weight redistribution, pot-bellied appearance, muscle wasting, polyuria/polydipsia, panting, and dermatologic signs. Diagnosed with low-dose dexamethasone suppression or ACTH stimulation testing. See our <a href="/health/cushing-disease" className="text-brand-primary hover:underline">Cushing&rsquo;s disease</a> guide.</li>
          </ul>
          <p>
            Any obese dog with concurrent dermatologic, polyuric, or behavioral signs deserves an endocrine workup before assuming the problem is dietary.
          </p>

          <h2 id="consequences">Health Consequences — Why It Matters</h2>
          <ul>
            <li><strong>Shortened lifespan.</strong> The Purina Lifespan Study (Kealy et al., <em>JAVMA</em> 2002) followed 48 Labrador Retrievers through life. Dogs maintained at lean body condition (~BCS 4–5) lived a median 1.8 years longer than littermates maintained at moderately overweight body condition (~BCS 6–7). This is the strongest evidence in veterinary nutrition for the lifelong value of lean body condition.</li>
            <li><strong>Osteoarthritis.</strong> Each pound of excess weight adds roughly 4 pounds of force per step on each weight-bearing joint. Obesity is both a cause and a major accelerant of arthritis; weight loss is the single most effective arthritis intervention in overweight dogs — in many studies more effective than NSAIDs alone. See our <a href="/health/dog-arthritis" className="text-brand-primary hover:underline">dog arthritis</a> guide.</li>
            <li><strong>Diabetes mellitus.</strong> Adipose tissue produces inflammatory cytokines that drive insulin resistance. Obese dogs develop diabetes at higher rates than lean dogs. See our <a href="/health/dog-diabetes" className="text-brand-primary hover:underline">dog diabetes</a> guide.</li>
            <li><strong>Decreased hepatic function.</strong> Hepatic lipidosis and impaired drug metabolism are documented in chronically obese dogs.</li>
            <li><strong>Cardiac strain and reduced exercise tolerance.</strong> Excess thoracic and visceral fat reduces cardiac efficiency and exercise capacity.</li>
            <li><strong>Respiratory compromise.</strong> Excess thoracic and abdominal fat reduces functional lung volume. Brachycephalic breeds (Bulldog, French Bulldog, Pug, Boston Terrier) with existing airway compromise are dramatically worsened by obesity.</li>
            <li><strong>Anesthetic risk.</strong> Obese dogs have longer recoveries, more episodes of hypoventilation, and a higher rate of intra-operative complications. Surgery is harder to do on an obese dog.</li>
            <li><strong>Lower urinary tract disease and skin disease.</strong> Skin-fold infections and reduced grooming access in obese dogs are common preventable issues.</li>
          </ul>

          <h2 id="plan">The Weight Loss Plan — Vet-Supervised, Structured</h2>
          <p>
            Target rate: 1–2% of body weight per week, per AAHA Weight Management Guidelines. Faster weight loss disproportionately removes lean muscle mass; slower is acceptable but extends timeline.
          </p>
          <ol>
            <li><strong>Establish a baseline.</strong> Veterinary visit including weight, BCS, MCS (muscle condition score), and bloodwork to rule out endocrine disease. The bloodwork is not optional — treating undiagnosed hypothyroidism with caloric restriction will not work.</li>
            <li><strong>Set a target body weight.</strong> Estimate ideal weight by working back from current BCS — every BCS point above 5 corresponds to roughly 10–15% over ideal. Your vet sets the target collaboratively; the number should be specific (&ldquo;52 lb target&rdquo;) rather than vague (&ldquo;lose some weight&rdquo;).</li>
            <li><strong>Calculate calorie target.</strong> Resting Energy Requirement (RER) = 70 × (body weight in kg)<sup>0.75</sup>. For weight loss, target intake is typically 0.8–1.0 × RER calculated at the target body weight (not current weight). Many veterinary nutrition references and AAHA worksheets provide the calculation; your vet will produce the number for your specific dog.</li>
            <li><strong>Measure all food by weight.</strong> Use a digital kitchen scale and weigh kibble in grams. Measuring cups are inaccurate by 20–30% depending on kibble shape and how the cup is filled — published data documents this consistently. Gram weight is the only reliable measure.</li>
            <li><strong>Account for every treat.</strong> Within 5% of the calorie target if possible; subtract treat calories from the meal ration if treats exceed 10%. Use kibble from the daily ration as training treats, or switch to very low-calorie treats (carrot rounds, green beans, ice cubes).</li>
            <li><strong>Switch to a weight-management diet.</strong> See next section.</li>
            <li><strong>Weigh every 2 weeks.</strong> Adjust the calorie target by 10% in the appropriate direction if weekly loss is outside the 1–2% range.</li>
            <li><strong>Re-score BCS monthly.</strong> Scale weight alone can mislead during early weight loss (initial fluid shifts); BCS is the truth.</li>
          </ol>

          <h2 id="prescription">Prescription Weight-Management Diets</h2>
          <p>
            Veterinary therapeutic diets formulated for weight loss are typically calorie-restricted, higher in protein (to preserve lean mass), and higher in fiber (to increase satiety per calorie). The leading evidence-supported options:
          </p>
          <ul>
            <li><strong>Hill&rsquo;s Prescription Diet Metabolic.</strong> Clinical trials including controlled studies in dogs have shown faster, more reliable weight loss than uncontrolled caloric restriction. Available in dry and canned, and in a Metabolic + Mobility formulation for dogs with concurrent osteoarthritis.</li>
            <li><strong>Royal Canin Veterinary Diet Satiety Support Weight Management.</strong> High-fiber, high-protein, calorie-restricted formulation with published clinical data supporting weight loss and satiety.</li>
            <li><strong>Purina Pro Plan Veterinary Diets OM Overweight Management.</strong> An additional veterinary therapeutic option commonly stocked in clinics.</li>
          </ul>
          <p>
            Published reviews including German and colleagues, <em>International Journal of Obesity Supplements</em>, 2012, and subsequent veterinary nutrition reviews have demonstrated superior outcomes with formulated weight-management diets versus simple caloric restriction of a maintenance food, particularly in the rate of muscle mass preservation and the consistency of owner-reported satiety.
          </p>

          <CalloutBox variant="evidence" title="Why a therapeutic diet over &ldquo;feed less of the same food&rdquo;">
            <p>
              Severe caloric restriction of a maintenance food disproportionately cuts protein and micronutrients too. A therapeutic weight-loss diet is reformulated so that even at a restricted calorie target the dog still receives appropriate protein (to preserve lean mass), essential fatty acids, vitamins, and minerals. Hunger is also controlled with high fiber. This is the difference between &ldquo;the dog is hungry all the time and losing muscle&rdquo; and &ldquo;the dog is satisfied and losing fat.&rdquo;
            </p>
          </CalloutBox>

          <h2 id="activity">Activity Prescription — Slow, Structured, Joint-Aware</h2>
          <p>
            Activity is part of the plan, but for an obese dog with subclinical or clinical arthritis, the wrong activity makes the joints worse. Start low and build gradually:
          </p>
          <ul>
            <li><strong>Short, frequent walks</strong> (5–10 minutes, 2–3 times daily) instead of one long walk. Build duration weekly.</li>
            <li><strong>Underwater treadmill or hydrotherapy</strong> for severely obese or arthritic dogs. Warm water supports body weight and allows movement without joint load. Veterinary rehabilitation centers (CCRT-certified) offer this service.</li>
            <li><strong>Avoid high-impact play</strong> (chase, jump, hard turning) until weight has been substantially reduced. Acute orthopedic injury during weight-loss programs is a known setback.</li>
            <li><strong>Mental enrichment.</strong> Slow-feeder bowls, food-dispensing puzzle toys, and snuffle mats slow eating, increase mental effort per meal, and improve satiety without adding calories.</li>
          </ul>

          <h2 id="pitfalls">Common Pitfalls</h2>
          <ul>
            <li><strong>Too-aggressive caloric restriction.</strong> In cats, severe rapid weight loss can trigger hepatic lipidosis — a documented and serious risk that is the reason feline weight loss protocols cap weight loss at about 1% per week. In dogs the analogous risk is lower but not zero, and overly aggressive restriction also drives muscle loss, hunger-driven destructive behavior, and owner non-compliance. Stick to the 1–2% per week guidance.</li>
            <li><strong>Denying treats entirely.</strong> A treat-free plan is psychologically harder for owners and the dog; partner and child non-compliance follow. Better strategy: budget treats explicitly within the 10% rule, use treats as meal-replacement (subtract treat calories from kibble), or switch to ultra-low-calorie substitutes.</li>
            <li><strong>Partner non-compliance.</strong> The most common reason weight-loss plans fail. The whole household needs to be on the same plan. Pre-portion the day&rsquo;s food and treats into a labeled container each morning so everyone draws from the same allocation.</li>
            <li><strong>Measuring by volume, not weight.</strong> Cup-scoop variability is consistently 20–30%. Weigh in grams or use a calibrated scoop.</li>
            <li><strong>Stopping at &ldquo;better.&rdquo;</strong> Weight loss to BCS 6 from BCS 8 is progress but not the goal. Target is BCS 4–5; stopping early forfeits most of the lifespan and arthritis benefit.</li>
            <li><strong>Ignoring concurrent disease.</strong> Hypothyroidism, Cushing&rsquo;s, and severe arthritis all materially affect a weight-loss plan. Bloodwork and orthopedic exam at baseline.</li>
          </ul>

          <h2 id="breeds">High-Risk Breeds — Extra Vigilance Required</h2>
          <p>
            Labrador Retrievers carry a documented mutation in the POMC gene that affects satiety signaling — affected Labradors genuinely do not feel full the way other dogs do. The trait is physiological, not behavioral. Labradors require lifelong portion control and should not be free-fed. Similar predisposition patterns (reduced satiety signaling, lower resting metabolic rate, or both) are documented in Beagles, Cavalier King Charles Spaniels, Cocker Spaniels, Pugs, Basset Hounds, and Dachshunds.
          </p>
          <p>
            For these breeds, the management is the same as for any obese dog but with less margin for error: measure every meal, treat sparingly within the 10% rule, weigh monthly, and maintain BCS 4–5 as a lifelong baseline rather than a recovery target.
          </p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion
            items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
            allowMultiple
          />

          <CalloutBox variant="info" title="References">
            <p>
              Kealy RD et al. &ldquo;Effects of diet restriction on life span and age-related changes in dogs.&rdquo; <em>JAVMA</em> 220(9):1315–1320, 2002. • German AJ et al. &ldquo;Weight management in obese pets: the tailoring of a complex multi-faceted plan.&rdquo; <em>International Journal of Obesity Supplements</em> 2(Suppl 1):S33–S37, 2012 (and related German et al. work on canine weight management). • AAHA Weight Management Guidelines for Dogs and Cats (2014, updated 2021). • WSAVA Global Nutrition Committee — Nutritional Assessment Guidelines and Body Condition Score chart. • Association for Pet Obesity Prevention (APOP), 2022 US Pet Obesity Survey.
            </p>
          </CalloutBox>
        </div>
      </ArticleLayout>
    </>
  )
}

import type { Metadata } from 'next'
import {
  buildMetadata,
  ArticleLayout,
  FAQAccordion,
  EmailCapture,
  RelatedLinks, CrossPortfolioCard,
  TableOfContents,
  AffiliateDisclosure,
  ShopCtas,
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
  title: 'Dog Body Condition Score (BCS) — The 1–9 Scale | Dog.com',
  description:
    'Score your dog on the WSAVA/AAHA 1–9 body condition scale: rib palpation, waist and tuck checks, breed adjustments, and why BCS predicts lifespan.',
  path: '/guides/dog-body-condition-score',
  category: 'Dog Health Guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Dog Body Condition Score (BCS) — The 1–9 Scale Explained',
  description:
    'Owner’s guide to scoring a dog on the WSAVA/AAHA 1–9 body condition scale, with breed-specific adjustments and lifespan evidence.',
  url: 'https://dog.com/guides/dog-body-condition-score',
  imageUrl: '',
  authorName: 'Dog.com Editorial',
  publishedAt: '2026-05-28T00:00:00Z',
  modifiedAt: '2026-09-05T00:00:00Z',
})
const med = buildMedicalWebPageSchema({
  name: 'Dog Body Condition Score (BCS)',
  description:
    'Practical scoring guide using the WSAVA/AAHA 1–9 body condition scale.',
  url: 'https://dog.com/guides/dog-body-condition-score',
  authorName: 'Dog.com Editorial',
  lastReviewed: '2026-05-28',
})

const FAQS = [
  {
    question: 'What is a healthy body condition score for a dog?',
    answer:
      'On the WSAVA and AAHA 1–9 scale, a body condition score of 4 or 5 is the healthy target for most dogs. At BCS 4–5 you can feel the ribs easily with light pressure but not see them prominently, the waist is visible from above, and the abdomen tucks up from the chest to the groin when viewed from the side. BCS 1–3 indicates underweight; BCS 6–7 is overweight; BCS 8–9 is obese.',
  },
  {
    question: 'How often should I check my dog’s body condition?',
    answer:
      'AAHA recommends a body condition check at every veterinary visit, and a monthly self-check at home. Weight changes are gradual, and owners who see their dog every day often miss the trend. A monthly hands-on assessment paired with weighing on the same scale catches problems early, when small portion adjustments still work.',
  },
  {
    question: 'My greyhound looks skinny — is BCS 4 still right?',
    answer:
      'Sighthounds (Greyhounds, Whippets, Salukis, Borzoi) are genuinely lean dogs. At an ideal body condition score of 4 you can often see the last two or three ribs, the spine, and the hip points — which looks alarming to owners used to other breeds, but is healthy for the breed. The reverse applies to brachycephalic breeds like Bulldogs and Pugs: a Bulldog that looks chubby may actually be at BCS 5, because the breed carries thick skin folds and short, broad bone structure.',
  },
  {
    question: 'Does body condition really affect how long my dog lives?',
    answer:
      'Yes. The Purina Lifespan Study (Kealy et al., JAVMA 2002) followed 48 Labrador Retrievers through their entire lives. Dogs kept at a lean body condition (roughly BCS 4–5) lived a median of 1.8 years longer than littermates fed 25% more food who maintained a moderately overweight body condition (roughly BCS 6–7). They also developed clinical signs of osteoarthritis years later. This is the strongest evidence in veterinary medicine that lifelong lean body condition extends both lifespan and healthspan.',
  },
  {
    question: 'Is BMI used for dogs?',
    answer:
      'No. Human BMI is a height-to-weight calculation; dogs vary enormously in frame, breed conformation, and muscle mass, so a single weight-to-height ratio is not meaningful. Veterinary professional bodies including WSAVA and AAHA use body condition scoring (visual + palpation) instead, with optional muscle condition scoring as a separate axis. Some clinics also use morphometric measurements (girth, pelvic circumference) with a soft measuring tape for pets, but BCS remains the standard.',
  },
]

const combined = combineSchemas(schema, med, buildFAQSchema({ questions: FAQS }))

export default function DogBodyConditionScorePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="dog-com"
        hero={{
          title: 'Dog Body Condition Score (BCS) — The 1–9 Scale, Step by Step',
          subtitle:
            'Body condition score is the single most useful number in canine preventive care. It is more informative than weight alone, it is free to assess, and the evidence linking lifelong lean body condition to longer life is the strongest of any nutritional intervention in dogs. This guide teaches the WSAVA/AAHA 1–9 scale, the hands-on assessment, and the breed adjustments that matter.',
          category: 'Dog Health Guide',
          authorName: 'Dog.com Editorial',
          authorAvatar: '🐾',
          publishedAt: 'May 2026',
          readTime: '13 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Guides', href: '/guides' },
          { name: 'Dog Body Condition Score', href: '/guides/dog-body-condition-score' },
        ]}
        relatedLinks={[{ title: 'Body Condition Score Tool', href: '/tools/dog-body-condition-score', category: 'Tools' }, { title: 'Dog Guides Hub', href: '/guides', category: 'Hub' }, { title: 'How Much to Feed', href: '/nutrition/how-much-to-feed', category: 'Nutrition' }, { title: 'Weight Management', href: '/nutrition/weight-management', category: 'Nutrition' }, { title: 'Spay/Neuter Timing', href: '/guides/dog-spay-neuter-timing', category: 'Guides' }]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'What BCS Measures', href: '#what' },
                { label: 'The 1–9 Scale', href: '#scale' },
                { label: 'How to Assess at Home', href: '#assess' },
                { label: 'Breed Adjustments', href: '#breed' },
                { label: 'Why It Matters — Lifespan Evidence', href: '#evidence' },
                { label: 'Assessment Frequency', href: '#frequency' },
                { label: 'BCS vs Muscle Condition Score', href: '#mcs' },
                { label: 'What to Do With the Number', href: '#action' },
                { label: 'BCS Tracking Kit', href: '#kit' },
                { label: 'FAQ', href: '#faq' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Dog Obesity — Health Risks & Weight Loss Plan', href: '/health/dog-obesity' },
                { label: 'How Much to Feed', href: '/nutrition/how-much-to-feed' },
                { label: 'Weight Management Diets', href: '/nutrition/weight-management' },
                { label: 'Dog Treats Guide', href: '/nutrition/dog-treats-guide' },
              ]}
            />
            <CrossPortfolioCard currentSite="dog-com" contentType="guide" variant="sidebar" />
            <EmailCapture
              variant="sidebar"
              siteId="dog-com"
              title="Free Dog Health Tips"
              subtitle="Evidence-based guidance every week."
              source="guide-bcs"
            />
          </>
        }
      >
        <div className="carloOS-article">
          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the dog BCS tracking checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Dog BCS tracking checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the monthly scoring notes — a soft
              measuring tape for pets for girth and
              pelvic-circumference checks, a dog body
              condition score chart poster as the visual
              1–9 reference, and single-ingredient lean
              dog treats so the treat-calorie audit stays
              honest. Educational checklist, not a
              diagnosis and not a substitute for
              veterinary scoring. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="dog-com"
              title="Dog BCS tracking checklist"
              subtitle="Email the tape, chart-poster, and lean-treat notes. No spam."
              ctaText="Email my dog BCS tracking checklist"
              source="guides-dog-body-condition-score-under-hero"
            />
          </div>

          <ArticleByline
            siteName="Dog.com Editorial"
            publishedAt="2026-05-28T00:00:00Z"
            updatedAt="2026-09-05T00:00:00Z"
            reviewedBy="Editorial team"
          />

          <CalloutBox variant="evidence" title="TL;DR — What you need to know">
            <p>
              <strong>Use the 1–9 scale.</strong> Aim for BCS 4–5. Check monthly: feel for ribs with light pressure, look down from above for a waist, look from the side for an abdominal tuck. Breed matters — sighthounds look bony at ideal weight, brachycephalics look stocky.
            </p>
            <p>
              <strong>Why it matters.</strong> In the Purina Lifespan Study (Kealy et al., JAVMA 2002), Labradors kept lean lived 1.8 years longer than littermates kept moderately overweight. About 59% of US dogs are overweight or obese (APOP 2022 survey).
            </p>
          </CalloutBox>

          <h2 id="what">What Body Condition Score Actually Measures</h2>
          <DropCap>
            Body condition score is a structured visual and tactile estimate of subcutaneous and abdominal fat. It is not a measure of weight, fitness, muscle mass, or breed conformation. Two dogs of the same weight can have very different body condition scores; the same dog can hold the same weight while moving from BCS 5 to BCS 7 over a year of slow drift. That is why veterinary professional bodies, including the World Small Animal Veterinary Association (WSAVA) and the American Animal Hospital Association (AAHA), built their nutritional assessment guidelines around BCS rather than weight alone.
          </DropCap>
          <p>
            The WSAVA Global Nutrition Committee describes BCS as a vital assessment that should be performed and recorded at every patient visit — part of what WSAVA calls the &ldquo;nutritional assessment as a fifth vital sign,&rdquo; alongside temperature, pulse, respiration, and pain score. AAHA&rsquo;s 2014 Weight Management Guidelines and its 2021 Nutrition and Weight Management updates use the same 1–9 framework.
          </p>
          <p>
            The point of BCS is to give owners and clinicians a shared, repeatable language for body composition. &ldquo;She is at a 7&rdquo; communicates more than &ldquo;she has gained a couple of pounds&rdquo; — and it tells you which direction the feeding plan needs to move.
          </p>

          <h2 id="scale">The 1–9 Scale, Score by Score</h2>
          <p>
            The 9-point scale (described in the WSAVA Body Condition Score chart) maps to three categories: underweight (1–3), ideal (4–5), and overweight to obese (6–9). Each score change of one unit represents approximately 10–15% deviation from ideal body weight.
          </p>

          <h3>BCS 1 — Emaciated</h3>
          <p>
            Ribs, lumbar vertebrae, pelvic bones, and all bony prominences are obvious from a distance. No discernible body fat. Obvious loss of muscle mass. This is a medical emergency; immediate veterinary evaluation is required.
          </p>

          <h3>BCS 2 — Very Thin</h3>
          <p>
            Ribs, lumbar vertebrae, and pelvic bones are easily visible. No palpable fat. Minimal loss of muscle mass.
          </p>

          <h3>BCS 3 — Thin</h3>
          <p>
            Ribs are easily palpated and may be visible with no palpable fat. Tops of lumbar vertebrae are visible. Pelvic bones are becoming prominent. Obvious waist and abdominal tuck.
          </p>

          <h3>BCS 4 — Underweight to Ideal (Lean)</h3>
          <p>
            Ribs easily palpable, with minimal fat covering. Waist easily noted when viewed from above. Abdominal tuck evident. This is the lean end of the ideal range and the target body condition in the Purina Lifespan Study.
          </p>

          <h3>BCS 5 — Ideal</h3>
          <p>
            Ribs palpable without excess fat covering. Waist observed behind ribs when viewed from above. Abdomen tucked up when viewed from side. This is the most commonly cited &ldquo;textbook ideal&rdquo; for many breeds.
          </p>

          <h3>BCS 6 — Overweight</h3>
          <p>
            Ribs palpable with slight excess fat covering. Waist is discernible viewed from above but not prominent. Abdominal tuck apparent.
          </p>

          <h3>BCS 7 — Heavy</h3>
          <p>
            Ribs palpable only with difficulty; heavy fat cover. Noticeable fat deposits over lumbar area and base of tail. Waist absent or barely visible. Abdominal tuck may be present but reduced.
          </p>

          <h3>BCS 8 — Obese</h3>
          <p>
            Ribs not palpable under very heavy fat cover, or palpable only with significant pressure. Heavy fat deposits over lumbar area and base of tail. Waist absent. No abdominal tuck. Obvious abdominal distension may be present.
          </p>

          <h3>BCS 9 — Severely Obese</h3>
          <p>
            Massive fat deposits over thorax, spine, and base of tail. Waist and abdominal tuck absent. Fat deposits on neck and limbs. Obvious abdominal distension.
          </p>

          <CalloutBox variant="evidence" title="Source: WSAVA + AAHA scoring framework">
            <p>
              The 9-point scoring descriptions used here align with the WSAVA Body Condition Score chart (part of the WSAVA Global Nutrition Toolkit) and the AAHA Weight Management Guidelines. Both organizations endorse this scale as the standard for canine nutritional assessment.
            </p>
          </CalloutBox>

          <h2 id="assess">How to Assess Your Dog at Home — The Three-Test Method</h2>
          <p>
            Three checks, in this order: rib palpation, top-down view for waist, side view for abdominal tuck. All three together give you a defensible score; any one in isolation can mislead.
          </p>

          <h3>1. Rib palpation</h3>
          <p>
            Place both hands flat on the sides of the dog&rsquo;s chest, just behind the front legs. Run your fingertips across the ribs with light pressure — about the pressure you would use to feel the bones on the back of your own hand.
          </p>
          <ul>
            <li><strong>Ribs felt easily with light pressure, slight fat covering:</strong> BCS 4–5.</li>
            <li><strong>Ribs felt only with firmer pressure:</strong> BCS 6.</li>
            <li><strong>Ribs felt only with deliberate, firm pressure (and you start to push through fat):</strong> BCS 7.</li>
            <li><strong>Ribs not clearly palpable, even with firm pressure:</strong> BCS 8–9.</li>
            <li><strong>Ribs visible from a distance with no palpable fat:</strong> BCS 1–3.</li>
          </ul>

          <h3>2. Top-down view for a waist</h3>
          <p>
            Stand directly over the dog and look down. A dog at ideal body condition has a visible narrowing behind the ribcage that widens again at the hips — the &ldquo;hourglass.&rdquo; A dog at BCS 7–9 looks more rectangular or oval from above; the waist disappears.
          </p>

          <h3>3. Side view for an abdominal tuck</h3>
          <p>
            From the side, the underline of a dog at ideal condition rises from the bottom of the chest up toward the groin — the &ldquo;tuck.&rdquo; A dog at BCS 6–7 has a flatter underline; at BCS 8–9, the underline sags below the chest.
          </p>

          <CalloutBox variant="tip" title="Practical scoring tip">
            <p>
              Hair coat hides body condition. For long-coated breeds (Golden Retrievers, Collies, Pomeranians, Shih Tzus, Newfoundlands), trust palpation over the visual checks — a thick coat can make a BCS 7 dog look ideal from across the room. Run your hands over ribs, spine, and base of tail; that is what tells you what is going on under the fur.
            </p>
          </CalloutBox>

          <h2 id="breed">Breed Adjustments — Why the Same Score Looks Different</h2>
          <p>
            The 1–9 scale is breed-neutral in principle, but a dog at BCS 5 does not look the same across breeds. Two examples that matter to owners:
          </p>
          <p>
            <strong>Sighthounds (Greyhounds, Whippets, Salukis, Borzoi, Italian Greyhounds).</strong> These breeds are genetically lean. At an ideal BCS 4, you can typically see the last two or three ribs, the outline of the spine, and the hip points — which looks emaciated to an owner used to a Golden Retriever, but is normal for the breed. Greyhound-specific veterinary literature notes that imposing a stocky breed&rsquo;s body shape on a sighthound by overfeeding causes the same metabolic problems as overfeeding any other dog — the visual is misleading, the physiology is not.
          </p>
          <p>
            <strong>Brachycephalic and stocky breeds (Bulldog, French Bulldog, Pug, Boston Terrier, Basset Hound).</strong> Thick skin folds, short loaded bone structure, and large heads make these breeds look chubby even at BCS 5. Rib palpation is the deciding test; visual assessment alone will systematically overestimate or underestimate body condition depending on the assessor&rsquo;s expectations.
          </p>
          <p>
            <strong>Heavy-coated working breeds (Newfoundland, Saint Bernard, Great Pyrenees, Bernese Mountain Dog).</strong> Coat hides everything. Always palpate.
          </p>
          <p>
            <strong>Muscular working breeds (Boxer, Pit Bull-type, Staffordshire Bull Terrier, Belgian Malinois, Doberman).</strong> A well-conditioned working dog has visible muscle definition over the shoulders and hindquarters that can be mistaken for excess weight. Check ribs and waist; muscle is firm and palpable, not the soft give of fat.
          </p>

          <h2 id="evidence">Why It Matters — The Lifespan Evidence</h2>
          <p>
            Body condition is not a cosmetic question. The Purina Lifespan Study — Kealy and colleagues, <em>JAVMA</em> 2002 — is the landmark trial on this. Forty-eight Labrador Retrievers from seven litters were randomized at weaning into two groups: a control group fed to maintain a moderately overweight body condition (roughly BCS 6–7 on the 9-point scale) and a restricted-feed group given 25% less food than the controls&rsquo; intake.
          </p>
          <p>
            The restricted-feed dogs were not starved — they were maintained at a lean body condition (roughly BCS 4–5). The dogs lived their entire lives on the protocol. Results:
          </p>
          <ul>
            <li><strong>Median lifespan was 1.8 years longer</strong> in the lean group (13.0 years vs 11.2 years).</li>
            <li><strong>Onset of clinical osteoarthritis was delayed by years</strong> in the lean group; severity at any given age was substantially lower.</li>
            <li><strong>Onset of treatment for chronic disease</strong> (arthritis, cardiac disease, others) was delayed in the lean group.</li>
          </ul>
          <p>
            This is the strongest evidence in canine nutrition for the lifelong value of lean body condition. It is the central reason WSAVA and AAHA push BCS as a vital sign — the intervention is free, owner-led, and adds nearly two years of healthier life on average.
          </p>

          <CalloutBox variant="warning" title="The US dog population is heavy">
            <p>
              The Association for Pet Obesity Prevention (APOP) 2022 survey — the longest-running annual veterinary survey of pet body condition in the US — estimated that approximately <strong>59% of US dogs were overweight or obese</strong>. That same survey identified an &ldquo;owner perception gap&rdquo;: most owners of overweight dogs rated their dog&rsquo;s body condition as ideal. Lean has stopped looking normal. BCS is how you correct for the perception drift.
            </p>
          </CalloutBox>

          <h2 id="frequency">How Often to Assess</h2>
          <p>
            AAHA recommends a body condition check at every veterinary visit. For most adult dogs that is once or twice a year. That cadence is too slow to catch slow weight drift, which is why a monthly home self-check is the standard recommendation.
          </p>
          <p>
            <strong>Monthly at home:</strong> Three-test palpation + weight on the same scale. Keep a dog body condition score chart poster next to the scoring spot so the 1–9 visual stays consistent, and use a soft measuring tape for pets if you also log girth. Log both. A change of one BCS point or a 3–5% weight change month-over-month is worth a conversation with your vet.
          </p>
          <p>
            <strong>At every vet visit:</strong> Ask your vet to score and record BCS. If it is not in the chart, ask for it to be added. WSAVA recommends recording BCS in the medical record at every visit so trends are visible.
          </p>
          <p>
            <strong>Life-stage triggers for an extra check:</strong> after spay or neuter (metabolic rate drops 20–30%), after a switch in food brand or formula, after an injury or surgery that reduces activity, and any time the dog moves to a new household or routine.
          </p>

          <h2 id="mcs">BCS vs Muscle Condition Score — Two Different Axes</h2>
          <p>
            WSAVA also publishes a Muscle Condition Score (MCS) chart, which is a separate axis from BCS. An older dog can be at BCS 6 (slightly overweight) and simultaneously have moderate muscle loss — a common pattern in geriatric dogs because fat deposition continues while lean mass is lost. The two scores together are more informative than either alone.
          </p>
          <p>
            MCS is graded as normal, mild loss, moderate loss, or severe loss, assessed by palpating muscle mass over the spine, scapulae, skull, and pelvic bones. If you notice your dog losing topline (the muscle along the spine) while body weight stays the same, that is a clinical signal that warrants veterinary follow-up — hidden under maintained weight is sarcopenia.
          </p>

          <h2 id="action">What to Do With the Score</h2>
          <p>BCS only matters if it changes behavior. Practical thresholds:</p>
          <ul>
            <li><strong>BCS 4–5:</strong> Keep doing what you are doing. Maintain monthly checks.</li>
            <li><strong>BCS 6:</strong> Trim portions by 10% and recheck in a month. Audit treat calories first — they are almost always the culprit. Single-ingredient lean dog treats make that audit simpler than mixed table scraps. See our <a href="/nutrition/dog-treats-guide" className="text-brand-primary hover:underline">dog treats guide</a>.</li>
            <li><strong>BCS 7–9:</strong> Work with your vet on a structured weight-loss plan. Prescription weight-management diets (Hill&rsquo;s Metabolic, Royal Canin Satiety) are calorie-restricted and fiber-enriched to reduce hunger while cutting calories; both have clinical trial support. See our <a href="/health/dog-obesity" className="text-brand-primary hover:underline">dog obesity guide</a> for the full protocol.</li>
            <li><strong>BCS 1–3:</strong> Veterinary evaluation. Causes include parasitism, dental disease, gastrointestinal disease, endocrine disease, and inadequate food. Adding food without a diagnosis is not a plan.</li>
          </ul>

          <h2 id="kit">A Simple BCS Tracking Kit</h2>
          <p>
            Three everyday physical supplies match the monthly
            scoring copy above: a soft measuring tape for pets
            so girth and pelvic-circumference checks stay
            consistent month to month, a dog body condition
            score chart poster as the visual 1–9 reference
            next to the hands-on rib / waist / tuck tests, and
            single-ingredient lean dog treats so the treat
            calorie audit is not mixed table scraps. These
            are household scoring tools, not treatments. They
            do not replace a veterinarian&rsquo;s BCS, they
            are not a prescription weight-management diet,
            and they are not the dog-obesity digital pet
            scale or slow-feeder bowl. They are not the
            calorie / ideal-weight / BCS-tool kitchen gram
            scale, portion-control food scale, or combined
            measuring-tape-plus-chart hop. They are not the
            pancreatitis digital pet-food portion scale,
            low-fat digestive-care food, or lean low-fat
            treats. This page does not claim hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="dog-com" />

          {/* Money path — live amazon-brand search hops
              (soft measuring tape for pets / dog body
              condition score chart poster / single-
              ingredient lean dog treats). ShopCtas hides
              empty Chewy; never href="#" or PLACEHOLDER.
              Category searches only — unused vs #848–#1039
              digital+pet+scale, slow+feeder+dog+bowl,
              kitchen+gram+scale,
              portion+control+food+scale+dog,
              dog+measuring+tape+body+condition+chart,
              digital+pet+food+portion+scale,
              low+fat+digestive+care+dog+food,
              lean+low+fat+dog+treats,
              low+calorie+dog+treats,
              unflavored+pediatric+electrolyte,
              stainless+steel+dog+fountain,
              washable+dog+pee+pads, and
              weighted+ceramic+dog+water+bowl.
              Prescription WM diets and med ASINs are
              not shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the dog BCS tracking kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page monthly scoring, morphometric, and
              treat-audit copy — a soft measuring tape for
              pets, a dog body condition score chart poster,
              and single-ingredient lean dog treats.
              Everyday physical supplies only. They are not
              a ranked product list, they are not the
              dog-obesity scale / slow-feeder hops, they
              are not the calorie / BCS kitchen-gram or
              portion-control scale hops, they are not the
              pancreatitis food / treat / portion-scale
              hops, they are not the UTI / dehydration
              electrolyte kits, and they do not replace a
              veterinarian. Dog.com earns a commission on
              qualifying purchases at no extra cost to you.
              Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/soft+measuring+tape+for+pets?s=guides-dog-body-condition-score"
                amazonLabel="Browse soft measuring tapes for pets on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/dog+body+condition+score+chart+poster?s=guides-dog-body-condition-score"
                amazonLabel="Browse dog BCS chart posters on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/single+ingredient+lean+dog+treats?s=guides-dog-body-condition-score"
                amazonLabel="Browse single-ingredient lean dog treats on Amazon →"
              />
            </div>
          </div>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion
            items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
            allowMultiple
          />

          <CalloutBox variant="info" title="References">
            <p>
              Kealy RD et al. &ldquo;Effects of diet restriction on life span and age-related changes in dogs.&rdquo; <em>Journal of the American Veterinary Medical Association</em> (JAVMA) 220(9):1315–1320, 2002. • World Small Animal Veterinary Association (WSAVA) Global Nutrition Committee — Body Condition Score chart and nutritional assessment guidelines. • American Animal Hospital Association (AAHA) Weight Management Guidelines (2014) and Nutrition and Weight Management updates (2021). • Association for Pet Obesity Prevention (APOP), 2022 Pet Obesity Survey.
            </p>
          </CalloutBox>
        </div>
      </ArticleLayout>
    </>
  )
}

import type { Metadata } from 'next'
import {
  buildMetadata,
  ArticleLayout,
  EmailCapture,
  RelatedLinks,
  TableOfContents,
  FAQAccordion,
  CalloutBox,
  ArticleByline,
  DropCap,
  ReviewCard,
  ScoreMethodology,
  AffiliateDisclosure,
} from '@carloOS/ui'
import {
  buildArticleSchema,
  buildMedicalWebPageSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Aging Ferret Care (5+ Years) — Senior Diet, Monitoring, Quality of Life | Ferret.com',
  description:
    'Senior ferret care: rising insulinoma and adrenal incidence, dental decline, weight loss, arthritis. Senior diet adjustments, quality-of-life monitoring with the HHHHHMM scale, and the euthanasia conversation.',
  path: '/health/aging-ferret-care',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Aging Ferret Care',
  description:
    'Senior care for ferrets over 5 years — disease incidence, diet adjustments, quality-of-life monitoring frameworks (HHHHHMM, AVMA QoL), and the euthanasia conversation.',
  url: 'https://ferret.com/health/aging-ferret-care',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-05-28T00:00:00Z',
  modifiedAt: '2026-05-28T00:00:00Z',
})

const medSchema = buildMedicalWebPageSchema({
  name: 'Aging Ferret Care',
  description:
    'Clinical reference on senior ferret care, including age-related disease incidence, diet adjustments, quality-of-life monitoring, and end-of-life decision frameworks.',
  url: 'https://ferret.com/health/aging-ferret-care',
  authorName: 'Ferret.com Editorial',
  lastReviewed: '2026-05-28',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://ferret.com/' },
    { name: 'Ferret Health', url: 'https://ferret.com/health/aging-ferret-care' },
    { name: 'Aging Ferret Care', url: 'https://ferret.com/health/aging-ferret-care' },
  ],
})

const FAQS = [
  {
    question: 'What age is a "senior" ferret?',
    answer:
      "There is no single hard cutoff, but most exotic-pet vets begin treating ferrets as senior at around age 4-5, with formal senior protocols by age 5. Average ferret lifespan in captivity is 5-8 years, with some individuals reaching 9-10. The senior label reflects the rising incidence of insulinoma, adrenal disease, cardiomyopathy, lymphoma, and dental disease in this age window, not a specific birthday.",
  },
  {
    question: 'Should my senior ferret get bloodwork more often?',
    answer:
      "Yes. The standard pattern across exotic-pet practice is annual bloodwork from age 1-3, every 6 months from 3-5, and every 3-6 months from 5+ — adjusted for the specific ferret's clinical picture. The screening reasoning: insulinoma is best caught on fasting glucose, adrenal disease on hormone panel, lymphoma on CBC abnormalities. Catching these early changes the prognosis substantially.",
  },
  {
    question: 'My old ferret has lost a lot of weight — should I worry?',
    answer:
      "Yes. Unexplained weight loss in a senior ferret is one of the most reliable signs of clinically meaningful disease — insulinoma, lymphoma, chronic kidney disease, dental pain interfering with eating, or simply progressive frailty. A senior ferret who has lost more than ~10% of body weight in a few months needs an exotic-pet vet visit; weight stability is one of the most useful single proxies for overall health in this age group.",
  },
  {
    question: 'How do I know when it\'s time for end-of-life care?',
    answer:
      "Use a structured quality-of-life framework rather than a single judgement call. The HHHHHMM scale (Hurt, Hunger, Hydration, Hygiene, Happiness, Mobility, More good days than bad — developed by Dr. Alice Villalobos and adopted in companion-animal palliative care) gives a numerical score across seven domains; the AVMA Companion Animal Quality of Life resources offer a related framework. Have the conversation with your exotic-pet vet before you think you need to — most owners regret waiting too long more often than acting too soon.",
  },
  {
    question: 'Should I feed my senior ferret a special diet?',
    answer:
      "Senior ferrets benefit from more frequent, smaller meals (4-6 per day instead of free-feeding kibble), easier-to-chew food where dental disease is present (kibble softened in warm water or transitioned to a meat-based recovery diet like Carnivore Care), and continued strict low-carb obligate-carnivore macros. Skip any \"senior\" pet food with added grain or carbohydrate. The fundamental diet rules from kithood still apply.",
  },
  {
    question: 'Can I make my home easier for an arthritic senior ferret?',
    answer:
      "Yes, several practical changes help. Lower the cage ramps and add fleece covers for grip. Move food and water to floor level. Soft sleep sacks at floor level so the ferret doesn't have to climb to nap. Padding under any height the ferret might jump from. Indoor temperature on the cooler side of comfortable (ferrets prefer ~65-75°F anyway, and arthritic joints do better cool). Pain management — meloxicam, gabapentin — is a vet conversation and worth having early in the trajectory.",
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(articleSchema, medSchema, breadcrumbSchema, faqSchema)

export default function FerretAgingPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Aging Ferret Care',
          subtitle:
            'Ferrets live 5-8 years on average in captivity, sometimes 9-10. The last third of that lifespan — roughly age 4-5 onward — is when the disease incidence curve climbs sharply and the daily care commitment shifts from preventive maintenance to active monitoring. Done well, the senior years can be the closest, most rewarding part of ferret ownership.',
          category: 'Ferret Health',
          authorName: 'Ferret.com Editorial',
          authorAvatar: '🦦',
          publishedAt: 'May 2026',
          readTime: '14 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Ferret Health', href: '/health/aging-ferret-care' },
          { name: 'Aging Ferret Care', href: '/health/aging-ferret-care' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'Lifespan & What Senior Means', href: '#lifespan' },
                { label: 'Age-Related Concerns', href: '#concerns' },
                { label: 'Monitoring Cadence', href: '#monitoring' },
                { label: 'Senior Diet', href: '#diet' },
                { label: 'Quality-of-Life Frameworks', href: '#qol' },
                { label: 'The Euthanasia Conversation', href: '#euthanasia' },
                { label: 'Hospice and Aftercare', href: '#hospice' },
                { label: 'Supportive Care Picks', href: '#picks' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Insulinoma', href: '/health/insulinoma' },
                { label: 'Adrenal Disease', href: '/health/adrenal-disease' },
                { label: 'Dental Disease', href: '/health/dental-disease' },
              ]}
            />
            <div className="bg-brand-dark rounded-lg p-5 mb-4">
              <div className="text-xs uppercase tracking-wide text-brand-primary mb-1 font-bold">
                Senior Ferret + Insurance
              </div>
              <h3 className="font-display text-base font-bold text-brand-white mb-2">
                Insurance gets harder to qualify for as ferrets age
              </h3>
              <p className="text-xs text-white/60 mb-3 leading-relaxed">
                Most exotic-pet insurers have age caps (typically 8 years).
                If your ferret is approaching senior age, lock in a policy
                now — once a condition is diagnosed, it&apos;s permanently
                excluded.
              </p>
              <a
                href="https://vets.co/pet-insurance"
                rel="noopener"
                className="inline-block text-xs font-bold text-brand-primary hover:underline"
              >
                Compare exotic-pet insurance →
              </a>
            </div>
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Health Notes"
              subtitle="Evidence-based ferret health, monthly."
              source="health-aging"
            />
          </>
        }
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-05-28"
            updatedAt="2026-05-28"
          />

          <DropCap>
            The senior years are where the structural decisions made earlier
            in a ferret&apos;s life come due — the diet pattern, the
            exotic-pet vet relationship, the dental routine, the
            insulinoma-screening habit. None of these earlier investments
            can be retroactively made up. What can be done, well, is a
            careful, attentive, evidence-grounded final third of life that
            keeps quality high and makes the hard end-of-life decisions
            cleanly.
          </DropCap>

          <h2 id="tldr">TL;DR</h2>
          <p>
            Domestic ferrets live an average of 5-8 years. Senior care
            typically begins at age 4-5, with formal protocols by age 5.
            Disease incidence rises sharply for insulinoma, adrenal disease,
            cardiomyopathy, lymphoma, and dental disease in this window.
            Monitoring shifts from annual bloodwork to every 3-6 months,
            diet adjusts toward more frequent small meals, and the
            quality-of-life conversation should start before it feels urgent.
            Structured frameworks like the HHHHHMM scale and the AVMA
            Companion Animal Quality of Life resources are the modern
            standard for end-of-life decision-making.
          </p>

          <h2 id="lifespan">Lifespan and What &quot;Senior&quot; Means</h2>
          <p>
            Reported average lifespan for domestic ferrets in pet-keeper care
            in the US is approximately <strong>5-8 years</strong>, with
            individuals reaching 9 or occasionally 10 years. The variation
            reflects genetics, source (commercial pet-store ferrets vs
            private breeders), early-life husbandry, diet, and access to
            exotic-pet veterinary care. European working-line ferrets
            sometimes report longer averages; the contrast is widely
            attributed to differences in breeder neuter timing.
          </p>
          <p>
            There is no single hard cutoff for &quot;senior&quot;. Most
            exotic-pet practitioners begin folding senior-care protocols in
            around age 4-5 and treat ferrets as formally senior by age 5.
            The label is a clinical convenience reflecting the rising
            disease incidence curve in this age window, not a particular
            biological threshold.
          </p>

          <h2 id="concerns">Age-Related Concerns</h2>
          <p>
            The senior-ferret differential is dominated by a small number of
            high-prevalence conditions, all peaking in the 3-7 year window
            and continuing through the rest of life. Quesenberry &amp;
            Carpenter and the <em>Veterinary Clinics of North America:
            Exotic Animal Practice</em> ferret issues cover each in depth.
          </p>
          <ul>
            <li>
              <strong>Insulinoma.</strong> Pancreatic beta-cell tumor. The
              single most-common neoplasm in middle-aged and senior ferrets.
              Detected on fasting blood glucose. See our{' '}
              <a href="/health/insulinoma">insulinoma page</a>.
            </li>
            <li>
              <strong>Adrenal disease.</strong> The second-most-common
              chronic disease. Sex-steroid overproduction; presents with
              bilateral hair loss, vulvar swelling in spayed jills, and
              behaviour changes. See our{' '}
              <a href="/health/adrenal-disease">adrenal disease page</a>.
            </li>
            <li>
              <strong>Cardiomyopathy.</strong> Dilated cardiomyopathy is
              reported in senior ferrets, with murmurs and reduced exercise
              tolerance as common early signs. Annual cardiac auscultation
              is part of any reasonable senior protocol; echocardiography
              when abnormalities are heard.
            </li>
            <li>
              <strong>Lymphoma.</strong> The most common ferret neoplasm
              after insulinoma. Presents heterogeneously — lymphadenopathy,
              splenomegaly, GI signs, hepatosplenic infiltration. CBC
              abnormalities (lymphocytosis or unexplained anemia) are the
              common screening trigger; cytology and histopathology
              confirm. Treatment with multi-agent chemotherapy is offered
              in specialty practice with variable outcomes.
            </li>
            <li>
              <strong>Dental disease.</strong> Progressive periodontal
              disease, sometimes with tooth loss, by senior years in most
              ferrets without an active dental routine. See our{' '}
              <a href="/health/dental-disease">dental disease page</a>.
            </li>
            <li>
              <strong>Chronic kidney disease.</strong> Less prevalent than
              in cats but documented in senior ferrets. Detected on
              chemistry (creatinine, BUN, SDMA where available) and
              urinalysis. Management is supportive.
            </li>
            <li>
              <strong>Arthritis and reduced mobility.</strong> Many senior
              ferrets show stiffness, reduced jump height, and slower gait
              from age 5-6 onward. Often under-recognized because ferrets
              hide pain well. Pain control (meloxicam, gabapentin at vet
              direction) materially improves quality of life when present.
            </li>
            <li>
              <strong>Cataracts and reduced vision.</strong> Common in
              senior ferrets but rarely a major clinical problem — ferret
              navigation relies heavily on whiskers and smell, and most
              cope well with poor vision.
            </li>
            <li>
              <strong>Unexplained weight loss.</strong> One of the most
              reliable proxies for clinically meaningful disease in the
              senior years. A senior ferret who has lost more than ~10% of
              body weight in a few months deserves a workup.
            </li>
          </ul>

          <CalloutBox variant="warning" title="Two patterns to escalate immediately">
            <p>
              A senior ferret presenting with either (1) sudden lethargy,
              hindlimb weakness, or seizure — particularly in the morning
              or after a fast — or (2) acute inappetence with weight loss
              over days is an urgent same-day exotic-pet vet visit. The
              first pattern is most often insulinoma crisis; the second is
              often advancing GI lymphoma, dental abscess, or significant
              systemic illness. Neither benefits from a wait-and-see.
            </p>
          </CalloutBox>

          <h2 id="monitoring">Monitoring Cadence</h2>
          <p>
            The standard pattern across the exotic-pet veterinary
            literature, broadly:
          </p>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-surface border-b border-brand-border">
                  <th className="text-left p-3 font-semibold">Age</th>
                  <th className="text-left p-3 font-semibold">Exam cadence</th>
                  <th className="text-left p-3 font-semibold">Bloodwork</th>
                  <th className="text-left p-3 font-semibold">Other screening</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brand-border">
                  <td className="p-3 font-medium">Year 1</td>
                  <td className="p-3">Vaccine visits + annual</td>
                  <td className="p-3">Baseline at first annual</td>
                  <td className="p-3">Weight, dental</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="p-3 font-medium">Year 2-3</td>
                  <td className="p-3">Annual</td>
                  <td className="p-3">Annual (CBC + chem + fasting glucose)</td>
                  <td className="p-3">Dental assessment, body condition</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="p-3 font-medium">Year 3-5</td>
                  <td className="p-3">Every 6 months</td>
                  <td className="p-3">Every 6 months</td>
                  <td className="p-3">Cardiac auscultation; consider adrenal hormone panel if signs</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Year 5+</td>
                  <td className="p-3">Every 3-6 months</td>
                  <td className="p-3">Every 3-6 months</td>
                  <td className="p-3">Cardiac, abdominal ultrasound annually, hormone panel as indicated</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Home monitoring is at least as valuable as in-clinic monitoring
            for catching senior changes. Weekly weights (a kitchen scale and
            a 30-second routine), monthly body condition assessment, and
            note-keeping on appetite, water intake, energy level, and stool
            quality together produce a much better trajectory picture than
            episodic vet visits alone.
          </p>

          <h2 id="diet">Senior Diet Adjustments</h2>
          <p>
            The fundamental obligate-carnivore macronutrient targets from
            <a href="/care/diet-basics"> our diet basics page</a> still
            apply. What changes in senior care is mostly meal pattern and
            food consistency.
          </p>
          <ul>
            <li>
              <strong>More frequent, smaller meals.</strong> 4-6 small meals
              per day rather than free-feed kibble, particularly in ferrets
              with insulinoma where fasting precipitates hypoglycemic
              episodes. A timed feeder helps with overnight gaps.
            </li>
            <li>
              <strong>Easier-to-chew presentations</strong> where dental
              disease is present. Kibble softened in warm water, a meat-based
              recovery diet such as Carnivore Care, or commercial canned/wet
              ferret diets. Soft food does not need to replace kibble
              entirely — a partial soft diet plus continued kibble is often
              the most acceptable middle ground.
            </li>
            <li>
              <strong>Continued strict low carbohydrate.</strong> Senior
              ferrets are at higher insulinoma risk, not lower. Avoid any
              &quot;senior&quot; pet food with grain or starch fillers.
            </li>
            <li>
              <strong>Hydration support</strong> where intake drops. Watered-down
              recovery diet, an additional ceramic water bowl in the
              preferred sleeping room, or subcutaneous fluids at vet
              direction in CKD or chronic dehydration cases.
            </li>
            <li>
              <strong>Vitamin and supplement choices</strong> are a vet
              conversation. Most senior ferrets on a quality diet do not
              need supplementation. Specific clinical scenarios (lymphoma
              treatment, post-surgical recovery) may benefit from targeted
              additions.
            </li>
          </ul>

          <h2 id="qol">Quality-of-Life Frameworks</h2>
          <p>
            Two structured frameworks are widely used in companion-animal
            palliative care and translate cleanly to ferrets.
          </p>

          <h3>HHHHHMM scale (Villalobos)</h3>
          <p>
            Developed by Dr. Alice Villalobos for companion-animal hospice
            and palliative care, the HHHHHMM scale scores seven domains
            from 0 to 10:
          </p>
          <ul>
            <li><strong>H</strong>urt — pain control adequacy, including ability to breathe</li>
            <li><strong>H</strong>unger — eating willingly, or requires assist-feeding</li>
            <li><strong>H</strong>ydration — drinking adequately, or requires fluid support</li>
            <li><strong>H</strong>ygiene — able to keep self groomed, or requires owner assistance</li>
            <li><strong>H</strong>appiness — engaged with surroundings, or withdrawn</li>
            <li><strong>M</strong>obility — ambulatory, or substantially limited</li>
            <li><strong>M</strong>ore good days than bad — overall trajectory</li>
          </ul>
          <p>
            A total score above 35 (out of 70) is generally interpreted as
            quality of life worth continuing; scores trending below 35 are
            an indication to revisit the care plan and discuss end-of-life
            options. The scale is a structured prompt for the right
            questions, not a mechanical algorithm.
          </p>

          <h3>AVMA Companion Animal Quality of Life</h3>
          <p>
            The American Veterinary Medical Association maintains
            owner-facing companion-animal quality-of-life resources and an
            end-of-life decision framework. The structure is similar to
            HHHHHMM but with somewhat different emphasis — chronic pain,
            distress, behavioural change, and ability to engage in normal
            species-typical behaviours. Either framework, used honestly,
            produces a better-grounded end-of-life conversation than gut
            feel alone.
          </p>

          <CalloutBox variant="evidence" title="Why use a framework?">
            <p>
              Owners consistently report that the hardest part of senior
              care decisions is knowing whether they are seeing the
              situation clearly. A written framework — used weekly or
              monthly with a partner or vet — produces a trend line rather
              than a single ambiguous judgement. The companion-animal
              palliative-care literature (AVMA, Villalobos, AAHA hospice
              guidelines) consistently recommends structured assessment
              over impressionistic judgement for exactly this reason.
            </p>
          </CalloutBox>

          <h2 id="euthanasia">The Euthanasia Conversation</h2>
          <p>
            Euthanasia decisions for a ferret are the same shape as for a
            dog or cat — but happen sooner in chronological time because
            ferret lifespans are shorter. Have the conversation with your
            exotic-pet vet before you think you need to. Two patterns
            consistently emerge in owner reports:
          </p>
          <ul>
            <li>
              The owners who wait too long almost always regret it more
              than the owners who decide while quality of life still has
              some range to it.
            </li>
            <li>
              The conversation goes better when it is rehearsed in advance,
              before crisis. Knowing the vet&apos;s euthanasia protocol,
              whether home euthanasia is available in your area, and what
              the immediate aftercare options (cremation, burial,
              hand-prints, fur clipping) look like, all reduce the load on
              the day itself.
            </li>
          </ul>
          <p>
            Modern small-mammal euthanasia is typically a two-step
            anesthetic protocol — sedation with isoflurane or an injectable
            agent until the ferret is unconscious, followed by IV or
            intracardiac pentobarbital. The process is painless from the
            ferret&apos;s perspective once sedation has taken effect. Most
            exotic-pet practices encourage owner presence and tailor the
            experience to the family.
          </p>

          <CalloutBox variant="tip" title="Practical pre-conversation prompts">
            <p>
              Worth raising with your exotic-pet vet during a routine
              senior visit, well before crisis: What does the in-practice
              euthanasia process look like? Is home euthanasia available
              locally? What aftercare options does the practice support?
              What signs in this particular ferret would suggest the
              conversation is becoming time-sensitive? Owners report these
              conversations are universally easier to have proactively than
              reactively.
            </p>
          </CalloutBox>

          <h2 id="hospice">Hospice and Aftercare</h2>
          <p>
            Some senior ferrets reach a stage where treatment is no longer
            the goal but comfort and dignity are. The exotic-pet veterinary
            literature increasingly recognizes companion-animal hospice as
            a legitimate care pathway. Practical elements often include
            adequate analgesia (meloxicam, buprenorphine, gabapentin —
            agent at vet discretion), assist-feeding when needed,
            subcutaneous fluids if dehydration is contributing, soft warm
            sleeping spaces, minimized handling stress, and continued
            interaction at whatever level the ferret tolerates.
          </p>
          <p>
            Aftercare options typically include private cremation (ashes
            returned), communal cremation, and home burial where local
            ordinances allow. Many exotic-pet practices keep a list of
            local pet aftercare providers; some offer paw or nose prints
            and fur clippings as keepsakes. None of this is mandatory —
            the appropriate level of formality is whatever feels right for
            the household.
          </p>

          <AffiliateDisclosure variant="inline" siteId="ferret-com" />

          <h2 id="picks">Supportive Care Picks</h2>
          <CalloutBox variant="warning" title="Supportive supplies, not treatment">
            <p>
              The products below are <em>supportive</em> — comfort and feeding aids for senior ferrets. They do not treat insulinoma, adrenal disease, lymphoma, cardiomyopathy, dental disease, or any other clinical condition. Treatment decisions belong to an exotic-pet vet. Use these in conjunction with veterinary care, not as a substitute.
            </p>
          </CalloutBox>
          <p>
            Two items that come up consistently in senior-ferret hospice and palliative-care guidance: a floor-level soft sleeping setup, and a meat-based recovery diet for ferrets who are eating less. This is a documented-spec comparison; the page does not claim hands-on testing.
          </p>
          <ScoreMethodology />
          <ReviewCard
            id="floor-level-hammock"
            badge="Senior Comfort"
            badgeEmoji="🛏️"
            name="Floor-Level Fleece Sleep Sack / Low Hammock"
            subtitle="Soft, low-entry sleep setup so an arthritic senior does not have to climb"
            score={8.5}
            winner
            description={
              <p>Most ferrets sleep in elevated hammocks throughout their adult lives. Arthritic and frail seniors often stop being able to climb into them comfortably and either give up sleeping in the hammock (and sleep on hard cage floor) or fall when trying. A floor-level soft sleep sack — a fleece "cube" or pillow-style bed — fixes the comfort problem. Multiple sleeping spots at floor level around the home and inside the cage is one of the highest-impact husbandry changes a senior-ferret keeper can make.</p>
            }
            specs={[
              { label: 'Placement', value: 'Floor / cage-bottom', highlight: 'good' },
              { label: 'Material', value: 'Fleece, soft padding' },
              { label: 'Entry height', value: 'Low (no climb required)', highlight: 'good' },
              { label: 'Washable', value: 'Yes', highlight: 'good' },
            ]}
            pros={['Eliminates climbing requirement for arthritic seniors', 'Soft on bony pressure points (common in weight-losing seniors)', 'Multiple cheap units mean spots in every room', 'Machine washable']}
            cons={['Fleece picks up shed hair quickly — frequent wash', 'Some seniors still prefer their old hammock — offer both']}
            price="$10–25 each"
            ctaText="Find ferret floor sleep sacks"
            ctaHref="https://www.marshallpet.com/"
            ctaAffiliateProgram="marshall"
            ctaAffiliateProduct="ferret-floor-sleep-sack"
          />
          <ReviewCard
            id="recovery-diet"
            badge="Inappetent Senior"
            badgeEmoji="🥄"
            name="Meat-Based Recovery / Supportive Feeding Diet"
            subtitle="High-calorie meat-based paste for ferrets who are eating less — vet-directed use only"
            score={8.7}
            description={
              <p>A high-calorie meat-based paste (Oxbow Carnivore Care, Hill's a/d, or similar) is the standard tool for syringe-feeding a ferret who is eating less because of dental pain, insulinoma-related lethargy, post-surgical recovery, or end-of-life inappetence. This is a vet-directed product: amount, frequency, and underlying condition all need a clinician's guidance. The diet does not treat the underlying disease; it maintains caloric intake while the underlying disease is being addressed (or, in palliative care, while quality of life remains acceptable).</p>
            }
            specs={[
              { label: 'Form', value: 'Paste, syringe-feedable' },
              { label: 'Macros', value: 'High-protein, high-fat, meat-based', highlight: 'good' },
              { label: 'Use case', value: 'Vet-directed supportive feeding only' },
              { label: 'Shelf life (opened)', value: 'Short — discard promptly' },
            ]}
            pros={['Maintains caloric intake during illness or recovery', 'Easy to syringe-feed a reluctant ferret', 'Same product widely used in exotic-pet practice']}
            cons={['Not a treatment for the underlying disease', 'Use without veterinary direction can delay needed care', 'Some ferrets reject the texture — switch brand or warm before serving']}
            price="$8–15 / can"
            ctaText="Find recovery / supportive feeding diet"
            ctaHref="/go/chewy-brand/carnivore-care-recovery-diet"
            ctaAffiliateProgram="chewy-brand"
            ctaAffiliateProduct="recovery-diet"
          />

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <h2 id="sources">Sources</h2>
          <ul>
            <li>
              Quesenberry KE, Carpenter JW (eds.). <em>Ferrets, Rabbits, and
              Rodents: Clinical Medicine and Surgery.</em> 4th ed.
              Saunders/Elsevier. The senior care, endocrine, and oncology
              chapters cover the disease incidence and monitoring
              frameworks summarized here.
            </li>
            <li>
              <em>Veterinary Clinics of North America: Exotic Animal
              Practice</em>, multiple ferret-focused issues covering
              senior care, neoplasia, and end-of-life management.
            </li>
            <li>
              <em>Journal of Exotic Pet Medicine</em>, clinical articles on
              ferret geriatric medicine and quality-of-life assessment.
            </li>
            <li>
              <em>Journal of the American Veterinary Medical Association
              (JAVMA)</em>, case series and retrospective work on
              ferret-specific senior disease.
            </li>
            <li>
              Villalobos A. <em>HHHHHMM Quality of Life Scale.</em> The
              companion-animal palliative-care framework now standard in
              veterinary hospice practice.
            </li>
            <li>
              American Veterinary Medical Association (AVMA) — Companion
              Animal Quality of Life and end-of-life resources.
            </li>
            <li>
              American Animal Hospital Association (AAHA) / International
              Association of Animal Hospice and Palliative Care (IAAHPC)
              joint hospice guidelines.
            </li>
            <li>
              Association of Exotic Mammal Veterinarians (AEMV) — practitioner
              directory and continuing-education materials on senior
              exotic-mammal care.
            </li>
          </ul>
          <p className="text-sm text-brand-text-light">
            This page is general clinical information about senior ferret
            care. It is not individualized veterinary advice. Senior-care
            decisions, pain management protocols, and end-of-life timing
            are vet-by-vet conversations and require evaluation by a
            clinician familiar with the individual ferret — ideally an
            AEMV member or an ABVP diplomate in Exotic Companion Mammal
            practice.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}

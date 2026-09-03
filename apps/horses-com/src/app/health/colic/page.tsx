import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Equine Colic — Types, Clinical Signs, When to Call the Vet',
  description:
    'Reference guide to equine colic — spasmodic, impaction, gas, displacement, and more. Clinical signs, when it is an emergency, diagnostics, and treatment.',
  path: '/health/colic',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'Equine Colic — Types, Signs, Treatment, Prevention',
  description:
    'Comprehensive reference on equine colic types, recognition, when to escalate, diagnostic workup, medical and surgical treatment, and evidence-based prevention.',
  url: 'https://horses.com/health/colic',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-05-28T00:00:00Z',
  modifiedAt: '2026-05-28T00:00:00Z',
})

const medSchema = buildMedicalWebPageSchema({
  name: 'Equine Colic',
  description:
    'Equine colic — gastrointestinal pain in the horse. Types, clinical signs, emergency triage, diagnostics, treatment tiers, and prevention.',
  url: 'https://horses.com/health/colic',
  authorName: 'Horses.com Editorial',
  lastReviewed: '2026-05-28',
})

const combined = combineSchemas(articleSchema, medSchema)

const FAQS = [
  {
    question: 'Is colic always an emergency?',
    answer:
      'Any colic should be evaluated by a veterinarian. Mild spasmodic and gas colic episodes often resolve with conservative management, but the same early signs can also represent a strangulating lesion with a narrow time window to surgical intervention. The AAEP recommends calling the vet at the first sign of colic and never assuming a "watch-and-wait" approach is safe — the cases that are time-critical are not distinguishable from mild cases by an owner in the first hour.',
    answerText:
      'Any colic should be evaluated by a veterinarian. Mild spasmodic and gas colic often resolve with conservative care, but the same early signs can also represent a strangulating lesion with a narrow surgical window. The AAEP recommends calling the vet at the first sign and not relying on watch-and-wait.',
  },
  {
    question: 'What is the most common cause of colic?',
    answer:
      'Spasmodic colic (intestinal spasms, often related to feed changes, parasites, or weather shifts) is the single most common diagnosis in field practice, followed by gas colic and large-colon impactions. Most epidemiologic surveys (Tinker MK et al., Equine Veterinary Journal, 1997; Curtis L et al., Equine Veterinary Journal, 2019) place these three categories at over 70 percent of all colic presentations.',
    answerText:
      'Spasmodic colic is the most common, followed by gas colic and large-colon impactions. These three categories account for over 70 percent of all colic presentations in epidemiologic surveys.',
  },
  {
    question: 'What heart rate is concerning in a colicking horse?',
    answer:
      'A resting heart rate above 60 beats per minute is a significant prognostic indicator. Heart rates above 80 bpm correlate with increased odds of surgical or strangulating disease and decreased survival. The horse\'s baseline resting heart rate is typically 28-44 bpm, so even a sustained rate of 50-60 bpm during a colic episode is meaningful.',
    answerText:
      'A heart rate above 60 bpm in a colicking horse is concerning; above 80 bpm correlates with increased odds of surgical disease and decreased survival. Normal resting heart rate is 28-44 bpm.',
  },
  {
    question: 'How long is too long to walk a colicking horse?',
    answer:
      'Walking is useful in the first 15-30 minutes after the onset of mild colic as a reasonable bridge while waiting for the veterinarian. It does not "resolve" colic and is not a treatment plan. Continuous walking for hours is exhausting and counterproductive; if the horse is trying to lie down quietly and not rolling violently, allowing rest in a safe deeply-bedded stall is appropriate. Stop walking and call the vet if pain is escalating, the horse refuses to walk, or vital signs are deteriorating.',
    answerText:
      'Walking can help in the first 15-30 minutes after mild colic onset as a bridge while waiting for the vet. It is not a treatment. Long walking sessions are exhausting and unhelpful. If the horse refuses to walk or vitals worsen, stop and call the vet.',
  },
  {
    question: 'What is the survival rate for colic surgery?',
    answer:
      'Short-term post-operative survival rates vary by lesion type. For non-strangulating large-colon lesions, short-term survival is approximately 80-90 percent. For strangulating small-intestinal lesions, short-term survival drops to 50-75 percent, with long-term survival lower again (Proudman CJ et al., Equine Veterinary Journal, 2002; multiple subsequent multi-center series). Time from onset of pain to surgery is one of the strongest predictors of outcome — early referral is repeatedly identified as the modifiable factor that most improves survival.',
    answerText:
      'Short-term survival for non-strangulating large-colon surgery is 80-90 percent; for strangulating small-intestinal lesions it is 50-75 percent. Time from pain onset to surgery is the strongest modifiable predictor of outcome.',
  },
  {
    question: 'Can I give my horse Banamine before the vet arrives?',
    answer:
      'Only if your veterinarian has specifically authorized it for this horse and you have an existing veterinary-client-patient relationship. Banamine (flunixin meglumine) is highly effective at masking pain — this is exactly why some vets prefer to evaluate before any analgesic is given, since the pain response is one of the most useful diagnostic indicators. Giving Banamine to a horse with a strangulating lesion can hide the severity for hours and delay referral to surgery. Call first; let the vet decide.',
    answerText:
      'Only if your vet has specifically pre-authorized it. Banamine masks pain, which is a critical diagnostic indicator. Giving Banamine before the vet evaluates can delay recognition of surgical lesions. Call first.',
  },
  {
    question: 'How do I prevent colic in my horse?',
    answer:
      'The strongest evidence-based prevention measures are: continuous access to clean fresh water, free-choice or near-continuous forage access, gradual feed changes (over 7-14 days), strategic deworming with periodic fecal egg counts, annual or twice-yearly dental floats, adequate turnout time, and avoidance of large grain meals. The Cohen ND et al. case-control studies (Journal of the American Veterinary Medical Association, multiple) identified abrupt feed change, recent transport, recent stabling change, and reduced water intake as the most consistently associated risk factors.',
    answerText:
      'Continuous water access, near-continuous forage, gradual feed changes, strategic deworming, annual dental floats, adequate turnout, and avoidance of large grain meals are the strongest evidence-based prevention measures.',
  },
]

export default function ColicPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        contentType="health"
        relatedLinks={[
          { title: 'Equine Health Hub', href: '/health', category: 'Equine Health' },
          { title: 'Equine Gastric Ulcers', href: '/health/equine-ulcers' },
          { title: 'Equine Vaccination Schedule', href: '/guides/equine-vaccination-schedule' },
          { title: 'Forage Basics', href: '/nutrition/forage-basics' },
          { title: 'Is This a Horse Emergency?', href: '/tools/is-this-a-horse-emergency' },
        ]}
        hero={{
          title: 'Equine Colic',
          subtitle:
            'Colic is the single most common emergency presentation in equine practice and a leading cause of death in adult horses. The term "colic" refers to abdominal pain, not to a single disease — it is a syndrome with dozens of possible underlying causes, ranging from a transient spasm of the intestinal wall that resolves on its own to a strangulating lesion that is fatal within hours if not surgically corrected. The clinical challenge is that early signs of trivial colic and early signs of catastrophic colic look nearly identical for the first hour. The framework that follows summarizes AAEP guidelines, the European College of Equine Internal Medicine consensus, and the major epidemiologic series — and is reference material, not a substitute for veterinary attention.',
          category: 'Equine Health',
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'May 2026',
          readTime: '18 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Health', href: '/health' },
          { name: 'Colic', href: '/health/colic' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: 'What Is Colic', href: '#what-is-colic' },
            { label: 'Types of Colic', href: '#types' },
            { label: 'Clinical Signs', href: '#signs' },
            { label: 'When to Call the ER Vet', href: '#emergency' },
            { label: 'Diagnostic Approach', href: '#diagnosis' },
            { label: 'Medical Treatment', href: '#medical' },
            { label: 'Surgical Treatment', href: '#surgical' },
            { label: 'Post-Op Recovery', href: '#post-op' },
            { label: 'Prevention', href: '#prevention' },
            { label: 'FAQ', href: '#faq' },
            { label: 'References', href: '#references' },
          ]} />
          <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">If You Suspect Colic Right Now</div>
            <p className="text-xs text-brand-text-mid m-0 leading-relaxed">
              Call your veterinarian. Do not give Banamine or other medication unless your vet has specifically authorized it for this episode. Remove food and water. Keep the horse quiet — walking briefly is reasonable, exhausting hand-walking for hours is not. Time matters; the prognosis for strangulating lesions worsens hour by hour.
            </p>
          </div>
          <RelatedLinks
            title="Related Guides"
            links={[
              { label: 'Equine Gastric Ulcers', href: '/health/equine-ulcers' },
              { label: 'Equine Vaccination Schedule', href: '/guides/equine-vaccination-schedule' },
              { label: 'Equine Dental Care', href: '/guides/equine-dental-care' },
              { label: 'Joint Supplements', href: '/supplements/joint-supplements' },
              { label: 'Is This a Horse Emergency?', href: '/tools/is-this-a-horse-emergency' },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="health" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Evidence-led equine health articles."
            source="health-colic"
          />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Horses.com Editorial"
            publishedAt="2026-05-28"
            updatedAt="2026-05-28"
            reviewedBy="Editorial team"
          />

          <h2 id="what-is-colic">What Is Colic</h2>
          <p>Colic is a clinical sign — abdominal pain — and not a diagnosis. The horse&apos;s gastrointestinal anatomy is uniquely vulnerable to problems that cause pain: roughly 100 feet of intestine arranged in a long, mobile, sharply-folded path that includes the large colon (a 12-foot-long fermentation chamber that doubles back on itself at the pelvic flexure) and a relatively narrow attachment to the body wall that allows substantial movement of the gut. The same anatomy that makes horses efficient fiber fermenters also makes them prone to displacements, torsions, impactions, and gas accumulation that do not occur in carnivores or in ruminants.</p>

          <p>Survey data places the lifetime incidence of colic in horses at approximately 4–10 episodes per 100 horse-years, with most horses experiencing at least one colic episode in their lifetime (Tinker MK et al., <em>Equine Veterinary Journal</em>, 1997; USDA NAHMS Equine surveys). The annual mortality attributable to colic in the US adult horse population is between 0.7 and 1.4 percent — the single largest disease-attributable cause of death in adult horses, ahead of injury, neurologic disease, and respiratory disease.</p>

          <h2 id="types">Types of Colic</h2>
          <p>Colic can be classified by anatomic location (small intestine vs cecum vs large colon vs small colon), by mechanism (obstructive, strangulating, inflammatory, functional), or by specific diagnosis. The clinically-useful working categories:</p>

          <h3>Spasmodic colic</h3>
          <p>The most common diagnosis in field practice. Spasmodic colic represents excessive, painful contractions of intestinal smooth muscle without a structural lesion. Triggers include feed changes, weather changes, internal parasites (particularly small strongyles and tapeworms), stress, and dehydration. Spasmodic colic typically responds to a single dose of an antispasmodic (Buscopan, hyoscine butylbromide) and an NSAID (flunixin), and resolves within 1–2 hours.</p>

          <h3>Gas colic (tympanic colic)</h3>
          <p>Excess fermentation gas in the cecum or large colon distends the bowel and causes pain. Common after high-grain meals, lush spring grass, or rapid feed changes. The horse may have a distended abdomen, decreased gut sounds in some quadrants and excessive sounds in others (gas-fluid interfaces ping audibly on percussion). Gas colic usually responds to walking, NSAIDs, and time; occasionally requires trocarization of the cecum to release gas in severe distension.</p>

          <h3>Impaction colic</h3>
          <p>Accumulated dry, firm digesta blocks the bowel. The most common locations are the pelvic flexure of the large colon (a sharp bend where digesta naturally slows), the right dorsal colon, and the cecum. Risk factors include dehydration, change to coarser hay (particularly in older horses with dental issues), reduced water intake (common in winter when troughs freeze), and recent confinement after pasture. Treatment is typically medical: IV fluids to hydrate the impaction, oral water or electrolytes via nasogastric tube, mineral oil or magnesium sulfate (Epsom salts) as a laxative, and walking. Most impactions resolve in 24–72 hours with conservative management; refractory impactions occasionally go to surgery.</p>

          <h3>Displacement colic</h3>
          <p>The large colon is mobile and can shift out of its normal position. The most common displacement is a left dorsal displacement (LDD, or nephrosplenic entrapment), in which the colon migrates up over the nephrosplenic ligament and becomes trapped between the spleen and the left kidney. Right dorsal displacement (RDD) is the second common variant. Displacements cause moderate, often intermittent pain that does not fully resolve with NSAIDs. Diagnosis is via rectal examination plus abdominal ultrasound. Treatment options for LDD include rolling under general anesthesia, phenylephrine (which contracts the spleen and may allow the colon to fall back into position), and surgical correction.</p>

          <h3>Strangulating colic</h3>
          <p>The most dangerous category. A strangulating lesion compromises the blood supply to a segment of intestine — by torsion (twist), volvulus (rotation around the mesenteric axis), incarceration in a hernia, or entrapment by a lipoma (a fatty tumor on a pedicle, common in older horses). Strangulated bowel becomes ischemic within hours and necrotic within 6–12 hours; the resulting endotoxin release, peritonitis, and shock are rapidly fatal without surgical resection of the affected segment. Common specific entities include strangulating lipoma (older horses), large-colon volvulus (mares in the post-partum period), epiploic foramen entrapment, and small-intestinal volvulus. Clinical signs are typically severe — heart rate &gt;80 bpm, sweating, violent pain unresponsive to analgesics, often with reflux through a nasogastric tube. Survival depends almost entirely on time to surgery.</p>

          <h3>Enteritis and colitis</h3>
          <p>Inflammatory disease of the small intestine (proximal enteritis, anterior enteritis, "duodenitis-proximal jejunitis" or DPJ) or the large intestine (colitis) causes colic accompanied by significant fluid loss, endotoxemia, and (in colitis) diarrhea. Proximal enteritis classically presents with large-volume nasogastric reflux (8–20 liters), moderate-to-severe pain that improves after gastric decompression, and elevated heart rate. Colitis presents with profuse watery diarrhea, dehydration, and endotoxic shock. Both are medical emergencies but typically not surgical (distinguishing strangulating small-intestinal lesions from proximal enteritis is one of the harder clinical calls in equine medicine; abdominal ultrasound and serial monitoring are essential).</p>

          <h3>Sand colic</h3>
          <p>Endemic in sandy regions (Florida, parts of the Southwest, sandy turnouts elsewhere). Sand ingested with forage accumulates in the ventral colon and produces impaction, irritation, and occasionally displacement. Diagnosis is via abdominal radiography (sand is radiopaque) and fecal sedimentation. Treatment includes psyllium husk (Sand Clear or generic equivalents) administered orally to bind and move sand out, plus IV fluids; severe cases occasionally require surgical evacuation.</p>

          <h3>Gastric distension and gastric rupture</h3>
          <p>The equine stomach has limited capacity (8–15 liters) and a very competent cardia (the sphincter between esophagus and stomach) that essentially prevents vomiting. Fluid or gas accumulation behind a functional small-intestinal obstruction can distend the stomach until it ruptures — which is uniformly fatal. Nasogastric intubation as part of every colic workup is partly a diagnostic test (looking for reflux) and partly a life-saving decompression maneuver.</p>

          <h2 id="signs">Clinical Signs</h2>
          <p>The classic colic signs, in approximate order of severity:</p>

          <ul>
            <li><strong>Inappetence</strong> — refusing grain or hay, walking away from the feed pan. Often the earliest sign.</li>
            <li><strong>Pawing</strong> at the ground with a front foot, sometimes repeatedly in one spot.</li>
            <li><strong>Looking at or biting the flank</strong> — the horse turns its head toward the abdomen.</li>
            <li><strong>Stretching out</strong> as if to urinate, without urinating ("posturing").</li>
            <li><strong>Lying down repeatedly</strong>, getting up, lying down again. More frequent and restless than normal recumbency.</li>
            <li><strong>Rolling</strong> — initially gentle rolling progressing to violent, repeated rolling in severe pain. Rolling itself is not directly dangerous (the old belief that rolling causes torsion is not well supported), but the horse rolling is communicating significant pain.</li>
            <li><strong>Sweating</strong>, particularly patchy sweating on the flank and shoulders, often associated with significant pain or shock.</li>
            <li><strong>Curling the upper lip</strong> (flehmen response), grinding teeth, or holding the head abnormally.</li>
            <li><strong>Elevated heart rate</strong> — normal resting is 28–44 bpm; &gt;60 bpm is concerning, &gt;80 bpm is significantly concerning, &gt;100 bpm is associated with high mortality.</li>
            <li><strong>Elevated respiratory rate</strong>, flared nostrils.</li>
            <li><strong>Decreased or absent gut sounds</strong> on auscultation of all four abdominal quadrants. Absent gut sounds for greater than 2 hours is a significant finding.</li>
            <li><strong>Absence of manure passage</strong> for greater than 8–12 hours.</li>
            <li><strong>Distended abdomen</strong> — variable, more apparent in large-colon distension or gas accumulation.</li>
            <li><strong>Dehydration</strong> — tacky mucous membranes, prolonged capillary refill time (&gt;2 seconds), prolonged skin tent.</li>
            <li><strong>Discolored mucous membranes</strong> — pale, brick-red, or purple gums indicate shock or endotoxemia.</li>
          </ul>

          <p>The single most useful piece of equipment for the owner during a colic episode is a watch and a notebook: time of onset, heart rate at intervals, time of last manure, time of last drink, current pain behavior. This information transforms the veterinary phone consultation from guesswork to triage.</p>

          <h2 id="emergency">When to Call the ER Vet</h2>
          <p>Call your regular veterinarian at the first sign of colic. A conservative sign-list urgency read — go now, same-day, or monitor — lives on the <a href="/tools/is-this-a-horse-emergency">Is This a Horse Emergency? triage tool</a>; it does not diagnose. Call the emergency line and prepare for referral to a surgical hospital if any of the following are present:</p>

          <ul>
            <li>Severe, unrelenting pain — repeated violent rolling, throwing self to the ground, inability to stand quietly.</li>
            <li>Heart rate sustained above 60 bpm, particularly above 80 bpm.</li>
            <li>Absence of gut sounds in all four quadrants for more than 2 hours.</li>
            <li>Profuse sweating without other explanation.</li>
            <li>Failure to respond to a vet-administered dose of flunixin (Banamine) — the &ldquo;non-responder&rdquo; is the classic surgical candidate.</li>
            <li>Significant nasogastric reflux (&gt;2 liters obtained on intubation).</li>
            <li>Discolored mucous membranes — brick-red, purple, or blue gums.</li>
            <li>Distended abdomen visible to the eye, rapidly progressing.</li>
            <li>Pregnancy in late gestation with severe pain (uterine torsion, ruptured prepubic tendon, peripartum colon torsion are all surgical).</li>
            <li>History of recent post-partum status in mares (high risk for large-colon volvulus).</li>
            <li>Foal under 3 months of age with any signs of colic (foal colic differentials include congenital abnormalities, intussusception, uroperitoneum — all surgical or near-surgical).</li>
          </ul>

          <p>For owners more than 1 hour from a surgical referral hospital, the threshold for hauling should be lower rather than higher. The AAEP &ldquo;Colic Care&rdquo; guidelines and the multi-center referral hospital studies (Mair TS et al., <em>Equine Veterinary Journal</em>, multiple) repeatedly identify time-from-onset-to-surgery as the strongest modifiable prognostic factor.</p>

          <h2 id="diagnosis">Diagnostic Approach</h2>
          <p>A complete colic workup at the farm or in the field includes:</p>

          <h3>History</h3>
          <p>When did pain start? When did the horse last eat, drink, defecate? Any recent feed changes, hay changes, deworming, transport, weather changes, foaling? Any prior colic episodes? Reproductive status. Current medications. Vaccination and deworming history.</p>

          <h3>Physical examination</h3>
          <p>Heart rate, respiratory rate, rectal temperature, mucous membrane color, capillary refill time, hydration status, jugular fill, skin tent, gut sounds in all four quadrants, signs of pain at rest. Body condition.</p>

          <h3>Nasogastric intubation</h3>
          <p>A tube passed through the nostril and esophagus into the stomach serves two purposes: diagnostic (the presence and volume of gastric reflux indicates a functional or mechanical small-intestinal obstruction) and therapeutic (decompresses a distended stomach, prevents rupture, allows administration of oral fluids and mineral oil). Reflux &gt;2 liters is significant; reflux &gt;5 liters strongly suggests proximal enteritis or strangulating small-intestinal lesion.</p>

          <h3>Rectal examination</h3>
          <p>A gloved arm into the rectum allows palpation of approximately one-third of the abdominal contents — the caudal abdomen, the bladder, the reproductive tract, the pelvic flexure of the large colon, the cecal base, parts of the small colon, and (when accessible) the ileocecal junction. Findings of interest include distended bowel loops (small intestine), gas distension of the cecum or colon, displaced colon, impactions of the pelvic flexure or small colon, masses, foreign bodies, or a ventrally-displaced spleen consistent with nephrosplenic entrapment.</p>

          <h3>Abdominal ultrasound</h3>
          <p>Increasingly available in field practice. Useful for evaluating small-intestinal motility (paralyzed loops with no peristalsis suggest strangulation or enteritis), large-colon position, the nephrosplenic space, peritoneal fluid volume and character, and gastric distension. The FLASH (Fast Localized Abdominal Sonography of Horses) protocol provides a structured 7-point survey adapted for field use (Busoni V et al., <em>Equine Veterinary Education</em>, 2011).</p>

          <h3>Abdominocentesis (belly tap)</h3>
          <p>A sample of peritoneal fluid drawn from the most ventral point of the abdomen. Normal equine peritoneal fluid is clear straw-colored with total protein &lt;2.5 g/dL and white blood cell count &lt;5,000/μL. Elevated protein and white-cell count indicate inflammation; serosanguinous or red-orange fluid with elevated lactate indicates ischemic bowel — strongly supportive of a strangulating lesion and a clear indication for surgery.</p>

          <h3>Bloodwork</h3>
          <p>A PCV (packed cell volume), total protein, lactate, and electrolyte panel give the most useful rapid information. PCV &gt;50 percent indicates dehydration and/or splenic contraction from pain. Lactate &gt;4 mmol/L on admission and a failure to drop with fluid therapy carries a poor prognosis.</p>

          <h2 id="medical">Medical Treatment</h2>
          <p>Most colic episodes (approximately 90 percent in survey data) are managed medically — they do not go to surgery. Standard medical treatment tiers:</p>

          <h3>Analgesia</h3>
          <p>Flunixin meglumine (Banamine) is the most commonly-used veterinarian-prescribed analgesic and anti-inflammatory in equine colic; dosing must be determined by a veterinarian. Banamine also reduces endotoxin-mediated effects. For more severe pain, alpha-2 agonists (xylazine, detomidine) provide rapid short-acting sedation and analgesia. Butorphanol is occasionally added as an adjunct. The clinical caveat: pain that is unresponsive to appropriate analgesic dosing is itself a diagnostic finding — the non-responder is the surgical candidate, and pain control should not be escalated indefinitely to mask a strangulating lesion.</p>

          <h3>Spasmolytic</h3>
          <p>Hyoscine butylbromide (Buscopan) reduces smooth-muscle spasm in the GI tract and is particularly useful in spasmodic colic. Onset is rapid (5–15 minutes). Buscopan transiently elevates heart rate (a known side effect) — interpretation of HR after Buscopan administration should account for this.</p>

          <h3>Fluid therapy</h3>
          <p>IV crystalloid fluids (Lactated Ringer&apos;s, Plasmalyte) at maintenance to twice-maintenance rates support hydration of impactions and circulation in shock. Severe shock or strangulation may require hypertonic saline followed by isotonic crystalloid, with plasma or colloids in selected cases. Oral fluids via nasogastric tube (water, electrolytes, sometimes mineral oil or magnesium sulfate) are useful when reflux is absent.</p>

          <h3>Laxatives</h3>
          <p>Mineral oil (2–4 L via nasogastric tube) is the traditional laxative for large-colon impactions. Magnesium sulfate (Epsom salts) is more osmotically active and faster-acting but contraindicated in dehydration. Psyllium husk is specifically used for sand impaction. None of these is appropriate in a horse with reflux or in the presence of a functional obstruction.</p>

          <h3>Walking and supportive care</h3>
          <p>Brief walking can be useful as a non-pharmacological way to encourage motility and to provide a window for monitoring; exhausting hours-long walking sessions are counterproductive. Food and water should be withheld until the horse is comfortable and gut sounds have returned — typically 12–24 hours after pain resolution, then reintroducing small amounts of grass hay before grain or pasture.</p>

          <h2 id="surgical">Surgical Treatment</h2>
          <p>Approximately 5–10 percent of colic cases require surgery. Exploratory laparotomy (celiotomy) is performed under general anesthesia through a ventral midline incision, allowing the surgeon to exteriorize and inspect the gastrointestinal tract from the stomach to the small colon. Specific procedures performed at surgery include:</p>

          <ul>
            <li><strong>Enterotomy</strong> — opening a bowel segment to remove an impaction or foreign body.</li>
            <li><strong>Resection and anastomosis</strong> — removing a damaged segment of bowel and reconnecting the healthy ends. Common for strangulating small-intestinal lesions.</li>
            <li><strong>Pelvic flexure enterotomy</strong> — opening the pelvic flexure of the large colon to evacuate impacted or displaced colonic contents.</li>
            <li><strong>Colopexy or colonic resection</strong> — for recurrent large-colon volvulus, partial colonic resection or surgical fixation of the colon can reduce recurrence risk.</li>
            <li><strong>Volvulus reduction</strong> — untwisting a torsed colon or small intestine.</li>
          </ul>

          <p>Published survival data (Proudman CJ et al., <em>Equine Veterinary Journal</em>, 2002; Mair TS &amp; Smith LJ, multiple in <em>Equine Veterinary Journal</em>, 2005–2013): non-strangulating large-colon surgical cases have short-term survival of approximately 80–90 percent, with long-term survival close to that figure. Strangulating small-intestinal lesions have short-term survival of approximately 50–75 percent, with long-term survival declining as adhesions and complications develop. Strangulating large-colon volvulus has the worst prognosis among common surgical lesions, with reported survival of 35–60 percent depending on duration and the percentage of colon requiring resection.</p>

          <p>The dominant predictor of surgical outcome, repeatedly identified across multi-center series, is the elapsed time from onset of severe pain to surgical correction. The horse referred and on the operating table within 4–6 hours of severe pain onset has materially better odds than the horse that waited 12–24 hours.</p>

          <h2 id="post-op">Post-Op Recovery</h2>
          <p>Recovery from colic surgery is a 30–90 day process. Post-operative complications include:</p>

          <ul>
            <li><strong>Ileus</strong> (post-operative absence of bowel motility) — common after small-intestinal surgery, managed with prokinetics, fluids, and time.</li>
            <li><strong>Endotoxemia</strong> — managed with IV fluids, anti-inflammatories, polymyxin B in selected cases, and supportive care.</li>
            <li><strong>Adhesions</strong> — fibrous bands between bowel loops that can produce recurrent colic in the 1–6 month post-operative window.</li>
            <li><strong>Incisional infection or hernia</strong> — managed with wound care and abdominal support (post-op belly band).</li>
            <li><strong>Laminitis</strong> — endotoxin-mediated laminitis is a serious complication, particularly in horses that were endotoxemic pre-operatively.</li>
          </ul>

          <p>Standard return-to-work timelines: stall rest 14–30 days, hand-walking begins as the incision allows, gradual return to turnout in a small paddock, and a graded return to ridden work between 60 and 120 days post-operatively. Owners should expect 1–3 follow-up visits and a 4–6 week course of restricted exercise minimum.</p>

          <h2 id="prevention">Prevention</h2>
          <p>The Cohen ND et al. case-control epidemiology series (<em>Journal of the American Veterinary Medical Association</em>, multiple) and the subsequent Hillyer MH et al. and Suthers JM et al. analyses consistently identify the following as the strongest modifiable risk factors. Addressing each is the foundation of practical colic prevention:</p>

          <h3>Continuous water access</h3>
          <p>Dehydration is one of the most consistently-identified colic risk factors, particularly in winter when water troughs freeze or when horses dislike the taste of cold water. Tank heaters in winter, multiple water sources, and monitoring water consumption (a healthy 1,100 lb horse drinks 5–15 gallons per day depending on workload, temperature, and forage moisture content) all reduce risk.</p>

          <h3>Near-continuous forage</h3>
          <p>The equine GI tract evolved to process forage continuously. Long fasting intervals are associated with both gastric ulcers and colic. Free-choice hay (or slow-feeder hay nets to extend a limited ration over time) is the practical answer for most horses.</p>

          <h3>Gradual feed changes</h3>
          <p>Abrupt feed change — switching hay types, introducing a new grain, dramatic pasture changes (spring grass turnout, fall frost-damaged grass) — is the single most-consistently identified colic risk factor in the Cohen series. Changes should be made over 7–14 days, replacing 25 percent of the old feed with the new every 3–4 days.</p>

          <h3>Strategic deworming</h3>
          <p>Internal parasites contribute to spasmodic colic, impactions, and (historically) thromboembolic colic. Modern deworming practice uses periodic fecal egg counts to identify high-shedder horses and targets treatments accordingly, rather than blanket calendar-based deworming. Annual tapeworm treatment (praziquantel) is recommended in most regions because tapeworm infestation is associated with ileal impaction.</p>

          <h3>Annual dental care</h3>
          <p>Sharp dental points, malocclusions, and missing teeth impair chewing and predispose to choke and to impaction colic from poorly-chewed forage. Annual dental floats (every 6 months for seniors) are recommended. See the dental care guide.</p>

          <h3>Pasture and exercise</h3>
          <p>Increased turnout time is consistently associated with decreased colic risk in epidemiologic studies. The horse on 24-hour turnout has lower colic incidence than the horse confined to a stall, controlling for other variables.</p>

          <h3>Avoid large grain meals</h3>
          <p>Concentrate meals greater than approximately 2 g starch per kg body weight per meal are associated with hindgut acidosis, gas production, and colic. Splitting grain rations into multiple smaller meals reduces risk.</p>

          <h3>Sand prevention</h3>
          <p>In sandy regions: feed off the ground (rubber mats, slow-feeders), supplement psyllium periodically (typical regimen is 1 cup of psyllium powder per 500 lb body weight, top-dressed daily for the first 7 days of each month), monitor manure for excessive sand sedimentation.</p>

          <h3>Monitor and document baseline vitals</h3>
          <p>Knowing the horse&apos;s resting heart rate, normal gut sounds, normal manure output, and typical attitude makes it possible to recognize early deviations. Owners who can describe the horse&apos;s baseline accurately give the veterinarian a substantial diagnostic advantage in any acute presentation.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>American Association of Equine Practitioners. &ldquo;Colic Care Guidelines for Owners&rdquo; and &ldquo;Equine Colic — Diagnosis and Treatment.&rdquo; aaep.org.</li>
            <li>Tinker MK, White NA, Lessard P, Thatcher CD, Pelzer KD, Davis B, Carmel DK. &ldquo;Prospective Study of Equine Colic Incidence and Mortality.&rdquo; <em>Equine Veterinary Journal</em>, 1997; 29(6):448–453.</li>
            <li>Curtis L, Burford JH, Thomas JSM, Curran ML, Bayes TC, England GCW, Freeman SL. &ldquo;Prospective Study of the Primary Evaluation of 1,016 Horses with Clinical Signs of Abdominal Pain by Veterinary Practitioners.&rdquo; <em>Equine Veterinary Journal</em>, 2019; 51(4):528–533.</li>
            <li>Proudman CJ, Smith JE, Edwards GB, French NP. &ldquo;Long-Term Survival of Equine Surgical Colic Cases.&rdquo; <em>Equine Veterinary Journal</em>, 2002; 34(4):432–437.</li>
            <li>Proudman CJ, Edwards GB, Barnes J, French NP. &ldquo;Modelling Long-Term Survival of Horses Following Surgery for Large Intestinal Disease.&rdquo; <em>Equine Veterinary Journal</em>, 2005; 37(4):366–370.</li>
            <li>Mair TS, Smith LJ. &ldquo;Survival and Complication Rates in 300 Horses Undergoing Surgical Treatment of Colic.&rdquo; <em>Equine Veterinary Journal</em>, 2005; 37(4):296–302, 303–309, 310–314 (parts 1–3).</li>
            <li>Cohen ND, Matejka PL, Honnas CM, Hooper RN. &ldquo;Case-Control Study of the Association Between Various Management Factors and Development of Colic in Horses.&rdquo; <em>Journal of the American Veterinary Medical Association</em>, 1995; 206(5):667–673.</li>
            <li>Cohen ND, Gibbs PG, Woods AM. &ldquo;Dietary and Other Management Factors Associated with Colic in Horses.&rdquo; <em>Journal of the American Veterinary Medical Association</em>, 1999; 215(1):53–60.</li>
            <li>Hillyer MH, Taylor FGR, French NP. &ldquo;A Cross-Sectional Study of Colic in Horses on Thoroughbred Training Premises in the British Isles in 1997.&rdquo; <em>Equine Veterinary Journal</em>, 2001; 33(4):380–385.</li>
            <li>Suthers JM, Pinchbeck GL, Proudman CJ, Archer DC. &ldquo;Risk Factors for Large Colon Volvulus in the UK.&rdquo; <em>Equine Veterinary Journal</em>, 2013; 45(5):558–563.</li>
            <li>Busoni V, De Busscher V, Lopez D, Verwilghen D, Cassart D. &ldquo;Evaluation of a Protocol for Fast Localised Abdominal Sonography of Horses (FLASH) Admitted for Colic.&rdquo; <em>Veterinary Journal</em>, 2011; 188(1):77–82.</li>
            <li>Blikslager AT, White NA, Moore JN, Mair TS (eds). <em>The Equine Acute Abdomen</em>, 3rd edition, Wiley-Blackwell, 2017.</li>
            <li>Southwood LL (ed). <em>Practical Guide to Equine Colic</em>, Wiley-Blackwell, 2013.</li>
            <li>USDA NAHMS Equine 2015 Study. &ldquo;Baseline Reference of Equine Health and Management in the United States.&rdquo; aphis.usda.gov.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}

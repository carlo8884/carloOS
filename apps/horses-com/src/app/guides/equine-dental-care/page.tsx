import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Equine Dental Care — Floats, Wolf Teeth, EOTRH, and Annual Care',
  description:
    'Equine dental anatomy, annual float schedule, signs of dental problems, wolf-tooth extraction, and EOTRH in seniors. Aligned with AAEP and AVDC guidance.',
  path: '/guides/equine-dental-care',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'Equine Dental Care — Practical Reference for Owners',
  description:
    'Equine dental anatomy and annual care: sharp points, malocclusions, floats, wolf teeth, EOTRH, and signs of dental disease.',
  url: 'https://horses.com/guides/equine-dental-care',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-05-28T00:00:00Z',
  modifiedAt: '2026-05-28T00:00:00Z',
})

const medSchema = buildMedicalWebPageSchema({
  name: 'Equine Dental Care',
  description:
    'Equine dental health — anatomy, annual maintenance, dental floats, wolf teeth, EOTRH, and clinical signs of disease.',
  url: 'https://horses.com/guides/equine-dental-care',
  authorName: 'Horses.com Editorial',
  lastReviewed: '2026-05-28',
})

const combined = combineSchemas(articleSchema, medSchema)

const FAQS = [
  {
    question: 'How often does a horse need a dental float?',
    answer:
      'AAEP recommends annual dental examinations for adult horses, with floating performed when indicated. For most adult horses ages 5-20 on a normal forage-based diet, annual floats are typical. Performance horses, horses with significant bit work, seniors (over 20), and horses with known dental issues benefit from twice-yearly examinations. Young horses (2-5 years) shed deciduous teeth (caps), develop wolf teeth, and erupt permanent teeth that often require more frequent attention — typically every 6 months. Each horse&apos;s schedule should be set by the dental veterinarian based on the individual mouth.',
    answerText:
      'AAEP recommends annual dental exams for adult horses. Young horses (2-5), performance horses, and seniors typically need twice-yearly exams. Each horse&apos;s schedule should be set by the dental veterinarian based on the individual mouth.',
  },
  {
    question: 'What is a dental float and why does my horse need one?',
    answer:
      'A dental float is the procedure of filing sharp points and malocclusions on a horse&apos;s cheek teeth (premolars and molars). Horses have hypsodont teeth — teeth that continue to erupt throughout life as they wear down — and the upper jaw is wider than the lower jaw (anisognathic). This combination produces sharp enamel points on the outside (buccal) of upper cheek teeth and the inside (lingual) of lower cheek teeth that can cut the cheek and tongue, cause pain, interfere with chewing, and cause bit resistance. Floating files these points smooth and corrects malocclusions.',
    answerText:
      'A dental float is the filing of sharp enamel points and malocclusions on a horse&apos;s cheek teeth. Horses have continuously-erupting teeth and wider upper than lower jaws, producing sharp points that cut cheeks and interfere with chewing.',
  },
  {
    question: 'Should sedation be used for a dental float?',
    answer:
      'In modern equine dentistry, sedation is standard for thorough examination and effective floating. Sedation (typically detomidine or detomidine plus butorphanol) allows the dentist to use a full-mouth speculum, examine all cheek teeth and the back of the mouth, and operate motorized equipment safely. Floating without sedation is limited to the front portion of the mouth and risks injury to horse and operator. The American Veterinary Dental College and AAEP both recommend sedated examination as standard of care for routine equine dentistry.',
    answerText:
      'Yes. Modern equine dentistry uses sedation as standard. Sedation allows full-mouth examination with a speculum, safe use of motorized equipment, and access to back teeth. AVDC and AAEP recommend sedated exam as standard.',
  },
  {
    question: 'What are wolf teeth and do they need to come out?',
    answer:
      'Wolf teeth are small vestigial premolars (the first premolar, P1) that appear in approximately 70 percent of horses, typically on the upper jaw immediately in front of the second premolar. They erupt at 6-18 months of age and may be small and pointed or fused with the adjacent tooth. Because wolf teeth sit precisely where the bit rests, they are commonly extracted before a young horse begins bit work to prevent bit interference and bit-related discomfort. Extraction is a brief procedure under sedation, typically performed before the horse is started under saddle.',
    answerText:
      'Wolf teeth are small vestigial premolars (P1) found in about 70 percent of horses, on the upper jaw in front of the second premolar. They sit where the bit rests and are commonly extracted before young horses start bit work. Extraction is brief and done under sedation.',
  },
  {
    question: 'What is EOTRH?',
    answer:
      'EOTRH (equine odontoclastic tooth resorption and hypercementosis) is a progressive dental disease of older horses — most often diagnosed in horses over 15 years of age — in which the incisor teeth (and sometimes canines) undergo resorption (cells eat away at the tooth structure) and abnormal cementum production (creating bulbous swellings around the affected teeth). The disease is painful, progressive, and ultimately requires extraction of the affected teeth. Signs include difficulty biting into apples or carrots, dropping food, reluctance to be bridled, and visible swellings or color changes at the gumline of the incisors. Diagnosis is via dental examination and radiographs.',
    answerText:
      'EOTRH (equine odontoclastic tooth resorption and hypercementosis) is a progressive painful dental disease of older horses, affecting incisors and sometimes canines. Treatment is extraction of affected teeth. Diagnosis via exam and radiographs.',
  },
  {
    question: 'Can a non-veterinarian "horse dentist" do my horse&apos;s teeth?',
    answer:
      'Regulations vary by state and country. In the US, scope of practice for non-veterinary equine dental practitioners is governed by state veterinary practice acts — some states permit credentialed non-veterinary dental practitioners to perform certain procedures, others restrict equine dentistry to licensed veterinarians. The relevant credentialing body for non-veterinarians is the International Association of Equine Dentistry (IAED). For sedation, extraction, radiographs, and complex dental procedures, a licensed veterinarian is required everywhere in the US. The American Veterinary Dental College (AVDC) and the AAEP recommend that equine dental work be performed by a licensed veterinarian or a credentialed dental practitioner working under veterinary supervision.',
    answerText:
      'Regulations vary by state. Some states permit credentialed non-veterinary practitioners (IAED-credentialed) for limited procedures; others restrict dentistry to vets. Sedation, extraction, and radiographs require a veterinarian. AVDC and AAEP recommend veterinary or vet-supervised dental work.',
  },
  {
    question: 'What does a typical dental visit cost?',
    answer:
      'Approximate US costs for a standard adult-horse dental visit (regional variation): $150-300 for a sedated float without complications, including sedation. Add $50-150 for wolf-tooth extraction. Radiographs add $50-200 depending on number of views. Extraction of diseased cheek teeth or incisors is a separate, more involved procedure and can range from $200 for a simple incisor to over $1,000 for a difficult standing cheek-tooth extraction. EOTRH treatment requiring extraction of multiple incisors is typically $800-2,000+.',
    answerText:
      'Standard sedated adult float: $150-300. Wolf-tooth extraction adds $50-150. Radiographs add $50-200. Diseased-tooth extraction ranges $200-1,000+ depending on complexity. EOTRH extractions typically $800-2,000+.',
  },
]

export default function EquineDentalCarePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        hero={{
          title: 'Equine Dental Care',
          subtitle:
            'The horse&apos;s mouth is a continuously-changing structure with teeth that erupt throughout life, anatomical asymmetry that produces predictable sharp points, and predictable patterns of disease that respond well to regular maintenance and respond very poorly to neglect. The framework that follows summarizes AAEP and American Veterinary Dental College guidance on equine dentistry — annual examination cadence, the mechanics of floats, the management of wolf teeth in young horses, and the recognition and management of EOTRH in older horses — as practical owner reference, not as a substitute for a sedated examination by a qualified dental veterinarian.',
          category: 'Equine Care',
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'May 2026',
          readTime: '15 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Guides', href: '/guides' },
          { name: 'Equine Dental Care', href: '/guides/equine-dental-care' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: 'Why Dental Care Matters', href: '#why' },
            { label: 'Dental Anatomy', href: '#anatomy' },
            { label: 'Annual Float Schedule', href: '#schedule' },
            { label: 'What a Float Involves', href: '#float' },
            { label: 'Signs of Dental Problems', href: '#signs' },
            { label: 'Wolf Teeth', href: '#wolf' },
            { label: 'EOTRH — Senior Horses', href: '#eotrh' },
            { label: 'Other Common Conditions', href: '#other' },
            { label: 'Cost &amp; Practitioners', href: '#cost' },
            { label: 'FAQ', href: '#faq' },
            { label: 'References', href: '#references' },
          ]} />
          <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Veterinary Disclaimer</div>
            <p className="text-xs text-brand-text-mid m-0 leading-relaxed">
              Equine dentistry requires sedation, specialized equipment, and detailed clinical examination. This article is reference material. Find an AAEP-member veterinarian who performs equine dentistry — or an AVDC-certified equine dental specialist — for routine care and any diagnosed disease.
            </p>
          </div>
          <RelatedLinks
            title="Related Guides"
            links={[
              { label: 'Equine Colic', href: '/health/colic' },
              { label: 'Equine Vaccination Schedule', href: '/guides/equine-vaccination-schedule' },
              { label: 'Equine Gastric Ulcers', href: '/health/equine-ulcers' },
              { label: 'First-Horse Roadmap', href: '/first-horse-roadmap' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Evidence-led equine care articles."
            source="guide-dental"
          />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="why">Why Dental Care Matters</h2>
          <p>Horses are unique among domestic species in having <strong>hypsodont teeth</strong> — teeth with very long crowns embedded in the jaw at the time of eruption, designed to continue erupting throughout the animal&apos;s life as the occlusal (chewing) surface wears down. A horse&apos;s incisor and cheek teeth erupt approximately 2–3 mm per year for most of the horse&apos;s working life. This evolutionary design suited the wild horse&apos;s grass-grazing lifestyle — constant slow grinding of high-silica grasses produced predictable, even wear across the dental arcades.</p>

          <p>Domestic horses present a problem the design didn&apos;t evolve for: shorter eating times, softer feeds (hay rather than fresh grass, grain rather than tough range forage), and longer lifespans. The result is predictable patterns of uneven wear, sharp enamel points, malocclusions, and (in older horses) tooth loss and resorptive disease. Without regular maintenance, the consequences include difficulty chewing (with downstream effects on weight, performance, and colic risk), pain, bit resistance, head tilting, infections, and significantly reduced quality of life.</p>

          <p>The economic and welfare case for routine dental care is compelling. A horse that cannot chew its forage adequately drops feed, fails to extract calories from hay, becomes a candidate for choke and impaction colic, and (in its later years) faces life-shortening complications that routine dental care prevents. The AAEP and the American Veterinary Dental College both consider annual dental examination part of preventive equine healthcare.</p>

          <h2 id="anatomy">Equine Dental Anatomy</h2>

          <h3>Tooth count and types</h3>
          <p>Adult horses have 36–44 teeth, depending on sex and presence of wolf teeth. A typical adult male horse has:</p>
          <ul>
            <li><strong>12 incisors</strong> (6 upper, 6 lower) — front teeth used for cutting grass.</li>
            <li><strong>4 canines</strong> (2 upper, 2 lower) — &ldquo;tushes&rdquo; or &ldquo;fighting teeth&rdquo;, present in most males and approximately 25 percent of females.</li>
            <li><strong>0–4 wolf teeth</strong> (vestigial first premolars, P1) — present in approximately 70 percent of horses.</li>
            <li><strong>12 premolars</strong> (P2, P3, P4 — 6 upper, 6 lower) — cheek teeth used for grinding.</li>
            <li><strong>12 molars</strong> (M1, M2, M3 — 6 upper, 6 lower) — cheek teeth used for grinding.</li>
          </ul>

          <p>The 24 cheek teeth (premolars and molars) form continuous occlusal arcades. The first 4 cheek teeth in each row are premolars, the last 3 are molars; functionally the entire arcade works as a grinding surface.</p>

          <h3>Anisognathic jaws</h3>
          <p>The horse&apos;s upper jaw is approximately 30 percent wider than the lower jaw at the cheek teeth. This anatomical asymmetry — termed anisognathism — combined with the rostro-caudal grinding motion of mastication, produces predictable sharp enamel points on the buccal (outside) edge of the upper cheek teeth and on the lingual (inside) edge of the lower cheek teeth. These points cut the cheeks and tongue, cause pain during eating and bit work, and are the primary indication for floating.</p>

          <h3>Continuous eruption</h3>
          <p>Equine teeth erupt at approximately 2–3 mm per year throughout most of the horse&apos;s working life. The reserve crown (the tooth tissue embedded in the jaw, not yet erupted) is consumed over the horse&apos;s lifetime; by 25–30 years of age, many horses have minimal reserve crown remaining, and teeth begin to lose their grinding surfaces, become loose, and ultimately fall out. This is why dental care for senior horses focuses on maintaining function with what remains rather than aggressive correction.</p>

          <h3>Tooth aging</h3>
          <p>The presence and shape of various dental landmarks on the incisors (cups, dental stars, infundibulum, Galvayne&apos;s groove, hook and Galvayne&apos;s groove on corner incisors) allow age estimation in horses up to approximately 15–18 years with reasonable accuracy. After this, aging by dental examination becomes increasingly imprecise. This is the basis of the &ldquo;don&apos;t look a gift horse in the mouth&rdquo; adage.</p>

          <h2 id="schedule">Annual Float Schedule</h2>
          <p>AAEP recommends an annual dental examination for every adult horse, with floating performed when indicated. Typical practical scheduling:</p>

          <ul>
            <li><strong>Foals (0–2 years):</strong> oral examination at routine veterinary visits; intervention rarely needed unless congenital abnormalities (parrot mouth, sow mouth) are present.</li>
            <li><strong>Young horses (2–5 years):</strong> twice-yearly examination. During this period horses shed 24 deciduous &ldquo;caps&rdquo; (baby teeth), erupt 36–44 permanent teeth, may develop wolf teeth needing extraction, and require frequent intervention to keep the rapidly-changing mouth comfortable for bit work.</li>
            <li><strong>Adult horses (5–20 years):</strong> annual examination; floats performed approximately every 12 months for most horses. Higher-mileage horses (performance, competition) and horses with conformational dental issues may need 6-monthly attention.</li>
            <li><strong>Senior horses (20+ years):</strong> twice-yearly examination. Older horses develop progressive wear, exposed pulp, loose teeth, and EOTRH; close monitoring catches problems early.</li>
          </ul>

          <h2 id="float">What a Float Involves</h2>
          <p>A modern dental examination and float, performed by a veterinarian or veterinary-supervised credentialed dental practitioner, follows a standard sequence:</p>

          <h3>History and intake</h3>
          <p>The veterinarian asks about current diet, body condition, chewing behavior (any quidding — dropping partially-chewed feed), bit performance, head carriage, weight changes, and prior dental history.</p>

          <h3>Sedation</h3>
          <p>Standard sedation is detomidine (alone or combined with butorphanol) administered intravenously. Sedation produces head-down standing relaxation that allows safe and thorough work. An unsedated &ldquo;float&rdquo; cannot reach the back teeth, cannot use a full-mouth speculum, and risks injury to both the horse and operator with motorized equipment.</p>

          <h3>Full-mouth examination</h3>
          <p>A full-mouth speculum (Hausmann gag or similar) is placed to hold the mouth open. The dentist uses a head light, dental mirror, and explorer probe to examine each tooth and the surrounding gingiva — looking for sharp points, hooks (overgrowths at the front of the upper P2 or the back of the lower M3), waves (uneven occlusal plane), ramps, steps, missing or fractured teeth, exposed pulp, periodontal disease, and abnormal mucosal tissue.</p>

          <h3>Floating</h3>
          <p>Once the examination is complete and a plan is set, sharp enamel points are filed smooth using floats. Modern equine dentistry primarily uses motorized floats (rotary or linear oscillating, water-cooled tungsten-carbide discs) which are faster, more precise, and produce a smoother finish than manual hand floats. Traditional hand floats (manual rasps with various heads) are still used for selected applications, particularly for finishing or for horses where motorized equipment is not tolerated even with sedation.</p>

          <h3>Correction of significant findings</h3>
          <p>Major hooks, ramps, and waves may be reduced over one or more sessions; aggressive single-session reduction of large overgrowths risks exposing pulp. Wolf teeth, fractured teeth, or diseased teeth may be extracted in the same session (extractions are billed separately). Photographs and radiographs are taken when indicated.</p>

          <h3>Recovery and follow-up</h3>
          <p>The horse recovers from sedation in 30–60 minutes. Eating may be slightly tentative for 24 hours after extensive work. Soft feed (soaked hay cubes, mashes) may be offered for the first day if significant work was done. Follow-up examination at 6–12 months is scheduled based on findings.</p>

          <h2 id="signs">Signs of Dental Problems</h2>
          <p>Most equine dental disease is subclinical — the horse compensates well, and significant pathology can be present without the owner noticing. When clinical signs appear, they are characteristically nonspecific. The full list:</p>

          <ul>
            <li><strong>Quidding</strong> — dropping partially-chewed wads of feed from the mouth while eating. The textbook sign of cheek-tooth dysfunction.</li>
            <li><strong>Slow eating</strong>, prolonged eating time, eating &ldquo;sideways&rdquo; or with the head tilted.</li>
            <li><strong>Weight loss</strong> on adequate calories, particularly in seniors — inability to grind hay effectively reduces calorie extraction.</li>
            <li><strong>Whole grain or whole-stem hay in manure</strong> — undigested fiber passing through indicates inadequate chewing.</li>
            <li><strong>Foul breath (halitosis)</strong> — often indicates periodontal disease, infected tooth, or food-packing pocket.</li>
            <li><strong>Nasal discharge</strong>, particularly unilateral (one-sided) discharge — can indicate a tooth-root abscess of an upper cheek tooth (the roots of the upper cheek teeth lie in or near the maxillary sinuses).</li>
            <li><strong>Facial swelling</strong> or asymmetry, particularly along the jawline.</li>
            <li><strong>Bit resistance</strong> — head tossing, mouth opening, root of the tongue tension, refusal to accept the bit. Wolf teeth and cheek-tooth points are classic bit-related complaints.</li>
            <li><strong>One-sided chewing</strong> — favoring one side of the mouth.</li>
            <li><strong>Excessive salivation</strong>, drooling.</li>
            <li><strong>Bruxism</strong> — grinding the teeth — can indicate dental pain (and several other conditions including ulcers).</li>
            <li><strong>Reluctance to be bridled</strong> or to accept facial handling — particularly with EOTRH in older horses.</li>
            <li><strong>Difficulty biting into hard treats</strong> — apples, carrots — in older horses, particularly with incisor disease.</li>
          </ul>

          <p>The challenge: most of these signs can have multiple causes (gastric ulcers, lameness, saddle fit, behavior, primary disease). Dental examination is part of the workup for any of them.</p>

          <h2 id="wolf">Wolf Teeth</h2>
          <p>Wolf teeth are the vestigial first premolars (P1). They appear in approximately 70 percent of horses of both sexes, most commonly on the upper jaw immediately in front of the second premolar. Lower wolf teeth occur in a small percentage of horses. Wolf teeth erupt between 6 and 18 months of age.</p>

          <p>Wolf teeth are usually small (5–10 mm crown, often with a short root) but vary substantially in size and shape. They have no functional role in chewing. The clinical issue is their location: wolf teeth sit precisely where the snaffle bit naturally rests against the bars of the mouth, which can produce bit interference, soreness, and behavioral resistance during bit work.</p>

          <p><strong>Standard practice</strong> in the US is to extract wolf teeth before the horse begins bit work — typically as part of the routine dental visit at age 1.5–2.5 years, when the wolf teeth are present and the horse is being prepared for starting under saddle. Extraction is performed under sedation, with local anesthetic infiltration around the tooth. The procedure is brief (5–15 minutes), low-risk in competent hands, and produces minimal discomfort. The empty socket typically heals within 7–14 days.</p>

          <p>Not every horse needs wolf-tooth extraction — a horse that goes well in a bit with wolf teeth present and shows no behavioral resistance can be left alone. The decision rests with the veterinarian, the trainer, and the horse&apos;s observed response to bit work.</p>

          <p><strong>Blind wolf teeth</strong> are wolf teeth that have not erupted through the gum line. They can produce significant bit-area soreness and are sometimes missed on superficial examination. Diagnosis requires careful palpation and (when in doubt) dental radiographs. Extraction is a more involved procedure than for erupted wolf teeth.</p>

          <h2 id="eotrh">EOTRH — Equine Odontoclastic Tooth Resorption and Hypercementosis</h2>
          <p>EOTRH is a progressive painful dental disease affecting incisors (and occasionally canines) of older horses. Most cases are diagnosed in horses over 15 years of age; the disease is more common in Icelandic horses and other Northern European breeds but occurs in all breeds. The pathophysiology combines two simultaneous processes: <strong>resorption</strong>, in which odontoclasts (the equivalent of bone-resorbing osteoclasts in dental tissue) progressively destroy the root structure of the tooth, and <strong>hypercementosis</strong>, abnormal production of cementum that creates bulbous swellings at the base of the affected teeth and along the gum line.</p>

          <p>The disease is progressive, painful, and ultimately requires extraction of the affected teeth. Signs to recognize:</p>
          <ul>
            <li>Bulbous swellings or recession at the gum line of the upper or lower incisors.</li>
            <li>Color changes — gingival redness, dark discoloration of cementum, or visible tooth resorption.</li>
            <li>Difficulty biting into apples, carrots, or other hard treats.</li>
            <li>Dropping food while attempting to bite.</li>
            <li>Reluctance to be bridled or to accept face handling.</li>
            <li>Dribbling water.</li>
            <li>Bad breath localized to the front of the mouth.</li>
            <li>Behavior changes — increased reactivity around the head, head tossing, weight loss in advanced disease.</li>
          </ul>

          <p>Diagnosis combines clinical examination with intraoral radiographs — the radiographs are essential because resorption progresses from the root upward and can be radiographically advanced while the visible crown still looks reasonably normal. Treatment in early disease is supportive (pain management, soft feed); in established disease, extraction of affected incisors is curative for the pain and dramatically improves quality of life. Horses tolerate incisor loss remarkably well — even horses with all incisors extracted can graze and eat normal hay, using lips and tongue to gather feed and the intact cheek teeth to grind it.</p>

          <p>EOTRH was first formally described by Klugh (2004) and Pearce (2005); current clinical references include Pearce CJ (<em>Equine Veterinary Education</em>, multiple) and the American Veterinary Dental College&apos;s position papers on resorptive dental disease.</p>

          <h2 id="other">Other Common Dental Conditions</h2>

          <h3>Hooks and ramps</h3>
          <p>Localized overgrowths at the front (rostral) edge of the upper P2 or the back (caudal) edge of the lower M3, caused by anisognathism. Untreated, hooks can produce significant pain, restrict jaw movement, and impede bit work. Reduction at routine floating prevents progression.</p>

          <h3>Wave mouth</h3>
          <p>An uneven occlusal plane across the cheek teeth, with peaks and valleys when viewed from the side. Develops over years from uneven wear, often related to malocclusions. Severe wave mouth in older horses is difficult to correct fully and is managed conservatively.</p>

          <h3>Periodontal disease</h3>
          <p>Inflammation and infection of the supporting tissues of the teeth. The first signs are food packing between teeth (diastema), gingival pocketing, and gum recession. Progressive periodontal disease can lead to tooth loosening and loss. Treatment includes cleaning the periodontal pockets, packing with antibiotic-impregnated material in some cases, and addressing the underlying malocclusion.</p>

          <h3>Fractured teeth</h3>
          <p>Cheek-tooth fractures can occur from trauma, dental disease, or occlusal forces. A fractured tooth with exposed pulp is painful and prone to infection; extraction is often required. Standing cheek-tooth extraction (with sedation and local anesthesia) is now the standard approach for most extractions, replacing the older general-anesthesia surgical approach.</p>

          <h3>Tooth-root abscess</h3>
          <p>Infection of the root of a cheek tooth can spread to the surrounding bone and (in upper cheek teeth) into the maxillary sinuses, producing sinusitis with unilateral nasal discharge. Diagnosis requires radiographs or CT. Treatment is typically extraction of the affected tooth, often combined with sinus lavage.</p>

          <h3>Cap (deciduous-tooth) retention</h3>
          <p>The deciduous premolars (&ldquo;caps&rdquo;) should shed as the permanent premolars erupt beneath them. Retained caps can cause pain, malocclusion, and bit resistance in young horses. Removal at routine dental examination is straightforward.</p>

          <h2 id="cost">Cost &amp; Choosing a Practitioner</h2>
          <p>Approximate US costs for routine equine dentistry (regional variation; includes farm call):</p>
          <ul>
            <li><strong>Sedated annual float, no complications:</strong> $150–300.</li>
            <li><strong>Wolf-tooth extraction (added to a routine visit):</strong> $50–150 total.</li>
            <li><strong>Standing cheek-tooth extraction:</strong> $400–1,500 depending on complexity.</li>
            <li><strong>EOTRH incisor extraction (multiple teeth):</strong> $800–2,500+ depending on number of teeth and complexity.</li>
            <li><strong>Dental radiographs (intraoral):</strong> $50–200 depending on number of views.</li>
            <li><strong>Sinus surgery (advanced sinusitis from tooth root):</strong> $1,500–5,000+.</li>
          </ul>

          <p><strong>Choosing a practitioner:</strong> equine dentistry is now a specialty. Look for a veterinarian who performs dentistry as a regular part of practice, ideally with continuing-education hours in equine dentistry. The American Veterinary Dental College (AVDC) certifies board-certified veterinary dentists; the equine specialty within AVDC is small but growing. The International Association of Equine Dentistry (IAED) certifies non-veterinary equine dental practitioners, who in some jurisdictions can work alongside or under the supervision of licensed veterinarians. State veterinary practice acts vary on what non-veterinary dental practitioners can legally do — sedation and extractions everywhere require a licensed veterinarian.</p>

          <p>Questions worth asking a prospective dental practitioner: How long is a typical visit? Do you use sedation routinely? Do you use a full-mouth speculum? Do you take radiographs when indicated? What is your protocol for finding and addressing periodontal disease? Are you a licensed veterinarian, or are you working under veterinary supervision? Practitioners whose answers don&apos;t include sedation, speculum, examination, and radiograph capability are working at a lower standard than the AVDC and AAEP recommend.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>American Association of Equine Practitioners. &ldquo;Dental Care&rdquo; — Owner Resource and Practitioner Guidelines. aaep.org.</li>
            <li>American Veterinary Dental College. Position statements and practice standards for equine dentistry. avdc.org.</li>
            <li>Easley J, Dixon PM, Schumacher J (eds). <em>Equine Dentistry</em>, 3rd edition. Saunders Elsevier, 2010 — the standard textbook reference for equine dental medicine.</li>
            <li>Dixon PM, Dacre I. &ldquo;A Review of Equine Dental Disorders.&rdquo; <em>Veterinary Journal</em>, 2005; 169(2):165–187.</li>
            <li>Pearce CJ. &ldquo;Recent Developments in Equine Dentistry.&rdquo; <em>New Zealand Veterinary Journal</em>, 2020.</li>
            <li>Pearce CJ. &ldquo;Equine Odontoclastic Tooth Resorption and Hypercementosis (EOTRH).&rdquo; <em>Equine Veterinary Education</em>, multiple papers; foundational descriptions of EOTRH clinical management.</li>
            <li>Klugh DO. &ldquo;A Review of Equine Periodontal Disease.&rdquo; <em>Proceedings of the American Association of Equine Practitioners</em>, 2004.</li>
            <li>Earley E, Galloway SS, Galloway RM. &ldquo;Comprehensive Oral Exam and Routine Care in the Horse.&rdquo; <em>Veterinary Clinics of North America: Equine Practice</em>, 2013.</li>
            <li>Caldwell L. &ldquo;Equine Dentistry: A Practical Guide for the Modern Equine Practitioner.&rdquo; Wiley-Blackwell, 2014.</li>
            <li>Carmalt JL. &ldquo;Evidence-Based Equine Dentistry: Preventive Medicine.&rdquo; <em>Veterinary Clinics of North America: Equine Practice</em>, 2007; 23(2):519–524.</li>
            <li>Lowder MQ, Mueller PO. &ldquo;Dental Disease in Geriatric Horses.&rdquo; <em>Veterinary Clinics of North America: Equine Practice</em>, 1998; 14(2):365–380.</li>
            <li>International Association of Equine Dentistry (IAED). Practitioner certification standards. iaed.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}

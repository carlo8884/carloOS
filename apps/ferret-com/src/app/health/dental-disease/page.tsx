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
  title: 'Ferret Dental Disease — Brushing, Scaling, Periodontitis | Ferret.com',
  description:
    'Ferrets accumulate tartar fast and develop gingivitis by age 2-3. Daily brushing, annual scaling under anesthesia, stages of periodontal disease, and why ferret mouths are uniquely at risk.',
  path: '/health/dental-disease',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Ferret Dental Disease',
  description:
    'Dental and periodontal disease in domestic ferrets — accelerated tartar accumulation, brushing protocol, anesthetized scaling, stages of disease, and clinical impact.',
  url: 'https://ferret.com/health/dental-disease',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-05-28T00:00:00Z',
  modifiedAt: '2026-05-28T00:00:00Z',
})

const medSchema = buildMedicalWebPageSchema({
  name: 'Ferret Dental Disease',
  description:
    'Clinical reference on dental and periodontal disease in domestic ferrets, including prevention, staging, and treatment.',
  url: 'https://ferret.com/health/dental-disease',
  authorName: 'Ferret.com Editorial',
  lastReviewed: '2026-05-28',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://ferret.com/' },
    { name: 'Ferret Health', url: 'https://ferret.com/health/dental-disease' },
    { name: 'Dental Disease', url: 'https://ferret.com/health/dental-disease' },
  ],
})

const FAQS = [
  {
    question: 'How early should I start brushing my ferret\'s teeth?',
    answer:
      "From kithood, if you can. A 10-week-old kit who learns to tolerate a fingertip brush will accept full brushing for life. Starting on a 4-year-old ferret who has never had a brush in his mouth is harder but not impossible — work up in 30-second sessions over weeks, paired with a high-value protein treat.",
  },
  {
    question: 'What toothpaste is safe for ferrets?',
    answer:
      "Enzymatic pet toothpaste — chicken, malt, or seafood flavors — formulated for cats or dogs. Never use human toothpaste: fluoride is potentially toxic in the doses a ferret would swallow, and xylitol (in some human toothpastes) is acutely dangerous to most small mammals. CET and Virbac are the most widely-stocked enzymatic pet pastes; both are accepted by most ferrets.",
  },
  {
    question: 'Do ferrets really need anesthetized dental cleanings?',
    answer:
      "Yes, if scaling and probing below the gumline is needed. The American Veterinary Dental College position is that meaningful periodontal evaluation and cleaning requires general anesthesia in any species — anesthesia-free \"cleanings\" address visible tartar but not the subgingival disease that actually determines tooth loss. Ferret anesthesia is higher-risk than canine or feline; choose an exotic-pet practice with isoflurane or sevoflurane and active intraoperative monitoring.",
  },
  {
    question: 'My ferret refuses brushing — what are my options?',
    answer:
      "Brushing is the gold standard but not the only option. Dental wipes (gauze on a fingertip with enzymatic paste) are easier for many ferrets. Some VOHC-accepted oral rinses and water additives have evidence in dogs and cats; the data in ferrets is thinner but they are a reasonable supplement. Raw meaty bones (chicken necks, quail wings) provide mechanical abrasion but carry the standard raw-feeding pathogen-handling considerations.",
  },
  {
    question: 'What does a clinically significant dental problem look like?',
    answer:
      "Bad breath out of proportion to diet (more than the usual ferret musk), yellow or brown tartar especially on the upper carnassials, red gum margins, drooling, dropping food, pawing at the mouth, weight loss, or visible facial swelling. Any of these are reasons to schedule an exotic-pet vet visit; the last two indicate likely tooth root abscess and warrant same-week attention.",
  },
  {
    question: 'How often should the anesthetized cleaning happen?',
    answer:
      "Roughly annually from about age 2-3 onward in most ferrets, more frequently in animals with established periodontal disease, less frequently if home brushing has been excellent from kithood. Your exotic-pet vet will set cadence based on the gingival picture at the annual exam.",
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(articleSchema, medSchema, breadcrumbSchema, faqSchema)

export default function FerretDentalDiseasePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        contentType="health"
        hero={{
          title: 'Ferret Dental Disease',
          subtitle:
            'Dental disease is the most under-treated condition in pet ferrets. Tartar builds fast on kibble diets, periodontal disease is often clinically meaningful by age 2-3, and the consequences compound silently for years. The leverage of early home dental care is large.',
          category: 'Ferret Health',
          authorName: 'Ferret.com Editorial',
          authorAvatar: '🦦',
          publishedAt: 'May 2026',
          readTime: '12 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Ferret Health', href: '/health/dental-disease' },
          { name: 'Dental Disease', href: '/health/dental-disease' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'Why Ferret Teeth?', href: '#why-ferrets' },
                { label: 'Quick Reference', href: '#quickref' },
                { label: 'Stages of Disease', href: '#stages' },
                { label: 'Home Brushing Protocol', href: '#brushing' },
                { label: 'Anesthetized Cleanings', href: '#scaling' },
                { label: 'Tooth Loss & Extraction', href: '#extraction' },
                { label: 'Finding an Exotic-Pet Vet', href: '#vet' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Diet Basics', href: '/care/diet-basics' },
                { label: 'First-Year Schedule', href: '/first-year-schedule' },
                { label: 'Aging Ferret Care', href: '/health/aging-ferret-care' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Health Notes"
              subtitle="Evidence-based ferret health, monthly."
              source="health-dental-disease"
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
            Open a healthy 2-year-old ferret&apos;s mouth and you will almost
            always find some yellow-brown crust at the gumline of the upper
            carnassials. Open a 4-year-old&apos;s and the picture is usually
            worse — visible tartar on multiple teeth, often reddened gum
            margins, sometimes mild recession. Dental disease in ferrets is
            not unusual; it is the default outcome of feeding kibble to a
            high-protein carnivore for years without an active dental routine.
          </DropCap>

          <h2 id="tldr">TL;DR</h2>
          <p>
            Ferrets accumulate dental tartar rapidly on kibble diets, and
            clinically meaningful gingivitis is commonly visible by age 2-3.
            The standard prevention pattern across the exotic-pet veterinary
            literature is: daily brushing with an enzymatic pet toothpaste
            from kithood, an annual oral exam at the exotic-pet vet, and
            anesthetized scaling roughly yearly once tartar is established.
            Ignored periodontal disease progresses through gingivitis to
            periodontitis to tooth loss, and root abscesses can become
            systemic infections in older ferrets.
          </p>

          <h2 id="why-ferrets">Why Ferrets in Particular</h2>
          <p>
            Ferret mouths combine three risk factors that together produce
            the high dental-disease load described across the{' '}
            <em>Journal of Exotic Pet Medicine</em>, the <em>Veterinary
            Clinics of North America: Exotic Animal Practice</em>, and the
            standard reference text (Quesenberry &amp; Carpenter,{' '}
            <em>Ferrets, Rabbits, and Rodents: Clinical Medicine and
            Surgery</em>, Saunders/Elsevier):
          </p>
          <ul>
            <li>
              <strong>High-protein kibble residue.</strong> The dry-matter
              residue from a high-protein diet sits on the tooth surface and
              supplies abundant substrate for plaque bacteria. Whole-prey or
              raw-feeding ferrets have measurably less tartar, although raw
              feeding has its own trade-offs (see{' '}
              <a href="/care/diet-basics">Diet Basics</a>).
            </li>
            <li>
              <strong>Small mouth, crowded tooth arrangement.</strong> The
              ferret oral cavity is small and the carnassial teeth especially
              are tightly placed against the gum line. Plaque and tartar
              accumulate in interproximal spaces that mechanical chewing does
              not reach.
            </li>
            <li>
              <strong>Long lifespan exposure.</strong> Ferrets routinely live
              5-8 years. That is plenty of time for cumulative plaque, calculus,
              and subgingival inflammation to progress to clinical periodontitis
              if no intervention happens.
            </li>
          </ul>
          <p>
            Compared to cats (slower tartar accumulation in many cases) and
            dogs (more variation by breed), ferrets as a class trend toward
            faster onset of visible disease and earlier need for clinical
            intervention.
          </p>

          <h2 id="quickref">Quick Reference</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-surface border-b border-brand-border">
                  <th className="text-left p-3 font-semibold">Age / Stage</th>
                  <th className="text-left p-3 font-semibold">Expected dental picture</th>
                  <th className="text-left p-3 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brand-border">
                  <td className="p-3 font-medium">Kit, 8-16 weeks</td>
                  <td className="p-3">Deciduous-to-permanent transition; clean teeth normal</td>
                  <td className="p-3">Begin tolerance training; fingertip + flavored paste</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="p-3 font-medium">Young adult, 4-18 mo</td>
                  <td className="p-3">Permanent dentition; minor plaque</td>
                  <td className="p-3">Daily brushing established; baseline oral exam at annual vet visit</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="p-3 font-medium">Adult, 2-3 yr</td>
                  <td className="p-3">Visible tartar on upper carnassials in most cases</td>
                  <td className="p-3">Continue brushing; first anesthetized scaling typically here</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="p-3 font-medium">Adult, 3-5 yr</td>
                  <td className="p-3">Gingivitis common without intervention; mild recession possible</td>
                  <td className="p-3">Annual professional cleaning; address any abscess promptly</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Senior, 5+ yr</td>
                  <td className="p-3">Periodontitis, possible mobility, possible tooth loss</td>
                  <td className="p-3">More frequent monitoring; weigh anesthesia risk vs disease burden case-by-case</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="stages">Stages of Periodontal Disease</h2>
          <p>
            The staging framework used in companion-animal dentistry applies
            cleanly to ferrets. The American Veterinary Dental College
            framework distinguishes four stages, each defined by the depth
            of attachment loss and the radiographic picture below the
            gumline:
          </p>

          <h3>Stage 1 — Gingivitis</h3>
          <p>
            Inflamed gum margins, plaque present, but no attachment loss.
            Reversible with mechanical removal of plaque (brushing,
            professional scaling) and home maintenance. This is where most
            young adult ferrets sit in the absence of a dental routine.
          </p>

          <h3>Stage 2 — Early Periodontitis</h3>
          <p>
            Up to 25% attachment loss. The gum has begun to detach from the
            tooth, pocket formation starts, and bacterial colonization
            extends subgingivally. Anesthetized scaling and probing become
            necessary because the affected tissue is below the gumline and
            inaccessible to brushing alone.
          </p>

          <h3>Stage 3 — Moderate Periodontitis</h3>
          <p>
            25-50% attachment loss. Pockets are deeper, root surface is
            exposed in places, mobility of affected teeth may begin. Treatment
            includes thorough scaling, root planing, and sometimes targeted
            extractions of severely compromised teeth.
          </p>

          <h3>Stage 4 — Advanced Periodontitis</h3>
          <p>
            Greater than 50% attachment loss. Teeth are mobile, root
            abscesses are common, the bony socket may be compromised on
            radiograph. Most affected teeth are extracted at this stage;
            antibiotics are added if there is evidence of active suppurative
            infection. Tooth loss at this point is the expected outcome and
            the procedure is largely about preventing further infection
            spread.
          </p>

          <CalloutBox variant="warning" title="When a tooth root abscess goes systemic">
            <p>
              In senior ferrets, an untreated root abscess can seed bacteria
              into the bloodstream and cause endocarditis, septic arthritis,
              or generalized septicaemia. A ferret with a visible facial
              swelling, sudden inappetence, or lethargy in the context of
              known dental disease is a same-day exotic-pet vet visit, not
              a wait-and-see.
            </p>
          </CalloutBox>

          <h2 id="brushing">Home Brushing Protocol</h2>
          <p>
            Daily is the standard. Every-other-day is acceptable and still
            materially better than nothing. Three-times-weekly is the
            minimum that produces a measurable difference in plaque
            accumulation in the companion-animal dental literature. The
            evidence base is strongest in dogs and cats; the protocol is
            extrapolated to ferrets based on shared physiology and confirmed
            in clinical practice across the exotic-pet field.
          </p>

          <h3>Starting from kithood</h3>
          <ol>
            <li>
              <strong>Week 1-2:</strong> dab a little chicken-flavored
              enzymatic pet paste on your fingertip; let the kit lick it as
              a treat. No brush yet. Goal is to establish positive flavor
              association.
            </li>
            <li>
              <strong>Week 3-4:</strong> dab paste on a finger and rub gently
              across the outside of the carnassials. A few seconds is
              plenty. Reward with a high-protein treat.
            </li>
            <li>
              <strong>Week 5+:</strong> introduce a soft small brush (a cat
              toothbrush, an infant toothbrush, or a fingertip rubber brush).
              Brush the outside surfaces only — the cheek-side surface
              accumulates the most tartar and is the most accessible. The
              inside surfaces of the teeth are largely self-cleaned by the
              tongue.
            </li>
            <li>
              <strong>Steady state:</strong> 30-60 seconds, daily, outside
              surfaces only, enzymatic pet paste only. End with a treat
              every time. Many keepers integrate brushing into a fixed
              evening routine the ferret learns to anticipate.
            </li>
          </ol>

          <h3>Starting on an adult ferret</h3>
          <p>
            Possible but slower. The same progression works, just stretched
            over 6-10 weeks instead of 4. The harder problem is that an
            adult ferret with no dental history is more likely to have
            uncomfortable established tartar; brushing over sensitive,
            inflamed gum tissue is unpleasant and reinforces resistance.
            Often it is more effective to schedule an anesthetized cleaning
            first, then start the brushing routine on a clean mouth.
          </p>

          <CalloutBox variant="tip" title="Toothpaste-only days are still useful">
            <p>
              On the days a ferret will not tolerate a brush, smearing a
              small amount of enzymatic paste on the gumline with your
              fingertip still delivers the enzymes that disrupt plaque
              biofilm. Not as effective as mechanical brushing, but
              meaningfully better than nothing.
            </p>
          </CalloutBox>

          <h2 id="scaling">Anesthetized Professional Cleanings</h2>
          <p>
            Brushing slows plaque accumulation. It does not remove established
            calculus, and it cannot reach below the gumline. Both are jobs
            for an anesthetized professional cleaning. The standard procedure
            in an exotic-pet practice:
          </p>
          <ul>
            <li>
              <strong>Pre-anesthetic workup.</strong> CBC, chemistry, and
              physical exam, sometimes a cardiac auscultation or echocardiogram
              in senior ferrets to evaluate anesthesia risk. A pre-operative
              fast of only 3-4 hours — long fasting is contraindicated in
              ferrets because of insulinoma risk.
            </li>
            <li>
              <strong>General anesthesia.</strong> Typically isoflurane or
              sevoflurane via mask induction then intubation, with active
              monitoring (ECG, pulse oximetry, capnography, temperature).
              Ferret anesthesia is higher-risk than canine or feline
              anesthesia and requires a practice comfortable with the species.
            </li>
            <li>
              <strong>Full-mouth oral exam and charting</strong> with a
              dental probe. Pocket depths, mobility, gingival recession, and
              any visible lesions are recorded on a dental chart, exactly
              as in dogs and cats.
            </li>
            <li>
              <strong>Ultrasonic and hand scaling</strong> of all teeth,
              above and below the gumline, followed by polishing to smooth
              the cleaned surface (rough enamel re-accumulates plaque
              quickly).
            </li>
            <li>
              <strong>Targeted extractions</strong> of any teeth with stage
              3-4 disease, mobility, or radiographic evidence of root
              abscess. Dental radiographs where available; bedside dental
              radiographs in exotic-mammal practice are increasingly common
              but not universal.
            </li>
            <li>
              <strong>Recovery and pain control.</strong> Standard exotic-mammal
              analgesia (meloxicam, buprenorphine — agent and dose at vet
              discretion). Most ferrets are eating soft food the same evening.
            </li>
          </ul>

          <CalloutBox variant="evidence" title="Anesthesia-free cleanings — what the literature says">
            <p>
              The American Veterinary Dental College position statement on
              anesthesia-free dental cleanings in companion animals is
              clear: meaningful periodontal evaluation and subgingival
              cleaning cannot be performed without general anesthesia.
              Anesthesia-free services address only visible tartar and may
              mask underlying disease that progresses unaddressed. This
              applies as much to ferrets as to dogs and cats.
            </p>
          </CalloutBox>

          <h2 id="extraction">Tooth Loss and Extraction</h2>
          <p>
            Ferrets do well with missing teeth. The species can eat both
            kibble and soft food comfortably without a full dentition, and
            quality of life after multiple extractions is generally
            excellent. The clinical impact of leaving a diseased tooth in
            place is, in most cases, much worse than the clinical impact of
            extracting it.
          </p>
          <p>
            Where extraction becomes a harder decision: the canines (used
            for grasping and carrying food, and structurally important to
            the jaw) and the upper carnassials. Loss of these teeth in a
            senior ferret occasionally drives a diet adjustment toward more
            soft food, but rarely a major change in quality of life.
            Post-extraction healing is usually straightforward; a short
            course of pain control and a few days of soft diet are typical.
          </p>

          <h2 id="vet">Finding an Exotic-Pet Vet for Dental Work</h2>
          <p>
            Ferret dental work is well within the scope of general veterinary
            dentistry, but ferret anesthesia and the specifics of ferret
            oral anatomy are not skills every clinic carries. Two starting
            points for finding the right practice:
          </p>
          <ul>
            <li>
              <strong>Association of Exotic Mammal Veterinarians (AEMV)</strong>{' '}
              — the field society for exotic-mammal practitioners; maintains
              a member directory.
            </li>
            <li>
              <strong>American Veterinary Dental College (AVDC)</strong>{' '}
              diplomate listings — board-certified veterinary dentists.
              Most general AVDC diplomates will work on ferrets, although
              an exotic-mammal-specific clinic combined with an AVDC
              consult is sometimes the best of both worlds.
            </li>
          </ul>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <h2 id="sources">Sources</h2>
          <ul>
            <li>
              Quesenberry KE, Carpenter JW (eds.). <em>Ferrets, Rabbits, and
              Rodents: Clinical Medicine and Surgery.</em> 4th ed.
              Saunders/Elsevier. The ferret gastrointestinal and dental
              chapters are the standard reference.
            </li>
            <li>
              <em>Journal of Exotic Pet Medicine</em>, clinical articles on
              ferret dentistry, anesthesia, and oral disease.
            </li>
            <li>
              <em>Veterinary Clinics of North America: Exotic Animal
              Practice</em>, multiple issues covering ferret clinical
              medicine including dental disease and oral surgery.
            </li>
            <li>
              American Veterinary Dental College (AVDC) — position statement
              on anesthesia-free dentistry; companion-animal periodontal
              staging framework.
            </li>
            <li>
              Association of Exotic Mammal Veterinarians (AEMV) — practitioner
              directory and continuing-education content on ferret clinical
              medicine.
            </li>
            <li>
              American Ferret Association (AFA) — owner-facing dental care
              guidance.
            </li>
          </ul>
          <p className="text-sm text-brand-text-light">
            This page is general clinical information about ferret dental
            disease. It is not individualized veterinary advice. Anesthesia,
            extractions, and pharmaceutical analgesia are vet decisions and
            require evaluation by a clinician familiar with ferrets — ideally
            an AEMV member or an ABVP diplomate in Exotic Companion Mammal
            practice.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}

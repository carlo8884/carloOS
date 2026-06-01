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
  title: 'Ferret Vet Visit Prep — What to Expect, Bloodwork, Cost | Ferret.com',
  description:
    'How to prep for a ferret annual or sick-visit exam: finding an exotic-pet vet, carrier setup, what bloodwork to expect, typical costs, fasting rules, and what to bring with you.',
  path: '/health/vet-visit-prep',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Ferret Vet Visit Prep',
  description:
    'Preparation guide for ferret annual checkups and sick visits — exotic-pet vet selection, what to bring, expected bloodwork and imaging, cost ranges, and pre-visit checklist.',
  url: 'https://ferret.com/health/vet-visit-prep',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-05-29T00:00:00Z',
  modifiedAt: '2026-05-29T00:00:00Z',
})

const medSchema = buildMedicalWebPageSchema({
  name: 'Ferret Vet Visit Prep',
  description:
    'Practical preparation guide for ferret veterinary visits, including pre-visit checklist, expected diagnostics, and cost expectations.',
  url: 'https://ferret.com/health/vet-visit-prep',
  authorName: 'Ferret.com Editorial',
  lastReviewed: '2026-05-29',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://ferret.com/' },
    { name: 'Ferret Health', url: 'https://ferret.com/health/vet-visit-prep' },
    { name: 'Vet Visit Prep', url: 'https://ferret.com/health/vet-visit-prep' },
  ],
})

const FAQS = [
  {
    question: 'Do I need a special exotic-pet vet for a ferret?',
    answer:
      "Yes, in practical terms. Ferret medicine is structurally different from cat or dog medicine — different disease profile (insulinoma, adrenal disease, lymphoma dominate), different anesthetic considerations, different drug doses, different vaccine reaction rates. A general-practice clinic that sees one ferret per quarter is not the right setting for an aging ferret with multiple comorbidities. The Association of Exotic Mammal Veterinarians (AEMV) directory and the American Board of Veterinary Practitioners (ABVP) Exotic Companion Mammal diplomate list are the standard ways to find ferret-experienced clinicians.",
  },
  {
    question: 'How much does a ferret vet visit cost?',
    answer:
      "Costs vary substantially by region and clinic but ballpark figures for US exotic-pet practice as of 2026: routine annual exam $75-150, full senior bloodwork (CBC + chemistry + fasting glucose) $150-300, abdominal ultrasound $250-500, dental cleaning under anesthesia $400-800, ferret surgery (insulinoma or adrenalectomy) $1500-3500. Emergency exotic-vet visits at non-routine hours start around $200-400 before any diagnostics. Pet insurance for exotics exists but with significant coverage gaps; check pre-existing condition rules carefully.",
  },
  {
    question: 'Should I fast my ferret before the visit?',
    answer:
      "Usually no, with two exceptions. Healthy ferrets do not need to fast for routine exams or vaccines. If fasting bloodwork (specifically for insulinoma screening) is planned, follow the vet's instructions — typically a 3-4 hour fast, never longer because of hypoglycemia risk. If general anesthesia is planned (dental, surgery, imaging requiring sedation), the vet will give a specific short fasting window, typically 4-6 hours in ferrets — much shorter than the overnight fast used in dogs and cats.",
  },
  {
    question: 'What should I bring with me to the vet?',
    answer:
      "A carrier the ferret is comfortable in, a familiar sleep sack or blanket from home (calming), a water bottle and a small high-value food (especially for insulinoma-suspect ferrets), written records from any prior vet visits, a current weight if you have a kitchen scale, and a written list of any current symptoms with timing. A short phone video of any unusual behavior you saw at home is genuinely useful — many ferret symptoms are intermittent and absent at the exam.",
  },
  {
    question: 'How often does a healthy adult ferret need to see the vet?',
    answer:
      "Annually from age 1-3, every 6 months from age 3-5, every 3-6 months from age 5+. This reflects the rising disease incidence curve through middle age and into senior years. The pattern is described consistently across exotic-pet veterinary references including Quesenberry & Carpenter and the AAHA exotic-mammal preventive-care guidance.",
  },
  {
    question: 'My ferret hates the carrier — how do I make travel less stressful?',
    answer:
      "Leave the carrier out at home as a normal play and sleep space for weeks before the visit, not just on visit day. Familiar smells (a worn t-shirt, a slept-in sleep sack) inside the carrier reduce stress markedly. A towel over the carrier in the car blocks visual stimuli; keep the car at a moderate temperature (ferrets do not tolerate heat well). Avoid the carrier becoming a vet-visit-only association — short positive car trips between vet visits help normalize it.",
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(articleSchema, medSchema, breadcrumbSchema, faqSchema)

export default function FerretVetVisitPrepPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        contentType="health"
        hero={{
          title: 'Ferret Vet Visit Prep',
          subtitle:
            'A well-prepared ferret vet visit produces a better diagnostic picture, shorter appointments, and lower cost than the alternative. Most of the difference is in what you do at home before you walk through the door — finding the right clinic, choosing the right time to go, bringing the right information, and matching the visit to what is actually wrong.',
          category: 'Ferret Health',
          authorName: 'Ferret.com Editorial',
          authorAvatar: '🦦',
          publishedAt: 'May 2026',
          readTime: '12 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Ferret Health', href: '/health' },
          { name: 'Vet Visit Prep', href: '/health/vet-visit-prep' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'TL;DR', href: '#tldr' },
                { label: 'Finding the Right Vet', href: '#vet' },
                { label: 'Annual vs Sick Visit', href: '#visit-type' },
                { label: 'What to Bring', href: '#bring' },
                { label: 'Carrier and Travel', href: '#carrier' },
                { label: 'Expected Diagnostics', href: '#diagnostics' },
                { label: 'Typical Cost Ranges', href: '#cost' },
                { label: 'Visit Cadence by Age', href: '#cadence' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Vaccinations', href: '/health/vaccinations' },
                { label: 'Aging Ferret Care', href: '/health/aging-ferret-care' },
                { label: 'First-Year Schedule', href: '/first-year-schedule' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Health Notes"
              subtitle="Evidence-based ferret health, monthly."
              source="health-vet-visit-prep"
            />
          </>
        }
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-05-29"
            updatedAt="2026-05-29"
            reviewedBy="Editorial team"
          />

          <DropCap>
            The single highest-leverage decision in ferret veterinary care
            is who you take the ferret to. A vet who sees ferrets routinely
            will produce a different diagnostic picture, a different
            anesthetic protocol, and a different treatment plan than a vet
            whose ferret experience ends at vaccinations. The rest of vet
            visit prep — what to bring, how to travel, what to expect — is
            useful but secondary to that first choice.
          </DropCap>

          <h2 id="tldr">TL;DR</h2>
          <p>
            Use an exotic-pet vet, ideally an AEMV member or an ABVP
            Exotic Companion Mammal diplomate. Bring a familiar carrier,
            written notes on what you have observed, a current home
            weight, and any prior records. Healthy ferrets do not need
            to fast for routine visits; fast 3-4 hours only for specific
            insulinoma bloodwork or per pre-anesthesia instructions.
            Expect cost ranges of $75-150 for a routine exam, $150-300
            for full bloodwork, $400-800 for dental work under
            anesthesia, $1500+ for major ferret surgery. Annual visits
            through age 3, every 6 months age 3-5, every 3-6 months
            beyond that.
          </p>

          <h2 id="vet">Finding the Right Vet</h2>
          <p>
            Ferret medicine is a small-mammal specialty within
            exotic-companion-animal practice. The conditions that
            dominate adult ferret care — insulinoma, adrenal disease,
            lymphoma, cardiomyopathy — are not part of standard
            small-animal training; they require either specific
            postgraduate experience or active continuing education in
            ferret medicine to recognize and manage well.
          </p>
          <h3>The credentials that matter</h3>
          <ul>
            <li>
              <strong>AEMV membership.</strong> The Association of Exotic
              Mammal Veterinarians maintains a searchable practitioner
              directory at <em>aemv.org</em>. Membership signals active
              professional engagement with exotic-mammal medicine and is
              the most accessible filter.
            </li>
            <li>
              <strong>ABVP diplomate in Exotic Companion Mammal
              practice.</strong> The American Board of Veterinary
              Practitioners certifies clinicians who have passed a
              specialty exam in this area. A small number of clinicians
              nationally; finding one within driving distance is a
              substantial upgrade for any complicated ferret case.
            </li>
            <li>
              <strong>Senior or specialty-hospital practice.</strong>
              Veterinary teaching hospitals and large exotic-pet
              referral practices typically have ferret-experienced
              clinicians and access to the full diagnostic armamentarium.
            </li>
          </ul>
          <h3>How to evaluate a candidate clinic</h3>
          <p>
            When making a first phone call to a new clinic, useful
            screening questions: how many ferrets does the clinic see
            per week or per month? Does the clinic have a designated
            exotic-mammal clinician or does ferret work get distributed
            across the staff? Does the clinic offer in-house abdominal
            ultrasound and access to ferret-experienced surgery? What is
            the after-hours referral path for ferret emergencies?
          </p>
          <p>
            A clinic that confidently answers all four is a strong
            candidate. A clinic that struggles with any of them is
            probably not the right primary-care home for a ferret you
            intend to keep into senior years.
          </p>

          <CalloutBox variant="tip" title="Find an exotic-animal-experienced vet">
            <p>
              Start with the AEMV directory at aemv.org or the ABVP
              certified specialist search. Veterinary teaching hospitals
              affiliated with the AVMA-accredited US veterinary schools
              are reliable backup options. Build the relationship before
              there is a crisis — a vet who has already seen your ferret
              at a healthy annual visit will produce a faster, better
              diagnostic picture in an emergency than a first-time
              clinician scrambling from a new presentation.
            </p>
          </CalloutBox>

          <h2 id="visit-type">Annual Visit vs Sick Visit</h2>
          <p>
            The two visit types have different goals and different
            preparation needs.
          </p>
          <h3>The annual wellness visit</h3>
          <p>
            The point of the annual visit is to (a) keep vaccines current
            and (b) catch the slow-onset conditions early. A standard
            annual ferret visit includes: weight, body condition score,
            full physical exam (auscultation, abdominal palpation,
            dental check, integumentary check), vaccines if due, and —
            from age 3 onward — bloodwork to screen for insulinoma and
            adrenal disease before clinical signs appear.
          </p>
          <h3>The sick visit</h3>
          <p>
            A sick visit has a narrower goal: figure out what is wrong.
            The most useful preparation is structured observation. For
            24-48 hours before the visit (or as long as you have without
            delaying urgent care), keep notes on:
          </p>
          <ul>
            <li>What you observed and when, including time of day.</li>
            <li>Appetite — what was offered, what was eaten.</li>
            <li>Water intake if observable.</li>
            <li>Urine and stool — frequency, consistency, color.</li>
            <li>Activity level and any new behavior.</li>
            <li>Any change in environment, diet, or routine that preceded the symptom.</li>
          </ul>
          <p>
            A short phone video of the symptom — particularly anything
            episodic like seizure activity, tremor, ataxia, or wheeze —
            is one of the most valuable single pieces of information you
            can bring. Many ferret symptoms are absent at the exam, and
            the video bridges the gap between the at-home picture and
            the clinical exam.
          </p>

          <h2 id="bring">What to Bring</h2>
          <ul>
            <li>
              <strong>The ferret in a familiar carrier</strong> with a
              sleep sack or worn t-shirt from home for scent comfort.
            </li>
            <li>
              <strong>A small bottle of water</strong> for the trip; the
              car ride and clinic waiting time are stressful and many
              ferrets refuse strange water sources.
            </li>
            <li>
              <strong>A small amount of high-value food</strong> — meat
              baby food in a small jar, a few pieces of cooked chicken,
              or a tube of meat-based recovery diet. Especially important
              for any insulinoma-suspect ferret who could become
              hypoglycemic during travel.
            </li>
            <li>
              <strong>Current weight from home</strong> if you have a
              kitchen scale. Clinic scales are accurate but a baseline
              from your home scale lets you track trends meaningfully.
            </li>
            <li>
              <strong>Written notes</strong> on the reason for the visit
              and any symptoms. Three lines is enough; a clear list beats
              an in-room recap of two weeks of observations.
            </li>
            <li>
              <strong>Prior records</strong> if you are seeing a new vet —
              vaccine certificates, prior bloodwork, surgery reports,
              current medications with doses.
            </li>
            <li>
              <strong>Any current medication</strong> the ferret is on,
              in original packaging so the vet can see formulation and
              dose.
            </li>
          </ul>

          <h2 id="carrier">Carrier and Travel</h2>
          <p>
            Most ferrets travel well if the carrier is familiar and the
            trip is short. The carrier setup that works best:
          </p>
          <ul>
            <li>
              <strong>A small hard-sided carrier</strong> with a secure
              latch. Soft-sided carriers work for short trips but ferrets
              can sometimes chew or wriggle out.
            </li>
            <li>
              <strong>A familiar sleep sack or worn shirt</strong> as
              lining — scent reduces stress meaningfully.
            </li>
            <li>
              <strong>A water bottle attached to the bars</strong> if the
              carrier allows; a small water dish for short trips is also
              fine. Spilled water in the carrier is annoying but rarely
              dangerous unless the ferret is medically fragile.
            </li>
            <li>
              <strong>A towel over the carrier in the car</strong> to
              block visual stimuli and stabilize temperature.
            </li>
          </ul>
          <p>
            Ferrets do not tolerate heat well. The carrier should never
            be left in a hot car, even briefly. The cabin temperature
            for transport should be on the cool side of comfortable for
            a human — roughly 65-72°F.
          </p>

          <h2 id="diagnostics">Expected Diagnostics</h2>
          <p>
            The specific workup depends on age, complaint, and clinical
            findings. The common modalities, in approximate ordering of
            ferret use frequency:
          </p>
          <ul>
            <li>
              <strong>CBC + serum chemistry + fasting glucose.</strong>
              The standard adult ferret bloodwork panel. Catches
              insulinoma, anemia, lymphocytosis suggestive of lymphoma,
              kidney function changes, and liver enzyme abnormalities.
            </li>
            <li>
              <strong>Adrenal hormone panel.</strong> Sent out to a
              specialized lab (typically the University of Tennessee
              endocrinology lab). Measures sex steroids and is the
              biochemical confirmation of adrenal disease in
              clinically-suspect ferrets.
            </li>
            <li>
              <strong>Abdominal ultrasound.</strong> Evaluates adrenal
              glands, pancreas, spleen, liver, kidneys, urinary bladder.
              Standard for any ferret with vague systemic signs or for
              senior-care screening.
            </li>
            <li>
              <strong>Thoracic radiographs or echocardiography.</strong>
              For suspected cardiac disease (murmurs heard on
              auscultation, exercise intolerance, coughing).
            </li>
            <li>
              <strong>Cytology and histopathology.</strong> For any
              palpable mass, abnormal lymph node, or abnormal organ
              found on imaging.
            </li>
            <li>
              <strong>Urinalysis</strong> in any ferret with urinary
              signs, weight loss, or polyuria/polydipsia.
            </li>
          </ul>

          <h2 id="cost">Typical Cost Ranges</h2>
          <p>
            US exotic-pet practice cost ranges as of 2026, with
            substantial regional variation:
          </p>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-surface border-b border-brand-border">
                  <th className="text-left p-3 font-semibold">Service</th>
                  <th className="text-left p-3 font-semibold">Approximate range</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brand-border">
                  <td className="p-3 font-medium">Routine wellness exam</td>
                  <td className="p-3">$75-150</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="p-3 font-medium">Vaccine (CDV or rabies)</td>
                  <td className="p-3">$25-50 each</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="p-3 font-medium">CBC + chemistry + glucose</td>
                  <td className="p-3">$150-300</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="p-3 font-medium">Adrenal hormone panel</td>
                  <td className="p-3">$200-350 (lab + draw)</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="p-3 font-medium">Abdominal ultrasound</td>
                  <td className="p-3">$250-500</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="p-3 font-medium">Dental cleaning under anesthesia</td>
                  <td className="p-3">$400-800</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="p-3 font-medium">Insulinoma or adrenal surgery</td>
                  <td className="p-3">$1500-3500</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Emergency / after-hours visit</td>
                  <td className="p-3">$200-400 before diagnostics</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Pet insurance for ferrets exists through several specialty
            exotic-pet carriers. Coverage gaps are meaningful: most
            policies exclude pre-existing conditions, and the
            insulinoma/adrenal/lymphoma cluster that dominates senior
            ferret cost is often the slowest-developing and easiest to
            be classified as pre-existing. Read the policy carefully and
            consider purchasing in the first year of ownership rather
            than later.
          </p>

          <h2 id="cadence">Visit Cadence by Age</h2>
          <p>
            Standard exotic-pet practice cadence, adjusted for individual
            findings:
          </p>
          <ul>
            <li>
              <strong>Kit (under 6 months).</strong> Multiple vaccine
              visits per the kit schedule. First full exam at the time
              of the first vaccine. Sterilization conversation (the
              early-spay-and-neuter pattern in US commercial ferrets is
              implicated in adrenal disease risk; later neutering is
              available as a deliberate choice with private breeders).
            </li>
            <li>
              <strong>Age 1-3.</strong> Annual wellness exam with baseline
              bloodwork from the first annual onward.
            </li>
            <li>
              <strong>Age 3-5.</strong> Every 6 months. Bloodwork at each
              visit. Cardiac auscultation; consider adrenal hormone panel
              if clinical signs emerge.
            </li>
            <li>
              <strong>Age 5+.</strong> Every 3-6 months. Bloodwork at each
              visit. Abdominal ultrasound annually. Hormone panel as
              clinically indicated. The senior monitoring is described
              in more detail in our <a href="/health/aging-ferret-care">aging ferret care page</a>.
            </li>
          </ul>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <h2 id="sources">Sources</h2>
          <ul>
            <li>
              Quesenberry KE, Carpenter JW (eds.). <em>Ferrets, Rabbits,
              and Rodents: Clinical Medicine and Surgery.</em> 4th ed.
              Saunders/Elsevier. Preventive care and diagnostic
              chapters describe the standard ferret workup.
            </li>
            <li>
              American Animal Hospital Association (AAHA) — exotic-mammal
              preventive-care and life-stage guidelines.
            </li>
            <li>
              <em>Veterinary Clinics of North America: Exotic Animal
              Practice</em>, ferret-focused issues covering wellness
              care and diagnostic standards.
            </li>
            <li>
              Association of Exotic Mammal Veterinarians (AEMV) —
              practitioner directory.
            </li>
            <li>
              American Board of Veterinary Practitioners (ABVP) — Exotic
              Companion Mammal diplomate directory.
            </li>
            <li>
              American Ferret Association (AFA) — owner-facing care
              expectation resources.
            </li>
          </ul>
          <p className="text-sm text-brand-text-light">
            This page is general guidance on ferret veterinary visits.
            Specific clinical questions, individualized monitoring
            schedules, and treatment decisions belong to the prescribing
            veterinarian who has examined the ferret.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}

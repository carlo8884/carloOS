import type { Metadata } from 'next'
import {
  buildMetadata,
  ArticleLayout,
  StockImage,
  EmailCapture,
  RelatedLinks,
  TableOfContents,
  FAQAccordion,
  CalloutBox,
  ArticleByline,
  DropCap,
  ReviewCard,
  AffiliateDisclosure,
  CrossPortfolioCard,
  ArticleSourcesList,
} from '@carloOS/ui'

const SOURCES = [
  {
    label: "Quesenberry KE, Carpenter JW (eds.). Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery. 4th ed. Saunders/Elsevier — ferret adrenal-disease chapter, including the early-neuter hypothesis and deslorelin therapy.",
    url: "https://www.elsevier.com/books/ferrets-rabbits-and-rodents/quesenberry/978-1-4160-6621-7",
    publisher: "Elsevier/Saunders",
  },
  {
    label: "Merck Veterinary Manual — Endocrine Diseases of Ferrets: adrenal cortical disease, sex-steroid overproduction, diagnosis, and surgical management",
    url: "https://www.merckvetmanual.com/exotic-and-laboratory-animals/ferrets/endocrine-diseases-of-ferrets",
    publisher: "Merck Veterinary Manual",
  },
  {
    label: "Association of Exotic Mammal Veterinarians (AEMV) — practitioner directory and continuing-education materials on ferret adrenal disease and deslorelin use",
    url: "https://aemv.org",
    publisher: "AEMV",
  },
  {
    label: "Journal of Exotic Pet Medicine — clinical articles on ferret adrenal disease, deslorelin implant outcomes, and surgical adrenalectomy",
    url: "https://www.sciencedirect.com/journal/journal-of-exotic-pet-medicine",
    publisher: "Journal of Exotic Pet Medicine",
  },
]
import {
  buildArticleSchema,
  buildMedicalWebPageSchema,
  buildFAQSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Adrenal Disease in Ferrets — Signs, Diagnosis, Treatment | Ferret.com',
  description:
    'Adrenal disease is the second most common middle-aged-ferret disease after insulinoma. Hormone-panel diagnosis, deslorelin implants, surgery, and prognosis.',
  path: '/health/adrenal-disease',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Adrenal Disease in Ferrets',
  description:
    'Hyperadrenocorticism in domestic ferrets — pathophysiology, clinical signs, hormone-panel diagnosis, deslorelin implant therapy, surgical adrenalectomy, and prognosis.',
  url: 'https://ferret.com/health/adrenal-disease',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-05-28T00:00:00Z',
  modifiedAt: '2026-05-28T00:00:00Z',
  speakable: true,
})

const medSchema = buildMedicalWebPageSchema({
  name: 'Adrenal Disease in Ferrets',
  description:
    'Clinical reference on hyperadrenocorticism (adrenal gland disease) in domestic ferrets, including diagnosis and treatment options.',
  url: 'https://ferret.com/health/adrenal-disease',
  authorName: 'Ferret.com Editorial',
  lastReviewed: '2026-05-28',
})


const FAQS = [
  {
    question: "Is adrenal disease the same as Cushing's disease in dogs?",
    answer:
      "No. Both involve adrenal cortex dysfunction, but ferret adrenal disease overproduces sex steroids (estradiol, androstenedione, 17-hydroxyprogesterone) rather than cortisol. That is why the dexamethasone suppression test used in canine Cushing's is not the right diagnostic for ferrets — exotic-pet vets use a sex-steroid hormone panel (most commonly the panel offered by the University of Tennessee endocrinology lab).",
  },
  {
    question: 'My female ferret was spayed years ago but her vulva is swollen — is that adrenal disease?',
    answer:
      'Almost certainly worth a workup. Vulvar swelling in a spayed jill is one of the classic adrenal-disease signs because the diseased adrenal gland is producing estrogen-like steroids that the ovaries normally would. Have an exotic-pet vet run a hormone panel and abdominal ultrasound.',
  },
  {
    question: 'Will the deslorelin implant cure my ferret?',
    answer:
      'No — it manages signs but does not remove the tumor. Deslorelin (Suprelorin) is a GnRH agonist that suppresses the downstream sex-steroid output, so hair regrows, vulvar swelling resolves, and behavior normalizes. The underlying adrenal nodule continues to grow slowly. Most ferrets need a repeat implant every 12-24 months as effect wanes.',
  },
  {
    question: 'Surgery or implant — which is better?',
    answer:
      "It depends on the gland involved and the ferret's overall health. Left-sided adrenalectomy is technically straightforward; right-sided is much harder because the right adrenal sits against the vena cava and requires an exotic-mammal surgeon with vascular experience. Younger, otherwise-healthy ferrets with left-sided disease are often surgical candidates. Older ferrets, bilateral disease, or right-sided disease are commonly managed with deslorelin instead. This is a vet-by-vet conversation, not a rule.",
  },
  {
    question: 'Can adrenal disease be prevented?',
    answer:
      'There is no proven prevention. The leading hypotheses involve very early neutering (typical in US pet-store ferrets, often before 6 weeks) and reduced exposure to a natural photoperiod, both of which may dysregulate the hypothalamic-pituitary-gonadal axis. The evidence is associational. The practical takeaway: source from breeders who neuter later when possible, and provide a natural light cycle indoors.',
  },
  {
    question: 'Does adrenal disease and insulinoma occur together?',
    answer:
      'Frequently. Both peak in the same age window (3-7 years), and exotic-pet veterinary references consistently note co-occurrence in middle-aged ferrets. Any ferret being worked up for one should be screened for the other — a fasting glucose at the same visit as the hormone panel is good practice. See our companion page on insulinoma.',
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(articleSchema, medSchema, faqSchema)

export default function FerretAdrenalDiseasePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        contentType="health"
        hero={{
          title: 'Adrenal Disease in Ferrets',
          subtitle:
            "Adrenal gland disease — hyperplasia, adenoma, or adenocarcinoma of the adrenal cortex — is the second most commonly diagnosed disease of middle-aged ferrets, behind only insulinoma. It is hormonally driven rather than cortisol-driven (unlike canine Cushing's), which changes both the clinical picture and the diagnostic workup.",
          category: 'Ferret Health',
          authorName: 'Ferret.com Editorial',
          publishedAt: 'May 2026',
          readTime: '14 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Ferret Health', href: '/health' },
          { name: 'Adrenal Disease', href: '/health/adrenal-disease' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'What It Is', href: '#pathophys' },
                { label: 'Who Gets It', href: '#epidemiology' },
                { label: 'Clinical Signs', href: '#signs' },
                { label: 'Quick Reference', href: '#quickref' },
                { label: 'Diagnosis', href: '#diagnosis' },
                { label: 'Treatment Options', href: '#treatment' },
                { label: 'Surgery — Left vs Right', href: '#surgery' },
                { label: 'Prognosis', href: '#prognosis' },
                { label: 'Finding an Exotic-Pet Vet', href: '#vet' },
                { label: 'Comfort & Supportive Care', href: '#supportive' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Insulinoma in Ferrets', href: '/health/insulinoma' },
                { label: 'Aging Ferret Care', href: '/health/aging-ferret-care' },
                { label: 'First-Year Schedule', href: '/first-year-schedule' },
              ]}
            />
            <CrossPortfolioCard currentSite="ferret-com" contentType="health" variant="sidebar" />
            <div className="bg-brand-dark rounded-lg p-5 mb-4">
              <div className="text-xs uppercase tracking-wide text-brand-primary mb-1 font-bold">
                Adrenal Disease + Insurance
              </div>
              <h3 className="font-display text-base font-bold text-brand-white mb-2">
                Cover this condition before it&apos;s diagnosed
              </h3>
              <p className="text-xs text-white/60 mb-3 leading-relaxed">
                Adrenal surgery runs $1,500–$3,500; deslorelin implants add
                $400-600/year. Exotic-pet insurance covers it — but ONLY if
                enrolled before symptoms appear.
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
              source="health-adrenal-disease"
            />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Health Hub', href: '/health' },
          { title: 'Insulinoma', href: '/health/insulinoma' },
          { title: 'Aging Ferret Care', href: '/health/aging-ferret-care' },
          { title: 'Spaying & Neutering', href: '/health/spaying-and-neutering' },
        ]}
>
        <div className="carloOS-article">
          <StockImage
            manifestKey="ferret-com:health-adrenal"
            aspect="16:9"
            variant="inline"
          />
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-05-28"
            updatedAt="2026-05-28"
          />

          <DropCap>
            Adrenal disease is the diagnosis owners learn to expect somewhere in
            year three or four. The signs are easy to mistake for normal aging —
            a little hair thinning here, a slightly louder odor there — until
            the picture becomes unmistakable. The good news is that it is one
            of the better-characterized ferret diseases, and the available
            treatments work.
          </DropCap>

          <h2 id="tldr">TL;DR</h2>
          <p>
            Hyperadrenocorticism in ferrets is overproduction of sex steroids
            (estradiol, androstenedione, 17-hydroxyprogesterone) by a hyperplastic
            or neoplastic adrenal cortex. Classic signs: progressive bilateral
            hair loss starting at the tail base, vulvar swelling in spayed jills,
            sexual aggression, and intensified body odor. Diagnosis combines a
            sex-steroid hormone panel with abdominal ultrasound. Treatment is
            either a deslorelin (Suprelorin) implant under the skin or surgical
            adrenalectomy — the choice depends on gland laterality, the ferret&apos;s
            overall health, and access to an exotic-mammal surgeon.
          </p>

          <h2 id="pathophys">What It Is</h2>
          <p>
            Ferret adrenal disease is fundamentally different from canine
            hyperadrenocorticism (Cushing&apos;s disease). In dogs, the adrenal
            cortex overproduces cortisol; in ferrets, the same anatomical
            region overproduces <strong>sex steroids</strong> — primarily
            estradiol, androstenedione, and 17-hydroxyprogesterone. Cortisol
            output is usually normal. This means the dexamethasone suppression
            tests used in dogs are not the right tool for ferrets, and the
            symptom set is driven by chronic sex-hormone excess rather than
            chronic glucocorticoid excess.
          </p>
          <p>
            Histopathologically, the lesions range from nodular hyperplasia
            (most common in early disease) through adrenocortical adenoma to
            adrenocortical adenocarcinoma. The condition can affect either
            adrenal gland alone or both. The clinical picture is similar
            regardless of which lesion type is present; only the long-term
            prognosis differs materially between adenoma and adenocarcinoma.
          </p>
          <p>
            The leading working hypothesis for the unusually high prevalence
            of adrenal disease in US ferrets centers on{' '}
            <strong>very early neutering</strong>. The majority of US pet-store
            ferrets are sourced from a small number of large commercial breeders
            that spay/neuter kits at roughly 5-6 weeks of age. Without gonadal
            negative feedback on the hypothalamic-pituitary axis, gonadotropin
            (LH, FSH) levels remain chronically elevated. Adrenal cortical
            tissue expresses gonadotropin receptors, and chronic stimulation
            is hypothesized to drive the cortical proliferation that becomes
            adrenal disease. The hypothesis is widely discussed in Quesenberry
            &amp; Carpenter and in the <em>Veterinary Clinics of North America:
            Exotic Animal Practice</em> issues on ferret endocrine disease; the
            evidence is associational rather than experimentally proven.
          </p>

          <h2 id="epidemiology">Who Gets It</h2>
          <p>
            Adrenal disease is most commonly diagnosed between ages 3 and 7,
            with cases reported earlier and later. Both sexes are affected.
            US-sourced pet ferrets carry materially higher disease prevalence
            than ferrets from regions where early-neuter is uncommon, which
            is the observation that fuels the early-neuter hypothesis.
          </p>
          <p>
            Co-occurrence with <a href="/health/insulinoma">insulinoma</a> is
            frequent enough that exotic-pet references recommend screening for
            both conditions whenever either is suspected in a middle-aged ferret.
            Cardiomyopathy and lymphoma also peak in the same age window, so a
            complete senior workup is not just a single hormone panel — it is
            bloodwork, imaging, and cardiac auscultation together.
          </p>

          <h2 id="signs">Clinical Signs</h2>
          <p>
            Adrenal disease typically develops slowly, over months. Owners
            often notice changes in retrospect once a clear pattern emerges.
            The signs are remarkably stereotyped across cases:
          </p>
          <ul>
            <li>
              <strong>Symmetrical hair loss starting at the tail base.</strong>{' '}
              The earliest and most reliable sign. Hair thins on the tail,
              progresses up the rump, and eventually involves the flanks and
              shoulders. The pattern is bilateral and symmetrical — patchy or
              unilateral hair loss is more suggestive of dermatophyte
              infection or external parasites.
            </li>
            <li>
              <strong>Vulvar swelling in spayed females.</strong> A spayed jill
              should have a small, recessed vulva. Visible swelling that
              resembles a normal estrus jill is a near-pathognomonic sign of
              adrenal disease — the diseased gland is producing the
              estrogen-like steroids that the absent ovaries normally would.
            </li>
            <li>
              <strong>Return of sexual or territorial behavior</strong> in
              neutered ferrets — mounting, neck-grabbing, increased aggression
              toward cage-mates, scent marking.
            </li>
            <li>
              <strong>Intensified musky odor.</strong> Even in
              descented/spayed/neutered ferrets, adrenal disease often drives
              a sharp uptick in skin-gland-driven odor. Owners describe it as
              &quot;she suddenly smells like a kit again&quot;.
            </li>
            <li>
              <strong>Prostatic enlargement in hobs.</strong> Less visible to
              owners but a real clinical problem — adrenal-driven sex steroids
              cause prostatic hyperplasia, which can compress the urethra and
              cause stranguria, dysuria, or urinary obstruction. A male ferret
              straining to urinate is a same-day veterinary visit.
            </li>
            <li>
              <strong>Pruritus.</strong> Many ferrets scratch more than usual,
              sometimes to the point of self-trauma over the shoulders and
              dorsal trunk.
            </li>
            <li>
              <strong>Muscle wasting and thin skin</strong> in advanced cases.
              Less prominent than in canine Cushing&apos;s but present.
            </li>
          </ul>

          <CalloutBox variant="warning" title="Urinary obstruction is an emergency">
            <p>
              A male ferret with adrenal disease that develops prostatic
              enlargement can obstruct his urethra completely. Straining to
              urinate, no urine production, vocalization, or abdominal pain
              are all emergency presentations — drive to an ER, ideally one
              with exotic-mammal capability. Untreated obstruction is fatal
              within roughly 24-48 hours.
            </p>
          </CalloutBox>

          <h2 id="quickref">Quick Reference</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-surface border-b border-brand-border">
                  <th className="text-left p-3 font-semibold">Item</th>
                  <th className="text-left p-3 font-semibold">Range / Detail</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brand-border">
                  <td className="p-3 font-medium">Typical age of onset</td>
                  <td className="p-3">3-7 years; cases reported earlier and later</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="p-3 font-medium">Sex predisposition</td>
                  <td className="p-3">Both sexes; jills present with more visible vulvar signs</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="p-3 font-medium">First sign in most cases</td>
                  <td className="p-3">Bilateral hair loss starting at tail base</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="p-3 font-medium">Primary diagnostic</td>
                  <td className="p-3">Sex-steroid hormone panel (University of Tennessee)</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="p-3 font-medium">Confirmatory imaging</td>
                  <td className="p-3">Abdominal ultrasound by an exotic-pet sonographer</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="p-3 font-medium">Deslorelin implant cost (US)</td>
                  <td className="p-3">~$200-450 per implant cycle (varies by region)</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="p-3 font-medium">Adrenalectomy cost (US)</td>
                  <td className="p-3">~$800-2,500 depending on laterality and complications</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Urgency</td>
                  <td className="p-3">
                    Sub-acute except urinary obstruction (emergency) or
                    estrogen-driven aplastic anemia (rare in spayed females)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="diagnosis">Diagnosis</h2>
          <p>
            The diagnostic workup is straightforward but requires a vet
            comfortable with ferrets. The standard sequence:
          </p>
          <ul>
            <li>
              <strong>Sex-steroid hormone panel.</strong> The single most
              useful test. The University of Tennessee College of Veterinary
              Medicine endocrinology lab offers a ferret-specific panel
              measuring estradiol, androstenedione, and 17-hydroxyprogesterone;
              elevations in one or more of these — particularly androstenedione
              and 17-hydroxyprogesterone — strongly support the diagnosis.
              Most exotic-pet practices send to this lab specifically because
              the reference intervals are ferret-derived.
            </li>
            <li>
              <strong>Abdominal ultrasound.</strong> Performed by an
              experienced sonographer comfortable with ferret anatomy. Can
              identify which gland (or both) is enlarged, can give a rough
              size estimate, and can sometimes distinguish hyperplasia from
              a discrete nodule. Useful for surgical planning. A normal-sized
              gland on ultrasound does not rule out the disease — early
              hyperplasia is often not visible.
            </li>
            <li>
              <strong>CBC and chemistry.</strong> Baseline organ function
              before starting any therapy, and to look for concurrent disease
              (especially insulinoma — fasting glucose at the same visit is
              good practice).
            </li>
            <li>
              <strong>Urinalysis.</strong> Particularly in male ferrets, to
              screen for the early signs of prostatic-disease-driven urinary
              tract changes.
            </li>
          </ul>
          <p>
            Cytology of an adrenal mass is rarely indicated — the location is
            difficult, the diagnostic gain over imaging plus hormone panel is
            low, and the procedural risk near the vena cava is real. Definitive
            histopathology comes from surgical biopsy or post-mortem.
          </p>

          <CalloutBox variant="evidence" title="Why the hormone panel matters">
            <p>
              The diagnostic logic is described in Quesenberry &amp; Carpenter,{' '}
              <em>Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery</em>{' '}
              (Saunders/Elsevier), and in the <em>Veterinary Clinics of North
              America: Exotic Animal Practice</em> issues covering ferret
              endocrine disease. The University of Tennessee adrenal panel
              has been the field standard since the late 1990s and is referenced
              across the peer-reviewed exotic-mammal literature.
            </p>
          </CalloutBox>

          <h2 id="treatment">Treatment Options</h2>
          <p>
            Two main treatment paths in modern exotic-pet practice, plus a
            handful of historical or adjunct options. The medical path —
            deslorelin (Suprelorin) implant — has become the default first
            line of therapy in most US practices over the last decade.
            Surgical adrenalectomy remains the most definitive option when
            anatomy and ferret health allow.
          </p>

          <h3>Deslorelin (Suprelorin) implant</h3>
          <p>
            Deslorelin is a sustained-release GnRH agonist. The implant is a
            small biodegradable rod (typically 4.7 mg, originally registered
            for chemical sterilization of dogs) placed subcutaneously between
            the shoulder blades under brief anesthesia or heavy sedation.
            After an initial brief flare of GnRH activity, the chronic
            agonist exposure desensitizes pituitary gonadotrophs, suppressing
            LH and FSH output. With the gonadotropin drive to the diseased
            adrenal gland removed, the adrenal&apos;s sex-steroid output falls and
            clinical signs regress.
          </p>
          <p>
            Typical timeline of response: vulvar swelling resolves within
            2-6 weeks, hair regrows over 2-4 months, behavioral signs
            normalize within weeks. Most published series report median
            duration of effect per implant of approximately{' '}
            <strong>12-24 months</strong>, with substantial individual variation.
            When signs return, a repeat implant is placed. Some ferrets receive
            multiple implant cycles across the rest of their life with good
            symptom control.
          </p>
          <p>
            Limitations: deslorelin treats signs, not the tumor. The adrenal
            lesion continues to grow at its native rate, and a small fraction
            of cases develop locally invasive disease that becomes a surgical
            problem regardless. The implant is not effective in every case;
            adenocarcinomas autonomous of gonadotropin drive will not respond.
          </p>

          <h3>Surgical adrenalectomy</h3>
          <p>
            Removal of the diseased gland (or both, in bilateral cases) by
            an exotic-mammal surgeon. Surgery removes the tumor and offers
            the closest thing to a cure, but it is not without significant
            technical complexity — see the next section on left vs right
            laterality. Recovery is typically uncomplicated in healthy
            ferrets; serious post-op complications cluster around major
            vessel injury during right-sided procedures.
          </p>

          <h3>Historical / adjunct options</h3>
          <p>
            Older protocols used mitotane (Lysodren) and ketoconazole.
            Neither is the modern standard of care in ferrets — efficacy is
            inconsistent and side-effect burden is meaningful. They appear in
            older case reports but are rarely first-line in current practice.
            Melatonin implants are sometimes used as adjuncts, although the
            evidence is thinner than for deslorelin.
          </p>

          <h2 id="surgery">Surgery — Why Left vs Right Matters</h2>
          <p>
            The two adrenal glands sit on top of their respective kidneys but
            differ dramatically in surgical accessibility.
          </p>
          <p>
            <strong>Left adrenalectomy</strong> is comparatively straightforward.
            The left adrenal sits relatively free in the retroperitoneum with
            vascular supply that is approachable. Most exotic-mammal surgeons
            with ferret experience are comfortable with left adrenalectomy.
          </p>
          <p>
            <strong>Right adrenalectomy</strong> is technically demanding. The
            right adrenal sits intimately against the caudal vena cava, often
            with venous drainage entering the cava directly. Dissection
            requires vascular surgery technique — partial vena cava clamping
            or even resection-and-anastomosis in advanced cases. This is not
            a procedure for a general-practice clinic; it belongs in the
            hands of a surgeon with specific exotic-mammal vascular surgery
            experience, ideally at a teaching hospital or a referral specialty
            practice.
          </p>
          <p>
            For bilateral disease, partial right adrenalectomy (debulking the
            visible tumor while leaving a vascular margin) plus complete left
            adrenalectomy is one common approach, often combined with
            post-operative deslorelin to suppress the residual right gland.
            Other surgeons stage the procedure across two separate operations.
            This is a surgeon-specific decision based on the specific anatomy
            visible at surgery.
          </p>

          <CalloutBox variant="tip" title="Where to find a ferret surgeon">
            <p>
              The <strong>Association of Exotic Mammal Veterinarians (AEMV)</strong>{' '}
              maintains a directory of practitioners with declared exotic-mammal
              practice. For right-sided adrenalectomy specifically, ask any
              candidate surgeon how many ferret right adrenalectomies they
              have personally performed in the last year — answers below
              about a dozen suggest looking further. Veterinary teaching
              hospitals with exotic-mammal services (Tufts, Cornell, UC Davis,
              Texas A&amp;M, North Carolina State, among others) often have
              the deepest experience.
            </p>
          </CalloutBox>

          <h2 id="prognosis">Prognosis</h2>
          <p>
            Adrenal disease is in general a chronic-management disease, not
            an acute-fatal one. Published case series in the exotic-pet
            veterinary literature report median survival from diagnosis on
            deslorelin therapy of approximately <strong>1-2 years per
            implant cycle</strong>, with many ferrets receiving multiple cycles
            and living several years from diagnosis. Surgical cases with
            complete unilateral resection of a benign lesion can be
            functionally cured for the remainder of the ferret&apos;s life,
            though recurrence in the contralateral gland is a known pattern.
          </p>
          <p>
            Quality of life on appropriate therapy is generally excellent.
            Most adrenal-disease ferrets continue to eat well, play, and
            engage normally with their household once the signs are controlled.
            The trajectory is &quot;manageable chronic disease with periodic
            re-treatment&quot; rather than &quot;rapid decline&quot;.
          </p>
          <p>
            Adverse outcomes cluster around three patterns: (1) urinary
            obstruction from prostatic disease in untreated hobs, (2) rare
            severe estrogen-induced bone marrow suppression in long-untreated
            cases, and (3) locally invasive adenocarcinoma with vena cava
            invasion. The first two are highly preventable with timely
            diagnosis and treatment; the third is the residual hard case
            that surgery and medical therapy together cannot fully resolve.
          </p>

          <h2 id="vet">Finding an Exotic-Pet Vet</h2>
          <p>
            Ferret adrenal disease is well-characterized but the diagnostic
            and treatment workflow specifically requires an exotic-pet
            veterinarian. General-practice clinicians often have limited
            ferret exposure and are unlikely to order the right hormone panel
            or be familiar with deslorelin implant placement.
          </p>
          <p>Two starting points for finding the right clinician:</p>
          <ul>
            <li>
              <strong>Association of Exotic Mammal Veterinarians (AEMV)</strong>{' '}
              — the field society for exotic-mammal practitioners; maintains
              a member directory.
            </li>
            <li>
              <strong>American Board of Veterinary Practitioners (ABVP)</strong>{' '}
              — board certification in Exotic Companion Mammal practice
              represents the deepest credential. Diplomate listings are
              searchable.
            </li>
          </ul>

          <h2 id="supportive">Comfort &amp; Supportive Care</h2>
          <p className="text-sm font-medium text-brand-primary mb-3">
            The products below are comfort and general-care items for ferrets living with adrenal disease — they do NOT treat adrenal disease. Adrenal disease requires diagnosis and a treatment plan from a veterinarian experienced with ferrets.
          </p>
          <AffiliateDisclosure variant="inline" siteId="ferret-com" />
          <ReviewCard
            id="ferret-fleece-sleep-sack"
            name="Ferret Fleece Sleep Sack"
            subtitle="Enclosed fleece bedding — warmth and burrowing comfort for alopecic or post-surgical ferrets"
            score={8.8}
            description={
              <p>Ferrets with adrenal disease often experience progressive hair loss (alopecia) that reduces their ability to retain body heat — particularly relevant in ferrets recovering from adrenalectomy. An enclosed fleece sleep sack provides warmth and satisfies the burrowing instinct simultaneously. Machine washable, ferret-specific sizing. Replace every 3–6 months or when fabric thins. This is a comfort and warmth tool; it does not treat adrenal disease.
              </p>
            }
            specs={[
              { label: 'Use case', value: 'Warmth and comfort for alopecic ferrets' },
              { label: 'Material', value: 'Machine-washable fleece' },
              { label: 'Ferret-specific sizing', value: 'Yes', highlight: 'good' },
            ]}
            pros={['Warmth for ferrets with alopecia-reduced coat', 'Satisfies burrowing instinct', 'Machine washable', 'Low cost per unit']}
            cons={['Not a treatment — see your exotic vet', 'Some ferrets chew fleece', 'Replace regularly as fabric thins']}
            price="$10–18"
            ctaText="Find ferret fleece sleep sacks"
            ctaHref="/go/chewy-brand/ferret+fleece+sleep+sack+hammock?s=health-adrenal-disease"
            ctaAffiliateProgram="chewy-brand"
            ctaAffiliateProduct="ferret+fleece+sleep+sack+hammock"
          />

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <ArticleSourcesList sources={SOURCES} />
          <p className="text-sm text-brand-text-light">
            This page is general clinical information about ferret adrenal
            disease. It is not individualized veterinary advice. Any ferret
            with signs consistent with adrenal disease needs evaluation by a
            veterinarian familiar with ferrets — ideally an AEMV member or an
            ABVP diplomate in Exotic Companion Mammal practice.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}

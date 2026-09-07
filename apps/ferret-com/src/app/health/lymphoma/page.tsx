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
  CrossPortfolioCard,
  ArticleSourcesList,
  AffiliateDisclosure,
  ShopCtas,
} from '@carloOS/ui'

const SOURCES = [
  {
    label: "Quesenberry KE, Carpenter JW (eds.). Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery. 4th ed. Saunders/Elsevier — ferret oncology chapter covering lymphoma classification, workup, and treatment frameworks.",
    url: "https://www.elsevier.com/books/ferrets-rabbits-and-rodents/quesenberry/978-1-4160-6621-7",
    publisher: "Elsevier/Saunders",
  },
  {
    label: "Merck Veterinary Manual — Neoplasia of Ferrets: lymphoma epidemiology, juvenile vs adult forms, diagnostic workup, and chemotherapy options",
    url: "https://www.merckvetmanual.com/exotic-and-laboratory-animals/ferrets/neoplasia-of-ferrets",
    publisher: "Merck Veterinary Manual",
  },
  {
    label: "Association of Exotic Mammal Veterinarians (AEMV) — practitioner directory and continuing-education materials on ferret oncology",
    url: "https://aemv.org",
    publisher: "AEMV",
  },
  {
    label: "Journal of Exotic Pet Medicine — clinical articles on ferret lymphoma immunophenotyping, CHOP-based chemotherapy, and treatment response",
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
  title: 'Lymphoma in Ferrets — Signs, Chemotherapy & Prognosis | Ferret.com',
  description:
    'Lymphoma is one of the most common ferret cancers. Juvenile and adult presentations, clinical signs, diagnostic workup, chemotherapy, and prognosis.',
  path: '/health/lymphoma',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Lymphoma in Ferrets',
  description:
    "Clinical reference on lymphoma in domestic ferrets — juvenile vs adult forms, clinical presentation, diagnostic workup, chemotherapy and prednisone protocols, and prognosis.",
  url: 'https://ferret.com/health/lymphoma',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-05-29T00:00:00Z',
  modifiedAt: '2026-05-29T00:00:00Z',

  citation: SOURCES,
})

const medSchema = buildMedicalWebPageSchema({
  name: 'Lymphoma in Ferrets',
  description:
    "Clinical reference on lymphoma in ferrets, including epidemiology, presentation, diagnosis, and treatment options.",
  url: 'https://ferret.com/health/lymphoma',
  authorName: 'Ferret.com Editorial',
  lastReviewed: '2026-05-29',
})


const FAQS = [
  {
    question: 'How common is lymphoma in ferrets?',
    answer:
      "Lymphoma is consistently reported as one of the three most common neoplasms in domestic ferrets, alongside insulinoma and adrenal disease. Different case series report different orderings; in many large exotic-pet practices it is the second-most-common ferret cancer after insulinoma. The Quesenberry & Carpenter chapter on ferret oncology summarizes the prevalence data.",
  },
  {
    question: 'What are the first signs?',
    answer:
      "Lymphoma is famously heterogeneous in ferrets. Common presentations include enlarged peripheral lymph nodes (often noticed during a routine exam or by an owner palpating under the jaw or in the groin), progressive weight loss despite adequate intake, lethargy, recurrent vague illness, splenomegaly noted on physical exam, gastrointestinal signs (chronic vomiting or diarrhea), and unexplained anemia on routine bloodwork. Many cases are picked up incidentally on senior bloodwork before there is any owner-visible sign.",
  },
  {
    question: 'How is lymphoma diagnosed?',
    answer:
      "Diagnosis usually proceeds in stages: (1) abnormal CBC (lymphocytosis or unexplained cytopenias), enlarged lymph nodes on exam, or imaging findings, (2) fine-needle aspirate cytology of an accessible node, mass, or organ, (3) confirmatory tissue biopsy with histopathology and increasingly immunophenotyping for B-cell vs T-cell classification. Imaging (abdominal ultrasound, thoracic radiographs, sometimes CT) characterizes the extent. Bone marrow aspirate may be added in selected cases.",
  },
  {
    question: 'Can ferret lymphoma be treated?',
    answer:
      "Yes, with multi-agent chemotherapy protocols adapted from feline lymphoma medicine. The most commonly used backbone is a CHOP-style protocol (cyclophosphamide, doxorubicin, vincristine, prednisone) or simpler prednisone-only palliative therapy. Chemotherapy is typically offered through exotic-pet specialty practices or veterinary teaching hospitals. Surgery may be added for solitary masses. Response rates and durations vary by form and individual ferret.",
  },
  {
    question: 'What is the prognosis?',
    answer:
      "Highly variable by lymphoma form, anatomic distribution, immunophenotype, and ferret age. Juvenile lymphoma in young ferrets often progresses rapidly with short survival times even with treatment. Adult slow-progressing forms can have multi-year survival on chemotherapy. Prednisone-only palliation typically buys weeks to a few months. The exotic-pet vet handling the case is the right source of an individualized prognosis; population-level numbers vary too widely to be useful in a single answer.",
  },
  {
    question: 'Should I screen my ferret for lymphoma?',
    answer:
      "Routine senior bloodwork — CBC and chemistry every 6 months from age 3-5, every 3-6 months from age 5+ — is the practical screening tool. Unexplained lymphocytosis, anemia, or other CBC abnormalities are the most common early signal. Direct screening (e.g. prophylactic biopsy) is not standard. The same monitoring cadence catches insulinoma and adrenal disease and is the standard exotic-pet preventive-care recommendation regardless of any specific cancer concern.",
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(articleSchema, medSchema, faqSchema)

export default function FerretLymphomaPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        contentType="health"
        hero={{
          title: 'Lymphoma in Ferrets',
          subtitle:
            'Lymphoma — neoplasia of the lymphocyte cell line — is one of the three most-common cancers in domestic ferrets and the most heterogeneous in presentation. Some ferrets are diagnosed because a lump appeared. Some because bloodwork looked wrong at a routine senior visit. Some because weight kept dropping despite a good appetite. Recognizing the pattern across a confusing clinical picture is what separates early diagnosis from late.',
          category: 'Ferret Health',
          authorName: 'Ferret.com Editorial',
          publishedAt: 'May 2026',
          readTime: '13 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Ferret Health', href: '/health' },
          { name: 'Lymphoma', href: '/health/lymphoma' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'TL;DR', href: '#tldr' },
                { label: 'What It Is', href: '#what' },
                { label: 'Who Gets It', href: '#epidemiology' },
                { label: 'Clinical Signs', href: '#signs' },
                { label: 'Forms of Ferret Lymphoma', href: '#forms' },
                { label: 'Diagnosis', href: '#diagnosis' },
                { label: 'Staging', href: '#staging' },
                { label: 'Treatment Options', href: '#treatment' },
                { label: 'Prognosis', href: '#prognosis' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Insulinoma', href: '/health/insulinoma' },
                { label: 'Adrenal Disease', href: '/health/adrenal-disease' },
                { label: 'Aging Ferret Care', href: '/health/aging-ferret-care' },
                { label: 'Vet Visit Prep', href: '/health/vet-visit-prep' },
              ]}
            />
            <div className="bg-brand-dark rounded-lg p-5 mb-4">
              <div className="text-xs uppercase tracking-wide text-brand-primary mb-1 font-bold">
                Lymphoma + Insurance
              </div>
              <h3 className="font-display text-base font-bold text-brand-white mb-2">
                Cover this condition before it&apos;s diagnosed
              </h3>
              <p className="text-xs text-white/60 mb-3 leading-relaxed">
                Lymphoma chemotherapy in ferrets can exceed $4,000-8,000 over
                a treatment course. Exotic-pet insurance covers it — but ONLY
                if enrolled before symptoms appear.
              </p>
              <a
                href="https://vets.co/reviews/best-pet-insurance"
                rel="noopener"
                className="inline-block text-xs font-bold text-brand-primary hover:underline"
              >
                Compare exotic-pet insurance →
              </a>
            </div>
            <CrossPortfolioCard currentSite="ferret-com" contentType="health" variant="sidebar" />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Health Notes"
              subtitle="Evidence-based ferret health, monthly."
              source="health-lymphoma"
            />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Health Hub', href: '/health' },
          { title: 'Adrenal Disease', href: '/health/adrenal-disease' },
          { title: 'Aging Ferret Care', href: '/health/aging-ferret-care' },
          { title: 'Signs of Pain', href: '/health/signs-of-pain' },
        ]}
>
        <div className="carloOS-article">
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-05-29"
            updatedAt="2026-05-29"
            reviewedBy="Editorial team"
          />

          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the ferret lymphoma checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Ferret lymphoma checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the laminated-ferret-lump-weight-chart,
              fridge-senior-cbc-card, and
              mustelid-lymphoma-workup-handbook notes
              that match the lump-weight-map,
              senior-cbc-log, and
              quesenberry-aemv-oncology-grounding copy on this
              page — a laminated ferret lump-weight chart
              so the lump / weight-drop / wrong-bloodwork
              map is posted on the fridge (not a short-fast
              chart, not a bruxism-map chart, not a
              coffee-grounds chart), a ferret fridge senior-cbc
              card so CBC / chemistry / six-month-cadence notes
              are labeled on the fridge (not a glucose-temp
              card, not a baseline-log card, not a
              household-treat card), and a mustelid
              lymphoma-workup handbook so the Quesenberry /
              AEMV cytology-then-biopsy grounding is a
              physical kitchen book (not an anesthesia-clinic
              handbook, not a pain-sign handbook, not an
              otodectes-swab handbook). Educational kitchen
              checklist, not a ranked clinic list, not a
              first-aid-kit hop, and not a substitute for an
              exotic-mammal veterinarian. Ferret.com does not
              sell insurance. Aging pages stay held. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="ferret-com"
              title="Ferret lymphoma checklist"
              subtitle="Email the lump-weight-chart, fridge senior-cbc card, and lymphoma-workup-handbook notes. No spam."
              ctaText="Email my ferret lymphoma checklist"
              source="health-lymphoma-under-hero"
            />
          </div>

          <DropCap>
            Ferret lymphoma is the cancer that does not have a single
            presentation. It can show as a lump, as a slow weight loss,
            as an anemia found on routine bloodwork, as a fast-decline
            illness in a juvenile, or as a years-long indolent course in
            an older ferret. The diagnostic workup is largely the same
            regardless; the prognosis and treatment choices vary
            substantially with which form the ferret has.
          </DropCap>

          <h2 id="tldr">TL;DR</h2>
          <p>
            Lymphoma is among the top three ferret cancers (alongside
            insulinoma and adrenal disease). Presentations range from
            visible enlarged lymph nodes through slow weight loss to
            unexplained anemia on routine bloodwork. Diagnosis: cytology
            of accessible nodes/masses, confirmatory histopathology,
            imaging, sometimes immunophenotyping. Treatment options
            include CHOP-style multi-agent chemotherapy, simpler
            prednisone-only palliation, surgery for isolated masses, and
            supportive care. Prognosis ranges from weeks (some juvenile
            forms) to multi-year (some adult indolent forms). Routine
            senior bloodwork is the practical screening tool.
          </p>

          <h2 id="what">What It Is</h2>
          <p>
            Lymphoma is a malignant proliferation of lymphocytes — the
            white blood cells that ordinarily live in lymph nodes, the
            spleen, the bone marrow, and circulate through tissue. In
            ferrets as in other species, lymphoma can be classified by
            cell type (B-cell vs T-cell), by anatomic distribution
            (multicentric, mediastinal, alimentary/GI, splenic, hepatic,
            nodal, cutaneous, leukemic), and by histologic grade
            (lymphoblastic / high-grade vs small-cell / low-grade).
          </p>
          <p>
            The condition is described in detail in Quesenberry &amp;
            Carpenter, <em>Ferrets, Rabbits, and Rodents: Clinical
            Medicine and Surgery</em>, and across case series in the
            <em>Journal of the American Veterinary Medical Association
            (JAVMA)</em>, the <em>Journal of Exotic Pet Medicine</em>,
            and the <em>Veterinary Clinics of North America: Exotic
            Animal Practice</em> ferret-oncology issues. The clinical
            picture borrows heavily from feline lymphoma medicine but
            with important differences in distribution and immuno-
            phenotype prevalence.
          </p>

          <h2 id="epidemiology">Who Gets It</h2>
          <p>
            Two age peaks are described in the ferret lymphoma
            literature:
          </p>
          <ul>
            <li>
              <strong>Juvenile lymphoma</strong> in ferrets under about
              14-18 months. Often aggressive, often lymphoblastic,
              frequently with mediastinal involvement. Historically
              attributed to a possible viral etiology — analogous to
              feline leukemia virus in cats — but a specific ferret
              retrovirus has never been definitively isolated. The
              question remains open in the literature.
            </li>
            <li>
              <strong>Adult lymphoma</strong> in ferrets from
              approximately age 3 onward, peaking in the middle and
              senior years. More variable presentation; small-cell GI
              lymphoma is one of the more common adult forms and tends
              to be more indolent.
            </li>
          </ul>
          <p>
            There is no strong consistent sex predisposition in the
            published case series. Ferrets from large US commercial
            breeders may be over-represented, but case ascertainment
            biases make population-level claims difficult.
          </p>

          <h2 id="signs">Clinical Signs</h2>
          <p>
            The heterogeneity of presentation is the single most
            important fact about ferret lymphoma. Patterns include:
          </p>
          <ul>
            <li>
              <strong>Peripheral lymphadenopathy.</strong> Enlarged
              lymph nodes under the jaw (submandibular), in the armpit
              (axillary), or in the groin (inguinal). Sometimes noticed
              during routine grooming or at exam; sometimes not noticed
              until quite large.
            </li>
            <li>
              <strong>Weight loss despite normal or increased appetite.</strong>
              Particularly common in alimentary/GI lymphoma. The ferret
              eats well but loses condition over weeks to months.
            </li>
            <li>
              <strong>Lethargy and reduced activity.</strong> Often a
              vague picture: "she just isn&apos;t herself", "he&apos;s
              been a little off for a few weeks".
            </li>
            <li>
              <strong>Splenomegaly.</strong> Detected on physical
              palpation by the vet. Important: splenomegaly is also
              common in older ferrets without lymphoma (benign
              hyperplastic splenomegaly is a separate entity); imaging
              and aspirate distinguish.
            </li>
            <li>
              <strong>Hepatomegaly</strong> or jaundice in cases with
              hepatic involvement.
            </li>
            <li>
              <strong>GI signs.</strong> Chronic vomiting, soft or
              bloody stool, melena, anorexia. Particularly characteristic
              of small-cell alimentary lymphoma.
            </li>
            <li>
              <strong>Respiratory signs.</strong> Cough, tachypnea, or
              effort. May indicate mediastinal lymphoma compressing
              airways or pleural effusion.
            </li>
            <li>
              <strong>Unexplained CBC abnormalities</strong> on routine
              senior bloodwork — particularly lymphocytosis or
              unexplained non-regenerative anemia. One of the most
              common ways adult lymphoma is first picked up.
            </li>
            <li>
              <strong>Cutaneous lesions.</strong> Rarer presentation;
              persistent non-healing skin nodules that prove to be
              cutaneous lymphoma on biopsy.
            </li>
          </ul>

          <h2 id="forms">Forms of Ferret Lymphoma</h2>
          <h3>Juvenile lymphoblastic lymphoma</h3>
          <p>
            Aggressive, high-grade, frequently mediastinal. Affects
            ferrets under approximately 14-18 months. Survival times
            with treatment have historically been short — weeks to a
            few months — although newer chemotherapy protocols
            occasionally produce longer responses.
          </p>
          <h3>Adult multicentric lymphoma</h3>
          <p>
            Multiple lymph node and organ involvement at presentation.
            Mid-range survival times on multi-agent chemotherapy.
            Probably the most common adult presentation.
          </p>
          <h3>Alimentary (gastrointestinal) lymphoma</h3>
          <p>
            Often small-cell, often more indolent than other forms.
            Chronic weight loss, vomiting, and soft stool are the
            common signs. Diagnosis frequently requires intestinal
            biopsy because cytology of GI lesions is unreliable. Some
            cases respond well to oral prednisone with or without
            chlorambucil, with longer survival than other adult forms.
          </p>
          <h3>Splenic lymphoma</h3>
          <p>
            Splenic involvement is common in ferret lymphoma overall.
            Pure splenic lymphoma — splenomegaly without other organ
            involvement — is sometimes managed with splenectomy in
            addition to or instead of systemic chemotherapy.
          </p>
          <h3>Mediastinal lymphoma</h3>
          <p>
            Anterior thoracic mass, often with pleural effusion. Can
            present acutely with respiratory distress requiring
            emergency stabilization (oxygen, thoracocentesis) before
            definitive workup.
          </p>
          <h3>Cutaneous lymphoma</h3>
          <p>
            Rare, presents as persistent skin nodules. Diagnosis by
            biopsy.
          </p>

          <h2 id="diagnosis">Diagnosis</h2>
          <p>
            The standard workup, generally in this order:
          </p>
          <ol>
            <li>
              <strong>Full physical exam</strong> with careful
              palpation of all peripheral lymph nodes, abdomen, and
              chest auscultation.
            </li>
            <li>
              <strong>CBC, chemistry, and urinalysis.</strong>
              Lymphocytosis (sometimes with circulating atypical
              lymphocytes), non-regenerative anemia, hypercalcemia in
              some cases, and elevated liver enzymes with hepatic
              involvement are the patterns to watch.
            </li>
            <li>
              <strong>Fine-needle aspirate cytology</strong> of any
              accessible enlarged node, mass, or splenic enlargement.
              Cytology is often diagnostic for higher-grade lymphoma
              but may miss small-cell or partially infiltrated lesions.
            </li>
            <li>
              <strong>Imaging.</strong> Abdominal ultrasound to
              characterize splenic, hepatic, GI, and nodal disease.
              Thoracic radiographs to screen for mediastinal mass and
              pleural effusion. CT in selected cases at referral
              centers.
            </li>
            <li>
              <strong>Confirmatory tissue biopsy with histopathology.</strong>
              Often required to distinguish lymphoma from benign
              hyperplastic disease, to grade the lesion, and (with
              special stains and immunohistochemistry) to immuno-
              phenotype (B-cell vs T-cell).
            </li>
            <li>
              <strong>Bone marrow aspirate</strong> in selected cases —
              particularly when peripheral cytopenias are present or
              when staging matters for treatment choice.
            </li>
            <li>
              <strong>PCR for antigen receptor rearrangements
              (PARR)</strong> on cytology or biopsy samples is offered
              by some specialty labs and can help distinguish reactive
              lymphocyte populations from true lymphoma.
            </li>
          </ol>

          <CalloutBox variant="evidence" title="Why bloodwork screening matters">
            <p>
              A meaningful fraction of adult ferret lymphoma cases are
              first identified on routine senior bloodwork before
              owner-visible signs develop. The CBC abnormality that
              prompts further workup is often subtle — a lymphocytosis
              that an inattentive interpretation might dismiss as
              within normal range, or a mild non-regenerative anemia.
              The case for regular senior bloodwork rests heavily on
              this kind of early detection across the three dominant
              ferret cancers.
            </p>
          </CalloutBox>

          <h2 id="staging">Staging</h2>
          <p>
            Staging in ferret lymphoma follows broadly the same logic as
            in feline and canine lymphoma — characterize anatomic
            extent, identify involved organ systems, classify
            immunophenotype where feasible, and assess overall
            performance status. The staging informs treatment intensity
            and prognosis but does not change the broad shape of the
            treatment plan: most lymphoma is approached as a systemic
            disease.
          </p>

          <h2 id="treatment">Treatment Options</h2>
          <p>
            Treatment is selected based on form, extent, immuno-
            phenotype where known, ferret age and condition, owner
            preferences, and access to specialty care. The protocols
            below summarize the framework described across the
            ferret-oncology literature. Specific drug selection and
            dosing belong to the prescribing veterinarian.
          </p>
          <h3>Multi-agent chemotherapy (CHOP-style)</h3>
          <p>
            The most-used approach for ferret lymphoma. CHOP is a
            standard combination of cyclophosphamide, doxorubicin,
            vincristine, and prednisone, given on a sequential schedule
            over several months. Adapted from feline and canine
            lymphoma protocols and modified for ferret physiology.
            Typically requires referral to an exotic-pet specialty
            practice or veterinary teaching hospital and a substantial
            time and financial commitment from the owner.
          </p>
          <h3>Single-agent or simpler protocols</h3>
          <p>
            Prednisone-only therapy is the most common simpler
            approach. Inexpensive, generally well-tolerated, often
            produces meaningful clinical improvement, but tends to
            produce shorter overall survival than multi-agent therapy.
            Important caveat: prednisone alone before a tissue diagnosis
            can interfere with later cytology and histopathology by
            partially treating the disease — discuss timing with the
            vet.
          </p>
          <p>
            Chlorambucil with prednisone is a common protocol for small-
            cell GI lymphoma, with reports of meaningful long-term
            response in some ferrets.
          </p>
          <h3>Surgery</h3>
          <p>
            Surgery is added to chemotherapy in selected cases — most
            notably splenectomy for splenic involvement, removal of an
            isolated peripheral mass, or cytoreductive surgery for a
            large GI lesion. Surgery is rarely curative on its own;
            systemic therapy is usually still needed.
          </p>
          <h3>Supportive care</h3>
          <p>
            Across all treatment intensities: analgesia where needed,
            antiemetics for GI signs, appetite support (mirtazapine,
            recovery-diet supplementation), subcutaneous fluids in
            dehydration, antibiotics for secondary infection. Quality-
            of-life-focused supportive care is the right path for
            ferrets that are not candidates for chemotherapy.
          </p>

          <CalloutBox variant="tip" title="Find an exotic-animal-experienced vet">
            <p>
              Ferret lymphoma treatment is concentrated at exotic-pet
              referral practices, veterinary teaching hospitals, and
              specialty oncology centers with exotic-mammal capacity.
              The AEMV practitioner directory, the ABVP Exotic Companion
              Mammal diplomate list, and the AVMA-accredited veterinary
              college teaching hospitals are the reliable starting
              points. A primary-care exotic-pet vet can coordinate the
              referral and manage shared care across the chemotherapy
              course.
            </p>
          </CalloutBox>

          <h2 id="prognosis">Prognosis</h2>
          <p>
            Prognosis varies substantially. The honest summary, drawing
            on published case series:
          </p>
          <ul>
            <li>
              <strong>Juvenile lymphoblastic lymphoma:</strong>
              Historically poor. Survival often weeks to a few months
              even with treatment. Newer protocols occasionally produce
              longer responses; the population data is limited.
            </li>
            <li>
              <strong>Adult multi-agent chemotherapy responders:</strong>
              Median survival in the range of 6-18 months, with
              substantial individual variation. Some ferrets respond
              durably and live multi-year intervals.
            </li>
            <li>
              <strong>Adult prednisone-only palliation:</strong>
              Typical survival weeks to a few months. Quality of life
              is often good during this interval.
            </li>
            <li>
              <strong>Small-cell GI lymphoma on chlorambucil-prednisone:</strong>
              Often longer survival, occasionally measured in years.
              The most favorable prognosis category among adult forms.
            </li>
          </ul>
          <p>
            The exotic-pet vet handling the individual ferret&apos;s
            case is the right source of a meaningful prognosis. The
            ranges above are orientation, not prediction.
          </p>

          <AffiliateDisclosure variant="inline" siteId="ferret-com" />

          {/* Money path — live amazon-brand search hops
              (laminated ferret lump-weight chart /
              ferret fridge senior-cbc card /
              mustelid lymphoma-workup handbook).
              No existing product hop to keep.
              Educational kitchen searches only; no Rx /
              vaccine / flea / heartworm / nsaid / aging hops.
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Unused vs health-hub /
              anesthesia / signs-of-pain / ear-mites hops.
              Directory import left untouched. Ferret
              aging stays held.
              Do not re-open #1165 / what-to-expect. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the ferret lymphoma kitchen kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page lump-weight-map,
              senior-cbc-log, and
              quesenberry-aemv-oncology-grounding copy — a
              laminated ferret lump-weight chart, a
              ferret fridge senior-cbc card, and a
              mustelid lymphoma-workup handbook.
              Educational kitchen searches only. They are
              not a ranked clinic list, they are not
              a health-hub / anesthesia / signs-of-pain hop,
              they are not a first-aid-kit hop, they are
              not a child toothbrush hop, and they do not
              replace an exotic-mammal veterinarian.
              Ferret.com does not sell insurance.
              Ferret.com earns a commission on qualifying
              purchases at no extra cost to you. Empty
              Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/laminated+ferret+lump+weight+chart?s=lymphoma"
                amazonLabel="Browse laminated ferret lump-weight charts on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/ferret+fridge+senior+cbc+card?s=lymphoma"
                amazonLabel="Browse ferret fridge senior-cbc cards on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/mustelid+lymphoma+workup+handbook?s=lymphoma"
                amazonLabel="Browse mustelid lymphoma-workup handbooks on Amazon →"
              />
            </div>
          </div>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <ArticleSourcesList sources={SOURCES} />
          <p className="text-sm text-brand-text-light">
            This page is general clinical information about lymphoma in
            ferrets. It is not individualized veterinary advice.
            Treatment choices, chemotherapy protocols, prognosis, and
            end-of-life decisions are vet-by-vet conversations and
            require evaluation by a clinician familiar with the
            individual ferret — ideally an AEMV member, an ABVP
            diplomate in Exotic Companion Mammal practice, or a
            veterinary teaching hospital exotic-oncology service.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}

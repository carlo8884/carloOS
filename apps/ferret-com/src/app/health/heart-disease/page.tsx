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
} from '@carloOS/ui'

const SOURCES = [
  {
    label: "Quesenberry KE, Carpenter JW (eds.). Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery. 4th ed. Saunders/Elsevier — ferret cardiology chapter covering dilated cardiomyopathy, valvular disease, and echocardiographic diagnosis.",
    url: "https://www.elsevier.com/books/ferrets-rabbits-and-rodents/quesenberry/978-1-4160-6621-7",
    publisher: "Elsevier/Saunders",
  },
  {
    label: "Merck Veterinary Manual — Cardiovascular and Hematopoietic Diseases of Ferrets: cardiomyopathy types, clinical signs, and management",
    url: "https://www.merckvetmanual.com/exotic-and-laboratory-animals/ferrets/cardiovascular-and-hematopoietic-diseases-of-ferrets",
    publisher: "Merck Veterinary Manual",
  },
  {
    label: "Association of Exotic Mammal Veterinarians (AEMV) — practitioner directory and continuing-education content on ferret cardiac medicine",
    url: "https://aemv.org",
    publisher: "AEMV",
  },
  {
    label: "Journal of Exotic Pet Medicine — clinical reports on ferret dilated cardiomyopathy, echocardiographic findings, and heartworm prevention",
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
  title: 'Ferret Heart Disease — Cardiomyopathy & Signs | Ferret.com',
  description:
    'Dilated cardiomyopathy is the most common ferret heart disease. Subtle early signs, echocardiogram diagnosis, management, and heartworm prevention.',
  path: '/health/heart-disease',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Ferret Heart Disease',
  description:
    'Cardiac disease in domestic ferrets — dilated cardiomyopathy, valvular disease, clinical signs, echocardiographic diagnosis, and veterinary management.',
  url: 'https://ferret.com/health/heart-disease',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',

  citation: SOURCES,
})

const medSchema = buildMedicalWebPageSchema({
  name: 'Ferret Heart Disease',
  description:
    'Clinical reference on cardiac disease in domestic ferrets, including cardiomyopathy, diagnosis, and management.',
  url: 'https://ferret.com/health/heart-disease',
  authorName: 'Ferret.com Editorial',
  lastReviewed: '2026-06-01',
})


const FAQS = [
  {
    question: 'What is the most common heart disease in ferrets?',
    answer:
      "Dilated cardiomyopathy — a weakening and enlargement of the heart muscle that reduces its ability to pump — is the most frequently diagnosed cardiac disease in pet ferrets. Valvular (heart-valve) disease and, less commonly, hypertrophic cardiomyopathy are also seen. All of these tend to appear in middle-aged and older ferrets.",
  },
  {
    question: 'What are the early signs of heart disease in a ferret?',
    answer:
      "Early signs are subtle and easy to attribute to aging: reduced activity and stamina, sleeping more, mild weight or muscle loss, and occasional faster or labored breathing after exertion. As disease advances, owners may notice a persistent cough, an enlarged abdomen from fluid accumulation, pale or bluish gums, or fainting episodes. Any of these warrants an exotic-mammal vet visit.",
  },
  {
    question: 'How is ferret heart disease diagnosed?',
    answer:
      "The cornerstone is an echocardiogram (cardiac ultrasound), which lets the veterinarian measure chamber size and contractility directly. Chest radiographs assess heart silhouette size and check for fluid in or around the lungs, and an ECG evaluates rhythm. A vet may auscultate a murmur or arrhythmia at a routine exam first, which is one reason annual checkups matter in older ferrets.",
  },
  {
    question: 'Can ferret heart disease be cured?',
    answer:
      "Cardiomyopathy is generally managed rather than cured. With veterinarian-prescribed cardiac medications, many ferrets live comfortably for an extended period after diagnosis. The goal of treatment is to support heart function, control fluid accumulation, and maintain quality of life. Specific drugs and doses are determined by the treating veterinarian based on the echocardiogram findings.",
  },
  {
    question: 'Is heartworm a concern for ferrets?',
    answer:
      "Yes — ferrets are susceptible to heartworm, and because their hearts are small, even a low worm burden can be serious. In heartworm-endemic regions, veterinarians often recommend a vet-prescribed monthly preventive. Prevention is far safer than treatment in this species, so discuss regional risk and an appropriate preventive with your ferret's vet.",
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(articleSchema, medSchema, faqSchema)

export default function FerretHeartDiseasePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Ferret Heart Disease',
          subtitle:
            'Cardiomyopathy is a leading cause of decline in older ferrets, and its early signs are easy to mistake for simple aging. Recognizing them early — and getting an echocardiogram — is what buys these ferrets comfortable time.',
          category: 'Ferret Health',
          authorName: 'Ferret.com Editorial',
          publishedAt: 'June 2026',
          readTime: '11 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Ferret Health', href: '/health' },
          { name: 'Heart Disease', href: '/health/heart-disease' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'TL;DR', href: '#tldr' },
                { label: 'Types of Heart Disease', href: '#types' },
                { label: 'Why It Hides', href: '#hides' },
                { label: 'Signs to Watch For', href: '#signs' },
                { label: 'Diagnosis', href: '#diagnosis' },
                { label: 'Management', href: '#management' },
                { label: 'Heartworm Prevention', href: '#heartworm' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Aging Ferret Care', href: '/health/aging-ferret-care' },
                { label: 'Emergency Warning Signs', href: '/health/emergency-warning-signs' },
                { label: 'Health Hub', href: '/health' },
              ]}
            />
            <CrossPortfolioCard currentSite="ferret-com" contentType="health" variant="sidebar" />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Health Notes"
              subtitle="Evidence-based ferret health, monthly."
              source="health-heart-disease"
            />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Health Hub', href: '/health' },
          { title: 'Aging Ferret Care', href: '/health/aging-ferret-care' },
          { title: 'Signs of Pain', href: '/health/signs-of-pain' },
          { title: 'Annual Checkup Guide', href: '/health/annual-checkup-guide' },
        ]}
>
        <div className="carloOS-article">
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-06-01"
          />

          <DropCap>
            Heart disease in ferrets rarely announces itself. The earliest
            change is usually nothing more dramatic than a ferret that naps a
            little longer, plays a little less, and tires faster on the stairs.
            Because those are exactly the changes we expect from an aging
            ferret, cardiac disease is frequently advanced by the time it is
            recognized — which is the strongest argument for taking subtle
            stamina changes seriously and asking a vet to listen to the heart.
          </DropCap>

          <h2 id="tldr">TL;DR</h2>
          <p>
            The most common heart disease in pet ferrets is dilated
            cardiomyopathy, a weakening and enlargement of the heart muscle;
            valvular disease and, less often, hypertrophic cardiomyopathy also
            occur. It typically appears in middle-aged to older ferrets, hides
            behind vague signs that mimic aging, and is diagnosed primarily by
            echocardiogram. It is managed — not cured — with
            veterinarian-prescribed cardiac medications, and many ferrets do
            well for a meaningful stretch after diagnosis. Heartworm prevention
            matters in endemic regions.
          </p>

          <h2 id="types">Types of Heart Disease in Ferrets</h2>
          <p>
            The exotic-mammal cardiology literature (Quesenberry &amp;
            Carpenter, <em>Ferrets, Rabbits, and Rodents</em>; cardiology
            reviews in the <em>Veterinary Clinics of North America: Exotic
            Animal Practice</em>) describes a few main patterns:
          </p>
          <ul>
            <li>
              <strong>Dilated cardiomyopathy (DCM).</strong> The most common
              form. The heart muscle weakens, the chambers enlarge, and the
              pump becomes inefficient, eventually leading to congestive signs
              such as fluid in or around the lungs and abdomen.
            </li>
            <li>
              <strong>Valvular (degenerative valve) disease.</strong>{' '}
              Thickening of the heart valves produces a murmur and, over time,
              leakage that strains the heart.
            </li>
            <li>
              <strong>Hypertrophic cardiomyopathy.</strong> Less common in
              ferrets; the heart muscle thickens and stiffens, impairing
              filling.
            </li>
            <li>
              <strong>Arrhythmias.</strong> Abnormal rhythms can occur on their
              own or alongside structural disease and may cause weakness or
              fainting.
            </li>
          </ul>

          <h2 id="hides">Why It Hides</h2>
          <p>
            Ferrets are small, sleep a great deal normally, and instinctively
            mask weakness — a combination that makes early cardiac decline easy
            to miss. A ferret in early heart failure may simply look like a
            ferret that is getting old. This overlap with normal aging is why
            the condition is closely tied to senior-ferret care; our{' '}
            <a href="/health/aging-ferret-care">aging ferret care</a> guide
            covers the broader pattern of changes to track in ferrets over
            five.
          </p>

          <h2 id="signs">Signs to Watch For</h2>
          <ul>
            <li>
              <strong>Reduced activity and stamina</strong> — playing less,
              tiring quickly, sleeping more than usual for that individual.
            </li>
            <li>
              <strong>Faster or labored breathing</strong>, especially after
              mild exertion or at rest as disease advances.
            </li>
            <li>
              <strong>Coughing</strong> — less common in ferrets than dogs but
              significant when present.
            </li>
            <li>
              <strong>Abdominal enlargement</strong> from fluid accumulation
              (ascites).
            </li>
            <li>
              <strong>Pale or bluish gums</strong>, weakness, or fainting
              (syncope) — signs of poor cardiac output that warrant urgent
              veterinary attention.
            </li>
          </ul>

          <CalloutBox variant="warning" title="Labored breathing is an emergency">
            <p>
              A ferret breathing hard at rest, breathing with its mouth open,
              or showing blue-tinged gums needs emergency care, not a
              scheduled appointment. Congestive heart failure with fluid in the
              chest is life-threatening. See our{' '}
              <a href="/health/emergency-warning-signs">emergency warning
              signs</a> reference for the full list of can&apos;t-wait
              symptoms.
            </p>
          </CalloutBox>

          <h2 id="diagnosis">Diagnosis</h2>
          <p>
            The defining test is an <strong>echocardiogram</strong> — an
            ultrasound of the heart that lets the veterinarian directly measure
            chamber dimensions, wall thickness, and how forcefully the heart
            contracts. This distinguishes dilated from hypertrophic disease and
            grades severity. Supporting tests include:
          </p>
          <ul>
            <li>
              <strong>Chest radiographs</strong> to assess heart silhouette
              size and look for fluid in the lungs or chest cavity.
            </li>
            <li>
              <strong>ECG</strong> to characterize any arrhythmia.
            </li>
            <li>
              <strong>Blood pressure and bloodwork</strong> to evaluate
              contributing factors and overall status.
            </li>
          </ul>
          <p>
            Often the first hint comes from a routine physical exam, when a vet
            hears a murmur or an irregular rhythm — another reason annual exams
            in older ferrets earn their keep. Bring a phone video of any
            episode of labored breathing or collapse; it genuinely helps the
            clinician (see <a href="/health/vet-visit-prep">vet visit prep</a>).
          </p>

          <h2 id="management">Management</h2>
          <p>
            Cardiomyopathy in ferrets is managed rather than cured. Treatment
            uses the same families of cardiac drugs employed in dogs and cats —
            agents that strengthen contraction, reduce fluid overload, and ease
            the workload on the heart. The specific medications, combinations,
            and doses are determined by the treating veterinarian based on the
            echocardiogram and the individual ferret&apos;s response; this is
            not a place for owner experimentation.
          </p>
          <p>
            Beyond medication, management centers on monitoring: tracking weight
            and resting breathing rate at home, watching activity, and keeping
            recheck appointments so therapy can be adjusted as the disease
            evolves. Many ferrets enjoy a good quality of life for a meaningful
            period after diagnosis when the condition is caught before it
            becomes a crisis.
          </p>

          <h2 id="heartworm">Heartworm Prevention</h2>
          <p>
            Ferrets are susceptible to heartworm disease, and because the ferret
            heart is so small, even a single adult worm can have an outsized
            effect. Treatment of established heartworm infection in ferrets is
            risky, so the emphasis is firmly on prevention. In heartworm-endemic
            areas, veterinarians commonly recommend a vet-prescribed monthly
            preventive. Whether your ferret needs one depends on regional
            mosquito exposure — a conversation to have with your ferret&apos;s
            veterinarian.
          </p>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <ArticleSourcesList sources={SOURCES} />
          <p className="text-sm text-brand-text-light">
            This page is general clinical information about ferret heart
            disease. It is not individualized veterinary advice. Cardiac
            medication selection and dosing are veterinary decisions and require
            evaluation by a clinician familiar with ferrets — ideally an AEMV
            member or an ABVP diplomate in Exotic Companion Mammal practice.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}

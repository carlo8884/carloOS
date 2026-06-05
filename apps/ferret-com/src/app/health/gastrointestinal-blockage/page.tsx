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
    label: "Quesenberry KE, Carpenter JW (eds.). Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery. 4th ed. Saunders/Elsevier — ferret gastrointestinal and soft-tissue surgery chapters covering foreign-body obstruction.",
    url: "https://www.elsevier.com/books/ferrets-rabbits-and-rodents/quesenberry/978-1-4160-6621-7",
    publisher: "Elsevier/Saunders",
  },
  {
    label: "Merck Veterinary Manual — Digestive Diseases of Ferrets: foreign-body obstruction, diagnosis, and surgical management",
    url: "https://www.merckvetmanual.com/exotic-and-laboratory-animals/ferrets/digestive-diseases-of-ferrets",
    publisher: "Merck Veterinary Manual",
  },
  {
    label: "Association of Exotic Mammal Veterinarians (AEMV) — exotic-mammal surgical standards and ferret anesthesia guidelines",
    url: "https://aemv.org",
    publisher: "AEMV",
  },
  {
    label: "Journal of Exotic Pet Medicine — clinical reports on ferret foreign-body obstruction, trichobezoar, and enterotomy outcomes",
    url: "https://www.sciencedirect.com/journal/journal-of-exotic-pet-medicine",
    publisher: "Journal of Exotic Pet Medicine",
  },
]
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
  title: 'Ferret GI Blockage — Foreign Body & Hairball Emergency | Ferret.com',
  description:
    'GI blockage is a common ferret surgical emergency. Why ferrets swallow rubber, the warning signs, how it is diagnosed, and ferret-proofing that prevents it.',
  path: '/health/gastrointestinal-blockage',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Ferret Gastrointestinal Blockage',
  description:
    'Gastrointestinal foreign-body and trichobezoar obstruction in domestic ferrets — risk factors, warning signs, diagnosis, surgical management, and prevention.',
  url: 'https://ferret.com/health/gastrointestinal-blockage',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const medSchema = buildMedicalWebPageSchema({
  name: 'Ferret Gastrointestinal Blockage',
  description:
    'Clinical reference on gastrointestinal obstruction in domestic ferrets, including foreign bodies, hairballs, diagnosis, and prevention.',
  url: 'https://ferret.com/health/gastrointestinal-blockage',
  authorName: 'Ferret.com Editorial',
  lastReviewed: '2026-06-01',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://ferret.com/' },
    { name: 'Ferret Health', url: 'https://ferret.com/health' },
    { name: 'GI Blockage', url: 'https://ferret.com/health/gastrointestinal-blockage' },
  ],
})

const FAQS = [
  {
    question: 'Why do ferrets swallow non-food objects?',
    answer:
      "Ferrets are intensely curious and explore the world with their mouths, and many have a particular attraction to soft, chewable rubber and foam. They will gnaw and swallow pieces of earplugs, rubber bands, shoe soles, eraser tips, and foam toys. Because the ferret intestine is narrow, even a small piece of rubber can lodge and obstruct, which makes this one of the most common ferret surgical emergencies.",
  },
  {
    question: 'What are the warning signs of a blockage?',
    answer:
      "Classic signs are loss of appetite, lethargy, vomiting or retching, teeth-grinding (a sign of abdominal pain), pawing at the mouth, and a change in stool — often scant, tarry, or pencil-thin, or no stool at all. A ferret that suddenly stops eating and seems painful should be treated as a possible blockage and seen urgently, because obstruction is time-sensitive.",
  },
  {
    question: 'How is a GI blockage diagnosed?',
    answer:
      "Diagnosis combines the history and physical exam with imaging. A veterinarian may palpate a mass, and abdominal radiographs — sometimes with a contrast study — or ultrasound help locate the obstruction. Bloodwork assesses the ferret's overall stability. Because some foreign objects such as rubber do not show clearly on plain films, the clinical picture often drives the decision to explore surgically.",
  },
  {
    question: 'Is surgery always needed?',
    answer:
      "Many true obstructions require surgery to remove the object, because a fully lodged foreign body will not pass on its own and the intestine can be damaged the longer it sits. Some hairballs or partial obstructions caught early may be managed medically under veterinary supervision. The treating veterinarian decides based on the location, the degree of obstruction, and the ferret's condition.",
  },
  {
    question: 'How can I prevent blockages?',
    answer:
      "Ferret-proofing is the single most effective prevention: keep soft rubber and foam objects, small swallowable items, and chewable plastics out of reach, and supervise free-roam time. Choose ferret-safe toys without small or rubbery parts, and check toys regularly for damage. In long-haired ferrets and during heavy seasonal shedding, controlling hair ingestion through grooming also reduces hairball risk.",
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(articleSchema, medSchema, breadcrumbSchema, faqSchema)

export default function FerretGIBlockagePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Ferret Gastrointestinal Blockage',
          subtitle:
            'Ferrets explore with their teeth, love rubber, and have an intestine narrow enough that a swallowed earplug can become a surgical emergency. GI obstruction is common, time-sensitive, and largely preventable with disciplined ferret-proofing.',
          category: 'Ferret Health',
          authorName: 'Ferret.com Editorial',
          authorAvatar: '🦦',
          publishedAt: 'June 2026',
          readTime: '11 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Ferret Health', href: '/health' },
          { name: 'GI Blockage', href: '/health/gastrointestinal-blockage' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'TL;DR', href: '#tldr' },
                { label: 'Why Ferrets Are at Risk', href: '#risk' },
                { label: 'Warning Signs', href: '#signs' },
                { label: 'Diagnosis', href: '#diagnosis' },
                { label: 'Treatment', href: '#treatment' },
                { label: 'Ferret-Proofing', href: '#prevention' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Ferret Ulcers', href: '/health/ferret-ulcers' },
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
              source="health-gi-blockage"
            />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Health Hub', href: '/health' },
          { title: 'Emergency Warning Signs', href: '/health/emergency-warning-signs' },
          { title: 'Ferret-Proofing Your Home', href: '/care/ferret-proofing-your-home' },
          { title: 'Anesthesia & Surgery Risk', href: '/health/anesthesia-and-surgery-risk' },
        ]}
>
        <div className="carloOS-article">
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-06-01"
          />

          <DropCap>
            Ask an exotic-mammal surgeon what they remove from ferret intestines
            and the answers come fast: chunks of rubber earplug, foam from a
            chewed toy, a piece of a sneaker sole, a wad of cage-mate hair. The
            ferret&apos;s combination of relentless curiosity, a taste for soft
            rubber, and a narrow gut makes gastrointestinal obstruction one of
            the most common — and most time-sensitive — emergencies in the
            species.
          </DropCap>

          <h2 id="tldr">TL;DR</h2>
          <p>
            Gastrointestinal blockage in ferrets is usually caused by swallowed
            foreign objects (especially soft rubber and foam) or, less often,
            hairballs (trichobezoars). The ferret intestine is narrow, so even
            small items obstruct. Warning signs include not eating, lethargy,
            vomiting, teeth-grinding from pain, and abnormal or absent stool.
            It is a time-sensitive emergency that frequently requires surgery.
            Disciplined ferret-proofing prevents most cases.
          </p>

          <h2 id="risk">Why Ferrets Are at Risk</h2>
          <p>
            Two facts combine to make obstruction common. First, ferrets
            investigate everything by mouth and have a strong, almost compulsive
            attraction to soft, springy materials — rubber, foam, and certain
            plastics. Second, the ferret gastrointestinal tract is narrow and
            short, so an object that a larger animal might pass can wedge in a
            ferret. The exotic-mammal references (Quesenberry &amp; Carpenter,{' '}
            <em>Ferrets, Rabbits, and Rodents</em>) list foreign-body
            obstruction among the most frequent ferret surgical presentations.
          </p>
          <p>
            Hairballs are a second mechanism. Ferrets groom themselves and
            cage-mates and cannot vomit hair as readily as cats; during heavy
            seasonal shedding, ingested hair can accumulate into a
            trichobezoar that obstructs the stomach or intestine.
          </p>

          <CalloutBox variant="tip" title="The usual suspects">
            <p>
              The objects that most often cause ferret blockages are soft and
              chewable: foam earplugs, rubber bands and erasers, foam or rubber
              toy parts, shoe insoles, silicone earbud tips, and pieces of soft
              plastic. If it is squishy and bite-sized, assume a ferret will try
              to eat it.
            </p>
          </CalloutBox>

          <h2 id="signs">Warning Signs</h2>
          <ul>
            <li>
              <strong>Sudden loss of appetite</strong> — often the first and
              most important sign in a normally food-motivated species.
            </li>
            <li>
              <strong>Lethargy and hiding.</strong>
            </li>
            <li>
              <strong>Vomiting or retching</strong>, sometimes repeatedly.
            </li>
            <li>
              <strong>Teeth-grinding (bruxism)</strong> and pawing at the mouth
              — reliable indicators of abdominal pain or nausea in ferrets.
            </li>
            <li>
              <strong>Abnormal stool</strong> — scant, tarry, pencil-thin, or
              absent. Tarry, dark stool also raises concern for{' '}
              <a href="/health/ferret-ulcers">gastric ulceration</a>, which can
              accompany obstruction.
            </li>
            <li>
              <strong>Dehydration and weakness</strong> as the situation
              progresses.
            </li>
          </ul>

          <CalloutBox variant="warning" title="This is time-sensitive">
            <p>
              A ferret that stops eating and shows signs of abdominal pain
              should be seen the same day. An obstruction does not improve on
              its own, and a trapped object can cut off blood supply to a
              section of intestine — a complication that turns a manageable
              surgery into a life-threatening one. When in doubt, treat
              not-eating-plus-pain as an emergency (see{' '}
              <a href="/health/emergency-warning-signs">emergency warning
              signs</a>).
            </p>
          </CalloutBox>

          <h2 id="diagnosis">Diagnosis</h2>
          <p>
            A veterinarian starts with the history — recent access to chewable
            objects, a missing toy part, a known shedding season — and a careful
            abdominal palpation, since a foreign body or hairball can sometimes
            be felt directly. Imaging confirms and localizes the problem:
          </p>
          <ul>
            <li>
              <strong>Abdominal radiographs</strong>, sometimes with a contrast
              study to outline the obstruction, since rubber and foam are not
              always visible on plain films.
            </li>
            <li>
              <strong>Ultrasound</strong> to assess the bowel and look for
              evidence of obstruction.
            </li>
            <li>
              <strong>Bloodwork</strong> to gauge hydration, electrolytes, and
              overall stability before any anesthesia.
            </li>
          </ul>
          <p>
            Because not every obstruction is visible on imaging, an experienced
            clinician will sometimes recommend surgical exploration based on a
            strong clinical picture rather than waiting for a perfect picture
            while the ferret declines.
          </p>

          <h2 id="treatment">Treatment</h2>
          <p>
            Most true obstructions are treated surgically. The procedure
            involves stabilizing the ferret, anesthesia, and a laparotomy to
            locate and remove the object, with the surgeon assessing the
            intestine for any damaged tissue that must be resected. Anesthesia
            in ferrets carries species-specific considerations — covered in our{' '}
            <a href="/health/anesthesia-and-surgery-risk">anesthesia and
            surgery risk</a> reference — which is part of why prompt, stable
            presentation matters.
          </p>
          <p>
            Some partial obstructions or early hairballs may be managed medically
            under close veterinary supervision. That decision belongs to the
            treating veterinarian; it is not safe to wait at home hoping an
            object passes. Post-operative care includes pain control and a
            staged return to feeding, with the analgesic agents and doses
            chosen by the veterinarian.
          </p>

          <h2 id="prevention">Ferret-Proofing That Actually Works</h2>
          <p>
            Prevention is overwhelmingly the best medicine here, because surgery
            is the alternative. The core habits:
          </p>
          <ul>
            <li>
              <strong>Remove soft rubber and foam from reach.</strong> Earplugs,
              erasers, foam packaging, silicone earbud tips, and rubber bands
              are top offenders.
            </li>
            <li>
              <strong>Supervise free-roam time</strong> and ferret-proof the
              spaces a ferret can access — under furniture, behind appliances,
              along baseboards.
            </li>
            <li>
              <strong>Choose ferret-safe toys</strong> without small or chewable
              rubber parts, and inspect them regularly, retiring any that are
              damaged.
            </li>
            <li>
              <strong>Groom during heavy shedding</strong> to reduce ingested
              hair and the trichobezoar risk.
            </li>
          </ul>
          <p>
            The rest of the ferret health library — including the related
            stomach-ulcer reference — is organized at the{' '}
            <a href="/health">health hub</a>.
          </p>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <ArticleSourcesList sources={SOURCES} />
          <p className="text-sm text-brand-text-light">
            This page is general clinical information about gastrointestinal
            obstruction in ferrets. It is not individualized veterinary advice.
            The decision to operate and all anesthetic and analgesic choices are
            veterinary decisions requiring a clinician familiar with ferrets —
            ideally an AEMV member or an ABVP diplomate in Exotic Companion
            Mammal practice.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}

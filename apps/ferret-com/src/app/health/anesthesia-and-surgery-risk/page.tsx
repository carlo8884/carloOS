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
    label: "Quesenberry KE, Carpenter JW (eds.). Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery. 4th ed. Saunders/Elsevier — ferret anesthesia, surgical protocols, and complication-risk chapters.",
    url: "https://www.elsevier.com/books/ferrets-rabbits-and-rodents/quesenberry/978-1-4160-6621-7",
    publisher: "Elsevier/Saunders",
  },
  {
    label: "Merck Veterinary Manual — Anesthesia and Analgesia for Exotic Mammals: ferret-specific pre-anesthetic fasting, induction, and monitoring considerations",
    url: "https://www.merckvetmanual.com/exotic-and-laboratory-animals/ferrets/routine-health-care-of-ferrets",
    publisher: "Merck Veterinary Manual",
  },
  {
    label: "Association of Exotic Mammal Veterinarians (AEMV) — anesthesia standards and continuing-education resources for exotic-mammal practitioners",
    url: "https://aemv.org",
    publisher: "AEMV",
  },
  {
    label: "Journal of Exotic Pet Medicine — clinical reports on ferret anesthetic management, complication rates, and perioperative protocols",
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
  title: 'Ferret Anesthesia & Surgery Risk — Fasting & Monitoring | Ferret.com',
  description:
    'Ferret anesthesia carries species-specific risks. Why long fasting is dangerous, blood-sugar and temperature control, monitoring, and choosing a clinic.',
  path: '/health/anesthesia-and-surgery-risk',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Ferret Anesthesia and Surgery Risk',
  description:
    'Anesthesia and perioperative risk in domestic ferrets — short-fast rules, blood-sugar and temperature management, monitoring, and choosing an experienced clinic.',
  url: 'https://ferret.com/health/anesthesia-and-surgery-risk',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',

  citation: SOURCES,
})

const medSchema = buildMedicalWebPageSchema({
  name: 'Ferret Anesthesia and Surgery Risk',
  description:
    'Clinical reference on anesthesia and perioperative risk in domestic ferrets, including fasting, monitoring, and clinic selection.',
  url: 'https://ferret.com/health/anesthesia-and-surgery-risk',
  authorName: 'Ferret.com Editorial',
  lastReviewed: '2026-06-01',
})


const FAQS = [
  {
    question: 'Is anesthesia riskier in ferrets than in dogs and cats?',
    answer:
      "Ferret anesthesia carries species-specific considerations that make experience matter more than in routine dog or cat anesthesia. Ferrets are small, lose body heat quickly, are prone to low blood sugar, and have a narrow margin for error. With a ferret-experienced team, appropriate monitoring, and modern inhalant anesthetics, most healthy ferrets tolerate anesthesia well — but the right setup is not optional.",
  },
  {
    question: 'Why is a long pre-surgery fast dangerous for ferrets?',
    answer:
      "Ferrets have a rapid metabolism and a high baseline risk of insulinoma, a tumor that causes low blood sugar. A long fast can precipitate hypoglycemia before surgery even begins. For this reason, ferrets are typically fasted only a few hours before anesthesia rather than overnight. The exact fasting time is set by the veterinarian based on the procedure and the individual ferret.",
  },
  {
    question: 'What monitoring should a ferret have during anesthesia?',
    answer:
      "Appropriate monitoring during ferret anesthesia generally includes pulse oximetry, ECG, temperature, and capnography where available, along with active body-temperature support to prevent the rapid heat loss small animals experience. Blood glucose may be checked in ferrets at risk of hypoglycemia. A dedicated person watching these parameters throughout is part of a safe setup.",
  },
  {
    question: 'How do I choose a clinic for ferret surgery?',
    answer:
      "Look for an exotic-mammal or exotic-companion-mammal practice — an AEMV member clinic or an ABVP diplomate in Exotic Companion Mammal practice is a strong signal. Ask whether they routinely anesthetize ferrets, what monitoring they use, and how they manage blood sugar and temperature. A clinic that handles ferrets often will answer these comfortably.",
  },
  {
    question: 'What should I expect before and after surgery?',
    answer:
      "Beforehand, the vet typically performs a physical exam and pre-anesthetic bloodwork to assess organ function and screen for issues such as low blood sugar. Afterward, ferrets are kept warm, monitored as they recover, and given veterinarian-prescribed pain control. Most ferrets recover quickly from routine procedures and are eating soon after, which itself helps stabilize blood sugar.",
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(articleSchema, medSchema, faqSchema)

export default function FerretAnesthesiaRiskPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Ferret Anesthesia & Surgery Risk',
          subtitle:
            'Ferrets are not small dogs. They cool fast, run low on blood sugar fast, and tolerate error poorly under anesthesia — which is exactly why a ferret-experienced surgical team, short fasting, and real monitoring turn a daunting procedure into a routine one.',
          category: 'Ferret Health',
          authorName: 'Ferret.com Editorial',
          publishedAt: 'June 2026',
          readTime: '11 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Ferret Health', href: '/health' },
          { name: 'Anesthesia & Surgery Risk', href: '/health/anesthesia-and-surgery-risk' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'TL;DR', href: '#tldr' },
                { label: 'Why Ferrets Are Different', href: '#different' },
                { label: 'The Short-Fast Rule', href: '#fasting' },
                { label: 'Blood Sugar & Temperature', href: '#homeostasis' },
                { label: 'Monitoring', href: '#monitoring' },
                { label: 'Choosing a Clinic', href: '#clinic' },
                { label: 'Before & After', href: '#perioperative' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Spaying & Neutering', href: '/health/spaying-and-neutering' },
                { label: 'GI Blockage', href: '/health/gastrointestinal-blockage' },
                { label: 'Health Hub', href: '/health' },
              ]}
            />
            <CrossPortfolioCard currentSite="ferret-com" contentType="health" variant="sidebar" />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Health Notes"
              subtitle="Evidence-based ferret health, monthly."
              source="health-anesthesia-risk"
            />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Health Hub', href: '/health' },
          { title: 'Adrenal Disease', href: '/health/adrenal-disease' },
          { title: 'Spaying & Neutering', href: '/health/spaying-and-neutering' },
          { title: 'Find an Exotic Vet', href: '/find-an-exotic-vet' },
        ]}
>
        <div className="carloOS-article">
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-06-01"
          />

          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the ferret anesthesia-risk checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Ferret anesthesia-risk checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the laminated-ferret-short-fast-chart,
              fridge-glucose-temp-card, and
              mustelid-anesthesia-clinic-handbook notes
              that match the short-fast-map,
              glucose-temp-log, and
              quesenberry-aemv-clinic-grounding copy on this
              page — a laminated ferret short-fast chart
              so the few-hours / never-overnight / ask-the-clinic
              map is posted on the fridge (not a bruxism-map
              chart, not a coffee-grounds chart, not a
              stamina-map chart), a ferret fridge glucose-temp
              card so heat-loss / blood-sugar / eat-soon notes
              are labeled on the fridge (not a baseline-log
              card, not a household-treat card, not a
              breathing-rate card), and a mustelid
              anesthesia-clinic handbook so the Quesenberry /
              AEMV ferret-experienced-team grounding is a
              physical kitchen book (not a pain-sign handbook,
              not an otodectes-swab handbook, not a cardio-echo
              handbook). Educational kitchen checklist, not a
              ranked clinic list, not a first-aid-kit hop, and
              not a substitute for an exotic-mammal
              veterinarian. Ferret.com does not sell insurance.
              Aging pages stay held. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="ferret-com"
              title="Ferret anesthesia-risk checklist"
              subtitle="Email the short-fast-chart, fridge glucose-temp card, and anesthesia-clinic-handbook notes. No spam."
              ctaText="Email my ferret anesthesia-risk checklist"
              source="health-anesthesia-risk-under-hero"
            />
          </div>

          <DropCap>
            Sooner or later most ferrets face anesthesia — for a dental
            cleaning, a spay or neuter, a foreign-body surgery, a tumor removal.
            The good news is that ferret anesthesia is routine in experienced
            hands. The reason it deserves a careful page is that ferrets break
            several of the rules that make dog and cat anesthesia forgiving:
            they cool quickly, they run out of blood sugar quickly, and their
            small size leaves a narrow margin for mistakes.
          </DropCap>

          <h2 id="tldr">TL;DR</h2>
          <p>
            Ferret anesthesia is generally safe in experienced hands but carries
            species-specific risks. Ferrets lose body heat fast, are prone to
            low blood sugar (especially given the high background rate of
            insulinoma), and have little margin for error. Two practical rules
            matter most: fast ferrets only a few hours before anesthesia (never
            overnight), and use a clinic that routinely anesthetizes ferrets
            with proper monitoring and temperature and blood-sugar support.
            Modern inhalant anesthetics and attentive monitoring make routine
            procedures low-drama.
          </p>

          <h2 id="different">Why Ferrets Are Different Under Anesthesia</h2>
          <p>
            The exotic-mammal anesthesia literature (Quesenberry &amp;
            Carpenter, <em>Ferrets, Rabbits, and Rodents</em>; anesthesia
            reviews in the <em>Veterinary Clinics of North America: Exotic
            Animal Practice</em>) highlights several features of the species:
          </p>
          <ul>
            <li>
              <strong>Small body, fast heat loss.</strong> A small animal has a
              large surface-area-to-mass ratio and cools rapidly under
              anesthesia, and hypothermia worsens recovery and increases risk.
            </li>
            <li>
              <strong>High metabolic rate, low glucose reserve.</strong> Ferrets
              burn through energy quickly and are prone to hypoglycemia,
              compounded by the species&apos; high baseline rate of insulinoma.
            </li>
            <li>
              <strong>Narrow margin.</strong> Their small size means doses and
              fluid volumes must be precise, and changes in vital signs need a
              fast, informed response.
            </li>
          </ul>

          <h2 id="fasting">The Short-Fast Rule</h2>
          <p>
            One of the most important ferret-specific instructions runs opposite
            to the overnight fast many owners expect from dog and cat surgery.
            Because ferrets have a fast metabolism and a high background risk of
            insulinoma, a prolonged fast can drop blood sugar dangerously before
            anesthesia even begins. As a result, ferrets are typically fasted
            only a few hours, not overnight. The exact time is set by the
            veterinarian and tailored to the procedure and the individual
            ferret.
          </p>
          <CalloutBox variant="warning" title="Do not overnight-fast a ferret without instructions">
            <p>
              If a clinic gives a ferret the same overnight-fast instruction it
              gives dogs and cats, that is a reason to ask questions. Prolonged
              fasting risks hypoglycemia in ferrets. Always follow the specific
              fasting time your ferret-experienced veterinarian provides.
            </p>
          </CalloutBox>

          <h2 id="homeostasis">Blood Sugar and Temperature</h2>
          <p>
            Two homeostatic variables dominate ferret anesthetic safety:
          </p>
          <ul>
            <li>
              <strong>Body temperature.</strong> Active warming — heated
              surfaces, warmed fluids, insulation — counters the rapid heat loss
              that small anesthetized animals experience. Maintaining temperature
              smooths recovery.
            </li>
            <li>
              <strong>Blood glucose.</strong> Because hypoglycemia is a live
              risk, blood sugar may be checked perioperatively in ferrets,
              especially those with known or suspected insulinoma, and supported
              as needed. Getting the ferret eating soon after recovery helps
              re-stabilize glucose.
            </li>
          </ul>
          <p>
            These are routine for a ferret-savvy team and easy to overlook for
            one that rarely sees the species — which is the whole argument for
            clinic selection below.
          </p>

          <h2 id="monitoring">Monitoring</h2>
          <p>
            Safe ferret anesthesia depends on watching the patient closely
            throughout. Appropriate monitoring generally includes pulse
            oximetry, ECG, temperature, and capnography where available, with a
            dedicated person tracking these parameters and ready to respond.
            Modern inhalant anesthetics such as isoflurane and sevoflurane,
            combined with this monitoring, are what make routine procedures
            predictable. This is the same standard applied to anesthetized
            dental work — see our dental-disease discussion of anesthetized
            cleanings for the parallel.
          </p>

          <h2 id="clinic">Choosing a Clinic</h2>
          <p>
            For any planned ferret surgery, the single biggest lever on safety
            is who performs it. Look for:
          </p>
          <ul>
            <li>
              <strong>An exotic-mammal practice</strong> — an AEMV (Association
              of Exotic Mammal Veterinarians) member clinic, or an ABVP
              diplomate in Exotic Companion Mammal practice.
            </li>
            <li>
              <strong>Routine ferret anesthesia.</strong> Ask directly how often
              they anesthetize ferrets and how they handle temperature and blood
              sugar.
            </li>
            <li>
              <strong>Clear monitoring.</strong> A clinic comfortable with the
              species will describe its monitoring without hesitation.
            </li>
          </ul>
          <p>
            Our <a href="/health/vet-visit-prep">vet visit prep</a> guide covers
            finding an exotic-mammal vet in more depth, and the full health
            library is at the <a href="/health">health hub</a>.
          </p>

          <h2 id="perioperative">Before and After Surgery</h2>
          <p>
            Beforehand, expect a physical exam and pre-anesthetic bloodwork to
            assess organ function and screen for problems such as low blood
            sugar. Afterward, the ferret is kept warm, watched as it wakes, and
            given veterinarian-prescribed pain control — the agent and dose are
            the vet&apos;s decision. Most ferrets recover quickly from routine
            procedures and are eating soon after, which itself supports their
            blood sugar and recovery. Procedures such as a{' '}
            <a href="/health/gastrointestinal-blockage">foreign-body
            surgery</a> or a <a href="/health/spaying-and-neutering">spay or
            neuter</a> all rest on this same anesthetic foundation.
          </p>

          <AffiliateDisclosure variant="inline" siteId="ferret-com" />

          {/* Money path — live amazon-brand search hops
              (laminated ferret short-fast chart /
              ferret fridge glucose-temp card /
              mustelid anesthesia-clinic handbook).
              No existing product hop to keep.
              Educational kitchen searches only; no Rx /
              vaccine / flea / heartworm / nsaid / aging hops.
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Unused vs health-hub /
              signs-of-pain / ear-mites / heart-disease hops.
              Directory import left untouched. Ferret
              aging stays held.
              Do not re-open #1165 / what-to-expect. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the ferret anesthesia-risk kitchen kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page short-fast-map,
              glucose-temp-log, and
              quesenberry-aemv-clinic-grounding copy — a
              laminated ferret short-fast chart, a
              ferret fridge glucose-temp card, and a
              mustelid anesthesia-clinic handbook.
              Educational kitchen searches only. They are
              not a ranked clinic list, they are not
              a health-hub / signs-of-pain / ear-mites hop,
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
                amazonHref="/go/amazon-brand/laminated+ferret+short+fast+chart?s=anesthesia-and-surgery-risk"
                amazonLabel="Browse laminated ferret short-fast charts on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/ferret+fridge+glucose+temp+card?s=anesthesia-and-surgery-risk"
                amazonLabel="Browse ferret fridge glucose-temp cards on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/mustelid+anesthesia+clinic+handbook?s=anesthesia-and-surgery-risk"
                amazonLabel="Browse mustelid anesthesia-clinic handbooks on Amazon →"
              />
            </div>
          </div>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <ArticleSourcesList sources={SOURCES} />
          <p className="text-sm text-brand-text-light">
            This page is general clinical information about ferret anesthesia
            and surgical risk. It is not individualized veterinary advice. All
            fasting instructions, anesthetic protocols, and analgesic choices
            are veterinary decisions requiring a clinician familiar with ferrets
            — ideally an AEMV member or an ABVP diplomate in Exotic Companion
            Mammal practice.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}

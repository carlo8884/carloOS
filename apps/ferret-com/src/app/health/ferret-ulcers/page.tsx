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
    label: "Quesenberry KE, Carpenter JW (eds.). Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery. 4th ed. Saunders/Elsevier — ferret gastrointestinal disease and Helicobacter mustelae chapters.",
    url: "https://www.elsevier.com/books/ferrets-rabbits-and-rodents/quesenberry/978-1-4160-6621-7",
    publisher: "Elsevier/Saunders",
  },
  {
    label: "Merck Veterinary Manual — Digestive Diseases of Ferrets: gastric ulceration, Helicobacter mustelae, and treatment approaches",
    url: "https://www.merckvetmanual.com/exotic-and-laboratory-animals/ferrets/digestive-diseases-of-ferrets",
    publisher: "Merck Veterinary Manual",
  },
  {
    label: "Association of Exotic Mammal Veterinarians (AEMV) — practitioner directory and continuing-education content on ferret gastrointestinal medicine",
    url: "https://aemv.org",
    publisher: "AEMV",
  },
  {
    label: "Journal of Exotic Pet Medicine — clinical reports on ferret gastric ulceration, Helicobacter infection, and the ferret H. pylori analogy",
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
  title: 'Ferret Stomach Ulcers — Helicobacter & Bruxism | Ferret.com',
  description:
    'Gastric ulcers in ferrets, often linked to Helicobacter mustelae. Teeth-grinding, dark tarry stool, the diagnostic workup, and why ulcers rarely travel alone.',
  path: '/health/ferret-ulcers',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Ferret Stomach Ulcers',
  description:
    'Gastric and gastrointestinal ulceration in domestic ferrets — Helicobacter mustelae, stress-related ulcers, clinical signs, diagnosis, and veterinary management.',
  url: 'https://ferret.com/health/ferret-ulcers',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',

  citation: SOURCES,
})

const medSchema = buildMedicalWebPageSchema({
  name: 'Ferret Stomach Ulcers',
  description:
    'Clinical reference on gastric ulceration in domestic ferrets, including Helicobacter mustelae, signs, diagnosis, and management.',
  url: 'https://ferret.com/health/ferret-ulcers',
  authorName: 'Ferret.com Editorial',
  lastReviewed: '2026-06-01',
})


const FAQS = [
  {
    question: 'What causes stomach ulcers in ferrets?',
    answer:
      "A major contributor is Helicobacter mustelae, a bacterium that colonizes the ferret stomach and is associated with gastritis and ulceration — the ferret counterpart of the H. pylori ulcers seen in people. Stress, other illnesses, and not eating can also drive or worsen ulcers. Ulcers frequently appear alongside other ferret conditions rather than in isolation.",
  },
  {
    question: 'What does teeth-grinding mean in a ferret?',
    answer:
      "Teeth-grinding (bruxism) is one of the most reliable signs of abdominal pain or nausea in ferrets, and it is a classic clue to gastric ulceration. A ferret that grinds its teeth, drools, paws at its mouth, and goes off its food should be evaluated for an ulcer or other abdominal problem. It is a meaningful sign, not a quirk.",
  },
  {
    question: 'Why is the stool dark or tarry?',
    answer:
      "Black, tarry stool (melena) indicates digested blood from bleeding higher in the gastrointestinal tract, which can occur with a bleeding ulcer. It is an important warning sign that warrants prompt veterinary attention, because significant ulcer bleeding can lead to anemia. Bring a stool sample or a clear photo to the appointment.",
  },
  {
    question: 'How are ferret ulcers diagnosed and treated?',
    answer:
      "Diagnosis combines the clinical signs with bloodwork, imaging to rule out other causes such as a foreign body, and sometimes endoscopy or biopsy. Treatment is veterinarian-directed and may combine acid-reducing medications, gastrointestinal protectants, and — when Helicobacter is implicated — a course of antibiotics. All drugs and doses are determined by the treating veterinarian.",
  },
  {
    question: 'Can I give my ferret human antacids?',
    answer:
      "No — do not medicate a ferret with human stomach remedies on your own. Dosing and drug choice in a small animal like a ferret are veterinary decisions, and some human products are inappropriate or unsafe. A ferret with suspected ulcer signs needs a vet, not a guess from the medicine cabinet.",
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(articleSchema, medSchema, faqSchema)

export default function FerretUlcersPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Ferret Stomach Ulcers',
          subtitle:
            'Gastric ulcers are a common, painful, and under-recognized ferret problem — often driven by Helicobacter mustelae and easy to miss until the teeth-grinding and tarry stool appear. They rarely travel alone, which is why they are worth understanding.',
          category: 'Ferret Health',
          authorName: 'Ferret.com Editorial',
          publishedAt: 'June 2026',
          readTime: '10 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Ferret Health', href: '/health' },
          { name: 'Stomach Ulcers', href: '/health/ferret-ulcers' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'TL;DR', href: '#tldr' },
                { label: 'What Causes Them', href: '#causes' },
                { label: 'Signs to Watch For', href: '#signs' },
                { label: 'Diagnosis', href: '#diagnosis' },
                { label: 'Treatment', href: '#treatment' },
                { label: 'Why Ulcers Rarely Travel Alone', href: '#comorbid' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'GI Blockage', href: '/health/gastrointestinal-blockage' },
                { label: 'Vet Visit Prep', href: '/health/vet-visit-prep' },
                { label: 'Health Hub', href: '/health' },
              ]}
            />
            <CrossPortfolioCard currentSite="ferret-com" contentType="health" variant="sidebar" />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Health Notes"
              subtitle="Evidence-based ferret health, monthly."
              source="health-ferret-ulcers"
            />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Health Hub', href: '/health' },
          { title: 'Ferret Diarrhea Causes', href: '/health/ferret-diarrhea-causes' },
          { title: 'Gastrointestinal Blockage', href: '/health/gastrointestinal-blockage' },
          { title: 'Signs of Pain', href: '/health/signs-of-pain' },
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
              Keep the ferret ulcer checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Ferret ulcer checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the laminated-ferret-tarry-stool-chart,
              fridge-bruxism-watch-card, and
              mustelid-helicobacter-ulcer-handbook notes
              that match the tarry-stool-map,
              bruxism-watch-log, and
              quesenberry-aemv-ulcer-grounding copy on this
              page — a laminated ferret tarry-stool chart
              so the dark-tarry / off-food / hunched map is
              posted on the fridge (not a jill-heat chart,
              not a stool-clue chart, not a lump-weight
              chart), a ferret fridge bruxism-watch card
              so teeth-grind / drool / paw-at-mouth notes
              are labeled on the fridge (not a musk-vs-gland
              card, not a dehydrate-watch card, not a
              senior-cbc card), and a mustelid
              helicobacter-ulcer handbook so the Quesenberry /
              AEMV H-mustelae-and-rarely-alone grounding is a
              physical kitchen book (not a spay-timing
              handbook, not an enteritis-clue handbook, not a
              lymphoma-workup handbook). Educational kitchen
              checklist, not a ranked clinic list, not a
              first-aid-kit hop, and not a substitute for an
              exotic-mammal veterinarian. Ferret.com does not
              sell insurance. Aging pages stay held. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="ferret-com"
              title="Ferret ulcer checklist"
              subtitle="Email the tarry-stool-chart, fridge bruxism-watch card, and helicobacter-ulcer-handbook notes. No spam."
              ctaText="Email my ferret ulcer checklist"
              source="health-ferret-ulcers-under-hero"
            />
          </div>

          <DropCap>
            A ferret with a stomach ulcer often tells you in a language that is
            easy to overlook: a grinding of the teeth while it lies hunched, a
            sudden disinterest in food, a flake of dark tarry stool in the
            litter pan. Gastric ulceration is one of the more common and more
            painful ferret gastrointestinal problems, and — because a bacterium
            called <em>Helicobacter mustelae</em> sits behind many cases — it
            is the closest ferret analog to the human ulcer story.
          </DropCap>

          <h2 id="tldr">TL;DR</h2>
          <p>
            Gastric ulcers are common in ferrets and frequently linked to{' '}
            <em>Helicobacter mustelae</em>, a stomach bacterium analogous to{' '}
            <em>H. pylori</em> in people; stress and concurrent illness also
            contribute. The hallmark signs are teeth-grinding from pain, loss
            of appetite, drooling, and dark tarry stool (melena) from bleeding.
            Diagnosis uses clinical signs plus bloodwork and imaging.
            Treatment is veterinarian-directed — acid reducers, protectants,
            and antibiotics when <em>Helicobacter</em> is involved — with all
            drugs and doses set by the vet.
          </p>

          <h2 id="causes">What Causes Them</h2>
          <p>
            The central player in ferret ulcers is <em>Helicobacter
            mustelae</em>, a spiral bacterium that colonizes the ferret stomach
            and is strongly associated with chronic gastritis and ulceration.
            The exotic-mammal literature (Quesenberry &amp; Carpenter,{' '}
            <em>Ferrets, Rabbits, and Rodents</em>) treats it much as human
            medicine treats <em>H. pylori</em> — a major, treatable contributor
            to ulcer disease. Other drivers include:
          </p>
          <ul>
            <li>
              <strong>Stress</strong> — transport, illness, environmental
              change, and the metabolic stress of another disease can all
              promote ulceration.
            </li>
            <li>
              <strong>Anorexia.</strong> A ferret that stops eating for any
              reason is more prone to ulcers, creating a vicious cycle where the
              ulcer pain further suppresses appetite.
            </li>
            <li>
              <strong>Concurrent disease.</strong> Ulcers commonly accompany
              other conditions rather than appearing in isolation.
            </li>
          </ul>

          <h2 id="signs">Signs to Watch For</h2>
          <ul>
            <li>
              <strong>Teeth-grinding (bruxism)</strong> — the most telling sign
              of abdominal pain or nausea in ferrets.
            </li>
            <li>
              <strong>Loss of appetite</strong> and weight loss.
            </li>
            <li>
              <strong>Drooling and pawing at the mouth</strong>, often from
              nausea.
            </li>
            <li>
              <strong>Dark, tarry stool (melena)</strong> — digested blood from
              a bleeding ulcer, and an important red flag.
            </li>
            <li>
              <strong>Pale gums, lethargy, or weakness</strong> — possible signs
              of significant blood loss and anemia.
            </li>
          </ul>

          <CalloutBox variant="warning" title="Tarry stool deserves a prompt visit">
            <p>
              Black, tarry stool means digested blood, and a bleeding ulcer can
              cause meaningful anemia in an animal as small as a ferret. Paired
              with teeth-grinding and not eating, it is a reason to call the vet
              promptly rather than monitor at home. See our{' '}
              <a href="/health/emergency-warning-signs">emergency warning
              signs</a> reference for the broader can&apos;t-wait list.
            </p>
          </CalloutBox>

          <h2 id="diagnosis">Diagnosis</h2>
          <p>
            Because the signs of ulcers overlap with other abdominal problems —
            notably <a href="/health/gastrointestinal-blockage">foreign-body
            obstruction</a> — diagnosis is partly about ruling out look-alikes.
            A veterinary workup typically includes:
          </p>
          <ul>
            <li>
              <strong>Bloodwork</strong> to check for anemia from blood loss and
              to assess overall status.
            </li>
            <li>
              <strong>Abdominal imaging</strong> (radiographs, often with
              contrast, and/or ultrasound) to evaluate the stomach and exclude
              an obstruction.
            </li>
            <li>
              <strong>Endoscopy or biopsy</strong> in selected cases, which can
              visualize ulcers directly and sample tissue for{' '}
              <em>Helicobacter</em>.
            </li>
          </ul>
          <p>
            A clear history — appetite, stool color, teeth-grinding, recent
            stressors — speeds this up. Our <a href="/health/vet-visit-prep">vet
            visit prep</a> guide covers what to bring and what to expect.
          </p>

          <h2 id="treatment">Treatment</h2>
          <p>
            Ulcer treatment in ferrets is veterinarian-directed and usually
            combines several approaches: medications that reduce stomach acid,
            gastrointestinal protectants that coat and shield the ulcer, and —
            when <em>Helicobacter mustelae</em> is implicated — a course of
            antibiotics aimed at the bacterium, often as a multi-drug regimen
            analogous to human <em>H. pylori</em> therapy. Supporting the ferret
            through the recovery, including keeping it eating and hydrated, is a
            core part of care.
          </p>
          <p>
            The specific drugs, combinations, and doses are determined entirely
            by the treating veterinarian; this is not a condition to self-treat
            with human stomach remedies, several of which are inappropriate for
            a ferret. The right move is a diagnosis and a tailored plan.
          </p>

          <h2 id="comorbid">Why Ulcers Rarely Travel Alone</h2>
          <p>
            One practical reason ulcers matter so much in ferrets is that they
            tend to ride alongside other illnesses. A ferret stressed by{' '}
            <a href="/health/heart-disease">heart disease</a>, an
            insulinoma, a blockage, or any condition that suppresses appetite
            is at higher risk of ulceration — and the ulcer pain then deepens
            the original problem by driving the ferret further off food.
            Recognizing and treating the ulcer often unlocks progress on the
            underlying disease. The full ferret health library is organized at
            the <a href="/health">health hub</a>.
          </p>

          <AffiliateDisclosure variant="inline" siteId="ferret-com" />

          {/* Money path — live amazon-brand search hops
              (laminated ferret tarry-stool chart /
              ferret fridge bruxism-watch card /
              mustelid helicobacter-ulcer handbook).
              No existing product hop to keep.
              Educational kitchen searches only; no Rx /
              vaccine / flea / heartworm / nsaid / aging hops.
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Unused vs health-hub /
              spay-neuter / diarrhea / lymphoma hops.
              Directory import left untouched. Ferret
              aging stays held.
              Do not re-open #1165 / what-to-expect. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the ferret ulcer kitchen kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page tarry-stool-map,
              bruxism-watch-log, and
              quesenberry-aemv-ulcer-grounding copy — a
              laminated ferret tarry-stool chart, a
              ferret fridge bruxism-watch card, and a
              mustelid helicobacter-ulcer handbook.
              Educational kitchen searches only. They are
              not a ranked clinic list, they are not
              a health-hub / spay-neuter / diarrhea hop,
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
                amazonHref="/go/amazon-brand/laminated+ferret+tarry+stool+chart?s=ferret-ulcers"
                amazonLabel="Browse laminated ferret tarry-stool charts on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/ferret+fridge+bruxism+watch+card?s=ferret-ulcers"
                amazonLabel="Browse ferret fridge bruxism-watch cards on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/mustelid+helicobacter+ulcer+handbook?s=ferret-ulcers"
                amazonLabel="Browse mustelid helicobacter-ulcer handbooks on Amazon →"
              />
            </div>
          </div>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <ArticleSourcesList sources={SOURCES} />
          <p className="text-sm text-brand-text-light">
            This page is general clinical information about gastric ulceration
            in ferrets. It is not individualized veterinary advice. All
            medication choices and doses are veterinary decisions requiring a
            clinician familiar with ferrets — ideally an AEMV member or an ABVP
            diplomate in Exotic Companion Mammal practice.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}

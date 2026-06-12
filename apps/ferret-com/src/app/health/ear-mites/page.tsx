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
    label: "Quesenberry KE, Carpenter JW (eds.). Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery. 4th ed. Saunders/Elsevier — ferret dermatology and ectoparasite chapters.",
    url: "https://www.elsevier.com/books/ferrets-rabbits-and-rodents/quesenberry/978-1-4160-6621-7",
    publisher: "Elsevier/Saunders",
  },
  {
    label: "Merck Veterinary Manual — Ear Mites in Ferrets: Otodectes cynotis diagnosis, treatment, and household decontamination",
    url: "https://www.merckvetmanual.com/exotic-and-laboratory-animals/ferrets/musculoskeletal-and-neurologic-diseases-of-ferrets",
    publisher: "Merck Veterinary Manual",
  },
  {
    label: "Association of Exotic Mammal Veterinarians (AEMV) — ferret dermatology and ectoparasitology continuing-education resources",
    url: "https://aemv.org",
    publisher: "AEMV",
  },
  {
    label: "Journal of Exotic Pet Medicine — clinical reports on ferret ear-mite diagnosis and acaricide management",
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
  title: 'Ferret Ear Mites — Otodectes, Diagnosis & Treatment | Ferret.com',
  description:
    'Otodectes cynotis is the most common external parasite in ferrets. Dark waxy debris, head-shaking, ear-swab diagnosis, and treating the whole household.',
  path: '/health/ear-mites',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Ferret Ear Mites',
  description:
    'Ear mite (Otodectes cynotis) infestation in domestic ferrets — clinical signs, ear-swab diagnosis, treatment with vet-prescribed acaricides, and household management.',
  url: 'https://ferret.com/health/ear-mites',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const medSchema = buildMedicalWebPageSchema({
  name: 'Ferret Ear Mites',
  description:
    'Clinical reference on Otodectes cynotis ear mite infestation in domestic ferrets, including diagnosis, treatment, and prevention.',
  url: 'https://ferret.com/health/ear-mites',
  authorName: 'Ferret.com Editorial',
  lastReviewed: '2026-06-01',
})


const FAQS = [
  {
    question: 'How can I tell ear mites from normal ferret ear wax?',
    answer:
      "Healthy ferret cerumen is reddish-brown and present in small amounts; it is normal and does not need aggressive cleaning. Ear-mite debris is darker, drier, and more abundant — often described as resembling coffee grounds — and is usually accompanied by head-shaking and scratching. The only reliable way to tell them apart is an ear-swab examined under a microscope, which your vet can do in minutes.",
  },
  {
    question: 'Are ferret ear mites contagious to my dog or cat?',
    answer:
      "Yes. Otodectes cynotis is the same mite that infests dogs and cats, and it moves freely between species in a shared household. If one pet is diagnosed, every ferret, dog, and cat in the home is typically treated at the same time even if they show no signs, because asymptomatic carriers reinfest the treated animals.",
  },
  {
    question: 'Can ear mites cause permanent damage?',
    answer:
      "Heavy, chronic infestations can lead to secondary bacterial or yeast otitis, and in severe untreated cases the inflammation can extend toward the middle ear. Most ferrets caught early recover completely once the mites are cleared and any secondary infection is treated. This is one reason an itchy, head-shaking ferret warrants a vet visit rather than home guesswork.",
  },
  {
    question: 'Is it safe to use over-the-counter cat ear-mite drops?',
    answer:
      "Ferrets are small and sensitive to insecticide overdose, and many over-the-counter products are not labeled for ferrets. Acaricide choice and dosing should be set by a veterinarian who treats ferrets. A vet-prescribed product applied at the correct interval is both safer and more reliable than guessing with a pet-store product.",
  },
  {
    question: 'How long does treatment take?',
    answer:
      "Because the mite life cycle runs roughly three weeks from egg to adult, treatment usually spans several weeks to break the cycle — a single application rarely catches every life stage. Your vet will set the schedule and often rechecks an ear swab at the end to confirm the mites are gone.",
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(articleSchema, medSchema, faqSchema)

export default function FerretEarMitesPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Ferret Ear Mites',
          subtitle:
            'Otodectes cynotis is the single most common external parasite in pet ferrets. It is itchy, contagious across the whole household, and — caught early — completely curable with a veterinarian-prescribed acaricide.',
          category: 'Ferret Health',
          authorName: 'Ferret.com Editorial',
          publishedAt: 'June 2026',
          readTime: '9 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Ferret Health', href: '/health' },
          { name: 'Ear Mites', href: '/health/ear-mites' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'TL;DR', href: '#tldr' },
                { label: 'What Ear Mites Are', href: '#what' },
                { label: 'Signs to Watch For', href: '#signs' },
                { label: 'How Vets Diagnose It', href: '#diagnosis' },
                { label: 'Treatment', href: '#treatment' },
                { label: 'Household Management', href: '#household' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Fleas & Parasites', href: '/health/fleas-and-parasites' },
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
              source="health-ear-mites"
            />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Health Hub', href: '/health' },
          { title: 'Ear Cleaning', href: '/care/ear-cleaning' },
          { title: 'Fleas & Parasites', href: '/health/fleas-and-parasites' },
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
            A ferret that suddenly starts shaking its head, scratching at its
            ears with a hind foot, and accumulating dark crumbly debris in the
            ear canal almost always has one diagnosis at the top of the list:
            ear mites. <em>Otodectes cynotis</em> is the most common external
            parasite of domestic ferrets, and while it is irritating and
            contagious, it is also one of the most straightforward ferret
            health problems to confirm and clear.
          </DropCap>

          <h2 id="tldr">TL;DR</h2>
          <p>
            Ear mites in ferrets are caused by <em>Otodectes cynotis</em>, the
            same mite seen in dogs and cats. Signs are head-shaking, ear
            scratching, and abundant dark waxy debris. Diagnosis is a quick
            ear-swab examined under a microscope. Treatment uses a
            veterinarian-prescribed acaricide given over several weeks to span
            the mite life cycle, and every ferret, dog, and cat in the home is
            usually treated together. Caught early, the prognosis is excellent.
          </p>

          <h2 id="what">What Ear Mites Are</h2>
          <p>
            <em>Otodectes cynotis</em> is a surface-dwelling mite that lives in
            the ear canal, feeding on skin debris and tissue fluid. The entire
            life cycle — egg, larva, two nymph stages, and adult — takes place
            on the host and runs about three weeks. The mites are highly
            contagious by direct contact, which is why a single infested
            animal in a multi-pet household reliably spreads them to the
            others. The standard exotic-mammal references (Quesenberry &amp;
            Carpenter, <em>Ferrets, Rabbits, and Rodents</em>) note that
            otodectic mange is the most frequently encountered ectoparasite in
            pet ferrets.
          </p>
          <p>
            The irritation comes from both the mechanical feeding and a
            hypersensitivity reaction to mite antigens, which is why some
            ferrets are intensely itchy with a modest mite burden while others
            tolerate a heavier load with less obvious distress.
          </p>

          <h2 id="signs">Signs to Watch For</h2>
          <ul>
            <li>
              <strong>Head shaking and ear scratching</strong> — the most
              common owner-noticed signs, often the first clue.
            </li>
            <li>
              <strong>Dark, dry, crumbly ear debris</strong> — frequently
              compared to coffee grounds, distinctly different from the small
              amount of reddish-brown wax a healthy ferret normally produces.
            </li>
            <li>
              <strong>Odor or redness in the canal</strong> — suggests a
              secondary bacterial or yeast infection layered on top of the
              mites.
            </li>
            <li>
              <strong>Scratches or scabs around the ears and neck</strong> —
              from self-trauma in an itchy ferret.
            </li>
            <li>
              <strong>Head tilt or loss of balance</strong> — uncommon, but a
              sign the inflammation may have reached deeper structures and a
              same-week vet visit is warranted.
            </li>
          </ul>

          <CalloutBox variant="tip" title="Do not over-clean a healthy ear">
            <p>
              A little reddish-brown wax is normal in ferrets and does not need
              aggressive removal. Vigorous daily cleaning can irritate the
              canal and mask the difference between normal cerumen and mite
              debris. If you are not sure what you are looking at, let a vet
              swab and check rather than scrubbing the ear yourself.
            </p>
          </CalloutBox>

          <h2 id="diagnosis">How Vets Diagnose It</h2>
          <p>
            Diagnosis is fast and definitive. A veterinarian collects a swab of
            the ear debris, suspends it in mineral oil on a slide, and looks
            for mites and eggs under the microscope. The adult mites are large
            enough to be visible as moving white specks even at low
            magnification, so confirmation usually takes only minutes. Because
            the same debris can harbor secondary bacteria or yeast, the vet may
            also examine a stained smear to decide whether an additional
            medication is needed beyond the acaricide.
          </p>
          <p>
            This matters because the home signs of ear mites overlap with other
            causes of itchy ears, and treating blindly with a pet-store product
            can waste weeks while a different problem progresses. An ear swab
            removes the guesswork — see <a href="/health/vet-visit-prep">Vet
            Visit Prep</a> for what to expect at the appointment.
          </p>

          <h2 id="treatment">Treatment</h2>
          <p>
            Ear mites in ferrets respond well to several veterinarian-prescribed
            acaricides in the macrocyclic-lactone class (for example, products
            containing ivermectin or selamectin), as well as topical otic
            preparations. The specific drug, formulation, and schedule are a
            veterinary decision — dosing is determined by a vet, because
            ferrets are small and sensitive to insecticide overdose and several
            products are not labeled for the species.
          </p>
          <p>
            Two principles govern treatment regardless of which drug is chosen:
          </p>
          <ul>
            <li>
              <strong>Treat across the life cycle.</strong> Because the mite
              completes its cycle in about three weeks and eggs are not killed
              by every product, treatment typically spans several weeks so that
              newly hatched mites are caught before they reproduce.
            </li>
            <li>
              <strong>Clean before treating.</strong> Vets often gently flush
              or wipe out the bulk of the debris first so the medication
              reaches the canal surface, and treat any secondary bacterial or
              yeast infection at the same time.
            </li>
          </ul>
          <p>
            A recheck swab at the end of the course confirms the mites are
            actually gone rather than merely reduced.
          </p>

          <CalloutBox variant="warning" title="Why over-the-counter products are risky here">
            <p>
              Many pet-store ear-mite drops are not labeled for ferrets, and a
              dose appropriate for a cat can be inappropriate for an animal a
              fraction of the size. Insecticide overdose in ferrets can cause
              neurologic signs. Use a product your veterinarian selects and
              doses for your ferret specifically.
            </p>
          </CalloutBox>

          <h2 id="household">Household Management</h2>
          <p>
            Because <em>Otodectes</em> spreads readily between ferrets, dogs,
            and cats, the practical rule is: treat every susceptible animal in
            the home simultaneously, even those without signs. An untreated,
            asymptomatic carrier will reinfest the treated animals and turn a
            three-week problem into a months-long cycle of recurrence.
          </p>
          <p>
            The mite does not survive long off the host, so heroic environmental
            decontamination is usually unnecessary — laundering bedding and
            cleaning the cage during treatment is reasonable and sufficient. If
            you keep a group of ferrets, this is also a good moment to review
            general parasite hygiene; our <a href="/health/fleas-and-parasites">
            fleas and parasites</a> reference covers the broader external- and
            internal-parasite picture, and the <a href="/health">health hub</a>{' '}
            links the rest of the ferret health library.
          </p>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <ArticleSourcesList sources={SOURCES} />
          <p className="text-sm text-brand-text-light">
            This page is general clinical information about ferret ear mites.
            It is not individualized veterinary advice. Acaricide selection and
            dosing are veterinary decisions and require evaluation by a
            clinician familiar with ferrets — ideally an AEMV member or an ABVP
            diplomate in Exotic Companion Mammal practice.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}

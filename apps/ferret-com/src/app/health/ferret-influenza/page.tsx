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
    label: "Quesenberry KE, Carpenter JW (eds.). Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery. 4th ed. Saunders/Elsevier — ferret respiratory and infectious disease chapters.",
    url: "https://www.elsevier.com/books/ferrets-rabbits-and-rodents/quesenberry/978-1-4160-6621-7",
    publisher: "Elsevier/Saunders",
  },
  {
    label: "Merck Veterinary Manual — Respiratory Diseases of Ferrets: influenza transmission, clinical signs, supportive management, and zoonotic risk",
    url: "https://www.merckvetmanual.com/exotic-and-laboratory-animals/ferrets/respiratory-diseases-of-ferrets",
    publisher: "Merck Veterinary Manual",
  },
  {
    label: "CDC — Influenza in Ferrets: ferret susceptibility to human influenza strains and household-transmission considerations",
    url: "https://www.cdc.gov/flu/other/index.htm",
    publisher: "CDC",
  },
  {
    label: "Journal of Exotic Pet Medicine — clinical reports on influenza infection in ferrets and the ferret as an influenza research model",
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
  title: 'Ferret Influenza — The Two-Way Human-Ferret Flu | Ferret.com',
  description:
    'Ferrets catch human flu and can give it back. Signs, why ferrets are the classic flu model, supportive care, and protecting a ferret when you are sick.',
  path: '/health/ferret-influenza',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Ferret Influenza',
  description:
    'Influenza in domestic ferrets — the bidirectional human-ferret transmission, clinical signs, supportive care, and prevention of cross-infection.',
  url: 'https://ferret.com/health/ferret-influenza',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const medSchema = buildMedicalWebPageSchema({
  name: 'Ferret Influenza',
  description:
    'Clinical reference on influenza in domestic ferrets, including bidirectional transmission with humans, signs, and supportive care.',
  url: 'https://ferret.com/health/ferret-influenza',
  authorName: 'Ferret.com Editorial',
  lastReviewed: '2026-06-01',
})


const FAQS = [
  {
    question: 'Can my ferret catch the flu from me?',
    answer:
      "Yes. Ferrets are susceptible to human influenza viruses and can catch the flu directly from an infected person through respiratory droplets. Ferrets are so consistently susceptible that they are the standard animal model for influenza research. If you have the flu, take the same precautions around your ferret you would around a vulnerable person.",
  },
  {
    question: 'Can I catch the flu from my ferret?',
    answer:
      "Transmission can go both ways. An infected ferret can shed influenza virus and pass it back to people, so a sick ferret and a sick owner can reinfect each other. Hand hygiene, avoiding face-to-face contact, and minimizing handling while either of you is symptomatic reduce the risk in both directions.",
  },
  {
    question: 'How serious is influenza in ferrets?',
    answer:
      "In most healthy adult ferrets, influenza is a self-limiting illness that resolves over one to two weeks with supportive care, much as it does in people. The concern is young kits, seniors, and ferrets with other health problems, in whom the flu can be more severe or lead to secondary infection. Any ferret that stops eating, becomes dehydrated, or develops labored breathing needs a vet.",
  },
  {
    question: 'What are the signs of flu in a ferret?',
    answer:
      "Sneezing, nasal and eye discharge, coughing, fever, lethargy, and reduced appetite — a clinical picture that looks much like a human cold or flu. Most signs are upper-respiratory. The illness usually peaks in the first few days and improves over the following one to two weeks in otherwise healthy ferrets.",
  },
  {
    question: 'Is there a flu vaccine for ferrets?',
    answer:
      "There is no routine ferret influenza vaccine in standard companion-ferret practice. Management is about prevention through hygiene when humans in the household are sick, and supportive care if a ferret does become infected. This is different from canine distemper, which has a core vaccine and is far more dangerous.",
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(articleSchema, medSchema, faqSchema)

export default function FerretInfluenzaPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Ferret Influenza',
          subtitle:
            'Ferrets are the textbook animal model for human flu — and that is not just a lab fact. Your ferret can catch influenza from you, and give it back. Usually mild, occasionally serious, and almost entirely a hygiene problem to manage.',
          category: 'Ferret Health',
          authorName: 'Ferret.com Editorial',
          publishedAt: 'June 2026',
          readTime: '9 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Ferret Health', href: '/health' },
          { name: 'Ferret Influenza', href: '/health/ferret-influenza' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'TL;DR', href: '#tldr' },
                { label: 'Why Ferrets Catch Our Flu', href: '#why' },
                { label: 'Signs to Watch For', href: '#signs' },
                { label: 'When It Becomes Serious', href: '#serious' },
                { label: 'Supportive Care', href: '#care' },
                { label: 'Protecting Your Ferret', href: '#prevention' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Canine Distemper', href: '/health/canine-distemper-in-ferrets' },
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
              source="health-ferret-influenza"
            />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Health Hub', href: '/health' },
          { title: 'Canine Distemper in Ferrets', href: '/health/canine-distemper-in-ferrets' },
          { title: 'Vaccinations', href: '/health/vaccinations' },
          { title: 'Emergency Warning Signs', href: '/health/emergency-warning-signs' },
        ]}
>
        <div className="carloOS-article">
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-06-01"
          />

          <DropCap>
            Influenza is one of the few illnesses you can quite literally share
            with your ferret. The same virus that has you sneezing on the couch
            can spread to the ferret curled up beside you — and, less
            intuitively, a flu-ridden ferret can pass it back to you. This
            two-way street is why ferrets have been the central laboratory
            model for human influenza for the better part of a century.
          </DropCap>

          <h2 id="tldr">TL;DR</h2>
          <p>
            Ferrets are highly susceptible to human influenza viruses, and
            transmission runs in both directions between ferrets and people. In
            healthy adult ferrets the flu is usually a mild, self-limiting
            upper-respiratory illness that resolves in one to two weeks with
            supportive care. Kits, seniors, and ferrets with other health
            problems are at higher risk of severe disease or secondary
            infection. There is no routine ferret flu vaccine; management is
            hygiene plus supportive care.
          </p>

          <h2 id="why">Why Ferrets Catch Our Flu</h2>
          <p>
            The ferret respiratory tract is anatomically and immunologically
            similar enough to ours that human influenza viruses bind and
            replicate efficiently in ferrets, producing a flu syndrome that
            closely mirrors the human disease. This is precisely why ferrets are
            the standard animal model in influenza research — a fact noted
            across the exotic-mammal literature (Quesenberry &amp; Carpenter,{' '}
            <em>Ferrets, Rabbits, and Rodents</em>). For owners, the practical
            takeaway is simple: when you are contagious with the flu, treat
            your ferret as you would a susceptible household member.
          </p>

          <h2 id="signs">Signs to Watch For</h2>
          <ul>
            <li>
              <strong>Sneezing and nasal discharge</strong> — often the first
              and most obvious signs.
            </li>
            <li>
              <strong>Watery eyes and ocular discharge.</strong>
            </li>
            <li>
              <strong>Coughing</strong> and mild respiratory noise.
            </li>
            <li>
              <strong>Fever, lethargy, and reduced appetite</strong> — the
              ferret seems run-down, much as a person with the flu does.
            </li>
          </ul>
          <p>
            The picture looks a great deal like a human cold or mild flu, and
            in otherwise healthy ferrets it typically peaks in the first few
            days and then improves.
          </p>

          <h2 id="serious">When It Becomes Serious</h2>
          <p>
            Most adult ferrets ride out the flu without complication. Watch more
            closely — and call a vet sooner — in three groups:
          </p>
          <ul>
            <li>
              <strong>Young kits</strong>, whose smaller reserves make
              dehydration and secondary infection more dangerous.
            </li>
            <li>
              <strong>Senior ferrets</strong>, who often have concurrent
              conditions; see <a href="/health/aging-ferret-care">aging ferret
              care</a>.
            </li>
            <li>
              <strong>Ferrets with other illnesses</strong>, in whom the flu
              can tip a fragile situation.
            </li>
          </ul>
          <CalloutBox variant="warning" title="Red flags that need a vet">
            <p>
              Refusal to eat, signs of dehydration, labored or open-mouth
              breathing, or a ferret that becomes markedly weak or unresponsive
              are not wait-and-see. These can signal secondary pneumonia or
              dehydration and warrant prompt veterinary care — see our{' '}
              <a href="/health/emergency-warning-signs">emergency warning
              signs</a> reference.
            </p>
          </CalloutBox>

          <h2 id="care">Supportive Care</h2>
          <p>
            Like human flu, ferret influenza has no antiviral magic bullet in
            routine practice; care is supportive and aimed at keeping the ferret
            comfortable, hydrated, and eating while the immune system clears the
            virus. A veterinarian may recommend measures to maintain hydration
            and appetite, and may prescribe medication if a secondary bacterial
            infection develops — any such medication is veterinarian-prescribed
            and dosed by the vet. Do not give human cold or flu medications to a
            ferret; many are unsafe in this species. Keep the ferret warm,
            quiet, and well-hydrated, and encourage eating with a familiar diet.
          </p>

          <h2 id="prevention">Protecting Your Ferret When You Are Sick</h2>
          <p>
            Because you are the most likely source of your ferret&apos;s flu,
            prevention is mostly about your behavior while you are contagious:
          </p>
          <ul>
            <li>Wash your hands before handling the ferret or its food.</li>
            <li>
              Avoid face-to-face contact, nuzzling, and sharing close airspace
              while you are symptomatic.
            </li>
            <li>
              Minimize handling to the essentials — feeding, cleaning, medication
              — until you are past the contagious window.
            </li>
            <li>
              If the ferret is the one who is sick, the same precautions protect
              you, since transmission can run back the other way.
            </li>
          </ul>
          <p>
            Influenza is a far less frightening disease than{' '}
            <a href="/health/canine-distemper-in-ferrets">canine distemper</a>,
            which shares some early respiratory signs but is almost always fatal
            in the unvaccinated. The rest of the ferret health library is
            organized at the <a href="/health">health hub</a>.
          </p>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <ArticleSourcesList sources={SOURCES} />
          <p className="text-sm text-brand-text-light">
            This page is general clinical information about influenza in
            ferrets. It is not individualized veterinary advice. Medication for
            a sick ferret is a veterinary decision and requires a clinician
            familiar with ferrets — ideally an AEMV member or an ABVP diplomate
            in Exotic Companion Mammal practice.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}

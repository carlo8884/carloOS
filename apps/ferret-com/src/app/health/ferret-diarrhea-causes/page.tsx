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
    label: "Quesenberry KE, Carpenter JW (eds.). Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery. 4th ed. Saunders/Elsevier — ferret gastroenterology, epizootic catarrhal enteritis (ECE), Helicobacter, and inflammatory bowel disease chapters.",
    url: "https://www.elsevier.com/books/ferrets-rabbits-and-rodents/quesenberry/978-1-4160-6621-7",
    publisher: "Elsevier/Saunders",
  },
  {
    label: "Merck Veterinary Manual — Digestive Diseases of Ferrets: diarrhea causes including ECE, proliferative bowel disease, Helicobacter, and foreign bodies",
    url: "https://www.merckvetmanual.com/exotic-and-laboratory-animals/ferrets/digestive-diseases-of-ferrets",
    publisher: "Merck Veterinary Manual",
  },
  {
    label: "Association of Exotic Mammal Veterinarians (AEMV) — practitioner directory and continuing-education content on ferret gastrointestinal disease",
    url: "https://aemv.org",
    publisher: "AEMV",
  },
  {
    label: "Journal of Exotic Pet Medicine — clinical reports on ferret enteritis, epizootic catarrhal enteritis, and gastrointestinal parasitism",
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
  title: 'Ferret Diarrhea — Causes, Stool Clues & When to Worry | Ferret.com',
  description:
    'Diarrhea in ferrets ranges from a passing diet upset to serious disease. Common causes, what stool color and consistency reveal, and when it is an emergency.',
  path: '/health/ferret-diarrhea-causes',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Ferret Diarrhea: Causes and When to Worry',
  description:
    "Causes of diarrhea in domestic ferrets — dietary, infectious, parasitic, obstructive, inflammatory, and systemic — with stool-appearance clues, dehydration risk, and guidance on when veterinary care is urgent.",
  url: 'https://ferret.com/health/ferret-diarrhea-causes',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
  speakable: true,

  citation: SOURCES,
})

const medSchema = buildMedicalWebPageSchema({
  name: 'Ferret Diarrhea: Causes and When to Worry',
  description:
    "Clinical reference on the causes of diarrhea in domestic ferrets, stool-appearance interpretation, dehydration risk, and indications for urgent veterinary evaluation.",
  url: 'https://ferret.com/health/ferret-diarrhea-causes',
  authorName: 'Ferret.com Editorial',
  lastReviewed: '2026-06-01',
})


const FAQS = [
  {
    question: 'What causes diarrhea in ferrets?',
    answer:
      "Common causes range from mild to serious: an abrupt diet change or food intolerance, infectious disease such as epizootic catarrhal enteritis (ECE, the \"green slime\" virus), Helicobacter mustelae gastritis, intestinal parasites, partial foreign-body obstruction, inflammatory bowel disease, and systemic illnesses including some cancers. Because the causes overlap so much, persistent diarrhea in a ferret needs a vet to sort out rather than home guesswork.",
  },
  {
    question: 'What does the color of ferret diarrhea mean?',
    answer:
      "Stool appearance offers clues. Bright green, mucoid \"green slime\" stool is classically associated with epizootic catarrhal enteritis. Black, tarry stool (melena) suggests digested blood from the upper gastrointestinal tract, often gastric ulcers. Seedy, birdseed-like stool points to malabsorption and poor digestion. Very thin or pencil-thin stool can indicate a partial obstruction. These are clues for your vet, not a substitute for examination.",
  },
  {
    question: 'Is diarrhea an emergency in ferrets?',
    answer:
      "It can be. Ferrets are small and dehydrate quickly, so diarrhea combined with lethargy, refusal to eat, vomiting, black tarry stool, signs of pain such as teeth-grinding, or signs of dehydration is an emergency. Profuse or bloody diarrhea, or diarrhea in a kit or a senior ferret, also warrants same-day veterinary care. Mild, brief diarrhea in an otherwise bright, eating, drinking adult can be watched short-term, but anything beyond that needs a vet.",
  },
  {
    question: 'How do I keep my ferret hydrated with diarrhea?',
    answer:
      "Always make fresh water available, and tempt drinking. Some owners offer a veterinarian-recommended oral electrolyte solution or a meat-based recovery diet, but the key point is that home hydration is supportive only — it does not replace diagnosis and treatment. A ferret that is visibly dehydrated, refusing fluids, or declining needs veterinary fluids and care without delay.",
  },
  {
    question: 'Can I treat ferret diarrhea at home?',
    answer:
      "Only mild, brief cases in an otherwise well ferret, and only by removing the likely trigger (such as reverting a recent diet change), ensuring water, and watching closely for 24 hours. Do not give human anti-diarrheal medicines or antibiotics — these can be harmful and can mask a serious underlying problem. Any diarrhea that persists, recurs, contains blood, or comes with other symptoms is a veterinary matter.",
  },
  {
    question: 'What is ECE in ferrets?',
    answer:
      "Epizootic catarrhal enteritis, often called \"green slime disease,\" is a viral intestinal infection that produces profuse bright-green mucoid diarrhea and is highly contagious between ferrets. It frightens owners because of how dramatic the stool looks. It is diagnosed and managed by an exotic-pet vet with supportive care; introducing a new ferret is a classic trigger for an outbreak in a household.",
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(articleSchema, medSchema, faqSchema)

export default function FerretDiarrheaCausesPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Ferret Diarrhea: Causes & When to Worry',
          subtitle:
            "Loose stool in a ferret can mean a passing diet upset or the first sign of serious disease — and the two can look alike at the start. Because ferrets are small and dehydrate fast, knowing the common causes, reading the stool, and recognizing the danger signs is what keeps a minor episode from becoming a crisis.",
          category: 'Ferret Health',
          authorName: 'Ferret.com Editorial',
          publishedAt: 'June 2026',
          readTime: '11 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Ferret Health', href: '/health' },
          { name: 'Diarrhea Causes', href: '/health/ferret-diarrhea-causes' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'Why It Matters in Ferrets', href: '#why' },
                { label: 'Common Causes', href: '#causes' },
                { label: 'Reading the Stool', href: '#stool' },
                { label: 'The Dehydration Risk', href: '#dehydration' },
                { label: 'What You Can Do at Home', href: '#home' },
                { label: 'When to See a Vet', href: '#vet' },
                { label: 'How Vets Diagnose It', href: '#diagnosis' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Stomach Ulcers', href: '/health/ferret-ulcers' },
                { label: 'GI Blockage', href: '/health/gastrointestinal-blockage' },
                { label: 'Emergency Warning Signs', href: '/health/emergency-warning-signs' },
              ]}
            />
            <CrossPortfolioCard currentSite="ferret-com" contentType="health" variant="sidebar" />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Health Notes"
              subtitle="Evidence-based ferret health, monthly."
              source="health-ferret-diarrhea-causes"
            />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Health Hub', href: '/health' },
          { title: 'Gastrointestinal Blockage', href: '/health/gastrointestinal-blockage' },
          { title: 'Ferret Ulcers', href: '/health/ferret-ulcers' },
          { title: 'Diet Basics', href: '/care/diet-basics' },
        ]}
>
        <div className="carloOS-article">
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-06-01"
          />

          <DropCap>
            Diarrhea is one of the most common reasons ferrets are brought to the
            vet, and one of the trickiest to interpret, because the same loose
            stool can stem from a harmless diet change or from a life-threatening
            obstruction. What makes it urgent in ferrets specifically is their
            size: a small carnivore with a fast gut transit dehydrates quickly,
            so a problem that a larger animal could tolerate for days can become
            dangerous in a ferret within hours.
          </DropCap>

          <h2 id="why">Why Diarrhea Matters More in Ferrets</h2>
          <p>
            Ferrets have a short, simple gastrointestinal tract and a rapid
            transit time, and they have little fluid reserve. That combination
            means diarrhea can produce meaningful dehydration and weight loss
            fast, and it can also be the visible tip of a serious internal
            problem. The practical rule is to take ferret diarrhea more seriously
            than you would in a dog or cat, and to escalate sooner.
          </p>

          <h2 id="causes">Common Causes</h2>
          <p>
            The causes span a wide severity range, which is exactly why
            persistent diarrhea needs professional diagnosis:
          </p>
          <ul>
            <li>
              <strong>Diet change or intolerance.</strong> An abrupt switch in
              food, an inappropriate treat, dairy, or sugary or high-plant foods
              a ferret is not built to digest can all loosen stool. Diet should
              always be transitioned gradually.
            </li>
            <li>
              <strong>Epizootic catarrhal enteritis (ECE).</strong> A
              contagious viral enteritis producing the classic bright-green
              mucoid &quot;green slime&quot; diarrhea; introducing a new ferret
              is a common trigger.
            </li>
            <li>
              <strong>Helicobacter mustelae gastritis and ulcers.</strong> A
              widespread bacterium in ferrets that drives gastritis and{' '}
              <a href="/health/ferret-ulcers">gastric ulcers</a>; can cause dark,
              tarry stool from digested blood.
            </li>
            <li>
              <strong>Intestinal parasites.</strong> Coccidia, Giardia, and
              others, more often in young ferrets and new acquisitions.
            </li>
            <li>
              <strong>Foreign body / partial obstruction.</strong> Ferrets ingest
              rubber and foam; a partial blockage can cause diarrhea or thin
              stool before becoming a full{' '}
              <a href="/health/gastrointestinal-blockage">obstruction</a>.
            </li>
            <li>
              <strong>Inflammatory bowel disease (IBD).</strong> Chronic
              intestinal inflammation causing recurrent loose, often seedy stool
              and weight loss.
            </li>
            <li>
              <strong>Systemic disease.</strong> Some cancers (including
              lymphoma), and other systemic illness, can present with diarrhea.
            </li>
          </ul>

          <h2 id="stool">Reading the Stool</h2>
          <p>
            Stool appearance does not diagnose the cause, but it gives your vet
            useful clues — and it is worth photographing the stool to show the
            clinic:
          </p>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-surface border-b border-brand-border">
                  <th className="text-left p-3 font-semibold">Appearance</th>
                  <th className="text-left p-3 font-semibold">Common association</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brand-border">
                  <td className="p-3 font-medium">Bright green, mucoid (&quot;green slime&quot;)</td>
                  <td className="p-3">Epizootic catarrhal enteritis (ECE)</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="p-3 font-medium">Black, tarry (melena)</td>
                  <td className="p-3">Digested blood, often from gastric ulcers — urgent</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="p-3 font-medium">Seedy / &quot;birdseed&quot;</td>
                  <td className="p-3">Malabsorption, poor digestion, often chronic</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="p-3 font-medium">Thin / pencil-like</td>
                  <td className="p-3">Possible partial obstruction — urgent</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Fresh red blood or watery, profuse</td>
                  <td className="p-3">Lower-tract bleeding or acute enteritis — urgent</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="dehydration">The Dehydration Risk</h2>
          <p>
            Dehydration is the immediate danger with ferret diarrhea. Signs to
            watch for include lethargy, sunken-looking eyes, tacky or dry gums,
            and reduced skin elasticity (the scruff is slow to flatten back when
            gently lifted). A ferret that is also refusing to eat or drink is
            losing ground quickly and needs veterinary fluids.
          </p>

          <CalloutBox variant="warning" title="Dehydration plus inappetence is an emergency">
            <p>
              A ferret with diarrhea that has stopped eating and drinking, shows
              dehydration signs, is lethargic, is passing black tarry stool, or
              is grinding its teeth in pain should be seen the same day. Ferrets
              have little reserve and can deteriorate within hours.
            </p>
          </CalloutBox>

          <h2 id="home">What You Can Do at Home</h2>
          <p>
            For a mild, brief episode in an otherwise bright, eating, drinking
            adult ferret, reasonable first steps are:
          </p>
          <ul>
            <li>
              <strong>Ensure constant fresh water</strong> and encourage
              drinking.
            </li>
            <li>
              <strong>Reverse a recent diet change.</strong> If you switched
              foods or gave a new treat, return to the previous diet.
            </li>
            <li>
              <strong>Watch closely for 24 hours</strong> for any escalation,
              and note stool appearance and frequency.
            </li>
          </ul>
          <CalloutBox variant="warning" title="Do not use human anti-diarrheal or antibiotic medicines">
            <p>
              Human anti-diarrheal products and leftover antibiotics are not
              appropriate for ferrets — they can be harmful and can mask a
              serious underlying problem while the ferret declines. Any
              medication for ferret diarrhea is a veterinarian&apos;s decision, at
              veterinarian-prescribed amounts. Home care is supportive only and
              never a substitute for diagnosis when symptoms persist.
            </p>
          </CalloutBox>

          <h2 id="vet">When to See a Vet</h2>
          <p>
            See an exotic-pet veterinarian promptly if diarrhea:
          </p>
          <ul>
            <li>Persists beyond about 24 hours or keeps recurring</li>
            <li>Is profuse, watery, bloody, or black and tarry</li>
            <li>Comes with vomiting, not eating, lethargy, or pain signs</li>
            <li>Occurs in a kit, a senior, or a ferret with known illness</li>
            <li>Is accompanied by signs of dehydration or weight loss</li>
          </ul>
          <p>
            Our <a href="/health/emergency-warning-signs">emergency warning
            signs guide</a> details the symptoms that mean you should not wait at
            all.
          </p>

          <h2 id="diagnosis">How Vets Diagnose It</h2>
          <p>
            Because so many causes overlap, an exotic-pet vet works through a
            structured diagnostic process: history (recent diet change, new
            ferret, possible foreign-body access), physical exam and abdominal
            palpation, a fecal examination for parasites, often bloodwork to
            assess hydration and organ function, and imaging (radiographs or
            ultrasound) when obstruction or a mass is a concern. Treatment then
            targets the specific cause, with supportive fluids and a recovery
            diet as needed — all at the clinician&apos;s direction.
          </p>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <ArticleSourcesList sources={SOURCES} />
          <p className="text-sm text-brand-text-light">
            This page is general clinical information about diarrhea in ferrets.
            It is not individualized veterinary advice and does not include
            medication dosing. Persistent, severe, or bloody diarrhea, or
            diarrhea with other symptoms, should be evaluated by a veterinarian
            experienced with ferrets.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}

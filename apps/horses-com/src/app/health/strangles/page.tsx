import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Strangles in Horses — Streptococcus equi, Signs, Biosecurity",
  description:
    "Reference guide to equine strangles (Streptococcus equi infection): clinical signs, transmission, the carrier state, biosecurity, and outbreak management.",
  path: '/health/strangles',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Strangles in Horses — Streptococcus equi, Signs, Biosecurity",
  description:
    "Equine strangles caused by Streptococcus equi subspecies equi: signs, transmission, guttural-pouch carriers, biosecurity, and outbreak control.",
  url: 'https://horses.com/health/strangles',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const medSchema = buildMedicalWebPageSchema({
  name: "Equine Strangles",
  description:
    "Equine strangles caused by Streptococcus equi subspecies equi: signs, transmission, guttural-pouch carriers, biosecurity, and outbreak control.",
  url: 'https://horses.com/health/strangles',
  authorName: 'Horses.com Editorial',
  lastReviewed: '2026-06-01',
})

const FAQS = [
  {
    question: "Is strangles fatal?",
    answer:
      "Most otherwise healthy horses recover from strangles, and overall mortality is low. However, complications such as bastard strangles (internal abscesses), purpura haemorrhagica, and airway obstruction can be serious or occasionally fatal, particularly in very young, old, or debilitated horses. Veterinary involvement improves outcomes.",
    answerText:
      "Most healthy horses recover and mortality is low, but complications like internal abscesses, purpura haemorrhagica, and airway obstruction can be serious, especially in vulnerable horses.",
  },
  {
    question: "Why is monitoring temperature important with strangles?",
    answer:
      "Fever usually appears before nasal discharge or visible swelling, so daily temperature monitoring is the earliest way to catch an infected horse and isolate it before it sheds bacteria and infects others. During an outbreak, twice-daily temperatures on every horse are a cornerstone of control.",
    answerText:
      "Fever appears before other signs, so temperature monitoring catches infected horses early and lets you isolate them before they spread bacteria. Twice-daily temperatures are central to outbreak control.",
  },
  {
    question: "What is a strangles carrier?",
    answer:
      "A carrier is a recovered horse that harbors Streptococcus equi in its guttural pouches without showing symptoms, shedding intermittently for months or years. Carriers are the reservoir that starts new outbreaks. Veterinarians identify and clear them with guttural-pouch endoscopy, lavage, and PCR testing.",
    answerText:
      "A carrier is a symptom-free recovered horse harboring the bacteria in its guttural pouches and shedding intermittently. Carriers seed new outbreaks and are cleared via guttural-pouch endoscopy and lavage.",
  },
]

const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText ?? (typeof f.answer === 'string' ? f.answer : '') })),
})

const combined = combineSchemas(articleSchema, medSchema, faqSchema)

export default function StranglesPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        contentType="health"
        hero={{
          title: "Strangles in Horses",
          subtitle:
            "Strangles is one of the oldest and most contagious bacterial diseases of horses, caused by Streptococcus equi subspecies equi. It produces fever, nasal discharge, and the swollen, abscessing lymph nodes that gave the disease its alarming name. While most healthy horses recover, strangles spreads explosively through a barn and can leave behind silent carriers that seed future outbreaks -- which is why biosecurity, not just treatment, defines good management. This is reference material, not a substitute for veterinary care.",
          category: "Equine Health",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "11 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Health", href: "/health" },
          { name: "Strangles", href: '/health/strangles' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "What Is Strangles", href: "#what" },
            { label: "How It Spreads", href: "#transmission" },
            { label: "Clinical Signs", href: "#signs" },
            { label: "Complications", href: "#complications" },
            { label: "The Carrier State", href: "#carriers" },
            { label: "Biosecurity", href: "#biosecurity" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Suspected Strangles</div>
            <p className="text-xs text-brand-text-mid m-0 leading-relaxed">
              Strangles is highly contagious. Isolate any horse with fever and nasal discharge immediately, restrict movement on and off the property, and call your veterinarian before the disease spreads through the barn.
            </p>
          </div>
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Equine Influenza", href: "/health/equine-influenza" },
              { label: "Vaccination Schedule", href: "/guides/equine-vaccination-schedule" },
              { label: "West Nile Virus", href: "/health/west-nile-virus" },
              { label: "Choosing a Vet", href: "/ownership/choosing-a-vet" },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="health-strangles"
          />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="what">What Is Strangles</h2>
          <p>Strangles is an upper respiratory infection caused by Streptococcus equi subspecies equi, a host-adapted bacterium that infects only horses and their relatives. After infection, the bacteria colonize the lymph nodes of the head and throat, which swell and abscess. When those abscesses press on the airway they can cause the laboured breathing that historically gave the disease its name. It is among the most contagious equine diseases and one of the most frequently diagnosed worldwide.</p>

          <h2 id="transmission">How It Spreads</h2>
          <p>Strangles spreads through direct contact between horses and, very efficiently, indirectly via contaminated hands, clothing, buckets, twitches, shared water troughs, tack, and trailers. Pus draining from abscesses and nasal discharge are loaded with bacteria. The organism can survive in water and on surfaces, so a contaminated environment keeps an outbreak going. Newly arrived horses and shared facilities are common entry points.</p>

          <h2 id="signs">Clinical Signs</h2>
          <ul>
            <li>Fever, often the first sign, appearing before nasal discharge -- which is why monitoring temperature is central to early detection.</li>
            <li>Thick, often yellow nasal discharge.</li>
            <li>Swollen, painful lymph nodes under the jaw and in the throatlatch that abscess and may rupture, draining pus.</li>
            <li>Depression, reduced appetite, and difficulty swallowing.</li>
            <li>A soft cough and an extended head and neck posture to ease swallowing and breathing.</li>
          </ul>

          <h2 id="complications">Complications</h2>
          <p>Most horses recover uneventfully, but complications occur. &apos;Bastard strangles&apos; is the spread of abscesses to lymph nodes elsewhere in the body, which can be serious. Purpura haemorrhagica is an immune-mediated vasculitis that can follow infection or, occasionally, vaccination. Guttural-pouch empyema -- pus accumulating in the air-filled pouches behind the throat -- is both a complication and the seedbed of the long-term carrier state.</p>

          <h2 id="carriers">The Carrier State</h2>
          <p>A subset of recovered horses become long-term, symptom-free carriers, harboring the bacteria in their guttural pouches (often within hardened concretions called chondroids) and shedding intermittently for months or years. These silent carriers are the reservoir that ignites new outbreaks. Detecting and clearing them -- through guttural-pouch endoscopy and lavage with PCR testing, directed by a veterinarian -- is a key part of stopping strangles from recurring on a property.</p>

          <h2 id="biosecurity">Biosecurity</h2>
          <ul>
            <li><strong>Isolate new arrivals</strong> for a quarantine period and monitor their temperature before mixing with the resident herd.</li>
            <li><strong>Isolate sick horses immediately</strong> and use dedicated equipment, clothing, and handlers for them.</li>
            <li><strong>Stop all horse movement</strong> on and off the property during an outbreak.</li>
            <li><strong>Clean and disinfect</strong> shared equipment, water sources, stalls, and trailers; the organism persists in the environment.</li>
            <li><strong>Screen recovered horses</strong> for the carrier state with your veterinarian before declaring the outbreak over.</li>
          </ul>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Boyle AG, Timoney JF, Newton JR, et al. “Streptococcus equi Infections in Horses: ACVIM Consensus Statement.” Journal of Veterinary Internal Medicine, 2018; 32(2):633–647.</li>
            <li>Waller AS. “New Perspectives for the Diagnosis, Control, Treatment, and Prevention of Strangles.” Veterinary Clinics of North America: Equine Practice, 2014; 30(3):591–607.</li>
            <li>American Association of Equine Practitioners. “Strangles” owner resources and infectious-disease guidelines. aaep.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}

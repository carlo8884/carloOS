import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbSchema, combineSchemas, SchemaScript, FAQAccordion } from '@carloOS/ui'
import { HubMasthead } from '../../components/HubMasthead'

export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Pet Health Library — Sourced Guides | Vets.co', description: 'Complete pet health guides drawing on AVMA, ACVIM, and AAHA guidance. Emergency signs, breed health, preventive care, and specialist guidance.', path: '/health' })

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://vets.co/' },
    { name: 'Health', url: 'https://vets.co/health' },
  ],
})

// All Health Topics — source-of-truth array; drives both the visible link grid
// and the ItemList JSON-LD so URLs stay in sync automatically.
const HEALTH_ARTICLES = [
  { slug: 'allergic-reactions-dogs', title: 'Allergic Reactions in Dogs' },
  { slug: 'anxiety-in-dogs', title: 'Anxiety in Dogs' },
  { slug: 'arthritis-in-dogs', title: 'Arthritis in Dogs' },
  { slug: 'canine-influenza', title: 'Canine Influenza (Dog Flu)' },
  { slug: 'cognitive-dysfunction', title: 'Cognitive Dysfunction Syndrome' },
  { slug: 'cushing-disease-dogs', title: "Cushing's Disease in Dogs" },
  { slug: 'dehydration-in-dogs', title: 'Dehydration in Dogs' },
  { slug: 'dental-cleaning-guide', title: 'Dental Cleaning: What to Expect' },
  { slug: 'diabetes-in-dogs-cats', title: 'Diabetes in Dogs and Cats' },
  { slug: 'dog-eye-conditions', title: 'Eye Conditions in Dogs' },
  { slug: 'dog-vaccinations-guide', title: 'Dog Vaccinations: Core and Non-Core' },
  { slug: 'ear-infections-dogs', title: 'Ear Infections in Dogs' },
  { slug: 'flea-tick-prevention', title: 'Flea and Tick Prevention' },
  { slug: 'kennel-cough', title: 'Kennel Cough (Infectious Tracheobronchitis)' },
  { slug: 'parvovirus-in-puppies', title: 'Parvovirus in Puppies' },
  { slug: 'seizures-in-dogs', title: 'Seizures in Dogs' },
  { slug: 'vomiting-diarrhea-pets', title: 'Vomiting and Diarrhea in Pets' },
  { slug: 'emergency-signs', title: 'Emergency Warning Signs in Pets' },
  { slug: 'bloat-gdv-dogs', title: 'Bloat (GDV) in Dogs' },
  { slug: 'feline-lower-urinary-tract-disease', title: 'Feline Lower Urinary Tract Disease (FLUTD)' },
  { slug: 'heartworm-in-dogs', title: 'Heartworm Disease in Dogs' },
  { slug: 'heat-stroke-dogs', title: 'Heat Stroke in Dogs' },
  { slug: 'hyperthyroidism-cats', title: 'Hyperthyroidism in Cats' },
  { slug: 'hypothyroidism-dogs', title: 'Hypothyroidism in Dogs' },
  { slug: 'intestinal-parasites', title: 'Intestinal Parasites in Pets' },
  { slug: 'kidney-disease-cats', title: 'Kidney Disease in Cats (CKD)' },
  { slug: 'leptospirosis', title: 'Leptospirosis in Dogs' },
  { slug: 'pain-management-dogs', title: 'Pain Management in Dogs' },
  { slug: 'pancreatitis-in-dogs', title: 'Pancreatitis in Dogs' },
  { slug: 'periodontal-disease-pets', title: 'Periodontal Disease in Pets' },
  { slug: 'pain-signs-dogs', title: 'Signs of Pain in Dogs' },
  { slug: 'preventive-care-schedule', title: 'Preventive Care Schedule by Life Stage' },
  { slug: 'senior-bloodwork-guide', title: 'Senior Pet Bloodwork Guide' },
  { slug: 'senior-pet-care', title: 'Senior Pet Care' },
  { slug: 'spay-neuter-benefits', title: 'Spay and Neuter: Health Benefits' },
  { slug: 'tick-borne-diseases', title: 'Tick-Borne Diseases in Dogs' },
  { slug: 'urinary-tract-infection', title: 'Urinary Tract Infections in Pets' },
  { slug: 'weight-management', title: 'Weight Management in Dogs and Cats' },
]

// ItemList structured data — enumerates the health article cluster for
// AI Overviews / Perplexity / ChatGPT citation (GEO authority signal).
const healthItemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Pet Health Library Articles at Vets.co',
  numberOfItems: HEALTH_ARTICLES.length,
  itemListElement: HEALTH_ARTICLES.map((article, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: article.title,
    url: `https://vets.co/health/${article.slug}`,
  })),
}

const schema = combineSchemas(breadcrumbSchema, healthItemListSchema)

// Triage reference table — maps the three standard urgency tiers veterinarians
// use (emergency / urgent / routine) to representative signs and the expected
// timeframe to seek care. Grounded in widely-published veterinary triage
// guidance (AVMA, AAHA, veterinary ER literature); deliberately phrased as
// "seek care" rather than dosing/diagnosis. Extractable as a comparison table
// for AI Overviews / Perplexity citation (GEO).
const TRIAGE_TIERS = [
  {
    tier: 'Emergency',
    timeframe: 'Go now — nearest open ER, do not wait',
    signs: 'Trouble breathing, collapse, unproductive retching with a swollen abdomen (possible bloat/GDV), seizures lasting more than a few minutes or back-to-back, suspected poisoning, severe trauma, pale or blue gums, inability to urinate, heatstroke, uncontrolled bleeding.',
  },
  {
    tier: 'Urgent',
    timeframe: 'Same day or within 24 hours',
    signs: 'Repeated vomiting or diarrhea, not eating for more than a day, limping that will not bear weight, a painful or rapidly swelling eye, an abscess or bite wound, straining in the litter box, lethargy with fever, or any sudden behavior change in a sick-appearing pet.',
  },
  {
    tier: 'Routine',
    timeframe: 'Schedule a regular appointment',
    signs: 'Mild intermittent itching, a small lump that is not growing quickly, gradual weight change, dental tartar, vaccine boosters, parasite-prevention refills, and annual or life-stage wellness exams.',
  },
]

// FAQ answers are grounded strictly in facts stated elsewhere on this hub
// (the triage table, the sourcing note, and the cluster structure). No new
// numbers, doses, or study claims are introduced. FAQAccordion renders the
// FAQPage JSON-LD itself.
const FAQS = [
  {
    question: 'How do I know if my pet needs the ER or a regular appointment?',
    answer: 'Use the urgency tiers above. Trouble breathing, collapse, seizures, suspected poisoning, bloat-like retching with a swollen belly, an inability to urinate, or pale gums are emergencies — go to the nearest open hospital and do not wait. Repeated vomiting, not eating for more than a day, non-weight-bearing lameness, or a painful eye are urgent and usually warrant same-day care. Mild, gradual, or preventive concerns can be handled at a routine appointment. When you are unsure, err toward calling a veterinarian or pet poison control rather than waiting.',
  },
  {
    question: 'Are these guides a substitute for seeing a veterinarian?',
    answer: 'No. These references are educational and explain what conditions are, how they are generally evaluated, and when to seek care. They are not a diagnosis and do not provide individualized dosing. Any diagnostic decision, prescription, or dose must come from a veterinarian who has examined your pet. Use these pages to prepare for and understand a visit, not to replace one.',
  },
  {
    question: 'What number should I call for a suspected poisoning?',
    answer: 'For a suspected toxin exposure, contact the ASPCA Animal Poison Control Center at 888-426-4435 or your veterinarian or nearest emergency hospital immediately. Do not wait for symptoms to appear and do not induce vomiting unless a veterinarian or poison-control specialist directs you to. Poison-control hotlines may charge a consultation fee.',
  },
  {
    question: 'How are the claims in these health guides sourced?',
    answer: 'Each guide draws on current guidance from veterinary bodies such as the AVMA, AAHA, and ACVIM, along with peer-reviewed references cited on the individual pages. Content is maintained by the Vets.co editorial team and written in calibrated, non-diagnostic language. We do not publish first-person clinical claims or fabricated credentials.',
  },
]

const GUIDES = [
  { category: 'Emergency', items: [{ title: '15 Signs Your Pet Needs Emergency Care', href: '/health/emergency-signs', badge: 'Must Read' }, { title: 'ASPCA Poison Control: 888-426-4435', href: 'tel:8884264435', badge: 'Save This' }] },
  { category: 'Breed Health', items: [{ title: 'Golden Retriever Health Guide', href: '/breeds/golden-retriever-health' }, { title: 'Labrador Retriever Health', href: '/breeds/labrador-health' }, { title: 'French Bulldog Health', href: '/breeds/french-bulldog-health' }, { title: 'German Shepherd Health', href: '/breeds/german-shepherd-health' }] },
  { category: 'Finding Care', items: [{ title: 'Find a Veterinary Specialist', href: '/find-a-vet', badge: 'Directory' }, { title: 'Best Pet Telehealth 2026', href: '/telehealth' }, { title: 'Best Pet Insurance 2026', href: '/reviews/best-pet-insurance' }] },
]

export default function VetsHealthHubPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <>
      <HubMasthead
        eyebrow="Pet Health Library"
        title="Pet Health Library"
        intro="Condition references, emergency guides, breed health, and preventive-care schedules — every claim sourced to a primary paper. Read the guidelines, then find the care your pet needs."
        manifestKey="vets-co:health-hero"
        fallbackKey="vets-co:hero"
        imageAlt="Reference books arranged on a library shelf"
        primaryCta={{ href: '/find-a-vet', label: 'Find a vet' }}
        secondaryCta={{ href: '/health/emergency-signs', label: 'Emergency signs' }}
      />
      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Health</span>
      </nav>
      <div className="px-container-sm sm:px-container pt-6 pb-2 bg-brand-surface border-b border-brand-border">
        <p className="text-xs text-brand-text-light max-w-3xl leading-relaxed">Drawing on current <a href="https://avma.org" rel="noopener" target="_blank" className="text-brand-primary hover:underline">AVMA</a>, <a href="https://aaha.org" rel="noopener" target="_blank" className="text-brand-primary hover:underline">AAHA</a>, and <a href="https://acvim.org" rel="noopener" target="_blank" className="text-brand-primary hover:underline">ACVIM</a> guidance.</p>
      </div>

      {/* Direct-answer / TL;DR block — extractable summary for AI Overviews,
          Perplexity, and ChatGPT citation (GEO). Routes the reader straight to
          the right depth of care, then into the cluster. */}
      <section aria-labelledby="health-tldr" className="px-container-sm sm:px-container py-8 bg-brand-primary-pale border-b border-brand-border">
        <div className="max-w-3xl">
          <h2 id="health-tldr" className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">The short version</h2>
          <p className="text-base text-brand-text-mid leading-relaxed mb-3">
            This library explains common pet conditions, what their warning signs mean, and <strong className="text-brand-dark">when to seek care</strong>. The fastest triage: <strong className="text-brand-dark">trouble breathing, collapse, seizures, suspected poisoning, bloat-like retching, inability to urinate, or pale gums are emergencies</strong> — go to the nearest open hospital now. Repeated vomiting, refusing food for over a day, or non-weight-bearing lameness are <strong className="text-brand-dark">urgent</strong> and usually need same-day care. Mild, gradual, and preventive concerns belong at a <strong className="text-brand-dark">routine</strong> appointment.
          </p>
          <p className="text-sm text-brand-text-light leading-relaxed">
            These guides are educational and not a diagnosis. For suspected poisoning, call <a href="tel:8884264435" className="text-brand-primary hover:underline font-semibold">ASPCA Poison Control at 888-426-4435</a> or your veterinarian immediately. Start with the <Link href="/symptoms" className="text-brand-primary hover:underline">symptom checker</Link>, review <Link href="/health/emergency-signs" className="text-brand-primary hover:underline">emergency warning signs</Link>, or <Link href="/find-a-vet" className="text-brand-primary hover:underline">find a vet</Link>.
          </p>
        </div>
      </section>

      {/* Triage reference table — emergency / urgent / routine tiers. */}
      <section aria-labelledby="health-triage" className="px-container-sm sm:px-container py-10 border-b border-brand-border">
        <h2 id="health-triage" className="font-display text-xl font-bold text-brand-dark mb-2">Emergency, Urgent, or Routine? A Triage Reference</h2>
        <p className="text-sm text-brand-text-light max-w-3xl mb-5 leading-relaxed">Veterinarians sort presenting problems into three urgency tiers. This table maps each tier to representative signs and how quickly to act. It is a guide, not a diagnosis — when in doubt, call a veterinarian. For a printable version, see the <Link href="/emergency-triage-card" className="text-brand-primary hover:underline">emergency triage card</Link>.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-brand-surface border-b-2 border-brand-border text-left">
                <th scope="col" className="px-4 py-3 font-display font-bold text-brand-dark whitespace-nowrap">Tier</th>
                <th scope="col" className="px-4 py-3 font-display font-bold text-brand-dark whitespace-nowrap">When to act</th>
                <th scope="col" className="px-4 py-3 font-display font-bold text-brand-dark">Representative signs</th>
              </tr>
            </thead>
            <tbody>
              {TRIAGE_TIERS.map((row) => (
                <tr key={row.tier} className="border-b border-brand-border align-top">
                  <th scope="row" className="px-4 py-3 font-bold text-brand-dark whitespace-nowrap">{row.tier}</th>
                  <td className="px-4 py-3 text-brand-text-mid">{row.timeframe}</td>
                  <td className="px-4 py-3 text-brand-text-mid leading-relaxed">{row.signs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-brand-text-light mt-4 max-w-3xl leading-relaxed">Related: <Link href="/symptoms" className="text-brand-primary hover:underline">symptom library</Link> · <Link href="/diagnostics" className="text-brand-primary hover:underline">diagnostic tests explained</Link> · <Link href="/medications" className="text-brand-primary hover:underline">pet medication reference</Link> · <Link href="/specialists" className="text-brand-primary hover:underline">when to see a specialist</Link>.</p>
      </section>

      <div className="px-container-sm sm:px-container py-14">
        {GUIDES.map(section => (
          <div key={section.category} className="mb-10">
            <h2 className="font-display text-xl font-bold text-brand-dark mb-4 pb-3 border-b border-brand-border">{section.category}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {section.items.map(item => (
                <Link key={item.href} href={item.href} className="block bg-brand-white border border-brand-border rounded-lg p-5 no-underline hover:border-brand-primary transition-colors">
                  {(item as any).badge && <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">{(item as any).badge}</div>}
                  <div className="font-display font-bold text-brand-dark text-sm">{item.title}</div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <section aria-labelledby="health-faq" className="border-t border-brand-border px-container-sm sm:px-container py-12">
        <h2 id="health-faq" className="font-display text-xl font-bold text-brand-dark mb-5">Frequently Asked Questions</h2>
        <div className="max-w-3xl">
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />
        </div>
      </section>
      {/* agent1-browse-all-start */}
      <section className="border-t border-brand-border bg-brand-surface px-container-sm sm:px-container py-10">
        <h2 className="font-display font-bold text-brand-dark text-lg mb-4">All Health Topics</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2">
        {HEALTH_ARTICLES.map((article) => (
          <Link key={article.slug} href={`/health/${article.slug}`} className="text-sm text-brand-primary no-underline hover:underline">{article.title}</Link>
        ))}
        </div>
      </section>
      {/* agent1-browse-all-end */}
</>
  </>
  )
}

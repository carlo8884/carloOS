import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, buildBreadcrumbSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
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
      <div className="bg-brand-primary-pale border-t border-brand-border px-container-sm sm:px-container py-10">
        <EmailCapture variant="section" siteId="vets-co" title="Free Pet Health Newsletter" subtitle="research-based health alerts every Tuesday." source="health-hub" ctaText="Subscribe Free" perks={['Research-based', 'Weekly', 'All species']} />
      </div>
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

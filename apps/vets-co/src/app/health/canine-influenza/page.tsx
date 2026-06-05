import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Canine Influenza (Dog Flu) — H3N8, H3N2 | Vets.co', description: 'Canine influenza is caused by H3N8 and H3N2 strains. Highly contagious among dogs. Vaccine recommended for dogs that attend boarding, doggy daycare.', path: '/health/canine-influenza', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Canine Influenza (Dog Flu)', description: 'H3N8 and H3N2 canine influenza — signs, treatment, and vaccination recommendations.', url: 'https://vets.co/health/canine-influenza', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Canine Influenza', description: 'Dog flu — H3N8 and H3N2 strains, signs, and vaccination.', url: 'https://vets.co/health/canine-influenza', authorName: 'Vets.co Editorial', lastReviewed: '2025-05-01' })
const combined = combineSchemas(schema, med)
const SOURCES = [
  { label: 'AVMA: Canine Influenza', url: 'https://www.avma.org/resources-tools/animal-health/canine-influenza', publisher: 'AVMA' },
  { label: 'CDC: Dog Flu', url: 'https://www.cdc.gov/flu/other/dogflu/index.htm', publisher: 'CDC' },
  { label: 'Merck Veterinary Manual: Canine Influenza', url: 'https://www.merckvetmanual.com/respiratory-system/respiratory-diseases-of-small-animals/canine-influenza', publisher: 'Merck Vet Manual' },
]
export default function CanineInfluenzaPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Canine Influenza (Dog Flu)', subtitle: 'Canine influenza is a highly contagious respiratory infection caused by influenza A viruses adapted to dogs. Two strains currently circulate in the US: H3N8 (identified 2004) and H3N2 (identified 2015 — more recently introduced from Asia). Most dogs exposed develop mild to moderate illness; a small percentage develop serious pneumonia.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '7 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Canine Influenza', href: '/health/canine-influenza' }]}
        relatedLinks={[
          { title: 'Health Conditions', href: '/health', category: 'Hub' },
          { title: 'Dog Vaccinations Guide', href: '/health/dog-vaccinations-guide', category: 'Veterinary Guide' },
          { title: 'Kennel Cough', href: '/health/kennel-cough', category: 'Veterinary Guide' },
          { title: 'Preventive Care Schedule', href: '/health/preventive-care-schedule', category: 'Veterinary Guide' },
        ]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Signs</div>
            {['Cough — soft, moist cough', 'Nasal discharge', 'Lethargy and reduced appetite', 'Low-grade fever', 'Eye discharge', 'In severe cases: high fever, pneumonia'].map(s => (
              <div key={s} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid">{s}</div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Dog Vaccinations Guide', href: '/health/dog-vaccinations-guide' }, { label: 'Preventive Care Schedule', href: '/health/preventive-care-schedule' }, { label: 'Kennel Cough', href: '/health/kennel-cough' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-influenza" />
        </>}
      >
        <div className="carloOS-article">
          <h2>How Canine Influenza Spreads</h2>
          <p>Canine influenza is transmitted through respiratory secretions — direct dog-to-dog contact, airborne droplets (sneezing, coughing), and contact with contaminated surfaces (water bowls, kennel surfaces, human hands that have touched infected dogs). Virtually all dogs exposed to the virus develop infection — canine influenza viruses are novel to the dog immune system, meaning there is minimal pre-existing immunity in unvaccinated populations. This is different from kennel cough (Bordetella), where healthy adults with prior exposure may resist infection — essentially all naïve dogs exposed to influenza become infected.</p>
          <p>The incubation period is 2–4 days — dogs can shed virus before showing signs. A dog returning from a boarding facility may have been exposed and be shedding virus before coughing begins. This is why isolation of any dog returning from high-exposure environments (boarding, dog shows, dog parks during outbreak periods) for 7 days before returning to contact with other dogs is the responsible protocol during active outbreaks.</p>

          <h2>H3N8 vs H3N2</h2>
          <p>H3N8 (equine-origin, adapted to dogs circa 2004): emerged in US racing greyhounds, spread to pet population. Currently less prevalent than H3N2 in most US regions. H3N2 (avian-origin, introduced from Asia circa 2015): more recently introduced, associated with several major regional outbreaks including the large 2015 Chicago outbreak. H3N2 appears more contagious in the dog population. Both strains cause similar clinical illness; both are covered by the bivalent canine influenza vaccine.</p>

          <h2>Treatment</h2>
          <p>No specific antiviral treatment exists for canine influenza in dogs (canine-labeled antivirals are not available). Treatment is supportive: rest, fluid support for dehydrated or anorectic dogs, anti-inflammatory medication for fever, and antibiotics if secondary bacterial pneumonia develops (the most serious complication). Most dogs with mild illness recover in 2–4 weeks without veterinary intervention beyond rest and monitoring. Dogs with fever, complete anorexia, difficulty breathing, or signs of pneumonia (productive cough, rapid/labored breathing) require veterinary evaluation and possibly hospitalization.</p>

          <h2>Vaccination — Who Should Be Vaccinated</h2>
          <p>The canine influenza vaccine (bivalent, covering both H3N8 and H3N2) is a non-core vaccine recommended based on lifestyle risk. Dogs that should receive it: any dog that attends boarding facilities, doggy daycare, dog parks, dog shows, or group training classes — essentially any dog with regular close contact with other dogs outside the household. The vaccine reduces severity and duration of illness in vaccinated dogs that are exposed; it does not fully prevent infection. Initial vaccination requires a booster 2–4 weeks after the first dose; thereafter, annual or semi-annual boosting depending on exposure risk.</p>

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}

import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Dog Preventive Care Schedule — Puppy, Adult | Vets.co', description: 'Complete dog preventive care schedule. Puppy vaccines and deworming, adult annual maintenance, and the enhanced senior screening protocol from age 7+.', path: '/health/preventive-care-schedule', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Dog Preventive Care Schedule', description: 'Puppy, adult, and senior preventive care timelines for dogs.', url: 'https://vets.co/health/preventive-care-schedule', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Dog Preventive Care Schedule', description: 'Puppy through senior preventive care timelines for dogs.', url: 'https://vets.co/health/preventive-care-schedule', authorName: 'Vets.co Editorial', lastReviewed: '2025-05-01' })
const combined = combineSchemas(schema, med)
const SOURCES = [
  { label: 'AAHA: Canine Vaccination Guidelines', url: 'https://www.aaha.org/aaha-guidelines/vaccination-canine-configuration/', publisher: 'AAHA' },
  { label: 'WSAVA: Vaccination Guidelines for Dogs and Cats', url: 'https://wsava.org/global-guidelines/vaccination-guidelines/', publisher: 'WSAVA' },
  { label: 'Companion Animal Parasite Council: Guidelines', url: 'https://capcvet.org/guidelines/', publisher: 'CAPC' },
  { label: 'American Heartworm Society: Prevention Guidelines', url: 'https://www.heartwormsociety.org/veterinary-resources/american-heartworm-society-guidelines', publisher: 'American Heartworm Society' },
]
export default function PreventiveCareSchedulePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Dog Preventive Care Schedule', subtitle: 'Preventive care is the most cost-effective investment in a dog\'s health. Catching conditions early — before clinical signs develop — allows more treatment options, better outcomes, and lower total cost of care over the dog\'s lifetime.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Preventive Care', href: '/health/preventive-care-schedule' }]}
        relatedLinks={[
          { title: 'Health Conditions', href: '/health', category: 'Hub' },
          { title: 'Dog Vaccinations Guide', href: '/health/dog-vaccinations-guide', category: 'Veterinary Guide' },
          { title: 'Senior Dog Care', href: '/health/senior-pet-care', category: 'Veterinary Guide' },
          { title: 'Find a Vet', href: '/find-a-vet', category: 'Directory' },
        ]}
        sidebar={<>
          <RelatedLinks title="Related Guides" links={[{ label: 'Dog Vaccinations', href: '/health/dog-vaccinations-guide' }, { label: 'Senior Dog Care', href: '/health/senior-pet-care' }, { label: 'Find a Vet', href: '/find-a-vet' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-preventive-care" />
        </>}
      >
        <div className="carloOS-article">
          <h2>Puppy Schedule (Birth to 16 Weeks)</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-xs border-collapse">
              <thead><tr className="border-b border-brand-border"><th className="text-left py-2 pr-4 font-bold text-brand-text-light">Age</th><th className="text-left py-2 font-bold text-brand-text-light">Care Items</th></tr></thead>
              <tbody>
                {[
                  ['6–8 weeks', 'First DA2PP vaccine · Fecal exam · Deworming (pyrantel) · Physical exam · Begin socialization discussion'],
                  ['10–12 weeks', 'Second DA2PP · Bordetella (intranasal or oral — faster immunity) · Leptospirosis #1 if indicated · Deworming'],
                  ['14–16 weeks', 'Third DA2PP · Rabies (first dose) · Leptospirosis #2 · Lyme #1 if applicable · Microchip · Spay/neuter discussion · Heartworm prevention start'],
                  ['12–16 months', 'DA2PP booster · Rabies booster · Lyme #2 if applicable · Heartworm test · Fecal exam · Full physical exam'],
                ].map(([age, items]) => (
                  <tr key={age} className="border-b border-brand-border">
                    <td className="py-2.5 pr-4 font-mono text-brand-primary whitespace-nowrap align-top">{age}</td>
                    <td className="py-2.5 text-brand-text-mid leading-relaxed">{items}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Adult Dog Schedule (1–7 Years)</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-xs border-collapse">
              <thead><tr className="border-b border-brand-border"><th className="text-left py-2 pr-4 font-bold text-brand-text-light">Frequency</th><th className="text-left py-2 font-bold text-brand-text-light">Care Items</th></tr></thead>
              <tbody>
                {[
                  ['Annual', 'Physical exam · DA2PP (every 3 years with documented prior) · Rabies (per state law, 1 or 3 year) · Bordetella · Annual heartworm test · Fecal exam · Bloodwork (CBC + chemistry) from age 5+'],
                  ['Year-round', 'Heartworm prevention (monthly or 6-month injectable) · Flea/tick prevention (year-round in most climates)'],
                  ['Every 6 months', 'Dental check at each wellness visit · Weight and BCS monitoring'],
                  ['As needed', 'Leptospirosis annual booster (outdoor/rural dogs) · Lyme annual booster (tick-endemic areas) · Influenza booster (high-contact dogs)'],
                ].map(([freq, items]) => (
                  <tr key={freq} className="border-b border-brand-border">
                    <td className="py-2.5 pr-4 font-mono text-brand-primary whitespace-nowrap align-top">{freq}</td>
                    <td className="py-2.5 text-brand-text-mid leading-relaxed">{items}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Senior Dog Schedule (7+ Years)</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-xs border-collapse">
              <thead><tr className="border-b border-brand-border"><th className="text-left py-2 pr-4 font-bold text-brand-text-light">Frequency</th><th className="text-left py-2 font-bold text-brand-text-light">Care Items</th></tr></thead>
              <tbody>
                {[
                  ['Every 6 months', 'Comprehensive physical exam · Weight and BCS · Pain and mobility assessment · Cognitive function screening · Dental evaluation'],
                  ['Annually', 'CBC + comprehensive chemistry + urinalysis (including SDMA for early kidney disease) · T4 (thyroid) · Blood pressure measurement · Heartworm test · Fecal exam'],
                  ['From age 7 (large breeds)', 'Abdominal ultrasound annually (splenic hemangiosarcoma screening for Golden Retrievers, Labs, GSDs) · Thoracic radiographs annually from age 8'],
                  ['Cardiac breeds', 'Cavalier King Charles — cardiologist evaluation annually · Boxers — annual 24-hr Holter monitor · Dobermans — annual echo + Holter'],
                ].map(([freq, items]) => (
                  <tr key={freq} className="border-b border-brand-border">
                    <td className="py-2.5 pr-4 font-mono text-brand-primary whitespace-nowrap align-top">{freq}</td>
                    <td className="py-2.5 text-brand-text-mid leading-relaxed">{items}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Year-Round Parasite Prevention</h2>
          <p><strong>Heartworm:</strong> Monthly oral preventives (Heartgard, Sentinel, Interceptor Plus) or 6-month injectable ProHeart 6/12. Annual heartworm antigen test required for all dogs on prevention — to detect infection before starting prevention and to verify ongoing efficacy. A dog that misses doses or has a lapse in coverage should be tested before restarting prevention.</p>
          <p><strong>Flea and tick:</strong> Year-round in most of the US — fleas are active in temperatures above 45°F, which occurs year-round in most climates. Oral isoxazoline products (Bravecto 12-week, NexGard monthly, Simparica monthly) provide the most reliable efficacy. Tick-borne disease (Lyme, Anaplasmosis, Ehrlichiosis, Rocky Mountain Spotted Fever) warrants tick prevention everywhere ticks are found — not only in endemic Lyme regions.</p>
          <p><strong>Intestinal parasites:</strong> Annual or biannual fecal examination detects roundworms, hookworms, whipworms, Giardia, and Coccidia — some of which are zoonotic (transmissible to humans, including children). Monthly heartworm preventives (Heartgard, Interceptor) also prevent and control common intestinal parasites. Giardia requires specific antigen testing separate from standard fecal flotation.</p>

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}

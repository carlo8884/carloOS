import { HopDisclosure } from '../../../components/HopDisclosure'
import type { Metadata } from 'next'
import { buildMetadata, FAQAccordion, CalloutBox, ArticleLayout, CrossPortfolioCard, RelatedLinks, ShopCtas, LastUpdated } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Dog Preventive Care Schedule — Puppy, Adult | Vets.co', description: 'Complete dog preventive care schedule. Puppy vaccines and deworming, adult annual maintenance, and the enhanced senior screening protocol from age 7+.', path: '/health/preventive-care-schedule', type: 'article' })
const SOURCES = [
  { label: 'Merck Veterinary Manual: Routine Health Care of Dogs (dog owner version)', url: 'https://www.merckvetmanual.com/dog-owners/routine-care-of-dogs/routine-health-care-of-dogs', publisher: 'Merck Veterinary Manual' },
  { label: 'Companion Animal Parasite Council: Ascarid (roundworm) guidelines', url: 'https://capcvet.org/guidelines/ascarid/', publisher: 'CAPC' },
  { label: 'AAHA: Canine Vaccination Guidelines', url: 'https://www.aaha.org/aaha-guidelines/vaccination-canine-configuration/', publisher: 'AAHA' },
  { label: 'WSAVA: Vaccination Guidelines for Dogs and Cats', url: 'https://wsava.org/global-guidelines/vaccination-guidelines/', publisher: 'WSAVA' },
  { label: 'AAHA: 2023 Senior Care Guidelines for Dogs and Cats', url: 'https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/2023-aaha-senior-care-guidelines-for-dogs-and-cats/resources/2023-aaha-senior-care-guidelines-for-dogs-and-cats.pdf', publisher: 'AAHA' },
  { label: 'Companion Animal Parasite Council: Guidelines', url: 'https://capcvet.org/guidelines/', publisher: 'CAPC' },
  { label: 'American Heartworm Society: Prevention Guidelines', url: 'https://www.heartwormsociety.org/veterinary-resources/american-heartworm-society-guidelines', publisher: 'American Heartworm Society' },
]
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Dog Preventive Care Schedule', description: 'Puppy, adult, and senior preventive care timelines for dogs.', url: 'https://vets.co/health/preventive-care-schedule', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-10-13T00:00:00Z' ,
  citation: SOURCES,
})
const med = buildMedicalWebPageSchema({ name: 'Dog Preventive Care Schedule', description: 'Puppy through senior preventive care timelines for dogs.', url: 'https://vets.co/health/preventive-care-schedule', authorName: 'Vets.co Editorial', lastReviewed: '2026-06-07' })
const combined = combineSchemas(schema, med)
const FAQS = [
  {
    "question": "How often should a puppy see the vet?",
    "answer": "Every 3 to 4 weeks until about 4 months old, according to the Merck Veterinary Manual. After that, adult dogs need a full checkup at least once a year, and senior dogs twice a year or more."
  },
  {
    "question": "Which vaccines does my dog need?",
    "answer": "Merck says core vaccines recommended by nearly all veterinarians protect against distemper, parvovirus, and rabies. Vaccines such as Lyme disease or Bordetella matter in certain areas or lifestyles, and your vet will set the booster schedule."
  },
  {
    "question": "Does my dog need heartworm prevention all year?",
    "answer": "Yes. The Merck Veterinary Manual says dogs should be tested for heartworm every year and receive heartworm prevention year-round. Many heartworm medicines also help prevent intestinal parasites."
  },
  {
    "question": "How often should my dog have a fecal test?",
    "answer": "Sources differ. The Companion Animal Parasite Council (CAPC) recommends testing at least four times in a puppy's first year and at least two times per year in adult dogs, depending on health and lifestyle. The Merck Veterinary Manual's dog-owner guide describes a fecal test once a year, and AAHA's 2023 senior care guidelines suggest 1 to 4 times a year for senior dogs depending on preventive use and lifestyle. Ask your veterinarian which fits your dog."
  }
]
export default function PreventiveCareSchedulePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Dog Preventive Care Schedule', subtitle: 'Preventive care is the most cost-effective investment in a dog\'s health. Catching conditions early — before clinical signs develop — allows more treatment options, better outcomes, and lower total cost of care over the dog\'s lifetime.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', publishedAt: 'May 2025', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Preventive Care', href: '/health/preventive-care-schedule' }]}
        relatedLinks={[
          { title: 'Health Conditions', href: '/health', category: 'Hub' },
          { title: 'Dog Vaccinations Guide', href: '/health/dog-vaccinations-guide', category: 'Veterinary Guide' },
          { title: 'Senior Dog Care', href: '/health/senior-pet-care', category: 'Veterinary Guide' },
          { title: 'Find a Vet', href: '/find-a-vet', category: 'Directory' },
        ]}
        sidebar={<>
          <RelatedLinks title="Related Guides" links={[{ label: 'Dog Vaccinations', href: '/health/dog-vaccinations-guide' }, { label: 'Senior Dog Care', href: '/health/senior-pet-care' }, { label: 'Find a Vet', href: '/find-a-vet' }]} />

                  <CrossPortfolioCard currentSite="vets-co" contentType="health" variant="sidebar" />
</>}
      >
        <div className="carloOS-article">
          <LastUpdated date="2026-10-13" />

          <CalloutBox variant="info" title="Short answer">
            <p>The Merck Veterinary Manual recommends vet visits every 3 to 4 weeks for puppies until 4 months old, at least once a year for adult dogs, and twice a year or more for senior dogs over 7 to 8 years old. Core vaccines protect against distemper, parvovirus, and rabies, and Merck advises a heartworm test every year with year-round heartworm prevention. Source: <a href="https://www.merckvetmanual.com/dog-owners/routine-care-of-dogs/routine-health-care-of-dogs">Merck Veterinary Manual (dog owner version)</a>.</p>
          </CalloutBox>

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
          <p>A wall-mounted magnetic monthly planner is how those 6–8, 10–12, and 14–16 week slots stay visible between visits — it is not a hardcover weekly appointment planner, not a dry-erase monthly calendar, and not an analog wall clock. It does not set a vaccine date. A waterproof rear seat hammock is how a not-yet-crate-trained puppy gets to those three booster visits without hopping a dog seat-belt tether or a soft-sided vet-visit carrier. Household ride and calendar gear does not replace the veterinarian who decides DA2PP, rabies, or when heartworm prevention starts.</p>

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
                  ['Every 6–12 months (AAHA)', 'CBC + comprehensive chemistry + urinalysis (including SDMA for early kidney disease)'],
                  ['Annually', 'T4 (thyroid) · Blood pressure measurement · Heartworm test'],
                  ['1–4 times a year (AAHA)', 'Fecal exam, depending on preventive use and lifestyle'],
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

          <h2 id="kit">Supplies named on this page</h2>
          <p>
            Keep these on hand: a wall-mounted magnetic monthly planner so the next wellness slot stays on the fridge, a waterproof rear seat hammock so the clinic ride does not soak the back seat, and a folding four-wheel dog stroller so a senior with a six-month mobility assessment can still make the lobby. These are household cadence and clinic-trip tools, not treatments. They do not replace a vaccine, a heartworm test, a fecal exam, or a veterinarian-chosen preventive, and they are not a ranked product list. Heartgard, Sentinel, Interceptor, ProHeart, Bravecto, NexGard, Simparica, and other prescription brands are not product links.
          </p>

          <HopDisclosure siteId="vets-co" href={["/go/amazon-brand/wall+mounted+magnetic+monthly+planner?s=health-preventive-care-schedule", "/go/amazon-brand/waterproof+rear+seat+hammock?s=health-preventive-care-schedule", "/go/amazon-brand/folding+four+wheel+dog+stroller?s=health-preventive-care-schedule"]} />

          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop these supplies
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              Keep these on hand: a wall-mounted magnetic monthly planner, a waterproof rear seat hammock, and a folding four-wheel dog stroller. Everyday cadence and clinic-trip supplies only.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/wall+mounted+magnetic+monthly+planner?s=health-preventive-care-schedule"
                amazonLabel="Browse wall-mounted magnetic monthly planners on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/waterproof+rear+seat+hammock?s=health-preventive-care-schedule"
                amazonLabel="Browse waterproof rear seat hammocks on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/folding+four+wheel+dog+stroller?s=health-preventive-care-schedule"
                amazonLabel="Browse folding four-wheel dog strollers on Amazon →"
              />
            </div>
          </div>
          <h2 id="faq">Frequently asked questions</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />


          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}

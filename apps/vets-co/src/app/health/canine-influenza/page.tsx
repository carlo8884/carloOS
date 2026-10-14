import { HopDisclosure } from '../../../components/HopDisclosure'
import type { Metadata } from 'next'
import { buildMetadata, FAQAccordion, CalloutBox, ArticleLayout, CrossPortfolioCard, RelatedLinks, ShopCtas, LastUpdated } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Canine Influenza (Dog Flu) — H3N8, H3N2 | Vets.co', description: 'Canine influenza is caused by H3N8 and H3N2 strains. Highly contagious among dogs. Vaccine recommended for dogs that attend boarding, doggy daycare.', path: '/health/canine-influenza', type: 'article' })
const SOURCES = [
  { label: 'AVMA: Canine Influenza', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/canine-influenza', publisher: 'AVMA' },
  { label: 'Merck Veterinary Manual: Canine Influenza', url: 'https://www.merckvetmanual.com/respiratory-system/respiratory-diseases-of-small-animals/canine-influenza-flu', publisher: 'Merck Vet Manual' },
]
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Canine Influenza (Dog Flu)', description: 'H3N8 and H3N2 canine influenza — signs, treatment, and vaccination recommendations.', url: 'https://vets.co/health/canine-influenza', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-10-14T00:00:00Z' ,
  citation: SOURCES,
})
const med = buildMedicalWebPageSchema({ name: 'Canine Influenza', description: 'Dog flu — H3N8 and H3N2 strains, signs, and vaccination.', url: 'https://vets.co/health/canine-influenza', authorName: 'Vets.co Editorial', lastReviewed: '2026-10-13' })
const combined = combineSchemas(schema, med)
const FAQS = [
  {
    "question": "How long is a dog with canine influenza contagious?",
    "answer": "According to the Merck Veterinary Manual, dogs are most contagious 2 to 4 days after infection, can spread the virus before they show signs, and should be considered contagious for up to 4 weeks after exposure."
  },
  {
    "question": "Do antibiotics treat dog flu?",
    "answer": "No. Merck says antibiotics have no effect on the influenza virus itself, though a vet may use them for a secondary bacterial infection. The antiviral oseltamivir is neither approved nor recommended for dogs with canine influenza."
  },
  {
    "question": "Can people catch canine influenza?",
    "answer": "Merck reports no evidence of the H3N2 canine influenza virus spreading from dogs to people. Cats have been infected with H3N2."
  },
  {
    "question": "How many doses does the canine influenza vaccine need?",
    "answer": "Two doses are needed for an effective immune response, per the Merck Veterinary Manual. Vaccines are available for H3N8, H3N2, or both strains combined."
  }
]
export default function CanineInfluenzaPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Canine Influenza (Dog Flu)', subtitle: 'Canine influenza is a highly contagious respiratory infection caused by influenza A viruses adapted to dogs. Two strains currently circulate in the US: H3N8 (identified 2004) and H3N2 (identified 2015 — more recently introduced from Asia). Most dogs exposed develop mild to moderate illness; a small percentage develop serious pneumonia.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', publishedAt: 'May 2025', readTime: '7 min',}}
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

                  <CrossPortfolioCard currentSite="vets-co" contentType="health" variant="sidebar" />
</>}
      >
        <div className="carloOS-article">
          <div data-top-shop className="not-prose my-5 rounded-xl border border-brand-border bg-brand-surface px-4 py-3">
            <HopDisclosure siteId="vets-co" href="/go/amazon-brand/double+door+wire+dog+crate?s=health-canine-influenza" />
            <ShopCtas amazonHref="/go/amazon-brand/double+door+wire+dog+crate?s=health-canine-influenza" amazonLabel="Browse double-door wire dog crates on Amazon →" />
            <a href="#kit" className="inline-flex min-h-[44px] items-center text-xs text-brand-text-mid underline underline-offset-2">All supplies on this page ↓</a>
          </div>
          <LastUpdated date="2026-10-14" />

          <CalloutBox variant="info" title="Short answer">
            <p>Canine influenza (dog flu) spreads between dogs through the air, shared objects such as water bowls, and people's hands and clothes. Most infected dogs get a mild illness with a cough that lasts 1 to 3 weeks; some develop high fever and pneumonia. Treatment is supportive and most dogs recover in 2 to 3 weeks. Vaccines need two doses, and there is no evidence the H3N2 strain spreads from dogs to people. Source: <a href="https://www.merckvetmanual.com/respiratory-system/respiratory-diseases-of-small-animals/canine-influenza-flu">Merck Veterinary Manual</a>.</p>
          </CalloutBox>


          <h2>How Canine Influenza Spreads</h2>
          <p>Canine influenza is transmitted through respiratory secretions — direct dog-to-dog contact, airborne droplets (sneezing, coughing), and contact with contaminated surfaces (water bowls, kennel surfaces, human hands that have touched infected dogs). Virtually all dogs exposed to the virus develop infection — canine influenza viruses are novel to the dog immune system, meaning there is minimal pre-existing immunity in unvaccinated populations. This is different from kennel cough (Bordetella), where healthy adults with prior exposure may resist infection — essentially all naïve dogs exposed to influenza become infected.</p>
          <p>The incubation period is 1–5 days, dogs are most contagious 2–4 days after infection, and they can shed virus before showing signs (Merck Veterinary Manual). A dog returning from a boarding facility may have been exposed and be shedding virus before coughing begins. This is why isolation of any dog returning from high-exposure environments (boarding, dog shows, dog parks during outbreak periods) for 7 days before returning to contact with other dogs is the responsible protocol during active outbreaks. A double-door wire dog crate in a separate room is how that 7-day isolation becomes a physical setup instead of a hope the dogs stay apart — it is not a recovery crate, not a soft-sided crate, not a wire crate with a divider panel, and not an airline crate. It does not prevent infection and it does not replace a veterinarian. A pet-safe kennel disinfectant spray is how bowls and kennel surfaces get a pass after a boarding or daycare return — it is not accelerated hydrogen peroxide labeled for parvovirus, not an enzymatic stain cleaner, and not a small-animal cage cleaner. Hands that touched the returning dog should be washed before they touch the household dogs. These are household isolation tools, not treatments.</p>

          <h2>H3N8 vs H3N2</h2>
          <p>H3N8 (equine-origin, adapted to dogs circa 2004): emerged in US racing greyhounds, spread to pet population. Merck notes it is not known whether H3N8 strains are still circulating, and active H3N8 infection is very rare, if it occurs at all. H3N2 (avian-origin, introduced from Asia circa 2015): more recently introduced, associated with several major regional outbreaks including the large 2015 Chicago outbreak. H3N2 appears more contagious in the dog population. Both strains cause similar clinical illness; vaccines are available for each strain and as a combined vaccine.</p>

          <h2>Treatment</h2>
          <p>No specific antiviral treatment exists for canine influenza in dogs (canine-labeled antivirals are not available). Treatment is supportive: rest, fluid support for dehydrated or anorectic dogs, anti-inflammatory medication for fever, and antibiotics if secondary bacterial pneumonia develops (the most serious complication). Most dogs recover in 2–3 weeks (Merck) without veterinary intervention beyond rest and monitoring. Dogs with fever, complete anorexia, difficulty breathing, or signs of pneumonia (productive cough, rapid/labored breathing) require veterinary evaluation and possibly hospitalization. A digital pet thermometer gives you a temperature reading to share with your veterinarian; it does not replace an exam. A rising count or labored effort is a reason to call the veterinarian, not a diagnosis of pneumonia, and not a substitute for the clinic that decides whether supportive care or hospitalization is indicated.</p>

          <h2>Vaccination — Who Should Be Vaccinated</h2>

          <h2 id="kit">Dog-flu isolation kit</h2>
          <p>
            Keep these on hand: a double-door wire dog crate so the returning dog spends the 7-day isolation in a separate room, a pet-safe kennel disinfectant spray so bowls and kennel surfaces get a pass after boarding or daycare, and a digital pet thermometer so a temperature reading is a number you can give the veterinarian. These are household isolation tools, not treatments. They do not prevent canine influenza, they do not replace a veterinarian-recommended vaccine, and they are not a ranked product list.
          </p>

          <HopDisclosure siteId="vets-co" href={["/go/amazon-brand/double+door+wire+dog+crate?s=health-canine-influenza", "/go/amazon-brand/pet+safe+kennel+disinfectant+spray?s=health-canine-influenza", "/go/amazon-brand/digital+pet+thermometer?s=health-canine-influenza"]} />

          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop these supplies
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              Keep these on hand: a double-door wire dog crate, a pet-safe kennel disinfectant spray, and a digital pet thermometer. Everyday physical supplies only.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/double+door+wire+dog+crate?s=health-canine-influenza"
                amazonLabel="Browse double-door wire dog crates on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/pet+safe+kennel+disinfectant+spray?s=health-canine-influenza"
                amazonLabel="Browse pet-safe kennel disinfectant sprays on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/digital+pet+thermometer?s=health-canine-influenza"
                amazonLabel="Browse digital pet thermometers on Amazon →"
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

import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, CalloutBox, PullQuote, ArticleByline, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'
const SOURCES = [
  { label: 'WSAVA: Vaccination Guidelines for the Owners and Breeders of Dogs and Cats', url: 'https://wsava.org/committees/vaccination-guidelines-group/', publisher: 'WSAVA' },
  { label: 'AAHA: Canine Vaccination Guidelines (2022)', url: 'https://www.aaha.org/aaha-guidelines/vaccination-canine-configuration/vaccination-canine/', publisher: 'AAHA' },
  { label: 'AVMA: Vaccination Basics for Dogs and Cats', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/vaccination-basics', publisher: 'AVMA' },
  { label: 'Merck Veterinary Manual: Overview of Vaccination Programs for Dogs', url: 'https://www.merckvetmanual.com/dog-owners/disorders-affecting-multiple-body-systems-of-dogs/vaccination-of-dogs', publisher: 'Merck Vet Manual' },
]

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Dog Vaccination Schedule — Core, Non-Core | Dog.com', description: 'Complete dog vaccination guide. Core vaccines every dog needs, non-core vaccines by lifestyle, titer testing to avoid over-vaccination.', path: '/health/dog-vaccinations', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Dog Vaccination Schedule', description: 'Core and non-core vaccines, puppy schedule, and titer testing for dogs.', url: 'https://dog.com/health/dog-vaccinations', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-05-28T00:00:00Z' ,
  citation: SOURCES,
})
const med = buildMedicalWebPageSchema({ name: 'Dog Vaccination Schedule', description: 'Core vaccines, non-core vaccines, and puppy vaccination schedule.', url: 'https://dog.com/health/dog-vaccinations', authorName: 'Dog.com Editorial', lastReviewed: '2025-05-01' })
const combined = combineSchemas(schema, med)
const FAQS = [
  { question: 'How often does my adult dog need rabies vaccine?', answer: 'Rabies vaccination schedules are governed by state law. Most states allow a 3-year booster after the initial 1-year vaccine. Some states still require annual rabies vaccination. Check your specific state law — your veterinarian will know the local requirement.' },
  { question: 'What is titer testing and should I use it?', answer: 'A titer test measures circulating antibodies for specific diseases — it tells you whether a previous vaccine generated a protective immune response. Positive titers for parvovirus, distemper, and adenovirus indicate likely protection and can inform the decision to delay revaccination. Titer testing is most useful for owners concerned about over-vaccination in adult dogs with documented vaccine history. Rabies titers cannot legally substitute for vaccination in most US states.' },
  { question: 'Can I vaccinate my own dog at home?', answer: 'Some vaccines (DA2PP, bordetella) are available over the counter. Veterinary administration is recommended for several reasons: proper cold-chain storage, correct injection technique, observation for vaccine reactions (which can occur within 30-60 minutes), and documented official records. Rabies vaccine is not legally administered by non-veterinarians in most states.' },
]
export default function DogVaccinationsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'Dog Vaccination Schedule', subtitle: 'Vaccines are among the most impactful preventive health tools in veterinary medicine. Understanding which vaccines are essential, which are lifestyle-dependent, and how often to booster prevents both under-vaccination (disease risk) and over-vaccination (unnecessary procedures).', category: 'Dog Health', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '10 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: 'Vaccinations', href: '/health/dog-vaccinations' }]}
        relatedLinks={[{ title: 'Dog Health Hub', href: '/health', category: 'Hub' }, { title: 'Heartworm Prevention', href: '/health/heartworm-prevention', category: 'Dog Health' }, { title: 'Dog Dental Care', href: '/health/dog-dental-care', category: 'Dog Health' }, { title: 'Spay or Neuter Guide', href: '/health/spay-neuter-guide', category: 'Dog Health' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-2">Core Vaccines</div>
            <p className="text-xs text-brand-text-light m-0 mb-3">Every dog regardless of lifestyle</p>
            {['Rabies', 'Distemper (DA2PP)', 'Parvovirus (in DA2PP)', 'Adenovirus (in DA2PP)'].map(v => (
              <div key={v} className="py-1.5 border-b border-brand-border last:border-0 text-xs text-brand-text-mid flex gap-2 items-center"><span className="text-green-500 font-bold">✓</span>{v}</div>
            ))}
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mt-3 mb-2">Non-Core (Lifestyle)</div>
            {['Bordetella (boarding/dog parks)', 'Leptospirosis (outdoor/rural)', 'Lyme (tick exposure areas)', 'Influenza (high contact dogs)'].map(v => (
              <div key={v} className="py-1.5 border-b border-brand-border last:border-0 text-xs text-brand-text-mid flex gap-2 items-center"><span className="text-brand-primary">→</span>{v}</div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Best Flea & Tick Prevention', href: '/reviews/best-flea-tick-prevention' }, { label: 'Heartworm Prevention', href: '/health/heartworm-prevention' }, { label: 'Find a Vet', href: '/find-a-vet' }]} />
          <RelatedLinks title="Plan for the Cost" links={[{ label: 'Compare Pet Insurance', href: '/reviews/best-pet-insurance' }]} />
          <CrossPortfolioCard currentSite="dog-com" contentType="health" variant="sidebar" />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="health-vaccinations" />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Dog.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-05-28T00:00:00Z" reviewedBy="Editorial team" />

          <p className="text-lg leading-relaxed text-brand-text-mid mb-6">
            Every dog needs four core vaccines per WSAVA guidelines: rabies (required by law),
            distemper, adenovirus, and parvovirus (combined as DA2PP). Puppies receive a
            series from 6–8 weeks through 16 weeks, then a one-year booster, then every
            three years for adults with documented history. Non-core vaccines — bordetella,
            leptospirosis, Lyme, influenza — depend on lifestyle and geographic exposure.
            Titer testing can support evidence-based revaccination decisions for adults.
          </p>

          <CalloutBox variant="evidence" title="Evidence-anchored">
            Core vaccine selection follows the <strong>WSAVA Vaccination Guidelines for the Owners and Breeders of Dogs and Cats</strong> — the international standard for canine immunization. Recommendations reflect the WSAVA guideline framework as published.
          </CalloutBox>

          <h2>Core Vaccines — Every Dog</h2>
          <p>Core vaccines protect against diseases that are severe, widely distributed, or transmissible to humans. The <a href="https://wsava.org/committees/vaccination-guidelines-group/" rel="noopener" target="_blank" className="text-brand-primary hover:underline">WSAVA</a> guidelines define four core canine vaccines:</p>
          <ul>
            <li><strong>Rabies:</strong> Required by law in virtually all US states. Fatal in dogs and humans. Initial vaccine at 12–16 weeks, booster at 1 year, then every 1–3 years per state law and product label.</li>
            <li><strong>DA2PP (Distemper/Adenovirus/Parvovirus/Parainfluenza):</strong> A combination vaccine protecting against four diseases. Distemper causes severe neurological disease. Parvovirus causes fatal hemorrhagic gastroenteritis, particularly in puppies. Puppy series starting at 6–8 weeks, every 3–4 weeks until 16 weeks, booster at 1 year, then every 3 years in adult dogs with documented prior vaccination.</li>
          </ul>

          <h2>Puppy Vaccination Schedule</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-brand-border">
                  <th className="text-left py-2 pr-4 text-xs font-bold text-brand-text-light">Age</th>
                  <th className="text-left py-2 pr-4 text-xs font-bold text-brand-text-light">Vaccines</th>
                </tr>
              </thead>
              <tbody>
                {[['6–8 weeks', 'DA2PP (first in series)'], ['10–12 weeks', 'DA2PP + Bordetella + Leptospirosis (if indicated)'], ['14–16 weeks', 'DA2PP + Rabies + Leptospirosis booster'], ['12–16 months', 'DA2PP booster + Rabies booster + Lyme (if applicable)'], ['Every 3 years', 'DA2PP + Rabies (per state law)']].map(([age, vax]) => (
                  <tr key={age} className="border-b border-brand-border">
                    <td className="py-2 pr-4 text-brand-text-light text-xs font-mono whitespace-nowrap">{age}</td>
                    <td className="py-2 text-brand-text-mid text-xs">{vax}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <PullQuote variant="inline" quote="Titer testing is most useful for owners concerned about over-vaccination in adult dogs with documented vaccine history." attribution="On evidence-based revaccination" />

          <h2>Non-Core Vaccines — Lifestyle Dependent</h2>
          <p><strong>Bordetella (kennel cough):</strong> Recommended for dogs in boarding facilities, doggy daycare, training classes, or frequent dog park contact. Highly contagious but rarely serious in healthy adult dogs. Intranasal or oral administration provides faster immunity than injectable. Annual booster; some facilities require every 6 months.</p>
          <p><strong>Leptospirosis:</strong> Bacterial disease transmitted through urine of infected wildlife — particularly rats, raccoons, and deer. Affects kidneys and liver; can be fatal and is transmissible to humans. Recommended for dogs with outdoor exposure, especially in areas near water sources, wooded areas, or urban environments with rodent populations. Two initial vaccines 3–4 weeks apart, then annual booster.</p>
          <p><strong>Lyme:</strong> Recommended in high-tick-burden geographic areas (Northeast, Upper Midwest, Pacific Coast). Requires two initial vaccines 3–4 weeks apart, then annual booster. Does not replace tick prevention — use both.</p>
          <p><strong>Canine Influenza (H3N2/H3N8):</strong> Recommended for dogs with high social contact — boarding, shows, sporting events. Two initial vaccines 3–4 weeks apart, then annual booster.</p>

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}

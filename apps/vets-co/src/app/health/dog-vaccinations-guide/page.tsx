import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, FAQAccordion, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Dog Vaccination Guide — Core, Non-Core & Titer Testing | Vets.co', description: 'Complete dog vaccination guide from a veterinary perspective. Core vaccines every dog needs, non-core lifestyle vaccines, titer testing.', path: '/health/dog-vaccinations-guide', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Dog Vaccination Guide', description: 'Core vaccines, non-core vaccines, titer testing, and puppy schedule from a veterinary perspective.', url: 'https://vets.co/health/dog-vaccinations-guide', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-07T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Dog Vaccination Guide', description: 'Core and non-core vaccines, titer testing, and puppy schedule.', url: 'https://vets.co/health/dog-vaccinations-guide', authorName: 'Vets.co Editorial', lastReviewed: '2026-06-07' })
const combined = combineSchemas(schema, med)
const FAQS = [
  { question: 'How often does an adult dog need the DA2PP vaccine?', answer: 'After the initial puppy series and the 12-month booster, adult dogs with documented vaccination history can receive DA2PP every 3 years. This reflects the duration of immunity studies for modern vaccines. Some dogs receive it more frequently based on lifestyle, boarding requirements, or owner preference — but the WSAVA guidelines support 3-year intervals for adult dogs with documented prior vaccination.' },
  { question: 'Can I vaccinate my puppy before 16 weeks and trust immunity?', answer: 'Puppies receive maternal antibodies through colostrum that interfere with vaccine response — this is why a series of vaccines is needed rather than a single dose. The timing of the last puppy vaccine (14–16 weeks) ensures it is given after maternal antibody levels have fallen enough to allow the puppy to mount its own immune response. Vaccines given only at 8 weeks may not confer lasting protection because maternal antibodies blocked the response. The 14-16 week final puppy dose is the critical one.' },
  { question: 'What is the difference between modified live and killed vaccines?', answer: 'Modified live vaccines (MLV) contain attenuated (weakened) live virus — they replicate briefly in the host, triggering a strong immune response similar to natural infection without causing disease. They provide more durable immunity with fewer doses than killed vaccines. Killed (inactivated) vaccines contain dead virus or viral components — safer in immunocompromised animals but generally require boosters and adjuvants to generate adequate immune response. DA2PP is available in both forms; rabies vaccines for dogs are typically killed.' },
]
const SOURCES = [
  { label: 'WSAVA: Vaccination Guidelines for Dogs and Cats', url: 'https://wsava.org/global-guidelines/vaccination-guidelines/', publisher: 'WSAVA' },
  { label: 'AAHA: Canine Vaccination Guidelines', url: 'https://www.aaha.org/aaha-guidelines/vaccination-canine-configuration/', publisher: 'AAHA' },
  { label: 'AVMA: Vaccinations for Your Pet', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/vaccinations-your-pet', publisher: 'AVMA' },
]
export default function DogVaccinationsGuidePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Dog Vaccination Guide', subtitle: 'Vaccines are one of the most cost-effective interventions in veterinary medicine — preventing diseases that are far more expensive to treat and often fatal. Understanding which vaccines your dog actually needs (versus which are optional based on lifestyle) helps you make informed decisions with your veterinarian.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', publishedAt: 'May 2025', readTime: '10 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Vaccinations', href: '/health/dog-vaccinations-guide' }]}
        relatedLinks={[
          { title: 'Health Conditions', href: '/health', category: 'Hub' },
          { title: 'Preventive Care Schedule', href: '/health/preventive-care-schedule', category: 'Veterinary Guide' },
          { title: 'Parvovirus in Puppies', href: '/health/parvovirus-in-puppies', category: 'Veterinary Guide' },
          { title: 'Find a Vet', href: '/find-a-vet', category: 'Directory' },
        ]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Core — Every Dog</div>
            {['Rabies (legal requirement)', 'DA2PP (Distemper/Parvo/Adeno)', 'Parvovirus (in DA2PP)'].map(v => (
              <div key={v} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid flex gap-2"><span className="text-green-600 font-bold">✓</span>{v}</div>
            ))}
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mt-3 mb-2">Non-Core — By Lifestyle</div>
            {['Bordetella (boarding/parks)', 'Leptospirosis (outdoor/rural)', 'Lyme (tick-endemic areas)', 'Influenza (high-contact dogs)'].map(v => (
              <div key={v} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid flex gap-2"><span className="text-brand-primary">→</span>{v}</div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Preventive Care Schedule', href: '/health/preventive-care-schedule' }, { label: 'Find a Vet', href: '/find-a-vet' }, { label: 'Senior Dog Care', href: '/health/senior-pet-care' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-vaccinations" />
                  <CrossPortfolioCard currentSite="vets-co" contentType="health" variant="sidebar" />
</>}
      >
        <div className="carloOS-article">
          <h2>Core Vaccines — Every Dog Regardless of Lifestyle</h2>
          <p><strong>Rabies:</strong> Required by law in virtually all US states and many countries. Fatal in all mammals including humans. No treatment exists for clinical rabies — prevention is the only option. Initial vaccine at 12–16 weeks, booster at 1 year, then every 1 or 3 years depending on state law and vaccine product label. Rabies vaccination certificates must be kept current for legal compliance.</p>
          <p><strong>DA2PP (Distemper, Adenovirus-2, Parvovirus, Parainfluenza):</strong> A combination vaccine protecting against four diseases. Canine parvovirus is highly contagious and fatal in unvaccinated puppies — it survives in the environment for months to years and is resistant to most common disinfectants. Canine distemper causes severe multisystemic disease including neurological damage. Puppy series starting at 6–8 weeks, every 3–4 weeks until 16 weeks, booster at 12–16 months, then every 3 years in documented adult dogs.</p>

          <h2>Non-Core Vaccines — Lifestyle Dependent</h2>
          <p><strong>Bordetella bronchiseptica (kennel cough):</strong> Recommended for any dog with exposure to other dogs — boarding, daycare, dog parks, training classes, grooming salons, dog shows. Bordetella is highly contagious via respiratory secretions. Intranasal or oral administration provides local immunity faster (within 72 hours) than injectable — important before boarding. Annual booster; some facilities require every 6 months.</p>
          <p><strong>Leptospirosis:</strong> Bacterial disease transmitted through urine of infected wildlife — rats, raccoons, deer, skunks. Dogs at risk: any dog with access to natural water sources, wooded areas, or urban environments with rodent populations. Leptospirosis affects kidneys and liver and is transmissible to humans (zoonotic). Two initial vaccines 3–4 weeks apart, then annual booster. The vaccine covers 4 serovars (L4) — ask for the 4-serovar product.</p>
          <p><strong>Lyme disease:</strong> Recommended in tick-endemic areas — Northeast, Upper Midwest, Pacific Northwest. Two initial doses 3–4 weeks apart, then annual booster. Does not replace tick prevention — use both. The Lyme vaccine reduces disease severity if a vaccinated dog is infected but does not provide complete protection.</p>
          <p><strong>Canine influenza (H3N2/H3N8):</strong> For dogs with high-contact lifestyles — boarding, dog shows, competition events, grooming salons. Influenza outbreaks occur periodically in dog populations and can be severe. Two initial doses 3–4 weeks apart, then annual booster.</p>

          <h2>Titer Testing</h2>
          <p>Titer tests measure circulating antibody levels against specific pathogens — they assess whether a prior vaccine generated a protective immune response. Positive titers for parvovirus, distemper, and adenovirus indicate likely immunity and can support a decision to defer revaccination. The Vaccicheck in-clinic titer test provides same-day results for these three antigens.</p>
          <p>Important limitations: titer testing cannot substitute for rabies vaccination in most US states (legal requirement regardless of titer status). Titers measure one arm of immunity — circulating antibodies — and do not capture cell-mediated immunity. A negative titer does not definitively mean the dog is unprotected; a positive titer does not guarantee protection against all strains. Titer testing is most useful for owners of adult dogs with documented vaccine history who want to minimize vaccine frequency.</p>

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}

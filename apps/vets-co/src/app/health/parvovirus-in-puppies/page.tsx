import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, FAQAccordion, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline, CalloutBox, ArticleSourcesList } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: "Parvovirus in Puppies — Signs, Treatment, Prevention | Vets.co", description: "Canine parvovirus is a contagious, life-threatening illness in unvaccinated puppies. Learn the signs, why it is an emergency, and how vaccination prevents it.", path: '/health/parvovirus-in-puppies', type: 'article' })
const SOURCES = [
  { label: 'AVMA: Canine Parvovirus', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/canine-parvovirus', publisher: 'AVMA' },
  { label: 'Merck Veterinary Manual: Canine Parvovirus', url: 'https://www.merckvetmanual.com/generalized-conditions/canine-parvovirus/overview-of-canine-parvovirus', publisher: 'Merck Vet Manual' },
  { label: 'AAHA: Canine Vaccination Guidelines (DA2PP)', url: 'https://www.aaha.org/aaha-guidelines/vaccination-canine-configuration/', publisher: 'AAHA' },
]
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Parvovirus in Puppies', description: 'Signs, treatment, and prevention of canine parvovirus.', url: 'https://vets.co/health/parvovirus-in-puppies', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' ,
  citation: SOURCES,
})
const med = buildMedicalWebPageSchema({ name: 'Parvovirus in Puppies', description: 'Signs, treatment, and prevention of canine parvovirus.', url: 'https://vets.co/health/parvovirus-in-puppies', authorName: 'Vets.co Editorial', lastReviewed: '2026-06-01' })
const combined = combineSchemas(schema, med)
const FAQS = [
  { question: "Why is parvo so dangerous for puppies?", answer: "Canine parvovirus attacks rapidly dividing cells, especially in the intestinal lining and bone marrow. It destroys the gut lining, causing severe bloody diarrhea and vomiting that lead to rapid, life-threatening dehydration, while also suppressing the immune system and allowing dangerous secondary infections. Puppies are most at risk because their immune systems are immature and they may not yet be fully vaccinated. Without prompt, intensive treatment, parvo is frequently fatal — but with aggressive supportive care, many puppies survive." },
  { question: "How is parvo treated?", answer: "There is no medication that kills the virus directly; treatment is intensive supportive care while the puppy's immune system fights it off. This typically means hospitalization with intravenous fluids to combat dehydration, anti-nausea medication, control of secondary bacterial infection, pain management, and nutritional support, with the specific medications and dosing determined by the veterinary team. Survival improves significantly with early, aggressive hospital care, which is why suspected parvo is an emergency requiring immediate veterinary attention." },
  { question: "Can parvo be prevented?", answer: "Yes — vaccination is highly effective and is the cornerstone of prevention. Puppies receive a series of vaccinations starting in early puppyhood, with boosters until they are old enough for full protection, because maternal antibodies can interfere with earlier doses. Until the series is complete, unvaccinated puppies should avoid areas where unvaccinated dogs may have been, since the virus is extremely hardy in the environment. Following the recommended vaccination schedule from your veterinarian is the single best protection against this deadly disease." },
]
export default function ParvoPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Parvovirus in Puppies', subtitle: 'Canine parvovirus is one of the most serious infectious diseases a puppy can face — highly contagious, environmentally hardy, and frequently fatal without prompt intensive care. It is also almost entirely preventable through vaccination. Recognizing the signs early and acting immediately gives an affected puppy the best chance of survival.', category: 'Emergency Guide', authorName: 'Vets.co Editorial', publishedAt: 'June 2026', readTime: '8 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Parvovirus', href: '/health/parvovirus-in-puppies' }]}
        relatedLinks={[
          { title: 'Health Conditions', href: '/health', category: 'Hub' },
          { title: 'Dog Vaccinations Guide', href: '/health/dog-vaccinations-guide', category: 'Veterinary Guide' },
          { title: 'Dehydration in Dogs', href: '/health/dehydration-in-dogs', category: 'Veterinary Guide' },
          { title: 'Emergency Signs', href: '/health/emergency-signs', category: 'Emergency Guide' },
        ]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Warning Signs</div>
            {[['Bloody diarrhea', 'Often foul-smelling'], ['Vomiting', 'Repeated, severe'], ['Lethargy', 'Sudden, profound'], ['Not eating', 'Refusing food and water']].map(([p, d]) => (
              <div key={p} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{p}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Dog Vaccinations Guide', href: '/health/dog-vaccinations-guide' }, { label: 'Dehydration in Dogs', href: '/health/dehydration-in-dogs' }, { label: 'Emergency Signs', href: '/health/emergency-signs' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-parvo" />
                  <CrossPortfolioCard currentSite="vets-co" contentType="health" variant="sidebar" />
</>}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Vets.co Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

          <CalloutBox variant="warning" title="Suspected parvo is an emergency">
            A puppy with vomiting, bloody diarrhea, and sudden lethargy needs emergency veterinary care immediately. Parvo progresses fast and is often fatal without prompt intensive treatment. Early hospitalization dramatically improves survival, so do not wait to see if the puppy improves on its own.
          </CalloutBox>

          <h2>What Parvovirus Is</h2>
          <p>Canine parvovirus is a highly contagious virus that targets rapidly dividing cells, primarily in the intestinal lining and bone marrow. By destroying the gut lining, it causes severe vomiting and bloody diarrhea, leading to dangerous dehydration and allowing bacteria from the gut to enter the bloodstream. By suppressing the immune system, it leaves the puppy vulnerable to overwhelming secondary infection. The virus is extremely tough, surviving in the environment for months and resisting many common disinfectants.</p>

          <h2>Which Dogs Are at Risk</h2>
          <p>Puppies are by far the most vulnerable, especially those that are unvaccinated or only partially vaccinated, because their immune systems are immature and maternal antibody protection wanes before the vaccine series is complete. Certain breeds appear more susceptible. Crowded or unsanitary environments raise risk, and because the virus persists in soil and surfaces, a puppy can be exposed without ever meeting a visibly sick dog.</p>

          <h2>Recognizing the Signs</h2>
          <p>Classic signs come on quickly: profound lethargy, loss of appetite, repeated vomiting, and severe, often bloody and foul-smelling diarrhea. Affected puppies dehydrate rapidly and may develop fever. The combination of a young, unvaccinated puppy with these signs should prompt immediate veterinary care. Parvo can be confirmed with a rapid in-clinic test, but treatment should not wait for certainty when the picture is suggestive.</p>

          <h2>Treatment</h2>
          <p>No drug kills the virus; survival depends on intensive supportive care that keeps the puppy alive while its own immune system clears the infection. This usually means hospitalization with intravenous fluids to correct dehydration, anti-nausea medication, treatment of secondary bacterial infection, pain control, and nutritional support, with the specific medications and dosing determined by the veterinary team. Outcomes are far better with early, aggressive hospital care, which is why immediate treatment matters so much.</p>

          <h2>Prevention</h2>
          <p>Vaccination is highly effective and is the foundation of prevention. Puppies receive a vaccine series beginning in early puppyhood with boosters until they are old enough for reliable protection, because maternal antibodies can blunt earlier doses. Until the series is finished, unvaccinated puppies should avoid places frequented by dogs of unknown vaccination status. Prompt cleanup and appropriate disinfection of contaminated areas, along with following your veterinarian's vaccination schedule, protect both your puppy and others.</p>

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}

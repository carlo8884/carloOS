import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, FAQAccordion, EmailCapture, RelatedLinks, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline, CalloutBox, ArticleSourcesList } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: "Parvovirus in Puppies — Signs, Treatment, Prevention | Vets.co", description: "Canine parvovirus is a contagious, life-threatening illness in unvaccinated puppies. Learn the signs, why it is an emergency, and how vaccination prevents it.", path: '/health/parvovirus-in-puppies', type: 'article' })
const SOURCES = [
  { label: 'AVMA: Canine Parvovirus', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/canine-parvovirus', publisher: 'AVMA' },
  { label: 'Merck Veterinary Manual: Canine Parvovirus', url: 'https://www.merckvetmanual.com/generalized-conditions/canine-parvovirus/overview-of-canine-parvovirus', publisher: 'Merck Vet Manual' },
  { label: 'AAHA: Canine Vaccination Guidelines (DA2PP)', url: 'https://www.aaha.org/aaha-guidelines/vaccination-canine-configuration/', publisher: 'AAHA' },
]
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Parvovirus in Puppies', description: 'Signs, treatment, and prevention of canine parvovirus.', url: 'https://vets.co/health/parvovirus-in-puppies', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-09-05T00:00:00Z' ,
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
          <ArticleByline siteName="Vets.co Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-09-05T00:00:00Z" reviewedBy="Editorial team" />

          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the puppy parvo-cleanup checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Puppy parvo-cleanup checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the household-cleanup notes — an
              accelerated hydrogen peroxide disinfectant
              that actually inactivates parvovirus on
              hard surfaces, disposable shoe covers so
              you do not track the virus from a
              contaminated yard or kennel, and a pump
              sprayer for outdoor soil and concrete the
              bottle cannot reach. Educational
              checklist, not a diagnosis and not a
              treatment list. Vaccines, IV fluids,
              anti-nausea medication, and 3% first-aid
              peroxide stay off this list. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="vets-co"
              title="Puppy parvo-cleanup checklist"
              subtitle="Email the AHP-disinfectant, shoe-cover, and pump-sprayer notes. No spam."
              ctaText="Email my puppy parvo-cleanup checklist"
              source="health-parvovirus-in-puppies-under-hero"
            />
          </div>

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
          <p>Vaccination is highly effective and is the foundation of prevention. Puppies receive a vaccine series beginning in early puppyhood with boosters until they are old enough for reliable protection, because maternal antibodies can blunt earlier doses. Until the series is finished, unvaccinated puppies should avoid places frequented by dogs of unknown vaccination status. Prompt cleanup and appropriate disinfection of contaminated areas, along with following your veterinarian&apos;s vaccination schedule, protect both your puppy and others.</p>
          <p>Household bleach and many grocery cleaners do not reliably inactivate parvovirus on every surface. After a confirmed or suspected case — or when you are cleaning a yard, kennel, or crate a sick puppy used — reach for an accelerated hydrogen peroxide disinfectant labeled for canine parvovirus, put on disposable shoe covers before you walk the contaminated area so you do not track the virus into the house, and use a pump sprayer for outdoor soil, concrete, and run panels the spray bottle cannot cover. These are cleanup tools. They do not treat a sick puppy and they do not replace the vaccine series.</p>

          <h2 id="kit">Home cleanup kit</h2>
          <p>Everyday physical supplies that match the prevention-cleanup copy above — an accelerated hydrogen peroxide disinfectant labeled for canine parvovirus on hard surfaces, disposable shoe covers so you do not walk the virus from a contaminated yard or kennel into the house, and a pump sprayer for outdoor soil and concrete. These are cleanup tools, not treatments. They do not kill the virus in a sick puppy, they do not replace hospitalization or the vaccine series, and they do not make a public park safe. Three-percent first-aid hydrogen peroxide (the chocolate-toxicity hop), enzymatic odor cleaners, grocery bleach, IV fluids, anti-nausea medication, and vaccines stay educational copy only. This page does not claim hands-on testing.</p>

          <AffiliateDisclosure variant="inline" siteId="vets-co" />

          {/* Money path — live amazon-brand search hops (AHP
              disinfectant / disposable shoe covers / pump
              sprayer). ShopCtas hides empty Chewy; never
              href="#" or PLACEHOLDER. Category searches only.
              3% first-aid peroxide, enzymatic cleaners,
              vaccines, IV fluids, and anti-nausea Rx are not
              shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the puppy parvo-cleanup kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the on-page
              cleanup copy — an accelerated hydrogen peroxide
              disinfectant labeled for parvovirus, disposable
              shoe covers, and a pump sprayer for outdoor
              soil and concrete. Everyday physical gear only.
              They are not a ranked product list, they are not
              medications, they are not the 3% first-aid
              peroxide hop, they are not vaccines, and they
              do not replace a veterinarian. Vets.co earns a
              commission on qualifying purchases at no extra
              cost to you. Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/accelerated+hydrogen+peroxide+disinfectant?s=health-parvovirus-in-puppies"
                amazonLabel="Browse accelerated hydrogen peroxide disinfectants on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/disposable+shoe+covers?s=health-parvovirus-in-puppies"
                amazonLabel="Browse disposable shoe covers on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/pump+sprayer?s=health-parvovirus-in-puppies"
                amazonLabel="Browse pump sprayers on Amazon →"
              />
            </div>
          </div>

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}

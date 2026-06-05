import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline, CalloutBox, ArticleSourcesList } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: "Kennel Cough in Dogs — Signs, Treatment, Prevention | Vets.co", description: "Kennel cough is a highly contagious respiratory infection causing a distinctive honking cough. Learn the signs, when it is serious, and how vaccination helps.", path: '/health/kennel-cough', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Kennel Cough in Dogs', description: 'Signs, treatment, and prevention of canine infectious respiratory disease (kennel cough).', url: 'https://vets.co/health/kennel-cough', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Kennel Cough in Dogs', description: 'Signs, treatment, and prevention of kennel cough.', url: 'https://vets.co/health/kennel-cough', authorName: 'Vets.co Editorial', lastReviewed: '2026-06-01' })
const combined = combineSchemas(schema, med)
const FAQS = [
  { question: "What does kennel cough sound like?", answer: "The hallmark of kennel cough is a sudden, dry, hacking cough that many owners describe as a goose-like honk, often followed by a gag or retch that can bring up white foam — which owners sometimes mistake for vomiting. The cough is frequently triggered by excitement, exercise, or pressure on the throat (such as a collar pulling). The dog is usually otherwise bright and eating well. This distinctive honking cough in a recently socialized dog is highly suggestive of kennel cough." },
  { question: "Does kennel cough need antibiotics?", answer: "Often not. Many cases are caused by viruses or are mild and self-limiting, resolving on their own in one to three weeks with rest, much like a human cold. Antibiotics are reserved for cases where a bacterial component is suspected or the dog is more seriously affected, and the decision and any prescription are made by your veterinarian. Cough suppressants are sometimes used for comfort. The most important measures are rest, isolation from other dogs, and monitoring for signs that the illness is worsening." },
  { question: "When is kennel cough serious?", answer: "Most cases are mild, but kennel cough can be serious in puppies, senior dogs, and those with weakened immune systems or underlying heart or lung disease, where it can progress to pneumonia. Warning signs that warrant prompt veterinary care include lethargy, loss of appetite, fever, difficulty breathing, or a productive or worsening cough. Any dog that seems genuinely unwell rather than just coughing should be examined, as should any cough that persists beyond a couple of weeks or steadily worsens." },
]
const SOURCES = [
  { label: 'AVMA: Kennel Cough (Infectious Tracheobronchitis)', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/kennel-cough', publisher: 'AVMA' },
  { label: 'Merck Veterinary Manual: Canine Infectious Respiratory Disease', url: 'https://www.merckvetmanual.com/respiratory-system/respiratory-diseases-of-small-animals/canine-infectious-respiratory-disease', publisher: 'Merck Vet Manual' },
  { label: 'AAHA: Canine Vaccination Guidelines (Bordetella)', url: 'https://www.aaha.org/aaha-guidelines/vaccination-canine-configuration/', publisher: 'AAHA' },
]
export default function KennelCoughPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Kennel Cough in Dogs', subtitle: 'Kennel cough — more formally canine infectious respiratory disease — is a highly contagious infection of the airways that spreads easily wherever dogs gather. Most cases are mild and resolve on their own, but the distinctive honking cough is alarming to owners, and the illness can be serious in vulnerable dogs. Knowing the signs and when to worry helps you respond appropriately.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', authorAvatar: '🐾', publishedAt: 'June 2026', readTime: '8 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Kennel Cough', href: '/health/kennel-cough' }]}
        relatedLinks={[
          { title: 'Health Conditions', href: '/health', category: 'Hub' },
          { title: 'Canine Influenza', href: '/health/canine-influenza', category: 'Veterinary Guide' },
          { title: 'Dog Vaccinations Guide', href: '/health/dog-vaccinations-guide', category: 'Veterinary Guide' },
          { title: 'Emergency Signs', href: '/health/emergency-signs', category: 'Emergency Guide' },
        ]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Typical Picture</div>
            {[['Honking cough', 'Dry, hacking'], ['Gag or retch', 'White foam after coughing'], ['Triggered', 'By excitement or collar'], ['Otherwise well', 'Bright, eating normally']].map(([p, d]) => (
              <div key={p} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{p}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Canine Influenza', href: '/health/canine-influenza' }, { label: 'Dog Vaccinations Guide', href: '/health/dog-vaccinations-guide' }, { label: 'Emergency Signs', href: '/health/emergency-signs' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-kennel-cough" />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Vets.co Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

          <CalloutBox variant="info" title="Usually mild, but watch the vulnerable">
            In a healthy adult dog, kennel cough is typically a self-limiting nuisance that clears with rest. In puppies, seniors, and dogs with underlying disease, it can be more serious and occasionally leads to pneumonia, so these dogs warrant closer monitoring and a lower threshold for veterinary care.
          </CalloutBox>

          <h2>What Kennel Cough Is</h2>
          <p>Kennel cough is not a single infection but a syndrome caused by several contagious viruses and bacteria — often more than one at a time — that inflame the upper airways and trachea. It spreads through respiratory droplets and contaminated surfaces, making it common wherever dogs congregate: boarding kennels, daycare, grooming salons, shelters, dog parks, and training classes. After exposure, signs typically develop within several days to a week.</p>

          <h2>Recognizing the Signs</h2>
          <p>The defining feature is a sudden, dry, hacking cough often described as a goose-like honk, frequently ending in a gag or retch that brings up white foam — sometimes mistaken for vomiting. Coughing is often triggered by excitement, exercise, or a collar pressing on the throat. Most affected dogs are otherwise bright, alert, and eating normally. Some have mild sneezing, nasal or eye discharge, or a low-grade reduction in energy.</p>

          <h2>When to Be Concerned</h2>
          <p>While most cases are mild, certain signs indicate a more serious illness needing prompt veterinary attention: lethargy, loss of appetite, fever, labored or rapid breathing, or a cough that is productive, worsening, or persisting beyond a couple of weeks. Puppies, senior dogs, and those with weakened immunity or underlying heart or lung disease are at higher risk of progression to pneumonia and deserve closer monitoring and earlier evaluation.</p>

          <h2>Treatment</h2>
          <p>Many cases resolve on their own within one to three weeks with rest and time, much like a human cold. Treatment focuses on supportive care: rest, avoiding exercise and throat irritation, using a harness rather than a collar, and isolating the dog from others to prevent spread. Cough suppressants may improve comfort, and antibiotics are used only when a bacterial component is suspected or the dog is more seriously affected — these decisions and any prescriptions are made by your veterinarian.</p>

          <h2>Prevention</h2>
          <p>Vaccines are available against several of the agents involved, including the Bordetella component commonly required by boarding and daycare facilities. While vaccination does not prevent every case — because multiple organisms can cause the syndrome — it reduces the risk and severity and limits spread in group settings. Good hygiene at facilities, avoiding contact with obviously sick dogs, and keeping vulnerable dogs out of high-exposure environments further lower the risk. Discuss the right vaccination plan for your dog's lifestyle with your veterinarian.</p>

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}

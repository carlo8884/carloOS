import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, FAQAccordion, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline, CalloutBox, ArticleSourcesList } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: "Bloat (GDV) in Dogs — Emergency Signs & Prevention | Vets.co", description: "Gastric dilatation-volvulus (bloat) is a sudden, life-threatening emergency in deep-chested dogs. Know the warning signs and act within minutes.", path: '/health/bloat-gdv-dogs', type: 'article' })
const SOURCES = [
  { label: 'Merck Veterinary Manual: Gastric Dilatation and Volvulus in Small Animals', url: 'https://www.merckvetmanual.com/digestive-system/diseases-of-the-stomach-and-intestines-in-small-animals/gastric-dilatation-and-volvulus-in-small-animals', publisher: 'Merck Vet Manual' },
  { label: 'AVMA: Bloat — Gastric Dilatation-Volvulus', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/bloat-gastric-dilatation-volvulus', publisher: 'AVMA' },
  { label: 'Glickman LT et al. Incidence of and breed-related risk factors for gastric dilatation-volvulus in dogs. JAVMA. 2000;216(1):40-45.', publisher: 'JAVMA' },
]
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Bloat (GDV) in Dogs', description: 'Emergency recognition, risk factors, and prevention of gastric dilatation-volvulus in dogs.', url: 'https://vets.co/health/bloat-gdv-dogs', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' ,
  citation: SOURCES,
})
const med = buildMedicalWebPageSchema({ name: 'Bloat (Gastric Dilatation-Volvulus) in Dogs', description: 'Recognition, risk factors, and prevention of GDV in dogs.', url: 'https://vets.co/health/bloat-gdv-dogs', authorName: 'Vets.co Editorial', lastReviewed: '2026-06-01' })
const combined = combineSchemas(schema, med)
const FAQS = [
  { question: "How fast does bloat become fatal?", answer: "Very fast. Gastric dilatation-volvulus (GDV) can progress from the first signs to shock and death within an hour or two. Once the stomach twists, it cuts off its own blood supply and traps gas, the expanding stomach compresses major blood vessels, and the dog rapidly enters shock. There is no home treatment — GDV requires emergency surgery. If you see the warning signs, go to an emergency veterinary hospital immediately; minutes matter." },
  { question: "What does bloat look like?", answer: "The classic picture is a large, deep-chested dog with a swollen, firm abdomen who is restless, pacing, and repeatedly trying to vomit but bringing up little or nothing (non-productive retching). Other signs include excessive drooling, obvious distress or anxiety, rapid shallow breathing, pale gums, and collapse as shock sets in. Not every case shows obvious abdominal swelling, especially early or in very deep-chested dogs, so unproductive retching plus distress in an at-risk breed is enough reason to seek emergency care." },
  { question: "Can a preventive surgery stop bloat?", answer: "A procedure called prophylactic gastropexy tacks the stomach to the body wall so it cannot twist, dramatically reducing the risk of life-threatening GDV. It is commonly performed at the same time as spay or neuter in high-risk breeds such as Great Danes and other deep-chested giant breeds. It does not prevent simple gas bloating, but it largely prevents the deadly twisting. Whether your dog is a candidate is a conversation to have with your veterinarian based on breed and risk." },
]
export default function BloatGDVPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Bloat (GDV) in Dogs', subtitle: 'Gastric dilatation-volvulus — known simply as "bloat" — is one of the most rapidly fatal emergencies in dogs. The stomach fills with gas and twists on itself, cutting off blood flow and sending the dog into shock within hours. It is a true minutes-matter emergency, and recognizing it instantly can save a dog\'s life.', category: 'Emergency Guide', authorName: 'Vets.co Editorial', publishedAt: 'June 2026', readTime: '8 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Bloat (GDV)', href: '/health/bloat-gdv-dogs' }]}
        relatedLinks={[
          { title: 'Health Conditions', href: '/health', category: 'Hub' },
          { title: 'Emergency Signs', href: '/health/emergency-signs', category: 'Emergency Guide' },
          { title: 'Vomiting and Diarrhea in Pets', href: '/health/vomiting-diarrhea-pets', category: 'Veterinary Guide' },
          { title: 'Find a Vet', href: '/find-a-vet', category: 'Directory' },
        ]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Emergency Red Flags</div>
            {[['Unproductive retching', 'Trying to vomit, nothing comes'], ['Swollen abdomen', 'Firm, distended belly'], ['Restlessness', 'Pacing, cannot settle'], ['Collapse', 'Pale gums, weakness']].map(([p, d]) => (
              <div key={p} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{p}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Emergency Signs', href: '/health/emergency-signs' }, { label: 'German Shepherd Health', href: '/breeds/german-shepherd-health' }, { label: 'Find a Vet', href: '/find-a-vet' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-bloat" />
                  <CrossPortfolioCard currentSite="vets-co" contentType="health" variant="sidebar" />
</>}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Vets.co Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

          <CalloutBox variant="warning" title="This is a go-now emergency">
            If your dog has a swollen belly and is repeatedly trying to vomit without producing anything, go to an emergency veterinary hospital immediately. Do not wait to see if it passes. GDV is fatal within hours and there is no effective home treatment. Call ahead if you can so the team is ready.
          </CalloutBox>

          <h2>What GDV Is</h2>
          <p>Bloat begins when the stomach fills with gas and fluid (dilatation). In the dangerous form, the distended stomach then rotates on its axis (volvulus), sealing off both ends so gas cannot escape and blocking the stomach's blood supply. The trapped, expanding stomach presses on the large veins returning blood to the heart, dropping cardiac output and driving the dog into shock. The stomach wall begins to die, toxins are released, and the spleen is often involved. Without surgery, the cascade is fatal.</p>

          <h2>Which Dogs Are at Risk</h2>
          <p>GDV overwhelmingly affects large, deep-chested breeds — Great Danes have the highest lifetime risk, followed by other giant and deep-chested breeds such as Standard Poodles, Weimaraners, German Shepherds, Setters, and Boxers. Risk rises with age, with having a first-degree relative that bloated, with a lean nervous temperament, and with feeding practices such as a single large daily meal or rapid eating. Any owner of an at-risk breed should know the signs cold.</p>

          <h2>Recognizing the Signs</h2>
          <p>The most reliable early sign is repeated unproductive retching — the dog heaves as if to vomit but brings up little or nothing, sometimes just foam. The abdomen may look or feel swollen and tight, though this is not always obvious in very deep-chested dogs. The dog is typically restless, pacing, drooling, and visibly anxious. As shock develops, breathing becomes rapid and shallow, gums turn pale, and the dog weakens or collapses. Any combination of these in an at-risk dog is an emergency.</p>

          <h2>What Happens at the Hospital</h2>
          <p>Emergency treatment focuses first on stabilizing shock with intravenous fluids and decompressing the stomach to relieve pressure, then on surgery to untwist the stomach, assess the stomach wall and spleen for damage, and perform a gastropexy that tacks the stomach in place to prevent recurrence. Survival is good when dogs reach surgery quickly, but declines sharply with delay and with the amount of dead tissue found. Speed to the hospital is the factor owners most directly control.</p>

          <h2>Prevention</h2>
          <p>For high-risk breeds, a prophylactic gastropexy — often done at the time of spay or neuter — is the most effective prevention against the deadly twisting form. Feeding management may help reduce risk: feeding two or more smaller meals rather than one large meal, slowing fast eaters with appropriate bowls, and avoiding heavy exercise immediately around large meals are commonly advised. Owners of at-risk dogs should discuss gastropexy and feeding strategy with their veterinarian and keep the nearest emergency hospital's location handy.</p>

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}

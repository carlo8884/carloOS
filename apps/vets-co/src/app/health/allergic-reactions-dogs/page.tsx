import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Allergic Reactions in Dogs — Hives, Anaphylaxis | Vets.co', description: 'Hives, facial swelling, and vomiting after a bee sting or vaccine can progress to anaphylaxis. When to give Benadryl vs when to rush to the ER.', path: '/health/allergic-reactions-dogs', type: 'article' })
const SOURCES = [
  { label: 'AVMA: Allergic Reactions in Pets', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/allergic-reactions-pets', publisher: 'AVMA' },
  { label: 'Merck Veterinary Manual: Anaphylaxis', url: 'https://www.merckvetmanual.com/immunology/allergic-disorders/anaphylaxis', publisher: 'Merck Vet Manual' },
  { label: 'AAHA: Emergency and Critical Care Guidelines', url: 'https://www.aaha.org/aaha-guidelines/emergency-and-critical-care/', publisher: 'AAHA' },
]
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Allergic Reactions in Dogs', description: 'Hives, anaphylaxis, and vaccine reactions in dogs — when to treat at home vs emergency care.', url: 'https://vets.co/health/allergic-reactions-dogs', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-07T00:00:00Z' ,
  citation: SOURCES,
})
const med = buildMedicalWebPageSchema({ name: 'Allergic Reactions in Dogs', description: 'Hives, anaphylaxis, and emergency management of acute allergic reactions in dogs.', url: 'https://vets.co/health/allergic-reactions-dogs', authorName: 'Vets.co Editorial', lastReviewed: '2026-06-07' })
const combined = combineSchemas(schema, med)


export default function AllergicReactionsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Allergic Reactions in Dogs', subtitle: 'Acute allergic reactions in dogs — from bee stings, vaccines, medications, or insect bites — range from mild hives (concerning but manageable) to anaphylaxis (life-threatening within minutes). Knowing which situation you are in, and what to do immediately, can be the difference between a vet visit and a fatality.', category: 'Veterinary Guide — Emergency', authorName: 'Vets.co Editorial', publishedAt: 'May 2025', readTime: '8 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Allergic Reactions', href: '/health/allergic-reactions-dogs' }]}
        relatedLinks={[
          { title: 'Health Conditions', href: '/health', category: 'Hub' },
          { title: 'Emergency Signs', href: '/health/emergency-signs', category: 'Veterinary Guide' },
          { title: 'Dog Vaccinations Guide', href: '/health/dog-vaccinations-guide', category: 'Veterinary Guide' },
          { title: 'Find a Vet', href: '/find-a-vet', category: 'Directory' },
        ]}
        sidebar={<>
          <div className="bg-brand-danger/8 border border-brand-danger/30 rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-danger mb-2">Emergency Signs — Go Now</div>
            {['Collapse or inability to stand', 'Pale or white gums', 'Rapid, labored breathing', 'Vomiting combined with facial swelling', 'Loss of consciousness', 'Rapid heart rate with weakness'].map(s => (
              <div key={s} className="py-1 border-b border-brand-danger/15 last:border-0 text-xs text-brand-text-mid flex gap-2">
                <span className="text-brand-danger font-bold">→</span>{s}
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Emergency Signs Guide', href: '/health/emergency-signs' }, { label: 'Dog Vaccinations', href: '/health/dog-vaccinations-guide' }, { label: 'Find Emergency Vet', href: '/find-a-vet' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-allergic-rxn" />
                  <CrossPortfolioCard currentSite="vets-co" contentType="health" variant="sidebar" />
</>}
      >
        <div className="carloOS-article">
          <h2>Types of Allergic Reaction — Severity Spectrum</h2>
          <p><strong>Mild (localized hives/urticaria):</strong> Raised bumpy welts on the skin, often visible as hair standing up in patches across the body. The dog may scratch at affected areas. No facial swelling, no respiratory signs, the dog is alert and mobile. Most common after insect stings, contact with allergens, or certain vaccines. This is the mildest form of allergic reaction — concerning but not immediately life-threatening.</p>
          <p><strong>Moderate (facial swelling/angioedema):</strong> Swelling of the face, muzzle, periorbital area (around the eyes), or ears — often combined with hives. The dog's face may appear dramatically puffy. This is the classic presentation after bee stings in dogs — dramatic-looking but most dogs remain alert and functional. Still warrants prompt veterinary attention even if the dog appears comfortable, because facial swelling can progress to airway involvement.</p>
          <p><strong>Severe (anaphylaxis):</strong> Systemic shock from massive release of inflammatory mediators. The dog collapses, has pale gums, vomiting, difficulty breathing, rapid weak pulse, and loss of consciousness. This is a true emergency — minutes matter. Epinephrine (the primary treatment) must be given rapidly to reverse the cardiovascular collapse.</p>

          <h2>Common Triggers</h2>
          <p><strong>Insect stings (bee, wasp, hornet):</strong> The most common cause of acute allergic reactions in dogs. Dogs frequently encounter stinging insects while investigating with their nose or paw — facial and paw reactions are common sting sites. Most reactions are moderate (facial swelling) rather than anaphylactic. A dog that has had one reaction to stings is at higher risk for more severe reactions to subsequent stings — epinephrine auto-injectors (EpiPen Jr) prescribed by a veterinarian are appropriate for dogs with a history of significant sting reactions.</p>
          <p><strong>Vaccines:</strong> Vaccine reactions typically occur within 30–60 minutes of administration — which is why veterinary clinics may ask owners to wait briefly after vaccination. Most vaccine reactions are mild (facial swelling, hives, lethargy). Pre-medicating with diphenhydramine before vaccination reduces reaction risk in dogs with prior vaccine reactions — discuss with your veterinarian before any subsequent vaccination for a dog that has reacted previously.</p>
          <p><strong>Medications (injected more than oral):</strong> Penicillin, cephalosporins, and some other injectable medications can trigger allergic reactions. Any injectable medication given at a veterinary clinic may cause a reaction — clinics monitor for this routinely after injections.</p>

          <h2>Benadryl — When It Helps and When It Doesn't</h2>
          <p>Diphenhydramine (Benadryl) is appropriate for mild reactions — localized hives without facial swelling, without vomiting, and without any systemic signs. The correct dose must be confirmed with a veterinarian before giving it, and only plain diphenhydramine should be used — Benadryl products with decongestants like Benadryl-D are toxic to dogs. This blunts the histamine-driven component of the reaction.</p>
          <p><strong>Benadryl is NOT appropriate for:</strong> facial swelling (which can progress to airway obstruction — veterinary steroids and monitoring are needed), vomiting (which indicates a more systemic reaction), any difficulty breathing, or any sign of shock. For these, the dog needs veterinary care, not antihistamines. Anaphylaxis requires epinephrine — antihistamines do not reverse cardiovascular shock.</p>

          <h2>After a Reaction — What to Discuss With Your Vet</h2>
          <p>Any dog that has experienced a moderate or severe allergic reaction should have a conversation with a veterinarian about: identifying the trigger if possible (to avoid re-exposure), whether an epinephrine auto-injector is appropriate to keep at home, pre-medication protocols for future vaccines, and whether allergy testing is indicated. Dogs with a history of anaphylaxis to bee stings should have an EpiPen Jr prescribed and carried whenever the dog is outdoors during insect season.</p>

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}

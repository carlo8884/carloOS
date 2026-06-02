import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Pyoderma in Dogs — Bacterial Skin Infections, Causes | Dog.com', description: 'Pyoderma (bacterial skin infection) is the most common skin disease in dogs. Surface, superficial, and deep pyoderma differ in treatment duration.', path: '/health/dog-pyoderma', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Pyoderma in Dogs', description: 'Bacterial skin infection types, antibiotic treatment, and underlying cause management.', url: 'https://dog.com/health/dog-pyoderma', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Pyoderma in Dogs', description: 'Bacterial skin infections — types, antibiotic treatment, and root cause identification.', url: 'https://dog.com/health/dog-pyoderma', authorName: 'Dog.com Editorial', lastReviewed: '2025-05-01' })
const combined = combineSchemas(schema, med)
export default function DogPyodermaPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'Pyoderma in Dogs', subtitle: 'Pyoderma — bacterial skin infection — is the most common skin disease seen in veterinary practice. Staphylococcus pseudintermedius is responsible for the vast majority of cases. The critical insight: pyoderma in most dogs is a secondary condition, not a primary disease. Treating the infection without identifying and managing the underlying cause results in recurrence.', category: 'Dog Health', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: 'Pyoderma', href: '/health/dog-pyoderma' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Underlying Causes</div>
            {['Allergic skin disease (atopy) — 80%+ of recurring cases', 'Food allergy', 'Hypothyroidism', 'Cushing\'s disease', 'Demodicosis', 'Foreign body', 'Skin fold conformation'].map(c => (
              <div key={c} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid">{c}</div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Dog Skin Allergies', href: '/health/dog-skin-allergies' }, { label: 'Hot Spots', href: '/health/dog-hot-spots' }, { label: 'Dog Mange', href: '/health/dog-mange' }]} />
          <CrossPortfolioCard currentSite="dog-com" contentType="health" variant="sidebar" />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="health-pyoderma" />
        </>}
      >
        <div className="carloOS-article">
          <h2>Three Types — Different Depths, Different Treatment Duration</h2>
          <p><strong>Surface pyoderma:</strong> Infection limited to the surface of the skin — the epidermis and hair follicle openings. Includes acute moist dermatitis (hot spots) and intertrigo (skin fold pyoderma). Often resolves with topical treatment alone: chlorhexidine shampoo or wipes, topical antibiotics. Systemic antibiotics may not be required for surface-only disease.</p>
          <p><strong>Superficial pyoderma:</strong> The most common type — infection of the epidermis and superficial hair follicle (folliculitis). Presents as papules (small bumps), pustules (pimple-like lesions), epidermal collarettes (circular scaling patterns with a central clearing — classic superficial pyoderma pattern), and crusting. Requires systemic antibiotics for 3–6 weeks minimum. Stopping antibiotics when the skin "looks better" — typically 1–2 weeks — causes relapse because the infection is not fully cleared.</p>
          <p><strong>Deep pyoderma:</strong> Infection penetrating below the epidermis into the dermis and subcutis. Causes nodules, draining tracts (channels through the skin discharging fluid), ulcers, and significant tissue destruction. Requires systemic antibiotics for 6–12+ weeks. Deep pyoderma warrants bacterial culture and sensitivity testing — antibiotic-resistant Staphylococcus and gram-negative organisms are more common in deep infections, and empirical antibiotic choice is frequently inadequate.</p>

          <h2>The Recurrence Problem — Find the Underlying Cause</h2>
          <p>A dog that gets pyoderma once and clears with antibiotics may have had an isolated trigger (a wound, moisture trapped in a skin fold). A dog that gets pyoderma repeatedly — the pattern most commonly seen in practice — has an underlying condition that is priming the skin for infection. The skin barrier in allergic dogs (atopy, food allergy) is structurally compromised, the skin microbiome is altered, and immune function in the skin is dysregulated — all of which allow Staphylococcus to proliferate beyond its normal controlled colonization.</p>
          <p>In a dog with recurring pyoderma, treating the pyoderma alone is incomplete care. The workup should include: evaluation for allergic skin disease (history, distribution of lesions, response to antipruritic therapy), thyroid function (T4), Cushing's screening if clinical signs suggest it, and skin scraping for Demodex — particularly in young dogs or dogs on immunosuppressive therapy. Managing the underlying disease is what breaks the recurrence cycle.</p>

          <h2>Antibiotic Selection and Duration</h2>
          <p>First-line antibiotics for uncomplicated superficial pyoderma include Cephalexin, Cefpodoxime (Simplicef), and Amoxicillin-clavulanate (Clavamox); these are veterinarian-prescribed, and the dose and treatment duration (typically several weeks) must be determined by a veterinarian based on the dog's condition. Culture and sensitivity is essential before starting antibiotics in: deep pyoderma, recurring pyoderma that has been treated multiple times, pyoderma that is not responding to first-line antibiotics, or any situation where methicillin-resistant Staphylococcus pseudintermedius (MRSP) is a concern (dogs with prior antibiotic exposure, veterinary worker households).</p>
          <p>MRSP is a growing concern — resistant to beta-lactam antibiotics including cephalosporins. MRSP infections require antibiotic selection guided by sensitivity testing and often require antibiotics with more significant side effect profiles (doxycycline, chloramphenicol, clindamycin depending on sensitivity). This is why culture should not be skipped in recurring or treatment-refractory pyoderma.</p>

          <h2>Topical Therapy — Underutilized and Effective</h2>
          <p>Topical antimicrobial therapy — medicated shampoos (chlorhexidine 2–4%, or chlorhexidine + miconazole), sprays, and wipes — significantly reduces bacterial load and supports systemic antibiotic treatment. Chlorhexidine shampoo used 2–3 times weekly during systemic antibiotic treatment shortens treatment duration and reduces relapse rates in clinical studies. In mild surface and early superficial pyoderma, topical therapy alone can be sufficient. The time investment of bathing (leave-on 10-minute contact time for chlorhexidine shampoos to work) limits compliance for many owners, but the efficacy is real.</p>
        </div>
      </ArticleLayout>
    </>
  )
}

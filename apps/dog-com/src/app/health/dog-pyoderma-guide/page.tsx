import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: "Dog Pyoderma — Bacterial Skin Infections, Hot Spots & Deep Pyoderma | Dog.com", description: 'Pyoderma is bacterial skin infection in dogs — from superficial hot spots to deep tissue infections. Underlying allergies drive recurrence. Diagnosis, treatment, and prevention.', path: '/health/dog-pyoderma', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: "Dog Pyoderma Guide", description: 'Superficial and deep bacterial skin infections in dogs — causes, treatment, and recurrence prevention.', url: 'https://dog.com/health/dog-pyoderma', imageUrl: '', authorName: 'Dr. Amanda Reyes, DVM, DACVIM', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: "Dog Pyoderma", description: "Canine bacterial skin infections — classification, treatment, and management of recurrent pyoderma.", url: 'https://dog.com/health/dog-pyoderma', authorName: 'Dr. Amanda Reyes, DVM, DACVIM', lastReviewed: '2025-05-01' })
const combined = combineSchemas(schema, med)

export default function DogPyodermaPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'Dog Pyoderma', subtitle: "Pyoderma — bacterial skin infection — is one of the most commonly diagnosed dermatological conditions in dogs. It ranges from superficial pustules and hot spots that resolve with topical treatment to deep tissue infections requiring extended systemic antibiotics. The critical question is not just how to treat the current infection but why it is occurring — because recurrent pyoderma is almost always driven by an underlying cause.", category: 'Dog Health', authorName: 'Dr. Amanda Reyes, DVM, DACVIM', authorCredentials: 'Internal Medicine Specialist', authorAvatar: '👩‍⚕️', publishedAt: 'May 2025', readTime: '9 min', dvmReviewed: true }}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: 'Pyoderma', href: '/health/dog-pyoderma' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Classification</div>
            {[['Surface pyoderma', 'Hot spots, skin fold intertrigo — topical treatment usually sufficient'], ['Superficial pyoderma', 'Folliculitis, impetigo — most common — responds to 3-4 wk antibiotics'], ['Deep pyoderma', 'Furunculosis, cellulitis — extended antibiotics 6-12 weeks — culture essential']].map(([c, d]) => (
              <div key={c} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{c}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Dog Skin Allergies', href: '/health/dog-skin-allergies' }, { label: 'Dog Hot Spots', href: '/health/dog-hot-spots' }, { label: 'Dog Allergies', href: '/health/dog-allergies' }]} />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="DVM-written guidance weekly." source="health-pyoderma" />
        </>}
      >
        <div className="carloOS-article">
          <h2>What Causes Pyoderma</h2>
          <p>Staphylococcus pseudintermedius is the most common bacterial pathogen in canine pyoderma — it is part of normal canine skin flora that overgrows when skin barriers are compromised. The skin barrier in a healthy dog resists bacterial overgrowth; in a dog with atopic dermatitis (environmental allergies), food allergy, hypothyroidism, Cushing's disease, or immune compromise, the barrier function breaks down, allowing normal skin bacteria to proliferate pathologically.</p>
          <p>This is why antibiotics alone are not a complete treatment for recurrent pyoderma — the antibiotics treat the current infection but if the underlying barrier compromise is not addressed, the infection recurs within weeks to months. A dog that has had pyoderma three times in a year is a dog with an unidentified or inadequately managed underlying condition, not a dog that needs stronger antibiotics.</p>

          <h2>Surface Pyoderma — Hot Spots</h2>
          <p>Acute moist dermatitis ("hot spots") are rapidly developing areas of surface infection — a dog licks or scratches a spot, the skin barrier breaks, bacteria proliferate rapidly in the moist environment, and within hours to a day a painful, oozing, hairless lesion develops. They are common in hot, humid weather and in long-coated breeds. Treatment: clip the hair around the lesion (this is not optional — covering it traps moisture and worsens the infection), clean with dilute chlorhexidine solution, apply topical antimicrobial therapy (Douxo S3 Calm mousse, topical antibiotic-steroid combinations). Most hot spots resolve within 5-7 days with appropriate care and an Elizabethan collar to prevent licking.</p>

          <h2>Superficial Pyoderma — Folliculitis</h2>
          <p>Superficial pyoderma affecting the hair follicles produces: small papules (red bumps) and pustules, "moth-eaten" irregular hair loss pattern, epidermal collarettes (circular peeling lesions where pustules have ruptured and dried), and itching. Short-coated breeds (Bulldogs, Boxers, Dalmatians) show these lesions very clearly; long-coated breeds often present as patchy hair loss and increased scaling and odor without obvious pustules. Systemic antibiotics for 3-4 weeks (cephalexin, amoxicillin-clavulanate, or based on culture results for recurring cases) combined with medicated shampoo therapy (chlorhexidine + ketoconazole — targets both bacteria and the yeast that often co-infects).</p>

          <h2>Culture and Sensitivity — When Required</h2>
          <p>Culture and sensitivity testing is essential for: any dog with recurrent pyoderma (defined as two or more episodes in 12 months), any deep pyoderma, any pyoderma that fails to respond to initial antibiotic therapy, and any dog that has received antibiotics frequently. Antibiotic-resistant Staphylococcus pseudintermedius (MRSP — methicillin-resistant) is increasingly prevalent in dogs with repeated antibiotic exposure. Treatment of MRSP requires specific antibiotics identified by culture — empirical treatment fails. Culturing before treating in the context of recurrent pyoderma is now considered standard of care.</p>
        </div>
      </ArticleLayout>
    </>
  )
}

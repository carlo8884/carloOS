import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Dehydration in Dogs — Signs, Skin Turgor Test | Vets.co', description: 'How to assess dehydration in dogs using the skin turgor test and gum assessment. When dehydration is mild (oral fluids OK) vs severe (IV fluids needed).', path: '/health/dehydration-in-dogs', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Dehydration in Dogs', description: 'Signs, skin turgor test, and IV fluids decision guide for dog dehydration.', url: 'https://vets.co/health/dehydration-in-dogs', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-07T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Dehydration in Dogs', description: 'Assessing and treating dehydration in dogs — skin turgor, gum assessment, and fluid therapy.', url: 'https://vets.co/health/dehydration-in-dogs', authorName: 'Vets.co Editorial', lastReviewed: '2026-06-07' })
const combined = combineSchemas(schema, med)
const SOURCES = [
  { label: 'Merck Veterinary Manual: Fluid Therapy in Small Animals', url: 'https://www.merckvetmanual.com/emergency-medicine-and-critical-care/fluid-therapy/fluid-therapy-in-small-animals', publisher: 'Merck Vet Manual' },
  { label: 'AVMA: Dehydration in Pets', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/dehydration-pets', publisher: 'AVMA' },
  { label: 'AAHA: Emergency and Critical Care Guidelines', url: 'https://www.aaha.org/aaha-guidelines/emergency-and-critical-care/', publisher: 'AAHA' },
]
export default function DehydrationPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Dehydration in Dogs', subtitle: 'Dehydration occurs when fluid loss exceeds fluid intake — from vomiting, diarrhea, heat exposure, inadequate water intake, or kidney disease. Mild dehydration can be managed at home; moderate to severe dehydration requires veterinary fluid therapy. Knowing which situation you are in is the key skill.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '7 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Dehydration', href: '/health/dehydration-in-dogs' }]}
        relatedLinks={[
          { title: 'Health Conditions', href: '/health', category: 'Hub' },
          { title: 'Emergency Signs', href: '/health/emergency-signs', category: 'Emergency Guide' },
          { title: 'Vomiting and Diarrhea in Pets', href: '/health/vomiting-diarrhea-pets', category: 'Veterinary Guide' },
          { title: 'Heat Stroke in Dogs', href: '/health/heat-stroke-dogs', category: 'Veterinary Guide' },
        ]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Dehydration Signs</div>
            {[['Skin turgor loss', 'Skin tent stays up when pinched'], ['Tacky gums', 'Gums feel sticky rather than moist'], ['Sunken eyes', 'Eyes appear recessed'], ['Lethargy', 'Reduced energy and responsiveness'], ['Reduced urination', 'Less frequent, darker urine'], ['Dry nose', 'Less reliable indicator']].map(([s, d]) => (
              <div key={s} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{s}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Emergency Signs', href: '/health/emergency-signs' }, { label: 'Vomiting and Diarrhea', href: '/health/vomiting-diarrhea-pets' }, { label: 'Find a Vet', href: '/find-a-vet' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-dehydration" />
        </>}
      >
        <div className="carloOS-article">
          <h2>The Skin Turgor Test</h2>
          <p>The skin turgor test assesses skin elasticity — dehydration reduces skin elasticity as fluid is lost from subcutaneous tissues. Technique: grasp a fold of skin on the back of the neck or between the shoulder blades. Gently lift and then release. In a well-hydrated dog, the skin snaps back immediately to its normal position. In a dehydrated dog, the skin returns slowly ("tenting") or remains raised for a moment before settling. The slower the return, the more significant the dehydration.</p>
          <p>Important limitation: this test is less reliable in very lean dogs (reduced subcutaneous fat reduces elasticity regardless of hydration) and in very overweight dogs (fat makes the skin tent more easily even when hydrated). Use it as one of multiple assessments, not in isolation.</p>

          <h2>Gum Assessment</h2>
          <p>Normal dog gums are pink, moist, and slippery to the touch. Dehydrated gums become dry and tacky — they feel sticky rather than slippery. Press a fingertip to the gum and release: the blanch (white spot from pressure) should return to pink in under 2 seconds (capillary refill time/CRT). Delayed CRT (more than 2 seconds) suggests poor tissue perfusion — a sign of moderate to severe dehydration or cardiovascular compromise.</p>
          <p>Gum color also provides information: pale pink or white gums suggest anemia or shock; brick red gums may indicate systemic infection (sepsis) or heat stroke; blue-purple gums indicate oxygen deprivation — all of these require emergency veterinary care regardless of hydration status.</p>

          <h2>When to Treat at Home vs Go to the Vet</h2>
          <p><strong>Mild dehydration (can manage at home temporarily):</strong> Subtle skin turgor loss, slightly tacky gums, dog is alert, can hold water down, urinating (even if reduced). Cause is known (brief vomiting episode now resolved, heat exposure). Offer frequent small amounts of water. Pedialyte (unflavored) diluted 50/50 with water can replace electrolytes. Monitor closely for any deterioration.</p>
          <p><strong>Moderate to severe dehydration — go to the vet:</strong> Significant skin tenting, very tacky or dry gums, CRT over 2 seconds, sunken eyes, lethargy or weakness, inability to keep water down, signs of ongoing vomiting or diarrhea causing continued fluid loss, unknown cause, or any dehydration in a puppy, senior dog, or dog with existing health conditions. These dogs require IV fluid therapy to restore volume and electrolytes safely and quickly — oral supplementation is too slow and unreliable when significant dehydration is present.</p>

          <h2>IV and Subcutaneous Fluid Therapy</h2>
          <p>In-clinic IV fluid therapy (Lactated Ringer's solution, 0.9% NaCl, or Plasmalyte depending on the electrolyte status) corrects dehydration rapidly and allows monitoring of the response. The fluid type, rate, and volume are calculated by the veterinarian based on the degree of dehydration, bodyweight, and concurrent conditions. Most moderately dehydrated dogs respond well to several hours of IV fluids and can go home the same day.</p>
          <p>Subcutaneous (under-the-skin) fluid therapy is a technique some veterinarians teach owners of dogs with chronic conditions (kidney disease, diabetes) that require regular fluid supplementation. It is not appropriate for acute significant dehydration but is valuable for preventing dehydration in dogs with chronic water regulation problems.</p>

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}

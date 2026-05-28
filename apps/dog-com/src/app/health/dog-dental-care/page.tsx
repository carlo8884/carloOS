import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Dog Dental Care Guide — Daily Brushing, VOHC Products | Dog.com', description: 'Over 80% of dogs have periodontal disease by age 3 (AVDC/AAHA). Daily toothbrushing is the most effective intervention.', path: '/health/dog-dental-care', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Dog Dental Care Guide', description: 'Daily brushing, VOHC products, and periodontal disease prevention for dogs.', url: 'https://dog.com/health/dog-dental-care', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Dog Dental Care Guide', description: 'Toothbrushing, VOHC products, and professional dental cleaning for dogs.', url: 'https://dog.com/health/dog-dental-care', authorName: 'Dog.com Editorial', lastReviewed: '2025-05-01' })
const combined = combineSchemas(schema, med)
export default function DogDentalCarePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'Dog Dental Care Guide', subtitle: 'Periodontal disease — infection and destruction of the supporting structures around the teeth — affects over 80% of dogs by age 3. It is painful, it contributes to systemic inflammation (with implications for heart, kidney, and liver health), and it is almost entirely preventable. The tools are simple; the commitment is daily.', category: 'Dog Health', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '8 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: 'Dental Care', href: '/health/dog-dental-care' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">VOHC-Accepted Products</div>
            <p className="text-xs text-brand-text-mid leading-relaxed m-0 mb-3">The Veterinary Oral Health Council (VOHC) seal means a product has been clinically tested and demonstrated efficacy for plaque or tartar control.</p>
            {[['Greenies', 'Dental chew — proven plaque reduction'], ['Vetradent water additive', 'Daily water additive — VOHC accepted'], ['CET Enzymatic Toothpaste', 'Toothpaste for brushing'], ['Whimzees', 'Dental chew alternative to Greenies'], ['Hill\'s t/d', 'Prescription dental diet — mechanical action']].map(([p, d]) => (
              <div key={p} className="py-1 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{p}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Dental Cleaning Guide', href: '/health/dog-dental-care' }, { label: 'Best Dental Chews', href: '/reviews/best-dental-chews' }, { label: 'Senior Dog Care', href: '/health/senior-dog-care' }]} />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="health-dental" />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Dog.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-05-28T00:00:00Z" reviewedBy="Editorial team" />

          <h2>The Hierarchy of Dental Care Effectiveness</h2>
          <DropCap>Not all dental interventions are equally effective. Evidence-based ranking from most to least effective:</DropCap>
          <ol>
            <li><strong>Daily toothbrushing</strong> — the gold standard. A soft-bristled toothbrush and enzymatic toothpaste (CET Enzymatic, Vetradent — never human fluoride toothpaste) physically disrupts plaque before it mineralizes to tartar. Veterinary dental literature (<a href="https://afd.avdc.org" rel="noopener" target="_blank" className="text-brand-primary hover:underline">AVDC</a>, <a href="https://wsava.org/global-guidelines/global-dental-guidelines/" rel="noopener" target="_blank" className="text-brand-primary hover:underline">WSAVA Global Dental Guidelines</a>) is consistent: daily brushing produces significantly better outcomes than any other home-care intervention. The enzymatic action continues after brushing.</li>
            <li><strong>VOHC-accepted dental chews</strong> — Greenies, Whimzees, and similar products carry the VOHC seal because they have published evidence of plaque or tartar reduction. They are meaningful supplements to brushing but not substitutes for it. Non-VOHC dental chews have no proven efficacy.</li>
            <li><strong>Water additives and dental gels</strong> — VOHC-accepted water additives provide some antimicrobial benefit. Convenient and easy to use as a supplement. Minimal effect used alone.</li>
            <li><strong>Dental diets</strong> — Hill's t/d (prescription) and other dental-formula foods use oversized kibble that the tooth sinks into, providing mechanical cleaning across a larger surface area. More effective than standard kibble for tartar control.</li>
          </ol>

          <h2>How to Train Toothbrushing</h2>
          <p>Most dogs that resist toothbrushing were introduced to it poorly — the brush appeared suddenly and was forced into their mouth. Desensitization over 1-2 weeks produces a dog that accepts, and many that enjoy, toothbrushing:</p>
          <ol>
            <li>Let the dog sniff and lick the toothpaste — enzymatic toothpastes come in poultry, beef, and other flavors dogs find appealing. Let the dog choose whether to lick it. Do this for 2-3 days.</li>
            <li>Put toothpaste on your finger and let the dog lick it, then gently touch the teeth and gums with your finger. No brush yet. 2-3 days.</li>
            <li>Introduce the toothbrush with toothpaste — let the dog lick it. Touch the outside of the teeth briefly. End positively every session.</li>
            <li>Gradually increase coverage over a week until you can brush all outer tooth surfaces in a 30-second session.</li>
          </ol>
          <p>The outside surfaces of the teeth — especially the large carnassial teeth (upper fourth premolars, visible on each side) — accumulate the most plaque and tartar and are the highest priority. The tongue naturally cleans the inner surfaces; concentrate effort on the outer faces.</p>

          <CalloutBox variant="evidence" title="VOHC = published efficacy">
            The Veterinary Oral Health Council seal is awarded only after a product has been clinically demonstrated to reduce plaque or tartar in controlled trials. Dental chews and water additives without the VOHC mark have no published efficacy data — they may be safe, but they have not been shown to work. Prefer VOHC-accepted products when adding adjuncts to brushing.
          </CalloutBox>

          <h2>Why Professional Cleaning Is Still Necessary</h2>
          <p>Home dental care slows the progression of periodontal disease and extends the interval between professional cleanings — but it does not eliminate the need. Plaque becomes tartar (calculus) at the gum line and below it — in areas the brush cannot reach. Professional cleaning under anesthesia with full-mouth radiographs is required annually or every 1-2 years (depending on the dog's dental disease progression rate) even with excellent home care. Think of home care as maintaining the cleaning, not replacing it.</p>
        </div>
      </ArticleLayout>
    </>
  )
}

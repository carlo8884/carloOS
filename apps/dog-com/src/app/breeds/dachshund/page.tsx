import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, BreedHealthCard, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Dachshund Breed Guide — IVDD Risk, Ramps Required | Dog.com', description: 'Dachshunds have a 25% lifetime risk of IVDD spinal disc disease. Ramps are not optional — they prevent the jumping that herniated discs.', path: '/breeds/dachshund', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Dachshund Breed Guide', description: 'IVDD risk, ramp requirements, and weight management for Dachshunds.', url: 'https://dog.com/breeds/dachshund', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function DachshundPage() {
  return (
    <ArticleLayout siteId="dog-com"
      hero={{ title: 'Dachshund Breed Guide', subtitle: 'The long body and short legs that make Dachshunds distinctive also make their spine uniquely vulnerable. With a 25% lifetime risk of intervertebral disc disease (IVDD), spinal health management is not optional for Dachshund owners — it is a daily practice that begins day one.', category: 'Breed Guide', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '9 min',}}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Breeds', href: '/breeds' }, { name: 'Dachshund', href: '/breeds/dachshund' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">IVDD Prevention Checklist</div>
          {['Ramps to couch and bed — always', 'No jumping on/off furniture', 'Stairs: limit and support', 'Healthy weight — never overweight', 'Harness only — no neck collar', 'No rough play with larger dogs', 'Know nearest emergency vet'].map(s => (
            <div key={s} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid flex gap-2"><span className="text-green-600">✓</span>{s}</div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'IVDD Complete Guide', href: '/health/intervertebral-disc-disease' }, { label: 'Best Joint Supplements', href: '/reviews/best-joint-supplements' }, { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' }]} />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="breed-dachshund" />
      </>}
    >
      <div className="carloOS-article">
        <BreedHealthCard name="Intervertebral Disc Disease (IVDD)" riskLevel="very-high"
          description="Dachshunds are the breed most commonly affected by IVDD — approximately 25% will experience at least one disc event in their lifetime. Their long spine and chondrodystrophic build causes premature disc mineralization. A disc can herniate suddenly — often triggered by jumping from furniture — compressing the spinal cord. Severity ranges from back pain (Grade 1) to complete hind limb paralysis (Grade 5). Speed matters: the neurological recovery window after paralysis is 24–48 hours. Every Dachshund owner should know the emergency signs and have the nearest 24-hour vet's number saved before they ever need it."
          signs={['Back pain — yelping when touched, hunched posture', 'Reluctance to jump or climb stairs', 'Wobbly or crossing hind legs', 'Hind leg weakness or stumbling', 'Inability to walk on hind legs — emergency', 'Loss of bladder or bowel control — emergency']}
          management="Ramps and steps to all elevated surfaces. Weight management to ideal BCS. No jumping. When IVDD occurs: immediate neurological assessment, MRI for surgical planning, surgery within 24-48 hours for Grade 3-5 cases for best recovery odds. Conservative management (strict crate rest + NSAIDs) for Grade 1-2 without neurological deficits. Rehabilitation post-surgery." />

        <h2>Ramps — Not Optional, Not Decorative</h2>
        <p>The single most impactful IVDD prevention measure in a household Dachshund is eliminating jumping. A Dachshund jumping off a couch generates significant spinal impact — repeated over years, this contributes to disc degeneration. A single jump can herniate an already-compromised disc. Ramps to every piece of furniture the dog accesses — couch, bed, car seats — eliminate the jumping force. Ramps should be in place from puppyhood, before any disc events occur, not after.</p>
        <p>Ramp gradient: gentle enough that the dog willingly uses it. A steep ramp the dog refuses to use provides no protection. Maximum gradient approximately 20 degrees. Non-slip surface is essential. Carpeted or rubber-treaded ramps are safer than smooth surfaces. Get ramps before the dog comes home — changing the environment after the dog has established jumping habits is harder than preventing the habit from forming.</p>

        <h2>Weight — The Multiplier</h2>
        <p>Excess weight increases spinal loading with every step. A Dachshund at 125% of ideal body weight is placing 25% more load on already-vulnerable discs for every hour of the day. Weight management is arguably the second most important IVDD prevention measure after ramps. Ideal BCS: 4–5 on a 9-point scale. Ribs easily palpable with light pressure. Visible waist. Dachshunds are not naturally lean — they are food-motivated and prone to weight gain. Measured meals, no free-feeding, treats counted against daily caloric intake.</p>

        <h2>Standard vs Miniature — Different Health Profiles</h2>
        <p>Standard Dachshunds (over 11 lbs) and Miniature Dachshunds (under 11 lbs) share the IVDD predisposition but have different secondary concerns. Miniature Dachshunds are predisposed to Pattern Baldness (progressive hair loss — cosmetic, not medical), patellar luxation (small breed joint problem — check annually), and Lafora disease (progressive myoclonic epilepsy) — a DNA test is available for Lafora. Wire-haired Dachshunds have lower IVDD rates than smooth and long-haired varieties — the wire coat was selected from a different genetic background that happens to include some protective variation.</p>

        <h2>Back Pain Signs — Learn These Before an Emergency</h2>
        <p>Dachshund owners should be able to recognize IVDD signs before they become Grade 4 or 5 emergencies. Early signs: yelping when picked up or when touched along the spine, reluctance to jump (may refuse a ramp they previously used willingly), hunched back posture, stiffness after rest. These signs in a Dachshund should prompt a same-day veterinary call — they are not "just stiff from sleeping wrong." Catching and treating at Grade 1–2 allows conservative management; waiting until Grade 3–5 means surgery and a tighter recovery window.</p>
      </div>
    </ArticleLayout>
  )
}

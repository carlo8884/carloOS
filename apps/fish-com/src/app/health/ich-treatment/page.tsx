import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Ich Treatment Guide — White Spots, Heat Method & Ich-X | Fish.com', description: 'Ich (white spot disease) is the most common fish disease. The heat method, salt treatment, and chemical treatments explained.', path: '/health/ich-treatment', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Ich Treatment Guide', description: 'Heat method, salt, and chemical treatment for Ichthyophthirius multifiliis (ich) in aquarium fish.', url: 'https://fish.com/health/ich-treatment', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function IchTreatmentPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Ich Treatment Guide', subtitle: 'Ichthyophthirius multifiliis — "ich" or white spot disease — is the most common disease in aquarium fish. The characteristic white salt-grain spots are visible on the body and fins. Treatment is straightforward once you understand the parasite\'s life cycle: only one stage can be killed by treatment, and that window must be exploited for 10-14 days minimum.', category: 'Fish Health', authorName: 'Fish.com Editorial', authorAvatar: '🐠', publishedAt: 'May 2025', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Aquarium Health', href: '/health' }, { name: 'Ich Treatment', href: '/health/ich-treatment' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Ich Life Cycle</div>
          {[['Trophont (on fish)', 'White spot — NOT killable with medication · 5–7 days'], ['Tomont (substrate)', 'Fallen off fish, reproducing · NOT killable · 3–10 days'], ['Theront (free-swimming)', 'Seeks new host · KILLABLE · 24-48 hours']].map(([s, d]) => (
            <div key={s} className="py-2 border-b border-brand-border last:border-0">
              <div className="text-xs font-bold text-brand-dark">{s}</div>
              <div className="text-2xs text-brand-text-light">{d}</div>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Velvet Disease', href: '/health/velvet-disease' }, { label: 'New Tank Syndrome', href: '/health/new-tank-syndrome' }, { label: 'Quarantine Tank Guide', href: '/setup/quarantine-tank-guide' }]} />
        <div className="bg-brand-dark rounded-lg p-5 mb-4">

          <div className="text-xs uppercase tracking-wide text-brand-primary mb-1 font-bold">Ich Treatment</div>

          <h3 className="font-display text-base font-bold text-brand-white mb-2">Treat at home or before vet trip</h3>

          <p className="text-xs text-white/60 mb-3 leading-relaxed">Most aquarium diseases require fast treatment. API Super Ick Cure is the community-standard first-line product. (Always confirm diagnosis first.)</p>

          <a href="/go/amazon-brand/API%20Super%20Ick%20Cure?s=health-ich-treatment" rel="sponsored noopener" className="inline-block text-xs font-bold text-brand-primary hover:underline">Find on Amazon →</a>

        </div>
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Fishkeeping tips every Thursday." source="health-ich" />
      </>}
    >
      <div className="carloOS-article">
        <h2>The Life Cycle — Why Treatment Takes 10-14 Days</h2>
        <p>Ich has three life stages: the trophont (attached to the fish — the visible white spots), the tomont (fallen to the substrate, dividing to produce new parasites), and the theront (free-swimming infective stage, seeking a new host). Medications only kill the free-swimming theront stage — the parasite cannot be killed while attached to the fish or while encysted in the substrate tomont stage. The treatment strategy is therefore: maintain effective medication concentration continuously until all tomonts have completed their division cycle and released theronts, and all theronts have been exposed to the medication. This cycle takes 10-14 days at 72-76°F, or as little as 4-5 days at 82-84°F (the heat method).</p>
        <p>Stopping treatment when the white spots disappear is the most common treatment failure. The spots disappearing means the trophonts have fallen off and become tomonts — the tank is full of parasites that haven't yet released their infective theronts. Treatment stopped at this point leads to complete reinfestation within days.</p>

        <h2>The Heat Method</h2>
        <p>Raising temperature to 82-86°F (if the species tolerates it) accelerates the ich life cycle dramatically — the entire cycle from trophont to theront is completed in 3-4 days rather than 10-14 days, and the theront's viability window at high temperature is reduced. Maintain the elevated temperature for a minimum of 10 days after the last visible spot to ensure all life cycle stages are complete. Increase aeration — warmer water holds less oxygen. Not appropriate for cold-water fish (goldfish, white clouds) or temperature-sensitive species (discus tolerate high temps; delicate species may not).</p>

        <h2>Chemical Treatments</h2>
        <p><strong>Ich-X (Hikari, formerly Fritz Ich-X):</strong> A formaldehyde and malachite green-based treatment considered one of the safest and most effective for ich. Dye-free formula is safer for scaleless fish and some sensitive species. Follow label dosing; remove activated carbon. Repeat every 24 hours with a 25-30% water change before each dose for 10 days minimum.</p>
        <p><strong>API Super Ick Cure:</strong> Malachite green plus other active ingredients. Effective but stronger — some sensitivity in scaleless fish (clown loaches, cory catfish), which may require half-dose. Not safe for invertebrates.</p>
        <p><strong>Salt (aquarium salt, not marine):</strong> Sodium chloride at 1-3 tablespoons per 5 gallons inhibits theront survival and reduces osmotic stress on fish during infection. Not curative alone but useful as a supportive treatment combined with heat or chemical treatment. Safe for most freshwater fish; not safe for plants or invertebrates at higher concentrations.</p>

        <h2>After Treatment — Prevention</h2>
        <p>Ich enters tanks from: new fish (quarantine all new fish — the most reliable prevention), aquatic plants from infected systems, water from pet store bags, and equipment moved between tanks. Once successfully treated, the tank is ich-free — but there is no lasting immunity. New introductions restart the risk. The parasite cannot survive in an established tank without a fish host for more than 48 hours at room temperature — a fish-out "fallow" period of 4-6 weeks in the display tank (all fish moved to a hospital tank for treatment) reliably clears ich from the display environment.</p>
      </div>
    </ArticleLayout>
  )
}

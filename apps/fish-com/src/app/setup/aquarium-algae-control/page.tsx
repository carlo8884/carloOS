import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Aquarium Algae Control — Identify and Beat Every Type | Fish.com', description: "How to identify and control aquarium algae: green spot, hair, black beard, diatoms, and cyanobacteria. Fix the root causes — light, nutrients, and CO2.", path: '/setup/aquarium-algae-control', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Aquarium Algae Control Guide', description: 'Identifying and controlling green spot, hair, black beard, diatom, and blue-green algae.', url: 'https://fish.com/setup/aquarium-algae-control', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })
export default function AlgaeControlPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Aquarium Algae Control Guide', subtitle: "Algae is not a disease — it is a symptom. Every algae outbreak is the tank telling you that light, nutrients, and CO2 are out of balance, and that some surplus is being claimed by the fastest-growing organism in the water. Killing algae directly without fixing the imbalance only postpones the next bloom. This guide identifies the common types and treats their actual causes.", category: 'Tank Maintenance', authorName: 'Fish.com Editorial', authorAvatar: '🌿', publishedAt: 'June 2026', readTime: '10 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Tank Setup', href: '/setup' }, { name: 'Algae Control', href: '/setup/aquarium-algae-control' }]}
      schema={schema}
      relatedLinks={[{ title: "Tank Setup Hub", href: "/setup", category: "Tank Setup" }, { title: "Planted Tank Setup", href: "/setup/planted-tank-setup", category: "Tank Setup" }, { title: "Aquarium Cycling Guide", href: "/setup/aquarium-cycling-guide", category: "Tank Setup" }, { title: "Low-Tech Planted Tank", href: "/setup/low-tech-planted-tank", category: "Tank Setup" }]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Algae at a Glance</div>
          {[['Green spot', 'Hard dots on glass · Low phosphate'], ['Green dust', 'Film on glass · New-tank phase'], ['Hair / thread', 'Stringy green · Excess light, low CO2'], ['Black beard', 'Tufted dark · Unstable CO2'], ['Diatoms', 'Brown dust · New tank, silicates'], ['Cyanobacteria', 'Blue-green slime · Not true algae']].map(([t, d]) => (
            <div key={t} className="py-2 border-b border-brand-border last:border-0">
              <div className="text-xs font-bold text-brand-dark">{t}</div>
              <div className="text-2xs text-brand-text-light">{d}</div>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Planted Tank Setup', href: '/setup/planted-tank-setup' }, { label: 'Otocinclus', href: '/species/otocinclus' }, { label: 'Bristlenose Pleco', href: '/species/bristlenose-pleco' }]} />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Fishkeeping tips every Thursday." source="setup-algae-control" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <h2>The Three Levers</h2>
        <DropCap>Algae growth is governed by three inputs: light, nutrients (nitrate and phosphate), and carbon dioxide. In a healthy planted tank, fast-growing plants outcompete algae for these resources, and algae stays in check. Algae blooms when one lever is out of proportion with the others — most often too much light for the available CO2 and plant mass, or a nutrient surplus from overfeeding and infrequent water changes. The durable fix for any algae problem is therefore not an algaecide but a rebalancing: reduce the photoperiod, increase water changes, improve circulation, and either add CO2 or add more (and faster-growing) plants to consume the surplus. Manual removal and algae-eating animals are useful supporting tools, never the whole solution.</DropCap>

        <h2>Identifying the Common Types</h2>
        <p><strong>Green spot algae</strong> forms hard green dots, usually on the glass and slow-growing plant leaves, and is associated with low phosphate. <strong>Green dust algae</strong> coats the glass in a fine film, typically during a tank's early months, and tends to resolve on its own as the tank matures. <strong>Hair and thread algae</strong> grow in soft green strands and signal excess light relative to CO2 and nutrients. <strong>Black beard algae</strong> (a red algae despite its dark color) forms stubborn tufts on hardscape and plant edges and is strongly linked to unstable or insufficient CO2 and high organic waste. <strong>Diatoms</strong> appear as a brown dust on every surface, common in new tanks where silicates are abundant, and usually fade as the system stabilizes.</p>

        <CalloutBox variant="warning" title="Blue-green algae is not algae">
          The blue-green slimy film with a distinctive musty smell is cyanobacteria — a photosynthetic bacterium, not a true algae. It often signals low nitrate, poor flow, and accumulated waste. It will not respond to ordinary algae control and is typically addressed with improved circulation, a thorough cleanup, and in stubborn cases a course of erythromycin.
        </CalloutBox>

        <h2>The Treatment Playbook</h2>
        <p>Start with the universal fixes that help every algae type: cut the photoperiod to 6 to 8 hours on a timer, keep light off direct sunlight, increase water-change frequency to export excess nutrients, improve flow so no dead spots accumulate detritus, and feed less. For black beard algae and persistent spot algae, dosing liquid carbon (such as glutaraldehyde-based products) directly onto the affected areas with the filter briefly off can spot-treat it, but use caution as some plants and invertebrates are sensitive. For diatoms and green dust in a new tank, patience plus regular maintenance is usually all that is required.</p>

        <h2>Algae-Eating Animals — Help, Not Magic</h2>
        <p>The right cleanup crew suppresses algae but cannot fix an imbalance on its own. Otocinclus catfish and nerite snails are exceptional grazers of diatoms and green film and are safe for community tanks. Amano shrimp consume hair and thread algae more effectively than almost any fish. Bristlenose plecos rasp algae from broad surfaces and driftwood. Siamese algae eaters are one of the few animals that reliably eat black beard algae. Match the animal to the tank size and the algae present, never overstock for the purpose, and remember that a hungry algae crew in a clean tank still needs supplemental feeding.</p>

        <h2>Preventing the Next Bloom</h2>
        <p>The tanks that stay algae-free long term share a few traits: a consistent, modest photoperiod on a timer; healthy, actively growing plants that monopolize nutrients; regular water changes that prevent nutrient accumulation; and restrained feeding. Establish those routines and algae becomes a minor, occasional nuisance rather than a recurring battle. Test nitrate and phosphate periodically — both unusually high and unusually low readings can drive specific algae types, and balance is the goal.</p>
      </div>
    </ArticleLayout>
  )
}

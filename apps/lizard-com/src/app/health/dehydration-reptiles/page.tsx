import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard, ArticleSourcesList } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox } from '@carloOS/ui'

const SOURCES = [
  { label: "Mader's Reptile and Amphibian Medicine and Surgery, 3rd ed. — Fluid Therapy and Dehydration", publisher: "Divers & Stahl, Elsevier", url: "https://www.elsevier.com/books/maders-reptile-and-amphibian-medicine-and-surgery/divers/978-0-7216-9327-9" },
  { label: "Merck Veterinary Manual — Supportive Care of Reptiles", publisher: "Merck/MSD", url: "https://www.merckvetmanual.com/exotic-and-laboratory-animals/reptiles/supportive-care-of-reptiles" },
  { label: "ARAV — Association of Reptilian and Amphibian Veterinarians: Clinical Resources", publisher: "ARAV", url: "https://arav.org" },
]

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Dehydration in Reptiles — Sunken Eyes, Skin Tenting | Lizard.com', description: 'Dehydration is common in captive reptiles. Sunken eyes, wrinkled skin, retained shed, and elevated uric acid. Warm water soaking.', path: '/health/dehydration-reptiles', type: 'article' })
const schema = combineSchemas(buildArticleSchema({ siteId: 'lizard-com', title: 'Dehydration in Reptiles', description: 'Signs, soaking protocol, and species-appropriate hydration for dehydrated reptiles.', url: 'https://lizard.com/health/dehydration-reptiles', imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' ,
  citation: SOURCES,
}), buildMedicalWebPageSchema({ name: 'Dehydration in Reptiles', description: 'Signs, soaking protocol, and species-appropriate hydration for dehydrated reptiles.', url: 'https://lizard.com/health/dehydration-reptiles', authorName: 'Lizard.com Editorial', lastReviewed: '2025-05-01', medicalAudience: 'Caregiver' }))
export default function ReptileDehydrationPage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: 'Dehydration in Reptiles', subtitle: 'Dehydration is one of the most common health problems in captive reptiles — and one of the most frequently underestimated. Reptiles regulate water loss far more efficiently than mammals, which means they can become significantly dehydrated before showing obvious signs. By the time sunken eyes and wrinkled skin appear, dehydration is usually significant.', category: 'Reptile Health', authorName: 'Lizard.com Editorial', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Reptile Health', href: '/health' }, { name: 'Dehydration', href: '/health/dehydration-reptiles' }]}
      schema={schema}
      relatedLinks={[
        { title: 'Reptile Health Hub', href: '/health', category: 'Hub' },
        { title: 'Humidity Guide', href: '/setup/humidity-guide', category: 'Setup' },
        { title: 'Dysecdysis (Retained Shed)', href: '/health/dysecdysis', category: 'Health' },
        { title: 'Constipation & Impaction', href: '/health/constipation-impaction', category: 'Health' },
        { title: 'Sick Reptile Signs', href: '/health/sick-reptile-signs', category: 'Health' },
        { title: 'Reptile Feeding Guide', href: '/health/reptile-feeding-guide', category: 'Health' },
      ]}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>Signs of Dehydration</div>
          {['Sunken, shrunken eyes', 'Skin tenting (stays folded when gently pinched)', 'Wrinkled, loose skin', 'Retained shed (dysecdysis)', 'Thick, pasty urates (snakes/lizards)', 'Lethargy and reduced activity', 'Reduced or absent urination'].map(s => (
            <div key={s} style={{ padding: '5px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px', color: 'rgba(238,240,228,0.6)' }}>{s}</div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Dysecdysis Guide', href: '/health/dysecdysis' }, { label: 'Sick Reptile Signs', href: '/health/sick-reptile-signs' }, { label: 'Temperature Guide', href: '/setup/temperature-guide' }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source="health-dehydration" ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="health" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Lizard.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-05-28T00:00:00Z" reviewedBy="Editorial team" />

        <h2>Assessing Dehydration in Reptiles</h2>
        <DropCap>The skin tent test (identical to the mammalian version): gently pinch a fold of loose skin on the neck or back and release. Hydrated skin snaps back immediately. Dehydrated skin remains tented for a moment or returns slowly. This test is reliable in lizards and chelonians; snakes have tighter skin that makes tenting less visible. In snakes, assess hydration by the appearance of the eye scales (sunken versus normal convex profile) and the consistency of urates (white solid component of waste) — dry, crumbly, or absent urates suggest dehydration, while well-hydrated urates are soft and white.</DropCap>
        <p>The combination of sunken eyes and retained shed is strongly suggestive of chronic dehydration — both are downstream effects of inadequate body water. A reptile with retained shed that is not responding to humidity corrections should be assessed for dehydration as an underlying cause.</p>

        <h2>Soaking Protocol</h2>
        <p>Warm water soaking is the standard first response to dehydration in most reptile species: a shallow container of water (warm, not hot — 85-90°F, measured with a thermometer) that allows the reptile to stand with its head above water. 15-20 minutes, once or twice daily for mild to moderate dehydration. Reptiles absorb water through the cloaca (vent) during soaking as well as drinking — the soak is effective even in animals that are not actively drinking.</p>
        <p>Use lukewarm water without additives. Some sources recommend electrolyte solutions (diluted Pedialyte at 1:1 with water) for severely dehydrated reptiles — this can be appropriate but discuss with a veterinarian before use, as electrolyte imbalances vary by the cause of dehydration. Never leave a small reptile unsupervised during soaking — even shallow water presents a drowning risk for weakened animals.</p>

        <h2>Species-Appropriate Hydration Methods</h2>
        <p><strong>Lizards (bearded dragons, leopard geckos):</strong> Standing water dish is the primary method for most species. Many desert species will not drink from still water readily — a slow drip from a dropper onto the snout or a gentle stream of water often encourages drinking. Wetting the lips with a dropper works well for very reluctant drinkers. Regular soaking (weekly for healthy animals, daily for dehydrated ones).</p>
        <p><strong>Chameleons and some arboreal species:</strong> These animals drink from water droplets on leaves — they do not recognize standing water dishes. Misting the enclosure 2-3 times daily and providing a drip system are necessary for adequate hydration. Dehydrated chameleons have deeply sunken eyes — a reliable early indicator that the hydration system is inadequate.</p>
        <p><strong>Snakes:</strong> A water dish large enough to soak in is appropriate for most snake species. Ball pythons regularly soak in their water dish — ensure it is large enough for the whole body. Change water daily or whenever soiled. Snakes that soak excessively may be thermoregulating (enclosure too hot), dealing with a parasite issue (mites), or dehydrated — context determines the interpretation.</p>

        <CalloutBox variant="warning" title="Never soak in hot water">
          Use 85–90°F water, measured with a thermometer — not water that feels warm to your hand. Reptiles cool quickly in tepid water and burn rapidly in hot water; both stress an already-compromised animal. Never leave a small or weak reptile unsupervised during a soak, even in shallow water — drowning is a real risk in debilitated animals.
        </CalloutBox>

        <h2>Veterinary Care for Severe Dehydration</h2>
        <p>Severe dehydration (estimated greater than 5-8% body weight deficit) — visible by extreme skin tenting, deeply sunken eyes, extreme lethargy, and absent urination for extended periods — requires veterinary rehydration. A reptile veterinarian can administer subcutaneous or intracoelemic (body cavity) fluids using appropriate reptile fluid solutions at calculated rates. Oral fluids via tube (gavage) are also used for moderately dehydrated animals that can safely receive them. IV fluid therapy is possible in some species but technically challenging. The underlying cause of the dehydration must also be addressed — whether husbandry, illness, or both.</p>
        <div style={{ background: '#1a1f2b', border: '1px solid #2d3548', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#8a96ad', marginBottom: '8px' }}>When to involve a vet</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: '#8a96ad', lineHeight: 1.55 }}>Severe dehydration (deeply sunken eyes, extreme skin tenting, absent urination, profound lethargy) needs veterinary rehydration — subcutaneous or intracoelomic fluids that cannot be given safely at home. Locate a reptile-experienced clinic through the <a href="https://arav.org" rel="noopener" target="_blank" style={{ color: '#7bc25c' }}>ARAV member directory</a> before you need one.</p>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: '#8a96ad', lineHeight: 1.55 }}>Most dehydration traces back to a husbandry gap. Correct the environment with these setup guides so it does not recur:</p>
          <ul style={{ margin: 0, paddingLeft: '20px', color: '#8a96ad', fontSize: '14px', lineHeight: 1.7 }}>
            <li><a href="/setup/humidity-guide" style={{ color: '#7bc25c' }}>Humidity Guide</a> — species-appropriate humidity and how to hold it</li>
            <li><a href="/setup/temperature-guide" style={{ color: '#7bc25c' }}>Temperature Guide</a> — gradients that prevent overheating and water loss</li>
            <li><a href="/health/dysecdysis" style={{ color: '#7bc25c' }}>Dysecdysis (Retained Shed)</a> — the most common downstream sign of chronic dehydration</li>
          </ul>
        </div>
        <ArticleSourcesList sources={SOURCES} />
      </div>
      </ArticleLayout>
  )
}

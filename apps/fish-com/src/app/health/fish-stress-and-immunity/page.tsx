import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, AffiliateDisclosure } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Fish Stress and Immunity — The Root of Most Disease | Fish.com', description: "Why chronic stress is behind most aquarium fish disease. The sources of stress, how it suppresses the immune system, and how to build a low-stress tank.", path: '/health/fish-stress-and-immunity', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Fish Stress and Immunity', description: 'How stress suppresses fish immunity and drives disease, and how to reduce it.', url: 'https://fish.com/health/fish-stress-and-immunity', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })
export default function FishStressPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Fish Stress and Immunity', subtitle: "Most aquarium disease is not bad luck — it is the predictable result of stress. The pathogens that cause ich, fin rot, and bacterial infections are present in nearly every tank, kept in check by a healthy fish's immune system. When chronic stress suppresses that immunity, opportunistic disease follows. Understanding and minimizing stress is the most powerful preventive tool a fishkeeper has.", category: 'Fish Health', authorName: 'Fish.com Editorial', authorAvatar: '🐟', publishedAt: 'June 2026', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Aquarium Health', href: '/health' }, { name: 'Stress and Immunity', href: '/health/fish-stress-and-immunity' }]}
      schema={schema}
      relatedLinks={[{ title: "Fish Health Hub", href: "/health", category: "Fish Health" }, { title: "Nitrogen Cycle Explained", href: "/health/nitrogen-cycle-explained", category: "Fish Health" }, { title: "New Tank Syndrome", href: "/health/new-tank-syndrome", category: "Fish Health" }, { title: "Water Chemistry Guide", href: "/setup/water-chemistry-guide", category: "Tank Setup" }]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Common Stressors</div>
          {['Poor or unstable water quality', 'Incomplete or crashed nitrogen cycle', 'Overcrowding and aggression', 'Incompatible tankmates', 'Temperature and pH swings', 'Inadequate hiding spots', 'Rough handling and transport'].map(s => (
            <div key={s} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid">{s}</div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Bacterial Infections', href: '/health/bacterial-infections' }, { label: 'New Tank Syndrome', href: '/health/new-tank-syndrome' }, { label: 'Quarantine Tank Guide', href: '/setup/quarantine-tank-guide' }]} />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Fishkeeping tips every Thursday." source="health-stress-immunity" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <h2>Stress Is the Real First Cause</h2>
        <DropCap>It is tempting to treat fish disease as a series of discrete infections to be diagnosed and medicated, but experienced aquarists come to see most illness through a single lens: stress. The ich parasite, the Aeromonas bacteria behind fin rot and ulcers, and the fungal spores that colonize damaged tissue are nearly always already present in a tank, held at bay by a healthy fish's defenses. What tips the balance toward visible disease is some chronic stressor that suppresses the immune system and degrades the protective slime coat. This is why outbreaks so often follow a water-quality lapse, a new aggressive tankmate, or a temperature swing — the stressor came first, and the pathogen merely exploited the opening.</DropCap>

        <h2>How Stress Suppresses Immunity</h2>
        <p>When a fish is stressed, it releases the hormone cortisol, just as mammals do. Sustained elevated cortisol is immunosuppressive: it dampens the inflammatory and immune responses that would otherwise contain opportunistic pathogens, and it interferes with the production and maintenance of the slime coat — the mucus layer that is the fish's first physical barrier against parasites and bacteria. A briefly stressed fish recovers; a chronically stressed one lives with a perpetually weakened defense, and disease becomes a matter of when, not if. The same mechanism explains why fish so often fall ill in the days after being moved, added to a new tank, or exposed to deteriorating water.</p>

        <CalloutBox variant="info" title="The slime coat matters">
          A fish's mucus slime coat is its primary defense against parasites and bacteria. Stress and rough handling strip and thin it; products and aquarium salt that support slime-coat recovery can help a stressed fish through a vulnerable period.
        </CalloutBox>

        <h2>The Major Stressors</h2>
        <p>The most significant and most controllable stressor is water quality. Any detectable ammonia or nitrite, accumulating nitrate, or an unstable pH places constant physiological load on a fish. A second major category is social stress: overcrowding, aggression from incompatible tankmates, keeping schooling fish in too-small groups, or housing timid species with boisterous ones. Environmental swings — temperature changes from a failing heater, pH shifts, or sudden lighting — add further load, as do a lack of hiding places, an unsuitable diet, and the acute stress of netting, bagging, and transport. Each on its own may be tolerable; in combination they overwhelm the fish.</p>

        <h2>Building a Low-Stress Tank</h2>
        <p>Reducing stress is largely a matter of good husbandry applied consistently. Maintain a fully cycled, stable system with zero ammonia and nitrite and low nitrate through regular water changes. Stock compatible species at sensible densities, keep schooling fish in proper groups, and provide ample plants, caves, and broken sightlines so every fish has somewhere to retreat. Hold temperature and pH steady rather than chasing ideal numbers with abrupt corrections. Feed a varied, quality diet that supports immune function, and handle fish gently and infrequently. A tank built around these principles produces fish that shrug off the pathogens swimming alongside them.</p>

        <h2>Stress, Quarantine, and Acclimation</h2>
        <p>Two moments carry concentrated stress risk: bringing home a new fish and acclimating it. New arrivals are already stressed and immunosuppressed from capture, shipping, and retail holding, which is exactly when latent infections flare. Quarantining new fish in a dedicated <a href="/setup/quarantine-tank-guide">quarantine tank</a> lets them recover in calm, pristine conditions and reveals illness before it reaches the display. Acclimate slowly to match temperature and chemistry, dim the lights, and avoid feeding heavily on the first day. Managing stress at these pinch points prevents a large share of the disease that otherwise follows new additions, and complements the broader picture covered in our <a href="/health/bacterial-infections">bacterial infections</a> guide.</p>

        <AffiliateDisclosure variant="inline" siteId="fish-com" />
        <div style={{ background: '#f7fbfd', border: '1px solid #d4e5ee', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#4a6573', marginBottom: '8px' }}>Stable Heater + Water Test Kit</div>
          <p style={{ fontSize: '14px', margin: '0 0 8px', color: '#4a6573', lineHeight: 1.55 }}>Temperature stability and water quality are the two most controllable stressors in any aquarium. A reliable adjustable heater prevents temperature swings; a liquid test kit (not strips) gives accurate ammonia, nitrite, nitrate, and pH readings. These are husbandry tools — they support a low-stress environment but do not treat disease and are not a substitute for correct diagnosis or veterinary guidance when a fish is unwell.</p>
          <p style={{ fontSize: '12px', margin: '0 0 12px', color: '#7a95a0', lineHeight: 1.4 }}>Fish.com earns an affiliate commission on qualifying purchases at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/aquarium%20adjustable%20heater%20water%20test%20kit%20ammonia%20nitrite?s=health-fish-stress-immunity" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: '#232f3e', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Amazon →</a>
            <a href="/go/chewy-brand/aquarium%20heater%20water%20quality%20test%20kit?s=health-fish-stress-immunity" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: '#1e90ff', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>
      </div>
    </ArticleLayout>
  )
}

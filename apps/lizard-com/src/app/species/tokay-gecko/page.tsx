import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Tokay Gecko Care Guide — Loud Calls, Biting | Lizard.com', description: 'Tokay geckos are the most aggressive commonly kept gecko. Their "to-KAY" call is heard at night. Taming protocol works — but takes patience.', path: '/species/tokay-gecko', type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: 'Tokay Gecko Care Guide', description: 'Aggression management, taming protocol, and care for Gekko gecko tokay geckos.', url: 'https://lizard.com/species/tokay-gecko', imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function TokayGeckoPage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: 'Tokay Gecko Care Guide', subtitle: 'Gekko gecko — the largest gecko in the Gekko genus, native across Southeast Asia. The tokay is famous for three things: its striking appearance (vivid blue-gray with red-orange spots), its loud "to-KAY to-KAY" call that can be heard from across a room, and its bite — which is a genuine and not insignificant event. They are challenging pets that reward patient, experienced keepers.', category: 'Species Guide — Experienced', authorName: 'Lizard.com Editorial', authorAvatar: '🦎', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Tokay Gecko', href: '/species/tokay-gecko' }]}
      schema={schema}
      relatedLinks={[
        { title: 'Species Library', href: '/species', category: 'Hub' },
        { title: 'Day Gecko Care', href: '/species/day-gecko', category: 'Species' },
        { title: 'Crested Gecko Care', href: '/species/crested-gecko', category: 'Species' },
        { title: 'Gargoyle Gecko Care', href: '/species/gargoyle-gecko', category: 'Species' },
        { title: 'Humidity Guide', href: '/setup/humidity-guide', category: 'Setup' },
        { title: 'Beginner vs Advanced Reptiles', href: '/species/beginner-vs-advanced-reptiles', category: 'Species' },
      ]}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>Quick Stats</div>
          {[['Adult size', '11–14 inches (males larger)'], ['Enclosure', '20×20×30" — tall, tropical'], ['Temperature', '80–90°F warm · 70–75°F cool'], ['Humidity', '60–80% — tropical species'], ['UVB', 'Arcadia 6% beneficial'], ['Temperament', 'Defensive/aggressive — bites hard'], ['Call', 'Loud "to-KAY" — nocturnal'], ['Lifespan', '10–15+ years captive']].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Crested Gecko', href: '/species/crested-gecko' }, { label: 'Leopard Gecko', href: '/species/leopard-gecko' }, { label: 'Day Gecko', href: '/species/day-gecko' }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source="species-tokay" ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="species" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">
        <h2>The Bite — Honest Assessment</h2>
        <p>A tokay gecko bite from an adult is significantly more painful than most gecko bites. Tokays have powerful jaws relative to their size and they do not let go — a defensive tokay that bites will hold on and rotate its head, causing lacerations. The appropriate response: do not pull your hand away (this worsens the injury) — bring the animal near water or use a paper towel to cover its eyes to encourage release. Thick leather gloves provide protection during initial handling sessions until the animal settles.</p>
        <p>This is not shared to discourage tokay keeping — it is shared because owners who are caught off-guard by their first tokay bite sometimes react in ways that injure the animal or damage the taming relationship they have been building. Know what you are getting into, have appropriate protection, and you will be fine.</p>

        <h2>Taming — It Works, But Slowly</h2>
        <p>Tokays have a reputation as untameable that is not entirely deserved. Wild-caught tokays are extremely defensive and rarely tame meaningfully. Captive-bred tokays tamed from juveniles using patient, consistent handling protocols become tractable adults that can be handled without constant defensive behavior. The protocol: start with brief (2-3 minute) cup method sessions — let the gecko walk from hand to hand without grabbing, rewarding with mealworm pieces. Gloves initially. Gradually increase duration and reduce glove use as the animal's defensive responses decrease. Some individual tokays tame readily in 6-8 weeks; others require months of consistent work.</p>
        <p>The animals that never fully tame are best kept as display animals — their striking appearance and vocalizations make them genuinely engaging to observe without handling.</p>

        <h2>The Call — What to Expect</h2>
        <p>The tokay's vocalization ("to-KAY to-KAY" or variations — some describe it as "fuck you, fuck you") is loud, produced primarily at night, and carries significantly. A tokay in a bedroom is not compatible with light sleeping. They call during territorial defense, courtship, and seemingly for general communication. The call volume increases when the animal is stressed or stimulated. In a living room or dedicated reptile room, the call is a distinctive and entertaining feature of the species. Plan enclosure placement accordingly.</p>

        <h2>Enclosure and Care</h2>
        <p>Tropical species requiring 60-80% humidity and warm temperatures (80-90°F warm end). Tall enclosure with lots of vertical structure — cork bark tubes mounted vertically, large branches, pothos and Ficus plants. Tokays are nocturnal and emerge at night to hunt; daytime hides should be secure and enclosed enough that the gecko feels truly hidden. Feed primarily large dubia roaches, superworms, and appropriately sized feeder mice for adults. Calcium dust every feeding; multivitamin 2× weekly. Misting twice daily maintains humidity and provides drinking water.</p>
        <div style={{ background: 'var(--brand-surface, #1a1f2b)', border: '1px solid var(--brand-border, #2d3548)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #8a96ad)', marginBottom: '8px' }}>Tokay Gecko — Setup Equipment</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #8a96ad)', lineHeight: 1.55 }}>Browse enclosures, UVB lighting, thermostats, and substrate sized for tokay gecko care. Lizard.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial inclusion above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/tokay%20gecko%20setup?s=species-tokay-gecko" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Tokay Gecko Setup on Amazon →</a>
            <a href="/go/chewy-brand/tokay%20gecko%20setup?s=species-tokay-gecko" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #7bc25c)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

      </div>
      </ArticleLayout>
  )
}

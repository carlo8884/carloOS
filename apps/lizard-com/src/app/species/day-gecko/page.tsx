import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Day Gecko Care Guide — Phelsuma Species, Vivarium | Lizard.com', description: 'Day geckos (Phelsuma) are vivid green display animals — they are not handling geckos. Giant day gecko, gold dust, and standing\'s guide.', path: '/species/day-gecko', type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: 'Day Gecko Care Guide', description: 'Species overview, bioactive vivarium, and care for Phelsuma day geckos.', url: 'https://lizard.com/species/day-gecko', imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

export default function DayGeckoPage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: 'Day Gecko Care Guide', subtitle: 'Phelsuma — the day geckos of Madagascar and surrounding Indian Ocean islands — are among the most visually spectacular lizards in captivity. Vivid emerald green marked with red, orange, and blue depending on species. They are diurnal (active during the day), fast, agile, and very much display animals rather than handling animals. Their beauty is for watching, not holding.', category: 'Species Guide — Intermediate', authorName: 'Lizard.com Editorial', authorAvatar: '🦎', publishedAt: 'May 2025', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Day Gecko', href: '/species/day-gecko' }]}
      schema={schema}
      relatedLinks={[
        { title: 'Species Library', href: '/species', category: 'Hub' },
        { title: 'Crested Gecko Care', href: '/species/crested-gecko', category: 'Species' },
        { title: 'Gargoyle Gecko Care', href: '/species/gargoyle-gecko', category: 'Species' },
        { title: 'Mourning Gecko Care', href: '/species/mourning-gecko', category: 'Species' },
        { title: 'Bioactive Setup', href: '/setup/bioactive-setup', category: 'Setup' },
        { title: 'UVB Lighting Guide', href: '/setup/uvb-lighting-guide', category: 'Setup' },
      ]}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>Popular Species</div>
          {[['Giant Day Gecko (P. grandis)', '10-12" · Vivid green · Bold'], ['Gold Dust Day Gecko (P. laticauda)', '4-5" · Yellow spots · Nano vivarium'], ["Standing's Day Gecko (P. standingi)", '10-12" · Gray-green · Largest'], ['Lined Day Gecko (P. lineata)', '4" · Red dorsal lines · Nano']].map(([n, d]) => (
            <div key={n} style={{ padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <div style={{ color: 'var(--brand-white)', fontWeight: 600, fontSize: '11px' }}>{n}</div>
              <div style={{ color: 'rgba(238,240,228,0.45)', fontSize: '11px' }}>{d}</div>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Crested Gecko', href: '/species/crested-gecko' }, { label: 'Panther Chameleon', href: '/species/panther-chameleon' }, { label: 'Bioactive Setup', href: '/setup/bioactive-setup' }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source="species-day-gecko" ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="species" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">
        <h2>Display Animal — Setting Expectations</h2>
        <p>Day geckos are not handleable pets in the way leopard geckos or blue-tongued skinks are. They are fast, stress easily when restrained, and their delicate skin and toe pads make them difficult to hold safely — they can drop their tail, lose grip, and suffer skin abrasions from handling attempts. Even in long-term captivity, most day geckos do not become tolerant of handling. The appropriate mindset: day geckos are kept for the pleasure of observing them in a beautifully designed vivarium — a living display that is genuinely engaging to watch.</p>
        <p>Giant day geckos (P. grandis) become semi-tame with consistent, gentle training using food rewards — offering soft ripe fruit from tongs or fingers teaches the gecko to associate the human hand with positive things, and some individuals will approach and accept food from the hand. This is the extent of what most Phelsuma will tolerate, and it is genuinely rewarding to achieve.</p>

        <h2>The Bioactive Vivarium — Their Ideal Setup</h2>
        <p>Day geckos are superbly suited for naturalistic bioactive vivariums. Tall enclosures (24×18×36+ for giant day geckos) planted with live tropical plants (pothos, bromeliads, Ficus, orchids) and populated with a springtail and isopod cleanup crew create a self-sustaining micro-ecosystem that matches their native habitat. Bamboo poles, cork bark tubes, and vertical branches provide climbing structure. A misting system (MistKing or similar) maintains tropical humidity (60-80%) with twice-daily misting. The bioactive vivarium also eliminates substrate changing — the CUC (cleanup crew) processes waste continuously.</p>
        <p>Bromeliads are particularly valuable in day gecko setups — they hold water in their central cup (a water source day geckos use naturally in the wild), provide egg-laying sites, and look appropriate in a Malagasy-themed vivarium. Giant day geckos drink from water droplets on leaves after misting — they rarely drink from standing water dishes.</p>

        <h2>UVB and Lighting</h2>
        <p>Day geckos are strictly diurnal and require significant UVB exposure. Arcadia 6% T5 HO for most Phelsuma species (forest/garden habitat origins). Full-spectrum LED grow lights supplement UVB for plant growth — combine with the T5 UVB tube rather than using LED alone. 12-hour photoperiod year-round approximates their equatorial origin. The basking spot (created by a low-wattage spot bulb positioned at one end of the vivarium) should reach 90-95°F on the surface; ambient 78-82°F throughout.</p>

        <h2>Diet</h2>
        <p>Day geckos are omnivores — insects plus fruit. The diet that produces best health: dubia roaches and hornworms as the primary protein (appropriately gut-loaded and dusted with calcium and multivitamin), supplemented with a commercial fruit-nectar mix (Repashy Crested Gecko Diet, Pangea Fruit Mix — day geckos accept these enthusiastically). Pure fruit (mashed mango, papaya, banana) can be offered occasionally. The commercial fruit-nectar mixes are more nutritionally complete than whole fruit and easier to provide consistently. Feed every other day — they have a fairly high metabolism for a lizard.</p>

        <h2>Egg Laying and Breeding</h2>
        <p>Phelsuma lay 1–2 hard-shelled eggs that are glued to a surface — typically a bamboo tube, cork bark, bromeliad base, or the vivarium glass — rather than buried in substrate (unlike most gecko species). Eggs are incubated at room temperature in the vivarium in most cases; they tolerate temperature variation well. Incubation: 45–90 days depending on species and temperature. Hatchlings are fully independent immediately. Remove hatchlings to a separate setup if breeding intentionally — adults may harass juveniles.</p>
        <div style={{ background: 'var(--brand-surface, #1a1f2b)', border: '1px solid var(--brand-border, #2d3548)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #8a96ad)', marginBottom: '8px' }}>Day Gecko — Setup Equipment</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #8a96ad)', lineHeight: 1.55 }}>Browse enclosures, UVB lighting, thermostats, and substrate sized for day gecko care. Lizard.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial inclusion above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/day%20gecko%20setup?s=species-day-gecko" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Day Gecko Setup on Amazon →</a>
            <a href="/go/chewy-brand/day%20gecko%20setup?s=species-day-gecko" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #7bc25c)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

      </div>
      </ArticleLayout>
  )
}

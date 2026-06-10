import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, AffiliateDisclosure, CrossPortfolioCard, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: "Mourning Gecko Care Guide — Parthenogenetic Colony | Lizard.com", description: "Mourning geckos are tiny all-female parthenogenetic geckos kept in colonies. Bioactive nano vivariums, CGD plus insects, and why they clone themselves.", path: "/species/mourning-gecko", type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: "Mourning Gecko Care Guide", description: "Colony housing, parthenogenesis, bioactive nano enclosure, diet, and care for Lepidodactylus lugubris.", url: "https://lizard.com/species/mourning-gecko", imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })

export default function SpeciesMourningGeckoPage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: "Mourning Gecko Care Guide", subtitle: "Lepidodactylus lugubris, the mourning gecko, is a tiny (3.5 to 4 inch) arboreal gecko famous for being parthenogenetic: populations are all-female and reproduce by cloning, no males required. Sociable, vocal, and easy to keep in bioactive colonies, they are an ideal nano-vivarium species, with the caveat that a single pair can quickly become a population.", category: "Species Guide — Beginner", authorName: 'Lizard.com Editorial', publishedAt: 'June 2026', readTime: "9 min" }}
      breadcrumbs={[{ name: "Home", href: "/" }, { name: "Species", href: "/species" }, { name: "Mourning Gecko", href: "/species/mourning-gecko" }]}
      schema={schema}
      relatedLinks={[
        { title: 'Species Library', href: '/species', category: 'Hub' },
        { title: 'Day Gecko Care', href: '/species/day-gecko', category: 'Species' },
        { title: 'Crested Gecko Care', href: '/species/crested-gecko', category: 'Species' },
        { title: 'Green Anole Care', href: '/species/green-anole', category: 'Species' },
        { title: 'Bioactive Setup', href: '/setup/bioactive-setup', category: 'Setup' },
        { title: 'Cleanup Crew (Isopods + Springtails)', href: '/setup/cleanup-crew-isopods-springtails', category: 'Setup' },
      ]}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>{"Quick Stats"}</div>
          {[["Scientific name", "Lepidodactylus lugubris"], ["Difficulty", "Beginner"], ["Adult size", "3.5-4 in"], ["Enclosure", "12x12x18 in for a small colony"], ["Ambient", "72-80 F"], ["Humidity", "60-80 percent"], ["Reproduction", "Parthenogenetic (all-female)"], ["Diet", "Powdered gecko diet + micro insects"], ["Housing", "Colony (no males needed)"], ["Lifespan", "8-10+ years"]].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title={"Related Guides"} links={[{ label: "Crested Gecko Care", href: "/species/crested-gecko" }, { label: "Day Gecko Care", href: "/species/day-gecko" }, { label: "Bioactive Setup", href: "/setup/bioactive-setup" }, { label: "Cleanup Crew Guide", href: "/setup/cleanup-crew-isopods-springtails" }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source={"lizard-species-mourning-gecko"} ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="species" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Lizard.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />
          <p>{"Mourning geckos are small, hardy, arboreal geckos found across the tropical Pacific and now popular in the reptile hobby for two unusual reasons: they are parthenogenetic, meaning females produce viable eggs and offspring without any male, and they are genuinely social, thriving in small colonies where they communicate with audible chirps. Their tiny size, room-temperature requirements, and tolerance of bioactive nano enclosures make them an outstanding low-cost, low-space first reptile, provided keepers understand they will breed prolifically."}</p>
          <h2>{"Parthenogenesis and Colony Housing"}</h2>

          <h2>{"Enclosure"}</h2>
          <p>{"A small colony of three to five geckos does well in a 12 by 12 by 18 inch front-opening terrarium, with larger enclosures supporting more animals. Mourning geckos are arboreal, so prioritize vertical surfaces: cork bark, bamboo, branches, and broad-leaf live plants such as pothos. A bioactive substrate with a cleanup crew of springtails and isopods handles waste and supports egg-laying, and the live plants help maintain humidity and provide egg-deposition sites."}</p>
          <h2>{"Temperature, Humidity, and Lighting"}</h2>
          <ul>
            <li>{"Ambient: 72-80 F, comfortable room temperature for most homes"}</li>
            <li>{"Humidity: 60-80 percent, maintained by misting once or twice daily"}</li>
            <li>{"UVB: optional; a low-level UVB bulb benefits these partly diurnal geckos and supports the live plants"}</li>
            <li>{"Mourning geckos drink droplets from misted surfaces, so misting is part of hydration"}</li>
          </ul>
          <h2>{"Feeding"}</h2>
          <p>{"Mourning geckos thrive on the same complete powdered gecko diets used for crested geckos, mixed with water and offered in shallow dishes several times a week. Supplement with tiny live feeders such as fruit flies (flightless Drosophila), bean beetles, and micro/pinhead crickets dusted with calcium for enrichment and breeding condition. Their small size means feeders must be correspondingly small. A varied diet keeps a colony healthy and reproducing."}</p>
          <h2>{"Behavior and Handling"}</h2>
          <p>{"Mourning geckos are fast, tiny, and easily stressed, and they readily drop their tails, so they are a hands-off display species rather than a handling pet. Their appeal is in watching an active, social colony interact and forage. They are nocturnal-to-crepuscular and most visible in the evening. Because they are so small and quick, take care when opening the enclosure to prevent escapes."}</p>
          <h2>{"Common Health Concerns"}</h2>
          <ul>
            <li>{"Metabolic bone disease if fed an unbalanced diet without complete gecko food and calcium"}</li>
            <li>{"Egg-binding in females laying without adequate calcium and nest sites"}</li>
            <li>{"Dehydration from inadequate misting"}</li>
            <li>{"Overcrowding stress as the colony multiplies; plan for expansion or rehoming"}</li>
            <li>{"Escape due to their small size"}</li>
          </ul>
          <p>{"A gecko that stops eating, loses condition, or shows swelling should be assessed by a reptile-experienced veterinarian."}</p>
          <h2>{"Sources & Further Reading"}</h2>
          <ul>
            <li>{"Mader, D. R. Reptile Medicine and Surgery (Elsevier)."}</li>
            <li>{"Peer-reviewed literature on parthenogenesis in Lepidodactylus lugubris."}</li>
            <li>{"Reptiles Magazine, mourning gecko colony husbandry references."}</li>
          </ul>
        <AffiliateDisclosure variant="inline" siteId="lizard-com" />
        <div style={{ background: 'var(--brand-surface, #1a1f2b)', border: '1px solid var(--brand-border, #2d3548)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #8a96ad)', marginBottom: '8px' }}>Mourning Gecko — Setup Equipment</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #8a96ad)', lineHeight: 1.55 }}>Browse planted nano enclosures, low-level UVB, foggers, thermostats, substrate, and complete gecko diet sized for mourning gecko care. Lizard.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/mourning%20gecko%20enclosure%20setup?s=species-mourning-gecko" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Mourning Gecko Setup on Amazon →</a>
            <a href="/go/chewy-brand/mourning%20gecko%20enclosure%20setup?s=species-mourning-gecko" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #7bc25c)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>
      </div>
    </ArticleLayout>
  )
}

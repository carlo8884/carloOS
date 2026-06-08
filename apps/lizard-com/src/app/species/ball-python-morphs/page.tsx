import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Ball Python Morphs Guide — 400+ Mutations, BEL | Lizard.com', description: 'Ball python morphs: the 15 foundational mutations that create 400+ combinations. Blue Eyed Leucistic combos, spider wobble controversy.', path: '/species/ball-python-morphs', type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: 'Ball Python Morphs Guide', description: 'Foundational mutations, BEL combos, spider wobble, and pricing for ball python morphs.', url: 'https://lizard.com/species/ball-python-morphs', imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function BallPythonMorphsPage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: 'Ball Python Morphs Guide', subtitle: 'Ball pythons have the most extensive morph library of any reptile species — over 400 recognized morphs as of 2025, with new combinations being produced constantly. Understanding the ~15 foundational mutations that generate most of this diversity is the key to navigating the morph world, understanding genetics, and predicting breeding outcomes.', category: 'Breed Guide', authorName: 'Lizard.com Editorial', publishedAt: 'May 2025', readTime: '10 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species/ball-python' }, { name: 'Morphs', href: '/species/ball-python-morphs' }]}
      schema={schema}
      relatedLinks={[
        { title: 'Species Library', href: '/species', category: 'Hub' },
        { title: 'Ball Python Care', href: '/species/ball-python', category: 'Species' },
        { title: 'Corn Snake Care', href: '/species/corn-snake', category: 'Species' },
        { title: 'Boa Constrictor Care', href: '/species/boa-constrictor', category: 'Species' },
        { title: 'Reptile Buying Checklist', href: '/species/reptile-buying-checklist', category: 'Species' },
        { title: 'Temperature Guide', href: '/setup/temperature-guide', category: 'Setup' },
      ]}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>Genetic Types</div>
          {[['Dominant', 'One copy shows phenotype · Two copies = "super" · Banana, Mojave, Lesser, Butter'], ['Co-dominant', 'One copy shows · Two copies = distinct super · Pastel, Cinnamon, GHI'], ['Recessive', 'Two copies required to show · Het = hidden carrier · Albino, Piebald, Clown'], ['Incomplete dominant', 'One copy changes appearance · Super is different animal · Enchi, Axanthic']].map(([type, desc]) => (
            <div key={type} style={{ padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <div style={{ color: 'var(--brand-white)', fontWeight: 600, fontSize: '11px' }}>{type}</div>
              <div style={{ color: 'rgba(238,240,228,0.45)', fontSize: '11px' }}>{desc}</div>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Ball Python Care', href: '/species/ball-python' }, { label: 'Corn Snake Morphs', href: '/species/corn-snake' }, { label: 'Dysecdysis Guide', href: '/health/dysecdysis' }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source="species-bp-morphs" ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="species" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Lizard.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />
        <h2>Foundational Mutations — The Building Blocks</h2>
        <p><strong>Albino (Amelanistic):</strong> Recessive. Removes black pigment — wild-type black and brown replaced by yellow, orange, white, and red. Classic yellow-and-white with red eyes. One of the first ball python morphs established; still popular and affordable. Combines well with most other morphs.</p>
        <p><strong>Axanthic:</strong> Recessive. Removes yellow/red pigment — leaves black, white, and grey. Produces dramatic black-and-white appearance. Combined with Albino produces Snowflake (white with pale yellow blushing). Multiple allelic forms exist (different axanthic mutations from different breeding lines — some are compatible for breeding, some are not).</p>
        <p><strong>Piebald:</strong> Recessive. Random areas of pure white with no pattern alternate with normally patterned areas. Hugely variable — some animals are 80% white, others 20%. The unpredictability is part of their appeal. Piebald combined with many other morphs produces stunning contrast between patterned and white sections.</p>
        <p><strong>Clown:</strong> Recessive. Distinctive reduced pattern — the dorsal pattern runs in a disconnected stripe, side pattern reduced, distinctive pattern on the head. Dark, vivid coloration. Clown combined with other morphs (Pastel Clown, Enchi Clown) produces very high-contrast, intense coloration.</p>
        <p><strong>Pastel:</strong> Co-dominant. Reduces black pigment partially, brightens yellows and whites. The Super Pastel (two copies) is a cream/white with faint pattern. Pastel is one of the most common "background morphs" — it is in a huge number of multi-gene combinations because it brightens all other colors it combines with.</p>
        <p><strong>Banana/Coral Glow:</strong> Co-dominant/sex-linked. Vivid yellow-orange with purple/brown spots ("freckles") that increase with age. The Super Banana is one of the most vivid single-gene morphs available. Sex-linkage creates interesting breeding dynamics (Banana females breed differently than Banana males for specific outcomes).</p>

        <h2>Blue Eyed Leucistic (BEL) — The Holy Grail Combo</h2>
        <p>Blue Eyed Leucistic (BEL) is not a single morph — it is a result of combining specific co-dominant morphs that produce an all-white snake with blue eyes when combined as a double homozygous (two copies of compatible leucistic mutations). The combinations that produce BEL: Lesser + Butter, Mojave + Mojave (Super Mojave), Lesser + Mojave, Phantom + Mojave, and several others. The result is a stunning pure white snake with piercing blue eyes.</p>
        <p>Understanding the genetics: Lesser and Butter are allelic (at the same gene location) — combining them produces BEL. Mojave is at a different but compatible locus — Mojave + Mojave = Super Mojave (full BEL), or Mojave + Lesser = BEL. The diversity of combinations that produce BEL is one reason they remain popular — multiple breeder pathways produce the same stunning end result.</p>

        <h2>The Spider Wobble — The Ethical Debate</h2>
        <p>Spider morph ball pythons carry a neurological condition called "wobble" — an involuntary head tremor and loss of balance particularly visible when the animal is stressed or upside down. All Spider-gene animals (Spider, Bumblebee, Spinner, Killer Bee, and other Spider-containing combos) carry this condition to varying degrees — some animals show it minimally, others severely. The wobble is caused by the Spider gene itself, not by additional mutations — it is inseparable from the aesthetic of the Spider pattern.</p>
        <p>The ethical debate: should Spiders continue to be bred? The pro-Spider position: many affected animals live normal lives with minimal wobble expression, the pattern is beautiful, and proper husbandry minimizes stress triggering. The anti-Spider position: knowingly breeding animals with a heritable neurological condition represents an animal welfare concern regardless of severity. This debate has not been resolved in the hobby — buyers should know what they are purchasing and assess individual animals for wobble severity before acquisition.</p>

        <h2>Morph Pricing — Why It Varies</h2>
        <p>Morph pricing reflects supply and demand with a significant time component. When a new morph is first established (often through years of selecting and breeding toward a visible mutation), scarcity makes prices very high — $5,000-50,000+ for the first proven animals. As breeders work with the morph and produce more offspring, prices fall. Morphs established decades ago (Albino, Piebald, Axanthic) are now $100-300 in single-gene form. Recently produced combos with multiple recessive genes still command premium pricing because producing them requires years of careful breeding through heterozygous generations. Entry-level morphs (Pastel, Enchi, Spotnose single-gene) are now under $100-200 from most breeders.</p>
        <div style={{ background: 'var(--brand-surface, #1a1f2b)', border: '1px solid var(--brand-border, #2d3548)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #8a96ad)', marginBottom: '8px' }}>Ball Python Morphs — Setup Equipment</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #8a96ad)', lineHeight: 1.55 }}>Browse enclosures, UVB lighting, thermostats, and substrate sized for ball python morphs care. Lizard.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial inclusion above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/ball%20python%20morphs%20setup?s=species-ball-python-morphs" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Ball Python Morphs Setup on Amazon →</a>
            <a href="/go/chewy-brand/ball%20python%20morphs%20setup?s=species-ball-python-morphs" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #7bc25c)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

      </div>
      </ArticleLayout>
  )
}

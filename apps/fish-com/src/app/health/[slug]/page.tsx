import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { getPost } from '@carloOS/db'

interface HealthPageProps { params: { slug: string } }

const KNOWN = ['water-chemistry-guide', 'nitrogen-cycle-explained', 'fish-disease-guide', 'ich-treatment', 'new-tank-syndrome']

// Rich static content for key health articles
const STATIC_CONTENT: Record<string, { title: string; subtitle: string; body: string }> = {
  'nitrogen-cycle-explained': {
    title: 'The Nitrogen Cycle Explained — Why Your Tank Must Be Cycled Before Adding Fish',
    subtitle: 'New tank syndrome kills more fish than any disease. Understanding the nitrogen cycle is the single most important thing a new fishkeeper can learn.',
    body: `
      <p>The nitrogen cycle is the process by which beneficial bacteria colonize your aquarium filter and convert toxic waste products into progressively less harmful compounds. Without an established nitrogen cycle, fish waste accumulates as ammonia, which is lethal even at trace concentrations.</p>
      <p>This is why fish die in new tanks. Not because of anything the owner did wrong — but because the biological filtration that fish need to survive simply does not exist yet in a new aquarium.</p>
      <h2>The Three Stages</h2>
      <p><strong>Stage 1 — Ammonia accumulation.</strong> Fish excrete ammonia (NH₃/NH₄⁺) through their gills as the primary waste product of protein metabolism. In a new tank with no bacteria, ammonia accumulates rapidly. At concentrations above 0.5 ppm, ammonia causes gill damage, immune suppression, and death. At concentrations above 2 ppm, death can occur within hours.</p>
      <p><strong>Stage 2 — Nitrite accumulation.</strong> Nitrosomonas bacteria colonize the filter media and convert ammonia to nitrite (NO₂⁻). Nitrite is less immediately toxic than ammonia but causes "brown blood disease" — it binds to hemoglobin and prevents oxygen transport. Fish suffocate despite adequate oxygen in the water. Nitrite above 0.5 ppm causes stress; above 5 ppm can be lethal.</p>
      <p><strong>Stage 3 — Nitrate accumulation.</strong> Nitrospira bacteria convert nitrite to nitrate (NO₃⁻). Nitrate is relatively non-toxic at concentrations below 40 ppm for most fish (lower for sensitive species). Nitrate is removed through water changes. When your tank shows 0 ammonia, 0 nitrite, and rising nitrate — your cycle is complete.</p>
      <h2>How Long Does Cycling Take?</h2>
      <p>A fishless cycle with an ammonia source: 4–8 weeks. A fish-in cycle (not recommended for beginners): 4–6 weeks with careful water change management. Seeding from an established tank's filter media: 1–2 weeks. Never add fish to an uncycled tank without daily water testing and emergency water changes to keep ammonia and nitrite below 0.5 ppm.</p>
      <h2>How to Speed Up Cycling</h2>
      <ul>
        <li><strong>Use established filter media</strong> — squeezing an old sponge filter into a new tank can seed billions of bacteria instantly</li>
        <li><strong>Use bacteria supplements</strong> — Tetra SafeStart Plus and Seachem Stability have documented efficacy. Most "instant cycle" products do not.</li>
        <li><strong>Maintain temperature 76–80°F</strong> — bacterial growth slows significantly below 70°F</li>
        <li><strong>Don't clean filter media with tap water</strong> — chlorine kills beneficial bacteria. Use dechlorinated or tank water only.</li>
      </ul>
      <h2>Testing Your Cycle</h2>
      <p>Use a liquid test kit (API Master Test Kit), not test strips — strips are significantly less accurate. Test ammonia, nitrite, and nitrate twice weekly during cycling. Your cycle is complete when: ammonia reads 0, nitrite reads 0, and nitrate is detectable (proof of the full conversion chain).</p>
    `,
  },
}

export async function generateStaticParams() {
  return KNOWN.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: HealthPageProps): Promise<Metadata> {
  const content = STATIC_CONTENT[params.slug]
  if (content) return buildMetadata({
    siteId: 'fish-com', title: content.title, description: content.subtitle,
    path: `/health/${params.slug}`, type: 'article',
  })
  try {
    const post = await getPost('fish-com', params.slug)
    if (post) return buildMetadata({
      siteId: 'fish-com', title: post.title, description: post.excerpt ?? '',
      path: `/health/${params.slug}`, type: 'article',
    })
  } catch { /* */ }
  const name = params.slug.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')
  return buildMetadata({ siteId: 'fish-com', title: name, description: '', path: `/health/${params.slug}` })
}

export default async function FishHealthPage({ params }: HealthPageProps) {
  const staticContent = STATIC_CONTENT[params.slug]
  let post; try { post = await getPost('fish-com', params.slug) } catch { /* */ }
  if (!staticContent && !post && !KNOWN.includes(params.slug)) notFound()

  const title = staticContent?.title ?? post?.title ?? params.slug.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')
  const subtitle = staticContent?.subtitle ?? post?.subtitle ?? undefined

  const schema = buildArticleSchema({
    siteId: 'fish-com', title, description: subtitle ?? '',
    url: `https://fish.com/health/${params.slug}`, imageUrl: '',
    authorName: 'Fish.com Expert Team',
    publishedAt: new Date().toISOString(), modifiedAt: new Date().toISOString(),
  })

  return (
    <ArticleLayout
      siteId="fish-com"
      hero={{ title, subtitle, category: 'Aquarium Guide', authorAvatar: '🐠', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Aquarium Health', href: '/health' }, { name: title.split('—')[0].trim(), href: `/health/${params.slug}` }]}
      schema={schema}
      sidebar={<>
        <RelatedLinks title="Related Guides" links={[
          { label: 'Nitrogen Cycle Explained', href: '/health/nitrogen-cycle-explained' },
          { label: 'Water Chemistry Guide', href: '/health/water-chemistry-guide' },
          { label: 'Fish Disease Guide', href: '/health/fish-disease-guide' },
        ]} />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank"
          subtitle="Fishkeeping tips every Thursday." source={`health-${params.slug}`} />
      </>}
    >
      {staticContent ? (
        <div className="carloOS-article" dangerouslySetInnerHTML={{ __html: staticContent.body }} />
      ) : post?.body_html ? (
        <div className="carloOS-article" dangerouslySetInnerHTML={{ __html: post.body_html }} />
      ) : (
        <div className="carloOS-article"><p className="text-brand-text-light italic">Guide coming soon.</p></div>
      )}
    </ArticleLayout>
  )
}

import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { getSpecies, getPost } from '@carloOS/db'

interface SpeciesPageProps { params: { slug: string } }

const KNOWN = ['bearded-dragon', 'leopard-gecko', 'ball-python', 'corn-snake', 'crested-gecko', 'blue-tongue-skink']

const SPECIES_IMAGES: Record<string, string> = {
  'bearded-dragon': 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=1200&q=80&auto=format&fit=crop',
  'leopard-gecko': 'https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?w=1200&q=80&auto=format&fit=crop',
  'ball-python': 'https://images.unsplash.com/photo-1531386151447-fd76ad50012f?w=1200&q=80&auto=format&fit=crop',
  'corn-snake': 'https://images.unsplash.com/photo-1567612529009-afe25813a308?w=1200&q=80&auto=format&fit=crop',
  'crested-gecko': 'https://images.unsplash.com/photo-1548155810-af5c30a49059?w=1200&q=80&auto=format&fit=crop',
  'blue-tongue-skink': 'https://images.unsplash.com/photo-1583795484071-3c453e3a7c71?w=1200&q=80&auto=format&fit=crop',
}

export async function generateStaticParams() {
  return KNOWN.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: SpeciesPageProps): Promise<Metadata> {
  try {
    const s = await getSpecies('lizard-com', params.slug)
    if (s) return buildMetadata({
      siteId: 'lizard-com',
      title: `${s.common_name} Care Guide — Complete Setup, Diet & Health`,
      description: `Complete ${s.common_name} (${s.scientific_name ?? ''}) care guide. Enclosure, temperatures, diet, handling, and health issues.`,
      path: `/species/${params.slug}`, type: 'article', ogImage: SPECIES_IMAGES[params.slug],
    })
  } catch { /* */ }
  const name = params.slug.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')
  return buildMetadata({
    siteId: 'lizard-com',
    title: `${name} Care Guide`,
    description: `Complete ${name} care guide.`,
    path: `/species/${params.slug}`, type: 'article',
  })
}

export default async function SpeciesPage({ params }: SpeciesPageProps) {
  let species, post
  try {
    species = await getSpecies('lizard-com', params.slug)
    post = await getPost('lizard-com', params.slug)
  } catch { /* */ }

  if (!species && !KNOWN.includes(params.slug)) notFound()

  const name = species?.common_name ?? params.slug.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')
  const sciName = species?.scientific_name
  const careData = (species?.care_data ?? {}) as Record<string, unknown>
  const heroImage = SPECIES_IMAGES[params.slug]

  const schema = buildArticleSchema({
    siteId: 'lizard-com', title: `${name} Care Guide`,
    description: `Complete ${name} care guide covering enclosure, temperatures, diet, and health.`,
    url: `https://lizard.com/species/${params.slug}`, imageUrl: heroImage ?? '',
    authorName: 'Lizard.com Expert Team', publishedAt: new Date().toISOString(), modifiedAt: new Date().toISOString(),
  })

  const careAtAGlance = Object.entries(careData).map(([k, v]) => ({
    label: k.split('_').map(w => w[0].toUpperCase() + w.slice(1)).join(' '),
    value: String(v),
  }))

  return (
    <ArticleLayout
      siteId="lizard-com"
      hero={{
        title: `${name} Care Guide`,
        subtitle: sciName ? `${sciName} · Complete care, diet, enclosure & health` : 'Complete care, diet, enclosure & health',
        category: careData.category ? String(careData.category).split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ') : 'Species Guide',
        authorName: 'Lizard.com Expert Team',
        authorAvatar: '🦎',
        publishedAt: 'May 2025',
        readTime: '10 min',
        image: heroImage,
        imageAlt: name,
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Species', href: '/species' },
        { name: name, href: `/species/${params.slug}` },
      ]}
      schema={schema}
      sidebar={<>
        {careAtAGlance.length > 0 && (
          <div className="rounded-lg p-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="text-2xs font-bold tracking-eyebrow uppercase mb-3" style={{ color: 'rgba(238,240,228,0.4)' }}>Care at a Glance</div>
            <div className="flex flex-col gap-2">
              {careAtAGlance.slice(0, 8).map((item) => (
                <div key={item.label} className="flex justify-between gap-2">
                  <span className="text-xs" style={{ color: 'rgba(238,240,228,0.5)' }}>{item.label}</span>
                  <span className="text-xs font-semibold text-brand-white text-right capitalize">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        <TableOfContents items={[
          { label: 'Why This Species', href: '#overview' },
          { label: 'Enclosure', href: '#enclosure' },
          { label: 'Temperature & UVB', href: '#temps' },
          { label: 'Diet & Feeding', href: '#diet' },
          { label: 'Handling', href: '#handling' },
          { label: 'Health Issues', href: '#health' },
        ]} />
        <RelatedLinks title="Related Species" links={
          KNOWN.filter(s => s !== params.slug).slice(0, 4).map(s => ({
            label: s.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' '),
            href: `/species/${s}`,
          }))
        } />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets"
          subtitle="20 species care sheets for subscribers." source={`species-${params.slug}`}
          ctaText="Download Free" />
      </>}
    >
      {post?.body_html
        ? <div className="carloOS-article" dangerouslySetInnerHTML={{ __html: post.body_html }} />
        : <div className="carloOS-article">
            <p style={{ color: 'rgba(238,240,228,0.55)', fontStyle: 'italic' }}>
              Full {name} care guide coming soon. View the{' '}
              <a href="/health/reptile-feeding-guide">general reptile feeding guide</a> or{' '}
              <a href="/setup/uvb-lighting-guide">UVB lighting guide</a> in the meantime.
            </p>
          </div>
      }
    </ArticleLayout>
  )
}

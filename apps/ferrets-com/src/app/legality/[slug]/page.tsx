/**
 * /legality/[slug] — cross-cutting ferret-legality topic pages.
 *
 * Static-generated from LEGALITY_GUIDES. Distinct long-form, informational
 * pages via the shared GuideArticle template. Informational, not legal
 * advice; byline "Ferrets.com Editorial"; server component only.
 */

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { buildMetadata } from '@carloOS/ui'
import { GuideArticle } from '@/components/GuideArticle'
import { LEGALITY_GUIDES, LEGALITY_SLUGS } from '@/data/guides/legality'

export function generateStaticParams() {
  return LEGALITY_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const guide = LEGALITY_GUIDES[slug]
  if (!guide) {
    return buildMetadata({
      siteId: 'ferrets-com',
      title: 'Legality Topic Not Found',
      description: 'The requested legality topic does not exist.',
      path: `/legality/${slug}`,
      noIndex: true,
    })
  }
  return buildMetadata({
    siteId: 'ferrets-com',
    title: guide.title,
    description: guide.dek,
    path: `/legality/${guide.slug}`,
    type: 'article',
    category: 'Legality',
  })
}

export default async function LegalityGuidePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const guide = LEGALITY_GUIDES[slug]
  if (!guide) notFound()

  return (
    <GuideArticle
      eyebrow={guide.eyebrow}
      title={guide.title}
      heading={guide.heading}
      dek={guide.dek}
      tldr={guide.tldr}
      path={`/legality/${guide.slug}`}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Legality', href: '/legality' },
        { name: guide.heading ?? guide.title, href: `/legality/${guide.slug}` },
      ]}
      sections={guide.sections}
      faqs={guide.faqs}
      related={guide.related}
      source={guide.source}
    />
  )
}

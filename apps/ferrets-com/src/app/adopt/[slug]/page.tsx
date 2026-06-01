/**
 * /adopt/[slug] — ferret adoption guide pages (regional + topic).
 *
 * Static-generated from ADOPT_GUIDES via generateStaticParams. Each guide is
 * a distinct long-form, informational page rendered through the shared
 * GuideArticle template. No affiliate CTAs; byline "Ferrets.com Editorial";
 * server component only.
 */

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { buildMetadata } from '@carloOS/ui'
import { GuideArticle } from '@/components/GuideArticle'
import { ADOPT_GUIDES, ADOPT_SLUGS } from '@/data/guides/adopt'

export function generateStaticParams() {
  return ADOPT_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const guide = ADOPT_GUIDES[slug]
  if (!guide) {
    return buildMetadata({
      siteId: 'ferrets-com',
      title: 'Adoption Guide Not Found',
      description: 'The requested ferret adoption guide does not exist.',
      path: `/adopt/${slug}`,
      noIndex: true,
    })
  }
  return buildMetadata({
    siteId: 'ferrets-com',
    title: guide.title,
    description: guide.dek,
    path: `/adopt/${guide.slug}`,
    type: 'article',
    category: 'Adoption',
  })
}

export default async function AdoptGuidePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const guide = ADOPT_GUIDES[slug]
  if (!guide) notFound()

  return (
    <GuideArticle
      eyebrow={guide.eyebrow}
      title={guide.title}
      heading={guide.heading}
      dek={guide.dek}
      tldr={guide.tldr}
      path={`/adopt/${guide.slug}`}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Adopt', href: '/adopt' },
        { name: guide.heading ?? guide.title, href: `/adopt/${guide.slug}` },
      ]}
      sections={guide.sections}
      faqs={guide.faqs}
      related={guide.related}
      source={guide.source}
    />
  )
}

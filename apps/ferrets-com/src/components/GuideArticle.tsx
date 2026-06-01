/**
 * GuideArticle — shared server-component template for Ferrets.com long-form
 * legality / adoption / acquiring guides.
 *
 * Renders: breadcrumb, header (eyebrow + h1 + dek + byline), TL;DR callout,
 * a TableOfContents sidebar generated from the section list, the body
 * sections, an optional FAQ block, a mandatory informational disclaimer, a
 * cross-link sidebar, and an email-capture. Emits Article + BreadcrumbList +
 * (optional) FAQPage schema.
 *
 * This is a structural/editorial primitive — it contains no affiliate CTAs,
 * no first-person claims, and no credentials. Byline is fixed to
 * "Ferrets.com Editorial". Server component only.
 */

import Link from 'next/link'
import {
  buildArticleSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
  Breadcrumb,
  FAQAccordion,
  EmailCapture,
  SidebarCard,
  TableOfContents,
  RelatedLinks,
  CalloutBox,
  CrossPortfolioCard,
} from '@carloOS/ui'
import type { FAQItem } from '@carloOS/ui'

export interface GuideSection {
  /** Stable anchor id (kebab-case). */
  id: string
  /** Section heading. */
  heading: string
  /** Paragraphs (each rendered as a <p>). Strings only — no markup. */
  paragraphs: string[]
  /** Optional bullet list rendered after the paragraphs. */
  bullets?: string[]
}

export interface RelatedLink {
  label: string
  href: string
}

export interface GuideArticleProps {
  eyebrow: string
  title: string
  /** h1 may differ from the SEO title; defaults to title. */
  heading?: string
  dek: string
  /** One-paragraph plain-language summary rendered in the TL;DR callout. */
  tldr: string
  breadcrumbs: Array<{ name: string; href: string }>
  /** Canonical path, e.g. "/adopt/northeast". */
  path: string
  sections: GuideSection[]
  faqs?: FAQItem[]
  related?: RelatedLink[]
  /** Override the disclaimer body when a page needs jurisdiction-specific text. */
  disclaimer?: string
  /** Email-capture source tag. */
  source: string
}

const DEFAULT_DISCLAIMER =
  'This guide is general, informational content about ferret ownership and is not legal advice. Ferret laws and local ordinances change. Before acquiring, transporting, or relocating a ferret, verify the current rules with your state Fish & Wildlife department, your state Department of Agriculture, and your municipality. Ferrets.com does not endorse any specific breeder, rescue, or clinic.'

export function GuideArticle({
  eyebrow,
  title,
  heading,
  dek,
  tldr,
  breadcrumbs,
  path,
  sections,
  faqs,
  related,
  disclaimer,
  source,
}: GuideArticleProps) {
  const pageUrl = `https://ferrets.com${path}`
  const now = new Date().toISOString()

  const articleSchema = buildArticleSchema({
    siteId: 'ferrets-com',
    title,
    description: dek,
    url: pageUrl,
    imageUrl: `https://ferrets.com/api/og?title=${encodeURIComponent(
      title,
    )}&site=ferrets-com&category=${encodeURIComponent(eyebrow)}`,
    authorName: 'Ferrets.com Editorial',
    publishedAt: now,
    modifiedAt: now,
  })

  const breadcrumbSchema = buildBreadcrumbSchema({
    items: breadcrumbs.map((b) => ({
      name: b.name,
      url: `https://ferrets.com${b.href === '/' ? '' : b.href}`,
    })),
  })

  const faqSchema =
    faqs && faqs.length > 0
      ? buildFAQSchema({
          questions: faqs.map((f) => ({
            question: f.question,
            answer:
              typeof f.answer === 'string' ? f.answer : (f.answerText ?? ''),
          })),
        })
      : null

  const schema = faqSchema
    ? combineSchemas(articleSchema, breadcrumbSchema, faqSchema)
    : combineSchemas(articleSchema, breadcrumbSchema)

  const tocItems = sections.map((s) => ({
    label: s.heading,
    href: `#${s.id}`,
  }))
  if (faqs && faqs.length > 0) {
    tocItems.push({ label: 'Frequently asked questions', href: '#faq' })
  }

  return (
    <>
      <SchemaScript schema={schema} />

      <Breadcrumb items={breadcrumbs} />

      <div className="px-container-sm sm:px-container py-14">
        <div className="grid gap-14 lg:grid-cols-[1fr_300px]">
          <article className="carloOS-article min-w-0 max-w-content">
            <header className="mb-8">
              <p className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
                {eyebrow}
              </p>
              <h1
                className="font-display font-black text-brand-text-dark leading-tight tracking-tighter mb-5"
                style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
              >
                {heading ?? title}
              </h1>
              <p className="text-lg text-brand-text-mid leading-relaxed m-0">
                {dek}
              </p>
              <p className="text-xs text-brand-text-light mt-4 m-0">
                By Ferrets.com Editorial &mdash; sourced from cited references.
              </p>
            </header>

            <aside
              className="mb-10 p-6 rounded-xl border border-brand-border bg-brand-surface"
              aria-label="TL;DR"
            >
              <p className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-2">
                TL;DR
              </p>
              <p className="text-base text-brand-text-mid leading-relaxed m-0">
                {tldr}
              </p>
            </aside>

            {sections.map((s) => (
              <section
                key={s.id}
                aria-labelledby={s.id}
                className="mb-10"
              >
                <h2
                  id={s.id}
                  className="font-display font-bold text-brand-text-dark mb-4"
                  style={{ fontSize: 'clamp(22px, 3vw, 28px)' }}
                >
                  {s.heading}
                </h2>
                {s.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-base text-brand-text-mid leading-relaxed mb-4"
                  >
                    {p}
                  </p>
                ))}
                {s.bullets && s.bullets.length > 0 && (
                  <ul className="list-disc pl-5 space-y-2 m-0 text-base text-brand-text-mid leading-relaxed">
                    {s.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {faqs && faqs.length > 0 && (
              <section aria-labelledby="faq" className="mb-10">
                <h2
                  id="faq"
                  className="font-display font-bold text-brand-text-dark mb-5"
                  style={{ fontSize: '1.5rem' }}
                >
                  Frequently asked questions
                </h2>
                <FAQAccordion items={faqs} includeSchema={false} />
              </section>
            )}

            <footer className="text-sm text-brand-text-light leading-relaxed border-t border-brand-border pt-6">
              <p className="mb-2 font-semibold text-brand-text-mid">
                Disclaimer
              </p>
              <p className="m-0">{disclaimer ?? DEFAULT_DISCLAIMER}</p>
            </footer>
          </article>

          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <TableOfContents items={tocItems} />

            {related && related.length > 0 && (
              <RelatedLinks title="Related guides" links={related} />
            )}

            <CrossPortfolioCard
              currentSite="ferrets-com"
              contentType="directory"
              variant="sidebar"
            />

            <SidebarCard title="On Ferrets.com">
              <ul className="list-none p-0 m-0 flex flex-col gap-2 text-xs">
                <li>
                  <Link
                    href="/states"
                    className="text-brand-primary font-medium hover:underline"
                  >
                    State-by-state legality directory &rarr;
                  </Link>
                </li>
                <li>
                  <Link
                    href="/adopt"
                    className="text-brand-primary font-medium hover:underline"
                  >
                    Adoption &amp; rescue hub &rarr;
                  </Link>
                </li>
                <li>
                  <Link
                    href="/acquiring"
                    className="text-brand-primary font-medium hover:underline"
                  >
                    Acquiring a ferret &rarr;
                  </Link>
                </li>
                <li>
                  <Link
                    href="/find-a-vet"
                    className="text-brand-primary font-medium hover:underline"
                  >
                    Find an exotic-pet vet &rarr;
                  </Link>
                </li>
              </ul>
            </SidebarCard>

            <EmailCapture
              siteId="ferrets-com"
              variant="sidebar"
              title="Legality + adoption updates"
              subtitle="One email when our state legality or adoption guidance changes."
              source={source}
            />
          </aside>
        </div>
      </div>
    </>
  )
}

/**
 * Dog.com — Programmatic nutrition-topic page template.
 *
 * One template, 15+ "Can dogs eat …" / nutrition-topic pages. Data lives in
 * src/data/nutrition-topics.ts. Each render is ~600–900 words and shaped per
 * the topic — toxic-food pages emphasize urgency banding, symptoms, and an
 * MedicalWebPage schema; safe-food and special-diet pages drop the
 * MedicalWebPage block.
 *
 * generateStaticParams EXCLUDES any slug that already has a static folder
 * under /app/nutrition/ via EXISTING_STATIC_NUTRITION_SLUGS — Next.js static
 * routes take precedence and we filter proactively to avoid duplicate-segment
 * build errors.
 *
 * Renders:
 *   - Breadcrumb (Home → Nutrition → {topic.name})
 *   - H1 phrased as the user-search question
 *   - Urgency-banded TL;DR card (red for ER toxic, green for "yes")
 *   - Quick reference card (answer / category / urgency)
 *   - Key summary
 *   - Mechanism (why it works / why it doesn't)
 *   - Dosing thresholds (when defined)
 *   - Symptoms + ER triggers (when topic is toxic / has symptoms)
 *   - Safe alternatives
 *   - Related Dog.com topics
 *   - FAQ (3–4 topic-specific Qs) with FAQPage schema
 *   - Citations
 *   - Article + BreadcrumbList + FAQPage schemas (+ MedicalWebPage for toxic)
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  buildMetadata,
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFAQSchema,
  buildMedicalWebPageSchema,
  combineSchemas,
  SchemaScript,
  EmailCapture,
} from '@carloOS/ui'
import {
  NutritionTopics,
  EXISTING_STATIC_NUTRITION_SLUGS,
  getNutritionTopicBySlug,
  type NutritionTopic,
} from '../../../data/nutrition-topics'

// All slugs are known at build time — force static.
export const dynamic = 'force-static'
export const dynamicParams = false

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return NutritionTopics.filter(
    (t) => !EXISTING_STATIC_NUTRITION_SLUGS.has(t.slug),
  ).map((t) => ({ slug: t.slug }))
}

function buildTopicDescription(t: NutritionTopic): string {
  // Per-topic description — must stay ≤ 160 chars (enforced by metadata-policy.mjs).
  const answerShort =
    t.answer === 'No — toxic'
      ? 'No — toxic'
      : t.answer === 'Yes'
        ? 'Yes'
        : t.answer === 'Yes in moderation'
          ? 'Yes, in moderation'
          : t.answer === 'Not recommended'
            ? 'Not recommended'
            : 'Depends'

  const urgencyShort =
    t.urgency === 'ER NOW'
      ? ' Emergency.'
      : t.urgency === 'Same-day vet'
        ? ' Same-day vet.'
        : ''

  // Pattern: "{Question-style name} {Answer}.{Urgency} Mechanism, thresholds, safe alternatives."
  const base = `${t.name} ${answerShort}.${urgencyShort} Mechanism, thresholds, symptoms, safe alternatives.`
  if (base.length <= 160) return base

  const shorter = `${t.name} ${answerShort}.${urgencyShort} Thresholds, symptoms, safe alternatives.`
  if (shorter.length <= 160) return shorter

  const shortest = `${t.name} ${answerShort}.${urgencyShort} Vet-sourced answer & alternatives.`
  if (shortest.length <= 160) return shortest

  return shortest.slice(0, 157) + '...'
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const topic = getNutritionTopicBySlug(slug)
  if (!topic) {
    return buildMetadata({
      siteId: 'dog-com',
      title: 'Nutrition Topic Not Found',
      description: 'This dog nutrition topic page does not exist.',
      path: `/nutrition/${slug}`,
    })
  }

  // Title ≤ 70 chars including " | Dog.com" (10 chars). Build candidates and
  // pick the longest that still fits.
  const candidates = [
    `${topic.name} Vet-Sourced Answer | Dog.com`,
    `${topic.name} | Dog.com`,
  ]
  const title = candidates.find((c) => c.length <= 70) ?? candidates[candidates.length - 1]

  return buildMetadata({
    siteId: 'dog-com',
    title,
    description: buildTopicDescription(topic),
    path: `/nutrition/${topic.slug}`,
    type: 'article',
  })
}

function urgencyClass(u: NutritionTopic['urgency']): string {
  switch (u) {
    case 'ER NOW':
      return 'bg-red-100 text-red-800 border-red-300'
    case 'Same-day vet':
      return 'bg-orange-100 text-orange-800 border-orange-300'
    case 'Monitor at home':
      return 'bg-yellow-100 text-yellow-800 border-yellow-300'
    case 'Not urgent':
      return 'bg-green-100 text-green-800 border-green-300'
  }
}

function answerBannerClass(t: NutritionTopic): string {
  // TL;DR band colour-coded by answer:
  // - Red (toxic) for No — toxic
  // - Orange for Not recommended
  // - Yellow for Depends
  // - Light green for Yes in moderation
  // - Green for Yes
  switch (t.answer) {
    case 'No — toxic':
      return 'bg-red-50 border-l-4 border-red-500'
    case 'Not recommended':
      return 'bg-orange-50 border-l-4 border-orange-500'
    case 'Depends':
      return 'bg-yellow-50 border-l-4 border-yellow-500'
    case 'Yes in moderation':
      return 'bg-lime-50 border-l-4 border-lime-500'
    case 'Yes':
      return 'bg-green-50 border-l-4 border-green-500'
  }
}

function answerBadgeText(t: NutritionTopic): string {
  switch (t.answer) {
    case 'No — toxic':
      return 'NO — TOXIC'
    case 'Yes':
      return 'YES'
    case 'Yes in moderation':
      return 'YES — IN MODERATION'
    case 'Not recommended':
      return 'NOT RECOMMENDED'
    case 'Depends':
      return 'DEPENDS — READ ON'
  }
}

function buildFAQs(t: NutritionTopic): Array<{ question: string; answer: string }> {
  const faqs: Array<{ question: string; answer: string }> = []

  // Q1 — restate the headline question with the short clinical answer.
  faqs.push({
    question: t.name,
    answer:
      `${answerBadgeText(t)}. ${t.keySummary}`,
  })

  // Q2 — what to do RIGHT NOW (urgency-shaped).
  if (t.urgency === 'ER NOW') {
    faqs.push({
      question: 'What should I do if my dog ate this?',
      answer:
        'Treat any suspected ingestion as a potential emergency. Call the ASPCA Animal Poison Control Center at (888) 426-4435 (a per-case consultation fee applies) or contact a 24-hour emergency veterinary hospital immediately. Do not wait for symptoms and do not induce vomiting at home without veterinary direction — it can be dangerous in seizing or hypoglycemic patients.',
    })
  } else if (t.urgency === 'Same-day vet') {
    faqs.push({
      question: 'What should I do if my dog ate this?',
      answer:
        'Contact your veterinarian or the ASPCA Animal Poison Control Center at (888) 426-4435 the same day, even if your dog seems normal. Clinical signs for this exposure are often delayed — early decontamination is far easier than treating an established toxicosis.',
    })
  } else if (t.urgency === 'Monitor at home') {
    faqs.push({
      question: 'What should I do if my dog ate this?',
      answer:
        'In a healthy adult dog, a single small accidental exposure is usually not an emergency — withhold food for a few hours, offer water freely, and monitor for vomiting, diarrhea, or lethargy over 24 hours. Call your veterinarian if signs persist or if your dog has any underlying disease, is a puppy, is a senior, or is on chronic medications.',
    })
  } else {
    faqs.push({
      question: 'How much can I safely feed?',
      answer: t.dosingThresholds
        ? `${t.dosingThresholds} Per WSAVA, treats should make up no more than 10 % of your dog's daily caloric intake.`
        : 'Per WSAVA Global Nutrition Committee guidance, treats — including human foods — should make up no more than 10 % of your dog\'s daily caloric intake. Introduce any new food gradually in a small amount and watch for 24 hours of GI tolerance before repeating.',
    })
  }

  // Q3 — what the published mechanism / nutritional rationale is.
  faqs.push({
    question: 'Why does this work the way it does?',
    answer: t.mechanism,
  })

  // Q4 — what to feed instead.
  if (t.safeAlternatives && t.safeAlternatives.length > 0) {
    faqs.push({
      question: 'What are safer alternatives I can feed instead?',
      answer:
        `Veterinary-nutrition-consensus safer options include: ${t.safeAlternatives.join('; ')}. Always introduce a new food in a small amount and watch for 24 hours of GI tolerance before repeating.`,
    })
  }

  return faqs
}

function humanizePath(href: string): string {
  return href
    .replace('/nutrition/', '')
    .replace('/health/', '')
    .replace('/training/', '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

export default async function NutritionTopicTemplatePage({ params }: PageProps) {
  const { slug } = await params
  const topic = getNutritionTopicBySlug(slug)
  if (!topic) notFound()

  // Defense in depth — never render a slug that already has a static folder.
  if (EXISTING_STATIC_NUTRITION_SLUGS.has(topic.slug)) notFound()

  const faqs = buildFAQs(topic)

  const breadcrumbSchema = buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://dog.com/' },
      { name: 'Nutrition', url: 'https://dog.com/nutrition' },
      { name: topic.name, url: `https://dog.com/nutrition/${topic.slug}` },
    ],
  })

  const articleSchema = buildArticleSchema({
    siteId: 'dog-com',
    title: topic.name,
    description: buildTopicDescription(topic),
    url: `https://dog.com/nutrition/${topic.slug}`,
    imageUrl: 'https://dog.com/og-default.png',
    authorName: 'Dog.com Editorial',
    publishedAt: '2026-05-29',
    modifiedAt: '2026-05-29',
  })

  const faqSchema = buildFAQSchema({ questions: faqs })

  // MedicalWebPage schema for toxic-food pages only — these are the ones with
  // genuine medical-reference content (symptoms, ER triggers).
  const medSchema =
    topic.category === 'Toxic Food'
      ? buildMedicalWebPageSchema({
          name: topic.name,
          description: topic.keySummary.slice(0, 280),
          url: `https://dog.com/nutrition/${topic.slug}`,
          authorName: 'Dog.com Editorial',
          lastReviewed: '2026-05-29',
        })
      : null

  const combined = medSchema
    ? combineSchemas(articleSchema, medSchema, breadcrumbSchema, faqSchema)
    : combineSchemas(articleSchema, breadcrumbSchema, faqSchema)

  const isToxic = topic.category === 'Toxic Food' || topic.urgency === 'ER NOW'

  return (
    <>
      <SchemaScript schema={combined} />

      {/* Breadcrumb */}
      <nav className="px-container sm:px-container-sm py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <Link href="/nutrition" className="hover:text-brand-primary no-underline">Nutrition</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">{topic.name}</span>
      </nav>

      {/* Hero */}
      <div className="bg-brand-dark px-container sm:px-container-sm py-12">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-2xs font-bold tracking-eyebrow uppercase px-3 py-1 rounded-pill bg-brand-primary/15 text-brand-primary">
            {topic.category}
          </span>
          <span className={`text-2xs font-bold tracking-eyebrow uppercase px-3 py-1 rounded-pill border ${urgencyClass(topic.urgency)}`}>
            {topic.urgency}
          </span>
        </div>
        <h1
          className="font-display font-black text-white tracking-tighter leading-none mb-3"
          style={{ fontSize: 'clamp(32px, 5vw, 52px)' }}
        >
          {topic.name}
        </h1>
        <p className="text-base font-light text-white/65 leading-relaxed max-w-3xl">
          Evidence-based nutrition reference — sourced from the ASPCA Animal Poison
          Control Center, AAHA guidelines, the WSAVA Global Nutrition Committee, and
          peer-reviewed veterinary toxicology and nutrition literature.
        </p>
      </div>

      {/* Content */}
      <div className="px-container sm:px-container-sm py-12">
        <div className="grid lg:grid-cols-[1fr_290px] gap-12">
          <article className="carloOS-article min-w-0">
            {/* Urgency-banded answer banner (TL;DR) */}
            <section className={`${answerBannerClass(topic)} rounded-r-lg p-5 mb-8 not-prose`}>
              <div className="text-2xs font-bold tracking-eyebrow uppercase mb-2 text-brand-dark">
                Short Answer
              </div>
              <div className="font-display font-black text-2xl text-brand-dark leading-tight mb-2">
                {answerBadgeText(topic)}
              </div>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-0">
                {topic.keySummary}
              </p>
              {isToxic && (
                <div className="mt-4 pt-4 border-t border-red-200 text-sm text-red-800 font-semibold">
                  ASPCA Animal Poison Control: <a href="tel:8884264435" className="underline">(888) 426-4435</a>
                  {' · '}
                  Per-case consultation fee applies.
                </div>
              )}
            </section>

            {/* Quick reference card — monospace */}
            <section className="not-prose mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Reference</div>
              <div className="font-mono text-xs bg-brand-dark text-white/85 rounded-lg p-5 leading-relaxed overflow-x-auto">
                <div><span className="text-brand-primary">answer</span>     · {topic.answer}</div>
                <div><span className="text-brand-primary">category</span>   · {topic.category}</div>
                <div><span className="text-brand-primary">urgency</span>    · {topic.urgency}</div>
                {topic.dosingThresholds && (
                  <div><span className="text-brand-primary">threshold</span>  · see "Dosing &amp; Thresholds" below</div>
                )}
                {topic.symptoms && topic.symptoms.length > 0 && (
                  <div><span className="text-brand-primary">red flag</span>   · {topic.symptoms[0]}</div>
                )}
              </div>
            </section>

            {/* Key summary intro */}
            <h2>The Short Version</h2>
            <p>{topic.keySummary}</p>

            {/* Mechanism */}
            <h2>Why — The Mechanism</h2>
            <p>{topic.mechanism}</p>

            {/* Dosing thresholds */}
            {topic.dosingThresholds && (
              <>
                <h2>Dosing &amp; Thresholds</h2>
                <p>{topic.dosingThresholds}</p>
                <p>
                  <em>
                    All published thresholds are general references and not a substitute
                    for case-specific veterinary triage. When in doubt, call the ASPCA
                    Animal Poison Control Center at <a href="tel:8884264435"><strong>(888) 426-4435</strong></a> or
                    your veterinarian — they will weigh exposure against your dog’s
                    weight, age, comorbidities, and the specific product ingested.
                  </em>
                </p>
              </>
            )}

            {/* Symptoms + ER triggers (toxic / has symptoms) */}
            {topic.symptoms && topic.symptoms.length > 0 && (
              <>
                <h2>Clinical Signs to Watch For</h2>
                <p>
                  Reported clinical signs after exposure include the following. Onset and
                  severity depend on the exposure amount, the specific product, and your
                  dog’s size and health. Any of these in the context of a known
                  exposure warrants veterinary contact:
                </p>
                <ul>
                  {topic.symptoms.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                {isToxic && (
                  <div className="not-prose bg-red-50 border-l-4 border-red-500 rounded-r-lg p-4 my-6">
                    <div className="text-2xs font-bold tracking-eyebrow uppercase text-red-700 mb-2">
                      Go to the ER Immediately If You See
                    </div>
                    <ul className="text-sm text-red-900 leading-relaxed m-0 pl-5 list-disc">
                      <li><strong>Seizures, collapse, or loss of consciousness</strong></li>
                      <li><strong>Persistent vomiting, especially with blood</strong></li>
                      <li><strong>Difficulty breathing or pale/blue gums</strong></li>
                      <li><strong>Decreased or absent urination</strong></li>
                      <li><strong>Severe lethargy, ataxia, or tremors</strong></li>
                    </ul>
                  </div>
                )}
              </>
            )}

            {/* Safe alternatives */}
            {topic.safeAlternatives && topic.safeAlternatives.length > 0 && (
              <>
                <h2>Safer Alternatives</h2>
                <p>
                  If you want to share a treat or address the underlying nutritional goal
                  another way, the following are veterinary-nutrition-consensus safer
                  options. Always introduce a new food in a small amount and watch for 24
                  hours of GI tolerance before making it a routine:
                </p>
                <ul>
                  {topic.safeAlternatives.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </>
            )}

            {/* Related topics */}
            {topic.relatedTopics && topic.relatedTopics.length > 0 && (
              <>
                <h2>Related Dog.com Guides</h2>
                <ul>
                  {topic.relatedTopics.map((href) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="text-brand-primary font-semibold no-underline hover:underline"
                      >
                        {humanizePath(href)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {/* FAQ */}
            <h2>Frequently Asked Questions</h2>
            <div className="not-prose space-y-4 mb-8">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="border border-brand-border rounded-lg p-5"
                >
                  <h3 className="font-display font-bold text-brand-dark text-base mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            {/* Citations */}
            <section className="not-prose border-t border-brand-border pt-6 mt-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Sources &amp; Citations</div>
              <ul className="text-xs text-brand-text-mid leading-relaxed space-y-1.5 list-disc pl-5">
                {topic.citations.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <p className="text-xs text-brand-text-light italic mt-4">
                This page is editorial reference content and is not a substitute for
                individualized veterinary advice. In a suspected toxic-food exposure,
                contact the ASPCA Animal Poison Control Center at (888) 426-4435 or your
                emergency veterinarian. Last reviewed: May 2026.
              </p>
            </section>
          </article>

          {/* Sidebar */}
          <aside className="space-y-5 lg:sticky lg:top-6 self-start">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">
                At a Glance
              </div>
              {[
                ['Answer', topic.answer],
                ['Category', topic.category],
                ['Urgency', topic.urgency],
                ['Sources', `${topic.citations.length} citation${topic.citations.length === 1 ? '' : 's'}`],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex justify-between py-2 border-b border-brand-border text-xs last:border-0"
                >
                  <span className="text-brand-text-light">{k}</span>
                  <span className="font-bold text-brand-dark text-right max-w-[60%]">{v}</span>
                </div>
              ))}
            </div>

            {isToxic && (
              <div className="bg-red-50 border border-red-300 rounded-xl p-5">
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-red-700 mb-2">
                  Suspected Exposure?
                </div>
                <p className="text-xs text-red-900 leading-relaxed mb-3">
                  Call the ASPCA Animal Poison Control Center or go to a 24-hour emergency
                  veterinary hospital. Do not wait for symptoms.
                </p>
                <a
                  href="tel:8884264435"
                  className="inline-block bg-red-600 text-white font-semibold text-xs px-4 py-2 rounded-md no-underline hover:bg-red-700"
                >
                  Call APCC: (888) 426-4435
                </a>
                <p className="text-2xs text-red-700 mt-2 italic">Per-case consultation fee applies.</p>
              </div>
            )}

            {/* Find a vet — cross-portfolio CTA */}
            <div className="bg-brand-primary-pale border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
                Need a Vet?
              </div>
              <p className="text-xs text-brand-text-mid leading-relaxed mb-3">
                Search board-certified specialists and 24-hour ER clinics on our partner
                directory.
              </p>
              <a
                href="https://vets.co/find-a-vet"
                className="inline-block bg-brand-primary text-white font-semibold text-xs px-4 py-2 rounded-md no-underline hover:bg-brand-primary-dark"
              >
                Find a vet on Vets.co →
              </a>
            </div>

            <EmailCapture
              variant="sidebar"
              siteId="dog-com"
              title="Free Dog Nutrition Tips"
              subtitle="Evidence-based feeding guidance weekly."
              source={`nutrition-${topic.slug}`}
            />
          </aside>
        </div>
      </div>
    </>
  )
}

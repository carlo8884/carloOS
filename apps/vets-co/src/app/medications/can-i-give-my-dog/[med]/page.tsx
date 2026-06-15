import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  buildMetadata,
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFAQSchema,
  ArticleLayout,
  FAQAccordion,
  EmailCapture,
  TableOfContents,
  RelatedLinks,
  CrossPortfolioCard,
} from '@carloOS/ui'
import { PET_MEDS, getPetMed, getRelatedMeds, medFaqs, MED_VERDICT_META, type PetMed } from '../../../../data/pet-meds'

interface PageProps {
  params: Promise<{ med: string }>
}

export function generateStaticParams() {
  return PET_MEDS.map((m) => ({ med: m.slug }))
}

function clamp(s: string, n: number) {
  return s.length <= n ? s : s.slice(0, n - 1).trimEnd() + '…'
}

function shortName(m: PetMed) {
  return m.name.split(' (')[0]
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { med } = await params
  const entry = getPetMed(med)
  if (!entry) return buildMetadata({ siteId: 'vets-co', title: 'Can I Give My Dog…? | Vets.co', description: 'Human medication safety for dogs.', path: '/medications/can-i-give-my-dog' })
  return buildMetadata({
    siteId: 'vets-co',
    title: clamp(`Can I Give My Dog ${shortName(entry)}? | Vets.co`, 70),
    description: clamp(entry.shortAnswer, 160),
    path: `/medications/can-i-give-my-dog/${entry.slug}`,
    type: 'article',
  })
}

export default async function CanIGiveMyDogMedPage({ params }: PageProps) {
  const { med } = await params
  const entry = getPetMed(med)
  if (!entry) notFound()

  const meta = MED_VERDICT_META[entry.verdict]
  const related = getRelatedMeds(entry)
  const url = `https://vets.co/medications/can-i-give-my-dog/${entry.slug}`
  const isNever = entry.verdict === 'never'
  const name = shortName(entry)

  const articleSchema = buildArticleSchema({
    siteId: 'vets-co',
    title: `Can I Give My Dog ${name}?`,
    description: clamp(entry.shortAnswer, 200),
    url,
    imageUrl: '',
    authorName: 'Vets.co Editorial',
    publishedAt: '2026-06-15T00:00:00Z',
    modifiedAt: '2026-06-15T00:00:00Z',
  })
  const breadcrumbSchema = buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://vets.co/' },
      { name: 'Medications', url: 'https://vets.co/medications' },
      { name: 'Can I Give My Dog…', url: 'https://vets.co/medications/can-i-give-my-dog' },
      { name: name, url },
    ],
  })
  const faqs = medFaqs(entry)
  const faqSchema = buildFAQSchema({ questions: faqs })

  return (
    <ArticleLayout
      siteId="vets-co"
      hero={{
        title: `Can I Give My Dog ${name}?`,
        subtitle: entry.shortAnswer,
        category: 'Can I Give My Dog…',
        categoryHref: '/medications/can-i-give-my-dog',
        publishedAt: 'June 2026',
        readTime: '3 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Medications', href: '/medications' },
        { name: 'Can I Give My Dog…', href: '/medications/can-i-give-my-dog' },
        { name: name },
      ]}
      schema={[articleSchema, breadcrumbSchema, faqSchema]}
      sidebar={
        <>
          {isNever && (
            <div className="rounded-lg border-2 p-4 mb-4" style={{ borderColor: '#b91c1c', background: '#fef2f2' }}>
              <div className="text-2xs font-bold uppercase tracking-eyebrow" style={{ color: '#b91c1c' }}>If your pet swallowed {name.toLowerCase()}</div>
              <div className="font-display font-black text-xl mt-1" style={{ color: '#b91c1c' }}>888-426-4435</div>
              <div className="text-xs text-brand-text-light mt-1">ASPCA Animal Poison Control · 24/7 · fee applies</div>
            </div>
          )}
          <TableOfContents
            items={[
              { label: 'The short answer', href: '#answer' },
              { label: 'Why', href: '#why' },
              { label: 'The key caution', href: '#caution' },
              ...(entry.catNote ? [{ label: 'Cats are different', href: '#cats' }] : []),
              ...(entry.symptoms?.length ? [{ label: 'Signs of trouble', href: '#symptoms' }] : []),
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="More medications"
            links={[
              ...related.map((r) => ({ label: `Can I give my dog ${shortName(r).toLowerCase()}?`, href: `/medications/can-i-give-my-dog/${r.slug}` })),
              { label: 'See the full list', href: '/medications/can-i-give-my-dog' },
              { label: 'Find a Vet', href: '/find-a-vet' },
            ]}
          />
          <CrossPortfolioCard currentSite="vets-co" contentType="medication" variant="sidebar" />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Vets.co reference letter" subtitle="Veterinary references for pet owners." source="can-i-give-my-dog" />
        </>
      }
    >
      <div className="carloOS-article">
        <div className="rounded-lg border p-5 my-4" style={{ borderColor: meta.color, background: meta.tone === 'good' ? '#f0fdf4' : meta.tone === 'warn' ? '#fffbeb' : '#fef2f2' }}>
          <span className="text-2xs font-bold uppercase tracking-eyebrow text-brand-text-light">Verdict</span>
          <div className="font-display font-black text-2xl mt-1" style={{ color: meta.color }}>{meta.label}</div>
          <p className="mt-2 mb-0 text-brand-text-mid">{entry.shortAnswer}</p>
        </div>

        <div className="rounded-lg border p-4 my-4" style={{ borderColor: 'var(--brand-primary)', background: 'var(--brand-primary-pale)' }}>
          <strong>We don’t publish doses.</strong> The safe amount of any medication depends on your dog’s exact weight, age, other drugs, and health — and the wrong amount is dangerous. For dosing, ask your veterinarian or a <Link href="/telehealth">telehealth vet</Link>.
        </div>

        <h2 id="why">Why</h2>
        <p>{entry.detail}</p>

        <h2 id="caution">The key caution</h2>
        <p>{entry.keyCaution}</p>

        {entry.catNote ? (
          <>
            <h2 id="cats">Cats are different</h2>
            <p>{entry.catNote} Cats are not small dogs — many medications that a dog can tolerate are dangerous for cats. Never assume a dog guideline applies to a cat.</p>
          </>
        ) : null}

        {entry.symptoms?.length ? (
          <>
            <h2 id="symptoms">Signs of trouble to watch for</h2>
            <ul>{entry.symptoms.map((s) => <li key={s}>{s}</li>)}</ul>
            {entry.whatToDo ? (
              <div className="rounded-lg border p-4 my-3" style={{ borderColor: '#b91c1c', background: '#fef2f2' }}>
                <strong style={{ color: '#b91c1c' }}>If your pet swallowed {name.toLowerCase()}:</strong> {entry.whatToDo}
              </div>
            ) : null}
          </>
        ) : null}

        <h2 id="answer">The bottom line</h2>
        <p>
          {entry.verdict === 'never' && `Do not give your dog ${name}. Keep it well out of reach, and if your pet swallows any, contact ASPCA Animal Poison Control (888-426-4435) or your veterinarian right away — do not wait for symptoms.`}
          {entry.verdict === 'vet-only' && `${name} can sometimes be used in dogs, but only at a dose your veterinarian sets for your specific dog — and only the plain form, free of toxic combination ingredients. When in doubt, call your vet or a telehealth vet before giving anything.`}
          {entry.verdict === 'topical-ok' && `Small, careful topical use of ${name} is usually tolerated in dogs, but it is not a substitute for veterinary care — see your vet for anything beyond a minor issue, and prevent your dog from licking it off.`}
        </p>

        <p className="text-sm text-gray-500 mt-2">
          See also the full <Link href="/medications/can-i-give-my-dog">"can I give my dog…" list</Link>, the <Link href="/medications">veterinary medication library</Link>, and <Link href="/find-a-vet">find a vet</Link>.
        </p>

        <h2 id="faq">Frequently asked questions</h2>
        <FAQAccordion items={faqs} />

        <p className="text-xs text-gray-500 mt-6">
          <em>General educational information from the Vets.co editorial team, based on established veterinary pharmacology and toxicology references (ASPCA Animal Poison Control, Pet Poison Helpline, and veterinary literature). It is not a dose and not a substitute for veterinary advice — every medication decision for your pet should be made with a veterinarian. For a suspected poisoning, call ASPCA Animal Poison Control at 888-426-4435 (24/7, fee applies).</em>
        </p>
      </div>
    </ArticleLayout>
  )
}

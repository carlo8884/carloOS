import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildFAQSchema, buildBreadcrumbSchema, combineSchemas, SchemaScript, EmailCapture, CrossPortfolioCard } from '@carloOS/ui'
import { PET_MEDS, PET_MED_CATEGORIES, MED_VERDICT_META } from '../../../data/pet-meds'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Can I Give My Dog…? Human Medication Safety | Vets.co',
  description: 'Can you give a dog Benadryl, Tylenol, aspirin, or other human medicines? Vet-referenced safe / vet-dose-only / never verdicts — and why dosing is a vet’s job.',
  path: '/medications/can-i-give-my-dog',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://vets.co/' },
    { name: 'Medications', url: 'https://vets.co/medications' },
    { name: 'Can I Give My Dog…', url: 'https://vets.co/medications/can-i-give-my-dog' },
  ],
})

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Can I Give My Dog… — human medication safety',
  numberOfItems: PET_MEDS.length,
  itemListElement: PET_MEDS.map((m, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: `Can I give my dog ${m.name.split(' (')[0]}?`,
    url: `https://vets.co/medications/can-i-give-my-dog/${m.slug}`,
  })),
}

const FAQS = [
  { question: 'What human medicines are safe for dogs?', answer: 'A few human medications can be used in dogs ONLY at a veterinarian-determined dose — for example plain diphenhydramine (Benadryl), plain cetirizine (Zyrtec), and famotidine (Pepcid). Many others are dangerous: acetaminophen (Tylenol), ibuprofen (Advil), naproxen (Aleve), and decongestants like pseudoephedrine should never be given. Always confirm with your vet before giving anything, and never give a dose to a cat based on a dog guideline.' },
  { question: 'Why won’t this page tell me a dose?', answer: 'Because a safe dose depends on your dog’s exact weight, age, other medications, and health, and the gap between a helpful dose and a harmful one can be small. Publishing a number invites accidental overdoses. Your veterinarian — or a telehealth vet — can give you the correct dose for your specific dog.' },
  { question: 'My dog swallowed a human medication — what do I do?', answer: 'Do not wait for symptoms. Call ASPCA Animal Poison Control at 888-426-4435 (24/7, fee applies) or your veterinarian immediately with the medication, the amount, and your dog’s weight. For drugs marked “never” on this site, this is an emergency.' },
]

const schema = combineSchemas(breadcrumbSchema, itemListSchema, buildFAQSchema({ questions: FAQS }))

const VERDICT_ORDER = ['never', 'vet-only', 'topical-ok'] as const

function shortLabel(v: 'never' | 'vet-only' | 'topical-ok') {
  return v === 'never' ? 'Never' : v === 'vet-only' ? 'Vet dose only' : 'Topical OK'
}

export default function CanIGiveMyDogHubPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <div className="bg-brand-dark px-container-sm sm:px-container py-16">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Medication Safety</span>
        </div>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-4" style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
          Can I Give My Dog…?
        </h1>
        <p className="text-lg font-light text-white/60 max-w-2xl leading-relaxed">
          A vet-referenced safety check for the human and over-the-counter medicines owners reach for. Each is rated <strong className="text-white/80">never</strong>, <strong className="text-white/80">vet-dose only</strong>, or <strong className="text-white/80">topical OK</strong>. We never print a dose — dosing is your veterinarian’s job.
        </p>
      </div>

      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <Link href="/medications" className="hover:text-brand-primary no-underline">Medications</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Can I Give My Dog…</span>
      </nav>

      <div className="px-container-sm sm:px-container py-6 bg-brand-surface border-b border-brand-border">
        <div className="rounded-lg border-2 p-4 max-w-content-wide" style={{ borderColor: '#b91c1c', background: '#fef2f2' }}>
          <span className="text-sm font-bold" style={{ color: '#b91c1c' }}>Emergency:</span>{' '}
          <span className="text-sm text-brand-text-mid">If your dog swallowed a human medication, call <strong>ASPCA Animal Poison Control: 888-426-4435</strong> (24/7, fee applies) or your veterinarian now — do not wait for symptoms.</span>
        </div>
      </div>

      <div className="px-container-sm sm:px-container py-12">
        {PET_MED_CATEGORIES.map((cat) => {
          const items = PET_MEDS.filter((m) => m.category === cat)
          if (!items.length) return null
          const sorted = [...items].sort((a, b) => VERDICT_ORDER.indexOf(a.verdict) - VERDICT_ORDER.indexOf(b.verdict))
          return (
            <section key={cat} className="mb-10 max-w-content-wide">
              <h2 className="font-display font-bold text-brand-dark text-xl mb-4">{cat}</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none p-0">
                {sorted.map((m) => {
                  const vm = MED_VERDICT_META[m.verdict]
                  return (
                    <li key={m.slug}>
                      <Link href={`/medications/can-i-give-my-dog/${m.slug}`} className="flex items-center gap-3 py-3 px-4 rounded-lg border border-brand-border bg-brand-surface hover:border-brand-primary hover:bg-white no-underline transition">
                        <span className="inline-block w-2.5 h-2.5 rounded-full shrink-0" style={{ background: vm.color }} aria-hidden />
                        <span className="font-medium text-brand-dark">{m.name.split(' (')[0]}</span>
                        <span className="ml-auto text-2xs font-bold uppercase tracking-eyebrow text-right" style={{ color: vm.color }}>
                          {shortLabel(m.verdict)}
                        </span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </section>
          )
        })}

        <div className="max-w-content-wide mt-8 text-sm text-brand-text-mid">
          <p>
            See also: <Link href="/medications" className="text-brand-primary hover:underline">veterinary medication library</Link> ·{' '}
            <Link href="/symptoms" className="text-brand-primary hover:underline">symptom triage</Link> ·{' '}
            <Link href="/find-a-vet" className="text-brand-primary hover:underline">find a vet</Link>
          </p>
          <p className="text-xs text-gray-500 mt-4">
            Verdicts reflect established veterinary pharmacology and toxicology references (ASPCA Animal Poison Control, Pet Poison Helpline, and veterinary literature) and are general guidance, not a dose and not a substitute for veterinary advice. Cats are not small dogs — never apply a dog guideline to a cat.
          </p>
        </div>
      </div>

      <section className="px-container-sm sm:px-container py-12" style={{ background: 'var(--brand-primary-pale)' }}>
        <div className="max-w-content-wide">
          <CrossPortfolioCard currentSite="vets-co" contentType="medication" variant="inline" />
          <div className="mt-6">
            <EmailCapture variant="section" siteId="vets-co" title="Vets.co reference letter" subtitle="Veterinary references for pet owners." source="can-i-give-my-dog-hub" />
          </div>
        </div>
      </section>
    </>
  )
}

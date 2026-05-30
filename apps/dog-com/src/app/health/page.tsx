import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture } from '@carloOS/ui'
import { Diseases, EXISTING_STATIC_HEALTH_SLUGS, type DiseaseCategory } from '../../data/diseases'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Dog Health Library — 100+ Sourced Guides | Dog.com', description: 'Complete dog health guides. Breed-specific conditions, emergency signs, dental care, senior dog care, symptoms guide — all research-based.', path: '/health' })

const SECTIONS = [
  { category: '🚨 Emergency', items: [{ title: '15 Dog Symptoms to Never Ignore', href: '/health/dog-symptoms-guide', badge: 'Essential' }, { title: 'Find an Emergency Vet', href: '/find-a-vet' }] },
  { category: '🐕 Breed Health Guides', items: [{ title: 'Golden Retriever Health', href: '/health/golden-retriever-health', badge: '60%+ cancer rate' }, { title: 'Labrador Retriever Health', href: '/health/labrador-health' }, { title: 'French Bulldog Health', href: '/health/french-bulldog-health', badge: 'BOAS · IVDD' }, { title: 'German Shepherd Health', href: '/health/german-shepherd-health', badge: 'DM · GDV' }] },
  { category: '🦷 Preventive Care', items: [{ title: 'Dog Dental Care Guide', href: '/health/dog-dental-care' }, { title: 'Senior Dog Care Guide', href: '/health/senior-dog-care' }, { title: 'Dog Vaccination Guide', href: '/health/dog-vaccinations' }, { title: 'Heartworm Prevention', href: '/health/heartworm-prevention' }] },
  { category: '💊 Treatments & Products', items: [{ title: 'Best Flea & Tick Prevention', href: '/reviews/best-flea-tick-prevention' }, { title: 'Best Dry Dog Food 2025', href: '/reviews/best-dry-dog-food' }, { title: 'Best Pet Insurance 2025', href: '/reviews/best-pet-insurance' }] },
]

const CATEGORY_ORDER: DiseaseCategory[] = [
  'Infectious',
  'Oncology',
  'Cardiac',
  'Renal',
  'GI',
  'Endocrine',
  'Orthopedic',
  'Neurological',
  'Ocular',
  'Respiratory',
  'Skin',
  'Dental',
  'Reproductive',
  'Behavioral',
  'Genetic',
]

const CATEGORY_ICONS: Record<DiseaseCategory, string> = {
  Infectious: '🦠',
  Oncology: '🩺',
  Cardiac: '❤️',
  Renal: '💧',
  GI: '🍽️',
  Endocrine: '⚖️',
  Orthopedic: '🦴',
  Neurological: '🧠',
  Ocular: '👁️',
  Respiratory: '🫁',
  Skin: '🐕',
  Dental: '🦷',
  Reproductive: '🧬',
  Behavioral: '🐾',
  Genetic: '🧬',
}

function urgencyBadge(u: string): { label: string; cls: string } {
  switch (u) {
    case 'Emergency — ER now':
      return { label: 'ER', cls: 'bg-red-100 text-red-800' }
    case 'Same-day vet':
      return { label: 'Same-day', cls: 'bg-orange-100 text-orange-800' }
    case 'Schedule vet visit':
      return { label: 'Vet visit', cls: 'bg-yellow-100 text-yellow-800' }
    default:
      return { label: 'Monitor', cls: 'bg-green-100 text-green-800' }
  }
}

// Group programmatic diseases by category, excluding existing static slugs.
function groupedDiseases() {
  const programmaticOnly = Diseases.filter(
    (d) => !d.existingHandWrittenSlug && !EXISTING_STATIC_HEALTH_SLUGS.has(d.slug),
  )
  const groups: Record<DiseaseCategory, typeof Diseases> = {} as Record<DiseaseCategory, typeof Diseases>
  for (const d of programmaticOnly) {
    if (!groups[d.category]) groups[d.category] = []
    groups[d.category].push(d)
  }
  return groups
}

export default function DogHealthHubPage() {
  const groups = groupedDiseases()
  const totalProgrammatic = Object.values(groups).reduce((acc, list) => acc + list.length, 0)

  return (
    <>
      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <div className="flex items-center gap-2.5 mb-4"><span className="w-6 h-0.5 bg-brand-primary" /><span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Dog Health Library</span></div>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-4" style={{ fontSize: 'clamp(28px, 5vw, 50px)' }}>Dog Health Library</h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">100+ health guides drawing on current veterinary guidance. Breed-specific conditions, emergency protocols, preventive care, and honest product comparisons.</p>
      </div>
      <div className="px-container-sm sm:px-container py-14">
        {SECTIONS.map(section => (
          <div key={section.category} className="mb-10">
            <h2 className="font-display text-xl font-bold text-brand-dark mb-4 pb-3 border-b border-brand-border">{section.category}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {section.items.map(item => (
                <Link key={item.href} href={item.href} className="block bg-brand-white border border-brand-border rounded-lg p-4 no-underline hover:border-brand-primary transition-colors">
                  {(item as any).badge && <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-danger mb-1.5">{(item as any).badge}</div>}
                  <div className="font-display font-semibold text-brand-dark text-sm">{item.title}</div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Conditions browser — grouped by category, programmatic from /data/diseases.ts */}
      <section className="border-t border-brand-border bg-brand-surface px-container-sm sm:px-container py-12">
        <div className="flex items-baseline gap-3 mb-2">
          <h2 className="font-display font-bold text-brand-dark text-xl">Conditions A–Z</h2>
          <span className="text-xs text-brand-text-light">
            {totalProgrammatic} conditions across {Object.keys(groups).length} categories
          </span>
        </div>
        <p className="text-sm text-brand-text-mid mb-6 max-w-2xl">
          Disease and condition references with symptoms, diagnostic approach, treatment tiers, and prognosis. Each page is sourced from ACVIM consensus statements, AAHA guidelines, OFA data, and the peer-reviewed veterinary literature.
        </p>
        <div className="space-y-8">
          {CATEGORY_ORDER.map((cat) => {
            const list = groups[cat]
            if (!list || list.length === 0) return null
            return (
              <div key={cat}>
                <h3 className="font-display font-bold text-brand-dark text-base mb-3 flex items-center gap-2">
                  <span>{CATEGORY_ICONS[cat]}</span>
                  <span>{cat}</span>
                  <span className="text-xs font-normal text-brand-text-light">({list.length})</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {list.map((d) => {
                    const u = urgencyBadge(d.urgency)
                    return (
                      <Link
                        key={d.slug}
                        href={`/health/${d.slug}`}
                        className="block bg-brand-white border border-brand-border rounded-lg p-3 no-underline hover:border-brand-primary transition-colors"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <span className="font-display font-semibold text-brand-dark text-sm leading-tight">
                            {d.name}
                          </span>
                          <span className={`text-2xs font-bold tracking-eyebrow uppercase px-2 py-0.5 rounded ${u.cls} whitespace-nowrap`}>
                            {u.label}
                          </span>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <div className="bg-brand-primary-pale border-t border-brand-border px-container-sm sm:px-container py-10">
        <EmailCapture variant="section" siteId="dog-com" title="Free Dog Health Tips" subtitle="Breed health guides and health alerts every Tuesday." source="health-hub" ctaText="Subscribe Free" perks={['✓ Research-based', '📬 Weekly', '🐾 Breed-specific']} />
      </div>

      {/* agent1-browse-all-start */}
      <section className="border-t border-brand-border bg-brand-surface px-container-sm sm:px-container py-10">
        <h2 className="font-display font-bold text-brand-dark text-lg mb-4">All Health Topics (hand-written)</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2">
        <Link key="addisons-disease" href="/health/addisons-disease" className="text-sm text-brand-primary no-underline hover:underline">Addisons Disease</Link>
        <Link key="anemia-in-dogs" href="/health/anemia-in-dogs" className="text-sm text-brand-primary no-underline hover:underline">Anemia In Dogs</Link>
        <Link key="cherry-eye" href="/health/cherry-eye" className="text-sm text-brand-primary no-underline hover:underline">Cherry Eye</Link>
        <Link key="cushing-disease" href="/health/cushing-disease" className="text-sm text-brand-primary no-underline hover:underline">Cushing Disease</Link>
        <Link key="dog-allergies" href="/health/dog-allergies" className="text-sm text-brand-primary no-underline hover:underline">Dog Allergies</Link>
        <Link key="dog-anxiety" href="/health/dog-anxiety" className="text-sm text-brand-primary no-underline hover:underline">Dog Anxiety</Link>
        <Link key="dog-arthritis" href="/health/dog-arthritis" className="text-sm text-brand-primary no-underline hover:underline">Dog Arthritis</Link>
        <Link key="dog-bloat-gvd" href="/health/dog-bloat-gvd" className="text-sm text-brand-primary no-underline hover:underline">Dog Bloat Gvd</Link>
        <Link key="dog-cancer-signs" href="/health/dog-cancer-signs" className="text-sm text-brand-primary no-underline hover:underline">Dog Cancer Signs</Link>
        <Link key="dog-cancer-treatment" href="/health/dog-cancer-treatment" className="text-sm text-brand-primary no-underline hover:underline">Dog Cancer Treatment</Link>
        <Link key="dog-dental-care" href="/health/dog-dental-care" className="text-sm text-brand-primary no-underline hover:underline">Dog Dental Care</Link>
        <Link key="dog-diabetes" href="/health/dog-diabetes" className="text-sm text-brand-primary no-underline hover:underline">Dog Diabetes</Link>
        <Link key="dog-diarrhea" href="/health/dog-diarrhea" className="text-sm text-brand-primary no-underline hover:underline">Dog Diarrhea</Link>
        <Link key="dog-ear-infections" href="/health/dog-ear-infections" className="text-sm text-brand-primary no-underline hover:underline">Dog Ear Infections</Link>
        <Link key="dog-heart-disease" href="/health/dog-heart-disease" className="text-sm text-brand-primary no-underline hover:underline">Dog Heart Disease</Link>
        <Link key="dog-hot-spots" href="/health/dog-hot-spots" className="text-sm text-brand-primary no-underline hover:underline">Dog Hot Spots</Link>
        <Link key="dog-kidney-disease" href="/health/dog-kidney-disease" className="text-sm text-brand-primary no-underline hover:underline">Dog Kidney Disease</Link>
        <Link key="dog-liver-disease" href="/health/dog-liver-disease" className="text-sm text-brand-primary no-underline hover:underline">Dog Liver Disease</Link>
        <Link key="dog-luxating-patella" href="/health/dog-luxating-patella" className="text-sm text-brand-primary no-underline hover:underline">Dog Luxating Patella</Link>
        <Link key="dog-mange" href="/health/dog-mange" className="text-sm text-brand-primary no-underline hover:underline">Dog Mange</Link>
        <Link key="dog-obesity" href="/health/dog-obesity" className="text-sm text-brand-primary no-underline hover:underline">Dog Obesity</Link>
        <Link key="dog-pyoderma" href="/health/dog-pyoderma" className="text-sm text-brand-primary no-underline hover:underline">Dog Pyoderma</Link>
        <Link key="dog-pyoderma-guide" href="/health/dog-pyoderma-guide" className="text-sm text-brand-primary no-underline hover:underline">Dog Pyoderma Guide</Link>
        <Link key="dog-seizures" href="/health/dog-seizures" className="text-sm text-brand-primary no-underline hover:underline">Dog Seizures</Link>
        <Link key="dog-skin-allergies" href="/health/dog-skin-allergies" className="text-sm text-brand-primary no-underline hover:underline">Dog Skin Allergies</Link>
        <Link key="dog-symptoms-guide" href="/health/dog-symptoms-guide" className="text-sm text-brand-primary no-underline hover:underline">Dog Symptoms Guide</Link>
        <Link key="dog-vaccinations" href="/health/dog-vaccinations" className="text-sm text-brand-primary no-underline hover:underline">Dog Vaccinations</Link>
        <Link key="dog-vomiting" href="/health/dog-vomiting" className="text-sm text-brand-primary no-underline hover:underline">Dog Vomiting</Link>
        <Link key="french-bulldog-health" href="/health/french-bulldog-health" className="text-sm text-brand-primary no-underline hover:underline">French Bulldog Health</Link>
        <Link key="german-shepherd-health" href="/health/german-shepherd-health" className="text-sm text-brand-primary no-underline hover:underline">German Shepherd Health</Link>
        <Link key="golden-retriever-health" href="/health/golden-retriever-health" className="text-sm text-brand-primary no-underline hover:underline">Golden Retriever Health</Link>
        <Link key="heartworm-prevention" href="/health/heartworm-prevention" className="text-sm text-brand-primary no-underline hover:underline">Heartworm Prevention</Link>
        <Link key="hypothyroidism" href="/health/hypothyroidism" className="text-sm text-brand-primary no-underline hover:underline">Hypothyroidism</Link>
        <Link key="intervertebral-disc-disease" href="/health/intervertebral-disc-disease" className="text-sm text-brand-primary no-underline hover:underline">Intervertebral Disc Disease</Link>
        <Link key="labrador-health" href="/health/labrador-health" className="text-sm text-brand-primary no-underline hover:underline">Labrador Health</Link>
        <Link key="megaesophagus" href="/health/megaesophagus" className="text-sm text-brand-primary no-underline hover:underline">Megaesophagus</Link>
        <Link key="pancreatitis" href="/health/pancreatitis" className="text-sm text-brand-primary no-underline hover:underline">Pancreatitis</Link>
        <Link key="senior-dog-care" href="/health/senior-dog-care" className="text-sm text-brand-primary no-underline hover:underline">Senior Dog Care</Link>
        <Link key="spay-neuter-guide" href="/health/spay-neuter-guide" className="text-sm text-brand-primary no-underline hover:underline">Spay Neuter Guide</Link>
        </div>
      </section>
      {/* agent1-browse-all-end */}
</>
  )
}

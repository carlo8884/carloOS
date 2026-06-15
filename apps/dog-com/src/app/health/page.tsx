import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, buildBreadcrumbSchema, buildFAQSchema, combineSchemas, SchemaScript, StockImage, CrossPortfolioCard, FAQAccordion, type FAQItem } from '@carloOS/ui'
import { Diseases, EXISTING_STATIC_HEALTH_SLUGS, type DiseaseCategory } from '../../data/diseases'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Dog Health Library — 100+ Sourced Guides | Dog.com', description: 'Complete dog health guides. Breed-specific conditions, emergency signs, dental care, senior dog care, symptoms guide — all research-based.', path: '/health' })

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://dog.com/' },
    { name: 'Health', url: 'https://dog.com/health' },
  ],
})


type SectionIcon = "emergency" | "breed" | "preventive" | "treatment"

const SECTIONS: Array<{ category: string; icon: SectionIcon; items: Array<{ title: string; href: string; badge?: string }> }> = [
  { category: "Emergency", icon: "emergency", items: [{ title: "15 Dog Symptoms to Never Ignore", href: "/health/dog-symptoms-guide", badge: "Essential" }, { title: "Is This a Dog Emergency? Triage Tool", href: "/tools/is-this-a-dog-emergency", badge: "Tool" }, { title: "Find an Emergency Vet", href: "/find-a-vet" }] },
  { category: "Breed Health Guides", icon: "breed", items: [{ title: "Golden Retriever Health", href: "/health/golden-retriever-health", badge: "60%+ cancer rate" }, { title: "Labrador Retriever Health", href: "/health/labrador-health" }, { title: "French Bulldog Health", href: "/health/french-bulldog-health", badge: "BOAS · IVDD" }, { title: "German Shepherd Health", href: "/health/german-shepherd-health", badge: "DM · GDV" }] },
  { category: "Preventive Care", icon: "preventive", items: [{ title: "Dog Dental Care Guide", href: "/health/dog-dental-care" }, { title: "Senior Dog Care Guide", href: "/health/senior-dog-care" }, { title: "Dog Vaccination Guide", href: "/health/dog-vaccinations" }, { title: "Heartworm Prevention", href: "/health/heartworm-prevention" }] },
  { category: "Treatments & Products", icon: "treatment", items: [{ title: "Best Flea & Tick Prevention", href: "/reviews/best-flea-tick-prevention" }, { title: "Best Dry Dog Food 2026", href: "/reviews/best-dry-dog-food" }, { title: "Best Pet Insurance 2026", href: "/reviews/best-pet-insurance" }] },
]

const healthItems = SECTIONS.flatMap(s => s.items)
const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Dog Health Library',
  numberOfItems: healthItems.length,
  itemListElement: healthItems.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.title,
    url: `https://dog.com${item.href}`,
  })),
}
// FAQ — grounded only in facts present elsewhere on this page (the urgency
// triage tiers, the conditions A–Z library, the breed health guides, and the
// linked triage tool). Calibrated language; defers diagnosis/dosing to a vet.
const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'How do I know if my dog needs emergency care or can wait for a regular vet visit?',
    answer:
      'Every condition in this library is tagged with one of four urgency tiers. "ER now" means a true emergency — drive to an emergency hospital without waiting (examples include bloat/GDV and suspected poisoning). "Same-day" means your dog should be seen by a vet today. "Vet visit" means schedule a non-urgent appointment. "Monitor" means watch at home and book a visit if signs persist or worsen. When you are unsure, treat the more serious tier as the default and call your vet or an emergency line for guidance — these tiers are a triage starting point, not a substitute for a veterinary exam.',
  },
  {
    question: 'What should I do first if I think my dog has been poisoned?',
    answer:
      'Suspected poisoning is an "ER now" situation. Call ASPCA Animal Poison Control at 888-426-4435, which is staffed by veterinary toxicologists 24/7 (a per-incident consultation fee applies), and contact your emergency vet at the same time. For many toxins, treatment is most effective before symptoms appear, so do not wait to see whether your dog seems affected.',
  },
  {
    question: 'Are these health guides written or reviewed by a veterinarian?',
    answer:
      'These guides are produced by the Dog.com editorial team and draw on current published veterinary guidance — including ACVIM consensus statements, AAHA guidelines, OFA data, and the peer-reviewed veterinary literature. They are educational references, not personalized medical advice. Diagnosis, prescriptions, and dosing decisions should always come from a veterinarian who has examined your dog.',
  },
  {
    question: 'Where should I start if my dog has a specific symptom rather than a known diagnosis?',
    answer:
      'Start with the "15 Dog Symptoms to Never Ignore" guide and the "Is This a Dog Emergency?" triage tool, both linked in the Emergency section above. From there, the Conditions A–Z browser lets you find the reference page for a specific disease, and the breed health guides cover the conditions most common in particular breeds. Each symptom and condition page links to the relevant next step.',
  },
]

const faqSchema = buildFAQSchema({ questions: FAQ_ITEMS.map((f) => ({ question: f.question, answer: typeof f.answer === 'string' ? f.answer : '' })) })

const healthSchema = combineSchemas(breadcrumbSchema, itemListSchema, faqSchema)

// Strip StockImage's outer margins so it fills the masthead edge-to-edge.
const FILL_IMAGE = "[&>figure]:my-0 [&>div]:my-0 [&_figure]:my-0"

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

// ─── Inline SVG icons (replace emoji; match homepage + /breeds idiom) ─────────

// Branded paw mark — the same glyph the /breeds hub + homepage use as the
// category/section marker. Used for both the SECTIONS headers and the
// Conditions A–Z category headers, replacing the per-category emoji map.
function IconPaw({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" width="18" height="18" fill="currentColor" aria-hidden="true">
      <ellipse cx="20" cy="22" rx="6.2" ry="8" />
      <ellipse cx="44" cy="22" rx="6.2" ry="8" />
      <ellipse cx="11" cy="36" rx="5.4" ry="6.8" />
      <ellipse cx="53" cy="36" rx="5.4" ry="6.8" />
      <path d="M32 33c-7.2 0-13 5-13 11.5 0 4.6 3.7 7.5 8.4 7.5 2.4 0 3.4-1 4.6-1s2.2 1 4.6 1c4.7 0 8.4-2.9 8.4-7.5C45 38 39.2 33 32 33z" />
    </svg>
  )
}

// Section-header icons (stroke idiom, 24px viewBox) for the four top SECTIONS.
function SectionIcon({ name, className }: { name: SectionIcon; className?: string }) {
  const common = {
    className,
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  }
  switch (name) {
    case "emergency":
      // Alert triangle
      return (
        <svg {...common}>
          <path d="M12 9v4M12 17h.01" />
          <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
        </svg>
      )
    case "breed":
      // Paw (reuse branded mark, stroke-styled container handles color)
      return <IconPaw className={className} />
    case "preventive":
      // Shield (preventive care)
      return (
        <svg {...common}>
          <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
          <path d="M9.2 12l2 2 3.6-3.6" />
        </svg>
      )
    case "treatment":
      // Capsule / pill (treatments & products)
      return (
        <svg {...common}>
          <rect x="3" y="9" width="18" height="6" rx="3" transform="rotate(-45 12 12)" />
          <path d="M9 9l6 6" />
        </svg>
      )
  }
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
      <SchemaScript schema={healthSchema} />
      <>
      {/* Hero — image-first masthead (mirrors homepage + /breeds). The hub hero
          photo is pulled INTO the dark header: the H1 + intro overlay the photo
          on a bottom-up gradient scrim instead of sitting in an orphaned band
          below. Reuses the existing dog-com:category-health key (no new manifest
          entries). subtleCredit keeps photographer attribution present (QC §1). */}
      <section className="relative bg-brand-dark min-h-[60vh] sm:min-h-[62vh] lg:min-h-[68vh]">
        <div
          className={`absolute inset-0 ${FILL_IMAGE} [&_figure]:h-full [&_figure]:!w-full [&_figure>div]:h-full [&_figure>div]:!w-full [&_figure>div]:!aspect-auto [&_figure>div]:!rounded-none [&>div]:h-full`}
        >
          <StockImage
            manifestKey="dog-com:category-health"
            alt="A dog being checked for health symptoms"
            aspect="16:9"
            variant="inline"
            priority
            subtleCredit
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/65 to-brand-dark/25"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 25% 75%, rgba(232,98,42,0.35) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 flex flex-col justify-end min-h-[60vh] sm:min-h-[62vh] lg:min-h-[68vh] px-container-sm sm:px-container pt-16 pb-10 sm:pb-12">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Dog Health Library</span>
          </div>
          <h1
            className="font-display font-black text-white tracking-tighter leading-[1.03] mb-4 max-w-3xl"
            style={{ fontSize: "clamp(28px, 5vw, 50px)", textShadow: "0 2px 18px rgba(0,0,0,0.45)" }}
          >
            Dog Health Library
          </h1>
          <p
            className="text-lg font-light text-white/85 max-w-xl leading-relaxed"
            style={{ textShadow: "0 1px 10px rgba(0,0,0,0.5)" }}
          >
            100+ health guides drawing on current veterinary guidance. Breed-specific conditions, emergency protocols, preventive care, and honest product comparisons.
          </p>
        </div>
      </section>
      {/* Extractable direct-answer block + urgency triage reference table.
          Sits high on the page so AI answer surfaces and SERP snippets can lift
          a self-contained summary. The triage tiers mirror the urgencyBadge()
          system used throughout the Conditions A–Z browser below — same facts,
          made extractable. */}
      <section className="px-container-sm sm:px-container pt-12 pb-2">
        <div className="max-w-3xl rounded-xl border border-brand-border bg-brand-primary-pale/60 p-6 sm:p-7">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
            How to use this library
          </div>
          <p className="text-base text-brand-text-mid leading-relaxed m-0">
            The Dog.com Health Library organizes {totalProgrammatic}+ canine conditions, breed-specific
            health guides, and preventive-care references into one place. Every condition is tagged
            with an urgency tier — <strong className="text-brand-dark">ER now</strong>,{' '}
            <strong className="text-brand-dark">same-day</strong>,{' '}
            <strong className="text-brand-dark">vet visit</strong>, or{' '}
            <strong className="text-brand-dark">monitor</strong> — so you can tell at a glance how
            quickly to act. If your dog is showing a worrying sign right now, start with the{' '}
            <Link href="/health/dog-symptoms-guide" className="text-brand-primary font-semibold no-underline hover:underline">
              symptoms-to-never-ignore guide
            </Link>{' '}
            or the{' '}
            <Link href="/tools/is-this-a-dog-emergency" className="text-brand-primary font-semibold no-underline hover:underline">
              emergency triage tool
            </Link>. These references are educational and do not replace a veterinary exam.
          </p>
        </div>

        <div className="max-w-3xl mt-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <caption className="text-left text-xs text-brand-text-light mb-2">
              Urgency tiers used across every condition page in this library
            </caption>
            <thead>
              <tr className="border-b-2 border-brand-border text-left">
                <th className="py-2 pr-4 font-display font-bold text-brand-dark">Tier</th>
                <th className="py-2 pr-4 font-display font-bold text-brand-dark">What it means</th>
                <th className="py-2 font-display font-bold text-brand-dark">Typical action</th>
              </tr>
            </thead>
            <tbody className="align-top">
              <tr className="border-b border-brand-border">
                <td className="py-3 pr-4"><span className="text-2xs font-bold tracking-eyebrow uppercase px-2 py-0.5 rounded bg-red-100 text-red-800 whitespace-nowrap">ER</span></td>
                <td className="py-3 pr-4 text-brand-text-mid">Life-threatening; minutes-to-hours matter (e.g. bloat/GDV, suspected poisoning).</td>
                <td className="py-3 text-brand-text-mid">Go to an emergency hospital now. Do not wait to see if it resolves.</td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="py-3 pr-4"><span className="text-2xs font-bold tracking-eyebrow uppercase px-2 py-0.5 rounded bg-orange-100 text-orange-800 whitespace-nowrap">Same-day</span></td>
                <td className="py-3 pr-4 text-brand-text-mid">Serious but not immediately fatal; should be assessed today.</td>
                <td className="py-3 text-brand-text-mid">Call your vet for a same-day appointment.</td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="py-3 pr-4"><span className="text-2xs font-bold tracking-eyebrow uppercase px-2 py-0.5 rounded bg-yellow-100 text-yellow-800 whitespace-nowrap">Vet visit</span></td>
                <td className="py-3 pr-4 text-brand-text-mid">Needs professional evaluation but is not urgent.</td>
                <td className="py-3 text-brand-text-mid">Schedule a routine appointment.</td>
              </tr>
              <tr>
                <td className="py-3 pr-4"><span className="text-2xs font-bold tracking-eyebrow uppercase px-2 py-0.5 rounded bg-green-100 text-green-800 whitespace-nowrap">Monitor</span></td>
                <td className="py-3 pr-4 text-brand-text-mid">Often manageable at home in an otherwise-well dog.</td>
                <td className="py-3 text-brand-text-mid">Watch closely; book a visit if signs persist or worsen.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="px-container-sm sm:px-container py-14">
        {SECTIONS.map(section => (
          <div key={section.category} className="mb-10">
            <h2 className="font-display text-xl font-bold text-brand-dark mb-4 pb-3 border-b border-brand-border flex items-center gap-2.5">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-primary/10 text-brand-primary shrink-0">
                <SectionIcon name={section.icon} />
              </span>
              <span>{section.category}</span>
            </h2>
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
                  <span className="flex items-center justify-center w-6 h-6 rounded-md bg-brand-primary/10 text-brand-primary shrink-0">
                    <IconPaw className="w-3.5 h-3.5" />
                  </span>
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
        <EmailCapture variant="section" siteId="dog-com" title="Free Dog Health Tips" subtitle="Breed health guides and health alerts every Tuesday." source="health-hub" ctaText="Subscribe Free" perks={["Research-based", "Weekly", "Breed-specific"]} />
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

      {/* FAQ — interactive accordion. FAQPage schema is already merged into
          healthSchema above (combineSchemas), so includeSchema is false here to
          avoid emitting duplicate FAQPage JSON-LD. */}
      <section className="border-t border-brand-border px-container-sm sm:px-container py-12">
        <h2 className="font-display font-bold text-brand-dark text-xl mb-5">
          Frequently asked questions
        </h2>
        <div className="max-w-3xl">
          <FAQAccordion items={FAQ_ITEMS} includeSchema={false} defaultOpenIndex={0} />
        </div>
      </section>

      <CrossPortfolioCard currentSite="dog-com" contentType="health" variant="footer" />
</>
  </>
  )
}

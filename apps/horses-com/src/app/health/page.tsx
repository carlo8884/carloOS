import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbSchema, SchemaScript, EmailCapture, StockImage } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Equine Health — Colic & Gastric Ulcers Reference | Horses.com',
  description:
    'Equine health references: colic (types, signs, emergency recognition) and gastric ulcer syndrome (EGUS) — grounded in AAEP and peer-reviewed literature.',
  path: '/health',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://horses.com/' },
    { name: 'Health', url: 'https://horses.com/health' },
  ],
})

const HEALTH_ENTRIES = [
  {
    slug: 'colic',
    eyebrow: 'Emergencies',
    title: 'Equine Colic',
    description:
      'Spasmodic, impaction, gas, displacement, strangulation, and sand colic. Clinical signs, when to call the vet, diagnostics, medical and surgical treatment, and prevention.',
  },
  {
    slug: 'laminitis',
    eyebrow: 'Emergencies',
    title: 'Equine Laminitis',
    description:
      'Endocrinopathic, sepsis-associated, and supporting-limb laminitis. Signs, Obel grading, diagnosis, acute treatment, and prevention.',
  },
  {
    slug: 'abscess',
    eyebrow: 'Emergencies',
    title: 'Hoof Abscess',
    description:
      'The most common cause of sudden severe lameness. How abscesses form, signs, drainage and soaking, and prevention.',
  },
  {
    slug: 'choke',
    eyebrow: 'Emergencies',
    title: 'Choke',
    description:
      'Esophageal (not airway) obstruction. Causes, signs, why it is an emergency, treatment, and feeding-management prevention.',
  },
  {
    slug: 'tying-up',
    eyebrow: 'Emergencies',
    title: 'Tying-Up',
    description:
      'Exertional rhabdomyolysis. Sporadic versus chronic forms (PSSM, RER), signs, why it is urgent, and dietary management.',
  },
  {
    slug: 'equine-ulcers',
    eyebrow: 'Gastroenterology',
    title: 'Equine Gastric Ulcers',
    description:
      'EGUS — squamous (ESGD) vs glandular (EGGD) disease, risk factors in performance horses, gastroscopy, omeprazole, and forage-first management.',
  },
  {
    slug: 'equine-metabolic-syndrome',
    eyebrow: 'Endocrine',
    title: 'Equine Metabolic Syndrome',
    description:
      'Insulin dysregulation, regional adiposity, and laminitis risk. Diagnosis, dietary management, and exercise.',
  },
  {
    slug: 'cushings-ppid',
    eyebrow: 'Endocrine',
    title: "Cushing's Disease (PPID)",
    description:
      'Pituitary pars intermedia dysfunction in older horses. Mechanism, signs, ACTH testing, pergolide, and laminitis risk.',
  },
  {
    slug: 'navicular-syndrome',
    eyebrow: 'Lameness',
    title: 'Navicular Syndrome',
    description:
      'Caudal heel pain. Anatomy of the podotrochlear apparatus, signs, nerve-block and MRI diagnosis, farriery, and management.',
  },
  {
    slug: 'osteoarthritis',
    eyebrow: 'Lameness',
    title: 'Osteoarthritis',
    description:
      'Degenerative joint disease. How cartilage breaks down, commonly affected joints, diagnosis, joint medication, and management.',
  },
  {
    slug: 'ringbone',
    eyebrow: 'Lameness',
    title: 'Ringbone',
    description:
      'Arthritis of the pastern (high) and coffin (low) joints, articular versus periarticular forms, signs, and management.',
  },
  {
    slug: 'lameness-basics',
    eyebrow: 'Lameness',
    title: 'Lameness Basics',
    description:
      'Spotting lameness, the AAEP 0-5 grading scale, common causes by location, the diagnostic workup, and when to call the vet.',
  },
  {
    slug: 'strangles',
    eyebrow: 'Infectious disease',
    title: 'Strangles',
    description:
      'Streptococcus equi infection. Signs, transmission, the guttural-pouch carrier state, biosecurity, and outbreak management.',
  },
  {
    slug: 'equine-influenza',
    eyebrow: 'Infectious disease',
    title: 'Equine Influenza',
    description:
      'A highly contagious respiratory virus. Signs, spread, the rest rule, vaccination, and biosecurity.',
  },
  {
    slug: 'west-nile-virus',
    eyebrow: 'Infectious disease',
    title: 'West Nile Virus',
    description:
      'A mosquito-borne neurologic disease. Signs, why horses are dead-end hosts, the core vaccine, and mosquito control.',
  },
  {
    slug: 'heaves',
    eyebrow: 'Respiratory',
    title: 'Heaves (Equine Asthma)',
    description:
      'Chronic allergic airway disease. Dust and mold triggers, signs, diagnosis, and environmental management.',
  },
  {
    slug: 'thrush',
    eyebrow: 'Skin & hoof',
    title: 'Thrush',
    description:
      'Bacterial degeneration of the frog. Causes, the telltale black discharge and odor, treatment, and hoof hygiene.',
  },
  {
    slug: 'rain-rot',
    eyebrow: 'Skin & hoof',
    title: 'Rain Rot',
    description:
      'Dermatophilosis. The bacterial skin infection behind crusty scabs, causes, treatment, and prevention.',
  },
  {
    slug: 'mud-fever',
    eyebrow: 'Skin & hoof',
    title: 'Mud Fever',
    description:
      'Pastern dermatitis (scratches). The wet-weather skin condition of the lower legs, causes, treatment, and prevention.',
  },
  {
    slug: 'sweet-itch',
    eyebrow: 'Skin & hoof',
    title: 'Sweet Itch',
    description:
      'Culicoides midge hypersensitivity. The cause of intense seasonal itching and a midge-control management plan.',
  },
]

export default function HealthHubPage() {
  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />

      {/* Hero */}
      <div className="bg-brand-dark px-container-sm sm:px-container py-16">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
            Health Reference
          </span>
        </div>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-4"
          style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
        >
          Equine Health
        </h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">
          Evidence-based references on the equine health conditions owners and managers encounter
          most often, citing AAEP guidelines, peer-reviewed equine medicine, and veterinary
          clinical data.
        </p>
      </div>

      {/* Hero image */}
      <StockImage manifestKey="horses-com:category-health" aspect="16:9" variant="full-bleed" priority />

      {/* Breadcrumb */}
      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Health</span>
      </nav>

      {/* Content */}
      <div className="px-container-sm sm:px-container py-12">
        <p className="text-sm text-brand-text-light mb-10 max-w-2xl">
          These pages are reference material — a supplement to, not a substitute for, qualified
          equine veterinary care. Contact your veterinarian immediately if your horse shows acute
          colic signs or rapid clinical deterioration.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 list-none p-0">
          {HEALTH_ENTRIES.map((entry) => (
            <li key={entry.slug}>
              <Link
                href={`/health/${entry.slug}`}
                className="block py-5 px-6 rounded-lg border border-brand-border bg-brand-surface hover:border-brand-primary hover:bg-white no-underline transition"
              >
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
                  {entry.eyebrow}
                </div>
                <div className="font-display font-bold text-brand-dark text-lg mb-2 leading-tight">
                  {entry.title}
                </div>
                <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                  {entry.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <p className="text-sm text-brand-text-light mt-8 max-w-2xl">
          Tracking weight changes across the year is the most reliable early-warning signal for
          colic risk, ulcers, and metabolic conditions. Score your horse with the{' '}
          <Link href="/tools/body-condition-score" className="text-brand-primary no-underline hover:underline">
            equine body-condition score tool
          </Link>{' '}
          (Henneke 1–9 scale, photo-anchored).
        </p>
      </div>

      {/* Email Capture */}
      <section
        className="px-container-sm sm:px-container py-12"
        style={{ background: 'var(--brand-primary-pale)' }}
      >
        <EmailCapture
          variant="section"
          siteId="horses-com"
          title="The Horses.com Reference"
          subtitle="One email a week: a deep-dive on a breed, condition, or piece of gear. Citation-anchored."
          ctaText="Subscribe"
          source="health-hub"
          perks={[
            'One email weekly',
            'Citation-anchored',
            'No paid placements',
            'Unsubscribe anytime',
          ]}
        />
      </section>
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'lizard-com',
  title: '12 Signs Your Reptile Is Sick — When to See a Vet | Lizard.com',
  description: 'Reptiles hide illness until they are seriously ill. These 12 signs require immediate or same-week veterinary care — including signs that new keepers often miss.',
  path: '/health/sick-reptile-signs',
  type: 'article',
})

const schema = combineSchemas(buildArticleSchema({
  siteId: 'lizard-com',
  title: '12 Signs Your Reptile Is Sick',
  description: '12 signs requiring veterinary care in reptiles — what to watch for.',
  url: 'https://lizard.com/health/sick-reptile-signs',
  imageUrl: '',
  authorName: 'Lizard.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2025-05-01T00:00:00Z',
}), buildMedicalWebPageSchema({ name: 'Sick Reptile Signs', description: '12 signs requiring veterinary care in reptiles — what to watch for.', url: 'https://lizard.com/health/sick-reptile-signs', authorName: 'Lizard.com Editorial', lastReviewed: '2025-05-01', medicalAudience: 'Caregiver' }))

const SIGNS = [
  {
    num: '01', level: 'emergency' as const,
    title: 'Gaping Mouth Breathing or Mucus in Mouth',
    body: 'Open-mouth breathing in a lizard at rest, or mucus/bubbling visible in the mouth or nostrils, indicates respiratory infection, stomatitis, or severe metabolic collapse. These are not &quot;wait and see&quot; presentations.',
  },
  {
    num: '02', level: 'emergency' as const,
    title: 'Complete Inability to Move or Paralysis',
    body: 'A reptile that cannot right itself, has paralyzed limbs, or cannot move its posterior half may have metabolic bone disease advanced to fracture, spinal injury, or serious neurological disease. Veterinary care today.',
  },
  {
    num: '03', level: 'emergency' as const,
    title: 'Prolapse — Tissue Protruding from Cloaca',
    body: 'Pink or red tissue visible outside the cloaca (hemipenis prolapse, cloacal prolapse, or oviductal prolapse) is a surgical emergency. Keep the tissue moist with saline or sugar water and go to a reptile-experienced vet immediately. Time is critical.',
  },
  {
    num: '04', level: 'emergency' as const,
    title: 'Labored Breathing with Clicking or Wheezing',
    body: 'Audible breathing sounds — clicking, rattling, wheezing — in a reptile are not normal and indicate respiratory compromise. Combined with mouth gaping: emergency.',
  },
  {
    num: '05', level: 'urgent' as const,
    title: 'Weight Loss Despite Normal or Increased Appetite',
    body: 'A reptile eating normally but losing weight has a metabolic problem — parasites, cryptosporidiosis, or internal disease. Crypto in particular presents this way. Fecal parasitology is the first step. Do not delay.',
  },
  {
    num: '06', level: 'urgent' as const,
    title: 'Persistent Lethargy Not Explained by Season or Temperature',
    body: 'A reptile that is unusually inactive, does not respond to stimulation, or cannot support its own body weight may be hypothermic, hypoglycemic, or seriously ill. Verify temperatures first — if temperatures are correct and the reptile remains lethargic, vet visit within 2–3 days.',
  },
  {
    num: '07', level: 'urgent' as const,
    title: 'Complete Refusal to Eat Beyond Normal Seasonal Period',
    body: 'Extended fasting with weight loss (track monthly) or other symptoms warrants evaluation. Species-normal fasting (ball pythons in breeding season, etc.) with maintained weight is not the same as pathological anorexia.',
  },
  {
    num: '08', level: 'urgent' as const,
    title: 'Swollen Joints, Limbs, or Body',
    body: 'Localized swelling may indicate abscess, infection, or tumor. Reptile abscesses are solid (not liquid like in mammals) and require surgical removal. Swelling of multiple limbs may indicate advanced metabolic bone disease.',
  },
  {
    num: '09', level: 'urgent' as const,
    title: 'Abnormal Feces — Bloody, Liquid, or Absent',
    body: 'Blood in feces, persistent liquid diarrhea, or no feces for weeks in a reptile that is eating indicates parasites, infection, or blockage. Fecal parasitology at a minimum. Absence of feces in a snake that has eaten multiple meals suggests impaction.',
  },
  {
    num: '10', level: 'urgent' as const,
    title: 'Retained Shed — Stuck Shed on Eyes, Toes, or Tail',
    body: 'Retained eyecaps (spectacles) can cause permanent eye damage if not removed. Retained shed on toes and tail tip constricts blood flow and causes necrosis (tissue death) and loss of the affected structure. Address within days — not weeks.',
  },
  {
    num: '11', level: 'monitor' as const,
    title: 'Color Changes — Dullness or Darkening',
    body: 'Stress coloring, dull coloration in normally vibrant species, or persistent black coloration in bearded dragons (black beard) can indicate stress, suboptimal husbandry, or illness. Usually husbandry-related — check temperatures, UVB, hide availability. If husbandry is correct and color changes persist, vet visit.',
  },
  {
    num: '12', level: 'monitor' as const,
    title: 'Soft or Pliable Jaw and Limb Bones',
    body: 'MBD (metabolic bone disease) causes progressive demineralization of bones — the jaw and limbs become pliable rather than firm. Early MBD: correct UVB and supplementation immediately. Any pliability of bones that should be firm warrants veterinary evaluation and X-rays.',
  },
]

const STYLES = {
  emergency: { bg: 'rgba(224,90,58,0.07)', border: 'rgba(224,90,58,0.2)', numColor: '#E05A3A', badge: '🚨 Emergency', badgeBg: 'rgba(224,90,58,0.1)' },
  urgent: { bg: 'rgba(200,168,64,0.07)', border: 'rgba(200,168,64,0.2)', numColor: '#C8A840', badge: '⚠️ Urgent', badgeBg: 'rgba(200,168,64,0.1)' },
  monitor: { bg: 'rgba(122,181,42,0.05)', border: 'rgba(122,181,42,0.15)', numColor: '#7AB52A', badge: '👁 Monitor', badgeBg: 'rgba(122,181,42,0.1)' },
}

export default function SickReptileSignsPage() {
  return (
    <ArticleLayout
      siteId="lizard-com"
      contentType="health"
      hero={{
        title: '12 Signs Your Reptile Is Sick',
        subtitle: 'Reptiles are prey animals — they conceal illness as a survival mechanism. By the time obvious symptoms appear, disease is often advanced. These are the signs to watch for, and what to do about them.',
        category: 'Health Guide',
        authorName: 'Lizard.com Editorial',
        authorAvatar: '🦎',
        publishedAt: 'May 2025',
        readTime: '9 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Health' },
        { name: 'Sick Reptile Signs', href: '/health/sick-reptile-signs' },
      ]}
      schema={schema}
      sidebar={<>
        <div className="rounded-lg p-4" style={{ background: 'rgba(224,90,58,0.08)', border: '1px solid rgba(224,90,58,0.2)' }}>
          <div className="text-2xs font-bold tracking-eyebrow uppercase mb-3 text-brand-danger">Find a Reptile Vet</div>
          <p className="text-xs leading-relaxed m-0" style={{ color: 'rgba(238,240,228,0.7)' }}>Not all vets treat reptiles. Find an exotic animal vet before you need one.</p>
          <a href="https://arav.com/find-a-vet" target="_blank" rel="noopener noreferrer" className="block mt-2 text-xs font-bold text-brand-danger no-underline hover:underline">ARAV Vet Finder →</a>
        </div>
        <RelatedLinks title="Related" links={[
          { label: 'Reptile Feeding Guide', href: '/health/reptile-feeding-guide' },
          { label: 'UVB Lighting Guide', href: '/setup/uvb-lighting-guide' },
          { label: 'Bearded Dragon Care', href: '/species/bearded-dragon' },
        ]} />
        <EmailCapture variant="sidebar" siteId="lizard-com"
          title="Free Care Sheets"
          subtitle="20 species care sheets for subscribers."
          source="sick-reptile-signs" ctaText="Download Free" />
      </>}
    >
      <div className="carloOS-article">
        <p>The most important thing to understand about reptile health: by the time a reptile looks obviously sick, it has usually been sick for some time. Prey animals cannot afford to appear vulnerable — their survival instinct suppresses visible illness until the animal can no longer compensate. This means early detection requires active monitoring, not waiting for obvious symptoms.</p>

        <p>Know your individual animal&apos;s baseline: normal activity level, normal color, normal feces, normal feeding response. Deviations from the individual&apos;s baseline matter more than general species averages.</p>

        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', margin: '24px 0' }}>
          {(['emergency', 'urgent', 'monitor'] as const).map(level => {
            const s = STYLES[level]
            return (
              <div key={level} className="flex items-center gap-2">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-pill" style={{ background: s.badgeBg, color: s.numColor }}>{s.badge}</span>
                <span className="text-xs" style={{ color: 'rgba(238,240,228,0.55)' }}>
                  {level === 'emergency' ? 'Vet today, no delay' : level === 'urgent' ? 'Vet this week' : 'Monitor and investigate'}
                </span>
              </div>
            )
          })}
        </div>

        {SIGNS.map((sign) => {
          const style = STYLES[sign.level]
          return (
            <div key={sign.num}
              className="rounded-xl p-5 mb-4 flex gap-4"
              style={{ background: style.bg, border: `1px solid ${style.border}` }}>
              <div className="font-display text-3xl font-black flex-shrink-0 leading-none"
                style={{ color: style.numColor, minWidth: '44px' }}>{sign.num}</div>
              <div>
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h3 className="font-display font-bold text-brand-white text-base m-0">{sign.title}</h3>
                  <span className="text-2xs font-bold px-2.5 py-0.5 rounded-pill flex-shrink-0"
                    style={{ background: style.badgeBg, color: style.numColor }}>{style.badge}</span>
                </div>
                <p className="text-sm leading-relaxed m-0" style={{ color: 'rgba(238,240,228,0.75)' }}
                  dangerouslySetInnerHTML={{ __html: sign.body }} />
              </div>
            </div>
          )
        })}

        <div style={{ background: 'rgba(224,90,58,0.1)', border: '1px solid rgba(224,90,58,0.25)', borderRadius: '16px', padding: '28px', margin: '32px 0', textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 700, color: 'var(--brand-white)', marginBottom: '8px' }}>Find an Exotic Animal Vet Before You Need One</div>
          <p style={{ fontSize: '13px', color: 'rgba(238,240,228,0.6)', marginBottom: '16px' }}>Not all veterinary practices see reptiles. The Association of Reptilian and Amphibian Veterinarians maintains a searchable directory of exotic-experienced vets.</p>
          <a href="https://arav.com/find-a-vet" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', background: 'var(--brand-primary)', color: 'var(--brand-dark)', padding: '10px 20px', borderRadius: '6px', fontWeight: 700, fontSize: '13px', textDecoration: 'none' }}>
            Find a Reptile Vet (ARAV) →
          </a>
        </div>
      </div>
    </ArticleLayout>
  )
}

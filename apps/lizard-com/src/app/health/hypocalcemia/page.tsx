import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Hypocalcemia in Reptiles — Tremors, Tetany | Lizard.com', description: 'Acute hypocalcemia (low blood calcium) causes tremors, tetanic muscle contractions, and seizures. Emergency calcium gluconate injection required.', path: '/health/hypocalcemia', type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: 'Hypocalcemia in Reptiles', description: 'Emergency treatment and prevention of acute hypocalcemia in reptiles.', url: 'https://lizard.com/health/hypocalcemia', imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function HypocalcemiaPage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: 'Hypocalcemia in Reptiles', subtitle: 'Hypocalcemia — abnormally low blood calcium — is an acute emergency distinct from the chronic skeletal changes of MBD. When blood calcium drops below critical thresholds, the neuromuscular system becomes hyperexcitable: muscles contract without voluntary control (tetany), tremors develop, and in severe cases, seizures occur. Emergency veterinary calcium administration is required.', category: 'Reptile Health', authorName: 'Lizard.com Editorial', authorAvatar: '🦎', publishedAt: 'May 2025', readTime: '7 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Reptile Health', href: '/health/sick-reptile-signs' }, { name: 'Hypocalcemia', href: '/health/hypocalcemia' }]}
      schema={schema}
      sidebar={<>
        <div style={{ background: 'rgba(220,38,38,0.08)', border: '1px solid rgba(220,38,38,0.25)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ef4444', marginBottom: '8px' }}>Emergency Signs</div>
          {['Tremors — muscle twitching or shaking', 'Tetany — rigid muscle contractions', 'Inability to walk normally', 'Jerky, uncontrolled movements', 'Seizure-like episodes', 'Collapse and inability to right itself'].map(s => (
            <div key={s} style={{ padding: '4px 0', fontSize: '12px', color: 'rgba(238,240,228,0.7)', borderBottom: '1px solid rgba(220,38,38,0.15)' }}>{s}</div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Metabolic Bone Disease', href: '/health/metabolic-bone-disease' }, { label: 'UVB Lighting Guide', href: '/setup/uvb-lighting-guide' }, { label: 'Egg Binding', href: '/health/egg-binding' }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source="health-hypocalcemia" ctaText="Download Free" />
      </>}
    >
      <div className="carloOS-article">
        <h2>Hypocalcemia vs MBD — The Distinction</h2>
        <p>Metabolic bone disease (MBD) and hypocalcemia are related but distinct — MBD describes the chronic skeletal demineralization that occurs over weeks to months of calcium deficiency, producing the rubbery jaw, pathological fractures, and deformities visible on radiographs. Hypocalcemia is an acute crisis where blood calcium drops to levels that cause immediate neuromuscular dysfunction. A reptile can have MBD without hypocalcemia (the body is mobilizing bone calcium to maintain blood levels while bones demineralize) or can develop hypocalcemia relatively quickly during periods of extreme demand (gravid females producing eggs, rapidly growing juveniles, reptiles with additional stressors).</p>
        <p>The critical difference in management: MBD is addressed with husbandry correction and nutritional support over weeks. Acute hypocalcemia causing tremors or tetany is an emergency requiring immediate veterinary calcium administration — oral calcium alone is not fast enough to reverse the acute neuromuscular crisis.</p>

        <h2>Who Is Most at Risk</h2>
        <p><strong>Gravid females:</strong> The calcium demand of developing eggs is extreme — a female bearded dragon developing a clutch of 20+ eggs is diverting enormous calcium resources to eggshell production. If dietary intake and stores cannot meet this demand, blood calcium crashes. This is especially acute in females that have been chronically calcium-deficient and then face the sudden demand of a large clutch. Signs may appear within hours of reaching a critical calcium depletion.</p>
        <p><strong>Rapidly growing juveniles:</strong> Bone growth demands significant calcium. A fast-growing juvenile bearded dragon with inadequate supplementation may develop hypocalcemia before visible MBD skeletal changes appear. Juveniles should receive calcium supplementation at every feeding — this is not optional.</p>
        <p><strong>Wild-caught reptiles in quarantine:</strong> Recently imported wild-caught reptiles may arrive calcium-depleted from inadequate captive nutrition during collection and transport. They should receive vitamin and calcium supplementation during acclimation.</p>

        <h2>Emergency Treatment</h2>
        <p>A reptile showing tremors, tetany, or seizure-like activity requires emergency veterinary care — this is not a "wait and see" situation. The veterinarian will administer calcium gluconate by injection (subcutaneously, intramuscularly, or in severe cases intravenously — IV calcium requires slow, careful administration to avoid cardiac effects). Response to calcium injection in true hypocalcemia is often rapid — tremors reduce and neuromuscular function begins improving within 15-30 minutes of appropriate calcium administration.</p>
        <p>While waiting for veterinary care: keep the reptile warm (appropriate temperature for the species), handle minimally (handling during tetanic episodes can worsen muscle contractions and cause injury), and keep the environment dark and quiet to minimize stimulation. Some sources suggest oral calcium carbonate liquid as a stopgap — a small amount of liquid calcium carbonate (baby calcium drops, 1-2 drops) can be administered to the mouth. This is a supportive measure while getting to the veterinarian, not a substitute for veterinary calcium injection in serious cases.</p>

        <h2>Prevention</h2>
        <p>Consistent, species-appropriate calcium supplementation throughout the reptile's life is the only prevention. For diurnal lizards: calcium carbonate without D3 at every feeding (UVB provides D3), multivitamin containing D3 twice weekly as insurance. For gravid females: increase calcium supplementation during follicle development and egg production — daily calcium supplementation is appropriate during active egg development. Ensure UVB output is adequate (verify with a <a href="https://solarmeter.com" rel="noopener" target="_blank" className="text-brand-primary hover:underline">Solarmeter</a> UV radiometer — bulbs degrade before they visually appear to fail). Correct substrate to avoid impaction that reduces nutrient absorption. Annual bloodwork including ionized calcium levels identifies subclinical depletion before it becomes an emergency.</p>
      </div>
    </ArticleLayout>
  )
}

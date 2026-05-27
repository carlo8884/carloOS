import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Tick-Borne Diseases in Dogs — Lyme, Anaplasmosis | Vets.co', description: 'Four tick-borne diseases dogs face: Lyme, Anaplasmosis, Ehrlichiosis, and Rocky Mountain Spotted Fever. Signs, geographic distribution.', path: '/health/tick-borne-diseases', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Tick-Borne Diseases in Dogs', description: 'Lyme disease, Anaplasmosis, Ehrlichiosis, and RMSF in dogs — signs and treatment.', url: 'https://vets.co/health/tick-borne-diseases', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Tick-Borne Diseases in Dogs', description: 'Lyme, Anaplasmosis, Ehrlichiosis, and RMSF — signs, testing, and treatment.', url: 'https://vets.co/health/tick-borne-diseases', authorName: 'Vets.co Editorial', lastReviewed: '2025-05-01' })
const combined = combineSchemas(schema, med)
export default function TickBornePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Tick-Borne Diseases in Dogs', subtitle: 'Four major tick-borne diseases affect dogs in the US: Lyme disease, Anaplasmosis, Ehrlichiosis, and Rocky Mountain Spotted Fever (RMSF). All are transmitted by ticks, all respond to doxycycline, and all are prevented by consistent tick prevention. The variation between them is geographic distribution, severity, and the speed of required treatment.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Tick-Borne Diseases', href: '/health/tick-borne-diseases' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">4Dx Test Detects</div>
            {[['Heartworm antigen', 'Dirofilaria immitis'], ['Lyme antibodies', 'Borrelia burgdorferi'], ['Anaplasmosis', 'Anaplasma phagocytophilum + platys'], ['Ehrlichiosis', 'Ehrlichia canis + ewingii']].map(([test, org]) => (
              <div key={test} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{test}</div>
                <div className="text-2xs text-brand-text-light">{org}</div>
              </div>
            ))}
            <div className="text-2xs text-brand-text-light mt-2">Note: RMSF not detected by 4Dx — requires separate testing</div>
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Preventive Care Schedule', href: '/health/preventive-care-schedule' }, { label: 'Heartworm in Dogs', href: '/health/heartworm-in-dogs' }, { label: 'Find a Vet', href: '/find-a-vet' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-tick-borne" />
        </>}
      >
        <div className="carloOS-article">
          <h2>Lyme Disease (Borrelia burgdorferi)</h2>
          <p><strong>Tick vector:</strong> Ixodes scapularis (black-legged tick / deer tick) primarily; Ixodes pacificus on the West Coast. Requires 24–48 hours of tick attachment for transmission — emphasizing prompt tick removal. <strong>Geographic distribution:</strong> Northeast, Upper Midwest, and Pacific Northwest — highest prevalence in these regions, but expanding range. <strong>Signs in dogs:</strong> Fever, lethargy, shifting-leg lameness (the joint pain can move from leg to leg), reduced appetite. Lyme nephritis — a serious kidney complication — occurs in a subset of affected dogs, particularly Labrador Retrievers and Golden Retrievers, causing protein-losing nephropathy that can lead to kidney failure. <strong>Testing:</strong> The 4Dx SNAP test detects Lyme antibodies as part of the annual heartworm test. A positive Lyme antibody test means the dog has been exposed — many seropositive dogs never develop clinical disease. <strong>Treatment:</strong> Doxycycline 10mg/kg once daily or 5mg/kg twice daily for 30 days. <strong>Prevention:</strong> Tick prevention (isoxazoline class products most effective) + Lyme vaccination in tick-endemic regions.</p>

          <h2>Anaplasmosis (Anaplasma phagocytophilum)</h2>
          <p><strong>Tick vector:</strong> Same Ixodes ticks as Lyme — co-infections with Lyme are common in endemic areas. <strong>Geographic distribution:</strong> Similar distribution to Lyme — Northeast, Upper Midwest, Pacific Northwest, but more widespread. <strong>Signs in dogs:</strong> Fever, lethargy, reluctance to move (polyarthritis), and characteristically, thrombocytopenia (low platelet count causing bruising or bleeding tendency — petechiae on the gums or inner ears). CBC showing low platelets in a febrile dog in a tick-endemic area strongly suggests Anaplasmosis. <strong>Treatment:</strong> Doxycycline — same protocol as Lyme. Response is typically rapid — most dogs improve within 24–48 hours of starting treatment. <strong>Anaplasma platys</strong> (platelet Anaplasma) affects platelets directly — less commonly diagnosed but causes cyclic thrombocytopenia.</p>

          <h2>Ehrlichiosis (Ehrlichia canis, E. ewingii)</h2>
          <p><strong>Tick vector:</strong> Rhipicephalus sanguineus (brown dog tick) for E. canis — this tick species can survive indoors, making Ehrlichiosis a risk even in urban environments. Amblyomma americanum (lone star tick) for E. ewingii. <strong>Geographic distribution:</strong> E. canis most common in the South-Central US; E. ewingii in the Southeast and South-Central. E. canis is the more severe form. <strong>Signs:</strong> Acute phase (weeks 1–4): fever, lethargy, reduced appetite, lymph node enlargement, thrombocytopenia. Chronic phase: if untreated, progresses to bone marrow suppression, severe anemia, pancytopenia (all blood cell lines depressed). German Shepherds are disproportionately affected by severe chronic Ehrlichiosis. <strong>Treatment:</strong> Doxycycline — chronic cases require longer treatment (6–8 weeks) and monitoring. Acute phase has excellent prognosis; chronic bone marrow disease has more guarded prognosis.</p>

          <h2>Rocky Mountain Spotted Fever (Rickettsia rickettsii)</h2>
          <p><strong>Tick vector:</strong> Dermacentor variabilis (American dog tick), Dermacentor andersoni (Rocky Mountain wood tick). Transmission occurs faster than Lyme — 2–6 hours in some cases. <strong>Geographic distribution:</strong> Despite the name, most common in the South Atlantic and South-Central states (North Carolina, Tennessee, Oklahoma, Arkansas, Missouri). <strong>Signs — and why it's urgent:</strong> RMSF is the most severe tick-borne disease in the US — it can be fatal in dogs within days of symptom onset if untreated. Signs: high fever (104–106°F), severe lethargy, hemorrhagic rash (petechiae — pinpoint bleeding into skin), neurological signs (ataxia, seizures in severe cases), vasculitis damaging multiple organ systems simultaneously. <strong>Treatment:</strong> Doxycycline — start empirically when RMSF is suspected, before diagnostic confirmation. Every hour of delay worsens prognosis. Do not wait for test results if clinical presentation is consistent with RMSF.</p>

          <h2>Annual 4Dx Testing — Why It Matters</h2>
          <p>The annual heartworm test (4Dx SNAP) also detects antibodies for Lyme, Anaplasma, and Ehrlichia — three tick-borne diseases in a single test with the heartworm antigen test. This is one of the primary reasons the 4Dx is standard of care rather than a simple heartworm test — it provides meaningful surveillance for tick-borne disease simultaneously. A positive result on the 4Dx does not automatically mean treatment is needed — many seropositive dogs have been exposed but not clinically affected. A positive 4Dx in a dog with clinical signs is a significant finding warranting treatment. A positive 4Dx in a completely healthy dog warrants a urine protein:creatinine ratio (to screen for Lyme nephritis) and a full workup conversation with your veterinarian about whether treatment is indicated.</p>
        </div>
      </ArticleLayout>
    </>
  )
}

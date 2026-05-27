import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Leptospirosis in Dogs — Zoonotic, Vaccine Recommended & Wildlife Exposure | Vets.co', description: 'Leptospirosis is a zoonotic bacterial disease from wildlife urine in water. Causes acute kidney and liver failure. Vaccine recommended for dogs with outdoor/wildlife exposure.', path: '/health/leptospirosis', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Leptospirosis in Dogs', description: 'Signs, treatment, zoonotic risk, and vaccination for canine leptospirosis.', url: 'https://vets.co/health/leptospirosis', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Leptospirosis in Dogs', description: 'Leptospira bacterial infection — signs, treatment, and vaccination.', url: 'https://vets.co/health/leptospirosis', authorName: 'Vets.co Editorial', lastReviewed: '2025-05-01' })
const combined = combineSchemas(schema, med)
export default function LeptospirosisPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Leptospirosis in Dogs', subtitle: 'Leptospirosis is a bacterial disease caused by Leptospira spirochetes — transmitted through urine of infected wildlife (raccoons, deer, opossums, rodents) contaminating standing water, soil, and puddles. It can cause acute kidney and liver failure in dogs and is zoonotic — transmissible to humans from infected dog urine.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '8 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Leptospirosis', href: '/health/leptospirosis' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">High-Risk Exposures</div>
            {['Standing water — puddles, ponds, lakes', 'Streams and rivers with wildlife activity', 'Areas frequented by raccoons, deer, rodents', 'Suburban/urban wildlife corridors', 'Flooding events — Lepto disperses widely', 'Swimming in natural bodies of water'].map(s => (
              <div key={s} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid">{s}</div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Preventive Care Schedule', href: '/health/preventive-care-schedule' }, { label: 'Dog Vaccinations', href: '/health/dog-vaccinations-guide' }, { label: 'Tick-Borne Diseases', href: '/health/tick-borne-diseases' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-lepto" />
        </>}
      >
        <div className="carloOS-article">
          <h2>Transmission and Geographic Risk</h2>
          <p>Leptospira bacteria survive in warm, moist environments — standing water, muddy soil, and waterways contaminated with infected wildlife urine. Dogs are exposed through: contact with contaminated water (drinking from puddles, swimming in ponds or streams), contact with infected urine directly, or contact with contaminated soil. The bacteria enter through mucous membranes, skin abrasions, or the GI tract. Lepto is not only a rural problem — urban and suburban dogs encounter raccoons, opossums, and rodents that shed Leptospira in their urine in parks, yards, and storm drainage systems.</p>
          <p>Geographic risk is highest in warm, humid climates (Southeast US, Pacific Northwest) and following flooding events that disperse contaminated water widely. Risk is not zero anywhere in the continental US — it is variable. Dogs with outdoor exposure, dogs that frequent natural water sources, hunting dogs, and dogs in areas with high wildlife activity have the highest exposure risk.</p>

          <h2>Clinical Signs — Two Main Presentations</h2>
          <p><strong>Acute kidney injury presentation (most common):</strong> Sudden onset of vomiting, lethargy, anorexia, increased thirst and urination (or reduced urination in acute kidney failure), and muscle pain (reluctance to move, stiff gait). Bloodwork shows elevated BUN, creatinine, and phosphorus from acute kidney failure. Some cases progress to anuric (no urine production) renal failure requiring dialysis.</p>
          <p><strong>Hepatic presentation:</strong> Jaundice (yellow tinge to gums and eyes), elevated liver enzymes, vomiting, anorexia. Some cases have both kidney and liver involvement simultaneously. The hepatic form tends to be associated with specific Leptospira serovars.</p>
          <p>Subclinical infection — dog is infected but shows no signs, clears the infection and develops antibody titers — is more common than is often appreciated. These dogs may shed Leptospira in their urine during the infection period, posing zoonotic risk to household members.</p>

          <h2>Zoonotic Risk — Protect Your Family</h2>
          <p>Leptospirosis is one of the most widespread zoonotic diseases in the world. A dog diagnosed with leptospirosis is shedding Leptospira in its urine for weeks during and after illness — human household members can be infected through contact with contaminated urine. This is why veterinary teams handling lepto cases use significant personal protective equipment and why dog owners of infected animals should: wear gloves when handling the dog or cleaning up urine, avoid contact with the dog's urine, wash hands thoroughly, and inform healthcare providers if they develop flu-like symptoms after exposure.</p>

          <h2>Treatment</h2>
          <p>Leptospirosis is bacterial and responds to antibiotics — specifically doxycycline (first-line; clears the renal carrier state) or ampicillin/amoxicillin in severely ill animals where GI absorption may be compromised. Hospitalization for IV fluid support of kidney and liver function is critical for moderate-to-severe cases — the bacterial septicemia is manageable but the organ damage requires supportive care. Prognosis: good for mild cases caught early; guarded for cases presenting in renal failure with anuric kidney injury.</p>

          <h2>Vaccination</h2>
          <p>The leptospirosis vaccine is a non-core vaccine — recommended based on lifestyle risk rather than universally. Dogs with outdoor access, dogs in endemic areas, dogs that swim in natural water, hunting dogs, and dogs in suburban areas with wildlife exposure should receive the vaccine. The current 4-serovar vaccine (L4) covers the four most clinically prevalent serovars (Canicola, Icterohaemorrhagiae, Grippotyphosa, Pomona). Boosted annually as immunity wanes faster than core vaccines. A booster 2-4 weeks after initial vaccination is required for puppies and dogs receiving the vaccine for the first time.</p>
        </div>
      </ArticleLayout>
    </>
  )
}

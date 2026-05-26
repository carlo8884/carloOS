import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Intestinal Parasites in Dogs — Roundworms, Hookworms, Giardia & Testing | Vets.co', description: 'Annual fecal testing detects roundworms, hookworms, whipworms, coccidia, and Giardia before they cause clinical disease. Zoonotic risk, treatment, and prevention protocol.', path: '/health/intestinal-parasites', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Intestinal Parasites in Dogs', description: 'Roundworms, hookworms, whipworms, Giardia — testing, treatment, and zoonotic risk.', url: 'https://vets.co/health/intestinal-parasites', imageUrl: '', authorName: 'Dr. Sarah Webb, DVM', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Intestinal Parasites in Dogs', description: 'Diagnosis and treatment of common intestinal parasites in dogs.', url: 'https://vets.co/health/intestinal-parasites', authorName: 'Dr. Sarah Webb, DVM', lastReviewed: '2025-05-01' })
const combined = combineSchemas(schema, med)
export default function IntestinalParasitesPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Intestinal Parasites in Dogs', subtitle: 'Intestinal parasites are among the most common findings in routine fecal testing — and most infected dogs show no clinical signs until the burden becomes significant. Annual fecal testing catches parasites before disease develops, and several common canine parasites are zoonotic — transmissible to humans — making routine testing a family health issue, not just a pet health issue.', category: 'Veterinary Guide', authorName: 'Dr. Sarah Webb, DVM', authorCredentials: 'General Practice · 14 years', authorAvatar: '👩‍⚕️', publishedAt: 'May 2025', readTime: '9 min', dvmReviewed: true }}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Intestinal Parasites', href: '/health/intestinal-parasites' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Common Parasites</div>
            {[['Roundworms (Toxocara)', 'Most common · Zoonotic · Fenbendazole'], ['Hookworms (Ancylostoma)', 'Blood-sucking · Zoonotic · Pyrantel/fenbendazole'], ['Whipworms (Trichuris)', 'Large intestine · Fenbendazole (longer course)'], ['Tapeworms (Dipylidium)', 'Flea-transmitted · Praziquantel'], ['Giardia', 'Protozoan · Metronidazole + fenbendazole'], ['Coccidia', 'Protozoan · Ponazuril/sulfadimethoxine']].map(([p, d]) => (
              <div key={p} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{p}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Preventive Care Schedule', href: '/health/preventive-care-schedule' }, { label: 'Heartworm Prevention', href: '/health/heartworm-in-dogs' }, { label: 'Dog Diarrhea', href: '/health/dog-diarrhea' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="DVM-written guidance weekly." source="health-parasites" />
        </>}
      >
        <div className="carloOS-article">
          <h2>Roundworms — The Most Common and Zoonotic</h2>
          <p>Toxocara canis (roundworm) is the most commonly found intestinal parasite in dogs and one of the most important zoonotic parasites worldwide. Adult roundworms live in the small intestine. Puppies are often infected in utero or through nursing — almost all puppies are born with roundworm larvae transmitted transplacentally. Clinical signs in heavily infected puppies: pot-bellied appearance, dull coat, diarrhea, and in severe cases, intestinal obstruction. Adult dogs with small burdens often show no signs.</p>
          <p><strong>Zoonotic risk:</strong> Toxocara eggs are shed in dog feces and become infective in the environment after 2–4 weeks. Children playing in contaminated soil can accidentally ingest eggs — larvae migrate through human tissues (visceral larva migrans) and in rare cases reach the eyes (ocular larva migrans), causing vision damage. This is why children's sandboxes near dog areas and handwashing after dog contact are genuine public health recommendations. Annual fecal testing and regular deworming are a household health measure, not just veterinary maintenance.</p>
          <p>Treatment: fenbendazole (Panacur) 5 days, repeated at 2-3 weeks. Pyrantel pamoate (in most monthly heartworm preventives) prevents reinfestation with monthly dosing. All puppies should be dewormed starting at 2 weeks of age, repeated every 2 weeks until 8 weeks, then monthly until 6 months.</p>

          <h2>Hookworms — Blood Loss and Skin Penetration</h2>
          <p>Ancylostoma caninum (hookworm) attaches to the intestinal wall and feeds on blood. Heavy hookworm infections cause iron-deficiency anemia — pale gums, weakness, and in severe cases, life-threatening blood loss. Puppies and immunocompromised dogs are most severely affected. Transmission: larvae penetrate skin (humans walking barefoot in contaminated soil can develop cutaneous larva migrans — a visible, itchy, migrating rash from hookworm larvae under the skin), or are ingested from contaminated environment.</p>
          <p>Treatment: pyrantel pamoate or fenbendazole. Severely anemic puppies may require blood transfusion before deworming treatment.</p>

          <h2>Giardia — The Persistent Protist</h2>
          <p>Giardia duodenalis is a protozoan parasite (not a worm) that causes intermittent soft or liquid diarrhea that may be mucoid, fatty-appearing, and foul-smelling. Many infected dogs are asymptomatic. Diagnosis requires specific Giardia antigen testing or PCR — standard fecal flotation misses Giardia cysts in most cases. Treatment: metronidazole (5-7 days) combined with fenbendazole (5 days) has better clearance rates than either alone. Environmental decontamination is important — Giardia cysts survive in the environment and resist standard disinfectants (dilute bleach 1:32 or quaternary ammonium compounds are effective).</p>
          <p>Giardia is considered potentially zoonotic to humans — the strain (assemblage) in dogs most commonly is assemblage C or D, which has low transmissibility to humans, but immunocompromised people should exercise standard hygiene precautions around infected dogs.</p>

          <h2>Annual Fecal Testing — The Standard of Care</h2>
          <p>The Companion Animal Parasite Council (CAPC) recommends fecal testing at least annually for all dogs, and 2-4 times per year for puppies and dogs in high-exposure environments (doggy daycare, boarding facilities, dog parks, multiple-dog households, hunting dogs). The fecal flotation detects roundworm, hookworm, whipworm, coccidia, and tapeworm eggs. A separate Giardia antigen ELISA or PCR is required to detect Giardia — it is not part of standard fecal flotation. Most annual wellness fecal tests include both.</p>
        </div>
      </ArticleLayout>
    </>
  )
}

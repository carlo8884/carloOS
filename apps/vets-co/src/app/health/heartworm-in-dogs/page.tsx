import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Heartworm in Dogs — Prevention, Testing & Treatment Stages | Vets.co', description: 'Heartworm disease is a life-threatening but preventable condition. Monthly prevention costs $5-10. Treatment costs $1,000-3,000. Annual testing, prevention options, and treatment stages explained.', path: '/health/heartworm-in-dogs', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Heartworm in Dogs', description: 'Prevention, annual testing, and melarsomine treatment for canine heartworm disease.', url: 'https://vets.co/health/heartworm-in-dogs', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Heartworm Disease in Dogs', description: 'Prevention, testing, and treatment of Dirofilaria immitis heartworm in dogs.', url: 'https://vets.co/health/heartworm-in-dogs', authorName: 'Vets.co Editorial', lastReviewed: '2025-05-01' })
const combined = combineSchemas(schema, med)
const FAQS = [
  { question: 'Can I skip prevention in winter?', answer: 'Year-round prevention is recommended in most of the US. Mosquitoes can be active on warm winter days — temperatures above 57°F allow heartworm larvae to develop in mosquitoes. In warm climates (Southeast US, Florida, Gulf Coast, Hawaii), mosquitoes are active year-round. The American Heartworm Society recommends year-round prevention for all dogs regardless of climate, both because exposure risk is difficult to predict and because monthly heartworm preventives also control intestinal parasites (roundworms, hookworms) that are present year-round.' },
  { question: 'What happens if I miss a dose?', answer: 'Give the missed dose as soon as you remember and continue on the regular schedule. If more than 2 months have passed since the last dose, the dog should be tested for heartworm in 6 months (heartworm antigen tests do not detect very recent infection — testing too soon after a missed dose may give a false negative). Resume prevention immediately. Do not double-dose.' },
  { question: 'Can my dog exercise during heartworm treatment?', answer: 'No. Strict rest is essential during heartworm treatment — this is one of the most important and most difficult aspects of the treatment protocol. Exercise increases blood flow and oxygen demand, which increases the risk of dead worms causing pulmonary thromboembolism. The dog must be leash-restricted (no running, no playing) for 8 weeks during the full treatment course. Crates may be needed for high-energy dogs. This restriction is medically necessary — owners who do not comply risk the dog\'s life during treatment.' },
]
export default function HeartwormPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Heartworm Disease in Dogs', subtitle: 'Heartworm disease — caused by the parasitic worm Dirofilaria immitis transmitted through mosquito bites — is one of the most important preventable conditions in veterinary medicine. Prevention costs approximately $5–15/month. Treatment costs $1,000–3,000 and is difficult and risky. The math is straightforward.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Heartworm', href: '/health/heartworm-in-dogs' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Prevention Options</div>
            {[['Heartgard Plus', 'Monthly chew · Ivermectin + pyrantel'], ['Interceptor Plus', 'Monthly chew · Milbemycin + praziquantel'], ['Sentinel Spectrum', 'Monthly · Adds flea birth control'], ['Revolution Plus', 'Monthly topical · Selamectin'], ['ProHeart 12', 'Annual injection · Moxidectin']].map(([p, d]) => (
              <div key={p} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{p}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Preventive Care Schedule', href: '/health/preventive-care-schedule' }, { label: 'Dog Vaccinations', href: '/health/dog-vaccinations-guide' }, { label: 'Find a Vet', href: '/find-a-vet' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-heartworm" />
        </>}
      >
        <div className="carloOS-article">
          <h2>How Heartworm Transmission Works</h2>
          <p>Dirofilaria immitis requires the mosquito as an intermediate host. An infected dog has microfilariae (larval heartworms) circulating in the blood — a mosquito biting this dog ingests microfilariae that develop through larval stages inside the mosquito over 10–14 days at temperatures above 57°F. When this mosquito bites another dog, it deposits infective larvae (L3) into the skin. These larvae migrate through tissue over 6 months, molt through additional larval stages, and eventually reach the heart and pulmonary arteries as adult worms. Adult worms cause disease; the antigen test detects proteins from adult female worms.</p>

          <h2>Annual Testing — Required Even on Prevention</h2>
          <p>Annual heartworm antigen testing is required for all dogs, even those on year-round prevention. The reasons: no preventive is 100% effective — a dog that vomited a dose, was undertreated due to weight change, or encountered a preventive-resistant strain may have been infected despite preventive use. Starting a new dog on prevention without testing first risks treating an already-infected dog with macrocyclic lactone preventives, which can cause a severe microfilarial reaction. Federal regulations require annual testing for heartworm antigen as a condition of prescribing preventives in most states.</p>

          <h2>Clinical Signs by Stage</h2>
          <p><strong>Class 1 (mild):</strong> No clinical signs or mild occasional cough. Adult worms present in pulmonary arteries. Often detected on annual testing before the owner notices any signs.</p>
          <p><strong>Class 2 (moderate):</strong> Mild to moderate cough, exercise intolerance. Radiographic changes in the lungs and pulmonary arteries visible on chest X-ray. Heartworm caval syndrome risk increases.</p>
          <p><strong>Class 3 (severe):</strong> Severe disease — significant cough, exercise intolerance, right-sided heart failure, hemoptysis (coughing blood). Radiographic changes severe. Pre-treatment stabilization required before melarsomine can be administered.</p>
          <p><strong>Class 4 — Caval syndrome:</strong> Massive worm burden physically obstructing the right heart and vena cava. Surgical extraction of worms is required before medical treatment — these dogs are in cardiovascular collapse.</p>

          <h2>Treatment Protocol</h2>
          <p>The American Heartworm Society (AHS) "slow kill" protocol — macrocyclic lactone prevention alone to kill microfilariae while adult worms slowly die — is no longer recommended as primary treatment. It takes years, adult worms continue to cause cardiac and pulmonary damage throughout, and macrocyclic lactone resistance is increasing in heartworms.</p>
          <p>The current AHS-recommended protocol: doxycycline (30 days — kills Wolbachia bacteria that heartworms depend on), followed by 2 doses of melarsomine (Immiticide) given 30 days apart (with a 30-day interval between doses), with strict exercise restriction throughout. Macrocyclic lactone prevention is given throughout to kill microfilariae and prevent new infection. Pre-treatment stabilization with prednisone reduces pulmonary inflammation from dying worms.</p>
          <p>The most serious treatment complication: pulmonary thromboembolism from dead worms obstructing pulmonary blood flow — exercise increases this risk dramatically, which is why strict rest is medically mandatory, not a preference.</p>

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />
        </div>
      </ArticleLayout>
    </>
  )
}

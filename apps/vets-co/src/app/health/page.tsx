import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Pet Health Library — Sourced Guides | Vets.co', description: 'Complete pet health guides drawing on AVMA, ACVIM, and AAHA guidance. Emergency signs, breed health, preventive care, and specialist guidance.', path: '/health' })

const GUIDES = [
  { category: 'Emergency', items: [{ title: '15 Signs Your Pet Needs Emergency Care', href: '/health/emergency-signs', badge: '🚨 Must Read' }, { title: 'ASPCA Poison Control: 888-426-4435', href: 'tel:8884264435', badge: '☎️ Save This' }] },
  { category: 'Breed Health', items: [{ title: 'Golden Retriever Health Guide', href: '/breeds/golden-retriever-health' }, { title: 'Labrador Retriever Health', href: '/breeds/labrador-health' }, { title: 'French Bulldog Health', href: '/breeds/french-bulldog-health' }, { title: 'German Shepherd Health', href: '/breeds/german-shepherd-health' }] },
  { category: 'Finding Care', items: [{ title: 'Find a Veterinary Specialist', href: '/find-a-vet', badge: '🔍 Directory' }, { title: 'Best Pet Telehealth 2025', href: '/telehealth' }, { title: 'Best Pet Insurance 2025', href: '/reviews/best-pet-insurance' }] },
]

export default function VetsHealthHubPage() {
  return (
    <>
      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <div className="flex items-center gap-2.5 mb-4"><span className="w-6 h-0.5 bg-brand-primary" /><span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Pet Health Library</span></div>
        <h1 className="font-display font-bold text-white tracking-tight leading-tight mb-4" style={{ fontSize: 'clamp(28px, 5vw, 50px)' }}>Pet Health Library</h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">Emergency guides, breed health, specialist directories, and insurance comparisons — all drawing on current <a href="https://avma.org" rel="noopener" target="_blank" className="text-brand-primary hover:underline">AVMA</a>, <a href="https://aaha.org" rel="noopener" target="_blank" className="text-brand-primary hover:underline">AAHA</a>, and <a href="https://acvim.org" rel="noopener" target="_blank" className="text-brand-primary hover:underline">ACVIM</a> guidance.</p>
      </div>
      <div className="px-container-sm sm:px-container py-14">
        {GUIDES.map(section => (
          <div key={section.category} className="mb-10">
            <h2 className="font-display text-xl font-bold text-brand-dark mb-4 pb-3 border-b border-brand-border">{section.category}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {section.items.map(item => (
                <Link key={item.href} href={item.href} className="block bg-brand-white border border-brand-border rounded-lg p-5 no-underline hover:border-brand-primary transition-colors">
                  {(item as any).badge && <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">{(item as any).badge}</div>}
                  <div className="font-display font-bold text-brand-dark text-sm">{item.title}</div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="bg-brand-primary-pale border-t border-brand-border px-container-sm sm:px-container py-10">
        <EmailCapture variant="section" siteId="vets-co" title="Free Pet Health Newsletter" subtitle="research-based health alerts every Tuesday." source="health-hub" ctaText="Subscribe Free" perks={['✓ Research-based', '📬 Weekly', '🐾 All species']} />
      </div>
      {/* agent1-browse-all-start */}
      <section className="border-t border-brand-border bg-brand-surface px-container-sm sm:px-container py-10">
        <h2 className="font-display font-bold text-brand-dark text-lg mb-4">All Health Topics</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2">
        <Link key="allergic-reactions-dogs" href="/health/allergic-reactions-dogs" className="text-sm text-brand-primary no-underline hover:underline">Allergic Reactions Dogs</Link>
        <Link key="anxiety-in-dogs" href="/health/anxiety-in-dogs" className="text-sm text-brand-primary no-underline hover:underline">Anxiety In Dogs</Link>
        <Link key="arthritis-in-dogs" href="/health/arthritis-in-dogs" className="text-sm text-brand-primary no-underline hover:underline">Arthritis In Dogs</Link>
        <Link key="canine-influenza" href="/health/canine-influenza" className="text-sm text-brand-primary no-underline hover:underline">Canine Influenza</Link>
        <Link key="cognitive-dysfunction" href="/health/cognitive-dysfunction" className="text-sm text-brand-primary no-underline hover:underline">Cognitive Dysfunction</Link>
        <Link key="cushing-disease-dogs" href="/health/cushing-disease-dogs" className="text-sm text-brand-primary no-underline hover:underline">Cushing Disease Dogs</Link>
        <Link key="dehydration-in-dogs" href="/health/dehydration-in-dogs" className="text-sm text-brand-primary no-underline hover:underline">Dehydration In Dogs</Link>
        <Link key="dental-cleaning-guide" href="/health/dental-cleaning-guide" className="text-sm text-brand-primary no-underline hover:underline">Dental Cleaning Guide</Link>
        <Link key="diabetes-in-dogs-cats" href="/health/diabetes-in-dogs-cats" className="text-sm text-brand-primary no-underline hover:underline">Diabetes In Dogs Cats</Link>
        <Link key="dog-eye-conditions" href="/health/dog-eye-conditions" className="text-sm text-brand-primary no-underline hover:underline">Dog Eye Conditions</Link>
        <Link key="dog-vaccinations-guide" href="/health/dog-vaccinations-guide" className="text-sm text-brand-primary no-underline hover:underline">Dog Vaccinations Guide</Link>
        <Link key="ear-infections-dogs" href="/health/ear-infections-dogs" className="text-sm text-brand-primary no-underline hover:underline">Ear Infections Dogs</Link>
        <Link key="flea-tick-prevention" href="/health/flea-tick-prevention" className="text-sm text-brand-primary no-underline hover:underline">Flea Tick Prevention</Link>
        <Link key="kennel-cough" href="/health/kennel-cough" className="text-sm text-brand-primary no-underline hover:underline">Kennel Cough</Link>
        <Link key="parvovirus-in-puppies" href="/health/parvovirus-in-puppies" className="text-sm text-brand-primary no-underline hover:underline">Parvovirus In Puppies</Link>
        <Link key="seizures-in-dogs" href="/health/seizures-in-dogs" className="text-sm text-brand-primary no-underline hover:underline">Seizures In Dogs</Link>
        <Link key="vomiting-diarrhea-pets" href="/health/vomiting-diarrhea-pets" className="text-sm text-brand-primary no-underline hover:underline">Vomiting Diarrhea Pets</Link>
        <Link key="emergency-signs" href="/health/emergency-signs" className="text-sm text-brand-primary no-underline hover:underline">Emergency Signs</Link>
        <Link key="bloat-gdv-dogs" href="/health/bloat-gdv-dogs" className="text-sm text-brand-primary no-underline hover:underline">Bloat GDV Dogs</Link>
        <Link key="feline-lower-urinary-tract-disease" href="/health/feline-lower-urinary-tract-disease" className="text-sm text-brand-primary no-underline hover:underline">Feline Lower Urinary Tract Disease</Link>
        <Link key="heartworm-in-dogs" href="/health/heartworm-in-dogs" className="text-sm text-brand-primary no-underline hover:underline">Heartworm In Dogs</Link>
        <Link key="heat-stroke-dogs" href="/health/heat-stroke-dogs" className="text-sm text-brand-primary no-underline hover:underline">Heat Stroke Dogs</Link>
        <Link key="hyperthyroidism-cats" href="/health/hyperthyroidism-cats" className="text-sm text-brand-primary no-underline hover:underline">Hyperthyroidism Cats</Link>
        <Link key="hypothyroidism-dogs" href="/health/hypothyroidism-dogs" className="text-sm text-brand-primary no-underline hover:underline">Hypothyroidism Dogs</Link>
        <Link key="intestinal-parasites" href="/health/intestinal-parasites" className="text-sm text-brand-primary no-underline hover:underline">Intestinal Parasites</Link>
        <Link key="kidney-disease-cats" href="/health/kidney-disease-cats" className="text-sm text-brand-primary no-underline hover:underline">Kidney Disease Cats</Link>
        <Link key="leptospirosis" href="/health/leptospirosis" className="text-sm text-brand-primary no-underline hover:underline">Leptospirosis</Link>
        <Link key="pain-management-dogs" href="/health/pain-management-dogs" className="text-sm text-brand-primary no-underline hover:underline">Pain Management Dogs</Link>
        <Link key="pancreatitis-in-dogs" href="/health/pancreatitis-in-dogs" className="text-sm text-brand-primary no-underline hover:underline">Pancreatitis In Dogs</Link>
        <Link key="periodontal-disease-pets" href="/health/periodontal-disease-pets" className="text-sm text-brand-primary no-underline hover:underline">Periodontal Disease Pets</Link>
        <Link key="pain-signs-dogs" href="/health/pain-signs-dogs" className="text-sm text-brand-primary no-underline hover:underline">Pain Signs Dogs</Link>
        <Link key="preventive-care-schedule" href="/health/preventive-care-schedule" className="text-sm text-brand-primary no-underline hover:underline">Preventive Care Schedule</Link>
        <Link key="senior-bloodwork-guide" href="/health/senior-bloodwork-guide" className="text-sm text-brand-primary no-underline hover:underline">Senior Bloodwork Guide</Link>
        <Link key="senior-pet-care" href="/health/senior-pet-care" className="text-sm text-brand-primary no-underline hover:underline">Senior Pet Care</Link>
        <Link key="spay-neuter-benefits" href="/health/spay-neuter-benefits" className="text-sm text-brand-primary no-underline hover:underline">Spay Neuter Benefits</Link>
        <Link key="tick-borne-diseases" href="/health/tick-borne-diseases" className="text-sm text-brand-primary no-underline hover:underline">Tick Borne Diseases</Link>
        <Link key="urinary-tract-infection" href="/health/urinary-tract-infection" className="text-sm text-brand-primary no-underline hover:underline">Urinary Tract Infection</Link>
        <Link key="weight-management" href="/health/weight-management" className="text-sm text-brand-primary no-underline hover:underline">Weight Management</Link>
        </div>
      </section>
      {/* agent1-browse-all-end */}
</>
  )
}

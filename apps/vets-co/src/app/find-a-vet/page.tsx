import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Find a Vet — General Practice, Emergency & Specialists | Vets.co', description: 'Find the right veterinarian for your dog. General practice, emergency, and board-certified specialists — dermatology, cardiology, neurology, oncology, and ophthalmology.', path: '/find-a-vet', type: 'website' })
const SPECIALISTS = [
  { specialty: 'Emergency & Critical Care', credential: 'DACVECC', when: 'Acute illness or injury outside regular hours, post-surgical monitoring, toxin exposure, trauma', icon: '🚨', color: '#C84A2A' },
  { specialty: 'Internal Medicine', credential: 'DACVIM', when: 'Complex diagnostics, hormonal disease, immune-mediated disease, chronic conditions requiring specialist oversight', icon: '🔬', color: '#2563EB' },
  { specialty: 'Cardiology', credential: 'DACVIM (Cardiology)', when: 'Heart murmur detected, arrhythmia, suspected cardiac disease, pre-breeding cardiac clearance (Cavaliers)', icon: '❤️', color: '#DC2626' },
  { specialty: 'Neurology', credential: 'DACVIM (Neurology)', when: 'Seizures, spinal disease (IVDD), wobbler syndrome, brain tumors, paralysis, vestibular disease', icon: '🧠', color: '#7C3AED' },
  { specialty: 'Oncology', credential: 'DACVIM (Oncology)', when: 'Cancer diagnosis, chemotherapy protocols, radiation referrals, prognosis discussion', icon: '🎗️', color: '#059669' },
  { specialty: 'Dermatology', credential: 'DACVD', when: 'Chronic skin disease, environmental or food allergies, autoimmune skin conditions, recurrent ear infections', icon: '🩺', color: '#D97706' },
  { specialty: 'Ophthalmology', credential: 'DACVO', when: 'Eye injuries, cataracts, glaucoma, progressive retinal atrophy, corneal ulcers not responding to treatment', icon: '👁️', color: '#0891B2' },
  { specialty: 'Surgery', credential: 'DACVS', when: 'Orthopedic surgery (TPLO, FHO, THR), soft tissue surgery, oncologic surgery, complex fracture repair', icon: '⚕️', color: '#475569' },
  { specialty: 'Dentistry', credential: 'DAVDC', when: 'Complex dental extractions, oral tumors, jaw fractures, advanced periodontal disease, dental radiograph interpretation', icon: '🦷', color: '#64748B' },
  { specialty: 'Behavioral Medicine', credential: 'DACVB', when: 'Aggression, severe anxiety, separation anxiety, compulsive disorders, medication management for behavioral conditions', icon: '🧡', color: '#92400E' },
]
export default function FindAVetPage() {
  return (
    <div>
      <div className="bg-brand-dark px-container sm:px-container-sm py-16">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-4">Veterinary Directory</span>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl" style={{ fontSize: 'clamp(24px, 4vw, 52px)' }}>Find the Right Vet</h1>
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed mb-8">General practice vets handle most of your dog's healthcare. Board-certified specialists handle what GPs refer out — complex diagnostics, surgery, and conditions requiring advanced training. Know when you need each.</p>
        <div className="flex flex-wrap gap-3">
          <Link href="#general" className="bg-brand-primary text-white text-sm font-bold px-5 py-2.5 rounded-lg no-underline hover:opacity-90">General Practice</Link>
          <Link href="#specialists" className="bg-white/10 text-white text-sm font-bold px-5 py-2.5 rounded-lg no-underline hover:bg-white/20">Specialists</Link>
          <Link href="#emergency" className="bg-brand-danger text-white text-sm font-bold px-5 py-2.5 rounded-lg no-underline hover:opacity-90">Emergency</Link>
        </div>
      </div>
      <nav className="px-container sm:px-container-sm py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <span className="text-brand-text-mid">Find a Vet</span>
      </nav>

      <div className="px-container sm:px-container-sm py-14 max-w-5xl">
        <section id="general" className="mb-16">
          <h2 className="font-display font-black text-brand-dark mb-2" style={{ fontSize: 'clamp(20px, 2.5vw, 32px)' }}>Your General Practice Vet</h2>
          <p className="text-brand-text-mid leading-relaxed mb-6 max-w-3xl">Your primary care vet handles wellness exams, vaccinations, routine diagnostics, most medical conditions, and is your first call for any health concern. They will refer to a specialist when the situation requires it — that referral is a sign of good judgment, not a limitation. Build a relationship with a GP vet you trust before you need them urgently.</p>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-6 mb-6">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-4">How to Find a Good GP Vet</div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[['AAHA accreditation', 'The American Animal Hospital Association sets voluntary standards — accredited practices meet higher standards than required by law. Not required, but a strong positive signal.'], ['WSAVA compliance', 'A vet who recommends WSAVA-compliant foods and stays current with vaccination guidelines reflects evidence-based practice.'], ['Willingness to refer', 'A confident GP vet refers to specialists when appropriate. Reluctance to refer complex cases is a red flag.'], ['Communication style', 'You should understand your dog\'s diagnosis and treatment plan. Vets who explain clearly are more effective partners in your dog\'s health.']].map(([title, desc]) => (
                <div key={title} className="flex gap-3">
                  <span className="text-brand-primary text-lg flex-shrink-0">✓</span>
                  <div><div className="font-bold text-brand-dark text-sm mb-1">{title}</div><p className="text-xs text-brand-text-mid leading-relaxed m-0">{desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="specialists" className="mb-16">
          <h2 className="font-display font-black text-brand-dark mb-2" style={{ fontSize: 'clamp(20px, 2.5vw, 32px)' }}>Board-Certified Specialists</h2>
          <p className="text-brand-text-mid leading-relaxed mb-6 max-w-3xl">Board-certified veterinary specialists have completed residency training in their specialty field — typically 3+ years beyond veterinary school — and passed specialty board examinations. They are found at veterinary specialty hospitals and teaching institutions. You can self-refer to most specialists, but a GP referral provides useful case history and continuity of care.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {SPECIALISTS.map(s => (
              <div key={s.specialty} className="bg-brand-surface border border-brand-border rounded-xl p-5 flex gap-4">
                <div className="text-2xl flex-shrink-0">{s.icon}</div>
                <div>
                  <div className="font-bold text-brand-dark text-sm mb-0.5">{s.specialty}</div>
                  <div className="text-2xs font-mono text-brand-primary mb-2">{s.credential}</div>
                  <p className="text-xs text-brand-text-mid leading-relaxed m-0">{s.when}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="emergency" className="mb-16">
          <h2 className="font-display font-black text-brand-dark mb-2" style={{ fontSize: 'clamp(20px, 2.5vw, 32px)' }}>Emergency Veterinary Care</h2>
          <p className="text-brand-text-mid leading-relaxed mb-4 max-w-3xl">Emergency veterinary hospitals operate 24/7 and are staffed by vets trained in emergency and critical care. Find and save the number of your nearest 24-hour emergency vet before you need it — looking it up during a crisis costs time you may not have.</p>
          <div className="bg-brand-danger/5 border border-brand-danger/20 rounded-xl p-6 mb-6">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-danger mb-3">Go Now — Do Not Wait</div>
            <div className="grid sm:grid-cols-2 gap-2">
              {['Pale or white gums', 'Unproductive retching (large breeds)', 'Collapse or sudden weakness', 'Difficulty breathing', 'Seizure lasting 2+ minutes', 'Suspected poisoning — call ASPCA first', 'Eye injury or sudden vision loss', 'Cannot urinate (male dogs/cats)', 'Sudden hind limb paralysis', 'Penetrating wounds'].map(sign => (
                <div key={sign} className="flex gap-2 text-xs text-brand-text-mid items-center">
                  <span className="text-brand-danger font-bold flex-shrink-0">→</span>{sign}
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-brand-danger/20">
              <div className="text-xs text-brand-text-mid">ASPCA Animal Poison Control: <span className="font-bold text-brand-dark">888-426-4435</span> (24/7, $75 consultation fee)</div>
            </div>
          </div>
          <Link href="/health/emergency-signs" className="text-brand-primary text-sm font-bold no-underline hover:underline">→ Full emergency signs guide (14 signs to know)</Link>
        </section>
      </div>
    </div>
  )
}

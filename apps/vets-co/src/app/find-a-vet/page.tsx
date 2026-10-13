import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbSchema, SchemaScript, DirectoryPlacesCta, LastUpdated, FAQAccordion, ArticleSourcesList } from '@carloOS/ui'
import listings from '../../data/directory-listings.json'
import { HubMasthead } from '../../components/HubMasthead'
import { DirectoryPackEmpty } from '../../components/DirectoryPackEmpty'
import { States, type CensusRegion } from '../../data/states'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Find a Vet — General Practice, Emergency & Specialists | Vets.co', description: 'Find the right veterinarian for your dog. General practice, emergency, and board-certified specialists — dermatology, cardiology, neurology, oncology.', path: '/find-a-vet', type: 'website' })

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://vets.co/' },
    { name: 'Find a Vet', url: 'https://vets.co/find-a-vet' },
  ],
})

const SPECIALISTS = [
  { specialty: 'Emergency & Critical Care', credential: 'DACVECC', when: 'Acute illness or injury outside regular hours, post-surgical monitoring, toxin exposure, trauma', abbr: 'ER', color: '#C84A2A' },
  { specialty: 'Internal Medicine', credential: 'DACVIM', when: 'Complex diagnostics, hormonal disease, immune-mediated disease, chronic conditions requiring specialist oversight', abbr: 'IM', color: '#2563EB' },
  { specialty: 'Cardiology', credential: 'DACVIM (Cardiology)', when: 'Heart murmur detected, arrhythmia, suspected cardiac disease, pre-breeding cardiac clearance (Cavaliers)', abbr: 'CA', color: '#DC2626' },
  { specialty: 'Neurology', credential: 'DACVIM (Neurology)', when: 'Seizures, spinal disease (IVDD), wobbler syndrome, brain tumors, paralysis, vestibular disease', abbr: 'NE', color: '#7C3AED' },
  { specialty: 'Oncology', credential: 'DACVIM (Oncology)', when: 'Cancer diagnosis, chemotherapy protocols, radiation referrals, prognosis discussion', abbr: 'ON', color: '#04865D' },
  { specialty: 'Dermatology', credential: 'DACVD', when: 'Chronic skin disease, environmental or food allergies, autoimmune skin conditions, recurrent ear infections', abbr: 'DM', color: '#B06005' },
  { specialty: 'Ophthalmology', credential: 'DACVO', when: 'Eye injuries, cataracts, glaucoma, progressive retinal atrophy, corneal ulcers not responding to treatment', abbr: 'OP', color: '#07809D' },
  { specialty: 'Surgery', credential: 'DACVS', when: 'Orthopedic surgery (TPLO, FHO, THR), soft tissue surgery, oncologic surgery, complex fracture repair', abbr: 'SX', color: '#475569' },
  { specialty: 'Dentistry', credential: 'DAVDC', when: 'Complex dental extractions, oral tumors, jaw fractures, advanced periodontal disease, dental radiograph interpretation', abbr: 'DT', color: '#64748B' },
  { specialty: 'Behavioral Medicine', credential: 'DACVB', when: 'Aggression, severe anxiety, separation anxiety, compulsive disorders, medication management for behavioral conditions', abbr: 'BM', color: '#92400E' },
]
const FAQS = [
  { question: 'What is a board-certified veterinary specialist?', answer: 'A veterinarian who has completed additional training in a specific area of veterinary medicine and passed an examination in that specialty. The AVMA recognizes 22 veterinary specialty organizations covering 48 specialties, including internal medicine, surgery, emergency and critical care, dentistry and behavior.' },
  { question: 'When should I take my pet to an emergency vet?', answer: 'Go immediately for difficulty breathing, heavy bleeding, seizures, collapse or extreme lethargy, bluish or white gums, straining without passing urine or stool, or failure to eat or drink for 24 hours, according to the Merck Veterinary Manual. Vomiting or diarrhea lasting more than 24 hours needs a vet within 24 hours.' },
  { question: 'What should I do if my pet ate something poisonous?', answer: 'Call your vet or ASPCA Animal Poison Control at (888) 426-4435. It is open 24 hours a day, 365 days a year, and a consultation fee may apply.' },
  { question: 'Does this page list clinics?', answer: 'No. These are how-to-choose guides, not a live clinic list. State license records appear in the Vets.co directory only when a state board list has been imported; we do not invent phone numbers, emails or ratings.' },
]

export default function FindAVetPage() {
  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />
      <div>
      <HubMasthead
        eyebrow="How to choose care"
        title="Find the Right Vet"
        intro="General practice vets handle most of your pet's healthcare. Board-certified specialists handle what GPs refer out — complex diagnostics, surgery, and conditions requiring advanced training. These are how-to-choose guides, not a live clinic list."
        manifestKey="vets-co:find-a-vet-hero"
        fallbackKey="vets-co:hero"
        imageAlt="The exterior entrance of a veterinary clinic building"
        primaryCta={{ href: '#states', label: 'Browse state guides' }}
        secondaryCta={{ href: '/directory', label: 'License directory' }}
      />
      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="inline-flex min-h-6 items-center hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <span className="text-brand-text-mid">Find a Vet</span>
      </nav>

      <div className="px-container-sm sm:px-container py-3 bg-brand-surface border-b border-brand-border flex flex-wrap gap-3">
        <Link href="#general" className="text-xs font-bold text-brand-primary no-underline hover:underline">General Practice</Link>
        <span aria-hidden="true" className="text-brand-border">·</span>
        <Link href="#specialists" className="text-xs font-bold text-brand-primary no-underline hover:underline">Specialists</Link>
        <span aria-hidden="true" className="text-brand-border">·</span>
        <Link href="#emergency" className="text-xs font-bold text-brand-danger no-underline hover:underline">Emergency</Link>
        <span aria-hidden="true" className="text-brand-border">·</span>
        <Link href="#states" className="text-xs font-bold text-brand-primary no-underline hover:underline">By State</Link>
      </div>

      <div className="px-container-sm sm:px-container py-14 max-w-5xl">
        <LastUpdated date="2026-10-13" />
        <div className="rounded-lg border-l-4 border-brand-primary bg-brand-surface p-5 my-6" data-testid="short-answer">
          <h2 className="font-display text-lg font-bold mb-2">The short answer</h2>
          <p className="text-base leading-relaxed text-brand-text-mid m-0">
            Start with a general practice vet for wellness care and most illnesses; they refer you to a board-certified specialist when needed. Specialists have extra training and passed a specialty exam in one of 48 AVMA-recognized specialties (<a href="https://www.avma.org/education/veterinary-specialties">AVMA</a>). Go to an emergency vet immediately for trouble breathing, heavy bleeding, seizures, collapse or pale or blue gums (<a href="https://www.merckvetmanual.com/multimedia/table/when-to-see-a-veterinarian">Merck Veterinary Manual</a>). For suspected poisoning, call ASPCA Animal Poison Control at (888) 426-4435 (<a href="https://www.aspca.org/pet-care/aspca-poison-control">ASPCA</a>).
          </p>
        </div>
        <DirectoryPackEmpty />
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
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-white text-xs font-bold" style={{ backgroundColor: s.color }} aria-hidden="true">{s.abbr}</div>
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
              <div className="text-xs text-brand-text-mid">ASPCA Animal Poison Control: <span className="font-bold text-brand-dark">888-426-4435</span> (24/7; a consultation fee may apply)</div>
            </div>
          </div>
          <Link href="/health/emergency-signs" className="inline-flex min-h-6 items-center text-brand-primary text-sm font-bold no-underline hover:underline">→ Full emergency signs guide (14 signs to know)</Link>
        </section>

        <section id="states" className="mb-16">
          <h2 className="font-display font-black text-brand-dark mb-2" style={{ fontSize: 'clamp(20px, 2.5vw, 32px)' }}>Find a Vet by State</h2>
          <p className="text-brand-text-mid leading-relaxed mb-6 max-w-3xl">State-by-state how-to-choose guides — major metros, 24-hour emergency coverage notes, and specialty referral pathways. They are not a live clinic list. License-board stubs, when a state is in the imported pack, are on the Vets.co directory. Use your state veterinary medical board and the specialty-college directories to verify a veterinarian.</p>
          {(['Northeast', 'Midwest', 'South', 'West'] as CensusRegion[]).map((region) => {
            const inRegion = States.filter((s) => s.region === region).sort((a, b) => a.name.localeCompare(b.name))
            return (
              <div key={region} className="mb-6">
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">{region}</div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                  {inRegion.map((s) => (
                    <Link key={s.slug} href={`/find-a-vet/${s.slug}`} className="bg-brand-surface border border-brand-border rounded-lg px-3 py-2 text-sm text-brand-dark no-underline hover:border-brand-primary hover:text-brand-primary block">
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
          <p className="text-sm text-brand-text-mid mt-6">
            License records, when a state board list has been imported, are on the{' '}
            <Link href="/directory" className="text-brand-primary font-semibold no-underline hover:underline">
              Vets.co directory
            </Link>
            . Until then that directory stays empty. This page does not invent a phone number, email, or rating.
          </p>
        </section>

        <section id="faq" className="mb-8">
          <h2 className="font-display font-black text-brand-dark mb-4" style={{ fontSize: 'clamp(20px, 2.5vw, 32px)' }}>Finding a vet: FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />
          <ArticleSourcesList title="Sources" sources={[
            { label: 'Veterinary specialties (American Board of Veterinary Specialties)', url: 'https://www.avma.org/education/veterinary-specialties', publisher: 'AVMA' },
            { label: 'When to See a Veterinarian (general guidance for pets)', url: 'https://www.merckvetmanual.com/multimedia/table/when-to-see-a-veterinarian', publisher: 'Merck Veterinary Manual' },
            { label: 'ASPCA Poison Control', url: 'https://www.aspca.org/pet-care/aspca-poison-control', publisher: 'ASPCA' },
          ]} />
        </section>
      </div>
      <DirectoryPlacesCta listings={listings} noun="licensed veterinarians" />
    </div>
  </>
  )
}

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { buildMetadata, buildArticleSchema, buildFAQSchema, buildBreadcrumbSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { States } from '../../../data/states'

interface PageProps {
  params: { state: string }
}

export function generateStaticParams() {
  return States.map((s) => ({ state: s.slug }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const s = States.find((x) => x.slug === params.state)
  if (!s) {
    return buildMetadata({ siteId: 'vets-co', title: `Find a Vet by State | Vets.co`, description: `Find a veterinarian in your state. General practice, emergency, and board-certified specialists.`, path: `/find-a-vet`, type: 'website' })
  }
  return buildMetadata({ siteId: 'vets-co', title: `Find a Vet in ${s.name} | Vets.co`, description: `Find a veterinarian in ${s.name}. General practice, emergency, board-certified specialists, and how to choose.`, path: `/find-a-vet/${s.slug}`, type: 'website' })
}

const FAQ_QUESTIONS = (stateName: string) => [
  {
    question: `How do I find a good veterinarian in ${stateName}?`,
    answer: `Start with AAHA-accredited general practice hospitals in your nearest metro, ask friends and your local rescue or shelter for referrals, and verify the practice through your state veterinary medical board. Look for a vet who explains diagnoses clearly, recommends evidence-based care, and refers to specialists when appropriate.`,
  },
  {
    question: `What should I do in a veterinary emergency in ${stateName}?`,
    answer: `Call your nearest 24-hour emergency veterinary hospital before driving in — they can advise on first aid and prepare for arrival. For suspected poisoning, call ASPCA Animal Poison Control at 888-426-4435 (24/7, consultation fee applies). Save the closest ER's phone number before you need it.`,
  },
  {
    question: `Are board-certified veterinary specialists available in ${stateName}?`,
    answer: `Board-certified specialists complete residency training beyond veterinary school and pass specialty board exams. Availability varies by state — major metros and university teaching hospitals concentrate specialty access. Your general practice vet can refer you to the appropriate specialty hospital, and you can verify credentials through the relevant specialty college (ACVIM, ACVS, ACVO, ACVD, and others).`,
  },
  {
    question: `Does pet insurance affect which vet I can see in ${stateName}?`,
    answer: `Most major pet insurance providers allow you to use any licensed veterinarian in the United States — including specialists and emergency hospitals. The insurance company reimburses you after you pay the vet. This is different from human health insurance and is one of the reasons pet insurance can be valuable for major or unexpected veterinary bills.`,
  },
]

export default function StateVetFinderPage({ params }: PageProps) {
  const state = States.find((x) => x.slug === params.state)
  if (!state) notFound()

  const url = `https://vets.co/find-a-vet/${state.slug}`
  const title = `Find a Vet in ${state.name}`
  const description = `Find a veterinarian in ${state.name}. General practice, emergency, board-certified specialists, and how to choose.`
  const faqs = FAQ_QUESTIONS(state.name)

  const articleSchema = buildArticleSchema({
    siteId: 'vets-co',
    title,
    description,
    url,
    imageUrl: '',
    authorName: 'Vets.co Editorial',
    publishedAt: '2026-05-28T00:00:00Z',
    modifiedAt: '2026-05-28T00:00:00Z',
  })
  const faqSchema = buildFAQSchema({ questions: faqs })
  const breadcrumbSchema = buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://vets.co' },
      { name: 'Find a Vet', url: 'https://vets.co/find-a-vet' },
      { name: state.name, url },
    ],
  })
  const schema = combineSchemas(articleSchema, faqSchema, breadcrumbSchema)

  return (
    <>
      <SchemaScript schema={schema} />

      {/* Breadcrumb */}
      <nav className="px-container sm:px-container-sm py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <Link href="/find-a-vet" className="hover:text-brand-primary no-underline">Find a Vet</Link><span>›</span>
        <span className="text-brand-text-mid">{state.name}</span>
      </nav>

      {/* Hero */}
      <div className="bg-brand-dark px-container sm:px-container-sm py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-3">
          Veterinary Directory · {state.region}
        </span>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-4 max-w-3xl" style={{ fontSize: 'clamp(24px, 4vw, 48px)' }}>
          Find a Vet in {state.name}
        </h1>
        <p className="text-lg font-light text-white/60 max-w-2xl leading-relaxed">
          {state.abbr} general practice vets, 24-hour emergency hospitals, and board-certified specialists — what to look for and how to choose.
        </p>
      </div>

      <div className="px-container sm:px-container-sm py-12 max-w-5xl">
        {/* TL;DR */}
        <section className="bg-brand-surface border border-brand-border rounded-xl p-6 mb-10">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-2">TL;DR</div>
          <p className="text-brand-text-mid leading-relaxed m-0">
            Most pet-owner health needs in {state.name} are handled by a general practice (GP) veterinarian — wellness exams, vaccines, routine illness, and most chronic conditions. Build a relationship with a GP vet you trust before you need them urgently. For after-hours emergencies, identify your nearest 24-hour emergency veterinary hospital and save the number now. For complex cases, board-certified specialists handle what GPs refer out. Verify credentials through your state veterinary medical board and recognized specialty colleges (ACVIM, ACVS, others).
          </p>
        </section>

        {/* State context */}
        <section className="mb-12">
          <h2 className="font-display font-black text-brand-dark mb-3" style={{ fontSize: 'clamp(20px, 2.5vw, 30px)' }}>
            Veterinary Care in {state.name}
          </h2>
          <div className="bg-brand-primary/5 border border-brand-primary/20 rounded-xl p-6 mb-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Emergency Hospital Availability</div>
            <p className="text-brand-text-mid leading-relaxed m-0">{state.emergencyHospitalNote}</p>
          </div>
          {state.boardCertSpecialtyNote && (
            <div className="bg-brand-surface border border-brand-border rounded-xl p-6">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-2">Board-Certified Specialty Access</div>
              <p className="text-brand-text-mid leading-relaxed m-0">{state.boardCertSpecialtyNote}</p>
            </div>
          )}
        </section>

        {/* City grid */}
        <section className="mb-12">
          <h2 className="font-display font-black text-brand-dark mb-2" style={{ fontSize: 'clamp(20px, 2.5vw, 30px)' }}>
            Major Metros in {state.name}
          </h2>
          <p className="text-sm text-brand-text-mid mb-6 max-w-3xl">
            These metros are where general practice, emergency, and specialty veterinary services are most concentrated in {state.name}. Most residents in or near these areas have multiple practices to choose from; rural residents may want to identify the nearest of these metros for after-hours and specialty needs.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {state.majorCities.map((city) => (
              <div key={city} className="bg-brand-surface border border-brand-border rounded-xl p-4">
                <h3 className="font-bold text-brand-dark text-base mb-1 mt-0">{city}, {state.abbr}</h3>
                <p className="text-xs text-brand-text-mid m-0 leading-relaxed">
                  Find a vet in {city}: search AAHA-accredited hospitals and your state veterinary medical board&apos;s license verification tool.
                </p>
              </div>
            ))}
          </div>
          <div className="mt-5 text-xs text-brand-text-light italic">
            Vets.co does not maintain a real-time directory of individual practices. Use the resources below to find a verified, licensed veterinarian.
          </div>
        </section>

        {/* How to choose a vet */}
        <section className="mb-12">
          <h2 className="font-display font-black text-brand-dark mb-3" style={{ fontSize: 'clamp(20px, 2.5vw, 30px)' }}>
            How to Choose a Vet in {state.name}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="font-bold text-brand-dark text-sm mb-2">AAHA Accreditation</div>
              <p className="text-xs text-brand-text-mid leading-relaxed m-0">The American Animal Hospital Association sets voluntary standards above the legal minimum. AAHA-accredited practices have demonstrated higher standards across anesthesia, pain management, surgery, and diagnostics. Not required, but a strong positive signal.</p>
            </div>
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="font-bold text-brand-dark text-sm mb-2">License Verification</div>
              <p className="text-xs text-brand-text-mid leading-relaxed m-0">Every state has a veterinary medical board that licenses veterinarians and publishes verification tools. Search the {state.name} board to confirm a vet&apos;s license is active and in good standing — particularly useful when changing practices.</p>
            </div>
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="font-bold text-brand-dark text-sm mb-2">Willingness to Refer</div>
              <p className="text-xs text-brand-text-mid leading-relaxed m-0">A confident GP refers complex cases to specialists. Reluctance to refer is a yellow flag. The best GPs see themselves as your pet&apos;s primary care provider and the entry point to specialty care when needed.</p>
            </div>
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="font-bold text-brand-dark text-sm mb-2">Clear Communication</div>
              <p className="text-xs text-brand-text-mid leading-relaxed m-0">You should understand the diagnosis, the proposed plan, and the cost before agreeing to treatment. A vet who explains options — including doing nothing — and answers questions plainly will be a better partner over your pet&apos;s life.</p>
            </div>
          </div>
          <div className="bg-brand-primary/5 border-l-4 border-brand-primary p-5 rounded-r-xl">
            <div className="text-sm font-bold text-brand-dark mb-1">{state.name}-specific note</div>
            <p className="text-sm text-brand-text-mid m-0 leading-relaxed">
              {state.region === 'West' || state.abbr === 'AK' || state.abbr === 'MT' || state.abbr === 'WY' || state.abbr === 'ND' || state.abbr === 'SD' || state.abbr === 'NV' || state.abbr === 'NM'
                ? `Distance to specialty and emergency care is a real consideration in much of ${state.name}. Factor drive time into your choice of GP — a closer vet with whom you can build a relationship may serve you better than a distant practice, even one with broader services.`
                : state.abbr === 'CA' || state.abbr === 'NY' || state.abbr === 'TX' || state.abbr === 'FL'
                ? `${state.name} has unusually deep access to board-certified specialty care. If your pet develops a condition requiring sub-specialty expertise — neurology, oncology, advanced surgery — you have real options. Ask your GP for a specific specialist referral rather than a general one.`
                : `${state.name} has solid GP coverage in metros and reasonable access to emergency and specialty care in major cities. Identify your nearest 24-hour ER and one or two specialty referral hospitals before you need them.`}
            </p>
          </div>
        </section>

        {/* Specialty referral */}
        <section className="mb-12">
          <h2 className="font-display font-black text-brand-dark mb-3" style={{ fontSize: 'clamp(20px, 2.5vw, 30px)' }}>
            Specialty Referral Directories
          </h2>
          <p className="text-sm text-brand-text-mid mb-5 max-w-3xl">
            Board-certified veterinary specialists are listed in their respective specialty college directories. When your GP refers, you can verify the specialist&apos;s credentials and find others practicing in {state.name} through these sources.
          </p>
          <ul className="space-y-2 text-sm text-brand-text-mid">
            <li><a href="https://www.acvim.org/Find-a-Specialist" target="_blank" rel="noopener noreferrer" className="text-brand-primary font-bold hover:underline">ACVIM — Internal medicine, cardiology, neurology, oncology</a></li>
            <li><a href="https://www.acvs.org/find-a-surgeon" target="_blank" rel="noopener noreferrer" className="text-brand-primary font-bold hover:underline">ACVS — Veterinary surgeons</a></li>
            <li><a href="https://www.acvo.org/find-a-veterinary-ophthalmologist" target="_blank" rel="noopener noreferrer" className="text-brand-primary font-bold hover:underline">ACVO — Veterinary ophthalmologists</a></li>
            <li><a href="https://www.acvd.org/find-a-dermatologist" target="_blank" rel="noopener noreferrer" className="text-brand-primary font-bold hover:underline">ACVD — Veterinary dermatologists</a></li>
            <li><a href="https://acvecc.org/" target="_blank" rel="noopener noreferrer" className="text-brand-primary font-bold hover:underline">ACVECC — Emergency and critical care</a></li>
            <li><a href="https://www.aaha.org/your-pet/pet-owner-education/ask-aaha/find-a-hospital/" target="_blank" rel="noopener noreferrer" className="text-brand-primary font-bold hover:underline">AAHA — Find an accredited hospital</a></li>
          </ul>
        </section>

        {/* Emergency */}
        <section className="mb-12">
          <h2 className="font-display font-black text-brand-dark mb-3" style={{ fontSize: 'clamp(20px, 2.5vw, 30px)' }}>
            Emergencies in {state.name}
          </h2>
          <div className="bg-brand-danger/5 border border-brand-danger/20 rounded-xl p-6 mb-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-danger mb-3">If You Suspect Poisoning</div>
            <p className="text-sm text-brand-text-mid m-0 mb-2 leading-relaxed">
              Call <a href="tel:8884264435" className="font-bold text-brand-dark hover:underline">ASPCA Animal Poison Control: 888-426-4435</a> (24/7, $75 consultation fee). They can advise whether to induce vomiting, what to monitor for, and whether to transport to an ER.
            </p>
            <p className="text-sm text-brand-text-mid m-0 leading-relaxed">
              Alternative: <a href="tel:8557647661" className="font-bold text-brand-dark hover:underline">Pet Poison Helpline: 855-764-7661</a> (24/7, fee applies).
            </p>
          </div>
          <Link href="/health/emergency-signs" className="text-brand-primary text-sm font-bold no-underline hover:underline">→ Full emergency signs guide (when to go now)</Link>
        </section>

        {/* Cross-link to cornerstones */}
        <section className="mb-12">
          <h2 className="font-display font-black text-brand-dark mb-3" style={{ fontSize: 'clamp(20px, 2.5vw, 30px)' }}>
            Plan Ahead
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/reviews/best-pet-insurance" className="bg-brand-surface border border-brand-border rounded-xl p-5 no-underline hover:border-brand-primary block">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-1">Compare</div>
              <div className="font-bold text-brand-dark text-base mb-1">Best Pet Insurance 2026</div>
              <p className="text-xs text-brand-text-mid m-0 leading-relaxed">Most pet insurance plans work with any licensed vet in the U.S., including specialists and emergency hospitals. Enroll before the first vet visit.</p>
            </Link>
            <Link href="/telehealth" className="bg-brand-surface border border-brand-border rounded-xl p-5 no-underline hover:border-brand-primary block">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-1">Compare</div>
              <div className="font-bold text-brand-dark text-base mb-1">Pet Telehealth Comparison</div>
              <p className="text-xs text-brand-text-mid m-0 leading-relaxed">For non-emergency questions, a telehealth consult can save a trip — particularly useful in rural parts of {state.name} where the nearest GP is a drive away.</p>
            </Link>
          </div>
          {/* future: <CrossPortfolioCard /> */}
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="font-display font-black text-brand-dark mb-5" style={{ fontSize: 'clamp(20px, 2.5vw, 30px)' }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((q) => (
              <details key={q.question} className="bg-brand-surface border border-brand-border rounded-xl p-5 group">
                <summary className="font-bold text-brand-dark text-sm cursor-pointer list-none flex justify-between items-center gap-3">
                  <span>{q.question}</span>
                  <span className="text-brand-primary text-lg flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-sm text-brand-text-mid leading-relaxed mt-3 mb-0">{q.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Back to all states */}
        <div className="mt-10 pt-8 border-t border-brand-border">
          <Link href="/find-a-vet" className="text-brand-primary text-sm font-bold no-underline hover:underline">← Back to Find a Vet</Link>
        </div>
      </div>
    </>
  )
}

/**
 * Dog.com Find-a-Vet Page — /find-a-vet
 * Connects to vet directory. Currently static list of specialist types
 * with links to external resources. Phase 2: Supabase location table.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture } from '@carloOS/ui'
import { buildFAQSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Find a Veterinary Specialist — Near You',
  description: 'Find board-certified veterinary specialists near you. Neurology, orthopedics, oncology, cardiology, ophthalmology, emergency and critical care — search by specialty and location.',
  path: '/find-a-vet',
})

const SPECIALTIES = [
  {
    icon: '🧠', title: 'Neurology', credentials: 'DACVIM (Neurology)',
    desc: 'Seizures, disc disease (IVDD), degenerative myelopathy, spinal injuries, head trauma.',
    conditions: ['IVDD', 'Degenerative Myelopathy', 'Seizure Disorders', 'Brain Tumors', 'Vestibular Disease'],
    referralTrigger: 'Weakness or paralysis in limbs, seizures not controlled by medication, sudden loss of coordination.',
    searchUrl: 'https://www.acvim.org/Pet-Owners/Find-a-Specialist',
  },
  {
    icon: '🦴', title: 'Orthopedics / Surgery', credentials: 'DACVS',
    desc: 'Hip dysplasia, cruciate ligament tears (CCL/TPLO), bone fractures, joint disease, elbow dysplasia.',
    conditions: ['Hip Dysplasia', 'CCL Tears', 'Elbow Dysplasia', 'Fractures', 'Luxating Patellas'],
    referralTrigger: 'Lameness not improving after 2 weeks, sudden non-weight-bearing lameness, diagnosis of hip or elbow dysplasia.',
    searchUrl: 'https://www.acvs.org/find-a-surgeon',
  },
  {
    icon: '❤️', title: 'Cardiology', credentials: 'DACVIM (Cardiology)',
    desc: 'Heart disease, heart murmurs, arrhythmias, dilated cardiomyopathy, pericardial disease.',
    conditions: ['Heart Murmurs', 'DCM', 'Arrhythmias', 'Pericardial Disease', 'Congenital Defects'],
    referralTrigger: 'Grade 3+ murmur, exercise intolerance, coughing at night, fainting episodes, irregular heartbeat.',
    searchUrl: 'https://www.acvim.org/Pet-Owners/Find-a-Specialist',
  },
  {
    icon: '🔬', title: 'Oncology', credentials: 'DACVIM (Oncology)',
    desc: 'Cancer diagnosis and treatment — chemotherapy, surgery referral coordination, immunotherapy, palliative care.',
    conditions: ['Lymphoma', 'Hemangiosarcoma', 'Osteosarcoma', 'Mast Cell Tumors', 'Mammary Tumors'],
    referralTrigger: 'Any cancer diagnosis. Earlier referral provides more treatment options.',
    searchUrl: 'https://www.acvim.org/Pet-Owners/Find-a-Specialist',
  },
  {
    icon: '👁️', title: 'Ophthalmology', credentials: 'DACVO',
    desc: 'Eye disease, cataracts, progressive retinal atrophy, glaucoma, corneal disease, eyelid abnormalities.',
    conditions: ['Cataracts', 'Glaucoma', 'Progressive Retinal Atrophy', 'Corneal Disease', 'Dry Eye (KCS)'],
    referralTrigger: 'Sudden vision loss, eye pain (squinting, pawing), red eye with discharge, visible opacity in the lens.',
    searchUrl: 'https://www.acvo.org/find-a-vet',
  },
  {
    icon: '🦷', title: 'Dentistry / Oral Surgery', credentials: 'DAVDC',
    desc: 'Advanced periodontal disease, oral tumors, tooth resorption, jaw fractures, endodontics.',
    conditions: ['Severe Periodontal Disease', 'Oral Tumors', 'Tooth Fractures', 'Jaw Disease', 'Malocclusion'],
    referralTrigger: 'Oral masses, severe tooth root abscesses, fractured teeth with exposed pulp, jaw asymmetry.',
    searchUrl: 'https://www.avdc.org/find-a-veterinary-dentist',
  },
  {
    icon: '🩺', title: 'Internal Medicine', credentials: 'DACVIM',
    desc: 'Complex internal disease — Addison\'s, Cushing\'s, kidney disease, GI disorders, EPI, immune conditions.',
    conditions: ["Addison's Disease", "Cushing's Disease", 'Chronic Kidney Disease', 'IBD', 'EPI'],
    referralTrigger: 'Diagnosis not responding to initial treatment, complex or rare disease presentation, unexplained weight loss.',
    searchUrl: 'https://www.acvim.org/Pet-Owners/Find-a-Specialist',
  },
  {
    icon: '🚨', title: 'Emergency & Critical Care', credentials: 'DACVECC',
    desc: '24-hour emergency care, ICU, surgical emergencies, toxicology, trauma.',
    conditions: ['GDV / Bloat', 'Internal Bleeding', 'Respiratory Distress', 'Poisoning', 'Trauma'],
    referralTrigger: 'Any life-threatening emergency. Go immediately — do not call ahead for true emergencies.',
    searchUrl: 'https://www.acvecc.org/find-a-specialist',
  },
]

const FAQ_ITEMS = [
  {
    question: 'How do I get a referral to a veterinary specialist?',
    answer: 'Your primary care veterinarian will typically provide a referral with your pet\'s medical records. Most specialists prefer (and some require) a referral. In emergencies, you can go directly to an emergency specialist without a referral — bring any records you have access to.',
    answerText: 'Your primary care veterinarian provides a referral with medical records. Most specialists prefer a referral. In emergencies, go directly without waiting.',
  },
  {
    question: 'Will my pet insurance cover veterinary specialist visits?',
    answer: 'Most comprehensive pet insurance plans cover specialist visits as they would any other illness or injury — subject to your deductible and reimbursement rate. Check your policy carefully for exclusions. Trupanion and Healthy Paws both cover specialist care without per-visit limits.',
    answerText: 'Most comprehensive pet insurance plans cover specialist visits. Check your policy for exclusions.',
  },
  {
    question: 'How much does a veterinary specialist visit cost?',
    answer: 'Initial specialist consultation: $150–400. Specialist procedures vary dramatically: neurology MRI ($1,800–3,500), TPLO surgery ($3,500–6,000), chemotherapy ($500–2,000/cycle), cataract surgery ($1,500–4,000 per eye). Pet insurance significantly reduces out-of-pocket cost when enrolled before diagnosis.',
    answerText: 'Specialist consultations run $150-400. Procedures vary widely: MRI $1,800-3,500, TPLO surgery $3,500-6,000.',
  },
  {
    question: 'What credentials should a veterinary specialist have?',
    answer: 'Board-certified specialists have completed a 3-5 year residency program after veterinary school and passed rigorous board examinations. Look for "DACVS" (surgeon), "DACVIM" (internal medicine, neurology, cardiology, oncology), "DACVO" (ophthalmologist), or "DACVECC" (emergency/critical care) after their name.',
    answerText: 'Look for board certification: DACVS, DACVIM, DACVO, or DACVECC. These require 3-5 year residencies and board exams.',
  },
]

const faqSchema = buildFAQSchema({
  questions: FAQ_ITEMS.map(f => ({ question: f.question, answer: f.answerText })),
})

export default function FindAVetPage() {
  return (
    <>
      <SchemaScript schema={faqSchema} />

      {/* Hero */}
      <div className="bg-brand-dark px-container sm:px-container-sm py-16">
        <div className="flex items-center gap-2.5 mb-5">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Veterinary Specialists</span>
        </div>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-5"
          style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
          Find a Veterinary Specialist
        </h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed mb-8">
          When your dog needs more than a general vet can provide, board-certified specialists deliver the expertise to make a difference. Find the right specialist for your dog's condition below.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Link href="/reviews/best-pet-insurance"
            className="inline-flex items-center bg-brand-primary text-white font-semibold text-sm px-6 py-3 rounded no-underline hover:bg-brand-primary-light transition-colors">
            Compare Pet Insurance →
          </Link>
          <Link href="/health/dog-symptoms-guide"
            className="inline-flex items-center border border-white/20 text-white/80 font-medium text-sm px-6 py-3 rounded no-underline hover:border-white/40 transition-colors">
            Symptom Guide
          </Link>
        </div>
      </div>

      {/* Specialist grid */}
      <div className="px-container sm:px-container-sm py-14">
        <div className="grid gap-6">
          {SPECIALTIES.map((s) => (
            <div key={s.title} className="bg-brand-white border border-brand-border rounded-lg p-7">
              <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-start">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{s.icon}</span>
                    <div>
                      <h2 className="font-display font-bold text-brand-dark text-xl">{s.title}</h2>
                      <div className="text-2xs font-bold tracking-wider uppercase text-brand-text-light mt-0.5">{s.credentials}</div>
                    </div>
                  </div>
                  <p className="text-sm text-brand-text-mid leading-relaxed mb-4">{s.desc}</p>
                  <div className="mb-4">
                    <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-2">Common Conditions</div>
                    <div className="flex flex-wrap gap-1.5">
                      {s.conditions.map(c => (
                        <span key={c} className="text-xs font-medium px-2.5 py-1 bg-brand-surface border border-brand-border rounded-pill text-brand-text-mid">{c}</span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-lg p-3">
                    <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-1">When to Refer</div>
                    <p className="text-xs text-brand-text-mid leading-relaxed m-0">{s.referralTrigger}</p>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <a href={s.searchUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center bg-brand-dark text-white text-sm font-bold px-5 py-2.5 rounded no-underline hover:bg-brand-primary transition-colors whitespace-nowrap">
                    Find a {s.title.split('/')[0].trim()} →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="px-container sm:px-container-sm pb-14">
        <h2 className="font-display text-2xl font-bold text-brand-dark mb-6">Common Questions</h2>
        <FAQAccordion
          items={FAQ_ITEMS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answerText }))}
          includeSchema={false}
        />
      </div>

      {/* Email */}
      <div className="bg-brand-primary-pale px-container sm:px-container-sm py-12">
        <EmailCapture variant="section" siteId="dog-com"
          title="Free Dog Health Newsletter"
          subtitle="DVM-written breed health guides and specialist Q&A — every Tuesday."
          source="find-a-vet" ctaText="Subscribe Free"
          perks={['✓ DVM-reviewed', '📬 Weekly', '🩺 Specialist advice']}
        />
      </div>
    </>
  )
}

// Import FAQAccordion — needs to be client component in page context
import { FAQAccordion } from '@carloOS/ui'

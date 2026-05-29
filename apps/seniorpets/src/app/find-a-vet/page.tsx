import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, CalloutBox } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'seniorpets',
  title: 'Find a Vet Specializing in Senior Pets',
  description:
    'How to find a veterinarian comfortable with multi-condition senior pet management, hospice care, and quality-of-life conversations. Plus the credentials worth asking about.',
  path: '/find-a-vet',
})

export default function FindAVetPage() {
  return (
    <div className="px-container sm:px-container-sm py-12 max-w-content mx-auto">
      <nav className="text-xs text-brand-text-light flex gap-2 mb-6">
        <Link href="/" className="hover:text-brand-primary no-underline">
          Home
        </Link>
        <span>›</span>
        <span className="text-brand-text-mid">Find a Vet</span>
      </nav>

      <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
        Geriatric Veterinary Care
      </div>
      <h1 className="font-display font-semibold text-brand-dark text-4xl tracking-tight mb-4 leading-tight">
        Finding a vet who&apos;s great with senior pets
      </h1>
      <p className="text-base text-brand-text-mid leading-relaxed max-w-3xl mb-8">
        Senior pets benefit from veterinarians comfortable with multi-condition
        management, palliative care, and frank quality-of-life conversations.
        Most general practitioners are. A subset has gone further — these are
        the credentials and resources worth knowing about.
      </p>

      <div className="carloOS-article">
        <h2>Credentials worth asking about</h2>
        <p>
          The phrase &ldquo;senior pet specialist&rdquo; isn&apos;t a formal
          board credential, but several pathways indicate extra training in
          geriatric care:
        </p>
        <ul>
          <li>
            <strong>IAAHPC certification</strong> (International Association
            for Animal Hospice and Palliative Care) — vets and vet techs
            certified in end-of-life and palliative care.
          </li>
          <li>
            <strong>Fear Free Certified Professional</strong> — low-stress
            handling, increasingly important as senior pets become more
            sensitive to handling, sound, and unfamiliar surfaces.
          </li>
          <li>
            <strong>AVMA membership</strong> with continuing education in
            geriatric medicine.
          </li>
          <li>
            <strong>House-call practices</strong> — many of the best
            end-of-life and senior pet practices are mobile, allowing exams
            in a low-stress home environment.
          </li>
        </ul>

        <h2>Directories to search</h2>
        <ul>
          <li>
            <a
              href="https://www.iaahpc.org/find-a-provider.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-primary hover:underline"
            >
              IAAHPC provider directory
            </a>
            {' '}— hospice and palliative care providers worldwide.
          </li>
          <li>
            <a
              href="https://fearfreepets.com/directory/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-primary hover:underline"
            >
              Fear Free Pets directory
            </a>
            {' '}— certified low-stress practices.
          </li>
          <li>
            <a
              href="https://www.aaha.org/your-pet/pet-owner-education/locate-an-aaha-hospital/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-primary hover:underline"
            >
              AAHA-accredited hospital locator
            </a>
            {' '}— practices that meet voluntary AAHA standards for diagnostic
            quality, pain management, and senior care.
          </li>
          <li>
            <a
              href="https://www.acvim.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-primary hover:underline"
            >
              ACVIM specialist directory
            </a>
            {' '}— internal medicine, cardiology, oncology, and neurology
            specialists for complex senior cases.
          </li>
        </ul>

        <h2>Questions worth asking your current vet</h2>
        <ul>
          <li>
            How often do you recommend bloodwork for senior dogs and cats?
            (Twice-yearly is increasingly standard for pets over age 8.)
          </li>
          <li>
            Are you comfortable managing multiple concurrent diagnoses
            (e.g., arthritis + early CKD + heart disease)?
          </li>
          <li>
            What is your approach to quality-of-life scoring and end-of-life
            conversations? Do you use a structured tool such as the HHHHHMM
            scale?
          </li>
          <li>
            Do you offer home euthanasia or can you refer? When the time
            comes, this is often the single kindest decision an owner makes
            for a senior pet.
          </li>
        </ul>

        <CalloutBox variant="tip" title="A small thing that matters">
          Senior pets benefit enormously from continuity. The single best
          predictor of catching a slow-onset senior condition early is having
          a relationship with one veterinarian who knows your pet&apos;s
          baseline. If you&apos;ve been hopping clinics, this is the year to
          settle on one.
        </CalloutBox>
      </div>
    </div>
  )
}

import type { Metadata } from 'next'
import {
  buildMetadata,
  ArticleLayout,
  RelatedLinks,
  TableOfContents,
  FAQAccordion,
  CalloutBox,
  ArticleByline,
  DropCap,
  StockImage,
} from '@carloOS/ui'
import {
  buildArticleSchema,
  buildFAQSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'How to Find an Exotic-Pet Vet for a Ferret | Ferret.com',
  description:
    'Find a qualified exotic-pet vet for your ferret: directories to check, questions to ask, emergency vs routine care, and why a general vet may not be enough.',
  path: '/find-an-exotic-vet',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'How to Find an Exotic-Pet Vet for a Ferret',
  description:
    "An owner's guide to finding and qualifying an exotic-pet veterinarian for a ferret — which directories to search, what to ask a prospective clinic, and how to set up emergency care before a crisis.",
  url: 'https://ferret.com/find-an-exotic-vet',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})


const FAQS = [
  {
    question: 'Can my regular dog-and-cat vet treat my ferret?',
    answer:
      "Some can, but many cannot do it well. Ferret medicine is a distinct small-mammal specialty: the common adult diseases (insulinoma, adrenal disease, lymphoma, cardiomyopathy) are not part of standard dog-and-cat training, and ferrets need different drug doses, different anesthetic handling, and a different vaccine-reaction protocol. A general clinic that sees a ferret only a few times a year is fine for a simple vaccine visit but is rarely the right home for an aging or sick ferret. Ask the clinic directly how often it treats ferrets before you rely on it.",
  },
  {
    question: 'Where do I look for an exotic-pet vet near me?',
    answer:
      'Start with the Association of Exotic Mammal Veterinarians (AEMV) member directory at aemv.org, which lists clinicians who actively work in exotic-mammal medicine. The American Board of Veterinary Practitioners (ABVP) maintains a directory of certified specialists in Exotic Companion Mammal practice. Veterinary teaching hospitals at AVMA-accredited US veterinary schools, and large exotic-pet referral hospitals, are reliable backups. The American Ferret Association (AFA) at ferret-afa.org also points owners toward ferret-knowledgeable care.',
  },
  {
    question: 'What should I ask when I call a new clinic?',
    answer:
      'Ask how many ferrets the clinic sees per week or month, whether there is a designated exotic-mammal clinician or whether ferret cases get spread across general staff, whether they offer in-house abdominal ultrasound and ferret-experienced surgery, and what the after-hours referral path is for a ferret emergency. A clinic that answers all four confidently is a strong candidate; one that hesitates on most is probably not the right primary-care home for a ferret.',
  },
  {
    question: 'Do I need to find a vet before there is a problem?',
    answer:
      'Yes. The best time to establish care is at a healthy annual visit, not during a 2 a.m. emergency. A vet who has already examined your ferret has a baseline weight, prior bloodwork, and a relationship to build on, which produces a faster and more accurate picture when something goes wrong. Identify both a routine clinic and the nearest emergency or exotic-referral option while your ferret is well.',
  },
  {
    question: 'What is the difference between routine and emergency exotic care?',
    answer:
      'Routine care is preventive: wellness exams, vaccines, and age-appropriate screening bloodwork from your primary exotic-pet clinic. Emergency care is for time-critical signs — collapse, seizures, labored breathing, not eating, straining, or pale gums — and often happens after hours at a separate emergency or referral hospital. Confirm in advance whether your routine clinic handles emergencies itself or refers out, and keep the emergency clinic\'s address and phone number somewhere you can find them instantly.',
  },
  {
    question: 'Does Ferret.com recommend or verify specific vets?',
    answer:
      'No. Ferret.com does not maintain a vet directory and does not verify, endorse, or rank individual clinics or veterinarians. This guide points you to the established professional directories — AEMV and ABVP — and to owner resources like the AFA so you can evaluate a clinic yourself. Always confirm a clinic\'s ferret experience and credentials directly with the clinic.',
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(articleSchema, faqSchema)

export default function FindAnExoticVetPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        contentType="health"
        hero={{
          title: 'How to Find an Exotic-Pet Vet for a Ferret',
          subtitle:
            'Every ferret needs a veterinarian who actually works in exotic-mammal medicine — not just one who is willing to see a ferret. This guide walks through the directories worth searching, the questions worth asking before you commit, and how to line up both routine and emergency care before you ever need it.',
          category: 'Owner Guide',
          authorName: 'Ferret.com Editorial',
          publishedAt: 'June 2026',
          readTime: '9 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Find an Exotic Vet', href: '/find-an-exotic-vet' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'TL;DR', href: '#tldr' },
                { label: 'Why a General Vet May Not Be Enough', href: '#why' },
                { label: 'Directories to Check', href: '#directories' },
                { label: 'Questions to Ask a Clinic', href: '#questions' },
                { label: 'Emergency vs Routine Care', href: '#emergency' },
                { label: 'Setting It Up Before a Crisis', href: '#before' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Vet Visit Prep', href: '/health/vet-visit-prep' },
                { label: 'Emergency Warning Signs', href: '/health/emergency-warning-signs' },
                { label: 'Ferret Health Hub', href: '/health' },
              ]}
            />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Health Hub', href: '/health' },
          { title: 'Vet Visit Prep', href: '/health/vet-visit-prep' },
          { title: 'Annual Checkup Guide', href: '/health/annual-checkup-guide' },
          { title: 'Emergency Warning Signs', href: '/health/emergency-warning-signs' },
        ]}
>
        <div className="carloOS-article">
          <StockImage
            manifestKey="ferret-com:find-vet-hero"
            aspect="16:9"
            variant="inline"
            caption="Finding an exotic-pet veterinarian experienced with ferrets is the single most important ownership preparation."
            priority
          />
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-06-01"
            reviewedBy="Editorial team"
          />

          <DropCap>
            The most important veterinary decision you make for a ferret is
            not which medication or which surgery — it is who you take the
            ferret to in the first place. Ferret medicine is a specialty
            within exotic-mammal practice, and a clinician who works in it
            routinely will see things a general dog-and-cat vet may miss.
            Finding that clinician, and lining up an emergency option behind
            them, is worth doing before your ferret is ever unwell.
          </DropCap>

          <h2 id="tldr">TL;DR</h2>
          <p>
            Look for an exotic-pet veterinarian — ideally an AEMV member or
            an ABVP Exotic Companion Mammal diplomate — using the directories
            below. Before you commit, call and ask how many ferrets the clinic
            sees, who handles exotic cases, what diagnostics are available
            in-house, and how emergencies are referred. Establish routine care
            at a healthy visit, and separately identify the nearest emergency
            or referral hospital. Ferret.com does not maintain a vet directory
            and does not verify or endorse any clinic — these are starting
            points for you to evaluate yourself.
          </p>

          <h2 id="why">Why a General Small-Animal Vet May Not Be Enough</h2>
          <p>
            Plenty of general-practice clinics will happily see a ferret, and
            for a straightforward distemper or rabies vaccine that is often
            fine. The gap shows up in everything beyond the basics. The
            conditions that dominate adult ferret care — insulinoma, adrenal
            disease, lymphoma, and cardiomyopathy — are not part of standard
            dog-and-cat training. Recognizing them early, choosing the right
            diagnostics, dosing ferret-appropriate drugs, and handling ferret
            anesthesia safely all take either specific postgraduate experience
            or active continuing education in ferret medicine.
          </p>
          <p>
            A useful way to think about it: a vaccine visit is low-stakes, but
            an aging ferret with weight loss, weakness, or a suspicious mass is
            not. For that ferret you want a clinician who has worked through
            many similar cases, not one encountering the disease for the first
            time. The good news is that you do not have to guess — there are
            established directories that filter for exactly this experience.
          </p>

          <h2 id="directories">Directories and Credentials to Check</h2>
          <p>
            These are the standard, legitimate places to find ferret-capable
            veterinary care. None of them is operated by Ferret.com; verify any
            clinic&apos;s ferret experience with the clinic directly.
          </p>
          <ul>
            <li>
              <strong>AEMV member directory.</strong> The{' '}
              <a
                href="https://www.aemv.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Association of Exotic Mammal Veterinarians (aemv.org)
              </a>{' '}
              maintains a searchable directory of veterinarians who actively
              work in exotic-mammal medicine. Membership signals professional
              engagement with the field and is the most accessible first filter
              for most owners.
            </li>
            <li>
              <strong>ABVP Exotic Companion Mammal diplomates.</strong> The
              American Board of Veterinary Practitioners certifies clinicians
              who have passed a specialty exam in this area. There are a limited
              number nationally, so finding one within driving distance is a
              meaningful upgrade for any complicated ferret case.
            </li>
            <li>
              <strong>Veterinary teaching hospitals.</strong> Hospitals at
              AVMA-accredited US veterinary schools, and large exotic-pet
              referral practices, generally have ferret-experienced clinicians
              and the full range of diagnostics on site.
            </li>
            <li>
              <strong>American Ferret Association resources.</strong> The{' '}
              <a
                href="https://www.ferret-afa.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                American Ferret Association (ferret-afa.org)
              </a>{' '}
              is an owner-facing organization whose care resources and community
              can point you toward ferret-knowledgeable care in your region.
            </li>
          </ul>

          <CalloutBox variant="tip" title="Start with the directories, then verify locally">
            <p>
              Begin with the AEMV directory at aemv.org or the ABVP certified
              specialist search, then confirm fit with a phone call. A directory
              listing tells you a clinician works in exotic-mammal medicine; the
              phone call tells you whether this particular clinic is the right
              routine-care home for your ferret and how it handles emergencies.
            </p>
          </CalloutBox>

          <h2 id="questions">Questions to Ask a Prospective Clinic</h2>
          <p>
            When you make a first call to a candidate clinic, a few direct
            questions reveal most of what you need to know:
          </p>
          <ul>
            <li>
              <strong>How many ferrets do you see per week or month?</strong>{' '}
              Volume is the single best proxy for hands-on experience.
            </li>
            <li>
              <strong>Is there a designated exotic-mammal clinician,</strong> or
              do ferret cases get distributed across general staff? A named
              exotics vet is a strong signal.
            </li>
            <li>
              <strong>What diagnostics are available in-house?</strong>{' '}
              Ferret-experienced abdominal ultrasound and access to a
              ferret-comfortable surgical team matter for serious cases.
            </li>
            <li>
              <strong>What is the after-hours emergency path?</strong> Does the
              clinic handle emergencies itself, or does it refer to a specific
              emergency hospital? Get that referral name now, not later.
            </li>
            <li>
              <strong>Are you comfortable with ferret anesthesia and the common
              ferret diseases?</strong> A confident, specific answer about
              insulinoma, adrenal disease, and ferret anesthetic handling is
              reassuring; a vague one is informative too.
            </li>
          </ul>
          <p>
            A clinic that answers these clearly is a good candidate. A clinic
            that struggles with most of them can still do a vaccine in a pinch,
            but it probably should not be the primary-care home for a ferret you
            intend to keep into its senior years.
          </p>

          <h2 id="emergency">Emergency vs Routine Care</h2>
          <p>
            It helps to plan for two distinct kinds of care, because they are
            often delivered in different places.
          </p>
          <h3>Routine care</h3>
          <p>
            Routine care is preventive and predictable: annual wellness exams,
            vaccines, and age-appropriate screening bloodwork, all from your
            primary exotic-pet clinic. This is the relationship you build over
            time, and it is where your ferret&apos;s baseline records live. Our{' '}
            <a href="/health/vet-visit-prep">vet visit prep guide</a> covers what
            to bring and what to expect at these appointments.
          </p>
          <h3>Emergency care</h3>
          <p>
            Emergencies are time-critical and often happen outside normal hours.
            The ferret signs that should not wait — collapse, seizures, labored
            breathing, refusing to eat, straining, or pale gums — are covered in
            our <a href="/health/emergency-warning-signs">emergency warning
            signs guide</a>. Because many primary clinics are closed overnight,
            emergency care frequently means a separate emergency or referral
            hospital. Confirm in advance whether your routine clinic handles
            emergencies itself or refers out, and keep the emergency
            clinic&apos;s address and phone number somewhere instantly
            accessible.
          </p>

          <h2 id="before">Setting It Up Before a Crisis</h2>
          <p>
            The practical takeaway is to do this work while your ferret is
            healthy:
          </p>
          <ul>
            <li>
              <strong>Establish routine care at a wellness visit.</strong> A vet
              who has already examined your ferret has a baseline that makes the
              next visit — especially an urgent one — faster and more accurate.
            </li>
            <li>
              <strong>Identify the emergency option in advance.</strong> Know
              where you would go at 2 a.m. and how long it takes to get there
              before you are in that situation.
            </li>
            <li>
              <strong>Keep records portable.</strong> Vaccine certificates,
              prior bloodwork, and a current home weight make a new or emergency
              clinic&apos;s job much easier.
            </li>
            <li>
              <strong>Re-check as you move or your ferret ages.</strong> A clinic
              that was fine for a young, healthy ferret may not be the right fit
              once senior-ferret disease screening and possible surgery enter
              the picture.
            </li>
          </ul>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <h2 id="sources">Sources</h2>
          <ul>
            <li>
              Association of Exotic Mammal Veterinarians (AEMV) — practitioner
              member directory, <em>aemv.org</em>.
            </li>
            <li>
              American Board of Veterinary Practitioners (ABVP) — Exotic
              Companion Mammal diplomate directory.
            </li>
            <li>
              American Ferret Association (AFA) — owner-facing care resources,{' '}
              <em>ferret-afa.org</em>.
            </li>
            <li>
              Quesenberry KE, Carpenter JW (eds.). <em>Ferrets, Rabbits, and
              Rodents: Clinical Medicine and Surgery.</em> Saunders/Elsevier —
              preventive-care and disease chapters describe the ferret-specific
              clinical picture referenced here.
            </li>
            <li>
              American Animal Hospital Association (AAHA) — exotic-mammal
              preventive-care and life-stage guidance.
            </li>
          </ul>
          <p className="text-sm text-brand-text-light">
            Ferret.com does not operate a veterinary directory and does not
            verify, endorse, or rank individual clinics or veterinarians. This
            page is general guidance for finding ferret-capable care; confirm a
            clinic&apos;s experience and credentials directly with the clinic,
            and bring specific clinical questions to a veterinarian who has
            examined your ferret.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}

import type { Metadata } from 'next'
import {
  buildMetadata,
  ArticleLayout,
  EmailCapture,
  RelatedLinks,
  TableOfContents,
  FAQAccordion,
  CalloutBox,
  ArticleByline,
  DropCap,
} from '@carloOS/ui'
import {
  buildArticleSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Multi-Ferret Introductions — A Safe, Staged Protocol | Ferret.com',
  description:
    'How to introduce a new ferret to an existing one: quarantine, neutral-territory sessions, normal dominance, and when a pairing is not working.',
  path: '/behavior/multi-ferret-introductions',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Multi-Ferret Introductions',
  description:
    'A staged protocol for introducing ferrets to one another, covering quarantine, neutral-territory sessions, normal dominance behavior, and resource management.',
  url: 'https://ferret.com/behavior/multi-ferret-introductions',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://ferret.com/' },
    { name: 'Behavior', url: 'https://ferret.com/behavior' },
    { name: 'Multi-Ferret Introductions', url: 'https://ferret.com/behavior/multi-ferret-introductions' },
  ],
})

const FAQS = [
  {
    question: 'How long should I quarantine a new ferret before introductions?',
    answer:
      "Plan on a minimum of two weeks of separation — a separate cage, separate handling, and no shared toys — before any face-to-face introduction. ECE, influenza, and parasites can transmit between ferrets, and a healthy-looking new arrival can be shedding a pathogen without obvious symptoms. The quarantine confirms health status before you risk exposing your resident ferret.",
  },
  {
    question: 'Is neck-biting during introductions normal or a real fight?',
    answer:
      "Neck-grabbing, dragging, pinning, and loud vocalizing are normal ferret social negotiation and look far more violent than they are. Most of it resolves within days to weeks as the ferrets sort out their relationship. Intervene only for sustained attacks, drawn blood, continuous screaming, or one ferret that is clearly unable to escape — those cross from negotiation into a genuine problem.",
  },
  {
    question: 'Where should the first introduction happen?',
    answer:
      "On neutral territory that neither ferret has scent-marked — a bathtub, an unfamiliar room, or a clean play pen are all good choices. Introducing on the resident ferret's home turf triggers more territorial behavior. Keep the sessions short and closely supervised at first, and only move to shared cage time after several calm neutral-ground sessions.",
  },
  {
    question: 'What if the two ferrets never get along?',
    answer:
      "A small minority of ferrets — most often adults that have lived alone for years — never accept a cage-mate. Forcing it is unkind. The humane fall-back is separate cages with rotated out-of-cage time so each ferret still gets attention and exercise. This is not the ideal social setup, but it is a reasonable resolution after patient introductions have genuinely failed.",
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(articleSchema, breadcrumbSchema, faqSchema)

export default function MultiFerretIntroductionsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Multi-Ferret Introductions',
          subtitle:
            'Ferrets are social animals and most do better in pairs or small groups. But adding a ferret to your home is a staged process, not a one-day event: a quarantine period, neutral-ground meetings, and a tolerance for a startling amount of normal posturing. Rushed introductions are the ones that go wrong.',
          category: 'Ferret Behavior',
          authorName: 'Ferret.com Editorial',
          authorAvatar: '🦦',
          publishedAt: 'June 2026',
          readTime: '9 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Behavior', href: '/behavior' },
          { name: 'Multi-Ferret Introductions', href: '/behavior/multi-ferret-introductions' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'Why Ferrets Do Better in Pairs', href: '#why' },
                { label: 'Step 1: Quarantine', href: '#quarantine' },
                { label: 'Step 2: Adjacent Cages', href: '#adjacent' },
                { label: 'Step 3: Neutral-Ground Sessions', href: '#neutral' },
                { label: 'What Normal Posturing Looks Like', href: '#posturing' },
                { label: 'Step 4: Shared Cage & Resources', href: '#shared' },
                { label: 'When a Pairing Is Not Working', href: '#failing' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Training & Bonding', href: '/behavior/training-and-bonding' },
                { label: 'Litter Box Troubleshooting', href: '/behavior/litter-box-troubleshooting' },
                { label: 'Behavior Hub', href: '/behavior' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Care Notes"
              subtitle="Evidence-based ferret behavior, monthly."
              source="behavior-multi-ferret-intro"
            />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Behavior Hub', href: '/behavior' },
          { title: 'Introducing a Second Ferret', href: '/care/introducing-a-second-ferret' },
          { title: 'Stress Signs', href: '/behavior/stress-signs' },
          { title: 'Play Aggression', href: '/behavior/play-aggression' },
        ]}
>
        <div className="carloOS-article">
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-06-01"
          />

          <DropCap>
            Bringing a second ferret home is usually a good decision —
            ferrets are social and most are happier in company — but the
            introduction itself is where new owners panic. Two ferrets meeting
            for the first time will neck-bite, drag, pin, and shriek, and to an
            owner who does not know what normal looks like, it appears to be a
            fight to the death. It almost never is. This guide separates the
            normal negotiation from the genuine red flags and lays out a staged
            protocol that keeps both ferrets safe.
          </DropCap>

          <h2 id="why">Why Ferrets Do Better in Pairs</h2>
          <p>
            Ferrets are a social species. In their wild polecat ancestry,
            related individuals share dens and hunt cooperatively; in captivity
            this translates to mutual grooming, wrestling play, synchronized
            sleeping, and a reduced demand on the household for attention. A
            single ferret needs substantially more human interaction to stay
            well-adjusted, a theme covered in our{' '}
            <a href="/behavior/training-and-bonding">training and bonding guide</a>.
            For most owners, two ferrets is the better starting point.
          </p>

          <h2 id="quarantine">Step 1: Quarantine</h2>
          <p>
            Before any introduction, quarantine the new ferret for a minimum of
            two weeks — separate cage, separate handling, no shared toys. ECE
            (Epizootic Catarrhal Enteritis), influenza, and parasites all
            transmit between ferrets, and a new arrival that looks healthy can
            be shedding a pathogen subclinically. The quarantine protects your
            resident ferret&apos;s health before any social risk is taken.
          </p>

          <h2 id="adjacent">Step 2: Adjacent Cages</h2>
          <p>
            Once health status is confirmed, place the cages near each other for
            roughly two weeks so the ferrets can see and smell one another
            without contact. This lets a lot of the initial curiosity and
            agitation burn off before they ever touch, which makes the first
            physical meeting calmer.
          </p>

          <h2 id="neutral">Step 3: Neutral-Ground Sessions</h2>
          <p>
            The first physical introduction happens on neutral territory —
            somewhere neither ferret has scent-marked, such as a bathtub, an
            unfamiliar room, or a clean play pen. Home turf triggers
            territoriality; neutral ground reduces it. Keep the first sessions
            short and supervise closely, extending the time only as the meetings
            stay calm.
          </p>

          <h2 id="posturing">What Normal Posturing Looks Like</h2>
          <p>
            This is the part that frightens owners. Normal ferret introduction
            behavior includes:
          </p>
          <ul>
            <li>
              <strong>Neck-grabbing and dragging.</strong> The dominant ferret
              grips the other&apos;s scruff and hauls it around. Loud, dramatic,
              and usually harmless.
            </li>
            <li>
              <strong>Pinning.</strong> One ferret holds the other down. Part of
              establishing the relationship.
            </li>
            <li>
              <strong>Vocalizing.</strong> Hissing and screaming during scuffles
              sound alarming but are part of the negotiation.
            </li>
          </ul>
          <CalloutBox variant="warning" title="When to actually intervene">
            <p>
              Step in only for sustained one-sided attacks, drawn blood,
              continuous screaming that does not let up, or a ferret that cannot
              escape and is clearly in distress. Constant interruption of normal
              posturing actually prolongs the process — the ferrets need to be
              allowed to settle their relationship. Separate them, give a break,
              and try again later rather than letting a genuine fight continue.
            </p>
          </CalloutBox>

          <h2 id="shared">Step 4: Shared Cage and Resources</h2>
          <p>
            Move to shared cage time only after several calm neutral-ground
            sessions. Supervise the first overnight stay, and make sure the cage
            has two of every resource — litter boxes, food bowls, sleeping spots
            — so there is nothing to compete over. Resource scarcity reignites
            conflict that the introduction had otherwise resolved. For litter
            setup in a multi-ferret cage, see our{' '}
            <a href="/behavior/litter-box-troubleshooting">litter-box troubleshooting guide</a>.
          </p>

          <h3>Pairing rules of thumb</h3>
          <ul>
            <li>
              <strong>Same-sex or all-neutered.</strong> Intact opposite-sex
              pairs will breed, which carries serious health risk for jills.
              Almost all US pet-store ferrets are pre-altered, so this is rarely
              an issue, but confirm it for breeder ferrets.
            </li>
            <li>
              <strong>Personality matters more than age.</strong> A kit and an
              older ferret can pair beautifully or poorly; compatibility is about
              temperament, not the age gap.
            </li>
          </ul>

          <h2 id="failing">When a Pairing Is Not Working</h2>
          <p>
            A small number of ferrets — most often adults that have lived alone
            for years — never accept a cage-mate, and forcing the issue is
            unkind. If introductions have been patient and genuinely tried, the
            humane fall-back is separate cages with rotated out-of-cage time so
            each ferret still gets human attention and exercise. Also watch for a
            sudden breakdown in a previously bonded pair: aggression that appears
            out of nowhere in established cage-mates often has a medical driver,
            such as adrenal disease or dental pain, and warrants a veterinary
            exam rather than re-introduction.
          </p>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <h2 id="sources">Sources</h2>
          <ul>
            <li>
              Quesenberry KE, Carpenter JW (eds.). <em>Ferrets, Rabbits, and
              Rodents: Clinical Medicine and Surgery.</em> 4th ed.
              Saunders/Elsevier. Behavior chapter covers social structure and
              introduction approaches; infectious-disease chapters cover ECE and
              influenza.
            </li>
            <li>
              American Ferret Association (AFA) — owner-facing guidance on
              quarantine, introductions, and group housing.
            </li>
            <li>
              Association of Exotic Mammal Veterinarians (AEMV) — clinician
              resources on ferret social behavior and infectious disease.
            </li>
          </ul>
          <p className="text-sm text-brand-text-light">
            This page is general behavior information about ferrets, not
            individualized veterinary advice. Quarantine length and disease risk
            should be confirmed with a veterinarian familiar with ferrets, and
            sudden aggression in a bonded pair warrants an exam.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}

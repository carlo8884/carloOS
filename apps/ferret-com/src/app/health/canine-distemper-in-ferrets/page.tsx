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
  CrossPortfolioCard,
} from '@carloOS/ui'
import {
  buildArticleSchema,
  buildMedicalWebPageSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Canine Distemper in Ferrets — Nearly Always Fatal | Ferret.com',
  description:
    'Canine distemper is almost always fatal in unvaccinated ferrets and can reach indoor pets. How it spreads, the signs, and why vaccination is essential.',
  path: '/health/canine-distemper-in-ferrets',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Canine Distemper in Ferrets',
  description:
    'Canine distemper virus in domestic ferrets — transmission, clinical course, near-universal fatality in the unvaccinated, and the central role of vaccination.',
  url: 'https://ferret.com/health/canine-distemper-in-ferrets',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const medSchema = buildMedicalWebPageSchema({
  name: 'Canine Distemper in Ferrets',
  description:
    'Clinical reference on canine distemper virus in domestic ferrets, including transmission, signs, and prevention by vaccination.',
  url: 'https://ferret.com/health/canine-distemper-in-ferrets',
  authorName: 'Ferret.com Editorial',
  lastReviewed: '2026-06-01',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://ferret.com/' },
    { name: 'Ferret Health', url: 'https://ferret.com/health' },
    { name: 'Canine Distemper', url: 'https://ferret.com/health/canine-distemper-in-ferrets' },
  ],
})

const FAQS = [
  {
    question: 'Can my indoor-only ferret get canine distemper?',
    answer:
      "Yes. Canine distemper virus can be carried into the home on shoes, clothing, and hands after contact with an infected animal or contaminated environment. An indoor ferret that never meets another animal is still at risk, which is why vaccination is recommended even for strictly indoor ferrets. The virus does not respect a closed front door.",
  },
  {
    question: 'How fatal is canine distemper in ferrets?',
    answer:
      "In unvaccinated ferrets, canine distemper is considered nearly always fatal once clinical disease develops. This near-universal lethality is the central fact about the disease in this species and the reason the distemper vaccine is treated as essential rather than optional. There is no reliable cure; care for an affected ferret is supportive and the prognosis is grave.",
  },
  {
    question: 'How does distemper spread to ferrets?',
    answer:
      "The virus spreads mainly through respiratory secretions and aerosols from infected animals — typically dogs, but also wildlife such as raccoons, foxes, and skunks — and through contaminated objects and environments. Ferrets are highly susceptible, so even indirect exposure carried in on clothing or shoes can be enough.",
  },
  {
    question: 'What are the signs of distemper in a ferret?',
    answer:
      "Early signs include fever, loss of appetite, and a discharge from the eyes and nose. A characteristic chin and groin rash and thickening or cracking of the footpads often follow. As the virus reaches the nervous system, seizures and other neurologic signs appear. The course is rapid and the outlook is very poor in unvaccinated animals.",
  },
  {
    question: 'When should ferrets be vaccinated against distemper?',
    answer:
      "Kits typically receive a series of distemper vaccinations starting around 8 weeks of age, with additional doses several weeks apart, followed by booster vaccination on a schedule your veterinarian sets. Because ferrets can have vaccine reactions, distemper vaccination is given in a veterinary setting with monitoring afterward. See our vaccination schedule reference for the full timing.",
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(articleSchema, medSchema, breadcrumbSchema, faqSchema)

export default function FerretCanineDistemperPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Canine Distemper in Ferrets',
          subtitle:
            'Canine distemper is the single most important reason ferrets are vaccinated. In an unvaccinated ferret it is almost always fatal — and it can reach even a strictly indoor pet. This is preventable, and prevention is the whole story.',
          category: 'Ferret Health',
          authorName: 'Ferret.com Editorial',
          authorAvatar: '🦦',
          publishedAt: 'June 2026',
          readTime: '9 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Ferret Health', href: '/health' },
          { name: 'Canine Distemper', href: '/health/canine-distemper-in-ferrets' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'TL;DR', href: '#tldr' },
                { label: 'What the Virus Is', href: '#virus' },
                { label: 'How It Spreads', href: '#spread' },
                { label: 'Clinical Course', href: '#course' },
                { label: 'Diagnosis & Outlook', href: '#diagnosis' },
                { label: 'Prevention', href: '#prevention' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Vaccination Schedule', href: '/health/vaccinations' },
                { label: 'Ferret Influenza', href: '/health/ferret-influenza' },
                { label: 'Health Hub', href: '/health' },
              ]}
            />
            <CrossPortfolioCard currentSite="ferret-com" contentType="health" variant="sidebar" />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Health Notes"
              subtitle="Evidence-based ferret health, monthly."
              source="health-canine-distemper"
            />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Health Hub', href: '/health' },
          { title: 'Vaccinations', href: '/health/vaccinations' },
          { title: 'Emergency Warning Signs', href: '/health/emergency-warning-signs' },
          { title: 'Ferret Influenza', href: '/health/ferret-influenza' },
        ]}
>
        <div className="carloOS-article">
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-06-01"
          />

          <DropCap>
            Of all the diseases a ferret can face, canine distemper is the one
            that turns an experienced exotic-mammal veterinarian grim. It is
            highly contagious, it can reach a ferret that has never left the
            house, and in an unvaccinated animal it is, for practical purposes,
            a death sentence. There is essentially no upside to discuss — only
            the overwhelming case for prevention.
          </DropCap>

          <h2 id="tldr">TL;DR</h2>
          <p>
            Canine distemper virus (CDV) is almost always fatal in unvaccinated
            ferrets once clinical signs appear. It spreads through respiratory
            secretions and contaminated objects, and can reach even
            indoor-only ferrets via shoes, clothing, and hands. Signs progress
            from fever, eye and nose discharge, and a chin/groin rash to
            footpad thickening and finally neurologic disease. There is no
            reliable cure. Vaccination, started in kithood and boosted on a
            veterinary schedule, is the entire defense.
          </p>

          <h2 id="virus">What the Virus Is</h2>
          <p>
            Canine distemper virus is a morbillivirus — related to the measles
            virus — that infects dogs and a wide range of carnivores including
            wildlife such as raccoons, foxes, and skunks. Ferrets are among the
            most susceptible species known. The standard exotic-mammal
            references (Quesenberry &amp; Carpenter, <em>Ferrets, Rabbits, and
            Rodents</em>) describe near-universal mortality in unvaccinated
            ferrets that contract it, which is why the distemper vaccine is
            considered a core, non-negotiable vaccine for the species.
          </p>

          <h2 id="spread">How It Spreads</h2>
          <p>
            The virus is shed in respiratory secretions and spreads primarily
            by aerosol and direct contact between animals. Critically for
            ferret owners, it also travels on contaminated objects and
            surfaces — and on people. A person who has handled an infected dog
            or walked through a contaminated area can carry the virus home on
            hands, shoes, or clothing and expose a ferret that has never met
            another animal.
          </p>
          <CalloutBox variant="warning" title="Indoor does not mean protected">
            <p>
              The most dangerous misconception about distemper is that an
              indoor-only ferret is safe without vaccination. It is not. The
              virus can be carried indoors, and ferrets are exquisitely
              susceptible. Vaccination is recommended regardless of how
              isolated the ferret&apos;s life is.
            </p>
          </CalloutBox>

          <h2 id="course">Clinical Course</h2>
          <p>
            Distemper in ferrets typically unfolds in recognizable phases,
            though the speed and severity vary:
          </p>
          <ul>
            <li>
              <strong>Early.</strong> Fever, lethargy, loss of appetite, and a
              discharge from the eyes and nose. A characteristic rash often
              appears under the chin and in the groin.
            </li>
            <li>
              <strong>Cutaneous.</strong> The footpads thicken, harden, and may
              crack — the classic &quot;hard pad&quot; sign — and skin changes
              progress.
            </li>
            <li>
              <strong>Neurologic.</strong> As the virus invades the nervous
              system, seizures, tremors, and other neurologic signs develop.
              This phase carries the gravest outlook.
            </li>
          </ul>
          <p>
            The overall course is rapid, and in unvaccinated ferrets it
            characteristically ends in death despite supportive care.
          </p>

          <h2 id="diagnosis">Diagnosis and Outlook</h2>
          <p>
            Veterinarians diagnose distemper from the clinical picture combined
            with the vaccination history and confirmatory testing such as PCR on
            appropriate samples. Because the disease is so often fatal and there
            is no specific antiviral cure, treatment is supportive — fluids,
            nursing care, and management of complications — while the prognosis
            remains poor. This is the unusual disease where the most important
            clinical decision was made long before any symptom appeared: at the
            vaccine appointment.
          </p>
          <p>
            Distemper&apos;s early signs can overlap with other respiratory
            illnesses, including <a href="/health/ferret-influenza">ferret
            influenza</a>, but the two differ sharply in outcome — flu is
            usually mild and self-limiting, distemper is not. When a ferret is
            acutely ill, an exotic-mammal vet sorts this out; do not wait.
          </p>

          <h2 id="prevention">Prevention</h2>
          <p>
            Prevention is straightforward and effective: vaccinate. Kits receive
            a distemper vaccination series beginning around 8 weeks of age, with
            additional doses several weeks apart, followed by boosters on the
            schedule your veterinarian recommends. Because ferrets can
            experience vaccine reactions, distemper vaccines are given in a
            veterinary setting with a monitoring period afterward. The full
            timing, reaction signs, and premedication approach are covered in
            our <a href="/health/vaccinations">vaccination schedule</a>{' '}
            reference, and the broader health library lives at the{' '}
            <a href="/health">health hub</a>.
          </p>
          <CalloutBox variant="tip" title="Keep the vaccination record current">
            <p>
              Lapsed distemper boosters leave a gap in protection that the
              virus is unforgiving about. Keep your ferret&apos;s vaccination
              record up to date and confirm the next booster date at each
              annual exam.
            </p>
          </CalloutBox>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <h2 id="sources">Sources</h2>
          <ul>
            <li>
              Quesenberry KE, Carpenter JW (eds.). <em>Ferrets, Rabbits, and
              Rodents: Clinical Medicine and Surgery.</em> Saunders/Elsevier —
              ferret infectious disease chapter.
            </li>
            <li>
              <em>Veterinary Clinics of North America: Exotic Animal
              Practice</em> — reviews of ferret viral disease and vaccination.
            </li>
            <li>
              <em>Journal of Exotic Pet Medicine</em> — clinical reports on
              canine distemper in ferrets.
            </li>
            <li>
              American Ferret Association (AFA) — owner-facing distemper and
              vaccination guidance.
            </li>
          </ul>
          <p className="text-sm text-brand-text-light">
            This page is general clinical information about canine distemper in
            ferrets. It is not individualized veterinary advice. Vaccination
            scheduling and the management of a sick ferret are veterinary
            decisions and require a clinician familiar with ferrets — ideally an
            AEMV member or an ABVP diplomate in Exotic Companion Mammal
            practice.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}

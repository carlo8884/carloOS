import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbSchema, buildFAQSchema, combineSchemas, SchemaScript, EmailCapture, FAQAccordion, CrossPortfolioCard } from '@carloOS/ui'
import { HubHero } from '../../components/HubHero'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Health — Conditions, Vaccinations & Vet Prep | Ferret.com',
  description:
    'Ferret health references: insulinoma, adrenal disease, lymphoma, dental disease, aging care, vaccinations, and vet prep — exotic-mammal veterinary literature.',
  path: '/health',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://ferret.com/' },
    { name: 'Health', url: 'https://ferret.com/health' },
  ],
})

interface HealthCard {
  slug: string
  eyebrow: string
  title: string
  description: string
}

const HEALTH_CARDS: HealthCard[] = [
  {
    slug: 'insulinoma',
    eyebrow: 'Most common neoplasm',
    title: 'Insulinoma',
    description:
      'The most common middle-aged-ferret cancer. Fasting glucose thresholds, the prednisone–diazoxide–surgery treatment ladder, and emergency hypoglycemia response.',
  },
  {
    slug: 'adrenal-disease',
    eyebrow: 'Endocrine',
    title: 'Adrenal Disease',
    description:
      'Second most common middle-aged disease after insulinoma. Hormone-panel diagnosis, deslorelin (Suprelorin) implants, surgical adrenalectomy, and prognosis.',
  },
  {
    slug: 'lymphoma',
    eyebrow: 'Oncology',
    title: 'Lymphoma',
    description:
      'Juvenile and adult presentations with distinct prognoses. Diagnostic workup, multi-agent chemotherapy protocols, and realistic outcome ranges.',
  },
  {
    slug: 'dental-disease',
    eyebrow: 'Dentistry',
    title: 'Dental Disease',
    description:
      'Ferrets accumulate tartar fast and develop gingivitis by age 2–3. Daily brushing, annual scaling under anesthesia, and periodontal staging.',
  },
  {
    slug: 'aging-ferret-care',
    eyebrow: 'Senior ferrets (5+)',
    title: 'Aging Ferret Care',
    description:
      'Rising insulinoma and adrenal incidence, dental decline, weight loss, and arthritis. Quality-of-life monitoring and the euthanasia conversation.',
  },
  {
    slug: 'vaccinations',
    eyebrow: 'Preventive care',
    title: 'Vaccination Schedule',
    description:
      'Canine distemper kit series at 8, 11, and 14 weeks plus annual booster. Rabies at 12+ weeks plus annual. Reaction signs and premedication protocol.',
  },
  {
    slug: 'vet-visit-prep',
    eyebrow: 'Veterinary care',
    title: 'Vet Visit Prep',
    description:
      'Finding an exotic-mammal vet, carrier setup, what bloodwork to expect, fasting rules, and what to bring to an annual or sick visit.',
  },
  {
    slug: 'emergency-warning-signs',
    eyebrow: 'Urgent care',
    title: 'Emergency Warning Signs',
    description:
      'The ferret symptoms that can’t wait: collapse, seizures, labored breathing, not eating, straining, and pale gums — and what each can mean.',
  },
  {
    slug: 'gastrointestinal-blockage',
    eyebrow: 'Surgical emergency',
    title: 'GI Blockage',
    description:
      'Ferrets swallow rubber and foam, and their gut is narrow. Warning signs of obstruction, how it’s diagnosed, surgery, and ferret-proofing that prevents it.',
  },
  {
    slug: 'ferret-ulcers',
    eyebrow: 'Gastrointestinal',
    title: 'Stomach Ulcers',
    description:
      'Gastric ulcers tied to Helicobacter mustelae. Teeth-grinding, dark tarry stool, the diagnostic workup, and why ulcers rarely travel alone.',
  },
  {
    slug: 'heart-disease',
    eyebrow: 'Cardiology',
    title: 'Heart Disease',
    description:
      'Dilated cardiomyopathy is the most common ferret heart disease. Subtle early signs, echocardiogram diagnosis, management, and heartworm prevention.',
  },
  {
    slug: 'spaying-and-neutering',
    eyebrow: 'Reproductive',
    title: 'Spaying & Neutering',
    description:
      'Intact female ferrets risk fatal estrogen toxicity. The biology behind it, the early-spay-neuter and adrenal-disease debate, and descenting.',
  },
  {
    slug: 'anesthesia-and-surgery-risk',
    eyebrow: 'Perioperative care',
    title: 'Anesthesia & Surgery Risk',
    description:
      'Why ferret anesthesia is different: short fasting (insulinoma), blood-sugar and temperature control, monitoring, and choosing a ferret-experienced clinic.',
  },
  {
    slug: 'canine-distemper-in-ferrets',
    eyebrow: 'Infectious disease',
    title: 'Canine Distemper',
    description:
      'Almost always fatal in unvaccinated ferrets, and able to reach even indoor pets. How it spreads, the classic signs, and why vaccination is non-negotiable.',
  },
  {
    slug: 'ferret-influenza',
    eyebrow: 'Infectious disease',
    title: 'Ferret Influenza',
    description:
      'Ferrets catch human flu and can give it back. Signs, why ferrets are the classic flu model, supportive care, and protecting a ferret when you’re sick.',
  },
  {
    slug: 'ear-mites',
    eyebrow: 'Parasites',
    title: 'Ear Mites',
    description:
      'Otodectes cynotis is the most common ferret external parasite. Dark waxy debris, ear-swab diagnosis, and why the whole household is treated together.',
  },
  {
    slug: 'fleas-and-parasites',
    eyebrow: 'Parasites',
    title: 'Fleas & Parasites',
    description:
      'Fleas, mites, heartworm, and intestinal parasites. Why ferret size makes parasite control a precision job and every preventive is veterinarian-guided.',
  },
  {
    slug: 'signs-of-pain',
    eyebrow: 'Recognizing illness',
    title: 'Signs of Pain',
    description:
      'Ferrets hide pain by instinct. The behavioral and physical signs of a hurting ferret — teeth-grinding, hunched posture, appetite loss — and why analgesia is a vet decision.',
  },
  {
    slug: 'ferret-diarrhea-causes',
    eyebrow: 'Gastrointestinal',
    title: 'Diarrhea Causes',
    description:
      'From diet upset to ECE, ulcers, parasites, and obstruction. What stool color and consistency reveal, the fast dehydration risk, and when loose stool is an emergency.',
  },
  {
    slug: 'annual-checkup-guide',
    eyebrow: 'Preventive care',
    title: 'Annual Checkup Guide',
    description:
      'What a wellness exam covers and how often to go. Why ferrets over three need twice-yearly visits, the screening bloodwork, and how to prepare for the appointment.',
  },
]

// ItemList of the health condition guides — structured, citable index of the
// health cluster for AI Overviews / Perplexity (GEO authority signal).
const healthListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Ferret Health & Condition Guides at Ferret.com',
  numberOfItems: HEALTH_CARDS.length,
  itemListElement: HEALTH_CARDS.map((card, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: card.title,
    url: `https://ferret.com/health/${card.slug}`,
  })),
}

// FAQ entries are grounded strictly in facts already stated on this hub and its
// linked spoke pages — calibrated, no fabricated figures, deferring dosing and
// diagnosis to an exotic-mammal veterinarian.
const FAQS = [
  {
    question: 'What are the most common health problems in ferrets?',
    answer:
      'The two conditions exotic-mammal veterinarians see most often in middle-aged and older ferrets are insulinoma (a pancreatic beta-cell tumor) and adrenal disease, an endocrine disorder that is the second most common middle-aged disease after insulinoma. Lymphoma is the other frequently diagnosed cancer, and it appears in both juvenile and adult forms with distinct prognoses. Beyond neoplasia, ferrets are prone to dental disease, gastrointestinal blockage from swallowed rubber and foam, gastric ulcers tied to Helicobacter mustelae, and dilated cardiomyopathy. Each of these has a dedicated reference on this hub.',
  },
  {
    question: 'When is a ferret health problem an emergency?',
    answer:
      'Treat collapse, seizures, labored or open-mouth breathing, repeated straining to pass stool or urine, pale gums, and a refusal to eat as emergencies that warrant getting to a veterinary hospital — ideally one with exotic-mammal capability — rather than waiting at home. Ferrets have a fast metabolism and hide illness by instinct, so not eating and rapid decline can become dangerous within hours. Our emergency warning signs guide breaks down what each red-flag sign can mean.',
  },
  {
    question: 'How often should a ferret see a veterinarian?',
    answer:
      'Healthy adult ferrets are generally seen once a year, but ferrets over three are usually recommended for twice-yearly wellness visits because the incidence of insulinoma and adrenal disease rises sharply with age. Visits should be with a veterinarian who has exotic-mammal experience; a general-practice vet who does not treat ferrets cannot reliably interpret ferret bloodwork or run a hormone panel. Our annual checkup guide covers what a wellness exam screens for at each life stage.',
  },
  {
    question: 'Which ferret diseases are preventable with vaccination?',
    answer:
      'Canine distemper is almost always fatal in unvaccinated ferrets and can reach even strictly indoor pets, which is why the kit distemper series and annual booster are considered non-negotiable. Rabies vaccination is also part of the standard ferret schedule. These are preventive, not treatments — once clinical distemper appears, the outlook is grave. Our vaccination schedule reference covers the kit series timing, boosters, and reaction signs to watch for.',
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const schema = combineSchemas(breadcrumbSchema, healthListSchema, faqSchema)

export default function HealthHubPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      {/* Hero — image-first overlaid masthead (matches the homepage identity) */}
      <HubHero
        eyebrow="Health Reference"
        title="Ferret Health"
        intro="Evidence-based references on the conditions ferret owners encounter most often — from the two most common neoplasms to infectious disease, emergencies, surgery, parasites, preventive care, and aging. Citations from peer-reviewed exotic-mammal veterinary literature throughout."
        manifestKey="ferret-com:health-hero"
        imageAlt="Ferret health reference"
        cta={{ href: '/health/insulinoma', label: 'Start with insulinoma' }}
      />

      {/* Breadcrumb */}
      <nav
        style={{
          padding: '12px clamp(20px, 5vw, 80px)',
          fontSize: '0.8125rem',
          color: 'var(--brand-text-light)',
          background: 'var(--brand-surface)',
          borderBottom: '1px solid var(--brand-border)',
          display: 'flex',
          gap: '8px',
        }}
      >
        <Link href="/" className="amber-link" style={{ fontWeight: 600 }}>Home</Link>
        <span>›</span>
        <span style={{ color: 'var(--brand-text-mid)', fontWeight: 500 }}>Health</span>
      </nav>

      {/* Direct-answer / TL;DR block — extractable summary for search + AI surfaces */}
      <section
        style={{
          maxWidth: '1180px',
          margin: '0 auto',
          padding: 'clamp(32px, 5vw, 56px) clamp(20px, 5vw, 80px) 0',
        }}
      >
        <div
          style={{
            background: 'var(--brand-primary-pale)',
            border: '1px solid var(--brand-border)',
            borderLeft: '4px solid var(--brand-amber)',
            borderRadius: '12px',
            padding: 'clamp(20px, 3vw, 28px)',
          }}
        >
          <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--brand-amber-dark)', margin: '0 0 10px' }}>
            The short answer
          </p>
          <p style={{ fontSize: '1.0625rem', lineHeight: 1.6, color: 'var(--brand-text-dark)', margin: '0 0 12px' }}>
            The conditions ferret owners encounter most are{' '}
            <Link href="/health/insulinoma" className="amber-link" style={{ fontWeight: 600 }}>insulinoma</Link>{' '}
            and{' '}
            <Link href="/health/adrenal-disease" className="amber-link" style={{ fontWeight: 600 }}>adrenal disease</Link>,
            the two most common middle-aged diagnoses, followed by{' '}
            <Link href="/health/lymphoma" className="amber-link" style={{ fontWeight: 600 }}>lymphoma</Link>,
            dental disease, gastrointestinal blockage, and heart disease. Ferrets hide illness by instinct and
            decline fast, so the practical skill is <strong>knowing which signs can wait for a routine visit and
            which mean the same day</strong>. The single most important preventive step is{' '}
            <Link href="/health/vaccinations" className="amber-link" style={{ fontWeight: 600 }}>canine distemper vaccination</Link>,
            which is almost always life-or-death in an unvaccinated ferret.
          </p>
          <p style={{ fontSize: '0.875rem', lineHeight: 1.55, color: 'var(--brand-text-mid)', margin: 0 }}>
            These references do not replace veterinary consultation, and ferrets should be seen by a vet with
            exotic-mammal experience. If your general-practice vet does not treat ferrets, start with{' '}
            <Link href="/find-an-exotic-vet" className="amber-link" style={{ fontWeight: 600 }}>how to find an exotic-pet vet</Link>.
          </p>
        </div>

        {/* Urgency triage reference table — citation-magnet artifact */}
        <div style={{ marginTop: 'clamp(28px, 4vw, 40px)' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--brand-text-dark)', margin: '0 0 6px' }}>
            Ferret symptom urgency at a glance
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--brand-text-light)', margin: '0 0 18px', maxWidth: '660px' }}>
            A screening yardstick for how fast a sign needs veterinary attention, drawn from the conditions
            covered on this hub. It is a triage aid, not a diagnosis — when in doubt, call an exotic-mammal vet.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '0.9rem',
                background: 'var(--brand-white)',
                border: '1px solid var(--brand-border)',
                borderRadius: '12px',
                overflow: 'hidden',
              }}
            >
              <thead>
                <tr style={{ background: 'var(--brand-surface)', textAlign: 'left' }}>
                  <th style={{ padding: '12px 16px', borderBottom: '1px solid var(--brand-border)', fontWeight: 700 }}>Sign</th>
                  <th style={{ padding: '12px 16px', borderBottom: '1px solid var(--brand-border)', fontWeight: 700 }}>Urgency</th>
                  <th style={{ padding: '12px 16px', borderBottom: '1px solid var(--brand-border)', fontWeight: 700 }}>What it can point to</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--brand-border)', fontWeight: 600 }}>
                    Collapse, seizure, or unresponsiveness
                  </td>
                  <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--brand-border)', fontWeight: 700, color: 'var(--brand-amber-dark)' }}>Emergency — now</td>
                  <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--brand-border)', color: 'var(--brand-text-mid)' }}>
                    Hypoglycemic crisis (insulinoma), among other causes — see{' '}
                    <Link href="/health/emergency-warning-signs" className="amber-link" style={{ fontWeight: 600 }}>emergency warning signs</Link>.
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--brand-border)', fontWeight: 600 }}>
                    Repeated straining, no stool, pawing at mouth
                  </td>
                  <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--brand-border)', fontWeight: 700, color: 'var(--brand-amber-dark)' }}>Emergency — now</td>
                  <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--brand-border)', color: 'var(--brand-text-mid)' }}>
                    <Link href="/health/gastrointestinal-blockage" className="amber-link" style={{ fontWeight: 600 }}>GI blockage</Link>,
                    a surgical emergency in a narrow-gutted species.
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--brand-border)', fontWeight: 600 }}>
                    Not eating, rapid weight loss, lethargy
                  </td>
                  <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--brand-border)', fontWeight: 700, color: 'var(--brand-amber-dark)' }}>Same day</td>
                  <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--brand-border)', color: 'var(--brand-text-mid)' }}>
                    Many causes — ferrets dehydrate and decline fast; see{' '}
                    <Link href="/health/signs-of-pain" className="amber-link" style={{ fontWeight: 600 }}>signs of pain</Link>.
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--brand-border)', fontWeight: 600 }}>
                    Hair loss, swollen vulva, itchiness
                  </td>
                  <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--brand-border)', fontWeight: 700, color: 'var(--brand-text-mid)' }}>Schedule a visit</td>
                  <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--brand-border)', color: 'var(--brand-text-mid)' }}>
                    Classic signs of{' '}
                    <Link href="/health/adrenal-disease" className="amber-link" style={{ fontWeight: 600 }}>adrenal disease</Link>.
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '12px 16px', fontWeight: 600 }}>
                    Tartar, bad breath, reluctance to chew
                  </td>
                  <td style={{ padding: '12px 16px', fontWeight: 700, color: 'var(--brand-text-mid)' }}>Routine / annual</td>
                  <td style={{ padding: '12px 16px', color: 'var(--brand-text-mid)' }}>
                    <Link href="/health/dental-disease" className="amber-link" style={{ fontWeight: 600 }}>Dental disease</Link>,
                    addressed at the annual checkup.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--brand-text-light)', margin: '14px 0 0' }}>
            Urgency tiers summarize the linked references; an exotic-mammal veterinarian makes the actual call.
            See the full breakdown in{' '}
            <Link href="/health/emergency-warning-signs" className="amber-link" style={{ fontWeight: 600 }}>emergency warning signs</Link>.
          </p>
        </div>
      </section>

      {/* Cards */}
      <div
        style={{
          maxWidth: '1180px',
          margin: '0 auto',
          padding: 'clamp(40px, 6vw, 72px) clamp(20px, 5vw, 80px)',
        }}
      >
        <p
          style={{
            fontSize: '0.9375rem',
            color: 'var(--brand-text-light)',
            marginBottom: '40px',
            maxWidth: '680px',
            lineHeight: 1.65,
          }}
        >
          These reference pages do not replace veterinary consultation. Ferrets in the United States
          should be seen by a veterinarian with exotic-mammal experience. If your general-practice vet
          does not treat ferrets, our guide on{' '}
          <Link href="/find-an-exotic-vet" className="amber-link" style={{ fontWeight: 600 }}>
            how to find an exotic-pet vet
          </Link>{' '}
          walks through the directories to check and the questions to ask.
        </p>

        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {HEALTH_CARDS.map((card) => (
            <li key={card.slug}>
              <Link
                href={`/health/${card.slug}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  padding: '24px 22px',
                  background: 'var(--brand-white)',
                  border: '1px solid var(--brand-border)',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  color: 'inherit',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <span
                  aria-hidden
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '3px',
                    background: 'var(--brand-amber)',
                    opacity: 0.7,
                  }}
                />
                <div
                  style={{
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    letterSpacing: '0.13em',
                    textTransform: 'uppercase',
                    color: 'var(--brand-amber-dark)',
                    marginBottom: '8px',
                  }}
                >
                  {card.eyebrow}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: 'var(--brand-text-dark)',
                    marginBottom: '8px',
                    lineHeight: 1.2,
                  }}
                >
                  {card.title}
                </div>
                <p
                  style={{
                    fontSize: '0.9rem',
                    lineHeight: 1.55,
                    color: 'var(--brand-text-mid)',
                    margin: '0 0 14px',
                    flex: 1,
                  }}
                >
                  {card.description}
                </p>
                <span
                  style={{
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    color: 'var(--brand-primary)',
                  }}
                >
                  Read →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* FAQ — grounded in on-page facts; FAQPage schema is injected via the combined
          schema above, so includeSchema={false} avoids a duplicate JSON-LD block */}
      <section
        style={{
          maxWidth: '820px',
          margin: '0 auto',
          padding: '0 clamp(20px, 5vw, 80px) clamp(40px, 6vw, 72px)',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.6rem',
            fontWeight: 800,
            color: 'var(--brand-text-dark)',
            margin: '0 0 6px',
          }}
        >
          Ferret health: common questions
        </h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--brand-text-light)', margin: '0 0 22px' }}>
          Quick answers to the questions owners ask most. Each links into a deeper reference.
        </p>
        <FAQAccordion items={FAQS} includeSchema={false} />
      </section>

      {/* Email Capture */}
      <section
        style={{
          background: 'var(--brand-primary-pale)',
          borderTop: '1px solid var(--brand-border)',
          padding: 'clamp(40px, 6vw, 72px) clamp(20px, 5vw, 80px)',
        }}
      >
        <EmailCapture
          variant="section"
          siteId="ferret-com"
          title="The Ferret.com Health Reference"
          subtitle="New articles and updates on ferret health, diet, and care. Cited. No product pushes."
          ctaText="Subscribe"
          source="health-hub"
          perks={[
            'Evidence-based only',
            'Citation-anchored',
            'No paid placements',
            'Unsubscribe anytime',
          ]}
        />
      </section>

      <CrossPortfolioCard currentSite="ferret-com" contentType="health" variant="footer" />
    </>
  )
}

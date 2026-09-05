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
  ArticleSourcesList,
  StockImage,
  AffiliateDisclosure,
  ShopCtas,
} from '@carloOS/ui'

const SOURCES = [
  {
    label: "Quesenberry KE, Carpenter JW (eds.). Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery. 4th ed. Saunders/Elsevier — ferret infectious disease chapters covering CDV epidemiology and vaccine product history.",
    url: "https://www.elsevier.com/books/ferrets-rabbits-and-rodents/quesenberry/978-1-4160-6621-7",
    publisher: "Elsevier/Saunders",
  },
  {
    label: "Merck Veterinary Manual — Preventive Care of Ferrets: vaccination schedules, distemper and rabies products, and adverse-reaction management",
    url: "https://www.merckvetmanual.com/exotic-and-laboratory-animals/ferrets/routine-health-care-of-ferrets",
    publisher: "Merck Veterinary Manual",
  },
  {
    label: "Association of Exotic Mammal Veterinarians (AEMV) — ferret preventive-medicine and vaccination continuing-education materials",
    url: "https://aemv.org",
    publisher: "AEMV",
  },
  {
    label: "American Veterinary Medical Association (AVMA) — rabies vaccination compendium and guidance for ferrets as companion exotic species",
    url: "https://www.avma.org/resources-tools/pet-owners/petcare/ferrets",
    publisher: "AVMA",
  },
]
import {
  buildArticleSchema,
  buildMedicalWebPageSchema,
  buildFAQSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Vaccination Schedule — Distemper & Rabies | Ferret.com',
  description:
    'Ferret vaccination schedule: distemper kit series plus annual booster, rabies at 12+ weeks plus annual. Reaction signs, premedication, and legal notes.',
  path: '/health/vaccinations',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Ferret Vaccination Schedule',
  description:
    'Clinical reference for ferret vaccinations — canine distemper (CDV) and rabies — kit series timing, adult boosters, vaccine reactions, and jurisdictional requirements.',
  url: 'https://ferret.com/health/vaccinations',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-05-29T00:00:00Z',
  modifiedAt: '2026-09-05T00:00:00Z',
  speakable: true,

  citation: SOURCES,
})

const medSchema = buildMedicalWebPageSchema({
  name: 'Ferret Vaccination Schedule',
  description:
    'Clinical reference for ferret canine-distemper and rabies vaccination, including kit timing, annual boosters, and adverse-reaction management.',
  url: 'https://ferret.com/health/vaccinations',
  authorName: 'Ferret.com Editorial',
  lastReviewed: '2026-05-29',
})


const FAQS = [
  {
    question: 'What vaccines do ferrets need?',
    answer:
      "Two core vaccines: canine distemper virus (CDV) and rabies. Canine distemper is essentially 100% fatal in unvaccinated ferrets exposed to the virus. Rabies vaccination is required by law in most US states for any ferret over 12 weeks of age. No other vaccines are part of the standard ferret protocol — ferrets are not vaccinated for feline distemper (panleukopenia), canine parvo, or canine adenovirus.",
  },
  {
    question: 'When does a ferret kit get its first vaccines?',
    answer:
      "Standard kit protocol per the American Animal Hospital Association (AAHA) and exotic-pet veterinary references: canine distemper at approximately 8, 11, and 14 weeks of age (three doses), with the first rabies vaccine at 12-16 weeks. Both vaccines are then boosted annually for life. The three-shot distemper series ensures coverage despite waning maternal antibody interference.",
  },
  {
    question: 'Which vaccine products are approved for ferrets?',
    answer:
      "Only one canine distemper vaccine is currently USDA-licensed for ferrets in the US (Merck Nobivac Puppy-DPv, with the historic Purevax/Recombitek-based products discontinued or unavailable at various points). For rabies, IMRAB-3 (Boehringer Ingelheim, killed virus) is the long-standing USDA-licensed ferret rabies vaccine. Off-label canine distemper products are sometimes used when no licensed product is available; this is a vet conversation, not a DIY decision.",
  },
  {
    question: 'My ferret had a vaccine reaction — what should I do?',
    answer:
      "Ferret vaccine reactions are well-documented and not rare. Mild reactions (lethargy, mild fever for 24 hours) are common and resolve. Anaphylactic reactions — vomiting, severe diarrhea, collapse, pale gums — typically occur within 30-60 minutes of injection and require immediate emergency care. Many exotic-pet vets premedicate with diphenhydramine (Benadryl) before each vaccine in any ferret with a prior reaction history; in some cases, vaccines are split across separate visits.",
  },
  {
    question: 'Can I skip vaccinations if my ferret stays indoors?',
    answer:
      "Canine distemper is airborne and can be carried into the home on shoes, clothing, or by visiting dogs — indoor-only is not full protection. Rabies vaccination is a legal requirement in most US states regardless of indoor status; an unvaccinated ferret that bites a human can be required by local public health authorities to be euthanized for rabies testing. Skipping vaccines is not a sensible cost-saving measure in ferrets.",
  },
  {
    question: 'How often do adult ferrets need boosters?',
    answer:
      "Annual boosters for both canine distemper and rabies. Unlike some recent recommendations for dogs and cats moving toward three-year intervals, the licensed ferret vaccine products are labeled for one-year duration of immunity and the standard exotic-pet veterinary recommendation is annual boostering for life. Older ferrets with prior reaction histories may have an individualized schedule developed with their exotic-pet vet.",
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(articleSchema, medSchema, faqSchema)

export default function FerretVaccinationsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        contentType="health"
        hero={{
          title: 'Ferret Vaccination Schedule',
          subtitle:
            'Two vaccines matter for ferrets: canine distemper virus (CDV) and rabies. The first is a near-certain death sentence in unvaccinated exposed animals; the second is a legal requirement in most US states. Both have well-documented adverse-reaction profiles that change the practical protocol. Done right, ferret vaccination is straightforward; done casually, it is a real source of preventable harm.',
          category: 'Ferret Health',
          authorName: 'Ferret.com Editorial',
          publishedAt: 'May 2026',
          readTime: '11 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Ferret Health', href: '/health' },
          { name: 'Vaccinations', href: '/health/vaccinations' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'TL;DR', href: '#tldr' },
                { label: 'The Two Core Vaccines', href: '#core' },
                { label: 'Canine Distemper (CDV)', href: '#cdv' },
                { label: 'Rabies', href: '#rabies' },
                { label: 'Kit Schedule', href: '#kits' },
                { label: 'Adult Boosters', href: '#adults' },
                { label: 'Adverse Reactions', href: '#reactions' },
                { label: 'Premedication Protocol', href: '#premed' },
                { label: 'Legal and Travel', href: '#legal' },
                { label: 'Vaccine-day travel kit', href: '#kit' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Vet Visit Prep', href: '/health/vet-visit-prep' },
                { label: 'First-Year Schedule', href: '/first-year-schedule' },
                { label: 'Aging Ferret Care', href: '/health/aging-ferret-care' },
              ]}
            />
            <CrossPortfolioCard currentSite="ferret-com" contentType="health" variant="sidebar" />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Health Notes"
              subtitle="Evidence-based ferret health, monthly."
              source="health-vaccinations"
            />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Health Hub', href: '/health' },
          { title: 'Annual Checkup Guide', href: '/health/annual-checkup-guide' },
          { title: 'Vet Visit Prep', href: '/health/vet-visit-prep' },
          { title: 'Canine Distemper in Ferrets', href: '/health/canine-distemper-in-ferrets' },
        ]}
>
        <div className="carloOS-article">
          <StockImage
            manifestKey="ferret-com:health-vaccinations"
            alt="A ferret during a routine veterinary health visit — preventive care reference"
            aspect="16:9"
            variant="inline"
            subtleCredit
          />
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-05-29"
            updatedAt="2026-09-05"
            reviewedBy="Editorial team"
          />

          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the ferret vaccine-day travel-kit checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Ferret vaccine-day travel-kit checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the clinic-trip notes — a small-animal rabies-certificate
              holder so the signed rabies certificate and CVI travel with the
              ferret, a top-loading small-animal carrier for the kit-series
              clinic hops and the ride straight home, and a fleece small-animal
              bonding pouch so the 30–60 minute in-clinic observation and the
              quiet ride home stay contained. Educational travel-kit checklist,
              not a diagnosis and not a substitute for an exotic-mammal
              veterinarian. Vaccines, Nobivac, IMRAB, diphenhydramine, and
              compounded meds stay off this list. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="ferret-com"
              title="Ferret vaccine-day travel-kit checklist"
              subtitle="Email the rabies-certificate-holder, top-loading-carrier, and bonding-pouch notes. No spam."
              ctaText="Email my ferret vaccine-day travel-kit checklist"
              source="health-vaccinations-under-hero"
            />
          </div>

          <DropCap>
            Ferret vaccination is one of the small number of preventive
            care steps with a clear and large effect on outcomes. The
            disease being prevented in the case of canine distemper has
            essentially no survivors; the disease being prevented in the
            case of rabies has a legal regime around it that becomes the
            owner&apos;s problem the moment an unvaccinated ferret bites a
            human. Both are inexpensive, both have well-understood adverse
            reaction profiles, and both warrant doing on schedule.
          </DropCap>

          <h2 id="tldr">TL;DR</h2>
          <p>
            Ferrets need two vaccines: canine distemper virus (CDV) and
            rabies. Kit series: CDV at approximately 8, 11, and 14 weeks;
            rabies at 12-16 weeks. Annual boosters for life. Use the
            USDA-licensed ferret products (IMRAB-3 for rabies; an
            appropriate CDV product per current availability and your
            exotic-pet vet&apos;s judgment). Vaccine reactions are not
            rare and the response protocol — observe in clinic 30-60
            minutes, premedicate at-risk ferrets, separate the two
            vaccines into different visits when needed — is a vet
            conversation worth having explicitly.
          </p>

          <h2 id="core">The Two Core Vaccines</h2>
          <p>
            Ferret vaccination, despite its reputation for being
            complicated, is genuinely a two-vaccine protocol. Both
            vaccines target diseases that are functionally untreatable
            once contracted; both are USDA-licensed (with one or more
            products) specifically for ferrets.
          </p>
          <ul>
            <li>
              <strong>Canine distemper virus (CDV).</strong> Highly
              contagious morbillivirus. In ferrets, infection is
              essentially 100% fatal. Vaccine is the only meaningful
              prevention.
            </li>
            <li>
              <strong>Rabies.</strong> Universally fatal once symptomatic.
              Required by law in most US states for ferrets over 12 weeks
              of age. Required by the USDA APHIS for any interstate or
              international ferret travel.
            </li>
          </ul>
          <p>
            Ferrets are not part of the standard combination-shot regimen
            for dogs or cats. They are not vaccinated against feline
            panleukopenia, canine parvovirus, canine adenovirus, or
            leptospirosis as part of any standard ferret protocol. A
            "5-in-1" or "7-in-1" combination product is not appropriate
            for a ferret and should not be used.
          </p>

          <h2 id="cdv">Canine Distemper Virus (CDV)</h2>
          <p>
            CDV is a morbillivirus closely related to measles and rinderpest.
            It is contagious by aerosol, direct contact, and fomite
            (contaminated clothing, shoes, dog bowls). Ferrets are
            extremely susceptible — the AVMA and exotic-pet veterinary
            references describe near-universal fatality in unvaccinated
            ferrets following exposure.
          </p>
          <p>
            Clinical course in an unvaccinated ferret is typically 10-21
            days from exposure to death and includes fever, hyperkeratosis
            of the footpads and chin, mucopurulent ocular and nasal
            discharge, anorexia, and neurological signs (seizures,
            paresis). There is no treatment; supportive care can prolong
            comfort but does not change the outcome.
          </p>
          <p>
            <strong>Vaccine products.</strong> Historically the
            USDA-licensed ferret product was a recombinant canarypox-
            vectored vaccine (Purevax/Recombitek). Product availability
            has changed multiple times in the past decade as licensure
            and manufacturing have shifted. The currently widely-used
            product in US exotic-pet practice is Merck Nobivac Puppy-DPv
            or a similar single-strain modified-live product, administered
            off-label or under specific manufacturer guidance. The
            specific product is a vet decision based on current
            availability and the individual ferret&apos;s reaction history.
          </p>

          <h2 id="rabies">Rabies</h2>
          <p>
            Rabies in ferrets is uncommon but documented. The greater
            practical issue for most owners is the legal regime around
            rabies: under US public-health law, an unvaccinated ferret
            that bites a human can be required by the local health
            authority to be euthanized so the brain can be tested for
            rabies virus. A current rabies vaccination dramatically
            simplifies the post-bite quarantine process.
          </p>
          <p>
            <strong>Vaccine product.</strong> IMRAB-3 (Boehringer
            Ingelheim) is the long-standing USDA-licensed ferret rabies
            vaccine. It is a killed-virus product and is labeled for
            annual administration in ferrets. The label and the AAHA
            ferret vaccination guidance both call for annual
            re-vaccination; the duration-of-immunity studies supporting
            longer intervals in dogs and cats do not extend to the
            ferret label.
          </p>
          <p>
            <strong>Timing.</strong> First rabies vaccine at 12-16 weeks
            of age, then annually for life. The first dose can be given
            at the same visit as the third CDV dose if the ferret has not
            had prior reactions; many vets prefer to separate the doses
            by 2-4 weeks to keep adverse-reaction attribution clean.
          </p>

          <h2 id="kits">Kit Vaccination Schedule</h2>
          <p>
            Standard kit schedule, broadly aligned across exotic-pet
            veterinary references:
          </p>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-surface border-b border-brand-border">
                  <th className="text-left p-3 font-semibold">Age</th>
                  <th className="text-left p-3 font-semibold">Vaccine</th>
                  <th className="text-left p-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brand-border">
                  <td className="p-3 font-medium">~8 weeks</td>
                  <td className="p-3">CDV #1</td>
                  <td className="p-3">First dose of the three-shot distemper series</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="p-3 font-medium">~11 weeks</td>
                  <td className="p-3">CDV #2</td>
                  <td className="p-3">Three-week interval from CDV #1</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="p-3 font-medium">~14 weeks</td>
                  <td className="p-3">CDV #3</td>
                  <td className="p-3">Series completion; protective immunity considered established</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">~12-16 weeks</td>
                  <td className="p-3">Rabies #1</td>
                  <td className="p-3">Often at a separate visit from the final CDV booster</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            The three-dose CDV series is needed because maternal antibody
            from the queen interferes with vaccine response in young
            kits. The interfering antibody declines over the first 12-16
            weeks; spacing three doses across this window ensures that at
            least one dose is given after maternal antibody has fallen
            below the interference threshold.
          </p>

          <h2 id="adults">Adult Boosters</h2>
          <p>
            Annual CDV and annual rabies for life. Adult ferrets with no
            reaction history can have both vaccines at the same annual
            visit. Owners with ferrets in the senior years (5+) sometimes
            ask whether to continue annual vaccines; the standard
            exotic-pet veterinary answer is yes, continue, because the
            consequences of an unprotected exposure are catastrophic and
            the marginal risk of a vaccine reaction in an otherwise-
            healthy senior ferret is low.
          </p>
          <p>
            Ferrets with a documented vaccine reaction history may have
            an individualized schedule — different products, longer
            intervals, premedication, or in rare cases a vet decision to
            forgo CDV vaccination while continuing rabies for legal
            compliance. These decisions belong to the prescribing vet,
            not to the owner alone.
          </p>

          <h2 id="reactions">Vaccine Reactions</h2>
          <p>
            Adverse vaccine reactions in ferrets are well-described in
            the exotic-pet veterinary literature, in JAVMA case series,
            and in AAHA practice guidance. The published rates vary by
            study but are higher than the equivalent dog and cat rates —
            roughly 1-5% of ferrets show some reaction, with a smaller
            fraction experiencing serious anaphylaxis.
          </p>
          <h3>Mild reactions</h3>
          <ul>
            <li>Lethargy and reduced appetite for 12-24 hours.</li>
            <li>Mild fever for 12-24 hours.</li>
            <li>Soreness or transient swelling at the injection site.</li>
          </ul>
          <p>
            These are unpleasant but self-limiting. Supportive care at
            home — quiet environment, encourage hydration, light meals —
            is sufficient.
          </p>
          <h3>Anaphylactic reactions</h3>
          <ul>
            <li>Vomiting, often projectile, within 5-60 minutes of injection.</li>
            <li>Severe diarrhea, often bloody.</li>
            <li>Collapse, pale or muddy gums, weakness, hypotension.</li>
            <li>Facial swelling, urticaria.</li>
            <li>In severe cases, shock and death without rapid intervention.</li>
          </ul>
          <p>
            Anaphylaxis is a medical emergency. The standard exotic-pet
            response is immediate epinephrine, intravenous fluids,
            corticosteroids, and supportive care. This is the reason
            ferrets should be observed in the veterinary clinic for at
            least 30-60 minutes after each vaccine — not in the car on
            the way home.
          </p>

          <CalloutBox variant="warning" title="Anaphylaxis is a medical emergency">
            <p>
              Vomiting, diarrhea, collapse, or pale gums within the first
              hour after a vaccine appointment are not a wait-and-see
              event. Return to the veterinary clinic immediately or go
              directly to an exotic-pet-capable emergency hospital.
              Rapid intervention is consistently the difference between
              full recovery and a fatal outcome.
            </p>
          </CalloutBox>

          <h2 id="premed">Premedication Protocol</h2>
          <p>
            For ferrets with a prior reaction history, or sometimes as a
            general precaution in vets practicing in regions where ferret
            reactions are commonly seen, a premedication protocol is
            standard:
          </p>
          <ul>
            <li>
              <strong>Diphenhydramine (Benadryl)</strong> given orally or
              by injection 20-30 minutes before vaccination. Dosing is a
              vet decision — do not extrapolate dog or human doses.
            </li>
            <li>
              <strong>Separation of vaccines.</strong> CDV and rabies
              given at separate visits 2-4 weeks apart. This both
              reduces total antigenic load at any one visit and clarifies
              attribution if a reaction occurs.
            </li>
            <li>
              <strong>Post-vaccine clinic observation</strong> of 30-60
              minutes regardless of premedication status.
            </li>
            <li>
              <strong>Owner-side preparedness.</strong> Travel directly
              from vet to home, with a clear plan and the emergency
              clinic phone number known in advance, for the rest of
              vaccine day.
            </li>
          </ul>

          <h2 id="legal">Legal and Travel Considerations</h2>
          <p>
            Rabies vaccination of ferrets is required by law in most US
            states for any ferret over 12 weeks of age. Some local
            jurisdictions have stricter requirements. The compliance
            documentation is a state-recognized rabies vaccination
            certificate signed by the administering veterinarian.
          </p>
          <p>
            Interstate travel within the US generally requires a current
            rabies certificate and, in some states, a Certificate of
            Veterinary Inspection (CVI / health certificate) issued
            within a recent window before travel. A small-animal rabies
            certificate holder keeps that signed certificate — and the
            CVI when a state asks for one — with the ferret instead of
            loose in a glove box. International travel requirements vary
            by destination country and almost always require advance
            planning — USDA APHIS is the authoritative source for
            current export requirements.
          </p>
          <p>
            Kit-series days are repeated clinic trips (roughly 8, 11,
            and 14 weeks, plus a separate rabies visit). A top-loading
            small-animal carrier is the clinic-trip box for those hops
            and for the ride straight home after the 30–60 minute
            in-clinic observation — not a loose ferret on a lap, and
            not a leftover dog airline crate. A fleece small-animal
            bonding pouch is the quiet wrap for that observation wait
            and the contained ride home after a mild reaction, when
            the page already calls for a quiet environment and no
            extra antigenic load in the car.
          </p>
          <p>
            A few US jurisdictions — California, Hawaii, New York City,
            and Washington DC, among others — prohibit ferret ownership
            entirely or have restrictions that affect veterinary practice.
            Check current state and municipal law before any cross-state
            move with a ferret.
          </p>

          <CalloutBox variant="tip" title="Find an exotic-animal-experienced vet">
            <p>
              Ferret vaccination protocols, premedication decisions, and
              reaction management all depend on a clinician who sees
              ferrets routinely. General-practice small-animal vets vary
              widely in ferret experience. The Association of Exotic
              Mammal Veterinarians (AEMV) maintains a practitioner
              directory; the American Board of Veterinary Practitioners
              (ABVP) certifies clinicians in Exotic Companion Mammal
              practice. Either is a useful starting point for finding
              ongoing ferret care.
            </p>
          </CalloutBox>

          <h2 id="kit">Vaccine-day travel kit</h2>
          <p>
            Everyday physical supplies that match the clinic-trip, legal-
            certificate, and post-vaccine observation copy on this page —
            a small-animal rabies-certificate holder so the signed rabies
            certificate and CVI stay with the ferret for interstate or
            local compliance checks, a top-loading small-animal carrier
            so kit-series clinic hops and the ride straight home stay
            contained, and a fleece small-animal bonding pouch so the
            30–60 minute in-clinic observation and the quiet ride home
            after a mild reaction stay wrapped, not loose on a lap.
            These are household travel tools, not treatments. They do
            not vaccinate a ferret, they do not replace a USDA-licensed
            product chosen by a veterinarian, they do not set a
            premedication dose, and they are not a ranked product list.
            Pet vaccination record books, pet medical-records binders,
            ferret hard-sided carriers, soft pet carriers, soft-sided
            vet-visit carriers, ferret sleep sacks, foldable waterproof
            puppy mats, and dog seat-belt tethers already live on other
            pages. This page does not hop vaccines, Nobivac, IMRAB,
            diphenhydramine, insulin syringes, compounded meds, or Rx
            ASINs. This page does not hop diagnosis kits that imply
            treatment. This page does not claim hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="ferret-com" />

          {/* Money path — live amazon-brand search hops
              (small-animal rabies-certificate holder /
              top-loading small-animal carrier /
              fleece small-animal bonding pouch).
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Category searches only —
              unused vs #1066 carnivore-care / baby-food /
              silicone dosing syringe, #1065 hay-box /
              stall-guard / hemp-bedding, #1064
              thrush-antiseptic / folding-hoof-pick /
              stall-sweet-lime, ferret dental
              finger-toothbrush / infant-toothbrush /
              dental-wipes, seasonal slicker / metal-comb /
              lint-roller, pet+vaccination+record+book,
              pet+medical+records+binder,
              ferret+carrier+hard+sided, soft+pet+carrier,
              soft+sided+vet+visit+carrier,
              ferret+sleep+sack+fleece,
              foldable+waterproof+puppy+mat,
              dog+seat+belt+tether,
              pet+glucometer / light+corn+syrup,
              pet+oral+feeding+syringe.
              Vaccines, Nobivac, IMRAB, diphenhydramine,
              insulin syringes, and Rx ASINs are not
              shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the ferret vaccine-day travel kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page clinic-trip, rabies-certificate, and
              observation-wait copy — a small-animal rabies-
              certificate holder, a top-loading small-animal
              carrier, and a fleece small-animal bonding
              pouch. Everyday physical supplies only. They
              are not a ranked product list, they are not a
              vaccine hop, they are not a Nobivac / IMRAB /
              diphenhydramine hop, they are not a #1066
              carnivore-care / baby-food / silicone-dosing-
              syringe hop, and they do not replace an
              exotic-mammal veterinarian. Ferret.com earns
              a commission on qualifying purchases at no
              extra cost to you. Empty Chewy buttons stay
              hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/small+animal+rabies+certificate+holder?s=health-vaccinations"
                amazonLabel="Browse small-animal rabies-certificate holders on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/top+loading+small+animal+carrier?s=health-vaccinations"
                amazonLabel="Browse top-loading small-animal carriers on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/fleece+small+animal+bonding+pouch?s=health-vaccinations"
                amazonLabel="Browse fleece small-animal bonding pouches on Amazon →"
              />
            </div>
          </div>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <ArticleSourcesList sources={SOURCES} />
          <p className="text-sm text-brand-text-light">
            This page is general clinical information about ferret
            vaccination. Specific product choices, dosing, premedication
            decisions, and emergency response are individualized
            veterinary decisions and require evaluation by a clinician
            familiar with the individual ferret. Always consult your
            exotic-pet vet before changing a vaccination schedule.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}

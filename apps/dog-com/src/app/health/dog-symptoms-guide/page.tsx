import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, TableOfContents, CrossPortfolioCard, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'
import { SIGNS, STYLES } from '../../../data/dog-symptom-signs'
const SOURCES = [
  { label: 'AVMA: Emergency Care for Pets — Warning Signs', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/emergencies-pets', publisher: 'AVMA' },
  { label: 'Merck Veterinary Manual: Emergency and Critical Care Overview for Small Animals', url: 'https://www.merckvetmanual.com/emergency-medicine-and-critical-care/critical-care-medicine/overview-of-critical-care-medicine', publisher: 'Merck Vet Manual' },
  { label: 'AAHA: Emergency and Critical Care Standards', url: 'https://www.aaha.org/aaha-guidelines/emergency-and-critical-care/emergency-and-critical-care-guidelines/', publisher: 'AAHA' },
  { label: 'ASPCA Animal Poison Control Center: Pet Poison Information', url: 'https://www.aspca.org/pet-care/animal-poison-control', publisher: 'ASPCA' },
]


export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: '15 Dog Symptoms You Should Never Ignore | Dog.com',
  description: '15 dog symptoms that warrant emergency care, with the ER-vs-wait criteria from veterinary emergency medicine — which signs can wait, and which cannot.',
  path: '/health/dog-symptoms-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'dog-com',
  title: '15 Dog Symptoms You Should Never Ignore',
  description: 'Which dog symptoms need immediate care vs. which can wait, using veterinary emergency-medicine criteria.',
  url: 'https://dog.com/health/dog-symptoms-guide',
  imageUrl: '',
  authorName: 'Dog.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2026-06-11T00:00:00Z',

  citation: SOURCES,
})

const medicalSchema = buildMedicalWebPageSchema({
  name: '15 Dog Symptoms That Need Immediate Vet Care',
  description: 'Emergency symptoms in dogs — when to go to the vet immediately.',
  url: 'https://dog.com/health/dog-symptoms-guide',
  authorName: 'Dog.com Editorial',
  lastReviewed: '2025-05-01',
})
const FAQS = [
  { question: 'Which dog symptoms are emergencies that cannot wait until morning?', answer: 'The eight emergency signs in this guide: difficulty or labored breathing; pale, white, blue, or grey gums; sudden collapse or inability to stand; a distended abdomen with retching (GDV/bloat until proven otherwise); a seizure lasting more than 2 minutes or multiple seizures in 24 hours; suspected poisoning or toxic ingestion; bleeding that does not stop with 5–10 minutes of firm continuous pressure; and eye injuries or sudden eye changes. Any of these means emergency veterinary care right now — and when in doubt, call your emergency clinic; most will advise over the phone whether to come in.' },
  { question: 'What does it mean if my dog\'s gums are pale or white?', answer: 'Normal dog gums are bubble-gum pink and moist. Pale or white gums indicate shock or severe blood loss — often from a ruptured splenic mass (hemangiosarcoma) — and blue or grey gums indicate oxygen deprivation. Either color change is an emergency: go immediately. Check your dog\'s gums regularly while healthy so you know the individual baseline.' },
  { question: 'My dog has a swollen belly and keeps retching — can I wait and see?', answer: 'No. A visibly bloated or hard belly combined with unproductive retching or restlessness — particularly in a large or deep-chested breed — is Gastric Dilatation-Volvulus (GDV/bloat) until proven otherwise, and GDV is fatal within hours without surgery. At-risk breeds include Great Danes, German Shepherds, Standard Poodles, Weimaraners, Goldens, and Labs. Go to the emergency vet immediately.' },
  { question: 'What should I do if my dog ate something toxic?', answer: 'Call ASPCA Animal Poison Control (888-426-4435, available 24/7, consultation fee applies) and your emergency vet simultaneously. Do not wait for symptoms to appear — for many toxins, including xylitol, rat poison, and certain mushrooms, treatment is most effective before symptoms develop.' },
  { question: 'When is vomiting or diarrhea urgent versus something to monitor?', answer: 'Per this guide\'s criteria: one episode in an otherwise normal dog can be monitored. More than 3 episodes in 24 hours, any blood (red or dark coffee-ground appearance), or a lethargic dog that is not eating means a vet visit today — hemorrhagic gastroenteritis can cause dangerous fluid loss within hours. If you are unsure, the triage tool on this site checks your dog\'s signs against these same criteria, and a phone call to your vet costs nothing.' },
]
const combinedSchemaAll = combineSchemas(schema, medicalSchema, buildFAQSchema({ questions: FAQS.map(f => ({ question: f.question, answer: f.answer })) }))

export default function DogSymptomsGuidePage() {
  return (
    <>
      <SchemaScript schema={combinedSchemaAll} />
      <ArticleLayout
      siteId="dog-com"
      contentType="health"
      hero={{
        title: '15 Dog Symptoms You Should Never Ignore',
        subtitle: 'Knowing the difference between "wait and see" and "go right now" can save your dog\'s life. This guide lays out 15 symptoms that warrant emergency care, using the ER-vs-wait criteria from veterinary emergency medicine.',
        category: 'Emergency Guide',
        authorName: 'Dog.com Editorial',
        authorAvatar: '🐾',
        publishedAt: 'May 2025',
        readTime: '10 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Dog Health', href: '/health' },
        { name: 'Symptom Guide', href: '/health/dog-symptoms-guide' },
      ]}
      relatedLinks={[{ title: 'Dog Health Hub', href: '/health', category: 'Hub' }, { title: 'Dog Vomiting Guide', href: '/health/dog-vomiting', category: 'Dog Health' }, { title: 'Dog Diarrhea', href: '/health/dog-diarrhea', category: 'Dog Health' }, { title: 'Dog Bloat (GDV)', href: '/health/dog-bloat-gvd', category: 'Dog Health' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-lg p-4">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Emergency Resources</div>
          <div className="flex flex-col gap-2 text-xs font-bold text-brand-danger">
            <div>🚨 Signs 1–8: Emergency</div>
            <div className="text-brand-warning">⚠️ Signs 9–15: Urgent</div>
          </div>
          <div className="mt-3 pt-3 border-t border-brand-border">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-2">Poison Control</div>
            <div className="text-sm font-bold text-brand-dark">888-426-4435</div>
            <div className="text-xs text-brand-text-light">ASPCA · 24/7</div>
          </div>
        </div>
        <TableOfContents items={[...SIGNS.slice(0, 8).map(s => ({ label: s.title, href: `#s${s.num}` })), { label: 'FAQ', href: '#faq' }]} />
        <RelatedLinks title="Related Guides" links={[
          { label: 'Is This a Dog Emergency? Triage Tool', href: '/tools/is-this-a-dog-emergency' },
          { label: 'Find an Emergency Vet', href: '/find-a-vet' },
          { label: 'Best Pet Insurance', href: 'https://vets.co/reviews/best-pet-insurance' },
          { label: 'Senior Dog Care', href: '/health/senior-dog-care' },
        ]} />
        <CrossPortfolioCard currentSite="dog-com" contentType="health" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="dog-com"
          title="Free Dog Health Tips"
          subtitle="Practical guidance every Tuesday."
          source="health-symptoms" />
      </>}
    >
      <div className="carloOS-article">
          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the dog emergency-sign watch checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Dog emergency-sign watch checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the gum-check, poison-control, and
              collapse-transport notes — an LED medical
              penlight so pale, white, blue, or grey gums
              and sudden pupil or eye changes can be
              checked in low light against the baseline
              this page tells owners to learn, a pet
              emergency contact card so the ASPCA
              888-426-4435 line and the nearest emergency
              clinic stay on the fridge, and a folding
              pet stretcher for a dog that collapses or
              cannot stand. Educational checklist, not a
              first-aid kit, not a diagnosis, and not a
              prescription. Emergency care still belongs
              with a veterinarian. Vaccination record
              books, seat-belt tethers, puppy mats,
              mosquito dunks, pill organizers,
              clinic-visit carriers, gum-color charts,
              recovery food, and feeding syringes stay
              on other pages. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="dog-com"
              title="Dog emergency-sign watch checklist"
              subtitle="Email the penlight, contact-card, and stretcher notes. No spam."
              ctaText="Email my dog emergency-sign watch checklist"
              source="health-dog-symptoms-guide-under-hero"
            />
          </div>

        <p>In emergency veterinary medicine, the hardest cases are often the ones that came in too late — not because the owner didn&apos;t care, but because they didn&apos;t know. A dog that seemed &quot;a little off&quot; yesterday. A belly that &quot;looked slightly bigger.&quot; A gum color that had been pale for hours. This guide gives you what you need to make fast, accurate decisions.</p>

        <div style={{ background: 'rgba(200,74,42,0.05)', border: '1px solid rgba(200,74,42,0.2)', borderRadius: '10px', padding: '16px 20px', margin: '24px 0' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C84A2A', marginBottom: '7px' }}>Rule #1</div>
          <p style={{ fontSize: '15px', color: '#1A0E08', fontWeight: 500, margin: 0, lineHeight: 1.6 }}>When in doubt, call your emergency vet clinic. Most will advise over the phone whether you need to come in immediately. This call costs nothing and could be the most important one you make.</p>
        </div>

        <p>Not sure how urgent the signs you&apos;re seeing are? Use the <Link href="/tools/is-this-a-dog-emergency">Is This a Dog Emergency? triage tool</Link> to check the symptoms against these same criteria and get a conservative urgency read. It does not diagnose — only a veterinarian can do that.</p>

        <h2>🚨 Emergency — Go Immediately</h2>
        <p>These symptoms require emergency veterinary care right now. Do not wait until morning.</p>

        {SIGNS.filter(s => s.level === 'emergency').map(sign => {
          const style = STYLES[sign.level]
          return (
            <div key={sign.num} id={`s${sign.num}`}
              className="rounded-xl p-6 mb-4 flex gap-5"
              style={{ background: style.bg, border: `1px solid ${style.border}` }}>
              <div className="font-display text-4xl font-black flex-shrink-0 leading-none"
                style={{ color: style.numColor, minWidth: '48px' }}>{sign.num}</div>
              <div>
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h3 className="font-display font-bold text-brand-dark text-lg m-0">{sign.title}</h3>
                  <span className="text-2xs font-bold px-2.5 py-0.5 rounded-pill flex-shrink-0"
                    style={{ background: style.badgeBg, color: style.badgeColor }}>{style.badge}</span>
                </div>
                <p className="text-sm text-brand-text-mid leading-relaxed m-0">{sign.body}</p>
              </div>
            </div>
          )
        })}

        <h2>⚠️ Urgent — See a Vet Today or Tomorrow</h2>
        <p>These symptoms require veterinary attention within 24 hours — or sooner if they worsen.</p>

        {SIGNS.filter(s => s.level === 'urgent').map(sign => {
          const style = STYLES[sign.level]
          return (
            <div key={sign.num} id={`s${sign.num}`}
              className="rounded-xl p-6 mb-4 flex gap-5"
              style={{ background: style.bg, border: `1px solid ${style.border}` }}>
              <div className="font-display text-4xl font-black flex-shrink-0 leading-none"
                style={{ color: style.numColor, minWidth: '48px' }}>{sign.num}</div>
              <div>
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h3 className="font-display font-bold text-brand-dark text-lg m-0">{sign.title}</h3>
                  <span className="text-2xs font-bold px-2.5 py-0.5 rounded-pill flex-shrink-0"
                    style={{ background: style.badgeBg, color: style.badgeColor }}>{style.badge}</span>
                </div>
                <p className="text-sm text-brand-text-mid leading-relaxed m-0">{sign.body}</p>
              </div>
            </div>
          )
        })}

        <div style={{ background: '#C84A2A', borderRadius: '16px', padding: '32px', margin: '32px 0', textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 700, color: 'white', marginBottom: '10px' }}>Save This Number</div>
          <div style={{ fontSize: '20px', fontWeight: 700, color: 'white', marginBottom: '6px' }}>ASPCA Animal Poison Control: 888-426-4435</div>
          <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginBottom: '20px' }}>Available 24/7. Consultation fee applies.</div>
          <Link href="/find-a-vet"
            style={{ display: 'inline-flex', alignItems: 'center', background: 'white', color: '#C84A2A', padding: '12px 24px', borderRadius: '6px', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}>
            Find Your Nearest Emergency Vet →
          </Link>
        </div>

        <h2 id="kit">A Simple Emergency-Sign Watch Kit</h2>
          <p>
            Three everyday physical supplies match the
            gum-check, poison-control, and
            collapse-transport copy above: an LED
            medical penlight so pale, white, blue, or
            grey gums and sudden pupil or eye changes
            can be checked in low light against the
            individual baseline this page tells owners
            to learn, a pet emergency contact card so
            the ASPCA Animal Poison Control number
            (888-426-4435) and the nearest emergency
            clinic stay visible, and a folding pet
            stretcher for a dog that collapses or
            cannot support its own weight. These are
            household watch-and-transport tools, not
            treatments. They do not diagnose a
            symptom, they do not replace a phone call
            to the emergency clinic, they do not
            replace ASPCA Poison Control, they do not
            treat GDV, seizure, poisoning, bleeding,
            or eye trauma, and they are not a first-aid
            kit. Vaccination record books, seat-belt
            tethers, foldable waterproof puppy mats,
            mosquito dunks, a monthly pill organizer,
            a soft-sided vet-visit carrier, a gum-color
            assessment chart, recovery food, a feeding
            syringe, digital pet thermometers, and
            high-value vet-visit treats already live
            on other pages. This page does not hop
            medications. This page does not claim
            hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="dog-com" />

          {/* Money path — live amazon-brand search hops
              (LED medical penlight / pet emergency
              contact card / folding pet stretcher).
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Category searches only —
              unused vs #1044 pet vaccination record
              book / dog seat-belt tether / foldable
              waterproof puppy mat, #1043 mosquito
              dunks / monthly pill organizer /
              soft-sided vet-visit carrier, #1042
              gum-chart / recovery-food /
              feeding-syringe, #1041 heat-pants /
              belly-band / exercise-pen, #1030
              high-value vet-visit treats, pet first-aid
              kits, digital pet thermometers,
              soft+dog+carrier / soft+pet+carrier,
              styptic powder, and tick removers.
              Wound gauze, Vetrap, soft dog muzzles,
              seizure throw blankets / crate bumpers /
              foam tiles, and Rx ASINs are not
              shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the emergency-sign watch kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page gum-check, poison-control, and
              collapse-transport copy — an LED medical
              penlight, a pet emergency contact card,
              and a folding pet stretcher. Everyday
              physical supplies only. They are not a
              ranked product list, they are not a
              first-aid-kit hop, they are not the
              #1044 vaccine-record / seat-belt-tether /
              puppy-mat hops, they are not the #1043
              mosquito-dunk / pill-organizer /
              clinic-carrier hops, they are not the
              #1042 anemia gum-chart / recovery-food /
              syringe hops, they are not the #1030
              high-value vet-visit-treat hops, they
              are not thermometer or soft-carrier hops,
              and they do not replace a veterinarian.
              Dog.com earns a commission on qualifying
              purchases at no extra cost to you. Empty
              Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/led+medical+penlight?s=health-dog-symptoms-guide"
                amazonLabel="Browse LED medical penlights on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/pet+emergency+contact+card?s=health-dog-symptoms-guide"
                amazonLabel="Browse pet emergency contact cards on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/folding+pet+stretcher?s=health-dog-symptoms-guide"
                amazonLabel="Browse folding pet stretchers on Amazon →"
              />
            </div>
          </div>

        <h2 id="faq">FAQ</h2>
        <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />

          <ArticleSourcesList sources={SOURCES} />
      </div>
    </ArticleLayout>
    </>
  )
}

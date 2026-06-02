import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  EmailCapture,
  FAQAccordion,
  buildArticleSchema,
  buildFAQSchema,
  buildHowToSchema,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: 'Free 12-Point Saddle Fit Checklist | Saddle.com',
  description:
    'Free printable 12-point saddle fit checklist for try-on appointments. Plus an 8-email course on fit science, fitter vs self-check, and brand-fit.',
  path: '/saddle-fit-checklist',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'saddle-com',
  title: 'Free 12-Point Saddle Fit Checklist',
  description:
    'A printable 12-point saddle fit checklist for try-on appointments, plus an 8-email course on saddle-fit science and decision-making.',
  url: 'https://saddle.com/saddle-fit-checklist',
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-05-28T00:00:00Z',
  modifiedAt: '2026-05-28T00:00:00Z',
})

const howToSchema = buildHowToSchema({
  name: 'The 12-Point Saddle Fit Check',
  description:
    'A reference protocol for evaluating saddle fit on a static horse and at light work, used during try-on appointments and routine fit checks.',
  url: 'https://saddle.com/saddle-fit-checklist',
  totalTime: 'PT45M',
  steps: [
    { name: 'Wither clearance', text: 'Saddle girthed to working tension on a bare back. Look for 2–3 fingers of vertical clearance maintained the full length of the wither (SMS reference).' },
    { name: 'Panel contact, left', text: 'Flat hand front-to-rear under the left panel. Even resistance throughout — bridging (easy middle) and rocking (firm middle) are the common failures.' },
    { name: 'Panel contact, right', text: 'Repeat on the right. Asymmetry between sides is a flag for uneven flocking or asymmetric musculature.' },
    { name: 'Channel width', text: 'Gullet viewed from behind with a rider mounted. At least three fingers wide; daylight visible through the channel under load.' },
    { name: 'Tree angle at the points', text: 'Tree points behind the shoulder should follow the scapula angle. Pinched points produce shoulder restriction at trot.' },
    { name: 'Balance point', text: 'Deepest seat point level or marginally lower than the pommel; cantle slightly higher than the pommel — never lower.' },
    { name: 'Billet alignment', text: 'Billets hang perpendicular to the ground at the natural girth groove. Forward-pulling billets mean the saddle is seeking the groove.' },
    { name: 'Sweat pattern after light work', text: 'Walk and trot 10 minutes. Even sweat = even contact; dry patches = pressure points (Belock & Kaiser 2012, Equine Vet J).' },
    { name: 'Stirrup hang', text: 'Stirrup leather vertical under a balanced rider. Forward-pulled leather usually signals a chair seat (balance issue).' },
    { name: 'Gullet plate angle', text: 'For adjustable systems (Wintec, Bates) the gullet plate angle must match the shoulder angle — confirmed by the fitter.' },
    { name: 'Rocker / curve match', text: 'Panel curve matches the horse’s natural back curve. Mismatch produces bridging or rocking under load.' },
    { name: 'Dynamic-fit + post-ride hair check', text: 'Ruffled or broken hairs and white-hair patches read as pressure history. Combined with the sweat pattern, this is the post-ride record.' },
  ],
})

const FAQS = [
  { question: 'What exactly do I get when I sign up?', answer: 'A printable one-page 12-point saddle fit checklist plus an 8-email course covering the research behind it, when to call a credentialed fitter, used vs new buying, brand-fit personality, and how often to re-fit.' },
  { question: 'My saddle slips left (or right) — what does that mean?', answer: 'Saddle slip is a fit issue, not a girthing one. Causes are usually asymmetric panel pressure pushing the saddle to the looser side, or horse asymmetry. SMS field assessments cite slip as a primary indicator of poor fit. Tightening the girth almost never fixes it.' },
  { question: 'My horse hollows or dips during the fitting — is that normal?', answer: 'A horse that dips its back, pins its ears, or steps away during saddle placement is communicating discomfort. SMS fitters treat this as a diagnostic finding. Pause, check for prior fit damage (white hairs, muscle atrophy behind the shoulder), and discuss with the fitter.' },
  { question: 'Used vs new — is fit different?', answer: 'A used saddle’s panels are already shaped to the previous horse. Re-flocking can restore them; a hardened, asymmetric panel may not be salvageable. The checklist applies, plus an inspection protocol for tree integrity, billet wear, and panel symmetry. Deeper: /guides/used-saddle-buying-guide.' },
  { question: 'My friend has a brand-X that fits her horse — will it fit mine?', answer: 'No assumption holds. Two horses of similar build can have different wither shape, shoulder angle, and back curve. Brand-fit personality is real but is a starting point for which saddles to try, not a guarantee.' },
  { question: 'English vs Western — does fit work the same way?', answer: 'Same principles (clearance, even contact, balance, no spinal pressure), different structure. Western trees use bars instead of panels — bar angle and bar spread are the equivalents of tree angle and channel width. Email 06 covers discipline differences.' },
  { question: 'When should I re-flock vs replace?', answer: 'Re-flocking ($150–$400) restores compressed wool panels and corrects mild asymmetry. It cannot fix a tree that is the wrong width or angle. Replacement is correct after major topline change, broken-tree damage, or when the saddle was never the right tree. Email 05 covers the economics.' },
  { question: 'How often will you email me?', answer: 'Eight emails over ~90 days, then at most one email per week thereafter (often less). Unsubscribe is one click in every email. We do not sell or rent your address.' },
]

const faqSchema = buildFAQSchema({ questions: FAQS })
const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://saddle.com/' },
    { name: 'Saddle Fit Checklist', url: 'https://saddle.com/saddle-fit-checklist' },
  ],
})
const allSchemas = combineSchemas(articleSchema, faqSchema, howToSchema, breadcrumbSchema)

const TWELVE_POINTS = [
  { n: '1', point: 'Wither clearance', detail: '2–3 fingers vertical clearance, full length of the wither (SMS reference).' },
  { n: '2', point: 'Panel contact — left', detail: 'Even, consistent resistance front-to-rear under girthed tension.' },
  { n: '3', point: 'Panel contact — right', detail: 'Same evenness on the right. Asymmetry is a flag, not a verdict.' },
  { n: '4', point: 'Channel width (gullet)', detail: 'At least 3 fingers wide; daylight through the gullet with a rider mounted.' },
  { n: '5', point: 'Tree angle at the points', detail: 'Tree points behind the shoulder follow the scapula angle.' },
  { n: '6', point: 'Balance point', detail: 'Deepest seat point level or just below the pommel; cantle slightly higher than pommel.' },
  { n: '7', point: 'Billet alignment', detail: 'Billets hang perpendicular to the ground at the natural girth groove.' },
  { n: '8', point: 'Sweat pattern after light work', detail: 'Even sweat = even contact. Dry patches = pressure points.' },
  { n: '9', point: 'Stirrup hang', detail: 'Leather hangs vertical under a balanced rider.' },
  { n: '10', point: 'Gullet plate angle', detail: 'For adjustable systems (Wintec, Bates) — confirmed by fitter.' },
  { n: '11', point: 'Rocker / curve match', detail: 'Panel curve matches the horse’s natural back curve.' },
  { n: '12', point: 'Dynamic-fit + post-ride hair check', detail: 'Ruffled / broken / white hairs read as pressure history.' },
]

export default function SaddleFitChecklistPage() {
  return (
    <>
      <SchemaScript schema={allSchemas} />

      {/* HERO */}
      <section className="bg-brand-dark px-container-sm sm:px-container py-section">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-6 h-0.5 bg-brand-primary" />
              <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Free Download · Riders &amp; Buyers</span>
            </div>
            <h1
              className="font-display font-black text-white tracking-tighter leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(36px, 5.5vw, 66px)' }}
            >
              Free 12-Point<br />
              <span className="text-brand-primary">Saddle Fit Checklist.</span>
            </h1>
            <p className="text-lg font-light text-white/65 leading-relaxed max-w-xl mb-6">
              Bring it to your next try-on appointment. The twelve points a Society of Master
              Saddlers fitter works through, written in plain language so you can follow along
              and document the result.
            </p>
            <p className="text-sm text-white/55 leading-relaxed max-w-xl mb-8">
              Pairs with our full <Link href="/guides/saddle-fit-guide" className="text-brand-primary hover:underline">Saddle Fit Guide</Link> —
              the checklist is the field tool; the guide is the reference.
            </p>
            <ul className="text-sm text-white/70 space-y-2 mb-10 max-w-md">
              <li className="flex items-start gap-3"><span className="text-brand-primary">✓</span><span>One-page printable for try-on appointments</span></li>
              <li className="flex items-start gap-3"><span className="text-brand-primary">✓</span><span>8 emails over ~90 days — fit science, fitter vs self-check, brand fit, re-flock vs replace</span></li>
              <li className="flex items-start gap-3"><span className="text-brand-primary">✓</span><span>Grounded in SMS / MSA standards and peer-reviewed pressure-mapping research</span></li>
              <li className="flex items-start gap-3"><span className="text-brand-primary">✓</span><span>Free. One-click unsubscribe in every email.</span></li>
            </ul>
          </div>

          <div className="lg:pl-4">
            <div className="bg-white rounded-xl p-7 shadow-card-hover">
              <div className="mb-5">
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Step 1 of 1</div>
                <div className="font-display font-bold text-brand-dark text-xl leading-tight">
                  Get the checklist + 8-email fit course
                </div>
              </div>
              <EmailCapture
                variant="inline"
                siteId="saddle-com"
                title=""
                ctaText="Send me the checklist →"
                placeholder="your@email.com"
                source="saddle-fit-checklist"
              />
              <p className="text-2xs text-brand-text-light mt-4 leading-relaxed">
                We&apos;ll email the checklist immediately and start the course shortly after.
                See our <Link href="/legal/privacy-policy" className="text-brand-primary hover:underline">Privacy Policy</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TWELVE POINTS PREVIEW */}
      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-content mx-auto">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">What&apos;s on the checklist</span>
          </div>
          <h2 className="font-display font-bold text-brand-dark text-3xl tracking-tight mb-3">
            The 12 points, in the order a fitter works through them
          </h2>
          <p className="text-base text-brand-text-mid max-w-2xl leading-relaxed mb-10">
            The printable PDF (sent by email) adds tick-boxes for each point, a sketch of the
            horse&apos;s back to mark sweat observations, and a notes column for the fitter&apos;s read.
          </p>

          <div className="bg-white border border-brand-border rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-brand-primary-pale">
                <tr>
                  <th className="text-left p-4 font-display font-bold text-brand-dark w-16">#</th>
                  <th className="text-left p-4 font-display font-bold text-brand-dark w-64">Point</th>
                  <th className="text-left p-4 font-display font-bold text-brand-dark">What you&apos;re checking for</th>
                </tr>
              </thead>
              <tbody>
                {TWELVE_POINTS.map((p) => (
                  <tr key={p.n} className="border-t border-brand-border">
                    <td className="p-4 font-display font-bold text-brand-primary text-lg">{p.n}</td>
                    <td className="p-4 text-brand-dark font-semibold">{p.point}</td>
                    <td className="p-4 text-brand-text-mid leading-relaxed">{p.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-brand-text-light mt-5">
            Reference values follow the Society of Master Saddlers (SMS) field assessment
            protocol and the Master Saddlers Association (MSA) certification curriculum.
          </p>
        </div>
      </section>

      {/* WHY FIT MATTERS */}
      <section className="bg-white px-container-sm sm:px-container py-section">
        <div className="max-w-content mx-auto">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Why fit matters</span>
          </div>
          <h2 className="font-display font-bold text-brand-dark text-3xl tracking-tight mb-5">
            What the pressure-mapping research shows
          </h2>
          <div className="max-w-2xl text-brand-text-mid leading-relaxed space-y-4 text-base">
            <p>
              Pressure-mapping studies using electronic saddle pads (Pliance, Tekscan) repeatedly
              show that visibly well-fitting saddles can still produce localised peak pressures
              above the capillary-occlusion threshold (commonly cited around 30 kPa for sustained
              contact). Dry patches in the post-ride sweat pattern are reliable surface evidence
              of those peak pressures (Belock &amp; Kaiser 2012, <em>Equine Veterinary Journal</em>;
              von Peinen et al. 2010, EVJ supplement).
            </p>
            <p>
              The behavioural consequences of chronic poor fit are well documented: cinching and
              girthing objections, bucking at canter departures, sourness during tacking, refusal
              to stand for mounting, and stiffness on one rein. The AAEP and SMS both recommend
              fit assessment as the first step before behavioural intervention when these signs
              appear.
            </p>
          </div>
        </div>
      </section>

      {/* WHEN TO CALL A FITTER */}
      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-content mx-auto">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Self-check vs. fitter</span>
          </div>
          <h2 className="font-display font-bold text-brand-dark text-3xl tracking-tight mb-5">
            When you can self-check, and when you can&apos;t
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-brand-border rounded-lg p-6">
              <h3 className="font-display font-bold text-brand-dark text-lg mb-3">Self-check is fine for</h3>
              <ul className="text-sm text-brand-text-mid space-y-2 leading-relaxed">
                <li>· Routine between-fitter checks (every 4–8 weeks)</li>
                <li>· Sweat-pattern reading after rides</li>
                <li>· Catching the early signs that say &quot;book a fitter&quot;</li>
                <li>· Confirming a known-good saddle is still positioned correctly</li>
              </ul>
            </div>
            <div className="bg-white border border-brand-border rounded-lg p-6">
              <h3 className="font-display font-bold text-brand-dark text-lg mb-3">Call a credentialed fitter for</h3>
              <ul className="text-sm text-brand-text-mid space-y-2 leading-relaxed">
                <li>· Any new horse — before its first ride in your saddle</li>
                <li>· Any new (to you) saddle — before regular use</li>
                <li>· Any meaningful change in the horse&apos;s topline or condition</li>
                <li>· New behavioural signs (cinching, bucking, sourness, refusal)</li>
                <li>· Re-flocking or panel adjustments — always</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-brand-text-mid leading-relaxed mt-8 max-w-3xl">
            A credentialed fitter — typically a Society of Master Saddlers Qualified Saddle Fitter
            (SMS QSF) in the UK or a Master Saddlers Association Certified Saddle Fitter (MSA CSF)
            in North America — completes a multi-year curriculum covering anatomy, tree mechanics,
            and supervised field hours. The SMS public directory is at mastersaddlers.co.uk; the
            MSA directory at mastersaddlersassoc.com.
          </p>
        </div>
      </section>

      {/* SECOND CAPTURE */}
      <section className="bg-brand-primary-pale border-y border-brand-border px-container-sm sm:px-container py-section">
        <div className="max-w-content mx-auto text-center">
          <h2 className="font-display font-bold text-brand-dark text-3xl tracking-tight mb-3">
            Get the printable checklist + the email course
          </h2>
          <p className="text-base text-brand-text-mid leading-relaxed mb-7 max-w-xl mx-auto">
            One signup. Checklist in your inbox immediately. Eight emails over ~90 days, then
            roughly weekly. Unsubscribe any time.
          </p>
          <div className="max-w-md mx-auto">
            <EmailCapture
              variant="inline"
              siteId="saddle-com"
              title=""
              ctaText="Send me the checklist →"
              source="saddle-fit-checklist-midpage"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-container-sm sm:px-container py-section">
        <div className="max-w-content mx-auto">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">FAQ</span>
          </div>
          <h2 className="font-display font-bold text-brand-dark text-3xl tracking-tight mb-8">
            What riders actually ask
          </h2>
          <FAQAccordion items={FAQS} />

          <div className="mt-12 pt-8 border-t border-brand-border text-sm text-brand-text-mid">
            <p className="mb-2">Saddle-fit reference on Saddle.com:</p>
            <ul className="space-y-1.5">
              <li><Link href="/guides/saddle-fit-guide" className="text-brand-primary hover:underline">Full saddle fit guide (the 4-point reference)</Link></li>
              <li><Link href="/guides/seat-size-guide" className="text-brand-primary hover:underline">Seat size guide — the rider half of fit</Link></li>
              <li><Link href="/guides/used-saddle-buying-guide" className="text-brand-primary hover:underline">Buying a used saddle — inspection protocol</Link></li>
              <li><Link href="/reviews/best-english-saddles" className="text-brand-primary hover:underline">Best English saddles — by horse build</Link></li>
              <li><Link href="/reviews/best-western-saddles" className="text-brand-primary hover:underline">Best Western saddles — by discipline</Link></li>
            </ul>
          </div>

          <p className="text-xs text-brand-text-light mt-8 max-w-3xl leading-relaxed">
            Sources cited on this page and in the email course: Society of Master Saddlers (SMS)
            field assessment protocol; Master Saddlers Association (MSA) certification curriculum;
            Belock B. &amp; Kaiser L. (2012), Equine Veterinary Journal; von Peinen K. et al.
            (2010), EVJ supplement; American Association of Equine Practitioners (AAEP) position
            statements; Equine Sports Science Journal / Journal of Equine Veterinary Science
            saddle-fit pressure-mapping reviews.
          </p>
        </div>
      </section>
    </>
  )
}

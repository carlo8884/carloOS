import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, FAQAccordion, buildBreadcrumbSchema } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Free Pet Emergency Triage Card — When to ER | Vets.co',
  description: 'Wallet + fridge card: when a pet symptom is ER-immediate, same-day, or monitor-at-home. Species vitals, first-aid kit list, free 8-email course.',
  path: '/emergency-triage-card',
  type: 'article',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://vets.co/' },
    { name: 'Emergency Triage Card', url: 'https://vets.co/emergency-triage-card' },
  ],
})


const articleSchema = buildArticleSchema({
  siteId: 'vets-co',
  title: 'Free Pet Emergency Triage Card',
  description: 'A printable wallet + fridge card with species-specific vital sign ranges, ER-vs-monitor triage categories, and a first-aid kit list. Free plus an 8-email triage course.',
  url: 'https://vets.co/emergency-triage-card',
  imageUrl: '',
  authorName: 'Vets.co Editorial',
  publishedAt: '2026-05-28T00:00:00Z',
  modifiedAt: '2026-05-28T00:00:00Z',
})

const FAQS = [
  {
    question: 'What exactly do I get when I sign up?',
    answer: 'A printable Pet Emergency Triage Card sized to fold into a wallet, plus a larger US-Letter fridge version. It lists species-specific normal vital sign ranges for dogs, cats, ferrets, and rabbits, plus three triage categories: ER NOW, same-day vet, monitor-at-home. You also get an 8-email course over roughly three months.',
  },
  {
    question: 'Is this a substitute for calling my vet?',
    answer: 'No. It is a triage aid. If you are unsure whether a symptom is an emergency, call your primary vet or the nearest 24-hour ER. The card is built from published guidance (AVMA, AAHA, VECCS) to help you make a faster, more informed call — not to replace one.',
  },
  {
    question: 'Why include a "when NOT to ER" section?',
    answer: 'The most common ER mistake among owners is going in for something that did not require it, paying $400–$1,200, and depleting the budget needed for the next real emergency. Knowing the difference saves money and keeps your emergency fund available.',
  },
  {
    question: 'Where do the vital sign ranges come from?',
    answer: 'Dog and cat ranges are drawn from VECCS and standard small-animal internal-medicine references (Ettinger; Plumb). Ferret and rabbit ranges come from exotic-animal references (Carpenter; Quesenberry & Carpenter). The card lists normal ranges, not hard cutoffs — your vet may use a tighter range for your individual pet.',
  },
  {
    question: 'How often will you email me?',
    answer: 'Eight emails over roughly three months — immediate, then +3 days, +7d, +14d, +21d, +35d, +56d, +90d. Occasional updates after that. Unsubscribe is one click in every email.',
  },
  {
    question: 'Are there affiliate links?',
    answer: 'Some emails reference products we have evaluated (first-aid kit components, pet-insurance providers); a small number of those links earn commission at no cost to you, disclosed in line. The triage card itself contains no affiliate content.',
  },
  {
    question: 'Does this work for puppies and kittens?',
    answer: 'Yes — puppies and kittens have faster baseline HR and RR than adults of the same species. The card notes the young-animal adjustment. The triage categories apply the same way.',
  },
  {
    question: 'Can I print this on a regular printer?',
    answer: 'Yes. The card prints clearly in black-and-white on a standard home printer — wallet-sized (2.5 × 3.5 in) plus a US-Letter fridge version. Both arrive as a single PDF.',
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })
const allSchemas = combineSchemas(articleSchema, faqSchema)

const TRIAGE_CATEGORIES = [
  {
    label: 'ER NOW',
    color: 'red',
    description: 'Drive to the nearest 24-hour ER. Call ahead if you can. Do not wait for a primary-vet callback.',
    examples: [
      'Unresponsive, collapsed, or seizing > 2 minutes',
      'Difficulty breathing; pale or blue gums; open-mouth breathing in a cat',
      'Bloated, hard abdomen with unproductive retching (suspect GDV)',
      'Toxin ingestion: antifreeze, rodenticide, xylitol, lily (cats), toxic-dose chocolate, grapes',
      'Trauma: hit by car, fall from height, large-dog attack puncture',
      'Male cat straining to urinate with nothing coming out',
      'Heat stroke: heavy panting, brick-red gums, temp > 104.5 °F',
      'Bleeding that does not slow with 5 min of firm pressure',
      'Venomous-snake bite, facial swelling, anaphylaxis',
    ],
  },
  {
    label: 'Same-day vet',
    color: 'amber',
    description: 'Call your primary vet today. Urgent-care or telehealth is reasonable if they cannot fit you in.',
    examples: [
      'Vomiting or diarrhea > 3 times in a day, no other red flags',
      'Limping overnight that has not resolved (non-weight-bearing is ER NOW)',
      'A new lump that is hot, painful, or growing rapidly',
      'Not eating for 24 h (cats: faster red flag — lipidosis risk)',
      'Single seizure, fully recovered in 5 min, no prior history',
      'Possible UTI signs (frequent small urinations, mild straining)',
      'Mild itching or allergic reaction, no facial swelling',
      'Mild ear discomfort, head shaking, or odor',
    ],
  },
  {
    label: 'Monitor at home',
    color: 'emerald',
    description: 'Note the time, symptom, and trigger. Re-check at 4–6 h and at 12 h. Escalate if it worsens.',
    examples: [
      'One episode of vomiting or one loose stool, normal behaviour',
      'Skipping one meal in a dog that has done so before',
      'Mild morning stiffness that resolves with movement',
      'Small superficial scrape, stopped bleeding, clean',
      'One or two sneezes, no nasal discharge',
      'Sub-toxic chocolate dose for body weight (verify with calculator)',
      'Refusing one food but eating others',
    ],
  },
]

const VITAL_RANGES = [
  { species: 'Dog (adult)', hr: '70–120 bpm', rr: '15–30 /min', temp: '101.0–102.5 °F', crt: '< 2 s', mm: 'Pink, moist', note: 'Puppies < 6 mo: HR up to 180, RR up to 40.' },
  { species: 'Cat (adult)', hr: '140–220 bpm', rr: '20–30 /min', temp: '100.5–102.5 °F', crt: '< 2 s', mm: 'Pink, moist', note: 'Sleeping RR > 30 is the single most reliable home red flag for heart failure. Open-mouth breathing is ALWAYS abnormal.' },
  { species: 'Ferret', hr: '180–250 bpm', rr: '33–36 /min', temp: '100.0–104.0 °F', crt: '< 2 s', mm: 'Pink', note: 'Hypoglycemia (insulinoma) is a common ER cause — keep Karo syrup on hand.' },
  { species: 'Rabbit', hr: '130–325 bpm', rr: '32–60 /min', temp: '101.3–104.0 °F', crt: '< 2 s', mm: 'Pink', note: 'Not pooping for 12+ hours is an EMERGENCY in rabbits (GI stasis).' },
]

const FALSE_ALARMS = [
  { title: 'Eating grass and vomiting once', why: 'Common, usually self-limiting. Watch for repeats or blood. A single grass-emesis with no other symptoms is monitor-at-home.' },
  { title: 'A dog drinking from a puddle', why: 'Giardia / lepto risk exists, but the right step is a vet call within 1–2 days if symptoms develop — not an immediate ER visit.' },
  { title: 'A small piece of onion or garlic', why: 'Toxic onion dose is roughly 15–30 g per kg body weight. A pinch off pizza is below the line for almost any dog. Use a calculator first.' },
  { title: 'Nail bleed from clipping too short', why: 'Looks alarming, stops within minutes with cornstarch, flour, or styptic powder plus firm pressure. Not an ER visit.' },
  { title: 'A reverse sneeze in a small-breed dog', why: 'Sudden snorting inhalations that resolve in under a minute. Only concerning if frequent or paired with discharge.' },
  { title: 'Soft stool after a new treat', why: 'Dietary indiscretion is the most common GI cause. One soft stool with normal energy is monitor-at-home.' },
]

const FIRST_AID_KIT = {
  standard: [
    'Digital rectal thermometer + petroleum jelly',
    'Gauze pads (2"×2" and 4"×4") and Vetrap-style cohesive bandage',
    'Blunt-tip bandage scissors',
    'Tweezers and a tick-removal tool',
    'Styptic powder (Kwik Stop) for nail bleeds',
    'Saline eye-rinse (preservative-free)',
    'Chlorhexidine antiseptic wipes (not hydrogen peroxide for wounds)',
    '3% hydrogen peroxide — to induce vomiting ONLY if a vet or poison control instructs (NEVER in cats)',
    'Disposable nitrile gloves',
    'A muzzle sized for your dog (an injured dog will bite)',
    'A clean towel large enough to use as a stretcher',
    'A printed pet medical record + current medication list',
    'Card with ASPCA Poison Control 888-426-4435 and Pet Poison Helpline 855-764-7661 (both fee-based)',
    'Phone numbers: primary vet, nearest 24-h ER, telehealth backup',
  ],
  speciesAddOns: [
    'Dog: plain diphenhydramine (Benadryl) with vet-confirmed dose on the kit label',
    'Cat: pillowcase or large towel for safe restraint; pediatric oral syringes',
    'Ferret: Karo syrup or honey for suspected hypoglycemia',
    'Rabbit: simethicone infant gas drops; critical-care feeding syringe (vet-guided only)',
    'Senior / chronic pets: current med list with doses and most recent bloodwork',
  ],
}

export default function EmergencyTriageCardPage() {
  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />
      <>
      <SchemaScript schema={allSchemas} />

      {/* HERO with above-the-fold capture */}
      <section className="bg-brand-dark px-container-sm sm:px-container py-section">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-6 h-0.5 bg-brand-primary" />
              <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Free Download · Pet Owners</span>
            </div>
            <h1 className="font-display font-black text-white tracking-tighter leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(36px, 5.5vw, 66px)' }}>
              Free Pet Emergency<br />
              <span className="text-brand-primary">Triage Card.</span>
            </h1>
            <p className="text-lg font-light text-white/65 leading-relaxed max-w-xl mb-8">
              The wallet + fridge card that tells you when a pet symptom is ER-immediate, when it
              is same-day vet, and when it is safe to monitor at home. Species-specific vitals for
              dogs, cats, ferrets, and rabbits. Built from AVMA, AAHA, and VECCS guidance.
            </p>
            <ul className="text-sm text-white/70 space-y-2 mb-10 max-w-md">
              <li className="flex items-start gap-3"><span className="text-brand-primary">✓</span><span>Wallet-sized triage card + US-Letter fridge version</span></li>
              <li className="flex items-start gap-3"><span className="text-brand-primary">✓</span><span>Vital sign ranges (HR, RR, temp, CRT, gums) per species</span></li>
              <li className="flex items-start gap-3"><span className="text-brand-primary">✓</span><span>First-aid kit list — exactly what to stock, why each item</span></li>
              <li className="flex items-start gap-3"><span className="text-brand-primary">✓</span><span>8 short emails over ~3 months. Free. One-click unsubscribe.</span></li>
            </ul>
          </div>

          <div className="lg:pl-4">
            <div className="bg-white rounded-xl p-7 shadow-card-hover">
              <div className="mb-5">
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Step 1 of 1</div>
                <div className="font-display font-bold text-brand-dark text-xl leading-tight">
                  Get the triage card + 8-email course
                </div>
              </div>
              <EmailCapture
                variant="inline"
                siteId="vets-co"
                title=""
                ctaText="Send me the triage card →"
                placeholder="your@email.com"
                source="emergency-triage"
              />
              <p className="text-2xs text-brand-text-light mt-4 leading-relaxed">
                We&apos;ll email the card immediately. See our <Link href="/legal/privacy-policy" className="text-brand-primary hover:underline">Privacy Policy</Link>.
                Triage aid, not a substitute for veterinary care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRIAGE CATEGORIES */}
      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-content mx-auto">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">What&apos;s on the card</span>
          </div>
          <h2 className="font-display font-bold text-brand-dark text-3xl tracking-tight mb-3">
            Three categories. One question: is this an emergency?
          </h2>
          <p className="text-base text-brand-text-mid max-w-2xl leading-relaxed mb-10">
            Most pet emergencies are not actual emergencies. Three categories with concrete
            examples — so the next time you are staring at your dog at 11 p.m., the answer is
            already in your wallet. For an interactive version of the same decision, use the{' '}
            <Link href="/tools/er-vs-clinic" className="text-brand-primary font-medium hover:underline">
              ER vs clinic vs telehealth
            </Link>{' '}
            tool.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {TRIAGE_CATEGORIES.map((cat) => (
              <div key={cat.label} className="bg-white border border-brand-border rounded-lg p-6">
                <div className={`inline-block text-2xs font-bold tracking-eyebrow uppercase px-2.5 py-1 rounded mb-3 ${
                  cat.color === 'red' ? 'bg-red-100 text-red-700' :
                  cat.color === 'amber' ? 'bg-amber-100 text-amber-700' :
                  'bg-emerald-100 text-emerald-700'
                }`}>{cat.label}</div>
                <p className="text-sm text-brand-text-mid leading-relaxed mb-4">{cat.description}</p>
                <ul className="text-sm text-brand-text-mid space-y-2">
                  {cat.examples.map((ex) => (
                    <li key={ex} className="flex items-start gap-2">
                      <span className="text-brand-primary mt-1">·</span>
                      <span className="leading-relaxed">{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VITAL SIGN RANGES */}
      <section className="bg-white px-container-sm sm:px-container py-section">
        <div className="max-w-content mx-auto">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Vital signs by species</span>
          </div>
          <h2 className="font-display font-bold text-brand-dark text-3xl tracking-tight mb-3">
            Normal ranges at home, at rest
          </h2>
          <p className="text-base text-brand-text-mid max-w-2xl leading-relaxed mb-10">
            The single most useful skill in a real emergency is being able to measure these in
            under two minutes. Ranges drawn from VECCS and standard internal medicine references;
            exotic ranges from Carpenter and Quesenberry &amp; Carpenter.
          </p>

          <div className="bg-white border border-brand-border rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-brand-primary-pale">
                <tr>
                  <th className="text-left p-4 font-display font-bold text-brand-dark">Species</th>
                  <th className="text-left p-4 font-display font-bold text-brand-dark">Heart rate</th>
                  <th className="text-left p-4 font-display font-bold text-brand-dark">Respiratory</th>
                  <th className="text-left p-4 font-display font-bold text-brand-dark">Temperature</th>
                  <th className="text-left p-4 font-display font-bold text-brand-dark">CRT / Gums</th>
                </tr>
              </thead>
              <tbody>
                {VITAL_RANGES.map((v) => (
                  <tr key={v.species} className="border-t border-brand-border align-top">
                    <td className="p-4 font-semibold text-brand-dark">
                      {v.species}
                      <div className="text-2xs text-brand-text-light font-normal mt-2 leading-snug">{v.note}</div>
                    </td>
                    <td className="p-4 text-brand-text-mid leading-relaxed">{v.hr}</td>
                    <td className="p-4 text-brand-text-mid leading-relaxed">{v.rr}</td>
                    <td className="p-4 text-brand-text-mid leading-relaxed">{v.temp}</td>
                    <td className="p-4 text-brand-text-mid leading-relaxed">
                      CRT {v.crt}<br />
                      <span className="text-2xs">Gums: {v.mm}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-brand-text-light mt-5 leading-relaxed">
            Sources: VECCS emergency guidance; AAHA preventive-care guidelines; Ettinger &amp;
            Feldman, <em>Textbook of Veterinary Internal Medicine</em>; Carpenter, <em>Exotic
            Animal Formulary</em>; Quesenberry &amp; Carpenter, <em>Ferrets, Rabbits, and
            Rodents</em>. Individual pets vary; your vet may use tighter ranges.
          </p>
        </div>
      </section>

      {/* WHEN NOT TO ER */}
      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-content mx-auto">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">When NOT to ER</span>
          </div>
          <h2 className="font-display font-bold text-brand-dark text-3xl tracking-tight mb-3">
            Common owner over-worry scenarios
          </h2>
          <p className="text-base text-brand-text-mid max-w-2xl leading-relaxed mb-10">
            A reasonable ER visit in the US runs $400–$1,200 before treatment. The list below
            covers things that look frightening but, on their own, almost never need an ER trip.
            If any of these are paired with one of the ER-NOW symptoms above, ignore this list
            and go.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {FALSE_ALARMS.map((f) => (
              <div key={f.title} className="bg-white border border-brand-border rounded-lg p-5">
                <div className="font-display font-bold text-brand-dark mb-2">{f.title}</div>
                <p className="text-sm text-brand-text-mid leading-relaxed">{f.why}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-brand-text-light mt-8 leading-relaxed">
            None of the above is medical advice for your specific animal. When in doubt, call —
            ASPCA Animal Poison Control (888-426-4435) and Pet Poison Helpline (855-764-7661) are
            both available 24/7 for a fee, and a 10-minute call is dramatically cheaper than a
            $900 unnecessary ER visit.
          </p>
        </div>
      </section>

      {/* FIRST AID KIT */}
      <section className="bg-white px-container-sm sm:px-container py-section">
        <div className="max-w-content mx-auto">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">First-aid kit checklist</span>
          </div>
          <h2 className="font-display font-bold text-brand-dark text-3xl tracking-tight mb-3">
            Build the kit once. Replace expired items every 12 months.
          </h2>
          <p className="text-base text-brand-text-mid max-w-2xl leading-relaxed mb-10">
            A pet first-aid kit costs $40–$70 to assemble from scratch and is the cheapest
            emergency-prep purchase you will ever make. Items below align with AVMA pet first-aid
            guidance.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display font-bold text-brand-dark text-lg mb-4">Standard kit (any species)</h3>
              <ul className="text-sm text-brand-text-mid space-y-2.5">
                {FIRST_AID_KIT.standard.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-brand-primary mt-1">☐</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display font-bold text-brand-dark text-lg mb-4">Species-specific add-ons</h3>
              <ul className="text-sm text-brand-text-mid space-y-2.5">
                {FIRST_AID_KIT.speciesAddOns.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-brand-primary mt-1">☐</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-brand-text-light mt-6 leading-relaxed">
                Doses, especially OTC human medications, vary by species and individual animal.
                Always confirm with your primary vet before adding medication to your kit. Cats
                are not small dogs: many human medications safe for dogs are toxic to cats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECOND CAPTURE */}
      <section className="bg-brand-primary-pale border-y border-brand-border px-container-sm sm:px-container py-section">
        <div className="max-w-content mx-auto text-center">
          <h2 className="font-display font-bold text-brand-dark text-3xl tracking-tight mb-3">
            Get the triage card + first-aid kit list
          </h2>
          <p className="text-base text-brand-text-mid leading-relaxed mb-7 max-w-xl mx-auto">
            One signup. Card delivered immediately. Eight short emails over three months covering
            vitals, common emergencies by species, telehealth, and insurance. Unsubscribe any time.
          </p>
          <div className="max-w-md mx-auto">
            <EmailCapture
              variant="inline"
              siteId="vets-co"
              title=""
              ctaText="Send me the triage card →"
              source="emergency-triage-midpage"
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
            How this works
          </h2>
          <FAQAccordion items={FAQS} />

          <div className="mt-12 pt-8 border-t border-brand-border text-sm text-brand-text-mid">
            <p className="mb-2">Related reference on Vets.co:</p>
            <ul className="space-y-1.5">
              <li><Link href="/health/emergency-signs" className="text-brand-primary hover:underline">Emergency signs in dogs — the full reference</Link></li>
              <li><Link href="/health/heat-stroke-dogs" className="text-brand-primary hover:underline">Heat stroke in dogs</Link></li>
              <li><Link href="/health/dehydration-in-dogs" className="text-brand-primary hover:underline">Dehydration in dogs</Link></li>
              <li><Link href="/telehealth" className="text-brand-primary hover:underline">When telehealth is enough — Vetster vs. AskVet vs. Pawp</Link></li>
              <li><Link href="/reviews/best-pet-insurance" className="text-brand-primary hover:underline">Best pet insurance — Trupanion, Healthy Paws, Embrace</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  </>
  )
}

import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, AffiliateDisclosure, FAQAccordion, ArticleByline, StockImage, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Leopard Gecko Care Guide — Warm Hide, Diet | Lizard.com', description: 'Complete leopard gecko care. Why they need a warm hide (not a basking spot), belly heat, diet of dubia and crickets, and how to prevent stuck shed on toes.', path: '/species/leopard-gecko', type: 'article' })
const articleSchema = buildArticleSchema({ siteId: 'lizard-com', title: 'Leopard Gecko Care Guide', description: 'Warm hide setup, diet, supplementation, and shedding for leopard geckos.', url: 'https://lizard.com/species/leopard-gecko', imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-05-28T00:00:00Z' })

const FAQS = [
  { question: 'Is loose substrate ever safe for leopard geckos?', answer: 'For adult, well-supplemented, well-hydrated leopard geckos kept at correct floor temperatures, fine sand-soil mixes (such as a 60/40 organic topsoil and play sand blend used in bioactive setups) are tolerated by many keepers without incident. However, fine loose substrates are a genuine impaction risk in calcium-deficient animals, juveniles, animals fed in-enclosure (where they ingest substrate while striking at prey), and those kept too cool to digest properly. Risk is not zero. Solid substrate (tile, sealed slate, reptile carpet replaced frequently, or paper towel for quarantine) eliminates that variable entirely, and is the safer default for any keeper still establishing baseline husbandry.' },
  { question: 'What is calcium sand and why is it dangerous?', answer: 'Calcium sand is marketed as digestible because it is made of calcium carbonate rather than silica. In practice, it has been associated with multiple documented impaction cases — the carbonate clumps in the gut rather than dissolving cleanly, and animals have been observed deliberately ingesting it (likely because they are calcium-deficient and seeking calcium). Veterinary case reports in journals such as the Journal of Herpetological Medicine and Surgery have described calcium-sand impactions requiring surgical intervention. Do not use calcium sand. If the animal is seeking calcium, the husbandry problem is inadequate supplementation, not a need for edible substrate.' },
  { question: 'How do I tell early impaction from a normal slow defecation cycle?', answer: 'Healthy adult leopard geckos defecate every 2 to 7 days depending on feeding frequency, temperature, and individual variation. Concern signs are: more than 10 days without a bowel movement combined with continued feeding, a visibly distended or hard abdomen, straining posture without passing anything, regurgitation of recent meals, refusal to eat that lasts more than a week, or a noticeable bulge along the lower flank. Any of these warrants a reptile veterinary exam — radiographs identify the obstruction and confirm whether it can be managed conservatively or requires surgical removal.' },
  { question: 'Do I need to dust every single feeder with calcium?', answer: 'Juveniles: yes, calcium carbonate (no D3 if UVB is provided) on every feeding. Adults: every feeding remains the safest default. Some experienced keepers reduce adult dusting frequency to every second feeding when UVB is well-established and a free-choice calcium dish is provided, and the animal is otherwise healthy. Reducing supplementation is something to do once the animal is stable, not as a starting point. Under-supplementation is far more common — and dangerous — than over-supplementation in this species.' },
  { question: 'When does a slow bowel become a veterinary emergency?', answer: 'A leopard gecko that has not defecated in two weeks, is refusing food, and shows abdominal distension is an emergency — call a reptile veterinarian the same day. Lethargy combined with regurgitation is also urgent. Do not attempt at-home enemas, do not force-feed mineral oil, do not raise the temperature above the species range to speed digestion — these can worsen the situation. A warm shallow soak (88 to 90 F water, belly-deep, 15 to 20 minutes) is acceptable supportive care while you arrange the vet appointment.' },
]

const faqSchema = buildFAQSchema({ questions: FAQS.map(f => ({ question: f.question, answer: f.answer })) })
const combinedSchema = combineSchemas(articleSchema, faqSchema)

export default function LeopardGeckoPage() {
  return (
    <>
      <SchemaScript schema={combinedSchema} />
      <ArticleLayout
        siteId="lizard-com"
        contentType="species"
        hero={{ title: 'Leopard Gecko Care Guide', subtitle: 'Eublepharis macularius — the most forgiving gecko and a genuine beginner reptile. But "beginner" doesn\'t mean low-maintenance: warm hides, correct belly heat, and moist hides for shedding are non-negotiable.', category: 'Species Guide', authorName: 'Lizard.com Editorial', publishedAt: 'May 2025', readTime: '14 min' }}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Leopard Gecko', href: '/species/leopard-gecko' }]}
        relatedLinks={[
          { title: 'Species Library', href: '/species', category: 'Hub' },
          { title: 'Enclosure Size Calculator', href: '/tools/enclosure-size-calculator', category: 'Tools' },
          { title: 'Reptile Feeding Calculator', href: '/tools/reptile-feeding-calculator', category: 'Tools' },
          { title: 'Basking Temperature Calculator', href: '/tools/basking-temperature-calculator', category: 'Tools' },
          { title: 'Best Thermometers & Hygrometers', href: '/reviews/best-thermometers-hygrometers', category: 'Reviews' },
          { title: 'Best Thermostats', href: '/reviews/best-thermostats', category: 'Reviews' },
          { title: 'African Fat-Tailed Gecko Care', href: '/species/african-fat-tailed-gecko', category: 'Species' },
          { title: 'Crested Gecko Care', href: '/species/crested-gecko', category: 'Species' },
          { title: 'Metabolic Bone Disease', href: '/health/metabolic-bone-disease', category: 'Health' },
          { title: 'Dysecdysis (Stuck Shed)', href: '/health/dysecdysis', category: 'Health' },
          { title: 'Temperature Guide', href: '/setup/temperature-guide', category: 'Setup' },
        ]}
        sidebar={<>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>Quick Stats</div>
            {[['Scientific name', 'Eublepharis macularius'], ['Difficulty', 'Beginner'], ['Min enclosure', '3x1.5x1.5 feet (20 gal equiv.)'], ['Activity', 'Nocturnal (crepuscular)'], ['UVB', 'Optional but beneficial'], ['Warm hide floor', '88–92°F (belly heat)'], ['Cool side', '72–78°F ambient'], ['Adult size', '7–10 inches'], ['Lifespan', '15–20+ years'], ['Diet', 'Insectivore — dubia, crickets']].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '13px' }}>
                <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
                <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Reptile Feeding Guide', href: '/health/reptile-feeding-guide' }, { label: 'Temperature Guide', href: '/setup/temperature-guide' }, { label: 'Humidity Guide', href: '/setup/humidity-guide' }, { label: 'Metabolic Bone Disease', href: '/health/metabolic-bone-disease' }, { label: 'Hypocalcemia', href: '/health/hypocalcemia' }]} />
          <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="20 species — free for subscribers." source="species-leopard-gecko" ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="species" variant="sidebar" />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Lizard.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-05-28T00:00:00Z" reviewedBy="Editorial team" />

          <StockImage manifestKey="lizard-com:species-leopard-gecko" aspect="16:9" variant="inline" caption="A leopard gecko (Eublepharis macularius) in profile." priority />

          <p className="text-lg leading-relaxed italic mb-6" style={{ color: 'rgba(238,240,228,0.78)' }}>
            <strong className="not-italic">TL;DR.</strong> Leopard geckos thermoregulate via belly heat, not basking — set the warm hide floor to 88–92°F using a thermostat-controlled heat mat or deep heat projector. Provide three hides (warm, cool, moist), feed insect prey no wider than the gap between the eyes, dust calcium at every feeding, and check toes after every shed for stuck skin that strangulates circulation.
          </p>

          <h2>How Do I Set Up a Warm Hide for a Leopard Gecko?</h2>
          <p>Leopard geckos are nocturnal ground-dwellers from semi-arid Pakistan and Afghanistan. Unlike bearded dragons (diurnal basking species), leopard geckos do not bask under a heat lamp — they thermoregulate via belly contact with warm substrate, primarily inside hides. The warm hide is where they spend most of the day and where digestion happens.</p>
          <p><strong>Warm hide floor temperature: 88–92°F.</strong> This is measured at the floor surface inside the hide — not the air temperature. Heat source: a heat mat (UTH) under one-third of the enclosure connected to a thermostat probe placed inside the warm hide, or a Arcadia Deep Heat Projector positioned overhead. The DHP is preferred because it produces IRA radiation that penetrates tissue like natural ground heat; UTH is acceptable with a properly calibrated thermostat.</p>
          <p><strong>Never operate a heat mat without a thermostat.</strong> Unthermostated heat mats have caused fire and burned geckos to death — this is documented and not rare. Connect every heat mat to a pulse proportional thermostat with the probe inside the warm hide.</p>

          <h2>What Does a Leopard Gecko Enclosure Need?</h2>
          <p>Leopard geckos need three hides:</p>
          <ol>
            <li><strong>Warm hide:</strong> Over the heat mat, on the warm end. This is where the gecko spends the day and digests food. Small and enclosed — geckos feel secure in tight spaces.</li>
            <li><strong>Cool hide:</strong> On the cool end. Escape from heat when thermoregulation demands it.</li>
            <li><strong>Moist hide:</strong> Damp sphagnum moss inside a hide — essential for shedding. Without a moist hide, stuck shed accumulates on toes (causing circulation loss and toe loss) and on eye caps. Place on the warm side to accelerate shedding when the gecko uses it.</li>
          </ol>
          <p>Minimum enclosure: 20-gallon long equivalent (30"L × 12"W × 12"H). This provides adequate space for the three-hide temperature gradient. Larger is better — 3x1.5x1.5 feet is ideal for an adult.</p>

          <h2>Temperatures</h2>
          <ul>
            <li><strong>Warm hide floor (belly heat):</strong> 88–92°F — the most critical measurement</li>
            <li><strong>Warm side ambient:</strong> 80–85°F</li>
            <li><strong>Cool side ambient:</strong> 72–78°F</li>
            <li><strong>Night:</strong> Can drop to 65–68°F — natural for the species</li>
          </ul>
          <p>A digital thermometer in the warm hide and a separate one on the cool side gives you the data you need. Analog dials are inaccurate — see our thermometer guide.</p>

          <h2>Do Leopard Geckos Need UVB Lighting?</h2>
          <p>Leopard geckos are crepuscular and nocturnal — they receive minimal UV exposure in the wild. UVB is therefore optional. Current keeper best practice leans toward providing low-level UVB (Arcadia 6% or Arcadia Forest 6% at 40+ cm distance — producing UVI of approximately 0.5–1.0) because research shows improved immune function, natural color, and behavioral enrichment. It is not required but is currently recommended by most experienced keepers.</p>
          <p>If provided, connect to a light timer: 12 hours on in summer, 10 hours in winter.</p>

          <h2>Diet</h2>
          <p>Leopard geckos are insectivores — they do not eat plant matter. Every feeding is insects.</p>
          <ul>
            <li><strong>Best feeders:</strong> Dubia roaches (best nutritional profile), crickets (widely available), BSFL/phoenix worms (high calcium — reduces supplement need)</li>
            <li><strong>Acceptable:</strong> Superworms (use sparingly — high fat), waxworms (treat only — very high fat, addictive, geckos will reject other feeders if fed too many)</li>
            <li><strong>Avoid:</strong> Fireflies (toxic), wild-caught insects (pesticide and parasite risk), mealworms as a primary feeder (high fat, chitin-heavy, low nutrition)</li>
            <li><strong>Prey size:</strong> No wider than the space between the gecko's eyes</li>
            <li><strong>Frequency:</strong> Juveniles: daily. Adults: every 2–3 days. Adults tend to become obese if fed daily.</li>
          </ul>

          <h2>Supplementation</h2>
          <ul>
            <li><strong>Every feeding:</strong> Calcium without D3 (calcium carbonate) — lightly dust insects</li>
            <li><strong>2x per week:</strong> Calcium with D3 (if no UVB) or 2x per month (if UVB provided)</li>
            <li><strong>1x per week:</strong> Multivitamin (Repashy Calcium Plus or equivalent)</li>
          </ul>
          <p>A calcium dish can be left in the enclosure at all times — leopard geckos self-regulate calcium intake from a dish when available. Some keepers use this as a supplement to dusting rather than a replacement for it.</p>

          <h2>Shedding</h2>
          <p>Leopard geckos shed every 4–6 weeks (more frequently as juveniles). Signs of impending shed: skin becomes dull, whitish, or opaque. Ensure the moist hide has fresh, damp sphagnum moss before each shed.</p>
          <p><strong>Stuck shed is the most common serious husbandry problem.</strong> Retained shed on toes (digital constriction) cuts off circulation and causes toe loss within days. If you see white, papery shed on toes after a shed: soak the gecko in 1 inch of lukewarm water for 20 minutes and gently roll the stuck shed with a damp cotton swab. If shed remains after soaking, veterinary intervention. Check toes after every shed — every single time.</p>

          <h2>Common Health Issues</h2>
          <ul>
            <li><strong>Stuck shed:</strong> Prevent with moist hide, monitor after every shed</li>
            <li><strong>Cryptosporidiosis (crypto):</strong> Chronic weight loss despite eating normally, regurgitation, wasting — incurable. Separate immediately from other reptiles (highly contagious). Veterinary management can improve quality of life temporarily.</li>
            <li><strong>Tail drop:</strong> Autotomy (tail dropping) is a stress/threat response — normal, tail regrows but looks different. Reduce handling if this occurs.</li>
            <li><strong>MBD:</strong> Soft jaw, tremors, difficulty walking — inadequate calcium or D3. Correct supplementation and add low-level UVB. See our <a href="/health/metabolic-bone-disease">metabolic bone disease guide</a> and the related <a href="/health/hypocalcemia">acute hypocalcemia</a> page.</li>
            <li><strong>Impaction:</strong> Gut obstruction from ingested substrate or oversize prey — covered in depth below.</li>
          </ul>

          <h2>Impaction — The Most Preventable Emergency</h2>
          <p>Impaction is mechanical blockage of the digestive tract. In leopard geckos the most common presentations are loose-substrate ingestion (sand, walnut shell, ground coconut husk, calcium sand) and oversized prey items that cannot transit the gut. Impaction is repeatedly cited in reptile veterinary case literature — for example, in clinical chapters of Mader&apos;s <em>Reptile Medicine and Surgery</em> (Elsevier) and in case reports published in the Journal of Herpetological Medicine and Surgery — as one of the leading non-infectious causes of presentation in captive lizards. It is also one of the most preventable: substrate choice, prey size, hydration, and floor temperature are all keeper-controlled variables.</p>
          <p>The mechanism is straightforward. Loose particulate substrate is picked up incidentally during prey strikes — the gecko launches at a cricket, jaws close around dirt, substrate enters the mouth and is swallowed. In an animal with adequate hydration, correct belly heat (88 to 92 F at the warm hide floor), normal motility, and adequate calcium status, small amounts of ingested fine soil typically pass. In an animal that is calcium-deficient, dehydrated, cool, or fed prey items wider than the space between the eyes, even small substrate loads can clump and obstruct. This is why &quot;this substrate is safe&quot; is the wrong framing — risk depends on the entire husbandry envelope, not the substrate alone.</p>

          <h3>Substrate Choices, Ranked by Impaction Risk</h3>
          <ul>
            <li><strong>Lowest risk — recommended for beginners and any animal not yet stable:</strong> ceramic tile (12-inch matte porcelain cut to fit, grouted), sealed slate, reptile carpet (replaced or washed weekly to control bacteria), paper towel (best for quarantine and post-illness recovery). These give zero ingestion risk and are trivially easy to spot-clean.</li>
            <li><strong>Moderate risk — only after baseline husbandry is verified:</strong> well-mixed bioactive soil (organic topsoil and play sand at roughly 60/40, packed and slightly moistened, with leaf-litter top dressing). Reasonable for adult, well-supplemented animals in a properly heated enclosure where prey is fed in a feeding dish or with tongs to minimize substrate uptake. The mainstream reptile-husbandry literature — including Arcadia Reptile&apos;s bio-active guidance and contributors writing in <em>Reptiles Magazine</em> — supports bioactive setups for experienced keepers, with the consistent caveat that hydration, UVB, calcium, and feeding technique have to be correct first.</li>
            <li><strong>High risk — avoid:</strong> loose play sand alone, walnut shell, crushed corncob, wood-chip bark, and especially calcium sand (calcium carbonate marketed as &quot;digestible&quot;). Calcium sand is the substrate most consistently associated with impaction case reports in the veterinary literature and should not be used regardless of marketing claims.</li>
          </ul>

          <h3>Prey Size and Feeding Technique</h3>
          <p>The rule is no prey item wider than the space between the gecko&apos;s eyes. This is not a guideline — it is a hard limit. Oversize crickets and superworms wedge in the gut and cause obstruction without any substrate involvement at all. Pinkie mice are not appropriate for leopard geckos at any life stage; the fur and skeleton are difficult to pass and provide no nutritional benefit over correctly supplemented insects.</p>
          <p>Feeding technique matters as much as substrate choice. Tong-feeding directs every prey item into the mouth without the gecko striking through substrate. A shallow ceramic feeding dish (not deep enough that prey escapes, not slick enough that the gecko slips) accomplishes the same goal for the keeper who is not present at every feeding. Free-roaming crickets in a soil enclosure produce the worst-case scenario: prey moves through substrate, the gecko strikes through substrate, substrate enters the mouth, prey moves again, the gecko strikes again, and substrate is ingested cumulatively. If a setup uses loose substrate, prey should be tong-fed or dished, full stop.</p>

          <h3>Floor Temperature, Hydration, and Gut Motility</h3>
          <p>Digestion is temperature-dependent. A leopard gecko whose warm-hide floor is at 84 F rather than 88 to 92 F digests slowly. Slow transit gives ingested substrate more time to dehydrate, clump, and obstruct. Verify the floor temperature inside the warm hide with a digital probe thermometer (Govee, Inkbird, or similar) placed on the surface where the gecko&apos;s belly will rest — not the air, not the glass, not the basking spot. Heat sources connected to a pulse-proportional or on-off thermostat with the probe inside the warm hide are non-negotiable; unthermostated heat mats are a fire and burn hazard, and they also produce wildly fluctuating floor temperatures that disrupt motility.</p>
          <p>Hydration is the second motility variable. Leopard geckos drink from a shallow water dish (kept on the cool side, replaced daily) and absorb moisture during use of the moist hide. A dehydrated gecko has dry stool that does not move well — combine that with ingested substrate and obstruction becomes much more likely. Signs of dehydration include sunken eyes, loose tail skin that does not snap back when gently pinched, and stringy or absent urates. Address it with a 15-to-20-minute warm shallow soak (88 to 90 F water, belly-deep only) two to three times per week until the urates and stool look normal again.</p>

          <h3>Daily Monitoring — What to Actually Check</h3>
          <p>Most impactions are caught late because the keeper was not looking. A 60-second daily check during routine spot-cleaning is enough to identify problems before they become surgical. Look for:</p>
          <ul>
            <li><strong>Stool presence and quality:</strong> firm, formed, brown with a white urate cap. Note the last date of defecation on a calendar or care log. More than 10 days without stool in an animal that is eating is a red flag.</li>
            <li><strong>Body condition:</strong> the tail should be plump and rounded — the tail is the species&apos; fat reserve. A thinning tail combined with constipation suggests the animal is mobilizing reserves rather than absorbing nutrients.</li>
            <li><strong>Abdominal palpation, gently:</strong> the abdomen should be soft and slightly compressible. A hard mass or distinct bulge is abnormal and warrants veterinary radiographs.</li>
            <li><strong>Posture and behavior:</strong> straining posture (tail-up, vent pressed against a surface, repeated unproductive bearing-down) is constipation behavior. Lethargy combined with food refusal is the late stage and is an emergency.</li>
            <li><strong>Eyes and skin:</strong> bright, alert eyes; skin that snaps back when gently lifted. Sunken eyes or doughy skin indicate dehydration that is worsening any motility problem.</li>
          </ul>

          <h3>Prophylactic Calcium and Why It Matters for Impaction</h3>
          <p>Calcium-deficient reptiles seek calcium — this is a documented behavior. They will deliberately ingest substrate (including calcium sand and crushed eggshell scattered as a &quot;supplement&quot;) in an attempt to correct the deficit. This is one of the mechanisms by which under-supplementation translates into impaction risk. A free-choice calcium dish (small flat dish of plain calcium carbonate powder, no D3, left in the enclosure) gives the animal an outlet that is not substrate. Combined with dusting at every feeding (juveniles) or every second feeding (stable adults), the deficit driving substrate-seeking behavior is removed.</p>
          <p>Doses: a light dusting of calcium carbonate (no D3 if UVB is provided; with D3 twice weekly if no UVB) on every feeder for juveniles. A multivitamin (Repashy Calcium Plus LoD or Arcadia EarthPro-A with the appropriate D3 schedule) once weekly. Bulb degradation matters — UVB output drops measurably before the bulb visibly fails, and the only reliable way to detect this is a Solarmeter 6.5 UV radiometer reading at the basking surface. Replace T5 high-output UVB tubes on a 12-month schedule by default; verify with a Solarmeter reading at six months and twelve months for any new bulb on your shelf.</p>

          <h3>Early Signs of Impaction — What to Watch For</h3>
          <ul>
            <li><strong>Reduced or absent defecation:</strong> the earliest sign. Track it on a calendar.</li>
            <li><strong>Visible substrate in stool:</strong> normal in trace amounts in bioactive setups; concerning if stool is composed largely of substrate, indicating significant ingestion.</li>
            <li><strong>Decreased appetite without other explanation:</strong> a gecko that stops eating during a normal-temperature window (not brumation, not post-shed) is signaling something.</li>
            <li><strong>Lethargy and prolonged hide use:</strong> increased time spent in the warm hide, decreased evening activity. This can also be early illness more broadly, but it intersects with constipation regularly.</li>
            <li><strong>Straining and unproductive defecation attempts:</strong> classic constipation sign.</li>
            <li><strong>Abdominal distension or palpable mass:</strong> a late sign — by this point a vet visit is overdue.</li>
          </ul>

          <h3>When to See a Reptile Vet</h3>
          <p>Find a reptile-experienced veterinarian before you need one. The Association of Reptilian and Amphibian Veterinarians (ARAV) maintains a member directory at arav.org that lets you locate a vet with documented reptile training in your area. Many small-animal general practitioners do not see enough reptiles to recognize impaction radiographically or to manage it surgically; an ARAV-affiliated clinic is the better default.</p>
          <p>Schedule a visit immediately for: more than 14 days without defecation in an otherwise eating animal; food refusal lasting more than 7 days with no other explanation (shed, brumation, recent move); regurgitation of multiple meals; visible abdominal distension; straining without passing anything for more than 48 hours; lethargy combined with any of the above. Radiographs (typically two views) identify the obstruction location and density and inform whether conservative management (warm soaks, hydration support, prokinetics) is appropriate or whether surgical intervention is needed. Conservative management is reasonable for early-stage cases caught quickly; surgery becomes the only option once the obstruction has been in place long enough for tissue damage to begin.</p>
          <p>Between recognizing a problem and the vet appointment, supportive care is: maintain correct temperatures, offer warm shallow soaks (88 to 90 F, belly-deep, 15 to 20 minutes) twice daily, withhold food (do not add to the obstruction), keep water available, and do not administer mineral oil, laxatives, or any &quot;natural remedy&quot; without veterinary direction. Force-feeding or syringing oil into a constipated reptile can cause aspiration and is contraindicated.</p>

          <h2>Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />
        <AffiliateDisclosure variant="inline" siteId="lizard-com" />
        <div style={{ background: 'var(--brand-surface, #1a1f2b)', border: '1px solid var(--brand-border, #2d3548)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #8a96ad)', marginBottom: '8px' }}>Leopard Gecko — Setup Equipment</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #8a96ad)', lineHeight: 1.55 }}>Browse enclosures, UVB lighting, thermostats, and substrate sized for leopard gecko care. Lizard.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial inclusion above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/leopard%20gecko%20setup?s=species-leopard-gecko" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Leopard Gecko Setup on Amazon →</a>
            <a href="/go/chewy-brand/leopard%20gecko%20setup?s=species-leopard-gecko" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #7bc25c)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

        </div>
      </ArticleLayout>
    </>
  )
}

import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, AffiliateDisclosure, CrossPortfolioCard, ArticleByline } from '@carloOS/ui'
import { FAQAccordion, buildArticleSchema, buildFAQSchema, combineSchemas, SchemaScript, CalloutBox } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: "Argentine Tegu Care — Enclosure, Diet, Brumation | Lizard.com", description: "Argentine black & white tegu (Salvator merianae) care: enclosure size, omnivore diet, heat, UVB, and seasonal brumation. An advanced commitment.", path: "/species/argentine-black-and-white-tegu", type: 'article' })
const articleSchema = buildArticleSchema({ siteId: 'lizard-com', title: "Argentine Black and White Tegu Care Guide", description: "Enclosure size, heat, UVB, omnivore diet, brumation, and complete care for Salvator merianae, the Argentine black & white tegu.", url: "https://lizard.com/species/argentine-black-and-white-tegu", imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-11T00:00:00Z' })

const FAQS = [
  { question: 'How big does an Argentine black & white tegu actually get?', answer: 'Adult Salvator merianae routinely reach 3.5–4.5 feet (105–140 cm) total length from snout to tail tip. Males are larger than females — large males can exceed 4.5 feet and 10+ kg (22+ lb) body weight; females typically top out around 3.5 feet and 4–6 kg. The animal is built like a small dog with a long tail: thick neck, heavy body, powerful jaws, and considerable bite force. Plan enclosure space accordingly — the standard minimum adult enclosure is 6 feet long × 3 feet wide × 3 feet tall, and many experienced keepers consider 8×4×3 the correct working minimum for the animal\'s entire lifespan. Tegus are not a small-room or apartment species in practice; they need dedicated floor space.' },
  { question: 'Are tegus actually intelligent?', answer: 'Yes — tegus are among the most behaviorally complex and trainable reptiles in the trade. They show clear recognition of individual humans, can be litter-trained, target-trained, and leash-trained, and form what most keepers describe as social bonds with their primary caregiver. Well-socialized captive-bred tegus tolerate handling, often seek interaction, and will tolerate vet exams that other large reptiles would not. The behavioral richness is also what makes them demanding — they require enrichment, social interaction, and varied diet rotation in ways that bearded dragons and snakes simply do not. A neglected adult tegu becomes aggressive, depressed, and unmanageable in a way that has no real parallel in the more commonly kept reptiles. Behavioral case reports in herpetological veterinary literature consistently flag tegus as a species where enrichment is medically and welfare-relevant, not optional.' },
  { question: 'What is brumation and do I need to brumate my tegu?', answer: 'Brumation is the reptilian equivalent of hibernation — a metabolic slowdown during the cooler/drier season when ambient temperatures drop and food availability declines in the wild. Salvator merianae brumate in their native Argentina, Uruguay, Paraguay, and southern Brazil from roughly April to September (southern hemisphere winter). Captive tegus from established breeding lines often retain this instinct and will initiate brumation behavior in captivity (reduced appetite, increased burrowing, lethargy) regardless of keeper input — typically in late autumn and winter. The correct keeper response is to accommodate the cycle, not fight it: reduce daytime photoperiod and temperatures gradually over 2–3 weeks, stop offering food once the animal stops accepting it, keep water available, and provide a deep insulated burrow box. Healthy adult tegus brumate safely for 2–4 months. Juveniles under 18 months are sometimes kept active through their first winter (light cycle and temperatures held steady) because their fat reserves are not yet adequate for safe brumation; refer to an ARAV-listed reptile veterinarian for guidance on individual animals.' },
  { question: 'What is the correct adult tegu diet?', answer: 'Argentine black & white tegus are omnivorous and demand variety. The current best-practice diet rotation looks roughly like: 40% whole prey (appropriately sized rodents — mice, small rats, day-old chicks for variety) fed 1–2x per week for adults; 30% insects (dubia roaches, hornworms, BSFL, the occasional cricket); 20% lean cooked or raw protein (boiled egg with shell, raw turkey heart, raw chicken liver — never seasoned, never processed); 10% fruit and vegetable matter (berries, mango, papaya, squash, leafy greens — fruit is genuinely important for this species, unlike most reptiles). Calcium dust on insect feeders and a multivitamin once weekly. Whole prey provides the calcium and skeletal nutrients that minced muscle meat cannot. Avoid: processed dog/cat food (too much salt, fat, and grain), all-rodent diets (cause obesity and renal issues over time), seasoned or cooked-with-oil meats, and citrus. Juvenile tegus under 18 months eat insects and pinky/fuzzy mice almost daily; adults shift to 2–3x weekly feeding to prevent obesity.' },
  { question: 'Do tegus need UVB?', answer: 'Yes — Argentine tegus are diurnal active baskers and require strong UVB to synthesize D3 and metabolize dietary calcium. Per Arcadia\'s Ferguson Zone classification this species sits in Zone 3–4 (UVI 2.0–4.0 at the basking position). An Arcadia 12% Desert T5 HO tube running approximately two-thirds the length of the enclosure, mounted 12–18 inches above the basking platform without a glass barrier (UVB does not pass through glass), is the standard. Pair UVB with a strong basking bulb producing a surface basking temperature of 110–130°F so the animal can thermoregulate to the temperature at which D3 synthesis is most efficient. Replace UVB tubes on a 12-month schedule — output declines well before the visible light fails, and a tegu without adequate UVB develops MBD over months. Outdoor exposure during warm weather (in a secure outdoor enclosure with shade options) is an excellent supplement to indoor UVB and is something many advanced tegu keepers build into their routine.' },
  { question: 'Are tegus legal where I live?', answer: 'Variable and important to verify before acquisition. Argentine black & white tegus (Salvator merianae) are established invasive populations in Florida and parts of Georgia and the Southeast US, and as a result several states have restricted or banned private ownership — Florida has tightened restrictions repeatedly since 2019 and now requires permits and microchipping for legally held animals; new acquisitions face significant restrictions or are prohibited in some jurisdictions. Check current state and county law (not just the law as it stood when you started looking) and any HOA restrictions. Internationally, importation is regulated under CITES Appendix II (Tupinambis spp. listings — the genus naming has shifted but trade controls remain). Buy from established US captive-bred breeding lines with documented provenance — both because wild-caught animals carry parasites and stress, and because clean paperwork matters for keeping the animal legally over its 15–20 year lifespan.' },
]

const faqSchema = buildFAQSchema({ questions: FAQS.map(f => ({ question: f.question, answer: f.answer })) })
const combinedSchema = combineSchemas(articleSchema, faqSchema)

export default function SpeciesArgentineBlackAndWhiteTeguPage() {
  return (
    <>
    <SchemaScript schema={combinedSchema} />
    <ArticleLayout siteId="lizard-com"
      contentType="species"
      hero={{ title: "Argentine Black and White Tegu Care Guide", subtitle: "Salvator merianae is a large, intelligent South American lizard reaching 3.5 to 4.5 feet and 10+ kg. Known for becoming remarkably tame and responsive, the Argentine black and white tegu is one of the few reptiles widely described as interactive — but it demands a room-sized enclosure, powerful heat and UVB, an omnivorous diet rotation, seasonal brumation, and an owner prepared for a 15 to 20 year commitment.", category: "Species Guide — Advanced", authorName: 'Lizard.com Editorial', publishedAt: 'June 2026', readTime: "15 min" }}
      breadcrumbs={[{ name: "Home", href: "/" }, { name: "Species", href: "/species" }, { name: "Argentine Tegu", href: "/species/argentine-black-and-white-tegu" }]}
      relatedLinks={[
        { title: 'Species Library', href: '/species', category: 'Hub' },
        { title: 'Savannah Monitor Care', href: '/species/savannah-monitor', category: 'Species' },
        { title: 'Nile Monitor Care', href: '/species/nile-monitor', category: 'Species' },
        { title: 'Brumation Guide', href: '/husbandry/brumation-guide', category: 'Husbandry' },
        { title: 'Enclosure Size Guide', href: '/setup/terrarium-size-guide', category: 'Setup' },
        { title: 'UVB Lighting Guide', href: '/setup/uvb-lighting-guide', category: 'Setup' },
      ]}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>Quick Reference</div>
          {[['Scientific name', 'Salvator merianae'], ['Origin', 'Argentina, Uruguay, Paraguay, southern Brazil'], ['Difficulty', 'Advanced'], ['Activity', 'Diurnal'], ['Adult size', '3.5–4.5 ft (males larger)'], ['Adult weight', '4–10+ kg'], ['Lifespan', '15–20 years'], ['Min adult enclosure', '6×3×3 ft (8×4×3 preferred)'], ['Basking surface', '110–130°F'], ['Cool side', '75–82°F'], ['Humidity', '60–80% RH'], ['UVB', 'Arcadia 12% — Zone 3–4'], ['Diet', 'Omnivore — whole prey + insects + fruit'], ['Brumation', 'Common in captivity (winter)']].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '13px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title={"Related Guides"} links={[{ label: "Bearded Dragon Care", href: "/species/bearded-dragon" }, { label: "Savannah Monitor Care", href: "/species/savannah-monitor" }, { label: "Brumation Guide", href: "/husbandry/brumation-guide" }, { label: "Beginner vs Advanced Species", href: "/species/beginner-vs-advanced-reptiles" }, { label: "Reptile Laws by State", href: "/states" }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source={"lizard-species-argentine-black-and-white-tegu"} ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="species" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Lizard.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-11T00:00:00Z" reviewedBy="Editorial team" />
          <h2>TL;DR</h2>
          <p><strong>Argentine black &amp; white tegus</strong> (<em>Salvator merianae</em>) are large, intelligent, omnivorous lizards from southern South America. Adults reach 3.5–4.5 feet and 4–10+ kg with a 15–20 year lifespan. The minimum responsible adult enclosure is 6×3×3 feet (preferably 8×4×3). They are diurnal baskers needing strong UVB (Arcadia 12%) and a 110–130°F basking surface. Diet is omnivorous: whole prey, insects, lean protein, and fruit on rotation. Most captive tegus brumate in winter and this should be accommodated, not fought. Verify legality before acquiring — restricted in several US states.</p>

          <p>The Argentine black and white tegu is the closest a reptile comes to a dog-like companion. Captive-bred, well-socialized tegus recognize their keepers, tolerate extensive handling, and show problem-solving behavior unusual among lizards. That intelligence and size, however, make this an advanced animal: a full-grown tegu needs an enclosure larger than most furniture, eats a varied omnivorous diet, produces substantial waste, generates intense basking heat, and brumates for months each year. It is a serious, long-term commitment, not a starter reptile.</p>

          <h2>Natural History</h2>
          <p>Argentine black and white tegus inhabit the subtropical grasslands, scrub, and forest edges of Argentina, Uruguay, Paraguay, and southern Brazil. They are diurnal active foragers — searching ground and shallow burrows for small vertebrates, eggs, fruit, carrion, and invertebrates — and dig substantial burrows for thermoregulation and seasonal brumation. The genus was reorganized recently (formerly <em>Tupinambis merianae</em>; reclassified as <em>Salvator merianae</em>) but the older name still appears in older keeper literature and pet-trade contexts.</p>
          <p>Tegus are established invasive populations in Florida and parts of the Southeast US following pet-trade escapes and releases. This has driven significant state-level regulatory tightening: Florida&apos;s 2019 and subsequent rule revisions added permitting, microchipping, and breeding restrictions, with similar movements in Georgia and other southeastern states. Verify current state and county law before acquisition — and verify it as it stands today, not as it stood the last time you looked.</p>

          <h2>Enclosure</h2>
          <ul>
            <li><strong>Hatchlings / juveniles:</strong> A 4×2×2 ft PVC or wood enclosure works for the first year. The animal will outgrow this quickly.</li>
            <li><strong>Adult minimum:</strong> 6 ft long × 3 ft wide × 3 ft tall. This is the minimum cited consistently across responsible care literature for adult <em>Salvator merianae</em>.</li>
            <li><strong>Adult recommended:</strong> 8 ft × 4 ft × 3 ft. This is the size most experienced tegu keepers consider the working minimum for the animal&apos;s entire lifespan. Outdoor enclosures (large secure pens with shelter, in climates where outdoor keeping is viable for warm months) are excellent supplemental space.</li>
            <li><strong>Build material:</strong> PVC or sealed wood. Glass tanks are inadequate (no front access, poor heat retention, glass walls cause pacing). Animal Plastics, Zen Habitats Large, and custom-built enclosures are the standard options.</li>
            <li><strong>Substrate:</strong> 6–12 inches of mixed organic topsoil, play sand, and coco fiber. Tegus are obligate burrowers and need substrate deep enough to construct a working burrow. Cypress mulch top dressing helps with humidity.</li>
            <li><strong>Furnishings:</strong> Large hide (the burrow), a large flat basking platform (slate, stone, or sealed wood) under the basking lamp, a large water tub the animal can fully submerge in (tegus drink and soak), and chew-resistant enrichment items.</li>
          </ul>

          <h2>Heat and UVB</h2>
          <p>Tegus are heliothermic baskers from open habitats and require an intense basking surface of 110–130°F generated by a cluster of halogen flood bulbs over a sturdy platform, with a cool side of 75–82°F. Ambient humidity should sit around 60–80 percent. High-output linear T5 UVB across a large portion of the basking zone (Ferguson Zone 3–4) is required to prevent metabolic bone disease in an animal this large and fast-growing; an under-powered UVB tube is a common cause of deformity in young tegus.</p>
          <ul>
            <li><strong>Basking surface temperature:</strong> 110–130°F, measured by IR temperature gun directly on the basking platform under the lamp. This is hotter than many keepers expect and is critical for proper digestion of high-protein meals.</li>
            <li><strong>Warm-side ambient:</strong> 90–95°F</li>
            <li><strong>Cool side ambient:</strong> 75–82°F</li>
            <li><strong>Night:</strong> 70–78°F. No supplemental heat at night for most homes; a CHE or DHP on a thermostat is appropriate only if ambient drops below 70°F.</li>
            <li><strong>UVB:</strong> Arcadia 12% Desert T5 HO tube spanning approximately two-thirds the enclosure length, mounted 12–18 inches above the basking platform without intervening glass or mesh denser than 1/2-inch hardware cloth. Per Arcadia&apos;s Ferguson Zone framework tegus are Zone 3–4 (UVI 2.0–4.0 at the basking spot). Replace UVB tubes on a 12-month schedule and verify output with a UV meter where possible.</li>
            <li><strong>Photoperiod:</strong> 12–14 hours in summer, dropping to 10 hours through autumn and 8–10 hours through winter brumation. The seasonal photoperiod shift is part of the brumation trigger.</li>
          </ul>

          <CalloutBox variant="warning" title="Basking temperature matters for digestion">
            Tegus fed a high-protein, whole-prey diet at suboptimal basking temperatures (below 110°F) develop incomplete digestion, regurgitation, and over time, metabolic and renal problems. The 110–130°F basking surface is not optional — it is what allows the animal to actually process the food it&apos;s being given.
          </CalloutBox>

          <h2>Diet — Omnivorous Rotation</h2>
          <p>Argentine tegus are true omnivores and the dietary rotation is one of the more interesting and species-distinct aspects of their care. The diet shifts with age: hatchlings and juveniles are heavily insectivorous and carnivorous (insects, appropriately sized whole prey, eggs), while adults take a broader mix. The rough adult rotation:</p>
          <ul>
            <li><strong>40% whole prey:</strong> Appropriately sized frozen-thawed mice, small rats, day-old chicks. Whole prey provides the calcium and skeletal nutrients that minced muscle meat does not. 1–2x per week for adults.</li>
            <li><strong>30% insects:</strong> Large dubia roaches, hornworms, BSFL, the occasional adult cricket. Dust with calcium and offer 1x weekly as a feeding component.</li>
            <li><strong>20% lean cooked or raw protein:</strong> Boiled whole egg (with shell crushed in), raw turkey heart, raw chicken liver, raw quail. Never seasoned, never cooked in oil, never processed.</li>
            <li><strong>10% fruit and vegetables:</strong> Berries (blueberries, strawberries), mango, papaya, banana, butternut squash, leafy greens. Fruit is a genuine and important diet component for this species — unlike many reptiles where fruit is contraindicated.</li>
          </ul>
          <p><strong>Frequency:</strong> Juveniles under 12 months feed daily or every other day on smaller portions; adults feed 2–3 times per week to prevent obesity. Obesity is the most common diet-related problem in captive tegus and is overwhelmingly caused by all-rodent diets fed too frequently — the rotation above is what prevents this.</p>
          <p><strong>Avoid:</strong> Processed dog or cat food (excess salt, fat, and grain), all-rodent diets, diets dominated by lean ground meat (which drives nutritional deficiency), seasoned or oil-cooked meats, dairy, citrus, avocado, rhubarb.</p>
          <p><strong>Supplementation:</strong> Calcium without D3 dusted on insects at every insect feeding; multivitamin (Repashy Herptivite or equivalent) once weekly. With proper UVB, additional D3 supplementation is not necessary in most cases.</p>

          <h2>Brumation</h2>
          <p>Most captive adult tegus from established breeding lines retain natural brumation instinct and will initiate the cycle on their own in late autumn — reduced appetite, increased burrowing, longer periods of inactivity, decreased basking. This is a natural, healthy cycle, not illness, but keepers must distinguish seasonal brumation from disease: a brumating tegu maintains body condition and is simply quiet and buried, whereas a sick tegu loses weight, shows discharge, or appears distressed. The correct keeper response is to accommodate the cycle:</p>
          <ol>
            <li>Over 2–3 weeks in autumn, gradually reduce photoperiod from summer 14 hours down to 8–10 hours.</li>
            <li>Reduce basking temperature gradually to 90–100°F.</li>
            <li>Stop offering food once the animal stops accepting it. Do not force-feed.</li>
            <li>Maintain ambient temperature 60–70°F and keep water available.</li>
            <li>Provide a deep insulated burrow box (or allow the animal to dig and use its own).</li>
            <li>Let the animal sleep for 2–4 months. Brief check-ins for hydration and weight only.</li>
            <li>In spring, gradually increase photoperiod and temperature over 2–3 weeks. Offer small meals once basking resumes.</li>
          </ol>
          <p>Juveniles under 18 months are sometimes kept active through their first winter because their fat reserves are not yet adequate for a safe brumation. Refer to an ARAV-listed reptile veterinarian for individual case judgment, and consult a vet before brumating any animal that is underweight or young.</p>

          <h2>Handling and Temperament</h2>
          <p>Tegus are exceptionally tameable for a large reptile. Tame tegus are calm and curious, but trust is earned through consistent, gentle, daily interaction from a young age. Daily short interactions with a captive-bred juvenile build a tolerant adult that accepts handling, vet exams, and supervised free-roam time. Wild-caught or under-socialized adults can be defensive and are not appropriate for inexperienced keepers. Handling guidance:</p>
          <ul>
            <li>Support the body fully — never lift by the tail (tail autotomy is possible and regrowth is incomplete).</li>
            <li>Be aware of bite force. A tegu bite from a stressed or food-aggressive animal is a meaningful injury — adults can break skin to the bone. Use a feeding container or tongs for meals so the animal does not associate the keeper&apos;s hand with food.</li>
            <li>Brief daily sessions (5–30 minutes) build trust faster than rare long sessions.</li>
            <li>Watch for tail-whipping, hissing, mouth-gaping, or rapid breathing — all stress signals; return to the enclosure and try again later.</li>
            <li>Enrichment matters. Varied diet, novel objects, dig boxes, supervised out-of-enclosure time, and target training are all welfare-relevant for this species per behavioral case literature in herpetological medicine journals.</li>
          </ul>

          <h2>Common Health Issues</h2>
          <ul>
            <li><strong>Obesity:</strong> The leading captive health problem. Caused by all-rodent diets and overfeeding fatty foods to an animal that exercises less than a wild one. Reverse with diet rotation, reduced feeding frequency, and supervised activity time.</li>
            <li><strong>Metabolic Bone Disease (MBD):</strong> Soft jaw, twisted limbs, tremors. Caused by inadequate UVB and/or calcium, especially in fast-growing juveniles. Prevent with Arcadia 12% T5 HO and dietary discipline. See our <a href="/health/metabolic-bone-disease">MBD guide</a>.</li>
            <li><strong>Renal disease:</strong> Chronic excess animal protein (all-rodent or all-meat diets) is implicated in renal failure in captive tegus. The omnivorous rotation prevents this.</li>
            <li><strong>Respiratory infection:</strong> Driven by temperatures that are too low. Maintain the correct thermal gradient and seek a vet for wheezing, open-mouth breathing, or mucus.</li>
            <li><strong>Parasites:</strong> Less common in captive-bred but possible. Fecal exams annually are standard. See our <a href="/health/parasites-guide">parasites guide</a>.</li>
            <li><strong>Thermal burns:</strong> From improperly secured or unguarded basking lamps. Use ceramic sockets, secure mounting, and ensure the animal cannot directly contact the bulb. See our <a href="/health/thermal-burns">thermal burns guide</a>.</li>
            <li><strong>Mouth rot (stomatitis):</strong> Plaque, swelling, refusal to eat. Often secondary to mouth trauma or chronic stress. Refer to an ARAV-listed reptile vet for culture-driven antibiotic therapy per Mader&apos;s <em>Reptile Medicine and Surgery</em>. See our <a href="/health/stomatitis">stomatitis guide</a>.</li>
            <li><strong>Behavioral pathology:</strong> Pacing, food aggression, persistent defensive behavior in adults that were not socialized as juveniles. Difficult to reverse fully. Documented in herpetological behavioral literature.</li>
          </ul>
          <p>Given their size and value, establishing care with an ARAV-member exotics veterinarian before problems arise is strongly advised.</p>

          <h2>When to See a Reptile Vet</h2>
          <p>Locate an ARAV (Association of Reptilian and Amphibian Veterinarians, arav.org) member clinic that has experience with large monitors and tegus before you need one — not every general reptile vet handles large-lizard work. Same-day evaluation is warranted for: bite wounds (own or from a cohab), persistent regurgitation, sudden lethargy outside the brumation window, neurological signs, mouth swelling or discharge, blood in stool or urates, sudden refusal to bask, or any thermal burn injury.</p>

          <h2>Sources &amp; Further Reading</h2>
          <ul>
            <li>Mader, D. R. &amp; Divers, S. J. (eds.) — <em>Reptile Medicine and Surgery</em>, 3rd edition. Elsevier. Chapters on large lizard husbandry, nutrition, and clinical care.</li>
            <li>Association of Reptilian and Amphibian Veterinarians (ARAV) — <a href="https://arav.org" rel="noopener" target="_blank">arav.org</a> member directory and position statements.</li>
            <li><em>Journal of Herpetological Medicine and Surgery</em> — case literature on renal disease, obesity, and behavioral disorders in captive tegus.</li>
            <li>Arcadia Reptile — Ferguson Zone framework for diurnal baskers (Zone 3–4 for <em>Salvator merianae</em>).</li>
            <li>Florida Fish and Wildlife Conservation Commission (FWC) — tegu regulation updates and invasive species management documents.</li>
            <li>CITES Appendix II listings for <em>Tupinambis</em> / <em>Salvator</em> spp.</li>
          </ul>

        <h2>Frequently Asked Questions</h2>
        <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />
        <AffiliateDisclosure variant="inline" siteId="lizard-com" />
        <div style={{ background: 'var(--brand-surface, #1a1f2b)', border: '1px solid var(--brand-border, #2d3548)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #8a96ad)', marginBottom: '8px' }}>Argentine Tegu — Setup Equipment</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #8a96ad)', lineHeight: 1.55 }}>Browse large enclosures, high-output UVB, halogen flood basking bulbs, thermostats, and deep substrate sized for Argentine tegu care. Lizard.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/argentine%20tegu%20enclosure%20setup?s=species-argentine-black-and-white-tegu" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Tegu Setup on Amazon →</a>
            <a href="/go/chewy-brand/argentine%20tegu%20enclosure%20setup?s=species-argentine-black-and-white-tegu" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #7bc25c)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>
      </div>
    </ArticleLayout>
    </>
  )
}

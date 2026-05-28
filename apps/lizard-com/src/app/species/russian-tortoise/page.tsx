import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas, SchemaScript, CalloutBox } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Russian Tortoise Care Guide — Diet, Burrows, Brumation | Lizard.com', description: 'Complete Russian tortoise (Testudo horsfieldii) care. High-fiber weed diet (no fruit), outdoor enclosures, brumation, 40+ year lifespan — beginner-friendly.', path: '/species/russian-tortoise', type: 'article' })

const articleSchema = buildArticleSchema({ siteId: 'lizard-com', title: 'Russian Tortoise Care Guide', description: 'Outdoor enclosures, high-fiber diet, brumation, and lifespan considerations for Testudo horsfieldii — the Russian (Horsfield\'s) tortoise.', url: 'https://lizard.com/species/russian-tortoise', imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-05-29T00:00:00Z' })

const FAQS = [
  { question: 'Can Russian tortoises eat fruit?', answer: 'No — or essentially no. The pet-trade default of mixed lettuce, tomato, and fruit salad is wrong for this species and is one of the leading causes of chronic disease in captive Russian tortoises. Testudo horsfieldii evolved in the dry, fibrous steppe vegetation of Central Asia — Kazakhstan, Uzbekistan, Tajikistan, Afghanistan — where fruit availability is essentially zero outside of brief seasonal blooms. The species\' gut microbiome and renal physiology are tuned for high-fiber, low-sugar, low-moisture plant material. Routine fruit feeding causes diarrhea, gut dysbiosis (overgrowth of sugar-loving bacteria and yeasts), accelerated metabolic disease, and over time, renal compromise. Cited across the Testudo care literature including chapters in Mader\'s Reptile Medicine and Surgery (Elsevier) and the Tortoise Trust\'s peer-reviewed husbandry guidance. A small piece of strawberry once a month as enrichment is fine; daily or weekly fruit is genuinely harmful. The diet base is fibrous greens and dried weeds, not "salad."' },
  { question: 'Should I brumate my Russian tortoise?', answer: 'Healthy adult Russian tortoises from established stock are well adapted to brumation (the reptilian winter slowdown) and many keepers consider it welfare-positive — supporting natural metabolic and reproductive cycles. Wild Russian tortoises brumate for 4–6 months annually in burrows below the frost line. In captivity, the decision depends on the individual animal\'s health, body condition, and the keeper\'s ability to safely manage the cycle. Brumation is not appropriate for: tortoises under 2–3 years (insufficient fat reserves), underweight or ill animals, animals with active respiratory infection or parasitic load, or any tortoise the keeper cannot reliably maintain at 35–45°F throughout the brumation period. The standard managed-brumation protocol is a 2–3 week pre-brumation fast (gut emptying), gradual temperature reduction, and placement in a controlled-temperature refrigerator or insulated outdoor burrow at 35–45°F for 8–12 weeks, with weekly weight checks. Refer to an ARAV-listed reptile veterinarian for individual case judgment, particularly for the first brumation cycle.' },
  { question: 'How much space does a Russian tortoise actually need?', answer: 'More than the small indoor enclosures commonly sold in pet stores. The widely cited minimum indoor enclosure for a single adult Russian tortoise is 4 ft × 8 ft of floor space (32 sq ft), and even this is regarded as a behavioral minimum by experienced Testudo keepers. The species\' preferred housing is an outdoor enclosure when weather permits — secure pen with 12+ inch buried perimeter walls (to prevent tunneling escape), shade options, planted with edible weeds, and a deep burrow or dig-box where the tortoise can self-thermoregulate. Outdoor keeping during warm months (roughly 60–95°F daytime range) supports natural UVB exposure, dietary diversity from wild plants, normal activity patterns, and normal brumation cycling. Indoor "tortoise tables" of 2×4 ft or smaller are inadequate and cause persistent pacing, glass-surfing, and stress behavior.' },
  { question: 'What are the right greens for a Russian tortoise?', answer: 'High-fiber, low-oxalate leafy greens and wild weeds — not supermarket salad mix, not fruit, not iceberg lettuce. The dietary backbone for Testudo horsfieldii is: dandelion (leaves, flowers, and stems — excellent), plantain (Plantago major and lanceolata — not the fruit), mallow (Malva spp.), clover, collard greens, mustard greens, turnip greens, endive, escarole, dried herbs (rosemary, thyme, oregano in small quantities), and a base of dried grass and hay (timothy, orchard grass). Pesticide-free wild-foraged weeds are nutritionally superior to anything supermarket-available and should be a significant fraction of the diet for tortoises with safe foraging access. Calcium dust on every meal (plain calcium carbonate); a cuttlebone left in the enclosure for self-regulation is standard. Avoid: spinach (oxalates bind calcium), kale in large quantities (goitrogens), all fruits as a routine food, iceberg lettuce (nutritionally void), cat/dog food (toxic to tortoises long-term), any flowering plant identified by an app rather than a botanist.' },
  { question: 'Do Russian tortoises actually live 40+ years?', answer: 'Yes — and the lifespan reality is a key consideration most prospective keepers underestimate. Well-kept captive Russian tortoises routinely live 40–50 years, with documented cases extending past 70 years. This means the tortoise acquired by a family today may outlive every member of that family. Before acquisition, plan for: who takes ownership if the keeper can no longer provide care, estate-planning provisions for the tortoise, identification of a willing recipient, or connection with a regional tortoise rescue organization (American Tortoise Rescue, Mid-Atlantic Turtle and Tortoise Society, regional Testudo groups) that accepts surrenders. Surrender of unwanted older tortoises is a real and growing animal-welfare problem in the US and UK; impulse purchases of "small starter pets" that turn into 40+ year commitments are the dominant feeder for this problem.' },
  { question: 'Do Russian tortoises need UVB if they live outdoors?', answer: 'Outdoor tortoises that get unfiltered sunlight for several hours daily during the active season are receiving natural UVB at species-appropriate intensity, and supplemental UVB is not necessary while outdoors. Glass and most plastic block UVB — sunlight through a window does not count. Indoor portions of the year (winter, indoor periods, indoor enclosures during cooler weather) require a high-output UVB tube positioned per Arcadia\'s Ferguson Zone framework — Testudo horsfieldii is Zone 3 (UVI 1.0–2.9 at the basking position). An Arcadia 12% Desert or Zoo Med T5 HO 10.0 tube mounted 12–18 inches above the basking spot, replaced annually, is the standard indoor setup. Calcium with D3 dietary supplementation is appropriate as a backup during indoor periods; with adequate UVB the D3 dosing frequency can be reduced.' },
]

const faqSchema = buildFAQSchema({ questions: FAQS.map(f => ({ question: f.question, answer: f.answer })) })
const combinedSchema = combineSchemas(articleSchema, faqSchema)

export default function RussianTortoisePage() {
  return (
    <>
      <SchemaScript schema={combinedSchema} />
      <ArticleLayout
        siteId="lizard-com"
        hero={{ title: 'Russian Tortoise Care Guide', subtitle: 'Testudo horsfieldii — the Russian or Horsfield\'s tortoise is the most popular pet tortoise in North America and one of the best-suited tortoises to captivity. Small (4–8 inches), cold-tolerant, personable, and routinely lives 40+ years. Beginner-friendly in housing complexity; lifelong in commitment.', category: 'Species Guide — Beginner / Intermediate', authorName: 'Lizard.com Editorial', authorAvatar: '🦎', publishedAt: 'May 2025', readTime: '14 min' }}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Russian Tortoise', href: '/species/russian-tortoise' }]}
        sidebar={<>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>Quick Reference</div>
            {[['Scientific name', 'Testudo horsfieldii'], ['Origin', 'Central Asian steppe (Kazakhstan, Uzbekistan, Afghanistan)'], ['Difficulty', 'Beginner / Intermediate'], ['Activity', 'Diurnal'], ['Adult size', '4–8 in (females larger)'], ['Lifespan', '40–50+ years'], ['Min enclosure (indoor)', '4×8 ft floor'], ['Outdoor enclosure', 'Strongly preferred when weather permits'], ['Basking surface', '95–100°F'], ['Warm ambient', '75–85°F'], ['Cool side', '65–75°F'], ['Humidity', '40–60% RH'], ['UVB', 'Arcadia 12% / Zone 3 (UVI 1.0–2.9)'], ['Diet', 'High-fiber greens, weeds, hay — NO fruit'], ['Brumation', 'Adapted; 8–12 weeks (controlled)']].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '13px' }}>
                <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
                <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Sulcata Tortoise Care', href: '/species/sulcata-tortoise' }, { label: 'UVB Lighting Guide', href: '/setup/uvb-lighting-guide' }, { label: 'Temperature Guide', href: '/setup/temperature-guide' }, { label: 'Metabolic Bone Disease', href: '/health/metabolic-bone-disease' }, { label: 'Dehydration in Reptiles', href: '/health/dehydration-reptiles' }]} />
          <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="20 species — free for subscribers." source="species-russian-tortoise" ctaText="Download Free" />
        </>}
      >
        <div className="carloOS-article">
          <h2>TL;DR</h2>
          <p><strong>Russian tortoises</strong> (<em>Testudo horsfieldii</em>) are small Central Asian tortoises that adapt well to captivity, tolerate cold better than most pet tortoises, and routinely live 40–50+ years. Outdoor enclosures during warm months are strongly preferred; indoor minimum is 4×8 ft floor. Diet is high-fiber greens, wild weeds, and hay — fruit is contraindicated. Adults brumate for 8–12 weeks at 35–45°F when supported correctly. The lifespan is the biggest underestimated factor — plan for the tortoise to outlive you.</p>

          <h2>Why Russian Tortoises Are Recommended for Beginners</h2>
          <p>Among commonly kept tortoises, Russians have several practical advantages: smaller adult size (4–8 inches vs 10–12 inches for Greek or Hermann\'s, and much larger for sulcata or leopard tortoises) makes enclosure scale manageable; cold tolerance — they evolved in the Central Asian steppe where winter temperatures drop well below freezing — allows outdoor keeping in much of North America and Europe; active diurnal behavior makes them visible and engaging to observe; and individual tortoises show clearly distinct temperaments that become recognizable to keepers over years of ownership. The species is robust, hardy, and forgiving of minor husbandry imperfections in a way that, for example, Egyptian or Marginated tortoises are not.</p>
          <p>The downside — and the reason &quot;Beginner / Intermediate&quot; rather than pure Beginner — is the lifespan. A 40–50+ year commitment is genuine and most pet-buyers underestimate it. Surrender of unwanted aging Russian tortoises is one of the more common intake problems for tortoise rescues nationally.</p>

          <h2>Outdoor Enclosure — The Preferred Housing</h2>
          <p>Outdoor housing during the warm-weather months (roughly 60–95°F daytime range) is the recommended default for this species. Outdoor benefits:</p>
          <ul>
            <li><strong>Natural UVB</strong> at species-appropriate intensity (Ferguson Zone 3, UVI 1.0–2.9) without need for artificial supplementation.</li>
            <li><strong>Dietary diversity</strong> from wild-grown weeds (dandelion, plantain, clover, mallow) directly browsed.</li>
            <li><strong>Normal activity patterns</strong> — much more meaningful range, basking choice, and behavioral expression than any indoor enclosure can provide.</li>
            <li><strong>Natural temperature cycles</strong> supporting normal brumation entry and exit.</li>
            <li><strong>Burrowing access</strong> — Russian tortoises are obligate burrowers and need substrate they can actually tunnel into.</li>
          </ul>
          <p><strong>Outdoor enclosure design:</strong> secure perimeter with walls extending at least 12 inches below ground level (Russians dig and escape — buried hardware cloth or paving stones at the perimeter is essential), 18+ inches above ground, multiple shade options, a deep dig area or insulated burrow box, planted with edible weeds (dandelion, clover, plantain are easy to establish and the tortoise will graze them down). Overhead bird-of-prey protection (covered run or wire mesh top) is important — hawks and corvids will attack juvenile tortoises and even adult Russians.</p>

          <h2>Indoor Enclosure</h2>
          <ul>
            <li><strong>Minimum floor:</strong> 4 ft × 8 ft (32 sq ft) for a single adult. Smaller is inadequate and produces persistent pacing and stress behavior.</li>
            <li><strong>Open-topped &quot;tortoise table&quot;</strong> built from sealed wood is preferred over closed terrariums — better ventilation, easier access, more usable floor space.</li>
            <li><strong>Substrate:</strong> 6–8 inches of mixed organic topsoil, play sand, and coco fiber that holds tunnel shape when lightly moistened. Russian tortoises are obligate burrowers and need substrate depth.</li>
            <li><strong>Furnishings:</strong> A basking platform under the basking lamp (flat stone or sealed slate), a hide on the cool side, a deep substrate dig area, a shallow water dish the tortoise can climb into (refill daily — tortoises soak and defecate in water and the dish needs frequent changing).</li>
            <li><strong>Photoperiod:</strong> 12 hours light in summer, 8–10 in winter (or full brumation; see below).</li>
          </ul>

          <CalloutBox variant="tip" title="The basking platform is critical">
            Russian tortoises need a defined basking surface at 95–100°F to thermoregulate properly. A flat stone, brick, or sealed slate under a basking halogen produces an accurate, predictable, and safely-contactable basking spot. The tortoise will use it to warm up before foraging — a tortoise without an adequate basking platform digests slowly and shows reduced appetite.
          </CalloutBox>

          <h2>Heat and Light (Indoor)</h2>
          <ul>
            <li><strong>Basking surface temperature:</strong> 95–100°F, measured by IR thermometer on the basking platform under the lamp.</li>
            <li><strong>Warm ambient:</strong> 75–85°F</li>
            <li><strong>Cool side ambient:</strong> 65–75°F</li>
            <li><strong>Night:</strong> 60–70°F is fine — Russian tortoises tolerate cool nights well. No supplemental heat at night for most homes.</li>
            <li><strong>UVB:</strong> Arcadia 12% Desert T5 HO or Zoo Med T5 HO 10.0, mounted 12–18 inches above the basking spot per the manufacturer\'s output curve and Arcadia\'s Ferguson Zone 3 guidance (UVI 1.0–2.9 at basking). Replace tube annually.</li>
          </ul>

          <h2>Diet — High Fiber, No Fruit</h2>
          <p>Russian tortoises evolved in the dry, fibrous, low-nutrient vegetation of the Central Asian steppe — and their gut microbiome and renal physiology are tuned for this. The pet-trade default of mixed lettuce, vegetables, and fruit is wrong for this species and is a leading cause of chronic disease in captive Testudo. The corrected diet:</p>
          <ul>
            <li><strong>Wild weeds (pesticide-free) — preferred where available:</strong> dandelion (leaves, flowers, stems), plantain (<em>Plantago major</em> and <em>P. lanceolata</em>), mallow (<em>Malva</em> spp.), clover, sow thistle, hibiscus leaves and flowers. Wild-foraged weeds are nutritionally superior to anything supermarket-available.</li>
            <li><strong>Cultivated leafy greens:</strong> collard greens, mustard greens, turnip greens, endive, escarole, romaine in moderation. Rotate for variety.</li>
            <li><strong>Dried hay and grass:</strong> Timothy, orchard grass, or specifically commercial &quot;tortoise hay&quot; mixes. The fibrous backbone of the diet — mirrors wild dry steppe grass intake.</li>
            <li><strong>Dried herbs and flowers:</strong> rosemary, thyme, oregano (in small quantities), dried hibiscus, dried rose petals. Bird-of-Paradise tortoise dry food blends are appropriate as a supplement.</li>
            <li><strong>Calcium:</strong> dust every meal with plain calcium carbonate; leave a cuttlebone in the enclosure for self-regulation.</li>
          </ul>
          <p><strong>Avoid:</strong> all fruits as a routine food (small monthly enrichment piece is the maximum), spinach (oxalates bind calcium), kale in large quantities (goitrogens), iceberg lettuce (nutritionally void), cabbage and broccoli in large quantities (goitrogens), all human food (bread, dairy, processed), cat or dog food (toxic to tortoises long-term), any unidentified flowering plant.</p>

          <h2>Brumation</h2>
          <p>Healthy adult Russian tortoises from established stock are well adapted to brumation and many keepers consider it welfare-positive. Wild Russians brumate for 4–6 months annually below the frost line. In captivity, the standard managed brumation protocol:</p>
          <ol>
            <li><strong>Pre-brumation fast (2–3 weeks):</strong> gradually reduce food intake to zero so the gut empties completely. Maintain water access. Warm baths several times per week.</li>
            <li><strong>Temperature reduction (1–2 weeks):</strong> gradually reduce ambient temperature and basking time. Photoperiod shortens.</li>
            <li><strong>Brumation (8–12 weeks):</strong> place the tortoise in a controlled-temperature refrigerator or insulated outdoor burrow at 35–45°F (do not let temperature drop below freezing or rise above 50°F). Weekly weight check — significant weight loss (more than 1% per month) ends brumation early.</li>
            <li><strong>Warm-up (1–2 weeks):</strong> gradual return to active-season temperatures and photoperiod. First meal offered 24–48 hours after warming.</li>
          </ol>
          <p><strong>Do not brumate:</strong> juveniles under 2–3 years, underweight or ill animals, tortoises with active respiratory infection or parasitic load, animals you cannot reliably maintain at 35–45°F throughout the period. Refer to an ARAV-listed reptile veterinarian for individual case judgment, particularly for the first brumation.</p>

          <h2>Common Health Issues</h2>
          <ul>
            <li><strong>Renal disease and gout:</strong> Often secondary to chronic dehydration, chronic high-protein diet, or chronic fruit feeding. Prevent with correct diet, regular soaks, and outdoor access. Cited as a leading age-related condition in Testudo in chapters of Mader&apos;s <em>Reptile Medicine and Surgery</em>.</li>
            <li><strong>Pyramiding:</strong> Abnormal upward-peaked scute growth, caused by chronic dehydration, low humidity in juveniles, and excess dietary protein. Largely preventable with correct husbandry; once established it does not reverse.</li>
            <li><strong>Respiratory infection:</strong> Nasal discharge, open-mouth breathing, lethargy. Often secondary to chronic cold or excess humidity. Refer to an ARAV-listed reptile vet for culture-driven antibiotic therapy. See our <a href="/health/respiratory-infection">RI guide</a>.</li>
            <li><strong>Metabolic Bone Disease (MBD):</strong> Soft shell, twisted limbs, jaw deformity. Caused by inadequate UVB and/or calcium. Prevent with outdoor sunlight or appropriate indoor UVB plus dietary calcium. See our <a href="/health/metabolic-bone-disease">MBD guide</a>.</li>
            <li><strong>Bladder stones:</strong> Calcium-and-urate stones in the bladder, often associated with chronic dehydration. Presents as straining, lethargy, anorexia. Surgical removal by reptile vet.</li>
            <li><strong>Parasites:</strong> Wild-caught animals carry oxyurid pinworms and protozoa. Captive-bred are usually clean. Annual fecal exam is standard. See our <a href="/health/parasites-guide">parasites guide</a>.</li>
            <li><strong>Salmonella:</strong> Russian tortoises (like all reptiles) can carry Salmonella asymptomatically. Hand-washing after every contact is non-negotiable, particularly with children in the household. See our <a href="/health/salmonella-prevention">Salmonella prevention guide</a>.</li>
          </ul>

          <h2>When to See a Reptile Vet</h2>
          <p>Find an ARAV (Association of Reptilian and Amphibian Veterinarians, arav.org) member clinic before you need one. Same-day evaluation is warranted for: persistent nasal discharge, open-mouth breathing, refusal to eat lasting more than 2 weeks outside brumation, sudden lethargy, straining without passing urates, weight loss outside brumation, abnormal shell growth or visible deformity, or any wound.</p>

          <h2>The Lifespan Commitment — A Note for Prospective Keepers</h2>
          <p>Well-kept captive Russian tortoises live 40–50+ years; documented cases extend past 70. The tortoise purchased today may outlive every member of the family that buys it. Before acquisition, plan for: who takes ownership if the keeper can no longer provide care, estate-planning provision for the tortoise, identification of a willing successor caregiver, or connection with a regional tortoise rescue organization (American Tortoise Rescue, regional Testudo-focused groups) that accepts surrenders. Impulse purchase of a &quot;small starter pet&quot; that becomes a 40+ year commitment is one of the leading feeders for tortoise rescue intake nationally. The honest framing for a first-time prospective tortoise keeper: this is closer to a small dog in commitment than to a hamster, and the dog will outlive you.</p>

          <h2>Citations</h2>
          <ul>
            <li>Mader, D. R. &amp; Divers, S. J. (eds.) — <em>Reptile Medicine and Surgery</em>, 3rd edition. Elsevier. Chapters on Testudo medicine, renal disease, and pyramiding.</li>
            <li>Association of Reptilian and Amphibian Veterinarians (ARAV) — <a href="https://arav.org" rel="noopener" target="_blank">arav.org</a> member directory and position statements.</li>
            <li><em>Journal of Herpetological Medicine and Surgery</em> — case literature on Testudo renal disease, gout, and bladder stones.</li>
            <li>Tortoise Trust (UK) — peer-reviewed husbandry and brumation protocols for <em>Testudo horsfieldii</em>.</li>
            <li>Arcadia Reptile — Ferguson Zone framework (Zone 3 for <em>Testudo</em>).</li>
            <li>IUCN Red List — <em>Testudo horsfieldii</em> assessment (Vulnerable; CITES Appendix II).</li>
          </ul>

          <h2>Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />
        </div>
      </ArticleLayout>
    </>
  )
}

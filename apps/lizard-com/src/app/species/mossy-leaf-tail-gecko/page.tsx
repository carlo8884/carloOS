import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, AffiliateDisclosure, FAQAccordion, CrossPortfolioCard, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas, SchemaScript, CalloutBox } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Mossy Leaf-Tail Gecko Care — Uroplatus sikorae | Lizard.com', description: 'Uroplatus sikorae care for advanced keepers. 75–90% humidity, 68–78°F, Madagascar montane rainforest setup, captive-bred only, IUCN-listed.', path: '/species/mossy-leaf-tail-gecko', type: 'article' })

const articleSchema = buildArticleSchema({ siteId: 'lizard-com', title: 'Mossy Leaf-Tail Gecko Care Guide', description: 'Advanced-keeper care guide for Uroplatus sikorae — humidity, temperature, sourcing, and conservation context for the Madagascar mossy leaf-tailed gecko.', url: 'https://lizard.com/species/mossy-leaf-tail-gecko', imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2026-05-29T00:00:00Z', modifiedAt: '2026-05-29T00:00:00Z' })

const FAQS = [
  { question: 'Are mossy leaf-tail geckos suitable for beginners?', answer: 'No. Uroplatus sikorae is consistently classified as an advanced-keeper species across reputable references including Mader\'s Reptile Medicine and Surgery (Elsevier) and standard Uroplatus husbandry literature. The animal requires a tightly controlled humidity envelope (75–90% RH cycling daily), a relatively narrow and cool temperature range (68–78°F daytime, with a hard ceiling around 80°F — heat-stress mortality above 82°F is well documented), a planted vertical enclosure of meaningful size, live insect feeders, and a keeper with the discipline to manage all of this every single day for 8–10+ years. They are also stress-sensitive: handling beyond brief health checks is contraindicated. Start with crested or gargoyle geckos and graduate to Uroplatus only after several years of successful, stable husbandry with related arboreal species.' },
  { question: 'Should I buy a wild-caught or captive-bred mossy leaf-tail gecko?', answer: 'Captive-bred only. Captive-bred Uroplatus sikorae are increasingly available from established European and North American breeders and represent the only ethical and practical choice. Wild-caught animals carry heavy parasite loads (cestodes, nematodes, coccidia documented in Uroplatus per Journal of Herpetological Medicine and Surgery), arrive dehydrated and stressed, frequently fail to acclimate, and contribute to continued pressure on already declining wild populations. Uroplatus sikorae is IUCN Red List Vulnerable (population decreasing) and CITES Appendix II — wild collection requires permits and many shipments to North America historically have had compliance and welfare problems. Verify captive-bred provenance by asking the seller for hatch date, parents\' IDs, and the original breeder\'s name. Pay 2–3× more for a documented CB animal; it is by far the better economic outcome over the animal\'s lifespan.' },
  { question: 'How do you keep humidity at 75–90% without rotting the enclosure?', answer: 'The key is cycling — humidity must rise and fall on a daily cycle, not stay pegged at 90% all day. The natural rainforest pattern is: morning fogging (RH rises to 90%+ briefly), midday partial dry-down (RH 70–80%), evening misting (RH back up to 85–90%), overnight slow dry to morning baseline (65–75%). Achieve this with an ultrasonic fogger on a timer (Mistking, Reptifogger) running 30–60 minutes morning and evening, combined with a planted bioactive substrate (live moss, leaf litter, springtails and isopod cleanup crew) that buffers humidity passively. Adequate ventilation is non-negotiable — full-mesh tops and side ventilation strips, never sealed glass. Without ventilation, persistent saturation triggers fungal infection of the skin (mycosis), gram-negative bacterial respiratory infection, and substrate rot. Monitor with a calibrated digital hygrometer placed at mid-enclosure height, not on the glass.' },
  { question: 'How does Uroplatus camouflage actually work?', answer: 'Uroplatus sikorae has one of the most refined camouflage adaptations of any vertebrate. Dermal flaps along the jaw, body, and limbs (the "fringes" that give the genus its name) break up the body outline against bark, eliminating the shadow that would otherwise reveal the animal. The flaps are pressed flat against the substrate when at rest, and the gecko reorients to align with bark grain and lichen patterns. Skin pigmentation includes both rapidly adjustable melanophores (color change in minutes) and slower iridophore reorganization that lets the animal match the green of moss versus the grey-brown of bare bark over hours. In the wild the species is essentially invisible at rest — most field surveys of Uroplatus rely on locating animals at night by eye-shine, because daytime detection rates are vanishingly low. In captivity this means: a stressed, exposed, or unwell animal will often be visible in the open during the day, which is itself a husbandry warning sign.' },
  { question: 'What do mossy leaf-tail geckos eat?', answer: 'Adult Uroplatus sikorae eat appropriately sized live arthropods two to three times per week — primarily crickets, dubia roaches, and BSFL/Phoenix worms, with occasional silkworms, hornworms, and well-managed wax worms as treats. Prey size: no wider than the space between the gecko\'s eyes, as with any insectivorous gecko. Feeders should be gut-loaded for 24 hours on a high-quality commercial diet (Repashy Bug Burger, Mazuri gut-load) and dusted with calcium plus D3 (Repashy Calcium Plus LoD or equivalent) at every feeding given that UVB exposure is typically low for this shade-dwelling species. A weekly multivitamin dust is also standard. Free-roaming feeders in a planted bioactive enclosure is acceptable for adults; juveniles should be cup-fed or feeder-bowl-fed to ensure intake and prevent escapees becoming long-term enclosure parasites.' },
  { question: 'Can I handle a Uroplatus sikorae?', answer: 'Handling is contraindicated as a default. Uroplatus species are extremely stress-sensitive — handling beyond what is necessary for veterinary examination or enclosure maintenance causes elevated cortisol, food refusal, and over time, weight loss and increased disease susceptibility. Visual observation is the appropriate mode of keeper interaction. When physical handling is necessary (health check, enclosure transfer, vet visit), use a soft small container for transport rather than the hand, support the body fully when contact is required, and minimize duration. Never grasp the tail; Uroplatus do drop tails (autotomy) and the regenerated tail loses the distinctive leaf shape, which is both a cosmetic and a likely camouflage cost.' },
]

const faqSchema = buildFAQSchema({ questions: FAQS.map(f => ({ question: f.question, answer: f.answer })) })
const combinedSchema = combineSchemas(articleSchema, faqSchema)

export default function MossyLeafTailGeckoPage() {
  return (
    <>
      <SchemaScript schema={combinedSchema} />
      <ArticleLayout
        siteId="lizard-com"
        contentType="species"
        hero={{ title: 'Mossy Leaf-Tail Gecko Care Guide', subtitle: 'Uroplatus sikorae — Madagascar\'s mossy leaf-tailed gecko is one of the most spectacular camouflage specialists in herpetology. It is also one of the most demanding species in the hobby. Captive-bred only, advanced keepers only, IUCN Vulnerable.', category: 'Species Guide — Advanced', authorName: 'Lizard.com Editorial', publishedAt: 'May 2026', readTime: '14 min' }}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Mossy Leaf-Tail Gecko', href: '/species/mossy-leaf-tail-gecko' }]}
        relatedLinks={[
          { title: 'Species Library', href: '/species', category: 'Hub' },
          { title: 'Gargoyle Gecko Care', href: '/species/gargoyle-gecko', category: 'Species' },
          { title: 'Leachianus Gecko Care', href: '/species/leachianus-gecko', category: 'Species' },
          { title: 'Crested Gecko Care', href: '/species/crested-gecko', category: 'Species' },
          { title: 'Bioactive Setup', href: '/setup/bioactive-setup', category: 'Setup' },
          { title: 'Humidity Guide', href: '/setup/humidity-guide', category: 'Setup' },
        ]}
        sidebar={<>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>Quick Reference</div>
            {[['Scientific name', 'Uroplatus sikorae'], ['Origin', 'Madagascar (eastern rainforest)'], ['Difficulty', 'Advanced'], ['Activity', 'Nocturnal'], ['Adult size', '6–8 inches total length'], ['Lifespan', '8–10+ years (CB)'], ['Min enclosure', '18×18×36 in (single adult)'], ['Temperature', '68–78°F day / 60–70°F night'], ['Humidity', '75–90% RH cycling daily'], ['UVB', 'Low — Zone 1 (UVI 0.4–1.0)'], ['Diet', 'Live insects (crickets, dubia, BSFL)'], ['IUCN', 'Vulnerable — declining'], ['CITES', 'Appendix II'], ['Sourcing', 'Captive-bred only']].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '13px' }}>
                <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
                <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Crested Gecko Care', href: '/species/crested-gecko' }, { label: 'Gargoyle Gecko Care', href: '/species/gargoyle-gecko' }, { label: 'Humidity Guide', href: '/setup/humidity-guide' }, { label: 'Parasites Guide', href: '/health/parasites-guide' }, { label: 'Respiratory Infection', href: '/health/respiratory-infection' }]} />
          <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="20 species — free for subscribers." source="species-mossy-leaf-tail-gecko" ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="species" variant="sidebar" />
        </>}
      >
        <div className="carloOS-article">
        <ArticleByline siteName="Lizard.com Editorial" publishedAt="2026-05-29T00:00:00Z" updatedAt="2026-05-29T00:00:00Z" reviewedBy="Editorial team" />
          <h2>TL;DR</h2>
          <p><strong>Mossy leaf-tail geckos</strong> (<em>Uroplatus sikorae</em>) are Madagascan rainforest geckos with the most refined dermal-flap and color-change camouflage of any reptile in the trade. They require a tightly controlled humidity envelope (75–90% RH cycling daily), cool stable temperatures (68–78°F day, hard ceiling 80°F), a planted vertical enclosure with strong ventilation, and an experienced keeper. Captive-bred only — wild-caught animals carry heavy parasite loads, fail to acclimate, and contribute to the decline of an IUCN Vulnerable species. Handling is contraindicated as a default.</p>

          <h2>Natural History and Conservation Context</h2>
          <p>The mossy leaf-tail gecko is endemic to the humid montane rainforests of eastern Madagascar, where it is most often found vertically aligned on lichen-covered tree trunks at 800–1,500 m elevation. Daytime temperatures in its native habitat rarely exceed 78°F and overnight lows drop into the low-to-mid 60s°F. Annual rainfall is high, and ambient humidity in the canopy stays above 70% essentially year-round, with mid-day partial dry-downs giving the animals a meaningful RH cycle to expect in captivity.</p>
          <p><em>Uroplatus sikorae</em> is listed as Vulnerable on the IUCN Red List with a decreasing population trend, driven by deforestation, slash-and-burn agriculture, and historical pressure from the international pet trade. It is listed on CITES Appendix II, meaning international commercial trade requires permits and quotas. Recent IUCN assessments and CITES review have repeatedly flagged sustainability concerns with wild-caught Uroplatus shipments. The hobby&apos;s ethical position — and the practical position for any keeper who wants an animal that will actually thrive — is captive-bred only.</p>

          <h2>Why This Is an Advanced-Keeper Species</h2>
          <p>Several features compound to make <em>Uroplatus sikorae</em> demanding:</p>
          <ul>
            <li><strong>Narrow thermal window.</strong> Heat-stress mortality above ~82°F is well documented. Summertime ambient temperature in many homes routinely exceeds this without active cooling.</li>
            <li><strong>Tightly cycled humidity.</strong> Both chronic over-humidification (mycosis, respiratory infection) and chronic under-humidification (dehydration, dysecdysis) cause disease. Daily RH cycling between roughly 70% and 90% is the target.</li>
            <li><strong>Stress sensitivity.</strong> Handling, vibration, frequent enclosure rearrangement, and even bright keeper-side lighting can suppress feeding and immune function.</li>
            <li><strong>Limited diagnostic familiarity.</strong> Many small-animal vets have minimal Uroplatus experience. ARAV (Association of Reptilian and Amphibian Veterinarians) membership is the right filter, and even so, calling ahead to confirm the practice sees Uroplatus is appropriate.</li>
            <li><strong>Source pipeline.</strong> Captive-bred animals exist but are expensive and not always locally available. Most pet-trade availability historically has been wild-caught, which is both an ethical and a survival problem.</li>
          </ul>

          <h2>Enclosure</h2>
          <ul>
            <li><strong>Minimum (single adult):</strong> 18 inches deep × 18 inches wide × 36 inches tall front-opening glass terrarium with substantial mesh ventilation. 24×18×36 or 18×18×48 is meaningfully better and is the responsible long-term housing for an adult.</li>
            <li><strong>Vertical orientation:</strong> Floor space is essentially irrelevant; vertical climbing surface (cork bark slabs and cork rounds, vertical branches, live trunk pieces) is the entire usable habitat. Provide multiple vertical perches and bark slabs across the depth and height of the enclosure.</li>
            <li><strong>Live plants:</strong> Pothos, philodendron, bromeliads (small species), ferns, live mosses. Live plant cover supports humidity buffering, gives the gecko visual cover, and provides the bark / lichen / leaf texture that the camouflage adaptations are built for. Silk plants are acceptable but inferior.</li>
            <li><strong>Substrate:</strong> Bioactive — organic topsoil and coco fiber base 3–4 inches deep, capped with sphagnum moss and leaf litter, seeded with tropical springtails and isopods (<em>Porcellio scaber</em>, <em>Cubaris</em> spp.) for waste processing.</li>
            <li><strong>Ventilation:</strong> Full-mesh top and at least one ventilated side strip. Sealed enclosures cause respiratory infection in this species — moving air is non-negotiable.</li>
          </ul>

          <CalloutBox variant="warning" title="Heat stress — the leading captive cause of death">
            Mossy leaf-tailed geckos die quickly above 82°F. Summer heat waves and ambient room temperatures above the species&apos; envelope kill more captive Uroplatus than disease. Plan an active cooling strategy (air-conditioned room, cooled basement, computer-fan ventilation, evaporative cooling) before acquiring this species, not after the first heatwave.
          </CalloutBox>

          <h2>Temperature</h2>
          <ul>
            <li><strong>Daytime ambient:</strong> 68–78°F (20–25°C). This is room temperature in many climates much of the year but requires active cooling in summer in many homes.</li>
            <li><strong>Nighttime drop:</strong> 60–70°F. The day-night cycle is biologically meaningful and supports normal behavior.</li>
            <li><strong>Basking spot:</strong> Not required. A small low-wattage halogen creating a 78–80°F warm corner is the maximum any keeper should provide; many established Uroplatus keepers run no supplemental heat at all and rely on ambient room temperature.</li>
            <li><strong>Hard ceiling:</strong> 80°F. Brief excursions to 82°F are tolerated; sustained exposure above 82°F causes heat-stress mortality.</li>
          </ul>
          <p>Verify temperatures with two digital probes — one at the top perch and one at the substrate — and consider a high/low-recording digital hygro-thermometer to catch overnight extremes.</p>

          <h2>Humidity — The Critical Variable</h2>
          <p>Target a cycling humidity envelope: morning fogging brings RH to 85–95% briefly, mid-day partial dry-down to 70–80%, evening misting back to 85–90%, overnight slow dry to 65–75% by morning. Achieve this with:</p>
          <ul>
            <li><strong>Ultrasonic fogger or pressurized mister (MistKing, Reptifogger)</strong> on a timer running roughly 30–60 minutes morning and evening. Pure or filtered water only — tap water mineral buildup damages foggers and leaves white residue on plants and the gecko.</li>
            <li><strong>Live moss / sphagnum top layer</strong> retains and slowly releases moisture between misting cycles.</li>
            <li><strong>Adequate ventilation</strong> — the cycle requires the enclosure to dry partially between humidification events. Without ventilation the system flatlines at 90%+ all day, which is the leading cause of fungal and bacterial disease in captive Uroplatus.</li>
            <li><strong>Calibrated digital hygrometer at mid-height</strong> — analog dials are useless at the precision this species needs.</li>
          </ul>

          <h2>Lighting and UVB</h2>
          <p>A clear day/night photoperiod is essential — 12 hours on, 12 off, adjusted seasonally if you want to mimic natural conditions. Low-level UVB is appropriate and increasingly considered welfare-positive for Uroplatus despite their crepuscular/nocturnal habits. Per Arcadia&apos;s Ferguson Zone classification this species falls into Zone 1 (UVI 0.4–1.0 at the basking position) — an Arcadia ShadeDweller 7% or Arcadia Forest 6% T5 HO tube mounted 30–40 cm above the highest perch is appropriate, with strong dappled shade provided by live plants so the animal can self-regulate exposure.</p>

          <h2>Diet</h2>
          <p>Mossy leaf-tail geckos are insectivorous. Adults eat appropriately sized live arthropods 2–3 times per week; juveniles feed every other day. Standard feeders:</p>
          <ul>
            <li><strong>Crickets</strong> (most common; gut-load 24h before feeding)</li>
            <li><strong>Dubia roaches</strong> (best calcium-to-phosphorus profile)</li>
            <li><strong>BSFL / Phoenix worms</strong> (high natural calcium — reduces dependence on dusting)</li>
            <li><strong>Silkworms, hornworms</strong> (occasional variety)</li>
            <li><strong>Avoid:</strong> mealworms (high fat, low Ca:P, chitin-heavy), wax worms (treat only), wild-caught insects (parasites and pesticides)</li>
          </ul>
          <p><strong>Supplementation:</strong> calcium plus D3 (Repashy Calcium Plus LoD or equivalent) at every feeding; multivitamin (Repashy Vitamin A Plus or Arcadia EarthPro-A) once weekly. Because UVB exposure is intentionally low for this shade-dwelling species, dietary D3 supplementation matters.</p>

          <h2>Water</h2>
          <p>A small shallow water dish on the substrate is appropriate but is rarely the primary water source — most hydration comes from licking misted droplets off leaves, bark, and the enclosure walls. The morning and evening misting cycles are the de facto drinking opportunity. A dehydrated Uroplatus will show sunken eyes, loose belly skin, and stringy or absent urates; correct husbandry, do not attempt to force-water the animal.</p>

          <h2>Handling — Don&apos;t, As a Default</h2>
          <p>Visual observation is the appropriate keeper interaction mode for this species. Handling beyond brief health checks and necessary transfers is stress-inducing and contraindicated for ongoing wellbeing. When physical contact is necessary, use a small soft container rather than the bare hand, support the body fully, never grasp the tail, and minimize duration. Repeated handling correlates with food refusal and weight loss in captive Uroplatus and is one of the more common keeper-induced declines.</p>

          <h2>Common Health Issues</h2>
          <ul>
            <li><strong>Parasites (in wild-caught animals):</strong> Cestodes, nematodes, and coccidia documented across the genus in case reports in the <em>Journal of Herpetological Medicine and Surgery</em>. Strong reason to buy captive-bred only.</li>
            <li><strong>Respiratory infection:</strong> Open-mouth breathing, mucus, lethargy. Often secondary to chronic over-humidification with inadequate ventilation, or chronic cold. Refer to an ARAV-listed reptile veterinarian for culture-and-sensitivity-driven antibiotic therapy per Mader&apos;s <em>Reptile Medicine and Surgery</em>.</li>
            <li><strong>Dermal mycosis (fungal skin disease):</strong> Plaques or discolored patches on the skin. Often associated with persistent saturated humidity without dry cycling. Treat with husbandry correction plus veterinary antifungal therapy as directed.</li>
            <li><strong>Heat-stress mortality:</strong> Sudden death following an unobserved temperature spike. Prevention is the only treatment — active cooling and recording hygro-thermometers.</li>
            <li><strong>Dehydration and dysecdysis (stuck shed):</strong> Inadequate misting cycles. Correct misting and offer a humid hide briefly during shed periods. See our <a href="/health/dysecdysis">shedding guide</a>.</li>
            <li><strong>Calcium deficiency / MBD:</strong> Insidious in this species because UVB is intentionally low. Strict supplementation discipline is required. See our <a href="/health/metabolic-bone-disease">MBD guide</a>.</li>
          </ul>

          <h2>When to See a Reptile Vet</h2>
          <p>Find an ARAV-listed reptile vet before acquiring the animal, and confirm by phone that the practice has Uroplatus experience. Same-day evaluation is warranted for: open-mouth breathing, audible respiratory noise, any skin plaque or discoloration, sustained food refusal beyond 2–3 weeks, weight loss, neurological signs, or any suspected heat exposure event.</p>

          <h2>Citations</h2>
          <ul>
            <li>Mader, D. R. &amp; Divers, S. J. (eds.) — <em>Reptile Medicine and Surgery</em>, 3rd edition. Elsevier. Uroplatus husbandry and clinical chapters.</li>
            <li>IUCN Red List — <em>Uroplatus sikorae</em> assessment (Vulnerable, population decreasing).</li>
            <li>CITES Appendix II listing for <em>Uroplatus</em> spp. and recent significant-trade review documents.</li>
            <li><em>Journal of Herpetological Medicine and Surgery</em> — parasite case literature in wild-caught Uroplatus and respiratory disease in arboreal geckos.</li>
            <li>Association of Reptilian and Amphibian Veterinarians (ARAV) — <a href="https://arav.org" rel="noopener" target="_blank">arav.org</a> member directory.</li>
            <li>Arcadia Reptile — Ferguson Zone framework for shade-dwelling and crepuscular geckos.</li>
          </ul>

          <h2>Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />
        <AffiliateDisclosure variant="inline" siteId="lizard-com" />
        <div style={{ background: 'var(--brand-surface, #1a1f2b)', border: '1px solid var(--brand-border, #2d3548)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #8a96ad)', marginBottom: '8px' }}>Mossy Leaf Tail Gecko — Setup Equipment</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #8a96ad)', lineHeight: 1.55 }}>Browse enclosures, UVB lighting, thermostats, and substrate sized for mossy leaf tail gecko care. Lizard.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial inclusion above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/mossy%20leaf%20tail%20gecko%20setup?s=species-mossy-leaf-tail-gecko" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Mossy Leaf Tail Gecko Setup on Amazon →</a>
            <a href="/go/chewy-brand/mossy%20leaf%20tail%20gecko%20setup?s=species-mossy-leaf-tail-gecko" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #7bc25c)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

        </div>
      </ArticleLayout>
    </>
  )
}

import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, FAQAccordion, CrossPortfolioCard, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas, SchemaScript, CalloutBox } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Gargoyle Gecko Care Guide — Diet, Humidity, Setup | Lizard.com', description: 'Gargoyle gecko (Rhacodactylus auriculatus) care: powdered CGD, 60–75% humidity, 72–80°F, vertical arboreal setup, tail regeneration.', path: '/species/gargoyle-gecko', type: 'article' })

const articleSchema = buildArticleSchema({ siteId: 'lizard-com', title: 'Gargoyle Gecko Care Guide', description: 'Setup, diet, humidity, and health for Rhacodactylus auriculatus — the New Caledonian gargoyle gecko.', url: 'https://lizard.com/species/gargoyle-gecko', imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2026-05-29T00:00:00Z', modifiedAt: '2026-05-29T00:00:00Z' })

const FAQS = [
  { question: 'Are gargoyle geckos easier or harder than crested geckos?', answer: 'Husbandry difficulty is comparable — both are New Caledonian Rhacodactylus species that thrive on the same powdered diet base (Pangea, Repashy, Black Panther Zoological), share similar humidity needs, and accept similar vertical enclosures. Gargoyles are generally less prone to floor-roaming stress because they tolerate slightly drier air (60–75% RH vs the crested gecko\'s 60–80%) and are less fragile during gentle handling. The single most important difference for keepers is temperament: gargoyles are more food-motivated, can be more territorial (do not cohabit adults, especially males), and will sometimes take pinky-sized prey or larger insects that a crested gecko would refuse. Mader\'s Reptile Medicine and Surgery (Elsevier) groups all three Rhacodactylus species under similar husbandry guidance for that reason.' },
  { question: 'Can gargoyle geckos regrow their tails?', answer: 'Yes — and this is the headline difference from the crested gecko (Correlophus ciliatus), which cannot regenerate a dropped tail. Gargoyle geckos (Rhacodactylus auriculatus) regrow the tail after autotomy, though the regenerated tail differs in scalation, color pattern, and internal structure (cartilaginous rod rather than vertebrae). Regrowth takes several months and looks blunter than the original. The practical implication: tail loss is still an event you want to avoid (it is metabolically expensive and indicates significant stress), but it is not the permanent cosmetic and behavioral change it is in cresteds. Reduce handling for several weeks if autotomy occurs, ensure protein is adequate to support regrowth, and monitor the drop site for infection.' },
  { question: 'What do I actually feed a gargoyle gecko?', answer: 'The dietary backbone is a commercial powdered crested gecko diet (CGD) — Pangea, Repashy Superfoods, or Black Panther Zoological — mixed with water to a yogurt consistency and offered in a shallow dish two to three times per week. These diets are formulated as nutritionally complete meal replacements based on the Rhacodactylus genus and are validated by years of captive-breeding success. Supplement with appropriately sized live insects (small dubia roaches, BSFL, the occasional cricket) one to two times per week, dusted with calcium plus D3 if no UVB is provided. Gargoyles will also accept the occasional small pinky mouse as adults (every 2–4 weeks at most) — they are more carnivorous than cresteds — but this should be a supplement, not a staple, because excess animal protein is implicated in renal disease in captive Rhacodactylus per case reports in the Journal of Herpetological Medicine and Surgery.' },
  { question: 'Do gargoyle geckos need UVB?', answer: 'Gargoyle geckos are crepuscular to nocturnal — wild UV exposure is minimal — and they can be kept successfully without UVB provided diet and D3 supplementation are correct. That said, current best-practice keeper guidance and Arcadia\'s Ferguson Zone framework (gargoyles fall into Zone 1, UV Index 0.4–0.8 at the basking position) supports low-level UVB as an enrichment and welfare improvement. A T5 HO Arcadia Shadedweller 7% or Arcadia Forest 6% tube positioned 30–40 cm from the highest perch — on a 10–12 hour photoperiod — provides this without overwhelming a nocturnal species. With UVB, you can reduce dietary D3 frequency to once weekly; without it, every commercial CGD feeding already contains D3 and additional dusting on insects with calcium plus D3 twice weekly is appropriate.' },
  { question: 'Can I house two gargoyle geckos together?', answer: 'Two males will fight, full stop — this is documented across the Rhacodactylus genus and confirmed in routine veterinary case work for bite wounds in cohabited animals. Male-female pairs will breed continuously, which is hard on the female (egg production every 3–5 weeks during the season depletes calcium reserves and stresses the body). Two females sometimes cohabit successfully in a sufficiently large enclosure (45+ gallons) with multiple feeding stations and visual breaks, but bullying still occurs and one animal frequently ends up underweight or refusing food. The recommended default — and what experienced Rhacodactylus breeders consistently advise — is solitary housing. Visual separation between adjacent enclosures is also a good idea, because the sight of a conspecific can trigger stress behaviors even when no contact is possible.' },
  { question: 'Why is my gargoyle gecko refusing the CGD?', answer: 'Three causes account for most refusals: brand transition (gargoyles imprint on a specific flavor — switch slowly by mixing the new brand in 25/50/75/100% over two weeks), temperature too cool (digestion slows below 70°F and appetite drops), or breeding behavior (gravid females and breeding males will eat less for weeks at a time and this is normal). Persistent food refusal lasting more than 10–14 days in a non-breeding animal with normal temperatures warrants a veterinary check — refer to an ARAV-listed reptile veterinarian. Common medical causes include cryptosporidiosis (chronic wasting despite eating), MBD (jaw weakness preventing chewing), parasites, and dehydration from insufficient humidity.' },
]

const faqSchema = buildFAQSchema({ questions: FAQS.map(f => ({ question: f.question, answer: f.answer })) })
const combinedSchema = combineSchemas(articleSchema, faqSchema)

export default function GargoyleGeckoPage() {
  return (
    <>
      <SchemaScript schema={combinedSchema} />
      <ArticleLayout
        siteId="lizard-com"
        contentType="species"
        hero={{ title: 'Gargoyle Gecko Care Guide', subtitle: 'Rhacodactylus auriculatus — the New Caledonian gargoyle gecko is a hardy, food-motivated, low-maintenance arboreal species. Easier than chameleons, less fragile than cresteds, and one of the few geckos that regrows its tail after autotomy.', category: 'Species Guide — Beginner / Intermediate', authorName: 'Lizard.com Editorial', authorAvatar: '🦎', publishedAt: 'May 2026', readTime: '13 min' }}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Gargoyle Gecko', href: '/species/gargoyle-gecko' }]}
        relatedLinks={[
          { title: 'Species Library', href: '/species', category: 'Hub' },
          { title: 'Crested Gecko Care', href: '/species/crested-gecko', category: 'Species' },
          { title: 'Leachianus Gecko Care', href: '/species/leachianus-gecko', category: 'Species' },
          { title: 'Day Gecko Care', href: '/species/day-gecko', category: 'Species' },
          { title: 'Humidity Guide', href: '/setup/humidity-guide', category: 'Setup' },
          { title: 'Dysecdysis (Stuck Shed)', href: '/health/dysecdysis', category: 'Health' },
        ]}
        sidebar={<>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>Quick Reference</div>
            {[['Scientific name', 'Rhacodactylus auriculatus'], ['Origin', 'New Caledonia (southern Grande Terre)'], ['Difficulty', 'Beginner / Intermediate'], ['Activity', 'Nocturnal / Crepuscular'], ['Adult size', '8–10 inches total length'], ['Lifespan', '15–20+ years'], ['Min enclosure', '18×18×24 in (45×45×60 cm)'], ['Temperature', '72–80°F day / 65–72°F night'], ['Humidity', '60–75% RH'], ['UVB', 'Optional (low — Zone 1, UVI 0.4–0.8)'], ['Diet', 'Powdered CGD + insects (+ occasional pinky)'], ['Tail regen', 'Yes (unlike crested gecko)']].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '13px' }}>
                <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
                <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Crested Gecko Care', href: '/species/crested-gecko' }, { label: 'Day Gecko Care', href: '/species/day-gecko' }, { label: 'Humidity Guide', href: '/setup/humidity-guide' }, { label: 'UVB Lighting Guide', href: '/setup/uvb-lighting-guide' }, { label: 'Reptile Feeding Guide', href: '/health/reptile-feeding-guide' }]} />
          <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="20 species — free for subscribers." source="species-gargoyle-gecko" ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="species" variant="sidebar" />
        </>}
      >
        <div className="carloOS-article">
        <ArticleByline siteName="Lizard.com Editorial" publishedAt="2026-05-29T00:00:00Z" updatedAt="2026-05-29T00:00:00Z" reviewedBy="Editorial team" />
          <h2>TL;DR</h2>
          <p><strong>Gargoyle geckos</strong> (<em>Rhacodactylus auriculatus</em>) are New Caledonian arboreal geckos closely related to crested and leachianus geckos. They are nocturnal, tolerant of household temperatures (72–80°F), and thrive on a base of commercial powdered crested-gecko diet plus occasional insects. A bioactive 18×18×24 inch vertical terrarium with cork branches, live plants, and 60–75% humidity (nightly misting) is sufficient. Unlike crested geckos, gargoyles regenerate dropped tails. House individually — males fight and pairs breed continuously.</p>

          <h2>Origin and Natural History</h2>
          <p>Gargoyle geckos are endemic to southern Grande Terre, the main island of New Caledonia in the southwest Pacific. They inhabit closed-canopy humid forest and scrubland at low to mid elevation, where nighttime temperatures rarely drop below the mid-60s°F and daytime temperatures stay in the high 70s. The common name comes from the cranial bumps and ridges (auricular projections) that give adults a sculptural, almost grotesque profile. <em>R. auriculatus</em> sits in the same genus as the giant New Caledonian leachianus gecko (<em>R. leachianus</em>) and was historically grouped with the crested gecko, which has since been reclassified into the genus <em>Correlophus</em>. The husbandry envelope for the entire group is similar, and Mader&apos;s <em>Reptile Medicine and Surgery</em> (Elsevier) treats them as a coherent group for clinical care.</p>
          <p>Wild populations are protected under New Caledonian law and CITES Appendix II since 2025; all legitimate pet-trade animals in North America and Europe are captive-bred from founder stock established in the 1990s. Captive-bred gargoyles are robust, well-adapted to commercial diets, and generally free of the parasitic and behavioral complications that affect wild-caught Madagascan or Indonesian species.</p>

          <h2>Enclosure — Vertical, Arboreal, Planted</h2>
          <p>Gargoyle geckos are obligate climbers. Floor space matters less than vertical climbing surface and overhead cover. A single adult thrives in:</p>
          <ul>
            <li><strong>Minimum:</strong> 18 inches deep × 18 inches wide × 24 inches tall front-opening glass terrarium (Exo Terra, Zoo Med, Dubia.com clones) — about 45 liters.</li>
            <li><strong>Recommended:</strong> 18×18×36 in (60 cm tall) or larger. Vertical space is what the animal uses; taller is meaningfully better. PVC and bioactive-friendly enclosures (Zen Habitats Meridian, HabiStat) hold humidity better than thin-glass tanks.</li>
            <li><strong>Furnishings:</strong> 2–3 cork bark slabs or branches angled corner-to-corner, several real or artificial vines for traverse, live or silk plants (pothos, philodendron, sansevieria — all gargoyle-safe) to provide visual cover and humidity buffering. Leave a clear horizontal feeding ledge at mid-height.</li>
          </ul>
          <p>Front-opening enclosures reduce stress — top-opening tanks present the keeper as an overhead predator, which gargoyles are wired to flee. Provide at least one hide at mid-height (cork tube or hollow log) and one near the substrate for daytime rest.</p>

          <CalloutBox variant="tip" title="Cohabitation — don&apos;t">
            Do not house adult gargoyle geckos together. Two males will fight to the point of bite wounds, autotomy, or death. Pairs breed continuously and the female depletes calcium reserves laying clutches every 3–5 weeks during the season. Even two females in the same enclosure regularly results in subtle bullying — one animal underweight, the other taking all food. Solitary housing is the species default.
          </CalloutBox>

          <h2>Temperature</h2>
          <ul>
            <li><strong>Daytime ambient:</strong> 72–80°F (22–27°C). Room temperature in most homes is fine.</li>
            <li><strong>Basking spot (if provided):</strong> 80–82°F max — a low-wattage halogen or DHP creating a small warm zone at the top branch. Many keepers run no supplemental heat at all if room temps stay above 70°F.</li>
            <li><strong>Nighttime drop:</strong> 65–72°F is desirable. Gargoyles experience cool nights in the wild and respond positively to a 10°F day/night differential.</li>
            <li><strong>Hard ceiling:</strong> Do not exceed 85°F at any point in the enclosure. Sustained temperatures above 85°F are stressful and have been associated with rapid decline and death in New Caledonian Rhacodactylus species; this is the most common cause of summertime keeper-induced loss.</li>
          </ul>
          <p>Verify with a digital probe thermometer at the basking spot and a second probe at the substrate. Analog dial thermometers are inaccurate and not appropriate for any reptile setup.</p>

          <h2>Humidity</h2>
          <p>Target a daytime baseline of 60–70% relative humidity rising to 75–85% at night following misting. Gargoyles tolerate slightly drier air than crested geckos, which is a meaningful welfare advantage in dry climates and during winter heating. Achieve the target with:</p>
          <ul>
            <li><strong>Nightly hand-misting or programmed mister (MistKing, Exo Terra Monsoon).</strong> One heavy fogging in the evening, allowed to dry partially overnight, is the natural cycle and supports shedding.</li>
            <li><strong>Live plant cover</strong> buffers humidity passively and provides a much more stable RH envelope than bare tanks.</li>
            <li><strong>A bioactive substrate</strong> (organic topsoil, coco fiber, sphagnum moss, leaf litter; 3–4 inches deep) with isopods and springtails will hold moisture and process waste indefinitely. This is the recommended long-term setup.</li>
          </ul>
          <p>Verify with a digital hygrometer placed mid-enclosure (not on the glass, not next to the mister nozzle). Persistently saturated, soggy substrate or RH stuck at 90%+ all day promotes fungal disease and respiratory infection — RH must cycle.</p>

          <h2>Lighting and UVB</h2>
          <p>A 10–12 hour photoperiod via timer is essential for circadian behavior. Low-level UVB is optional but increasingly recommended by experienced Rhacodactylus keepers as a welfare and behavioral-enrichment measure. Per Arcadia&apos;s Ferguson Zone classification, gargoyles fall into Zone 1 (UVI 0.4–0.8 at the basking position) — use an Arcadia ShadeDweller 7% or Arcadia Forest 6% T5 HO tube mounted 30–40 cm above the highest perch.</p>
          <p>Replace UVB tubes on a 12-month schedule; output decays well before the visible light dims. If you use UVB, reduce dietary D3 to roughly once weekly. Without UVB, dust insects with calcium plus D3 twice weekly — commercial powdered CGD already contains D3, so additional supplementation comes only from the insect side.</p>

          <h2>Diet — The Pangea / Repashy / Black Panther Triangle</h2>
          <p>Gargoyle geckos thrive on commercial powdered Rhacodactylus diets. These are nutritionally complete formulations — fruit, protein source (insect meal in most formulas, plus optional egg or crustacean meal), vitamins, calcium, and D3 — developed and refined over two decades of captive Rhacodactylus husbandry. The three standard brands are:</p>
          <ul>
            <li><strong>Pangea Fruit Mix Complete</strong> (multiple flavors — Watermelon, Banana &amp; Apricot, Fig &amp; Insect, etc.)</li>
            <li><strong>Repashy Superfoods Crested Gecko Diet</strong> (despite the name, formulated and validated for the genus)</li>
            <li><strong>Black Panther Zoological MRP</strong></li>
          </ul>
          <p>Mix with cool water to a ketchup-to-yogurt consistency, offer in a shallow dish at lights-out, leave for 24 hours, then remove. Feed two to three times per week for an adult; juveniles get fresh diet every other day.</p>
          <p><strong>Live insect supplement:</strong> One to two insect feedings per week — appropriately sized dubia roaches, BSFL, the occasional cricket or hornworm. Gut-load insects on collard greens and a commercial gut-load (Repashy Bug Burger) for 24 hours before feeding. Dust with calcium (with or without D3 depending on UVB status; see above).</p>
          <p><strong>Pinky mice:</strong> Gargoyles will accept the occasional small pinky as adults — but this should be a treat at most every 2–4 weeks, not a staple. Chronic high-protein animal-based diets are implicated in renal disease in captive <em>Rhacodactylus</em> per case reports in the <em>Journal of Herpetological Medicine and Surgery</em>.</p>

          <h2>Water</h2>
          <p>A shallow water dish at the floor level is appropriate, refreshed daily. Most of the gecko&apos;s hydration in practice comes from licking misted droplets off leaves and enclosure walls — this is the natural drinking behavior of canopy geckos and another reason the nightly misting cycle matters.</p>

          <h2>Handling</h2>
          <p>Gargoyle geckos tolerate brief handling once acclimated (give a new animal 2–3 weeks to settle before any handling). Move slowly, allow the animal to walk hand-over-hand rather than gripping it, and limit sessions to 5–10 minutes a few times per week. Never grasp the tail — although gargoyles regenerate, autotomy is metabolically expensive and indicates significant stress. If the animal opens its mouth, vocalizes (a low growl or bark), or thrashes, return it to the enclosure and try again another day.</p>

          <h2>Common Health Issues</h2>
          <ul>
            <li><strong>Metabolic Bone Disease (MBD):</strong> Soft jaw, kinked tail, tremors, inability to climb. Caused by inadequate calcium or D3. Prevent with correct supplementation and consider low-level UVB. See our <a href="/health/metabolic-bone-disease">MBD guide</a>.</li>
            <li><strong>Dysecdysis (stuck shed):</strong> Constricting rings on toes after a shed, or retained shed on the eye caps. Increase humidity briefly to 85% for 24–48 hours and soak in shallow lukewarm water for 15 minutes. See our <a href="/health/dysecdysis">shedding guide</a>.</li>
            <li><strong>Cryptosporidiosis (Crypto):</strong> Chronic weight loss despite eating, regurgitation, wasting. Incurable. Highly contagious to other reptiles — strict quarantine and disposable equipment. Refer to an ARAV-listed reptile veterinarian for diagnosis (fecal PCR) and supportive management.</li>
            <li><strong>Renal disease:</strong> Chronic high-protein diets (excess pinky mice, all-insect diets, low-quality non-CGD) are implicated in renal failure in captive Rhacodactylus. Stick to the commercial CGD base.</li>
            <li><strong>Respiratory infection:</strong> Open-mouth breathing, mucus, lethargy. Often secondary to chronic over-humidification or chronic cold. Adjust husbandry and refer to a reptile vet — culture-and-sensitivity-driven antibiotics are the standard of care per Mader&apos;s <em>Reptile Medicine and Surgery</em>.</li>
            <li><strong>Tail loss (autotomy):</strong> Tail will regenerate but it is a stress signal. Reduce handling, audit enclosure stressors (cohab? overheating? loud environment?), and ensure protein intake is adequate to support regrowth.</li>
          </ul>

          <h2>When to See a Reptile Vet</h2>
          <p>Locate an ARAV (Association of Reptilian and Amphibian Veterinarians, arav.org) member clinic before you need one. Same-day evaluation is warranted for: food refusal lasting more than two weeks in an adult outside breeding season, visible weight loss, open-mouth breathing, persistent regurgitation, neurological signs (tremor, head tilt, loss of climbing coordination), or any wound from cohabitation.</p>

          <h2>Citations</h2>
          <ul>
            <li>Mader, D. R. &amp; Divers, S. J. (eds.) — <em>Reptile Medicine and Surgery</em>, 3rd edition. Elsevier. Group husbandry guidance for <em>Rhacodactylus</em> spp.</li>
            <li>Association of Reptilian and Amphibian Veterinarians (ARAV) — <a href="https://arav.org" rel="noopener" target="_blank">arav.org</a> member directory and position statements.</li>
            <li><em>Journal of Herpetological Medicine and Surgery</em> — case literature on renal disease in captive Rhacodactylus and on dietary protein management.</li>
            <li>Arcadia Reptile — Ferguson Zone classification and UV index targets for nocturnal/crepuscular geckos.</li>
            <li>CITES Appendix II listing for <em>Rhacodactylus auriculatus</em>.</li>
          </ul>

          <h2>Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />
        <div style={{ background: 'var(--brand-surface, #1a1f2b)', border: '1px solid var(--brand-border, #2d3548)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #8a96ad)', marginBottom: '8px' }}>Gargoyle Gecko — Setup Equipment</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #8a96ad)', lineHeight: 1.55 }}>Browse enclosures, UVB lighting, thermostats, and substrate sized for gargoyle gecko care. Lizard.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial inclusion above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/gargoyle%20gecko%20setup?s=species-gargoyle-gecko" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Gargoyle Gecko Setup on Amazon →</a>
            <a href="/go/chewy-brand/gargoyle%20gecko%20setup?s=species-gargoyle-gecko" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #7bc25c)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

        </div>
      </ArticleLayout>
    </>
  )
}

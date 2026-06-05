import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, FAQAccordion, CrossPortfolioCard, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas, SchemaScript, CalloutBox } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Savannah Monitor Care Guide — Burrowing, Heat, Diet | Lizard.com', description: 'Savannah monitor (Varanus exanthematicus) care. 18+ inch substrate for burrowing, 130–150°F basking, insectivorous diet, avoiding the obesity epidemic.', path: '/species/savannah-monitor', type: 'article' })

const articleSchema = buildArticleSchema({ siteId: 'lizard-com', title: 'Savannah Monitor Care Guide', description: 'Burrowing substrate, high basking temperatures, insectivorous diet, and the obesity problem in captive Varanus exanthematicus.', url: 'https://lizard.com/species/savannah-monitor', imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2026-05-29T00:00:00Z', modifiedAt: '2026-05-29T00:00:00Z' })

const FAQS = [
  { question: 'Do savannah monitors really need to burrow?', answer: 'Yes — burrowing is a fundamental, non-negotiable behavioral and physiological need for Varanus exanthematicus, not an optional enrichment. In their native West African savanna habitat, savannah monitors spend the dry season (and a significant portion of the wet season) inside self-constructed burrows that buffer them from temperature extremes, retain skin moisture, and provide security. Peer-reviewed behavioral and field ecology literature on Varanus exanthematicus — including work by Bennett, Pianka, and others published in journals such as the Journal of Herpetology and Mertensiella — repeatedly emphasizes that burrowing is central to the species\' thermoregulation and water balance. In captivity, an animal that cannot dig a working burrow shows persistent stress behaviors (pacing, glass-surfing, attempted excavation against the enclosure walls), chronic dehydration despite available water, and elevated disease incidence. The substrate depth needed for a functional adult burrow is a hard 18 inches minimum (24+ inches is meaningfully better) of a soil-and-sand mixture that holds tunnel shape when slightly moist. This is the single most violated husbandry requirement for this species in the pet trade.' },
  { question: 'What is the obesity epidemic in pet savannah monitors?', answer: 'The dominant captive welfare problem in Varanus exanthematicus is widespread, severe, life-shortening obesity caused by overfeeding rodents. Despite years of corrected guidance in the peer-reviewed Varanus literature (Daniel Bennett and others have published extensively on wild-stomach-contents analyses showing that wild savannah monitors are overwhelmingly insectivorous, eating beetles, orthopterans, scorpions, snails, millipedes, and small vertebrates only opportunistically), the pet-trade default for decades has been all-rodent diets that produce obese, fatty-livered, kidney-compromised animals that die at 6–8 years rather than the species\' actual potential of 15–20+ years. Cited in chapters of Mader\'s Reptile Medicine and Surgery (Elsevier) and routinely seen in clinical case reports in the Journal of Herpetological Medicine and Surgery: hepatic lipidosis, gout, renal failure, and shortened lifespan in over-fed captive monitors. The corrected diet for captive savannah monitors is overwhelmingly insectivorous (large dubia roaches, hornworms, crickets, snails, the occasional cooked egg) with rodents as occasional supplementation at most — not the diet staple they have been treated as in older keeping literature.' },
  { question: 'How big does a savannah monitor get?', answer: 'Adult savannah monitors typically reach 2.5–4 feet (75–120 cm) total length, with males larger than females. Healthy weight for a 3-foot adult is approximately 2–4 kg (4–9 lb); obese captives routinely exceed 7+ kg and look like inflated cylinders rather than the lean, muscular animals they should be. Lifespan in well-kept captive animals is 15–20+ years; in overfed obese animals it is commonly 6–8 years. Enclosure planning: the standard adult minimum is 8 ft long × 4 ft wide × 4 ft tall — and even this is essentially a behavioral minimum for an animal that, in the wild, ranges over hectares. Larger custom enclosures and supervised outdoor space (in climates and seasons where outdoor keeping is viable) are meaningful welfare improvements.' },
  { question: 'What are the correct basking temperatures for a savannah monitor?', answer: 'High — significantly higher than most novice keepers expect. The basking surface temperature for Varanus exanthematicus should be 130–150°F (55–65°C) measured by IR temperature gun directly on the basking platform. This is hotter than most reptiles and is required for proper digestion of the species\' high-fat insectivorous diet and for the elevated body core temperatures the animal naturally seeks. Achieve this with a cluster of halogen flood bulbs (3–4 × 50–75W bulbs aimed at the same large flat basking surface — stone, brick, or sealed slate) rather than a single high-wattage bulb (more even heat distribution, more localized basking radius). Cool side should be in the high 70s to low 80s°F (around 80°F) to give the animal a meaningful thermal gradient. Nighttime can drop to 70–78°F. UVB is essential — Arcadia 12% Desert T5 HO at the basking position, replaced annually. Verify temperatures with multiple digital probe thermometers.' },
  { question: 'Are savannah monitors good pets?', answer: 'For most prospective keepers, no — they are commonly recommended in the trade and routinely fail in captivity for predictable husbandry reasons. The species needs an enclosure most homes cannot accommodate (8×4×4 ft minimum), substrate depth most keepers will not commit to (18+ inches), a diet most pet stores will not stock (large insect feeders in significant volumes), and basking temperatures (130–150°F) that require enclosure designs most beginner setups cannot safely deliver. Add a 15–20 year lifespan, an animal that can bite seriously when stressed, and the regulatory restrictions on large monitors in some jurisdictions, and the practical match between this species and the average pet-keeper is poor. Experienced large-lizard keepers with the space, budget, and understanding of the corrected (insectivorous, burrowing-required) husbandry can keep savannah monitors very successfully — and a well-kept savannah monitor is one of the more interesting captive lizards available. The species\' bad pet-trade reputation is overwhelmingly a husbandry failure, not an animal failure.' },
  { question: 'Where do savannah monitors come from in the pet trade?', answer: 'Nearly all pet-trade savannah monitors in North America and Europe are wild-caught imports from West Africa — Togo, Ghana, Benin, and surrounding countries — typically as juveniles. Captive breeding is rare and most "captive-bred" labels in the trade are unverified or misleading. This has significant implications: wild-caught animals arrive heavily parasitized (multiple nematodes, cestodes, and protozoa documented in fecal exams), dehydrated, and stressed. Quarantine is essential — 60–90 days separate from any other reptile, with multiple fecal exams from an ARAV-listed reptile veterinarian and treatment as indicated. Mortality in the first year of captivity is high in this species, and a large fraction of it is attributable to inadequate quarantine, parasite burden, and acclimation stress on top of the broader husbandry problems. The species is listed on CITES Appendix II; international trade is regulated but enforcement and welfare standards in source-country exports are variable.' },
]

const faqSchema = buildFAQSchema({ questions: FAQS.map(f => ({ question: f.question, answer: f.answer })) })
const combinedSchema = combineSchemas(articleSchema, faqSchema)

export default function SavannahMonitorPage() {
  return (
    <>
      <SchemaScript schema={combinedSchema} />
      <ArticleLayout
        siteId="lizard-com"
        contentType="species"
        hero={{ title: 'Savannah Monitor Care Guide', subtitle: 'Varanus exanthematicus — the African savannah monitor is a powerful, intelligent, burrowing insectivore that is among the most consistently mis-kept reptiles in the pet trade. Done right, a 15–20 year companion; done wrong, an obese 6-year tragedy.', category: 'Species Guide — Advanced', authorName: 'Lizard.com Editorial', authorAvatar: '🦎', publishedAt: 'May 2026', readTime: '15 min' }}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Savannah Monitor', href: '/species/savannah-monitor' }]}
        relatedLinks={[
          { title: 'Species Library', href: '/species', category: 'Hub' },
          { title: 'Nile Monitor Care', href: '/species/nile-monitor', category: 'Species' },
          { title: 'Argentine Tegu Care', href: '/species/argentine-black-and-white-tegu', category: 'Species' },
          { title: 'Reptile Obesity', href: '/health/reptile-obesity', category: 'Health' },
          { title: 'Feeder Insects Compared', href: '/health/feeder-insects-compared', category: 'Health' },
          { title: 'Enclosure Size Guide', href: '/setup/terrarium-size-guide', category: 'Setup' },
        ]}
        sidebar={<>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>Quick Reference</div>
            {[['Scientific name', 'Varanus exanthematicus'], ['Origin', 'West African savanna (Togo, Ghana, Benin)'], ['Difficulty', 'Advanced'], ['Activity', 'Diurnal'], ['Adult size', '2.5–4 ft (males larger)'], ['Adult weight (healthy)', '2–4 kg'], ['Lifespan (well-kept)', '15–20+ years'], ['Min adult enclosure', '8×4×4 ft'], ['Substrate depth', '18+ inches (24+ preferred)'], ['Basking surface', '130–150°F'], ['Cool side', '~80°F'], ['Humidity', '50–60% RH (with humid burrow)'], ['UVB', 'Arcadia 12% — Zone 3–4'], ['Diet', 'Insectivore (rodents minimal/none)']].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '13px' }}>
                <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
                <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Argentine Tegu Care', href: '/species/tegu' }, { label: 'Bearded Dragon Care', href: '/species/bearded-dragon' }, { label: 'UVB Lighting Guide', href: '/setup/uvb-lighting-guide' }, { label: 'Temperature Guide', href: '/setup/temperature-guide' }, { label: 'Reptile Feeding Guide', href: '/health/reptile-feeding-guide' }, { label: 'Parasites Guide', href: '/health/parasites-guide' }]} />
          <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="20 species — free for subscribers." source="species-savannah-monitor" ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="species" variant="sidebar" />
        </>}
      >
        <div className="carloOS-article">
        <ArticleByline siteName="Lizard.com Editorial" publishedAt="2026-05-29T00:00:00Z" updatedAt="2026-05-29T00:00:00Z" reviewedBy="Editorial team" />
          <h2>TL;DR</h2>
          <p><strong>Savannah monitors</strong> (<em>Varanus exanthematicus</em>) are West African burrowing lizards that are routinely mis-kept in the pet trade and routinely die early as a result. Done correctly, they require an 8×4×4 ft minimum adult enclosure with 18+ inches of burrow-grade substrate, 130–150°F basking surface temperatures, Arcadia 12% UVB, and an overwhelmingly insectivorous diet (large dubia roaches, hornworms, crickets, snails) with rodents used minimally if at all. The obesity epidemic in pet savannah monitors — fed all-rodent diets in small enclosures with shallow substrate — is a husbandry failure, not a species failure. Wild-caught imports require strict 60–90 day quarantine with veterinary fecal exams.</p>

          <h2>Natural History — Why This Species Burrows</h2>
          <p>Savannah monitors inhabit the West African savanna belt — Togo, Ghana, Benin, Nigeria, and adjacent regions — where the climate is sharply seasonal: a hot wet season with abundant prey, and a long hot dry season when the landscape becomes inhospitable. The species\' answer is the burrow. Wild savannah monitors spend the dry season largely underground in self-excavated burrows that buffer temperature, retain skin moisture, and provide security. Active surface time during the dry season is limited to relatively brief foraging bouts; the burrow is the default state of the animal.</p>
          <p>Field-ecology work by Daniel Bennett and others, published across the peer-reviewed Varanus literature including the <em>Journal of Herpetology</em>, <em>Biawak</em> (the IVS journal of monitor lizard research), and <em>Mertensiella</em>, has repeatedly emphasized that the species is primarily insectivorous in the wild (stomach-content analyses consistently show beetles, orthopterans, scorpions, snails, and millipedes as the dietary staples, with small vertebrates as occasional opportunistic prey). This is the diet captive savannah monitors require and the diet the pet-trade default fails to provide.</p>

          <h2>The Obesity Epidemic — The Single Biggest Problem in Captive Savannah Monitors</h2>
          <p>For decades, the pet-trade care guidance for savannah monitors recommended all-rodent diets fed multiple times per week. The result is the captive savannah monitor most people have seen: an obese, fatty-livered, kidney-compromised animal that lives 6–8 years rather than the species\' actual potential of 15–20+ years. Hepatic lipidosis, gout, and renal failure are commonly described in clinical chapters of Mader&apos;s <em>Reptile Medicine and Surgery</em> (Elsevier) and in case reports in the <em>Journal of Herpetological Medicine and Surgery</em>.</p>

          <CalloutBox variant="warning" title="The corrected diet is insectivorous">
            Wild savannah monitors are overwhelmingly insectivorous. Captive diets should mirror this: large dubia roaches, hornworms, snails, crickets, the occasional cooked egg, and small fish as the diet base. Rodents are an occasional supplement at most (once every 2–4 weeks for a non-breeding adult, or none at all in many corrected captive diet protocols). The all-rodent diet is the leading cause of early death in this species.
          </CalloutBox>

          <h2>Enclosure</h2>
          <ul>
            <li><strong>Adult minimum:</strong> 8 ft long × 4 ft wide × 4 ft tall. This is the consistently cited responsible minimum across corrected savannah monitor care literature. 10 ft × 4 ft × 4 ft or larger is meaningfully better.</li>
            <li><strong>Build:</strong> Sealed wood or PVC; never glass tank. Custom-built enclosures are the norm for adult monitors because off-the-shelf reptile enclosures rarely reach the required dimensions and substrate depth.</li>
            <li><strong>Substrate depth:</strong> 18 inches minimum, 24+ inches preferred. The substrate must hold tunnel shape when slightly moist — the standard mixture is 60% organic topsoil + 30% play sand + 10% peat or coco fiber, packed and lightly moistened at depth.</li>
            <li><strong>Furnishings:</strong> Large flat basking platform (stone, brick, sealed slate) under the basking cluster, a large water tub the animal can fully submerge in, several entrance points for burrow construction, sturdy chew-resistant enrichment items.</li>
          </ul>

          <h2>Heat and Light</h2>
          <ul>
            <li><strong>Basking surface temperature:</strong> 130–150°F (55–65°C), measured by IR temperature gun on the basking platform. This is critical for proper digestion of the high-fat insectivorous diet.</li>
            <li><strong>How to achieve it:</strong> A cluster of 3–4 × 50–75W halogen flood bulbs aimed at a single large basking surface gives even heat distribution and a generous basking radius. A single high-wattage bulb produces a narrow hot spot the animal cannot use comfortably.</li>
            <li><strong>Cool side ambient:</strong> 80°F. The thermal gradient between the 130°F+ basking surface and the cool side is what allows the animal to actually thermoregulate.</li>
            <li><strong>Burrow temperature:</strong> 75–80°F at depth. The burrow naturally buffers temperature and provides the humid cool retreat the animal needs.</li>
            <li><strong>Night:</strong> 70–78°F. No supplemental heat in most homes; CHE or DHP only if ambient drops below 70°F.</li>
            <li><strong>UVB:</strong> Arcadia 12% Desert T5 HO spanning approximately two-thirds the enclosure length, mounted 12–18 inches above the basking platform without intervening glass or fine mesh. Per Arcadia\'s Ferguson Zone framework, savannah monitors are Zone 3–4 (UVI 2.0–4.0 at basking).</li>
            <li><strong>Photoperiod:</strong> 12–14 hours summer, 10–12 hours winter.</li>
            <li><strong>Replace UVB tubes annually.</strong> Output declines well before visible light fails.</li>
          </ul>

          <h2>Water and Humidity</h2>
          <p>Ambient humidity 50–60% RH is appropriate for the open enclosure. The deep substrate burrow naturally provides a humid retreat — moistening the substrate at depth (without making the surface soggy) creates the humidity-buffered burrow environment the species evolved to use. Provide a large water tub the animal can fully submerge in; savannah monitors drink and soak readily.</p>

          <h2>Diet — Insectivorous</h2>
          <p>The corrected adult diet is overwhelmingly insectivorous:</p>
          <ul>
            <li><strong>Large dubia roaches</strong> (the staple — best calcium:phosphorus profile, easy to gut-load, available in adult sizes)</li>
            <li><strong>Hornworms</strong> (excellent variety; gut-load on greens)</li>
            <li><strong>Adult crickets and large locusts</strong> (where available; gut-load 24h)</li>
            <li><strong>Snails</strong> (excellent natural prey for this species; commercially available farmed snails are appropriate)</li>
            <li><strong>Earthworms</strong> (high water content, easy to digest)</li>
            <li><strong>The occasional cooked egg</strong> (whole egg with shell crushed in)</li>
            <li><strong>Small fish</strong> (smelt, silversides) occasionally</li>
            <li><strong>Rodents</strong> — minimal or none. Some corrected diet protocols include a small mouse or fuzzy once every 3–4 weeks; many established Varanus keepers omit rodents entirely.</li>
          </ul>
          <p><strong>Feeding frequency:</strong> Juveniles eat appropriately sized insects daily or every other day. Adults eat 2–3 times per week. Use a feeding container or tongs to avoid associating the keeper&apos;s hand with food.</p>
          <p><strong>Supplementation:</strong> Calcium without D3 dusted on insects at every feeding; multivitamin (Repashy Calcium Plus LoD or equivalent) once weekly. Proper UVB plus dietary calcium handles D3 needs.</p>
          <p><strong>Avoid:</strong> Cat or dog food (excess salt, fat, grain — historically recommended in older monitor literature and now contraindicated), high-fat rodent-heavy diets, processed or seasoned meats.</p>

          <h2>Handling and Behavior</h2>
          <p>Wild-caught savannah monitors arrive defensive and require months of patient, low-stress acclimation before any meaningful handling. Captive-acclimated adults can become tolerant of routine handling but should never be considered docile in the way a captive-bred tegu can become — the species retains strong defensive responses and a serious bite. Use feeding tongs rather than hands at meals to avoid food-association bites.</p>
          <p>Signs of stress: tail-whipping, hissing, mouth-gaping, rapid breathing, refusal to leave the burrow. The correct response is to back off and reassess husbandry — the species is a barometer of how the enclosure is performing.</p>

          <h2>Common Health Issues</h2>
          <ul>
            <li><strong>Obesity, hepatic lipidosis, gout, renal failure:</strong> The dominant captive disease cluster. All driven by overfeeding rodents in inadequate enclosures. Prevent with insectivorous diet, appropriate feeding frequency, and adequate space.</li>
            <li><strong>Parasites (wild-caught animals):</strong> Multiple nematodes, cestodes, and protozoa. Strict 60–90 day quarantine and serial fecal exams from an ARAV-listed reptile vet are essential for any new acquisition.</li>
            <li><strong>Thermal burns:</strong> From unguarded basking bulb clusters. Use ceramic sockets, secure mounting, and ensure the animal cannot directly contact the bulbs. See our <a href="/health/thermal-burns">thermal burns guide</a>.</li>
            <li><strong>Dehydration and chronic stress in inadequate enclosures:</strong> Often presents as pacing, glass-surfing, sunken eyes, refusal to eat. Fix the husbandry, not the animal.</li>
            <li><strong>Respiratory infection:</strong> Often secondary to chronic cold or chronic over-humidification. Open-mouth breathing, mucus, lethargy. Refer to an ARAV-listed vet for culture-driven antibiotic therapy per Mader&apos;s <em>Reptile Medicine and Surgery</em>.</li>
            <li><strong>MBD:</strong> Soft jaw, twisted limbs, tremors. Caused by inadequate UVB and/or calcium. See our <a href="/health/metabolic-bone-disease">MBD guide</a>.</li>
          </ul>

          <h2>When to See a Reptile Vet</h2>
          <p>Locate an ARAV (arav.org) member clinic with documented large-lizard or monitor experience before acquisition. Same-day evaluation is warranted for: any wild-caught arrival (initial workup and parasite screen), persistent regurgitation, sudden lethargy, neurological signs, mouth swelling or discharge, blood in stool or urates, thermal burn injuries, or significant unintended weight loss.</p>

          <h2>Citations</h2>
          <ul>
            <li>Mader, D. R. &amp; Divers, S. J. (eds.) — <em>Reptile Medicine and Surgery</em>, 3rd edition. Elsevier. Chapters on Varanid medicine, nutrition, and obesity-related disease.</li>
            <li>Bennett, D. — peer-reviewed field ecology and stomach-content analysis work on <em>Varanus exanthematicus</em> published across <em>Journal of Herpetology</em>, <em>Biawak</em> (International Varanid Interest Group), and <em>Mertensiella</em>.</li>
            <li><em>Journal of Herpetological Medicine and Surgery</em> — case literature on hepatic lipidosis, gout, and renal failure in captive savannah monitors.</li>
            <li>Association of Reptilian and Amphibian Veterinarians (ARAV) — <a href="https://arav.org" rel="noopener" target="_blank">arav.org</a> member directory.</li>
            <li>Arcadia Reptile — Ferguson Zone framework for diurnal desert/savanna baskers.</li>
            <li>CITES Appendix II listing for <em>Varanus exanthematicus</em>.</li>
          </ul>

          <h2>Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />
        <div style={{ background: 'var(--brand-surface, #1a1f2b)', border: '1px solid var(--brand-border, #2d3548)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #8a96ad)', marginBottom: '8px' }}>Savannah Monitor — Setup Equipment</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #8a96ad)', lineHeight: 1.55 }}>Browse enclosures, UVB lighting, thermostats, and substrate sized for savannah monitor care. Lizard.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial inclusion above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/savannah%20monitor%20setup?s=species-savannah-monitor" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Savannah Monitor Setup on Amazon →</a>
            <a href="/go/chewy-brand/savannah%20monitor%20setup?s=species-savannah-monitor" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #7bc25c)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

        </div>
      </ArticleLayout>
    </>
  )
}

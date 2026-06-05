import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: "Reptile Brumation Guide — Safe Cool-Down | Lizard.com", description: "What reptile brumation is, which species do it, how to safely cool down and warm up an animal, and how to tell brumation apart from illness.", path: "/husbandry/brumation-guide", type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: "Reptile Brumation Guide", description: "How reptile brumation works, which species brumate, safe protocols, and distinguishing brumation from disease.", url: "https://lizard.com/husbandry/brumation-guide", imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })

export default function HusbandryBrumationGuidePage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: "Reptile Brumation Guide", subtitle: "Brumation is the reptilian analogue of hibernation: a seasonal period of dormancy triggered by cooling temperatures and shortening days during which metabolism slows, appetite stops, and activity drops sharply. Understanding it prevents two common mistakes, panicking over a healthy brumating animal and overlooking a sick one that only looks like it is brumating.", category: "Husbandry", authorName: 'Lizard.com Editorial', authorAvatar: '🦎', publishedAt: 'June 2026', readTime: "11 min" }}
      breadcrumbs={[{ name: "Home", href: "/" }, { name: "Enclosure Setup", href: "/setup" }, { name: "Brumation Guide", href: "/husbandry/brumation-guide" }]}
      schema={schema}
      relatedLinks={[
        { title: 'Setup Hub', href: '/setup', category: 'Hub' },
        { title: 'Shedding Guide', href: '/husbandry/shedding-guide', category: 'Husbandry' },
        { title: 'Anorexia in Reptiles', href: '/health/anorexia-in-reptiles', category: 'Health' },
        { title: 'Bearded Dragon Care', href: '/species/bearded-dragon', category: 'Species' },
        { title: 'Russian Tortoise Care', href: '/species/russian-tortoise', category: 'Species' },
      ]}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>{"Key Points"}</div>
          {[["What it is", "Seasonal reptile dormancy"], ["Trigger", "Cooling temps + shorter days"], ["Duration", "Weeks to several months"], ["Eating", "Stops or nearly stops"], ["Brumate?", "Many temperate species do"], ["Tropical species", "Generally do not"], ["Before brumating", "Vet check + fasting period"]].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title={"Related Guides"} links={[{ label: "Bearded Dragon Care", href: "/species/bearded-dragon" }, { label: "Russian Tortoise Care", href: "/species/russian-tortoise" }, { label: "Argentine Tegu Care", href: "/species/argentine-black-and-white-tegu" }, { label: "Anorexia in Reptiles", href: "/health/anorexia-in-reptiles" }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source={"lizard-husbandry-brumation-guide"} ctaText="Download Free" />
      </>}
    >
      <div className="carloOS-article">
          <p>{"Brumation is a survival strategy that lets ectothermic reptiles ride out a cold or dry season when food is scarce and they cannot maintain the body temperature needed for digestion. It is not sleep and not true mammalian hibernation; the animal can rouse, may move or drink occasionally, and its physiology remains active but throttled down. In captivity, temperate-climate species often attempt to brumate on their own as autumn light and temperatures shift, even indoors, because the cues come from photoperiod and ambient cooling as much as the calendar."}</p>
          <h2>{"Which Reptiles Brumate?"}</h2>
          <p>{"Brumation is tied to a species’ natural climate. Temperate species that experience real winters typically brumate; tropical species from stable warm climates generally do not and should not be artificially cooled."}</p>
          <ul>
            <li>{"Commonly brumate: many tortoises (including Russian tortoises), bearded dragons, some colubrids such as corn snakes, box turtles, and tegus"}</li>
            <li>{"Generally do not brumate: ball pythons (may have a mild seasonal slow-down but not true brumation), crested and other tropical geckos, chameleons, leopard geckos (often a mild slow-down only), and most tropical species"}</li>
            <li>{"Always research the specific species and its natural range before assuming a brumation requirement"}</li>
          </ul>
          <h2>{"Brumation Versus Illness"}</h2>

          <h2>{"Preparing for a Safe Brumation"}</h2>
          <p>{"Never brumate a sick, underweight, or very young animal; brumation stresses the body and a marginal animal may not survive it. Before a deliberate cool-down, have a reptile-experienced veterinarian confirm the animal is healthy and parasite-free, since gut parasites can flourish during the slow-metabolism period. Then fast the animal for a species-appropriate interval (often one to three weeks for many species) so the digestive tract is empty; undigested food can rot in the gut at low temperatures and cause fatal illness. Ensure the animal is well-hydrated going in."}</p>
          <h2>{"The Cool-Down Process"}</h2>
          <ol>
            <li>{"Confirm health and an empty gut, as above"}</li>
            <li>{"Gradually reduce photoperiod and temperatures over one to two weeks toward the species-specific brumation range"}</li>
            <li>{"Move the animal to a clean, secure brumation space at the target temperature, with access to water for species that drink during brumation"}</li>
            <li>{"Check on the animal periodically without disturbing it heavily; offer water and monitor weight"}</li>
            <li>{"After the species-appropriate duration, gradually warm and return photoperiod over one to two weeks"}</li>
            <li>{"Resume feeding only once full basking temperatures are restored and the animal is alert and digesting"}</li>
          </ol>
          <p>{"Specific brumation temperatures and durations vary widely by species and even by region of origin; use a trusted species care sheet and, ideally, veterinary guidance for the exact numbers rather than a generic target."}</p>
          <h2>{"Common Mistakes"}</h2>
          <ul>
            <li>{"Brumating an animal with food still in its gut, leading to gut rot"}</li>
            <li>{"Cooling a tropical species that should never brumate"}</li>
            <li>{"Failing to weigh the animal and missing illness disguised as brumation"}</li>
            <li>{"Letting temperatures drop too low (freezing risk) or fluctuate wildly"}</li>
            <li>{"Brumating a sick, young, or underweight animal that cannot tolerate it"}</li>
            <li>{"Force-feeding a healthy reptile that is simply in a seasonal slow-down"}</li>
          </ul>
          <p>{"When in doubt, do not brumate; many captive reptiles live full lives without a deliberate brumation, and a slow-down that worries you is always worth a veterinary opinion."}</p>
          <h2>{"Sources & Further Reading"}</h2>
          <ul>
            <li>{"Mader, D. R. Reptile Medicine and Surgery (Elsevier), thermoregulation and seasonal-cycle chapters."}</li>
            <li>{"Association of Reptilian and Amphibian Veterinarians (ARAV) continuing-education materials."}</li>
            <li>{"Journal of Herpetological Medicine and Surgery, seasonal husbandry references."}</li>
          </ul>
      </div>
    </ArticleLayout>
  )
}

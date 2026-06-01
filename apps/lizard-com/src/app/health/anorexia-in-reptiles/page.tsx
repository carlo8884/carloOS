import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: "Reptile Anorexia — Why a Reptile Stops Eating | Lizard.com", description: "A reptile refusing food can be normal (brumation, shedding, breeding) or a sign of illness. A structured checklist to find the cause before it becomes serious.", path: "/health/anorexia-in-reptiles", type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: "Anorexia in Reptiles (Food Refusal)", description: "A structured approach to reptile food refusal, distinguishing normal causes from illness and when to see a vet.", url: "https://lizard.com/health/anorexia-in-reptiles", imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })

export default function HealthAnorexiaInReptilesPage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: "Anorexia in Reptiles (Food Refusal)", subtitle: "A reptile that stops eating is one of the most common reasons keepers worry, and the cause ranges from completely normal (brumation, shedding, breeding season, a recent move) to genuinely serious illness. The skill is in working through the possibilities systematically, ruling out husbandry and natural cycles first, and knowing when food refusal crosses into a medical emergency.", category: "Health — Common", authorName: 'Lizard.com Editorial', authorAvatar: '🦎', publishedAt: 'June 2026', readTime: "10 min" }}
      breadcrumbs={[{ name: "Home", href: "/" }, { name: "Health", href: "/health" }, { name: "Anorexia in Reptiles", href: "/health/anorexia-in-reptiles" }]}
      schema={schema}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>{"At a Glance"}</div>
          {[["Definition", "Refusal to eat"], ["Often normal", "Brumation, shed, breeding, move"], ["Often husbandry", "Wrong temps, stress, season"], ["Sometimes illness", "Infection, parasites, blockage"], ["Key metric", "Body weight over time"], ["Red flag", "Weight loss + lethargy"]].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title={"Related Guides"} links={[{ label: "Sick Reptile Signs", href: "/health/sick-reptile-signs" }, { label: "Brumation Guide", href: "/husbandry/brumation-guide" }, { label: "Constipation & Impaction", href: "/health/constipation-impaction" }, { label: "Temperature Guide", href: "/setup/temperature-guide" }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source={"lizard-health-anorexia-in-reptiles"} ctaText="Download Free" />
      </>}
    >
      <div className="carloOS-article">
          <p>{"Food refusal (anorexia) is a symptom, not a diagnosis. Reptiles are ectotherms with slow metabolisms, and a healthy adult of many species can go weeks, even months, without eating under certain natural circumstances without harm. That same refusal can also be the first sign of a serious problem. The difference lies in the context and, above all, in whether the animal is maintaining its body weight and condition. A structured approach prevents both needless panic and dangerous complacency."}</p>
          <h2>{"First, Track the Weight"}</h2>

          <h2>{"Normal Reasons a Reptile Stops Eating"}</h2>
          <ul>
            <li>{"Brumation or a seasonal slow-down in temperate species during the cooler, shorter-day months (see our brumation guide)"}</li>
            <li>{"Pre-shed and active shedding, when many reptiles refuse food"}</li>
            <li>{"Breeding season, especially in mature males, who may fast for weeks"}</li>
            <li>{"A recent acquisition, move, or enclosure change; new animals commonly refuse food while they settle"}</li>
            <li>{"Gravidity in females approaching egg-laying"}</li>
          </ul>
          <h2>{"Husbandry Causes to Check Next"}</h2>
          <p>{"Before assuming illness, audit the environment, because incorrect husbandry is a leading cause of food refusal and is fixable."}</p>
          <ul>
            <li>{"Temperatures too low: a reptile that cannot reach digestion temperature will not eat; verify basking and ambient temperatures with accurate instruments"}</li>
            <li>{"Inappropriate enclosure conditions: too little cover, too much disturbance, or chronic stress"}</li>
            <li>{"Wrong prey or presentation: prey that is the wrong type, size, temperature, or offered at the wrong time of day"}</li>
            <li>{"Photoperiod and seasonal cues that suppress appetite"}</li>
            <li>{"Dehydration or an unclean enclosure"}</li>
          </ul>
          <h2>{"Medical Causes"}</h2>
          <ul>
            <li>{"Internal parasites"}</li>
            <li>{"Infections, including respiratory infection and mouth rot (stomatitis), which makes eating painful"}</li>
            <li>{"Constipation, impaction, or a gastrointestinal foreign body"}</li>
            <li>{"Mouth or dental disease, injuries, or pain"}</li>
            <li>{"Organ disease, gout, or other systemic illness"}</li>
            <li>{"Egg binding (dystocia) in females"}</li>
          </ul>
          <h2>{"When to See a Veterinarian"}</h2>
          <p>{"Seek a reptile-experienced veterinarian when food refusal is accompanied by weight loss, lethargy, abnormal posture, discharge from the mouth or nose, wheezing, swelling, straining, abnormal or absent stool, or any other sign of illness, and whenever refusal lasts beyond what is normal for the species and season with no benign explanation. A young, small, or already underweight animal that stops eating warrants attention sooner than a robust adult, because it has fewer reserves. Never force-feed a reptile without veterinary guidance; force-feeding a sick or obstructed animal can cause harm."}</p>
          <p>{"In short: confirm the weight trend, rule out natural cycles and husbandry, and escalate to a vet when refusal is paired with any sign of decline. Patience is appropriate for a healthy, weight-stable animal; it is dangerous for one that is wasting."}</p>
          <h2>{"Sources & Further Reading"}</h2>
          <ul>
            <li>{"Mader, D. R. Reptile Medicine and Surgery (Elsevier), clinical-approach chapters."}</li>
            <li>{"Journal of Herpetological Medicine and Surgery, anorexia and supportive-care references."}</li>
            <li>{"Association of Reptilian and Amphibian Veterinarians (ARAV), arav.org."}</li>
          </ul>
      </div>
    </ArticleLayout>
  )
}

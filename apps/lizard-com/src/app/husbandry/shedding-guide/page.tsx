import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: "Reptile Shedding Guide — Stuck Shed Prevention | Lizard.com", description: "How reptile shedding (ecdysis) works in snakes, lizards, and geckos, why humidity matters, and how to safely manage and prevent retained shed.", path: "/husbandry/shedding-guide", type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: "Reptile Shedding Guide", description: "How ecdysis works, humidity needs, retained shed prevention, and safe shed management across reptile groups.", url: "https://lizard.com/husbandry/shedding-guide", imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })

export default function HusbandrySheddingGuidePage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: "Reptile Shedding Guide", subtitle: "Shedding, or ecdysis, is the periodic renewal of the outer skin layer that lets a growing reptile replace worn skin. Done well it is invisible maintenance; done in too-dry conditions it produces retained shed that can constrict toes, tail tips, and eye caps. This guide explains the process across snakes, lizards, and geckos and how to prevent the problems.", category: "Husbandry", authorName: 'Lizard.com Editorial', authorAvatar: '🦎', publishedAt: 'June 2026', readTime: "10 min" }}
      breadcrumbs={[{ name: "Home", href: "/" }, { name: "Enclosure Setup", href: "/setup" }, { name: "Shedding Guide", href: "/husbandry/shedding-guide" }]}
      schema={schema}
      relatedLinks={[
        { title: 'Setup Hub', href: '/setup', category: 'Hub' },
        { title: 'Brumation Guide', href: '/husbandry/brumation-guide', category: 'Husbandry' },
        { title: 'Humidity Guide', href: '/setup/humidity-guide', category: 'Setup' },
        { title: 'Dysecdysis (Retained Shed)', href: '/health/dysecdysis', category: 'Health' },
        { title: 'Retained Eye Caps', href: '/health/retained-eye-caps', category: 'Health' },
      ]}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>{"Key Points"}</div>
          {[["Process", "Ecdysis (skin renewal)"], ["Snakes", "Shed in one piece"], ["Lizards/geckos", "Shed in patches"], ["Main risk", "Retained shed (dysecdysis)"], ["Root cause", "Usually low humidity"], ["High-risk areas", "Toes, tail tip, eye caps"], ["Fix", "Humid hide + warm soak"]].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title={"Related Guides"} links={[{ label: "Dysecdysis (Shedding Problems)", href: "/health/dysecdysis" }, { label: "Humidity Guide", href: "/setup/humidity-guide" }, { label: "Leopard Gecko Care", href: "/species/leopard-gecko" }, { label: "Retained Eye Caps", href: "/health/retained-eye-caps" }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source={"lizard-husbandry-shedding-guide"} ctaText="Download Free" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Lizard.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />
          <p>{"All reptiles shed their skin throughout life, replacing the outer epidermal layer as they grow and to renew worn skin. The frequency depends on species, age, growth rate, and health: fast-growing juveniles shed much more often than mature adults, and a well-fed, fast-growing snake may shed every few weeks while an adult sheds a few times a year. Shedding is a normal, healthy process, and the goal of good husbandry is simply to make sure each shed comes off completely."}</p>
          <h2>{"How Different Reptiles Shed"}</h2>
          <ul>
            <li>{"Snakes shed in a single continuous piece, turning the old skin inside out from the nose backward, including the clear spectacle scale over each eye"}</li>
            <li>{"Lizards and geckos shed in patches or flakes over days; many geckos eat their shed skin"}</li>
            <li>{"Tortoises and turtles shed scutes and skin gradually rather than in obvious sheets"}</li>
            <li>{"The pre-shed period often includes dull or cloudy coloration, bluish opaque eyes in snakes (the eyes go clear again just before the shed), reduced appetite, and increased hiding"}</li>
          </ul>
          <h2>{"Why Humidity Is the Key Variable"}</h2>

          <h2>{"Supporting a Healthy Shed"}</h2>
          <ol>
            <li>{"Provide a humid hide (a closed hide with damp sphagnum moss) that the animal can use during the pre-shed period, even for desert species"}</li>
            <li>{"Maintain species-appropriate ambient humidity, raising it modestly during the shed cycle for tropical species"}</li>
            <li>{"Offer a shallow water dish large enough for the animal to soak if it chooses"}</li>
            <li>{"Provide rough surfaces such as cork, branches, or rock for the animal to rub against to start the shed"}</li>
            <li>{"Avoid handling during the cloudy-eyed and active-shed phases, when vision is poor and skin is delicate"}</li>
          </ol>
          <h2>{"Managing and Preventing Retained Shed"}</h2>
          <p>{"Always check extremities after each shed. On geckos and lizards, retained skin on toes can ring and constrict the digit, cutting off circulation and causing toe loss within days. On snakes, a retained tail-tip shed can constrict the tail, and a retained eye cap (spectacle) can build up over successive sheds. For mild retained shed, a warm shallow soak (lukewarm water, never hot) for 15 to 20 minutes softens the skin so it can be gently rolled off with a damp cotton swab. Never forcibly peel skin, especially around eyes."}</p>
          <p>{"If retained shed remains after gentle soaking, if eye caps are involved, or if a digit or tail tip is already constricted or discolored, have a reptile veterinarian remove it; forcing it risks tearing healthy tissue or the spectacle."}</p>
          <h2>{"When Shedding Problems Signal Something Bigger"}</h2>
          <p>{"Chronic incomplete shedding (dysecdysis) is usually a husbandry symptom, not a disease in itself; the most common drivers are low humidity, dehydration, malnutrition, parasites, scarring, and incorrect temperatures. Repeated bad sheds are a prompt to audit humidity, hydration, diet, and temperature, and to rule out parasites or other illness with a reptile vet. See our dedicated dysecdysis page for the clinical detail."}</p>
          <h2>{"Sources & Further Reading"}</h2>
          <ul>
            <li>{"Mader, D. R. Reptile Medicine and Surgery (Elsevier), integument chapters."}</li>
            <li>{"Journal of Herpetological Medicine and Surgery, dysecdysis references."}</li>
            <li>{"Association of Reptilian and Amphibian Veterinarians (ARAV), arav.org."}</li>
          </ul>
      </div>
    </ArticleLayout>
  )
}

import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: "Reptile Buying Checklist — Before You Buy | Lizard.com", description: "A pre-purchase reptile checklist: research the species, set up before buying, choose captive-bred, check health signs, and plan quarantine.", path: "/species/reptile-buying-checklist", type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: "Reptile Buying Checklist", description: "A pre-purchase checklist covering research, enclosure setup, captive-bred sourcing, health checks, and quarantine planning.", url: "https://lizard.com/species/reptile-buying-checklist", imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })

export default function SpeciesReptileBuyingChecklistPage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: "Reptile Buying Checklist", subtitle: "Most reptile welfare problems start at purchase: the wrong species, an enclosure thrown together after the animal is already home, or a sickly wild-caught individual chosen on impulse. This checklist walks through what to do before you buy, how to evaluate the animal and seller, and how to set yourself, and the reptile, up for success from day one.", category: "Choosing a Reptile", authorName: 'Lizard.com Editorial', authorAvatar: '🦎', publishedAt: 'June 2026', readTime: "10 min" }}
      breadcrumbs={[{ name: "Home", href: "/" }, { name: "Species", href: "/species" }, { name: "Reptile Buying Checklist", href: "/species/reptile-buying-checklist" }]}
      schema={schema}
      relatedLinks={[
        { title: 'Species Library', href: '/species', category: 'Hub' },
        { title: 'Best Beginner Reptiles', href: '/species/best-beginner-reptiles', category: 'Species' },
        { title: 'Beginner vs Advanced Reptiles', href: '/species/beginner-vs-advanced-reptiles', category: 'Species' },
        { title: 'Salmonella Prevention', href: '/health/salmonella-prevention', category: 'Health' },
        { title: 'Sick Reptile Signs', href: '/health/sick-reptile-signs', category: 'Health' },
        { title: 'First Year Care Schedule', href: '/first-year-care-schedule', category: 'Guide' },
      ]}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>{"Before You Buy"}</div>
          {[["Research first", "Full adult care + size"], ["Set up before", "Enclosure ready and stable"], ["Prefer", "Captive-bred over wild-caught"], ["Check", "Active, alert, good condition"], ["Plan", "Quarantine + a reptile vet"], ["Budget", "Setup costs more than the animal"]].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title={"Related Guides"} links={[{ label: "Best Beginner Reptiles", href: "/species/best-beginner-reptiles" }, { label: "Beginner vs Advanced Species", href: "/species/beginner-vs-advanced-reptiles" }, { label: "Enclosure Setup", href: "/setup" }, { label: "Enclosure Size Guide", href: "/setup/terrarium-size-guide" }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source={"lizard-species-reptile-buying-checklist"} ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="species" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">
          <p>{"Buying a reptile responsibly is mostly about what you do before money changes hands. The animal may live for one to several decades, will grow to an adult size you must be ready for, and needs a working enclosure waiting for it, not one assembled in a panic that evening. The most common mistakes, choosing a species you have not researched, buying before the setup is ready, picking a sick or wild-caught animal, and having no veterinary or quarantine plan, are all avoidable with a checklist. Here is the one to run through every time."}</p>
          <h2>{"1. Research the Species Thoroughly"}</h2>
          <ul>
            <li>{"Read full care guides for the species and confirm its adult size, lifespan, enclosure needs, diet, and difficulty tier, not just the cute hatchling in front of you"}</li>
            <li>{"Confirm the species suits your experience level (see our beginner vs advanced guide); avoid cheap-but-advanced animals like large monitors as a first reptile"}</li>
            <li>{"Check the legality of the species where you live; some reptiles are restricted or banned in certain states and localities"}</li>
            <li>{"Understand the ongoing costs: feeders, supplements, bulbs, electricity, and veterinary care over the animal’s life"}</li>
          </ul>
          <h2>{"2. Set Up the Enclosure Before You Buy"}</h2>

          <h2>{"3. Choose Captive-Bred Over Wild-Caught"}</h2>
          <p>{"Whenever possible, buy captive-bred animals. They are hardier, better acclimated to captivity, less likely to carry heavy parasite loads, and free of the conservation and welfare concerns of wild collection. Wild-caught animals (common at the cheap end for some species like green anoles, fire skinks, and certain imports) arrive stressed, dehydrated, and often parasitized, and are much harder to establish. A reputable breeder or seller will tell you the animal’s origin, hatch date, and feeding history."}</p>
          <h2>{"4. Evaluate the Individual Animal"}</h2>
          <ul>
            <li>{"Alert and responsive, with clear, bright eyes and no discharge from eyes, nose, or mouth"}</li>
            <li>{"Good body condition: not emaciated (sunken or bony) and not grossly obese; a healthy weight for the species"}</li>
            <li>{"Clean vent with no caked stool or swelling, and intact skin with no retained shed, wounds, burns, or mites"}</li>
            <li>{"No open-mouth breathing, wheezing, mucus, or bubbling (signs of respiratory infection)"}</li>
            <li>{"Normal posture and movement, no tremors, weakness, or deformity (which can signal metabolic bone disease)"}</li>
            <li>{"Ask about feeding history and whether the animal is eating reliably on its own"}</li>
          </ul>
          <h2>{"5. Plan Quarantine and Veterinary Care"}</h2>
          <ul>
            <li>{"Have a separate quarantine enclosure ready if you keep other reptiles, and quarantine every new animal for an extended period before introduction (see our quarantine protocol)"}</li>
            <li>{"Identify a reptile-experienced (ideally ARAV-member) veterinarian before you need one, and consider a baseline health check and fecal exam, especially for wild-caught animals"}</li>
            <li>{"Wash hands before and after handling as a Salmonella precaution, and set up basic hygiene routines from day one"}</li>
          </ul>
          <h2>{"6. Be Honest About the Commitment"}</h2>
          <p>{"Finally, confirm you can meet the species’ needs for its full lifespan, including its adult size, decades-long lifespan for many species, ongoing costs, and the space and time required. Many reptiles are surrendered or neglected because an impulse purchase outgrew the keeper’s expectations. If, after working through this checklist, you are confident and prepared, you are far more likely to give the animal a long, healthy life and to enjoy keeping it."}</p>
          <h2>{"Sources & Further Reading"}</h2>
          <ul>
            <li>{"Mader, D. R. Reptile Medicine and Surgery (Elsevier), husbandry and quarantine chapters."}</li>
            <li>{"Association of Reptilian and Amphibian Veterinarians (ARAV), arav.org."}</li>
            <li>{"Reptiles Magazine, pre-purchase and acquisition references."}</li>
          </ul>
      </div>
    </ArticleLayout>
  )
}

import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CalloutBox, DropCap, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: "Body Protector & Air Vest Guide — BETA Levels | Saddle.com",
  description: "Equestrian body protectors and air vests explained: BETA 2018 levels, fit, when they are required, and how foam protectors and air vests differ.",
  path: "/guides/body-protector-guide",
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: "Body Protector and Air Vest Guide",
  description: "BETA-rated body protectors and air vests — protection levels, fit, required use, and how foam and inflatable systems compare.",
  url: "https://saddle.com/guides/body-protector-guide",
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function BodyProtectorGuidePage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      contentType="guide"
      hero={{ title: "Body Protectors &amp; Air Vests", subtitle: "Beyond the helmet, the torso is the next protective priority — especially in jumping and eventing. Foam protectors and inflatable air vests take different approaches to the same risk.", category: "Rider Gear", authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'June 2026', readTime: "8 min" }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides' }, { name: "Body Protector Guide", href: "/guides/body-protector-guide" }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: "Why Torso Protection", href: "#why" },
          { label: "BETA Levels", href: "#beta" },
          { label: "Foam Body Protectors", href: "#foam" },
          { label: "Air Vests", href: "#air" },
          { label: "When Required", href: "#required" },
          { label: "Fit", href: "#fit" },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: "Helmet Safety Standards", href: "/guides/riding-helmet-safety-standards" },
          { label: "Eventing Tack Guide", href: "/guides/eventing-tack-guide" },
          { label: "Show Jumping Tack Guide", href: "/guides/show-jumping-tack-guide" },
        ]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Saddle reviews and market intelligence." source="guide-body-protector-guide" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <DropCap>After the helmet, a body protector is the most significant piece of safety equipment a rider can wear, guarding the spine, ribs, and internal organs against falls and kicks. The two technologies — foam protectors and inflatable air vests — are not interchangeable, and understanding the BETA rating system is how a rider chooses the right level of protection.</DropCap>

        <CalloutBox variant="tip" title="An air vest is worn over, not instead of, a foam protector for cross-country">
          For eventing cross-country, the safest setup is a certified foam body protector with an air vest worn over it — the foam provides baseline protection that works instantly and does not depend on inflation. An air vest alone has a deployment delay and does not cover everything a foam protector does.
        </CalloutBox>

        <h2 id="why">Why Torso Protection</h2>
        <p>Falls in riding — especially over fences — risk impact to the spine and ribs and being trodden on or kicked. The helmet protects the head (see the <a href="/guides/riding-helmet-safety-standards">helmet standards guide</a>); a body protector guards the torso. In jumping and eventing, where the risk is highest, torso protection is standard and often required.</p>

        <h2 id="beta">BETA Levels</h2>
        <p>The British Equestrian Trade Association (BETA) sets the recognized standard. <strong>BETA 2018</strong> certifies body protectors at three levels: <strong>Level 1 (black label)</strong> for licensed jockeys only, offering the lowest protection; <strong>Level 2 (brown label)</strong> for lower-risk situations; and <strong>Level 3 (purple label)</strong>, the standard for general riding, jumping, and eventing — the level most riders should look for. Always check the label is current BETA 2018 Level 3 for general riding.</p>

        <h2 id="foam">Foam Body Protectors</h2>
        <p>Foam body protectors are vests of impact-absorbing foam that protect instantly and continuously — there is nothing to deploy. A certified BETA Level 3 foam protector covers the spine, ribs, and vital organs and works the moment of impact, including from a kick or being trodden on. The trade-off is bulk and heat. Foam protectors must fit closely to work and should be replaced if they take a significant impact or after the manufacturer&apos;s lifespan, as foam degrades.</p>

        <h2 id="air">Air Vests</h2>
        <p>Air vests are inflatable systems tethered to the saddle by a lanyard; when the rider separates from the horse in a fall, the lanyard triggers a CO2 canister that inflates the vest to cushion the torso and neck. They are lighter and cooler than foam when not deployed. The limitations are a deployment delay (inflation takes a fraction of a second), dependence on the trigger working, and that they do not protect before inflation — which is why they are worn over a foam protector for cross-country rather than alone.</p>

        <h2 id="required">When Required</h2>
        <ul>
          <li><strong>Eventing cross-country:</strong> a body protector is required, and air vests are widely used over foam.</li>
          <li><strong>Show jumping and many jumping disciplines:</strong> required or strongly recommended, especially for juniors — see the <a href="/guides/show-jumping-tack-guide">show jumping tack guide</a> and <a href="/guides/eventing-tack-guide">eventing tack guide</a>.</li>
          <li><strong>Racing:</strong> required to specified levels.</li>
          <li><strong>General riding:</strong> recommended; a sensible default for jumping and young or green horses.</li>
        </ul>

        <h2 id="fit">Fit</h2>
        <p>A body protector must fit closely to work — a loose protector shifts and leaves gaps. It should cover from the collarbone area down over the lower back and not impede arm movement or breathing, sized by BETA&apos;s fitting guidance to the rider&apos;s back length and chest. Air vests are sized similarly and the lanyard length set so it triggers on a genuine fall but not on normal dismounting. Replace foam protectors after major impacts and at the recommended lifespan, and service air-vest canisters per the manufacturer. The torso is worth protecting; choose a current BETA Level 3 protector, fit it closely, and add an air vest over it for cross-country.</p>

        <CalloutBox variant="note" title="Sources">
          British Equestrian Trade Association (BETA) 2018 body-protector standard and level documentation. USEF, FEI, and British Eventing rules on torso protection. Manufacturer air-vest and foam-protector documentation. Riding-safety research on torso injury.
        </CalloutBox>
      </div>
    </ArticleLayout>
  )
}

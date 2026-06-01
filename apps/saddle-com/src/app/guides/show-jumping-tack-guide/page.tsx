import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CalloutBox, DropCap, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: "Show Jumping Tack Guide — Saddle, Bits, Boots, Gear | Saddle.com",
  description: "A show jumping tack reference: close-contact saddles, jumping bits and gags, breastplates, martingales, studs, and protective boots — what each job needs.",
  path: "/guides/show-jumping-tack-guide",
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: "Show Jumping Tack Guide",
  description: "Close-contact jumping saddles, bits, breastplates, martingales, studs, and protective boots for show jumping.",
  url: "https://saddle.com/guides/show-jumping-tack-guide",
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function ShowJumpingTackGuidePage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      contentType="guide"
      hero={{ title: "Show Jumping Tack — Equipment for Speed and Scope", subtitle: "Jumping tack balances control at speed with freedom over the fence. The saddle, the bridle, and the protective gear all serve a horse that must gallop, turn, and jump under pressure.", category: "Discipline Tack", authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'June 2026', readTime: "10 min" }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides' }, { name: "Show Jumping Tack Guide", href: "/guides/show-jumping-tack-guide" }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: "The Demands of Jumping", href: "#demands" },
          { label: "Close-Contact Saddle", href: "#saddle" },
          { label: "Bits & Control", href: "#bits" },
          { label: "Breastplates & Martingales", href: "#breastplate" },
          { label: "Studs", href: "#studs" },
          { label: "Protective Boots", href: "#boots" },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: "Close Contact vs All-Purpose", href: "/guides/close-contact-vs-all-purpose" },
          { label: "Breastplate & Martingale Guide", href: "/guides/breastplate-martingale-guide" },
          { label: "Horse Boot Types", href: "/guides/horse-boot-types" },
        ]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Saddle reviews and market intelligence." source="guide-show-jumping-tack-guide" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <DropCap>Show jumping asks a horse to gallop, balance, turn sharply, and jump scope on a course against the clock — and the tack has to give the rider control at speed without restricting the horse over the fence. Every item, from the forward-cut saddle to the protective boots, answers one of those competing demands.</DropCap>

        <CalloutBox variant="tip" title="Control comes from training, not just bitting up">
          A horse that pulls or runs at fences is usually answering a balance or training question, and reaching for a stronger bit treats the symptom. Use the mildest bit that gives you honest control, and address the underlying rideability in flatwork. A severe bit on a strong horse with poor balance makes both worse.
        </CalloutBox>

        <h2 id="demands">The Demands of Jumping</h2>
        <p>Jumping requires a forward, mobile rider position, secure control at gallop, freedom for the horse to use its body over the fence, and protection for the horse&apos;s legs against knocks. The tack serves each: a forward-cut saddle for position, appropriate bitting for control, a breastplate for security, and boots for protection. The position itself is covered in the <a href="/guides/english-riding-guide">English riding guide</a>.</p>

        <h2 id="saddle">The Close-Contact Saddle</h2>
        <p>Jumping uses a close-contact saddle: a forward-cut flap for the shorter stirrup and bent knee, a flatter seat that lets the rider rise into two-point, and minimal bulk for the closest feel — the geometry detailed in the <a href="/guides/close-contact-vs-all-purpose">close-contact vs all-purpose guide</a>. Knee and sometimes thigh blocks support the forward leg. Fit to the horse remains paramount; the saddle moves with a jumping horse and a poor fit shows quickly.</p>

        <h2 id="bits">Bits &amp; Control</h2>
        <p>Jumping bits range from snaffles through gags and pelhams to stronger combinations, chosen for the control a particular horse needs at speed — the mechanics are in the <a href="/guides/bit-selection-guide">bit selection guide</a>. A gag or pelham adds poll or leverage action for a strong horse, but the principle is to use the mildest bit that gives honest control and to fix rideability in training, not bitting. Many jumpers go in a simple snaffle.</p>

        <h2 id="breastplate">Breastplates &amp; Martingales</h2>
        <p>A breastplate (often a five-point) keeps the saddle from slipping back on a galloping, jumping horse, and a running martingale gives a degree of influence on a horse that throws its head — both detailed, with fitting, in the <a href="/guides/breastplate-martingale-guide">breastplate and martingale guide</a>. Fitted to engage only at the extreme, they add security and influence without restricting the horse over the fence. Rein stops are used with running martingales.</p>

        <h2 id="studs">Studs</h2>
        <p>Studs screw into the shoes to give grip on grass and in the wet, preventing slipping on turns and takeoffs. Stud choice (size and shape) depends on the going — small for hard ground, larger for soft — and studs are removed after work. A stud-guard girth (see the <a href="/guides/girth-types-guide">girth types guide</a>) protects the horse&apos;s belly from its own studs as it tucks over a fence. Studs are a jumping and eventing staple for safe grip.</p>

        <h2 id="boots">Protective Boots</h2>
        <p>Jumping horses wear protective boots — open-front boots (protecting the tendon while leaving the front sensitive so the horse respects the rail), fetlock boots behind, and sometimes bell boots — to guard against strikes and overreaching. The types and their uses are covered in the <a href="/guides/horse-boot-types">horse boot types guide</a>. Open-front boots are the jumping standard precisely because they protect the vulnerable tendon without dulling the horse to touching the pole.</p>
        <p>Built together — forward saddle, appropriate bit, breastplate, studs for grip, and protective boots — show jumping tack equips a horse to perform at speed while keeping both horse and rider safe and free to do the job.</p>

        <CalloutBox variant="note" title="Sources">
          FEI Jumping Rules and equipment regulations. USEF and British Showjumping rulebooks. Society of Master Saddlers (SMS) fitting references, <a href="https://www.mastersaddlers.co.uk" rel="noopener" target="_blank" className="text-brand-primary hover:underline">mastersaddlers.co.uk</a>. Manufacturer boot and stud documentation.
        </CalloutBox>
      </div>
    </ArticleLayout>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  ArticleLayout,
  EmailCapture,
  RelatedLinks,
  TableOfContents,
  CrossPortfolioCard,
  ArticleByline,
  AffiliateDisclosure,
  ShopCtas,
} from '@carloOS/ui'
import { buildArticleSchema, buildHowToSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Loose Leash Walking — Stop Pulling for Good | Dog.com', description: 'How to teach a dog to walk on a loose leash. The stop-and-wait method, the 180-degree turn, and why punishment-based corrections make pulling worse.', path: '/training/loose-leash-walking', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Loose Leash Walking', description: 'Stop pulling with the stop-and-wait and 180-degree turn methods.', url: 'https://dog.com/training/loose-leash-walking', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-09-04T00:00:00Z' })
const howTo = buildHowToSchema({ name: 'How to Teach a Dog to Walk on a Loose Leash', description: 'Step-by-step protocol for teaching loose leash walking using positive reinforcement.', url: 'https://dog.com/training/loose-leash-walking', totalTime: 'P6W', steps: [
  { name: 'Start in zero-distraction environment', text: 'Begin in your home or backyard — not on the street. The dog must be able to focus. Introduce leash walking where the environment makes success easy.' },
  { name: 'Reward position before you move', text: 'With dog on your left side, reward heavily for standing next to you with the leash loose. The dog should associate being beside you with good things before you take a single step.' },
  { name: 'Mark and reward loose leash', text: 'Take a few steps. Any moment the leash is loose, mark (yes!) and reward. The dog learns: loose leash = treats happen. Do this 50+ times before adding any correction protocol.' },
  { name: 'Stop the moment the leash tightens', text: 'The instant the leash goes tight — stop moving. Stand still. Wait. Do not pull back, say anything, or move forward. Motion only resumes when the dog returns to your side and the leash goes loose.' },
  { name: 'Add the 180-degree turn', text: 'When the dog pulls forward, turn and walk in the opposite direction without saying anything. The dog\'s forward progress is always interrupted by pulling. Consistent application over weeks changes behavior.' },
  { name: 'Build distraction gradually', text: 'Once reliable in low-distraction environments, practice near mild distractions. Increase distraction level gradually over weeks. Never start a session in an environment the dog cannot yet handle.' },
]})
const combined = combineSchemas(schema, howTo)
export default function LooseLeashPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="dog-com"
        contentType="training"
        hero={{ title: 'Loose Leash Walking', subtitle: 'Pulling on leash is one of the most common reasons dogs are surrendered. It is also one of the most fixable. The method that works is simple: forward motion only happens when the leash is loose.', category: 'Dog Training', authorName: 'Dog.com Editorial', authorAvatar: '🐕', publishedAt: 'May 2025', readTime: '9 min' }}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Training', href: '/training' }, { name: 'Loose Leash Walking', href: '/training/loose-leash-walking' }]}
        relatedLinks={[{ title: 'Dog Training Hub', href: '/training', category: 'Hub' }, { title: 'Leash Reactivity', href: '/training/leash-reactivity', category: 'Training' }, { title: 'Basic Dog Commands', href: '/training/basic-commands', category: 'Training' }, { title: 'Best Dog Harnesses', href: '/reviews/best-dog-harnesses', category: 'Reviews' }]}
        schema={schema}
        sidebar={<>
          <TableOfContents items={[{ label: 'Why Dogs Pull', href: '#why' }, { label: 'Stop-and-Wait Method', href: '#stop' }, { label: '180-Degree Turn', href: '#turn' }, { label: 'Equipment', href: '#equipment' }, { label: 'Common Mistakes', href: '#mistakes' }]} />
          <RelatedLinks title="Related Guides" links={[{ label: 'Leash Reactivity', href: '/training/leash-reactivity' }, { label: 'Best Dog Harnesses', href: '/reviews/best-dog-harnesses' }, { label: 'Basic Commands', href: '/training/basic-commands' }]} />
          <CrossPortfolioCard currentSite="dog-com" contentType="training" variant="sidebar" />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Training Tips" subtitle="Science-based guidance weekly." source="training-loose-leash" />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Dog.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-09-04T00:00:00Z" reviewedBy="Editorial team" />

          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the loose-leash plan
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Loose-leash protocol
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the stop-and-wait method, the 180-degree turn, and the
              walk kit (front-clip no-pull harness, 6-ft leash, treat pouch,
              high-value treats) so you can run the protocol without scrolling
              back. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="dog-com"
              title="Loose-leash protocol"
              subtitle="Email the stop-and-wait protocol, 180-degree turn, and walk kit. No spam."
              ctaText="Email my loose-leash protocol"
              source="training-loose-leash-walking-under-hero"
            />
          </div>

          <h2 id="why">Why Dogs Pull</h2>
          <p>Dogs pull on leash because pulling works. When the dog pulls forward and the human follows (even reluctantly), the dog gets to where it wants to go. Every walk where pulling produces forward movement reinforces the pulling behavior. The solution is not correction — it is making pulling ineffective. When pulling never produces forward motion, and a loose leash always does, dogs learn to walk loosely.</p>

          <h2 id="stop">The Stop-and-Wait Method</h2>
          <p>The moment the leash becomes taut — stop completely. Plant your feet. Do not pull back, do not say anything. Just stop. Wait for the dog to release tension on the leash by turning toward you, sitting, or stepping back. The instant the leash goes loose, mark (yes!) and move forward again.</p>
          <p>This requires patience — expect to cover one block in 20 minutes at first. The dog is learning a new rule: tight leash = everything stops. Loose leash = we move. Consistent application over 2–4 weeks produces dramatic improvement in most dogs. The key word is consistent — every person who walks the dog must apply the same rule, every time.</p>

          <h2 id="turn">The 180-Degree Turn</h2>
          <p>When the dog pulls hard toward something — another dog, a smell, a person — turn and walk in the opposite direction without saying anything. Do not pull the dog, just turn and walk. The dog&apos;s forward progress is interrupted entirely. After the turn, reward heavily for staying beside you.</p>
          <p>This method is particularly effective for dogs that pull toward specific triggers. The dog learns that pulling toward that thing produces the opposite outcome — they move away from it.</p>

          <h2 id="equipment">Equipment That Helps</h2>
          <p><strong>Front-clip harness (PetSafe Easy Walk):</strong> The leash attaches at the chest — when the dog pulls, they are redirected sideways rather than forward. Does not cause pain. Significantly reduces pulling in most dogs from day one while training is ongoing.</p>
          <p><strong>Head halter (Gentle Leader, Halti):</strong> Controls the head, which controls direction. Very effective at stopping pulling. Requires careful introduction (dogs often resist at first) and should not be used with a sudden jerk — only gentle guidance.</p>
          <p>Avoid: choke chains, prong collars, shock collars. These apply pain to stop pulling but do not teach the dog what to do instead, and are associated with increased anxiety and reactivity on leash.</p>

          {/* Money path — live amazon-brand search hops (loose-leash kit).
              ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
              Category searches only — not a ranked list. */}
          <AffiliateDisclosure variant="inline" siteId="dog-com" />
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
              Shop a loose-leash kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              A front-clip no-pull harness reduces pulling mechanics while you
              run stop-and-wait. Pair it with a 6-ft leash (not a retractable),
              a belt-clip treat pouch, and high-value treats so rewards land in
              the 1–2 second window. Same harness hop used on the{' '}
              <Link
                href="/tools/harness-collar-size"
                className="text-brand-primary no-underline hover:underline"
              >
                harness and collar size calculator
              </Link>
              {' '}and the{' '}
              <Link
                href="/tools/dog-exercise-calculator"
                className="text-brand-primary no-underline hover:underline"
              >
                exercise calculator
              </Link>
              . Same treat-pouch hop used on the{' '}
              <Link
                href="/training/basic-commands"
                className="text-brand-primary no-underline hover:underline"
              >
                basic-commands guide
              </Link>
              . They are not a ranked product list and they do not replace the
              protocol. Size the harness before you order. Dog.com earns a
              commission on qualifying purchases at no extra cost to you. Empty
              Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/front+clip+no+pull+dog+harness?s=training-loose-leash-walking"
                amazonLabel="Browse no-pull harnesses on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/6+ft+dog+leash?s=training-loose-leash-walking"
                amazonLabel="Browse 6-ft leashes on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/dog+training+treat+pouch+belt+clip?s=training-loose-leash-walking"
                amazonLabel="Browse treat pouches on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/puppy+training+treats?s=training-loose-leash-walking"
                amazonLabel="Browse high-value training treats on Amazon →"
              />
            </div>
            <p className="text-2xs text-brand-text-light mt-3">
              Size the harness first with the{' '}
              <Link href="/tools/harness-collar-size" className="text-brand-primary hover:underline">
                harness and collar size calculator
              </Link>
              , then see our full{' '}
              <Link href="/reviews/best-dog-harnesses" className="text-brand-primary hover:underline">
                Best Dog Harnesses 2026
              </Link>
              {' '}guide for side-by-side comparisons.
            </p>
          </div>

          <h2 id="mistakes">Most Common Mistakes</h2>
          <ul>
            <li><strong>Inconsistency:</strong> Allowing pulling &quot;just this once&quot; or on some walks resets weeks of progress. The rule must apply every time.</li>
            <li><strong>Starting in hard environments:</strong> Trying to teach loose leash walking on a busy street with squirrels and other dogs is training the dog in conditions where it cannot yet succeed. Build the skill in easy environments first.</li>
            <li><strong>Moving too fast:</strong> If the dog is pulling constantly, you are moving too fast for the dog&apos;s current training level. Slow down, reward more, increase criteria gradually.</li>
            <li><strong>Using the leash as a correction tool:</strong> Jerking or yanking the leash tells the dog nothing useful about what to do instead. It often increases frustration and arousal — making pulling worse.</li>
          </ul>
        </div>
      </ArticleLayout>
    </>
  )
}

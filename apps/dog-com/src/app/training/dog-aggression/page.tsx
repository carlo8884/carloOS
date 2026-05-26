import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Dog Aggression — Types, Causes & When to Get Professional Help | Dog.com', description: 'Dog aggression types: fear-based, resource guarding, redirected, pain-related, and inter-dog. Warning signals, what never to do, and when a veterinary behaviorist is required.', path: '/training/dog-aggression', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Dog Aggression', description: 'Types, causes, warning signals, and professional intervention for dog aggression.', url: 'https://dog.com/training/dog-aggression', imageUrl: '', authorName: 'Dog.com Training Team', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function DogAggressionPage() {
  return (
    <ArticleLayout siteId="dog-com"
      hero={{ title: 'Dog Aggression', subtitle: 'Aggression is the most misunderstood behavioral problem in dogs — and the most dangerous to address incorrectly. Dominance-based "corrections" and punishment consistently make aggression worse. Understanding the type of aggression and its function determines the correct approach.', category: 'Dog Training', authorName: 'Dog.com Training Team', authorAvatar: '🐕', publishedAt: 'May 2025', readTime: '10 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Training', href: '/training' }, { name: 'Dog Aggression', href: '/training/dog-aggression' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-danger/5 border border-brand-danger/20 rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-danger mb-2">Never Do This</div>
          <ul className="text-xs text-brand-text-mid space-y-1.5 m-0 p-0 list-none">
            {['Alpha roll or physical domination', 'Punish a growl (removes warning)', 'Stare down an aggressive dog', '"Flood" the dog with the trigger', 'Scruff shaking or hitting', 'Choke chains or prong collars for aggression'].map(s => <li key={s} className="flex gap-2"><span className="text-brand-danger font-bold">✗</span>{s}</li>)}
          </ul>
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Resource Guarding', href: '/training/resource-guarding' }, { label: 'Leash Reactivity', href: '/training/leash-reactivity' }, { label: 'Trainer Credentials', href: '/training/trainer-credentials' }]} />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Training Tips" subtitle="Science-based guidance weekly." source="training-aggression" />
      </>}
    >
      <div className="carloOS-article">
        <h2>The Aggression Sequence — Warning Signals</h2>
        <p>Aggression in dogs follows a predictable sequence of escalating warnings. Dogs that bite without warning have almost always had their earlier warning signals ignored, suppressed by punishment, or missed. The full sequence, from subtle to severe: stiffening, direct stare, stillness, lip curl/snarl, growl, snap (air snap), single bite with release, bite with hold/shake. Removing earlier signals — particularly by punishing growling — compresses this sequence and creates dogs that bite without warning. Growling is communication. It should be respected, not punished.</p>

        <h2>Types of Aggression</h2>
        <p><strong>Fear-based aggression</strong> is the most common. The dog bites because it cannot escape something it finds threatening. The trigger may be obvious (strangers, children, other dogs) or subtle (specific physical contexts, certain movements). Fear-based dogs show fear signals before or during aggressive displays — tucked tail, ears back, avoidance attempts before aggression. Treatment: behavior modification to change the emotional response to triggers, anxiety management including medication when appropriate.</p>
        <p><strong>Resource guarding aggression</strong> is normal canine behavior that becomes dangerous in the household context. Food, toys, resting spots, and people can all be guarded. See our resource guarding guide for the trade game protocol. Key point: punishment makes resource guarding worse — it removes warning signals without addressing the underlying emotional trigger.</p>
        <p><strong>Redirected aggression</strong> occurs when a dog cannot reach its actual target (another dog on the other side of a fence, a squirrel) and bites the nearest available target — often the owner. Not intentional. Extremely common in leash-reactive dogs. Prevention: avoid placing the dog in situations where it becomes highly aroused and cannot reach the trigger.</p>
        <p><strong>Pain-related aggression</strong> — any dog in pain may bite when touched, moved, or handled in a way that causes pain. A dog that suddenly bites during petting, especially in a specific location, should have a veterinary examination before behavioral work. Rule out pain first in any new-onset aggression, particularly in adult or senior dogs.</p>
        <p><strong>Inter-dog aggression</strong> — dogs that are fine with humans but aggressive to other dogs. May be selective (dog-sex specific, unfamiliar dogs only, same-household dogs) or generalized. History, context, and the specific presentation determine intervention.</p>

        <h2>What Dominance Theory Gets Wrong</h2>
        <p>The dominance theory of dog behavior — the idea that dogs are constantly trying to dominate humans and must be "put in their place" — has been thoroughly refuted by contemporary behavioral science. Dogs are not wolves. The original wolf pack research on which dominance theory was based has been retracted by its own author. Dogs that show aggressive behavior are motivated by fear, anxiety, pain, resource guarding, or conflict — not by a desire for status. Management approaches based on dominance (alpha rolls, "winning" confrontations, physical corrections) cause significant harm: they increase anxiety, suppress warning signals, damage the human-dog relationship, and consistently make aggression more dangerous.</p>

        <h2>When Professional Help Is Required</h2>
        <p>Any aggression that has resulted in a bite with contact, any aggression toward children, aggression involving multiple contexts, or aggression that has escalated despite management attempts requires a board-certified veterinary behaviorist (DACVB) or certified applied animal behaviorist (CAAB). These are not situations for generic dog trainers or online advice. A veterinary behaviorist can also prescribe medication when appropriate — behavioral modification combined with appropriate pharmacological intervention is significantly more effective for many aggression presentations than behavior modification alone.</p>
      </div>
    </ArticleLayout>
  )
}

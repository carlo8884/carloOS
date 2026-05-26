import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'saddle-com', title: 'Dressage Basics Guide — Training Scale, Tests & Equipment | Saddle.com', description: 'Introduction to dressage. The Training Scale (Rhythm, Relaxation, Contact, Impulsion, Straightness, Collection), how dressage tests work, and essential equipment.', path: '/guides/dressage-basics-guide', type: 'article' })
const schema = buildArticleSchema({ siteId: 'saddle-com', title: 'Dressage Basics Guide', description: 'Training scale, competition tests, and equipment for beginning dressage riders.', url: 'https://saddle.com/guides/dressage-basics-guide', imageUrl: '', authorName: 'Victoria Marsh, CSF', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function DressageBasicsGuidePage() {
  return (
    <ArticleLayout siteId="saddle-com"
      hero={{ title: 'Dressage Basics Guide', subtitle: 'Dressage — from the French "dresser," to train — is the art of riding and training horses in a way that develops the horse\'s natural athletic ability and willingness to perform. At its core, dressage is correct, harmonious horsemanship. Every English rider benefits from dressage principles regardless of their primary discipline.', category: 'Equestrian Guide', authorName: 'Victoria Marsh, CSF', authorCredentials: 'Certified Saddle Fitter', authorAvatar: '🐴', publishedAt: 'May 2025', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides', href: '/guides/saddle-fit-guide' }, { name: 'Dressage Basics', href: '/guides/dressage-basics-guide' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Training Scale</div>
          {[['1. Rhythm', 'Regular, pure gaits'], ['2. Relaxation', 'Suppleness, no tension'], ['3. Contact', 'Consistent rein connection'], ['4. Impulsion', 'Energetic hindquarter thrust'], ['5. Straightness', 'Hind feet track fore feet'], ['6. Collection', 'Engagement, self-carriage']].map(([step, desc]) => (
            <div key={step} className="py-2 border-b border-brand-border last:border-0">
              <div className="text-xs font-bold text-brand-dark">{step}</div>
              <div className="text-2xs text-brand-text-light">{desc}</div>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'English Riding Guide', href: '/guides/english-riding-guide' }, { label: 'Saddle Fit Guide', href: '/guides/saddle-fit-guide' }, { label: 'Best English Saddles', href: '/reviews/best-english-saddles' }]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Equipment Guides" subtitle="Expert fitting and care guides." source="guides-dressage" />
      </>}
    >
      <div className="carloOS-article">
        <h2>The Training Scale — The Foundation</h2>
        <p>German classical dressage training is built on the Ausbildungsskala — the Training Scale — six interconnected qualities that are developed in sequence but maintained together. They are not steps to be completed and left behind but qualities that inform every ride at every level.</p>
        <p><strong>Rhythm (Takt):</strong> Regular, pure gaits — walk in 4-beat, trot in 2-beat, canter in 3-beat. A horse with irregular rhythm is not yet ready to develop the next qualities. Rhythm is established through relaxation and forward movement.</p>
        <p><strong>Relaxation (Losgelassenheit):</strong> Mental and physical relaxation — the absence of tension that prevents correct movement. A tense horse cannot swing through its back, cannot use its hind end correctly, and cannot accept contact. Relaxation is the foundation on which all training is built.</p>
        <p><strong>Contact (Anlehnung):</strong> Consistent, elastic connection between rider's hand and horse's mouth through the rein. Not pulling — a conversation. The horse seeks the contact when relaxed and forward. Contact is developed from the leg aid forward into the hand, not from pulling backward.</p>
        <p><strong>Impulsion (Schwung):</strong> The energetic thrust of the hindquarters that creates suspension and power. Impulsion is energy flowing forward through a swinging back — it is not speed. Impulsion without relaxation becomes tension; with relaxation it becomes power.</p>
        <p><strong>Straightness (Geraderichtung):</strong> Hind feet tracking on the same line as fore feet — the horse's body from head to tail aligned without lateral crookedness. Most horses are naturally crooked (one hind leg more engaged than the other). Straightness is developed through consistent work on both reins.</p>
        <p><strong>Collection (Versammlung):</strong> The highest quality — the horse carries more weight on the hindquarters, lightening the forehand, with increased engagement and self-carriage. Collection is the goal of advanced dressage, not a beginning concept. It develops naturally as the lower qualities are established.</p>

        <h2>How Dressage Tests Work</h2>
        <p>A dressage test is a sequence of movements performed in an arena (20×40 meters for lower levels, 20×60 meters for upper levels) that are judged individually by a judge positioned at C (the end of the arena). Each movement receives a score from 0–10: 10 (excellent), 9 (very good), 8 (good), 7 (fairly good), 6 (satisfactory), 5 (marginal), 4 (insufficient), 3 (fairly bad), 2 (bad), 1 (very bad), 0 (not performed or rider elimination). Collective marks at the end assess gaits, impulsion, submission, and rider position. The test percentage is the total score divided by the maximum possible score.</p>
        <p>USDF levels in the US: Introductory (walk/trot), Training Level (adds canter), First Level (adds lengthenings), Second Level (shoulder-in, travers, rein-back, medium gaits), Third Level (half-pass, flying changes), Fourth Level (more collected movements). FEI levels: Prix St. Georges, Intermediate I and II, Grand Prix. Most amateur riders compete at Training through Second Level.</p>

        <h2>Equipment for Dressage</h2>
        <p><strong>Saddle:</strong> A dressage saddle has a straighter flap than an all-purpose saddle, a deep seat, and a longer billet designed to work with dressage girth. The straighter flap allows the rider to maintain the long-leg dressage position without the flap pushing the leg forward. A correctly fitting dressage saddle is the foundation of correct position.</p>
        <p><strong>Bridle:</strong> A cavesson noseband is the standard for all USDF tests through Fourth Level — a simple, plain cavesson. At FEI levels, a double bridle (bridoon and curb bit with two sets of reins) is required. For lower levels, any simple snaffle is appropriate — an eggbutt or loose ring snaffle for most horses. Flash nosebands are legal but controversial from a welfare standpoint — the noseband should be fitted to allow two fingers width under it.</p>
        <p><strong>Rider dress:</strong> White or light-colored breeches, tall black boots, a white or light-colored shirt, and a jacket (shadbelly at FEI, hunt coat at most USDF competitions) or short jacket. Gloves. An approved safety helmet or top hat (top hat only permitted at FEI Grand Prix level). Amateur competitors at schooling shows often compete in less formal attire — check specific show requirements.</p>
      </div>
    </ArticleLayout>
  )
}

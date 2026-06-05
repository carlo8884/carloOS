import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ArticleLayout, ArticleByline, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema, buildHowToSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: 'Horse Bridle Guide 2025 — Types, Fitting | Saddle.com',
  description: 'Complete horse bridle guide. Snaffle vs double bridle, bitless options, correct fit by discipline, and how to check bridle fit on your horse.',
  path: '/guides/horse-bridle-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: 'Horse Bridle Guide 2025',
  description: 'Bridle types, fit, and discipline selection — from snaffle to double bridle.',
  url: 'https://saddle.com/guides/horse-bridle-guide',
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2025-05-01T00:00:00Z',
})

const howToSchema = buildHowToSchema({
  name: 'How to Fit a Horse Bridle',
  description: 'Step-by-step guide to checking and adjusting bridle fit for your horse.',
  url: 'https://saddle.com/guides/horse-bridle-guide',
  steps: [
    { name: 'Check the crownpiece', text: 'The crownpiece should sit just behind the horse\'s ears without pinching. Run two fingers under the crownpiece — it should have light contact, not pressure.' },
    { name: 'Check the browband', text: 'The browband should lay flat across the forehead with no pulling or gaping. It should not pull the crownpiece forward onto the ears or hang away from the forehead.' },
    { name: 'Check the cheekpieces', text: 'The bit should hang at the correct height in the mouth — typically creating 1-3 wrinkles at the corner of the mouth for a snaffle, and 0-1 wrinkles for a double bridle.' },
    { name: 'Check the noseband', text: 'A cavesson noseband should allow two fingers flat between noseband and face. A flash noseband should not restrict the horse from chewing or relaxing the jaw.' },
    { name: 'Check the throatlatch', text: 'The throatlatch should allow three to four fingers between the leather and the horse\'s throat. Too tight restricts breathing and flexion.' },
    { name: 'Check bit width', text: 'The bit should extend approximately 1cm beyond the corner of the mouth on each side. Too narrow pinches; too wide drops and rotates in the mouth.' },
  ],
})

const combinedSchema = combineSchemas(schema, howToSchema)

const BRIDLE_TYPES = [
  {
    name: 'Snaffle Bridle',
    disciplines: 'All disciplines, all levels — the universal starting point',
    description: 'A single bit, single rein bridle. The snaffle acts directly on the corners of the mouth, tongue, and bars. The most common bridle in use across all equestrian disciplines. Correct starting point for all young horses and appropriate for most recreational and competitive riding. A well-fitted snaffle with educated hands is sufficient for the vast majority of horses throughout their working lives.',
    bits: 'Loose ring snaffle, D-ring snaffle, eggbutt snaffle, full cheek snaffle.',
    fit: 'Bit creates 1-3 small wrinkles at corner of mouth. Noseband allows two fingers.',
    when: 'All horses, all disciplines. Required in most dressage tests through Prix St. Georges level.',
  },
  {
    name: 'Double Bridle (Weymouth & Bridoon)',
    disciplines: 'Upper-level dressage (Grand Prix, Intermediaire I+), some showing',
    description: 'Two bits — a thin snaffle (bridoon) and a curb bit (Weymouth) — with two sets of reins. The curb acts via poll pressure and leverage rather than direct mouth pressure. Intended for advanced communication with a horse already confirmed in a snaffle, not for schooling. Introduced in dressage competition at Intermediaire I level as a presentation element — the horse must be established at the work before the double bridle is introduced.',
    bits: 'Weymouth port and bridoon — matched pairs, not mixed manufacturers when possible.',
    fit: 'Bridoon creates 1 small wrinkle. Weymouth hangs lower — no wrinkles. Both fit independently.',
    when: 'Only after the horse is solid in all the work in a snaffle. Never as a training tool.',
  },
  {
    name: 'Western Bridle',
    disciplines: 'Western riding (reining, cutting, trail, barrel racing)',
    description: 'Western bridles typically have no noseband and may use a curb bit — a shanked bit that creates poll and chin groove pressure. Many western traditions ride one-handed (neck reining) with a longer-shanked curb. Training typically begins with a snaffle and transitions to a curb as the horse develops. Headstalls may be one-ear, two-ear, browband, or hackamore designs depending on discipline tradition and preference.',
    bits: 'Tom thumb, grazing bit, low-port curb for general use. High-port and shanked bits for advanced work.',
    fit: 'Curb chain or strap should allow two fingers when the shanks are at 45 degrees.',
    when: 'Discipline dependent — follow the training tradition of your specific western discipline.',
  },
  {
    name: 'Bitless Bridle',
    disciplines: 'Trail, leisure, some endurance — limited competition use',
    description: 'Operates without a bit — uses poll pressure (Dr. Cook\'s cross-under), nose pressure (hackamore/bosal), or chin and nose pressure (mechanical hackamore). Not universally permitted in competition. The cross-under design claims to work by pressure on all of the horse\'s face simultaneously; critics argue this is vague and can cause confusion. The bosal is a legitimate Western training tool with a long history. Mechanical hackamores can be severe — the long shank creates significant leverage on the nose.',
    bits: 'No bit — contact points vary by design.',
    fit: 'Hackamore bosal should have space to breathe and flex at the nose — never tight.',
    when: 'Horses that cannot tolerate a bit (mouth injury, dental issues), trail and leisure riding. Check competition rules.',
  },
]

export default function HorseBridleGuidePage() {
  return (
    <>
      <SchemaScript schema={combinedSchema} />
      <ArticleLayout
        siteId="saddle-com"
        contentType="guide"
        hero={{
          title: 'Horse Bridle Guide 2025',
          subtitle: 'Bridle selection follows your discipline, your horse\'s training level, and the work you are doing — not personal preference or aesthetics. This guide covers what each bridle type does, who it is for, and how to fit it correctly.',
          category: 'Equipment Guide',
          authorName: 'Saddle.com Editorial',
          authorAvatar: '🐴',
          publishedAt: 'May 2025',
          readTime: '11 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Guides', href: '/guides/saddle-fit-guide' },
          { name: 'Horse Bridle Guide', href: '/guides/horse-bridle-guide' },
        ]}
        relatedLinks={[
          { title: 'Guides Hub', href: '/guides', category: 'Hub' },
          { title: 'Bridle Fit Guide', href: '/guides/bridle-fit-guide', category: 'Fitting' },
          { title: 'Bit Selection Guide', href: '/guides/bit-selection-guide', category: 'Equipment' },
          { title: 'Saddle Fit Guide', href: '/guides/saddle-fit-guide', category: 'Fitting' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: 'Bridle Types', href: '#types' },
            { label: 'How to Fit', href: '#fit' },
            { label: 'By Discipline', href: '#discipline' },
            { label: 'Bit Selection', href: '#bits' },
            { label: 'Noseband Types', href: '#nosebands' },
          ]} />
          <RelatedLinks title="Related Guides" links={[
            { label: 'Saddle Fit Guide', href: '/guides/saddle-fit-guide' },
            { label: 'Best English Saddles', href: '/reviews/best-english-saddles' },
            { label: 'Leather Care Guide', href: '/guides/leather-care-guide' },
          ]} />
          <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Equipment Guides" subtitle="Expert reviews and fitting guides." source="guides-bridle" />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Saddle.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />
          <h2 id="types">Bridle Types</h2>

          {BRIDLE_TYPES.map((bridle) => (
            <div key={bridle.name} className="mb-8 bg-brand-surface rounded-xl border border-brand-border p-6">
              <div className="flex items-start justify-between flex-wrap gap-3 mb-3">
                <h3 className="font-display font-bold text-brand-dark text-xl m-0">{bridle.name}</h3>
                <span className="text-2xs font-bold px-3 py-1 rounded-pill bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
                  {bridle.disciplines}
                </span>
              </div>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-4">{bridle.description}</p>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { label: 'Typical Bits', value: bridle.bits },
                  { label: 'Fit Check', value: bridle.fit },
                  { label: 'When to Use', value: bridle.when },
                ].map(item => (
                  <div key={item.label} className="bg-brand-white rounded-lg p-3 border border-brand-border">
                    <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-1">{item.label}</div>
                    <div className="text-xs text-brand-text-mid leading-relaxed">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <h2 id="fit">How to Fit a Bridle</h2>
          <p>A poorly fitted bridle causes discomfort, resistance, and evasion — problems frequently misattributed to training issues or the horse's temperament. Fit the bridle before addressing rideability problems. The horse should accept bridling calmly (if not, investigate mouth pain and handling history), and the bridle should create no visible pressure points or asymmetry.</p>

          <p><strong>Crownpiece:</strong> Sits just behind the ears. Should not touch the base of the ears or create pressure ridges. Some horses are headpiece-sensitive — consider anatomical crownpieces with cutout designs if the horse resists bridling or rubs ears.</p>
          <p><strong>Browband:</strong> Flat across the forehead with no pulling at either end. A browband that pulls the crownpiece forward causes ear pinching; one that hangs away from the forehead creates an untidy appearance and reduces stability.</p>
          <p><strong>Bit height:</strong> For a snaffle: 1–3 small wrinkles at the corner of the mouth when the horse is relaxed. The exact number varies with bit design and individual horse anatomy. Zero wrinkles (too low) allows the bit to bang teeth; too many wrinkles creates constant mouth pressure. For a double bridle: bridoon at 1 wrinkle, Weymouth with no wrinkles, both adjusted independently.</p>
          <p><strong>Noseband:</strong> Cavesson: two fingers flat between band and nose at the front. Flash: same cavesson fit, flash strap allows the horse to chew and relax the jaw — not a mouth-clamping device. Drop: should sit above the end of the nasal bone (not on soft tissue), allowing chewing.</p>
          <p><strong>Throatlatch:</strong> Four fingers between leather and throat. Tight throatlatches restrict airway and neck flexion.</p>

          <h2 id="discipline">By Discipline</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { disc: 'Dressage (lower levels)', bridle: 'Snaffle bridle', note: 'Required at most levels' },
              { disc: 'Dressage (Intermediaire I+)', bridle: 'Double bridle', note: 'Permitted / expected at Grand Prix' },
              { disc: 'Show jumping', bridle: 'Snaffle bridle', note: 'Gag or pelham permitted in some formats' },
              { disc: 'Eventing', bridle: 'Snaffle (dressage), any (cross country/SJ)', note: 'Rules vary by phase' },
              { disc: 'Hunter / equitation', bridle: 'Snaffle or Pelham', note: 'Tradition-dependent' },
              { disc: 'Western (reining/cutting)', bridle: 'Western snaffle → curb', note: 'Transition per training level' },
              { disc: 'Trail / leisure', bridle: 'Any — bitless options permitted', note: 'Personal preference' },
              { disc: 'Endurance', bridle: 'Check specific rules — bitless often OK', note: 'Organization-dependent' },
            ].map(item => (
              <div key={item.disc} className="bg-brand-white border border-brand-border rounded-lg p-4">
                <div className="font-bold text-brand-dark text-sm mb-1">{item.disc}</div>
                <div className="text-sm text-brand-primary font-semibold mb-1">{item.bridle}</div>
                <div className="text-xs text-brand-text-light">{item.note}</div>
              </div>
            ))}
          </div>

          <h2 id="bits">Bit Selection Principles</h2>
          <p>Bit selection should follow three principles: the horse&apos;s training level, the horse&apos;s mouth conformation, and the rider&apos;s hands. A milder bit in educated hands produces more than a severe bit in rough hands. The progression generally moves from softer/simpler to more nuanced — not from mild to severe as a control measure. If you are adding bit severity to gain control, the problem is training and rider skill, not the bit.</p>
          <p>Before changing bits: have a veterinary dental examination. Hooks, sharp enamel points, and wolf teeth cause bit pain that appears as bit resistance. Eliminating dental pain resolves many apparent bit problems without any equipment change.</p>

          <h2 id="nosebands">Noseband Types and Function</h2>
          <p><strong>Cavesson:</strong> The standard. Should be fitted loosely — its function is stability and tradition, not jaw restraint. Two-finger clearance.</p>
          <p><strong>Flash:</strong> Cavesson with an additional strap below the bit. Intended to discourage opening the mouth — not to clamp it shut. Should never be so tight the horse cannot chew between movements.</p>
          <p><strong>Grackle / Figure-8:</strong> Crosses over the nose above and below the bit. Allows more jaw freedom than a flash while still discouraging opening. Common in show jumping.</p>
          <p><strong>Drop:</strong> Sits below the bit on the nasal bone. Must sit above the end of the nasal bone — on soft tissue it causes pain and restricts breathing. Less common in modern sport riding.</p>
          <p>The trend toward tighter nosebands in competition is well-documented and concerns welfare researchers — the FEI now mandates a minimum two-finger width at noseband inspection. Tight nosebands mask rather than resolve behind-the-bit evasions and prevent the horse from expressing discomfort signals.</p>
        </div>
      </ArticleLayout>
    </>
  )
}

import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildHowToSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'saddle-com', title: 'Horse Trailer Loading Guide — Positive Training & Problem Loaders | Saddle.com', description: 'Teaching a horse to load willingly and safely. Pressure-and-release technique, what not to do, and approaching problem loaders that panic or refuse at the trailer.', path: '/guides/trailer-loading-guide', type: 'article' })
const schema = buildArticleSchema({ siteId: 'saddle-com', title: 'Horse Trailer Loading Guide', description: 'Pressure-and-release trailer loading, problem loaders, and safety for horses.', url: 'https://saddle.com/guides/trailer-loading-guide', imageUrl: '', authorName: 'Saddle.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const howTo = buildHowToSchema({ name: 'How to Teach a Horse to Load in a Trailer', description: 'Step-by-step positive training approach for horse trailer loading.', url: 'https://saddle.com/guides/trailer-loading-guide', totalTime: 'P7D', steps: [
  { name: 'Introduce the trailer without pressure', text: 'Park the trailer where the horse can see and smell it daily. Allow the horse to approach voluntarily. Put hay near the trailer — then in the trailer — to build a positive association. Do not attempt loading yet.' },
  { name: 'Walk toward the trailer with calm energy', text: 'Lead the horse toward the trailer at a walk. Stop and let the horse look. Walk away before any anxiety escalates. Repeat — approach, pause, retreat. Each session makes the trailer more familiar.' },
  { name: 'Apply and release pressure at the ramp', text: 'At the ramp or step-up, apply gentle forward pressure with the lead. The instant the horse moves a foot forward — even one step — release the pressure completely and allow a pause. This teaches: pressure releases when I move forward.' },
  { name: 'Reward each foot in the trailer', text: 'Mark and reward (hay, carrot, scratching withers) for each foot that enters the trailer. Build up foot-by-foot over multiple sessions — do not rush to full loading.' },
  { name: 'Practice loading and unloading repeatedly', text: 'Once the horse loads fully, do not go anywhere — simply unload and reload multiple times in the same session. Loading should become routine, not something that only happens before a stressful trip.' },
  { name: 'Short trips before long ones', text: 'First trips should be very short — to the end of the driveway and back. Gradually extend trip length. The horse learns that loading does not predict prolonged stress.' },
]})
const combined = combineSchemas(schema, howTo)
export default function TrailerLoadingGuidePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="saddle-com"
        hero={{ title: 'Horse Trailer Loading Guide', subtitle: 'A horse that loads willingly is safer for itself, its handler, and bystanders than one that must be wrestled into a trailer. Forcing a horse that is afraid creates a horse that is more afraid. Building loading through positive association and pressure-release takes longer the first time but produces a horse that loads reliably for life.', category: 'Horse Care Guide', authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'May 2025', readTime: '9 min' }}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides', href: '/guides/saddle-fit-guide' }, { name: 'Trailer Loading', href: '/guides/trailer-loading-guide' }]}
        sidebar={<>
          <div className="bg-brand-danger/5 border border-brand-danger/20 rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-danger mb-2">Never Do This</div>
            <ul className="text-xs text-brand-text-mid space-y-1.5 m-0 p-0 list-none">
              {['Beat or whip a reluctant horse toward the trailer', 'Tie the rope through the trailer and pull', 'Use a chain over the nose to "force" loading', 'Allow a horse to scramble and fall — abort the session'].map(s => <li key={s} className="flex gap-2"><span className="text-brand-danger font-bold">✗</span>{s}</li>)}
            </ul>
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Horse First Aid Guide', href: '/guides/horse-first-aid-guide' }, { label: 'Horse Grooming Guide', href: '/guides/horse-grooming-guide' }, { label: 'Bit Selection Guide', href: '/guides/bit-selection-guide' }]} />
          <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Horse Care Guides" subtitle="Expert care and equipment guides." source="guides-trailer-loading" />
        </>}
      >
        <div className="carloOS-article">
          <h2>Why Horses Refuse to Load</h2>
          <p>Trailer loading is asking a prey animal to voluntarily enter a small, dark, moving metal box — something every instinct tells it to avoid. A horse that refuses to load is not being stubborn or dominant; it is responding to genuine fear. The most common reasons for loading refusal: a previous traumatic loading experience (fell, was injured, arrived somewhere frightening), insufficient training that leaves the horse with no positive association with the trailer, a trailer that is dark inside (horses are reluctant to step into darkness), and slippery footing in the trailer.</p>
          <p>The approach that works consistently: make the trailer the best place to be. This sounds simple but requires genuine investment in the horse's comfort and in building the positive association that overrides the instinctive avoidance.</p>

          <h2>Trailer Setup Before Training</h2>
          <p>Before beginning loading training: check that the trailer interior is well-lit — open all windows, add supplemental lighting if necessary. Remove anything that could spook or injure the horse during the learning phase. Put good hay in the front of the trailer — the horse should smell and see it from outside. Non-slip flooring (rubber mats in good condition) prevents the slipping that causes panic and injury. A step-up trailer is often easier for horses than a slant-load — the horse can see where it is putting its feet.</p>

          <h2>The Pressure-Release Method</h2>
          <p>Horses learn through pressure and release — applying a cue (pressure) and removing it the instant the horse offers the desired response (release). For trailer loading, the pressure is forward-leading pressure on the halter or lunge line; the release is complete removal of that pressure the instant the horse takes a step forward. This is not yanking or hauling — it is steady, consistent forward contact that releases the moment progress occurs.</p>
          <p>The horse learns: forward movement makes the pressure stop. This is the same principle used in all natural horsemanship approaches — it works because it is how horses communicate and learn in the herd (moving off pressure from a more dominant horse). Never make the horse wrong for loading slowly — every step forward gets an immediate release and a pause.</p>

          <h2>Problem Loaders — Established Refusal</h2>
          <p>A horse with an established loading refusal (panics, pulls back, rears at the trailer) requires desensitization over multiple sessions before loading is attempted. Begin with simply walking near the trailer. Progress to touching the horse with objects at the trailer. Progress to asking for one foot on the ramp repeatedly before any loading is expected. These horses often have a specific fear point — identify where the anxiety escalates and work just below that threshold.</p>
          <p>Consider: a horse behavior specialist or trainer experienced with loading problems for horses with significant established fear responses. Trying to force through a panic response embeds the fear more deeply and risks injury to the horse and handler. Sedation (administered by a veterinarian) for emergency trailer loading should not be repeated without addressing the underlying training deficit — a sedated horse that is forced to load is still a horse that will not load without sedation.</p>

          <h2>Safety During Loading</h2>
          <p>Handler position: stand to the side of the horse, not directly behind. A horse that scrambles backward can seriously injure a handler standing behind. Use a long enough lead that you are not pulled off your feet. Do not wrap the lead around your hand — you must be able to release instantly. Wear boots and gloves. Have a spotter watching from outside during early training sessions. Close the butt bar or door as soon as the horse is fully inside — before tying the head — and untie before opening the back door during unloading.</p>
        </div>
      </ArticleLayout>
    </>
  )
}

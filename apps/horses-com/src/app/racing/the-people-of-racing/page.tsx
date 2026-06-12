/**
 * Horses.com -- The People of Racing Reference
 * /racing/the-people-of-racing
 *
 * Educational reference: the human roles that make up a racing operation --
 * owner, trainer, jockey, breeder, and the backstretch and raceday roles.
 * NOT a betting, odds, or picks resource.
 *
 * Byline: Horses.com Editorial (no fabricated credentials).
 * Authorities: The Jockey Club, racing commissions, AAEP.
 */

import type { Metadata } from 'next'
import {
  buildMetadata,
  ArticleLayout,
  ArticleByline,
  CrossPortfolioCard,
  EmailCapture,
  RelatedLinks,
  TableOfContents,
  FAQAccordion,
  buildArticleSchema,
  SchemaScript,
} from '@carloOS/ui'
import Link from 'next/link'
import { racingRoleSpokes } from '@/data/racing-roles'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'The People of Racing -- Owners, Trainers, Jockeys & More',
  description:
    'Who does what in horse racing: owners, trainers, jockeys, breeders, exercise riders, grooms, racing secretaries, and stewards -- the roles explained.',
  path: '/racing/the-people-of-racing',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'The People of Racing -- Owners, Trainers, Jockeys & More',
  description:
    'Who does what in horse racing: owners, trainers, jockeys, breeders, exercise riders, grooms, racing secretaries, and stewards.',
  url: 'https://horses.com/racing/the-people-of-racing',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-02T00:00:00Z',
  modifiedAt: '2026-06-02T00:00:00Z',
})

const FAQS = [
  {
    question: 'What does a racehorse trainer do?',
    answer:
      'A trainer is the licensed professional responsible for the day-to-day conditioning, health, and race planning of the horses in their care. The trainer decides how a horse is exercised, oversees its feeding and veterinary care, selects which races to enter, engages the jockey, and saddles the horse on race day. Trainers are licensed by the racing commission in each jurisdiction and are accountable for their horses under the rules of racing.',
    answerText:
      'The licensed professional responsible for a horse\'s conditioning, health, and race planning -- deciding training, entries, and jockey, and accountable under the rules of racing.',
  },
  {
    question: 'How is a jockey different from an exercise rider?',
    answer:
      'A jockey is the licensed rider who rides a horse in actual races, carrying assigned weight and competing under the rules of racing. An exercise rider rides horses during morning training -- gallops and workouts -- but does not necessarily ride in races. Many jockeys begin as exercise riders, and exercise riders are essential to a training operation, but the two are distinct licensed roles.',
    answerText:
      'A jockey rides in races under assigned weight and the rules of racing; an exercise rider rides horses in morning training but not necessarily in races. They are distinct licensed roles.',
  },
  {
    question: 'What is a racing secretary?',
    answer:
      'The racing secretary is the racetrack official who writes the condition book -- the schedule of races a track will offer and the eligibility conditions for each -- and assigns weights in handicap races. By crafting races that attract balanced fields, the racing secretary shapes the competitive structure of a meet. The role is central to how horses are matched against one another at every level of the sport.',
    answerText:
      'The track official who writes the condition book (the races offered and their eligibility rules) and assigns handicap weights, shaping the competitive structure of a race meet.',
  },
  {
    question: 'Who enforces the rules on race day?',
    answer:
      'Stewards are the officials who enforce the rules of racing on race day. They observe each race, review incidents such as interference, hear objections, and have the authority to sanction participants and, where warranted, alter the official order of finish. Stewards are appointed under the authority of the racing commission and are distinct from the breed registry and the racing secretary.',
    answerText:
      'Stewards enforce the rules on race day -- reviewing incidents, hearing objections, and able to sanction participants or alter the order of finish under the racing commission\'s authority.',
  },
]

export default function PeopleOfRacingPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="guide"
        relatedLinks={[
          { title: 'Racing Hub', href: '/racing', category: 'Horse Racing' },
          { title: 'Thoroughbred Flat Racing', href: '/racing/thoroughbred-flat-racing' },
          { title: 'Racehorse Training & Conditioning', href: '/racing/racehorse-training-and-conditioning' },
          { title: 'Race Types & Classes', href: '/racing/understanding-race-types-and-classes' },
        ]}
        hero={{
          title: 'The People of Racing',
          subtitle:
            'A racehorse never reaches the starting gate alone. Behind every runner is a team of people in distinct, often licensed roles -- the owner who pays the bills, the trainer who conditions the horse, the jockey who rides it, the breeder who produced it, and the backstretch and raceday staff who make it all run. This reference explains who does what. It is an educational reference, not a betting guide.',
          category: 'Racing Reference',
          authorName: 'Horses.com Editorial',
          authorAvatar: '&#9652;',
          publishedAt: 'June 2026',
          readTime: '10 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Racing', href: '/racing' },
          { name: 'The People of Racing', href: '/racing/the-people-of-racing' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'The Owner', href: '#owner' },
                { label: 'The Breeder', href: '#breeder' },
                { label: 'The Trainer', href: '#trainer' },
                { label: 'The Jockey', href: '#jockey' },
                { label: 'The Backstretch Team', href: '#backstretch' },
                { label: 'Raceday Officials', href: '#officials' },
                { label: 'The Roles in Depth', href: '#in-depth' },
                { label: 'FAQ', href: '#faq' },
                { label: 'References', href: '#references' },
              ]}
            />
            <RelatedLinks
              title="The Roles In Depth"
              links={[
                { label: 'The Jockey', href: '/racing/racing-roles/jockey' },
                { label: 'The Trainer', href: '/racing/racing-roles/trainer' },
                { label: 'The Owner', href: '/racing/racing-roles/owner' },
                { label: 'Racing Officials & Stewards', href: '/racing/racing-roles/racing-official' },
              ]}
            />
            <RelatedLinks
              title="Related Reading"
              links={[
                { label: 'Horse Racing Hub', href: '/racing' },
                { label: 'Racehorse Training & Conditioning', href: '/racing/racehorse-training-and-conditioning' },
                { label: 'Thoroughbred Flat Racing', href: '/racing/thoroughbred-flat-racing' },
                { label: 'Race Types & Classes Explained', href: '/racing/understanding-race-types-and-classes' },
                { label: 'Great Racehorses', href: '/racing/great-racehorses' },
                { label: 'Horse Racing Glossary', href: '/racing/glossary' },
              ]}
            />
            <CrossPortfolioCard currentSite="horses-com" contentType="discipline" variant="sidebar" />
            <EmailCapture
              variant="sidebar"
              siteId="horses-com"
              title="Equestrian Reference"
              subtitle="Citation-anchored equine reference articles, one email a week."
              source="racing-people"
            />
          </>
        }
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Horses.com Editorial"
            publishedAt="2026-06-02"
            updatedAt="2026-06-02"
            reviewedBy="Editorial team"
          />


          <p>It is useful to picture the people of racing as three overlapping circles. The <em>connections</em> -- owner, breeder, and trainer -- hold the commercial and competitive responsibility for a horse. The <em>riders</em> -- the jockey in the afternoon and the exercise rider in the morning -- are the athletes who partner the horse at speed. And the <em>backstretch and raceday staff</em> -- grooms, hot walkers, farriers, veterinarians, and the officials who govern the meet -- form the surrounding infrastructure without which no horse reaches the gate. The sections below walk through each circle in turn; the celebrated runners profiled in the <a href="/racing/great-racehorses">great racehorses</a> collection were every one of them the product of teams like these.</p>

          <h2 id="owner">The Owner</h2>
          <p>The owner holds title to the horse and bears the financial responsibility for its racing career -- training fees, veterinary care, transport, entry and jockey fees, and the day-to-day costs of keeping a horse in training. Owners range from individuals racing a single horse to large partnerships and syndicates in which many people hold fractional shares, and to commercial racing-and-breeding operations that own many horses at once. Syndication has broadened access to ownership: by dividing a horse into shares, a partnership lets people participate in the sport at a fraction of the cost of sole ownership, and a number of the sport&apos;s best-known recent runners have raced for partnerships rather than for individuals.</p>
          <p>The owner&apos;s registered racing colors, worn by the jockey as silks, identify the horse&apos;s connections on the track; a set of colors is registered with the racing authority and is unique to that owner. Owners are licensed by the racing commission in each jurisdiction in which they race. The owner makes the high-level decisions -- which trainer to employ, whether to keep racing or to retire a horse to a second career or to stud -- while the day-to-day conditioning judgment is delegated to the trainer. The role is covered in more depth in the <a href="/racing/racing-roles/owner">owner role reference</a>.</p>

          <h2 id="breeder">The Breeder</h2>
          <p>The breeder is the person or operation that produces the foal -- selecting the mating of a broodmare to a stallion, foaling and raising the young horse, and often selling it as a yearling or two-year-old. Breeding is a long-horizon endeavor: the decisions a breeder makes will not be tested on the racetrack for two or three years at the earliest, and a stallion&apos;s reputation as a sire is built over many crops of foals. In the Thoroughbred world, every foal is recorded in The Jockey Club&apos;s American Stud Book, and a horse&apos;s pedigree -- its sire and dam and their record -- is a central part of its identity and commercial value.</p>
          <p>The breeder may or may not remain the horse&apos;s owner once it reaches the track. Commercial breeders typically sell their young stock at public auction, where pedigree, conformation, and physical presence drive the price. Owner-breeders, by contrast, breed and race their own horses, keeping a bloodline within a single operation across generations. Either way, the breeder&apos;s influence is felt before the horse ever trains: the raw material of speed, stamina, and soundness is set by the mating long before a trainer takes over.</p>

          <h2 id="trainer">The Trainer</h2>
          <p>The trainer is the licensed professional who conditions the horse and manages its racing career. The trainer&apos;s judgment governs how a horse is exercised and brought to fitness, how its health and soundness are managed in partnership with veterinarians and farriers, which races it is entered in, and which jockey rides it. On race day the trainer saddles the horse in the paddock and gives the jockey instructions about how it should be ridden. Trainers operate stables of varying size -- from a handful of horses to large strings of several dozen -- and employ the backstretch staff who care for the horses.</p>
          <p>Crucially, the trainer is the legally responsible party for a horse&apos;s condition and medication status under the rules of racing: if a horse tests positive for a prohibited substance, the trainer is accountable regardless of who administered it. This &quot;trainer responsibility&quot; principle places the integrity of a horse&apos;s preparation squarely on the trainer&apos;s shoulders. The principles a trainer applies day to day are covered in the <a href="/racing/racehorse-training-and-conditioning">training and conditioning reference</a>, and the role itself in the <a href="/racing/racing-roles/trainer">trainer role reference</a>.</p>

          <h2 id="jockey">The Jockey</h2>
          <p>The jockey is the licensed rider who rides the horse in a race. Jockeys ride at very low weights relative to the average adult, maintaining strict fitness and weight discipline, and they carry assigned weight -- the saddle, the rider, and lead weights in the saddle pad if needed -- made up to the total the conditions of the race require. The physical demands are considerable: a jockey holds a crouched, balanced position over a horse moving at speed, absorbing its motion through the legs while keeping their own weight light and still in the saddle.</p>
          <p>Beyond physical skill and balance, a jockey must judge pace, position a horse in running, save ground around the turns, and time a challenge to arrive at the wire with the horse still running -- all at speed, in traffic, and within the rules. Jockeys are typically freelance professionals engaged race by race through their agents, who book mounts on their behalf, and they ride under the authority of the racing commission and the constant scrutiny of the stewards. The same craft, viewed up close, is the subject of the <a href="/racing/racing-roles/jockey">jockey role reference</a>.</p>

          <h2 id="backstretch">The Backstretch Team</h2>
          <p>Much of a racing stable&apos;s work is done before dawn, by the backstretch staff who care for the horses day in and day out. &quot;The backstretch&quot; refers to the stable area of a racetrack -- the barns, the workers&apos; quarters, and the support facilities behind the racing surface -- and it is a working community in its own right, often staffed around the clock. The key roles include:</p>
          <p><strong>Grooms</strong> are responsible for the daily care of individual horses -- feeding, grooming, mucking out, bandaging, tacking up, and monitoring each horse&apos;s condition closely enough to notice the subtle changes that precede a problem. A groom typically cares for a set string of horses and comes to know each one&apos;s normal appetite, attitude, and way of moving. <strong>Exercise riders</strong> ride the horses in their morning gallops and timed workouts, giving the trainer feedback on how each horse is moving and feeling; many jockeys began as exercise riders, and the two roles share much of the same skill base. <strong>Hot walkers</strong> cool horses down by walking them in hand after exercise, letting heart rate and body temperature return to normal gradually. <strong>Pony riders</strong> lead horses to the gate on stable ponies to settle them before a race.</p>
          <p><strong>Farriers</strong> shoe the horses and maintain hoof health on a regular reset schedule, and <strong>veterinarians</strong> manage soundness, vaccination, dental care, and medical treatment in coordination with the trainer. This team is the foundation of any training operation, and the close daily observation that grooms and exercise riders provide is very often the first line of detection for a developing health or soundness problem -- a horse &quot;not herself&quot; in the barn is frequently noticed long before anything would show on the track.</p>

          <h2 id="officials">Raceday Officials</h2>
          <p>Several officials make a race meet run under the rules, and unlike the connections they are neutral parties employed or appointed to govern the competition. The <strong>racing secretary</strong> writes the condition book -- the menu of races a track will offer and the eligibility conditions for each -- and assigns the weights in handicap races, shaping the competitive structure of the meet by crafting races that draw balanced fields. (How those race conditions and classes fit together is set out in the <a href="/racing/race-types">race types reference</a>.) The <strong>stewards</strong> enforce the rules on race day, observing each race, reviewing incidents such as interference, hearing objections, and holding the authority to sanction participants and, where warranted, alter the official order of finish.</p>
          <p>Other raceday officials each guard a specific point of integrity. The <strong>clerk of scales</strong> verifies that each jockey weighs out before the race and weighs in after it at the correct assigned weight. The <strong>paddock judge</strong> oversees the saddling and parade of the horses beforehand. The <strong>starter</strong> and the gate crew load the horses and work to ensure a fair break from the starting gate. The <strong>valet</strong> prepares each jockey&apos;s equipment and silks. <strong>Outriders</strong>, mounted on stable ponies, help control horses on the track and catch any that get loose. Together these roles, licensed and overseen by the racing commission, uphold the integrity and safety of the race; the stewards and the broader official corps are covered in the <a href="/racing/racing-roles/racing-official">racing officials reference</a>.</p>

          <h2 id="in-depth">The Roles in Depth</h2>
          <p>The sections above introduce the principal roles. Four of them -- the rider, the trainer, the owner, and the officials -- each have their own dedicated reference that goes deeper into what the role really involves, the path into it, and the daily reality. These remain strictly educational role guides; none offers wagering guidance.</p>
          <ul className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 list-none p-0 my-6">
            {racingRoleSpokes.map((spoke) => (
              <li key={spoke.slug}>
                <Link
                  href={`/racing/racing-roles/${spoke.slug}`}
                  className="block py-3 px-4 rounded-md border border-brand-border bg-brand-surface hover:border-brand-primary hover:bg-white no-underline transition"
                >
                  <span className="block text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-1">
                    {spoke.kicker}
                  </span>
                  <span className="block font-display font-bold text-brand-dark text-base leading-tight mb-1">
                    {spoke.title}
                  </span>
                  <span className="block text-xs text-brand-text-mid">
                    {spoke.description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>The Jockey Club. American Stud Book; Thoroughbred registration and pedigree. jockeyclub.com.</li>
            <li>Association of Racing Commissioners International (ARCI). Model rules and licensing of racing participants. arci.com.</li>
            <li>American Association of Equine Practitioners (AAEP). Equine welfare and veterinary guidance. aaep.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}

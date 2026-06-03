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
  EmailCapture,
  RelatedLinks,
  TableOfContents,
  FAQAccordion,
  buildArticleSchema,
  SchemaScript,
} from '@carloOS/ui'

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
                { label: 'FAQ', href: '#faq' },
                { label: 'References', href: '#references' },
              ]}
            />
            <RelatedLinks
              title="Related Reading"
              links={[
                { label: 'Horse Racing Hub', href: '/racing' },
                { label: 'Racehorse Training & Conditioning', href: '/racing/racehorse-training-and-conditioning' },
                { label: 'Thoroughbred Flat Racing', href: '/racing/thoroughbred-flat-racing' },
                { label: 'Race Types & Classes Explained', href: '/racing/understanding-race-types-and-classes' },
                { label: 'Horse Racing Glossary', href: '/racing/glossary' },
              ]}
            />
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

          <h2 id="owner">The Owner</h2>
          <p>The owner holds title to the horse and bears the financial responsibility for its racing career -- training fees, veterinary care, transport, entry and jockey fees, and the day-to-day costs of keeping a horse in training. Owners range from individuals to large partnerships and syndicates in which many people hold fractional shares. The owner&apos;s registered racing colors, worn by the jockey as silks, identify the horse&apos;s connections on the track. Owners are licensed by the racing commission in each jurisdiction in which they race.</p>

          <h2 id="breeder">The Breeder</h2>
          <p>The breeder is the person or operation that produces the foal -- selecting the mating of a broodmare to a stallion, foaling and raising the young horse, and often selling it as a yearling or two-year-old. Breeding is a long-horizon endeavor: the decisions a breeder makes will not be tested on the racetrack for years. In the Thoroughbred world, every foal is recorded in The Jockey Club&apos;s American Stud Book, and a horse&apos;s pedigree -- its sire and dam and their record -- is a central part of its identity and value. The breeder may or may not remain the horse&apos;s owner once it reaches the track.</p>

          <h2 id="trainer">The Trainer</h2>
          <p>The trainer is the licensed professional who conditions the horse and manages its racing career. The trainer&apos;s judgment governs how a horse is exercised and brought to fitness, how its health and soundness are managed in partnership with veterinarians and farriers, which races it is entered in, and which jockey rides it. On race day the trainer saddles the horse and gives the jockey instructions. Trainers operate stables of varying size, employ the backstretch staff who care for the horses, and are accountable for their horses&apos; welfare and conduct under the rules of racing. The principles a trainer applies are covered in the <a href="/racing/racehorse-training-and-conditioning">training and conditioning reference</a>.</p>

          <h2 id="jockey">The Jockey</h2>
          <p>The jockey is the licensed rider who rides the horse in a race. Jockeys ride at very low weights relative to the average adult, maintaining strict fitness and weight discipline, and they carry assigned weight made up to the required total. Beyond physical skill and balance, a jockey must judge pace, position a horse in running, and time a challenge -- all at speed and within the rules. Jockeys are typically freelance professionals engaged race by race through their agents, and they ride under the authority of the racing commission and the scrutiny of the stewards.</p>

          <h2 id="backstretch">The Backstretch Team</h2>
          <p>Much of a racing stable&apos;s work is done by the backstretch staff who care for the horses day in and day out:</p>
          <p><strong>Grooms</strong> are responsible for the daily care of individual horses -- feeding, grooming, mucking out, bandaging, and monitoring each horse&apos;s condition closely enough to notice subtle changes. <strong>Exercise riders</strong> ride the horses in their morning gallops and workouts, providing the trainer with feedback on how each horse is moving. <strong>Hot walkers</strong> cool horses down by walking them after exercise. <strong>Farriers</strong> shoe the horses and maintain hoof health, and <strong>veterinarians</strong> manage soundness and medical care. This team is the foundation of any training operation, and the close daily observation grooms provide is often the first line of detection for health or soundness problems.</p>

          <h2 id="officials">Raceday Officials</h2>
          <p>Several officials make a race meet run under the rules. The <strong>racing secretary</strong> writes the condition book and assigns handicap weights, shaping the races a track offers. The <strong>stewards</strong> enforce the rules on race day, reviewing incidents and able to sanction participants or alter the order of finish. The <strong>clerk of scales</strong> verifies that each jockey weighs out and in at the correct weight. The <strong>valet</strong> prepares a jockey&apos;s equipment and silks. <strong>Outriders</strong> help control horses on the track and catch loose horses. Together these roles, licensed and overseen by the racing commission, uphold the integrity and safety of the race.</p>

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

/**
 * Horses.com -- Jump Racing (Steeplechase & Hurdles) Reference
 * /racing/jump-racing
 *
 * Educational reference: what jump racing is, hurdles vs. steeplechase vs.
 * timber, where it is run, the horses, governance (National Steeplechase
 * Association in the US), and welfare. NOT a betting, odds, or picks resource.
 *
 * Byline: Horses.com Editorial (no fabricated credentials).
 * Authorities: National Steeplechase Association, AAEP.
 * Stable facts only; no fabricated results or statistics.
 */

import type { Metadata } from 'next'
import {
  buildMetadata,
  ArticleLayout,
  ArticleByline,
  EmailCapture,
  RelatedLinks,
  TableOfContents,
  FAQAccordion,
  buildArticleSchema,
  SchemaScript,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Jump Racing -- Steeplechase, Hurdles & Timber Explained',
  description:
    'Jump racing reference: hurdles vs. steeplechase vs. timber racing, the horses, where it is run, and the National Steeplechase Association. Not a betting guide.',
  path: '/racing/jump-racing',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'Jump Racing -- Steeplechase, Hurdles & Timber Explained',
  description:
    'Jump racing reference: hurdles vs. steeplechase vs. timber racing, the horses, where it is run, and the National Steeplechase Association.',
  url: 'https://horses.com/racing/jump-racing',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-02T00:00:00Z',
  modifiedAt: '2026-06-02T00:00:00Z',
})

const FAQS = [
  {
    question: 'What is jump racing?',
    answer:
      'Jump racing -- also called National Hunt racing in Britain and Ireland -- is horse racing in which horses race over obstacles rather than on the flat. The two principal forms are hurdle racing, run over smaller, more flexible obstacles, and steeplechasing, run over larger, more solid fences. Jump races are generally longer than flat races, often two miles or more, placing a premium on stamina and jumping ability as well as speed.',
    answerText:
      'Horse racing over obstacles. The two main forms are hurdles (smaller, flexible obstacles) and steeplechase (larger, fixed fences). Races are longer than flat racing, rewarding stamina and jumping.',
  },
  {
    question: 'What is the difference between hurdles and steeplechase?',
    answer:
      'Hurdle races are run over a series of smaller, more flexible obstacles and are often where younger jumping horses begin their careers. Steeplechases are run over larger, more rigid fences -- which can include open ditches and water -- demanding more jumping skill and experience. A third American form, timber racing, is run over solid post-and-rail timber fences and is a distinct tradition associated with races such as the Maryland Hunt Cup.',
    answerText:
      'Hurdles use smaller, flexible obstacles (often where jumpers start); steeplechases use larger, rigid fences including ditches and water. US timber racing uses solid post-and-rail fences.',
  },
  {
    question: 'Where is jump racing most popular?',
    answer:
      'Jump racing is most prominent in Britain, Ireland, and France, where it has a large following and a rich calendar including races such as the Grand National and the Cheltenham Gold Cup. In the United States it is a smaller but established circuit, concentrated in the mid-Atlantic and Southeast, sanctioned by the National Steeplechase Association. American jump meets are often run at country and hunt-race courses rather than the major flat tracks.',
    answerText:
      'Most prominent in Britain, Ireland, and France. In the US it is a smaller established circuit, concentrated in the mid-Atlantic and Southeast, sanctioned by the National Steeplechase Association.',
  },
  {
    question: 'What kind of horses run in jump races?',
    answer:
      'Jump-racing horses are typically Thoroughbreds, and many are flat-racing graduates that move to jumping as they mature. Because jumping demands physical development and learned skill, jump horses tend to be older than flat horses and frequently compete into their teens. Their longer careers and the second life jumping offers former flat horses make jump racing one route in the broader Thoroughbred aftercare picture.',
    answerText:
      'Mostly Thoroughbreds, often flat-racing graduates. Jump horses are typically older than flat horses and race into their teens, since jumping demands maturity and learned skill.',
  },
]

export default function JumpRacingPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="discipline"
        relatedLinks={[
          { title: 'Racing Hub', href: '/racing', category: 'Horse Racing' },
          { title: 'Thoroughbred Flat Racing', href: '/racing/thoroughbred-flat-racing' },
          { title: "The Breeders' Cup", href: '/racing/breeders-cup' },
          { title: 'Off-Track Thoroughbred Aftercare', href: '/racing/off-track-thoroughbred-aftercare' },
        ]}
        hero={{
          title: 'Jump Racing',
          subtitle:
            'Jump racing -- steeplechasing, hurdling, and American timber racing -- is the form of the sport run over obstacles rather than on the flat. This reference explains the types of jump racing, the horses that contest it, where it is run, and the body that governs it in the United States. It is an educational reference, not a betting guide.',
          category: 'Racing Reference',
          authorName: 'Horses.com Editorial',
          authorAvatar: '&#9652;',
          publishedAt: 'June 2026',
          readTime: '9 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Racing', href: '/racing' },
          { name: 'Jump Racing', href: '/racing/jump-racing' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'What Jump Racing Is', href: '#what' },
                { label: 'Hurdles', href: '#hurdles' },
                { label: 'Steeplechase', href: '#steeplechase' },
                { label: 'Timber Racing', href: '#timber' },
                { label: 'The Horses', href: '#horses' },
                { label: 'Governance', href: '#governance' },
                { label: 'Welfare', href: '#welfare' },
                { label: 'FAQ', href: '#faq' },
                { label: 'References', href: '#references' },
              ]}
            />
            <RelatedLinks
              title="Related Reading"
              links={[
                { label: 'Horse Racing Hub', href: '/racing' },
                { label: 'Thoroughbred Flat Racing', href: '/racing/thoroughbred-flat-racing' },
                { label: 'Off-Track Thoroughbred Aftercare', href: '/racing/off-track-thoroughbred-aftercare' },
                { label: 'Racehorse Training & Conditioning', href: '/racing/racehorse-training-and-conditioning' },
                { label: 'Horse Racing Glossary', href: '/racing/glossary' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="horses-com"
              title="Equestrian Reference"
              subtitle="Citation-anchored equine reference articles, one email a week."
              source="racing-jump"
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


          <h2 id="what">What Jump Racing Is</h2>
          <p>Jump racing is horse racing contested over obstacles. In Britain and Ireland it is known as National Hunt racing; in the United States it is most often called steeplechasing or simply jump racing. Where flat racing tests speed over a clear track, jump racing adds the demands of jumping at speed and of stamina over longer distances -- jump races are commonly two miles or more. A jump horse must be fast enough to be competitive, athletic enough to clear obstacles cleanly, and sound and experienced enough to do both repeatedly over a long career.</p>
          <p>This reference treats jump racing as an educational subject. No picks, odds, wagering guidance, or predictions are offered here.</p>

          <h2 id="hurdles">Hurdles</h2>
          <p>Hurdle racing is run over a series of smaller, more flexible obstacles. Because the obstacles are lower and more forgiving than steeplechase fences, hurdling is often where a jumping horse begins its over-obstacles career, learning to meet and clear an obstacle in the rhythm of a race before progressing to larger fences. Hurdle races still demand real jumping skill and the stamina that all jump racing requires.</p>

          <h2 id="steeplechase">Steeplechase</h2>
          <p>Steeplechasing is run over larger, more solid fences, which in some traditions include open ditches and water jumps. The term traces to early cross-country races run from one church steeple to another, over whatever obstacles lay between. Modern steeplechase courses use standardized fences, but the discipline retains its emphasis on bold, accurate jumping under pressure. Steeplechase horses are typically more experienced than hurdlers, having developed the skill and confidence the larger obstacles require.</p>

          <h2 id="timber">Timber Racing</h2>
          <p>Timber racing is a distinctively American form of jump racing run over solid post-and-rail timber fences rather than the brush fences of conventional steeplechasing. Solid timber leaves no margin for a careless jump, making the discipline a severe test of jumping precision. The Maryland Hunt Cup is the best-known timber race and a touchstone of the American jumping tradition. Timber racing is closely tied to the hunt-country culture of the mid-Atlantic.</p>

          <h2 id="horses">The Horses</h2>
          <p>Jump-racing horses are predominantly Thoroughbreds, and a substantial number are former flat-racing horses that take up jumping as they mature. Jumping rewards physical development and learned technique, so jump horses tend to be older than their flat counterparts and often compete successfully into their teens. This longer competitive life, and the second career that jumping offers many former flat horses, connects jump racing to the broader question of Thoroughbred aftercare addressed in the <a href="/racing/off-track-thoroughbred-aftercare">OTTB aftercare reference</a>.</p>

          <h2 id="governance">Governance</h2>
          <p>In the United States, jump racing is sanctioned by the National Steeplechase Association (NSA), which writes the rules of the sport, licenses participants, and oversees the sanctioned race meets that make up the American jump-racing calendar. American jump meets are frequently held at country and hunt-race courses in the mid-Atlantic and Southeast rather than at the major flat tracks. In Britain and Ireland, jump racing falls under the same national authorities that govern flat racing, with National Hunt rules forming a distinct body of the sport.</p>

          <h2 id="welfare">Welfare</h2>
          <p>Because jump racing involves obstacles, falls are an inherent risk to both horse and rider, and welfare is a central and ongoing concern in the discipline. Governing bodies set standards for obstacle design, course inspection, and veterinary oversight, and the American Association of Equine Practitioners (AAEP) publishes welfare guidance applicable to racing horses generally. As in all of racing, the welfare conversation extends from race-day safety to training practices and to the care of horses after their racing careers end.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>National Steeplechase Association (NSA). Rules of the sport and sanctioned meets. nationalsteeplechase.com.</li>
            <li>American Association of Equine Practitioners (AAEP). Racehorse welfare guidelines. aaep.org.</li>
            <li>The Jockey Club. Thoroughbred registration and the American Stud Book. jockeyclub.com.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}

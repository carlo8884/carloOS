/**
 * Horses.com -- Racing History cluster data (/racing/history).
 *
 * Heritage/editorial content on the history of Thoroughbred racing: the
 * breed's origins, the formation of the Triple Crown, profiles of celebrated
 * horses, and the milestones that shaped the modern sport. This is a pure
 * heritage cluster with ZERO wagering surface -- no odds, picks, EV, or
 * handicapping anywhere.
 *
 * Trust posture (QC §1): widely-known, accurate historical facts in the
 * "Horses.com Editorial" voice. Superlatives are framed as opinion ("widely
 * regarded as", "often cited among"). No fabricated credentials, quotes, or
 * invented statistics. Where a precise figure (a date, a margin, a record
 * time) could not be confidently verified as well-established general
 * knowledge, it is generalized rather than asserted.
 *
 * Authorities for the references blocks (educational, not fabricated):
 * National Museum of Racing and Hall of Fame, The Jockey Club, and the
 * organizations that conduct the classic races (Churchill Downs, the Maryland
 * Jockey Club, the New York Racing Association).
 */

export interface RacingHistorySpoke {
  slug: string
  /** Hub card kicker (uppercase eyebrow). */
  kicker: string
  /** Display title (hub card + headings). */
  title: string
  /** Full <title> for metadata (distinct from on-page title). */
  metaTitle: string
  /** Meta description + hub card body. */
  description: string
  /** Image-manifest key for the hero (must have a matching image-queries entry). */
  manifestKey: string
  /** Hero alt text. */
  heroAlt: string
  /** Hero subtitle (PremiumMasthead). */
  heroSubtitle: string
  /** ArticleLayout hero subtitle (longer framing). */
  intro: string
  /** Read-time label. */
  readTime: string
  /** Table-of-contents + body sections. */
  sections: { id: string; heading: string; body: string[] }[]
  /** Quick-reference facts. */
  keyFacts: { label: string; value: string }[]
  faq: { question: string; answer: string; answerText: string }[]
  /** Slugs of sibling spokes to cross-link. */
  related: string[]
  /** Educational references (not fabricated; sourced to real bodies). */
  references: string[]
}

export const racingHistorySpokes: RacingHistorySpoke[] = [
  {
    slug: 'origins-of-thoroughbred-racing',
    kicker: 'Origins of the Breed',
    title: 'The Origins of Thoroughbred Racing',
    metaTitle: 'The Origins of Thoroughbred Racing -- Foundation Sires & British Roots',
    description:
      'How the Thoroughbred breed was created in 17th- and 18th-century Britain from three foundation sires, and how the sport crossed the Atlantic to America.',
    manifestKey: 'horses-com:history-origins',
    heroAlt: 'A Thoroughbred at liberty in an open paddock, evoking the breed’s heritage',
    heroSubtitle:
      'How a distinct racing breed was created in Britain from three foundation sires, and how it crossed to America.',
    intro:
      'The Thoroughbred is a breed defined by speed and stamina, developed in England between the late 1600s and the early 1700s. Every modern Thoroughbred traces its direct male line to one of three imported foundation stallions. Understanding these roots explains why the breed exists, why pedigree matters so much in racing, and how the sport spread across the Atlantic. This is a heritage reference, not a wagering resource.',
    readTime: '7 min',
    sections: [
      {
        id: 'foundation-sires',
        heading: 'The Three Foundation Sires',
        body: [
          'The breed traces its tail-male lineage to three imported stallions brought to England: the Byerley Turk, the Darley Arabian, and the Godolphin Arabian. English mares of the period were bred to these and other imported horses, and selective breeding for racing performance gradually produced a distinct, faster type of horse.',
          'These three names are foundational because pedigree records eventually consolidated around them: essentially all modern Thoroughbreds descend in the direct male line from one of the three. The General Stud Book, first published in England in the early 19th century, formalized these pedigrees and is widely regarded as a model for the breed registries that followed.',
        ],
      },
      {
        id: 'british-roots',
        heading: 'British Roots of Organized Racing',
        body: [
          'Organized racing grew up around English royal and aristocratic patronage, with Newmarket emerging as a central hub. As racing became more structured, the demand for a faster, more consistent racehorse drove the careful record-keeping and selective breeding that defined the new breed.',
          'The word "Thoroughbred" reflects this idea of a "thoroughly bred" horse with a fully documented pedigree. The combination of imported foundation sires and native running mares, refined over generations for the racecourse, is what set the breed apart from other horse types of the era.',
        ],
      },
      {
        id: 'arrival-in-america',
        heading: 'Arrival in America',
        body: [
          'Thoroughbreds were imported to the American colonies during the 18th century, where racing took hold first in regions with the land and wealth to support it. Over time, American breeding programs developed their own strong families while still tracing back to the original English foundation lines.',
          'As the sport matured in the United States, dedicated racetracks, breeding farms, and eventually a national stud book gave American racing its own institutions. The shared ancestry with English Thoroughbreds, however, means the breed remains a single international population built on the same historic roots. The companion guide on milestones in American racing picks up that institutional story.',
        ],
      },
    ],
    keyFacts: [
      { label: 'Breed developed', value: 'England, late 1600s to early 1700s' },
      { label: 'Three foundation sires', value: 'Byerley Turk · Darley Arabian · Godolphin Arabian' },
      { label: 'Pedigree record', value: 'The General Stud Book formalized lineages' },
      { label: 'Reached America', value: 'Imported to the colonies during the 18th century' },
    ],
    faq: [
      {
        question: 'Where did the Thoroughbred breed come from?',
        answer:
          'The Thoroughbred was developed in England between the late 1600s and early 1700s by crossing native running mares with imported stallions, then selectively breeding for racing performance.',
        answerText:
          'The Thoroughbred was developed in England between the late 1600s and early 1700s by crossing native running mares with imported stallions, then selectively breeding for racing performance.',
      },
      {
        question: 'What are the three foundation sires of the Thoroughbred?',
        answer:
          'They are the Byerley Turk, the Darley Arabian, and the Godolphin Arabian. Essentially all modern Thoroughbreds trace their direct male line to one of these three imported stallions.',
        answerText:
          'They are the Byerley Turk, the Darley Arabian, and the Godolphin Arabian. Essentially all modern Thoroughbreds trace their direct male line to one of these three imported stallions.',
      },
    ],
    related: ['the-history-of-the-triple-crown', 'milestones-in-american-racing'],
    references: [
      'The Jockey Club. The American Stud Book; Thoroughbred registration and pedigree records. jockeyclub.com.',
      'National Museum of Racing and Hall of Fame. History of Thoroughbred racing in America. racingmuseum.org.',
      'International Federation of Horseracing Authorities (IFHA). The Thoroughbred as an international breed. horseracingintfed.com.',
    ],
  },
  {
    slug: 'the-history-of-the-triple-crown',
    kicker: 'The Classic Series',
    title: 'The History of the Triple Crown',
    metaTitle: 'History of the Triple Crown -- How the Three Classic Races Became a Series',
    description:
      'How the Kentucky Derby, Preakness, and Belmont came to be grouped into a single championship series, and why the droughts between winners run so long.',
    manifestKey: 'horses-com:history-triple-crown',
    heroAlt: 'A Thoroughbred field rounding the turn at a historic American racecourse',
    heroSubtitle:
      'How three separate classic races became one championship series, and why the sweep is so rarely completed.',
    intro:
      'In American racing, the Triple Crown refers to three classic races for three-year-old Thoroughbreds: the Kentucky Derby, the Preakness Stakes, and the Belmont Stakes. Winning all three in a single season is one of the most difficult achievements in the sport. The series was not created all at once; it formed gradually as the three races grew in prestige and the idea of sweeping them captured the public imagination. This is a heritage account, not a wagering guide.',
    readTime: '7 min',
    sections: [
      {
        id: 'how-it-came-together',
        heading: 'How the Series Came Together',
        body: [
          'The three races began as separate events at different tracks: the Kentucky Derby at Churchill Downs, the Preakness Stakes at Pimlico, and the Belmont Stakes at Belmont Park. Each developed its own history before the notion of treating them as a connected set took hold.',
          'The phrase "Triple Crown" came into common use in American racing in the 1930s, and the three races were retroactively recognized as a series. Sir Barton, who swept the three races in 1919, is widely regarded as the first Triple Crown winner, even though the term itself was popularized later.',
        ],
      },
      {
        id: 'why-hard-to-win',
        heading: 'Why It Is So Hard to Win',
        body: [
          'The difficulty lies in asking a young horse to win three demanding races, at different distances and at different tracks, within a span of just a few weeks. A horse must show speed, stamina, soundness, and consistency in a very short window, against fresh challengers in each leg.',
          'The Belmont Stakes is the longest of the three and is sometimes called the "test of the champion" because of its distance. The combination of varied demands across the legs is a large part of why so few horses have completed the sweep.',
        ],
      },
      {
        id: 'the-great-droughts',
        heading: 'The Great Droughts',
        body: [
          'Triple Crown winners have come in clusters separated by long gaps. A run of winners in the 1930s and 1940s was followed by a celebrated burst in the 1970s. After that came a famously long drought, during which several horses won the first two legs only to fall short in the Belmont, before the streak was finally ended in a later year.',
          'These droughts are a major reason the achievement carries such weight: each near-miss reinforced how rare a sweep is, and each eventual winner was greeted as a generational event. The history of the Triple Crown is in many ways a history of the long waits between champions. The profile of Secretariat covers the most celebrated of the 1970s sweeps.',
        ],
      },
    ],
    keyFacts: [
      { label: 'The three races', value: 'Kentucky Derby · Preakness Stakes · Belmont Stakes' },
      { label: 'For', value: 'Three-year-old Thoroughbreds, in a single season' },
      { label: 'First winner', value: 'Sir Barton (1919), widely regarded as the first' },
      { label: 'Term popularized', value: 'The 1930s' },
    ],
    faq: [
      {
        question: 'What is the Triple Crown in American horse racing?',
        answer:
          'It is the achievement of winning three classic races for three-year-olds in a single season: the Kentucky Derby, the Preakness Stakes, and the Belmont Stakes.',
        answerText:
          'It is the achievement of winning three classic races for three-year-olds in a single season: the Kentucky Derby, the Preakness Stakes, and the Belmont Stakes.',
      },
      {
        question: 'Why is the Triple Crown so difficult to win?',
        answer:
          'A single young horse must win three demanding races, at different distances and tracks, within a few weeks, against fresh rivals in each leg. It requires speed, stamina, soundness, and consistency in a very short window.',
        answerText:
          'A single young horse must win three demanding races, at different distances and tracks, within a few weeks, against fresh rivals in each leg. It requires speed, stamina, soundness, and consistency in a very short window.',
      },
    ],
    related: ['secretariat', 'origins-of-thoroughbred-racing', 'milestones-in-american-racing'],
    references: [
      'Churchill Downs. The Kentucky Derby: history and traditions. kentuckyderby.com.',
      'The Maryland Jockey Club. The Preakness Stakes. preakness.com.',
      'New York Racing Association. The Belmont Stakes. belmontstakes.com.',
      'National Museum of Racing and Hall of Fame. The Triple Crown. racingmuseum.org.',
    ],
  },
  {
    slug: 'secretariat',
    kicker: 'Heritage Profile',
    title: 'Secretariat',
    metaTitle: 'Secretariat -- The 1973 Triple Crown Champion | Racing History',
    description:
      'A heritage profile of the 1973 Triple Crown winner, a horse widely regarded among the greatest Thoroughbreds in American racing history.',
    manifestKey: 'horses-com:history-secretariat',
    heroAlt: 'A powerful chestnut Thoroughbred at full stride, evoking a champion racehorse',
    heroSubtitle:
      'The 1973 Triple Crown champion whose Belmont is part of the enduring lore of the sport.',
    intro:
      'Secretariat is one of the most celebrated racehorses in American history. A large chestnut colt, he won the Triple Crown in 1973 and is widely regarded by fans and historians as among the greatest Thoroughbreds ever to race. His 1973 campaign, and especially his performance in the Belmont Stakes, is part of the enduring lore of the sport. This is a heritage profile, not a wagering resource.',
    readTime: '6 min',
    sections: [
      {
        id: 'the-1973-triple-crown',
        heading: 'The 1973 Triple Crown',
        body: [
          'Secretariat swept the Kentucky Derby, the Preakness Stakes, and the Belmont Stakes in 1973, ending a long gap since the previous Triple Crown winner. The sweep itself made him a national figure, drawing attention far beyond the usual racing audience.',
          'His Belmont Stakes performance is the moment most associated with him. He won the race by an enormous margin that is widely cited as one of the most dominant performances in racing history. Contemporary accounts and later retrospectives consistently describe the Belmont as the defining race of his career.',
        ],
      },
      {
        id: 'why-remembered',
        heading: 'Why He Is Remembered',
        body: [
          'Beyond the wins themselves, Secretariat became a cultural phenomenon. He appeared on the covers of major national magazines and was followed by audiences who had never paid attention to racing before, helping cement his place in popular memory.',
          'Among horsemen and historians, he is frequently named in discussions of the greatest racehorses of all time. While such rankings are matters of opinion, the consistency with which Secretariat appears at or near the top of these conversations speaks to the impression his 1973 season left.',
        ],
      },
    ],
    keyFacts: [
      { label: 'Achievement', value: 'Won the 1973 Triple Crown' },
      { label: 'Signature race', value: 'The Belmont Stakes, won by a wide margin' },
      { label: 'Reputation', value: 'Widely regarded as one of the greatest racehorses ever' },
      { label: 'Color', value: 'Chestnut colt' },
    ],
    faq: [
      {
        question: 'What is Secretariat famous for?',
        answer:
          'Secretariat is famous for winning the 1973 Triple Crown and for his Belmont Stakes performance, which he won by a wide margin that is widely cited as among the most dominant in racing history.',
        answerText:
          'Secretariat is famous for winning the 1973 Triple Crown and for his Belmont Stakes performance, which he won by a wide margin that is widely cited as among the most dominant in racing history.',
      },
      {
        question: 'Is Secretariat considered the greatest racehorse?',
        answer:
          'He is widely regarded by fans and historians as one of the greatest racehorses in history. Such rankings are a matter of opinion, but Secretariat is consistently named at or near the top.',
        answerText:
          'He is widely regarded by fans and historians as one of the greatest racehorses in history. Such rankings are a matter of opinion, but Secretariat is consistently named at or near the top.',
      },
    ],
    related: ['the-history-of-the-triple-crown', 'man-o-war', 'the-great-mares'],
    references: [
      'National Museum of Racing and Hall of Fame. Secretariat, Hall of Fame inductee. racingmuseum.org.',
      'New York Racing Association. The Belmont Stakes: notable runnings. belmontstakes.com.',
      'The Jockey Club. American Stud Book and Thoroughbred records. jockeyclub.com.',
    ],
  },
  {
    slug: 'man-o-war',
    kicker: 'Heritage Profile',
    title: 'Man o’ War',
    metaTitle: 'Man o’ War -- Early-20th-Century Turf Legend | Racing History',
    description:
      'A heritage profile of Man o’ War, the early-20th-century champion whose racing record and later fame made him a lasting legend of American turf history.',
    manifestKey: 'horses-com:history-man-o-war',
    heroAlt: 'A muscular chestnut Thoroughbred standing proud, evoking an early-century champion',
    heroSubtitle:
      'The early-20th-century champion whose dominance became a symbol of the American turf.',
    intro:
      'Man o’ War is one of the most storied names in American racing history. A powerful chestnut who raced around 1919 and 1920, he is widely regarded as one of the greatest Thoroughbreds of all time and became a symbol of the sport in the early 20th century. His reputation rests on a racing record that contemporaries described as overwhelming. This is a heritage profile, not a wagering resource.',
    readTime: '6 min',
    sections: [
      {
        id: 'a-celebrated-record',
        heading: 'A Celebrated Racing Record',
        body: [
          'Man o’ War raced as a two- and three-year-old and won the large majority of his starts, often by wide margins. His career is frequently summarized as one of near-total dominance over his contemporaries, and accounts from the era describe crowds drawn specifically to watch him run.',
          'He did not contest every classic race of his time, which is part of why his legend is sometimes debated in detail. Even so, the strength of his performances against the horses he did meet is the foundation of his enduring reputation.',
        ],
      },
      {
        id: 'place-in-heritage',
        heading: 'His Place in Racing Heritage',
        body: [
          'After his racing days, Man o’ War became a celebrated stallion and a public attraction in his own right, with visitors traveling to see him. This second act helped extend his fame well beyond the racetrack and into broader American culture.',
          'In retrospectives and historical polls of the sport, Man o’ War is regularly placed among the very greatest horses, often alongside later champions. As with all such comparisons across different eras, these placements are opinion, but the consistency of his standing reflects how deeply he is woven into racing heritage.',
        ],
      },
    ],
    keyFacts: [
      { label: 'Raced', value: 'Around 1919–1920, as a two- and three-year-old' },
      { label: 'Record', value: 'Won the large majority of his starts, often by wide margins' },
      { label: 'Reputation', value: 'Widely regarded as one of the greatest of all time' },
      { label: 'After racing', value: 'A celebrated stallion and public attraction' },
    ],
    faq: [
      {
        question: 'Who was Man o’ War?',
        answer:
          'Man o’ War was an American Thoroughbred who raced around 1919 and 1920, winning the large majority of his starts. He is widely regarded as one of the greatest racehorses in history.',
        answerText:
          'Man o’ War was an American Thoroughbred who raced around 1919 and 1920, winning the large majority of his starts. He is widely regarded as one of the greatest racehorses in history.',
      },
      {
        question: 'Why is Man o’ War considered a legend?',
        answer:
          'His racing record, with many wins by wide margins, and his later fame as a celebrated stallion made him a lasting symbol of American racing. He is consistently placed among the greatest horses in historical retrospectives.',
        answerText:
          'His racing record, with many wins by wide margins, and his later fame as a celebrated stallion made him a lasting symbol of American racing. He is consistently placed among the greatest horses in historical retrospectives.',
      },
    ],
    related: ['secretariat', 'the-great-mares', 'origins-of-thoroughbred-racing'],
    references: [
      'National Museum of Racing and Hall of Fame. Man o’ War, Hall of Fame inductee. racingmuseum.org.',
      'The Jockey Club. American Stud Book and Thoroughbred records. jockeyclub.com.',
    ],
  },
  {
    slug: 'the-great-mares',
    kicker: 'Heritage Profile',
    title: 'The Great Mares',
    metaTitle: 'The Great Mares of Racing History -- Celebrated Fillies & Mares',
    description:
      'Heritage profiles of celebrated fillies and mares whose achievements on the track and influence as broodmares are remembered among the highlights of racing history.',
    manifestKey: 'horses-com:history-great-mares',
    heroAlt: 'A Thoroughbred mare with her foal in a green pasture, evoking racing’s great female families',
    heroSubtitle:
      'The celebrated fillies and mares whose stories are among the most beloved in the sport.',
    intro:
      'Racing history is often told through its celebrated colts, but fillies and mares have produced some of the sport’s most beloved stories. This profile looks at the broad heritage of great mares in racing: horses that captured public affection, beat top male rivals, or left a lasting mark through their racing and their later influence as broodmares. Specific rankings are matters of opinion, but the affection for these horses is a real part of the sport’s culture. This is a heritage reference, not a wagering resource.',
    readTime: '6 min',
    sections: [
      {
        id: 'against-the-colts',
        heading: 'Fillies and Mares Against the Colts',
        body: [
          'Some of the most memorable moments in racing have come when a filly or mare took on and beat top male competition. Such performances are widely celebrated precisely because they cut against the expectation that the best colts dominate the championship races, and they have produced some of the sport’s most enduring storylines.',
          'Because championship races are often dominated by colts, a mare who succeeds at the highest level tends to draw outsized public attention and affection. These horses are frequently remembered as fan favorites as much as for their results.',
        ],
      },
      {
        id: 'beyond-the-track',
        heading: 'Lasting Influence Beyond the Track',
        body: [
          'Great mares often leave a second legacy as broodmares. A celebrated racing mare who then produces successful foals extends her influence into pedigrees for generations, which is why the most important female families are tracked closely by breeders.',
          'In historical retrospectives, certain mares are regularly named among the finest racehorses of either sex. As with all cross-era comparisons, where any individual mare ranks is a matter of opinion, but their collective place in racing heritage is well established and widely celebrated. The companion guide on Thoroughbred origins explains why those female families matter so much to pedigree.',
        ],
      },
    ],
    keyFacts: [
      { label: 'Focus', value: 'Celebrated fillies and mares in racing history' },
      { label: 'Why remembered', value: 'Beating top colts, public affection, lasting families' },
      { label: 'Second legacy', value: 'Influence as broodmares across generations' },
      { label: 'Framing', value: 'Specific rankings are matters of opinion' },
    ],
    faq: [
      {
        question: 'Why are great mares celebrated in racing history?',
        answer:
          'Fillies and mares who succeed at the highest level, especially when beating top male rivals, draw outsized public affection because championship races are often dominated by colts. Many are remembered as fan favorites.',
        answerText:
          'Fillies and mares who succeed at the highest level, especially when beating top male rivals, draw outsized public affection because championship races are often dominated by colts. Many are remembered as fan favorites.',
      },
      {
        question: 'Do great racing mares matter for breeding?',
        answer:
          'Yes. A celebrated racing mare often becomes an influential broodmare, extending her legacy into pedigrees for generations, which is why the most important female families are tracked closely by breeders.',
        answerText:
          'Yes. A celebrated racing mare often becomes an influential broodmare, extending her legacy into pedigrees for generations, which is why the most important female families are tracked closely by breeders.',
      },
    ],
    related: ['secretariat', 'man-o-war', 'origins-of-thoroughbred-racing'],
    references: [
      'National Museum of Racing and Hall of Fame. Hall of Fame fillies and mares. racingmuseum.org.',
      'The Jockey Club. American Stud Book; broodmare and family records. jockeyclub.com.',
    ],
  },
  {
    slug: 'milestones-in-american-racing',
    kicker: 'Tracks, Institutions & Reform',
    title: 'Milestones in American Racing',
    metaTitle: 'Milestones in American Racing -- Tracks, Institutions & Reform',
    description:
      'A high-level overview of the founding of major American tracks and institutions, the rise of national record-keeping, and the integrity reforms that shaped the modern sport.',
    manifestKey: 'horses-com:history-milestones',
    heroAlt: 'A historic American grandstand and racecourse, evoking the institutions of the sport',
    heroSubtitle:
      'How a loose collection of meetings grew into an organized national sport.',
    intro:
      'The modern structure of American Thoroughbred racing was built over more than a century through the founding of major racetracks, the creation of governing and record-keeping institutions, and a long series of reforms aimed at consistency and integrity. This overview traces those milestones at a high level, showing how a loose collection of meetings grew into an organized national sport. This is a heritage reference, not a wagering resource.',
    readTime: '7 min',
    sections: [
      {
        id: 'tracks-and-institutions',
        heading: 'Founding of Major Tracks and Institutions',
        body: [
          'Many of the sport’s landmark racetracks were established in the 19th and early 20th centuries, including the homes of the Triple Crown races. These venues gave racing permanent stages and helped fix the calendar of classic events that still anchors the season.',
          'Alongside the tracks came institutions for record-keeping and breed registration. A national stud book and bodies responsible for cataloguing pedigrees and results gave the sport the documentation it needed to function consistently across states and decades.',
        ],
      },
      {
        id: 'national-consistency',
        heading: 'Toward National Consistency',
        body: [
          'For much of its history, American racing was regulated state by state, which produced uneven rules and standards. Over time, the sport developed shared committees and standards bodies, such as the independent grading of important stakes races, to bring more consistency to how quality and results were recognized nationally.',
          'These coordinating efforts did not replace state authority entirely, but they created common reference points, from graded-stakes designations to widely accepted record-keeping, that allowed horses, owners, and fans to compare achievements across the country.',
        ],
      },
      {
        id: 'integrity-reforms',
        heading: 'Integrity Reforms at a High Level',
        body: [
          'Across its history, racing has periodically reformed its rules to protect the integrity of competition and the welfare of horses. At a high level, these efforts have included clearer rules of racing, oversight of medication and testing, and movements toward more uniform national standards rather than a patchwork of state regimes.',
          'The broad direction of these reforms has been toward greater consistency, transparency, and accountability. While the specifics evolve, the milestone worth understanding is the long-running shift from fragmented local rules toward shared, national standards for how the sport is run.',
        ],
      },
    ],
    keyFacts: [
      { label: 'Tracks founded', value: 'Largely 19th and early 20th centuries' },
      { label: 'Institutions', value: 'National stud book and pedigree/record bodies' },
      { label: 'Grading', value: 'Independent grading of important stakes races' },
      { label: 'Reform direction', value: 'From state-by-state rules toward national standards' },
    ],
    faq: [
      {
        question: 'What are the major milestones in American racing history?',
        answer:
          'They include the founding of landmark racetracks in the 19th and early 20th centuries, the creation of a national stud book and record-keeping institutions, the grading of important stakes races, and a long series of integrity and welfare reforms.',
        answerText:
          'They include the founding of landmark racetracks in the 19th and early 20th centuries, the creation of a national stud book and record-keeping institutions, the grading of important stakes races, and a long series of integrity and welfare reforms.',
      },
      {
        question: 'How did American racing become more consistent over time?',
        answer:
          'Racing was long regulated state by state. Over time the sport developed shared committees and standards, such as the independent grading of stakes races and widely accepted record-keeping, moving toward more uniform national standards.',
        answerText:
          'Racing was long regulated state by state. Over time the sport developed shared committees and standards, such as the independent grading of stakes races and widely accepted record-keeping, moving toward more uniform national standards.',
      },
    ],
    related: ['the-history-of-the-triple-crown', 'origins-of-thoroughbred-racing'],
    references: [
      'The Jockey Club. The American Stud Book and Thoroughbred record-keeping. jockeyclub.com.',
      'National Museum of Racing and Hall of Fame. The development of American racing. racingmuseum.org.',
      'Association of Racing Commissioners International (ARCI). Model rules and the regulation of racing. arci.com.',
    ],
  },
]

const ERA_ORDER = [
  'Origins of the Breed',
  'The Classic Series',
  'Heritage Profile',
  'Tracks, Institutions & Reform',
] as const

export function racingHistoryGroupedByEra(): { era: string; spokes: RacingHistorySpoke[] }[] {
  return ERA_ORDER.map((era) => ({
    era,
    spokes: racingHistorySpokes.filter((s) => s.kicker === era),
  })).filter((group) => group.spokes.length > 0)
}

export function allRacingHistorySlugs(): string[] {
  return racingHistorySpokes.map((s) => s.slug)
}

export function getRacingHistorySpoke(slug: string): RacingHistorySpoke | undefined {
  return racingHistorySpokes.find((s) => s.slug === slug)
}

/**
 * Great Racehorses cluster data -- /racing/great-racehorses/<slug>
 *
 * Heritage career profiles of the most celebrated Thoroughbreds in American
 * racing history. Each entry drives one spoke page (career overview, signature
 * races, connections, legacy/pedigree, FAQ, references).
 *
 * ACCURACY: Only well-established, verifiable facts are stated. Where a precise
 * stat is uncertain it is expressed generally ("by an enormous margin", "still
 * cited among"). No fabricated quotes, no invented precise times. Superlatives
 * are framed as widely-held opinion.
 *
 * NON-WAGERING (QC §1): careers are presented as sporting/historical
 * achievement. No odds, picks, or handicapping anywhere.
 *
 * Byline: Horses.com Editorial.
 */

export interface ProfileSection {
  id: string
  heading: string
  body: string[]
}

export interface ProfileFAQ {
  question: string
  answer: string
  answerText: string
}

export interface GreatRacehorse {
  slug: string
  name: string
  /** Card eyebrow on the hub grid. */
  eyebrow: string
  /** Short hub-card summary. */
  cardSummary: string
  /** SEO title (<= 70 chars incl. " | Horses.com" added in the page). */
  metaTitle: string
  /** Meta description (<= 160 chars). */
  description: string
  /** Masthead eyebrow / kicker. */
  kicker: string
  /** Masthead headline (usually the name). */
  heroTitle: string
  /** Masthead subtitle. */
  heroSubtitle: string
  /** Masthead alt text. */
  heroAlt: string
  /** Read time label. */
  readTime: string
  /** Article-layout hero intro line. */
  intro: string
  /** Quick-reference key facts. */
  keyFacts: { label: string; value: string }[]
  /** Body sections (career overview, signature races, connections, legacy). */
  sections: ProfileSection[]
  faq: ProfileFAQ[]
  /** RelatedLinks {label, href}. */
  related: { label: string; href: string }[]
  references: string[]
}

export const greatRacehorses: GreatRacehorse[] = [
  // ───────────────────────────────────────────────────────────── SECRETARIAT
  {
    slug: 'secretariat',
    name: 'Secretariat',
    eyebrow: '1973 Triple Crown',
    cardSummary:
      'The 1973 Triple Crown champion, whose record-setting Belmont — won by some 31 lengths — is part of the enduring lore of the sport.',
    metaTitle: 'Secretariat — Career Profile of a Racing Legend',
    description:
      'A career profile of Secretariat, the 1973 Triple Crown champion famed for a 31-length Belmont Stakes and track records that still stand. Educational, non-wagering.',
    kicker: 'Heritage Profile · Thoroughbred',
    heroTitle: 'Secretariat',
    heroSubtitle:
      'The 1973 Triple Crown champion whose Belmont — won by roughly 31 lengths — is one of the most celebrated single performances in the history of the sport.',
    heroAlt: 'A powerful chestnut Thoroughbred at full stride, evoking a champion racehorse',
    readTime: '8 min',
    intro:
      'Secretariat is one of the most celebrated racehorses in American history. A large chestnut colt, he swept the Triple Crown in 1973 and set records in all three of its races — marks that, in the Kentucky Derby and Belmont Stakes, are still recognized today. This is a heritage career profile, not a wagering resource.',
    keyFacts: [
      { label: 'Foaled', value: '1970' },
      { label: 'Signature year', value: '1973 — Triple Crown sweep' },
      { label: 'Belmont Stakes', value: 'Won by roughly 31 lengths in record time' },
      { label: 'Connections', value: 'Meadow Stable; trainer Lucien Laurin; jockey Ron Turcotte' },
      { label: 'Reputation', value: 'Widely regarded among the greatest Thoroughbreds ever' },
    ],
    sections: [
      {
        id: 'career-overview',
        heading: 'Career Overview',
        body: [
          'Secretariat raced for Meadow Stable in the early 1970s and was a champion at two before his historic three-year-old season. A strikingly large chestnut, he was named the leading two-year-old of his year, an unusual honor that set high expectations for his classic campaign.',
          'In 1973 he delivered on those expectations in spectacular fashion, becoming the first horse in 25 years to win the Triple Crown. The combination of his appearance, his running style, and the records he set turned him into a national figure who drew the attention of audiences far beyond the usual racing public.',
        ],
      },
      {
        id: 'signature-races',
        heading: 'Signature Races & Achievements',
        body: [
          'Secretariat won the 1973 Kentucky Derby, the Preakness Stakes, and the Belmont Stakes — the three races of the Triple Crown. He is widely recognized as having set the stakes record in the Kentucky Derby, a mark that still stands as the fastest running of that race.',
          'His Belmont Stakes is the performance most associated with him. He won by an enormous margin — most often cited as 31 lengths — in a time that established a track and American record for the distance on dirt that is still referenced today. Contemporary accounts and later retrospectives consistently describe the Belmont as the defining race of his career and one of the great individual performances in the sport.',
        ],
      },
      {
        id: 'connections',
        heading: 'The Connections',
        body: [
          'Secretariat was bred and raced by Meadow Stable, the operation associated with owner Penny Chenery (Penny Tweedy), who became closely identified with the horse and helped carry his story to a wide public. He was trained by Lucien Laurin and ridden in his classic campaign by jockey Ron Turcotte.',
          'The partnership of owner, trainer, and jockey around a single dominant horse is a recurring pattern in the sport, and Secretariat’s connections are among its most recognized examples. The roles each of them played are explained in the Horses.com racing-roles reference.',
        ],
      },
      {
        id: 'legacy',
        heading: 'Legacy & Pedigree Note',
        body: [
          'Secretariat became a cultural phenomenon, appearing on the covers of major national magazines and entering popular memory in a way few racehorses have. Among horsemen and historians he is consistently named at or near the top of discussions of the greatest racehorses of all time — a matter of opinion, but a strikingly consistent one.',
          'After retiring he stood at stud, and while his record as a sire of runners is generally regarded as good rather than transformative, he became an influential broodmare sire, with his daughters appearing in the pedigrees of later champions. He was inducted into the National Museum of Racing Hall of Fame.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is Secretariat most famous for?',
        answer:
          'Secretariat is most famous for winning the 1973 Triple Crown and for his Belmont Stakes, which he won by an enormous margin — most often cited as 31 lengths — in a record time still referenced today.',
        answerText:
          'Winning the 1973 Triple Crown and his Belmont Stakes, won by roughly 31 lengths in a record time still referenced today.',
      },
      {
        question: 'Do Secretariat’s records still stand?',
        answer:
          'He is widely recognized as still holding the fastest times for the Kentucky Derby and the Belmont Stakes, which is part of why his 1973 campaign remains so celebrated.',
        answerText:
          'He is widely recognized as still holding the fastest times for the Kentucky Derby and Belmont Stakes.',
      },
      {
        question: 'Who owned, trained, and rode Secretariat?',
        answer:
          'He raced for Meadow Stable, associated with owner Penny Chenery, was trained by Lucien Laurin, and was ridden in his Triple Crown campaign by jockey Ron Turcotte.',
        answerText:
          'Meadow Stable (Penny Chenery), trainer Lucien Laurin, and jockey Ron Turcotte.',
      },
      {
        question: 'Is Secretariat considered the greatest racehorse?',
        answer:
          'He is widely regarded by fans and historians as one of the greatest racehorses in history and is consistently named at or near the top of such lists. These rankings are a matter of opinion.',
        answerText:
          'He is widely regarded as one of the greatest ever and consistently ranked at or near the top, though such rankings are opinion.',
      },
    ],
    related: [
      { label: 'Secretariat — Heritage Essay', href: '/racing/history/secretariat' },
      { label: 'The Triple Crown', href: '/racing/triple-crown' },
      { label: 'The Belmont Stakes', href: '/racing/triple-crown/belmont-stakes' },
      { label: 'Racing Roles', href: '/racing/racing-roles' },
      { label: 'Thoroughbred Profile', href: '/breeds/thoroughbred' },
    ],
    references: [
      'National Museum of Racing and Hall of Fame. Secretariat, Hall of Fame inductee. racingmuseum.org.',
      'New York Racing Association. The Belmont Stakes: notable runnings. belmontstakes.com.',
      'Churchill Downs. Kentucky Derby records. kentuckyderby.com.',
      'The Jockey Club. American Stud Book and Thoroughbred records. jockeyclub.com.',
    ],
  },

  // ────────────────────────────────────────────────────────────── MAN O' WAR
  {
    slug: 'man-o-war',
    name: 'Man o’ War',
    eyebrow: '1920 · Turf Legend',
    cardSummary:
      'The early-20th-century giant who won 20 of his 21 starts — his only defeat coming to a colt aptly named Upset.',
    metaTitle: 'Man o’ War — Career Profile of an Early Turf Legend',
    description:
      'A career profile of Man o’ War, who won 20 of 21 starts around 1919–1920 and lost only to a horse named Upset. Educational heritage reference, non-wagering.',
    kicker: 'Heritage Profile · Thoroughbred',
    heroTitle: 'Man o’ War',
    heroSubtitle:
      'The early-20th-century champion who won 20 of his 21 career starts — his lone defeat coming, famously, to a colt named Upset.',
    heroAlt: 'A muscular chestnut Thoroughbred standing proud, evoking an early-century champion',
    readTime: '7 min',
    intro:
      'Man o’ War is among the most storied Thoroughbreds in American history. Racing around 1919 and 1920, the big chestnut colt won 20 of his 21 career starts and became a national celebrity whose fame long outlived his racing days. This is a heritage career profile, not a wagering resource.',
    keyFacts: [
      { label: 'Foaled', value: '1917' },
      { label: 'Racing years', value: 'Two seasons, around 1919–1920' },
      { label: 'Record', value: 'Won 20 of 21 career starts' },
      { label: 'Only defeat', value: 'To a colt named Upset' },
      { label: 'Reputation', value: 'A lasting legend of American turf history' },
    ],
    sections: [
      {
        id: 'career-overview',
        heading: 'Career Overview',
        body: [
          'Man o’ War raced for just two seasons, at two and three years old, around 1919 and 1920. In that short career the large chestnut colt compiled a record that has anchored his reputation ever since: he won 20 of his 21 starts, often by wide margins and frequently carrying high weights against limited opposition who were sent to face him.',
          'Notably, he did not run in the Kentucky Derby — his connections chose not to start him in it — so his classic campaign centered on other major races of the era rather than the Triple Crown as later horses would contest it.',
        ],
      },
      {
        id: 'signature-races',
        heading: 'Signature Races & The One Defeat',
        body: [
          'Man o’ War’s single career loss is one of the most retold stories in racing. As a two-year-old he was beaten in a race by a colt named Upset — a coincidence of names that has become part of racing folklore, often invoked in discussions of where the sporting sense of the word “_OPEN_upset“_OPEN_ gained currency, even if the etymology is debated.',
          'Over his two seasons he won many of the leading races available to him, often dominating, and his three-year-old campaign in 1920 is generally regarded as the peak of his powers. Across his career he is widely described as having set or equaled multiple time records of his era.',
        ],
      },
      {
        id: 'connections',
        heading: 'The Connections',
        body: [
          'Man o’ War was owned by Samuel D. Riddle, whose stable he carried to fame, and his racing campaign was guided by his trainer and ridden by the jockeys of the period associated with the Riddle operation. The horse’s management — including the decision not to run him in the Kentucky Derby — became part of the lore around him.',
          'The roles of owner, trainer, and jockey that shaped his campaign are the same roles explained in the Horses.com racing-roles reference, applied here to one of the sport’s earliest national stars.',
        ],
      },
      {
        id: 'legacy',
        heading: 'Legacy & Pedigree Note',
        body: [
          'After racing, Man o’ War became a hugely successful and influential stallion. He is the sire of War Admiral, who went on to win the Triple Crown in 1937, and his bloodline runs through a great many later Thoroughbreds, making him one of the most important sires in the breed’s American history.',
          'His fame extended well beyond the track: he was a tourist attraction in retirement and the subject of lasting public affection. He was inducted into the National Museum of Racing Hall of Fame and is routinely named among the greatest racehorses of the 20th century — a judgment of opinion, but a durable one.',
        ],
      },
    ],
    faq: [
      {
        question: 'What was Man o’ War’s racing record?',
        answer:
          'Man o’ War won 20 of his 21 career starts across two seasons around 1919 and 1920, a record that is central to his lasting reputation.',
        answerText:
          'He won 20 of his 21 career starts across two seasons around 1919–1920.',
      },
      {
        question: 'Who beat Man o’ War?',
        answer:
          'His only career defeat came to a colt named Upset, in a race during his two-year-old season — a coincidence of name that has become part of racing folklore.',
        answerText:
          'His only defeat was to a colt named Upset during his two-year-old season.',
      },
      {
        question: 'Did Man o’ War win the Triple Crown?',
        answer:
          'No. His connections chose not to run him in the Kentucky Derby, so he did not contest the Triple Crown. His fame rests on his overall record and dominance rather than that series.',
        answerText:
          'No — he did not run in the Kentucky Derby, so he never contested the Triple Crown.',
      },
      {
        question: 'Was Man o’ War a successful sire?',
        answer:
          'Yes. He became a highly influential stallion and sired War Admiral, the 1937 Triple Crown winner, with his bloodline running through many later Thoroughbreds.',
        answerText:
          'Yes — a highly influential sire, including of 1937 Triple Crown winner War Admiral.',
      },
    ],
    related: [
      { label: 'Man o’ War — Heritage Essay', href: '/racing/history/man-o-war' },
      { label: 'Seabiscuit', href: '/racing/great-racehorses/seabiscuit' },
      { label: 'The Triple Crown', href: '/racing/triple-crown' },
      { label: 'Thoroughbred Profile', href: '/breeds/thoroughbred' },
      { label: 'Bloodstock & Breeding', href: '/bloodstock' },
    ],
    references: [
      'National Museum of Racing and Hall of Fame. Man o’ War, Hall of Fame inductee. racingmuseum.org.',
      'The Jockey Club. American Stud Book and Thoroughbred records. jockeyclub.com.',
      'Kentucky Horse Park. Man o’ War memorial and history. kyhorsepark.com.',
    ],
  },

  // ────────────────────────────────────────────────────────────── SEABISCUIT
  {
    slug: 'seabiscuit',
    name: 'Seabiscuit',
    eyebrow: 'Depression-Era Hero',
    cardSummary:
      'The unlikely champion who captured Depression-era America and beat Triple Crown winner War Admiral in their 1938 Pimlico match race.',
    metaTitle: 'Seabiscuit — Career Profile of a Depression-Era Hero',
    description:
      'A career profile of Seabiscuit, the Depression-era folk hero who defeated War Admiral in the famous 1938 match race at Pimlico. Educational, non-wagering.',
    kicker: 'Heritage Profile · Thoroughbred',
    heroTitle: 'Seabiscuit',
    heroSubtitle:
      'The small, unlikely champion who became a folk hero of Depression-era America and beat Triple Crown winner War Admiral in their celebrated 1938 match race.',
    heroAlt: 'A bay Thoroughbred galloping, evoking a 1930s-era champion racehorse',
    readTime: '8 min',
    intro:
      'Seabiscuit is one of the most beloved racehorses in American history — not for an unbeaten record, but for a comeback story that captured a struggling nation. Undersized and overlooked early on, he became a national sensation in the late 1930s, his rivalry with War Admiral culminating in one of the most famous races ever run. This is a heritage career profile, not a wagering resource.',
    keyFacts: [
      { label: 'Foaled', value: '1933' },
      { label: 'Era', value: 'Rose to fame in the late 1930s, the Great Depression' },
      { label: 'Signature race', value: '1938 match race vs. War Admiral at Pimlico — Seabiscuit won' },
      { label: 'Connections', value: 'Owner Charles Howard; trainer Tom Smith; jockey Red Pollard (and George Woolf)' },
      { label: 'Legacy', value: 'A lasting symbol of resilience and the underdog' },
    ],
    sections: [
      {
        id: 'career-overview',
        heading: 'Career Overview',
        body: [
          'Seabiscuit began his career unremarkably. Small in stature and raced heavily as a young horse without distinguishing himself, he was sold to owner Charles Howard, who placed him with trainer Tom Smith. Under new management the horse transformed, developing into one of the leading runners in the country in the late 1930s.',
          'His rise coincided with the Great Depression, and his story — an undersized, written-off horse becoming a champion — resonated with a public living through hard times. He became one of the most popular figures in the country, drawing enormous crowds and extensive press coverage.',
        ],
      },
      {
        id: 'signature-races',
        heading: 'The 1938 Match Race',
        body: [
          'Seabiscuit’s defining moment came in 1938 in a special match race at Pimlico Race Course against War Admiral, the 1937 Triple Crown winner and the establishment’s champion. The contest was framed as a clash between the underdog from the West and the blue-blooded Eastern champion, and it drew immense national attention.',
          'Seabiscuit won the match race, an upset that cemented his fame and is remembered as one of the great moments in American racing. Around this period he also contested and won other leading handicaps of the era, and he later won a major race that had previously eluded him after returning from injury.',
        ],
      },
      {
        id: 'connections',
        heading: 'The Connections',
        body: [
          'Seabiscuit’s story is inseparable from his connections: owner Charles Howard, an automobile businessman; the quiet, unconventional trainer Tom Smith; and jockey Red Pollard, who formed a famous partnership with the horse. When Pollard was sidelined by injury, jockey George Woolf rode Seabiscuit in the Pimlico match race against War Admiral.',
          'The human story around the horse — owner, trainer, and two jockeys, each with their own setbacks — is a large part of why Seabiscuit’s legend endured, and it is the kind of owner-trainer-jockey structure explained in the Horses.com racing-roles reference.',
        ],
      },
      {
        id: 'legacy',
        heading: 'Legacy',
        body: [
          'Seabiscuit’s legacy is cultural as much as athletic. He became a symbol of resilience and the underdog during the Depression, and his story has been retold many times in books and on film, keeping his name familiar to audiences who never followed racing.',
          'He was inducted into the National Museum of Racing Hall of Fame. While he is remembered less for a flawless record than for what he represented, his win over War Admiral and his sustained excellence in the handicap ranks secure his place among the most celebrated American racehorses.',
        ],
      },
    ],
    faq: [
      {
        question: 'Why is Seabiscuit so famous?',
        answer:
          'Seabiscuit became a folk hero of Depression-era America: an undersized, overlooked horse who became a champion. His 1938 match-race win over Triple Crown winner War Admiral made him a national sensation.',
        answerText:
          'He was a Depression-era underdog who became a champion, famously beating War Admiral in their 1938 match race.',
      },
      {
        question: 'Did Seabiscuit beat War Admiral?',
        answer:
          'Yes. In their 1938 match race at Pimlico, Seabiscuit defeated War Admiral, the 1937 Triple Crown winner — an upset remembered as one of the great moments in American racing.',
        answerText:
          'Yes — Seabiscuit beat War Admiral in their 1938 match race at Pimlico.',
      },
      {
        question: 'Who were Seabiscuit’s connections?',
        answer:
          'He was owned by Charles Howard, trained by Tom Smith, and ridden by jockey Red Pollard, with George Woolf riding him in the Pimlico match race when Pollard was injured.',
        answerText:
          'Owner Charles Howard, trainer Tom Smith, jockey Red Pollard (and George Woolf in the match race).',
      },
      {
        question: 'Did Seabiscuit win the Triple Crown?',
        answer:
          'No. Seabiscuit is remembered for his handicap-race excellence and his match-race win over War Admiral rather than for the Triple Crown, which he did not win.',
        answerText:
          'No — his fame rests on the handicap ranks and the War Admiral match race, not the Triple Crown.',
      },
    ],
    related: [
      { label: 'Man o’ War', href: '/racing/great-racehorses/man-o-war' },
      { label: 'The Triple Crown', href: '/racing/triple-crown' },
      { label: 'The Preakness Stakes', href: '/racing/triple-crown/preakness-stakes' },
      { label: 'Racing Roles', href: '/racing/racing-roles' },
      { label: 'Racing History', href: '/racing/history' },
    ],
    references: [
      'National Museum of Racing and Hall of Fame. Seabiscuit, Hall of Fame inductee. racingmuseum.org.',
      'Maryland Jockey Club / Pimlico Race Course. History of Pimlico and the 1938 match race. preakness.com.',
      'The Jockey Club. American Stud Book and Thoroughbred records. jockeyclub.com.',
    ],
  },

  // ──────────────────────────────────────────────────────────────── CITATION
  {
    slug: 'citation',
    name: 'Citation',
    eyebrow: '1948 Triple Crown',
    cardSummary:
      'The 1948 Triple Crown champion who became racing’s first equine millionaire in career earnings.',
    metaTitle: 'Citation — Career Profile of Racing’s First Millionaire',
    description:
      'A career profile of Citation, the 1948 Triple Crown winner and the first Thoroughbred to reach $1 million in career earnings. Educational heritage reference, non-wagering.',
    kicker: 'Heritage Profile · Thoroughbred',
    heroTitle: 'Citation',
    heroSubtitle:
      'The 1948 Triple Crown champion who, over his career, became the first racehorse to earn $1 million — a landmark in the sport’s history.',
    heroAlt: 'A bay Thoroughbred racehorse in stride, evoking a 1940s champion',
    readTime: '7 min',
    intro:
      'Citation is one of the great champions of the mid-20th century. He swept the Triple Crown in 1948 and, across his career, became the first Thoroughbred to reach $1 million in earnings — a milestone that defined his place in racing history. This is a heritage career profile, not a wagering resource.',
    keyFacts: [
      { label: 'Foaled', value: '1945' },
      { label: 'Signature year', value: '1948 — Triple Crown sweep' },
      { label: 'Milestone', value: 'First racehorse to reach $1 million in career earnings' },
      { label: 'Connections', value: 'Calumet Farm; trainers Ben & Jimmy Jones; jockey Eddie Arcaro' },
      { label: 'Reputation', value: 'One of the dominant runners of his era' },
    ],
    sections: [
      {
        id: 'career-overview',
        heading: 'Career Overview',
        body: [
          'Citation raced for Calumet Farm, the dominant American racing and breeding operation of the 1940s. He emerged as an exceptional colt and, in 1948, put together one of the great seasons in the sport’s history, winning a long string of races including the Triple Crown.',
          'A leg ailment kept him from racing for an extended period after his championship campaign, and he returned to the track afterward at an older age. His career was therefore split by that absence, but his peak and his ultimate earnings milestone secured his standing among the era’s best.',
        ],
      },
      {
        id: 'signature-races',
        heading: 'Signature Races & Achievements',
        body: [
          'Citation won the 1948 Kentucky Derby, Preakness Stakes, and Belmont Stakes to take the Triple Crown, doing so as part of a season of sustained dominance in which he won many of the leading races open to him.',
          'His best-known career achievement beyond the Triple Crown is financial as much as athletic: he is recognized as the first Thoroughbred to surpass $1 million in career earnings, a barrier no horse had reached before and a marker of how exceptional and durable his career was.',
        ],
      },
      {
        id: 'connections',
        heading: 'The Connections',
        body: [
          'Citation carried the famous devil-red and blue silks of Calumet Farm. He was trained by the Calumet team of Ben Jones and his son Jimmy Jones, and was ridden in much of his championship campaign by Eddie Arcaro, one of the most accomplished jockeys in American racing history.',
          'The pairing of a powerhouse stable, a top training operation, and a Hall of Fame rider is the owner-trainer-jockey structure explained in the Horses.com racing-roles reference, here at the height of Calumet’s dominance.',
        ],
      },
      {
        id: 'legacy',
        heading: 'Legacy & Pedigree Note',
        body: [
          'Citation’s legacy rests on his combination of championship form and longevity-driven earnings. As the first equine millionaire he marked a threshold that later horses would chase, and he remains a fixture in discussions of the great mid-century champions.',
          'He was inducted into the National Museum of Racing Hall of Fame. He came from the Calumet breeding program that produced multiple champions, situating him within one of the most important bloodlines and operations in 20th-century American racing.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is Citation famous for?',
        answer:
          'Citation is famous for winning the 1948 Triple Crown and for becoming the first Thoroughbred to reach $1 million in career earnings.',
        answerText:
          'Winning the 1948 Triple Crown and becoming the first racehorse to earn $1 million.',
      },
      {
        question: 'Was Citation really the first millionaire racehorse?',
        answer:
          'Yes. Citation is recognized as the first Thoroughbred to surpass $1 million in career earnings, a landmark figure for the sport at the time.',
        answerText:
          'Yes — he was the first Thoroughbred to surpass $1 million in career earnings.',
      },
      {
        question: 'Who owned and rode Citation?',
        answer:
          'He raced for Calumet Farm, was trained by Ben and Jimmy Jones, and was ridden in much of his championship campaign by Hall of Fame jockey Eddie Arcaro.',
        answerText:
          'Calumet Farm, trainers Ben and Jimmy Jones, and jockey Eddie Arcaro.',
      },
      {
        question: 'Did an injury affect Citation’s career?',
        answer:
          'Yes. A leg ailment kept Citation away from racing for an extended period after his 1948 championship season, and he returned to the track afterward at an older age.',
        answerText:
          'Yes — a leg ailment sidelined him after 1948, and he returned to race at an older age.',
      },
    ],
    related: [
      { label: 'Secretariat', href: '/racing/great-racehorses/secretariat' },
      { label: 'The Triple Crown', href: '/racing/triple-crown' },
      { label: 'The Kentucky Derby', href: '/racing/triple-crown/kentucky-derby' },
      { label: 'Racing Roles', href: '/racing/racing-roles' },
      { label: 'Bloodstock & Breeding', href: '/bloodstock' },
    ],
    references: [
      'National Museum of Racing and Hall of Fame. Citation, Hall of Fame inductee. racingmuseum.org.',
      'Churchill Downs. Kentucky Derby history. kentuckyderby.com.',
      'The Jockey Club. American Stud Book and Thoroughbred records. jockeyclub.com.',
    ],
  },

  // ─────────────────────────────────────────────────────────── AMERICAN PHAROAH
  {
    slug: 'american-pharoah',
    name: 'American Pharoah',
    eyebrow: '2015 Triple Crown',
    cardSummary:
      'Ended a 37-year Triple Crown drought in 2015, then won the Breeders’ Cup Classic to complete the so-called Grand Slam.',
    metaTitle: 'American Pharoah — 2015 Triple Crown Career Profile',
    description:
      'A career profile of American Pharoah, who ended a 37-year Triple Crown drought in 2015 and won the Breeders’ Cup Classic for the Grand Slam. Educational, non-wagering.',
    kicker: 'Heritage Profile · Thoroughbred',
    heroTitle: 'American Pharoah',
    heroSubtitle:
      'The horse who ended a 37-year wait for a Triple Crown in 2015, then capped the year by winning the Breeders’ Cup Classic — the so-called Grand Slam.',
    heroAlt: 'A bay Thoroughbred racehorse at speed, evoking a modern champion',
    readTime: '8 min',
    intro:
      'American Pharoah holds a special place in modern racing as the horse who broke the longest Triple Crown drought in the sport’s history. After his 2015 sweep he added a win in the Breeders’ Cup Classic, completing a season often described as the Grand Slam of American racing. This is a heritage career profile, not a wagering resource.',
    keyFacts: [
      { label: 'Foaled', value: '2012' },
      { label: 'Signature year', value: '2015 — Triple Crown, then Breeders’ Cup Classic' },
      { label: 'Historic note', value: 'First Triple Crown winner in 37 years' },
      { label: 'Grand Slam', value: 'Triple Crown + Breeders’ Cup Classic in the same year' },
      { label: 'Connections', value: 'Zayat Stables; trainer Bob Baffert; jockey Victor Espinoza' },
    ],
    sections: [
      {
        id: 'career-overview',
        heading: 'Career Overview',
        body: [
          'American Pharoah emerged as the leading three-year-old of his generation in 2015. A smooth-striding bay colt known for a fluid, efficient way of running, he carried high expectations into the spring classics after a strong early campaign.',
          'He met those expectations and then exceeded them, delivering a Triple Crown that the sport had waited a generation to see and following it with a championship-level autumn. He was named the year’s champion and is one of the defining horses of the 2010s.',
        ],
      },
      {
        id: 'signature-races',
        heading: 'Signature Races & The Grand Slam',
        body: [
          'In 2015 American Pharoah won the Kentucky Derby, the Preakness Stakes, and the Belmont Stakes to become the first Triple Crown winner in 37 years — the previous winner having come in 1978. Ending that long drought made him a national story and a relief to a sport that had seen several near-misses in the intervening decades.',
          'He did not stop there. Later in 2015 he won the Breeders’ Cup Classic, the year-end championship race. Winning the Triple Crown and the Breeders’ Cup Classic in the same year is sometimes called the Grand Slam of American racing, and American Pharoah is recognized as the first horse to achieve it.',
        ],
      },
      {
        id: 'connections',
        heading: 'The Connections',
        body: [
          'American Pharoah raced for Zayat Stables and was trained by Bob Baffert, one of the most successful trainers in the modern sport, with Victor Espinoza in the saddle for his Triple Crown campaign. The partnership produced one of the most memorable seasons in recent racing history.',
          'The owner-trainer-jockey roles behind his campaign are the same roles explained in the Horses.com racing-roles reference, here applied to a modern Triple Crown winner.',
        ],
      },
      {
        id: 'legacy',
        heading: 'Legacy & Pedigree Note',
        body: [
          'American Pharoah’s legacy is defined by ending the long Triple Crown drought and by his Grand Slam season, which together made him one of the most celebrated horses of his era and helped renew mainstream attention to the sport.',
          'He retired to stud after his championship year and entered breeding, where his offspring carry his bloodline into the next generation of Thoroughbreds. His place among modern greats is widely acknowledged, with the usual caveat that cross-era rankings are a matter of opinion.',
        ],
      },
    ],
    faq: [
      {
        question: 'Why is American Pharoah historically important?',
        answer:
          'American Pharoah ended a 37-year Triple Crown drought in 2015, becoming the first horse since 1978 to sweep the Kentucky Derby, Preakness, and Belmont — and then won the Breeders’ Cup Classic.',
        answerText:
          'He ended a 37-year Triple Crown drought in 2015, the first sweep since 1978, then won the Breeders’ Cup Classic.',
      },
      {
        question: 'What is the Grand Slam in racing?',
        answer:
          'The Grand Slam refers to winning the Triple Crown and the Breeders’ Cup Classic in the same year. American Pharoah is recognized as the first horse to achieve it, in 2015.',
        answerText:
          'Winning the Triple Crown and the Breeders’ Cup Classic in one year — American Pharoah was the first, in 2015.',
      },
      {
        question: 'Who trained and rode American Pharoah?',
        answer:
          'He raced for Zayat Stables, was trained by Bob Baffert, and was ridden in his Triple Crown campaign by jockey Victor Espinoza.',
        answerText:
          'Zayat Stables, trainer Bob Baffert, and jockey Victor Espinoza.',
      },
      {
        question: 'When was the previous Triple Crown before American Pharoah?',
        answer:
          'The previous Triple Crown winner came in 1978, which is why American Pharoah’s 2015 sweep — ending a 37-year gap — was such a landmark.',
        answerText:
          'The previous winner came in 1978, making American Pharoah’s 2015 sweep a 37-year milestone.',
      },
    ],
    related: [
      { label: 'Justify', href: '/racing/great-racehorses/justify' },
      { label: 'The Triple Crown', href: '/racing/triple-crown' },
      { label: "The Breeders' Cup", href: '/racing/breeders-cup' },
      { label: 'Racing Roles', href: '/racing/racing-roles' },
      { label: 'Thoroughbred Profile', href: '/breeds/thoroughbred' },
    ],
    references: [
      'National Museum of Racing and Hall of Fame. American Pharoah, Hall of Fame inductee. racingmuseum.org.',
      "Breeders' Cup Limited. Breeders' Cup Classic results and history. breederscup.com.",
      'Churchill Downs. Kentucky Derby history. kentuckyderby.com.',
      'The Jockey Club. American Stud Book and Thoroughbred records. jockeyclub.com.',
    ],
  },

  // ─────────────────────────────────────────────────────────────────── JUSTIFY
  {
    slug: 'justify',
    name: 'Justify',
    eyebrow: '2018 Triple Crown',
    cardSummary:
      'Swept the 2018 Triple Crown while retiring undefeated — and did so without having raced as a two-year-old.',
    metaTitle: 'Justify — Career Profile of the Undefeated 2018 Champion',
    description:
      'A career profile of Justify, the undefeated 2018 Triple Crown winner who swept the classics having never raced at two. Educational heritage reference, non-wagering.',
    kicker: 'Heritage Profile · Thoroughbred',
    heroTitle: 'Justify',
    heroSubtitle:
      'The 2018 Triple Crown champion who retired undefeated — and who reached the classics without ever having raced as a two-year-old.',
    heroAlt: 'A large chestnut Thoroughbred racehorse galloping, evoking a modern champion',
    readTime: '7 min',
    intro:
      'Justify completed one of the most compressed great seasons in racing history. A big chestnut colt, he swept the 2018 Triple Crown and retired undefeated, all the more remarkable because he had never raced as a two-year-old. This is a heritage career profile, not a wagering resource.',
    keyFacts: [
      { label: 'Foaled', value: '2015' },
      { label: 'Signature year', value: '2018 — undefeated Triple Crown sweep' },
      { label: 'Unusual path', value: 'Never raced as a two-year-old before his classic season' },
      { label: 'Record', value: 'Retired undefeated' },
      { label: 'Connections', value: 'Trainer Bob Baffert; jockey Mike Smith' },
    ],
    sections: [
      {
        id: 'career-overview',
        heading: 'Career Overview',
        body: [
          'Justify had one of the shortest and most concentrated careers of any great racehorse. He did not race as a two-year-old at all, beginning his career only in early 2018 — yet within a few months he had won the Triple Crown, a rise that defied a long-standing pattern in which classic horses typically had two-year-old experience behind them.',
          'A large, powerful chestnut, he won every race he ran. After his Triple Crown season he was retired, ending his career with an unbeaten record across a brief but historic campaign.',
        ],
      },
      {
        id: 'signature-races',
        heading: 'Signature Races & Achievements',
        body: [
          'Justify won the 2018 Kentucky Derby, Preakness Stakes, and Belmont Stakes to capture the Triple Crown. The Kentucky Derby win was notable in itself for the way he overcame a long-cited trend regarding horses that had not raced as two-year-olds.',
          'Because he retired without a loss, his Triple Crown is one of the relatively few completed by a horse with an unbeaten career record, placing him alongside the small group of Thoroughbreds who swept the classics and never tasted defeat.',
        ],
      },
      {
        id: 'connections',
        heading: 'The Connections',
        body: [
          'Justify was trained by Bob Baffert — who, with American Pharoah three years earlier, became associated with two of the modern Triple Crown winners — and was ridden by veteran jockey Mike Smith. The combination guided Justify through his compressed, unbeaten campaign.',
          'The owner, trainer, and jockey roles behind his run are the same ones explained in the Horses.com racing-roles reference, here applied to a modern undefeated champion.',
        ],
      },
      {
        id: 'legacy',
        heading: 'Legacy & Pedigree Note',
        body: [
          'Justify’s legacy combines two unusual distinctions: an undefeated record and a Triple Crown achieved without a two-year-old season. Together they make his 2018 campaign one of the most singular in the sport’s modern history.',
          'He retired to stud after the season and entered breeding, where his offspring carry his bloodline forward. As with all such horses, his standing among the all-time greats is widely discussed but ultimately a matter of opinion; what is not in question is the rarity of an unbeaten Triple Crown.',
        ],
      },
    ],
    faq: [
      {
        question: 'What makes Justify’s Triple Crown unusual?',
        answer:
          'Justify swept the 2018 Triple Crown and retired undefeated, and he did so without ever having raced as a two-year-old — an unusual path to the classics.',
        answerText:
          'He won the 2018 Triple Crown undefeated and without ever racing as a two-year-old.',
      },
      {
        question: 'Did Justify ever lose a race?',
        answer:
          'No. Justify retired with an unbeaten record, winning every race he started during his brief 2018 career.',
        answerText:
          'No — Justify retired undefeated, winning every race he started.',
      },
      {
        question: 'Who trained and rode Justify?',
        answer:
          'Justify was trained by Bob Baffert and ridden by veteran jockey Mike Smith during his 2018 Triple Crown campaign.',
        answerText:
          'Trainer Bob Baffert and jockey Mike Smith.',
      },
      {
        question: 'How are Justify and American Pharoah connected?',
        answer:
          'Both were trained by Bob Baffert, who guided American Pharoah to the Triple Crown in 2015 and Justify to it in 2018, making him the trainer of two modern Triple Crown winners.',
        answerText:
          'Both were trained by Bob Baffert, who won the Triple Crown with American Pharoah (2015) and Justify (2018).',
      },
    ],
    related: [
      { label: 'American Pharoah', href: '/racing/great-racehorses/american-pharoah' },
      { label: 'The Triple Crown', href: '/racing/triple-crown' },
      { label: 'The Belmont Stakes', href: '/racing/triple-crown/belmont-stakes' },
      { label: 'Racing Roles', href: '/racing/racing-roles' },
      { label: 'Thoroughbred Profile', href: '/breeds/thoroughbred' },
    ],
    references: [
      'National Museum of Racing and Hall of Fame. Hall of Fame records. racingmuseum.org.',
      'Churchill Downs. Kentucky Derby history. kentuckyderby.com.',
      'New York Racing Association. The Belmont Stakes. belmontstakes.com.',
      'The Jockey Club. American Stud Book and Thoroughbred records. jockeyclub.com.',
    ],
  },
]

export const allGreatRacehorseSlugs = (): string[] =>
  greatRacehorses.map((h) => h.slug)

export function getGreatRacehorse(slug: string): GreatRacehorse | undefined {
  return greatRacehorses.find((h) => h.slug === slug)
}

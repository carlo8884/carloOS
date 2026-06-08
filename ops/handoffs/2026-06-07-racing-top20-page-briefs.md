---
from: Horses.com Vertical Specialist (Racing Bot)
to: CSRO (approval/prioritization), COO (eventual build)
status: planning artifact — waiting mode (no build)
created: 2026-06-07
re: Top 20 racing-page briefs for the Horses.com non-wagering racing vertical
constraint: Hybrid / non-wagering. No odds/picks/EV/fair-odds/sportsbook/ADW/ratings/racecard infra.
---

# Top 20 Racing-Page Briefs — Horses.com

Decision-ready briefs for CSRO to approve/prioritize. **No pages built.** Each brief is scoped to be
**net-new** (does not duplicate the 12 live `/racing` pages: hub, thoroughbred-flat-racing, harness-racing,
quarter-horse-racing, jump-racing, triple-crown, breeders-cup, understanding-race-types-and-classes,
racehorse-training-and-conditioning, the-people-of-racing, off-track-thoroughbred-aftercare, glossary).

Build priority: **P1** = highest value, lowest risk, dispatch first · **P2** = strong, after P1 ·
**P3** = breadth/seasonal/future. All assume the premium `ArticleLayout` reference format + QC §1.

Monetization key: AFF=affiliate · X-SADDLE=Saddle.com tack cross-link · DISPLAY=ad RPM (post-threshold) ·
FUNNEL=email capture · FUTURE=strategy-only (not built now, e.g. ownership/bloodstock inquiry).

---

### 1. Bloodstock Basics  `[already drafted — PR #611, pending CSRO gate]`
- **Title:** Bloodstock Basics — The Business of Breeding & Selling Racehorses
- **Search intent:** informational ("what is bloodstock", "how horse sales work")
- **Unique angle:** the only *neutral, educational* bloodstock primer (incumbents are insider/trade-pitched)
- **Why Horses.com:** completes the racing cluster's "business of racing" leg; affluent, citation-magnet
- **Internal links:** /racing, /racing/understanding-race-types-and-classes, /racing/the-people-of-racing
- **Visual:** sales-ring photo + pedigree-page diagram (licensed; no AI)
- **Monetization:** FUTURE (ownership/bloodstock inquiry) + DISPLAY + FUNNEL
- **Trust risk:** MED — "not investment advice"; no live/scraped sales data
- **Priority:** P1 (already drafted)

### 2. How to Read a Pedigree (deep-dive)
- **Title:** How to Read a Thoroughbred Pedigree — Sire, Dam & Black Type
- **Search intent:** informational ("how to read a pedigree", "what is black type")
- **Unique angle:** step-by-step visual breakdown of a catalogue page for newcomers
- **Why Horses.com:** high-search evergreen; pairs with Bloodstock Basics as a sub-reference
- **Internal links:** /racing/bloodstock, /racing/thoroughbred-flat-racing
- **Visual:** annotated pedigree-page graphic (original diagram, no AI)
- **Monetization:** DISPLAY + FUNNEL; FUTURE (bloodstock)
- **Trust risk:** LOW (educational)
- **Priority:** P2 (only if CSRO wants bloodstock split into spokes vs one page)

### 3. The Kentucky Derby (individual leg reference)
- **Title:** The Kentucky Derby — Distance, History & Traditions
- **Search intent:** huge seasonal informational (May spike), "kentucky derby explained/distance"
- **Unique angle:** the leg as a standalone reference (live site has Triple Crown overview only)
- **Why Horses.com:** captures the sport's single biggest search event; casual→committed on-ramp
- **Internal links:** /racing/triple-crown, /racing/thoroughbred-flat-racing, (future) /racing/first-derby
- **Visual:** Churchill Downs / roses imagery (licensed; NO trademarked logos)
- **Monetization:** DISPLAY (seasonal RPM) + FUNNEL
- **Trust risk:** LOW — factual; no wagering framing, no marks misuse
- **Priority:** P1 (seasonal, high traffic)

### 4. The Preakness Stakes (individual leg reference)
- **Title:** The Preakness Stakes — The Middle Jewel Explained
- **Search intent:** seasonal informational
- **Unique angle:** standalone leg reference; the recovery/turnaround story
- **Why Horses.com:** completes the Triple Crown leg set
- **Internal links:** /racing/triple-crown, /racing/kentucky-derby (when live)
- **Visual:** Pimlico / black-eyed-susan imagery (licensed; no logos)
- **Monetization:** DISPLAY + FUNNEL
- **Trust risk:** LOW
- **Priority:** P1 (ships with the leg set)

### 5. The Belmont Stakes (individual leg reference)
- **Title:** The Belmont Stakes — "The Test of the Champion"
- **Search intent:** seasonal informational
- **Unique angle:** the distance/graveyard-of-bids angle
- **Why Horses.com:** completes the Triple Crown leg set
- **Internal links:** /racing/triple-crown, /racing/kentucky-derby, /racing/preakness-stakes
- **Visual:** Belmont Park / carnations imagery (licensed; no logos)
- **Monetization:** DISPLAY + FUNNEL
- **Trust risk:** LOW
- **Priority:** P1 (ships with the leg set)

### 6. Maiden Races Explained
- **Title:** Maiden Races — Where Every Racing Career Begins
- **Search intent:** informational ("what is a maiden race")
- **Unique angle:** spoke under the existing race-types overview; "breaking your maiden"
- **Why Horses.com:** deepens the race-types cluster the live overview only summarizes
- **Internal links:** /racing/understanding-race-types-and-classes, /racing/thoroughbred-flat-racing
- **Visual:** young horses / paddock imagery (licensed)
- **Monetization:** DISPLAY + FUNNEL
- **Trust risk:** LOW
- **Priority:** P2 (race-types spoke set)

### 7. Claiming Races Explained
- **Title:** Claiming Races — How the Buy-and-Sell Backbone Works
- **Search intent:** informational ("what is a claiming race")
- **Unique angle:** the self-regulating market mechanism, plainly explained
- **Why Horses.com:** race-types depth; common reader confusion point
- **Internal links:** /racing/understanding-race-types-and-classes
- **Visual:** generic race imagery (licensed)
- **Monetization:** DISPLAY + FUNNEL
- **Trust risk:** LOW
- **Priority:** P2 (race-types spoke set)

### 8. Allowance & Optional Claiming Races
- **Title:** Allowance Races — The Step Toward Stakes Company
- **Search intent:** informational
- **Unique angle:** the "conditions/allowances" mechanic + the career ladder
- **Why Horses.com:** race-types depth
- **Internal links:** /racing/understanding-race-types-and-classes, (future) claiming/stakes spokes
- **Visual:** race imagery (licensed)
- **Monetization:** DISPLAY + FUNNEL
- **Trust risk:** LOW
- **Priority:** P2

### 9. Stakes & Graded Stakes Races
- **Title:** Stakes & Graded Stakes — The Top of the Class System
- **Search intent:** informational ("what is a graded stakes / grade 1")
- **Unique angle:** how grading works + the black-type→breeding-value link (bridges to bloodstock)
- **Why Horses.com:** race-types depth + cross-cluster bridge to bloodstock
- **Internal links:** /racing/understanding-race-types-and-classes, /racing/bloodstock, /racing/triple-crown
- **Visual:** marquee race imagery (licensed; no logos)
- **Monetization:** DISPLAY + FUNNEL
- **Trust risk:** LOW
- **Priority:** P2

### 10. Handicap Races & Weights
- **Title:** Handicap Races — How Weight Levels the Field
- **Search intent:** informational ("what is a handicap race")
- **Unique angle:** the weight-assignment principle WITHOUT crossing into handicapping-for-bets
- **Why Horses.com:** race-types depth
- **Internal links:** /racing/understanding-race-types-and-classes
- **Visual:** weighing-room / saddle-pad imagery (licensed)
- **Monetization:** DISPLAY + FUNNEL
- **Trust risk:** MED — must stay on race-classification, never tip/selection framing
- **Priority:** P2

### 11. Your First Day at the Races (beginner on-ramp)
- **Title:** Your First Day at the Races — A Newcomer's Guide
- **Search intent:** high-volume seasonal ("how to watch / what to wear / first time at the track")
- **Unique angle:** the casual→committed wedge; female-skewing audience; no-jargon
- **Why Horses.com:** converts the ~16M-viewer Derby curiosity into followers + email
- **Internal links:** /racing, /racing/kentucky-derby, /racing/understanding-race-types-and-classes
- **Visual:** race-day fashion/atmosphere imagery (licensed; no marks)
- **Monetization:** FUNNEL + DISPLAY; (light) event/travel informational
- **Trust risk:** LOW — frame any wagering mention as optional/none; no betting promotion
- **Priority:** P1 (highest casual-capture value)

### 12. Origins of Thoroughbred Racing
- **Title:** The Origins of Thoroughbred Racing — From Three Sires to the Modern Sport
- **Search intent:** informational/heritage ("history of horse racing", "foundation sires")
- **Unique angle:** the three foundation sires → American arrival, citation-magnet
- **Why Horses.com:** authority/heritage breadth; strong GEO citation surface
- **Internal links:** /racing/thoroughbred-flat-racing, /racing/bloodstock
- **Visual:** archival/heritage imagery (rights-cleared)
- **Monetization:** DISPLAY + FUNNEL; AFF (books/education)
- **Trust risk:** LOW-MED — verify dates/facts; no fabricated specifics
- **Priority:** P2

### 13. Secretariat — A Heritage Profile
- **Title:** Secretariat — The 1973 Triple Crown & a Record Belmont
- **Search intent:** high informational ("secretariat", "greatest racehorse")
- **Unique angle:** heritage profile; superlatives framed "widely regarded as"
- **Why Horses.com:** evergreen high-search; authority + emotional on-ramp
- **Internal links:** /racing/triple-crown, /racing/belmont-stakes, /racing/origins-of-thoroughbred-racing
- **Visual:** heritage imagery (rights-cleared — care with iconic photos' licensing)
- **Monetization:** DISPLAY + FUNNEL; AFF (books/film)
- **Trust risk:** MED — opinion-framed superlatives; verify records; image rights
- **Priority:** P2

### 14. The Great Champions (heritage cluster index)
- **Title:** The Great Champions of American Racing
- **Search intent:** informational ("famous racehorses", "man o war", "greatest of all time")
- **Unique angle:** a curated, opinion-framed heritage index linking to individual profiles
- **Why Horses.com:** hub for the history cluster; internal-link spine
- **Internal links:** /racing/secretariat + future profiles, /racing/triple-crown
- **Visual:** heritage montage (rights-cleared)
- **Monetization:** DISPLAY + FUNNEL; AFF (books)
- **Trust risk:** MED — "considered by many"; no invented stats
- **Priority:** P3 (after individual profiles exist)

### 15. How Racehorses Are Trained (deepening)
- **Title:** How Racehorses Are Trained — Gallops, Breezes & Conditioning
- **Search intent:** informational ("how are racehorses trained")
- **Unique angle:** deepens the live training page with the daily-routine + conditioning science (general)
- **Why Horses.com:** strengthens existing training authority; care-curious audience
- **Internal links:** /racing/racehorse-training-and-conditioning, /racing/the-people-of-racing
- **Visual:** morning-works/trackwork imagery (licensed)
- **Monetization:** DISPLAY + FUNNEL; X-SADDLE (no duplicate tack content here)
- **Trust risk:** MED — general only, no veterinary advice; check overlap with live training page (may MERGE not add)
- **Priority:** P3 (overlap-check first)

### 16. Track Surfaces — Dirt, Turf & Synthetic
- **Title:** Racing Surfaces — Dirt, Turf & Synthetic Tracks Explained
- **Search intent:** informational ("dirt vs turf racing", "synthetic track")
- **Unique angle:** how surface shapes the sport; safety angle
- **Why Horses.com:** clean net-new explainer; pairs with training/safety
- **Internal links:** /racing/thoroughbred-flat-racing, /racing/racehorse-training-and-conditioning
- **Visual:** surface close-ups / track maintenance (licensed)
- **Monetization:** DISPLAY + FUNNEL
- **Trust risk:** LOW
- **Priority:** P3

### 17. Racehorse Aftercare — Second Careers (deepening)
- **Title:** Off-Track Thoroughbreds — Second Careers & Adoption
- **Search intent:** informational ("OTTB", "adopt a retired racehorse")
- **Unique angle:** deepens the live aftercare page with discipline pathways + accredited orgs
- **Why Horses.com:** strong EEAT/trust asset; engaged, values-driven audience
- **Internal links:** /racing/off-track-thoroughbred-aftercare, /disciplines/*
- **Visual:** OTTB in second-career imagery (licensed)
- **Monetization:** FUNNEL; (non-commercial adoption — no monetization pressure)
- **Trust risk:** LOW — overlap-check with live aftercare page (likely MERGE)
- **Priority:** P3 (overlap-check first)

### 18. International Racing for American Fans
- **Title:** International Racing for American Fans — Ascot to the Melbourne Cup
- **Search intent:** informational/seasonal ("royal ascot", "melbourne cup explained")
- **Unique angle:** US-audience framing of marquee global meetings
- **Why Horses.com:** seasonal traffic; breadth; no incumbent owns the US-newcomer framing
- **Internal links:** /racing/triple-crown, /racing/breeders-cup
- **Visual:** international racecourse imagery (licensed; no logos)
- **Monetization:** DISPLAY + FUNNEL; (light) travel-informational only
- **Trust risk:** LOW
- **Priority:** P3

### 19. How a Racehorse Is Named
- **Title:** How Racehorses Get Their Names — The Jockey Club Rules
- **Search intent:** informational, quirky-high ("how are racehorses named")
- **Unique angle:** the naming rules + famous examples; light, shareable, citation-friendly
- **Why Horses.com:** easy citation magnet; broad appeal; links to registry/bloodstock
- **Internal links:** /racing/bloodstock, /racing/the-people-of-racing
- **Visual:** silks/nameplate imagery (licensed)
- **Monetization:** DISPLAY + FUNNEL
- **Trust risk:** LOW — cite Jockey Club naming rules
- **Priority:** P3

### 20. The Racing Calendar & Season
- **Title:** The American Racing Calendar — How a Season Is Structured
- **Search intent:** informational ("racing season", "when is X race")
- **Unique angle:** the shape of the year (prep races → classics → Breeders' Cup) WITHOUT live data
- **Why Horses.com:** orienting hub-style explainer; strong internal-link spine
- **Internal links:** /racing/triple-crown, /racing/breeders-cup, /racing/understanding-race-types-and-classes
- **Visual:** seasonal/calendar graphic (original)
- **Monetization:** DISPLAY + FUNNEL
- **Trust risk:** LOW — no live schedules/data; structural only
- **Priority:** P3

---

## Summary by priority
- **P1 (dispatch first):** #1 Bloodstock (drafted), #3 Derby, #4 Preakness, #5 Belmont, #11 First Day at the Races
- **P2:** #2 Pedigree, #6–#10 race-type spokes, #12 Origins, #13 Secretariat
- **P3:** #14 Champions index, #15 Training deepen*, #16 Surfaces, #17 Aftercare deepen*, #18 International, #19 Naming, #20 Calendar
  - *#15/#17 require an overlap-check vs existing live pages — may be MERGE not net-new.

**CSRO to approve which briefs graduate to build, and the order. No build until dispatched.**

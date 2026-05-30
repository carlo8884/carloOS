---
from: coo
to: coo
status: in_progress
created: 2026-05-30
next_action: "Begin manual posting cycle once two production sites are DNS-live; track entries in ops/data/reddit-syndication-log.csv."
---

## Context

Reddit and Quora are high-quality referral surfaces for the kind of editorially-curated reference content CarloOS produces. Unlike paid acquisition or social posting on Twitter/Instagram, a substantive answer in the right subreddit can drive sustained referral traffic for years — and AI surfaces (ChatGPT, Perplexity, Google AI Overviews) increasingly retrieve and cite high-upvoted Reddit answers, which doubles the SEO/GEO benefit of a single quality post.

This document is a tracker — not an automation. It defines the targets, the high-signal question patterns, the posting protocol that avoids bans, and the cadence target. Actual automation (Reddit API client, scheduling, approval flow) is out of scope for this MVP — that is a separate later PR gated on real signal from manual posts.

## Inputs

- The 10 production CarloOS domains, with top-5 syndication priority going to the editorial-authority sites: Dog.com, Vets.co, Fish.com, Lizard.com, Horses.com.
- The Reddit and Quora communities most aligned with each site's editorial scope.
- The site-by-site content surfaces most likely to be cited (hubs, calculators, condition pages, comparison pages).

## Definition of done

- This tracker document exists and is the canonical source for syndication targets and posting protocol.
- `ops/data/reddit-syndication-log.csv` exists with header row; entries are filled in over time as manual posts go out.
- Posting begins only after two production sites are DNS-live (so referral traffic can be attributed).
- Carlo or the COO manually reviews every post draft before it goes out (no autopost).

---

## 1. Target subreddits per site

Each site has 3-5 priority subreddits. "Audience" numbers are approximate subscriber counts as of 2026 and should be re-checked before active posting begins. "Cadence" is the soft maximum to avoid the spam-pattern flag — Reddit moderators across all of these subs aggressively remove repeat self-promoters.

### Dog.com
- **r/dogs** — ~3.7M subscribers. General-purpose. Strict self-promo policy; answers must be substantively useful before any link. Max 1 link/week site-wide.
- **r/dogtraining** — ~1.2M subscribers. Training questions, behavior, puppy-stage problems. Quality answers welcome; obvious affiliate-bait removed instantly.
- **r/puppy101** — ~900K subscribers. Owner-of-new-puppy questions. Very high volume of repeatable Q&A patterns (feeding schedule, vaccination, crate training).
- **r/dogcare** — ~120K subscribers. Smaller, calmer, mod-tolerant of well-cited reference links.
- **r/dogadvice** — ~80K subscribers. Smaller, broader; lower bar for sharing reference links.

### Vets.co
- **r/AskVet** — ~250K subscribers. The single highest-value sub for Vets.co. **Mod rules:** flair required; verified-vet status preferred for clinical advice; non-vets posting clinical reassurance get removed. Vets.co should NOT post as a clinical authority — only as a reference source ("here is the AVMA guidance on this").
- **r/dogs (vet-tag)** — see Dog.com. Vet-flair comments allowed under specific rules.
- **r/cats (vet-tag)** — ~3M subscribers. Same constraints as r/dogs.
- **r/Veterinary** — ~70K subscribers, mostly DVMs and vet techs. **Mod-only-able-to-post.** Engagement strategy here is reading and citing, not posting.

### Fish.com
- **r/aquariums** — ~3.4M subscribers. Largest aquarium community. Highly responsive to substantive water-chemistry / cycling / disease answers. Strict on link spam.
- **r/fishtank** — ~200K subscribers. Smaller, beginner-heavy. Stocking and equipment questions dominate.
- **r/PlantedTank** — ~440K subscribers. CO2, fertilizer, lighting questions — perfect Fish.com calculator-link territory if answered substantively first.
- **r/Goldfish** — ~250K subscribers. Specific. Heavy debate on tank size minimums; Fish.com's stocking calculator + cycling guide are useful references.
- **r/bettafish** — ~340K subscribers. Specific. Care-myth correction is consistently appreciated when sourced.

### Lizard.com
- **r/Reptiles** — ~700K subscribers. General reptile community. Husbandry questions dominate; UVB, temperature, and substrate references are routinely cited.
- **r/Lizards** — ~140K subscribers. Smaller, lizard-specific. Lower posting bar.
- **r/leopardgeckos** — ~250K subscribers. Specific. Husbandry myth-correction is welcome when sourced.
- **r/BeardedDragons** — ~280K subscribers. Specific. UVB and brumation questions are recurring and high-citation.
- **r/snakes** — ~700K subscribers. Adjacent (Lizard.com covers reptiles broadly, not just lizards). State-legality questions appear regularly.

### Horses.com
- **r/Equestrian** — ~280K subscribers. The flagship horse community. Breed, discipline, and equipment questions are the main syndication surface.
- **r/Horses** — ~210K subscribers. General. Care, behavior, and breed-fit questions.
- **r/HorseHobbyists** — ~10K subscribers. Smaller, calmer; good for longer-form discipline content.
- **r/dressage** — ~30K subscribers. Discipline-specific. Saddle.com and Horses.com cross-content fits naturally here.
- **r/eventing** — ~15K subscribers. Discipline-specific. Same.

---

## 2. Quora topic pages

Quora has lower per-answer traffic ceilings than Reddit but answers compound over years and are cited heavily by AI surfaces. Same posting protocol applies (answer substantively first; link sparingly).

### Dog.com
- Quora topic: Dogs
- Quora topic: Dog Breeds
- Quora topic: Dog Training
- Quora topic: Dog Health
- Quora topic: Puppies

### Vets.co
- Quora topic: Veterinary Medicine
- Quora topic: Pet Insurance
- Quora topic: Pet Health
- Quora topic: Veterinarians

### Fish.com
- Quora topic: Aquariums
- Quora topic: Fish (Pets)
- Quora topic: Freshwater Aquariums
- Quora topic: Saltwater Aquariums
- Quora topic: Aquarium Plants

### Lizard.com
- Quora topic: Reptiles
- Quora topic: Lizards
- Quora topic: Pet Reptiles
- Quora topic: Bearded Dragons
- Quora topic: Snakes (as pets)

### Horses.com
- Quora topic: Horses
- Quora topic: Horse Riding
- Quora topic: Horse Breeds
- Quora topic: Equestrian Sports

---

## 3. High-value question patterns to monitor

These are the patterns where a CarloOS reference page is genuinely the best link to drop after a substantive answer. Monitoring these is cheaper than scattershot posting — they recur weekly and the answer template can be tuned once and re-used.

1. **"Is my [pet] [behavior]?" — health/symptom questions.**
   Examples: "Is my dog drinking too much water?", "Is my bearded dragon brumating or sick?", "Is my betta dying?"
   Fit: dog-com /symptoms hub, vets-co condition pages, lizard-com species pages, fish-com species pages.

2. **"Should I get a [breed/species]?" — acquisition questions.**
   Examples: "Should I get a French Bulldog?", "Is a bearded dragon a good starter reptile?", "Should I get a Quarter Horse for trail riding?"
   Fit: dog-com /breeds pages, lizard-com /species pages, horses-com /breeds pages, and (once shipped) the Which-Pet wizard.

3. **"How much does [thing] cost?" — funnel-bait questions.**
   Examples: "How much does pet insurance cost?", "How much does a vet visit cost for a sick cat?", "How much does it cost to set up a 75-gallon planted tank?"
   Fit: vets-co pet-insurance comparison matrix, fish-com calculators, dog-com/cost-of-ownership content (when built).

4. **"[Brand A] vs [Brand B]?" — affiliate-bait questions.**
   Examples: "Royal Canin vs Hill's Science Diet?", "Trupanion vs Healthy Paws?", "Fluval vs Eheim canister filter?"
   Fit: petfoods-com brand pages, dog-com / vets-co insurance reviews, fish-com filter reviews. NOTE: any answer that links to a comparison page MUST include the affiliate-disclosure language inline ("disclosure: this links to a comparison page that may contain affiliate links") to comply with Reddit/Quora ToS and FTC guidance.

---

## 4. Posting protocol (to avoid bans)

These rules are non-negotiable. Violating any of them creates a non-trivial chance of a sitewide shadowban that takes months to lift.

1. **Always answer substantively first.** Link to deeper content only as "I covered this more fully here: [link]". The Reddit/Quora answer must stand alone as a useful reply even if every link were stripped.
2. **One link per comment maximum.** Period. Two-link comments read as promotion regardless of intent.
3. **Distinct username per site.** Each CarloOS property gets its own Reddit + Quora account, with a profile that includes the site name, the editorial mission, and a link back to the site's /editorial-standards page. Cross-posting from one property's account to another property's content is a ban trigger.
4. **Manual approval before posting.** Carlo or the COO reviews every draft before it goes out. No autopost. No queued bulk posts. No "AI replies" without human edit. The whole point of the channel is signal quality.
5. **Track every post in the CSV at `ops/data/reddit-syndication-log.csv`** so we can measure referral lift and ban-pattern risk. The CSV header is set up in this PR; entries fill in over time.
6. **No reciprocal-upvote schemes, no sockpuppet accounts, no answer-then-upvote-yourself tactics.** Reddit's site-integrity team catches these and the punishment is sitewide.
7. **Do not edit-and-add a link after the fact.** If the original answer was substantive without a link, leave it. Adding a link in an edit looks like a bait-and-switch and trips both mod tools and reader trust.
8. **When a community has an "ask the experts" thread, use it.** Random self-posts attract more scrutiny than answers inside designated AMA / weekly-help threads.

---

## 5. Cadence target

**Quarterly: 10-15 high-quality posts per site, per quarter.** That is roughly one post per week per site at the high end, and explicitly *not* daily. Quality and per-post lift matter more than volume; a single answer that goes to 1K+ upvotes outproduces fifty mediocre ones and burns far less ban budget.

This means for the top-5 priority sites combined: **50-75 posts per quarter, portfolio-wide.** Comfortably reviewable and approvable inside the 30-minutes-per-day Carlo window once the workflow is established.

---

## 6. Risk register

| Risk | Likelihood | Mitigation |
|---|---|---|
| Per-account ban for self-promo pattern | Medium | One link/comment rule; substantive-first protocol; distinct usernames per site; cadence cap |
| Sitewide shadowban for any CarloOS account | Low-Medium | No reciprocal upvotes; no sockpuppets; no post-hoc link edits; conservative cadence |
| Reddit policy shift hostile to AI-assisted answers | Medium-High | All drafts are human-edited before posting; no detectable AI-template language; account profiles disclose editorial-team authorship honestly |
| Reddit API pricing or rules change blocking automation | High over 12 months | We intentionally do NOT depend on the API for this MVP; the protocol is manual-posting first |
| Quora downranks editorial-site answers in favor of credentialed users | Medium | Vets.co specifically should never post clinical claims itself — only reference-source language ("here is what the AVMA says"); other sites are less exposed |
| Single post goes viral negatively (factual error, mis-cited claim) | Low | Every draft passes the same trust-bar review as on-site content: no faked credentials, no first-person hands-on claims, sources cited |
| Mod-driven removal cascades after one site gets flagged | Low-Medium | Per-site usernames mean a ban on one account doesn't taint the others |

---

## 7. Success metric

**Primary metric:** referral sessions per CarloOS site from `reddit.com` and `quora.com`, measured in Plausible / GA4 once analytics is live on the production domains.

**Secondary metrics:**
- Median upvote count at 24 hours per post (tracked in the CSV).
- Click-through rate per linked post (referral sessions ÷ upvotes-at-24h as a rough proxy until UTM links are wired).
- Ratio of substantive comments to posts (signal that the audience finds the content useful).

**Anti-metric:** number of removed-by-mod posts. If this exceeds 10% of attempts in any quarter, pause posting on the affected site and re-read this protocol before resuming.

---

## SEO / GEO / Authority charter scoring

| Field | Value |
|---|---|
| **SEO Impact** | Low. Reddit links are nofollow; direct SEO equity from posts is near zero. |
| **GEO Impact** | Medium. AI surfaces (ChatGPT, Perplexity, Google AI Overviews) increasingly cite high-upvoted Reddit answers; a substantive answer + reference link can pull CarloOS into the citation graph for that question. |
| **Monetization Impact** | Medium. Referral sessions from Reddit convert at typical editorial rates on the affiliate surfaces (insurance, comparison pages, calculators). Manual cost is the key constraint, not revenue per session. |
| **Build Effort** | XS. This document + a header-only CSV log. No code, no automation. |
| **Priority Level** | P2 (this month, once DNS goes live). Cannot start before referral tracking is in place on the production sites. |

---

## Out of scope (explicit, for future PRs)

- Reddit API client and any automated posting flow.
- Quora API integration (Quora API is private; this stays manual indefinitely).
- Per-site CMS for tracking syndication log (the CSV is the MVP; if posting volume materially exceeds 50/quarter, revisit).
- UTM-tagged short links per post (worth doing once posting begins; add a column to the CSV at that point).
- Subreddit-specific draft templates (each post should be hand-written for its context).

---
from: Horses.com Vertical Specialist (Racing Bot)
to: CSRO (ratify), COO (apply at build), any subagent building racing pages
status: planning artifact — waiting mode (standard definition, no build)
created: 2026-06-07
re: Racing vertical quality bar — the premium / non-wagering / acquirer-grade standard
---

# Racing Vertical Quality Bar

The definition every Horses.com racing page must meet to be **premium, non-wagering, and acquirer-grade.**
Derived from the live `/racing` convention (triple-crown, the-people-of-racing) + QC §1 + CLAUDE.md §6.
Intended as a checklist CSRO can ratify and any builder (COO or a dispatched subagent) must pass.

---

## 1. Required source types
Every reference page must be anchored to **authoritative, non-wagering primary sources**, cited in a
References list. Acceptable:
- **Governing/registry bodies:** The Jockey Club, USTA, AQHA, HISA, racing commissions.
- **Track/host operators (factual):** Churchill Downs, NYRA, Maryland Jockey Club, Keeneland, Fasig-Tipton.
- **Breed/owner/welfare orgs:** TOBA, Thoroughbred Aftercare Alliance, Retired Racehorse Project, AAEP (welfare).
- **Established historical record** for heritage facts (framed carefully; see §2).

NOT acceptable as a sourced authority: ADW/sportsbook sites, tipster services, odds providers, scraped
data, or any wagering-framed source. No Equibase/DRF/Timeform **data** republished (licensing — D12).

## 2. No-wagering language rules (hard)
- **Banned:** odds, picks, selections, "best bet", tips, fair odds, expected value/EV, handicapping-as-advice,
  "lock", "value play", sportsbook/ADW names as CTAs, "guaranteed", "beat the market".
- **Every page** that touches a betting-adjacent topic (e.g. handicap races, "first day") must include an
  explicit framing line: educational reference, *not* betting/odds/picks; wagering (if mentioned at all) is
  optional and never promoted.
- **Heritage superlatives** ("greatest", "best ever") must be **attributed/opinion-framed** ("widely regarded
  as", "considered by many") — never stated as bare fact (QC §1.4).
- **No fabricated specifics:** no invented year-by-year stats, times, or quotes. State only well-established,
  stable facts; when unsure, omit. (Matches the live triple-crown page's discipline.)
- **No fabricated credentials:** byline is "Horses.com Editorial" / "Editorial team". No fake DVM/expert names.
- **No first-person hands-on claims:** never "we tested/trained/timed/calibrated." (trust-guard enforces.)
- **No individualized advice:** veterinary, medical, financial, investment, or purchasing — general education
  with defer-to-professional framing only.

## 3. Image requirements
- **Sandbox reality:** no bot can fetch real photos (Unsplash/Pexels network blocked). Builders may only
  **wire image slots + add `image-queries.json` entries with a `manifestKey` + descriptive alt + photographer-
  attributable structure**; photos populate when **Carlo runs `node scripts/sync-images.mjs --force`** on his Mac.
- **No AI-generated humans or animals** in any trust context (no fake jockeys, vets, crowds, or horses). (QC §1)
- **No trademarked logos/marks** (race logos, track wordmarks). Generic race-day/heritage imagery only.
- **Attribution preserved** (Unsplash/Pexels TOS) — never strip photographer credit from `StockImage`/`ImageCard`.
- Hero image optional but preferred for premium feel; must degrade gracefully (fallback) when unsynced.

## 4. Internal-linking rules
- Every page links **up** to the `/racing` hub and **across** to ≥3 relevant sibling racing pages
  (hub → cluster → spoke graph; no orphans — CLAUDE.md §6).
- Use the existing live pages as link targets (don't invent links to unbuilt pages without a clear plan).
- Cross-cluster bridges where natural (e.g. graded-stakes → bloodstock via "black type"; aftercare → /disciplines).
- Tack/gear intent links **out to Saddle.com**, not to a competing horses.com commerce page.
- `RelatedLinks` sidebar + in-body contextual links both used (matches live convention).

## 5. Buyer/acquirer relevance test
A page earns its place only if it advances at least one acquirer-legible asset (per the horse-cluster build
spec — acquirers buy **audience + commerce + authority**, not thin SEO):
- **Authority:** is it a citation-magnet a reasonable acquirer would value as topical depth? (GEO test:
  would AI Overviews/Perplexity cite it?)
- **Audience:** does it capture email / feed the funnel / serve the affluent ownership-curious reader?
- **Breadth fit:** does it round out the equestrian authority story (an equestrian authority *should* cover
  racing) without diluting into a wagering/data product (which D12 says lowers acquisition value)?
- If a page advances none of these, it's breadth-for-breadth's-sake → **demote to backlog.**

## 6. Premium vs thin — the line
**Premium (ships):**
- Full `ArticleLayout` reference: hero + TOC sidebar + `ArticleByline` + structured H2 sections +
  `FAQAccordion` + References + `buildArticleSchema`.
- Substantive depth (the live triple-crown page ≈ 1,500–2,500 words of genuinely informative content).
- Original synthesis, accurate, sourced, internally linked, schema-rich, image-slotted.
- Answers the search intent completely; reads as a definitive reference.

**Thin (rejected):**
- Template/data-driven stub with a few sentences per item, no sources, no schema, no real depth.
- Duplicates an existing live page or another horses.com section (canonicalization harm).
- Keyword-padded, no unique angle, no internal-link graph, no acquirer relevance.
- Mass-produced spokes that exist only to inflate page count (algorithmic-suppression risk — CLAUDE.md §6).

## 7. Pre-merge checklist (builder self-QC before opening a PR)
- [ ] `ArticleLayout` premium format, matches live `/racing` convention
- [ ] ≥1,500 words substantive, sourced; References list present
- [ ] No-wagering language clean; betting-adjacent framing line present if relevant
- [ ] Superlatives opinion-framed; no fabricated stats/credentials/first-person claims
- [ ] Image slots wired + `image-queries.json` entry (no fetched photos); no AI humans/animals; no logos
- [ ] Links up to /racing + ≥3 siblings; tack→Saddle.com; no orphan
- [ ] Passes buyer/acquirer relevance test (§5)
- [ ] `trust-guard` + `link-check` + `metadata-policy` + app `tsc` all green
- [ ] One cluster = one small PR, apps/horses-com only, off fresh main
- [ ] Sitemap left to `regenerate-sitemaps.mjs` at merge (not hand-edited per-PR)

**CSRO to ratify this bar; it becomes the gate every racing PR is reviewed against.**

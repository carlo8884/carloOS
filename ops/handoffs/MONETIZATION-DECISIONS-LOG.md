# Monetization Decisions Log

> **2026-05-30 priority recalibration:** Carlo shared live monthly traffic
> numbers (with 4 days left in month):
>
> | Domain | Visitors/mo | Note |
> |---|---|---|
> | Dog.com | ~36,000 | Flagship; COO refresh in flight |
> | Ferret.com | ~11,000 | **No monetization surface** — biggest hidden leak |
> | Fish.com | ~7,000+ | D-002 saltwater funnel built; COO refresh in flight |
> | PetFood.com | ~5,000 | Editorial face; D-006 should target this not PetFoods.com |
> | Horses.com | ~1,000 | Thin — deprioritize programmatic builds |
> | Lizard.com | ~765 | Thin — deprioritize |
> | Saddle.com | ~214 | Very thin — deprioritize until traffic grows |
> | PetFoods.com | ~30 | Database/catalog face — D-006 PR #174 is on wrong site |
>
> Implication: P0/P1 ranking has shifted. Ferret.com is now the #1 immediate-revenue opportunity (11K/mo × zero conversion = pure leak). PetFood.com (5K) is the right home for the D-006 buy-box pattern, not PetFoods.com (30). Vets.co D-001 matrix is still valuable but is a 6-9mo SEO bet, not near-term cash. Programmatic buildouts on horses/saddle/lizard are paused until traffic justifies the build cost.

**Owner:** Monetization Bot (Analytics + Revenue Intelligence role per 2026-05-30 mandate)
**Purpose:** Living scoreboard of every revenue recommendation — proposed, shipped, killed, and (post-launch) measured against actual outcome.

Every entry uses the standard 5-field framework:

- **Revenue Potential** — projected MRR at maturity
- **Traffic Requirements** — what scale is needed to materialize
- **Ease of Implementation** — hours / complexity / lane
- **Time to Revenue** — calendar months from build → first dollar
- **Priority Level** — P0 / P1 / P2 / P3 / Killed

**Bias:** Programmatic + automated > human-touch. Recurring without intervention > one-time.

---

## ✅ SHIPPED (in repo / awaiting launch)

### D-001 · Programmatic Breed × State Insurance Matrix (vets.co)
- **Date shipped:** 2026-05-30
- **PR:** #173 (open, layered with D-005)
- **Branch:** `claude/vets-co-programmatic-breed-state-insurance`
- **Pages added:** 1,612 deep + 31 breed hubs + 52 state hubs = 1,695 total
- **Revenue Potential:** $15K–$60K MRR at maturity (100% B-tier insurance leads, $30–$120 EPC)
- **Traffic Requirements:** 5–50 visits/page/month; ~100K monthly aggregate
- **Ease of Implementation:** Medium (4-6 hours; data ports from dog-com + new state-context file + 3 templates)
- **Time to Revenue:** 6–9 months post-launch
- **Priority Level:** P0
- **Scale factor:** Adding new breeds = data file edit only. Adding new species (cats, exotics) requires extending the data interface. Zero ongoing human work to maintain.

### D-002 · Saltwater Starter Funnel (fish.com)
- **Date shipped:** 2026-05-30
- **Branch:** `claude/fish-com-saltwater-starter-funnel`
- **Pages added:** 5 (landing + Week 1 detailed + Weeks 2-4 stubs)
- **Revenue Potential:** $4K–$12K MRR at maturity (A-tier retail affiliate; AOV $400-$3500 per full kit)
- **Traffic Requirements:** ~80K monthly visitors to materialize range
- **Ease of Implementation:** Medium-High (data model + 5 templates + per-tier kit research)
- **Time to Revenue:** 4–8 months post-launch
- **Priority Level:** P1
- **Scale factor:** Hand-crafted editorial; each new "starter funnel" (freshwater, planted tank, nano-reef) requires similar effort. Less programmatic than D-001 but still data-driven enough to clone.

### D-003 · Portfolio Monetization Plan (strategic doc)
- **Date shipped:** 2026-05-30
- **File:** `ops/handoffs/2026-05-30-portfolio-monetization-plan.md`
- **Why this counts:** Coordination artifact that informs every subsequent decision. Replaces ad-hoc per-site reasoning with a single rank-ordered queue.

### D-004 · COO Monetization Affordances Spec
- **Date shipped:** 2026-05-30
- **File:** `ops/handoffs/2026-05-30-monetization-affordances-for-coo.md`
- **Why this counts:** Prevents the COO refresh from quietly removing revenue surfaces. Requests 3 new packages/ui components (AffiliateLink, ComparisonTable, ExitIntent) that compound across every site once shipped.

---

## 🚧 PROPOSED (next in queue — re-ranked post-traffic-data 2026-05-30)

### D-009 · Ferret.com Monetization Surface (NEW · P0)
- **Why now:** 11K monthly visitors with ZERO funnels, no buy-boxes, no insurance routing, no lead magnet. Single biggest immediate-revenue opportunity in the portfolio per real traffic data.
- **Revenue Potential:** $500–$2,500 MRR within 60 days of shipping (~2-5% conversion × $5-20 EPC × 11K visitors)
- **Traffic Requirements:** ALREADY EXISTS (11K/mo)
- **Ease of Implementation:** Medium (~4 hours: starter-kit funnel + buy-box on existing /diseases/[condition] pages + cross-link to vets.co insurance)
- **Time to Revenue:** 30–60 days post-merge
- **Priority Level:** P0 — replaces vets.co matrix as #1 immediate-revenue play

### D-010 · Dog.com Insurance-Routing CTAs on 7 High-Cost Health Pages · **SHIPPED 2026-05-30**
- **PR:** #177
- **Pages updated:** /health/{dog-cancer-treatment, dog-heart-disease, dog-arthritis, dog-diabetes, cushing-disease, dog-kidney-disease, anemia-in-dogs}
- **Revenue Potential:** $500–$3K MRR uplift (36K visitors × small % converting on highest-EPC routing in portfolio)
- **Traffic Requirements:** ALREADY EXISTS (36K/mo)
- **Implementation:** ~30 min mechanical (7 sidebar inserts; zero design/body changes)
- **Time to Revenue:** Immediate at deploy
- **Priority Level:** P0
- **Lane:** Sidebar-only — compatible with the in-flight COO dog-com refresh

### D-011 · Dog.com Breed-Page Insurance CTAs · **SHIPPED 2026-05-30**
- **PR:** #181 (layered with D-012)
- **Pages updated:** All 30 static breed pages + programmatic /breeds/[slug] template
- **Revenue Potential:** $200-$800 MRR uplift
- **Traffic Requirements:** ALREADY EXISTS (36K/mo, breed pages are a significant slice)
- **Implementation:** ~30 min mechanical (Python batch + template update)
- **Time to Revenue:** Immediate at deploy
- **Priority Level:** P0
- **Scales without humans:** New breeds added to breeds.ts auto-get the CTA; new insurance profiles auto-upgrade the link to deep-page.

### D-012 · Fix MAJOR Review-Page Affiliate Leak · **SHIPPED 2026-05-30 (CRITICAL)**
- **PR:** #181 (layered with D-011)
- **What was leaking:** Dog-com review pages had 36 hardcoded amazon.com/s?k=... and chewy.com/... URLs that bypassed the /go/ handler entirely. Zero affiliate tag attached. **100% of review-page affiliate clicks were earning $0.**
- **What ships:** Added amazon-brand + chewy-brand search routes; converted 36 hardcoded URLs to /go/<vendor>/<keyword>?s=review-<slug>
- **Revenue Potential:** **$500-$2K MRR immediate uplift** — stops the $0 hemorrhage on the highest-traffic site's highest commercial-intent surface
- **Traffic Requirements:** ALREADY EXISTS (36K/mo + review-page slice)
- **Implementation:** ~45 min (Python batch + 2 route additions)
- **Time to Revenue:** **Immediate at deploy** (Amazon Associates tag activates the moment AFF_AMAZON_TAG env var is set on dog-com Vercel)
- **Priority Level:** **P0 — biggest single leak fix in the portfolio**
- **Remaining:** 2 hardcoded URLs (ellevetsciences.com, impactdogcrates.com) lack /go/ routes — add if monetizing those brands

### D-005 · Cat-Breed Extension to D-001 Matrix · **SHIPPED 2026-05-30**
- **PR:** #173 (layered with D-001)
- **Pages added:** 1,300 cat deep pages + 25 cat breed hubs = 1,325 new routes
- **Combined matrix total:** 2,912 deep pages + 56 breed hubs + 52 state hubs = **3,020 programmatic routes**
- **Revenue Potential:** Additional $5K–$15K MRR at maturity (cats are ~35% of pet insurance market)
- **Implementation:** ~2 hours (data file + thin merge wrapper + template wiring)
- **Time to Revenue:** Same as D-001 (6–9 months post-launch)
- **Editorial note:** Cat-breed hereditary conditions sourced from AAFP/ACVIM/Winn Feline Foundation literature. [NEEDS-VET-REVIEW] flagged in the data file before launch.

### D-006 · Brand-Page Affiliate Enrichment · **PARTIALLY SHIPPED + REVISED**
- **What shipped:** PR #174 added buy-boxes to petfoods-com (36 catalog pages) — but petfoods-com has only ~30 monthly visitors. **The pattern is right; the site is wrong.**
- **Revised target:** Move the same pattern to PetFood.com (~5K monthly visitors) — that's where the editorial brand pages live and where real traffic flows.
- **Status:** PR #174 still has value as a template; will replicate on petfood-com in follow-up
- **Revenue Potential (revised):** $200–$800 MRR within 90 days of shipping on petfood-com (real-traffic-adjusted)
- **Priority Level:** P1 — do after D-009 (ferret) since that's the bigger immediate win

### D-007 · Equine Insurance Programmatic Matrix (horses.com)
- **Why:** Replicate D-001 pattern. Smaller breed list (~30 horse breeds), same 52 states = ~1,500 pages.
- **Revenue Potential:** $3K–$10K MRR at maturity
- **Traffic Requirements:** 60K monthly
- **Ease of Implementation:** Medium (need to build equine-insurance data — fewer carriers + different policy structure than dog insurance)
- **Time to Revenue:** 6–9 months post-launch
- **Priority Level:** P1
- **Blocker:** Need editorial research on equine insurance carriers (Markel, Hartford, ASPCA exotic, GAIG) — different from dog insurance

### D-008 · Cross-Portfolio Insurance Funnel Routing
- **Why:** Every species site (dog, cat, ferret, horse) should defer insurance queries to vets.co rather than duplicating content. Use `<CrossPortfolioCard>` to recycle traffic into the vets.co programmatic matrix.
- **Revenue Potential:** Compounding — captures incidental insurance interest from species-site readers and routes to highest-converting destination
- **Traffic Requirements:** Multiplier on existing site traffic
- **Ease of Implementation:** Easy (per-site link configuration in existing components)
- **Time to Revenue:** Immediate at launch
- **Priority Level:** P1

---

## 🗑 KILLED / DOWNGRADED

### D-K-001 · Saddle.com `/saddle-finder` Interactive Quiz
- **Original ranking:** Was #5 in pre-launch build queue (high AOV $1500+)
- **Killed because:** Interactive quiz needs design/styling polish that's blocked by the COO refresh. Hand-crafted, doesn't compound. Better to ship saddle.com as programmatic /brands/[brand] + /categories/[category] (compounds) and revisit the quiz after launch when actual traffic data justifies the design investment.
- **Replaced by:** Programmatic brand + category matrix (to be specced as D-009)

### D-K-002 · askthevet.com Build-Out
- **Original ranking:** Was Tier 4 candidate
- **Killed because:** Q&A model requires UGC moderation or AI-answer infrastructure — neither is automation-friendly per the new mandate. Park the domain or sell.

### D-K-003 · dogpicture.com Build-Out (in pet-portfolio form)
- **Original ranking:** Was Tier 4 candidate
- **Killed because:** Photo content has thin monetization unless pivoted entirely to AdSense-only. Not worth lane time. Park or pivot to a single content angle (e.g., "best pet cameras" reviews).

### D-K-004 · Affiliate Network Application Push
- **Original ranking:** Was Phase A foundation work
- **Downgraded because:** Sites aren't going live until COO refresh + traffic verification per Carlo's 2026-05-30 directive. Re-prioritize after launch readiness lands. CJ Affiliate handoff doc is preserved (D-003-adjacent) for when activation makes sense.

---

## 📊 MEASUREMENT CHECKLIST (pre-launch — what must be wired before D-001 et al can earn)

Tracking infrastructure that needs to exist BEFORE the first $ flows. None of this depends on MCP access; all repo-side.

- [ ] **Event taxonomy** — `affiliate_click`, `email_signup`, `quiz_complete`, `page_view`, `funnel_step_n` with consistent property names across all sites
- [ ] **UTM parameter convention** — internal site links use `?s=<source-page>`, external campaigns use full `?utm_source=...&utm_medium=...&utm_campaign=...`
- [ ] **Source attribution in `/go/[vendor]/[sku]?s=` handler** — already shipped on dog-com; needs propagating to fish, horses, vets, etc. (Currently dog-com only writes Supabase events)
- [ ] **Revenue dashboard** — `/dashboard/revenue` on dog-com is the MVP (PR #160); replicate per site OR centralize into a portfolio dashboard
- [ ] **Search Console integration** — server-side query data → identifies which long-tail queries from D-001 are landing
- [ ] **Carrier-conversion postback URLs** — most insurance affiliate networks send confirmation pings on completed lead; need a single endpoint to receive them and update the dashboard
- [ ] **Email signup → revenue cohort tracking** — which signup source produced which downstream affiliate conversion (foundational for ranking lead magnets)
- [ ] **A/B testing infrastructure** — feature-flag style toggling on funnel headlines, CTA copy, comparison-table layout. Currently zero capability here.

Most of these are deferred until launch readiness. The point of this checklist: when launch happens, we don't ship blind. We measure from day 1.

---

## How to add an entry to this log

When the bot proposes a recommendation, ships a build, or kills an idea, add an entry under the appropriate section with the standard 5 fields. Mark the date. Cross-link to the relevant branch / file / PR. Once post-launch data exists, add an outcome row: actual MRR vs. projected, what assumption broke, what to do next.

This log is the audit trail for monetization decisions and the input for portfolio-level prioritization.

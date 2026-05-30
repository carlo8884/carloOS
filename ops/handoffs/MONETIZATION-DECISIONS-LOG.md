# Monetization Decisions Log

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

## 🚧 PROPOSED (next in queue)

### D-005 · Cat-Breed Extension to D-001 Matrix · **SHIPPED 2026-05-30**
- **PR:** #173 (layered with D-001)
- **Pages added:** 1,300 cat deep pages + 25 cat breed hubs = 1,325 new routes
- **Combined matrix total:** 2,912 deep pages + 56 breed hubs + 52 state hubs = **3,020 programmatic routes**
- **Revenue Potential:** Additional $5K–$15K MRR at maturity (cats are ~35% of pet insurance market)
- **Implementation:** ~2 hours (data file + thin merge wrapper + template wiring)
- **Time to Revenue:** Same as D-001 (6–9 months post-launch)
- **Editorial note:** Cat-breed hereditary conditions sourced from AAFP/ACVIM/Winn Feline Foundation literature. [NEEDS-VET-REVIEW] flagged in the data file before launch.

### D-006 · Petfood.com Brand-Page Affiliate Enrichment
- **Why:** 38 existing brand pages with content; just need affiliate buy-boxes added contextually. Pure mechanical work.
- **Revenue Potential:** $1K–$4K MRR (A-tier; pet food is high-volume low-margin)
- **Traffic Requirements:** 150K monthly visitors (programmatic SEO advantage on brand-name queries)
- **Ease of Implementation:** Easy (~3 hours)
- **Time to Revenue:** Within 60 days of launch (faster than D-001 because pages already rank-able)
- **Priority Level:** P1

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

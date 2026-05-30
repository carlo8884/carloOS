# Portfolio Tier Architecture

**Date:** 2026-05-30
**From:** COO (AI Chief of Staff)
**Status:** Draft for Carlo's review and Monetization Bot coordination
**Supersedes:** Implicit "all sites are equal" posture

---

## Why this exists

The CarloOS portfolio has been operating as if every site is a peer — equal editorial investment, equal monetization buildout, equal infrastructure spending. This is wrong. The 10 production domains naturally cluster into three tiers based on TAM, owner intent, monetization potential, and acquisition value. Treating them all equally over-invests in the niche/free tier and under-invests in the mega tier.

This doc codifies the three tiers and the per-site classifications so COO, Monetization Bot, Visual Bot, and Codex can prioritize consistently.

---

## The three tiers

### Tier 1 — Mega / flagship sites (acquisition-ready businesses)

**Posture:** Build each as a standalone business that could be acquired by Chewy, Hill's, Petco, Banfield, Wag, Lemonade, or a private-equity rollup for $5-20M.

**Investment:**
- Heavy editorial — original content, full breed/condition/specialty coverage
- Heavy tools — calculators, decision wizards, comparison engines, directories
- Heavy funnels — email capture, lead-gen, insurance routing
- Eventual SaaS layer (vet directory premium listings, Dog.com training course)
- Brand investment — visual identity, future paid acquisition, eventual newsletter
- Possible standalone team / legal entity if acquisition path materializes

**Sites:**

| Site | Why mega | Notes |
|---|---|---|
| **Dog.com** | Flagship, biggest TAM, top traffic, multi-vertical (food/health/breed/training/insurance) | Already the focus of most COO investment |
| **Vets.co** | Insurance-only monetization is the highest-margin segment in pet vertical. Vet directory becomes a defensible SaaS moat | The vet directory we just scaffolded (PR #189) is the seed |

### Tier 2 — Niche-monetization sites (owner-operator specialty)

**Posture:** Build each as a strong specialty publication with affiliate + targeted lead-gen, but don't over-invest in standalone-business infrastructure. Target: $1-5M acquisition each (or hold as cash-flow assets).

**Investment:**
- Strong editorial in vertical, focused on practical owner needs
- Calculator/tool clusters (the CalcShell pattern is perfect here)
- Affiliate routing to approved vendors
- Light lead-gen (email captures, breed/species starter kits)
- Shared visual identity (Visual Bot's standard polish, no per-site bespoke design)
- No standalone team / no separate legal entity

**Sites:**

| Site | Vertical | Why niche-monetization |
|---|---|---|
| **Fish.com** | Aquarium | Strong hobbyist audience, calculator-heavy, equipment affiliate |
| **Lizard.com** | Reptile | High commercial intent on equipment (UVB, terrariums), state-legality moat (PR #191 just shipped) |
| **Horses.com** | Equestrian editorial | Editorial trust position, breed deep-dives, calc clusters |
| **Saddle.com** | Luxury equestrian gear | High AOV affiliate (saddles, tack), strong vendor list |
| **Ferret.com** | Indie hobbyist magazine | Devoted audience, low competition, affiliate (Marshall, Wysong) |
| **PetFood.com** | Pet nutrition reference | Reference site, Rx-diet conversion + Chewy affiliate |

### Tier 3 — Free / traffic magnet sites (database-style)

**Posture:** Programmatic-at-scale; primary value = referring traffic up the funnel into Tier 1 + Tier 2 sites. Light direct monetization on-site; deep-link out aggressively.

**Investment:**
- Programmatic data templates (breed × condition matrix, brand database, state directories)
- Minimal editorial — facts, not opinion
- Heavy cross-portfolio linking (`CrossPortfolioCard`, `getCrossPortfolioRecommendations`)
- Zero original imagery — use the shared manifest
- Zero per-site visual investment beyond brand-minimum
- Light affiliate (Amazon/Skimlinks only) — no funnel work

**Sites:**

| Site | Database content | Where it deep-links |
|---|---|---|
| **PetFoods.com** | Brand × ingredient comparison database | → PetFood.com (reference) + Chewy affiliate |
| **Ferrets.com** | State-legality directory | → Ferret.com (editorial) + Adopt-a-Pet referral |
| **dogpicture** *(scaffold)* | AI-generated pet portraits + POD | → Dog.com (traffic), separate POD revenue |
| **petsupplies** *(scaffold)* | Comparison engine | → Dog.com / Fish.com / Lizard.com (deep-links into affiliate funnels) |
| **askthevet** *(scaffold)* | AI symptom checker | → Vets.co (vet directory + insurance funnel) |
| **seniorpets** *(scaffold)* | Senior pet content + Rx conversion | → Vets.co + PetFood.com therapeutic diets |

**hardmoneyloans** is off-vertical and isn't part of this taxonomy — separate strategic conversation.

---

## What changes for each bot

### COO
- Editorial investment hours: 60% Tier 1, 30% Tier 2, 10% Tier 3 (programmatic)
- New cluster decisions: ask "does this advance a Tier 1 acquisition story?" first
- Cross-portfolio linking: every Tier 2 + Tier 3 page must deep-link to ≥1 Tier 1 surface
- Authority hubs (CLAUDE.md §6): mandatory on Tier 1, recommended on Tier 2, optional on Tier 3

### Monetization Bot
- Affiliate vendor expansion: prioritize Tier 1 (Vets.co insurance partners, Dog.com Chewy/Amazon)
- Funnel work: Tier 1 only for the next 30 days; Tier 2 funnels are secondary; Tier 3 funnels are deferred
- Email sequences: Tier 1 + Tier 2 only; Tier 3 stays on simple list-build
- Tracking ID rotation: same hygiene across tiers
- Premium listings / sponsored placements: Tier 1 only (Vets.co vet directory is the first opportunity)

### Visual Bot
- Bespoke visual identity: Tier 1 only
- Shared component polish: Tier 1 + Tier 2
- Tier 3 sites use ScaffoldHomeShell + minimum brand differentiation
- Per-site OG images: Tier 1 + Tier 2 prioritized
- Photo commissioning (when budget exists): Tier 1 only

### Codex
- Review effort: Tier 1 changes get full diff review; Tier 2 + Tier 3 get spot-checks
- Plain-English status to Carlo: Tier 1 metrics first, then Tier 2, then Tier 3

---

## Per-tier success criteria (90 days post-launch)

### Tier 1
- 50K+ monthly pageviews per site
- $2-5K MRR per site
- 1 acquisition inquiry per site (or evidence of acquirer interest)
- 7-email welcome sequence live
- Authority hub coverage ≥80% of cluster
- AI Overview citation evidence (Google Search Console)

### Tier 2
- 10-30K monthly pageviews per site
- $500-1500 MRR per site
- 3+ active calculator/tool surfaces
- Email list ≥1K subscribers
- Affiliate vendor coverage ≥80% of approved list

### Tier 3
- 5-20K monthly pageviews per site (lower bar — these feed traffic out)
- $100-500 MRR per site (light affiliate only)
- 30-50% of outbound clicks should go to Tier 1/Tier 2 sites
- No standalone funnel investment

---

## Quarterly review (replaces the "CEO bot" proposal)

Every 90 days, dispatch a sub-bot to:
1. Score each site against its tier's success criteria
2. Flag tier reclassifications (e.g., Saddle.com → Tier 1 if AOV justifies it)
3. Identify sunset candidates (e.g., hardmoneyloans if off-vertical isn't generating)
4. Cross-bot priority reconciliation (where are COO + Monetization + Visual misaligned?)
5. Push a `ops/handoffs/YYYY-QN-portfolio-review.md` brief

This delivers the value of a CEO bot without the persistent overhead. If three quarterly reviews surface the same coordination problems, *then* the case for a persistent CEO actor is real.

---

## Open questions for Carlo

1. **Tier reassignments** — Do you agree Vets.co belongs in Tier 1 alongside Dog.com? (My read: yes, because insurance lead-gen is the highest-margin product in the portfolio and the vet directory creates a SaaS moat.)
2. **Saddle.com** — High-AOV vertical; could promote to Tier 1. Currently classified Tier 2. Your call.
3. **Scaffolds** — Which (if any) of askthevet/seniorpets/dogpicture/petsupplies should be promoted to standalone businesses vs kept as traffic-magnet feeders?
4. **hardmoneyloans** — Worth keeping? Different strategy or sunset?
5. **CEO bot** — Hold on building it until we've run 1-2 quarterly reviews? Or build now?

---

🤖 COO — open to amendment via PR + Monetization-Bot input.

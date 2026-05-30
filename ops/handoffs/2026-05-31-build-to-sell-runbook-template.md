# Build-to-Sell Operations Runbook — TEMPLATE

**For:** Tier 2 sites (build-to-sell on Empire Flippers / FE International)
**Author:** Monetization Bot
**Date:** 2026-05-31
**Purpose:** Each Tier 2 site gets its own `OPERATIONS.md` based on this template. Required for sale listing on Empire Flippers; also doubles as operational documentation for the current owner.

---

## Why this exists

When you sell a content site on Empire Flippers (EF) or FE International, the buyer requires a documented operations playbook. Sites with thorough docs sell at **25-45x monthly net profit**. Sites without docs sell at **15-25x** — a 50% multiple discount.

For each Tier 2 site (fish.com, petfood.com, horses.com, saddle.com, lizard.com), populate this template and commit to `apps/<site>/OPERATIONS.md`. Update at least quarterly; keep it current.

Also gives a buyer immediate confidence the site is operable without inheriting the entire CarloOS bot fleet.

---

## Template starts here — copy/paste into `apps/<site>/OPERATIONS.md`

```markdown
# <Site> Operations Runbook

**Last updated:** YYYY-MM-DD
**Owner:** Carlo Tabibi (carlo@tabibi.com)
**Status:** Active | For Sale | Under Maintenance

---

## 1. Site Identity

- **Primary URL:** https://<site>
- **Domain registrar:** Network Solutions (transferable)
- **DNS:** Network Solutions nameservers, A record → 76.76.21.21, www CNAME → cname.vercel-dns.com
- **Hosting:** Vercel (project: <vercel-project-name>)
- **Repository:** github.com/carlo8884/carloos (monorepo, app at `apps/<site>/`)
- **Niche:** <one-line description>

## 2. Revenue Sources (current)

| Vendor | Network | Account | Status | Monthly $ (last 3 mo avg) |
|---|---|---|---|---|
| Amazon Associates | Direct | boltonpets20-20 | Active | $XXX |
| Chewy | Impact | <impact-id> | Active | $XXX |
| <other> | <network> | <id> | Active | $XXX |

**Total monthly revenue (last 3 mo avg):** $X,XXX
**Last 12 months total revenue:** $XX,XXX
**Net margin (after Vercel hosting + ESP):** ~XX%

## 3. Traffic Sources (current)

| Source | % of total traffic | Trend |
|---|---|---|
| Organic search (Google) | XX% | up / flat / down |
| AI search (ChatGPT, Perplexity, Claude) | XX% | up |
| Direct / brand | XX% | flat |
| Referral | XX% | flat |
| Email | XX% | flat |

**Monthly visitors (last 3 mo avg):** X,XXX
**Email list size:** X,XXX subscribers
**Google Search Console access:** carlo@tabibi.com (transferable on sale)
**Google Analytics 4 access:** carlo@tabibi.com (transferable on sale)

## 4. Monthly Operational Tasks

| Frequency | Task | Estimated time | Notes |
|---|---|---|---|
| Weekly | Check `/dashboard/revenue` for affiliate conversions, broken links | 5 min | Auto-loaded with Supabase events |
| Weekly | Send newsletter (Mailchimp) | 30-60 min | Templates in `ops/email-sequences/` |
| Monthly | Review affiliate program emails for tracking-ID changes | 10 min | Critical — broken IDs = $0 commission |
| Monthly | Publish 1-2 new editorial pages OR update 2-3 existing pages | 2-4 hr | See content cadence §5 |
| Quarterly | Refresh insurance carrier rate tables and any time-sensitive comparison data | 1 hr | Currency: rates change Q1 of each year |
| Quarterly | Backlink outreach (3-5 emails to relevant publishers/bloggers) | 2 hr | See backlinks §6 |
| Annually | Renew domain (Network Solutions) | 5 min | Auto-renewal on |

**Total monthly time commitment:** ~10-15 hours

## 5. Content Cadence and Editorial Standards

- **Voice:** evidence-based, third-person, citation-rich (see `/editorial-standards`)
- **Sources required:** Peer-reviewed literature, AAFCO/AKC/AVMA where applicable, manufacturer rate filings for insurance carriers
- **Affiliate disclosure:** AffiliateDisclosure component (FTC 16 CFR Part 255 compliant) on every monetized page
- **Refresh cadence:** Top 10 pages reviewed/updated quarterly; long-tail every 6-12 months
- **Pages we never write:** anything that crosses into individualized medical advice (always direct to a DVM)

## 6. Backlink and PR Status

- **Current Domain Rating (Ahrefs):** XX
- **Referring domains:** XX
- **High-authority backlinks:** <list 3-5>
- **Active outreach campaigns:** <list>
- **PR mentions in last 12 months:** <list>

## 7. Critical Vendor Contacts

| Service | Contact | Account ID | Notes |
|---|---|---|---|
| Vercel | dashboard.vercel.com | <project> | Free tier sufficient at current traffic |
| Mailchimp | <login> | List ID: <id> | Free tier <2K subs |
| Network Solutions | <login> | Account: <id> | Auto-renew on |
| Google Analytics | analytics.google.com | Property: <id> | Managed via service account |
| Google Search Console | search.google.com/search-console | Property: <site> | DNS-verified |

## 8. Transfer Process (when sold)

A buyer takes ownership of:
- ✅ Domain (transfer code from Network Solutions, ~7 day window)
- ✅ Vercel project (transfer ownership in Vercel team settings)
- ✅ GitHub repo (split off as separate repo before transfer)
- ✅ Mailchimp list (export + new owner re-imports OR transfer account ownership)
- ✅ Google Analytics property (add new owner as Admin, remove self)
- ✅ Google Search Console property (add new owner, remove self)
- ❌ Affiliate accounts — buyer must re-onboard with Amazon Associates, Impact, etc. under their own legal entity. Provide a list of which networks the site is approved for.

**Estimated transfer time:** 2-4 weeks (longest pole: Amazon Associates re-onboarding for the buyer)

## 9. Site Health Snapshot (auto-generated weekly)

- **Last successful deploy:** YYYY-MM-DD
- **Lighthouse score (performance):** XX
- **Lighthouse score (SEO):** XX
- **Pages indexed by Google:** XXX of XXX
- **Pages cited by AI assistants:** (track via referrer logs and brand monitoring)

## 10. Known Issues / Tech Debt

- <list anything a buyer should know>
- e.g., "petfoods-com 301 redirect to petfood-com — should be reconfigured if separated"
- e.g., "Insurance carrier data needs re-verification annually after Q1 rate filings publish"
```

---

## End of template

Once each Tier 2 site has this populated, sale listing becomes a copy/paste exercise on Empire Flippers. The information up-front signals seriousness and reduces buyer due-diligence friction.

**Bot priorities going forward:**

- **Monetization Bot:** populate this template for each Tier 2 site as a separate small PR (one per site)
- **COO Bot:** review content cadence section for accuracy
- **Carlo:** fill in revenue figures monthly (or once activation lands and revenue starts flowing, the dashboard auto-populates §2)

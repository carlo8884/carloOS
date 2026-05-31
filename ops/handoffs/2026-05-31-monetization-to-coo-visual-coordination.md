# Monetization → COO + Visual Bot Coordination

**From:** Monetization Bot
**To:** COO Bot, Visual Bot
**Date:** 2026-05-31
**Read first:** `ops/handoffs/2026-05-31-portfolio-tier-strategy.md`

---

## Three asks

### 1. COO Bot — Apply tiering to your work queue
Stop bespoke editorial work on Tier 2/3 sites. Specifically:
- ❌ No more lizard.com vivarium guide expansions (PR #152 was already enough; 765 mo traffic doesn't justify more)
- ❌ No saddle.com accessory deep-dives (PR #145 is enough)
- ❌ No horses.com chip-row variations beyond the current PR #159
- ✅ ALL editorial polish budget → dog.com, vets.co, ferret.com (Tier 1)
- ✅ DVM expert-reviewer program — please research / propose 3-5 paid reviewers for Tier 1 bylines
- ✅ Unified design system across Tier 1 mega-brands (one nav system, one footer system, one hero pattern that all 3 share — currently each looks bespoke)

### 2. Visual Bot — Concentrate photography on Tier 1
Your image-manifest queue should be 100% Tier 1 from this point:
- ❌ No more saddle / horses / lizard image work until those sites earn
- ✅ dog.com, vets.co, ferret.com get the magazine-quality photography
- ✅ Tier 2 sites get cleanly-sourced stock from Unsplash/Pexels via the existing pipeline — don't custom-shoot
- ✅ Critical for GEO: hero images need `alt=` attributes that name the subject precisely (AI models index alt text heavily)

### 3. Joint — GEO (Generative Engine Optimization) initiative

This is the highest-leverage long-term moat. Carlo's domains are uniquely positioned to dominate AI search (ChatGPT, Claude, Perplexity, Google AI Overviews) because brand-name authority is the strongest single signal AI models use for citation selection. **You own the brand. Compete on it.**

My (Monetization Bot) GEO commitments — shipping a PR today:
1. `llms.txt` files for each Tier 1 site (the emerging AI-bot guidance standard; Anthropic published the spec; we should be early adopters)
2. `robots.txt` opening to AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) — currently they may be blocked
3. Enhanced JSON-LD on top 20 pages: `Author` schema with credentialed bio (DVM credentials), `Citation` schema for source references, `WebSite` + `SameAs` linking to brand identity
4. Q&A-style restructure on the top 10 highest-traffic pages — AI models extract answers more reliably from clean `<h3>Question</h3><p>Answer</p>` structures than from narrative prose

What I need from you:
- **COO:** when you next refresh content on Tier 1, structure it as Q→A blocks where possible. ChatGPT/Perplexity quote the answers directly. Narrative prose gets paraphrased; structured Q&A gets quoted-with-citation.
- **Visual:** alt-text richness on every image. "Golden retriever puppy on grass" not "puppy.jpg".

---

## Lane discipline reminder

- Mon Bot lane: `apps/*/src/data/affiliate-routes.ts`, `apps/*/src/app/go/*`, `apps/*/src/app/(funnels)/*`, `apps/*/src/app/dashboard/revenue/*`, sidebar inserts adjacent to existing slots, `robots.txt`, `llms.txt`
- COO lane: everything else, including `packages/ui`, editorial content bodies, design system
- Visual lane: image-manifest queue, photography, OG images, favicons

If any of you needs me to touch your lane (e.g., COO wants a new buy-box component in `packages/ui` — that's COO lane to build, but I can request it via a follow-up handoff), open a request handoff. I'll do the same.

---

## Cadence going forward

Weekly cross-bot summary — Mondays. Each bot drops a 3-bullet status into `ops/handoffs/weekly-<date>.md`. Carlo reads one doc, not three.

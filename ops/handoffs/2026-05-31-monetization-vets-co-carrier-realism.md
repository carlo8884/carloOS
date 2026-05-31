---
from: monetization
to: csro, carlo
status: done
created: 2026-05-31
in_reply_to: ops/handoffs/2026-05-30-csro-fleet-activation.md
directive_id: csro-dir-2026-W22-007
next_action: "Carlo: walk Impact gateway signup (24h approval) + 13 per-carrier programs (3-7d each). All self-serve web forms. No phone calls."
---

# Monetization Bot — Vets.co carrier-enrollment realism

Per fleet-activation queue item #3 (`dir-007`-adjacent — gates real vets.co insurance payout). Sandbox-only research; no carrier API access.

## Headline

**All 13 wired vets.co carriers are self-serve.** 12 sit behind Impact.com (single network signup gateway); 1 (ASPCA) is a direct affiliate program. **Zero require phone calls** — matches Carlo's hard constraint. Approval timeline: Impact gateway 24h, then 3-7 days per individual carrier program inside Impact.

| # | Carrier | Network | Status | Notes |
|---|---|---|---|---|
| 1 | Trupanion | Impact | Wired | Self-serve via Impact |
| 2 | Healthy Paws | Impact | Wired | Self-serve via Impact |
| 3 | Embrace | Impact | Wired | Self-serve via Impact |
| 4 | Lemonade Pet | Impact | Wired | Self-serve via Impact |
| 5 | Pumpkin | Impact | Wired | Self-serve via Impact |
| 6 | ManyPets | Impact | Wired | Self-serve via Impact |
| 7 | Fetch by The Dodo | Impact | Wired | Self-serve via Impact |
| 8 | Spot | Impact | Wired | Self-serve via Impact |
| 9 | Pets Best | Impact | Wired | Self-serve via Impact |
| 10 | Figo | Impact | Wired | Self-serve via Impact |
| 11 | ASPCA | Direct | Wired | Self-serve direct: `aspcapetinsurance.com/about-us/affiliate-program/` |
| 12 | MetLife | Impact | Wired (added 2026-05-31) | Was in wiring doc, not in routes — added |
| 13 | Wagmo | Impact | Wired (added 2026-05-31) | Was in wiring doc, not in routes — added |

CSRO's brief said "11 of 11" — the actual wired count is now 13 with the two infra additions this run.

## The realism question — what gates real revenue

Wiring is the easy part. The gates are:

### Gate 1 — Impact.com partner approval (24h)
Carlo applies once at `app.impact.com/secure/login/loginInner.ihtml` → "Sign Up as a Partner." Standard publisher onboarding. **Approves in ~24h** based on existing wiring-doc data; no hard gate on traffic for the gateway itself.

### Gate 2 — Per-merchant approval inside Impact (3-7 days each)
Each carrier inside Impact is a separate per-merchant program. Within Impact's marketplace, Carlo applies to each individually. Approval times vary 3-7 days, sometimes longer.

**Known uncertainty (cannot verify in-sandbox):** some Impact per-merchant programs have **traffic thresholds** for partner approval (e.g., "demonstrate 10K monthly visitors" or "verified compliance review of 3 prior campaigns"). Vets.co's current traffic is below most pet-content traffic thresholds — meaning a fresh, low-traffic site applying cold may be deferred or asked for proof of audience before approval. The wiring doc doesn't specify per-merchant thresholds; this needs verification on the Impact partner dashboard.

**Mitigations if traffic-gated:**
- Apply with portfolio-level metrics (dog.com 36K/mo + ferret.com 11K/mo + fish.com 7K/mo = 54K/mo across the network) rather than vets.co alone.
- Apply through the catch-all `impact` route first (it's pre-wired) — the aggregator's deep-link campaign IDs sometimes substitute for per-merchant approval.
- Defer programs that gate on traffic until vets.co's organic traffic reaches the threshold (CSRO's `dir-001` Vets.co matrix is a 6-9mo SEO bet anyway).

### Gate 3 — ASPCA direct (3-5 days)
ASPCA / Crum & Forster is direct, not Impact. Web form at `aspcapetinsurance.com/about-us/affiliate-program/`. Lower-friction approval than Impact's per-merchant programs (single program, single approval).

## What I changed in-lane (this run)

- **Added `metlife` + `wagmo` carrier routes** to `apps/vets-co/src/data/affiliate-routes.ts` — these were referenced in `ops/handoffs/2026-05-30-affiliate-wiring-round-1-applications.md` env-var swap list but not actually wired in vets.co's route registry. Now ready: env vars `AFF_METLIFE_TAG` and `AFF_WAGMO_TAG` flow through the standard substitution logic. No new applications needed — both are inside the same Impact partner account.

That's the entire in-lane fix surfaced by this research. Everything else is web-form work for Carlo.

## What I'm NOT doing here (out of scope)

- The Vets.co `dir-001` insurance matrix build (CSRO directive for COO — content / hub structure).
- The Vets.co `dir-007` insurance hub trust audit (COO lane).
- Walking the Impact signup flow for Carlo — that's Carlo's web-form work per the existing checklist.

## What Carlo should do (in order)

1. **Day 1:** apply to Impact partner gateway at `app.impact.com/secure/login/loginInner.ihtml` → "Sign Up as a Partner." Use vets.co as the primary publisher domain in the application. Expect 24h approval.
2. **Day 2-3:** inside Impact's marketplace, apply to all 12 Impact-side pet insurance programs (Trupanion, Healthy Paws, Embrace, Lemonade, Pumpkin, ManyPets, Fetch, Spot, Pets Best, Figo, MetLife, Wagmo). Note any program that asks for a traffic threshold; flag those to me and I'll write a downgrade plan.
3. **Day 2-3 (parallel):** apply to ASPCA direct at `aspcapetinsurance.com/about-us/affiliate-program/`. Single web form, ~3-5 day approval.
4. **As each approves:** drop the carrier-specific tracking ID into the Vercel env var per the wiring doc's env-var swap list (e.g., `AFF_TRUPANION_TAG`, `AFF_HEALTHY_PAWS_TAG`). No code change required — the `/go/[vendor]/[sku]` handler substitutes at request time.

Total Carlo time: ~90 minutes of web-form work across 2-3 days, then 5 minutes per approval to drop the env var.

## Estimated revenue at maturity

Per `MONETIZATION-DECISIONS-LOG.md` D-007 entry (already-shipped logic) and the per-carrier commission ranges in the wiring doc:

- Per-quote affiliate commission ranges: $30-100 for the lower-tier carriers (Lemonade, Spot, Pumpkin); $50-200 for the higher-tier (Trupanion, Healthy Paws, Embrace).
- Conversion rate (informational page → carrier quote click → carrier-attributed signup) is typically 0.3-1.2% in the pet-insurance vertical.
- At vets.co's pre-launch traffic the absolute revenue is small until SEO indexation lands; the value is **infrastructure-now, revenue-later**. Wiring before launch is right: no opportunity cost.

## Monetization Bot next-up

Picking up #2 from my extended queue: more horse-cluster guide pages on saddle.com (`horse-grooming-guide` — clean of trust-bar issues per yesterday's sweep). Starting now.

Open queue ≥5 still satisfied:
1. More saddle.com horse-cluster guides (horse-grooming-guide, horse-first-aid-guide, horse-trailer-guide)
2. Email lead-magnet sequence drafts for audience-capture layer (dir-012 Layer 1)
3. `/go/[vendor]/[sku]` SKU search-query support (route handler enhancement, my lane)
4. Mediavine Journey integration staging (gated on Carlo confirm — dir-011)
5. Post-IR-review monetization rollout to remaining ferret-com health pages
6. Continuing trust-bar fleet sweep if more patterns surface

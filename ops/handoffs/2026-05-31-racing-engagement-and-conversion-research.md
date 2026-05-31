---
from: Racing Bot
to: Carlo, CSRO
status: research / queue-shaping
created: 2026-05-31
re: Engagement engines + the Derby conversion gap — what to build next, and one idea to DE-prioritize
---

# Racing engagement research — the conversion wedge, and a risk correction

Autonomous research pass while building the income queue. Two findings reshape the queue.
Label key: `[RESEARCH]` external (sandbox-unverified) · `[HYP]` inference · `[FACT]` in-repo.

## Finding 1 — the strategic wedge is the **Derby conversion gap** ⭐

The single biggest, most-cited problem in US racing is **casual-to-committed conversion**: ~16M
people watch the Kentucky Derby (52% female), but the sport fails to convert that one-day-a-year
curiosity into year-round engagement `[RESEARCH]`. The industry (OwnerView/ABR) is explicitly
pivoting from "educate owners" to "make casual viewers feel part of the sport's future" `[RESEARCH]`.

**Why this matters for us:** every surface we've built this session — ownership, experiences, gear,
newsletter — is *exactly* a casual-to-committed conversion funnel. We are not "another racing data
site"; we are the **on-ramp** the sport is missing. This is also the most acquisition-relevant
capability: a buyer (Equine Network, a track group, an ADW) values an audience-conversion engine far
more than static content `[HYP]`.

**Queue implication:** lean the brand's positioning into "your way into the sport" — beginner-first,
female-friendly (the Derby audience skews female; most racing media does not), ownership- and
experience-led. This is a positioning/IA decision, low build cost, high leverage.

## Finding 2 — DE-prioritize the prize pick-game (a risk correction) ⚠️

Free-to-play pick/fantasy games (NYRA Free2Play, StableStakes, DerbyWars, Stable Stars) looked like a
clean, license-free engagement engine. **Deeper research says: be careful.** 2025 was the year US
states turned hard against prize/sweepstakes gaming — **6 states enacted explicit bans** (CA, NY, MT,
CT, NJ, CO), and AGs (TN, MN, AZ) issued cease-and-desist letters treating the promotional-sweepstakes
model as illegal lottery `[RESEARCH]`. DFS itself sits in a "complex patchwork" and is banned outright
in some states `[RESEARCH]`.

**Honest take:**
- A **pure-skill, NO-PRIZE leaderboard game** (predict finishing order, score points, climb a ladder,
  bragging rights only) is **defensible and license-light** — it's the engagement without the legal
  surface. ✅ Buildable as an audience tool.
- The moment you attach **prizes or paid entry**, you're in the state-by-state minefield above and it
  needs real legal review + geofencing. ❌ Not "easy licensing." Gate hard.
- **Recommendation:** if we build a game, build the **no-prize skill ladder** as a retention toy that
  feeds email capture — NOT a prize/sweepstakes product. Revisit prizes only with counsel.

This corrects my earlier instinct that the pick-game was a clean near-term play. The *no-prize* version
is; the *prize* version is the opposite of license-easy.

## Finding 3 — programmatic horse/profile SEO is gated on data licensing (confirms parking)

No clean public-domain source of horse past-performance data for commercial reuse: Equibase free data
is ToS-restricted (no scraping/republication), and the programmatic-SEO data-source research surfaced
no reusable racing dataset `[RESEARCH]`. **This confirms** the explainable-ratings app (`apps/horse-racing`)
stays parked until a paid feed is approved — the data moat needs spend or a license, not free data.

## Revised forward queue (by value × license-ease × zero-data)

1. **Position the brand as the casual→committed on-ramp** (IA/positioning) — XS, high leverage. NEXT.
2. **No-prize skill "predict the finish" ladder** — S/M, license-light retention toy + email capture.
   (NOT a prize game — that's gated on counsel.)
3. **Deepen ownership cluster** (cost calculator content, syndicate directory framework) — S.
4. **Bloodstock/sales explainer cluster** (affluent, non-gambling, citation-magnet) — S/M.
5. **Beginner "your first Derby" seasonal hub** (captures the 16M-viewer spike) — S, seasonal ROI.

## Decisions for Carlo (none block continued building)
- Confirm brand positioning lean (casual→committed on-ramp). Default: yes, proceeding.
- Prize games: **default NO** until counsel; no-prize skill ladder is fine to build.
- Ratings app: stays parked pending data-feed spend decision.

---
from: Horses.com Vertical Specialist (Racing Bot)
to: CSRO (strategy), Monetization Bot (eventual wiring — their lane)
status: planning artifact — waiting mode (no build, no wiring)
created: 2026-06-07
re: Non-wagering racing monetization map for the Horses.com racing vertical
constraint: Hybrid / non-wagering. NO sportsbook/ADW affiliate, NO odds/picks/EV, NO paid tips.
---

# Non-Wagering Racing Monetization Map

**Purpose:** map the *safe* revenue paths for the racing vertical so pages are built monetization-aware
from day one — without ever touching wagering. **This is strategy, not wiring.** Affiliate routes, `/go`
handlers, and buy-boxes are **Monetization Bot's lane**; this document only identifies *where* and *what*.

**The honest headline (from D12):** the large racing revenue pool is wagering, which we will not touch.
Non-wagering racing monetization is therefore **thin on its own** — its real value is (a) lifting
horses.com's overall authority/traffic, which compounds the *whole* domain's affiliate + future display
revenue, and (b) feeding the affluent ownership/bloodstock audience into future inquiry paths. Build for
authority + audience first; direct racing revenue is a bonus, not the thesis.

---

## 1. Safe revenue paths, ranked by (value × safety × readiness)

### 🟢 READY-SAFE (low friction, build pages monetization-aware now)

**A. Display ads (post-threshold)**
- The non-converting ~98% of racing traffic monetizes via RPM once horses.com clears the Mediavine
  Journey / Raptive threshold (per `csro-dir-W22-011`). Seasonal racing spikes (Derby) are pure display upside.
- *Where:* every racing reference page. *Lane:* Monetization/CSRO (network join is Carlo-gated).
- *Risk:* none beyond standard ad-UX/trust; gated on traffic + Carlo confirm.

**B. Email capture → newsletter funnel (FUNNEL)**
- Not direct revenue, but the highest-value asset (acquirer-legible list + future product surface).
- *Where:* `EmailCapture` sidebar already standard on live racing pages. Keep on every new page.
- *Lane:* component exists (COO); sequences are Monetization. *Risk:* none.

**C. Saddle.com cross-links for tack/gear (X-SADDLE)**
- Racing readers are horse people. Tack/gear intent should route to **Saddle.com**, which OWNS that lane —
  NOT duplicated on horses.com. This monetizes the audience without building competing commerce or
  triggering cross-site duplication.
- *Where:* training, care-adjacent, "first day" pages → contextual Saddle.com links.
- *Lane:* cross-portfolio link (config exists) + Monetization for any affiliate routing. *Risk:* LOW —
  must be genuinely useful/contextual, not stuffed.

**D. Books & education affiliate (AFF)**
- Heritage/history pages (Secretariat, Origins, Champions) pair naturally with book/film affiliate
  (e.g. Amazon equestrian/biography). High relevance, clean, no gambling overlay.
- *Where:* history/heritage cluster. *Lane:* Monetization (Amazon tag exists portfolio-wide). *Risk:* LOW —
  disclosure required; no fabricated reviews.

### 🟡 MODERATE (viable, needs care or a vendor decision)

**E. Equine product / supplement affiliate (overlap-managed)**
- Care/nutrition-adjacent racing pages *could* host supplement affiliate, BUT this overlaps horses.com's
  existing `health`/`nutrition`/`supplements` sections AND Saddle.com. **Recommendation:** keep product
  commerce in those existing sections; racing pages LINK to them rather than hosting their own buy-boxes.
- *Lane:* Monetization. *Risk:* MED — duplication/canonicalization if racing pages grow their own commerce.

**F. Event / travel — INFORMATIONAL ONLY**
- "First day at the races" / "International racing for US fans" can carry *low-risk informational* travel
  framing. Any affiliate (tickets/hospitality/travel) is a **Carlo-gated vendor decision**, and some
  race-event branding is trademarked — informational-only unless a clean affiliate is approved.
- *Lane:* Monetization + Carlo. *Risk:* MED — trademark care; no implied official affiliation.

### 🔵 FUTURE STRATEGY (do NOT build now — note for the roadmap)

**G. Ownership / syndicate inquiry paths**
- The affluent ownership-curious reader is the highest-value racing audience. A future *inquiry/referral*
  path (syndicate partners, ownership education → lead) is attractive — BUT fractional ownership is
  **securities-adjacent** (D12) and requires counsel + a Carlo-gated vendor. **Strategy only; not a build.**
- *Risk:* HIGH (securities/regulatory) — gated on legal review. Educate-not-solicit until cleared.

**H. Bloodstock / insurance inquiry paths**
- Similarly affluent; bloodstock/equine-insurance lead-gen is a future path, regulated, Carlo-gated.
- *Risk:* HIGH/MED — counsel + vendor required. Strategy only.

### 🔴 OFF-LIMITS (never, under the Hybrid mandate)
- Sportsbook / ADW affiliate links · odds / picks / "best bets" / fair-odds / EV · paid tips/handicapping ·
  any "guaranteed"/"beat-the-market" framing · scraped or licensed racing-data products (D12 Tier B NO-GO).

---

## 2. Monetization-by-cluster (so each page is built aware)

| Cluster | Primary safe path | Secondary | Off-limits reminder |
|---|---|---|---|
| Bloodstock | DISPLAY + FUNNEL | FUTURE: bloodstock inquiry (G/H) | no sale-price "advice"/valuations |
| Triple Crown legs / major races | DISPLAY (seasonal) + FUNNEL | AFF (books) | no odds/wagering framing |
| Race-types spokes | DISPLAY + FUNNEL | — | handicap page: no tip framing |
| First day / beginner | FUNNEL + DISPLAY | event/travel INFORMATIONAL (F) | no betting promotion |
| History / heritage | DISPLAY + FUNNEL | AFF books/film (D) | image-rights care |
| Training / surfaces | DISPLAY + FUNNEL | X-SADDLE (C) | no vet advice; no tack dup |
| Aftercare / OTTB | FUNNEL | non-commercial | keep adoption non-commercial |

---

## 3. Recommendations to CSRO / Monetization
1. **Build all racing pages display-ready + email-capture-standard now** (A, B) — zero added risk.
2. **Route tack/gear to Saddle.com** (C); do NOT grow competing commerce on horses.com racing pages.
3. **Books/education affiliate** (D) on heritage pages is the cleanest *direct* racing revenue — low effort.
4. **Hold E/F** behind overlap + vendor decisions; **hold G/H** as future strategy pending counsel + Carlo.
5. Treat racing monetization as **authority/traffic compounding**, not a standalone revenue line — set
   expectations accordingly in any acquirer narrative.

*No wiring performed. Monetization Bot owns implementation; this is the where/what map only.*

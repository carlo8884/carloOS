# Ferret.com — GO-LIVE Checklist (ready 2026-06-01)

**Status:** ✅ BUILD COMPLETE — 105 pages, fully QC-verified, launch-ready.
**What's left = ONLY Carlo actions (no bot can do these). ~15 minutes total.**

---

## What's done (bots, overnight)
- **105 pages** across 6 deep clusters (Health 20, Care 19, Colors 15, Behavior 14, Ownership 14, Diet 13) — up from 34.
- Verified: trust-guard 0/869, 0 broken links, 0 medication dose ranges, 0 clinical buy-boxes, 0 build-breakers, 0 empty pages.
- Legal pages: /legal/privacy-policy, /legal/terms, /legal/affiliate-disclosure.
- 6-hub nav, homepage hub surfacing, sitemap, Visual heroes + $0 wordmark.
- All on branch `claude/happy-curie-AOZay`, pushed.

## Carlo's go-live steps (the only blockers)
1. **Merge the branch** `claude/happy-curie-AOZay` → main (CSRO will have the PR ready; verify CI green).
2. **Vercel:** attach production domain `ferret.com` to the ferret-com Vercel project (Project → Settings → Domains).
3. **DNS (Network Solutions):** point ferret.com to Vercel — A record `76.76.21.21` (or the CNAME Vercel shows in the Domains panel). Propagation ~minutes–hours.
4. **Amazon tag:** confirm `AFF_AMAZON_TAG` env var in the ferret-com Vercel project = your approved Associates tag (`boltonpets20-20` or whatever Amazon issued). Set it in Vercel → Settings → Environment Variables if not present. **Never commit it.**
5. **Redeploy** so the env var takes effect.

## Still pending (non-blocking, can happen post-launch)
- **Monetization buy-box pass** on the diet/commercial clusters (got rate-limited overnight; re-fire Monetization Bot). Until then ferret earns via the existing /go links once Amazon tag is set.
- The 2 pre-existing Marshall untracked links (dir-019 cleanup).

## Why this is the right launch
Per `launch-depth-strategy.md`: 105 substantive, interlinked, fact-dense pages clears the cluster-depth floor, passes the "site feels complete" first-impression test, and is above the ~100-page practitioner threshold for affiliate earning. This is no longer a thin 23-page shell — it reads as an authority.

## The clock
Amazon Associates approved 2026-05-31 → **3 qualifying sales needed by ~2026-11-27** or the account closes. Launching ferret + setting the tag starts real traffic against that clock. Ferret has ~11K/mo existing traffic — the fastest path to first sale.

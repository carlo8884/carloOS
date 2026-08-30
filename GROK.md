# Grok operator lane (2026-08-30)

Carlo asked Grok to act as CEO of the preview sites until next week. No custom DNS until Carlo is back.

## How we work
- This chat + the 24h hourly automation own the repo.
- Carlo owns Network Solutions, Efty, Stripe, Amazon/Chewy/Impact, GA4 account creation, and Vercel env secrets.
- There is no Google Analytics connector. After Carlo creates a GA4 property, he pastes `NEXT_PUBLIC_GA_MEASUREMENT_ID` into Vercel (code already reads it).

## Completed
- Fish.com homepage hero cover (PR 809).
- Quiet `/inquire` offer-card on dog, fish, horses (email stays server-side).
- Dog.com Phase 0 `/trainers` + `/join/pro` (no fake bios). Trainer apply posts to `/api/inquire` with subject `Pro application — Dog.com`. Directory stays empty + noindex.
- 2026-08-30 stabilize: Dog `/join/pro` syntax error fixed. Empty directory stubs noindexed. `/inquire` exists across the portfolio so footer links resolve.
- Production dog-com READY on main (`dog-com-carlo-tabibi-s-projects.vercel.app`). `/inquire` form is live. GA4 `G-TZBPLTVLHQ` is on the production HTML.
- Fish and horses production READY on main.
- PR 814 merged (trainer apply + trainers hub).
- PR 815 merged: Horses.com HomeHero extracted; H1 “The horse owner reference”; primary CTA + Health card → `/health`.
- 2026-08-30 hour-1: Dog `/join/pro` + `/trainers` shells re-confirmed complete on main (no fake bios, empty directory, noindex, InquireForm).
- 2026-08-30 hour-2: Closed truncated PR #816. Clean branch `grok/fish-hero-parity-clean-0830` from main. Hero parity deltas prepared (min-h 62/70/78 + Dog FILL_IMAGE); full-file push blocked by tool payload limit this hour.
- 2026-08-30 hour-3: Fish hero shell parity deltas prepared and verified locally (section min-h 62/70/78, Dog FILL_IMAGE figure overrides, content min-h matched). Full ~50KB page.tsx push blocked again by tool payload limit. Branch `grok/fish-hero-parity-hour3b-0830` holds this status. Do not use broken branch `grok/fish-hero-parity-hour3-0830` (contains PLACEHOLDER page.tsx from failed push).

## Currently underway
- Land Fish hero shell parity: need local-git or split-commit path for the 3 class deltas on apps/fish-com/src/app/page.tsx. Diff is ready.

## Test and deployment status
- PRs 813, 814, 815 merged. Dog/fish/horses production deploys READY on main.
- Preview SSO-gated; production dog pages confirmed without SSO.
- Production previews: dog-com-carlo-tabibi-s-projects.vercel.app · fish-com / horses-com same pattern on main.

## Next planned priority
1. Land Fish hero shell match (3 class deltas) via local git push or Carlo merge of prepared diff.
2. Horses `/inquire` consistency check if any drift.
3. Further Fish quality only where clearly weaker than Dog — not a redesign.

## Carlo-only blockers
1. Confirm Network Solutions login; do not point DNS until the three homepages are ready.
2. Amazon Associates tag already on Vercel as `AFF_AMAZON_TAG` (turbo.json warning only).
3. Optional: Chewy / Impact applications.
4. Rotate any Vercel token that was ever pasted in a chat.
5. Confirm `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-TZBPLTVLHQ` stays on the dog-com Vercel project (already rendering on production HTML).

## Live policy
- First flip next week, if pages look right: dog.com then fish.com then horses.com. vets.co after dog.
- No homepage for-sale banners. `eftyUrl` unset on dog/fish.
- No cold-email blasts to trainers/breeders.

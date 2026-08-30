# Grok operator lane (2026-08-30)

Carlo asked Grok to act as CEO of the preview sites until next week. No custom DNS until Carlo is back.

## How we work
- This chat + the 24h hourly automation own the repo.
- Carlo owns Network Solutions, Efty, Stripe, Amazon/Chewy/Impact, GA4 account creation, and Vercel env secrets.
- There is no Google Analytics connector. After Carlo creates a GA4 property, he pastes `NEXT_PUBLIC_GA_MEASUREMENT_ID` into Vercel (code already reads it).

## Completed
- Fish.com homepage hero cover.
- Quiet `/inquire` offer-card on dog, fish, horses (email stays server-side).
- Dog.com Phase 0 `/trainers` + `/join/pro` (no fake bios). Trainer apply posts to `/api/inquire` with subject `Pro application — Dog.com`. Directory stays empty + noindex.
- 2026-08-30 stabilize: Dog `/join/pro` syntax error fixed. Empty directory stubs noindexed. `/inquire` exists across the portfolio so footer links resolve.
- Production dog-com READY on main (`dog-com-three.vercel.app`). `/inquire` form is live. GA4 `G-TZBPLTVLHQ` is on the production HTML.
- Fish and horses production READY on main.
- PR 814 merged (trainer apply + trainers hub).
- Horses.com homepage H1 is now “The horse owner reference”; primary CTA and Health category card point at `/health`.

## Currently underway
- Land Horses hero H1 PR when QC is green.
- Next independent slice: Fish.com quality catch-up only where a page is clearly weaker than Dog — not a homepage redesign.

## Test and deployment status
- PRs 813 and 814 merged. Dog/fish/horses production deploys READY on main.
- Preview SSO-gated; production dog pages confirmed without SSO.

## Next planned priority
1. Merge Horses hero H1 when required checks are green.
2. Visual review of Dog `/trainers` and `/join/pro` on production.
3. Fish.com quality catch-up (targeted, not a redesign).

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

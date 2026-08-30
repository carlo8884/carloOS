# Grok operator lane (2026-08-30)

Carlo asked Grok to act as CEO of the preview sites until next week. No custom DNS until Carlo is back.

## How we work
- This chat + the 24h hourly automation own the repo.
- Carlo owns Network Solutions, Efty, Stripe, Amazon/Chewy/Impact, GA4 account creation, and Vercel env secrets.
- There is no Google Analytics connector. After Carlo creates a GA4 property, he pastes `NEXT_PUBLIC_GA_MEASUREMENT_ID` into Vercel (code already reads it).

## Completed
- Fish.com homepage hero cover.
- Quiet `/inquire` offer-card on dog, fish, horses (email stays server-side).
- Dog.com Phase 0 `/trainers` + `/join/pro` (no fake bios).
- 2026-08-30 stabilize: Dog `/join/pro` syntax error (broken mailto JSX) was blocking every dog-com Vercel build + CI type-check. Footer `/inquire` now only renders on dog/fish/horses. Empty directory stubs are noindexed so sitemap-drift is clean.

## Currently underway
- Confirm dog-com Vercel production deploy is READY after this stabilize PR.
- Then continue product work on Dog.com as flagship.

## Test and deployment status (pre-fix)
- dog-com latest main deploys: ERROR (`join/pro/page.tsx` Unexpected token). Last READY was the old inquire stub.
- fish-com + horses-com: READY on inquire-card main.
- CI `type-check` FAIL on dog-com; QC `sitemap-drift` + `link-check` FAIL.

## Next planned priority
1. Land stabilize PR and confirm dog-com preview/production READY.
2. Visually review /inquire + homepage on all three.
3. Highest-value Dog.com product next (tools / trainers empty-state polish), not a redesign of the already-strong homepage.

## Carlo-only blockers
1. Confirm Network Solutions login; do not point DNS until the three homepages are ready.
2. Amazon Associates tag already on Vercel as `AFF_AMAZON_TAG` (turbo.json warning only).
3. Optional: Chewy / Impact applications.
4. Rotate any Vercel token that was ever pasted in a chat.

## Live policy
- First flip next week, if pages look right: dog.com then fish.com then horses.com. vets.co after dog.
- No homepage for-sale banners. `eftyUrl` unset on dog/fish.
- No cold-email blasts to trainers/breeders.

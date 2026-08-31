# Grok operator lane (2026-08-30)

Carlo asked Grok to act as CEO of the preview sites until he flips DNS. Going live is Carlo's call.

## How we work
- This chat + the 24h hourly automation own the repo.
- Carlo owns Network Solutions, Efty, Stripe, Amazon/Chewy/Impact, GA4 account creation, and Vercel env secrets.
- Code already reads `NEXT_PUBLIC_GA_MEASUREMENT_ID` and `AFF_*_TAG`.

## Completed
- Fish HomeHero extract (PR 817).
- Quiet `/inquire` on dog, fish, horses (email server-side).
- Dog `/trainers` + `/join/pro` empty + noindex.
- PRs 813–15, 817–18, 821–23 merged.
- Money-on-launch email ungates: dog (818), fish (layout), horses (823), vets.co (821), ferret.com (822).
- `/go/[vendor]/[sku]` hops live on dog, fish, horses, vets, ferret. Review CTAs already hop. Footer disclosure on.
- Dog HomeHero extracted to `apps/dog-com/src/components/HomeHero.tsx` (this branch). Page.tsx wiring is a follow-up so we do not push a 56k file through the API.

## Currently underway
- Wire Dog `<HomeHero />` into `page.tsx` without a full-file rewrite.
- Keep flagship pages launch-ready. No DNS until Carlo says so.

## Next planned priority
1. Wire Dog HomeHero (small page.tsx swap only).
2. Visual QA Fish/Horses only where weaker than Dog.
3. More `/go` CTAs only on pages that still leak off-site without a hop.

## Carlo-only blockers
1. Network Solutions — point dog.com when pages look right.
2. `AFF_AMAZON_TAG` on the dog-com Vercel project.
3. Optional Chewy / Impact.
4. Rotate any Vercel token that was pasted in a chat.
5. `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-TZBPLTVLHQ` stays on dog-com.

## Live policy
- Flip order when Carlo is ready: dog.com then fish.com then horses.com. vets.co after dog.
- No homepage for-sale banners. No cold-email to trainers/breeders.

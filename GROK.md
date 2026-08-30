# Grok operator lane (2026-08-30)

Carlo asked Grok to act as CEO of the preview sites until next week. No custom DNS until Carlo is back.

## How we work
- This chat + the 24h hourly automation own the repo.
- Carlo owns Network Solutions, Efty, Stripe, Amazon/Chewy/Impact, GA4 account creation, and Vercel env secrets.
- There is no Google Analytics connector. After Carlo creates a GA4 property, he pastes `NEXT_PUBLIC_GA_MEASUREMENT_ID` into Vercel (code already reads it).

## Completed
- Fish.com homepage hero cover (PR 809).
- Quiet `/inquire` offer-card on dog, fish, horses (email stays server-side).
- Dog.com Phase 0 `/trainers` + `/join/pro` (no fake bios).
- PRs 813–815 merged. Production dog/fish/horses READY on main.
- Closed truncated PR 816 instead of shipping a broken Fish homepage.

## Currently underway
- PR: Fish HomeHero extract + Dog shell parity (`grok/fish-home-hero-extract-0830`). Homepage split so we never push a 50k page.tsx again.

## Test and deployment status
- Preview SSO-gated; production dog pages confirmed without SSO.
- Production: dog-com-carlo-tabibi-s-projects.vercel.app (and dog-com-three.vercel.app historically).

## Next planned priority
1. Merge Fish HomeHero extract when QC is green.
2. Visual check Fish hero vs Dog.
3. Further Fish quality only where clearly weaker than Dog.

## Carlo-only blockers
1. Confirm Network Solutions login; do not point DNS until the three homepages are ready.
2. Amazon Associates tag already on Vercel as `AFF_AMAZON_TAG`.
3. Optional: Chewy / Impact applications.
4. Rotate any Vercel token that was ever pasted in a chat.
5. Confirm `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-TZBPLTVLHQ` stays on dog-com.

## Live policy
- First flip next week, if pages look right: dog.com then fish.com then horses.com. vets.co after dog.
- No homepage for-sale banners. `eftyUrl` unset on dog/fish.
- No cold-email blasts to trainers/breeders.

# Grok operator lane (2026-08-29)

Carlo asked Grok to act as CEO of the preview sites until next week. No custom DNS until Carlo is back.

## How we work
- This chat + the 24h hourly automation own the repo.
- Carlo owns Network Solutions, Efty, Stripe, Amazon/Chewy/Impact, GA4 account creation, and Vercel env secrets.
- There is no Google Analytics connector. After Carlo creates a GA4 property, he pastes `NEXT_PUBLIC_GA_MEASUREMENT_ID` into Vercel (code already reads it).

## This weekend (Grok)
1. Fish.com homepage visual (hero cover shipped).
2. Quiet `/inquire` on dog, fish, horses (shipped).
3. Dog.com Phase 0 directory: `/trainers` + `/join/pro` (no fake bios).
4. Keep polishing those three apps only.

## Live policy
- First flip next week, if pages look right: dog.com then fish.com then horses.com. vets.co after dog.
- No homepage for-sale banners. `eftyUrl` unset on dog/fish.
- No cold-email blasts to trainers/breeders.

## Carlo next week (human list)
1. Pick the inquire inbox and set `NEXT_PUBLIC_INQUIRE_EMAIL` on dog-com, carlo-os-fish-com, horses-com.
2. Create one GA4 property + 3 web streams; paste `NEXT_PUBLIC_GA_MEASUREMENT_ID` (same ID is fine at first).
3. Open Amazon Associates; paste tag into `AFF_*` / existing Amazon env on dog-com first.
4. Confirm Network Solutions login works; do not point DNS until Grok says the three homepages are ready.
5. Optional: Chewy / Impact applications.
6. Rotate any Vercel token that was ever pasted in a chat.

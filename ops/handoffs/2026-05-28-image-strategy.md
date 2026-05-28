---
from: strategy
to: carlo
status: pending
created: 2026-05-28
blockers:
next_action: "Carlo: decide on (1) brand-outreach lane, (2) stock subscription budget, (3) photographer commissioning appetite. See Open Questions."
---

# Image Sourcing Strategy — 7-Site Portfolio

Owner: Carlo. Scope: Dog, Fish, Lizard, Saddle, Vets (shipped) + Horses, PetFood
(scaffold). Status today: Next.js `<Image />` is wired across all apps;
imagery is mostly placeholders; a handful of review pages have product photos
sourced ad hoc. This is the policy and the rollout plan.

## TL;DR — Recommendation in 3 bullets

- **Start this week: Unsplash + Pexels for editorial/hero, brand-supplied
  product shots via affiliate manager email for reviews, Wikimedia Commons
  for species hero shots (Fish/Lizard).** Zero AI-generated humans. Zero
  fake clinical scenes. Save originals at `apps/<site>/public/images/<category>/`,
  let Next.js Image handle WebP/AVIF and responsive sizing.
- **At scale (90+ days): layer a single Adobe Stock subscription (~$30/mo,
  10 assets) for hero gaps Unsplash can't fill, and commission a
  photographer once for the top-10 highest-traffic pages — original
  imagery is the only durable differentiator from competitors recycling
  the same Unsplash hero.**
- **Never (year 1): AI-generated "vet examining dog," AI portraits of
  fake authors, removing watermarks, grabbing Google Images results
  without license verification, or alt-text that implies in-house
  authorship of stock photography ("our clinic," "our team"). These are
  QC-STANDARDS.md §1 violations and we will not ship them.**

---

## Image Categories — What CarloOS Actually Needs

The category drives the source decision. We have five live use cases:

### 1. Hero / banner (homepage, category index)

- Large above-the-fold image, 1600–2400px wide, sets emotional register.
- Aspirational, clean, single subject, low-clutter background.
- **Highest impact per dollar.** Worth investing here first.
- Loads eager, must be ≤200KB after optimization.

### 2. Editorial / supporting (in-article)

- 1–3 per long-form article, breaks up text, illustrates a point.
- Doesn't need to be unique — generic dog/horse/fish photos are fine.
- This is the high-volume tier; cost-per-image must be near zero.
- Loads lazy, ≤80KB after optimization.

### 3. Product / review images (ReviewCard)

- Specific SKU pictured. The product must be recognizable.
- **Source from brand affiliate program first**; never substitute a
  similar-looking product. Misleading product images = refund / chargeback
  risk and a trust violation.
- ≤50KB, square or 4:3, white-or-neutral background preferred.

### 4. Diagram / illustration (anatomy, technique, comparison)

- Saddle fit, fish anatomy, lizard species comparison, dental chart.
- Often the **right answer is custom SVG**, not a photograph. SVG is
  small, scales, and we own it outright.
- For Vets specifically, diagrams > photos for anything clinical — sidesteps
  the "is this a real procedure?" trust trap entirely.

### 5. User trust signals (vet portraits, byline avatars, "our team")

- **TRUST-CRITICAL. Hard rule: real people only.**
- A fake vet portrait — whether AI-generated, paid stock model, or a
  stolen LinkedIn shot — is the single fastest way to torch the
  authority of an E-E-A-T-sensitive site. Per QC-STANDARDS.md §1.1, if
  Dr. X did not review the content, we do not put Dr. X's face (or any
  face captioned as Dr. X) anywhere on the site.
- Practical implication: if we don't have a real expert, we don't have a
  portrait. We have a logo, an editorial mark, or no avatar. That's it.

---

## Source Channels — Ranked by Safety, Cost, Scalability

Ranked top to bottom in the order we should reach for them.

### Tier 1 — Unsplash + Pexels (free, commercial-OK, no attribution required)

**Use for:** editorial inline, fallback hero, generic species photos for
common animals (dog, horse, common aquarium fish).

The Unsplash License grants an irrevocable, nonexclusive, worldwide license
to use images including commercial use, with attribution "appreciated but
not required" for direct downloads. Pexels is similar. Both have model-release
caveats for identifiable people; we mostly avoid people-centric shots so
this is rarely binding.

**Two traps:**

1. **API integration triggers a different rule.** If we ever pull
   Unsplash images programmatically through their API at runtime, the API
   terms require crediting Unsplash and the photographer with a clickable
   link per display. We are not doing this — we download once, commit the
   file, serve from our domain. Stay in download-and-host mode and the
   attribution exception doesn't apply.
2. **Identifiable people need model releases for commercial endorsement
   contexts.** A stock photo of a person next to a product implying
   endorsement crosses the line. Generic editorial use of crowds, hands,
   silhouettes — fine. Headshot used as "this is our nutritionist" — not
   fine (and also a §1 violation regardless of license).

Verify license per asset on the Unsplash/Pexels page at time of download
(both platforms have occasionally migrated edge-case images to paid
tiers). Save the source URL in a comment in the commit message or a
sidecar metadata file.

### Tier 2 — Wikimedia Commons (species-specific, license varies)

**Use for:** Fish and Lizard especially. Specific species photos that
Unsplash doesn't carry — bichir, axolotl morphs, less-common cichlids,
specific gecko species, monitor lizard subspecies.

License is *per-asset*. Most photos are CC BY-SA 4.0 or CC BY 4.0, some
are public domain. **Attribution is required for CC BY / CC BY-SA, and
SA requires share-alike on derivative works** — which complicates
heavily-modified hero treatments. Workflow:

1. Pull the image and capture the exact license string from the file
   page (e.g., "CC BY-SA 4.0, photographer name").
2. Add a `credits` block to the image's sidecar metadata.
3. Render an unobtrusive "Image credits" link in the site footer
   listing photographer + license + Commons link.

Verify license per asset. The file page is authoritative; do not assume
based on the thumbnail.

### Tier 3 — Brand-supplied (product reviews, primary recommendation for Saddle / PetFood / Horses)

**Use for:** ReviewCard product images. This is the right answer for
Saddle (Stubben, Pessoa), PetFood (Chewy, Open Farm, Stella & Chewy's),
and Horses (Weatherbeeta, SmartPak).

Approach: email the brand's affiliate or PR contact, identify yourself
as a publisher reviewing the product, ask for high-resolution product
imagery for editorial use. Most direct-to-consumer pet/equine brands
have a press kit or affiliate asset library. Standard terms typically
permit editorial use with the brand's name credited and prohibit
modification beyond cropping/resizing. **Get the permission in writing
(email is fine).** Keep a `brand-permissions/` folder out of the repo
with the email threads.

Where a brand declines or doesn't reply: fall back to Amazon's product
imagery for the SKU (acceptable under the Amazon Associates program for
linked products only) or the manufacturer's public-facing product page
imagery (defensible as fair-use editorial accompaniment to a genuine
review, but **not** as decorative imagery elsewhere on the site).
Verify license per asset; when in doubt, ask.

### Tier 4 — Paid stock (Adobe Stock, Shutterstock, Getty iStock)

**Use sparingly,** only when a Tier 1/2 search has genuinely failed
for a hero shot we need. Recommend a single **Adobe Stock standard
license** subscription, ~$30/mo for 10 assets — this is the cheapest
predictable-cost tier. Royalty-free (RF) is what we want; rights-managed
(RM) is overkill and expensive.

What paid stock buys that free doesn't:

- Coverage of awkward species (specific aquarium fish, reptile setups).
- Higher-end production value for hero images on flagship pages.
- A clearer indemnification posture if a license challenge ever surfaces.

What it doesn't buy: uniqueness. Every competitor can buy the same shot.

### Tier 5 — User-submitted (community photos)

**Use cautiously.** Only with an explicit submission form that includes
a CC-style license grant in plain language: "By submitting, you grant
[site] a perpetual, non-exclusive license to use this image in
editorial content with credit to [name]."

Useful for Fish and Lizard (hobbyist communities are photo-rich) and
potentially for Horses (rider submissions). Not useful in year 1 —
we don't have traffic to source enough submissions to matter. Defer
to Phase 3.

### Tier 6 — AI image generation (Midjourney, DALL-E, Stable Diffusion, Sora image)

**Use only for non-photorealistic decorative elements.** Backgrounds,
abstract textures, icon-style illustrations, pattern fills. That is
all.

**Hard prohibitions (these violate QC-STANDARDS.md §1):**

- No AI-generated humans anywhere on the site that could be read as a
  real person — and certainly never captioned with a name or
  credential.
- No AI-generated "vet examining dog," "tech testing fish water," "rider
  on horse" or any other photorealistic scene that implies a real-world
  event that didn't happen.
- No AI-generated product images. The product must look the way it
  actually looks.

**Why this is stricter than the law requires:** As of January 2025, the
US Copyright Office's Part 2 report confirmed AI outputs without
sufficient human authorship are not copyrightable — and on March 2, 2026
the Supreme Court declined to review Thaler v. Perlmutter, leaving the
human-authorship requirement in place. So AI output is legal to publish
but not protectable. Our concern isn't copyright; it's trust.
Photorealistic AI in an authority-content niche is a credibility
landmine even when the underlying image is technically legal. We are
not testing that boundary on a portfolio whose entire moat is
trustworthiness.

### Tier 7 — Original commissioned photography

**Use selectively, for top-10 highest-traffic pages only, Phase 3.**

ROI math: a half-day shoot with a competent product/lifestyle
photographer is roughly $500–$1,500 depending on market, and yields
20–40 usable shots. That's $25–$75 per image. Justified only on pages
that already pull meaningful organic traffic and where unique imagery
plausibly moves CTR / dwell.

Don't commission until we know which pages matter. That's a Q3+
decision.

---

## Trust-Bar Implications — The Non-Negotiables

This section restates QC-STANDARDS.md §1 in image terms. If a future
agent or chat memory suggests otherwise, QC-STANDARDS.md wins.

- **Fake vet portrait = QC-STANDARDS.md §1.1 violation.** No stock
  headshot captioned as "Dr. Jane Smith, our veterinary advisor"
  unless Dr. Jane Smith exists, has reviewed the content, and has
  consented to being pictured.
- **AI-generated photorealistic "real" scene = trust violation.** A
  rendered "veterinarian examining a labrador" is deceptive even if
  uncaptioned, because its purpose is to imply the site has access to
  clinical settings that it does not.
- **Stock photos are fine for general editorial use** (a dog running
  in a park alongside an article about exercise) but must never carry
  captions or alt-text implying authorship, location, or specific
  identity. "A Labrador retriever runs in a park" — fine. "Our test
  subject, Max, runs in our outdoor evaluation space" — not fine.
- **Alt-text rules:** describe the image content factually. Do not
  invent provenance. "Veterinarian examining a small dog" is OK if
  it's a stock photo of a veterinarian examining a small dog (the
  image is what it says it is). "Dr. Carlo examining our test dog" is
  NOT OK unless both are real.
- **Eyebrow badges on images** (per QC §1.1.a) — same prohibition as
  on text. Don't slap a "Vet Tested" rosette on a product photo
  unless a credentialed vet actually tested it.

These rules apply equally to homepage hero copy, ReviewCard images,
byline avatars, and decorative inline shots (per QC §1.1.b).

---

## Build Pipeline

We're already on Next.js `<Image />`, which is most of the battle. The
delta is conventions and discipline.

### What Next.js Image already gives us

- Automatic WebP/AVIF conversion on supported browsers.
- Responsive `srcset` generation from `sizes` prop.
- Lazy-loading by default; `priority` opt-in for above-the-fold.
- Built-in protection against CLS via required `width`/`height` or `fill`.

We do not need a separate `sharp` build step. Next.js uses sharp under
the hood for the Image Optimization API; adding a parallel pipeline
duplicates work. The only exception is if we want to bake WebP/AVIF at
commit time to keep files smaller in the repo — defer.

### Conventions to enforce going forward

**Sizing — always set `sizes`:**

```tsx
<Image
  src="/images/heroes/golden-retriever-running.jpg"
  alt="A golden retriever running through a grass field"
  width={1600}
  height={900}
  sizes="(min-width: 1024px) 1024px, 100vw"
  priority   // hero only
/>
```

For non-hero, omit `priority` (lazy is default) and tune `sizes` to
the actual layout.

**File naming — kebab-case-with-context:**

- Good: `golden-retriever-running-in-park.jpg`
- Good: `stubben-roxane-saddle-side-view.jpg`
- Bad: `IMG_0123.JPG`, `hero.jpg`, `image1.png`

The filename is read by Google as a soft ranking signal and shows up
in alt-text reviews. Match the filename to the alt-text intent.

**File-size targets (post-optimization, on disk in repo):**

| Category   | Max weight | Notes                              |
|------------|------------|------------------------------------|
| Hero       | ≤200 KB    | 1600–2400px wide, JPEG quality 80  |
| Editorial  | ≤80 KB     | 1200px wide max                    |
| Product    | ≤50 KB     | 800–1000px wide, square if poss.   |
| Thumbnail  | ≤30 KB     | 400px wide, used in cards/grids    |
| Diagram    | n/a (SVG)  | Prefer inline SVG                  |

Pre-commit, run originals through Squoosh / ImageOptim / `sharp` CLI
once to hit these targets. Next.js then handles per-request resizing.

**Directory layout:**

```
apps/<site>/public/images/
  heroes/
  editorial/
  products/<brand>/
  diagrams/
  avatars/        # real people only
```

**Sidecar metadata** (optional, recommended for paid/CC-BY assets):
keep a `apps/<site>/public/images/_credits.json` mapping filename →
source, license, photographer, URL. The site footer can read this to
render an image credits page if/when a license requires it.

### What to verify on existing pages

- Every `<Image>` has `alt` (non-empty, descriptive, factual).
- Hero images have `priority`; nothing below the fold does.
- `sizes` is set on every responsive image (no defaulting to 100vw
  loading a 2400px file on mobile).
- No `<img>` tags slipping through — they bypass the optimizer.

This is a cleanup pass for whichever build agent picks up the
follow-on ticket, not a code change for this brief.

---

## Per-Domain Notes

### dog-com — Easy mode

Unsplash and Pexels have enormous, high-quality dog libraries across
breeds. Tier 1 covers ~95% of editorial and hero needs. The only
trap is the §1 trap: do not caption a stock dog photo as "our test
dog" and do not pair a stock vet headshot with a credentialed claim.
Brand-supplied for product reviews (treats, beds, leashes); fall back
to Amazon Associates SKU images for affiliate-linked products.

### fish-com — Hard mode for species shots

Unsplash and Pexels carry generic aquarium imagery and a few popular
species (bettas, goldfish, common cichlids) but thin out fast for
specific species (e.g., specific apistogramma morphs, plecos beyond
L046, less-common rainbowfish). **Wikimedia Commons is the strongest
source** for species-specific photography — many hobbyist photographers
license their species portraits under CC BY-SA 4.0.

For aquascape/setup hero shots, Unsplash is fine. For "this is what a
[species] looks like" hero shots, Commons first, then paid stock.

Phase 2 candidate for soliciting community submissions — the
freshwater hobbyist community is photo-rich and engaged.

### lizard-com — Hardest mode

Reptile photography on Unsplash/Pexels is sparse and skews toward
bearded dragons, ball pythons, and crested geckos. Anything beyond
those three: **Wikimedia Commons is the primary source.** Many
species pages on Wikipedia carry usable CC-licensed photos that
Commons hosts.

Paid stock (Adobe / Shutterstock) is the secondary source for
species Commons doesn't cover. Original commissioning is unlikely
to pencil out — too many species, too little per-page traffic.

Verify license per Commons asset (some are CC BY-SA which requires
attribution; some are public domain).

### saddle-com — Brand-supplied is the answer

Saddles are highly specific products; generic horse-and-saddle stock
shots aren't useful for reviews. **Email Stubben, Pessoa, CWD, Antares,
Bates affiliate/PR contacts directly** and request product photography
for editorial use. Most performance-tack brands have media kits.

Lifestyle/editorial inline imagery (riders in arenas, tack rooms,
saddle fitting scenes): Unsplash/Pexels are adequate. Diagrams of
saddle anatomy and fit are higher-value than photos and should be
custom SVG — Phase 2 build task.

### vets-co — Highest trust risk in the portfolio

**Hard rules, no exceptions:**

- No clinical scene photography that implies in-house provenance.
- No vet portraits captioned with names unless real people who have
  reviewed the content.
- No AI imagery of anything resembling a medical procedure or
  clinical setting.

**Strongly prefer diagrams over photos** for anything anatomical,
procedural, or condition-illustrating. Diagrams are clearly
illustrations; photos invite the question "is this real?" and we
don't have a defensible answer.

Hero imagery: abstract — a stethoscope on a desk, a paw print, a
clean clinical-feeling background. Generic editorial inline: fine
from Unsplash/Pexels as long as captions stay factual. Trust
signals: institutional logos (AVMA, RCVS where applicable to the
practitioners we actually cite) are better than faces.

### horses-com — Mid-difficulty

Unsplash and Pexels have abundant horse imagery — riding, grooming,
pasture, jumping. Generic editorial is easy. Brand-supplied for
product reviews (Weatherbeeta blankets, SmartPak supplements, etc.)
via affiliate / PR outreach, same model as saddle-com.

Watch for breed-specific shots: less common breeds (Akhal-Teke,
Marwari, Sorraia) thin out fast and may need Commons + paid stock.

### petfood-com — Brand-supplied, hard rule on captions

Product imagery comes from brand affiliate libraries — Chewy, Open
Farm, Stella & Chewy's, The Honest Kitchen all maintain affiliate
asset packs. Editorial inline (dogs eating, bowls, kitchen scenes):
Unsplash/Pexels.

**Hard rule on captions for petfood specifically:** never repeat
brand marketing claims in image captions or alt-text. "Stella &
Chewy's freeze-dried raw — humanely raised" is the brand's claim, not
ours; our alt-text says "Stella & Chewy's freeze-dried raw food
patties in original packaging." If we want to evaluate a claim, that
goes in the article body with sourcing, not in image furniture.

---

## Phase Plan

### Phase 1 — Now → +30 days

- All sites: Unsplash + Pexels for editorial / hero. Wikimedia Commons
  for species shots on Fish and Lizard.
- Saddle / Horses / PetFood: send brand outreach emails this week,
  log responses in `brand-permissions/` (out-of-repo).
- Zero AI imagery. Zero fake authorship. Zero fabricated provenance
  in alt-text or captions.
- One follow-up build ticket: audit existing `<Image>` usage for
  `alt`, `sizes`, `priority`, file naming.

### Phase 2 — +30 → +90 days

- Subscribe to one Adobe Stock standard plan (~$30/mo, 10 assets) to
  fill hero gaps Unsplash can't reach.
- Commission custom SVG diagrams for saddle fit (Saddle), anatomy
  (Vets), species comparison (Lizard, Fish).
- Stand up an image-credits page per site that auto-renders from
  `_credits.json` for any CC-BY / CC-BY-SA assets.

### Phase 3 — +90 days

- Identify top-10 highest-traffic pages portfolio-wide.
- Commission one half-day photo shoot per top-traffic page that would
  benefit from unique imagery (likely Saddle and Horses
  product/lifestyle pages, possibly PetFood).
- Evaluate community photo submission program for Fish and Lizard.

---

## What NOT To Do (year 1)

- **No AI-generated humans** in any trust context — no vets, experts,
  customers, or testimonial portraits. Decorative non-human
  illustration only.
- **No reverse-image-search shortcuts.** Don't grab Google Images
  results without verifying the source license on the originating
  page.
- **No watermark removal.** If an image has a watermark, the
  photographer wants credit or a license fee. Pay or pass.
- **No "our team in our lab / clinic / kitchen" framing** for stock
  photography. Stock is stock; describe it factually.
- **No AI-generated photorealistic scenes** of anything clinical,
  veterinary, or expert-coded.
- **No fake byline avatars.** Real people or no avatar.
- **No brand marketing claims** repeated as image captions
  (PetFood-specific risk, but applies portfolio-wide).
- **No bare `<img>` tags** that bypass Next.js Image optimization.

---

## Open Questions for Carlo

1. **Brand outreach lane.** Are we comfortable sending publisher
   intro emails to affiliate / PR contacts at Stubben, Chewy, Stella
   & Chewy's, etc., this week? It's low-cost and unlocks the best
   product imagery, but requires someone to manage the inbox.
2. **Stock subscription budget.** OK to expense ~$30/mo for Adobe
   Stock once we hit Phase 2? Roughly $360/yr portfolio-wide.
3. **Photographer commissioning appetite.** Phase 3 contemplates one
   half-day shoot (~$500–$1,500) on top-traffic pages. Is that on the
   table for Q3/Q4, or off the table for year 1?
4. **Image-credits page.** Do we want one rendered per-site for CC-BY
   assets, or one consolidated portfolio credits page? Per-site is
   cleaner; consolidated is less maintenance. Build delta is small
   either way.
5. **Existing-page audit.** Should the next build agent do a
   portfolio-wide `<Image>` audit (alt, sizes, priority, file
   naming) as a follow-up ticket from this brief, or wait until
   placeholder swap-in is scheduled?

---

## Definition of done (for this brief)

- Carlo has reviewed and signed off on the Tier 1–7 source ranking
  and the year-1 "do not do" list.
- Open Questions 1–3 have answers.
- A follow-up build ticket is opened to (a) audit existing `<Image>`
  usage and (b) wire `_credits.json` rendering once Phase 2 brings in
  CC-BY assets.
- This brief is referenced from BACKLOG.md (or wherever cross-site
  policy lives) so future agents land here before sourcing imagery.

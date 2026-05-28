---
from: coo
to: carlo
status: pending
created: 2026-05-29
blockers:
next_action: "Register Unsplash API key, email 8 priority affiliate managers, browse curated starter queries per site."
---

# Per-Site Photo Sourcing Playbook (10 Sites, $0-30/mo Start)

## TL;DR

- **Budget:** Y1 starts at **$0/mo** (Unsplash + Wikimedia + manufacturer-supplied product photos cover ~90% of slots). Add **$30/mo Adobe Stock** at Month 2 as a gap-filler. **Never display ads anywhere on the network** — visual integrity is a moat, ads vaporize it. Commissioned photography ($1.5K-3K/site) kicks in only after a page clears 5K MAU.
- **Per-site MVP source:** Unsplash for lifestyle/hero across all 10; Wikimedia Commons is THE source for species pages (Lizard, Fish, breed-level Dog/Horses); manufacturer-supplied is mandatory for every review page across Saddle/PetFood/Fish/Dog/Lizard/Ferret; NIH/CDC/AVMA for Vets.co diagnostic content; AI generation banned from anything humans, clinical, or branded.
- **This week's top 3:** (1) Register Unsplash API key (free, 50 req/hr, instant), (2) Email the 8 priority affiliate managers below (Trupanion, SmartPak, Chewy, Stubben, Zoo Med, Open Farm, Marshall Pet, Aquarium Co-Op), (3) Set up Wikimedia Commons attribution workflow (CSV log of image + photographer + license, drop into footer of each species/breed page).

---

## Why this doc exists

PR #63 (image-strategy) shipped policy: where AI is banned, attribution requirements, alt-text standard, file-size budgets. This doc is the **actionable sourcing companion**: where to actually go, what to search for, who to email, what to pay, and per-site starter queries Carlo can use today to fill the new `<ImageCard>`, `<HeroImage>`, and `<FeaturedSlot>` components shipping in tonight's editorial library.

The hierarchy of trust (highest to lowest visual quality + brand fit):

1. **Commissioned original photography** — durable differentiator, expensive, slow
2. **Manufacturer-supplied product photos** — high quality, free, brand-trusted
3. **Wikimedia Commons** — academic accuracy for species/breed content
4. **Unsplash** (direct download) — fast, professional, over-used
5. **Adobe Stock** (paid) — clean gap-filler, legally bulletproof
6. **Pexels** — second-tier Unsplash analog
7. **AI-generated** — banned for humans/clinical/branded; OK for abstract/pattern

Carlo's recurring frustration ("look-and-feel"): the network looks like a content-mill if we cycle the same Unsplash dog photo that 1000 other sites use. Sourcing strategy must lean disproportionately on **(2)** and **(3)** — those are the visual moats. Unsplash is the floor, not the ceiling.

---

## Source A: Unsplash (https://unsplash.com)

**License:** Unsplash License. Free for commercial use, modification permitted, attribution appreciated but not legally required for direct downloads from the website. **API integration triggers different terms** — if you pull via API you MUST credit the photographer with a link to their Unsplash profile, and link "Unsplash" itself. Most use cases for us are direct downloads, so attribution is optional but recommended (community goodwill + slight SEO benefit from outbound links to a high-authority domain).

**Pros:**
- Massive curated pool (5M+ images, ~150K dog photos alone)
- Consistent professional aesthetic — golden-hour, shallow DOF, neutral palettes — fits the editorial brand brief
- Instantly searchable, no friction
- Free forever

**Cons:**
- The same ~200 "hero" images appear on thousands of sites. Reverse-image-search the candidate before committing.
- Limited niche coverage for reptile species, specific tropical fish, breed-accurate horse photos
- Aesthetic homogeneity — if everything on the site is Unsplash, the site looks generic

**Best for:** hero shots, lifestyle imagery, generic dog/cat/fish/horse photos, food photography (PetFood ingredients), human-with-animal lifestyle, ambient/textural backgrounds.

**Per-site weighting:**
- Dog.com: heavy use OK (deep pool, breed coverage is decent)
- Fish.com: moderate (good for aquarium lifestyle, weak on species)
- Lizard.com: light (poor reptile coverage; Wikimedia Commons does this better)
- Saddle.com: moderate (good equestrian lifestyle pool)
- Vets.co: light (avoid clinical clichés; abstract/textural only)
- Horses.com: heavy (largest equestrian Unsplash pool)
- PetFood.com: heavy for ingredient/lifestyle, none for branded product
- PetFoods.com: light (data-vis preferred)
- Ferret.com: moderate (~5K ferret photos)
- Ferrets.com: light (library/reference role, iconography preferred)

**API access:** free at https://unsplash.com/developers. Free tier: 50 requests/hour (Demo) → 5000/hr (Production, after they approve your app). Apply Production once we have any one site live with an Unsplash integration; takes 1-3 days.

**Workflow:**
1. Search query (be specific — "golden retriever puppy autumn" beats "dog")
2. Sort by Relevance, then scroll past the top 20 (those are the over-used ones)
3. Reverse-image-search the URL (https://tineye.com or Google Images) — if it appears on >500 sites, skip it
4. Download "Large" (not "Original" — original is overkill, large is ~1920px wide and fits our 200KB budget per image after compression)
5. Run through TinyPNG / Squoosh to hit the 200KB target
6. Save with descriptive filename (`dog-golden-retriever-autumn-portrait.jpg`, not `unsplash-photo-by-john-smith-1234.jpg`)
7. Log photographer name in the per-site attribution CSV (even when not legally required — sets us up for clean API migration later)

---

## Source B: Pexels (https://pexels.com)

**License:** Pexels License. Free for commercial, modification permitted, attribution appreciated. Substantially identical to Unsplash License in practical terms.

**Pros:**
- Different curation pool — finds gap-fillers Unsplash misses
- Free API at https://www.pexels.com/api/ — 200 requests/hour free tier
- Video clips also available (useful when we add motion content)

**Cons:**
- Same over-use risk as Unsplash, possibly worse for top-trending images
- Slightly more dated/saccharine aesthetic in places — vet manually

**Best for:** filling specific gaps Unsplash doesn't cover; second-source for diversity. Not a primary source — treat as fallback.

**Per-site weighting:** light across all sites. Use when Unsplash search for a specific concept fails.

---

## Source C: Wikimedia Commons (https://commons.wikimedia.org)

**License:** VARIES PER IMAGE. Options include CC0 (public domain — no attribution needed), CC-BY (attribution required), CC-BY-SA (attribution + share-alike — derivative works must use same license), CC-BY-NC (non-commercial only — **do not use**), or full public domain. **You must check the License section on every individual file page before using.**

**Pros:**
- **The single best free source for species-specific imagery.** Reptile species, tropical fish, horse breeds, dog breeds, ferret subspecies, anatomy — Wikimedia coverage beats every commercial stock site for the long tail.
- Often academic / scientific origin: museum photographers, university biology departments, hobbyist herpetologists who care about correct taxonomy
- Original sources frequently include detailed descriptions (locality, sex, life stage) useful for caption copy

**Cons:**
- Attribution requirement is real and non-trivial. CC-BY-SA in particular has share-alike implications; verify whether your use triggers that clause (typically: derivative modified images do, unmodified embeds do not)
- Variable quality — some images are excellent, some are camera-phone snapshots
- File metadata can be incomplete (some images have licenses but no clear photographer attribution)

**Best for:**
- **Lizard.com species pages** (Pogona vitticeps, Eublepharis macularius, Varanus exanthematicus, Iguana iguana — Wikimedia has dozens of high-quality photos per species)
- **Fish.com species pages** (Pterophyllum scalare / angelfish, Betta splendens, Paracheirodon innesi / neon tetra, etc.)
- **Dog.com breed pages** (AKC-aligned breed names will surface multiple Wikimedia photos)
- **Horses.com breed pages** (Quarter Horse, Arabian, Thoroughbred, Friesian — strong coverage)
- **Vets.co anatomy diagrams** (huge library of vector + raster veterinary anatomy)

**Workflow:**
1. Search Wikimedia Commons by scientific name (always — not common name; "Pogona vitticeps" beats "bearded dragon" for getting accurate species)
2. Filter by license: use the "Search filters" → license filter to exclude CC-BY-NC and unknown-license images
3. Open the file's page (not just the thumbnail). Read the License section carefully.
4. Note the photographer's name AND the license code (CC0, CC-BY-3.0, CC-BY-SA-4.0, etc.)
5. Download original
6. Compress + rename
7. Add attribution string to image caption AND to the per-site attribution log
8. Format attribution as: `Photo: [Photographer Name] / Wikimedia Commons / [License-code-with-link]`

**Pro tip:** Wikipedia's species articles always cite the main Commons image; click through to source. Wikipedia's editors have done the license-vetting for you on those lead images.

---

## Source D: NIH / CDC / FDA / AVMA / AAEP / ARAV educational media

**License:**
- US federal-government work (NIH, CDC, FDA, USDA) is **public domain** by default under 17 U.S.C. § 105 — no attribution legally required, but professional courtesy + trust signal to credit anyway
- AVMA (American Veterinary Medical Association), AAEP (American Association of Equine Practitioners), ARAV (Association of Reptile and Amphibian Veterinarians): **case-by-case**, typically allow educational use with attribution; some assets require explicit permission. **Verify per asset.**

**Pros:**
- Scientifically accurate diagnostic imagery — pathology, anatomy, dermatology, parasites
- Free, authoritative — boosts editorial trust signals
- Lends Vets.co the visual gravitas of a clinical reference vs. a content site

**Cons:**
- Limited pool; not always aesthetic; often dated stylistically (1990s clinical photography)
- AVMA/AAEP/ARAV require email permission for some assets — adds latency

**Best for:**
- Vets.co medical/diagnostic content (parasites, dermatologic conditions, ortho diagnostics)
- Dog.com health/condition pages (heartworm, parvovirus diagnostic imagery from CDC)
- Anatomical diagrams across all health-focused sub-pages

**Workflow:**
1. NIH: https://www.nlm.nih.gov/ — NLM image search; also PubMed Central open-access articles often have CC-licensed figures
2. CDC: https://www.cdc.gov/media/subtopic/images.htm — Public Health Image Library (PHIL) at https://phil.cdc.gov/
3. FDA: https://www.fda.gov/about-fda/about-website/fda-website-policies — most content public domain
4. AVMA: https://www.avma.org/ — contact media@avma.org for asset permission
5. AAEP: https://aaep.org/ — contact via their press contact
6. ARAV: https://arav.org/ — small org, direct email works

**Attribution boilerplate:** `Image: Centers for Disease Control and Prevention (CDC) / Public Health Image Library` — even though not legally required, it signals editorial care.

---

## Source E: Manufacturer-supplied product photos (via affiliate manager email)

**License:** Granted per affiliate-program agreement when you sign up. Most affiliate programs include a media kit / press library with usage rights spelled out. Permission is typically: use for promotional purposes including reviews, retain brand integrity (no doctoring logos), no implication of endorsement beyond what's stated.

**Pros:**
- **Highest-quality product imagery available** — these are the brand's own studio shots, often $5K-50K productions
- Brand legitimacy transfers to the review page (trust signal: "this is the actual product, photographed by the people who made it")
- Free
- Exclusive feel even though every affiliate gets the same kit — most competitors don't bother to ask, so they ship with crappy retailer thumbnails

**Cons:**
- Manual: must email each affiliate manager individually
- 2-7 day turnaround per brand
- Some brands have no formal affiliate program (especially smaller niche brands) — must negotiate one-off
- Brand-supplied photos can lean marketing-glossy; we want evaluative restraint — sometimes cropping or reshooting is needed

**Best for:**
- ALL review pages on Dog.com, Fish.com, Lizard.com, Saddle.com, PetFood.com, Ferret.com
- Equipment photos on Vets.co (insurance company logos), Horses.com (tack/equipment)
- Brand comparison pages on PetFoods.com

**Boilerplate email template** (use this verbatim, edit bracketed parts):

```
Subject: [Site].com — Affiliate Media Library Request

Hi [Affiliate Manager Name],

I'm Carlo Tabibi (carlo@tabibi.com) and I run [Site].com, a [niche]
reference and review site currently building toward expanded launch.

I've signed up for [Brand]'s affiliate program (affiliate ID: [ID])
and I'm preparing review and comparison content for the [Product
Category] section. I'd like to include your product imagery in those
pages with proper attribution and per your standard media guidelines.

Could you point me to your press/affiliate media library, or send a
curated set of high-resolution product photos for these specific SKUs:

- [Product 1, with SKU if available]
- [Product 2]
- [Product 3]

I'll credit per your standard requirements and follow your brand
guidelines on logo treatment, color, and product context. Happy to
share mockups before publish if useful.

Thanks for your help,
Carlo Tabibi
[Site].com
carlo@tabibi.com
```

**The 8 priority affiliate managers to email this week:**

1. **Trupanion** (pet insurance) — for Vets.co + Dog.com review pages. Affiliate program via Impact Radius. Contact: their affiliate program manager via the Impact dashboard "messages" tab.
2. **SmartPak** (equine tack + supplements) — for Saddle.com + Horses.com. Affiliate program via Impact / Pepperjam (verify current network). Contact: affiliates@smartpak.com (verify on their affiliate page).
3. **Chewy** (broad pet retail) — for Dog.com, Fish.com, PetFood.com. Affiliate via Partnerize. Contact: chewy-affiliates@partnerize.com (verify).
4. **Stubben** (saddles + tack) — for Saddle.com hero/featured. Affiliate via ShareASale typically. Contact: their US distributor's marketing manager.
5. **Zoo Med** (reptile equipment) — for Lizard.com equipment/UVB pages. Affiliate program (verify network). Contact: marketing@zoomed.com.
6. **Open Farm** (premium pet food) — for PetFood.com brand comparison. Affiliate via ShareASale. Contact: affiliates@openfarmpet.com.
7. **Marshall Pet Products** (ferret-focused) — for Ferret.com equipment/care pages. Affiliate program via their site. Contact: marketing@marshallpet.com.
8. **Aquarium Co-Op** (aquarium equipment) — for Fish.com equipment pages. Affiliate via their site directly. Contact: affiliates@aquariumcoop.com.

Send all 8 this week. Expect 4-6 to reply within 7 days with media library access; expect 1-2 silent (follow up at day 10); expect 1 to require a phone call (Stubben is most likely to want a relationship conversation).

---

## Source F: Adobe Stock

**License:** Subscription provides Standard License — commercial use, perpetual rights to downloaded assets even after subscription ends, modification permitted. Cannot resell as standalone asset. Print runs limited to 500K copies (irrelevant for digital).

**Pros:**
- Polished, professional, legally bulletproof
- Downloads roll over — accumulating inventory month over month
- Strong coverage of editorial concepts Unsplash misses (clinical settings done well, premium product flat-lays, infographic source assets)
- Integrates cleanly into review/publish workflow

**Cons:**
- $30/mo for 10 assets — works out to $3/asset; cheap per-asset but adds up over the network
- Aesthetic can lean "stocky" — vet candidates carefully

**Best for:**
- Hero shots where Unsplash + Wikimedia don't have what you need
- Premium product flat-lays
- Vets.co conceptual imagery (when abstract/textural is needed and Unsplash misses)
- Time-pressed gap-filling

**Workflow:** start subscription Month 2. Treat the 10 downloads/month as a curated allowance — use them for hero slots only, not gap-filling category cards (Unsplash is fine for those).

---

## Source G: Commissioned photography

**Cost:** $1500-3000 per site for a single full day's shoot. Produces 5-10 keeper hero images plus 20-40 secondary assets.

**Trigger:** site clears 25K MAU AND has at least one page above 5K MAU/page.

**Pros:**
- **The only durable visual differentiator.** Stock photography is fungible; original photography is a moat.
- Brand consistency across hero pages
- Photographer relationship can grow into ongoing retainer

**Cons:**
- Cost
- 2-4 weeks from "engaged" to "delivered" (scout location, schedule, shoot, edit)
- Requires creative direction — Carlo needs to write a brief

**Best for:**
- Post-traffic-milestone hero refresh on top-traffic pages
- Brand-defining lifestyle imagery for category leaders (Dog.com, Horses.com first)

**Photographer commission RFP template:**

```
Subject: Pet/Equine Editorial Photography Brief — [Site].com

Hi [Photographer],

I'm Carlo Tabibi, publisher of [Site].com (an editorial reference
site in the [niche] space). I'm looking for a photographer to shoot
5-10 hero images for our top traffic pages — clean, editorial,
shallow-DOF, natural-light aesthetic; think New York Times Magazine
or Kinfolk for pets.

Shoot scope:
- 1 full day on location ([City])
- Subject: [breed/species/equipment]
- Deliverable: 5-10 selects, color-corrected, in two crops (16:9 hero,
  4:3 featured-slot)
- Usage rights: editorial perpetual web use on [Site].com, with
  photographer credit in caption
- Budget: $1500-3000 for the day

If interested, I'd love to see a portfolio sample of pet/animal
editorial work. Available to scope a brief call this week.

Thanks,
Carlo Tabibi
carlo@tabibi.com
```

---

## Source H: AI-generated imagery

**Policy (from PR #63):**
- **NEVER for:** humans, vets/clinicians, "real" scenes, branded products, anything that implies a real moment
- **OK for:** abstract illustrations, anatomical diagrams (with vet review), infographics, pattern/texture overlays, decorative ambient elements
- **Always flag:** every AI-generated image must include `[AI-generated]` in alt-text per QC-STANDARDS, and a footer disclosure on pages where AI imagery appears

**Tools:** Midjourney v6+, DALL-E 3, Stable Diffusion XL. Midjourney is best for textures/patterns; DALL-E for diagrams; SDXL only when self-hosting matters.

**Where it fits:** decorative pattern overlays for section dividers, color-palette gradients, abstract textures behind hero text. Nothing photographic.

---

## Per-site MVP sourcing strategy

For each site below: which sources dominate, what to search for, what NEVER to use, and a curated starter pack of 15-30 search queries Carlo can run today against the named sources. Per the constraint, no fabricated URLs — these are search queries + selection criteria. Carlo browses, picks, downloads.

### 1. Dog.com

**Source mix:** Unsplash (heavy) + Wikimedia (breed pages) + manufacturer (review pages) + NIH/CDC (health pages)

**Brand mood:** warm, candid, slightly cinematic. Avoid: studio-staged "perfect dog on white background" stock cliché.

**Curated starter queries (Unsplash unless noted):**

1. "golden retriever puppy autumn" — hero candidate, Dog.com homepage
2. "dog hiking mountain" — adventure/lifestyle category
3. "border collie running field" — working breeds page
4. "dog portrait golden hour" — featured slot, breed pages
5. "puppy sleeping" — health/care category
6. "labrador swimming" — water/exercise content
7. "dog with owner walking" — training category (avoid posed family shots)
8. "french bulldog city" — urban-dog content
9. "dog at vet" — health category (use sparingly, often cliché)
10. "dog food bowl wooden" — nutrition cross-link
11. "senior dog gray muzzle" — senior-care content
12. "dog training treat" — training how-tos
13. "dog playing fetch park" — exercise content
14. "rescue dog shelter" — adoption category
15. "dog grooming brush" — grooming content
16. **Wikimedia Commons:** "Canis lupus familiaris [breed name]" for each breed page — search 20 of the top traffic breeds (Labrador, Golden, German Shepherd, Bulldog, Poodle, Beagle, Rottweiler, Yorkshire Terrier, Boxer, Dachshund, Husky, Doberman, Great Dane, Shih Tzu, Mini Schnauzer, Boston Terrier, Pomeranian, Chihuahua, Cocker Spaniel, Australian Shepherd)
17. "puppy training class" — training content
18. "dog winter snow" — seasonal content
19. "dog beach sunrise" — lifestyle hero
20. **Manufacturer queue:** Trupanion (insurance landing), Chewy (food + supplies), BarkBox (subscription review), Furbo (camera review), PetSafe (training equipment)

**Selection criteria:** muted/warm tones over saturated; natural light over studio; candid expressions over "staged perfect"; reverse-image-search every candidate before commit.

**Avoid:** white-background product photos (unless manufacturer-supplied for a review), AI-generated dogs (uncanny eyes are a tell), the famous "vet examines puppy" Unsplash photo (overused).

### 2. Fish.com

**Source mix:** Wikimedia (species — heavy) + Unsplash (aquarium lifestyle) + manufacturer (equipment)

**Brand mood:** clean, blue-toned, scientifically credible. Avoid: novelty/decorative fish-tank shots.

**Curated starter queries:**

1. **Wikimedia Commons:** "Pterophyllum scalare" — angelfish species page
2. **Wikimedia Commons:** "Betta splendens" — betta species page
3. **Wikimedia Commons:** "Paracheirodon innesi" — neon tetra
4. **Wikimedia Commons:** "Poecilia reticulata" — guppy
5. **Wikimedia Commons:** "Carassius auratus" — goldfish
6. **Wikimedia Commons:** "Symphysodon" — discus
7. **Wikimedia Commons:** "Pomacanthidae" — marine angelfish family
8. **Wikimedia Commons:** "Amphiprioninae" — clownfish
9. **Wikimedia Commons:** "Corydoras" — corydoras catfish
10. **Wikimedia Commons:** "Ancistrus" — bristlenose pleco
11. Unsplash: "planted aquarium" — hero candidate
12. Unsplash: "tropical fish tank" — homepage
13. Unsplash: "aquarium light blue" — equipment category
14. Unsplash: "coral reef tank" — marine content
15. Unsplash: "fish feeding" — care content
16. Unsplash: "aquarium plants" — planted-tank content
17. Unsplash: "fish tank decoration" — beginner content
18. **Manufacturer queue:** Fluval (filters), Eheim (filters/heaters), API (water testing), Seachem (water treatments), Aquarium Co-Op (broad equipment), Hikari (food)
19. Unsplash: "betta fish portrait" — fallback hero
20. Wikimedia Commons: "Aquarium decoration" + "Planted aquarium" categories

**Selection criteria:** scientific name searches on Wikimedia first (more accurate, more options); for Unsplash, prefer real tanks over decorative bowls; cold-blue palette consistent across the site.

**Avoid:** AI fish (anatomy is consistently wrong), goldfish-in-a-bowl shots (animal-welfare cliché that contradicts editorial expertise), surreal/oversaturated "designer" tanks.

### 3. Lizard.com

**Source mix:** Wikimedia Commons (heavy — THE source for species) + Flickr CC search (secondary) + manufacturer (equipment) + light Unsplash

**Brand mood:** earthy, naturalistic, scientifically credible. The closest analog: a museum or zoo's educational signage.

**Curated starter queries:**

1. **Wikimedia Commons:** "Pogona vitticeps" — bearded dragon (highest traffic species)
2. **Wikimedia Commons:** "Eublepharis macularius" — leopard gecko
3. **Wikimedia Commons:** "Varanus exanthematicus" — savannah monitor
4. **Wikimedia Commons:** "Iguana iguana" — green iguana
5. **Wikimedia Commons:** "Chamaeleo calyptratus" — veiled chameleon
6. **Wikimedia Commons:** "Tiliqua scincoides" — blue-tongued skink
7. **Wikimedia Commons:** "Uromastyx" — uromastyx genus
8. **Wikimedia Commons:** "Furcifer pardalis" — panther chameleon
9. **Wikimedia Commons:** "Correlophus ciliatus" — crested gecko
10. **Wikimedia Commons:** "Phelsuma" — day gecko genus
11. **Wikimedia Commons:** "Varanus niloticus" — Nile monitor
12. **Wikimedia Commons:** "Heloderma suspectum" — Gila monster
13. Unsplash: "reptile terrarium" — equipment hero (limited pool)
14. Unsplash: "lizard close up" — generic hero
15. **Manufacturer queue:** Zoo Med (UVB, heat lamps, substrate), Exo Terra (terrariums, decor), Arcadia (UVB lighting — UK brand, has US distribution)
16. Flickr CC search: search the same species names with license filter "Commercial use & mods allowed"
17. Wikimedia Commons: "Reptile veterinarian" — for vet care content (limited)
18. Wikimedia Commons: "Lizard anatomy" — for educational diagrams
19. Wikimedia Commons: "Reptile shedding" — for husbandry content
20. Wikimedia Commons: "Reptile feeding" — for diet content

**Selection criteria:** scientific name always (English common names return fewer, worse-quality hits); prefer photos with locality data in caption (signals hobbyist or academic origin, accurate ID); check that the lizard's body condition looks healthy (Wikimedia includes some wild-caught and dehydrated specimens, avoid).

**Avoid:** any AI reptile imagery (scale patterns are consistently wrong and herpers will spot it instantly — credibility kill), stock photos of "kid holding lizard" (often the wrong species is captioned), composite reptile imagery from generic stock libraries.

### 4. Saddle.com

**Source mix:** Manufacturer (heavy — review pages) + Unsplash (lifestyle/hero) + commissioned (Phase 2)

**Brand mood:** rich, traditional, equestrian luxury without ostentation. Closest analog: Hermes equestrian editorial.

**Curated starter queries:**

1. Unsplash: "dressage horse rider" — hero candidate
2. Unsplash: "show jumping" — competition category
3. Unsplash: "equestrian helmet" — equipment cross-category
4. Unsplash: "horse tack leather" — saddle category hero
5. Unsplash: "saddle close up" — review featured slots
6. Unsplash: "stirrup detail" — tack detail page
7. Unsplash: "horse barn morning" — lifestyle/ambient
8. Unsplash: "english saddle" — discipline filter
9. Unsplash: "western saddle" — discipline filter
10. Unsplash: "polo horse" — discipline filter (small market but high-value)
11. Unsplash: "horse grooming brush" — tack-adjacent
12. Unsplash: "rider boots" — apparel cross-category
13. **Manufacturer queue:** Stubben, Pessoa, Bates, Custom Saddlery, Antares (high-end), Wintec (synthetic), Tucker (western), Circle Y (western)
14. Unsplash: "horse silhouette sunrise" — atmospheric hero
15. Unsplash: "saddle pad colorful" — accessories
16. Unsplash: "leather working tool" — craftsmanship/manufacturing content
17. Unsplash: "horse ear detail" — atmospheric/lifestyle
18. Unsplash: "trail riding forest" — discipline page
19. Unsplash: "dressage arena" — competition content
20. ShareASale network: search for "saddle" / "tack" / "equestrian" in the affiliate program directory — apply to 5-10 programs, harvest media kits

**Selection criteria:** rich/saturated leather tones, traditional palette (browns, blacks, deep greens, brass); avoid overly bright/neon colors that read amateur; prefer detail crops over wide environmental shots for product context.

**Avoid:** the Photoshopped "perfect dressage" composite stock images (overused), AI saddle imagery (stitching detail is wrong), western-themed clip art.

### 5. Vets.co

**THE HARDEST SITE TO SOURCE FOR.** Visual integrity here is load-bearing for trust. Generic stock photography destroys credibility on a clinical site.

**Source mix:** NIH/CDC (heavy — diagnostic) + Unsplash abstract/textural (limited) + AVMA when permission granted + diagrams over photos wherever possible

**Brand mood:** clinical, calm, evidence-based. Closest analog: NEJM (New England Journal of Medicine) or UpToDate.

**What to AVOID at all costs:**
- Generic vet-with-puppy stock photos (instant credibility loss)
- AI-generated clinical scenes (banned)
- Staged "happy customer testimonial" imagery
- Overly saturated stock photography
- Anything that looks like a pharmaceutical ad

**Curated starter queries:**

1. CDC PHIL: "veterinary" — diagnostic imagery, public domain
2. CDC PHIL: "rabies" — zoonotic disease content
3. CDC PHIL: "parasites" — parasitic disease content (heartworm, tick-borne)
4. CDC PHIL: "leptospirosis" — disease content
5. NIH NLM image search: "veterinary anatomy" — diagrams
6. Unsplash: "stethoscope minimal" — abstract clinical hero
7. Unsplash: "medical abstract" — abstract clinical
8. Unsplash: "white space minimal" — pure abstract for section dividers
9. Unsplash: "laboratory minimal" — diagnostic content
10. Unsplash: "microscope minimal" — diagnostic/lab content
11. **Wikimedia Commons:** "Veterinary anatomy" category — extensive line illustrations
12. **Wikimedia Commons:** "Histology" — pathology reference
13. **Wikimedia Commons:** "Radiology veterinary" — imaging examples
14. Email AVMA media@avma.org for client-education image library access
15. AAEP (equine): equine medicine reference imagery — email their press contact
16. ARAV: reptile veterinary imagery — small org, direct email works
17. **Insurance reviews:** request company logos directly from each insurance brand (Trupanion, Healthy Paws, Embrace, Pets Best, Nationwide, Lemonade Pet) via affiliate manager
18. Unsplash: "calm interior minimal" — for "find a vet" / directory pages
19. Wikimedia Commons: "Veterinary dermatology" — skin condition reference (sensitive content; vet-review per image)
20. Use **vector illustrations** in place of photos for ~50% of pages — commission a single illustrator ($2K-5K for a 30-piece library) once budget allows. Until then: Wikimedia Commons SVG anatomical diagrams.

**Selection criteria:** clinical, restrained, scientifically literate. When in doubt: use a diagram or illustration instead of a photo. Better to have 200 line drawings than 200 stock photos.

**Avoid:** every cliché. If it would fit in a corporate veterinary chain's brochure, do not use it.

### 6. Horses.com

**Source mix:** Unsplash (heavy — large equestrian pool) + Wikimedia (breeds — heavy) + manufacturer (equipment) + commissioned (Phase 2)

**Brand mood:** classic, athletic, rural-luxury. Closest analog: Country Life magazine.

**Curated starter queries:**

1. Unsplash: "horse galloping field" — hero candidate
2. Unsplash: "horse portrait" — generic hero/featured
3. Unsplash: "white horse" — atmospheric
4. Unsplash: "horse barn" — lifestyle/care content
5. Unsplash: "horse rider sunset" — lifestyle hero
6. Unsplash: "foal mother" — breeding/foaling content
7. Unsplash: "horse eye detail" — atmospheric
8. Unsplash: "horse mane wind" — atmospheric
9. Unsplash: "wild horses" — natural-history content
10. Unsplash: "horse pasture morning" — lifestyle
11. **Wikimedia Commons:** "Quarter Horse" — breed page (American Quarter Horse Association publishes under CC)
12. **Wikimedia Commons:** "Arabian horse" — breed page (extensive coverage)
13. **Wikimedia Commons:** "Thoroughbred" — breed page
14. **Wikimedia Commons:** "Friesian horse" — breed page (iconic, well-photographed)
15. **Wikimedia Commons:** "Andalusian horse" — breed page
16. **Wikimedia Commons:** "Appaloosa" — breed page
17. **Wikimedia Commons:** "Clydesdale" — draft horse breed
18. **Wikimedia Commons:** "Mustang" — breed page (BLM photos public domain)
19. **Manufacturer queue:** SmartPak (supplements, blankets, tack), Dover Saddlery (broad), Schneider's (broad), Riding Warehouse (broad), Weatherbeeta (blankets)
20. Unsplash: "horseshoe" / "farrier" — care content

**Selection criteria:** natural light over studio; environmental over isolated; classic palette (greens, browns, blues). Equestrian audience notices breed correctness — caption every breed-specific image accurately.

**Avoid:** "horse blowing in wind" overused stock composite, AI horses (consistently wrong hoof anatomy — instant tell to horse people), Native American/cowboy imagery (cultural sensitivity + not on-brief).

### 7. PetFood.com

**Source mix:** Unsplash (ingredients/lifestyle — heavy) + manufacturer (brand pages — heavy) + Wikimedia (raw ingredients)

**Brand mood:** clean, food-magazine, evaluative not promotional. Closest analog: Bon Appétit's restaurant reviews — visually delicious but editorially honest.

**Curated starter queries:**

1. Unsplash: "raw chicken ingredient" — protein ingredients
2. Unsplash: "salmon raw fillet" — protein ingredients
3. Unsplash: "beef raw" — protein ingredients
4. Unsplash: "sweet potato whole" — carbohydrate ingredients
5. Unsplash: "brown rice" — carbohydrate ingredients
6. Unsplash: "blueberries fresh" — superfoods/antioxidant ingredients
7. Unsplash: "pumpkin slice" — fiber ingredients (popular pet food add)
8. Unsplash: "fish oil bottle" — supplement ingredients
9. Unsplash: "dog food bowl wooden" — hero/lifestyle
10. Unsplash: "kibble close up" — product evaluation
11. Unsplash: "pet food ingredients flat lay" — comparison content
12. Unsplash: "dog eating bowl" — feeding behavior (use sparingly — clichéd)
13. **Wikimedia Commons:** specific ingredient close-ups (especially for less-common ingredients: "Quinoa", "Kelp Ascophyllum", "Cranberry")
14. **Manufacturer queue:** Open Farm, Stella & Chewy's, Orijen / Champion Petfoods, The Honest Kitchen, Wellness, Hill's Science Diet, Royal Canin, Purina Pro Plan, Chewy (retailer photos)
15. Unsplash: "vegetable cutting board" — ingredient preparation
16. Unsplash: "meat raw butcher" — protein sourcing content
17. Unsplash: "grain wheat barley" — grain controversy content
18. Unsplash: "carrot raw whole" — vegetable ingredients
19. Unsplash: "egg cracked yellow" — protein/ingredient
20. Unsplash: "lentils dried" — legume content (relevant to FDA DCM concerns)

**Selection criteria:** clean white/wood backgrounds; ingredient-forward (the ingredient is the subject, not "happy pet eating"); evaluative not aspirational.

**Avoid:** smiling-pet-with-bowl cliché stock, brand-supplied marketing scenes (those go on brand pages with attribution, NOT on evaluative comparison pages — keep editorial separation visible), AI-generated kibble (texture is wrong).

### 8. PetFoods.com

**Source mix:** Light photography overall — heavy data visualization (charts, ingredient comparison tables, recall timelines). This is a reference/research site, not a magazine.

**Brand mood:** dense, factual, encyclopedia-like. Closest analog: a Consumer Reports product database.

**Curated starter queries:**

1. **Manufacturer queue (heavy):** per-brand product photography for the brand-page database — request from every major brand listed on PetFood.com plus the long tail (target 50+ brands)
2. Unsplash: "data visualization minimal" — abstract hero
3. Unsplash: "ingredient label nutrition" — for recall/ingredient pages
4. **Wikimedia Commons:** raw ingredient close-ups for each ingredient page
5. Unsplash: "factory food production" — manufacturing content (limited use)
6. **Data-vis investment recommendation:** prioritize building a robust `<DataChart>` / `<RecallTimeline>` / `<IngredientComparison>` component set over photo sourcing. On this site, a great chart beats a great photo.
7. Unsplash: "pet food kibble texture" — product texture content
8. **Wikimedia Commons:** "Mycotoxin" / "Aflatoxin" — for recall/contamination educational content
9. **Wikimedia Commons:** "Dilated cardiomyopathy" — for DCM/grain-free educational content (sensitive — vet-review)
10. Unsplash: "warning sign abstract" — for recall pages (use very sparingly)
11. **Manufacturer queue continued:** request retailer (Chewy, Petco, PetSmart) bulk product photography — they often have white-background SKU databases available to affiliate partners
12. Unsplash: "lab science minimal" — for testing/methodology pages
13. **Wikimedia Commons:** "Food safety" — general illustrative content
14. Unsplash: "spreadsheet abstract" — data-content pages
15. **Strong recommendation:** invest 60% of this site's visual budget in data-vis component dev, 30% in manufacturer product photos, 10% in stock — opposite ratio from PetFood.com

**Selection criteria:** restraint. Less photography, more data. When photos appear, they should be product-specific and brand-supplied (i.e., the brand's own product shot for the brand page).

**Avoid:** atmospheric stock photos (they undermine the reference-site positioning), AI imagery anywhere, lifestyle pet shots.

### 9. Ferret.com

**Source mix:** Unsplash (moderate ferret pool) + Wikimedia (care/health) + Flickr CC (secondary) + manufacturer (Marshall Pet)

**Brand mood:** playful but careful (ferret ownership skews informed/dedicated). Closest analog: an indie hobbyist magazine.

**Curated starter queries:**

1. Unsplash: "ferret" — generic search, ~5K photos
2. Unsplash: "ferret playing" — behavior content
3. Unsplash: "ferret sleeping" — lifestyle/care
4. Unsplash: "ferret close up" — portrait/hero
5. Unsplash: "ferret outdoor" — exercise content
6. **Wikimedia Commons:** "Mustela putorius furo" — scientific-name search yields the highest-quality ferret photography
7. **Wikimedia Commons:** "Ferret colors" — coat variety content (sable, albino, panda, etc.)
8. **Wikimedia Commons:** "Ferret anatomy" — health/care content
9. Flickr CC search: "ferret" with commercial-use filter — secondary pool
10. **Manufacturer queue:** Marshall Pet Products (food, toys, harnesses), MidWest Homes for Pets (cages — Ferret Nation cage is iconic), Kaytee (food, accessories), N-Bone (treats)
11. Unsplash: "ferret hammock" — caging/habitat content
12. **Wikimedia Commons:** "Black-footed ferret" — for wild-ferret conservation content (different species, but relevant)
13. Unsplash: "ferret kit baby" — breeding/young-ferret content
14. **Wikimedia Commons:** "Ferret adrenal disease" — health content (sensitive — vet-review)
15. Unsplash: "ferret tunnel toy" — enrichment content

**Selection criteria:** sharp images (ferrets move fast — many amateur photos are blurry); clean backgrounds preferred; coat color/markings should be accurately described in caption.

**Avoid:** AI-generated ferrets (uncanny valley + wrong proportions), wild-mustelid photos misidentified as domestic ferrets (legitimacy issue).

### 10. Ferrets.com

**Source mix:** Minimal photography (per library/reference role) — heavy iconography, maps, line illustrations. Lighter visual treatment than Ferret.com.

**Brand mood:** quiet, paper-like, reference. Closest analog: a Wikipedia category portal redesigned by Pentagram.

**Curated starter queries:**

1. Unsplash: "ferret" — pick 1-2 muted ferret photos for site-wide hero; apply paper-cream tint overlay
2. Unsplash: "library book pages" — abstract texture for section dividers
3. **Iconography investment:** invest in a custom icon set (Heroicons-style, custom-drawn ferret silhouettes for category nav) — $500-1500 one-time from a freelance illustrator. This site needs ICONS more than photos.
4. **Map illustrations:** for state-by-state directory pages, use custom US/state map SVGs (free from Wikimedia Commons) with custom styling — NOT photos
5. Unsplash: "old map abstract" — atmospheric for state directory pages
6. **Wikimedia Commons:** US state maps in SVG (every state has one, all CC-licensed)
7. Unsplash: "minimal paper texture" — section dividers
8. **Wikimedia Commons:** "Ferret legality" — sourcing for legal/regulatory content (sparse but exists)
9. Unsplash: "muted natural light" — atmospheric only
10. **Recommendation:** budget 70% of this site's visual investment in icon set + map components, 20% in 5-10 anchor photos shared with Ferret.com, 10% in nothing else. The "less is more" treatment IS the brand differentiator.

**Selection criteria:** less is more. When in doubt, no image at all is better than a generic one. Reserve photos for genuine focal moments.

**Avoid:** any visual clutter, every cliché, anything that fights the reference-site quiet.

---

## Implementation workflow (concrete week-by-week)

### Today (one sitting, ~2 hours)

1. Register for Unsplash API key: https://unsplash.com/developers → Create an account → Create a new application → Demo tier is instant, gives 50 requests/hr. Apply for Production tier once first site is live (1-3 day approval).
2. Register for Pexels API key: https://www.pexels.com/api/ → 200 req/hr free tier, instant.
3. Create a per-site attribution log (one Google Sheet, 10 tabs — one per site). Columns: `image_id | source | photographer | license | attribution_string | downloaded_on | used_on_page`.
4. Bookmark Wikimedia Commons + CDC PHIL + Pexels + Unsplash in browser, set up a "Sourcing" tab group.

### This week (~6 hours over the week)

1. Email all 8 priority affiliate managers (templates above). Stagger sends across 2-3 days so replies don't pile up.
2. Browse the curated starter queries for the 3 highest-priority sites (Dog.com, Horses.com, PetFood.com — these have most traffic potential). Save 30-50 candidates per site to local storage.
3. Set up Wikimedia Commons workflow: walk through 5 sample images, verify license, save with proper filename + attribution log entry. Document any friction.
4. Subscribe to Adobe Stock $30/mo plan — first 10 assets/month for hero gap-filling. (Or defer to Month 2 if cash-tight.)

### This month

1. Run Unsplash API integration into the editorial component library: `<EditorialImage>` should accept either a local asset path OR an Unsplash photo ID + photographer name. Auto-render attribution as caption when source is API-fetched.
2. Complete starter packs for all 10 sites (30-50 images per site).
3. Receive responses from affiliate managers; download brand media kits; integrate into review pages.
4. Begin Wikimedia Commons species/breed coverage on Lizard.com and Fish.com (these are most species-dependent).

### Month 2-3

1. Adobe Stock cumulative inventory builds (~20-30 assets by end of M3).
2. Continue affiliate outreach to second-tier brands (target 30+ relationships across the network).
3. Build `<DataChart>` and `<IngredientComparison>` components for PetFoods.com (data-vis over photos).
4. Commission custom icon set for Ferrets.com ($500-1500 one-time).

### Month 6+

1. Monitor per-page traffic. Identify pages clearing 5K MAU.
2. Begin photographer outreach in markets for top-performing sites (likely Dog.com and Horses.com first).
3. Add EyeEm or Storyblocks subscription if a specific niche surface gap emerges ($30-100/mo additional).

### Month 12+

1. Commission photographer day for each site that has crossed 25K MAU. $1500-3000 per shoot. 5-10 keeper images per shoot.
2. Replace top-traffic-page hero images with commissioned originals.
3. Build photographer roster (one per niche if possible — equine specialist, reptile specialist, small-animal/dog specialist).

---

## Cost analysis

| Phase | Monthly cost | Cumulative Y1 | Notes |
|---|---|---|---|
| Month 1 | $0 | $0 | Unsplash + Wikimedia + manufacturer only |
| Month 2-3 | $30/mo | $60 | Add Adobe Stock 10-asset plan |
| Month 4-6 | $30/mo | $150 | Continue Adobe Stock; manufacturer relationships mature |
| Month 7-12 | $50-100/mo | $450-750 | Optional EyeEm/Storyblocks for niche gaps |
| Icon set (one-time) | — | $500-1500 | Ferrets.com custom icon set |
| Vets.co illustration library (one-time) | — | $2K-5K | Custom medical illustration set |
| Commissioned photography (one-time, per site) | — | $1500-3000/site | Triggered at 25K MAU per site |
| Y1 total (if 3 sites trigger commission) | — | **~$8K-15K** | Lean scenario |
| Y1 total (if 5 sites trigger commission + full illustration investment) | — | **~$15K-30K** | Aggressive scenario |

**The decision:** start at $0. Add $30/mo at Month 2. Hold there until traffic justifies commission. Visual quality scales with traffic milestones, not upfront spend.

---

## Email templates (verbatim, ready to send)

### Template 1: Affiliate program photo request

```
Subject: [Site].com — Affiliate Media Library Request

Hi [Affiliate Manager Name],

I'm Carlo Tabibi (carlo@tabibi.com) and I run [Site].com, a [niche]
reference and review site currently building toward expanded launch.

I've signed up for [Brand]'s affiliate program (affiliate ID: [ID])
and I'm preparing review and comparison content for the [Product
Category] section. I'd like to include your product imagery in those
pages with proper attribution and per your standard media guidelines.

Could you point me to your press/affiliate media library, or send a
curated set of high-resolution product photos for these specific SKUs:

- [Product 1]
- [Product 2]
- [Product 3]

I'll credit per your standard requirements and follow your brand
guidelines on logo treatment, color, and product context. Happy to
share mockups before publish if useful.

Thanks for your help,
Carlo Tabibi
[Site].com
carlo@tabibi.com
```

### Template 2: Wikimedia Commons attribution boilerplate

For image caption, footer, or credits page:

```
Photo: [Photographer Name] / Wikimedia Commons / [License code with link to license]
```

Example:
```
Photo: Jane Smith / Wikimedia Commons / CC BY-SA 4.0
```

The license code should link to the corresponding Creative Commons page (e.g., https://creativecommons.org/licenses/by-sa/4.0/).

### Template 3: Unsplash attribution boilerplate

For image caption (direct download — optional but recommended):

```
Photo by [Photographer Name] on Unsplash
```

For API-fetched images (required):

```
Photo by [Photographer Name with link to their Unsplash profile] on
[Unsplash with link to unsplash.com]
```

### Template 4: Photographer commission RFP

```
Subject: Pet/Equine Editorial Photography Brief — [Site].com

Hi [Photographer],

I'm Carlo Tabibi, publisher of [Site].com (an editorial reference
site in the [niche] space). I'm looking for a photographer to shoot
5-10 hero images for our top traffic pages — clean, editorial,
shallow-DOF, natural-light aesthetic; think New York Times Magazine
or Kinfolk for pets.

Shoot scope:
- 1 full day on location ([City])
- Subject: [breed/species/equipment]
- Deliverable: 5-10 selects, color-corrected, in two crops (16:9 hero,
  4:3 featured-slot)
- Usage rights: editorial perpetual web use on [Site].com, with
  photographer credit in caption
- Budget: $1500-3000 for the day

If interested, I'd love to see a portfolio sample of pet/animal
editorial work. Available to scope a brief call this week.

Thanks,
Carlo Tabibi
carlo@tabibi.com
```

---

## Starter pack format (reference)

Per the no-fabrication constraint, this doc does not list specific image URLs (URLs change, get deleted, or were never seen — fabricating them poisons the workflow). Instead, when Carlo (or a future agent) browses each source per the queries above, log selections in this format:

| Field | Example |
|---|---|
| URL | https://unsplash.com/photos/[id] |
| Source | Unsplash / Wikimedia / Pexels / Manufacturer / CDC PHIL |
| Search query | "golden retriever puppy autumn" |
| Recommended use | Hero / Featured / Category Card / In-Article |
| License | Unsplash License / CC BY-SA 4.0 / Public Domain / Brand-supplied |
| Attribution string | "Photo by Jane Smith on Unsplash" |
| Rationale | "warm golden hour mood, fits Dog.com brand brief" |

Keep this log in the per-site Google Sheet (one tab per site). Reuse the same image across pages within a site is fine if rationale supports; reuse across sites breaks visual differentiation — avoid.

---

## Risks + open questions

- **Unsplash API Production tier approval** — requires demonstrable use. Don't apply until first site has live integration. ~3 day approval window when we apply.
- **Wikimedia Commons CC-BY-SA share-alike clause** — derivative modifications (heavy crops, color shifts) may trigger share-alike. Verify with legal once we have a clear modification workflow.
- **Manufacturer affiliate program approval rates** — some brands (especially Stubben, Pessoa — premium brands) screen affiliates and may reject sub-launch sites without traffic. Expect to re-apply at 6 months with traffic data.
- **AVMA / AAEP / ARAV permission turnaround** — small orgs, expect 1-3 week response time. Email this week regardless to start the clock.
- **AI-generation policy enforcement** — needs a pre-publish QC check. Tonight's component library should consider adding an `aiGenerated: boolean` prop to `<EditorialImage>` that forces an alt-text disclosure.
- **Reverse-image-search workflow** — manual TinEye/Google Images lookup is friction. Worth automating in M3+ if image volume justifies.

---

## Deeper notes per source — operational addenda

### Unsplash, deeper

**Search query craft matters more than you'd think.** Generic single-word searches ("dog", "horse", "fish") return the most over-used images first because Unsplash sorts by engagement. The trick is multi-token specificity. Compare:

- "dog" → returns the top 50 most-used dog photos on the internet
- "dog mountain hiking" → returns ~500 results, mostly under-used
- "australian shepherd mountain hiking autumn" → returns ~50 results, most never used commercially

**Photographer hunting** is more efficient than search hunting once you find 2-3 contributors with a consistent style fit. For example, photographers who shoot mostly nature/landscape often have a few high-quality animal images in their portfolios that don't surface in animal searches. Once you find a photographer who shoots in the editorial style we want (shallow DOF, golden hour, restrained palette), browse their full profile — it's often a goldmine.

**Collections** on Unsplash are curated sets, often by Unsplash editors. Searching "collection" + topic surfaces hand-picked sets that are higher quality on average than the algorithmic search.

**Trends to avoid** in 2025-2026 Unsplash aesthetic: extreme HDR, oversaturated sunsets, drone shots of generic landscapes, flat-lay food with hands reaching in, anyone in a Halloween costume. These are all visible signs of a content site that "just searched stock and shipped."

### Wikimedia Commons, deeper

**Category navigation** beats search for systematic species coverage. Once you find one good species photo, scroll to the bottom of its file page — every Commons image is filed in categories. Click the genus or family category to browse hundreds of related images. This is how you find the rare/well-photographed examples that don't surface in keyword search.

**Quality filtering shortcuts:** Wikimedia has "Featured pictures" and "Quality images" badges. Filter to these in category browsing. Featured pictures are roughly the top 0.1% of Commons quality — usable as-is for hero slots.

**License gotchas to know:**
- **CC0** — public domain, no attribution required, no share-alike. Use freely.
- **CC-BY 2.0 / 3.0 / 4.0** — attribution required (photographer + license + link). The version number rarely matters for our use.
- **CC-BY-SA 2.0 / 3.0 / 4.0** — attribution + share-alike. The share-alike clause requires derivatives to use the same license. For our use (embedding photo with caption credit, no modification beyond crop/resize/compression), most legal interpretations say share-alike does NOT apply. If we modify substantially (color shift, composite, illustration overlay), it applies and we'd need to mark the derivative work CC-BY-SA. Safer interpretation: never modify beyond crop/compress, and you stay clear.
- **CC-BY-NC** — non-commercial only. **Do not use.** Our sites are commercial (affiliate revenue).
- **GFDL** — older license, similar to CC-BY-SA. Treat as attribution required.
- **PD-USGov / PD-NASA / PD-USDA** — US government public domain. Use freely, attribute by professional courtesy.
- **PD-self** — photographer released to public domain. Treat as CC0.

**Always** open the file page (not just preview thumbnail) and read the License section before saving.

### CDC PHIL (Public Health Image Library), deeper

**Direct URL:** https://phil.cdc.gov

This is the single best free source for medical/clinical/diagnostic imagery. ~12,000 photos, most public domain. Search by disease name, organ system, or "veterinary." Captions include detailed clinical descriptions written by CDC staff — copy these into image alt-text for SEO and accessibility.

**Notable categories for Vets.co:**
- Zoonotic diseases (rabies, leptospirosis, brucellosis, Lyme disease, Q fever)
- Parasitology (ticks, fleas, heartworm, intestinal parasites — photomicrographs)
- Vector control (mosquitoes, ticks — relevant to pet health content)
- Outbreak imagery (rarely used but available)

**Use with care:** some clinical imagery is graphic (post-mortem, severe lesions). Filter by audience context before publishing.

### Manufacturer outreach, deeper

**The affiliate program landscape** is fragmented across networks:
- **Impact (impact.com)** — largest network, used by Trupanion, many premium brands
- **ShareASale** — broad coverage, especially smaller brands, equine + reptile
- **Partnerize** — used by larger retailers (Chewy historically)
- **CJ Affiliate (Commission Junction)** — broad
- **Awin** — international, some equine
- **Direct/in-house** — many brands run programs on their own site (especially niche: Marshall Pet, Aquarium Co-Op, Zoo Med)

Sign up for accounts on Impact, ShareASale, and CJ first — those three cover ~70% of relevant pet/equine brands. Each network has a search/directory of their merchants — browse and apply to relevant programs in batch (target 20-30 applications across the 10 sites).

**Application tips:**
- Have each site's "Our Audience" / "About" page live before applying — networks rubber-stamp sites with clear positioning
- Honest traffic numbers > inflated numbers (small honest traffic gets approved; inflated numbers get audited and rejected)
- Mention specifically how you'll use the brand's products in your content
- Premium brands (Stubben, Antares, Pessoa, Orijen, Open Farm) may want to see content samples — have one polished review ready as a sample

**Once approved, what to ask for:**
1. Media library URL / login
2. Brand guidelines doc (logo treatment, color, voice)
3. Specific product photos for SKUs you plan to review
4. Permission scope (web only, print, social — get all rights upfront if available)
5. Renewal terms (do rights expire if you leave the affiliate program?)

**Long tail (beyond the 8 priority brands):**

- **Dog.com:** PetSafe, Ruffwear, Kong, Petco, PetSmart, BarkBox, Outward Hound, Hill's, Royal Canin, Purina, Wellness, Honest Kitchen, Stella & Chewy's, Furbo, Whistle
- **Fish.com:** Tetra, Hagen, Marina, Penn-Plax, Aqueon, Caribsea (substrates), Two Little Fishies (marine), Bulk Reef Supply
- **Lizard.com:** Repashy, Mazuri, Pangea (crested gecko diets), Big Apple Herp, Josh's Frogs, LLLReptile
- **Saddle.com:** SmartPak (overlap with Horses), Dover, Schneider's, State Line Tack, Tucker, Circle Y, Bates, Wintec, Antares, Devoucoux
- **Horses.com:** SmartPak, Dover, Riding Warehouse, Mary's Tack, Tractor Supply (broad), Weatherbeeta, Horseware Ireland, Cashel
- **PetFood.com:** all of Dog.com brand list, plus boutique brands (Carna4, Acana, Fromm, Nulo, Earthborn, Taste of the Wild, Merrick, Solid Gold)
- **Vets.co:** Trupanion, Healthy Paws, Embrace, Pets Best, Nationwide, ASPCA, Lemonade, Spot, MetLife Pet, Figo
- **Ferret.com:** Marshall, MidWest, Kaytee, Oxbow, Wild Harvest, Living World, Super Pet, Triple Crown, Sherwood Pet Health
- **PetFoods.com:** all brand affiliations from PetFood.com plus retailer brands (Chewy, Petco, PetSmart, Amazon)

**Realistic expectation:** of 30+ affiliate applications, ~60% approve in week 1, 20% approve in week 2-4, 10% approve after sample content delivery, 10% reject (usually because we're too early-stage).

### Adobe Stock, deeper

**Plan options:**
- 10 assets/month — $30/mo (recommended starter)
- 40 assets/month — $80/mo (after Month 6 if usage justifies)
- 350 assets/month — $200/mo (only if we hit serious volume, unlikely Year 1)

**Asset rollover:** unused monthly downloads roll forward up to a cap (currently 120 assets accumulated). So $30/mo with light use builds a stockpile of ~80-100 ready assets within a year.

**Workflow:** treat Adobe Stock as the "hero gap-filler" exclusively. When you can't find what you need on Unsplash or Wikimedia in 15 minutes of searching, Adobe is the fallback. Don't burn assets on category cards or in-article images — Unsplash is fine for those.

**Subscription cancellation note:** rights to downloaded assets persist after cancellation under Standard License. So if cash gets tight, can cancel without losing existing inventory.

### Pexels, deeper

Lower priority. Use in two specific situations:
1. Unsplash search for a specific concept returns nothing usable (rare)
2. Need a video clip for hero motion content (Unsplash doesn't have video; Pexels does)

Apply for API access if/when integrating video; otherwise direct download is fine.

### Flickr Creative Commons search, deeper

Direct URL: https://www.flickr.com/search/?license=4%2C5%2C6%2C9%2C10

This filters to CC-licensed images (BY, BY-SA, BY-ND, CC0, public domain). Strong for:
- Niche species photography (hobbyist contributors)
- Travel/location-specific imagery
- Historical/archival imagery (Library of Congress has a massive Flickr presence)

**Caveats:** quality is highly variable; license markings are sometimes outdated (photographer may have changed license since upload — re-verify); attribution requires photographer's Flickr handle.

**Best uses across our network:**
- Lizard.com supplement for Wikimedia
- Vets.co for harder-to-find clinical/anatomical images
- Horses.com for historical breed photography

---

## Visual brand consistency rules (cross-site)

Per site has its own mood (specified per-site above), but several rules apply across all 10 sites:

1. **Color grade consistency:** within a single site, all photos should feel like they belong to the same world. If you're using Unsplash images from 10 different photographers, run them through a consistent color preset (Lightroom presets or VSCO filters) to unify. Even a subtle warmth/contrast adjustment glues the visual identity together.

2. **Aspect ratio standards:**
   - Hero: 16:9 (or 21:9 for ultra-wide)
   - Featured/category card: 4:3 or 3:2
   - In-article inline: original ratio respected, max width 800px
   - Square (1:1) reserved for thumbnails/social, never main content

3. **Composition rules:**
   - Subject in left or right third (rule of thirds), rarely centered
   - Leave 20%+ negative space for text overlay on hero images
   - Crop tight for category cards (subject fills frame)
   - Avoid heavy props/clutter in background

4. **Color palette ranges per site** (rough guide for Lightroom preset development):
   - Dog: warm, autumn (orange/brown/cream)
   - Fish: cool, oceanic (blue/teal/white)
   - Lizard: earthy (sand/green/sage)
   - Saddle: rich classical (brown/black/brass)
   - Vets: neutral clinical (white/gray/sage)
   - Horses: classic rural (green/brown/cream)
   - PetFood: clean food-mag (white/wood/cream)
   - PetFoods: minimal data-vis (white/gray/accent)
   - Ferret: warm playful (cream/brown/peach)
   - Ferrets: muted reference (paper/cream/charcoal)

5. **Text overlay handling:** if hero needs text overlay, prefer images with clear negative space (sky, plain wall, blurred bokeh) over busy compositions. Test contrast ratios for WCAG AA compliance.

6. **Loading behavior:** all images lazy-load below the fold; hero images preload with `<link rel="preload">`. File sizes: hero ≤200KB, category cards ≤80KB, inline images ≤100KB. These are enforced in the build pipeline, but choose sources that compress well (heavy noise/grain images don't compress, avoid).

---

## Per-site quick-reference card

For at-a-glance review:

| Site | Primary source | Secondary | Manufacturer priority | AI policy | Phase 2 trigger |
|---|---|---|---|---|---|
| Dog.com | Unsplash | Wikimedia (breeds) | Trupanion, Chewy, BarkBox | Banned | 25K MAU → commission |
| Fish.com | Wikimedia (species) | Unsplash (lifestyle) | Fluval, Eheim, Aquarium Co-Op | Banned | 25K MAU → commission |
| Lizard.com | Wikimedia (species) | Flickr CC | Zoo Med, Exo Terra | Banned | 25K MAU → commission |
| Saddle.com | Manufacturer (reviews) | Unsplash | Stubben, SmartPak, Bates | Banned | 25K MAU → commission |
| Vets.co | NIH/CDC | Wikimedia diagrams | Insurance brands | Banned (clinical) | Illustration set first |
| Horses.com | Unsplash | Wikimedia (breeds) | SmartPak, Dover | Banned | 25K MAU → commission |
| PetFood.com | Unsplash (ingredients) | Manufacturer (brands) | Open Farm, Stella, Chewy | Banned | 25K MAU → commission |
| PetFoods.com | Manufacturer (brands) | Data-vis | All from PetFood | Banned | Data-vis component first |
| Ferret.com | Unsplash | Wikimedia | Marshall Pet, MidWest | Banned | 25K MAU → commission |
| Ferrets.com | Iconography | Light Unsplash | None | Banned | Custom icon set first |

---

## What this doc does NOT cover (out of scope)

- Image compression pipeline (covered separately in image-strategy / PR #63 follow-up)
- Alt-text writing standard (covered in QC-STANDARDS)
- Image hosting / CDN (covered in infrastructure docs)
- Component implementation details (covered in editorial component library)
- Long-tail brand affiliate outreach beyond the top 8 (next sprint)

---

## Hand-off

**To:** Carlo (this is direct-to-Carlo, not to a build agent — the work is browsing + emailing + sourcing, which is Carlo's call).

**Definition of done for this playbook to feel valuable:**
1. Carlo has registered Unsplash API key by end of week
2. Carlo has emailed 8 priority affiliate managers by end of week
3. Carlo has spent ~2 hours browsing curated queries for top-3 sites and saved 30-50 candidates per site
4. Per-site attribution log Google Sheet exists with first 30+ entries logged

**Next handoff (after this is done):** to build — integrate `<EditorialImage>` with Unsplash API + attribution rendering, build `<DataChart>` set for PetFoods.com.

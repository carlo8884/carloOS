import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  EmailCapture,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Animal Protein Sources in Pet Food — A Reference',
  description:
    'AAFCO animal protein categories — named meat, named meal, generic meal, by-products, plant proteins, hydrolysates, and insect protein — and what each implies.',
  path: '/ingredients/animal-protein-sources',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Animal Protein Sources in Pet Food — A Reference',
  description:
    'Reference page on animal and alternative protein sources in pet food, working from the AAFCO ingredient definitions through transparency, amino-acid completeness, and what each category means for cats vs dogs.',
  url: 'https://petfood.com/ingredients/animal-protein-sources',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-05-29T00:00:00Z',
  modifiedAt: '2026-05-29T00:00:00Z',
})

export default function AnimalProteinSourcesPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Animal Protein Sources in Pet Food',
        subtitle:
          'The protein panel of a pet food label is the most-discussed and most-misunderstood section of the bag. Whether an ingredient reads as "chicken," "chicken meal," "poultry by-product meal," "pea protein," or "hydrolyzed soy protein" carries real implications for transparency, amino-acid completeness, and digestibility — but not in the direction marketing copy usually claims. This page works through the AAFCO ingredient categories, what each one actually means, and how to read them on a label.',
        category: 'Ingredient Reference',
        publishedAt: 'May 2026',
        readTime: '15 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Ingredients' },
        { name: 'Animal Protein Sources', href: '/ingredients/animal-protein-sources' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'Why Protein Source Matters', href: '#why' },
              { label: 'AAFCO Ingredient Definitions', href: '#aafco' },
              { label: 'Named Whole Protein', href: '#whole' },
              { label: 'Named Meal', href: '#named-meal' },
              { label: 'Generic Meal', href: '#generic-meal' },
              { label: 'By-Products', href: '#by-products' },
              { label: 'Plant Proteins', href: '#plant' },
              { label: 'Hydrolyzed Proteins', href: '#hydrolyzed' },
              { label: 'Insect Protein', href: '#insect' },
              { label: 'Cats vs Dogs', href: '#species' },
              { label: 'Reading the Label', href: '#label' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Reading a Pet Food Label', href: '/guides/reading-pet-food-labels' },
              { label: 'AAFCO Completeness Explained', href: '/guides/aafco-completeness-explained' },
              { label: 'Preservatives in Pet Food', href: '/ingredients/preservatives-pet-food' },
              { label: 'Our Scoring Methodology', href: '/guides/methodology' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="animal-protein-sources"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <p>
          A pet food label&apos;s ingredient panel is, by AAFCO rule, listed in descending order
          by ingoing weight before processing. That single rule is the source of most consumer
          confusion. A bag that lists &quot;chicken&quot; first is using fresh chicken, which is
          roughly 65-75% water at the ingoing step. Once the water is driven off in extrusion, the
          finished contribution of that chicken to the kibble is a small fraction of the ingoing
          weight. A bag that lists &quot;chicken meal&quot; first is using chicken meal — already
          dried to roughly 8-10% moisture — and the finished contribution is closer to the ingoing
          weight. Neither is &quot;better&quot; in the abstract; they are different ingredients
          with different processing implications.
        </p>
        <p>
          This page works through the major AAFCO-defined animal and alternative protein
          categories, the transparency implication of each, the amino-acid considerations that
          matter for cats and dogs, and what reading a label well looks like in practice.
        </p>

        <h2 id="why">Why Protein Source Matters</h2>
        <p>
          Three things matter about a protein ingredient: how much of it is in the recipe (which
          the label tells you on a relative ordinal scale, not a percentage), how complete its
          amino-acid profile is for the target species, and how digestible it is. Crude protein on
          the guaranteed analysis tells you the total nitrogen content of the finished food
          (multiplied by 6.25) but does not tell you the amino-acid distribution or the
          digestibility of that protein. A 30% crude protein dog food built on leather scraps and
          a 30% crude protein dog food built on chicken muscle would test similarly on the
          guaranteed analysis and feed completely differently. The protein source on the
          ingredient panel is the single best clue an owner has to digestibility and amino-acid
          completeness, short of asking the manufacturer for typical-analysis amino-acid data.
        </p>
        <p>
          Cats are obligate carnivores, with specific requirements for taurine, arachidonic acid,
          retinol-form vitamin A, and several amino acids (methionine, cystine, arginine) at
          levels rarely met by plant-sourced ingredients alone. Dogs are facultative omnivores,
          with more dietary flexibility, but still benefit from highly-digestible animal protein
          as a meaningful share of the diet. The species difference is real and matters for how
          to read a label.
        </p>

        <h2 id="aafco">AAFCO Ingredient Definitions</h2>
        <p>
          The Association of American Feed Control Officials (AAFCO) publishes the ingredient
          definitions that U.S. pet food manufacturers must use on the ingredient panel. These
          are not nutrition standards — they are naming standards. The definitions specify what
          a manufacturer is allowed to call an ingredient, what tissues and species may be
          included, and what processing steps the ingredient has undergone. The 2025 AAFCO
          Official Publication, Chapter 6, contains the operative definitions for meat,
          poultry, fish, and by-product ingredients used in pet food.
        </p>
        <p>
          Understanding the AAFCO definitions removes most of the marketing fog from the
          ingredient panel. A &quot;chicken&quot; ingredient and a &quot;poultry by-product
          meal&quot; ingredient are not arbitrary marketing labels — they are tightly defined
          terms with specific tissue inclusions, specific species rules, and specific moisture
          targets.
        </p>

        <h2 id="whole">Named Whole Protein</h2>
        <p>
          Examples: &quot;chicken,&quot; &quot;beef,&quot; &quot;salmon,&quot; &quot;turkey,&quot;
          &quot;lamb,&quot; &quot;duck.&quot; The AAFCO definition for &quot;meat&quot; (Section
          9.36 in the 2025 OP) is &quot;the clean flesh derived from slaughtered mammals and is
          limited to that part of the striate muscle which is skeletal or that which is found in
          the tongue, in the diaphragm, in the heart, or in the esophagus.&quot; The species-named
          versions (&quot;chicken,&quot; &quot;beef&quot;) restrict to a single species.
        </p>
        <p>
          The transparency implication is the strongest in this category: the species is named,
          the tissue is restricted to skeletal and named cardiac/diaphragmatic muscle, and the
          ingredient is the wet, unrendered material. The drawback for an owner reading a
          kibble label is that fresh meat is ~70% water at the ingoing step, so the finished-
          product contribution is materially smaller than the position on the panel would
          suggest. The convention some brands use of listing fresh meat first, then a meal
          second, is a defensible approach to delivering both fresh-source palatability and
          meal-source nutrient density.
        </p>
        <p>
          A bag that lists multiple named whole proteins in the top five ingredients is, on the
          transparency dimension, scoring near the top of our rubric. It is not automatically a
          better food on completeness, digestibility, or recall-history dimensions — those are
          independent.
        </p>

        <h2 id="named-meal">Named Meal</h2>
        <p>
          Examples: &quot;chicken meal,&quot; &quot;turkey meal,&quot; &quot;lamb meal,&quot;
          &quot;salmon meal.&quot; A named meal is the rendered, dried product from a named
          species. AAFCO defines &quot;meat meal&quot; (Section 9.40) as &quot;the rendered
          product from mammal tissues, exclusive of any added blood, hair, hoof, horn, hide
          trimmings, manure, stomach, and rumen contents&quot; with stated moisture, fat,
          fiber, and ash maxima. The species-named meals (&quot;chicken meal&quot;) are restricted
          to that species and inherit the corresponding compositional rules.
        </p>
        <p>
          Named meals are nutrient-dense (typically 60-70% crude protein on a dry-matter basis)
          and contribute meaningful finished-product protein and minerals per ingoing pound.
          From a transparency perspective, named meals score well — species is specified, tissue
          inclusion rules apply, and the processing step (rendering) is disclosed by virtue of
          the term &quot;meal.&quot; The drawback is that the rendered product is not directly
          inspectable on the consumer side; the owner is relying on supplier-verification by the
          pet food manufacturer.
        </p>
        <p>
          On our scoring rubric, named meals from a single named species (&quot;chicken meal,&quot;
          &quot;salmon meal&quot;) score at the top of the meal category. They are a more
          concentrated and more shelf-stable contribution than fresh meat, with no transparency
          loss provided the species is named.
        </p>

        <h2 id="generic-meal">Generic Meal</h2>
        <p>
          Examples: &quot;meat meal,&quot; &quot;poultry meal,&quot; &quot;meat and bone meal,&quot;
          &quot;poultry by-product meal.&quot; A generic meal is a rendered, dried product where
          the species is not named on the ingredient panel. AAFCO definitions allow these terms
          for product where the species composition can vary lot-to-lot or where multiple species
          are intentionally blended at the rendering plant.
        </p>
        <p>
          The transparency loss is the main reason generic meals score lower on our rubric. An
          owner reading &quot;poultry meal&quot; cannot tell whether the meal in their bag is
          predominantly chicken, predominantly turkey, predominantly duck, or a mixed-species
          blend, and the composition can shift from one production run to the next. For owners
          managing suspected protein intolerance or doing an elimination trial under veterinary
          supervision, generic meals are categorically unsuitable because the protein source is
          not known.
        </p>
        <p>
          Generic meals are not, on the nutritional dimension alone, low-quality ingredients —
          they can be high in protein, in mineral content, and in digestibility. The lower score
          on our rubric reflects the transparency loss, not a claim about the nutrient density.
          Brands that use generic meals and decline to disclose the species composition forfeit
          the transparency points; brands that use named meals capture them.
        </p>

        <h2 id="by-products">By-Products</h2>
        <p>
          Examples: &quot;chicken by-product meal,&quot; &quot;poultry by-product meal,&quot;
          &quot;beef by-products.&quot; AAFCO defines &quot;poultry by-products&quot; (Section
          9.71) as &quot;non-rendered clean parts of carcasses of slaughtered poultry such as
          heads, feet, viscera, free from fecal content and foreign matter except in such trace
          amounts as might occur unavoidably in good factory practice.&quot; The meal variant
          (&quot;poultry by-product meal&quot;) is the rendered, dried version.
        </p>
        <p>
          By-products are nutritionally meaningful. Organ meats — liver, kidney, heart, spleen —
          are dense sources of vitamin A, B-vitamins, iron, copper, and (in the case of heart)
          taurine. The Association of American Feed Control Officials and the U.S. Food and Drug
          Administration both formally recognize by-products as appropriate ingredients in pet
          food. The marketing framing of &quot;by-products are filler&quot; or &quot;by-products
          are what&apos;s left over&quot; is not consistent with the AAFCO definition; the
          included tissues are nutritionally valuable.
        </p>
        <p>
          The transparency criticism of by-products is the one that holds up. When the term is
          species-generic (&quot;poultry by-product meal&quot;), the owner cannot tell which
          species the by-products are from. When it is species-named (&quot;chicken by-product
          meal&quot;), the species is known but the specific tissue inclusion is not (the
          AAFCO definition allows a range). For owners conducting an elimination trial, even
          named by-products are not ideal because tissue composition can shift lot-to-lot.
        </p>
        <p>
          On our rubric, by-products score in the middle of the protein-source range. They are
          nutritionally appropriate, formally defined, and not the &quot;floor sweepings&quot;
          marketing copy sometimes suggests. They lose transparency points relative to named
          whole proteins and named meals.
        </p>

        <h2 id="plant">Plant Proteins</h2>
        <p>
          Examples: &quot;pea protein,&quot; &quot;potato protein,&quot; &quot;soybean meal,&quot;
          &quot;corn gluten meal,&quot; &quot;wheat gluten,&quot; &quot;lentils,&quot;
          &quot;chickpeas.&quot; Plant proteins range from whole pulses (lentils, chickpeas,
          peas) at roughly 20-25% crude protein on a dry-matter basis to concentrated isolates
          (pea protein, potato protein) at 75-85% crude protein.
        </p>
        <p>
          The substantive concern with plant proteins is amino-acid completeness, particularly
          for cats. Cats are obligate carnivores with high dietary requirements for taurine,
          methionine, cystine, and arginine, plus pre-formed retinol-form vitamin A and
          arachidonic acid. A cat food built predominantly on plant protein requires careful
          supplementation to meet AAFCO cat-food profile minima, and even with supplementation
          the digestibility of plant protein for cats is lower than for dogs. Most veterinary
          nutritionists, and the WSAVA Global Nutrition Committee, recommend that the protein
          base of a cat food include named animal proteins as a meaningful share.
        </p>
        <p>
          For dogs, plant proteins are more dietetically defensible — dogs are facultative
          omnivores and can derive nutritional value from a broader ingredient base. The
          concerns are: (a) some plant proteins, especially pulses (peas, lentils, chickpeas),
          are part of the formulation pattern named in the FDA CVM 2018-2019 DCM investigation
          (see our <a href="/ingredients/grain-free-dcm-risk">grain-free and DCM page</a>); and
          (b) concentrated plant-protein isolates used to inflate the crude-protein number on
          the guaranteed analysis can change the amino-acid balance of the recipe in ways the
          headline number does not reveal.
        </p>
        <p>
          Plant proteins are not categorically inappropriate. They are inputs whose interpretation
          depends on the species (cat vs dog), the formulation context (sole protein vs blended
          with animal sources), and the regulatory pathway (formulation vs feeding trial). Our
          rubric scores plant-protein use neutrally when blended in moderate share with named
          animal proteins, negatively when used as the dominant protein source for cats, and
          flag-for-vet-discussion when used as the dominant carbohydrate base for dogs in
          DCM-predisposed breeds.
        </p>

        <h2 id="hydrolyzed">Hydrolyzed Proteins</h2>
        <p>
          Examples: &quot;hydrolyzed chicken liver,&quot; &quot;hydrolyzed soy protein,&quot;
          &quot;hydrolyzed feather protein.&quot; Hydrolysis is a processing step that breaks
          intact proteins into smaller peptides and free amino acids using enzymatic, acid, or
          base treatment. The clinical application is allergy management: an elimination diet
          built on a hydrolysate aims to deliver a peptide profile small enough that the immune
          system does not recognize it as the parent protein, reducing the likelihood of an
          allergic response.
        </p>
        <p>
          Hydrolyzed-protein diets are primarily a veterinary therapeutic category. Hill&apos;s
          z/d, Royal Canin Hydrolyzed Protein and Anallergenic, Purina Pro Plan HA, and several
          other therapeutic diets are built on hydrolysates. The molecular weight of the
          hydrolysate matters for clinical efficacy — Royal Canin&apos;s Anallergenic uses a
          lower-molecular-weight hydrolysate (typically &lt;1 kDa) and is positioned for cases
          where the standard hydrolyzed-protein diet has not produced clinical improvement.
        </p>
        <p>
          For owners not managing a diagnosed food allergy under veterinary supervision,
          hydrolyzed-protein diets are not the right category. They are premium-priced, have
          reduced palatability for some animals, and are designed for a specific clinical
          purpose. Elimination trials should be conducted under a veterinarian&apos;s
          supervision; self-directed elimination is unreliable for diagnosing food allergy.
        </p>

        <h2 id="insect">Insect Protein</h2>
        <p>
          Examples: &quot;dried black soldier fly larvae,&quot; &quot;black soldier fly larvae
          meal,&quot; &quot;cricket meal,&quot; &quot;mealworm meal.&quot; Insect protein is an
          emerging category in pet food, driven by the search for novel proteins (for allergy
          management) and by sustainability considerations (insect production has a substantially
          lower land, water, and greenhouse-gas footprint than livestock production).
        </p>
        <p>
          AAFCO formally defined &quot;dried black soldier fly larvae&quot; as an ingredient for
          adult dog food via the 2021 ingredient definitions process. The European Food Safety
          Authority and the European Commission have also approved several insect species for
          pet food use. Insect protein at the larva stage is approximately 40-45% crude protein
          on a dry-matter basis with an amino-acid profile broadly comparable to poultry meal.
        </p>
        <p>
          The two practical considerations are: (a) insect protein is a novel protein for almost
          all dogs and cats, which makes it a candidate for elimination trials (in consultation
          with a veterinarian) and an undesirable choice for owners who want to preserve the
          option of using a novel protein later for an allergy work-up; and (b) the regulatory
          and supply infrastructure is still developing, so SKU availability and price stability
          are less mature than for traditional animal proteins.
        </p>

        <h2 id="species">Cats vs Dogs — The Species Difference</h2>
        <p>
          The single most important framing for an owner reading a protein panel is the species
          difference. Cats are obligate carnivores: they cannot synthesize taurine adequately
          from precursors, cannot convert beta-carotene to retinol-form vitamin A, cannot
          synthesize arachidonic acid from linoleic acid, and have higher protein-and-amino-acid
          requirements than dogs as a percentage of dietary energy. The AAFCO Cat Food Nutrient
          Profile reflects these requirements with higher minimum protein, taurine, arachidonic
          acid, and retinol values than the Dog Food Nutrient Profile.
        </p>
        <p>
          Dogs are facultative omnivores: they synthesize taurine from methionine and cystine
          (with breed-specific exceptions where synthesis appears insufficient — Cocker Spaniels,
          Newfoundlands, and a subset of other breeds), can convert beta-carotene to vitamin A,
          and can synthesize arachidonic acid. The AAFCO Dog Food Nutrient Profile allows for
          broader dietary flexibility.
        </p>
        <p>
          The practical implication: a protein profile that is appropriate for a dog can be
          inappropriate for a cat. Plant-protein-heavy formulations require more careful
          amino-acid supplementation for cats; novel-protein formulations may be appropriate
          for either species but should be initiated in consultation with a veterinarian if the
          animal has a clinical reason for diet change.
        </p>

        <h2 id="label">Reading the Protein Panel in Practice</h2>
        <p>
          A practical approach to reading the protein section of a pet food label:
        </p>
        <ol>
          <li>
            <strong>Look at the first five ingredients.</strong> The AAFCO ordinal ordering means
            the first five are the largest contributors by ingoing weight. What is named here
            tells you most of what you need to know about the protein architecture of the recipe.
          </li>
          <li>
            <strong>Note named vs generic.</strong> &quot;Chicken meal&quot; tells you more than
            &quot;poultry meal.&quot; &quot;Beef&quot; tells you more than &quot;meat.&quot;
            Brands that name species are choosing transparency; brands that do not are choosing
            supply flexibility.
          </li>
          <li>
            <strong>Note fresh vs meal split.</strong> Recipes that lead with fresh meat are
            using a wet ingredient that loses substantial weight in extrusion. Recipes that pair
            fresh meat with a named meal in the top five are balancing palatability with
            finished-product nutrient density.
          </li>
          <li>
            <strong>Look for the AAFCO statement.</strong> The substantiation pathway (formulation
            vs feeding trial) is independent of the protein source but matters for completeness.
            See our <a href="/guides/aafco-completeness-explained">AAFCO page</a>.
          </li>
          <li>
            <strong>For cats, look for animal protein early.</strong> A cat food whose first
            five ingredients are dominated by plant proteins requires more careful supplementation
            to meet feline amino-acid requirements. Animal protein in the lead is appropriate
            for the species.
          </li>
          <li>
            <strong>If managing food allergy, ask a vet.</strong> Self-directed protein-source
            swapping is not a reliable way to manage food allergy. Veterinary elimination trials
            with a known novel protein or hydrolysate are the diagnostic standard.
          </li>
        </ol>

        <h2 id="sources">Sources</h2>
        <ul>
          <li>
            Association of American Feed Control Officials. <em>2025 AAFCO Official Publication</em>,
            Chapter 6 (ingredient definitions: meat, meat meal, poultry, poultry by-product meal,
            fish meal, and species-named variants); Chapter 4 (nutritional adequacy
            substantiation). Section 9.36 (meat), 9.40 (meat meal), 9.71 (poultry by-products),
            9.74 (poultry by-product meal), and the 2021 dried black soldier fly larvae addition.
          </li>
          <li>
            World Small Animal Veterinary Association (WSAVA) Global Nutrition Committee.
            <em> Global Nutrition Guidelines</em>; <em>Recommendations on Selecting Pet Foods</em>.
          </li>
          <li>
            National Research Council. <em>Nutrient Requirements of Dogs and Cats</em> (2006).
            Authoritative reference on species-specific amino-acid and micronutrient
            requirements; underlies the AAFCO profile values.
          </li>
          <li>
            U.S. Food and Drug Administration, Center for Veterinary Medicine. Guidance on pet
            food ingredient and labeling regulations; FDA position on by-product ingredients;
            <em> FDA Provides Update on Investigation into Potential Connection Between Certain
            Diets and Cases of Canine Heart Disease</em> (27 June 2019).
          </li>
          <li>
            European Food Safety Authority (EFSA). Scientific opinions on insect-derived proteins
            in feed; <em>Risk profile related to production and consumption of insects as food
            and feed</em> (2015) and subsequent updates.
          </li>
          <li>
            Olivry T, Bizikova P. <em>A systematic review of the evidence of reduced
            allergenicity and clinical benefit of food hydrolysates in dogs with cutaneous
            adverse food reactions</em>. Veterinary Dermatology (2010) and subsequent reviews.
          </li>
        </ul>
        <p style={{ fontSize: '13px', color: 'var(--brand-text-light)', marginTop: '24px' }}>
          PetFood.com is reference material. We do not provide individualized veterinary advice.
          Diet selection for a specific animal — especially one with diagnosed food allergy,
          chronic disease, or a species-specific nutritional requirement — is a conversation for
          a licensed veterinarian and, where indicated, a board-certified veterinary
          nutritionist.
        </p>
      </div>
    </ArticleLayout>
  )
}

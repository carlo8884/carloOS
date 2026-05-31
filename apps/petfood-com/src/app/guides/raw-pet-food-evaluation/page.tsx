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
  title: 'Evaluating Raw Pet Food — A Reference',
  description:
    'Commercial raw vs home-prepared raw, HPP (High Pressure Processing), pathogen risk (Salmonella, Listeria, Campylobacter), the position of WSAVA / AVMA / AAHA / FDA CVM, the Stockman 2013 home-prep diet completeness data, and a harm-reduction framework.',
  path: '/guides/raw-pet-food-evaluation',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Evaluating Raw Pet Food — A Reference',
  description:
    'Reference page on commercial and home-prepared raw pet food — the category landscape, HPP treatment, pathogen risk, the WSAVA / AVMA / AAHA / FDA CVM positions, and a harm-reduction approach for owners who decide to feed raw despite the veterinary consensus.',
  url: 'https://petfood.com/guides/raw-pet-food-evaluation',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-05-29T00:00:00Z',
  modifiedAt: '2026-05-29T00:00:00Z',
})

export default function RawPetFoodEvaluationPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      hero={{
        title: 'Evaluating Raw Pet Food',
        subtitle:
          'Raw feeding is the most polarized topic in companion-animal nutrition. The major veterinary professional bodies — WSAVA, AVMA, AAHA, and FDA CVM — have all published formal statements cautioning against raw diets on the basis of pathogen risk to pets, to humans in the household, and (in the case of home-prepared raw) nutrient completeness. The owner community that feeds raw has its own substantial literature making the opposite case. This page summarizes the evidence honestly, distinguishes commercial raw from home-prepared raw, and outlines a harm-reduction framework for owners who decide to feed raw despite the veterinary consensus.',
        category: 'Diet Evaluation',
        publishedAt: 'May 2026',
        readTime: '17 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Guides' },
        { name: 'Evaluating Raw Pet Food', href: '/guides/raw-pet-food-evaluation' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The Category Landscape', href: '#landscape' },
              { label: 'Commercial Raw', href: '#commercial' },
              { label: 'HPP — High Pressure Processing', href: '#hpp' },
              { label: 'Pathogen Risk', href: '#pathogen' },
              { label: 'Home-Prepared Raw', href: '#home-prep' },
              { label: 'The Stockman 2013 Data', href: '#stockman' },
              { label: 'Veterinary Body Positions', href: '#vet-bodies' },
              { label: 'Human Household Risk', href: '#human-risk' },
              { label: 'Harm Reduction Framework', href: '#harm-reduction' },
              { label: 'Common Questions', href: '#faq' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Our Scoring Methodology', href: '/guides/methodology' },
              { label: 'AAFCO Completeness Explained', href: '/guides/aafco-completeness-explained' },
              { label: 'Grain-Free and DCM Risk', href: '/ingredients/grain-free-dcm-risk' },
              { label: 'Animal Protein Sources', href: '/ingredients/animal-protein-sources' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="raw-pet-food-evaluation"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <p>
          The owner asking whether to feed raw is usually asking two different questions at once:
          is raw nutritionally better, and is raw safe? Those questions have different answers,
          and the answers depend critically on whether the raw food in question is a commercial
          AAFCO-compliant raw product (often HPP-treated) or a home-prepared recipe assembled
          from grocery-store meat. Both forms exist, both are marketed as &quot;raw,&quot; and
          they are not interchangeable on the safety or completeness dimensions.
        </p>
        <p>
          This page approaches the topic the way our methodology requires: read the evidence,
          report it without spin, and offer a harm-reduction framework for owners who, after
          reading, still choose to feed raw. PetFood.com does not endorse raw feeding, does not
          condemn raw feeding, and does not pretend the veterinary consensus is settled when it
          is or unsettled when it is not.
        </p>

        <h2 id="landscape">The Category Landscape</h2>
        <p>
          Commercial raw pet food in the U.S. is a roughly $1B-and-growing segment as of 2025-2026,
          dominated by a handful of brands: Stella &amp; Chewy&apos;s (Cargill-owned since 2023),
          Primal Pet Foods, Instinct (Schell &amp; Kampeter), Open Farm, Vital Essentials, and
          Steve&apos;s Real Food among others. Product formats include frozen raw patties and
          nuggets, freeze-dried raw, refrigerated raw, and dehydrated raw. The most common dry-
          adjacent format is freeze-dried raw &quot;nuggets&quot; used either as a complete diet
          or as a kibble topper.
        </p>
        <p>
          Home-prepared raw is a separate category that includes recipes published under the BARF
          (Biologically Appropriate Raw Food) framework, recipes published by individual
          veterinary nutritionists for specific clinical contexts, recipes sourced from raw-
          feeding owner communities online, and ad-hoc recipes assembled by owners from internet
          guidance. The recipes range from carefully formulated and DACVN-supervised to ad-hoc
          and nutritionally inadequate.
        </p>
        <p>
          Both categories — commercial raw and home-prepared raw — share the &quot;raw&quot;
          label but differ on essentially every other dimension: AAFCO substantiation, pathogen-
          control treatment, nutrient profile verification, ingredient sourcing transparency,
          cost per kcal, and risk profile. The veterinary literature treats them separately and
          this page does the same.
        </p>

        <h2 id="commercial">Commercial Raw</h2>
        <p>
          Commercial raw products sold into the U.S. retail channel must (under AAFCO and state
          feed-control rules) carry an AAFCO nutritional adequacy statement and meet the
          corresponding nutrient profile. Most commercial raw brands substantiate via the
          formulation pathway rather than feeding trial, for the same reasons most premium dry
          brands do (cost, feasibility of the trial population). The leading commercial brands
          publish typical-analysis data, ingredient sourcing material, and corporate quality-
          control postures comparable in disclosure depth to mid-tier kibble brands.
        </p>
        <p>
          The substantive food-safety question for commercial raw is what (if any) pathogen
          reduction step the manufacturer applies. The options are: high pressure processing
          (HPP), test-and-hold (lot-level pathogen testing before release), irradiation (rare in
          this category), no kill step. The choice has major implications for finished-product
          pathogen risk.
        </p>

        <h2 id="hpp">HPP — High Pressure Processing</h2>
        <p>
          High Pressure Processing (HPP) is a non-thermal food-safety treatment that exposes
          packaged product to hydrostatic pressure of 400-600 megapascals for several minutes.
          The treatment inactivates most vegetative bacterial pathogens — Salmonella, Listeria
          monocytogenes, Campylobacter, pathogenic Escherichia coli — at log-reduction levels
          comparable to mild thermal pasteurization, without significant thermal denaturation
          of proteins. HPP does not inactivate bacterial spores (Clostridium botulinum,
          C. perfringens), and its efficacy against parasites and viruses varies by organism.
        </p>
        <p>
          HPP is the dominant pathogen-control treatment in U.S. commercial raw pet food. Stella
          &amp; Chewy&apos;s, Primal, Instinct, and several other major brands publish HPP usage
          on their consumer-facing material. From a published-evidence standpoint, HPP-treated
          commercial raw has a documented pathogen-control step; non-HPP commercial raw does
          not. The presence or absence of HPP is one of the most consequential pieces of
          information on a commercial raw label and is one of the first things to verify when
          evaluating a brand.
        </p>
        <p>
          A nuance the raw-feeding community sometimes raises: HPP is &quot;processing,&quot;
          and the central appeal of raw feeding for many owners is the absence of processing.
          That is a coherent philosophical position. The food-safety counterposition is that HPP
          is the difference between a finished product with documented log-reduction of
          Salmonella and one without, and that this difference matters to the dog, to the cat,
          and to the humans in the household.
        </p>

        <h2 id="pathogen">Pathogen Risk: The FDA CVM Surveillance Record</h2>
        <p>
          The U.S. Food and Drug Administration&apos;s Center for Veterinary Medicine has
          maintained a raw-pet-food surveillance program since 2010, with results published in
          the FDA CVM literature. The surveillance has consistently documented Salmonella and
          Listeria monocytogenes recovery from commercial raw pet food samples at higher
          prevalence than from comparator kibble products. The 2010-2012 FDA CVM raw-pet-food
          surveillance reported Salmonella in approximately 7-9% of raw pet food samples and
          Listeria monocytogenes in approximately 15-16% (the precise figures are published in
          the FDA CVM record and reflect the specific sample frame).
        </p>
        <p>
          The FDA CVM Recalls &amp; Withdrawals database documents recurring recalls of
          commercial raw pet food products for Salmonella, Listeria monocytogenes, and (less
          commonly) pathogenic Escherichia coli, across multiple brands over the past decade.
          The recall pattern is not concentrated in a single brand; it is a category-wide
          pattern. Brands that use HPP have recalls at lower frequency than non-HPP brands but
          are not recall-free.
        </p>
        <p>
          Published case-report literature documents clinical illness in dogs and cats fed raw
          diets — primarily acute gastroenteritis from Salmonella, less commonly invasive
          infection. The base-rate is lower than the surveillance-level pathogen recovery would
          predict, reflecting that healthy adult dogs and cats are more resistant to
          Salmonella-mediated illness than humans are, but the rate is not zero. The literature
          also documents asymptomatic Salmonella shedding by raw-fed dogs at higher prevalence
          than by kibble-fed dogs, which is the basis for the human-household risk discussed
          below.
        </p>

        <h2 id="home-prep">Home-Prepared Raw</h2>
        <p>
          Home-prepared raw covers a wide range of recipes. Some are formulated by board-
          certified veterinary nutritionists (DACVN diplomates of the American College of
          Veterinary Internal Medicine, Nutrition specialty) for specific patients with specific
          clinical contexts. Most are not. The mainstream raw-feeding community publishes recipes
          under the BARF framework (typically attributed to Ian Billinghurst) and the &quot;prey
          model&quot; framework (proportions of muscle meat, bone, and organ designed to
          approximate the whole-prey composition).
        </p>
        <p>
          The food-safety considerations for home-prepared raw are the same as for non-HPP
          commercial raw, with the addition that home preparation does not have a documented
          quality-control program, supplier verification, or finished-product testing. Grocery-
          store meat sold for human cooking is not pathogen-free; the cooking step in normal
          human use is the pathogen-control step. Eliminating that step transfers the food-
          safety responsibility entirely to the home preparer.
        </p>
        <p>
          The nutritional-completeness considerations are more concerning still and are
          quantified in the Stockman 2013 data discussed below.
        </p>

        <h2 id="stockman">The Stockman 2013 Data</h2>
        <p>
          Stockman J, Fascetti AJ, Kass PH, Larsen JA. <em>Evaluation of recipes of home-
          prepared maintenance diets for dogs</em>. Journal of the American Veterinary Medical
          Association (2013), 242(11):1500-1505. The Stockman team evaluated 200 recipes for
          home-prepared maintenance diets for adult dogs from textbooks, online sources, and
          pet care books. Of the 200 recipes evaluated against the AAFCO and NRC nutrient
          recommendations:
        </p>
        <ul>
          <li>
            All 200 recipes had at least one nutrient deficiency relative to AAFCO or NRC
            recommendations.
          </li>
          <li>
            190 of 200 recipes had multiple nutrient deficiencies.
          </li>
          <li>
            The most common deficiencies were zinc, choline, copper, EPA/DHA, vitamin D, and
            vitamin E.
          </li>
          <li>
            Recipes published by veterinarians performed better on average than recipes from
            other sources but still showed substantial deficiencies.
          </li>
          <li>
            Recipes attributed to veterinary nutritionists were the only category that
            consistently met AAFCO recommendations.
          </li>
        </ul>
        <p>
          The Stockman findings have been broadly reproduced in subsequent studies (Wilson et
          al., Pedrinelli et al., and others) covering home-prepared cat diets and home-prepared
          therapeutic diets. The consistent finding is that recipes from non-DACVN sources fail
          AAFCO completeness at very high rates. The implication for the home-prepared raw
          owner: the recipe matters enormously, and the only reliable recipes are those
          formulated by a board-certified veterinary nutritionist for the specific patient.
          Generic recipes from internet sources and BARF-framework guidance documents fall
          well short on completeness.
        </p>

        <h2 id="vet-bodies">Veterinary Professional Body Positions</h2>
        <p>
          The major North American and international veterinary professional bodies have
          published formal positions on raw feeding. The positions are aligned and unambiguous
          in their caution.
        </p>
        <ul>
          <li>
            <strong>World Small Animal Veterinary Association (WSAVA)</strong> — the Global
            Nutrition Committee has published guidance recommending against raw-meat-based
            diets for companion animals on the basis of pathogen risk to the animal, to the
            household, and (for home-prepared raw) nutritional inadequacy.
          </li>
          <li>
            <strong>American Veterinary Medical Association (AVMA)</strong> — the AVMA House
            of Delegates adopted a Policy on Raw or Undercooked Animal-Source Protein in Cat
            and Dog Diets (2012, reaffirmed periodically since), formally discouraging the
            feeding of raw or undercooked animal-source proteins to companion animals because
            of documented health risks to pets and humans.
          </li>
          <li>
            <strong>American Animal Hospital Association (AAHA)</strong> — has published
            guidance aligned with the AVMA position, citing pathogen-shedding risk and
            household-transmission concerns.
          </li>
          <li>
            <strong>U.S. Food and Drug Administration, Center for Veterinary Medicine
            (FDA CVM)</strong> — has published consumer-facing guidance on the risks of
            feeding raw pet food and on safe handling practices for owners who do feed raw.
            FDA CVM&apos;s position is informational and harm-reduction-oriented rather than
            prohibitive (as FDA does not regulate pet feeding choices), but the published
            risk material is unambiguous.
          </li>
          <li>
            <strong>Canadian Veterinary Medical Association (CVMA)</strong>,
            <strong> Australian Veterinary Association (AVA)</strong>, and the
            <strong> British Veterinary Association (BVA)</strong> have published comparable
            positions.
          </li>
        </ul>
        <p>
          Notably, the published positions are not univocal on the question of whether
          HPP-treated commercial raw is acceptable — some position statements treat all raw
          uniformly, while others draw the distinction. The relevant clinician-published
          opinion is therefore the treating veterinarian&apos;s, in the context of the specific
          patient and household.
        </p>

        <h2 id="human-risk">Human Household Risk</h2>
        <p>
          The under-discussed dimension of raw feeding is the risk to humans in the household,
          particularly to children under 5, adults over 65, pregnant women, and
          immunocompromised individuals. Raw-fed dogs and cats shed Salmonella, Listeria
          monocytogenes, and Campylobacter at higher rates than kibble-fed pets, and the
          surfaces in the home where the pet eats, sleeps, and grooms itself become potential
          fomites. Published case literature documents human Salmonella infection traced to
          raw-fed household pets.
        </p>
        <p>
          The CDC, FDA CVM, and a number of pediatric infectious-disease organizations have
          published guidance specifically targeting households with vulnerable members: where
          a household includes a child under 5, an adult over 65, a pregnant woman, or an
          immunocompromised individual (HIV/AIDS, chemotherapy, organ transplant, biologic
          immunosuppression for autoimmune disease), raw feeding is strongly contraindicated.
          This is a setting where the veterinary consensus is essentially unanimous and where
          the harm-reduction framework below does not adequately address the household risk.
        </p>

        <h2 id="harm-reduction">Harm Reduction for Owners Who Choose to Feed Raw</h2>
        <p>
          A subset of owners will read the evidence above and choose to feed raw anyway. For
          that subset, a harm-reduction framework is more useful than a prohibition. Our
          approach, consistent with the published FDA CVM safe-handling guidance and with the
          published positions of veterinary nutritionists who work with raw-feeding clients:
        </p>
        <ol>
          <li>
            <strong>Choose HPP-treated commercial raw over non-HPP and over home-prepared.</strong>{' '}
            The pathogen-control step matters. HPP-treated commercial raw is the option with
            the most documented food-safety treatment.
          </li>
          <li>
            <strong>Avoid raw feeding entirely if the household includes a vulnerable
            individual.</strong> Children under 5, adults over 65, pregnant women, and
            immunocompromised individuals are the populations for whom the published case
            literature documents transmission risk. This is not a precautionary recommendation;
            it is responsive to documented clinical outcomes.
          </li>
          <li>
            <strong>If feeding home-prepared raw, use a DACVN-formulated recipe for the
            specific patient.</strong> The Stockman 2013 data and subsequent literature
            demonstrate that non-DACVN recipes fail AAFCO completeness at near-universal
            rates. A DACVN consultation is a one-time cost that pays for itself in reduced
            risk of clinical nutritional deficiency over years of feeding.
          </li>
          <li>
            <strong>Handle raw pet food as you would handle raw poultry for human
            cooking.</strong> Separate cutting boards and utensils, hand washing before and
            after, surface disinfection with a 1:10 bleach solution (or equivalent
            quaternary ammonium product), gloves for owners with cuts or open skin.
            Refrigerate at &lt;40°F (4°C); freeze for long-term storage; thaw in the
            refrigerator, not on the counter.
          </li>
          <li>
            <strong>Wash the pet&apos;s feeding bowl after every meal.</strong> Hot water and
            dish detergent, daily. The fed-from-bowl is a documented fomite in the case
            literature.
          </li>
          <li>
            <strong>Monitor the pet clinically.</strong> Gastrointestinal upset, weight loss,
            coat changes, lethargy, and appetite changes are signals that warrant veterinary
            evaluation. Annual bloodwork and dietary review with the treating veterinarian.
          </li>
          <li>
            <strong>Transition gradually if switching from kibble.</strong> A 7-10 day stepped
            transition reduces gastrointestinal upset and is the same protocol that applies
            to any diet change.
          </li>
          <li>
            <strong>Cross-reference our{' '}
            <a href="/ingredients/grain-free-dcm-risk">grain-free and DCM page</a> if your
            dog is in a DCM-predisposed breed.</strong> Some raw formulations use legume-heavy
            carbohydrate matrices that share the formulation pattern named in the FDA CVM
            DCM investigation. The dietary attributes that drew FDA CVM attention are not
            unique to dry kibble.
          </li>
        </ol>

        <h2 id="faq">Common Questions</h2>
        <p><strong>Is raw &quot;more natural&quot; than kibble?</strong></p>
        <p>
          The naturalistic argument — that dogs and cats evolved on raw whole prey and therefore
          do best on raw whole prey — is intuitive but oversimplified. Modern dogs descend from
          a 15,000-30,000-year domestication process that included substantial dietary
          adaptation, including expanded amylase gene copy numbers that increase starch
          digestion in most modern dogs. Modern cats are closer to their ancestral diet but
          still eat in a household environment that is itself unnatural relative to their
          ancestral foraging context. The relevant question is not whether raw is more natural
          but whether the specific raw diet being fed meets the animal&apos;s actual
          nutritional requirements safely.
        </p>
        <p><strong>Does HPP destroy the &quot;benefits&quot; of raw?</strong></p>
        <p>
          HPP does not significantly denature most proteins, does not heat the product, and does
          not appreciably reduce vitamin content at typical processing pressures. The
          measurable nutritional change from HPP at use-pressures is small. The pathogen-
          control benefit is substantial. The trade-off favors HPP on the published evidence.
        </p>
        <p><strong>My dog has been on raw for years with no issues. Doesn&apos;t that mean it&apos;s safe?</strong></p>
        <p>
          The absence of an obvious adverse outcome in an individual animal is not the same as
          population-level safety. Many raw-fed dogs do well; some develop clinical issues
          attributable to the diet; the household-transmission risk is independent of whether
          the dog itself shows clinical illness. Individual experience is real but does not
          settle the population-level question.
        </p>

        <h2 id="sources">Sources</h2>
        <ul>
          <li>
            World Small Animal Veterinary Association (WSAVA) Global Nutrition Committee.
            <em> Recommendations on Selecting Pet Foods</em>; <em>Global Nutrition Guidelines</em>;
            guidance on raw-meat-based diets.
          </li>
          <li>
            American Veterinary Medical Association. <em>AVMA Policy on Raw or Undercooked
            Animal-Source Protein in Cat and Dog Diets</em> (2012, reaffirmed periodically).
          </li>
          <li>
            American Animal Hospital Association. Published position statements on raw feeding;
            AAHA Nutritional Assessment Guidelines.
          </li>
          <li>
            U.S. Food and Drug Administration, Center for Veterinary Medicine. <em>Get the
            Facts! Raw Pet Food Diets can be Dangerous to You and Your Pet</em>; raw pet food
            surveillance studies (2010-2012 and subsequent); <em>Recalls, Market Withdrawals
            and Safety Alerts</em> database (Animal &amp; Veterinary).
          </li>
          <li>
            Stockman J, Fascetti AJ, Kass PH, Larsen JA. <em>Evaluation of recipes of home-
            prepared maintenance diets for dogs</em>. Journal of the American Veterinary
            Medical Association (2013), 242(11):1500-1505.
          </li>
          <li>
            Finley R, Reid-Smith R, Weese JS. <em>Human health implications of Salmonella-
            contaminated natural pet treats and raw pet food</em>. Clinical Infectious Diseases
            (2006); Finley R, Ribble C, Aramini J, et al. <em>The risk of salmonellae
            shedding by dogs fed Salmonella-contaminated commercial raw food diets</em>.
            Canadian Veterinary Journal (2007), 48(1):69-75.
          </li>
          <li>
            Centers for Disease Control and Prevention. Guidance on Salmonella, Listeria, and
            Campylobacter transmission in households with pets; pet-associated zoonotic
            infection surveillance.
          </li>
          <li>
            Pedrinelli V, Gomes M de OS, Carciofi AC. <em>Analysis of recipes of home-prepared
            diets for dogs and cats</em>. Journal of Nutritional Science (2017) and subsequent
            replications of the Stockman methodology.
          </li>
          <li>
            Freeman LM, Chandler ML, Hamper BA, Weeth LP. <em>Current knowledge about the
            risks and benefits of raw meat-based diets for dogs and cats</em>. Journal of the
            American Veterinary Medical Association (2013), 243(11):1549-1558.
          </li>
        </ul>
        <p style={{ fontSize: '13px', color: 'var(--brand-text-light)', marginTop: '24px' }}>
          PetFood.com is reference material. We do not provide individualized veterinary advice
          and we do not endorse or condemn raw feeding. The decision to feed raw is one for
          the owner and the treating veterinarian, made on the basis of the published evidence,
          the specific household context, and the specific animal. Households with
          immunocompromised members, infants, or elderly individuals should treat the published
          household-transmission literature as a hard contraindication.
        </p>
      </div>
    </ArticleLayout>
  )
}

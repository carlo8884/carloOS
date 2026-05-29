import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petsupplies',
  title: 'Editorial Standards — How We Review',
  description:
    'PetSupplies.com editorial standards: scoring methodology, conflict-of-interest policy, FTC affiliate disclosure, and corrections process.',
  path: '/editorial-standards',
})

export default function EditorialStandardsPage() {
  return (
    <div className="px-container sm:px-container-sm py-16 max-w-content mx-auto">
      <nav className="text-xs text-brand-text-light flex gap-2 mb-8">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid">Editorial Standards</span>
      </nav>

      <h1 className="font-display font-black text-brand-dark text-4xl tracking-tight mb-3">
        Editorial Standards
      </h1>
      <p className="text-base text-brand-text-light mb-10">
        How PetSupplies.com researches, scores, and updates product comparisons.
      </p>

      <div className="carloOS-article">
        <h2>What PetSupplies.com Is</h2>
        <p>
          PetSupplies.com is an independent comparison engine for pet products — dog food, cat
          litter, fish tanks, reptile enclosures, bird cages, GPS trackers, and 30+ other
          categories. We publish editorial rankings drawn from manufacturer specifications,
          published clinical evidence where it exists (WSAVA, VOHC, peer-reviewed veterinary
          journals), industry recall and reliability records, and aggregated owner feedback.
        </p>
        <p>
          We are not a veterinary practice. We do not employ DVMs as marketing credentials and we
          do not present articles as &quot;reviewed by&quot; a veterinarian we do not actually consult on
          a per-article basis. For specific medical or behavioral advice about your pet, please
          consult your own veterinarian.
        </p>

        <h2>How We Score Products</h2>
        <p>
          Every product is rated on a 0-10 editorial score that aggregates the following
          criteria:
        </p>
        <ul>
          <li>
            <strong>Manufacturing transparency.</strong> For consumables (food, supplements), we
            apply WSAVA criteria — board-certified ACVN nutritionist on staff, AAFCO feeding
            trials, owned manufacturing rather than co-packing, published nutrient analyses on
            request. Brands meeting all four score higher.
          </li>
          <li>
            <strong>Third-party verification where applicable.</strong> For dental products, the
            VOHC Accepted seal. For supplements, the NASC Quality Seal. For air-cargo pet
            carriers, IATA compliance. For vehicle safety harnesses, independent crash-testing
            (Center for Pet Safety).
          </li>
          <li>
            <strong>Clinical evidence base.</strong> Where peer-reviewed published evidence exists
            (Big Barker dog beds, omega-3 for arthritis, Hill&apos;s Prescription Diet k/d for CKD),
            that evidence is weighted heavily. We cite the published source.
          </li>
          <li>
            <strong>Build quality and reliability.</strong> Documented failure rates, warranty
            terms, customer-service response, and longevity reports from established hobbyist
            communities (fishkeeping forums, reptile-welfare organizations, breed clubs).
          </li>
          <li>
            <strong>Value relative to alternatives.</strong> Price-per-month-of-use, not absolute
            price. A $300 bed that lasts 8 years is better value than a $60 bed that flattens in
            a year.
          </li>
        </ul>

        <h2>What We Don&apos;t Do</h2>
        <ul>
          <li>
            <strong>We do not claim hands-on testing we have not done.</strong> We use
            third-person framing — &quot;reviews indicate,&quot; &quot;compared to alternatives,&quot;
            &quot;the published evidence shows&quot; — instead of fabricated &quot;I tested this for 6 weeks&quot;
            claims that are common in the comparison-affiliate genre.
          </li>
          <li>
            <strong>We do not fabricate DVM credentials.</strong> Articles are not signed off
            by a licensed veterinarian unless that veterinarian has actually reviewed the
            article. We do not use a stock DVM photo or generic &quot;reviewed by Dr. ___&quot; line
            to manufacture authority.
          </li>
          <li>
            <strong>We do not let commission rates influence rankings.</strong> Editorial
            decisions are made before affiliate links are added. Products with no affiliate
            program are included when they are the best fit (the modern reptile-keeping
            community&apos;s strong preference for PVC enclosures from Animal Plastics is included
            even though Animal Plastics has no affiliate program).
          </li>
        </ul>

        <h2>Affiliate Independence</h2>
        <p>
          PetSupplies.com earns commissions through affiliate programs including Amazon
          Associates, Chewy, and ShareASale-affiliated retailers. To keep editorial decisions
          clean of commercial pressure:
        </p>
        <ul>
          <li>Product rankings are decided before affiliate links are added, not after.</li>
          <li>Commission rates do not determine which products are recommended.</li>
          <li>
            We include products in comparisons even when they pay no affiliate commission, when
            they are the best fit for the category.
          </li>
          <li>
            We disclose affiliate relationships on every page that contains affiliate links —
            via a banner at the top of the page (FTC compliance) and a longer disclosure in the
            site footer.
          </li>
          <li>
            We do not accept paid product placement, sponsored rankings, or paid &quot;best of&quot;
            list inclusion under any circumstance.
          </li>
        </ul>

        <h2>FTC Affiliate Disclosure</h2>
        <p>
          PetSupplies.com participates in affiliate marketing programs including Amazon
          Associates, Chewy, and ShareASale. When you purchase through links on this site we may
          earn a commission at no additional cost to you. Editorial decisions on rankings and
          product inclusion are made independently of these relationships. Content is for
          general information only and is not a substitute for advice from a licensed
          veterinarian.
        </p>

        <h2>Corrections</h2>
        <p>
          If you find a factual error in a ranking, specification, or buyer&apos;s guide, please
          contact us with the specific claim and a source for the correction. We aim to review
          correction requests within 5 business days. Substantive corrections are noted on the
          page along with the &quot;updated&quot; date.
        </p>

        <h2>Conflict of Interest Policy</h2>
        <p>
          Editorial staff are not permitted to hold financial positions in companies whose
          products they review. Where a familial or close-personal relationship would create a
          conflict, that staff member recuses from the relevant category. Sponsorship
          relationships are documented, separated from editorial, and disclosed in any post-link
          disclosure.
        </p>

        <h2>Content Updates</h2>
        <p>
          Pet-supply markets change quickly — products are discontinued, recipes are
          reformulated, new entrants displace category leaders. We re-review every category at
          least annually and update rankings when category leadership genuinely shifts. The
          &quot;updated&quot; date on each category page reflects the most recent substantive
          revision.
        </p>
      </div>

      <div className="mt-12 pt-8 border-t border-brand-border flex gap-6 text-sm">
        <Link href="/legal/privacy-policy" className="text-brand-primary hover:underline">Privacy Policy</Link>
        <Link href="/legal/terms" className="text-brand-primary hover:underline">Terms of Use</Link>
        <Link href="/legal/affiliate-disclosure" className="text-brand-primary hover:underline">Affiliate Disclosure</Link>
      </div>
    </div>
  )
}

import Link from 'next/link'
import {
  directoryPlaces,
  type DirectoryListing,
  type DirectoryPage,
} from '@carloOS/config/directory'

export function DirectoryHub({
  siteName,
  noun,
  page,
  placePath = '/directory',
  allListings,
}: {
  siteName: string
  noun: string
  page: DirectoryPage
  placePath?: string
  allListings?: DirectoryListing[]
}) {
  const empty = page.total === 0
  const featured = page.page === 1 && !page.query ? page.featured : []
  const places = allListings && allListings.length > 0 ? directoryPlaces(allListings) : null

  return (
    <div className="px-container-sm sm:px-container py-12 max-w-5xl mx-auto">
      <p className="text-sm text-brand-text-mid leading-relaxed mb-8">
        Unclaimed license-board stubs on {siteName}. A listing appears only
        after a public source URL and license number are imported. No phone,
        email, or star rating is invented. {siteName} does not certify or
        employ anyone listed here.
      </p>

      <form method="get" action={placePath} className="mb-10 flex flex-wrap gap-3">
        <label className="sr-only" htmlFor="directory-q">
          Search {noun}
        </label>
        <input
          id="directory-q"
          name="q"
          type="search"
          defaultValue={page.query}
          placeholder={`Search by name, city, or license`}
          className="flex-1 min-w-[220px] border border-brand-border rounded px-3 py-2 text-sm bg-brand-white"
        />
        <button
          type="submit"
          className="bg-brand-primary text-white text-sm font-bold px-4 py-2 rounded border-0"
        >
          Search
        </button>
      </form>

      {places && places.states.length > 0 && placePath === '/directory' && (
        <nav className="mb-10" aria-label="Browse by state">
          <h2 className="font-display text-xl font-bold text-brand-dark mb-3">Browse by state</h2>
          <ul className="list-none m-0 p-0 flex flex-wrap gap-2">
            {places.states.map((state) => (
              <li key={state.slug}>
                <Link
                  href={`/directory/${state.slug}`}
                  className="inline-block border border-brand-border rounded px-3 py-1 text-sm no-underline text-brand-dark hover:border-brand-primary"
                >
                  {state.name}
                  <span className="text-brand-text-light ml-1">{state.count}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {places && places.cities.length > 0 && placePath.split('/').filter(Boolean).length === 2 && (
        <nav className="mb-10" aria-label="Browse by city">
          <h2 className="font-display text-xl font-bold text-brand-dark mb-3">Browse by city</h2>
          <ul className="list-none m-0 p-0 flex flex-wrap gap-2">
            {places.cities.map((city) => (
              <li key={`${city.stateSlug}-${city.citySlug}`}>
                <Link
                  href={`/directory/${city.stateSlug}/${city.citySlug}`}
                  className="inline-block border border-brand-border rounded px-3 py-1 text-sm no-underline text-brand-dark hover:border-brand-primary"
                >
                  {city.cityName}
                  <span className="text-brand-text-light ml-1">{city.count}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {empty ? (
        <div className="border border-brand-border rounded-lg p-6 bg-brand-surface">
          <h2 className="font-display text-xl font-bold text-brand-dark mt-0 mb-2">
            No listings imported yet
          </h2>
          <p className="text-sm text-brand-text-mid m-0">
            The directory pack for this site has not been loaded. Chief of Staff
            adds <code>directory-packs/*-national.csv</code>; then{' '}
            <code>npx tsx scripts/import-directory.ts</code> writes unclaimed
            stubs. This page stays empty on purpose until those files exist.
          </p>
        </div>
      ) : (
        <>
          {featured.length > 0 && (
            <section className="mb-10">
              <h2 className="font-display text-xl font-bold text-brand-dark mb-4">
                Featured
              </h2>
              <ul className="list-none m-0 p-0 grid sm:grid-cols-2 gap-3">
                {featured.map((row) => (
                  <li key={row.slug}>
                    <ListingLink row={row} />
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section>
            <h2 className="font-display text-xl font-bold text-brand-dark mb-4">
              {page.query ? `Results for “${page.query}”` : `All ${noun}`}
              <span className="text-sm font-normal text-brand-text-light ml-2">
                {page.total} listings · page {page.page} of {page.totalPages}
              </span>
            </h2>
            <ul className="list-none m-0 p-0 flex flex-col gap-2">
              {page.listings.map((row) => (
                <li key={row.slug}>
                  <ListingLink row={row} />
                </li>
              ))}
            </ul>
            <Pagination page={page} placePath={placePath} />
          </section>
        </>
      )}
    </div>
  )
}

export function DirectoryDetail({
  siteName,
  listing,
}: {
  siteName: string
  listing: DirectoryListing
}) {
  return (
    <div className="px-container-sm sm:px-container py-12 max-w-3xl mx-auto">
      <p className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">
        Unclaimed stub · {listing.category || 'License record'}
      </p>
      <h1 className="font-display font-bold text-brand-dark tracking-tight mb-3" style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>
        {listing.display_name}
      </h1>
      <p className="text-brand-text-mid mb-6">
        {[listing.city, listing.state].filter(Boolean).join(', ') || 'Location not in source file'}
      </p>
      <dl className="grid gap-3 text-sm mb-8">
        <div>
          <dt className="text-2xs uppercase tracking-wide text-brand-text-light">License number</dt>
          <dd className="m-0 font-semibold text-brand-dark">{listing.license_number}</dd>
        </div>
        <div>
          <dt className="text-2xs uppercase tracking-wide text-brand-text-light">Source</dt>
          <dd className="m-0">
            <a href={listing.source_url} rel="nofollow noopener noreferrer" className="text-brand-primary">
              Public registry record
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-2xs uppercase tracking-wide text-brand-text-light">Claimed</dt>
          <dd className="m-0">No. This is an unclaimed import stub. {siteName} did not contact this licensee.</dd>
        </div>
      </dl>
      <p className="text-xs text-brand-text-light">
        No phone, email, or rating is published here. Those fields are omitted on purpose.
      </p>
      <p className="mt-6">
        <Link href="/directory" className="text-sm font-semibold text-brand-primary no-underline hover:underline">
          ← Back to directory
        </Link>
      </p>
    </div>
  )
}

function ListingLink({ row }: { row: DirectoryListing }) {
  const place = [row.city, row.state].filter(Boolean).join(', ')
  return (
    <Link
      href={`/directory/${row.slug}`}
      className="block border border-brand-border rounded-lg px-4 py-3 no-underline hover:border-brand-primary bg-brand-white"
    >
      <div className="font-semibold text-brand-dark">{row.display_name}</div>
      <div className="text-xs text-brand-text-mid">
        {place}
        {row.category ? ` · ${row.category}` : ''}
        {' · '}unclaimed
      </div>
    </Link>
  )
}

function Pagination({ page, placePath = '/directory' }: { page: DirectoryPage; placePath?: string }) {
  if (page.totalPages <= 1) return null
  const prev = page.page > 1 ? page.page - 1 : null
  const next = page.page < page.totalPages ? page.page + 1 : null
  const q = page.query ? `&q=${encodeURIComponent(page.query)}` : ''
  return (
    <nav className="flex gap-4 mt-8 text-sm" aria-label="Directory pages">
      {prev ? (
        <Link href={`${placePath}?page=${prev}${q}`} className="text-brand-primary no-underline hover:underline">
          ← Previous
        </Link>
      ) : (
        <span className="text-brand-text-light">← Previous</span>
      )}
      {next ? (
        <Link href={`${placePath}?page=${next}${q}`} className="text-brand-primary no-underline hover:underline">
          Next →
        </Link>
      ) : (
        <span className="text-brand-text-light">Next →</span>
      )}
    </nav>
  )
}

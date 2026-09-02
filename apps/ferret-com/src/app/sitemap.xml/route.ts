import { sitemapIndexResponse } from '@carloOS/config/directory'
import directoryListings from '../../data/directory-listings.json'

export function GET() {
  return sitemapIndexResponse('https://ferret.com', directoryListings)
}

import { NextResponse } from 'next/server'
import { searchApiBody, type SearchEntry } from '@carloOS/ui'
import index from '../../../data/search-index.json'

export function GET(request: Request) {
  return NextResponse.json(searchApiBody(index.entries as SearchEntry[], request.url))
}

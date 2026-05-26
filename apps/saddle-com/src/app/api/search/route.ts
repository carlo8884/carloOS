import { NextRequest, NextResponse } from "next/server"
import { searchPosts } from "@carloOS/db"
import type { SiteId } from "@carloOS/config"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const q = searchParams.get("q")?.trim()
  const siteId = (searchParams.get("site") ?? process.env.NEXT_PUBLIC_SITE_ID ?? "dog-com") as SiteId
  const limit = Math.min(parseInt(searchParams.get("limit") ?? "8", 10), 20)

  if (!q || q.length < 2) {
    return NextResponse.json({ results: [], query: q ?? "" })
  }

  try {
    const posts = await searchPosts(siteId, q, limit)
    return NextResponse.json({
      results: posts.map(p => ({
        title: p.title,
        excerpt: p.excerpt ?? "",
        path: p.path,
        type: p.content_type ?? "article",
      })),
      query: q,
    })
  } catch {
    return NextResponse.json({ results: [], query: q, error: "Search unavailable" })
  }
}
